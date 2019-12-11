const fs = require('fs');
const array = fs.readFileSync('input.txt', 'utf8').split(/[\r\n]+/);

const dimensions = array[0].split(' ').map(Number)
const initialCoords = array[1].split(' ').map(Number)
const instructions = array[array.length - 1].split('')
const dirtArray = array.slice(2, array.length-1).map(dirt => dirt.split(' ').map(Number))


moveRoomba = (dimensions, initialCoords, instructions, dirtArray) => {
    let coords = initialCoords
    let dirt = dirtArray
    x = coords[0]
    y = coords[1]
    let patches = 0
    instructions.forEach(function(instruction){
        if (instruction === "E" && coords[0] < dimensions[0]){
            coords[0]++
        }
        if (instruction === "W" && coords[0] > 0){
            coords[0]--
        }
        if (instruction === "N" && coords[1] < dimensions[1]){
            coords[1]++
        }
        if (instruction === "S" && coords[1] > 0){
            coords[1]--
        }
        dirt.forEach(dirtArray  => {
            if(JSON.stringify(dirtArray) === JSON.stringify(coords)){
            patches++
            dirt = dirt.filter( el => el !== dirtArray)}
        })
       
    })
    console.log(`${coords[0]} ${coords[1]}`)
    console.log(patches)
}

moveRoomba(dimensions, initialCoords, instructions, dirtArray)

    
    
    
         
        







