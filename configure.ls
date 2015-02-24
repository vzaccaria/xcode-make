#!/usr/bin/env lsc 


{ parse, add-plugin } = require('newmake')

parse ->

    @add-plugin "es6", (g) ->
        @compile-files( (-> "#{__dirname}/node_modules/.bin/babel #{it.orig-complete} -o #{it.build-target}" ) , ".es5.js", g)

    @collect "build", ->
        @toDir ".", -> [
            @es6 "./index.js"
            @es6 "./lib/parseWithData.js"
            @es6 "./lib/readTemplate.js"
        ]

    # @collect "build", ->
    #     @command-seq -> [
    #         @toDir "./lib", { strip: "src" }, -> [
    #             @es6 "src/test/*.js6"
    #             @livescript "src/*.ls"
    #             @livescript "src/packs/*.ls"
    #             @livescript "src/backends/*.ls"
    #         ]
    #         @cmd "cp ./lib/index.js ."
    #     ]

    @collect "all", -> 
        @command-seq -> [
            @make \build
            @cmd "DEBUG=* node ./index.es5.js"
        ]

