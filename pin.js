function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+"";
    if (pinString.length==4){
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin(){
    
    const pin=getPin();
    document.getElementById("display-pin").value=pin;
}
document.getElementById("key-pad").addEventListener('click',function(event) {
    const number=event.target.innerText;
    let inputNumber=document.getElementById("typed-number");
    const newNumber=inputNumber.value+number
    if (isNaN(number)){
       if (number=="C"){
           inputNumber.value="";
       } 
    }
    else{
        inputNumber.value=newNumber;
    }
    
});
function verifyPin() {
    const pin=document.getElementById("display-pin").value;
    const inputPin=document.getElementById("typed-number").value;
    if (pin==inputPin){
        document.getElementById("match").style.display="block";
        document.getElementById("notMatch").style.display="none";
        document.getElementById("display-pin").value="";
        document.getElementById("typed-number").value="";
    }
    else{
        document.getElementById("notMatch").style.display="block";
        document.getElementById("match").style.display="none";
        document.getElementById("display-pin").value="";
        document.getElementById("typed-number").value="";
        const initialTry=document.getElementById("try-num")
        const remainTry=parseInt(initialTry.innerText)-1;
        initialTry.innerText=remainTry;  
        }
};