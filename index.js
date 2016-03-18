var 
	express = require('express'),
	path = require('path')
	;

var app = express();
// app settings
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'src', 'views' ) );
if (app.get('env') === 'development') app.locals.pretty = true;
// set static paths
app.use( '/pub', express.static( path.join(__dirname, 'pub') ));
app.use( '/node_modules', express.static( path.join(__dirname, 'node_modules') ));

app.get('/', function index(req, res, next){ res.render('index'); });
require('./tasks');

app.listen(process.env.PORT || 8081);

