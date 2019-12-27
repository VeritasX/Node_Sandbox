const mongoose = require('mongoose');
const Entry = mongoose.model('Entry');
exports.mainPage = (req, res) => {
  res.render('mpContent', { title: 'We are super cool' });
};

exports.mainPageSubmit = async (req, res) => {
  const fullReq = {
    name: req.body.name,
    description: req.body.description,
    browser: req.headers['user-agent']
  };
  req.body.browser = req.headers['user-agent'];
  console.log(req.body);
  const store = await new Entry(req.body).save();
  res.render('mpContent', { title: 'Data Submited', sentence: `${req.body.name} has been submitted` });
};
