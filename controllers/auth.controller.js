const Utilizador = require('../models/utilizador.model');

// mostrar página de login
const mostrarLogin = (req, res) => {
  res.render('pages/login');
};

// processar login
const fazerLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await Utilizador.login(username, password);

  if (user) {
    req.session.user = user;
    res.redirect('/loginsuccess');
  } else {
    res.redirect('/login');
  }
};

// logout
const logout = (req, res) => {
  req.session.destroy(() => {
    res.render('pages/logout');
  });
};

module.exports = {
  mostrarLogin,
  fazerLogin,
  logout
};