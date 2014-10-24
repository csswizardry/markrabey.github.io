---
layout: post
title: Building a Ghost Theme - Part 2 - Grunt, LESS & Uglify
date: 2014-04-15 15:40:39.000000000 -04:00
---
In [Part 1](/blog/2014/04/15/building-a-ghost-theme-part-1/), I built the basic folder & file structure for the theme. The next step is to get my project ready to actually write some code. Not _actually_ write code yet, just the final steps to getting _ready_ to write code. This may seem like a lot of setup, but I've made myself an empty folder that I copy for all my projects and just update package.json and Gruntfile as needed.


## Package.json
The file '[package.json](https://www.npmjs.org/doc/json.html)' is used by [Node Package Manager](https://www.npmjs.org/) (NPM) to describe the package details such as name, author, description and development dependencies like LESS and Grunt. My file is really simple:

{% highlight javascript %}
{
  "name": "markr-ghost-theme",
  "version": "0.0.1",
  "description": "Ghost Theme for markrabey.com",
  "main": "gruntfile.js",
  "author": "Mark Rabey",
  "license": "MIT",
  "repository" : {
    "type" : "git",
    "url" : "https://github.com/MarkRabey/markr-ghost-theme"
  },
  "devDependencies": {
    "grunt": "~0.4.4",
    "grunt-contrib-uglify": "~0.4.0",
    "watch": "~0.9.0",
    "grunt-contrib-less": "~0.10.0",
    "grunt-contrib-csslint": "~0.2.0",
    "grunt-contrib-cssmin": "~0.9.0",
    "grunt-contrib-watch": "~0.6.0"
  }
}
{% endhighlight %}

This should be fairly straight forward. You can see I add some information on the project, then list some development dependencies. The dependencies are what will complile, minify and move LESS, CSS, and JavaScript files to my `dist` folders.

Next I create my Gruntfile. This is what configures all my Grunt tasks. I'm not going into detail on that in this post, as I want to keep this more about Ghost than Grunt. If you're not familiar with Grunt, I suggest you read the [Getting Started Guide](http://gruntjs.com/getting-started). My file looks like this:


{% highlight javascript %}
module.exports = function(grunt) {
    var _banner = '/** \n* Package: <%= pkg.name %> \n* Author: <%= pkg.author %> \n* Build Time: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>  \n*/\n';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: _banner
            },
            build: {
                files: [{
                    cwd: 'src/js',
                    expand: true,
                    src: ['*.js'],
                    dest: 'dist/assets/js/',
                    ext: '.min.js'
                }]
            }
        }, //close uglify
        csslint: {
            options: {
            }, // close .options
            build: {
                src: ['src/css/*.css']
            } // close .build
        }, // close csslint
        cssmin: {
            options: {
                banner: _banner,
            }, // close .options
            build: {
                files: [{
                    cwd: 'src/css',
                    expand: true,
                    src: ['*.css'],
                    dest: 'dist/assets/css/',
                    ext: '.min.css'
                }]
            }, // close .build
        }, // close cssmin
        less: {
            options: {
                banner: _banner
            },
            build: {
                files: [{
                    cwd: 'src/less',
                    expand: true,
                    src: ['markr-theme.less'],
                    dest: 'src/css/',
                    ext: '.css'
                }]
            }, // close .build
        }, // close less
        watch: {
            js: {
                files: 'src/js/*.js',
                tasks: ['uglify'],
                options: {
                    interrupt: true,
                },
            },
            css: {
                files: 'src/less/*.less',
                tasks: ['less','cssmin'],
                options: {
                    interrupt: true,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
{% endhighlight %}

First of all, if this confuses you, you didn't read the article I pointed out. [This one](http://gruntjs.com/getting-started). Read it. All that I have done, is configure a few simple tasks. They are run as part of one default task that runs [watch](https://github.com/gruntjs/grunt-contrib-watch). Basically, any time a JavaScript file is changed, it is linted, then uglified, and moves to the `assets` folder under `dist`. Any time any less files are changed, it compiles the themes main less file (which imports the others) and places the resulting CSS in the `css` folder under `src`, then lints and minifies the CSS and puts _that_ result into the `css` folder under `dist`. That's basically it.

Now, I'm move on to actually making the theme part of the theme.
