const Dashboard = require('../models/dashboard.model');

//mostrar a dashboard
const mostrarDashboard = async (req, res) => {
  const dados = await Dashboard.getDashboardData();
  res.render('pages/admin', { dados });
};

module.exports = {
  mostrarDashboard
};