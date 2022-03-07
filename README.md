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

- After executing this script, your CMS is empty (in the selected working copy), and you will get a 404 error because the page that was displayed before is gone. Don’t publish this working copy if the Scrivito CMS you are working with includes valuable or publicly visible content. You will lose this content if you do, at least until it will have been restored using the publishing history!

## Create the homepage

- In the Example App, the homepage object is equipped with several attributes from which the app code obtains various settings like page-specific styling options or site-specific access keys for third-party services like Google Analytics. So let’s create a homepage!

- Note that we cannot use the “Create page” item from the page menu for this because the Homepage type has been excluded from the selection dialog to prevent editors from creating homepages in addition to the one provided. So we’ll use the browser console again and create an instance of the built-in Homepage object model class:

- `Browser console`

  - `Scrivito.getClass("Homepage").create({ _path: "/" })`

- As you can see, we’ve given the homepage a path by setting its \_path attribute to “/”. By default, the page with this path is the root page, the origin of the page hierarchy. The Example App uses it for storing the site settings, and it also represents the origin of the main navigation (we’ll expand on this in a moment).

- After executing the above line of code in the console, the homepage should be displayed; however, it may take a couple of seconds until its initial content, a section widget containing a headline widget with its preset text, becomes visible. Try adding widgets, rearranging them, etc., like you probably already did prior to erasing the default content.

- To see all the other options the homepage has in store for you, open its page settings via the menu at the top right and, for example, change the logo or the header image (or upload a new one) using the Content Browser. The various tabs of the properties dialog let you access the site settings, the social cards, etc. Many and diverse customization options await your attention – see Changing the Look of the Example App for inspiration.

- Now, click the red magnifying glass at the top right corner of the page, then search for “lorem”. The 404 error you’ll get is the reason why we need to recreate the search results page.

## Provide the search results page

- Creating the search results page via the console is as easy as creating a page of any type.

- `Browser console`
  - `Scrivito.getClass("SearchResults").create({ title: "Search Results" }); `

- Like the homepage, the search results page is not available in the page type selection dialog, and thus you cannot create one using Scrivito’s editing interface – for the same reason: The default content includes such a page, and having more than one search results page doesn’t make any sense.

- Repeating the search should now yield one result (unless you’ve changed the headline of the homepage). As with all new pages you might be creating, the search results page can be fine tuned via its properties view.

- Next, let’s add a page to the navigation.



