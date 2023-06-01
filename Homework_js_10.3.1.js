anyNumber = (+prompt())
if (isNaN(anyNumber)) {
    console.log('Упс кажется вы ошиблись!')   
} else {
    if ( anyNumber) {
        res = anyNumber % 2;
        if (res) {
            console.log('Данное число нечетное')        
        } else {
            console.log('Данное число четное')        
        }
    } else {
        console.log('Упс, кажется вы ошиблись!')
    }    
}
        

