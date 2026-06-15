const REFERENTIEL = {
  C: {
    label: "Connaissances",
    refs: ["C1", "C2", "C3", "C4", "C5", "C6"]
  },
  CM: {
    label: "Management",
    refs: ["CM1", "CM2", "CM3", "CM4"]
  },
  CT: {
    label: "Technique",
    refs: ["CT1", "CT2", "CT3", "CT4", "CT5", "CT6"]
  },
  CG: {
    label: "Conduite de projet",
    refs: ["CG1", "CG2", "CG3"]
  },
  QP: {
    label: "Qualités personnelles",
    refs: ["QP1", "QP2", "QP3", "QP4", "QP5", "QP6", "QP7", "QP8", "QP9", "QP10"]
  }
};

const COMPETENCE_LABELS = {
  C1: "Environnement institutionnel ESR",
  C2: "Organisation et processus universitaires",
  C3: "Budget, achats et soutenabilité",
  C4: "Cadre juridique, RGPD et conformité",
  C5: "Données, stratégie numérique et usages",
  C6: "Mutualisation et écosystème ESR",

  CM1: "Organisation du travail",
  CM2: "Animation et accompagnement des équipes",
  CM3: "Développement des compétences",
  CM4: "Dialogue social et qualité de vie au travail",

  CT1: "Infrastructures et exploitation",
  CT2: "Applications et urbanisation",
  CT3: "Interopérabilité et architecture SI",
  CT4: "Sécurité et continuité",
  CT5: "Données et décisionnel",
  CT6: "Cloud, accessibilité et soutenabilité technique",

  CG1: "Gouvernance et cadrage des projets",
  CG2: "Arbitrage, risques et priorisation",
  CG3: "Conduite du changement",

  QP1: "Discernement et analyse",
  QP2: "Gestion du stress et de crise",
  QP3: "Courage managérial",
  QP4: "Adaptabilité",
  QP5: "Écoute",
  QP6: "Coopération",
  QP7: "Innovation raisonnée",
  QP8: "Communication",
  QP9: "Apprentissage réflexif",
  QP10: "Sens du service public"
};

let current = 0;
let selections = Array(questions.length).fill(null);
let displayedAnswers = [];
let chart = null;

const $ = id => document.getElementById(id);

$("startBtn").onclick = () => {
  $("intro").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  $("results").classList.add("hidden");
  current = 0;
  selections = Array(questions.length).fill(null);
  renderQuestion();
};

$("prevBtn").onclick = () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
};

$("nextBtn").onclick = () => {
  if (selections[current] === null) {
    alert("Veuillez choisir la posture qui correspond le mieux à votre réaction spontanée.");
    return;
  }

  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResults();
  }
};

$("restartBtn").onclick = () => location.reload();
$("pdfBtn").onclick = exportPDF;
$("csvBtn").onclick = exportCSV;
$("jsonBtn").onclick = exportJSON;

