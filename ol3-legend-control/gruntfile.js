module.exports = function (grunt) {
    console.log(grunt);
    grunt.loadNpmTasks('grunt-typescript');
    grunt.initConfig({
        typescript: {
            base: {
                src: ['path/to/typescript/files/**/*.ts'],
                dest: 'where/you/want/your/js/files',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    basePath: 'src',
                    sourceMap: true,
                    declaration: true
                }
            }
        },
    });

}