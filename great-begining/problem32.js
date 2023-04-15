let small_letters=["p","q","r","s"];
let upper_letters=["P","Q","R","S"];
character="q";
for(i=0;i<small_letters.length;i++){
  if(small_letters[i]==character){
    character=upper_letters[i];
  }
}
  console.log(character)
