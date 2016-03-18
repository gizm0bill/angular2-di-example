var 
	path = require('path'),
	gulp = require('gulp'),
	less = require('gulp-less'),
	typescript = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch');
	require('colors');

// compile css
var lessDir = path.join(__dirname, 'src', 'styles', '**', '*.less');
function compileCss()
{
	gulp.src( lessDir )
		.pipe( less({ paths: [ path.join( __dirname, 'src', 'styles' ) ] }) )
		.pipe( gulp.dest( path.join( __dirname, 'pub', 'css' ) ));
	console.log( ['+', 'CSS'.blue, 'compiled'].join(' ') );
}
compileCss();
watch(lessDir, function(){ compileCss(); });

// copy public stuff
var imgDir = path.join(__dirname, 'src', 'img', '**', '*.+(png|jpg|jpeg|gif)'),
		fontDir = path.join(__dirname, 'src', 'font', '**', '*.+(eot|ttf|woff|woff2|svg|otf)');
function copyPublic()
{
	gulp.src(imgDir).pipe(gulp.dest( path.join('pub', 'img') ));
	gulp.src(fontDir).pipe(gulp.dest( path.join('pub', 'font') ));
	console.log( ['+', 'Public'.blue, 'files copied'].join(' ') );
}
copyPublic();
watch([imgDir, fontDir], function(){ copyPublic(); });

var tsDir = path.join(__dirname, 'src', 'scripts');
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
	tsResult.dts.pipe(gulp.dest( path.join('pub', 'js') ));
	tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest( path.join('pub', 'js' ) ));
	console.log( ['+', 'TS'.blue, 'compiled'].join(' ') );
}
typescriptCompile();
watch(path.join(tsDir, '**', '*.ts'), function(){ typescriptCompile(); });
