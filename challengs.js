// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society.

// Notes:

// - The secret society's name should be entirely uppercased.

//       societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
//       societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
//       societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

const societyName = ["Adam", "Sarah", "Malcolm"]

const letterinCapital  = (names) => {
    let firstLetterCapital = societyName.map(name => name[0].toUpperCase());
    let inittialsOnly = firstLetterCapital.sort();
    return inittialsOnly;
}

constole.log(letterinCapital(societyName))