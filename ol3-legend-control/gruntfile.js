/// <vs AfterBuild='typescript' />
module.exports = function (grunt) {
   
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-urequire')
    // Loads the RequireJS plugin so we have access to it into this file.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // Registers the default task to run the RequireJS plugin. 
    // In Terminal/Command Line you will be able to type 'grunt' and
    // this will run the 'requirejs' plugin in this file.
    grunt.registerTask('default', ["typescript:base", 'requirejs','copy']);

  

    grunt.initConfig({
        urequire: {
            _defaults: {
                path: 'build/amd',
                main: 'LegendControl',
            },
            UMD: {
                template: 'UMDplain',
                dstPath: 'build/UMD',
             //   noLoaderUMD:true,
                dependencies: {
                    //imports : { 'openLayers': 'ol' },
                    rootExports: { 'LegendControl': 'LegendControl' },
                }
            },
            dev:{
                template: 'combined',
                dstPath: 'build/ol-legend-control.js',
                dependencies: {
                    //imports : { 'openLayers': 'ol' },
                    rootExports: { 'LegendControl': 'LegendControl' },
                }
            },
            publish:{
                template: 'combined',
                dstPath: 'build/ol-legend-control.min.js',
                optimize: 'uglify2'
            }
        },
        browserify: {
            all: {
                src: 'build/finished/LegendControl.js',
                dest: 'build/bundle.js',
                options: {
                    transform: ['debowerify', 'decomponentify', 'deamdify', 'deglobalify'],
                },
            },
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "build/amd",

                    paths: {
                        "jquery": "empty:",
                        "openLayers": "empty:"
                    },
                    dir: "build/finished",
                    modules: [{ name: "LegendControl", include:["color"] }],
                    optimize: "none"
                }
            }
        },

        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'build/amd',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    basePath: 'src',
                    sourceMap: true,
                    declaration: true,
                    references:["typings/**/*.d.ts"]
                }
            },
            "test": {
                src: ['src/**/*.ts'],
                dest: 'build/common',
                options: {
                    noResolve:true,
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    basePath: 'src',
                    sourceMap: true,
                    declaration: true,
                    references: ["typings/**/*.d.ts"]
                }
            }
        },
        copy: {
            main: {
                src: ["build/LegendControl.js"],
                dest: 'C:/dev/ascendprojects/Ascend Azure Pipeline/Ascend.Portal.Client/Ascend.Portal.Client/libs/ol3-legend/LegendControl.js'
            },
            tsdef: {
                src: ["build/amd/LegendControl.d.ts"],
                dest: 'C:/dev/ascendprojects/Ascend Azure Pipeline/Ascend.Portal.Client/Ascend.Portal.Client/libs/ol3-legend/LegendControl.d.ts'
            }
        }
       
    });

}