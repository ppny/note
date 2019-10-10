var str = 'abc abc 123';
str.replace (/(ab)c/g, '$1g');
//console.log (str.replace (/(ab)(c)/g, '$2我'));

var str2 = 'Hello what what what is the first thing, and I am am scq000.';
console.log (str2.replace (/\b(\w+)\s\1/g, '我'));

var str3 = 'scq000';
//console.log (str3.replace (/(scq00)(?:0)/, '$1,$2'));

var str4 = '12345';
//console.log (str4.replace (/(\d{3})/g, '$1,'));
