'use strict'
/*

! ФП:
1) Декларативность
2) Чистые функции
3) Функции перного класса и функции высшего порядка
4) Иммутабельность (неизменяемость)

? Процедура vs Функция

procedure(a,b){
  число=прочитай()
  результат=квадрат(число)
  запишиВФайл(результат)
}

function(a,b):number{
  число=прочитай()
  результат=квадрат(число)
  return результат
}

Процедура = кусок кода, который что-то выполняет. Набор, каких-то заданных действий.
Функция же возвращает результат, будь-то undefind или какое-то значение

!------------------------------------

Декларативность - что хотим получить? - Описываем результат
Императивность - Как хотим получить? - Описываем действия

Декларативность - свойство любого хорошего кода

Пример на псевдокоде:
Фильтруем - сортируем - считаем средний возраст

? Императивный:
fuction calcUsersAverageAge (users, country){
  const filteredUsers = []
  for (let i = 0; i < users.length; i++){
    if (users[i].country === country){
      filteredUsers.push(users[i])
    }
  }

  for (let i = 0; i < users.length; i++){
    //сортируем
  }

  let avgAge = 0;

  for (let i = 0; i < filteredUsers.length; i++){
    avgAge += filteredUsers[i].age
  }

  avgAge /= filteredUsers.length

  return avgAge
}

? Декларативный:

fuction calcUsersAverageAge (users, country){

  const filteredUsers = filterByCountry(users, country);
  const sortedUsers = sortByAge(filtredUsers);

  return calcAverageUsersAge (sortedUsers)
}

*Либо тоже декларативный

fuction calcUsersAverageAge (users, country){

  const filteredUsers = users.filter(user => user.country === country);
  const sortedUsers = sortByAge(filtredUsers)

  return sortedUsers.reduce((avg, user) => (avg += user.age),0)
}

* В идеале получится так:
fuction calcUsersAverageAge (users, country){
  return sortByAge(users)
          .filter(filterUserByField(country))
          .reduce(calcAvgAge)
}

!------------------------------------

Чистые функции

fuction multiple (a,b){
  return a * b;
}

* Критерии чистоты
1) При одинаковых входных параметрах 
всегда возвращается один и тот же результат
Не чистая:
fuction multiple (a,b){
  return a*Math.random();
}

2) Не зависят от внешнего состояния и глобальных переменных
Не чистая:
const MODIFIER = 5;

fuction multiple (a,b){
  return a * b * MODIFIER;
}

3) Не содержит сайд эффектов
async fuction multiple (a,b){
  const modifier = awaio fetch (input: '/get/modifier')
  return a * modifier;
};

Пример чистой функции reducer

const initialState = {
  data: [],
  value: ''
}

function reducer(state = initialState, action) {
  switch (action.type){
    case 'SET_VALUE':{
      return{...state, value: action.value}
    }
    case 'SET_DATA':{
      return{...state, data: action.data}
    }
    default:
      return state;
  }
}

!-------------------------------

Иммутабельность

Данные мутировать нельзя

const users = [{name: 'c'}, {name: 'b'}];

// неправильно:
function actionWithUsers(userList){
  // что-то делаем
  userList.sort((a, b) => a.name.localeCompare(b.name));
  // что-то делаем
}

// правильно:
function actionWithUsers(userList){
  // что-то делаем
  const copyUsers = [...userList].sort((a, b) => a.name.localeCompare(b.name));
  // что-то делаем
}

actionWithUsers(users);
console.log(users);

? Почему мутирование данных плохо?
1) Несогласованность данных
2) Неявные побочные эффекты
3) Усложняется дебаг и тестирование кода


*/



//! Поменялся глобально users