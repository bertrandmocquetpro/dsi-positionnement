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
    description: "Compréhension de l’environnement ESR, des enjeux institutionnels, réglementaires, financiers et stratégiques."
  },
  CM: {
    title: "Management",
    referentiel: "CM1 à CM4",
    description: "Animation des équipes, développement des compétences, organisation du travail et accompagnement du changement."
  },
  CT: {
    title: "Technique",
    referentiel: "CT1 à CT6",
    description: "Pilotage des infrastructures, applications, architectures, données, sécurité, accessibilité et continuité de service."
  },
  CG: {
    title: "Conduite de projet",
    referentiel: "CG1 à CG3",
    description: "Gouvernance, pilotage de portefeuille, gestion des risques, arbitrage des priorités et conduite du changement."
  },
  QP: {
    title: "Qualités personnelles",
    referentiel: "QP1 à QP10",
    description: "Discernement, écoute, communication, sens politique, responsabilité, résilience et capacité d’adaptation."
  }
};

let currentQuestion = 0;
let answers = {};
let radarChart = null;

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");

const profileTitle = document.getElementById("profileTitle");
const profileSummary = document.getElementById("profileSummary");
const globalScore = document.getElementById("globalScore");
const recommendations = document.getElementById("recommendations");
const axisDetails = document.getElementById("axisDetails");

const pdfBtn = document.getElementById("pdfBtn");
const csvBtn = document.getElementById("csvBtn");
const jsonBtn = document.getElementById("jsonBtn");

startBtn.addEventListener("click", startTest);
prevBtn.addEventListener("click", previousQuestion);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => location.reload());

pdfBtn.addEventListener("click", exportPDF);
csvBtn.addEventListener("click", exportCSV);
jsonBtn.addEventListener("click", exportJSON);

function startTest() {
  if (typeof QUESTIONS === "undefined") {
    alert("Erreur : le fichier questions.js n’est pas chargé.");
    return;
  }

  currentQuestion = 0;
  answers = {};

  intro.classList.add("hidden");
  quiz.classList.remove("hidden");
  results.classList.add("hidden");

  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];

  progressText.textContent = `Question ${currentQuestion + 1} / ${QUESTIONS.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`;

  questionTitle.textContent = `${q.competence} — ${AXES[q.domaine]}`;
  questionText.textContent = q.question;

  answersBox.innerHTML = q.answers.map((answer, index) => `
    <label class="answer">
      <input type="radio" name="answer" value="${index}" ${answers[q.id] === index ? "checked" : ""}>
      <span>${answer.text}</span>
    </label>
  `).join("");

  document.querySelectorAll("input[name='answer']").forEach(input => {
    input.addEventListener("change", event => {
      answers[q.id] = Number(event.target.value);
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
    const selectedAnswer = q.answers[answers[q.id]];

    Object.keys(AXES).forEach(axis => {
      const maxForQuestion = Math.max(...q.answers.map(a => a.score?.[axis] || 0));
      maxScores[axis] += maxForQuestion;
      rawScores[axis] += selectedAnswer?.score?.[axis] || 0;
    });
  });

  const percentages = {};

  Object.keys(AXES).forEach(axis => {
    percentages[axis] = maxScores[axis]
      ? Math.round((rawScores[axis] / maxScores[axis]) * 100)
      : 0;
  });

  return percentages;
}

function showResults() {
  quiz.classList.add("hidden");
  results.classList.remove("hidden");

  const scores = calculateScores();
  const average = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length
  );

  globalScore.textContent = average;
  profileTitle.textContent = "Profil de positionnement DSI-DSIN";
  profileSummary.textContent =
    "Ce résultat constitue une aide à la lecture de votre positionnement professionnel. Il ne s’agit pas d’une évaluation certificative.";

  renderRadar(scores);
  renderDetails(scores);
  renderRecommendations(scores);
}

function renderRadar(scores) {
  const canvas = document.getElementById("radarChart");

  if (radarChart) {
    radarChart.destroy();
  }

  radarChart = new Chart(canvas, {
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
      }
    }
  });
}

function renderDetails(scores) {
  axisDetails.innerHTML = Object.keys(AXES_DESCRIPTIONS).map(axis => `
    <div class="axis-card">
      <h4>${AXES_DESCRIPTIONS[axis].title} — ${AXES_DESCRIPTIONS[axis].referentiel}</h4>
      <p><strong>Score : ${scores[axis]}%</strong></p>
      <p>${AXES_DESCRIPTIONS[axis].description}</p>
    </div>
  `).join("");
}

function renderRecommendations(scores) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const strongest = sorted[0];
  const weakest = sorted[sorted.length - 1];

  recommendations.innerHTML = `
    <div class="recommendation">
      <h3>Point d’appui principal</h3>
      <p><strong>${AXES[strongest[0]]}</strong> : ${strongest[1]}%</p>
    </div>

    <div class="recommendation">
      <h3>Axe prioritaire de développement</h3>
      <p><strong>${AXES[weakest[0]]}</strong> : ${weakest[1]}%</p>
    </div>

    <div class="recommendation">
      <h3>Usage conseillé</h3>
      <p>
        Utilisez ces résultats pour objectiver un positionnement
        et construire un parcours de formation adapté.
      </p>
    </div>
  `;
}

function getResultsPayload() {
  const scores = calculateScores();

  return {
    date: new Date().toISOString(),
    referentiel: "DSI-DSIN",
    source: "https://services.dgesip.fr/fichiers/referentiel_livret_DSI-DSIN.PDF",
    scores,
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
  const blob = new Blob([JSON.stringify(getResultsPayload(), null, 2)], {
    type: "application/json"
  });

  downloadBlob(blob, "positionnement-dsi-dsin.json");
}

function exportCSV() {
  const scores = calculateScores();

  let csv = "Domaine;Référentiel;Score;Description\n";

  Object.keys(AXES_DESCRIPTIONS).forEach(axis => {
    csv += [
      AXES_DESCRIPTIONS[axis].title,
      AXES_DESCRIPTIONS[axis].referentiel,
      `${scores[axis]}%`,
      AXES_DESCRIPTIONS[axis].description
    ].map(v => `"${String(v).replaceAll('"', '""')}"`).join(";") + "\n";
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
