const sum=(a,b) => a+b;
const mul=(a,b) => a*b;
const PI= 3.14;

/// One way to export
// let obj={
//     sum:sum,
//     mul:mul,
//     PI:PI
// }
// module.exports=obj;

// Another way to export
module.exports={sum, mul, PI};