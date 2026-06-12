const axes = {
  knowledge: { label: "Connaissance ESR", refs: ["C1","C2","C3","C4","C5","C6"] },
  management: { label: "Management", refs: ["CM1","CM2","CM3","CM4"] },
  expertise: { label: "Expertise SI", refs: ["CT1","CT2","CT3","CT4","CT5","CT6"] },
  project: { label: "Pilotage", refs: ["CG1","CG2","CG3"] },
  leadership: { label: "Leadership", refs: ["QP1","QP2","QP3","QP4","QP5"] },
  soft: { label: "Soft skills", refs: ["QP6","QP7","QP8","QP9","QP10"] }
};

const questions = [
{title:"Schéma directeur numérique", text:"La présidence vous demande de produire en six semaines une trajectoire numérique pour le prochain contrat quinquennal.", answers:[
{text:"Organiser un cadrage stratégique associant gouvernance, métiers, usagers, SI et soutenabilité.", score:{knowledge:3,project:3,leadership:2,soft:1}},
{text:"Compiler les demandes techniques déjà exprimées par les services.", score:{expertise:2,project:1}},
{text:"Externaliser entièrement la rédaction à un cabinet.", score:{project:1}},
{text:"Présenter une liste d’outils innovants à déployer rapidement.", score:{expertise:1,leadership:1}}]},
{title:"Cybersécurité", text:"Une composante signale une suspicion de compromission sur plusieurs comptes enseignants.", answers:[
{text:"Activer la cellule de crise, qualifier l’incident, sécuriser les accès, informer selon les obligations et documenter.", score:{expertise:4,project:2,management:1,soft:1}},
{text:"Demander aux utilisateurs de changer leur mot de passe sans autre action.", score:{expertise:1}},
{text:"Attendre confirmation complète avant toute communication.", score:{expertise:1,soft:1}},
{text:"Couper tous les services numériques de l’établissement.", score:{expertise:1,project:1}}]},
{title:"Cloud souverain", text:"Un vice-président souhaite migrer des applications sensibles vers une solution cloud.", answers:[
{text:"Analyser données, risques, coûts, dépendances, réversibilité, sécurité et cadre de marché avant arbitrage.", score:{knowledge:2,expertise:3,project:2,leadership:1}},
{text:"Choisir l’offre la moins chère.", score:{knowledge:1}},
{text:"Refuser par principe toute solution cloud.", score:{expertise:1}},
{text:"Demander aux équipes systèmes de décider seules.", score:{management:1,expertise:1}}]},
{title:"Budget contraint", text:"Votre budget d’investissement baisse alors que les besoins de modernisation augmentent.", answers:[
{text:"Prioriser par risques, valeur métier, dette technique et soutenabilité, puis expliciter les arbitrages.", score:{knowledge:3,project:3,leadership:2,soft:1}},
{text:"Répartir la baisse uniformément sur tous les projets.", score:{project:1}},
{text:"Supprimer les formations des agents pour préserver les achats.", score:{management:0}},
{text:"Reporter toutes les décisions à l’année suivante.", score:{}}]},
{title:"Qualité de service", text:"Les usagers critiquent la lenteur du support numérique lors des rentrées universitaires.", answers:[
{text:"Mettre en place indicateurs, analyse des flux, base de connaissances, renforts saisonniers et amélioration continue.", score:{expertise:2,management:2,project:3,soft:2}},
{text:"Rappeler que les usagers doivent être patients.", score:{soft:0}},
{text:"Acheter un nouvel outil sans revoir l’organisation.", score:{expertise:1}},
{text:"Augmenter uniquement le nombre de tickets obligatoires.", score:{project:1}}]},
{title:"ERP scolarité", text:"Le déploiement d’un nouvel outil de scolarité crée des tensions entre composantes et services centraux.", answers:[
{text:"Structurer une gouvernance métier-SI, traiter les irritants, expliciter les arbitrages et accompagner les usages.", score:{knowledge:2,project:3,management:2,soft:3}},
{text:"Imposer le paramétrage standard sans discussion.", score:{project:1}},
{text:"Laisser chaque composante adapter localement l’outil.", score:{soft:1}},
{text:"Reporter le projet à cause des tensions.", score:{}}]},
{title:"Management d’équipe", text:"Deux responsables techniques expérimentés s’opposent sur l’architecture cible.", answers:[
{text:"Faire expliciter hypothèses, critères, risques et coûts, puis arbitrer de manière documentée.", score:{management:3,expertise:2,soft:3,leadership:2}},
{text:"Choisir l’avis du plus ancien.", score:{management:1}},
{text:"Demander au prestataire de décider.", score:{expertise:1}},
{text:"Éviter le sujet jusqu’à obtention d’un consensus spontané.", score:{soft:1}}]},
{title:"Communication", text:"Le conseil d’administration vous demande d’expliquer un projet d’urbanisation du SI.", answers:[
{text:"Traduire les enjeux en impacts métiers, risques, trajectoire financière et bénéfices usagers.", score:{expertise:2,knowledge:2,leadership:2,soft:3}},
{text:"Présenter exclusivement les couches techniques.", score:{expertise:2}},
{text:"Éviter les limites du projet pour rassurer.", score:{soft:0}},
{text:"Demander au RSSI de présenter seul.", score:{management:1}}]},
{title:"Données et pilotage", text:"La direction souhaite fiabiliser des indicateurs de réussite étudiante.", answers:[
{text:"Construire une gouvernance des données, clarifier les définitions, les sources, la qualité et les responsabilités.", score:{knowledge:3,expertise:2,project:2,leadership:1}},
{text:"Extraire rapidement les données disponibles sans cadrage.", score:{expertise:1}},
{text:"Déléguer entièrement au service statistique.", score:{knowledge:1}},
{text:"Attendre un outil national parfait.", score:{}}]},
{title:"Marché public", text:"Un besoin urgent de prestation numérique apparaît en cours d’année.", answers:[
{text:"Qualifier le besoin, vérifier les procédures, sécuriser le sourcing et articuler urgence, conformité et performance achat.", score:{knowledge:4,project:2,soft:1}},
{text:"Demander un devis et lancer immédiatement la commande.", score:{knowledge:0}},
{text:"Contourner le besoin en mobilisant uniquement l’interne, même sans compétence.", score:{management:1}},
{text:"Reporter systématiquement au prochain budget.", score:{}}]},
{title:"Accessibilité numérique", text:"Un audit révèle que plusieurs services en ligne ne respectent pas suffisamment l’accessibilité.", answers:[
{text:"Prioriser les corrections, intégrer l’accessibilité au cycle projet, former les équipes et publier une trajectoire.", score:{knowledge:2,expertise:2,project:3,management:2}},
{text:"Traiter seulement les pages les plus visibles.", score:{project:1}},
{text:"Considérer que le sujet relève uniquement de la communication.", score:{knowledge:0}},
{text:"Acheter un plugin correctif sans changement de méthode.", score:{expertise:1}}]},
{title:"Conduite du changement", text:"Un projet d’espace numérique de travail modernisé rencontre une faible adoption.", answers:[
{text:"Analyser les usages, segmenter les publics, mobiliser relais, formation, communication et mesure d’adoption.", score:{project:3,soft:3,management:2,leadership:1}},
{text:"Envoyer une note de service imposant l’usage.", score:{leadership:1}},
{text:"Ajouter davantage de fonctionnalités.", score:{expertise:1}},
{text:"Conclure que les usagers sont réfractaires.", score:{soft:0}}]},
{title:"Innovation EdTech", text:"Une EdTech propose une solution IA prometteuse pour l’aide à la réussite.", answers:[
{text:"Évaluer preuves, RGPD, souveraineté, modèle économique, interopérabilité, biais et expérimentation contrôlée.", score:{knowledge:3,expertise:2,leadership:2,project:2}},
{text:"Signer rapidement pour être innovant.", score:{leadership:1}},
{text:"Refuser toute IA par prudence.", score:{knowledge:1}},
{text:"Laisser chaque enseignant décider localement.", score:{soft:1}}]},
{title:"Dette technique", text:"Les équipes alertent sur une dette technique invisible pour la gouvernance.", answers:[
{text:"Objectiver les risques, construire une cartographie, relier dette et continuité de service, puis proposer un plan pluriannuel.", score:{expertise:3,project:3,leadership:2,soft:1}},
{text:"Attendre qu’une panne rende le problème visible.", score:{}},
{text:"Communiquer uniquement sur le coût de résorption.", score:{knowledge:1}},
{text:"Changer toute l’architecture immédiatement.", score:{expertise:1}}]},
{title:"Compétences internes", text:"La direction numérique peine à recruter et à fidéliser sur certains profils techniques.", answers:[
{text:"Travailler GPEEC, parcours, attractivité, formation, reconnaissance, mutualisation et organisation du travail.", score:{management:4,knowledge:2,leadership:2,soft:2}},
{text:"Multiplier les prestataires sans stratégie de transfert.", score:{project:1}},
{text:"Réduire les exigences de recrutement.", score:{management:1}},
{text:"Attendre une amélioration du marché de l’emploi.", score:{}}]},
{title:"Relations nationales", text:"Un programme national SI impacte fortement votre trajectoire locale.", answers:[
{text:"Analyser les dépendances, participer aux communautés, articuler mutualisation nationale et contraintes locales.", score:{knowledge:3,expertise:2,project:2,soft:2}},
{text:"Ignorer le programme jusqu’à obligation formelle.", score:{}},
{text:"Appliquer sans contextualisation locale.", score:{knowledge:1}},
{text:"Le présenter comme une contrainte exclusivement externe.", score:{soft:0}}]},
{title:"RSE numérique", text:"L’établissement veut réduire l’empreinte environnementale de son numérique.", answers:[
{text:"Mesurer, prioriser équipements/services, travailler achats, usages, cycle de vie, données et indicateurs.", score:{knowledge:2,expertise:2,project:3,leadership:2}},
{text:"Limiter l’action à l’extinction des écrans.", score:{project:1}},
{text:"Communiquer sans mesure.", score:{soft:1}},
{text:"Reporter car ce n’est pas une priorité SI.", score:{}}]},
{title:"Négociation", text:"Une composante exige un développement spécifique incompatible avec la trajectoire d’urbanisation.", answers:[
{text:"Écouter le besoin, distinguer besoin et solution, proposer alternatives, coûts complets et arbitrage gouverné.", score:{soft:4,expertise:2,project:2,leadership:1}},
{text:"Refuser sans discussion.", score:{leadership:1}},
{text:"Accepter pour éviter le conflit.", score:{soft:1}},
{text:"Transférer la décision au prestataire.", score:{}}]},
{title:"Crise de continuité", text:"Une panne majeure affecte les inscriptions administratives en pleine période critique.", answers:[
{text:"Piloter crise, priorités de rétablissement, communication, contournements, retour d’expérience et plan d’amélioration.", score:{expertise:3,project:3,management:2,soft:2}},
{text:"Chercher d’abord le responsable individuel.", score:{management:0}},
{text:"Communiquer seulement après résolution complète.", score:{soft:0}},
{text:"Redémarrer tous les systèmes sans diagnostic.", score:{expertise:1}}]},
{title:"Comité de direction", text:"Vous devez faire reconnaître le numérique comme levier stratégique et non comme simple support.", answers:[
{text:"Relier SI, transformation des métiers, valeur publique, risques, données et capacité d’innovation institutionnelle.", score:{knowledge:3,leadership:4,soft:2,project:1}},
{text:"Présenter un catalogue de services techniques.", score:{expertise:1}},
{text:"Demander plus de budget sans récit stratégique.", score:{leadership:1}},
{text:"Éviter les débats politiques de gouvernance.", score:{}}]},
{title:"Interopérabilité", text:"Plusieurs applications métiers produisent des données incohérentes sur les mêmes objets.", answers:[
{text:"Établir référentiels, gouvernance MDM, règles d’interopérabilité, responsabilités métier et trajectoire d’intégration.", score:{expertise:4,knowledge:2,project:2}},
{text:"Créer un fichier Excel de consolidation manuelle.", score:{project:1}},
{text:"Acheter un nouvel outil de reporting.", score:{expertise:1}},
{text:"Laisser chaque service conserver sa définition.", score:{soft:0}}]},
{title:"Déontologie", text:"Une demande d’accès à des données personnelles d’étudiants paraît juridiquement fragile.", answers:[
{text:"Interroger finalité, proportionnalité, base légale, DPO, traçabilité et alternatives moins intrusives.", score:{knowledge:4,expertise:2,soft:1}},
{text:"Accorder l’accès car la demande vient d’un supérieur.", score:{knowledge:0}},
{text:"Refuser sans analyser la finalité.", score:{knowledge:1}},
{text:"Demander à l’administrateur technique d’arbitrer.", score:{expertise:0}}]},
{title:"Formation des agents", text:"Les évolutions numériques nécessitent une montée en compétences continue de vos équipes.", answers:[
{text:"Construire un plan de compétences lié à la stratégie, aux métiers émergents, au mentorat et aux communautés de pratique.", score:{management:4,leadership:2,soft:2}},
{text:"Attendre les demandes individuelles.", score:{management:1}},
{text:"Former seulement les managers.", score:{management:1}},
{text:"Sous-traiter les compétences nouvelles.", score:{project:1}}]},
{title:"Anglais professionnel", text:"Vous représentez l’établissement dans un réseau européen de DSI universitaires.", answers:[
{text:"Préparer une contribution claire en anglais, relier contexte français et enjeux européens, puis capitaliser pour l’interne.", score:{knowledge:2,soft:3,leadership:2}},
{text:"Participer uniquement comme observateur.", score:{knowledge:1}},
{text:"Déléguer systématiquement à un collègue anglophone.", score:{soft:1}},
{text:"Limiter l’échange aux aspects techniques.", score:{expertise:1}}]},
{title:"Audit externe", text:"Un audit critique pointe un manque de pilotage du portefeuille de projets numériques.", answers:[
{text:"Transformer l’audit en plan d’action : priorisation, instances, indicateurs, capacités, risques et transparence.", score:{project:4,leadership:2,management:2,soft:1}},
{text:"Contester publiquement l’audit.", score:{soft:0}},
{text:"Créer un tableau de bord sans revoir les arbitrages.", score:{project:1}},
{text:"Demander un nouvel audit.", score:{project:1}}]},
{title:"Travail transversal", text:"Un projet nécessite la coopération DSI, scolarité, finances, RH, recherche et communication.", answers:[
{text:"Installer une organisation transverse avec rôles, décisions, calendrier, règles de coopération et arbitrages.", score:{project:3,management:2,soft:3,knowledge:2}},
{text:"Réunir tout le monde sans ordre du jour stable.", score:{soft:1}},
{text:"Confier le projet uniquement à la DSI.", score:{expertise:1}},
{text:"Laisser chaque direction avancer séparément.", score:{}}]},
{title:"Culture usager", text:"Les étudiants jugent les services numériques peu lisibles.", answers:[
{text:"Mettre en place écoute usager, parcours, tests, priorisation des irritants, design de service et communication ciblée.", score:{soft:3,project:2,expertise:2,leadership:1}},
{text:"Considérer que les services existent déjà.", score:{}},
{text:"Ajouter une FAQ générale.", score:{soft:1}},
{text:"Demander aux étudiants de contacter chaque service.", score:{}}]},
{title:"Gouvernance IA", text:"Plusieurs services expérimentent des outils d’IA générative sans cadre commun.", answers:[
{text:"Élaborer un cadre d’usage proportionné : risques, données, achats, formation, éthique, mutualisation et retours d’expérience.", score:{knowledge:3,expertise:2,project:2,leadership:3}},
{text:"Interdire tous les usages.", score:{knowledge:1}},
{text:"Laisser les initiatives se diffuser naturellement.", score:{soft:1}},
{text:"Choisir un outil unique sans analyse d’usage.", score:{expertise:1}}]},
{title:"Arbitrage politique", text:"Deux vice-présidences portent des priorités numériques contradictoires.", answers:[
{text:"Objectiver enjeux, dépendances, risques, ressources et scénarios, puis organiser un arbitrage explicite.", score:{leadership:3,soft:3,project:2,knowledge:2}},
{text:"Soutenir la demande la plus visible.", score:{leadership:1}},
{text:"Lancer les deux projets malgré les ressources limitées.", score:{project:0}},
{text:"Demander aux équipes de se débrouiller.", score:{management:0}}]},
{title:"Bilan annuel", text:"Vous devez rendre compte de l’action numérique devant les instances.", answers:[
{text:"Présenter résultats, limites, indicateurs, trajectoire, contribution aux missions, risques et décisions attendues.", score:{knowledge:2,project:2,leadership:3,soft:3}},
{text:"Lister les projets terminés.", score:{project:1}},
{text:"Insister uniquement sur les difficultés budgétaires.", score:{knowledge:1}},
{text:"Éviter les indicateurs pour ne pas être contesté.", score:{}}]}
];

