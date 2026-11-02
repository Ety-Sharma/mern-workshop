# MERN Workshop

Learn the MERN stack (MongoDB, Express, React, Node.js) step by step. This repo has the slides, one working example for every topic, and hands-on tasks for you to complete.

## What is in this repo

| Path | What it is |
|---|---|
| `MERN_Stack_Development-2.key` | Workshop slides (Keynote) |
| `Git-Guide-for-Students.pdf` | Beginner Git and GitHub guide: every command explained (what it does, why you run it) |
| `HTML-CSS-JS-Task/` | Warm-up: HTML and CSS tasks plus a final project. Start with its `README.md` |
| `mern-examples/` | One simple example per topic. Read and run these first. See `mern-examples/README.md` |
| `Tasks/` | Your practice tasks, in the same order as the examples |

Inside `Tasks/`:

| Folder | Topic |
|---|---|
| `01-javascript` | variables, if/else, functions, arrays, objects, loops, map/filter, find/reduce/JSON, async/await, event loop |
| `02-node` | what Node is, modules, npm, environment variables |
| `03-express` | first server, routes, middleware, Postman, CRUD, project structure |
| `04-mongodb` | Atlas, connect, schema and model, create/read/update/delete |
| `05-react` | React tasks |
| `99-final-project` | The final project |

**How to work:** for each topic, read the example in `mern-examples/`, then do the matching task in `Tasks/`. Each task has a `.md` file with the instructions, and some have a `.js` starter file to fill in.

> **Commands in this guide:** sections marked **macOS** and **Windows** have separate commands. Everything else is the same on both. Type commands one line at a time and press Enter.

---

## Step 0: Prerequisites

