function sortMaker(arr) {
    if(arr[0]<0 || arr[1]<0){
        return "Invalid Input"
    }
    else{

        if(arr[0] == arr[1]){
            return "equal"
        }
        else if(arr[0] < arr[1]){

           [arr[0], arr[1]] =   [arr[1], arr[0]];
           return arr;

        }

        else{
            return arr;
        }
    }

 

}
const ar=[4,-2]

const output= sortMaker(ar);
console.log(output);