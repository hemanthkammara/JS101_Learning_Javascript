for(horz=1;horz<=10;horz++){let b="";
  for(vert=1;vert<=10;vert++){
    
    if(horz==1 || horz==10){
      b=b+"*";
    }else if(vert==1||vert==10){ b=b+"*";
    }else {b=b+" "}
  }console.log(b);
}