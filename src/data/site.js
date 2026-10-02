// Toutes les infos modifiables du site sont ici.

export const site = {
  nom: 'Agaliane',
  titre: 'Agaliane — Atelier de création de bijoux à Nîmes',
  description:
    'Atelier de création de bijoux sur rendez-vous à Nîmes. Réservez un créneau, fabriquez votre bijou et ajoutez-y vos propres pendentifs.',

  telephone: '06 32 27 95 29',
  telephoneLien: 'tel:+33632279529',
  email: 'contact@agaliane.fr',

  adresse: '7 rue Sainte-Eugénie',
  ville: '30000 Nîmes',
  carte: 'https://www.google.com/maps/search/?api=1&query=7+rue+Sainte-Eug%C3%A9nie+30000+N%C3%AEmes',

  // À COMPLÉTER : horaires, tarifs et durée réels.
  horaires: 'Sur rendez-vous uniquement — horaires communiqués prochainement.',
  tarifs: 'Tarifs communiqués prochainement.',
  duree: 'Durée d’un atelier communiquée prochainement.',
};

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
    sb_base_color: '#49306b',
    display_item_mode: 'block',
    booking_nav_bg_color: '#49306b',
    body_bg_color: '#fffaf5',
    sb_review_image: '',
    dark_font_color: '#474747',
    light_font_color: '#ffffff',
    btn_color_1: '#a8703f',
    sb_company_label_color: '#372515',
    hide_img_mode: '1',
    show_sidebar: '0',
    sb_busy: '#c7b3b3',
    sb_available: '#d6ebff',
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
