// consol - Objekt .log - method 
//consol.dir() Отображаеть все свойства обектьа
//consol.table() Отображаеть все свойства обектьа ТАБЛИЧНОМ ВИДЕ

// Переменные дают возможност повторного доступа к значениям

// Имена переменных

/* PascalCase     ТИПЫ И КЛАССЫ

  DB_PASSWORD     ИЗВЕСТЬНО ДО ЗАПУСКА ПРИЛОЖЕНИЯ И НЕ МЕНЯЕТЬСЯ 

  camelCase       остальных случаях

  Обявления переменных        LET    CONST   VAR


     ТИПЫ ПЕРЕМЕННЫХ  ПРИМИТИВНИЕ                                 ССИЛОЧНЫЙ ТИП   
    
     STRING    NUMBER      BOOLEAN    UNDEFINED  NULL  SYMBOL                 OBJECT


*/

//   Методы - это свойства обьекта который содержить функция

const myCity = {
    city: 'New York',
    cityGreeting: function() {
        console.log('Greetings')
    }
}      // myCity.cityGreeting()

// JSON JavaScrip Object Notation        ФОРМАТЬ ОБМЕНЬ ДАННИМЫ

// Конвертатсия JSON В обекть       JSON.parse()  КОНВЕРТАТЬСИЯ обекть в  JSON.stringify()  


// ОБЕКТЬЫ  ссилочный типь 

// Мутирования копии обьекта 

const  person = {
    ism: 'Rob',
    yosh: 21
}
const person2 = person

person2.yosh = 30 
console.log(person.yosh)  //Здесь измениться person

// Избежать мутатсия обьекта



const person3 = Object.assign({}, person)  //Варианть 1

person3.yosh = 23 //Здес не измениться person 




const person4 = {...person} //Вариант 2

person4.yosh = 45




const objectA = {
    a: 10,
    b: 65
}

const copyOfA = objectA   // копирования обектьа

copyOfA.c = 70          //добавить значения для обектьа
console.log(objectA)

const myCar = {
    model: 'BMW',
    year: 2015
}

myCar.color = 'black' //добавить значения для обектьа

delete myCar.year   //удалить значения для обектьа DELETE

const name1 = 'Davron'
const age2 =  27

const prof = {      //Исползования переменных в обектье 
    name: name1,
    age: age2
}

//Функции --   это блок кода который можно использовать много раз 

/* типы функции  Именованной     Присвоена переменной   Анонимный 

Аргументом при вызове другой функции      Значения свойства обьекта  */

const func = function fun(a, b) {
    let c
    a = a + 1
    c = a + b
         return c
}

console.log(func(11, 3))

//Передача значения по ссильке

const pers = {
    n: 'Bob',
    a: 21
}

function p(per) {
    per.a += 1
     return per
}

p(pers)
console.log(pers.a)

//Callback function

function myName() {
    console.log('Davron')
}

setTimeout(myName, 10000)  //функция внутри функции

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

//Классы 

class Comment {
    constructor(text){
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')

//Промисы

const myPromise = new Promise((resolve, reject) => {
    /* 
    *выполнения асинхронных действый
    *
    * Внутры этой функции нужно в резултате вызвать одну изфункций resolve или reject
    */
})

myPromise
    .then(value => {
        /*
        *Действия в случе успешного выполнения Промиса
        * Значения value - это значения б переданное 
        в вызове функции resolve внутри Промиса
        */
    })
    .catch(error => {
        /*
        *Действия в случае отклонения Промиса
         * Значения error - это значения б переданное 
        в вызове функции reject внутри Промиса
        */
    })

    /*fetch('https://jsonplaceholder.typicode.com/todos//11')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => console.log(json))
      .catch(error => console.log(error))   */

      /* fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response)
        return response.json()
      })
Promise {<pending>}
[[Prototype]]
: 
Promise
catch
: 
ƒ catch()
constructor
: 
ƒ Promise()
finally
: 
ƒ finally()
then
: 
ƒ then()
Symbol(Symbol.toStringTag)
: 
"Promise"
[[Prototype]]
: 
Object
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
Array(200)
VM72:3 
Response {type: 'basic', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
body
: 
ReadableStream
bodyUsed
: 
true
headers
: 
Headers {}
ok
: 
true
redirected
: 
false
status
: 
200
statusText
: 
""
type
: 
"basic"
url
: 
"https://jsonplaceholder.typicode.com/todos"
[[Prototype]]
: 
Response */

const getData = (url) => 
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error=> reject(error))
  )

  getData('https://jsonplaceholder.typicode.com/todos/3')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

    // Асинхронная функция ASYNC AWAIT

    /*const asyncFn = async () => {
        return 'The End'
    }

    asyncFn()
      .then(value => console.log(value))
      .then(error => console.log(error)) */

    // Ожидания резултата AWAIT

    const timerPromise = () => 
        new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))
        
        const asyncFn = async () => {
            console.log('Timer starts')
            const startTime = performance.now()
            await timerPromise()
            const endTime = performance.now()
            console.log('Timer ended', endTime - startTime)
        }

        /*  Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
VM96:10 Timer ended 2851.7999999998137  */