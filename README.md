# 🥋 Bushido Dojo – Template de site web

> **Bienvenue !** Ce guide est écrit pour quelqu'un qui n'a jamais fait de code. Chaque étape est expliquée simplement, sans jargon technique. Suivez-le dans l'ordre et votre site sera en ligne en moins d'une heure.

---

## 📦 Ce que vous avez reçu

Après téléchargement, vous avez un dossier compressé (`.zip`). À l'intérieur, vous trouverez ces fichiers :

```
bushido-dojo/
├── bushido-index.html        ← Page d'accueil
├── bushido-club.html         ← Page "Le Club"
├── bushido-sensei.html       ← Page "Nos Sensei"
├── bushido-horaires.html     ← Page "Horaires"
├── bushido-tarifs.html       ← Page "Tarifs"
├── bushido-inscription.html  ← Page "Inscription / Essai gratuit"
├── bushido-contact.html      ← Page "Contact"
├── bushido-techniques.html   ← Page "Techniques"
├── bushido-style.css         ← Le design (couleurs, polices, mise en page)
└── bushido-script.js         ← Les fonctionnalités (menu, filtres, formulaires)
```

**⚠️ Important :** Ne renommez pas les fichiers `.css` et `.js`. Tous les fichiers `.html` en dépendent.

---

## 🖥️ Étape 1 — Visualiser le site sur votre ordinateur

Vous n'avez besoin d'aucun logiciel spécial pour voir votre site.

1. Décompressez le dossier `.zip` (double-cliquez dessus)
2. Ouvrez le dossier `bushido-dojo`
3. Double-cliquez sur **`bushido-index.html`**
4. Le site s'ouvre dans votre navigateur (Chrome, Firefox, Safari…)

> 💡 Pour naviguer entre les pages, utilisez les liens du menu comme sur un vrai site. Tout fonctionne localement sur votre ordinateur.

---

## ✏️ Étape 2 — Modifier le contenu (textes, infos du club)

Pour modifier les textes, vous avez besoin d'un éditeur de texte. Voici comment choisir :

### Quel logiciel utiliser ?

