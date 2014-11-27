/// <vs AfterBuild='typescript' />
module.exports = function (grunt) {
   
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-urequire')
    // Registers the default task to run the RequireJS plugin. 
    // In Terminal/Command Line you will be able to type 'grunt' and
    // this will run the 'requirejs' plugin in this file.
    grunt.registerTask('default', ["typescript:base", 'urequire:dev','urequire:publish', 'copy']);

  

    grunt.initConfig({
        urequire: {
            _defaults: {
                path: 'build/amd',
                main: 'ol3-contrib',
            },
            UMD: {
                template: 'UMDplain',
                dstPath: 'build/UMD',
                noLoaderUMD:true,
                dependencies: {
                    //imports : { 'openLayers': 'ol' },
                    rootExports: { 'LegendControl': 'LegendControl' },
                }
            },           
            dev: {
                template: 'combined',
                dstPath: 'build/ol3-contrib.js',
                dependencies: {
                    // imports: { 'ol3-legend-control.ts': 'ol3-info-control.ts' },
                    //    rootExports: { 'LegendControl': 'LegendControl' },
                }
            },
            publish:{
                template: 'combined',                              
                dstPath: 'build/ol3-contrib.min.js',
                optimize: 'uglify2'
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
        },
        copy: {
            main: {
                src: ["build/ol3-contrib.js"],
                dest: 'C:/dev/ascendprojects/Ascend Azure Pipeline/Ascend.Portal.Client/Ascend.Portal.Client/libs/ol3-legend/ol3-contrib.js'
            },
            main1: {
                src: ["build/ol3-contrib.min.js"],
                dest: 'C:/dev/ascendprojects/Ascend Azure Pipeline/Ascend.Portal.Client/Ascend.Portal.Client/libs/ol3-legend/ol3-contrib.min.js'
            },
            tsdef: {
                src: ["build/amd/ol3-legend-control.d.ts"],
                dest: 'C:/dev/ascendprojects/Ascend Azure Pipeline/Ascend.Portal.Client/Ascend.Portal.Client/libs/ol3-legend/ol3-legend-control.d.ts'
            },
            tsdef1: {
                src: ["build/amd/ol3-info-control.d.ts"],
                dest: 'C:/dev/ascendprojects/Ascend Azure Pipeline/Ascend.Portal.Client/Ascend.Portal.Client/libs/ol3-legend/ol3-info-control.d.ts'
            },
            tsdef2: {
                src: ["build/amd/ol3-contrib.d.ts"],
                dest: 'C:/dev/ascendprojects/Ascend Azure Pipeline/Ascend.Portal.Client/Ascend.Portal.Client/libs/ol3-legend/ol3-contrib.d.ts'
            },
            css: {
                src: ["src/ol3-legend-control.less"],
                dest: 'C:/dev/ascendprojects/Ascend Azure Pipeline/Ascend.Portal.Client/Ascend.Portal.Client/libs/ol3-legend/ol3-legend-control.less'
            }
        }
       
    });

}