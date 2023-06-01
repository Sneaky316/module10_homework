let myMap = new Map();
myMap.set('string', 'random text')
myMap.set(20, 'prop')
myMap.set(false, 222)
for (const res of myMap.keys()) {
    console.log(`Ключ - ${res}`)   
}
for (const res2 of myMap.values()) {
    console.log(`Значение - ${res2}`)   
}