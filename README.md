# gulp-add-files

Create new files from strings or objects and put it into stream for using gulp pipe

## Installation

```sh
npm i gulp-add-files --save-dev
```

## Usage example

```javascript
const gulp = require( 'gulp' );
const files = require( 'gulp-add-files' );

gulp.task( 'new-files', function() {
   
    let str = { key: 'value' };

    return files( [ 
        {
            name: 'file.json', 
            content: str
        },
        {
            name: 'html/index.html', 
            content: '<html></html>'
        }
    ] )
    .pipe( gulp.dest( 'dist' ) );

});
```
