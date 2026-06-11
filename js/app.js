const AXES = {
  C: "Connaissances",
  CM: "Management",
  CT: "Technique",
  CG: "Conduite de projet",
  QP: "Qualités personnelles"
};
const AXES_DESCRIPTIONS = {
  C: {
    title: "Connaissances",
    referentiel: "C1 à C6",
    description:
      "Capacité à comprendre l’environnement institutionnel de l’enseignement supérieur et de la recherche, les enjeux stratégiques, réglementaires, budgétaires et organisationnels liés au numérique."
  },
  CM: {
    title: "Management",
    referentiel: "CM1 à CM4",
    description:
      "Capacité à organiser, animer, accompagner et faire évoluer les équipes de la DSI dans un contexte de transformation, de tension sur les compétences et de coopération avec les métiers."
  },
  CT: {
    title: "Technique",
    referentiel: "CT1 à CT6",
    description:
      "Capacité à piloter les architectures, infrastructures, applications, données, interopérabilité, sécurité, accessibilité et continuité de service du système d’information."
  },
  CG: {
    title: "Conduite de projet",
    referentiel: "CG1 à CG3",
    description:
      "Capacité à piloter des projets numériques complexes, à organiser la gouvernance, à arbitrer les priorités, à gérer les risques et à conduire le changement."
  },
  QP: {
    title: "Qualités personnelles",
    referentiel: "QP1 à QP10",
    description:
      "Capacité à adopter une posture professionnelle adaptée : discernement, écoute, communication, résistance au stress, sens politique, responsabilité et capacité à apprendre."
  }
};
let currentQuestion = 0;
let answers = {};
let radarChart = null;

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const questionContainer = document.getElementById("questionContainer");
const progressText = document.getElementById("progressText");
const resultsSection = document.getElementById("resultsSection");
const detailTable = document.getElementById("detailTable");

startBtn.addEventListener("click", startTest);
prevBtn.addEventListener("click", previousQuestion);
nextBtn.addEventListener("click", nextQuestion);

function startTest() {
  currentQuestion = 0;
  answers = {};
  resultsSection.style.display = "none";
  questionContainer.style.display = "block";
  prevBtn.disabled = true;
  nextBtn.disabled = false;
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];

  progressText.textContent = `Question ${currentQuestion + 1} / ${QUESTIONS.length}`;

  questionContainer.innerHTML = `
    <div class="question-card">
      <p class="competence"><strong>${q.competence}</strong> — ${AXES[q.domaine]}</p>
      <h3>${q.question}</h3>
      <div class="answers">
        ${q.answers.map((a, index) => `
          <label class="answer">
            <input type="radio" name="answer" value="${index}" 
              ${answers[q.id] === index ? "checked" : ""}>
            ${a.text}
          </label>
        `).join("")}
      </div>
    </div>
  `;

  document.querySelectorAll("input[name='answer']").forEach(input => {
    input.addEventListener("change", e => {
      answers[q.id] = Number(e.target.value);
    });
  });

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent = currentQuestion === QUESTIONS.length - 1 ? "Voir les résultats" : "Suivant";
}

function nextQuestion() {
  const q = QUESTIONS[currentQuestion];

  if (answers[q.id] === undefined) {
    alert("Veuillez choisir une réponse avant de continuer.");
    return;
  }

  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function calculateScores() {
  const rawScores = { C: 0, CM: 0, CT: 0, CG: 0, QP: 0 };
  const maxScores = { C: 0, CM: 0, CT: 0, CG: 0, QP: 0 };

  QUESTIONS.forEach(q => {
    const selectedIndex = answers[q.id];
    const selectedAnswer = q.answers[selectedIndex];

    Object.keys(AXES).forEach(axis => {
      const values = q.answers.map(a => a.score?.[axis] || 0);
      maxScores[axis] += Math.max(...values);

      if (selectedAnswer?.score?.[axis]) {
        rawScores[axis] += selectedAnswer.score[axis];
      }
    });
  });

  const percentages = {};

  Object.keys(AXES).forEach(axis => {
    percentages[axis] = maxScores[axis] > 0
      ? Math.round((rawScores[axis] / maxScores[axis]) * 100)
      : 0;
  });

  return { rawScores, maxScores, percentages };
}

function showResults() {
  questionContainer.style.display = "none";
  resultsSection.style.display = "block";
  prevBtn.disabled = true;
  nextBtn.disabled = true;

  const { percentages } = calculateScores();

  renderRadar(percentages);
  renderDetails(percentages);
}

function renderRadar(scores) {
  const ctx = document.getElementById("radarChart");

  if (radarChart) {
    radarChart.destroy();
  }

  radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: Object.values(AXES),
      datasets: [{
        label: "Positionnement DSI-DSIN",
        data: Object.keys(AXES).map(axis => scores[axis]),
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}

function renderDetails(scores) {
  detailTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Domaine</th>
          <th>Référentiel</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Connaissances</td>
          <td>C1 à C6</td>
          <td>${scores.C}%</td>
        </tr>
        <tr>
          <td>Management</td>
          <td>CM1 à CM4</td>
          <td>${scores.CM}%</td>
        </tr>
        <tr>
          <td>Technique</td>
          <td>CT1 à CT6</td>
          <td>${scores.CT}%</td>
        </tr>
        <tr>
          <td>Conduite de projet</td>
          <td>CG1 à CG3</td>
          <td>${scores.CG}%</td>
        </tr>
        <tr>
          <td>Qualités personnelles</td>
          <td>QP1 à QP10</td>
          <td>${scores.QP}%</td>
        </tr>
      </tbody>
    </table>
  `;
}
