const arr = [1,"text",20,1,null,NaN,false,'Vau',0]

for (let it = 0; it < arr.length; it++){
   for (let i = 0; i < arr.length; i++){
      switch (arr[i]) {
         case arr[it]:
            console.log(`${true} - ${i} Элемент массива arr "${arr[it]}" и элемент "${arr[i]}" Одинаковые `)        
            break;
         default:
            console.log(`${false} - ${i} Элемент массива arr "${arr[it]}" и элемент "${arr[i]}" Разные `)
            break;
      }     
   }
   console.log(`Конец ${it} цикла сравнения`)
}


/* Хотел попробовать всё что узнал, поэтому не смог ограничиться одним true или false
Спасибо за понимание ♥
*/
