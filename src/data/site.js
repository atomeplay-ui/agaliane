// Toutes les infos modifiables du site sont ici.

export const site = {
  nom: 'Agaliane',
  titre: 'Agaliane — Bijoux fantaisie et ateliers créatifs à Nîmes',
  description:
    'Boutique-atelier à Nîmes : vente de bijoux fantaisie, perles et accessoires, réparation et rachat, ateliers créatifs sur rendez-vous.',

  telephone: '06 32 27 95 29',
  telephoneLien: 'tel:+33632279529',
  email: 'contact@agaliane.fr',

  adresse: '7 rue Sainte-Eugénie',
  ville: '30000 Nîmes',
  carte: 'https://www.google.com/maps/search/?api=1&query=7+rue+Sainte-Eug%C3%A9nie+30000+N%C3%AEmes',

  // À COMPLÉTER : horaires réels.
  horaires: 'Sur rendez-vous uniquement — horaires communiqués prochainement.',
  duree: '2 h',
};

// Informations légales (pages Mentions légales, Confidentialité, Conditions de réservation).
// Tout ce qui commence par « [À COMPLÉTER » s'affiche tel quel sur le site : à remplacer.
export const legal = {
  raisonSociale: '[À COMPLÉTER : nom de l’entreprise ou nom et prénom de l’entrepreneur]',
  formeJuridique: '[À COMPLÉTER : ex. entreprise individuelle (micro-entreprise), SAS, SARL…]',
  capital: '', // ex. 'Capital social : 1 000 €' — laisser vide pour une entreprise individuelle
  siret: '[À COMPLÉTER : n° SIRET]',
  rcs: '', // ex. 'RCS Nîmes 123 456 789' ou 'RNE' — selon l'immatriculation
  tva: '[À COMPLÉTER : n° de TVA intracommunautaire, ou « TVA non applicable, art. 293 B du CGI »]',
  directeurPublication: '[À COMPLÉTER : nom et prénom]',
  paiement: 'Le paiement s’effectue sur place, à la boutique, le jour de l’atelier.',
  annulation: 'L’annulation est gratuite jusqu’à 48 heures avant le début de l’atelier, par téléphone ou par e-mail.',
  mediateur: '[À COMPLÉTER : nom, adresse et site internet du médiateur de la consommation]',
  miseAJour: '7 octobre 2026',
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
