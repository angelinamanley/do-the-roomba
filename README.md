# Do-The-Roomba 

It's time to do the Roomba, the newest vacuum dancing sensation! Navigate an imaginary robotic hoover (a Roomba )
through an equally imaginary room. 

## Installation

### Run in local
* Clone the repo

```bash
$ cd do-the-roomba
$ npm install
$ node index.js
```

## Usage

* In the root folder run 

```
node index.js
```

Follow the command line instructions.  Make sure to follow format examples for answer input.  

You can also edit the input.txt file in the root folder to change the default coordinates and instructions. 

Example:


```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

* First line: Room dimensions as X and Y coordinates , identifying the top right corner of the room
rectangle. This room is divided up in a grid-based on these dimensions; a room that
has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover
positions. The bottom left corner is the point of origin for our coordinate system, so as
the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
* Second Line: An initial hoover position (X and Y coordinates like patches of dirt)
* Next Lines: Locations of patches of dirt, also defined by X and Y coordinates identifying the
bottom left corner of those grid positions.
* Last Line: Driving instructions (as cardinal directions ) where e.g. N and E mean "go north" and
"go east" respectively)

