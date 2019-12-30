const mongoose = require('mongoose');
const Entry = mongoose.model('Entry');

exports.mainPage = async (req, res) => {
  let data = await Entry.find();
  data = data.sort((a, b) => new Date(b.created) - new Date(a.created));
  res.render('mpContent', { title: 'We are super cool', data });
};

exports.mainPageSubmit = async (req, res) => {
  req.body.browser = req.headers['user-agent'];
  const store = await new Entry(req.body).save();
  res.redirect('/');
};
