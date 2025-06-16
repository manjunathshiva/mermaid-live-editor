import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Get port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the docs directory (SvelteKit output)
app.use(express.static(path.join(__dirname, 'docs')));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🧜‍♀️ Mermaid Live Editor is running on port ${PORT}`);
  console.log(`📱 Open http://localhost:${PORT} to view it`);
});
