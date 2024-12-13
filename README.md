# Nuxt Example Project

This is an example project built as a statically generated site using **Nuxt 3**. View the live site [here](https://cfg-test.letna.dev/).

## Features

- **TypeScript**
- **NuxtUI**
- **Tailwind CSS**
- **Pinia**
- **i18n**

## Project Structure

This project is organized using **Nuxt Layers**:

- **Base Layer**:
  - Provides application-specific components, layouts, pages, and configurations.
  - Component names are prefixed with `Base` and the layer is aliased as `~base`.

- **Investment Layer**:
  - Contains business logic for investment-related workflows.
  - Aliased as `~investment`.
  - Includes forms, composables, and state management for the investment process.


## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
