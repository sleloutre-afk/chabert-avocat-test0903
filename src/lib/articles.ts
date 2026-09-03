export type Article = {
  slug: string
  titre: string
  resume: string
  date: string
  categorie: string
  contenu: string
}

const articles: Article[] = [
  {
    slug: 'contrats-distribution-cadre-juridique',
    titre: 'Contrats de distribution : quel cadre juridique choisir ?',
    resume: 'Distribution sélective, exclusive ou franchise : les critères de choix et les clauses essentielles à anticiper avant de structurer votre réseau.',
    date: '2025-09-10',
    categorie: 'Distribution commerciale',
    contenu: `
      <p>Le choix du contrat de distribution est une décision stratégique pour toute entreprise souhaitant développer son réseau commercial. Trois grands modèles s'offrent aux fournisseurs : la distribution sélective, la distribution exclusive et la franchise.</p>
      <h2>La distribution sélective</h2>
      <p>Dans un réseau de distribution sélective, le fournisseur choisit ses distributeurs selon des critères qualitatifs — image de marque, compétences techniques, présentation du point de vente. Ce modèle est particulièrement adapté aux produits techniques ou de luxe. Il offre une certaine souplesse dans la zone géographique couverte, mais impose une cohérence stricte dans l'application des critères de sélection pour éviter tout risque d'abus de position dominante.</p>
      <h2>La distribution exclusive</h2>
      <p>La distribution exclusive octroie à un seul distributeur le droit de commercialiser les produits sur un territoire défini. Ce modèle protège le distributeur de la concurrence intra-marque, mais le règlement d'exemption européen encadre strictement les clauses d'exclusivité territoriale. Il convient de distinguer exclusivité de territoire et exclusivité de clientèle, qui n'ont pas les mêmes effets juridiques.</p>
      <h2>La franchise</h2>
      <p>La franchise va au-delà du simple contrat de distribution : le franchiseur transmet un savoir-faire, une enseigne et une assistance continue en contrepartie d'une redevance. Le document d'information précontractuelle (DIP) est obligatoire et doit être remis au moins vingt jours avant la signature. La rédaction du contrat de franchise est un exercice délicat qui nécessite un soin particulier dans la définition du territoire concédé, des obligations du franchisé et des conditions de résiliation.</p>
      <h2>Les clauses à surveiller</h2>
      <p>Quelle que soit la forme retenue, certaines clauses méritent une attention particulière : la durée du contrat et les conditions de renouvellement, les obligations de non-concurrence post-contractuelles (limitées à un an et à un territoire défini sous le règlement d'exemption), et les clauses de prix imposé qui sont absolument prohibées par le droit de la concurrence.</p>
    `,
  },
  {
    slug: 'pratiques-restrictives-concurrence-entreprises',
    titre: 'Pratiques restrictives de concurrence : les risques pour votre entreprise',
    resume: 'Ententes illicites, abus de position dominante, prix imposés : quelles sont les pratiques sanctionnées et comment s\'en prémunir ?',
    date: '2025-09-03',
    categorie: 'Droit de la concurrence',
    contenu: `
      <p>Le droit de la concurrence distingue deux grandes catégories d'infractions : les pratiques anticoncurrentielles prohibées par les articles 101 et 102 TFUE (et leurs équivalents en droit interne, les articles L. 420-1 et L. 420-2 du Code de commerce) et les pratiques restrictives de concurrence visées par le Titre IV du Livre IV du Code de commerce.</p>
      <h2>Les ententes illicites</h2>
      <p>Constituent des ententes illicites les accords ou pratiques concertées entre entreprises qui ont pour objet ou pour effet de restreindre la concurrence sur un marché. Les ententes dites « per se » — fixation collective de prix, répartition de marchés — sont présumées illicites sans qu'il soit nécessaire d'en démontrer l'effet. Les ententes verticales entre fournisseurs et distributeurs bénéficient sous conditions du règlement d'exemption n° 2022/720.</p>
      <h2>L'abus de position dominante</h2>
      <p>Une entreprise en position dominante n'est pas tenue d'adopter un comportement concurrentiel normal : elle n'est pas libre de fixer ses prix à sa guise ni d'imposer des conditions déloyales à ses partenaires commerciaux. Les prix prédateurs, les refus de vente abusifs et les pratiques d'éviction constituent des abus caractérisés.</p>
      <h2>Les pratiques restrictives entre professionnels</h2>
      <p>Depuis la loi Macron et les ordonnances successives, le titre IV du Code de commerce sanctionne de nombreuses pratiques dans les relations commerciales : déséquilibre significatif, rupture brutale de relations commerciales établies, pratiques déloyales dans les relations agroalimentaires. Ces dispositions s'appliquent indépendamment de toute position dominante.</p>
      <h2>Les sanctions encourues</h2>
      <p>L'Autorité de la concurrence peut prononcer des amendes allant jusqu'à 10 % du chiffre d'affaires mondial. En matière civile, la victime d'une pratique anticoncurrentielle peut obtenir réparation de l'intégralité de son préjudice, y compris le manque à gagner et le préjudice moral.</p>
    `,
  },
  {
    slug: 'conformite-droit-consommation-pratiques-commerciales',
    titre: 'Conformité en droit de la consommation : les obligations des professionnels',
    resume: 'CGV, pratiques promotionnelles, publicité comparative : le point sur les obligations légales et les risques en cas de manquement.',
    date: '2025-08-27',
    categorie: 'Droit de la consommation',
    contenu: `
      <p>Le droit de la consommation impose aux professionnels un ensemble d'obligations dont la méconnaissance expose à des sanctions civiles et pénales significatives. Un audit régulier de vos pratiques commerciales est indispensable pour sécuriser votre activité.</p>
      <h2>L'information précontractuelle</h2>
      <p>Avant la conclusion de tout contrat, le professionnel doit communiquer au consommateur un ensemble d'informations définies à l'article L. 111-1 du Code de la consommation : identité du professionnel, caractéristiques essentielles du bien ou service, prix, date de livraison, existence d'un droit de rétractation. Le défaut d'information précontractuelle peut entraîner la nullité du contrat et engage la responsabilité du professionnel.</p>
      <h2>Les CGV et clauses abusives</h2>
      <p>Les conditions générales de vente doivent être rédigées de manière claire et compréhensible, sans clauses créant un déséquilibre significatif au détriment du consommateur. La Commission des clauses abusives publie régulièrement des recommandations que les juridictions tendent à suivre. Certaines clauses sont présumées abusives de manière irréfragable — la liste noire — ou réfragable — la liste grise.</p>
      <h2>Les pratiques commerciales déloyales</h2>
      <p>La directive européenne sur les pratiques commerciales déloyales, transposée aux articles L. 121-1 et suivants, prohibe les pratiques trompeuses (allégations mensongères, omissions d'informations substantielles) et les pratiques agressives (harcèlement, contrainte). La DGCCRF dispose de larges pouvoirs d'enquête et peut imposer des amendes administratives.</p>
      <h2>La publicité comparative</h2>
      <p>Licite sous conditions, la publicité comparative doit être objective, vérifiable et non trompeuse. Elle ne peut être dénigrante, ne peut créer de confusion avec une marque concurrente et ne peut tirer indûment profit de la notoriété d'un concurrent. Sa mise en oeuvre requiert une analyse juridique préalable rigoureuse.</p>
    `,
  },
  {
    slug: 'cgv-redaction-obligations-vendeur',
    titre: 'Rédiger ses CGV : obligations et bonnes pratiques',
    resume: 'Les conditions générales de vente sont le socle de vos relations commerciales. Comment les rédiger pour protéger votre activité tout en restant conformes ?',
    date: '2025-08-20',
    categorie: 'Contrats d\'affaires',
    contenu: `
      <p>Les conditions générales de vente (CGV) constituent le socle de la relation commerciale entre un vendeur et ses clients. Leur rédaction n'est pas une simple formalité : elles engagent juridiquement et doivent être adaptées à chaque activité.</p>
      <h2>Les mentions obligatoires en B2C</h2>
      <p>En droit de la consommation, les CGV doivent mentionner les coordonnées du professionnel, les caractéristiques essentielles du produit ou service, le prix TTC et les frais de livraison, les modalités de paiement, les délais de livraison, le droit de rétractation et ses conditions d'exercice, les garanties légales (conformité et vices cachés), et les coordonnées du médiateur de la consommation.</p>
      <h2>Les CGV en B2B</h2>
      <p>Entre professionnels, les CGV doivent notamment préciser les conditions de règlement, les pénalités de retard (au moins égales au taux directeur de la BCE majoré de 10 points), le montant de l'indemnité forfaitaire pour frais de recouvrement (40 euros minimum), et les conditions d'application des garanties commerciales. L'article L. 441-1 du Code de commerce encadre strictement les délais de paiement inter-entreprises.</p>
      <h2>La clause de réserve de propriété</h2>
      <p>Indispensable pour les vendeurs de marchandises, la clause de réserve de propriété permet au vendeur de récupérer ses biens en cas de non-paiement, même en cas de procédure collective de l'acheteur. Elle doit être expressément acceptée par l'acheteur au plus tard au moment de la livraison et mentionnée sur chaque bon de commande ou facture.</p>
      <h2>La limitation de responsabilité</h2>
      <p>Les clauses limitative de responsabilité sont valides entre professionnels sous réserve qu'elles ne vident pas le contrat de sa substance. En B2C, elles sont réputées abusives lorsqu'elles suppriment ou limitent le droit à réparation du consommateur pour un manquement du professionnel à ses obligations.</p>
    `,
  },
  {
    slug: 'relations-fournisseurs-distributeurs-negociation',
    titre: 'Relations fournisseurs-distributeurs : les clés d\'une négociation réussie',
    resume: 'La négociation commerciale annuelle est encadrée par des obligations légales strictes. Les manquements peuvent coûter très cher aux deux parties.',
    date: '2025-08-13',
    categorie: 'Distribution commerciale',
    contenu: `
      <p>Les relations entre fournisseurs et distributeurs font l'objet d'une réglementation particulièrement dense en France, renforcée au fil des ans par les lois Galland, Chatel, LME, Hamon et Sapin II. Une négociation mal conduite peut exposer votre entreprise à des sanctions significatives.</p>
      <h2>La convention unique annuelle</h2>
      <p>Depuis la loi Sapin II, les relations entre fournisseurs et distributeurs doivent être formalisées dans une convention unique récapitulant l'ensemble des obligations réciproques. Cette convention doit être conclue avant le 1er mars de chaque année pour les produits alimentaires. Elle précise les conditions de vente, les réductions de prix, les services de coopération commerciale et les obligations auxquelles le distributeur s'engage.</p>
      <h2>Les délais de paiement</h2>
      <p>En matière alimentaire, le délai de paiement ne peut dépasser 30 jours après la date de livraison pour les produits alimentaires périssables et les alcools, et 60 jours fin de mois ou 45 jours date de facture pour les autres produits alimentaires. Ces délais sont d'ordre public et ne peuvent être contractuellement allongés, sous peine de sanctions administratives allant jusqu'à 75 000 euros par manquement.</p>
      <h2>L'interdiction des pratiques déloyales</h2>
      <p>La loi Egalim 2 a durci les obligations en matière agroalimentaire : le prix des matières premières agricoles doit être pris en compte dans la négociation du tarif fournisseur, et les pénalités logistiques sont encadrées. Le déséquilibre significatif dans les droits et obligations des parties est sanctionné par une amende civile pouvant atteindre 5 % du chiffre d'affaires de l'auteur de la pratique.</p>
      <h2>Stratégie de négociation</h2>
      <p>Une négociation commerciale réussie implique d'anticiper : préparer ses tarifs et justifier ses demandes de hausses par des données objectives, documenter chaque échange pour constituer une preuve en cas de litige, et ne pas céder à des demandes contraires à la loi sous la pression d'un partenaire en position de force.</p>
    `,
  },
  {
    slug: 'agroalimentaire-contrats-specifiques-distribution',
    titre: 'Secteur agroalimentaire : les spécificités contractuelles de la distribution',
    resume: 'Le secteur vitivinicole et agroalimentaire est soumis à des règles contractuelles particulières. Tour d\'horizon des contraintes à connaître.',
    date: '2025-08-06',
    categorie: 'Distribution / Contrats',
    contenu: `
      <p>Le secteur agroalimentaire, et plus particulièrement le secteur vitivinicole, présente des particularités contractuelles que tout opérateur doit maîtriser pour sécuriser ses relations commerciales et éviter des sanctions coûteuses.</p>
      <h2>Les contrats de vente en vrac</h2>
      <p>Dans le secteur vitivinicole, les contrats de vente de vin en vrac sont soumis à des dispositions spécifiques. Le contrat doit notamment mentionner les caractéristiques du vin (appellation, millésime, volume), le prix, les modalités de prise en charge et les conditions de paiement. La France Agrimer publie régulièrement des contrats types que les opérateurs peuvent utiliser comme base de négociation.</p>
      <h2>Les appellations d'origine contrôlée</h2>
      <p>La commercialisation de vins sous AOC implique le respect de cahiers des charges stricts. Tout contrat portant sur ces vins doit préserver la traçabilité de l'appellation et ne pas compromettre les droits du producteur à maintenir son classement. Les clauses d'achat à long terme méritent une analyse juridique approfondie au regard du droit de la concurrence.</p>
      <h2>La contractualisation en agriculture</h2>
      <p>La loi Egalim a rendu obligatoire la contractualisation entre producteurs agricoles et acheteurs pour certaines filières. Ces contrats doivent prévoir une durée minimale de trois ans, un prix ou des indicateurs de prix, et des clauses de révision permettant d'adapter le prix à l'évolution des coûts de production. Le non-respect de ces obligations expose l'acheteur à des sanctions administratives.</p>
      <h2>Les contrats d'achat à terme</h2>
      <p>De plus en plus utilisés dans le secteur agroalimentaire, les contrats d'achat à terme ou de vente forward permettent de fixer les conditions d'une transaction future. Leur régime juridique est complexe : ils peuvent être qualifiés de contrats de vente à exécution différée ou d'instruments financiers selon leurs caractéristiques. Cette qualification a des conséquences importantes sur les obligations des parties et la réglementation applicable.</p>
    `,
  },
]

export function getArticles(): Article[] {
  return articles
}

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}