| Logiciel | Système | Gratuit | Lien |
|---|---|---|---|
| **Visual Studio Code** | Windows / Mac / Linux | ✅ | [code.visualstudio.com](https://code.visualstudio.com) |
| **Notepad++** | Windows | ✅ | [notepad-plus-plus.org](https://notepad-plus-plus.org) |
| **TextEdit** | Mac (déjà installé) | ✅ | (cherchez dans vos applications) |

> 🏆 **Recommandé : Visual Studio Code** (VS Code). Il colore le code et vous aide à ne pas faire d'erreurs. Installez-le, c'est gratuit.

### Comment ouvrir et modifier un fichier

1. Ouvrez **VS Code**
2. Allez dans **Fichier → Ouvrir le dossier** et sélectionnez votre dossier `bushido-dojo`
3. Dans la colonne de gauche, cliquez sur le fichier que vous souhaitez modifier (ex: `bushido-index.html`)
4. Le fichier s'ouvre. Cherchez le texte à modifier (utilisez **Ctrl+F** sur Windows ou **Cmd+F** sur Mac pour chercher)
5. Modifiez le texte entre les balises, puis **Ctrl+S** (ou **Cmd+S**) pour sauvegarder
6. Revenez dans votre navigateur et **actualisez la page** (touche F5) pour voir le résultat

---

## 🔍 Ce qu'il faut chercher et remplacer

Voici les informations à personnaliser dans **chaque fichier HTML**. Utilisez la fonction **Rechercher/Remplacer** (Ctrl+H ou Cmd+H) pour aller vite.

### Informations du club

| Ce que vous cherchez | Remplacez par |
|---|---|
| `Bushido Judo & Ju-Jitsu` | Le nom de votre club |
| `15 Allée des Judokas` | Votre adresse |
| `69003 Lyon` | Votre ville et code postal |
| `04 72 00 00 00` | Votre numéro de téléphone |
| `contact@bushido-judo-lyon.fr` | Votre email |
| `1991` (dans l'histoire) | L'année de fondation de votre club |
| `Henri Rousseau` | Le nom de votre fondateur / directeur technique |
| `2024` (dans le footer) | L'année en cours |

### Liens réseaux sociaux

Dans chaque fichier, cherchez :
```
href="https://facebook.com"
href="https://instagram.com"
```
Et remplacez par l'URL de votre page Facebook/Instagram (ex: `https://www.facebook.com/monclub`).

---

## 📄 Guide page par page

### 🏠 Page d'accueil (`bushido-index.html`)

C'est votre vitrine principale. Modifiez :
- Le titre principal (cherchez `La Voie du Guerrier`)
- Le texte de présentation du club
- Le nombre de pratiquants, années d'existence, etc.
- Les témoignages (cherchez `Marie L.`, `Thomas R.`, etc.)
- Les questions/réponses de la FAQ (cherchez `faq-item`)

### 🏯 Page Le Club (`bushido-club.html`)

- L'histoire du club (les paragraphes sous `Notre histoire`)
- La timeline : les années et événements importants (cherchez `tl-item`)
- Les valeurs (vous pouvez garder ou modifier les kanjis et textes)
- Les équipements disponibles dans votre dojo

### 👨‍🏫 Page Sensei (`bushido-sensei.html`)

Chaque professeur est une "carte" dans le code. Pour modifier un sensei, cherchez son nom (ex: `Henri Rousseau`) et modifiez :
- Les initiales dans l'avatar (ex: `HR` → vos initiales)
- Le grade (ex: `6e Dan`)
- Le rôle (ex: `Directeur Technique`)
- La biographie (le paragraphe `<p>`)

Pour **supprimer** un sensei : sélectionnez tout le bloc qui commence par `<article class="sensei-card` et se termine par `</article>`, et supprimez-le.

Pour **ajouter** un sensei : copiez-collez un bloc `<article>...</article>` existant et changez les infos.

### 🕐 Page Horaires (`bushido-horaires.html`)

Le tableau des horaires se modifie ligne par ligne. Chaque cours ressemble à :
```html
<div class="slot slot--adultes" data-tags="adultes judo">
  🥋 Judo Adultes
  <span class="slot-age">Débutants</span>
</div>
```

- Modifiez le texte `Judo Adultes` par votre cours
- Modifiez `Débutants` par le niveau
- Laissez une cellule vide `<td></td>` si pas de cours à ce créneau

### 💰 Page Tarifs (`bushido-tarifs.html`)

Cherchez les prix (ex: `180`, `240`, `320`, `200`) et remplacez par vos tarifs. Chaque formule contient :
- Le prix (cherchez `pc-num`)
- La liste des avantages (les lignes `<li>✓ ...`)

### 📝 Page Inscription (`bushido-inscription.html`)

- Modifiez les 4 étapes d'inscription si votre processus est différent
- Adaptez la liste des documents requis

### 📞 Page Contact (`bushido-contact.html`)

Les informations de contact (adresse, téléphone, email) sont déjà couvertes dans le tableau de remplacement global ci-dessus.

---

## 🎨 Étape 3 — Changer les couleurs

Toutes les couleurs sont définies au début du fichier `bushido-style.css`. Ouvrez ce fichier et cherchez `:root` tout en haut :

```css
:root {
  --gold: #b8922a;        /* ← Couleur dorée (titres, accents) */
  --ink: #0e0e0e;         /* ← Couleur très sombre (fond header, sections) */
  --cream: #fdfaf5;       /* ← Fond clair */
  --red-accent: #8b1a1a;  /* ← Rouge (utilisé ponctuellement) */
}
```

Pour changer une couleur :
1. Allez sur [coolors.co](https://coolors.co) ou [htmlcolorcodes.com](https://htmlcolorcodes.com) pour trouver le code couleur de votre choix
2. Remplacez le code hexadécimal (ex: `#b8922a`) par le vôtre
3. Sauvegardez et actualisez votre navigateur

> 💡 Les codes couleur commencent toujours par `#` suivi de 6 caractères, ex: `#3a6ea8` pour un bleu.

---

## 🌐 Étape 4 — Mettre le site en ligne

### Option A — Hébergement simple et gratuit (recommandé pour débuter)

**Netlify Drop** est la méthode la plus simple : glisser-déposer votre dossier, et c'est en ligne.

1. Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glissez-déposez votre dossier `bushido-dojo` sur la zone indiquée
3. Netlify génère une URL du type `https://random-name-123.netlify.app`
4. Votre site est en ligne ! 🎉

> Pour avoir votre propre adresse (ex: `www.monclub-judo.fr`), vous devrez acheter un nom de domaine (environ 10–15€/an sur OVH, Gandi, etc.) et le connecter à Netlify.

### Option B — Via votre hébergeur (OVH, PlanetHoster, etc.)

Si vous avez déjà un hébergement web :

1. Connectez-vous à votre **espace FTP** (votre hébergeur vous a envoyé les identifiants)
2. Utilisez un logiciel FTP gratuit comme **FileZilla** ([filezilla-project.org](https://filezilla-project.org))
3. Glissez tous vos fichiers dans le dossier `public_html` (ou `www`) sur le serveur
4. Votre site est accessible à votre nom de domaine

### Option C — GitHub Pages (gratuit, pour les plus aventureux)

1. Créez un compte sur [github.com](https://github.com)
2. Créez un nouveau "repository" public
3. Uploadez tous vos fichiers
4. Allez dans **Settings → Pages**, choisissez la branche `main`
5. Votre site est disponible à `https://votre-pseudo.github.io/nom-du-repo`

---

## ❓ Questions fréquentes

**Q : Est-ce que je dois payer un hébergement ?**
Netlify et GitHub Pages sont gratuits pour un usage basique. Pour un nom de domaine personnalisé (ex: `monclub.fr`), comptez 10–15€/an.

**Q : Les formulaires de contact fonctionnent-ils vraiment ?**
Les formulaires sont visuellement complets avec validation, mais n'envoient pas encore d'email. Pour activer l'envoi réel, vous avez deux options :
- **Netlify Forms** (gratuit) : ajoutez `netlify` dans la balise `<form>` et Netlify gère l'envoi automatiquement
- **Formspree.io** (gratuit jusqu'à 50 messages/mois) : créez un compte et suivez leur guide d'intégration

**Q : Puis-je changer les photos ?**
Oui. Les photos d'illustration sont actuellement des placeholders (emojis et fonds colorés). Pour ajouter une vraie photo :
1. Ajoutez votre image dans le dossier (ex: `photo-dojo.jpg`)
2. Dans le fichier HTML, remplacez la `<div class="gal-ph">` concernée par une balise image :
```html
<img src="photo-dojo.jpg" alt="Notre dojo" style="width:100%;height:100%;object-fit:cover;">
```

**Q : Comment changer la police d'écriture ?**
Les polices viennent de Google Fonts. Dans `bushido-style.css`, cherchez `font-family:` pour les modifier. Sur [fonts.google.com](https://fonts.google.com), choisissez une police et copiez son code d'intégration dans les fichiers HTML (remplacez le bloc `<link href="https://fonts.googleapis.com...`).

**Q : Est-ce que le site fonctionnera sur mobile ?**
Oui, le site est entièrement responsive. Il s'adapte automatiquement aux téléphones, tablettes et ordinateurs.

**Q : Puis-je utiliser ce template pour un client ?**
Oui, la licence commerciale est incluse. Vous pouvez modifier et utiliser ce template pour autant de projets que vous le souhaitez.

---

## 🆘 Besoin d'aide ?

Si vous êtes bloqué, voici des ressources utiles :

- **MDN Web Docs** (en français) : [developer.mozilla.org/fr](https://developer.mozilla.org/fr) — référence complète du HTML/CSS
- **OpenClassrooms** : des cours gratuits en français pour apprendre le HTML/CSS pas à pas
- **ChatGPT / Claude** : décrivez votre problème en français, ces outils peuvent vous aider à comprendre ou corriger votre code

---

## 📋 Récapitulatif rapide

| Je veux... | Je modifie... |
|---|---|
| Changer le nom du club | Tous les fichiers `.html` (Ctrl+H) |
| Changer l'adresse / téléphone | Tous les fichiers `.html` (Ctrl+H) |
| Modifier les tarifs | `bushido-tarifs.html` |
| Modifier les horaires | `bushido-horaires.html` |
| Ajouter/supprimer un prof | `bushido-sensei.html` |
| Changer les couleurs | `bushido-style.css` (section `:root`) |
| Mettre en ligne | Netlify Drop (glisser-déposer) |

---

*Merci d'avoir choisi le template Bushido Dojo. Bonne personnalisation ! 🥋*
