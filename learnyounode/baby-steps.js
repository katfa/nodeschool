var arr = process.argv.splice(2, process.argv.length);

console.log(arr.reduce(function (p,c,i,a) {
	return Number(p) + Number(c);
}, 0));


// Official Solution

/*
var result = 0;
for(var i = 2; i < process.argv.length; i++) {
	result += Number(process.argv[i]);
}
console.log(result);
*/