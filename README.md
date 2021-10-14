# HTML MISC

A pile of fun, self-contained things made with good ole simple html/css/js.

--------
------
###### % ___states_and_commands.html___

Trying out using something resembling the command and state design patterns.

Move a box around a grid using the arrow keys or WADS. Each position in the grid has an associated state, and each state has a set of valid moves as commands.


------
###### % ___drawer_fader.html___

Just a fun visual program. Provides a "Drawer" object, which attaches to a given canvas and animates on it. The animation consists of an object that shifts in color and position and leaves trails in (hopefully) interesting ways.

Each active drawer is configurable in a number of ways including:
- size and shape of the drawn object
- size of the step when moving
- type of move to make (between move-to-point and random-within-range)
- whether or not to show an info box in the canvas

For the dirty details, venture into the code. For some reference, an example of how to set the size on the page's first drawer would be: `canvii[0].drawer.psize = 64`. Some interesting values to try out are included in the comment for the `Drawer` object.

If the url the page is viewed with includes a query parameter with a key of "mc" (just `[...]/drawer_fader.html?mc` is good enough), then an additional mini-canvas will be added to the page for extra fun.


------
###### % ___spinner_tester.html___

Viewer for text-based animated spinners. Included list of spinners is from
https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json .

Presents the spinners in an automatically-populated dropdown list for selecting which to show. Also includes a manual speed control to play with speed settings other than the one defined in the list for each spinner.


------
###### % ___(snippets, etc)___

Miscellaneous snippets for testing and noting and a page to make use of them.


------
--------

As an aside, some code pieces may come off a bit weird and/or old fashioned since I developed a habit of tending to try to write these things in a backward-compatible way due to being stuck using or showing on non-cutting-edge browsers much of the time through the years. I would recommend using modern conveniences on modern projects.

