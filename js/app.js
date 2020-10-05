'use strict';

var username = prompt('Enter your name please :) ')
console.log('username = ', username)

var answer = confirm(`Hi ! ${username} are you ready to enjoy with me? `)
console.log(answer);
if (answer === true) {
    alert('Here we go ..')

} else if (answer === false) {
    alert('ohhh be ready then come back')
}
var cat = prompt('Do I have a cat ?').toLowerCase();
console.log('cat = ', cat)
if (cat === 'yes' || cat === 'y') {
    alert('Good Job, this is just my first quastion')

} else if (cat === 'no' || cat === 'n') {
    alert('I love cat more than humans and I have one ')
}


var  movie =prompt('Do I like documentary movies?').toLowerCase();

console.log('movie = ', movie)
if (movie === 'yes' || movie ==='y'){
    alert('Great !')
}else if(movie === 'no' || movie === 'n'){
    alert('SORRY, your answer is wrong')
}

var food =prompt('Do I love (fasolia) ? ').toLowerCase();
console.log('food = ', food)
if (food === 'yes' || food ==='y'){
    alert ('Is  it someone love fasolia ?  ')
    }else if (food ==='no' || food === 'n'){
        alert ('correct answer, bravo')
    }

var hobby=prompt('Am I photographer ?').toLowerCase();
console.log('hobby = ', hobby)
if (hobby === 'yes' || hobby === 'y'){
    alert('correct answer !')
}else if(hobby === 'no' || hobby ==='n'){
    alert('your answe is wrong "(')
}

var enjoy=prompt('Did you enjoy with me? ').toLowerCase();
console.log(enjoy)
if (enjoy === 'yes' || enjoy ==='y'){
alert ('me too, thanks for your time :)')
}else if (enjoy === 'no' || enjoy === 'n'){
    alert ('oh no ! thanks for breaking my heart :( ')
}