let current = 0; let selections = Array(questions.length).fill(null); let chart;
const $ = id => document.getElementById(id);
$('startBtn').onclick=()=>{ $('intro').classList.add('hidden'); $('quiz').classList.remove('hidden'); renderQuestion(); };
$('prevBtn').onclick=()=>{ if(current>0){current--;renderQuestion();} };
$('nextBtn').onclick=()=>{ if(selections[current]===null){alert('Veuillez choisir une réponse.');return;} if(current<questions.length-1){current++;renderQuestion();}else showResults(); };
$('restartBtn').onclick=()=>location.reload();
$('pdfBtn').onclick=exportPDF; $('csvBtn').onclick=exportCSV; $('jsonBtn').onclick=exportJSON;
function renderQuestion() {
  const q = questions[current];

  $('progressText').textContent = `Situation ${current + 1} sur ${questions.length}`;
  $('questionTitle').textContent = "";
  $('questionText').textContent = q.text;
  $('progressBar').style.width = `${((current + 1) / questions.length) * 100}%`;

  $('answers').innerHTML = "";

  q.answers.forEach((a, i) => {
    const d = document.createElement("div");
    d.className = "answer" + (selections[current] === i ? " selected" : "");
    d.innerHTML = `${a.text}`;
    d.onclick = () => {
      selections[current] = i;
      renderQuestion();
    };
    $('answers').appendChild(d);
  });

  $('prevBtn').disabled = current === 0;
  $('nextBtn').textContent =
    current === questions.length - 1 ? "Voir les résultats" : "Suivant";
}                                                                                                                                                                                                                                                                                                                                                                                                                                            renderQuestion();};$('answers').appendChild(d);});$('prevBtn').disabled=current===0;$('nextBtn').textContent=current===questions.length-1?'Voir les résultats':'Suivant';}
function compute(){let raw={}, max={}; Object.keys(axes).forEach(k=>{raw[k]=0;max[k]=0}); questions.forEach((q,qi)=>{Object.keys(axes).forEach(k=>{let m=Math.max(...q.answers.map(a=>a.score[k]||0)); max[k]+=m;}); const a=q.answers[selections[qi]]; Object.keys(a.score).forEach(k=> raw[k]+=a.score[k]);}); let pct={}; Object.keys(axes).forEach(k=>pct[k]=max[k]?Math.round(raw[k]/max[k]*100):0); return {raw,max,pct,global:Math.round(Object.values(pct).reduce((a,b)=>a+b,0)/Object.keys(pct).length)};}
function showResults(){ $('quiz').classList.add('hidden'); $('results').classList.remove('hidden'); const r=compute(); $('globalScore').textContent=r.global; const lowest=Object.keys(r.pct).sort((a,b)=>r.pct[a]-r.pct[b])[0]; const highest=Object.keys(r.pct).sort((a,b)=>r.pct[b]-r.pct[a])[0]; $('profileTitle').textContent = r.global>=80?'Profil DSI-DSIN stratégique confirmé':r.global>=60?'Profil DSI-DSIN en consolidation':'Profil DSI-DSIN à structurer'; $('profileSummary').textContent=`Point fort principal : ${axes[highest].label}. Axe prioritaire de développement : ${axes[lowest].label}.`; drawRadar(r.pct); renderDetails(r.pct); renderRecs(r.pct);}
function drawRadar(pct){const ctx=$('radarChart'); if(chart) chart.destroy(); chart=new Chart(ctx,{type:'radar',data:{labels:Object.keys(axes).map(k=>axes[k].label),datasets:[{label:'Positionnement (%)',data:Object.keys(axes).map(k=>pct[k]),fill:true}]},options:{responsive:true,maintainAspectRatio:false,scales:{r:{beginAtZero:true,max:100,ticks:{stepSize:20}}},plugins:{legend:{display:false}}}});}
function renderDetails(pct){$('axisDetails').innerHTML=''; Object.keys(axes).forEach(k=>{let d=document.createElement('div');d.className='axis-card';d.innerHTML=`<strong>${axes[k].label}</strong><div class="meter"><span style="width:${pct[k]}%"></span></div><p>${pct[k]}% · ${axes[k].refs.join(', ')}</p>`;$('axisDetails').appendChild(d);});}
function renderRecs(pct){const recs={knowledge:'Renforcer la lecture institutionnelle : politiques publiques, cadre ESR, finances, achats, RGPD et déontologie.',management:'Structurer un plan de développement managérial : délégation, fidélisation, accompagnement des équipes et qualité de vie au travail.',expertise:'Actualiser la maîtrise des architectures, sécurité, interopérabilité, qualité, données et écosystèmes numériques.',project:'Formaliser le portefeuille projets : priorisation, charges-coûts-délais, conduite du changement et gestion des conflits.',leadership:'Travailler la posture stratégique : vision, innovation, arbitrage, récit de transformation et force de proposition.',soft:'Développer communication, écoute, négociation, coopération transverse et adaptation aux publics.'}; const sorted=Object.keys(pct).sort((a,b)=>pct[a]-pct[b]).slice(0,3); $('recommendations').innerHTML='<h3>Recommandations prioritaires</h3>'+sorted.map(k=>`<div class="rec"><strong>${axes[k].label} · ${pct[k]}%</strong><p>${recs[k]}</p></div>`).join('');}
function resultObject(){return {date:new Date().toISOString(),name:$('userName').value,context:$('userContext').value,results:compute().pct,global:compute().global,answers:selections.map((s,i)=>({question:questions[i].title,answer:questions[i].answers[s]?.text}))};}
function download(name,content,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;a.click();URL.revokeObjectURL(a.href);}
function exportJSON(){download('positionnement-dsi.json',JSON.stringify(resultObject(),null,2),'application/json');}
function exportCSV(){const r=resultObject();let csv='Axe;Score\n'+Object.keys(r.results).map(k=>`${axes[k].label};${r.results[k]}`).join('\n');download('positionnement-dsi.csv',csv,'text/csv;charset=utf-8');}
function exportPDF(){const {jsPDF}=window.jspdf; const r=resultObject(); const doc=new jsPDF(); doc.setFontSize(16); doc.text('Auto-positionnement DSI-DSIN ESR',14,18); doc.setFontSize(10); doc.text(`Nom : ${r.name||'-'} | Contexte : ${r.context||'-'}`,14,28); doc.text(`Score global : ${r.global}%`,14,36); let y=48; Object.keys(r.results).forEach(k=>{doc.text(`${axes[k].label} : ${r.results[k]}% (${axes[k].refs.join(', ')})`,14,y); y+=8;}); doc.text('Recommandations : voir les axes les plus faibles dans l’application.',14,y+6); doc.save('positionnement-dsi.pdf');}
