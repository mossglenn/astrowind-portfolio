# 🧾 Astro Project Snapshot
Generated: 2025-05-08T03:01:53.064Z

## 🔧 Environment

```bash
Node: v23.5.0
npm: 11.0.0
pnpm: 9.15.3
```

## 📁 File Structure

```bash
./.dockerignore
./.DS_Store
./.editorconfig
./.github/workflows/actions.yaml
./.gitignore
./.npmrc
./.prettierignore
./.prettierrc.cjs
./.project-summaries/astro-project-dump.md
./.project-summaries/astro-project-snapshot.zip
./.stackblitzrc
./.vscode/astrowind/config-schema.json
./.vscode/extensions.json
./.vscode/launch.json
./.vscode/settings.json
./astro.config.ts
./docker-compose.yml
./Dockerfile
./eslint.config.js
./LICENSE.md
./netlify.toml
./nginx/nginx.conf
./package-lock.json
./package.json
./public/_headers
./public/decapcms/config.yml
./public/decapcms/index.html
./public/robots.txt
./README.md
./sandbox.config.json
./scripts/dump-astro-project-info.mjs
./scripts/README.md
./src/.DS_Store
./src/assets/.DS_Store
./src/assets/favicons/apple-touch-icon.png
./src/assets/favicons/favicon.ico
./src/assets/favicons/favicon.svg
./src/assets/images/AmosGlennBioPic.png
./src/assets/images/app-store.png
./src/assets/images/default.png
./src/assets/images/google-play.png
./src/assets/images/hero-image.png
./src/assets/styles/.DS_Store
./src/assets/styles/tailwind.css
./src/assets/styles/tokens/base.css
./src/assets/styles/tokens/dark.css
./src/assets/styles/tokens/fonts.css
./src/components/.DS_Store
./src/components/blog/Grid.astro
./src/components/blog/GridItem.astro
./src/components/blog/Headline.astro
./src/components/blog/List.astro
./src/components/blog/ListItem.astro
./src/components/blog/Pagination.astro
./src/components/blog/RelatedPosts.astro
./src/components/blog/SinglePost.astro
./src/components/blog/Tags.astro
./src/components/blog/ToBlogLink.astro
./src/components/common/Analytics.astro
./src/components/common/ApplyColorMode.astro
./src/components/common/BasicScripts.astro
./src/components/common/CommonMeta.astro
./src/components/common/Image.astro
./src/components/common/Metadata.astro
./src/components/common/SiteVerification.astro
./src/components/common/SocialShare.astro
./src/components/common/SplitbeeAnalytics.astro
./src/components/common/ToggleMenu.astro
./src/components/common/ToggleTheme.astro
./src/components/CustomStyles.astro
./src/components/Favicons.astro
./src/components/Logo.astro
./src/components/ui/Background.astro
./src/components/ui/Button.astro
./src/components/ui/DListItem.astro
./src/components/ui/Form.astro
./src/components/ui/Headline.astro
./src/components/ui/ItemGrid.astro
./src/components/ui/ItemGrid2.astro
./src/components/ui/Timeline.astro
./src/components/ui/WidgetWrapper.astro
./src/components/widgets/Announcement.astro
./src/components/widgets/BlogHighlightedPosts.astro
./src/components/widgets/BlogLatestPosts.astro
./src/components/widgets/Brands.astro
./src/components/widgets/CallToAction.astro
./src/components/widgets/Contact.astro
./src/components/widgets/Content.astro
./src/components/widgets/FAQs.astro
./src/components/widgets/Features.astro
./src/components/widgets/Features2.astro
./src/components/widgets/Features3.astro
./src/components/widgets/Footer.astro
./src/components/widgets/Header.astro
./src/components/widgets/Hero.astro
./src/components/widgets/Hero2.astro
./src/components/widgets/HeroText.astro
./src/components/widgets/Note.astro
./src/components/widgets/Pricing.astro
./src/components/widgets/Stats.astro
./src/components/widgets/Steps.astro
./src/components/widgets/Steps2.astro
./src/components/widgets/Testimonials.astro
./src/config.yaml
./src/content/config.ts
./src/data/.DS_Store
./src/data/post/astrowind-template-in-depth.mdx
./src/data/post/get-started-website-with-astro-tailwind-css.md
./src/data/post/how-to-customize-astrowind-to-your-brand.md
./src/data/post/landing.md
./src/data/post/markdown-elements-demo-post.mdx
./src/data/post/useful-resources-to-create-websites.md
./src/env.d.ts
./src/layouts/LandingLayout.astro
./src/layouts/Layout.astro
./src/layouts/MarkdownLayout.astro
./src/layouts/PageLayout.astro
./src/navigation.ts
./src/pages/[...blog]/[...page].astro
./src/pages/[...blog]/[category]/[...page].astro
./src/pages/[...blog]/[tag]/[...page].astro
./src/pages/[...blog]/index.astro
./src/pages/404.astro
./src/pages/about.astro
./src/pages/contact.astro
./src/pages/homes/mobile-app.astro
./src/pages/homes/personal.astro
./src/pages/homes/saas.astro
./src/pages/homes/startup.astro
./src/pages/index.astro
./src/pages/landing/click-through.astro
./src/pages/landing/lead-generation.astro
./src/pages/landing/pre-launch.astro
./src/pages/landing/product.astro
./src/pages/landing/sales.astro
./src/pages/landing/subscription.astro
./src/pages/mobile-first-project-details.astro
./src/pages/pricing.astro
./src/pages/privacy.md
./src/pages/rss.xml.ts
./src/pages/services.astro
./src/pages/terms.md
./src/types.d.ts
./src/utils/blog.ts
./src/utils/directories.ts
./src/utils/frontmatter.ts
./src/utils/images-optimization.ts
./src/utils/images.ts
./src/utils/loadTokens.ts
./src/utils/permalinks.ts
./src/utils/utils.ts
./tailwind.config.js
./tsconfig.json
./vendor/integration/index.ts
./vendor/integration/types.d.ts
./vendor/integration/utils/configBuilder.ts
./vendor/integration/utils/loadConfig.ts
./vendor/README.md
./vercel.json
./vscode.tailwind.json
```

