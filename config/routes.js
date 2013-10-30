/**
 * Created by fuxin on 13-10-29.
 */
module.exports = function(app) {
    app.all('*', function (req, res, next) {
        res.locals['title'] = 'PinyUI';
        next();
    });

    //All Roures
    var index = require('../app/controllers/index');
    app.get('/', index.home);
    app.get('/base', index.base);
    app.get('/dpl', index.dpl);
    app.get('/ui', index.ui);
    app.get('/javascript', index.js);
    app.get('/guidelines', index.guidelines);
    app.get('/wiki', index.wiki);
    app.get('/start', index.start);

    //DPL Routes
    /*var dpl = require('../app/controllers/dpl/index');
    app.get('/dpl',dpl.base);*/
    /*
    app.get('/base/reset', dpl.reset);
    app.get('/base/reset/:cat', dpl.cat);
    */

    //UI Routes
    /*var ui = require('../app/controllers/ui/index');
    app.get('/simple-ui',ui.simple);
    app.get('/complex-ui',ui.complex);*/

};