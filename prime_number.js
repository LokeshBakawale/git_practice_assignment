let num = 11;
let count = 0;
let bag = 0;
for (let i = 1; i <= num; i++){
  if(num % i == 0){
    count++;
  }
  else{
    bag++;
  }
}
if (count == 2){
  console.log(num + ' ' +'is Prime');
}
else{
  console.log(num + ' ' +'is not Prime');
}