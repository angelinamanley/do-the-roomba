
moveRoomba = (dimensions, initialCoords, instructions, dirtArray) => {
    let coords = initialCoords
    let dirt = dirtArray
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
    console.log(`Final Coordinates: ${coords[0]} ${coords[1]}`)
    console.log(`# of Dirt Patches Cleaned: ${patches}`)
}


module.exports = {moveRoomba}
    
    
         
        







