const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const main = require('./src/main.js')
const fs = require('fs');
const array = fs.readFileSync('input.txt', 'utf8').split(/[\r\n]+/);
const dimensions = array[0].split(' ').map(Number)
const initialCoords = array[1].split(' ').map(Number)
const instructions = array[array.length - 1].split('')
const dirtArray = array.slice(2, array.length-1).map(dirt => dirt.split(' ').map(Number))

const greeting = () => {
    console.log(
      chalk.green(
        figlet.textSync("DO THE ROOMBA", {
          font: "maxfour",
          horizontalLayout: "default",
          verticalLayout: "default"
        })
      )
    );
  }

startCoordPrompt = () => {
    const question = 
    {name: "start",
    type: "input",
    message: "Enter Initial Coordinates of Your Roomba (e.g. 0, 0)"}
    return inquirer.prompt(question)
}

mainMenu = () => {
    const questions = [
        {
          name: "menu",
          type: "list",
          message: "Ready to Do the Roomba? Choose an Option",
          choices: [
              {key: 1, 
              name: 'Use default input file', 
              value: 'default'},
              {
                key: '2',
                name: 'Create a Custom Roomba Dance',
                value: 'custom'
              }
            ]
        }]
    return inquirer.prompt(questions)
}

startCoordPrompt = () => {
    const question = 
    {name: "start",
    type: "input",
    message: "Enter Initial Coordinates of Your Roomba (e.g. 0, 0)"}
    return inquirer.prompt(question)
}

countDirtPatches = () => {
    const question = 
        {name: "patches",
        type: "input",
        message: "How dirty is it?? Enter the # of dirt patches in the room"}
    return inquirer.prompt(question)
    
}

getInstructions = () => {
    const question = 
    {name: "instructions",
    type: "input",
    message: "Now we dance! Enter roomba driving instructions as cardinal directions (e.g. NESWNNSEW)"}
    return inquirer.prompt(question)
}

getPatchCoords = () => {
    const question = 
    {name: "dirt",
    type: "input",
    message: "Enter Initial Coordinates of dirt patch (e.g. 0, 0)"}
    return inquirer.prompt(question) 
}

clear = () => {
    const blank = '\n'.repeat(process.stdout.rows)
    console.log(blank)
}


const run = async () => {
    clear()
    greeting()
    const answer = await mainMenu()
    if ( answer.menu === 'default') {
        main.moveRoomba(dimensions, initialCoords, instructions, dirtArray)
    } else {
    let answers2 = await startCoordPrompt()
    let startCoords = answers2.start.split(',')
    let answers3 = await countDirtPatches()
    let numPatches = answers3.patches
    let dirtPatches = []

    for (i = 0; i < numPatches; i++){
         let answer = await getPatchCoords()
         let patchCoords = answer.dirt.split(',').map(Number)
         dirtPatches.push(patchCoords)
    }
    let answers4 = await getInstructions()
    let instructionInput = answers4.instructions.split('')
    console.log("Here we go!")
    main.moveRoomba(dimensions, startCoords, instructionInput, dirtPatches)
    }
  }
  
  run();