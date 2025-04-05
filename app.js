const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/article', (req, res) => {
  res.render('article'); // Renders views/article.ejs
});

app.get('/categories', (req, res) => {
  res.render('categories'); // Renders views/article.ejs
});
// Handle undefined routes (404)
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});