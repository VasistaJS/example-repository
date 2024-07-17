let map = new Map();

map.set("Navin","Java");
map.set("Kavin","Dontnet");
map.set("Pavin","AI");

//console.log(map)

// for (let[k,v] of map){
//     console.log(k,":",v)
// }

map.forEach((v,k)=>{
    console.log(k,":",v)
    
})