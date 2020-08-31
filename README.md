Pies Site (Event Listeners)

## Motivation
The motivation behind this was to a menu to use event listeners in javascript.

## Build status
Prototype - This is a very rough draft, and would need a lot more styling and work to be completed.
It also has links that do not work. The main functional section features buttons that sort by the
names of people who like each pie.

## Code Style
Vanilla Javascript ES6, HTML5, CSS3

## Screenshots

https://github.com/willkotheimer/event-listeners/blob/master/pies_site.png

## URL

[piesmenu.netlify.app](piesmenu.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fce0d6e6-bd01-4c8a-a62a-a591f6b171af/deploy-status)](https://app.netlify.com/sites/piesmenu/deploys)

## Features
This site features a personal projects, and some drag and drop functionality with the employment section.

## Code Example
```
const deleteItems = (e) => {

    const ctype = e.target.type;
    const target = e.target.id;

    if (ctype === 'button') {
        pies.splice(target, 1);
        pieBuilder(pies);
    }

}


```
## Github owner

[Will Kotheimer](https://github.com/willkotheimer)


