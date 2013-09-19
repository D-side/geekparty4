## "Falling apart"

An interactive novel for game jam **"Geek Party"**, held in June 2013, dedicated to "visual novel" genre.

Originally written in russian from scratch (but **jQuery** and **Twitter Bootstrap**) in 10 hours, that version and drafts are still kept in this repository as a reference for recreation.

### Why recreate

A while ago I've discovered an awesome static site generator *Jekyll*.

Though it's designed to create multi-page static sites, its simple yet versatile *Liquid template language* allows for easier scene composing from a set of files. If you look at the drafts, you may find that I've been doing somewhat the same, but assembled the result by hand.

That is, given a set of scenes written as Jekyll blog posts, one can compose a final accordion with all the scenes controlled by *Bootstrap's "collapse" jQuery plugin*. A convenient system for managing and building scenes is to be developed in Liquid through the use of `_includes` and post-specific variables.

I've run into several minor bugs because of the need of assembling this novel by hand. Automating this stuff greatly decreases the risk of bugs popping out. I **did** have bugs at release, sadly. These are to be fixed, with some minor text additions.

### Repository structure

`master` branch contains original source, written at GeekParty. `gh-pages` contain the work-in-progress version of 
