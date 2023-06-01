let x = 10;
let xType = typeof x;
xNumber = typeof 10
xString = typeof '10'
xBoolean = typeof true
switch (xType) {
    case xNumber:
        console.log('X - число');
        break;
    case xString:
        console.log('X - строка');
        break;
    case xBoolean:
        console.log('X - логический тип');
        break;                            
    default:
        console.log('Тип x не определен');
        break;
}

