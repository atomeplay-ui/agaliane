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

  // À COMPLÉTER : horaires réels.
  horaires: 'Sur rendez-vous uniquement — horaires communiqués prochainement.',
  duree: '2 h',
};

// Informations légales (pages Mentions légales, Confidentialité, Conditions de réservation).
// Tout ce qui commence par « [À COMPLÉTER » s'affiche tel quel sur le site : à remplacer.
export const legal = {
  // Source : fiche Pappers de l'entreprise (SIREN 898 473 327).
  raisonSociale: 'Agathe Jean EI, exerçant sous le nom commercial Agaliane',
  formeJuridique: 'Entrepreneur individuel',
  capital: '', // sans objet pour un entrepreneur individuel
  siret: '898 473 327 00028',
  rcs: 'RCS Nîmes 898 473 327',
  tva: 'FR95898473327',
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
