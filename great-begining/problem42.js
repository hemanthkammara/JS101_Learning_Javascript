day=0;
for(mon=1;mon<=12;mon++){
  
    if(mon==1||mon==3||mon==5||mon==7||mon==10||mon==12){
      day=31;
    }else if(mon==4||mon==6||mon==9||mon==11){ day=30
    }else {day=28}
  for(i=1;i<=day;i++){
  console.log(i,"-",mon);
  }
}