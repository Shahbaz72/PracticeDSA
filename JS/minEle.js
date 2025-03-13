let array1=[3,5,1,6];
let min=array1[0];
array1.forEach((ele)=>{
    
    if(ele<=min)
    {
        min=ele;
        
    }
})
console.log(min)