
var { cat, mkdir } = require('shelljs')
var { project }    = require('xcode')
var { log }        = console
var debug = require('debug')('readTemplate')

var xcodeBuild = () => {

    
    var curProject
    var curProjectPbx

    var readTemplate = () => {
        debug("Reading " + __dirname + "/template/MyProduct/MyProduct.xcodeproj/project.pbxproj")
        curProjectPbx = cat(__dirname + "/template/MyProduct/MyProduct.xcodeproj/project.pbxproj")
        return curProjectPbx;
    }

    writeProject = (content, productName) => {
		var dirname = `${process.cwd()}/${productName}.xcodeproj`
    	var file = `${dirname}/project.pbxproj`    	
        mkdir('-p', dirname)
        curProjectPbx.to(file)
    }

    return {
        writeProject: writeProject,
        readTemplate: readTemplate
    }

}