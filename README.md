# Générateur de convocations CCF EPS

Outil offline pour générer les convocations d'épreuves CCF EPS au format PDF — Lycée G. Pompidou, Castelnau-le-Lez.

## Utilisation

Ouvrir `index.html` directement dans un navigateur **ou** via GitHub Pages.  
Aucun serveur requis. Tout fonctionne en local, sans connexion internet (hors premier chargement des bibliothèques jsPDF et XLSX).

## Fonctionnalités

- Import de la liste élèves depuis un fichier Excel (.xlsx)
- Personnalisation complète : établissement, activité, date, horaire, lieu, corps du texte, signature
- Aperçu temps réel de la convocation
- Génération PDF (3 convocations par page A4)
- Mode sombre
- Sauvegarde / restauration des paramètres en JSON
- Fonctionne sur PC et mobile

## Déploiement GitHub Pages

1. Créer un dépôt GitHub (public ou privé)
2. Déposer `index.html` et `README.md` à la racine
3. Aller dans **Settings → Pages → Branch: main → / (root)**
4. L'outil est accessible à `https://<utilisateur>.github.io/<dépôt>/`

## Technologies

- [jsPDF 2.5.1](https://github.com/parallax/jsPDF)
- [SheetJS (xlsx) 0.18.5](https://github.com/SheetJS/sheetjs)
- HTML/CSS/JS pur — zéro dépendance serveur
