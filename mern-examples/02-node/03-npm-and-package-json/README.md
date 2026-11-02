# npm and package.json

npm installs packages (code written by other developers). package.json is your
project's ID card: it lists those packages and your scripts.

## Try it (type these in a new empty folder)

```bash
mkdir npm-demo
cd npm-demo
npm init -y                  # creates package.json
npm install express          # adds express to "dependencies"
npm install -D nodemon       # adds nodemon to "devDependencies"
```

Now open `package.json` and look at it. Then open the new `node_modules` folder:
that is where the downloaded code lives.

## Add a script

Inside package.json, change the scripts part to:

```json
"scripts": {
  "dev": "nodemon app.js"
}
```

Create `app.js` with `console.log("hi")` and run:

```bash
npm run dev
```

Edit and save app.js: nodemon restarts it automatically.

## Remember

- `dependencies`: needed to run the app. `devDependencies`: only for development.
- Never upload `node_modules` to GitHub. Create a `.gitignore` file containing the line `node_modules`.
- Anyone can rebuild node_modules by running `npm install`.
