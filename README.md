# Volugia - Site officiel (volugia.me)

Dépôt du site vitrine officiel de **Volugia**, accessible en ligne sur [volugia.me](https://volugia.me).

Volugia est une bibliothèque personnelle et un lecteur de mangas, bandes dessinées et livres numériques pour **Windows** et **Android**, conçu selon la philosophie *Local-First* : vos fichiers restent chez vous, sans cloud obligatoire ni abonnement.

---

## Fonctionnalités présentées sur le site

- **100% Local & Privé** : Vos fichiers et votre base de données SQLite restent sur votre ordinateur. Aucun serveur externe n'est requis.
- **Synchronisation locale & P2P** : Le PC héberge votre bibliothèque sur votre réseau local. Votre téléphone Android s'y associe pour lire en streaming ou télécharger vos tomes.
- **Lecteur Android natif** : Application Android en Java pur, sans WebView lourde, optimisée pour l'autonomie et le rafraîchissement d'écran.
- **Gestionnaire de téléchargements** : Suivi précis page par page, mise en pause et reprise sans perte de données.
- **Double planche automatique** : Détection intelligente des doubles pages pour une lecture fluide et immersive.
- **Large compatibilité de formats** : Prise en charge des formats CBZ (y compris 7z et RAR renommés), CBR, PDF et EPUB.
- **Connexion simplifiée** : Option de compte Google ou service local pour synchroniser la progression entre appareils.

---

## Stack technique du site

Le site a été développé selon une approche minimaliste et ultra-performante (philosophie *Ponytail*) :

- **Poids plume** : Moins de 50 Ko au total (HTML + CSS + JS hors médias).
- **Zéro dépendance** : 100% Vanilla (aucun framework JS, aucune bibliothèque CSS externe, zéro tracker).
- **Performance Core Web Vitals** : `fetchpriority="high"` sur l'image clé, `loading="lazy"` sur les médias différés, `font-display: swap` sur la police locale.
- **Accessibilité & Standards** :
  - Onglets de galerie interactifs avec attributs ARIA (`[aria-selected]`, `roving tabindex` et navigation au clavier).
  - Foire aux questions (FAQ) gérée nativement via `<details name="faq">` sans JavaScript.
  - Typographie fluide avec `clamp()` et mise en page responsive avec CSS Grid.

---

## Structure du projet

```
Volugia-Site/
├── index.html        # Page principale (structure sémantique, galerie, FAQ)
├── style.css         # Styles responsives, thème sombre Volugia (#131514)
├── main.js           # Interactions légères (menu mobile, onglets ARIA)
├── CNAME             # Configuration du domaine personnalisé (volugia.me)
├── README.md         # Documentation du projet
└── assets/           # Ressources graphiques du site
    ├── DancingScript.ttf             # Police cursive officielle
    ├── volugia.ico                   # Favicon de l'application
    ├── volugia-pc.png                # Capture PC Windows (bibliothèque)
    ├── volugia-phone-home.png        # Capture Android (accueil & Kaiju n°8)
    ├── volugia-phone-progress.png    # Capture Android (téléchargements)
    ├── volugia-phone-reader.png      # Capture Android (double page)
    └── volugia-account-google.png    # Capture Android (compte Google)
```

---

## Aperçu et développement local

Pour visualiser le site en local, vous pouvez ouvrir directement `index.html` dans votre navigateur ou lancer un serveur HTTP local :

### Avec Python :
```powershell
python -m http.server 8000
```
Puis accédez à `http://localhost:8000` dans votre navigateur.

### Avec Node.js :
```powershell
npx serve .
```

---

## Déploiement

Le site est déployé automatiquement via **GitHub Pages** sur la branche `main` et pointe sur le nom de domaine personnalisé [volugia.me](https://volugia.me) configuré dans le fichier `CNAME`.
