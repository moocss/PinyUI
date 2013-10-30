/**
 * Created by fuxin on 13-10-29.
 */
var path = require('path');
    rootPath = path.normalize(__dirname + '/../..');
module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000
}
