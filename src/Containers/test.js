function splitMessage(string,counter){
    let regex=/[^ ]+/g;
    let messageToReturn=[]
let charArr=string.match(regex);
for (let a=0;a<=counter;a++){
 messageToReturn.push(charArr[a]+charArr[a+1])

}
console.log(messageToReturn)
}
splitMessage("SMS Messages are really and fuckingly Boring",12)