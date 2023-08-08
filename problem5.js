function canPay(changeArray, totalDue) {

    

    let totalChange=0;
    for(var i=0; i<changeArray.length; i++){
        totalChange += changeArray[i];
     
    }

    if(changeArray.length == 0){
        return "Nothing in your array"
    }
    else{

        if(totalChange>=totalDue){
            return true;
        }

        else{
            return false;
        }


    }


}



taka=[1,4,5];
price=10;

const output=canPay(taka, price);
console.log(output);