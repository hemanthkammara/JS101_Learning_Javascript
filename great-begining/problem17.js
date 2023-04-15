let n=1;
even_sum=0;
even_count=0;
while(n<=100){
  if(n%2==0){
    even_sum=even_sum+n;
    even_count=even_count+1;
  }n++;
}
let average=even_sum/even_count;
console.log(average);