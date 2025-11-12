# Moving Things with JavaScript by Acting on Events

## Learning Goals

- Practice moving elements on the page
- Demonstrate how to move an element in response to a browser event
- Demonstrate how to update an element's position on the page conditionally

## Introduction

Think back to the first video game you played.

Think about the mechanics of that game. When you _tilted_ a joystick or
_pressed_ a button it responded to your whims. It pulled you into its story by
giving you a window into its world and a way of interacting with — shaping, even
— that world. When you performed an **_event_**, the computer made the world
respond: the little plumber from Brooklyn jumped (_Super Mario Franchise_), the
undead warrior slashed at an evil foe (_Dark Souls_), or the banana-yellow guy
ate the power pellet (_Pac-Man_).

![Controlling classic video game characters Mario and Pacman](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-acting-on-events/Image_36_VideoGame.png)

_Programming means that you can create such a world for other people._ Sure,
it'll be a while before you're ready to build something like one of the classic
games above, but we can start with the essential steps. In this lab we'll learn
how to move an element on a page in response to an _event_.

If you haven't already, **fork and clone** this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code.

Go ahead and run the tests. You'll see that you need to create two functions to
get the tests passing: `moveDodgerLeft()` and `moveDodgerRight()`. We'll write
`moveDodgerLeft()` together, then you'll create `moveDodgerRight()` on your own.

## Practice Moving Elements on the Page

