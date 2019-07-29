'use strict';

const Through = require('through2');
const File = require( 'vinyl' );

module.exports = list => {

    const stream = Through.obj( function( file, enc, cb ){
        this.push( file );
        return cb();
    } );

    const files = list.map( item => new File( {
        path: item.name,
        contents: new Buffer( typeof item.content === 'string' ? item.content : JSON.stringify( item.content ) )
    } ) );

    files.forEach( file => stream.write( file ) );

    stream.end();

    return stream;

};