# Shopping Cart

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
