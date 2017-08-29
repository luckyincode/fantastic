class CodingSession1 {

    // sleepIn
    // The parameter weekday is true if it is a weekday, and the parameter 
    // vacation is true if we are on vacation. We sleep in if it is not a 
    // weekday or we're on vacation. Return true if we sleep in.

    // sleepIn(false, false) → true
    // sleepIn(true, false) → false
    // sleepIn(false, true) → true

    sleepIn(weekday, vacation) {
        let sleepin = false;
        if (!weekday || vacation)
            sleepin = true
        return sleepin
    }

    // diff21 
    // Given an int n, return the absolute difference between n and 21, except
    // return double the absolute difference if n is over 21.

    // diff21(19) → 2
    // diff21(10) → 11
    // diff21(21) → 0
    // diff21(19) → 2
    // diff21(10) → 11
    // diff21(21) → 0
    // diff21(22) → 2
    // diff21(27) → 12
    // diff21(-1) → 22

    diff21(n) {
        let diff = Math.abs(21 - n)
        if (n > 21)
            diff = diff * 2
        return diff
    }

    // nearHundred 
    // Given an int n, return true if it is within 10 of 100 or 200. 
    // Note: Math.abs(num) computes the absolute value of a number.
    // nearHundred(93) → true
    // nearHundred(90) → true
    // nearHundred(89) → false

    nearHundred(n) {
        let isNearHundred = false;
        if (Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10)
            isNearHundred = true
        return isNearHundred

    }

    // missingChar 
    // Given a non-empty string and an int n, return a new string where the 
    // char at index n has been removed. The value of n will be a valid 
    // index of a char in the original string (i.e. n will be in the range
    // 0..str.length()-1 inclusive).
    // missingChar("kitten", 1) → "ktten"
    // missingChar("kitten", 0) → "itten"
    // missingChar("kitten", 4) → "kittn"
    missingChar(str, n) {
        let arr = str.split('')
        arr.splice(n, 1)
        return arr.join("")
    }

    // backAround 
    // Given a string, take the last char and return a new string with the last
    // char added at the front and back, so "cat" yields "tcatt". The original
    // string will be length 1 or more.
    // backAround("cat") → "tcatt"
    // backAround("Hello") → "oHelloo"
    // backAround("a") → "aaa"
    backAround(str) {
        let lastChar = str.charAt(str.length - 1)
        return lastChar + str + lastChar
    }

    // startHi 
    // Given a string, return true if the string starts with "hi" and false otherwise.

    // startHi("hi there") → true
    // startHi("hi") → true
    // startHi("hello hi") → false
    startHi(str) {
        let substring = str.substr(0, 2)
        return substring == 'hi'
    }

    // hasTeen
    // We'll say that a number is "teen" if it is in the range 13..19 
    // inclusive. Given 3 int values, return true if 1 or more of them are teen.

    // hasTeen(13, 20, 10) → true
    // hasTeen(20, 19, 10) → true
    // hasTeen(20, 10, 13) → true
    hasTeen(a, b, c) {
        let numbers = [a, b, c]
        let isTeen = false
        numbers.forEach(function(number) {
            if (number >= 13 && number <= 19)
                isTeen = true
        })
        return isTeen
    }


    // mixStart 
    // Return true if the given string begins with "mix", except the 'm' can be
    // anything, so "pix", "9ix" .. all count.

    // mixStart("mix snacks") → true
    // mixStart("pix snacks") → true
    // mixStart("piz snacks") → false

    mixStart(str) {
        let substring = str.substr(1, 2)
        return substring == 'ix'
    }

    // close10 
    // Given 2 int values, return whichever value is nearest to the value 10,
    // or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

    // close10(8, 13) → 8
    // close10(13, 8) → 8
    // close10(13, 7) → 0
    close10(a, b) {
        let val = 0
        if ((Math.abs(a - 10)) > (Math.abs(b - 10))) {
            val = b
        } else if ((Math.abs(a - 10)) < (Math.abs(b - 10))) {
            val = a
        }
        return val
    }

    // stringE 
    // Return true if the given string contains between 1 and 3 'e' chars.

    // stringE("Hello") → true
    // stringE("Heelle") → true
    // stringE("Heelele") → false
    stringE(str) {
        return (str.match(new RegExp("e", "g")) || []).length <= 3
    }

    // everyNth 
    // Given a non-empty string and an int N, return the string made starting
    // with char 0, and then every Nth char of the string. So if N is 3, use
    // char 0, 3, 6, ... and so on. N is 1 or more.

    // everyNth("Miracle", 2) → "Mrce"
    // everyNth("abcdefg", 2) → "aceg"
    // everyNth("abcdefg", 3) → "adg"
    everyNth(str, num) {
        let myString = ''
        for (var i = 0; i <= str.length; i = i + num) {
            myString = myString + str.charAt(i)
        }
        return myString
    }

}
let codingSession1 = new CodingSession1()

