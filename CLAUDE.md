# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project using React 19, TypeScript, and Tailwind CSS. The project uses the App Router architecture and is configured with Turbopack for development and builds.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Code Style and Formatting

The project is configured with:
- ESLint with Next.js, TypeScript, and Prettier configurations
- Prettier with specific settings (tabs, 100 char width, double quotes, trailing commas)
- EditorConfig for consistent formatting across editors

## Project Structure

Based on the README, the intended project structure follows a feature-based organization:

```
src/
├── app/                 # Next.js App Router pages and layouts
├── components/          # Reusable React client components
├── configs/             # Application configuration files
├── constants/           # Global constants and enums
├── features/            # Feature-specific modules
├── hooks/               # Custom React hooks
├── store/               # Redux store and state management
└── utils/               # Utility functions
```

Currently the project only contains the basic Next.js App Router setup with `layout.tsx` and `page.tsx`.

## TypeScript Configuration

- Path alias `@/*` maps to `./src/*`
- Strict mode enabled
- Configured for Next.js with bundler module resolution

## Debugging

According to the README, press F5 to launch Chrome with debugger attached.

## Package Management

The project supports multiple package managers (npm, yarn, pnpm, bun) as evidenced by lock files, though npm is used in the scripts.