## 📄 package.json

```
{
  "name": "astrowind-portfolio",
  "version": "1.0.0-beta.52",
  "description": "AstroWind: A free template using Astro 5.0 and Tailwind CSS. Astro starter theme.",
  "type": "module",
  "engines": {
    "node": "^18.17.1 || ^20.3.0 || >= 21.0.0"
  },
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "check": "npm run check:astro && npm run check:eslint && npm run check:prettier",
    "check:astro": "astro check",
    "check:eslint": "eslint . --config ./eslint.config.js",
    "check:prettier": "prettier --check .",
    "fix": "npm run fix:eslint && npm run fix:prettier",
    "fix:eslint": "eslint --fix .",
    "fix:prettier": "prettier -w .",
    "dump": "node scripts/dump-astro-project-info.mjs"
  },
  "dependencies": {
    "@astrojs/rss": "^4.0.11",
    "@astrojs/sitemap": "^3.3.1",
    "@astrolib/analytics": "^0.6.1",
    "@astrolib/seo": "^1.0.0-beta.8",
    "@fontsource-variable/inter": "^5.2.5",
    "@tailwindcss/vite": "^4.1.5",
    "astro": "^5.7.11",
    "astro-embed": "^0.9.0",
    "astro-icon": "^1.1.5",
    "limax": "4.1.0",
    "lodash.merge": "^4.6.2",
    "unpic": "^4.1.2"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/mdx": "^4.2.6",
    "@astrojs/partytown": "^2.1.4",
    "@eslint/js": "^9.24.0",
    "@iconify-json/flat-color-icons": "^1.2.1",
    "@iconify-json/tabler": "^1.2.17",
    "@tailwindcss/typography": "^0.5.16",
    "@types/js-yaml": "^4.0.9",
    "@types/lodash.merge": "^4.6.9",
    "@types/mdx": "^2.0.13",
    "@typescript-eslint/eslint-plugin": "^8.30.1",
    "@typescript-eslint/parser": "^8.30.1",
    "astro-compress": "2.3.8",
    "astro-eslint-parser": "^1.2.2",
    "eslint": "^9.24.0",
    "eslint-plugin-astro": "^1.3.1",
    "globals": "^16.0.0",
    "js-yaml": "^4.1.0",
    "mdast-util-to-string": "^4.0.0",
    "prettier": "^3.5.3",
    "prettier-plugin-astro": "^0.14.1",
    "reading-time": "^1.5.0",
    "sharp": "0.34.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss": "^4.1.5",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.30.1",
    "unist-util-visit": "^5.0.0"
  }
}
```

## 📄 eslint.config.js

