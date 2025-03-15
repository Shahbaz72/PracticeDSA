// Complete the code
/*
  For encoding an even-length binary string into a sequence of A, T, C, and G, we iterate from left to right and replace the characters as follows:

00 is replaced with A
01 is replaced with T
10 is replaced with C
11 is replaced with G
Given a binary string 
S
S of length 
N
N (
N
N is even), find the encoded sequence.

Input Format
First line will contain 
T
T, number of test cases. Then the test cases follow.
Each test case contains two lines of input.
First line contains a single integer 
N
N, the length of the sequence.
Second line contains binary string 
S
S of length 
N
N. 
 */
function dnaStorage(tests) {
    for (let i = 1; i < tests.length; i += 2) {
        // length of the binary string
        const n = parseInt(tests[i]);
        
        // binay string
        const s = tests[i + 1];
         
        let result =''
        for (let i=0; i<s.length; i+=2){
            let parir = s[i]+s[i+1]
            if(parir=='00') result+='A'
            if(parir=='01') result+='T'
            if(parir=='10') result+='C'
            if(parir=='11') result+='G'
        }
        console.log(result)
    }
}

// Input related code. Please do not change. 
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const tests = input.trim().split('\n');
    dnaStorage(tests);
});