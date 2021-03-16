# Preact Frontend Quickstart
> Starter template for using Preact on the frontend - without using Node

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

How to setup:

1. Add this project to your repos with the template button above (no need to fork).
2. Go to your repo's _Settings_ and enable _GitHub Pages_.
3. After a few seconds, open your site deployed at `MyUsername.github.io/preact-frontend-quickstart`.

If you want to run the web app locally, just start a static server in the repo root. See recommended server options in this [gist](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95).


## What is Preact?

- [Preact](https://preactjs.com/) homepage
    > Fast 3kB alternative to React with the same modern API
    
See also the [Getting Started](https://preactjs.com/guide/v10/getting-started/) page.

In this project, the Preact version is set in [main.js](/main.js).

You can use `https://unpkg.com/preact?module` to get the absolute latest, but it is safer to lock like `https://unpkg.com/preact@10.5.13?module`.


## Related projects

- [![MichaelCurrin - preact-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=preact-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/preact-quickstart) - Preact with Node quickstart. You can use Preact as a CLI tool with Node. Here is a template project based on the Create Preact App quickstart.
- [![MichaelCurrin - react-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=react-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/react-quickstart) - React with Node quickstart. Rather want to use React? See this React template. Includes documentation and a flow build and deploy to GitHub Pages.
- [![MichaelCurrin - vue-frontend-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=vue-frontend-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/vue-frontend-quickstart) - Vue without Node quickstart. A similar project to this Preact one - using Vue without a CLI or Node.


## About
> More info on this project

### Structure

This project only needs 3 files to run:

- [index.html](/index.html) - homepage.
- [main.js](/main.js) - the app logic. This loads dependencies, constructs the app and then mounts it an element in the body of the HTML.
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
- No use of JSX syntax. You can easily use `htm` though - that in covered in the Getting Started page of the docs and is used in this template project.
- No linting or formatting tool is supplied.

### The demo

The demo site is served using **static assets** on [GitHub Pages](https://pages.github.com/). No compile or build step is needed.

The `.nojekyll` file is setup to prevent [Jekyll](https://pages.github.com/) processing. Since Jekyll is no needed here and you could otherwise get errors using JavaScript syntax that looks like Liquid syntax.


## Development
> Notes for developers

### Formatting

You can use the online Prettier ersion at the [Prettier Playground](https://prettier.io/playground/).

Or use NPX to download and run Pretttier as:

```sh
$ npx prettier -w '*.{js,css}'
```

This requires Node to be installed but doesn't require Prettier to be installed.


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
