const capitalize = (str) => {
    const capital = str.charAt(0).toUpperCase() + str.slice(1);
   return capital; 
}
module.exports = capitalize;
//console.log(capitalize("hello"))

