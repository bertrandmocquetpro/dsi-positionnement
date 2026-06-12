const questions = [
  {
    title: "Rentrée universitaire et inscriptions",
    text: "À dix jours de la rentrée, les inscriptions administratives ralentissent fortement. Les services de scolarité, les composantes et le service communication sollicitent la DSI en urgence, tandis que la présidence attend une réponse coordonnée.",
    answers: [
      { text: "Prioriser les processus critiques, organiser une cellule de suivi et produire une communication régulière vers les parties prenantes.", score: { CG2: 3, CG3: 2, QP8: 2, CT4: 1 } },
      { text: "Renforcer temporairement les ressources techniques et surveiller les indicateurs de performance.", score: { CT1: 3, CT4: 2, CG2: 1 } },
      { text: "Réunir scolarité, composantes et support pour qualifier les irritants et ajuster l’organisation du service rendu.", score: { CM2: 2, QP5: 3, QP6: 2, CG3: 1 } },
      { text: "Préparer une note d’arbitrage pour la gouvernance sur les risques, les responsabilités et les scénarios de continuité.", score: { C2: 2, CG1: 3, QP1: 2, C3: 1 } }
    ]
  },

  {
    title: "IA générative dans les services",
    text: "Plusieurs directions utilisent déjà des outils d’IA générative pour produire des notes, résumer des documents et répondre à des usagers. Aucun cadre commun n’existe et certains usages peuvent concerner des données internes.",
    answers: [
      { text: "Lancer un travail d’expérimentation encadrée avec retours d’expérience, formation et capitalisation des usages.", score: { QP7: 3, CG3: 2, CM3: 2, C5: 1 } },
      { text: "Établir un cadre d’usage proportionné précisant données autorisées, risques, responsabilités, achats et transparence.", score: { C4: 3, C5: 2, CG1: 2, QP1: 1 } },
      { text: "Associer DPO, RSSI, métiers et représentants des usagers pour construire une doctrine institutionnelle.", score: { QP6: 3, C4: 2, CT4: 2, CG1: 1 } },
      { text: "Identifier les outils déjà utilisés, les flux de données et les dépendances techniques avant toute généralisation.", score: { CT5: 2, CT6: 2, C5: 2, QP1: 1 } }
    ]
  },

  {
    title: "Cyberattaque pendant les examens",
    text: "Une attaque par rançongiciel touche une application utilisée dans l’organisation des examens. Les équipes techniques confirment un incident sérieux, tandis que les composantes demandent des solutions de continuité.",
    answers: [
      { text: "Piloter la crise avec une cellule dédiée, prioriser la continuité des examens et organiser les décisions rapides.", score: { CG2: 3, CT4: 2, QP2: 3, CG1: 1 } },
      { text: "Sécuriser le périmètre, documenter l’incident, coordonner RSSI et prestataires, puis préparer le retour d’expérience.", score: { CT4: 3, CT1: 2, CT6: 1, QP9: 2 } },
      { text: "Organiser une communication régulière vers gouvernance, composantes et usagers, même avec des informations partielles.", score: { QP8: 3, QP2: 2, C2: 1, CG3: 2 } },
      { text: "Protéger les équipes en clarifiant les rôles, les astreintes, les relais et les limites de charge pendant la crise.", score: { CM1: 2, CM2: 3, CM4: 2, QP5: 1 } }
    ]
  },

  {
    title: "Déploiement de Pégase",
    text: "Le déploiement de Pégase prend du retard. Les composantes craignent une dégradation du service à la rentrée, tandis que le calendrier national et les contraintes locales doivent être conciliés.",
    answers: [
      { text: "Renforcer l’accompagnement des gestionnaires, identifier les besoins de formation et sécuriser les relais métiers.", score: { CM3: 3, CG3: 3, QP5: 2 } },
      { text: "Reprendre la gouvernance du projet, clarifier les arbitrages et prioriser les processus critiques avant la rentrée.", score: { CG1: 3, CG2: 3, C2: 2 } },
      { text: "Analyser les dépendances applicatives, les flux, les reprises de données et les risques d’interopérabilité.", score: { CT2: 2, CT3: 3, CT5: 2, QP1: 1 } },
      { text: "Porter auprès de la gouvernance une analyse des impacts politiques, organisationnels et calendaires.", score: { C1: 2, C6: 2, QP8: 2, QP3: 2 } }
    ]
  },

  {
    title: "Souveraineté numérique et suite collaborative",
    text: "Des administrateurs interrogent l’usage d’une suite collaborative extra-européenne. Les débats portent sur la souveraineté, le RGPD, les coûts, les usages et la dépendance fournisseur.",
    answers: [
      { text: "Construire une trajectoire réaliste de maîtrise des risques, intégrant usages, coûts, sécurité, clauses contractuelles et alternatives.", score: { C4: 3, C5: 2, CT6: 2, CG1: 1 } },
      { text: "Animer un débat éclairé en conseil, en distinguant enjeux politiques, juridiques, techniques et usages réels.", score: { QP8: 3, C1: 2, QP1: 2, QP6: 1 } },
      { text: "Cartographier les usages et dépendances, puis évaluer les impacts d’une évolution progressive de l’environnement numérique.", score: { CT2: 2, CT6: 3, C5: 2, CG2: 1 } },
      { text: "Associer les communautés ESR et réseaux professionnels pour comparer les trajectoires d’autres établissements.", score: { C6: 3, QP7: 2, C1: 1, QP9: 2 } }
    ]
  },

  {
    title: "Données de pilotage et réussite étudiante",
    text: "La gouvernance souhaite disposer d’indicateurs fiables sur la réussite étudiante. Les données de la scolarité, de l’observatoire, du décisionnel et des composantes divergent.",
    answers: [
      { text: "Installer une gouvernance des données avec définitions partagées, responsabilités, qualité, traçabilité et usages décisionnels.", score: { CT5: 3, C5: 3, CG1: 2 } },
      { text: "Organiser un travail de médiation entre directions métiers pour stabiliser les définitions et les responsabilités.", score: { QP6: 3, C2: 2, CG3: 2, QP5: 1 } },
      { text: "Produire une note à la gouvernance expliquant limites, risques d’interprétation et conditions de fiabilisation.", score: { QP8: 2, QP1: 3, C1: 2, C5: 1 } },
      { text: "Analyser les flux, référentiels, règles de calcul et ruptures d’interopérabilité entre applications métiers.", score: { CT3: 3, CT5: 3, CT2: 1, QP1: 1 } }
    ]
  },

  {
    title: "Mutualisation interuniversitaire",
    text: "Une université voisine propose une mutualisation autour d’une plateforme numérique commune. L’opportunité est réelle, mais les questions de gouvernance, de financement, de support et de réversibilité sont sensibles.",
    answers: [
      { text: "Évaluer le modèle de gouvernance, les responsabilités, les coûts complets, les engagements et les conditions de sortie.", score: { C6: 3, C3: 2, CG1: 2, QP1: 1 } },
      { text: "Organiser des ateliers entre équipes pour identifier les compétences mutualisables et les risques de dépendance.", score: { CM1: 2, CM3: 2, QP6: 3, C6: 1 } },
      { text: "Analyser interopérabilité, sécurité, architecture cible, niveaux de service et réversibilité technique.", score: { CT3: 3, CT4: 1, CT6: 2, CG2: 2 } },
      { text: "Préparer une décision stratégique en explicitant bénéfices usagers, risques institutionnels et trajectoire de coopération.", score: { C1: 2, QP8: 2, CG2: 2, QP3: 2 } }
    ]
  },

  {
    title: "Budget numérique contraint",
    text: "Le budget numérique baisse alors que les coûts de licences, d’hébergement, de cybersécurité et de maintien en condition opérationnelle augmentent. La présidence demande des arbitrages lisibles.",
    answers: [
      { text: "Construire des scénarios d’arbitrage fondés sur risques, obligations, valeur métier, dette technique et soutenabilité.", score: { C3: 3, CG2: 3, QP1: 2 } },
      { text: "Travailler avec les responsables de pôles pour objectiver charges, compétences disponibles et effets sur la qualité de service.", score: { CM1: 3, CM2: 2, CM4: 1, CG1: 2 } },
      { text: "Identifier les leviers techniques : rationalisation applicative, contrats, hébergement, dette technique et architecture.", score: { CT2: 3, CT6: 2, CT1: 1, C3: 2 } },
      { text: "Porter un récit stratégique reliant numérique, missions de l’établissement, risques et renoncements nécessaires.", score: { C1: 2, QP8: 3, QP3: 2, C5: 1 } }
    ]
  },

  {
    title: "Crise de confiance avec les composantes",
    text: "Après plusieurs incidents, certaines composantes considèrent que la DSI n’écoute pas suffisamment leurs besoins. Le climat se tend lors des comités de pilotage.",
    answers: [
      { text: "Mettre en place des temps d’écoute, objectiver les irritants et publier une trajectoire d’amélioration partagée.", score: { QP5: 3, QP6: 2, CG3: 2, QP8: 1 } },
      { text: "Revoir les circuits de demande, les niveaux de service, les responsabilités et les instances de priorisation.", score: { CG1: 3, CM1: 2, C2: 2, CG2: 1 } },
      { text: "Analyser les causes techniques récurrentes des incidents pour distinguer dette, exploitation et défauts d’organisation.", score: { CT1: 2, CT2: 2, CT4: 2, QP1: 2 } },
      { text: "Réaffirmer le rôle stratégique de la DSI en reliant contraintes, capacités et objectifs institutionnels.", score: { C1: 2, QP3: 2, QP8: 3, C5: 1 } }
    ]
  },

  {
    title: "Accessibilité numérique",
    text: "Un audit révèle que plusieurs services numériques étudiants ne respectent pas suffisamment les exigences d’accessibilité. Les corrections sont nombreuses et les équipes projet peu formées.",
    answers: [
      { text: "Intégrer l’accessibilité dans le cycle projet : critères, tests, formation, priorisation et suivi.", score: { CT6: 3, CG1: 2, CM3: 2, C4: 1 } },
      { text: "Porter le sujet comme un enjeu de service public numérique et d’inclusion auprès de la gouvernance.", score: { C1: 2, C4: 2, QP10: 3, QP8: 1 } },
      { text: "Identifier les services les plus critiques pour les usagers et organiser une trajectoire progressive de mise en conformité.", score: { CG2: 3, CT2: 2, QP1: 2, C5: 1 } },
      { text: "Mobiliser les équipes, les métiers et les usagers concernés pour installer une culture commune de l’accessibilité.", score: { CM2: 2, CM3: 2, QP6: 2, QP5: 2 } }
    ]
  },

  {
    title: "DSIN et transformation pédagogique",
    text: "Le VP Formation souhaite accélérer l’hybridation des formations. Les enseignants expriment des attentes très diverses sur les outils, les usages, l’accompagnement et la place des données.",
    answers: [
      { text: "Construire une approche centrée sur les usages pédagogiques, l’accompagnement, l’accessibilité et la soutenabilité.", score: { C2: 2, C5: 2, CG3: 3, QP10: 1 } },
      { text: "Stabiliser l’écosystème technique : LMS, outils synchrones, interopérabilité, identité, données et support.", score: { CT2: 2, CT3: 2, CT5: 2, CT6: 1 } },
      { text: "Organiser une coopération entre VP Formation, composantes, enseignants, étudiants, DSI et appui pédagogique.", score: { QP6: 3, QP5: 2, CM2: 2, CG1: 1 } },
      { text: "Formuler une trajectoire institutionnelle reliant pédagogie, transformation numérique, qualité de service et moyens.", score: { C1: 2, QP8: 2, CG2: 2, C3: 1 } }
    ]
  },

  {
    title: "Difficultés de recrutement",
    text: "La DSI peine à recruter et fidéliser des profils en cybersécurité, données, cloud et développement. Les équipes internes s’inquiètent de l’augmentation du recours aux prestataires.",
    answers: [
      { text: "Construire une démarche compétences : cartographie, parcours, formation, mentorat, attractivité et reconnaissance.", score: { CM3: 3, CM1: 2, CM4: 2, QP9: 1 } },
      { text: "Analyser les compétences stratégiques à conserver en interne et celles pouvant être contractualisées.", score: { C3: 2, CG2: 2, CT6: 2, QP1: 2 } },
      { text: "Mettre en discussion les irritants de travail, l’organisation des priorités et les conditions de fidélisation.", score: { CM2: 3, QP5: 2, CM4: 2, QP6: 1 } },
      { text: "Défendre auprès de la gouvernance une stratégie RH numérique liée aux risques institutionnels.", score: { C1: 2, QP8: 2, QP3: 2, C5: 1 } }
    ]
  },

  {
    title: "Dette technique invisible",
    text: "Les équipes alertent sur une dette technique importante concernant plusieurs applications historiques. La gouvernance ne perçoit pas l’urgence, car les services fonctionnent encore.",
    answers: [
      { text: "Traduire la dette technique en risques métier, coûts différés, continuité de service et scénarios pluriannuels.", score: { CT2: 3, CT4: 2, CG2: 2, QP8: 1 } },
      { text: "Construire avec les équipes une cartographie partagée de la dette, de ses causes et des capacités de traitement.", score: { CM2: 2, CM1: 2, QP5: 2, CT2: 2 } },
      { text: "Inscrire la résorption dans la feuille de route numérique et les arbitrages budgétaires.", score: { CG1: 3, C3: 2, C5: 1, QP1: 2 } },
      { text: "Utiliser le sujet comme levier pédagogique pour expliquer la soutenabilité du SI en comité de direction.", score: { C1: 2, QP8: 3, QP3: 1, QP9: 2 } }
    ]
  },

  {
    title: "DPO et outil pédagogique externe",
    text: "Une équipe pédagogique souhaite utiliser un outil externe collectant des données étudiantes sensibles. Le besoin pédagogique est réel, mais le cadre contractuel et juridique est incertain.",
    answers: [
      { text: "Analyser finalité, base légale, minimisation, sécurité, contrat, information des étudiants et alternatives institutionnelles.", score: { C4: 3, CT4: 2, QP1: 2, QP10: 1 } },
      { text: "Organiser un dialogue entre enseignants, DPO, DSI et direction de la formation pour qualifier le besoin.", score: { QP6: 3, QP5: 2, C2: 1, CG1: 2 } },
      { text: "Étudier les possibilités techniques d’intégration, de sécurisation, de cloisonnement et de réversibilité.", score: { CT3: 2, CT4: 2, CT6: 2, C4: 1 } },
      { text: "Formaliser une doctrine d’usage des outils externes pour éviter des décisions au cas par cas.", score: { CG1: 3, C5: 2, QP8: 1, QP7: 1 } }
    ]
  },

  {
    title: "Comité numérique d’établissement",
    text: "Le comité numérique devient une chambre d’enregistrement de projets déjà décidés. Les débats portent peu sur les priorités, les risques, les capacités ou les arbitrages.",
    answers: [
      { text: "Repositionner l’instance sur les arbitrages, les capacités, les risques, les dépendances et la stratégie d’établissement.", score: { CG1: 3, CG2: 3, C1: 1, QP3: 1 } },
      { text: "Préparer des supports plus lisibles pour aider les membres à comprendre les enjeux et à décider.", score: { QP8: 3, C5: 2, QP1: 2, C2: 1 } },
      { text: "Associer davantage les directions métiers et composantes à la préparation des décisions numériques.", score: { QP6: 3, QP5: 2, CG3: 2, C2: 1 } },
      { text: "Construire un portefeuille de projets avec charges, bénéfices, risques, dette, sécurité et qualité de service.", score: { CT2: 2, CT4: 1, CT5: 1, CG2: 3 } }
    ]
  },

  {
    title: "Interopérabilité des SI métiers",
    text: "Les applications RH, finances, scolarité et recherche produisent des données incohérentes sur les mêmes objets. Les métiers demandent un décisionnel fiable.",
    answers: [
      { text: "Établir des référentiels partagés, une gouvernance MDM et des règles d’interopérabilité entre applications.", score: { CT3: 3, CT5: 3, C5: 2 } },
      { text: "Mettre en place une démarche de médiation entre métiers pour stabiliser les définitions et les responsabilités.", score: { QP6: 3, C2: 2, CG3: 2, QP5: 1 } },
      { text: "Construire une trajectoire projet progressive, priorisée par valeur métier et risques de qualité de données.", score: { CG1: 2, CG2: 3, CT5: 2, QP1: 1 } },
      { text: "Expliquer à la gouvernance les effets institutionnels d’une donnée non gouvernée.", score: { C1: 2, C5: 2, QP8: 3, QP10: 1 } }
    ]
  },

  {
    title: "Relations avec RENATER et services nationaux",
    text: "Une évolution d’un service national impacte votre architecture locale. Les équipes métiers craignent une perte d’autonomie et les équipes techniques anticipent une charge importante.",
    answers: [
      { text: "Analyser les impacts techniques locaux, les dépendances, les niveaux de service et la trajectoire de migration.", score: { CT1: 2, CT3: 2, CT6: 2, CG2: 1 } },
      { text: "Participer aux échanges nationaux et articuler les contraintes locales avec la dynamique de mutualisation.", score: { C6: 3, C1: 1, QP6: 2, QP9: 1 } },
      { text: "Organiser une communication interne contextualisée pour éviter que le changement soit perçu comme subi.", score: { QP8: 3, CG3: 2, QP5: 1, C2: 1 } },
      { text: "Revoir le portefeuille des projets pour intégrer la charge supplémentaire et les arbitrages nécessaires.", score: { CG1: 2, CG2: 3, CM1: 2 } }
    ]
  },

  {
    title: "Numérique responsable",
    text: "L’établissement souhaite inscrire le numérique responsable dans son contrat d’objectifs. Les attentes portent sur les équipements, les usages, les achats, les données et les services numériques.",
    answers: [
      { text: "Construire des indicateurs et une trajectoire reliant achats, cycle de vie, usages, hébergement, données et services.", score: { C5: 2, C3: 2, CT6: 3, CG1: 1 } },
      { text: "Mobiliser les équipes DSI autour de pratiques concrètes : sobriété applicative, maintenance, équipements et sensibilisation.", score: { CM2: 2, CM3: 2, QP10: 2, CT6: 2 } },
      { text: "Porter le sujet comme un enjeu institutionnel articulé à la responsabilité sociale et environnementale de l’établissement.", score: { C1: 2, QP8: 2, QP3: 1, C5: 2 } },
      { text: "Prioriser quelques actions mesurables pour éviter un plan trop large et difficile à suivre.", score: { CG2: 3, QP1: 2, CG1: 2 } }
    ]
  },

  {
    title: "Contradiction entre vice-présidences",
    text: "Deux vice-présidences défendent des priorités numériques incompatibles avec les ressources disponibles. La DSI est sollicitée pour instruire la décision sans devenir arbitre politique.",
    answers: [
      { text: "Objectiver ressources, dépendances, risques, bénéfices et scénarios afin de permettre un arbitrage explicite.", score: { CG2: 3, QP1: 3, C1: 1, QP8: 1 } },
      { text: "Organiser un temps de dialogue pour clarifier les besoins réels et identifier des compromis possibles.", score: { QP5: 3, QP6: 3, CG3: 1, C2: 1 } },
      { text: "Analyser les impacts sur l’architecture, la sécurité, les données et la capacité de maintien en condition opérationnelle.", score: { CT2: 2, CT4: 2, CT5: 1, CT6: 2 } },
      { text: "Assumer une posture de conseil stratégique en explicitant les conséquences des choix possibles.", score: { QP3: 3, C5: 2, QP8: 2, C1: 1 } }
    ]
  },

  {
    title: "Dialogue social et réorganisation",
    text: "Une réorganisation de la DSI est envisagée pour mieux articuler support, projets, sécurité et données. Les agents s’inquiètent des conséquences sur leurs missions.",
    answers: [
      { text: "Ouvrir un dialogue structuré sur les finalités, les impacts, les rôles, les compétences et les conditions de travail.", score: { CM4: 3, QP5: 2, QP6: 2, CM2: 1 } },
      { text: "Construire une cartographie des activités, charges, compétences et interfaces avant de proposer une cible.", score: { CM1: 3, CM3: 2, QP1: 2, CG1: 1 } },
      { text: "Relier la réorganisation aux objectifs stratégiques, aux risques numériques et à la qualité du service rendu.", score: { C1: 2, C5: 2, QP8: 2, QP10: 2 } },
      { text: "Identifier les transformations techniques qui justifient l’évolution des métiers : sécurité, cloud, données, DevOps.", score: { CT4: 2, CT6: 2, CT5: 1, CM3: 2 } }
    ]
  },

  {
    title: "Audit critique du portefeuille projets",
    text: "Un audit externe pointe un manque de pilotage du portefeuille de projets numériques. Les directions métiers dénoncent un manque de visibilité sur les priorités et les délais.",
    answers: [
      { text: "Transformer l’audit en plan d’action : priorisation, instances, indicateurs, charges, risques et transparence.", score: { CG1: 3, CG2: 3, QP9: 1, QP8: 1 } },
      { text: "Organiser des échanges avec les directions métiers pour comprendre les perceptions et restaurer la confiance.", score: { QP5: 3, QP6: 2, CG3: 2, QP8: 1 } },
      { text: "Mettre en place des indicateurs simples sur capacité, avancement, dette, qualité de service et risques.", score: { CT5: 2, CG1: 2, C5: 2, QP1: 1 } },
      { text: "Assumer les limites identifiées et installer une démarche d’amélioration continue du pilotage.", score: { QP9: 3, QP3: 2, CM2: 2, CG3: 1 } }
    ]
  },

  {
    title: "Culture usager étudiant",
    text: "Les étudiants jugent les services numériques peu lisibles : trop de portails, procédures complexes, informations dispersées et support difficile à identifier.",
    answers: [
      { text: "Mettre en place une démarche parcours usager avec tests, irritants prioritaires, simplification et mesure de satisfaction.", score: { QP10: 3, QP5: 2, CG3: 2, C5: 1 } },
      { text: "Travailler l’architecture des services : identité, portail, interopérabilité, notifications et cohérence applicative.", score: { CT2: 2, CT3: 2, CT6: 1, C5: 2 } },
      { text: "Associer étudiants, scolarité, communication, composantes et support pour construire des améliorations concrètes.", score: { QP6: 3, CM2: 2, CG1: 1, QP8: 1 } },
      { text: "Porter le sujet comme un enjeu de qualité du service public universitaire.", score: { C1: 2, QP10: 3, QP8: 2 } }
    ]
  },

  {
    title: "Sécurité et données de recherche",
    text: "Un laboratoire souhaite ouvrir largement une plateforme de données de recherche à des partenaires internationaux. Les enjeux scientifiques sont importants, mais les risques de sécurité et de conformité sont réels.",
    answers: [
      { text: "Analyser les données, les conventions, l’identité, les habilitations, la sécurité et la conformité avant ouverture.", score: { C4: 2, CT4: 3, CT5: 2, QP1: 1 } },
      { text: "Construire avec le laboratoire une solution proportionnée qui préserve les usages scientifiques.", score: { QP6: 2, QP5: 2, C2: 1, CT3: 2 } },
      { text: "Mettre en place une gouvernance des accès, des responsabilités et du suivi des risques.", score: { CG1: 2, CG2: 3, CT4: 1, C5: 1 } },
      { text: "Expliquer à la gouvernance l’équilibre à trouver entre ouverture scientifique et maîtrise des risques.", score: { C1: 2, QP8: 3, QP10: 1, QP3: 1 } }
    ]
  },

  {
    title: "Marché public numérique urgent",
    text: "Un outil critique arrive en fin de contrat. Le besoin de remplacement est urgent, mais la procédure d’achat doit être sécurisée et les métiers redoutent une rupture de service.",
    answers: [
      { text: "Qualifier le besoin, les contraintes juridiques, les risques de continuité et le calendrier achat avec finances et juridique.", score: { C3: 3, C4: 2, CG2: 2, QP1: 1 } },
      { text: "Organiser le dialogue avec les métiers pour distinguer besoins critiques, confort d’usage et exigences contractuelles.", score: { QP5: 2, QP6: 2, C2: 2, CG1: 1 } },
      { text: "Étudier les scénarios techniques de transition, réversibilité, migration de données et continuité.", score: { CT2: 2, CT3: 2, CT5: 1, CT6: 2 } },
      { text: "Préparer une décision de gouvernance explicitant risques, coûts, délais et renoncements possibles.", score: { QP8: 2, CG1: 2, CG2: 2, C3: 1 } }
    ]
  },

  {
    title: "Communication de crise sur l’ENT",
    text: "Une panne affecte l’ENT pendant plusieurs heures. Les réseaux sociaux relaient des critiques d’étudiants et d’enseignants. Les informations techniques restent incomplètes.",
    answers: [
      { text: "Communiquer régulièrement sur l’état de la situation, les contournements, les délais estimés et le retour d’expérience.", score: { QP8: 3, QP2: 2, CG3: 2, QP10: 1 } },
      { text: "Concentrer l’effort sur le diagnostic, la restauration priorisée et la prévention d’une aggravation.", score: { CT1: 2, CT4: 3, CG2: 2 } },
      { text: "Coordonner DSI, communication, composantes et support pour homogénéiser les messages.", score: { CM2: 2, QP6: 3, CG1: 2 } },
      { text: "Après la crise, transformer l’incident en amélioration de la continuité et de la qualité de service.", score: { QP9: 3, CT4: 2, CG3: 2 } }
    ]
  },

  {
    title: "Tableau de bord présidentiel",
    text: "La présidence souhaite un tableau de bord mensuel sur l’activité numérique. Elle veut comprendre les risques, les avancées, la qualité de service et les décisions à prendre.",
    answers: [
      { text: "Construire des indicateurs sur valeur métier, qualité de service, risques, dette, sécurité, projets et satisfaction.", score: { C5: 3, CT5: 2, CG1: 2, QP1: 1 } },
      { text: "Présenter les résultats sous une forme lisible, orientée décision et adaptée à la gouvernance.", score: { QP8: 3, C1: 2, CG2: 2, QP10: 1 } },
      { text: "Associer les responsables de pôles à la production d’indicateurs fiables et utiles.", score: { CM1: 2, CM2: 2, QP6: 2, CT5: 1 } },
      { text: "Relier les indicateurs aux arbitrages budgétaires, aux contraintes de capacité et à la trajectoire numérique.", score: { C3: 2, CG2: 3, C5: 1, QP3: 1 } }
    ]
  },

  {
    title: "DevOps dans une DSI universitaire",
    text: "Vous souhaitez rapprocher développement, exploitation et sécurité. Les cultures professionnelles restent cloisonnées et certains agents craignent une perte d’expertise ou d’autonomie.",
    answers: [
      { text: "Mettre en place des objectifs partagés, rituels communs, clarification des rôles et apprentissage collectif.", score: { CM1: 3, CM2: 3, QP6: 2 } },
      { text: "Introduire progressivement des pratiques d’intégration continue, supervision, automatisation et sécurité intégrée.", score: { CT1: 2, CT2: 2, CT4: 2, CT6: 1 } },
      { text: "Accompagner les inquiétudes professionnelles et valoriser les compétences existantes dans la nouvelle organisation.", score: { CM4: 2, CM3: 2, QP5: 3, QP9: 1 } },
      { text: "Inscrire la démarche dans une trajectoire de qualité de service et de réduction des risques opérationnels.", score: { CG3: 2, CG1: 2, QP8: 2, C5: 1 } }
    ]
  },

  {
    title: "Bilan annuel devant les instances",
    text: "Vous devez présenter le bilan numérique annuel devant les instances. Les attentes portent sur les résultats, les limites, les risques, la contribution aux missions et les décisions à venir.",
    answers: [
      { text: "Présenter une lecture stratégique reliant numérique, missions de l’établissement, risques, valeur publique et arbitrages.", score: { C1: 3, C5: 2, QP8: 3 } },
      { text: "Documenter précisément projets, indicateurs, dette, qualité de service, sécurité et trajectoire d’amélioration.", score: { CT5: 2, CT4: 2, CG1: 2, QP1: 2 } },
      { text: "Valoriser le travail des équipes et expliciter les contraintes de capacité et de compétences.", score: { CM2: 2, CM3: 2, CM4: 1, QP10: 2 } },
      { text: "Utiliser le bilan pour ouvrir une discussion sur les priorités de l’année suivante.", score: { CG2: 3, QP3: 2, QP6: 2, C3: 1 } }
    ]
  },

  {
    title: "No code et initiatives locales",
    text: "Plusieurs directions métiers créent des applications no code pour répondre rapidement à leurs besoins. Certaines solutions manipulent des données sensibles et échappent à la gouvernance SI.",
    answers: [
      { text: "Établir un cadre no code : types d’usages, données autorisées, sécurité, accompagnement, support et cycle de vie.", score: { C4: 2, C5: 2, CT2: 2, CG1: 2 } },
      { text: "Accompagner les métiers pour transformer ces initiatives en innovation maîtrisée plutôt qu’en shadow IT.", score: { QP7: 3, QP6: 2, CG3: 2, QP5: 1 } },
      { text: "Cartographier les applications créées, les flux de données, les dépendances et les risques de maintenance.", score: { CT2: 2, CT5: 2, CT6: 2, QP1: 1 } },
      { text: "Porter auprès de la gouvernance une réflexion sur autonomie métier, contrôle, responsabilité et mutualisation.", score: { C1: 2, C6: 2, QP8: 2, QP3: 1 } }
    ]
  },

  {
    title: "Fusion ou rapprochement d’établissements",
    text: "Un projet de rapprochement entre établissements implique une convergence progressive des systèmes d’information, des identités, des données et des services numériques.",
    answers: [
      { text: "Analyser les processus, référentiels, responsabilités et impacts organisationnels avant de définir la trajectoire SI.", score: { C2: 3, C5: 2, CG1: 2, QP1: 1 } },
      { text: "Construire une trajectoire technique d’urbanisation, d’interopérabilité et de convergence des services critiques.", score: { CT2: 3, CT3: 3, CT6: 1 } },
      { text: "Mettre en place des espaces de coopération entre équipes DSI pour partager contraintes, compétences et pratiques.", score: { CM2: 2, CM1: 2, QP6: 3, CM3: 1 } },
      { text: "Préparer une gouvernance du numérique capable de traiter arbitrages, identités institutionnelles et soutenabilité.", score: { C1: 2, C6: 2, CG2: 2, QP3: 1 } }
    ]
  },

  {
    title: "Usage des données étudiantes pour l’accompagnement",
    text: "La gouvernance souhaite mieux repérer les étudiants en difficulté à partir de traces numériques et de données administratives. Le projet soulève des enjeux éthiques, juridiques, pédagogiques et techniques.",
    answers: [
      { text: "Qualifier finalités, proportionnalité, information des étudiants, gouvernance éthique et cadre RGPD.", score: { C4: 3, C5: 2, QP1: 2, QP10: 1 } },
      { text: "Concevoir une architecture de données robuste : qualité, sécurité, traçabilité, accès et interprétation.", score: { CT5: 3, CT4: 2, CT3: 1, C5: 1 } },
      { text: "Associer enseignants, scolarité, étudiants, DPO, observatoire et gouvernance pour éviter une lecture purement technique.", score: { QP6: 3, QP5: 2, C2: 1, CG1: 1 } },
      { text: "Prévoir un dispositif d’évaluation continue des usages, des effets et des risques de stigmatisation.", score: { QP9: 2, QP7: 2, CG3: 2, QP10: 1 } }
    ]
  },

  {
    title: "Centre de services et qualité du support",
    text: "Le support numérique est perçu comme lent et peu lisible. Les tickets augmentent, les agents sont sous pression, et les usagers ne savent pas toujours vers qui se tourner.",
    answers: [
      { text: "Revoir l’organisation du support : niveaux de service, base de connaissance, priorisation, rôles et indicateurs.", score: { CM1: 3, CG1: 2, CT1: 1, QP10: 1 } },
      { text: "Analyser les parcours utilisateurs et les irritants pour améliorer l’expérience de demande d’aide.", score: { QP5: 2, QP10: 3, CG3: 2 } },
      { text: "Mettre en place des indicateurs sur volumes, délais, causes récurrentes, satisfaction et charge des équipes.", score: { CT5: 2, C5: 2, CM4: 1, QP1: 2 } },
      { text: "Communiquer davantage sur le fonctionnement du support, les priorités et les engagements de service.", score: { QP8: 3, C2: 1, QP6: 2, CG3: 1 } }
    ]
  },

  {
    title: "Priorisation entre sécurité et innovation",
    text: "Une composante souhaite lancer rapidement un service innovant pour les étudiants. Le RSSI alerte sur des risques importants, tandis que la présidence souhaite valoriser l’innovation.",
    answers: [
      { text: "Construire un arbitrage explicite entre bénéfices, risques, mesures compensatoires et conditions de déploiement.", score: { CG2: 3, QP1: 3, C5: 1, QP7: 1 } },
      { text: "Travailler avec le RSSI et la composante pour définir une version sécurisée et progressive du service.", score: { CT4: 3, QP6: 2, CG3: 2 } },
      { text: "Présenter à la gouvernance les enjeux de responsabilité, d’image, de sécurité et de service public.", score: { C1: 2, C4: 2, QP8: 2, QP3: 1 } },
      { text: "Installer un cadre d’expérimentation limité dans le temps, évalué et réversible.", score: { QP7: 3, CG1: 2, CT6: 1, QP9: 1 } }
    ]
  }
];
