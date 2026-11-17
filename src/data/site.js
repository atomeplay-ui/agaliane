// Toutes les infos modifiables du site sont ici.

export const site = {
  nom: 'Agaliane',
  titre: 'Agaliane — Bijoux fantaisie et ateliers créatifs à Nîmes',
  description:
    'Boutique-atelier à Nîmes : vente de bijoux fantaisie, perles et accessoires, réparation et rachat, ateliers créatifs sur rendez-vous.',

  telephone: '06 32 27 95 29',
  telephoneLien: 'tel:+33632279529',
  email: 'contact@agaliane.fr',
  // Clé Web3Forms du formulaire « demande particulière » (publique par nature : elle ne permet que d'envoyer vers ta boîte).
  web3formsCle: '24cbf03b-585b-4d45-839f-c9d7db79ff00',

  adresse: '7 rue Sainte-Eugénie',
  ville: '30000 Nîmes',
  carte: 'https://www.google.com/maps/search/?api=1&query=7+rue+Sainte-Eug%C3%A9nie+30000+N%C3%AEmes',

  // Créneaux d'atelier (à garder en phase avec Cal.com). Horaires de la boutique : à ajouter quand ils seront connus.
  horaires: 'Ateliers sur réservation le mercredi et le jeudi, de 10 h à 18 h (créneaux de 2 h).',
  duree: '2 h',
};

// Informations légales (pages Mentions légales, Confidentialité, Conditions de réservation).
// Tout ce qui commence par « [À COMPLÉTER » s'affiche tel quel sur le site : à remplacer.
export const legal = {
  // Source : fiche Pappers de l'entreprise (SIREN 898 473 327).
  raisonSociale: 'Agathe Jean EI, exerçant sous le nom commercial Agaliane',
  formeJuridique: 'Entrepreneur individuel (micro-entreprise)',
  capital: '', // sans objet pour un entrepreneur individuel
  siret: '898 473 327 00028',
  rcs: 'RCS Nîmes 898 473 327',
  tva: 'TVA non applicable, art. 293 B du CGI', // micro-entreprise en franchise de TVA
  directeurPublication: 'Agathe Jean',
  paiement: 'Le paiement s’effectue sur place, à la boutique, le jour de l’atelier.',
  annulation: 'L’annulation est gratuite jusqu’à 48 heures avant le début de l’atelier, par téléphone ou par e-mail.',
  // Médiateur de la consommation (coordonnées relevées sur cm2c.net le 16/10/2026).
  mediateur: {
    nom: 'CM2C — Centre de la médiation de la consommation de conciliateurs de justice',
    adresse: '49 rue de Ponthieu, 75008 Paris',
    email: 'declarer-un-litige@cm2c.net',
    saisine: 'https://www.cm2c.net/declarer-un-litige.php',
  },
  miseAJour: '16 octobre 2026',
};

// Tarifs des ateliers créatifs.
export const tarifs = [
  {
    titre: 'Perles fantaisie',
    groupes: [
      {
        nom: 'Collier',
        lignes: [
          { nom: 'Ras de cou', prix: '25 €' },
          { nom: 'Standard', prix: '35 €' },
          { nom: 'Sautoir', prix: '45 €' },
        ],
      },
      {
        nom: 'Bracelet et boucles d’oreilles',
        lignes: [{ nom: 'Prix unique', prix: '25 €' }],
      },
    ],
  },
  {
    titre: 'Perles semi-précieuses',
    note: 'À partir de 19 € + le prix des perles',
  },
];

// Widget de réservation Cal.com.
// "lien" = identifiant-cal.com/nom-de-l-evenement.
export const calcom = {
  lien: 'agaliane/atelier-creatif',
  couleur: '#8b5a3c', // terracotta, cf. src/styles/global.css
};

// Questions fréquentes (section « Vos questions » + données lues par Google et les IA).
// Les prix sont écrits en toutes lettres : à garder en phase avec `tarifs` ci-dessus.
export const faq = [
  {
    q: 'Où se trouve la boutique-atelier Agaliane ?',
    r: `Au ${site.adresse}, ${site.ville}, dans le centre de Nîmes (Gard). ${site.horaires}`,
  },
  {
    q: 'Combien coûte un atelier de création de bijoux à Nîmes chez Agaliane ?',
    r: `Un atelier dure ${site.duree}. En perles fantaisie : collier ras de cou 25 €, collier standard 35 €, sautoir 45 €, bracelet ou boucles d’oreilles 25 €. En perles semi-précieuses : à partir de 19 € plus le prix des perles.`,
  },
  {
    q: 'Faut-il savoir faire des bijoux pour participer à un atelier ?',
    r: 'Non : vous êtes accompagné(e) pas à pas. Vous choisissez chaînes, perles et apprêts, puis vous repartez avec votre bijou unique. Les ateliers se font seul, en duo ou entre amis.',
  },
  {
    q: 'Comment réserver un atelier créatif ?',
    r: `En ligne sur agaliane.fr (rubrique « Réserver ») ou par téléphone au ${site.telephone}. ${legal.annulation}`,
  },
  {
    q: 'Agaliane répare-t-elle et rachète-t-elle les bijoux fantaisie ?',
    r: 'Oui. La boutique répare les bijoux fantaisie abîmés et rachète ceux que vous ne portez plus, dans un esprit d’upcycling : rien ne se perd, tout se transforme.',
  },
  {
    q: 'Que vend la boutique Agaliane ?',
    r: 'Des bijoux fantaisie, des perles et des accessoires : des pièces tendance, délicates ou originales, pour se faire plaisir ou offrir.',
  },
];
