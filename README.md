# MIMAP - Cabinet Médical

Bienvenue sur le site officiel du **Cabinet Médical MIMAP**. Ce projet vise à offrir une vitrine digitale moderne et professionnelle pour le cabinet, facilitant la présentation des services, de l’équipe médicale, des actualités et des informations de contact.

---

## Table des matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Aperçu](#aperçu)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Déploiement](#déploiement)
- [Contribuer](#contribuer)
- [Informations de contact](#informations-de-contact)
- [Licence](#licence)

---

## Description

MIMAP est un cabinet médical situé à Nouakchott, Mauritanie, spécialisé dans la médecine préventive, la santé familiale, la santé au travail et les formations en premiers secours. Ce site web permet de :

- Présenter le cabinet et son équipe
- Détailler les services proposés
- Publier des actualités et articles de blog
- Faciliter la prise de contact

---

## Fonctionnalités

- **Design responsive** : Adapté aux écrans desktop, tablette et mobile
- **Navigation fluide** : Menu de navigation avec liens d’ancrage
- **Sections dédiées** :
  - Présentation du cabinet
  - Services médicaux détaillés
  - Équipe médicale avec photos et descriptions
  - Blog/Actualités
  - Formulaire et informations de contact
- **Composants UI réutilisables** (shadcn/ui)
- **Icônes modernes** (Lucide React)
- **Performance optimisée** (Vite)
- **Gestion des assets** (images, icônes, etc.)

---

## Aperçu

![Aperçu du site](public/Section%20Hero.png)

---

## Technologies utilisées

- **React.js** : Framework JavaScript pour l’interface utilisateur
- **Tailwind CSS** : Framework CSS utilitaire pour un design rapide et moderne
- **Vite** : Outil de build rapide pour le développement et la production
- **Lucide React** : Librairie d’icônes SVG
- **shadcn/ui** : Composants UI accessibles et personnalisables

---

## Structure du projet

```
mimap-website/
│
├── public/                # Fichiers statiques (images, favicon, etc.)
├── src/
│   ├── assets/            # Images et ressources
│   ├── components/        # Composants React (About, Blog, Contact, etc.)
│   │   └── ui/            # Composants UI réutilisables
│   ├── hooks/             # Hooks personnalisés
│   ├── lib/               # Fonctions utilitaires et librairies internes
│   ├── App.jsx            # Composant principal de l’application
│   ├── App.css            # Styles globaux
│   ├── index.css          # Styles de base
│   └── main.jsx           # Point d’entrée de l’application
├── package.json           # Dépendances et scripts
├── vite.config.js         # Configuration Vite
├── jsconfig.json          # Configuration JS/TS
├── README.md              # Documentation du projet
└── ...
```

---

## Installation

1. **Cloner le repository :**
   ```bash
   git clone https://github.com/[username]/mimap-website.git
   cd mimap-website
   ```

2. **Installer les dépendances :**
   ```bash
   pnpm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   pnpm run dev
   ```

4. **Ouvrir le site dans votre navigateur :**
   [http://localhost:5173](http://localhost:5173)

---

## Utilisation

- **Développement local :**  
  Modifiez les fichiers dans `src/` pour personnaliser les composants, styles ou fonctionnalités.
- **Ajout d’images :**  
  Placez vos images dans le dossier `public/` ou `src/assets/` et référencez-les dans vos composants.
- **Ajout de nouveaux composants :**  
  Créez un fichier `.jsx` dans `src/components/` et importez-le dans `App.jsx` pour l’intégrer à la page.

---

## Déploiement

Pour générer une version optimisée pour la production :

```bash
pnpm run build
```

Les fichiers prêts à être déployés se trouveront dans le dossier `dist/`.  
Vous pouvez ensuite héberger le site sur n’importe quel service statique (Vercel, Netlify, GitHub Pages, etc.).

---

## Contribuer

Les contributions sont les bienvenues !  
Pour contribuer :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`)
3. Commitez vos modifications (`git commit -am 'Ajout d’une nouvelle fonctionnalité'`)
4. Poussez la branche (`git push origin feature/ma-nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request
  
---

## Informations de contact

**Cabinet MIMAP**  
- **Adresse** : Ilot K EXT 929, Nouakchott, Mauritanie  
- **Téléphone** : +222 3124 4404 / +222 4479 4404  
- **Email** : cabinetmimap@gmail.com  
- **Horaires** :  
  - Lun-Jeu : 15h-22h  
  - Ven : 16h-22h  
  - Sam : 10h-17h  

---

## Licence

Ce projet est développé pour le Cabinet Médical MIMAP.  
Toute reproduction ou utilisation sans autorisation est interdite.

---