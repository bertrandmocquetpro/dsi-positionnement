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
      "Compréhension de l’environnement ESR, des enjeux institutionnels, réglementaires, financiers et stratégiques."
  },
  CM: {
    title: "Management",
    referentiel: "CM1 à CM4",
    description:
      "Animation des équipes, développement des compétences, organisation du travail et accompagnement du changement."
  },
  CT: {
    title: "Technique",
    referentiel: "CT1 à CT6",
    description:
      "Pilotage des infrastructures, applications, architectures, données, sécurité, accessibilité et continuité de service."
  },
  CG: {
    title: "Conduite de projet",
    referentiel: "CG1 à CG3",
    description:
      "Gouvernance, pilotage de portefeuille, gestion des risques, arbitrage des priorités et conduite du changement."
  },
  QP: {
    title: "Qualités personnelles",
    referentiel: "QP1 à QP10",
    description:
      "Discernement, écoute, communication, sens politique, responsabilité, résilience et capacité d’adaptation."
  }
};

let currentQuestion = 0;
let answers = {};
let radarChart = null;

const introSection = document.getElementById("introSection");
const testSection = document.getElementById("testSection");
const resultsSection = document.getElementById("resultsSection");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const questionContainer = document.getElementById("questionContainer");
const progressText = document.getElementById("progressText");
const detailTable = document.getElementById("detailTable");

const exportPdfBtn = document.getElementById("exportPdfBtn");
const exportCsvBtn = document.getElementById("exportCsvBtn");
const exportJsonBtn = document.getElementById("exportJsonBtn");

if (startBtn) startBtn.addEventListener("click", startTest);
if (prevBtn) prevBtn.addEventListener("click", previousQuestion);
if (nextBtn) nextBtn.addEventListener("click", nextQuestion);

if (exportPdfBtn) exportPdfBtn.addEventListener("click", exportPDF);
if (exportCsvBtn) exportCsvBtn.addEventListener("click", exportCSV);
if (exportJsonBtn) exportJsonBtn.addEventListener("click", exportJSON);

function startTest() {
  currentQuestion = 0;
  answers = {};

  if (introSection) introSection.style.display = "none";
  if (testSection) testSection.style.display = "block";
  if (resultsSection) resultsSection.style.display = "none";

  if (questionContainer) questionContainer.style.display = "block";
  if (prevBtn) prevBtn.disabled = true;
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.textContent = "Suivant";
  }

  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];

  if (!q) return;

  progressText.textContent = `Question ${currentQuestion + 1} / ${QUESTIONS.length}`;

  questionContainer.innerHTML = `
    <div class="question-card">
      <p class="competence">
        <strong>${q.competence}</strong> — ${AXES[q.domaine] || q.domaine}
      </p>

      <h3>${q.question}</h3>

      <div class="answers">
        ${q.answers.map((answer, index) => `
          <label class="answer">
            <input 
              type="radio" 
              name="answer" 
              value="${index}"
              ${answers[q.id] === index ? "checked" : ""}
            >
            <span>${answer.text}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `;

  document.querySelectorAll("input[name='answer']").forEach(input => {
    input.addEventListener("change", event => {
      answers[q.id] = Number(event.target.value);
    });
  });

  if (prevBtn) prevBtn.disabled = currentQuestion === 0;

  if (nextBtn) {
    nextBtn.textContent =
      currentQuestion === QUESTIONS.length - 1
        ? "Voir les résultats"
        : "Suivant";
  }
}

function nextQuestion() {
  const q = QUESTIONS[currentQuestion];

  if (!q) return;

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
  const rawScores = {};
  const maxScores = {};

  Object.keys(AXES).forEach(axis => {
    rawScores[axis] = 0;
    maxScores[axis] = 0;
  });

  QUESTIONS.forEach(q => {
    const selectedIndex = answers[q.id];
    const selectedAnswer = q.answers[selectedIndex];

    Object.keys(AXES).forEach(axis => {
      const possibleScores = q.answers.map(answer => {
        return answer.score && answer.score[axis] ? answer.score[axis] : 0;
      });

      const maxForQuestion = Math.max(...possibleScores);
      maxScores[axis] += maxForQuestion;

      if (
        selectedAnswer &&
        selectedAnswer.score &&
        selectedAnswer.score[axis]
      ) {
        rawScores[axis] += selectedAnswer.score[axis];
      }
    });
  });

  const percentages = {};

  Object.keys(AXES).forEach(axis => {
    percentages[axis] =
      maxScores[axis] > 0
        ? Math.round((rawScores[axis] / maxScores[axis]) * 100)
        : 0;
  });

  return {
    rawScores,
    maxScores,
    percentages
  };
}

function showResults() {
  if (testSection) testSection.style.display = "none";
  if (introSection) introSection.style.display = "none";
  if (resultsSection) resultsSection.style.display = "block";

  if (prevBtn) prevBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = true;

  const results = calculateScores();

  renderRadar(results.percentages);
  renderDetails(results.percentages);
}

function renderRadar(scores) {
  const canvas = document.getElementById("radarChart");

  if (!canvas) return;

  if (radarChart) {
    radarChart.destroy();
  }

  radarChart = new Chart(canvas, {
    type: "radar",
    data: {
      labels: Object.values(AXES),
      datasets: [
        {
          label: "Positionnement DSI-DSIN",
          data: Object.keys(AXES).map(axis => scores[axis]),
          fill: true
        }
      ]
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
  if (!detailTable) return;

  detailTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Domaine</th>
          <th>Référentiel</th>
          <th>Score</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${Object.keys(AXES_DESCRIPTIONS).map(axis => `
          <tr>
            <td><strong>${AXES_DESCRIPTIONS[axis].title}</strong></td>
            <td>${AXES_DESCRIPTIONS[axis].referentiel}</td>
            <td><strong>${scores[axis]}%</strong></td>
            <td>${AXES_DESCRIPTIONS[axis].description}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function getResultsPayload() {
  const results = calculateScores();

  return {
    date: new Date().toISOString(),
    referentiel: "DSI-DSIN",
    source: "https://services.dgesip.fr/fichiers/referentiel_livret_DSI-DSIN.PDF",
    scores: results.percentages,
    details: AXES_DESCRIPTIONS,
    answers: QUESTIONS.map(q => {
      const selectedIndex = answers[q.id];
      const selectedAnswer = q.answers[selectedIndex];

      return {
        id: q.id,
        competence: q.competence,
        domaine: q.domaine,
        question: q.question,
        answer: selectedAnswer ? selectedAnswer.text : null,
        score: selectedAnswer ? selectedAnswer.score : null
      };
    })
  };
}

function exportJSON() {
  const payload = getResultsPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json"
  });

  downloadBlob(blob, "positionnement-dsi-dsin.json");
}

function exportCSV() {
  const results = calculateScores();

  let csv = "Domaine;Référentiel;Score;Description\n";

  Object.keys(AXES_DESCRIPTIONS).forEach(axis => {
    csv += [
      AXES_DESCRIPTIONS[axis].title,
      AXES_DESCRIPTIONS[axis].referentiel,
      `${results.percentages[axis]}%`,
      AXES_DESCRIPTIONS[axis].description
    ]
      .map(value => `"${String(value).replaceAll('"', '""')}"`)
      .join(";") + "\n";
  });

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8"
  });

  downloadBlob(blob, "positionnement-dsi-dsin.csv");
}

function exportPDF() {
  window.print();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
