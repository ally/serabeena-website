



# Serabeena

Serabeena uses Craft CMS for content management: http://buildwithcraft.com/

There are a few different documentation sources:

Craft documentation: [buildwithcraft.com/docs/](http://buildwithcraft.com/docs/)  
Craft stackexchange: [craftcms.stackexchange.com](http://craftcms.stackexchange.com)  
Twig templating: [twig.sensiolabs.org/doc/templates.html](http://twig.sensiolabs.org/doc/templates.html)  
Craft recipes: [craftcookbook.net](http://craftcookbook.net)  
Tutorials: [straightupcraft.com](http://straightupcraft.com)


### Setup and local development

Use [MAMP](http://www.mamp.info/en/) (or whatever you're more comfortable with) to run the site locally.

You'll need bower and gulp to get up and running.

### Bower

[Bower](http://bower.io/) is “a package manager for the web”. Bower needs [Node.js](http://nodejs.org/) (and NPM),  available on OS X via [Homebrew](http://brew.sh/).
```bash
brew install node
```

Install Bower with npm as a global system module (note `-g`)
```bash
npm install -g bower
```

Now, jump on the project’s root and install the dependencies listed on `bower.json` with:
```bash
bower install
```

You’re done.

### Gulp

We're using Gulp to compile assets. Run `gulp watch` to watch the assets folder and build / live reload. You can can run `gulp build` to just build the assets.

### Folder structure

The folder `/craft/app` is where the actual Craft application is stored, so you don't need to touch it (updates are done via a "one-click" process in the admin interface. So far this has worked pretty neatly.)

The templates are located in `/craft/templates`.


### Hosting


Site hosted on fortrabbit (you'll need a fortrabbit account). Set up fortrabbit as a remote: `git@git2.eu1.frbit.com:yt-creative.git`

Deploy via git, e.g.:

`git push fortrabbit master`

