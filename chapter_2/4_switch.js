var date = new Date ()

// condition
// 0-Sunday, 1-Monday, 3-Tuesday

/* switch (){
    case :
        console.log()
        break;
} */

var today = date.getDay()
switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 3:
        console.log('Today is Tuesday')
        break
    case 4:
        console.log('Today is Wednesday')
        break
    case 5:
        console.log('Today is Thursday')
        break
    case 6:
        console.log('Today is Friday')
        break
    case 7:
        console.log('Today is Saturday')
        break

}