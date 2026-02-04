# Daniel Gasser - The Fixer Website

🔧 **Multilingual portfolio website** (EN/DE/FR)

---

## Files Structure

```
fixer-website/
├── package.json          # Node.js dependencies
├── server.js             # Express server
├── public/
│   ├── index.html        # English version (default)
│   ├── index-de.html     # German version
│   └── index-fr.html     # French version
└── README.md             # This file
```

---

## Deployment Instructions (Infomaniak/Swiss Hosting)

### Step 1: Upload Files

Upload the entire `fixer-website` folder to your hosting via:
- FTP
- Git
- File Manager

### Step 2: Install Dependencies

In your hosting panel (based on your screenshots):

1. Go to your Node.js application
2. Click **"Lancer"** (Launch) under "Aufbau der Anwendung"
3. When the dialog appears:
   - Select **"Ja"** for "Wollen Sie die Abhängigkeiten durch Löschen des Ordners node_modules neu installieren vor der Erstellung?"
   - Check the box "Ich habe diese Warnungen zur Kenntnis genommen"
   - Click **"Erstellung beginnen"**

This will run `npm i` automatically.

### Step 3: Start the Application

Once dependencies are installed:
1. Click **"Neu starten"** (Restart)
2. Check the console - you should see: `🔧 The Fixer is live on port 3000`

### Step 4: Done!

Your site is now live at:
- `yourdomain.com` → English
- `yourdomain.com/de` → German
- `yourdomain.com/fr` → French

---

## Local Development

```bash
# Install dependencies
npm install

# Start server
npm start

# Visit
http://localhost:3000
http://localhost:3000/de
http://localhost:3000/fr
```

---

## Customization

### Update Email Address

In all three HTML files, find and replace:
```
daniel@yourdomain.com
```
with your actual email.

### Update Domain

The site is ready to go - just update the email!

---

## Tech Stack

- **Server**: Express.js (Node.js)
- **Frontend**: Pure HTML/CSS/JS (no build step needed)
- **Fonts**: Google Fonts (Bebas Neue, Inter)
- **Animations**: CSS + Intersection Observer

---

**Built with 🔥 and big balls energy.**

*"When it absolutely has to work, call Daniel."*
