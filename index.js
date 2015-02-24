

var { readTemplate, writeProject } = require('./lib/readTemplate.es5.js')
var { fillWithData }               = require('./lib/parseWithData.es5.js')

main = () => {
    var template = readTemplate()
    var project = fillWithData(template, { productName: 'pippo'})
    writeProject(project, 'pippo')
}





