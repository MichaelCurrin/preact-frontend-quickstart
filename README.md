# Preact Frontend Quickstart
> Starter template using Preact on the website's frontend - without using Node

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/preact-frontend-quickstart?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/preact-frontend-quickstart/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![dependency - preact](https://img.shields.io/badge/dependency-preact-blue)](https://www.npmjs.com/package/preact)
[![Hosted with GH Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://pages.github.com/)


## Preview

<div align="center">
    <a href="https://michaelcurrin.github.io/preact-frontend-quickstart/">
        <img src="/sample.png" alt="Sample screenshot" title="Sample screenshot" width="400" />
    </a>
</div>


## Online demo

<div align="center">

[![View site - GH Pages](https://img.shields.io/badge/View_site-GH_Pages-blue?style=for-the-badge)](https://michaelcurrin.github.io/preact-frontend-quickstart/)

</div>


## Use this project

<div align="center">

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)](https://github.com/MichaelCurrin/preact-frontend-quickstart/generate)

</div>

1. Add this project to your repos with the template button (no need to fork).
2. Go to your repo's _Settings_ and enable _GitHub Pages_.
3. Within a minute, you'll have your own site deployed to `MyUsername.github.io/preact-frontend-quickstart`.

If you want to run the web app locally, just start a static server in the repo root. See recommended server options in this [gist](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95).


## What is Preact?

- [Preact homepage](https://preactjs.com/)
    > Fast 3kB alternative to React with the same modern API
    
See also [Getting started](https://preactjs.com/guide/v10/getting-started/) page.

The version of Preact is not locked in [main.js](/main.js).

The URL is:

https://unpkg.com/preact?module 

You could lock the version as:

https://unpkg.com/preact@10.5.13?module 


## Alternative projects

### Preact with Node

You can use Preact as a CLI tool with Node. Here is a template project based on the Create Preact App quickstart.

[![MichaelCurrin - preact-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=preact-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/preact-quickstart)

### React quickstart

Rather want to use React? See this React template. Includes documentation and a flow build and deploy to GitHub Pages.

[![MichaelCurrin - react-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=react-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/react-quickstart)


## About
> More info on this project

### Stucture

This project only needs 3 files to run.

- [index.html](/index.html) - homepage.
- [main.js](/main.js) - the app logic. This loads dependencies, constructs the app and then mounds it on the `body` element of the HTML.
- [styles.css](/styles.css) - some minimal CSS styling.

The JS file is is loaded as an ES Module, which means we get to load `preact` and `htm` with the `import` syntax and so don't need to load those as separate `script` tags on the HTML page. This keeps all your JS and dependencies together, without needing the HTML page for validation and testing (like unit tests).

### Features

- Built on Preact latest version.
- No build step - locally or for CI/CD. Just start a static server in the project root - locally or with GH Pages or Netlify.
- This light Preact setup on the frontend is great for small and simple projects.
- It's also adding interactive behavior to an existing site, without having to rebuild as a Node/React/Preact app and also while keeping the browser impact minimal (Preact is only 3kb).
- You can put your JS code as a separate JS script as here with [main.js](/main.js), or even directly on your HTML page.
- This project structure is lighter - no `package.json`, no ESLint config and no Prettier config. See limitations below around this.

### Limitations

- Developer experience is limited - no CLI tooling to catch syntax or linting errors.
- No use of JSX syntax. You can use `htm` though as covered in the Getting Started page of Preact.
- No use of Prettify - though you can always use the online version at the [Prettier Playground](https://prettier.io/playground/) or run it ad hoc using `npx prettier main.js -w` (requires Node to be installed but doesn't require Prettier to be installed).
- Preact 

### The demo

The demo site is served using static assets and GitHub Pages. No build step needed.

The `.nojekyll` file is setup to prevent Jekyll processing. Since Jekyll is no needed here and you could otherwise get errors using JavaScript syntax that looks like Liquid syntax.


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
