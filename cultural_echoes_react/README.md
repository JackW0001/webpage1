# Cultural Echoes React Website

This is a React + Vite website recreated from the uploaded Cultural Echoes poster reference.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Main files

```text
src/App.jsx       Main website sections and editable text
src/App.css       Layout, colors, spacing, image size, responsive design
public/assets/    Images cropped from the uploaded poster
```

## Change an image

Put your new image into `public/assets/`, then update the path in `src/App.jsx` or `src/App.css`.

Example:

```jsx
<img src="/assets/hero-choir.jpg" alt="Choir" />
```

Change to:

```jsx
<img src="/assets/new-hero.jpg" alt="Choir" />
```

## Change the page background

In `src/App.css`, find:

```css
.poster-background {
  background-image: url('/assets/poster-reference.jpg');
}
```

Replace the file name with your new background image.
