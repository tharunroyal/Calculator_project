"use strict";

var num1=0;
var num2=null;
var isNum1=true;
var opeartor=null;
var result=0;
var numOrOperator=0;

var screen=document.getElementById("resultScreen");

function SetNumbers()
{
    if(numOrOperator==1)
    {
        screen.innerHTML="";
        numOrOperator=0;
    }
   var value=this.getAttribute('data-value');
   screen.innerHTML+=value;
   if(isNum1)
   {
    num1=screen.innerHTML;
    
   }
   else
   {
    num2=screen.innerHTML;
   }
    
}

function SetOperator()
{
    var value1=this.getAttribute('data-value');
    opeartor=value1;
    screen.innerHTML=value1;
    isNum1=false;
    numOrOperator=1;
}

function ShowResult()
{
    result=eval(num1+" "+opeartor+" "+num2);
    screen.innerHTML=result;
    num1=result;
    isNum1=true;
}

function ClearResult()
{

    screen.innerHTML="";
}

var num=document.getElementsByClassName("numbers");

for(var i=0;i<num.length;i++)
{
    num[i].addEventListener("click",SetNumbers);
}


var oper=document.getElementsByClassName("opearators");

for(var i=0;i<oper.length;i++)
{
    oper[i].addEventListener("click",SetOperator);
}


var eql=document.getElementById("equals");
eql.addEventListener("click",ShowResult);

var clr=document.getElementById("clear");
clr.addEventListener("click",ClearResult);
