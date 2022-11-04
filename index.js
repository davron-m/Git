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

// Array vs Object

const  myArray = [1, 3, 77, 50]

const myObject = {
    0: 1,
    1: 2,
    2: 3,
}

console.log(myObject)

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






