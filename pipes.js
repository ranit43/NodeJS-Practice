var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/loveletter.txt');

var writable = fs.createWriteStream(__dirname+'/loveLtterCopyPipe.txt');
var compressed = fs.createWriteStream(__dirname + '/loveLetterCopyG.txt.gz');

readable.pipe(writable);

var gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);