for(k=1;k<=10;k++){
let num=k;
count=0;
for(i=1;i<=num;i++){
  if(num%i==0){
    count++;
  }
}if (count==2){console.log(num,"is a prime number")}
 else {console.log(num,"is not a prime number");}}