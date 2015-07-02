# Multimaps

Multimaps is a minimalist, experimental multi-user web map editing experiment, based (although now fully refactored :) on the simple chat example provided by the [Getting Started](http://socket.io/get-started/chat/) guide of the Socket.IO website, augmented by the wonderful [Leaflet](http://leafletjs.com/) mapping library.

# What does it do?
In essential, multimaps provides support for *real-time full-blown multi-user collaboration on map editing*. Let me rephrase: you can work with your friends on digitising maps and have a *live view on what they are adding*! 

# How to install
Clone the repository, fire up the Nodejs script (so this is assuming you have Node installed) and point any browser to the machine address and port the script is running on:

    git clone https://github.com/reinvantveer/multimaps
    cd multimaps
    npm install
    node index.js

Or, if you want to have it running as a service (run the first install line below as root):

    npm install forever -g
    forever index.js

# How does it work?
Say you have named your machine *myhost*. By default the Node js script starts up the service at *myhost:3000*, although you can configure it to run on a different port. Then you can point any machine that can reach that port (normally that would be any computer within your network subnet) to *myhost:3000* and it will automatically hook up with the other browsers pointed to *myhost:3000*. To extend beyond your local LAN, you'll need to set up a reverse proxy of sorts, of which you can find ample documentation, whichever web server you're using.

So, try it out: fire up the script, open two browser windows (i.e. two sessions) and you can see the points you add in the first window being added in the second!

# Great, so how mature is this?
This one of my one day (one day of coding) demos, I just think it's a cool idea worth exploring. You could work together on digitizing a large map. You could set up a gps tracker map for a group of people to know where everyone is. You can add a chat function to it. But in its experimental stage right now it isn't practical for anything other than experimentation and augmentation. It is in its earliest experimental stages, there are so many things that would be cool to add: 
* adding feature types other than points (polygons and circles and the like)
* this could be fully CRUD; only additions are supported for now
* editing properties should be supported
* there is no persistence as of yet, but PostGIS or some other form of storage would be necessary
* nicknames or user authentication
* etc. etc.