# ScaleGuard Technologies — Website

Marketing site for ScaleGuard, a non-chemical inline water conditioning system.
Built with **React + Vite + Redux Toolkit + React Router**.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Project structure

```
src/
  main.jsx            App entry (Provider + Router)
  App.jsx             Routes + layout (Navbar / Footer)
  index.css           Design system (tokens, type, buttons, tables)
  data/
    content.js        All page copy — edit text here
    media.js          Image paths (see public/images/)
  store/
    store.js          Redux store
    slices/
      contactSlice.js Contact form state + submit thunk
      uiSlice.js       Mobile nav state
  components/         Navbar, Footer, PageHeader, Figure, ScrollToTop
  pages/             Home, About, HowItWorks, Applications, Benefits,
                     Projects, Consultants, Downloads, Contact
```

## Editing content
- **Text**: `src/data/content.js`
- **Images**: drop files in `public/images/` (see that folder's README) or edit paths in `src/data/media.js`
- **Routes**: defined in `src/App.jsx`; nav links in `src/data/content.js`

## To wire up later
- Contact form submit is stubbed in `contactSlice.js` (`submitContactForm` thunk) — replace the
  simulated delay with a real API call.
```

