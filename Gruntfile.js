module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/all.min.css': 'css/all.scss'
                },
            }
        },
        connect: {
            server: {
                options: {
                    port: 3333,
                    livereload: true
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'js/libs/*.js',
                    'js/all.js'
                ],
                dest: 'build/js/all.js'
            }
        },
        uglify: {
            build: {
                src: 'build/js/all.js',
                dest: 'build/js/all.min.js'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['js/*.js', 'js/libs/*'],
                tasks: ['concat', 'uglify'],
            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass']
            },
            prefixes: {
                files: ['css/all.min.css'],
                tasks: ['autoprefixer']
            },
            html: {
                files: ['index.html'],
                tasks: ['copy']
            }
        },
        copy: {
            main: {
                src: [
                    'index.html',
                    'css/all.min.css',
                    'css/fonts/*',
                    'images/*'
                ],
                dest: 'build/'
            }
        },
        autoprefixer: {
            singleFile: {
                src: 'css/all.min.css',
                dest: 'build/css/all.min.css'
            }
        }
    });

    require('load-grunt-tasks')(grunt, ['grunt-*']);
    grunt.registerTask('dist', ['connect', 'sass', 'imageoptim', 'concat', 'uglify', 'copy', 'autoprefixer', 'watch']);
    grunt.registerTask('default', ['connect', 'sass', 'concat', 'uglify', 'copy', 'autoprefixer', 'watch']);
}
