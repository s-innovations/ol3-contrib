/// <vs AfterBuild='typescript' />
module.exports = function (grunt) {
   
    grunt.loadNpmTasks('grunt-typescript');

    // Loads the RequireJS plugin so we have access to it into this file.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // Registers the default task to run the RequireJS plugin. 
    // In Terminal/Command Line you will be able to type 'grunt' and
    // this will run the 'requirejs' plugin in this file.
    grunt.registerTask('default', ["typescript:base", 'requirejs']);

  

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: "build/amd",
                    mainConfigFile: "main.js",
                    out: "build/optimized.js",
                    name:"ol3-legend-control"
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
       
    });

}