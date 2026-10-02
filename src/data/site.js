// Toutes les infos modifiables du site sont ici.

export const site = {
  nom: 'Agaliane',
  titre: 'Agaliane — Bijoux fantaisie et ateliers de création à Nîmes',
  description:
    'Boutique-atelier à Nîmes : vente de bijoux fantaisie, perles et accessoires, réparation et rachat, ateliers de création sur rendez-vous avec vos propres pendentifs.',

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

// Tarifs des ateliers de création.
export const tarifs = [
  {
    titre: 'Perles fantaisies',
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

// Widget de réservation SimplyBook.
// À CHANGER : "url" pointe vers le compte de test (tomtest123).
export const simplybook = {
  widget_type: 'iframe',
  url: 'https://tomtest123.simplybook.it',
  theme: 'default',
  theme_settings: {
    timeline_hide_unavailable: '1',
    hide_past_days: '0',
    timeline_show_end_time: '0',
    timeline_modern_display: 'as_slots',
    // Couleurs alignées sur la palette de src/styles/global.css
    sb_base_color: '#3a2a21',
    display_item_mode: 'block',
    booking_nav_bg_color: '#3a2a21',
    body_bg_color: '#faede7', // = fond de la section (--creme)
    sb_review_image: '',
    dark_font_color: '#3a2a21',
    light_font_color: '#ffffff',
    btn_color_1: '#8b5a3c',
    sb_company_label_color: '#3a2a21',
    hide_img_mode: '1',
    show_sidebar: '0',
    sb_busy: '#c7b3b3',
    sb_available: '#f2d1c2',
  },
  timeline: 'modern',
  datepicker: 'top_calendar',
  is_rtl: false,
  app_config: {
    clear_session: 0,
    allow_switch_to_ada: 0,
    predefined: { provider: '2', service: '2' },
  },
};
