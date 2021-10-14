let selectElementsStartingWithA = (array) => array.filter((fruit) => fruit.startsWith("a"))

let selectElementsStartingWithVowel = (array) => array.filter(vowel => /^[aeiou]/i.test(vowel))

let removeNullElements = (array) => array.filter(element => element !== null)

let removeNullAndFalseElements = (array) => array.filter(element => (element !== null && element !== false))

let reverseWordsInArray = (array) => array.map(word => word.split("").reverse().join(""))

let everyPossiblePair = (array) => array.sort().map((character, index, sortedArray) => sortedArray.filter(char => char !== character)).reverse()

let allElementsExceptFirstThree = (array) => array.splice(3)

let addElementToBeginning = (array, element) => (array.unshift(element), array)
// Or [element, ...array]

let sortByLastLetter = (array) => array.sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length - 1))
// https://www.codegrepper.com/code-examples/javascript/javascript+sort+array+by+last+letters

let getFirstHalf = (string) => string.substring(0, Math.round(string.length / 2))

let makeNegative = (number) => -Math.abs(number)

let numberOfPalindromes = (array) => array.filter(word => word === word.split("").reverse().join("")).length
// Or array.filter(word => word === [...word].reverse().join('')).length

let shortestWord = (array) => [...array.sort((a, b) => a.length - b.length)][0]
// Or array.reduce((a, b) => a.length < b.length ? a : b)

let longestWord = (array) => [...array.sort((a, b) => b.length - a.length)][0]
//Or array.reduce((a, b) => a.length > b.length ? a : b)

let sumNumbers = (array) => array.reduce((a, b) => a + b, 0)

let repeatElements = (array) => [...array, ...array]

let stringToNumber = (string) => Number(string)

let calculateAverage = (array) => array.reduce((a, b) => a + b, 0) / array.length

let getElementsUntilGreaterThanFive = (array) => array.slice(0, array.find((element) => element > 5))

let convertArrayToObject = (array) => Object.fromEntries(array.map((element, index, arr) => (index % 2 === 1) ? [arr[index - 1], arr[index]] : null).filter(element => element !== null))
// Or let convertArrayToObject = (array) => array.reduce((acc, current, index, arr) => (index % 2 ? acc[arr[index - 1]] = current : acc[current], acc), {})
// index % 2 is the same as index % 2 === 1

let getAllLetters = (array) => [...new Set(array)].join("").split("").sort()

let swapKeysAndValues = (object) => {
    let newObject = {}
    for (let key in object) newObject[object[key]] = key
    return newObject
    // https://stackoverflow.com/questions/23013573/swap-key-with-value-in-object
    // Cleaner: Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]))
}

let sumKeysAndValues = (object) => Object.entries(object).join(",").split(",").reduce(((a, b) => Number(a) + Number(b)))

let removeCapitals = (string) => string.replace(/[A-Z]/g, "")

let roundUp = (number) => Math.ceil(number)

let formatDateNicely = (date) => date.toLocaleDateString("du-Be")

let getDomainName = (string) => string.split("@").pop().split(".com").shift()

let titleize = (string) => string.replace(/(^[^ ])|(?<= )([^ at])|(?<=\. )([^ ])/g, (element) => element.toUpperCase())

let checkForSpecialCharacters = (string) => /\W/g.test(string)

let squareRoot = (number) => Math.sqrt(number)

let factorial = (number) => number <= 1 ? 1 : (number * factorial (number - 1))

let findAnagrams = (string) => {
    let results = []
    if (string.length === 1) {
        results.push(string)
        return results
    }

    for (let i = 0; i < string.length; i++) {
        let firstChar = string[i]
        let otherChar = string.substring(0, i) + string.substring(i + 1)
        let otherAnagrams = findAnagrams(otherChar)

        for (let j = 0; j < otherAnagrams.length; j++) {
            results.push(firstChar + otherAnagrams[j])
        }
    }
    return results
} // Thanks to https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript

let convertToCelsius = (number) => Math.round((number - 32) / 1.8)

let letterPosition = (array) => array.map(element => element.toLowerCase().charCodeAt(0) - 96)
