const mongoose = require('mongoose');
const Entry = mongoose.model('Entry');

exports.mainPage = async (req, res) => {
  let data = await Entry.find();
  data = data.sort((a, b) => (a.created < b.created ? 1 : -1));
  console.log(data);
  res.render('mpContent', { title: 'We are super cool', data });
};

exports.mainPageSubmit = async (req, res) => {
  req.body.browser = req.headers['user-agent'];
  req.body.created = Date.now() * 60 * 1000;
  console.log(req.body.created);
  const store = await new Entry(req.body).save();
  res.redirect('/');
};
