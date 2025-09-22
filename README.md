This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 1. Setup and Operations

1. Set up linter and formatter auto
   1.1 Open extensions, then
   1.2 Type @recommended and install all extensions for automatic formatting.

2. How to start debugger attach chrome
   Simply click "F5" to automatically open Chrome with debugger.

## 2. Starting the Project

First, run the development server:

```bash

pnpm dev

```

## 3. Description

### 3.1 Project Architecture

## Project Structure

```
├── public/
└── src/
    ├── app/                 # Pages
    ├── components/          # 元件
    ├── constants/           # Global constants and enums
    ├── hooks/               # 共用hooks
    ├── stores/              # 全局狀態管理
    ├── services/            # 與後端和機器溝通
    └── utils/               # Utility functions
```

## 機台router

```
├── login/ 登入頁面(只有web下)
├── [device]/lobby 大廳頁面（device是web/machine）
├── report/  報表頁面(只有機器)
└── game/[slug]
```
