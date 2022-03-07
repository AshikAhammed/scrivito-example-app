# Scrivito-Example-App

## What is Scrivito ?

- The Scrivito CMS consists of two main components interacting with each other: a backend, which transparently manages your content, and a JavaScript library (SDK) that acts as a content management layer in a web application based on React.

- React is Facebook's solution to building interactive web interfaces using self-contained components written in JavaScript. The Scrivito SDK utilizes React to access and render the content in your Scrivito CMS and also include Scrivito's unparalleled user interface for managing content and editing in place.

## Foundation of a New Website

- The `Scrivito Example App` often serves as a basis for implementing many and varied websites.

## Remove the default content

- First, after opening your Example App in the browser, make sure to have “scrivito/” in the URL path as the first element after the hostname for having the editing interface available.

- Then, create a working copy for applying all the changes we’re going to make in the course of this guide. Set the display mode to “Edit” using the switch at the top of the page.

- Next, open your browser’s JavaScript console and change the context from top to scrivito_application.

- We will delete all content from the working copy, i.e. each and every CMS object, and then recreate the absolutely necessary pages like the homepage to be ready to add our own content. Run the following script in the console and watch the standard content vanish. (This script along with many other usage examples can also be found in our SDK Cheat Sheet.)

- `Browser console`
  - `Scrivito.load(() => { return [...Scrivito.Obj.all()]; }).then(objs => { objs.forEach(o => { console.log(`Deleting ${o.id()}...`); o.destroy(); }); console.log("Done deleting all objs."); });`
