require("babel/register")({
    only: /co/
});

var {
    readTemplate, writeProject
} = require('./lib/readTemplate.es5.js')
var {
    fillWithData
} = require('./lib/parseWithData.es5.js')
var co = require('co')
var debug = require('debug')('index')
var uid = require('uid')

var main = () => {

    var routine = function*() {

        var template = readTemplate();

        var testData = {
            productName: 'pippo',
            authorName: 'vittorio',
            files: [{
                name: 'configure.ls',
                type: 'source.javascript',
                path: `${__dirname}/configure.ls`,
                id: uid(16)
            }]
        }
        var project =
            yield fillWithData(template, testData);
        writeProject(project)
    }

    co(routine)

}



main()