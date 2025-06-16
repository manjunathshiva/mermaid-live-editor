# Mermaid Live Editor - Cloud Foundry Deployment

This is a modified version of the Mermaid Live Editor that can be deployed to Cloud Foundry.

## Local Development

```bash
npm install
npm run dev

Building for Production
bashnpm install
npm run build
Deploying to Cloud Foundry

Build the application:

npm run build

Create deployment directory:

mkdir cf-deploy
cd cf-deploy
cp -r ../docs ./
cp ../server.js ./
cp ../package.json ./
cp ../manifest.yml ./

Install production dependencies:

npm install --production

Deploy:

cf push
```
