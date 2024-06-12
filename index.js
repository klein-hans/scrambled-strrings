function scrambledStrings(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const str1Arr = str1.split('').sort().join('');
    const str2Arr = str2.split('').sort().join('');

    return str1Arr === str2Arr;
}

// test
console.log(scrambledStrings("test", "stte"));