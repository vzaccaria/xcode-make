
var { cat, mkdir } = require('shelljs')
var { project }    = require('xcode')
var { log }        = console
var debug = require('debug')('readTemplate')

var _module = () => {

    
    var readTemplate = () => {
        debug("Reading " + __dirname + "/../template/MyProduct/MyProduct.xcodeproj/project.pbxproj")
        var curProjectPbx = cat(__dirname + "/../template/MyProduct/MyProduct.xcodeproj/project.pbxproj")
        return curProjectPbx;
    }

    var writeProject = (project) => {
        var { productName } = project.metadata
		var dirname = `${process.cwd()}/${productName}.xcodeproj`
    	var file = `${dirname}/project.pbxproj`    	
        mkdir('-p', dirname)
        project.projectFile.to(file)
    }

    return {
        writeProject: writeProject,
        readTemplate: readTemplate
    }

}

module.exports = _module()