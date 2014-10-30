module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');


    grunt.initConfig({
        exec: {
            jekyll: {
                cmd: "jekyll build --trace"
            },
            sass: {
                cmd: "sass assets/css/markrabey.scss:assets/css/markrabey.min.css --style compressed --precision 9"
            }
        },

        watch: {
            options: {
                livereload: true
            },
            source: {
                files: [
                    "_includes/**/*",
                    "_layouts/**/*",
                    "assets/css/**/*",
                    "assets/css/js/**/*",
                    "_config.yml",
                    "*.html",
                    "*.md",
                    "_posts/*.markdown",
                    "logo.png"
                ],
                tasks: [
                    "exec:sass",
                    "exec:jekyll"
                ]
            }
        },

        connect: {
            server: {
                options: {
                    port: 4000,
                    base: "_site",
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('build', ["exec:sass","exec:jekyll"]);
    grunt.registerTask('serve', ["build","connect:server","watch"]);
    grunt.registerTask('default', ["serve"]);

}