---
layout: post
title: The Development Environment
date: 2014-04-17 14:48:34.000000000 -04:00
tags: development, environment, coding, grunt, git
---
In several posts, I've started by talking about setting up my development environment. This is getting both dry, and repetitive. I use pretty much the same environment for everything lately, and I suspect if someone is reading about design, or CSS or something, they probably don't care about the specifics of my package.json file. I decided to write one post about how I get setup for a project.


## The Machine
Regardless of whether I am working on a personal project, or one for work, I use a Mac. I find everything about it more satisfying than using a Windows machine. The look, the feel, even the way the keys are positioned on the keyboard, I find I am much more comfortable with a Mac.


## The Setup
With the tools I use, I need some config files for each project, but they're all pretty similar. The folder structure is fairly arbitrary, but it's what I like. I made myself 2 empty projects that each contain the folder structure I want along with a few key files:


{% highlight bash %}
.
└── project-name
    ├── dist
    |   └── assets
    |       ├── css
    |       ├── fonts
    |       ├── images
    |       └── js
    ├── src
    |   ├── css
    |   ├── js
    |   ├── less
    |   └── views
    ├── .gitignore
    ├── Gruntfile.js
    ├── package.json
    └── README.md
{% endhighlight %}


I put all my source code in the `src` folder, and use `dist` for the distribution files. For a [Ghost](http://ghost.org) theme project, I have a few additional files under the `dist` folder. They're all empty, although that will probably change once I get going developing more themes. In those cases, my `dist` folder looks like this:


{% highlight bash %}
.
└── project-name
    ├── dist
    |   └── assets
    |   |   ├── css
    |   |   ├── fonts
    |   |   ├── images
    |   |   └── js
    |   ├── partials
    |   ├── error.hbs
    |   ├── index.hbs
    |   ├── page.hbs
    |   ├── post.hbs
    |   └── tag.hbs
    ...
{% endhighlight %}


Before I do anything with these files and folders, including copying them to a working directory, I create a repository for the project on [GitHub](http://github.com). I put just about everything into a repository. It allows me to move easily between different machines, and provides a reasonable safe backup for my code. I don't use any fancy tools for GitHub, just terminal, although in the near future I will likely be moving to something like [SourceTree](http://www.sourcetreeapp.com/). For now, just Terminal. After creating the repository, I go to my Terminal window, and navigate to my projects folder. Not the folder for the specific project, rather the folder that holds *all* of my projects.


{% highlight bash %}
cd /Users/mark/Documents/projects
{% endhighlight %}


Once in that folder, I clone my repository. For example, cloning [my grid system](/blog/2014/04/07/a-simple-css-grid/) repository, I would type:


{% highlight bash %}
git clone https://github.com/MarkRabey/markr-grid.git
{% endhighlight %}


This will create a folder in the current location with the name of the repository, in this case `markr-grid`. Then I just use Finder to copy the files from my empty project into this new folder.


## The Config
Configuring my projects is pretty simple given the empty files I have created. The first file I look at is `package.json`. This file is used by [Node Package Manager](http://npmjs.org)(NPM) to manage development dependancies like Grunt, LESS, Jade, as well as the tools I use to lint, minify, and concatenate files. Let's take a look:


{% highlight javascript %}
{
  "name": "project-name",
  "version": "0.0.1",
  "description": "",
  "main": "gruntfile.js",
  "author": "Mark Rabey",
  "license": "MIT",
  "repository" : {
    "type" : "git",
    "url" : ""
  },
  "devDependencies": {
    "grunt": "~0.4.4",
    "grunt-contrib-uglify": "~0.4.0",
    "watch": "~0.9.0",
    "grunt-contrib-less": "~0.10.0",
    "grunt-contrib-csslint": "~0.2.0",
    "grunt-contrib-cssmin": "~0.9.0",
    "grunt-contrib-watch": "~0.6.0",
    "grunt-contrib-jade": "~0.11.0"
  }
}
{% endhighlight %}


Most of this is pretty self-explanatory. I update the name, description, and repository url accordingly, and for the most part I'm done. The items under `devDependancies` specify the NPM packages I will use in the project. These are what I use for pretty much every project, the exception being the last one, [Jade](http://jade-lang.com), which I don't use for Ghost themes at all.

Next, I configure `Gruntfile.js`. This is the file that controls each Grunt task I want to run. Remember, I don't actually write this everytime, I just tweak it as need to from my empty project. I keep it fairly simple. Basically, I want to be able to compile [LESS](http://lesscss.org) into CSS and render Jade files to HTML. I would then like to [lint](http://en.wikipedia.org/wiki/Lint_%28software%29) all my CSS and Javascript. Then, after files have been minified, I would like them moved to my `dist` folder. All Grunt files start off the same:


{% highlight javascript %}
module.exports = function(grunt) {
	grunt.initConfig({
    	// configure individual tasks

    });
};
{% endhighlight %}


Thanks to some work by my friend [Christopher](http://christophervachon.com"target="_blank), I easily add a banner to the top of minified files, by add just a little code, plus some task specific settings:


{% highlight javascript %}
module.exports = function(grunt) {
	var _banner = '/** \n* Package: <%= pkg.name %> \n* Author: <%= pkg.author %> \n* Build Time: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>  \n*/\n';
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
        ...
    });
};
{% endhighlight %}


I use basically the same configuration for each task across projects. The order they are defined is meaningless, just the order I did it in. They are all inside of `grunt.initConfig({});` First, **Uglify**:

{% highlight javascript %}
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
},
{% endhighlight %}


When called, this task will take any `.js` file in `src/js`, minify it, and put the minified file in `dist/assets/js` with the same file name, and an extension of `.min.js`. Next I have **CSSLint**:


{% highlight javascript %}
csslint: {
	options: {}, // close .options
	build: {
		src: ['src/css/*.css']
	}
}
{% endhighlight %}


This task looks at all `.css` files in `src/css` and lints them. That is, it checks for known issues or errors, and lets me know my code is acceptable. The `options` setting allows you to tell the task to ignore certain errors, but I let it catch me on everything. Then I configure **CSSMin** - Uglify for CSS:

{% highlight javascript %}
cssmin: {
	options: {
		banner: _banner,
	},
	build: {
		files: [{
		cwd: 'src/css',
		expand: true,
		src: ['*.css'],
		dest: 'dist/assets/css/',
		ext: '.min.css'
		}]
    }
}
{% endhighlight %}


Basically it does the exact same thing for CSS that Uglify does for JS. Minify any CSS files in `src/css` and place them the `dist/assets/css` folder. Then I have my **LESS** config:


{% highlight javascript %}
less: {
	options: {
		banner: _banner
	},
	build: {
		files: [{
			cwd: 'src/less',
			expand: true,
			src: ['*.less'],
			dest: 'src/css/',
			ext: '.css'
		}]
	}
}
{% endhighlight %}


The LESS task is one that changes slightly depending on the project. In some cases, I may have many `.less` files that are included in one 'master' file that actually gets included on the page I'm building. In those cases, I change the above `src: ['*.less']` to `src: ['main-file-name.less']`, or whatever that main file is called. Because this file includes the others, they are compiled, but I have only one file as the result. These CSS files are not put into `dist`, they are placed in `src/css` and await linting and minifying. If I am making use of Jade, I have that config next:


{% highlight javascript %}
jade: {
	compile: {
		options: {
			pretty: true
		},
		files: [{
			expand: true,
			cwd: 'src/views/',
			src: [ '**/*.jade','!layout.jade' ],
			dest: 'dist',
			ext: '.html'
		}]
	}
}
{% endhighlight %}


This task takes any `.jade` in `src/views` including subfolders, and compiles them to HTML and places them in the `dist` folder. It ignores the file `layout.jade`, as it is included in other files as needed.

The last task I have configured in **Watch**. This is where, for me, it all really comes together.

{% highlight javascript %}
watch: {
	js: {
		files: 'src/js/*.js',
		tasks: ['uglify'],
		options: {
			interrupt: true,
		},
	},
	less: {
		files: 'src/less/*.less',
		tasks: ['less','cssmin'],
		options: {
			interrupt: true,
		},
	},
	jade: {
		files: 'src/views/*.jade',
		tasks: ['jade'],
		options: {
			interrupt: true,
		},
	}
}
{% endhighlight %}

If not using Jade, I remove that last part. Each part of this config tells Watch to 'watch' different files, and do different things. In each case it watches specified files, and if one that matches registers a change, it fires the specified tasks, as configured above. So, for example, I save a LESS file, and Watch sees the change in `src/less/*.less`, it then triggers my `less` task, followed by `cssmin`, quickly compiling, linting, minifying, and distributing my file.


## Using Grunt
At the bottom of this file, is code to load the NPM Tasks, and register a default task.

{% highlight javascript %}
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-jade');

grunt.registerTask('default', ['watch']);
{% endhighlight %}

I could register individual task for everything I configured, allowing me to type something like `grunt cssmin` which would run only that task. But generally I don't want to run task individually. I want to turn it on, and pretty much ignore it. So I have one default task, that simply calls 'watch', which handles the rest. So, when I'm ready to code, I simply type `grunt watch` and I'm ready to go.

That's pretty much all I have. Anything else pretty project specific, but even then, nothing fancy.
