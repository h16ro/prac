'use strict'
const birthday = {
    year: 2001,
    month: 1,
    date: 26
  };
function getAge(birthday){
    let today = new Date();
    let thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
    let age = today.getFullYear() - birthday.year;
    if(today < thisYearsBirthday){
        age--;
    }
    return age;
}

document.write(getAge(birthday)+"歳");

