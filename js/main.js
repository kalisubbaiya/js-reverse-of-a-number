let a=parseInt(prompt("Enter a number"));
let b,c=0;
for(i=1;a!=0;i++){
    b=a%10;
    a=(a-b)/10;
    c=(c*10)+b;
}
console.log(c);