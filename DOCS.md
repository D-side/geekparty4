# Documentation

To use this system for your own text adventure you don't have to study how it works. However, as you learn its principles, you will find that it's simple to adapt. That's the main feature of Jekyll, ease of building what you need.

Knowing the basics of Jekyll  would be useful, yet it's not necessary.

So this documentation is divided in two:
1. "How to use": how to make your own text adventure with it.
2. "How it works": how to modify it adapt to your format of writing scenes.

## How to use

All scenes in text adventure are considered "posts" by Jekyll. That is, each scene is a separate post with specific "heading", called "YAML front-matter" in Jekyll.

Firstly, you may want to replace `bootstrap.css` with your own, styling your adventure the way you want.

I'm not using most variables Jekyll defines, instead I've declared a set of my own and build each scene based on them.

YAML is used for headings, you may study documentation on how to use it. Here's an example heading:

	---
	title: sceneAIShout
	class: well well-sm text-muted
	icon: bullseye sol-cyan
	links:
	- text: Example link text
	  icon: chevron-right
	  goto: sceneAIShout2
	  class: my-class
	  id: my-id
	- text: Another link
	  icon: chevron-left
	  goto: sceneAIshout3
	---

Here's the meaning of each:

* `title`: internal scene identifier, used to specify scene transitions in links
* `class`: container class for scene content and icon on the side
* `links`: a list of links in current scene, all the variables below are specified for each link separately, all of them are optional
* `text`: link text
* `icon`: FontAwesome icon identifier with `icon-` omitted. That is, to use `icon-user` you only need to write `user` in this field. You may also use extra CSS classes after it, separated by space, such as `icon-large` (notce: `icon-` not omitted)
* `goto`: scene identifier for this link, some other scene's `title`.
* `class`, `id` - corresponding attributes for the link, added for interactivity through the use of jQuery selectors, allowing to bind actions to them with ease

After heading, scene content follows. Scenes are written in Markdown. If you want, you may use Textile, naming scene files appropriately: `*.textile` instead of `*.markdown` or `*.md`.

## How it works

All custom Javascript interactivity is defined in `actions.js`. It depends on `jQuery`, `jQuery UI` and `Twitter Bootstrap` plugins.

Also you might need `_layouts/default.html`, that contains basic page layout, not related to the actual game. Inside this layout, instead of `content`, `index.html` is parsed, that contains all game elements, such as scene list and inventory.

For each scene defined in Jekyll's `site.posts`, it forms an accordion entry, containing main body, icon at the side and list of links, defined in scene files.

If you want, you can modify scene body to use your own variables. I. e. you may add an `image` variable, hooked to `<img src="{{ scene.image }}" />` tag in scene layout. The same applies to any content you may wish to define. `Liquid` tags can reference post variables. Documentation for Liquid template language is avaliable online.

After an accordion of scenes lies an unordered list of items in inventory. It's implemented using custom Javascript, and can be safely removed.
