'use strict';
var countaier = 0 ;

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
    countaier++ ;
} else if (cat === 'no' || cat === 'n') {
    alert('I love cat more than humans and I have one ')
}


var movie = prompt('Do I like documentary movies?').toLowerCase();

console.log('movie = ', movie)
if (movie === 'yes' || movie === 'y') {
    alert('Great !')
    countaier++ ;
} else if (movie === 'no' || movie === 'n') {
    alert('SORRY, your answer is wrong')
}

var food = prompt('Do I love (fasolia) ? ').toLowerCase();
console.log('food = ', food)
if (food === 'yes' || food === 'y') {
    alert('Is  it someone love fasolia ?  ')
} else if (food === 'no' || food === 'n') {
    alert('correct answer, bravo')
    countaier++ ;
}

var hobby = prompt('Am I a photographer ?').toLowerCase();
console.log('hobby = ', hobby)
if (hobby === 'yes' || hobby === 'y') {
    alert('correct answer !')
    countaier++ ;
} else if (hobby === 'no' || hobby === 'n') {
    alert('your answe is wrong "(')
}


var enjoy = prompt('Did you enjoy with me? ').toLowerCase();
console.log(enjoy)
if (enjoy === 'yes' || enjoy === 'y') {
    alert('me too, thanks for your time :), let us to play new game')
    countaier++ ;
} else if (enjoy === 'no' || enjoy === 'n') {
    alert('oh no ! thanks for breaking my heart :(, try this new game ')
}




for (var i = 0; i < 5; i++) {

    var age = prompt('ok now we will do something different,I have a cat, can you guess how old is it?')
    console.log(age)

    if (age == 6) {
        alert('correct answer !')
        countaier++ ;
        break;

    } else if (age > 6) {
        alert('too high')



    } else if (age < 6) {
        alert('too low')


    }

}

alert('The correct answer is 6 ')


var a = ['mansaf', 'shawrma', 'burger', 'taboleh', 'makmora', 'kubba', 'salad', 'pizza', 'yalanji', 'sheshbark']
for (var i = 0; i < 7; i++) {
    var yummy = prompt('can you guess on of my favorites food dishes? ')

    if (yummy == a[0] || yummy ==a[1] || yummy==a[2] || yummy==a[3] || yummy == a[4] || yummy == a[5] || yummy == a[6] || yummy == a[7] || yummy==a[8] || yummy == a[9]) {
        alert('correct answer !')
        countaier++ ;
        break;
    } else if (yummy !== a) {
        alert(' try again !')
    }

}
alert('my fav food is mansaf, shawrma, burger, taboleh, makmora, kubba, salad, pizza, yalanji and sheshbark ')
alert('your score is =' + countaier)
