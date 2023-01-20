function max(p1, p2) {
    if (p1 > p2) return p1;
    return p2;
}

function maxofThree(p1, p2, p3) {
    if (p1 > p2 && p1 > p3) return p1;
    else if (p2 > p1 && p2 > p3) return p2;
    return p3;
}

function isVowel(s) {
    if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u') return true;
    return false;
}

function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

function multiply(arr) {
    let multi = 1;
    for (let i of arr) {
        multi *= i;
    }
    return multi;
}

function reverse(str) {
    var ans = "";
    var i = str.length - 1;
    while (i >= 0) {
        ans += str[i];
        i--;
    }
    return ans;
}

function findLongestWord(arr) {
    let max = 0;
    let ans = "";
    for (let x = 0; x < arr.length; x++) {
        if (arr[x].length > max) {
            max = arr[x].length;
            ans = arr[x];
        }
    }

    return ans;
}

function filterLongWords(arr, i) {
    let ans = []
    for (let x = 0; x < arr.length; x++) {
        if (arr[x].length > i) ans.push(arr[x]);
    }

    return ans;
}

// test functions

function myFunctionTest(expect, result) {
    let ans = "";
    if (typeof (expect) == "object") {
        if (expect.toString() === result.toString()) ans = "TEST SUCCEEDED";
        else ans = "TEST FAILED";
    }
    else {
        if (expect === result) ans = "TEST SUCCEEDED";
        else ans = "TEST FAILED";
    }

    console.log(expect, result);
    return ans;

}

function testAll() {
    ans = this.myFunctionTest(20, max(10, 20));
    console.log("Expected output of max(20,10) is 20 " + ans);

    ans = this.myFunctionTest(30, maxofThree(20, 10, 30));
    console.log("Expected output of maxofThree(20,10, 30) is 30 " + ans);

    ans = this.myFunctionTest(true, isVowel('a'));
    console.log("Expected output of isVowel('a') is true " + ans);

    ans = this.myFunctionTest(15, sum([1, 2, 3, 4, 5]));
    console.log("Expected output of sum([1, 2, 3, 4, 5]) is 15 " + ans);

    ans = this.myFunctionTest(120, multiply([1, 2, 3, 4, 5]));
    console.log("Expected output of multiply([1, 2, 3, 4, 5]) is 120 " + ans);

    ans = this.myFunctionTest("rac", reverse("car"));
    console.log("Expected output of reverse(\"car\") is rac " + ans);

    ans = this.myFunctionTest("beautiful", findLongestWord(["beautiful", "cloud", "sun"]));
    console.log("Expected output of findLongestWord(\"beautiful\", \"cloud\", \"sun\"]) is beautiful " + ans);

    ans = this.myFunctionTest(["beautiful", "mountain"], filterLongWords(["beautiful", "sea", "mountain"], 3));
    console.log("Expected output of findLongestWord(\"beautiful\", \"sea\", \"mountain\"], 3) is [\"beautiful\", \"mountain\"], " + ans);
}

