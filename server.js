//Install express server
const express = require('express');
const app = express();
const path = require('path');
const forceSSL = function () {
  return function (req, res, next) {
    if (req.header['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/FoodShala-FrontEnd-master'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/FoodShala-FrontEnd-master/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);
