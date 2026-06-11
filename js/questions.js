const QUESTIONS = [
  {
    id: 1,
    competence: "C1",
    domaine: "C",
    question: "Un nouveau président souhaite repositionner la DSI comme acteur stratégique de l'établissement. Quelle approche privilégiez-vous ?",
    answers: [
      { text: "Produire une cartographie des enjeux métiers, numériques et institutionnels.", score: { C: 3, CG: 1 } },
      { text: "Commencer par renouveler les infrastructures techniques.", score: { CT: 2 } },
      { text: "Attendre les arbitrages politiques avant toute proposition.", score: { C: 1 } },
      { text: "Réduire le sujet à une question de support informatique.", score: { CT: 1 } }
    ]
  },
  {
    id: 2,
    competence: "CM1",
    domaine: "CM",
    question: "Une équipe de la DSI exprime une forte fatigue après plusieurs projets simultanés. Que faites-vous en priorité ?",
    answers: [
      { text: "Maintenir le calendrier initial pour respecter les engagements.", score: { CG: 1 } },
      { text: "Écouter l'équipe, prioriser les projets et renégocier les charges.", score: { CM: 3, QP: 2 } },
      { text: "Demander un audit externe sans modifier l'organisation.", score: { CM: 1 } },
      { text: "Réaffecter les agents sans concertation.", score: { CM: 1 } }
    ]
  },
  {
    id: 3,
    competence: "CT1",
    domaine: "CT",
    question: "Un établissement envisage de migrer plusieurs applications critiques vers le cloud. Quelle est votre première analyse ?",
    answers: [
      { text: "Comparer uniquement les coûts d'abonnement.", score: { C: 1 } },
      { text: "Lancer une migration rapide pour moderniser l'image de la DSI.", score: { CT: 1 } },
      { text: "Évaluer architecture, sécurité, souveraineté, continuité et réversibilité.", score: { CT: 3, C: 2 } },
      { text: "Déléguer entièrement le choix au prestataire.", score: { CT: 1 } }
    ]
  },
  {
    id: 4,
    competence: "CG1",
    domaine: "CG",
    question: "Un projet SI scolarité prend du retard et les composantes s'inquiètent. Quelle action engagez-vous ?",
    answers: [
      { text: "Suspendre le projet jusqu'à nouvel ordre.", score: { CG: 1 } },
      { text: "Réunir les parties prenantes, objectiver les risques et replanifier.", score: { CG: 3, CM: 2 } },
      { text: "Communiquer uniquement avec la présidence.", score: { C: 1 } },
      { text: "Renforcer uniquement l'équipe technique.", score: { CT: 2 } }
    ]
  },
  {
    id: 5,
    competence: "QP1",
    domaine: "QP",
    question: "Lors d'un comité de direction, une décision numérique vous semble risquée juridiquement. Quelle posture adoptez-vous ?",
    answers: [
      { text: "Vous vous opposez frontalement sans argumenter.", score: { QP: 1 } },
      { text: "Vous documentez les risques et proposez des scénarios alternatifs.", score: { QP: 3, C: 2 } },
      { text: "Vous laissez la décision se prendre pour éviter le conflit.", score: { QP: 1 } },
      { text: "Vous demandez aux équipes techniques de traiter le sujet plus tard.", score: { CT: 1 } }
    ]
  },

  {
    id: 6,
    competence: "C2",
    domaine: "C",
    question: "Une fusion d'établissements impose une convergence des systèmes d'information. Quel point examinez-vous d'abord ?",
    answers: [
      { text: "La compatibilité des cultures organisationnelles, des processus et des données.", score: { C: 3, CM: 2 } },
      { text: "Le choix immédiat d'un outil unique.", score: { CT: 1 } },
      { text: "Le remplacement de toutes les applications existantes.", score: { CT: 1, CG: 1 } },
      { text: "La communication externe du projet.", score: { C: 1 } }
    ]
  },
  {
    id: 7,
    competence: "CM2",
    domaine: "CM",
    question: "Un responsable de pôle refuse d'adhérer à une nouvelle organisation DevOps. Que faites-vous ?",
    answers: [
      { text: "L'écarter du projet.", score: { CM: 1 } },
      { text: "Imposer la méthode par note de service.", score: { CM: 1, CG: 1 } },
      { text: "Identifier ses résistances, clarifier les bénéfices et accompagner la transition.", score: { CM: 3, QP: 2 } },
      { text: "Reporter la transformation.", score: { CG: 1 } }
    ]
  },
  {
    id: 8,
    competence: "CT2",
    domaine: "CT",
    question: "Une application historique fonctionne encore mais devient difficile à maintenir. Quelle stratégie adoptez-vous ?",
    answers: [
      { text: "La conserver sans analyse car elle fonctionne.", score: { CT: 1 } },
      { text: "Décider seul de son remplacement.", score: { QP: 1 } },
      { text: "Évaluer dette technique, criticité métier, coûts, risques et trajectoire cible.", score: { CT: 3, CG: 2 } },
      { text: "Attendre une panne majeure pour agir.", score: { CT: 0 } }
    ]
  },
  {
    id: 9,
    competence: "CG2",
    domaine: "CG",
    question: "Deux directions métiers formulent des besoins contradictoires pour un même projet décisionnel. Comment procédez-vous ?",
    answers: [
      { text: "Choisir la demande de la direction la plus influente.", score: { C: 1 } },
      { text: "Organiser un arbitrage fondé sur les objectifs, les données et les usages.", score: { CG: 3, C: 2 } },
      { text: "Demander à l'équipe technique de trancher.", score: { CT: 1 } },
      { text: "Créer deux solutions séparées.", score: { CT: 1, CG: 1 } }
    ]
  },
  {
    id: 10,
    competence: "QP2",
    domaine: "QP",
    question: "Un incident majeur survient pendant une période d'inscription étudiante. Quelle attitude est la plus adaptée ?",
    answers: [
      { text: "Communiquer avec calme, organiser la cellule de crise et prioriser le rétablissement.", score: { QP: 3, CT: 2, CM: 2 } },
      { text: "Attendre d'avoir toutes les informations avant de communiquer.", score: { QP: 1 } },
      { text: "Chercher immédiatement un responsable.", score: { CM: 0 } },
      { text: "Fermer tous les services numériques par précaution.", score: { CT: 1 } }
    ]
  },

  {
    id: 11,
    competence: "C3",
    domaine: "C",
    question: "Le budget numérique est contraint. Comment construisez-vous vos arbitrages ?",
    answers: [
      { text: "Réduire uniformément tous les budgets.", score: { CG: 1 } },
      { text: "Prioriser selon la valeur métier, les risques, les obligations et la soutenabilité.", score: { C: 3, CG: 2 } },
      { text: "Préserver uniquement les dépenses techniques.", score: { CT: 1 } },
      { text: "Reporter les décisions à l'exercice suivant.", score: { QP: 1 } }
    ]
  },
  {
    id: 12,
    competence: "CM3",
    domaine: "CM",
    question: "Un agent très compétent techniquement rencontre des difficultés relationnelles avec les métiers. Que faites-vous ?",
    answers: [
      { text: "Le maintenir à distance des utilisateurs.", score: { CM: 1 } },
      { text: "L'accompagner par du feedback, de la formation et un cadre de coopération.", score: { CM: 3, QP: 2 } },
      { text: "Ignorer le problème car la compétence technique est prioritaire.", score: { CT: 1 } },
      { text: "Le changer immédiatement de poste.", score: { CM: 1 } }
    ]
  },
  {
    id: 13,
    competence: "CT3",
    domaine: "CT",
    question: "Un projet d'interopérabilité entre applications RH, finances et scolarité est lancé. Quel principe retenez-vous ?",
    answers: [
      { text: "Multiplier les exports Excel.", score: { CT: 0 } },
      { text: "Mettre en place une architecture d'échanges documentée, sécurisée et gouvernée.", score: { CT: 3, C: 2 } },
      { text: "Confier chaque interface à un prestataire différent sans cadre commun.", score: { CG: 1 } },
      { text: "Attendre la refonte complète de tous les SI.", score: { CT: 1 } }
    ]
  },
  {
    id: 14,
    competence: "CG3",
    domaine: "CG",
    question: "Un projet numérique stratégique suscite une forte résistance dans plusieurs composantes. Quelle réponse privilégiez-vous ?",
    answers: [
      { text: "Renforcer la communication descendante.", score: { CG: 1 } },
      { text: "Identifier les controverses, associer les acteurs et ajuster la conduite du changement.", score: { CG: 3, CM: 2, QP: 2 } },
      { text: "Réduire le périmètre sans concertation.", score: { CG: 1 } },
      { text: "Poursuivre sans modifier la méthode.", score: { QP: 1 } }
    ]
  },
  {
    id: 15,
    competence: "QP3",
    domaine: "QP",
    question: "Vous devez défendre une orientation numérique impopulaire mais nécessaire. Quelle posture adoptez-vous ?",
    answers: [
      { text: "Renoncer pour préserver le consensus.", score: { QP: 1 } },
      { text: "Argumenter, écouter les objections et assumer la décision.", score: { QP: 3, C: 2 } },
      { text: "Faire porter la décision par les équipes techniques.", score: { CM: 1 } },
      { text: "Éviter le débat en comité.", score: { QP: 0 } }
    ]
  },

  {
    id: 16,
    competence: "C4",
    domaine: "C",
    question: "Une nouvelle réglementation impose de revoir les traitements de données personnelles. Quelle démarche engagez-vous ?",
    answers: [
      { text: "Attendre les consignes nationales.", score: { C: 1 } },
      { text: "Associer DPO, métiers, sécurité et responsables applicatifs pour établir un plan d'action.", score: { C: 3, CT: 2, CG: 2 } },
      { text: "Supprimer temporairement les accès.", score: { CT: 1 } },
      { text: "Demander uniquement aux prestataires de se mettre en conformité.", score: { C: 1 } }
    ]
  },
  {
    id: 17,
    competence: "CM4",
    domaine: "CM",
    question: "La DSI peine à recruter sur des profils rares. Quelle réponse structurelle proposez-vous ?",
    answers: [
      { text: "Construire une politique compétences : formation, attractivité, parcours et mutualisation.", score: { CM: 3, C: 2 } },
      { text: "Externaliser tous les sujets complexes.", score: { CT: 1 } },
      { text: "Réduire l'ambition des projets.", score: { CG: 1 } },
      { text: "Augmenter uniquement le nombre d'offres publiées.", score: { CM: 1 } }
    ]
  },
  {
    id: 18,
    competence: "CT4",
    domaine: "CT",
    question: "Une suspicion de fuite de données étudiantes est signalée. Quelle action immédiate est la plus pertinente ?",
    answers: [
      { text: "Attendre la confirmation complète avant d'agir.", score: { QP: 1 } },
      { text: "Activer la procédure d'incident, qualifier le risque et associer RSSI/DPO.", score: { CT: 3, C: 2, QP: 2 } },
      { text: "Couper définitivement l'application.", score: { CT: 1 } },
      { text: "Informer seulement l'équipe technique.", score: { CM: 1 } }
    ]
  },
  {
    id: 19,
    competence: "QP4",
    domaine: "QP",
    question: "Un arbitrage ministériel modifie brutalement vos priorités numériques. Comment réagissez-vous ?",
    answers: [
      { text: "Reconfigurer la feuille de route en explicitant impacts, renoncements et priorités.", score: { QP: 3, CG: 2, C: 2 } },
      { text: "Maintenir la trajectoire initiale.", score: { QP: 1 } },
      { text: "Arrêter tous les projets en cours.", score: { CG: 0 } },
      { text: "Transmettre la contrainte aux équipes sans médiation.", score: { CM: 1 } }
    ]
  },
  {
    id: 20,
    competence: "C5",
    domaine: "C",
    question: "Un partenaire propose une solution EdTech innovante mais propriétaire. Quelle analyse conduisez-vous ?",
    answers: [
      { text: "Accepter rapidement pour favoriser l'innovation.", score: { C: 1 } },
      { text: "Évaluer usages, données, modèle économique, souveraineté, accessibilité et interopérabilité.", score: { C: 3, CT: 2 } },
      { text: "Refuser par principe toute solution propriétaire.", score: { QP: 1 } },
      { text: "Laisser les enseignants décider seuls.", score: { C: 1 } }
    ]
  },

  {
    id: 21,
    competence: "CT5",
    domaine: "CT",
    question: "Votre établissement souhaite développer des services fondés sur la donnée. Quelle fondation vous paraît indispensable ?",
    answers: [
      { text: "Un outil de visualisation attractif.", score: { CT: 1 } },
      { text: "Une gouvernance des données, des référentiels partagés et une qualité maîtrisée.", score: { CT: 3, C: 2, CG: 2 } },
      { text: "Un prestataire unique pour tous les tableaux de bord.", score: { CG: 1 } },
      { text: "Des exports réguliers depuis les applications métiers.", score: { CT: 1 } }
    ]
  },
  {
    id: 22,
    competence: "QP5",
    domaine: "QP",
    question: "Un désaccord public apparaît entre vous et une direction métier lors d'une réunion stratégique. Quelle réaction adoptez-vous ?",
    answers: [
      { text: "Recadrer fermement la direction métier devant tous.", score: { QP: 1 } },
      { text: "Reconnaître le désaccord, clarifier les faits et proposer un temps d'instruction.", score: { QP: 3, CM: 2 } },
      { text: "Éviter de répondre.", score: { QP: 0 } },
      { text: "Demander à la présidence de trancher immédiatement.", score: { C: 1 } }
    ]
  },
  {
    id: 23,
    competence: "C6",
    domaine: "C",
    question: "Vous devez inscrire la DSI dans une logique de mutualisation inter-établissements. Quel principe guide votre action ?",
    answers: [
      { text: "Rechercher d'abord la standardisation technique.", score: { CT: 2 } },
      { text: "Construire un cadre commun articulant gouvernance, bénéfices, responsabilités et soutenabilité.", score: { C: 3, CG: 2 } },
      { text: "Mutualiser uniquement les coûts.", score: { C: 1 } },
      { text: "Attendre qu'un autre établissement pilote le sujet.", score: { QP: 1 } }
    ]
  },
  {
    id: 24,
    competence: "CT6",
    domaine: "CT",
    question: "L'accessibilité numérique des services en ligne est insuffisante. Que proposez-vous ?",
    answers: [
      { text: "Limiter l'action aux nouveaux projets.", score: { CT: 1 } },
      { text: "Mettre en place un plan RGAA : audit, priorisation, correction, formation et suivi.", score: { CT: 3, C: 2, CG: 2 } },
      { text: "Traiter uniquement les signalements utilisateurs.", score: { QP: 1 } },
      { text: "Confier le sujet exclusivement au service communication.", score: { CM: 1 } }
    ]
  },
  {
    id: 25,
    competence: "QP6",
    domaine: "QP",
    question: "Un membre de votre équipe vous alerte sur une décision que vous avez prise. Que faites-vous ?",
    answers: [
      { text: "Vous maintenez la décision pour préserver l'autorité.", score: { QP: 1 } },
      { text: "Vous examinez l'alerte, acceptez la contradiction et ajustez si nécessaire.", score: { QP: 3, CM: 2 } },
      { text: "Vous déléguez le problème à son supérieur direct.", score: { CM: 1 } },
      { text: "Vous attendez que le problème se confirme.", score: { QP: 1 } }
    ]
  },

  {
    id: 26,
    competence: "QP7",
    domaine: "QP",
    question: "Une innovation technologique suscite un fort enthousiasme interne. Quelle vigilance gardez-vous ?",
    answers: [
      { text: "Transformer immédiatement l'innovation en projet institutionnel.", score: { CG: 1 } },
      { text: "Évaluer les usages réels, les risques, les coûts et les conditions d'appropriation.", score: { QP: 3, C: 2, CT: 2 } },
      { text: "Freiner le projet par prudence.", score: { QP: 1 } },
      { text: "Confier l'expérimentation à un petit groupe sans cadre.", score: { CG: 1 } }
    ]
  },
  {
    id: 27,
    competence: "QP8",
    domaine: "QP",
    question: "Vous devez présenter une trajectoire numérique complexe à des non-spécialistes. Quelle approche choisissez-vous ?",
    answers: [
      { text: "Présenter le détail complet de l'architecture technique.", score: { CT: 1 } },
      { text: "Simplifier sans déformer, relier les choix techniques aux enjeux métiers.", score: { QP: 3, C: 2 } },
      { text: "Réduire la présentation aux contraintes budgétaires.", score: { C: 1 } },
      { text: "Éviter les débats pour gagner du temps.", score: { QP: 1 } }
    ]
  },
  {
    id: 28,
    competence: "QP9",
    domaine: "QP",
    question: "Un projet porté par la DSI échoue partiellement. Quelle attitude adoptez-vous ?",
    answers: [
      { text: "Valoriser uniquement les réussites.", score: { QP: 1 } },
      { text: "Organiser un retour d'expérience collectif pour apprendre et ajuster.", score: { QP: 3, CG: 2, CM: 2 } },
      { text: "Attribuer l'échec au manque d'engagement des métiers.", score: { CM: 0 } },
      { text: "Changer immédiatement de méthode projet.", score: { CG: 1 } }
    ]
  },
  {
    id: 29,
    competence: "QP10",
    domaine: "QP",
    question: "Vous êtes sollicité sur plusieurs urgences simultanées. Comment arbitrez-vous ?",
    answers: [
      { text: "Traiter les demandes dans leur ordre d'arrivée.", score: { QP: 1 } },
      { text: "Prioriser selon criticité, impact usager, risque institutionnel et capacité disponible.", score: { QP: 3, CG: 2, C: 2 } },
      { text: "Répondre d'abord aux demandes de la gouvernance.", score: { C: 1 } },
      { text: "Transmettre toutes les urgences aux responsables de pôle.", score: { CM: 1 } }
    ]
  },
  {
    id: 30,
    competence: "Synthèse",
    domaine: "CG",
    question: "Vous devez construire la feuille de route numérique de l'établissement pour trois ans. Quelle méthode retenez-vous ?",
    answers: [
      { text: "Partir des besoins institutionnels, des usages, des risques, des moyens et des capacités de transformation.", score: { C: 3, CG: 3, CM: 2, CT: 2, QP: 2 } },
      { text: "Lister les projets techniques demandés par la DSI.", score: { CT: 2 } },
      { text: "Reprendre la feuille de route précédente.", score: { CG: 1 } },
      { text: "Construire uniquement une trajectoire budgétaire.", score: { C: 2 } }
    ]
  }
];
