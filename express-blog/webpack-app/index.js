require('./sass/index.scss');
console.log('[webpack-app] loaded');

var string = 'sales/100/5+ ';

// input: 'sales/100/5+ '
// output: 'sales/100'

// ^ -> match beginning of input /^A/
// $ -> match end of input /t$/
// * -> match preceding exrpression 0 or more /bo*/
// + -> match preceding expression 1 or more

// i -> case-sensitive
// g -> find all matches rather than stopping after first
// m -> multiline matching

// [abc]    -> find any character between the brackets
// [^abc]   -> find any character NOT between the brackets
// [0-9], [^0-9]
// (x|y)

// \s -> match single white space character (space, tab, form feed, line feed)

var search = /w3schools/i;

var array = search.exec('example');

var re = /ab+c/;
var re = new RegExp('ab+c');

console.log(`'${string}'`);
console.log(`'${string}'`);

var re = /(\w+)\s(\w+)/;
var string = 'Thomas William';
var newString = string.replace(re, '$2, $1');
console.log(newString);

// \w -> match any char [A-Za-z0-9_]
// + -> match preceding expression 1 or more {1,}
// \s -> match single white space character
var re = /\w+\s/g;
var string = 'one two three four ';
var array = string.match(re);
console.log(array);

var string = 'sales/100/5+';
var split = '5+';
var array = string.replace(/\/split/g, '');
console.log(string, array);
