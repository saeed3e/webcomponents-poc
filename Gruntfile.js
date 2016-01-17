module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            droope: {
                src: [

                    'src/resources/components/droope/c/dd_style.css',
                    'src/resources/components/scriptOpen_close/scriptOpen.js',
                    'src/resources/components/droope/j/droope_v1.1.0.min.js',
                    'src/resources/components/droope/j/droopeRegistration.js',
                    'src/resources/components/scriptOpen_close/scriptClose.js'
                ],
                dest: 'src/resources/components/droope/droope.html',
                nonull: true
            },
            suggestor: {
                src: [
                    'src/resources/components/scriptOpen_close/scriptOpen.js',
                    'src/resources/components/suggestor/j/suggestor.js',
                    'src/resources/components/suggestor/j/suggestorregistration.js',
                    'src/resources/components/scriptOpen_close/scriptClose.js'
                ],
                dest: 'src/resources/components/suggestor/suggestor.html',
                nonull: true
            },
            hamburger: {
                src: [
                    'src/resources/components/hamburger/c/dd_style.css',
                    'src/resources/components/scriptOpen_close/scriptOpen.js',
                    'src/resources/components/hamburger/j/hamburger_plugin.js',
                    'src/resources/components/hamburger/j/hamburger.js',
                    'src/resources/components/scriptOpen_close/scriptClose.js'
                ],
                dest: 'src/resources/components/hamburger/hamburger.html',
                nonull: true
            }
        }
    });
    grunt.file.expand('./../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    require('./../node_modules/grunt-config-merge')(grunt);
    require('../grunt/global/grunt-default.js')(grunt);
};
