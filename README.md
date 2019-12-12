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
● the first line holds the room dimensions (X Y), separated by a single space (all
coordinates will be presented in this format)
● the second line holds the hoover position
● subsequent lines contain the zero or more positions of patches of dirt (one per line)
● the next line then always contains the driving instructions (at least one)

