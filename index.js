// Функции по умолчанию

const newPost = (post, addedAt = Date()) => ({   
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Davron',
}

console.log(newPost(firstPost))
/*{
    id: 1,
    author: 'Davron',
    addedAt: 'Mon Nov 07 2022 19:54:58 GMT+0300 (Москва, стандартное время)'
  } */

// Array vs Object

const  myArray = [1, 3, 77, 50]

const myObject = {
    0: 1,
    1: 2,
    2: 3,
}

console.log(myObject)    //{ '0': 1, '1': 2, '2': 3 }

//Array
// Чтения значения массива

const mArray = [20, 56, 90]

console.log(mArray[2])              //Индекс массива

console.log(mArray.length)          // Длина массива

mArray[1] = true                    //Изменить значения массива

// Метод PUSH добавляеть значения конец массива

mArray.push(false)

//Метод POP удаления последная значения 

mArray.pop()

const reElement = mArray.pop()

console.log(reElement)

//Метод  UNSHIFT добавляеть значения начало массива

 mArray.unshift(22)
 mArray.unshift(1)

 //Метод  SHIFT удаляеть первая  значения  массива

 mArray.shift()
 console.log(mArray)

 //Метод FOREACH

 mArray.forEach(el => console.log(el * 3))

//Метод MAP

let newArray = mArray.map(el => el * 2)

newArray = mArray.map((el) =>{
    return el * 4
})


console.log(newArray)

// Деструктуризация обьектов

const userProfile = {
    name: 'Davron',
    age: 27,
}

const {name, age} = userProfile // New variable 'name' 
console.log(name)

// Деструктуризация массивов

const fruits = ['apple', 'kiwi', 'banana']

const [apple] = fruits
console.log(apple)
// Деструктуризация функции

const profileAddres = {
    name: 'Eduard',
    continent: 'Europe',
    country: 'Italy',
    city: 'Rome',
}

const regs = ({name, continent, country, city}) => {
    if (!continent) {
       return `${name} You not European` 
    }
    return `${name} You live in Europe`
}

console.log(regs(profileAddres))

// Условные конструкции   IF  ELSE IF ELSE

// Вариант 1 

const age1 = 6

if (age1 < 18) {
    console.log("You can't enter")
} else if (age1 >= 18 ) {
    console.log('The ticket cost 5 euro')
} else {

}

//Вариант 2

if (age1 >= 18) {
    console.log('The ticket cost 5 euro') 
}

if (age1 < 18 && age1 > 7) {
    console.log("You can't enter") 
}

if (age1 < 7) {
    console.log('Where is your mother')
}

//Исползования IF функциях

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not number'
    }

    if (a <= 0 || b <= 0){
        return 'Number are not positive'
    }

    return a + b
}

console.log(sumPositiveNumbers(11, 33))

//Инструкция SWICH

const month = 2

switch (month){
    case 6:
      console.log('June')
      break
    case 7:
      console.log('July')
      break
    case 8:
      console.log('August')
      break
    default:
        console.log('It is not summer month')
}

//Тернарный оператор >>> Условыя ? выражения 1 : выражения 2

let value = 80

console.log(value > 0 ? value : -value)

value = -3
const res = (value > 0 ? value : -value)

console.log(res)

// Циклы FOR    WHILE     DO WHILE    FOR...IN...  FOR...OF...
//FOR

for (let i = 0; i < 6; i++){
    console.log(i)
}

//WHILE бесконечно повторяеться если условия правдива

let a = 11

while(a < 3){
    console.log(a)
    a++
}

// DO WHILE если условия не верна выполняеться один раз
do {
    console.log(a)
    a++
} while (a < 5)

// FOR IN 

const myObject1 = {
    x: 10,
    y: 23,
    z: 7,
}

for (const key in myObject1) {
    console.log(key, myObject1[key])
}

Object.keys(myObject1).forEach(key => {  // FOREACH ДЛЯ МАССИВОВ, можно исползовать VALUE для зачения вместо KEYS
    console.log(key, myObject[key])
})
//FOR OF 

const myString = 'California'

for (const el of myString) {
    console.log(el)
}

// МОДУЛЫ  ЭКСПОРТИРУЕТЬСЯ export default  import