![Rock Dodger!](https://curriculum-content.s3.amazonaws.com/phase-0/acting-on-events-lab/rock-dodger.png)

Open `index.html` in the browser. You'll see a black square which represents the
game field and a white rectangle at the bottom of that field which is our game
piece, the dodger. Now open DevTools and click on the Elements tab. You'll see
that the game field is a `<div>` with an `id` of "game." Expand that `div` and
you'll see that the game piece is a second, nested `<div>` with an `id` of
"dodger."

Click on the game `div` and take a look at its CSS in the styles tab. You'll see
that the game field has a height and width of 400px. Now click on the dodger and
note that it has a height of 20px and a width of 40px. Finally, take a look at
the inline style on the dodger `<div>`: the `bottom` and `left` properties
define the dodger's starting position _relative to its parent element, the game
field_. In other words, the lower left corner of the game field corresponds
to`left` and `bottom` positions of 0px. The starting values of the dodger's
`bottom` and `left` properties are what places it at the bottom center of the
game field when our game launches.

Before we can use JavaScript to move the dodger, we first need to grab it and
save a reference to it in a variable. Enter the following in the console:

```javascript
const dodger = document.getElementById("dodger");
```

Awesome. Now let's change its color:

```javascript
dodger.style.backgroundColor = "#000000";
```

Whoa, where'd it go? Well, we changed the color to `#000000`, another way of
expressing "black." So it just blends in with the background.

Let's change it to something more visible.

```javascript
dodger.style.backgroundColor = "#FF69B4";
```

Much better!

![pink dodger](https://curriculum-content.s3.amazonaws.com/skills-based-js/pink_dodger.png)

Accessing the `style` property of the `dodger` element allows us to change
things like the `backgroundColor`, `height`, `width`, etc. We can also use it to
change an element's position on the page.

Let's start by moving the element up:

```javascript
dodger.style.bottom = "100px";
```

![up 100px](https://curriculum-content.s3.amazonaws.com/skills-based-js/pink_dodger_bottom_100.png)

**Note:** Even though we're talking about _numeric_ coordinates, note that we
need to move the dodger by assigning a new _string value_.

We can verify our dodger's current position by simply typing `dodger.style.left`
or `dodger.style.bottom` into the console.

Let's return it to where it started by resetting the `bottom` attribute:

```javascript
dodger.style.bottom = "0px";
```

Now let's visually verify that the dodger's position is determined relative to
the game field by changing its `left` attribute:

```javascript
dodger.style.left = "0px";
```

You should see the dodger nestled up against the bottom left corner of the game
field.

## Demonstrate How to Move an Element in Response to a Browser Event

Now that we know how to write the code to move the dodger, let's figure out how
to tie that action to an event.

Let's say we want the user to be able to move the dodger to the left using the
left arrow key. We learned in an earlier lesson that, when a key is pressed, the
`keydown` event provides a code to indicate which key it was. So the first thing
we have to do is figure out what code is used to identify the left arrow key. We
could look it up, but we're programmers — let's explore!

So what do we mean when we say that an event provides a code? Any time an event
listener is in place and the event it's listening for is triggered, a JavaScript
object containing a bunch of information about the event is **automatically**
passed as an argument to the callback function. We can access that object and
the information it contains by defining a parameter for the callback. It looks
like this:

```javascript
document.addEventListener("keydown", function (event) {
  console.log(event);
});
```

By defining the `event` parameter in the parentheses, we've given the body of
the callback access to that event object, which is what allows us to log it to
the console. Note that, as with any JavaScript parameter (and, in fact, any
JavaScript variable), we can give it any valid JavaScript variable name we like.
By convention, and in keeping with programming best practice of using meaningful
variable names, the name JavaScript programmers use for this parameter is
usually either `event` or `e`. You will see these in a lot of JavaScript code,
and we recommend you use them as well.

This pattern, when you first encounter it, is tricky to wrap your head around.
Don't worry if it doesn't make total sense yet — it will become clearer as
you continue through the curriculum. You might also want to read the excellent
accepted answer in [this Stack Overflow thread][so].

Let's take a look at what that event object looks like. Enter the code above
into the console then click in the browser window (where the game field and
dodger are rendered). Now, if you press the left arrow key, you should see a
`KeyboardEvent` logged in the console. Expand the event and you'll see its
properties listed; the one we're interested in is the `key` property. Try
pressing some other keys as well and check out their `key` properties.

![Keyboard Event](https://curriculum-content.s3.amazonaws.com/phase-0/acting-on-events-lab/keyboard-event.png)

**Top Tip:** You can explore other event types as well: just change the name of
the event in the code above.

Now that we know the code the event uses to identify the left arrow key, we can
write the JavaScript code to move the dodger left when the key is pressed:

```javascript
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
```

So what are we doing here? Well, when our event listener detects a `keydown`
event, we first check to see whether the `key` property of the event object has
the value "ArrowLeft." If it does, we get the current value of the dodger's
`style.left` property and use the [String `replace()` method][replace] to strip
out the "px", then store the result in `leftNumbers`. Next, we parse
`leftNumbers` as an integer and store that result in `left`. Finally, we update
the dodger's `style.left` property using string interpolation, injecting the
current value minus 1. If the key that's pressed is _not_ the left arrow key, we
do zilch. Try it out in the browser yourself!! (Be sure to refresh the page
first.)

We do still have a problem, though. Even though we're only going one pixel at a
time, eventually our dodger will zoom (well, relatively speaking) right out of
view.

How can we prevent this? We need to check where the left edge of the dodger is
and only move it if it hasn't yet reached the left edge of the game field.

## Update an Element's Position on the Page Conditionally

Our callback function is starting to get pretty complex. This is probably a good
time to break the dodger's movement out into a separate function. We want to
move the dodger left if our `if` statement returns true, so let's pull out the body
of that `if` statement into a function called `moveDodgerLeft()`.

Refresh the page so we're starting with a blank slate, then grab the dodger again:

```javascript
const dodger = document.getElementById("dodger");
```

Now we'll build our `moveDodgerLeft()` function, adding a check on the current
position of the dodger:

```javascript
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
```

We're doing essentially the same thing, but we first ensure that the dodger's
left edge has not reached the left edge of its container.

Now let's wire this up to our event listener:

```javascript
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
```

Now try moving the dodger past the left edge. No can do!

Copy the final cod
e into `index.js` and run the tests. You should now have the
first one passing.

## Exercise
Now it's your turn. Just remember to replace the question mark in the code with your own.

### Exercise 1 - Implement moveDodgerRight function
With the code implemented from previuos, think about what needs to change to make a `moveDodgerRight()` function. First you'll need to add another condition to your addeventListener's callback function to call `moveDodgerRight()` on the right-arrow key.

```javascript

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    ...
  }

  if (e.key === "?") {
    // make your call to moveDodgerRight function here...
  }
```

Next create a new function named `moveDodgerRight` and please ensure that your are outside the addeventListener. 

```javascript
function ? {
  ....
}
```

Then you need to make an if statement inside the function named `moveDodgerRight` that ensures that the dodger's left edge has not reached the right edge of its container (Tip. use Inspect Element in Chrome to find the correct value). Finally inside the if statement, instead of moving the dodger `${left - 1}px`, you'll be moving it `${left + 1}px`.

```javascript
function ? {
  const leftNumbers = dodger.style.left.replace("px", ""); // unchanged
  const left = parseInt(leftNumbers, 10); // unchanged

// write your if statement here...
  
}
```
Now try moving the dodger to the right and see if you can go beyond the right edge of the container!


### Exercise 2 - Implement moveDodgerUp function
Now add another condition to your addeventListener callback function to call the `moveDodgerDown()` function on the up-arrow key.

```javascript

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    ...
  }

  if (e.key === "ArrowRight") {
    ...
  }

  if (e.key === "?") {
    // write your code here
  }
```

Next implement the `moveDodgerUp()` function and please ensure that your are outside the addeventListener. Inside the `moveDodgerUp()` get the current value of the dodger's
`style.bottom` property. Here is how you should do it - replace `dodger.style.left.replace("px", "")` with `dodger.style.bottom.replace("px", "")` and store the result in a variable named `bottomNumbers`. Next, we parse `bottomNumbers` as an integer and store that result in a variable named `bottom`. If you need help checkout the function `moveDodgerRight()` or `moveDodgerLeft()`

```javascript
function ? {
  const ? =  // write your code here
  const ? =  // write your code here
```

Finally you need to make an if statement inside the function named `moveDodgerUp` that ensures that the dodger's bottom position is within the acceptable range. If the bottom position is within the acceptable range: Increment the variable `bottom` position by 1 pixels. Here is how you can do it - set the `dodger-style-bottom` to move the dodger `${bottom + 1}px`.

```javascript
function moveDodgerUp() { 
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers);
  if (?) {
    ? = ? ; // Move dodger up by 1px
  }
```

Now try moving the dodger up to see if you can go beyond the top edge of the container!


### Exercise 3 - Implement moveDodgerDown function

Now add another condition to your addeventListener callback function to call the `moveDodgerDown()` function on the down arrow key.

```javascript
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    ...
  }

  if (e.key === "ArrowRight") {
    ...
  }

  if (e.key === "ArrowUp") {
    ...
  }

  if (e.key === "?") {
    // write your code here
  }
```

Next create a new function named `moveDodgerDown` and please ensure that your are outside the addeventListener. 

```javascript
function ? {
  ....
}
```

Then you need to make an if statement inside the function named `moveDodgerDown` that ensures that the dodger's bottom edge has not reached the bottom edge of its container (Tip. use Inspect Element in Chrome to find the correct value). Finally inside the if statement, instead of moving the dodger `${bottom + 1}px`, you'll be moving it `${bottom - 1}px`.

```javascript
function ? {
  const bottomNumbers = dodger.style.bottom.replace("px", ""); // unchanged
  const bottom = parseInt(bottomNumbers); // unchanged

  if (?) {
    ? = ? ; // Move dodger down by -1px
  }
  
}
```
Now try moving the dodger down through the container and see if you can go beyond the bottom edge of the container!

### Exercise 4 -  Implement a sound function that plays music up/down/left/right keystrokes

Go and update the HTML file and insert an audio-tag with an ID attribute named `movementSound` and finally ensure that you are pointing to the m4a file named `movement_sound.m4a`

```html
<audio id="?">
    <source src="?" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```
Before we can use JavaScript to play the sound named `movement_sound.m4a` on keystroke up/down/left/right, you first need to grab it and save a reference to it in a variable named `movementSound`.

```javascript
const ? = document.getElementById("?");
```

Next implement a function named `playSoundOnMovement` outside the addeventListener.

```javascript
function ? {


}
```

Inside the `playSoundOnMovement` function, set the `currentTime` property of the `movementSound` variable to `0`, which will explicitly set the playback position to the beginning of the sound file and finally set the `movementSound` variable to play the sound.


Finally update all 4 functions [`moveDodgerUp()`, `moveDodgerDown()`, `moveDodgerleft()`, `moveDodgerRight()`] so it calls the function `playSoundOnMovement()` each time you click on the keystroke up/down/left/right.

### Exercise 5 -  Implement a sound function that plays music when you hit one of the edges of the container

Go and update the HTML file and insert an audio-tag with an ID attribute named `gameoverSound` and finally ensure that you are pointing to the m4a file named `gameover_sound.m4a`

```html
<audio id="?">
    <source src="?" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

Before we can use JavaScript to play the sound named `gameover_sound.m4a` on a collision with the containers edge, you first need to grab it and save a reference to it in a variable named `gameoverSound`.



Next implement a function named `playGameOverSound` outside the addeventListener.

```javascript
function ? {


}
```

Inside the `playGameOverSound` function, set the `currentTime` property of the `movementSound` variable to `0`, which will explicitly set the playback position to the beginning of the sound file and finally set the `gameovertSound` variable to play the sound.

Finally, update all 4 functions [`moveDodgerUp()`, `moveDodgerDown()`, `moveDodgerleft()`, `moveDodgerRight()`] so that it calls the function `playGameOverSound()` every time you hit one of the edges in the container.

### Exercise 6 -  Change the dodger pink background with pacman image
Go and update the selector #dodger in your stylesheet to show the image with pacman - `pacman.png`

### Exercise 7 - Change the starting position of the pacman figure
Go and update the code so the pacman begin in the middle of the container

### Exercise 8 - Add Gamelogic - an object to catch


## Conclusion
Events and event handling are vital to web programming. JavaScript allows for dynamic page rendering, so users can interact with the contents of the page in real time. Knowledge of the basic techniques we've learned so far sets you on the road toward being able to create complex interactions like those in video games you may have played before!