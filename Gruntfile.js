module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'tinyCarousel.js']
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'build/tinyCarousel.min.js': ['tinyCarousel.js']
                }
            }
        },

        less: {
            build: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    compress: true
                },
                files: {
                    'build/tinyCarousel.min.css': 'tinyCarousel.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['jshint', 'uglify', 'less']);
};