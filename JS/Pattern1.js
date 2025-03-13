for(let i=1; i<4; i++){
    let star='';
    let space = '';
    for(let j=1; j<=i; j++){
       star+=' *';
    }
    for(let k=1; k<4-i; k++)
    {
        space+=' '
    }
    console.log(space + star);
}
