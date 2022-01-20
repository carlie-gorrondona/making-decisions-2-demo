//backpack array
let backpack = [];

//adds items to backpack
backpack.push("Sword");
backpack.push("Shield");
backpack.push("Food");

//removes Sword
//backpack.shift();
backpack.splice(0, 1);

let furCoat = "Fur Coat";

//add "Fur Coat" to backpack
backpack.push(furCoat);

//removes "Fur Coat"
backpack.pop();

backpack.push("Flint", "Blanket", "Knife", "Toothbrush");

let backpack2 = backpack.splice(3, 3);

//number variable set equal to length of backpack array
let itemCount = backpack.length;

// console.log(backpack);
// console.log(itemCount);
// console.log(backpack2);
// console.log(backpack2[0]);


// //does the same thing as the loop above just with a different condition in second argument
// for (let i = 0; i <= backpack2.length - 1; i++) {

//     console.log(backpack2[i]);

// }



if (backpack.length >= 3) {

    //loops through backpack array and prints each element
    for (let i = 0; i < backpack.length; i++) {

        console.log(backpack[i]);

    }

} else {

    //loops through backpack array and prints each element
    for (let i = 0; i < 3; i++) {

        console.log(backpack[i]);
        
    }

}


// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {

    console.log("------------ ", guessMe);

    if (guessMe % 4 === 0 || guessMe % 5 == 0) {

        guessMe += 25

    } else if (guessMe % 3 == 0) {

        guessMe -= 27

    } else {

        guessMe += 3

    }

    guessMe += 22
}

console.log("Final Value: ", guessMe);