console.log(codingSession1.sleepIn(false, false) + " || Expect true")
console.log(codingSession1.sleepIn(true, false) + " || Expect false")
console.log(codingSession1.sleepIn(false, true) + " || Expect true")

console.log(codingSession1.diff21(19) + " || Expect 2")
console.log(codingSession1.diff21(10) + " || Expect 11")
console.log(codingSession1.diff21(21) + " || Expect 0")
console.log(codingSession1.diff21(22) + " || Expect 2")
console.log(codingSession1.diff21(27) + " || Expect 12")
console.log(codingSession1.diff21(-1) + " || Expect 22")

console.log(codingSession1.nearHundred(93) + " || Expect true")
console.log(codingSession1.nearHundred(90) + " || Expect true")
console.log(codingSession1.nearHundred(89) + " || Expect false")

console.log(codingSession1.missingChar("kitten", 1) + " || Expect ktten")
console.log(codingSession1.missingChar("kitten", 0) + " || Expect itten")
console.log(codingSession1.missingChar("kitten", 4) + " || Expect kittn")

console.log(codingSession1.backAround("cat") + " || Expect tcatt")
console.log(codingSession1.backAround("Hello") + " || Expect oHelloo")
console.log(codingSession1.backAround("a") + " || Expect aaa")

console.log(codingSession1.startHi("hi there") + " || Expect true")
console.log(codingSession1.startHi("hi") + " || Expect true")
console.log(codingSession1.startHi("hello hi") + " || Expect false")
console.log(codingSession1.startHi("") + " || Expect false")
console.log(codingSession1.startHi("tacos are good for everyone") + " || Expect false")

console.log(codingSession1.hasTeen(13, 20, 10) + " || Expect true")
console.log(codingSession1.hasTeen(20, 19, 10) + " || Expect true")
console.log(codingSession1.hasTeen(20, 10, 13) + " || Expect true")
console.log(codingSession1.hasTeen(20, 30, 33) + " || Expect false")

console.log(codingSession1.mixStart("mix snacks") + " || Expect true")
console.log(codingSession1.mixStart("pix snacks") + " || Expect true")
console.log(codingSession1.mixStart("piz snacks") + " || Expect false")

console.log(codingSession1.close10(8, 13) + " || Expect 8")
console.log(codingSession1.close10(13, 8) + " || Expect 8")
console.log(codingSession1.close10(13, 7) + " || Expect 0")

console.log(codingSession1.stringE("Hello") + " || Expect true")
console.log(codingSession1.stringE("Heelle") + " || Expect true")
console.log(codingSession1.stringE("Heelele") + " || Expect false")

console.log(codingSession1.everyNth("Miracle", 2) + " || Expect Mrce")
console.log(codingSession1.everyNth("abcdefg", 2) + " || Expect aceg")
console.log(codingSession1.everyNth("abcdefg", 3) + " || Expect adg")


// console.log(codingSession1.  + " || Expect ")