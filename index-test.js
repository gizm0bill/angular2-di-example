'use strict';

var 
	express = require('express'),
	path = require('path'),
	gulp = require('gulp'),
	typescript = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch');
	require('colors')
	;

var app = express();
// app settings
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'src', 'views' ) );
if (app.get('env') === 'development') app.locals.pretty = true;
// set static paths
app.use( '/pub', express.static( path.join(__dirname, 'pub') ));
app.use( '/pub/scripts/*', (req, res, next) => { let p = req.params; p.length = Object.keys(p).length; res.redirect('/pub/js/'+Array.prototype.slice.call(p).join('/')); });
app.use( '/node_modules', express.static( path.join(__dirname, 'node_modules') ));

app.get('/', function index(req, res, next){ res.render('index-test'); });

var tsDir = path.join(__dirname, 'src', 'tests');
function typescriptCompile()
{
	var tsResult = gulp.src([path.join(tsDir, '**', '*.ts'), path.join(tsDir, '../../typings', 'tsd.d.ts')])
		.pipe( sourcemaps.init() )
		.pipe( typescript
		({
			"target": "es5",
    	"module": "system",
			"moduleResolution": "node",
	    "emitDecoratorMetadata": true,
  	  "experimentalDecorators": true,
    	"removeComments": false,
    	"noImplicitAny": false,
    }) );
	tsResult.dts.pipe(gulp.dest( path.join('pub', 'tests') ));
	tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest( path.join('pub', 'tests' ) ));
	console.log( ['+', 'TS'.blue, 'compiled'].join(' ') );
}
typescriptCompile();
watch(path.join(tsDir, '**', '*.ts'), function(){ typescriptCompile(); });

app.listen(process.env.PORT || 7357);

