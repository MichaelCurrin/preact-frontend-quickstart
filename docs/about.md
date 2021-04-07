# About


## What is Preact?

- [Preact homepage](https://preactjs.com/)
    > Fast 3kB alternative to React with the same modern API
    
See also the [Getting Started](https://preactjs.com/guide/v10/getting-started/) page.

In this project, the Preact version is set in [main.js](/main.js).

It is safest to lock the version like this:

- https://unpkg.com/preact@10.5.13?module

Though you could let the version float like this:

- https://unpkg.com/preact?module


## Structure

This project only needs 3 files to run:

- [index.html](/index.html) - homepage.
- [main.js](/main.js) - the app logic. This loads dependencies, constructs the app and then mounts it an element in the body of the HTML.
- [styles.css](/styles.css) - some minimal CSS styling.

The JS file is is loaded as an ES Module, which means we get to load `preact` and `htm` with the `import` syntax and so don't need to load those as separate `script` tags on the HTML page. This keeps all your JS and dependencies together and separate from the HTML, so it is easy to maintain as JS scripts and run tools against them.


## Features

- Built on Preact from a CDN.
- No build step - locally or for CI/CD. Just start a static server in the project root - locally or with GH Pages or Netlify.
- This light Preact setup on the frontend is great for small and simple projects.
- It's also adding interactive behavior to an existing site, without having to rebuild as a Node/React/Preact app and also while keeping the browser impact minimal (Preact is only 3kb).
- You can put your JS code as a separate JS script as here with [main.js](/main.js), or even directly on your HTML page.
- This project structure is lighter - no `package.json`, no ESLint config and no Prettier config. See limitations below around this.


## Limitations

- Developer experience is limited - no CLI tooling to catch syntax or linting errors.
- You can't use JSX syntax directly the way this project is setup. But you can use a backticks string with JSX syntax inside it, thanks to the HTM package used here.
- No linting or formatting tool is supplied.


## The demo

The demo site is served using **static assets** on [GitHub Pages](https://pages.github.com/). No compile or build step is needed.

The `.nojekyll` file is setup to prevent [Jekyll](https://pages.github.com/) processing. Since Jekyll is no needed here and you could otherwise get errors using JavaScript syntax that looks like Liquid syntax.
