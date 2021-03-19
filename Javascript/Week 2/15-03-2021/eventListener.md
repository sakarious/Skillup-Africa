# EVENT LISTENER

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box.

Each available event has an event handler, which is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are registering an event handler. Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

An event listener is a procedure or function in a computer program that waits for an event to occur. Examples of an event are the user clicking or moving the mouse, pressing a key on the keyboard, etc. The listener is programmed to react to an input or signal by calling the event's handler.

The following JavaScript code would add an event listener to an HTML document:

        document.addEventListener('click', myfunction, false);

    Here, when HTML is rendered in a browser, the listener calls the function "myfunction" (defined elsewhere in the script) when the user clicks.
