<div align="center">

<img src="src/assets/DUMFlow_logo_transparent.png" alt="DUMFlow" height="110" />

# DUMFlow

**Espace Transitaire & Déclaration en Douane**

Organise tes DUM, BL, codes SH et démarches douanières en un seul endroit.

![Version](https://img.shields.io/badge/version-0.1.0-0088ff?style=flat-square)
![React](https://img.shields.io/badge/React-19.3-61dafb?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)
![MUI Icons](https://img.shields.io/badge/MUI_Icons-9.6-007fff?style=flat-square&logo=mui&logoColor=white)
![Stockage](https://img.shields.io/badge/stockage-localStorage-ff1e42?style=flat-square)
![Statut](https://img.shields.io/badge/statut-MVP-1eff44?style=flat-square)

</div>

---

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités (v0.1.0)](#fonctionnalités-v010)
- [Aperçu](#aperçu)
- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Installation & démarrage](#installation--démarrage)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Architecture & flux de données](#architecture--flux-de-données)
- [Modèle de données](#modèle-de-données)
- [Règles de validation](#règles-de-validation)
- [Filtres & statistiques](#filtres--statistiques)
- [Persistance des données](#persistance-des-données)
- [Design system](#design-system)
- [Responsive](#responsive)
- [Build & déploiement](#build--déploiement)
- [Limitations connues](#limitations-connues)
- [Roadmap](#roadmap)
- [Changelog](#changelog)
- [Auteur & licence](#auteur--licence)

---

## Présentation

**DUMFlow** est une application web légère pensée pour le **suivi quotidien du travail d'un transitaire / déclarant en douane**.
Elle permet de noter rapidement une tâche ou une information liée à un dossier (DUM, BL, EUR.1, visite à quai, mainlevée…), de la classer par **régime** ou **étape**, de la marquer comme **urgente**, d'y attacher des **notes** (code SH, client, conteneur, contact inspecteur, remarque BADR…) et de suivre son avancement jusqu'à la validation.

L'application fonctionne **entièrement dans le navigateur** : aucun compte, aucun serveur, aucune donnée envoyée sur Internet. Tout est sauvegardé automatiquement en local.

> **v0.1.0** est la première version publique (MVP) : elle couvre le cycle complet *ajouter → suivre → terminer → supprimer*.

---

## Fonctionnalités (v0.1.0)

### Gestion des dossiers / tâches
- **Ajout** d'une tâche avec :
  - un **titre** obligatoire (ex. *« Vérifier EUR.1 »*, *« Visite à quai »*)
  - une **référence** optionnelle : N° DUM ou N° BL (convertie automatiquement en majuscules)
  - un **régime / étape** : Import, Export, AT (Admission Temporaire), Mainlevée, Docs / Factures
  - une **priorité** : Normal ou Urgent
  - des **notes** optionnelles (zone dépliable *« + Infos / Code SH »*)
  - la **date du jour** ajoutée automatiquement (format `AAAA-MM-JJ`)
- **Validation** des champs avec messages d'erreur en français affichés sous chaque champ.
- **Marquer comme terminé / non terminé** via la case ronde de chaque carte.
  - Carte terminée : bordure verte, titre barré et grisé, badge *urgent* masqué.
- **Suppression** d'une tâche via l'icône corbeille.
- **Affichage des notes** enregistrées via *« Voir les infos enregistrées »* (ouverture / fermeture au clic).

### Tableau de bord
Quatre compteurs calculés en temps réel :

| Carte | Couleur | Signification |
|---|---|---|
| **Total Dossiers** | Blanc | Nombre total de tâches |
| **En cours** | Bleu | Tâches non terminées |
| **Urgents** | Rouge | Tâches à priorité *urgent* |
| **Validés** | Vert | Tâches terminées |

### Filtres
- **Filtre par statut** (onglets) : Tous · En cours · Urgents · Terminés
- **Filtre par régime** (chips) : Tous · Import · Export · AT · Mainlevée · Documentation
- Les deux filtres se **combinent** (ex. *Urgents + Export*).
- Compteur **« N dossiers affichés »** mis à jour selon le filtre actif.

### Persistance
- **Sauvegarde locale automatique** à chaque ajout, modification de statut ou suppression.
- Les données sont **rechargées** à l'ouverture de l'application.

---

## Aperçu

> 📸 *Ajouter ici une capture d'écran de l'application.*

```
docs/screenshot-v0.1.0.png
```

---

## Stack technique

| Outil | Version | Rôle |
|---|---|---|
| [React](https://react.dev) | 19.3 | Interface utilisateur |
| [Vite](https://vite.dev) | 8 | Serveur de dev & build |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | 6 | Intégration React dans Vite |
| [React Compiler](https://react.dev/learn/react-compiler) | 1.0 | Optimisation automatique des rendus (via `@rolldown/plugin-babel`) |
| [MUI Icons Material](https://mui.com/material-ui/material-icons/) | 9.6 | Icônes (`@mui/icons-material`, `@mui/material`) |
| [Emotion](https://emotion.sh) | 11 | Moteur de style requis par MUI |
| [Oxlint](https://oxc.rs) | 1.x | Linter rapide (règles React Hooks) |
| CSS natif | — | Styles par composant + variables CSS globales |
| Google Fonts | — | *Plus Jakarta Sans* & *JetBrains Mono* |

---

## Prérequis

- **Node.js ≥ 22.12** (requis par `@rolldown/plugin-babel` ; Vite 8 accepte aussi `^20.19`, mais 22.12+ est recommandé pour l'ensemble du projet)
- **npm** (fourni avec Node.js)
- Un navigateur moderne (Chrome, Edge, Firefox, Safari récents)

Vérifier sa version :

```bash
node -v
npm -v
```

---

## Installation & démarrage

```bash
# 1. Cloner le dépôt
git clone <url-du-repo> dumflow
cd dumflow

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application est ensuite accessible sur l'adresse affichée dans le terminal (par défaut `http://localhost:5173`).

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Démarre le serveur de développement avec rechargement à chaud (HMR) |
| `npm run build` | Génère la version de production optimisée dans `dist/` |
| `npm run preview` | Sert localement le contenu de `dist/` pour tester le build |
| `npm run lint` | Analyse le code avec Oxlint |

---

## Structure du projet

```
dumflow/
├── public/
│   └── DUMFlow_favicon.ico        # Icône de l'onglet
├── src/
│   ├── assets/
│   │   └── DUMFlow_logo_transparent.png
│   ├── components/
│   │   ├── CreateTaskForm.jsx     # Formulaire d'ajout + validation
│   │   ├── StatsOverview.jsx      # Carte de statistique réutilisable
│   │   └── TaskList.jsx           # Filtres + liste des cartes de tâches
│   ├── pages/
│   │   └── Home.jsx               # Page principale, détient l'état `tasks`
│   ├── styles/
│   │   ├── createTaskForm.css
│   │   ├── home.css
│   │   ├── statsOverview.css
│   │   └── taskList.css
│   ├── App.jsx                    # Composant racine
│   ├── index.css                  # Variables CSS globales, reset, polices
│   └── main.jsx                   # Point d'entrée React (StrictMode)
├── .gitignore
├── .oxlintrc.json                 # Configuration du linter
├── index.html
├── package.json
├── vite.config.js                 # Vite + plugin React + React Compiler
└── README.md
```

---

## Architecture & flux de données

```
main.jsx
 └── App.jsx
      └── Home.jsx  ─────────────── état : tasks  (source unique de vérité)
           │                        init : localStorage["tasks"]
           ├── StatsOverview ×4  ←── valeurs calculées à partir de tasks
           ├── CreateTaskForm    ←── tasks, setTasks   → ajoute une tâche
           └── TaskList          ←── tasks, setTasks   → filtre, termine, supprime
```

**Principes appliqués :**
- **Source unique de vérité** : seul `Home` possède l'état `tasks`.
- **Données dérivées** : les statistiques et le compteur ne sont pas stockés, ils sont **recalculés** à partir de `tasks` à chaque rendu.
- **Immutabilité** : chaque modification crée un nouveau tableau (`[...tasks, nouvelle]`, `map`, `filter`) avant d'appeler `setTasks`.
- **État local UI** : les filtres (`statusFilter`, `regimeFilter`) et l'ouverture des notes (`info`) restent dans `TaskList`.

---

## Modèle de données

Chaque tâche est un objet de la forme :

```json
{
  "title": "Vérifier EUR.1",
  "referenceCode": "DUM-2026/00123",
  "regime": "import",
  "priority": "urgent",
  "notes": "Code SH 8471.30 – Client X – Conteneur MSCU1234567",
  "completed": false,
  "date": "2026-11-24"
}
```

| Champ | Type | Obligatoire | Valeurs possibles |
|---|---|---|---|
| `title` | `string` | ✅ | 3 à 120 caractères |
| `referenceCode` | `string` | ❌ | `""` ou 3 à 30 caractères `A-Z 0-9 - /` (en majuscules) |
| `regime` | `string` | ✅ | `import` · `export` · `at` · `mainlevée` · `documentation` |
| `priority` | `string` | ✅ | `normal` · `urgent` |
| `notes` | `string` | ❌ | Texte libre |
| `completed` | `boolean` | ✅ | `true` · `false` (défaut `false`) |
| `date` | `string` | ✅ | Date de création ISO `AAAA-MM-JJ` (automatique) |

**Identification d'une tâche :** en v0.1.0, une tâche est identifiée par le couple **`title` + `referenceCode`** (utilisé pour la suppression et le changement de statut).

---

## Règles de validation

Appliquées au clic sur **« + Enregistrer »** :

| Champ | Règle | Message affiché |
|---|---|---|
| Titre | Ne doit pas être vide ni composé uniquement d'espaces | *Ce champ est obligatoire.* |
| Titre | Entre 3 et 120 caractères (après suppression des espaces) | *Entre 3 et 120 caractères.* |
| Référence | Optionnelle ; si remplie, doit respecter `^[A-Z0-9/-]{3,30}$` après mise en majuscules | *Uniquement lettres (A-Z), chiffres, - ou / (3-30 caractères).* |

- Le message d'erreur d'un champ disparaît dès que l'utilisateur recommence à écrire dedans.
- Après un enregistrement réussi, le formulaire est réinitialisé (régime *Import*, priorité *Normal*).

---

## Filtres & statistiques

### Logique des filtres de statut

| Onglet | Tâches affichées |
|---|---|
| **Tous** | Toutes les tâches |
| **En cours** | `completed === false` |
| **Urgents** | `completed === false` **et** `priority === "urgent"` |
| **Terminés** | `completed === true` |

Le filtre de régime s'ajoute ensuite (`regime === <régime choisi>`), sauf si *Tous* est sélectionné.

### Logique des statistiques

| Carte | Calcul |
|---|---|
| Total Dossiers | `tasks.length` |
| En cours | tâches avec `completed === false` |
| Urgents | tâches avec `priority === "urgent"` (terminées incluses) |
| Validés | tâches avec `completed === true` |

> ℹ️ La carte **Urgents** compte toutes les tâches urgentes, alors que l'onglet **Urgents** n'affiche que celles qui ne sont pas terminées.

---

## Persistance des données

- **Clé utilisée :** `localStorage["tasks"]`
- **Format :** tableau JSON des tâches (voir [Modèle de données](#modèle-de-données))
- **Lecture :** au premier rendu de `Home` (`JSON.parse(localStorage.getItem("tasks")) || []`)
- **Écriture :** après chaque ajout, changement de statut ou suppression

**À savoir :**
- Les données restent **sur l'appareil et le navigateur utilisés**. Elles ne sont pas synchronisées entre ordinateur et téléphone.
- Vider le cache / les données du site **efface toutes les tâches**.
- Les données de développement (`localhost`) et celles de la version en ligne sont **séparées** (le stockage est lié au domaine).

**Réinitialiser manuellement** (console du navigateur) :

```js
localStorage.removeItem("tasks")
```

---

## Design system

Thème **sombre néon** défini dans `src/index.css` via des variables CSS.

### Couleurs

| Variable | Valeur | Usage |
|---|---|---|
| `--bg-canvas` | `#030408` | Fond principal |
| `--bg-surface` | `#0a0d16` | Cartes et conteneurs |
| `--bg-surface-elevated` | `#111625` | Éléments interactifs |
| `--bg-hover` | `#171e33` | Survol |
| `--accent-blue` | `#0088ff` | Action principale, statut normal |
| `--accent-red` | `#ff1e42` | Urgent, alertes, suppression |
| `#1eff44` | — | Terminé / validé |
| `--text-primary` | `#f4f7ff` | Texte principal |
| `--text-secondary` | `#9aa6c2` | Texte secondaire |
| `--text-muted` | `#5f6b8a` | Libellés, placeholders |

Chaque accent dispose aussi d'une variante `-soft` (fond translucide) et `-border` (bordure translucide).

### Typographie

| Police | Usage |
|---|---|
| **Plus Jakarta Sans** | Interface, titres, textes |
| **JetBrains Mono** | Valeurs numériques, dates, références |

Une échelle typographique fluide (`--fs-page-title` → `--fs-micro`, basée sur `clamp()`) est disponible pour les évolutions futures.

### Identité visuelle
- Logo : silhouette néon bleu → rouge + wordmark **DUM**Flow.
- Dégradé signature `linear-gradient(90deg, #0088ff, #ff1e42)` (séparateur d'en-tête, signature du footer).

---

## Responsive

- **Point de rupture unique : `767px`.**
- Au-dessous :
  - en-tête sur une seule colonne,
  - statistiques en grille **2 × 2**,
  - formulaire empilé verticalement,
  - tailles de police et marges réduites,
  - boutons d'action des cartes empilés verticalement.

---

## Build & déploiement

```bash
npm run build     # génère dist/
npm run preview   # teste dist/ en local
```

Le dossier `dist/` est un site **100 % statique** : il peut être hébergé gratuitement.

| Hébergeur | Méthode |
|---|---|
| **Netlify** | Glisser-déposer `dist/`, ou connecter le dépôt (build : `npm run build`, dossier : `dist`) |
| **Vercel** | Importer le dépôt : Vite est détecté automatiquement |
| **GitHub Pages** | Définir `base: "/<nom-du-repo>/"` dans `vite.config.js`, puis publier `dist/` |

---

## Limitations connues

Version **0.1.0 (MVP)** : les points suivants sont connus et prévus pour les prochaines versions.

- **Pas d'identifiant unique** : deux tâches avec exactement le même titre **et** la même référence sont supprimées ou cochées ensemble.
- **Recherche non disponible** : la barre de recherche de l'en-tête est désactivée.
- **Modification non disponible** : une tâche ne peut pas encore être éditée après création.
- **Une seule note ouverte à la fois** : ouvrir les notes d'une carte referme celles de la précédente (et deux cartes de même titre s'ouvrent ensemble).
- **Validation** : si le titre et la référence sont invalides en même temps, un seul message d'erreur s'affiche.
- **Pas d'état vide** : aucun message n'est affiché quand la liste est vide.
- **Pas de confirmation** avant suppression.
- **Stockage local uniquement** : pas de synchronisation multi-appareils ni de sauvegarde distante.

---

## Roadmap

### v0.2.0
- [ ] Identifiant unique (`id`) pour chaque tâche + `key` React
- [ ] Composant `TaskCard` dédié (suppression du code dupliqué dans `TaskList`)
- [ ] **Recherche** par N° DUM, BL, code SH ou note
- [ ] **Modification** d'une tâche existante
- [ ] Ouverture des notes indépendante pour chaque carte
- [ ] Affichage de toutes les erreurs de validation simultanément
- [ ] Message d'**état vide**
- [ ] Sauvegarde centralisée avec `useEffect`

### Plus tard
- [ ] Confirmation avant suppression
- [ ] Export / import des données (JSON, CSV)
- [ ] Tri par date / priorité
- [ ] Échéances et rappels
- [ ] Mode clair
- [ ] Synchronisation en ligne (compte utilisateur)

---

## Changelog

### [0.1.0] — 2026-11-24
**Première version publique.**

#### Ajouté
- Formulaire d'ajout : titre, référence DUM/BL, régime, priorité, notes.
- Validation des champs avec messages en français.
- Liste des tâches sous forme de cartes : badges référence / régime / urgent, date, notes dépliables.
- Marquage terminé / non terminé avec style dédié.
- Suppression d'une tâche.
- Filtres combinables par statut et par régime, avec compteur.
- Tableau de bord : Total, En cours, Urgents, Validés.
- Sauvegarde locale automatique (`localStorage`).
- Thème sombre néon, design responsive (≤ 767 px).

---

## Auteur & licence

Conçu et développé par **Berrada Mehdi**.

© 2026 Berrada Mehdi · Tous droits réservés.

<div align="center">

**DUMFlow** — Conçu pour le suivi quotidien des déclarations en douane & transit • Sauvegarde locale automatique

</div>
