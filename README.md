# Agaliane

Site vitrine statique de l'atelier de bijoux Agaliane (Nîmes), construit avec [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
```

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Téléphone, adresse, horaires, tarifs, widget de réservation | `src/data/site.js` |
| Une section de la page | `src/components/<Section>.astro` |
| Ordre des sections | `src/pages/index.astro` |
| Couleurs, polices, boutons | `src/styles/global.css` |
| Images (optimisées automatiquement par Astro) | `src/assets/` |

## Déploiement

Importer le dépôt GitHub dans Vercel : Astro est détecté automatiquement, aucune configuration nécessaire.
