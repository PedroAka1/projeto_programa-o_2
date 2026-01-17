// controllers
const clienteController = require('./controllers/cliente.controller');
const servicoController = require('./controllers/servico.controller');
const produtoController = require('./controllers/produto.controller');
const dashboardController = require('./controllers/dashboard.controller');
const authController = require('./controllers/auth.controller');

// middleware de autenticação
const { isAuthenticated } = require('./middlewares/auth.middleware');

// dependências
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/bootstrap',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist'))
);
app.use(session({
  secret: 'halfbyte_secret',
  resave: false,
  saveUninitialized: false
}));
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.get('/', (req, res) => {
  res.render('pages/home');
});
app.get('/login', authController.mostrarLogin);
app.post('/login', authController.fazerLogin);
app.get('/forbidden', (req, res) => {
  res.render('pages/forbidden');
});
app.get('/loginsuccess', (req, res) => {
  res.render('pages/loginsuccess');
});

app.get('/logout', authController.logout);
app.get('/admin', isAuthenticated, dashboardController.mostrarDashboard);
app.get('/clientes', isAuthenticated, clienteController.listarClientes);
app.get('/servicos', isAuthenticated, servicoController.listarServicos);
app.get('/produtos', isAuthenticated, produtoController.listarProdutos);

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Servidor a correr em http://localhost:' + PORT);
});