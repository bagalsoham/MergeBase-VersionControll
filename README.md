# MergeBase – Minimal Git‑style CLI (Node.js)

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14-brightgreen)](#)
[![CLI](https://img.shields.io/badge/Type-CLI-blue)](#)
[![License: ISC](https://img.shields.io/badge/License-ISC-lightgrey.svg)](#license)
[![Status](https://img.shields.io/badge/Project-State%3A%20Prototype-orange)](#status)

**MergeBase** is a lightweight, educational version‑control CLI implemented in **Node.js**. It mimics a subset of Git concepts — _init_, _add_ (stage), _commit_, and optional _push/pull_ to a remote — by storing repository metadata under a local `/.MergeBase` directory.

> **What problem does it solve?**  
> When teaching VCS basics or prototyping custom workflows, full Git can feel heavyweight. MergeBase demonstrates the core ideas (staging, commits, simple remotes) with a tiny, readable codebase.

---

## Features

- Initialize a repository with a local `/.MergeBase` workspace
- Stage files to a **staging area** (`.MergeBase/staging`) via a simple `add` command
- Create commits saved under `.MergeBase/commits/<timestamp>/...`
- Basic CLI wiring using **yargs**
- **(Planned/partial)** remote sync to **AWS S3** (`push`/`pull`) using a `bucket` setting in `.MergeBase/config.json`
- **(Scaffolded)** `revert` command (empty file placeholder at present)

> ⚠️ Several commands are **incomplete / placeholders** in the current snapshot (e.g., `pull`, `revert`, and parts of `push`). This README reflects the actual code present.

---

## Technology Stack

- **Runtime:** Node.js (CommonJS modules)
- **CLI framework:** [`yargs`](https://www.npmjs.com/package/yargs)
- **Stdlib:** `fs/promises`, `path`
- **Remote (concept):** AWS S3 (referenced in code, **SDK not declared in `package.json`**)

---

## Project Structure

```
MergeBase-VersionControll-main/
└─ backend/
   ├─ index.js                   # CLI entrypoint (yargs command wiring)
   ├─ controllers/
   │  ├─ init.js                 # initRepo(): sets up .MergeBase and config
   │  ├─ add.js                  # addRepo(file): stage a file
   │  ├─ commit.js               # commitRepo(message): create a commit (truncated in repo)
   │  ├─ push.js                 # pushRepo(): upload commits to S3 (partial)
   │  ├─ pull.js                 # pullRepo(): placeholder
   │  └─ revert.js               # placeholder (empty)
   ├─ .MergeBase/
   │  ├─ config.json             # repo config (e.g., {"bucket": "..."})
   │  └─ staging/                # staging area
   ├─ package.json               # only dependency: yargs
   ├─ package-lock.json
   └─ hello.txt                  # sample file
```

A minimal `.MergeBase/config.json` found in the repo currently contains:

```json
{}
```

---

## How it Works (High‑Level)

- `index.js` wires a set of subcommands via **yargs**. Conceptually, the CLI exposes:
  - `init` → bootstrap `./.MergeBase` with `commits/` and `config.json`
  - `add <file>` → copy a file into `./.MergeBase/staging/`
  - `commit "<message>"` → (intended) move staged files into a timestamped folder under `./.MergeBase/commits/`
  - `push` / `pull` → (intended) sync commits to/from an S3 bucket named in `config.json`
  - `revert` → (intended) roll back to a previous commit

### Real Code Examples

**Controller: `init.js` (excerpt)**

```js
const fs = require("fs").promises;
const path = require("path");

async function initRepo(){
  const repoPath = path.resolve(process.cwd(), ".MergeBase");
  const commitsPath = path.join(repoPath, "commits");

  try {
    await fs.mkdir(repoPath, { recursive: true });
    await fs.mkdir(commitsPath, { recursive: true });
    await fs.writeFile(
      path.join(repoPath, "config.json"),
      JSON.stringify({ bucket: process.env.S3_BUCKET })
    );
    console.log("Repository initialised at .MergeBase");
  } catch (err) {
    console.error("Error initialising repository:", err);
  }
}

module.exports = { initRepo };
```

**Controller: `add.js` (excerpt)**

```js
const fs = require("fs").promises;
const path = require("path");

async function addRepo(filePath) {
  const repoPath = path.resolve(process.cwd(), ".MergeBase");
  const stagingPath = path.join(repoPath, "staging");

  try {
    await fs.mkdir(stagingPath, { recursive: true });

    const fileName = path.basename(filePath);
    const destinationPath = path.join(stagingPath, fileName);

    await fs.copyFile(filePath, destinationPath);
    console.log(`File ${fileName} added to staging.`);
  } catch (err) {
    console.error("Error adding file:", err);
  }
}

module.exports = { addRepo };
```

**CLI wiring: `index.js` (excerpt)**

```js
yargs(hideBin(process.argv))
  .command("init", "Initialise a new repository", {}, initRepo)
  .command("add <file>", "Stage a file for commit", (y) => y.positional("file", { type: "string" }), (argv) => addRepo(argv.file))
  .command("commit <message>", "Create a new commit", (y) => y.positional("message", { type: "string" }), (argv) => commitRepo(argv.message))
  .command("push", "Push commits to S3", {}, pushRepo)
  .command("pull", "Pull commits from S3", {}, pullRepo)
  .command("revert <id>", "Revert to a previous commit", (y) => y.positional("id", { type: "string" }), (argv) => revertRepo(argv.id))
  .demandCommand(1)
  .help()
  .argv;
```

> The source files for `commitRepo`, `pushRepo`, `pullRepo`, and `revertRepo` are **truncated or empty** in this snapshot. The snippets above show the intended interface.

---

## Installation

> Requires **Node.js ≥14** and npm.

```bash
cd backend
npm install
```

> The only declared dependency is `yargs`. If you plan to enable S3 sync, you'll also need the AWS SDK (see **Configuration**).

---

## Quick Start (CLI)

```bash
# 1) Initialise a MergeBase repo in the current directory
node index.js init

# 2) Stage a file
node index.js add ./hello.txt

# 3) Create a commit (if commit controller is completed)
node index.js commit "Initial commit"

# 4) (Optional) Push commits to S3 (push controller is partial/incomplete)
node index.js push
```

> Keeping this section intentionally brief as requested. For full usage, inspect `backend/index.js` and the `controllers/*` functions.

---

## Configuration

Local repository configuration is written to `./.MergeBase/config.json` by `initRepo`. The code hints at an S3 bucket value taken from the environment variable `S3_BUCKET` at init time, e.g.:

```bash
# before running init
export S3_BUCKET=my-mergebase-bucket
node index.js init
```

If you implement remote sync, ensure your `config.json` resembles:

```json
{ "bucket": "my-mergebase-bucket" }
```

### AWS SDK (if enabling push/pull)

The `push.js` controller references an `s3.upload(...)` pattern, but `aws-sdk` (or the v3 `@aws-sdk/*` packages) is **not** declared in `package.json`. You'll need to add it and provide credentials via environment variables or shared config:

```bash
npm install aws-sdk        # SDK v2 (simple)
# or: npm install @aws-sdk/client-s3   # SDK v3
```

---

## API Documentation

This project exposes a **CLI**, not an HTTP API. No REST endpoints are defined in the codebase.

---

## Screenshots / Demos

_Add screenshots or terminal GIFs demonstrating `init → add → commit` here._

- `docs/` folder (suggested) for images and walkthroughs
- Example: asciinema cast of basic flow

---

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/xyz`
2. Make changes with clear commit messages
3. Add or update tests (if testing is introduced)
4. Open a Pull Request and describe the change

**Ideas to pick up:**
- Complete `commitRepo` implementation (move from staging to timestamped commit dir; write metadata)
- Implement `revertRepo` safely (restore files from a commit to working tree)
- Finish `pushRepo`/`pullRepo` using S3 (multipart upload, list/download)
- Add `status`, `log`, and `diff` commands
- Add automated tests and CI

---

## License

This project is licensed under the **ISC License** (as declared in `package.json`).

---

## Author / Contact

- **Soham Bagal** — bagalsoham1717@gmail.com  
- **Phone:** +91 9967550047
- **GitHub:** [bagalsoham](https://github.com/bagalsoham)  
- **LinkedIn:** [soham-bagal-4343bb284](https://www.linkedin.com/in/soham-bagal-4343bb284/)

---

## Status

This repository looks like a **prototype / learning project** with some files **truncated**. The README above is tailored to the **actual code present** so you or collaborators can quickly wire up the missing pieces and iterate.
