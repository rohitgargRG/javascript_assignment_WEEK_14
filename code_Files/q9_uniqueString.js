let str = "mithun"
let flag = true

let mySet = new Set()
function uniqueCharactersCheck(str){
    for (let char of str) {
        mySet.add(char);
    }
}
uniqueCharactersCheck(str)

if(mySet.size === str.length) console.log(`all chracters are unique`);
else console.log(`all charaters are not unique`);