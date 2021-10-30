
var obj = {
  table: []
};

var i=0
function newbook(tname,taut)
{
  obj.table.push({ id:i,author:taut,tauth:tname});
  i++
  console.log("book added");
  
}
function display(){
  
  for(let k=0;k<i;k++){
    console.log(k+"."+obj.table[k].tauth+"-"+obj.table[k].author)
  }

}
function givebook(){
  
  for(let k=0;k<i;k++){
    console.log(k+"."+obj.table[k].tauth+"-"+obj.table[k].author)
  }
  

  var rem=readlineSync.question("enter the num corresponding book to you want")
  delete obj.table[rem]
  i--
  console.log("your book has been issued");
}

while(true){
  
console.log("1.new book\n2.give book\n3.balance\n4.exit");


var readlineSync = require('readline-sync');
var choice=readlineSync.question("enter your choice");
switch(choice){
  case '1':
    let tname=readlineSync.question('enter the textbook name');
    
    let taut=readlineSync.question('enter the textbook author');
    newbook(tname,taut);
    break;

    case '2':
      display();
      break;
    case '3':
      givebook();
      break;
}
if(choice==4){
  break;
}}