You need: **Git**, **Node.js (LTS)**, **VS Code**, and a free **GitHub account** (https://github.com/signup).

### 0.1 Open a terminal

| | How |
|---|---|
| **macOS** | Press `Cmd + Space`, type `Terminal`, press Enter. |
| **Windows** | Press the Windows key, type `PowerShell`, press Enter. (After installing Git you can also use **Git Bash**.) |

### 0.2 Check what you already have

Run these three commands (same on macOS and Windows):

```bash
git --version
node --version
npm --version
```

If each one prints a version number (for example `git version 2.45.0`, `v22.x.x`, `10.x.x`), that tool is installed. Skip its install step below. If you see `command not found` (macOS) or `... is not recognized` (Windows), install it.

### 0.3 Install Git

**macOS**

Option A: Apple's command line tools (includes Git):

```bash
xcode-select --install
```

Click **Install** in the popup and wait for it to finish.

Option B: Homebrew. If you don't have Homebrew yet, install it first:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the "Next steps" it prints at the end (it asks you to run two commands to add `brew` to your PATH). Then:

```bash
brew install git
```

**Windows**

Option A: download the installer from https://git-scm.com/download/win, run it, and click **Next** through the defaults.

Option B: PowerShell (Windows 10/11):

```powershell
winget install --id Git.Git -e --source winget
```

**Close the terminal and open a new one** after installing, then run `git --version` to confirm.

### 0.4 Install Node.js (LTS)

**macOS**

```bash
brew install node
```

Or download the **LTS** installer from https://nodejs.org and run it.

**Windows**

```powershell
winget install --id OpenJS.NodeJS.LTS -e --source winget
```

Or download the **LTS** installer from https://nodejs.org and run it.

Close and reopen the terminal, then confirm:

```bash
node --version
npm --version
```

> **Windows only:** if `npm install` later fails with "running scripts is disabled on this system", run this once in PowerShell and try again:
>
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```

### 0.5 Install VS Code

**macOS**

```bash
brew install --cask visual-studio-code
```

Or download it from https://code.visualstudio.com.

**Windows**

```powershell
winget install --id Microsoft.VisualStudioCode -e --source winget
```

Or download it from https://code.visualstudio.com. During setup, keep **Add to PATH** ticked so `code .` works in the terminal.

> **macOS only:** to make `code .` work, open VS Code, press `Cmd + Shift + P`, type `shell command` and choose **Shell Command: Install 'code' command in PATH**.

### 0.6 Configure Git (one time only)

Use the same email as your GitHub account. These commands are the same on both systems:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Then set line endings for your system:

**macOS**

```bash
git config --global core.autocrlf input
```

**Windows**

```powershell
git config --global core.autocrlf true
```

Check your settings:

```bash
git config --global --list
```

### 0.7 Sign in to GitHub from your computer

When you first `git push`, GitHub asks you to sign in. Account passwords no longer work for pushing. Use one of these:

**Option A (easiest): GitHub CLI**

macOS:

```bash
brew install gh
gh auth login
```

Windows:

```powershell
winget install --id GitHub.cli -e --source winget
gh auth login
```

Close and reopen the terminal after installing on Windows. Then choose **GitHub.com**, **HTTPS**, say **Yes** to authenticating Git, and sign in through the browser.

**Option B: Personal Access Token**

Create one at GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic), with the `repo` scope. When Git asks for your password on the first push, paste the token. macOS Keychain (macOS) or Git Credential Manager (Windows) will remember it.

---

## Step 1: Fork this repo (do this first)

A fork is your own copy of this repo on your GitHub account. You do all your work in your fork, so you never change the original.

1. Sign in to GitHub in your browser.
2. Open the workshop repo: https://github.com/KrunalTarale5/mern-workshop
3. Click the **Fork** button at the top right.
4. Leave the name as `mern-workshop`, then click **Create fork**.

You now have `https://github.com/<your-username>/mern-workshop`.

## Step 2: Clone your fork

Clone **your fork**, not the original. First go to the folder where you keep your work (this is where the new `mern-workshop` folder will be created).

**macOS**

```bash
cd ~/Desktop
git clone https://github.com/<your-username>/mern-workshop.git
cd mern-workshop
code .
```

**Windows (PowerShell)**

```powershell
cd $HOME\Desktop
git clone https://github.com/<your-username>/mern-workshop.git
cd mern-workshop
code .
```

Replace `<your-username>` with your GitHub username (without the `< >`).

## Step 3: Connect to the original repo (upstream)

This lets you pull in new examples and tasks the instructor adds later. Same on both systems:

```bash
git remote add upstream https://github.com/KrunalTarale5/mern-workshop.git
git remote -v
```

You should see:

```
origin    https://github.com/<your-username>/mern-workshop.git (fetch)
origin    https://github.com/<your-username>/mern-workshop.git (push)
upstream  https://github.com/KrunalTarale5/mern-workshop.git (fetch)
upstream  https://github.com/KrunalTarale5/mern-workshop.git (push)
```

## Step 4: Install the example dependencies

From the `mern-workshop` folder:

```bash
cd mern-examples
npm install
```

Then follow `mern-examples/README.md` to run the examples.

Tip: in VS Code, open the built-in terminal with `` Ctrl + ` `` (macOS and Windows). It opens in the right folder already.

---

## Daily workflow

### Get the latest content from the instructor

Do this at the start of each session. Same on both systems:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

You can also click **Sync fork** on your fork's page on GitHub, then run `git pull` locally.

### Do a task and save your work

```bash
git status                       # see what you changed
git add .                        # stage your changes
git commit -m "Complete JS task 01 variables"
git push origin main             # upload to YOUR fork
```

Commit after every task so your progress is saved and visible on GitHub.

### Submit your work

Share the link to your fork (`https://github.com/<your-username>/mern-workshop`) with the instructor, or as instructed in class.

---

## Useful commands: macOS vs Windows

| What you want | macOS (Terminal) | Windows (PowerShell) |
|---|---|---|
| Show current folder | `pwd` | `pwd` |
| List files | `ls` | `ls` or `dir` |
| Go into a folder | `cd Tasks` | `cd Tasks` |
| Go up one folder | `cd ..` | `cd ..` |
| Go to Desktop | `cd ~/Desktop` | `cd $HOME\Desktop` |
| Make a folder | `mkdir my-folder` | `mkdir my-folder` |
| Make an empty file | `touch app.js` | `New-Item app.js` |
| Show a file's contents | `cat app.js` | `cat app.js` or `type app.js` |
| Clear the screen | `clear` | `cls` |
| Stop a running program | `Ctrl + C` | `Ctrl + C` |
| Free a busy port (5000) | `lsof -ti:5000 \| xargs kill -9` | `netstat -ano \| findstr :5000` then `taskkill /PID <pid> /F` |

Run a JavaScript file the same way on both: `node 01-javascript/01-variables.js`.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `git: command not found` / `'git' is not recognized` | Git is not installed, or you did not reopen the terminal after installing. See Step 0.3. |
| `node` or `npm` not recognized | Same: install Node.js (Step 0.4), then close and reopen the terminal. |
| `code: command not found` | macOS: run **Shell Command: Install 'code' command in PATH** in VS Code (Step 0.5). Windows: reinstall VS Code with **Add to PATH** ticked. |
| `Author identity unknown` when committing | Run the `git config --global user.name` and `user.email` commands in Step 0.6. |
| `Authentication failed` on push | Use `gh auth login` or a Personal Access Token, not your password (Step 0.7). |
| `fatal: not a git repository` | You are in the wrong folder. `cd mern-workshop` first. |
| `xcode-select: error: command line tools are already installed` | Fine. Git is already there; run `git --version`. |
| Windows: "running scripts is disabled" | Run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` in PowerShell. |
| Merge conflict after syncing | Stop and ask the instructor. Do not delete files to "fix" it. |
| `Port 5000 already in use` | Stop the other server with `Ctrl + C`, or free the port (see the table above). |

If a task or example says **TRY**, do it. Breaking things on purpose is the fastest way to learn.
