# Aarushi Cares — how to preview this site locally

A website prototype built with Next.js. It runs entirely on your own machine —
nothing is published, and there's no server or database to set up.

Takes about 5 minutes, most of which is waiting on one download.

---

## 1. Install Node.js (one time)

The site needs **Node.js version 20.9 or newer**. Version 22 is recommended.

Check whether you already have it — open Terminal (Mac) or PowerShell
(Windows) and run:

```bash
node -v
```

- Prints `v20.9.0` or higher → you're set, skip to step 2.
- Prints something lower, or "command not found" → download the **LTS**
  version from <https://nodejs.org> and run the installer. Accept the defaults.

After installing, **close and reopen your terminal**, then run `node -v` again
to confirm.

---

## 2. Unzip the folder

Unzip `aaru-website.zip` somewhere easy to find, like your Desktop.
You should end up with a folder called `aaru`.

---

## 3. Open a terminal in that folder

**Mac:** right-click the `aaru` folder → Services → *New Terminal at Folder*.

**Windows:** open the `aaru` folder in File Explorer, click the address bar,
type `powershell`, and press Enter.

**Either platform**, you can also type `cd ` (with a space) into a terminal and
drag the folder onto the window, then press Enter.

To confirm you're in the right place, run `ls` (Mac) or `dir` (Windows) — you
should see `package.json` listed.

---

## 4. Install the dependencies

```bash
npm install
```

This downloads the libraries the site needs. It takes 1–3 minutes and prints a
lot of text — that's normal. It creates a `node_modules` folder of about 450 MB.

Warnings are fine. Only stop if you see the word **error**.

---

## 5. Start the site

```bash
npm run dev
```

After a moment you'll see:

```
▲ Next.js 16.3.1 (Turbopack)
- Local:  http://localhost:3000
✓ Ready in 344ms
```

Open **<http://localhost:3000>** in your browser.

---

## 6. Look around

Five pages, reachable from the top navigation:

| Page | What's on it |
| --- | --- |
| Home | Animated hero, welcome, scrolling gallery, services, process, closing |
| About | Dark opening, self-drawing story timeline, approach, training |
| Services | All six areas of work |
| Fees & FAQ | Fee table and common questions |
| Contact | Enquiry form and next steps |

Worth doing: **scroll slowly**. Most sections animate into view as you reach
them, and the homepage gallery scrolls sideways on its own — hover it to pause.

---

## To stop the site

Press **Ctrl + C** in the terminal. To start it again later, `cd` back into the
folder and run `npm run dev`. You only ever run `npm install` once.

---

## Please note

This is a **design prototype**, not a finished site.

- **All photography is placeholder.** Every image is a coloured gradient block
  labelled "Photograph". Real photos aren't in yet.
- **Text in [square brackets] is unwritten** — credentials, qualifications,
  fees, the story timeline and policy wording are all awaiting real content.
- **The contact form doesn't send anything.** It opens your own email app with
  a draft. There's no backend by design.

---

## If something goes wrong

**`command not found: npm`**
Node.js isn't installed, or the terminal was open before you installed it.
Close the terminal, open a new one, try again.

**`Error: Cannot find module` / other startup errors**
Dependencies didn't install cleanly. Run `npm install` again.

**`Port 3000 is already in use`**
Something else is using that port. Run `npm run dev -- -p 3001` and use
<http://localhost:3001> instead.

**A runtime error that seems to contradict a working page**
Stale cache. Stop the server (Ctrl + C), delete the `.next` folder, and run
`npm run dev` again.

**The page loads but looks unstyled**
Give it a few seconds on first load, then hard-refresh:
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows).
