const arr = [0,1,2,'asdad',23,68,null,NaN,false,"text"]
iNumber = typeof 10 // рандомное число
let evenNumber = 0
let oddNumber = 0
for (let i = 0; i < arr.length; i++){
    switch (typeof arr[i]) {
        case iNumber:
            if (isNaN(arr[i])) {
                console.log('nan detected')  
            } else {
                switch (arr[i]){
                    case 0:
                        console.log('0')
                       break;
                       default:
                            res = arr[i] % 2;
                            if (res) {
                                oddNumber++       
                            } else {
                                evenNumber++        
                            }
                    }
                    break;
                }
                break;               
    }        
}
console.log(`Нечетных чисел ${oddNumber}`);
console.log(`Четных чисел ${evenNumber}`);
   



