# Project setup (do this once for your own project)

```bash
mkdir placement-tracker
cd placement-tracker
mkdir server
cd server
npm init -y
npm install express cors dotenv morgan
npm install -D nodemon
```

Open `package.json` and:

1. Add `"type": "module",` under `"name"` so `import` works.
2. Change scripts to:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

3. Create a `.gitignore` file with these two lines:

```
node_modules
.env
```

4. Run `git init`.

CHECK: package.json lists express, cors, dotenv, morgan and nodemon; `git status` does not show node_modules.
