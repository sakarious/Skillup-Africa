# Polymorphism

Polymorphism is the ability of different objects to respond, each in its own way, to identical messages.

Lets take a Door as a basic example. Lets say a door is a portal of entry into a room or a place. Now how do anything **come** into the room through a door?

	1. A person **comes** into the  by walking through the door.
	2. Light can **come** into the room by reflection.
	3. The air can also **come** into a room through its own way (which isnt by walking or reflecting.)

Let us Consider a Car example. Take any brand like Ford, Honda, Toyota, BMW, Benz etc., Everything is of type Car, and all cars move. But each of the cars have their own advanced features and more advanced technology involved in their move behavior.

Polymorphism simply gives a way to use a class exactly like its parent so there’s no confusion with mixing types. But each child class keeps its own methods as they are. This typically happens by defining a (parent) interface to be reused. It outlines a bunch of common methods. Then, each child class implements **its own version of these methods**.

Let's create our own alternate universe and create our own list of professions. Lets call this class Profession and state that every profession must **"CUT"**. Now let's create 3 types professions from our class. Lets create a Surgeon, a hair stylist and an actor.
Now, because we are generating or creating these professions from our class Profession which is a blueprint in creating other professions, It means every profession created must atleast **"CUT"**. 

Now, If anybody says **"CUT"** to these people

    The Surgeon
    The Hair Stylist
    The Actor

What will happen?

    The Surgeon would begin to make an incision.
    The Hair Stylist would begin to cut someone's hair.
    The Actor would immediately stop acting out of the current scene.

This is what polymorphism is. (Same name or message, different behavior).