```
import astroEslintParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['~', './src'],
            ['@', './src'],
            ['@components', './src/components'],
            ['@layouts', './src/layouts'],
            ['@pages', './src/pages'],
            ['@public', './public'],
            ['@styles', './src/styles'],
            ['@utils', './src/utils'],
            ['@assets', './src/assets'],
            ['@project-images', './src/assets/images/project-images'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.astro'],
        },
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx,astro}'],
    rules: {
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    },
  },
  {
    ignores: ['dist', 'node_modules', '.github', 'types.generated.d.ts', '.astro', '.reference-files'],
  },
];

```

## 📄 .prettierignore

```
dist
node_modules
.github
.changeset
.reference-files
public

```

## 📄 .gitignore

```
# build output
dist/
.output/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

pnpm-lock.yaml

.astro
```

## 📄 .vscode/settings.json

```
{
  "css.customData": ["./vscode.tailwind.json"],
  "eslint.validate": ["javascript", "javascriptreact", "astro", "typescript", "typescriptreact"],
  "files.associations": {
    "*.mdx": "markdown"
  },
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "yaml.schemas": {
    "./.vscode/astrowind/config-schema.json": "/src/config.yaml"
  },
  "eslint.useFlatConfig": true,
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "typescript.preferences.importModuleSpecifierEnding": "js",
  "typescript.tsdk": "node_modules/typescript/lib",
  "path-intellisense.mappings": {
    "~": "${workspaceFolder}/src",
    "@": "${workspaceFolder}/src",
    "@components": "${workspaceFolder}/src/components",
    "@layouts": "${workspaceFolder}/src/layouts",
    "@pages": "${workspaceFolder}/src/pages",
    "@public": "${workspaceFolder}/public",
    "@styles": "${workspaceFolder}/src/styles",
    "@utils": "${workspaceFolder}/src/utils",
    "@assets": "${workspaceFolder}/src/assets",
    "@project-images": "${workspaceFolder}/src/assets/images/project-images"
  },
  "path-intellisense.extensionOnImport": true
}

```

## 📄 README.md

```
# 🚀 AstroWind

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

🌟 _Most *starred* & *forked* Astro theme in 2022, 2023 & 2024_. 🌟

**AstroWind** is a free and open-source template to make your website using **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account web best practices.

- ✅ **Production-ready** scores in **PageSpeed Insights** reports.
- ✅ Integration with **Tailwind CSS** supporting **Dark mode** and **_RTL_**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**, ...
- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN).
- ✅ Generation of **project sitemap** based on your routes.
- ✅ **Open Graph tags** for social media sharing.
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.

<br>

![AstroWind Theme Screenshot](https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/screenshot-astrowind-1.0.png)

[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![License](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/onwidget/astrowind#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/onwidget/astrowind/badge.svg?style=flat-square)](https://snyk.io/test/github/onwidget/astrowind)
[![Stars](https://img.shields.io/github/stars/onwidget/astrowind.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/onwidget/astrowind)
[![Forks](https://img.shields.io/github/forks/onwidget/astrowind.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/onwidget/astrowind)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Upcoming: AstroWind 2.0 – We Need Your Vision!](#-upcoming-astrowind-20--we-need-your-vision)
- [TL;DR](#tldr)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## Demo

📌 [https://astrowind.vercel.app/](https://astrowind.vercel.app/)

<br>

## 🔔 Upcoming: AstroWind 2.0 – We Need Your Vision!

We're embarking on an exciting journey with **AstroWind 2.0**, and we want you to be a part of it! We're currently taking the first steps in developing this new version and your insights are invaluable. Join the discussion and share your feedback, ideas, and suggestions to help shape the future of **AstroWind**. Let's make **AstroWind 2.0** even better, together!

[Share Your Feedback in Our Discussion!](https://github.com/onwidget/astrowind/discussions/392)

<br>

## TL;DR

```shell
npm create astro@latest -- --template onwidget/astrowind
```

## Getting started

**AstroWind** tries to give you quick access to creating a website using [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). It's a free theme which focuses on simplicity, good practices and high performance.

Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals.

In this version the template supports all the options in the `output` configuration, `static`, `hybrid` and `server`, but the blog only works with `prerender = true`. We are working on the next version and aim to make it fully compatible with SSR.

### Project structure

Inside **AstroWind** template, you'll see the following folders and files:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.ts
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit AstroWind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/astrowind/tree/main) [![Open in Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/onwidget/astrowind) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/onwidget/astrowind)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file `README.md`. Update `src/config.yaml` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:4321`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Fastrowind)

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

## Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.

```