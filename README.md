# Ayaan Panjnai — Engineering & Robotics Portfolio

A personal portfolio website built for college applications (Common App). It highlights
academics, leadership, volunteering, athletics, awards, and hands-on engineering/robotics
projects.

Built with **React + Vite** and plain modern CSS. No backend, no database — it is a static
site that can be hosted for free.

---

## 1. Install and run locally

You need [Node.js](https://nodejs.org) 18 or newer (check with `node -v`).

```bash
npm install      # install dependencies (only needed the first time)
npm run dev      # start the local dev server
```

The site opens at **http://localhost:5173**. Save any file and the browser updates instantly.

Other commands:

```bash
npm run build    # create the production build in dist/
npm run preview  # preview the production build locally
```

---

## 2. The one file you will edit most

**`src/data/portfolioData.js`** holds all the content: name, links, highlights, academics,
leadership, volunteering, athletics, awards, projects, and section headings.

Change text there and the page updates — you never have to touch the layout or CSS.

Anything that reads `REPLACE — ...` is a placeholder waiting for real information.

> Tip: search the project for `REPLACE` to find everything still left to fill in.

---

## 3. Replacing the photograph

1. Save the photo as a **`.jpg`** file.
2. Name it exactly **`ayaan-profile.jpg`**.
3. Drop it into **`public/images/`**, replacing the placeholder that is already there.

Nothing else needs to change. Guidelines:

- A portrait-shaped photo works best (roughly 4:5, e.g. 900 × 1120 pixels).
- Keep the face centred — the frame crops slightly on small screens.
- Aim for under ~500 KB so the page stays fast.

To use a different filename, update `profile.photo` in `src/data/portfolioData.js`.

**Project images:** `public/images/project-placeholder.jpg` is used by every project until you
replace it. Add your own photos to `public/images/` and point each project's `image:` field at
them, for example `image: '/images/line-follower.jpg'`.

---

## 4. Updating the LinkedIn, GitHub, and email links

Open `src/data/portfolioData.js` and edit the `links` object at the top:

```js
export const links = {
  linkedin: 'https://www.linkedin.com/in/your-real-username',
  github: 'https://github.com/ayaanpanjani5668',
  email: 'your.email@example.com',
}
```

These three values feed the hero buttons, the Contact section, and the footer at once.
External links already open in a new tab.

---

## 5. Adding an activity (leadership or volunteering)

Copy an existing block in the `leadership` or `volunteering` array and edit it:

```js
{
  title: 'Robotics Club',
  role: 'Build Team Lead',
  organization: 'Lincoln High School',
  grades: 'Grades 10–11',        // volunteering entries use `dates:` instead
  hours: '80 hours',             // volunteering only, optional
  icon: 'robot',                 // see the icon list below
  description: 'What you actually did, in one or two plain sentences.',
  impact: 'A specific result. Numbers help.',
  skills: ['CAD', 'Soldering', 'Team Communication'],
  // image: '/images/robotics-club.jpg',   // optional photo
},
```

Every field except `title` is optional — a row simply is not rendered when the field is missing.

Volunteering entries appear on the timeline in the order they are listed in the array.

**Available icon names:** `award`, `bolt`, `book`, `bookOpen`, `calendar`, `chart`, `check`,
`chip`, `clock`, `code`, `dog`, `email`, `external`, `flask`, `github`, `hands`, `heart`,
`idea`, `linkedin`, `medal`, `palette`, `robot`, `school`, `seedling`, `soccer`, `study`,
`tools`, `trophy`, `users`, `utensils`, `water`.
(Defined in `src/components/Icon.jsx` — add more from [react-icons](https://react-icons.github.io/react-icons/icons?name=fa) there.)

---

## 6. Adding a project

Add a block to the `projects` array in `src/data/portfolioData.js`:

```js
{
  title: 'Obstacle Avoiding Rover',
  image: '/images/rover.jpg',            // or keep the shared placeholder
  imageAlt: 'Rover with an ultrasonic sensor mounted on the front',
  description: 'One or two sentences a non-engineer can follow.',
  tech: ['Arduino', 'Ultrasonic Sensor', 'C++'],
  built: 'What you actually made.',
  challenge: 'The problem you ran into and how you approached it.',
  learned: 'What the build taught you.',
  github: 'https://github.com/ayaanpanjani5668/rover',   // '' hides the button
  demo: '',                                              // '' hides the button
},
```

`built`, `challenge`, and `learned` appear behind the card's **Build details** toggle, so the
grid stays quick to scan.

---

## 7. Other things you may want to change

| What | Where |
| --- | --- |
| Page title, meta description, social preview | `index.html` |
| Favicon | replace `public/favicon.svg` |
| Colours, fonts, spacing | `:root` variables at the top of `src/styles/base.css` |
| Section titles and subtitles | `sections` object in `src/data/portfolioData.js` |
| Navigation items and page order | `navItems` in `portfolioData.js` + `src/App.jsx` |

Before sharing the link with colleges, update the `og:url` line in `index.html` to the real
site address so link previews work.

---

## 8. Deploying for free

### Option A — Vercel (recommended)

1. Push this folder to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. **Add New → Project → Import** the repository.
4. Vercel detects Vite automatically:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. You get a URL like `ayaan-portfolio.vercel.app`.

Every future `git push` redeploys the site automatically.

### Option B — Netlify

1. Push this folder to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Choose the repository and set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**.

Netlify's drag-and-drop alternative: run `npm run build` locally, then drag the generated
`dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

### Pushing to GitHub the first time

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/ayaanpanjani5668/AyaanPanjaniPortfolio.git
git push -u origin main
```

### If you use GitHub Pages instead

Set `base: '/AyaanPanjaniPortfolio/'` in `vite.config.js` before building, otherwise the CSS
and images will not load.

---

## 9. Project structure

```
public/
  favicon.svg                  favicon placeholder
  images/
    ayaan-profile.jpg          replace with the real portrait
    project-placeholder.jpg    default project image
src/
  components/
    ActivityCard.jsx           leadership + volunteering card
    AwardCard.jsx
    CircuitBackdrop.jsx        decorative circuit SVG
    Footer.jsx
    Hero.jsx
    Highlights.jsx
    Icon.jsx                   icon name -> react-icon mapping
    Navbar.jsx                 sticky nav + mobile hamburger
    ProjectCard.jsx
    Reveal.jsx                 scroll-in animation wrapper
    Section.jsx                semantic <section> wrapper
    SectionTitle.jsx
  sections/
    About.jsx  Academics.jsx  Athletics.jsx  Awards.jsx
    Contact.jsx  Leadership.jsx  Projects.jsx  Volunteering.jsx
  data/
    portfolioData.js           ALL CONTENT LIVES HERE
  styles/
    base.css                   tokens, reset, typography
    layout.css                 navbar, hero, about, contact, footer
    components.css             buttons, cards, timeline, tags
  utils/
    scrollToSection.js
  App.jsx
  main.jsx
index.html                     SEO metadata and fonts
```

---

## 10. Accessibility and quality notes

- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`) with labelled sections.
- Keyboard friendly: visible focus rings, a skip link, an Escape-closable mobile menu, and
  focus that follows smooth scrolling.
- Alt text on every image (edit it alongside each image path in the data file).
- Animations are disabled automatically for visitors who prefer reduced motion.
- No phone number or home address is published anywhere on the site.
