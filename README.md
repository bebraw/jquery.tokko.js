# libtemplate.js - Template for JS libraries designed to work with GitHub Pages and Jekyll

libtemplate.js makes it easier to start writing JavaScript libraries. It has been
designed to be used with GitHub (and GitHub pages). In addition it uses Grunt
as a build system.

## Getting Started

1. git clone git@github.com:bebraw/libtemplate.js.git mylib
2. cd mylib
3. rm -rf .git
4. git init
5. git add .
6. git commit

As you can see this workflow loses the version history and gives you a blank
slate to get started with.

After you have done that `npm install` the dependencies. In addition you will
need to set up [Jekyll](https://github.com/mojombo/jekyll) and
[Pygments](http://pygments.org/) in case you wish to use syntax highlighting.

Now that everything should be set up, invoke `grunt`. You should have a nice,
interactive development server running. Surf to `localhost:4000` at your browser.
If you have [set up LiveReload 
extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
the changes you make to the project `_meta` data should cause the browser
window to refresh automatically. This allows you to prototype your project
README.md and site in a quick manner.

As you can see modifying `_meta/_README.md` causes the changes to propagate to
the project index. The same goes for modifications made to `_config.yml`. These
changes propagate to README.md, project index and package information. This
eases project development somewhat as you have the project metadata in a single
place and you don't have to worry about keeping separate files up to date.

## Other Features

Besides the basic `grunt` functionality, there are various helpers around. I've
listed these in the following list:

* `grunt refresh` updates project files based on metadata. Handy if you just
want to make some quick change.
* `scripts/tag.js` sets git tag to current commit based on version at metadata
(`_config.yml`).
* `scripts/pu.sh` pushes the current changes to GitHub. In addition it pushes
the contents of the master branch to gh-pages so the index shows up properly at
GitHub Pages. It also pushes your tags to GitHub.

## \_config.yml Fields

As there are quite a few fields at `_config.yml`, I've listed their
descriptions below. You can easily add custom fields to the file and refer to
them at `_meta`. Simply do this using `field_name` syntax. These fields
are also available at Jekyll. There you can access them via `site.field_name`.

* `project_base` refers to the project name without a possible suffix (such as .js)
* `project` is meant to contain that
* `description` contains a brief (80-100) description of your project. This is
something you would use as your GitHub project description.
* `nick` is the nickname you use at GitHub (github.com/&lt;nick&gt;)
* `author` is your full name as an author. You may alternatively use multiple
authors if you want to.
* `license` is the license of your project. You may alternatively use multiple
if you want to.
* `version` refers to the version number of your library.
* `jquery` refers to version of jQuery to load. If it is empty, it won't
be loaded at all in the demo.

## Code Example

This bit is here just to illustrate how Pygments works. The example will render
with syntax highlighting on both README.md and GitHub Pages index.

``` js
var a = 4;

function add(a, b) {
    return a + b;
}
```

## License

libtemplate.js is available under MIT. See LICENSE for more details.
