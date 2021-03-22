
# Documet Object Model

The browser is an object, and the document it displays is an object too. The browser itself has a long list of objects including: the browser window, the document inside the window, the navigation buttons, the location or URL, and more. These objects are modelled by what's known as the Browser Object Model, or BOM for short.

  

The Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document. When a document is loaded in the browser, it is loaded into the document object in the BOM, and a Document Object Model is created for just this document instance. The browser now creates a node tree, modelling the relationships between the different nodes. In a standard HTML document you'll have an HTML object containing two nodes: head, and body. Head holds all the invisible objects like title, link, meta, script, etc., while body holds all the visible nodes in the viewport.

  

These nodes in turn live in strict hierarchical relationships depending on how they are nested in the HTML and each node can be selected within the DOM, and see what styles are applied to that node.

  

## Targeting elements in the DOM

  

To get to a node or element, or a group of nodes inside the body, we use methods available for the DOM such as

**getElementByID**

**getElementsByClassName**

**getElementsByTagName**

**getElementsByTagNameNS**

  

More recently, two new catch all methods have come along to solve most targeting needs which are:

**Query Selector** (querySelector()) - which returns the first instance that matches the specified selectors.

  

**Query Selector All** (querySelectorAll) - which returns a node list of all elements that match the specified selectors. These selectors are one or more comma separated CSS selectors.

  

## Accessing and changing elements

  

The purpose of targeting an Element within the DOM, using JavaScript, is to do something with it. Like change the text, change an image reference, change a class name, or ID, or maybe the HTML as a whole. Each of these Elements is its own DOM node, so effectively, an object, and each Element has a long list of properties and methods we can use to interact with it. We can use methods and properties like

**.innerHTML**

**.classList**

**.textContent**

  

## Accessing and changing attributes

  

The attributes property is read-only, While we can access the attributes of an element using the attributes property, we need methods to actually work with them, so we can assign attribute names and attribute values separately. Here we have four methods to choose from.

  

**Get attribute** (getAttribute()) - returns the value of the specified attribute.

  

**Set attribute** (setAttribute()) has two arguments, the attribute name and its value, and either changes the value of the specified attribute if it exists or adds a new attribute if none is present.

  

**Remove attribute** (removeAttribute()) removes the specified attribute. These methods work for all attributes on any element.

  

## Addding DOM Elements

  

A better way of adding new DOM elements is by breaking them into their individual components and adding them to the DOM tree. First create the element itself. Then create the Text Node that goes inside the element. Add the Text Node to the element. And finally, add the element to the DOM tree. This makes for a cleaner and more versatile JavaScript and avoids potential disasters like accidentally erasing all the texts in an element or breaking the HTML of the entire document. To do this we need three new methods.

  

**Create element** (.createElement()) - to create the element.

  

**Create Text Node** (.createTextNode()) - to create the next node holding the content inside the element.

  

**Append Child** (.appendChild) - refers to place the Text Node inside the element, and then place the new element inside where it needs to go in the DOM tree.

  

## Applying inline CSS

  

JavaScript is also used to apply custom CSS to elements. This could be to add an effect, or highlight, or change the visible state of an element when something happens on a page or something altogether different. When we apply styles to an element using JavaScript the browser adds inline CSS to that element by accessing the style attribute in the DOM. It is important to note that JavaScript does not write to standalone style sheets or any other CSS on the page.

  

These inline styles are stored in the style property, which can be accessed like any other element property.

  

	.style.property

	e.g

	.style.color

	.style.backgroundColor etc
