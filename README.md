# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## How to run
This project is using local server (json-server).
Open a terminal tab and run the following.
```bash
npm i
npm run dev
```

Open another terminal tab to run the local server.
In this local server we can do all CRUD operations.

```bash
# This is cutomizable. Go to package and add new script.
npm run json-server
```

## How to set up
Don't run this. This meant for future reference.
```bash
# Install it as dev dependency, as it's not meant to prodution
npm i -D json-server

npm i tailwindcss @tailwindcss/vite
npm i react-icons

```

Create a new `data` folder with a file called `db.json`.

Now create a new script to run local server. Additionaly it's good to use Postman.

In `package.json` add a new script - the port can be any value:
```json
"json-server": "json-server src/data/db.json --port 5000"
```