function renderQuestion() {
  const q = questions[current];

  $("progressText").textContent = `Situation ${current + 1} sur ${questions.length}`;
  $("questionTitle").textContent = "";
  $("questionText").textContent = q.text;
  $("progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;

  if (!displayedAnswers[current]) {
    displayedAnswers[current] = shuffleAnswers(q.answers);
  }

  $("answers").innerHTML = "";

  displayedAnswers[current].forEach(answer => {
    const div = document.createElement("div");

    div.className =
      "answer" + (selections[current] === answer.originalIndex ? " selected" : "");

    div.textContent = answer.text;

    div.onclick = function () {
      selections[current] = answer.originalIndex;

      document.querySelectorAll(".answer").forEach(el => {
        el.classList.remove("selected");
      });

      div.classList.add("selected");
    };

    $("answers").appendChild(div);
  });

  $("prevBtn").disabled = current === 0;
  $("nextBtn").textContent =
    current === questions.length - 1 ? "Voir mon profil" : "Suivant";
}

function shuffleAnswers(answers) {
  const copy = answers.map((answer, index) => ({
    ...answer,
    originalIndex: index
  }));

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function computeProfile() {
  const competenceRaw = {};
  const domainRaw = {};

  Object.values(REFERENTIEL).forEach(domain => {
    domain.refs.forEach(ref => {
      competenceRaw[ref] = 0;
    });
  });

  Object.keys(REFERENTIEL).forEach(domainKey => {
    domainRaw[domainKey] = 0;
  });

  questions.forEach((q, index) => {
    const selectedIndex = selections[index];

    if (selectedIndex === null) return;

    const selectedAnswer = q.answers[selectedIndex];
    const score = selectedAnswer.score || {};

    Object.entries(score).forEach(([competence, value]) => {
      if (competenceRaw[competence] !== undefined) {
        competenceRaw[competence] += value;
      }
    });
  });

  Object.entries(REFERENTIEL).forEach(([domainKey, domain]) => {
    domainRaw[domainKey] = domain.refs.reduce((sum, ref) => {
      return sum + (competenceRaw[ref] || 0);
    }, 0);
  });

  const total = Object.values(domainRaw).reduce((sum, value) => sum + value, 0);

  const domainPercentages = {};

  Object.keys(domainRaw).forEach(domainKey => {
    domainPercentages[domainKey] =
      total > 0 ? Math.round((domainRaw[domainKey] / total) * 100) : 0;
  });

  const competenceTotal = Object.values(competenceRaw).reduce(
    (sum, value) => sum + value,
    0
  );

  const competencePercentages = {};

  Object.keys(competenceRaw).forEach(ref => {
    competencePercentages[ref] =
      competenceTotal > 0
        ? Math.round((competenceRaw[ref] / competenceTotal) * 100)
        : 0;
  });

  return {
    domainRaw,
    domainPercentages,
    competenceRaw,
    competencePercentages
  };
}

function showResults() {
  $("quiz").classList.add("hidden");
  $("results").classList.remove("hidden");

  const profile = computeProfile();

  const sortedDomains = Object.entries(profile.domainPercentages)
    .sort((a, b) => b[1] - a[1]);

  const dominant = sortedDomains[0];
  const secondary = sortedDomains[1];

  $("globalScore").textContent = "";
  document.querySelector(".score-badge").innerHTML = `
    <span>${dominant[1]}</span>%
    <small>${REFERENTIEL[dominant[0]].label}</small>
  `;

  $("profileTitle").textContent = "Profil de mobilisation du référentiel";

  $("profileSummary").textContent =
    `Vos choix mobilisent principalement le domaine « ${REFERENTIEL[dominant[0]].label} »` +
    (secondary ? `, puis le domaine « ${REFERENTIEL[secondary[0]].label} ». ` : ". ") +
    "Ce résultat ne constitue pas une note : il décrit les familles de compétences que vous activez spontanément dans les situations proposées.";

  drawRadar(profile.domainPercentages);
  renderDetails(profile);
  renderRecommendations(profile);
}

function drawRadar(percentages) {
  const ctx = $("radarChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: Object.keys(REFERENTIEL).map(key => REFERENTIEL[key].label),
      datasets: [
        {
          label: "Mobilisation du référentiel (%)",
          data: Object.keys(REFERENTIEL).map(key => percentages[key]),
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function renderDetails(profile) {
  $("axisDetails").innerHTML = "";

  Object.entries(REFERENTIEL).forEach(([domainKey, domain]) => {
    const div = document.createElement("div");
    div.className = "axis-card";

    const topCompetences = domain.refs
      .map(ref => ({
        ref,
        label: COMPETENCE_LABELS[ref] || ref,
        raw: profile.competenceRaw[ref] || 0
      }))
      .sort((a, b) => b.raw - a.raw)
      .slice(0, 3);

    div.innerHTML = `
      <strong>${domain.label}</strong>
      <div class="meter">
        <span style="width:${profile.domainPercentages[domainKey]}%"></span>
      </div>
      <p>${profile.domainPercentages[domainKey]}% de vos choix mobilisent ce domaine.</p>
      <p><small>${domain.refs.join(", ")}</small></p>
      <p><strong>Compétences les plus mobilisées :</strong></p>
      <ul>
        ${topCompetences
          .map(c => `<li>${c.ref} — ${c.label}</li>`)
          .join("")}
      </ul>
    `;

    $("axisDetails").appendChild(div);
  });
}

function renderRecommendations(profile) {
  const sortedDomains = Object.entries(profile.domainPercentages)
    .sort((a, b) => b[1] - a[1]);

  const dominant = sortedDomains.slice(0, 2);
  const lessMobilized = sortedDomains.slice(-2).reverse();

  const sortedCompetences = Object.entries(profile.competenceRaw)
    .sort((a, b) => b[1] - a[1]);

  const topCompetences = sortedCompetences.slice(0, 5);
  const lowCompetences = sortedCompetences
    .filter(([, value]) => value === 0)
    .slice(0, 5);

  $("recommendations").innerHTML = `
    <h3>Lecture du profil</h3>

    <div class="rec">
      <strong>Domaines les plus mobilisés</strong>
      <p>
        ${dominant
          .map(([key, value]) => `${REFERENTIEL[key].label} (${value}%)`)
          .join(" · ")}
      </p>
    </div>

    <div class="rec">
      <strong>Domaines moins mobilisés</strong>
      <p>
        ${lessMobilized
          .map(([key, value]) => `${REFERENTIEL[key].label} (${value}%)`)
          .join(" · ")}
      </p>
    </div>

    <div class="rec">
      <strong>Compétences fines les plus présentes dans vos choix</strong>
      <p>
        ${topCompetences
          .map(([ref]) => `${ref} — ${COMPETENCE_LABELS[ref] || ref}`)
          .join("<br>")}
      </p>
    </div>

    <div class="rec">
      <strong>Compétences à réinvestir dans un parcours de formation</strong>
      <p>
        ${
          lowCompetences.length > 0
            ? lowCompetences
                .map(([ref]) => `${ref} — ${COMPETENCE_LABELS[ref] || ref}`)
                .join("<br>")
            : "Toutes les familles de compétences du référentiel apparaissent dans vos réponses."
        }
      </p>
    </div>
  `;
}

function resultObject() {
  const profile = computeProfile();

  return {
    date: new Date().toISOString(),
    name: $("userName").value,
    context: $("userContext").value,
    interpretation:
      "Profil de mobilisation du référentiel DSI-DSIN. Les résultats ne constituent pas une note.",
    domains: profile.domainPercentages,
    competences: profile.competenceRaw,
    answers: selections.map((selectedIndex, index) => ({
      situation: questions[index].title || `Situation ${index + 1}`,
      text: questions[index].text,
      selectedAnswer:
        selectedIndex !== null ? questions[index].answers[selectedIndex].text : null,
      score:
        selectedIndex !== null ? questions[index].answers[selectedIndex].score : null
    }))
  };
}

function exportJSON() {
  download(
    "profil-mobilisation-dsi-dsin.json",
    JSON.stringify(resultObject(), null, 2),
    "application/json"
  );
}

function exportCSV() {
  const profile = computeProfile();

  let csv = "Domaine;Pourcentage\n";

  Object.entries(profile.domainPercentages).forEach(([key, value]) => {
    csv += `"${REFERENTIEL[key].label}";"${value}%"\n`;
  });

  csv += "\nCompétence;Libellé;Points\n";

  Object.entries(profile.competenceRaw).forEach(([ref, value]) => {
    csv += `"${ref}";"${COMPETENCE_LABELS[ref] || ref}";"${value}"\n`;
  });

  download("profil-mobilisation-dsi-dsin.csv", csv, "text/csv;charset=utf-8");
}

function exportPDF() {
  const { jsPDF } = window.jspdf;
  const profile = computeProfile();

  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Profil de mobilisation DSI-DSIN ESR", 14, 18);

  doc.setFontSize(10);
  doc.text(`Nom : ${$("userName").value || "-"}`, 14, 28);
  doc.text(`Contexte : ${$("userContext").value || "-"}`, 14, 36);

  doc.text("Ce résultat décrit les compétences du référentiel mobilisées dans vos choix.", 14, 48);
  doc.text("Il ne constitue pas une note ni une certification.", 14, 56);

  let y = 70;

  Object.entries(profile.domainPercentages).forEach(([key, value]) => {
    doc.text(`${REFERENTIEL[key].label} : ${value}%`, 14, y);
    y += 8;
  });

  y += 6;
  doc.text("Compétences les plus mobilisées :", 14, y);
  y += 8;

  Object.entries(profile.competenceRaw)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .forEach(([ref, value]) => {
      doc.text(`${ref} — ${COMPETENCE_LABELS[ref] || ref} : ${value}`, 14, y);
      y += 7;
    });

  doc.save("profil-mobilisation-dsi-dsin.pdf");
}

function download(name, content, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}
