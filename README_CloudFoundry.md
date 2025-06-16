# Mermaid Live Editor - Cloud Foundry Deployment

A Cloud Foundry-deployable version of the [Mermaid Live Editor](https://github.com/mermaid-js/mermaid-live-editor).

## 🚀 Quick Start

### Deploy to Cloud Foundry

1. **Clone and build:**

```bash
git clone <your-repo-url>
cd mermaid-live-editor
npm install
npm run build

2. **Create deployment:**

bashmkdir cf-deploy && cd cf-deploy
cp -r ../docs ../server.js ../package.json ../manifest.yml ./
npm install --production

3. **Deploy:**

bashcf push

🛠️ Local Development
bashnpm install
npm run dev
Open http://localhost:5173 to view it in the browser.
```
