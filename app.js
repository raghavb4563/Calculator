/*one=document.querySelector(".equals");
two=document.querySelector(".equals");
three=document.querySelector(".equals");
four=document.querySelector(".equals");
five=document.querySelector(".equals");
six=document.querySelector(".equals");
seven=document.querySelector(".equals");
eight=document.querySelector(".equals");
nine=document.querySelector(".equals");
zero=document.querySelector(".equals");
decimal=document.querySelector(".equals");
remainder=document.querySelector(".equals");
mult=document.querySelector(".equals");
divide=document.querySelector(".equals");
add=document.querySelector(".equals");
subt=document.querySelector(".equals");
*/
const screen = document.querySelector(".screen");
buttons=document.querySelectorAll("button");

let inp="";

let operator=0;

screen.textContent="Hello";

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {

        
        if(button.id=="ac"){
            inp="";
            screen.textContent="";
        }
        else if(button.id=="equals"){
            operate(inp);
            inp="";
        }
        else if(button.id=="+" || button.id=="-" || button.id=="*" || button.id=="/" || button.id=="%"){
            console.log(button.id);
            if(operator==1){
                alert("please enter again")
                inp="";
                screen.textContent="";
                operator=0;
            }
            else{
                operator=1;
                id=button.id;
                inp=inp+id;
                screen.textContent=`${inp}`;
            }
        }
        else{
            id=button.id;
            inp=inp+id;
            screen.textContent=`${inp}`;
        }
    });
  });

function operate(inp){
    operator=0;
    let operand1=0;
    let operand2=0;
    let operand="";
    let flag=1;
    let result=0;
    
    let i=0;
    while(i<inp.length){
        
        if(inp[i]=='+' || inp[i]=='-' || inp[i]=='/' || inp[i]=='*' || inp[i]=='%'){
            operand=inp[i];
            flag=0;
            i++;
        }

        if(flag==1){
            operand1=operand1*10+Number(inp[i]);
            i++;
        }
        else{
            operand2=operand2*10+Number(inp[i]);
            i++;
        }
        
    }
    if(operand=='+'){
          result=operand1+operand2;
    }
    else if(operand=='-'){
        result=operand1-operand2;
    }
    else if(operand=='*'){
        result=operand1*operand2;
    }
    else if(operand=='/'){
        result=operand1/operand2;
    }
    else{
        result=operand1%operand2;
    }
    screen.textContent=`${result}`;
}