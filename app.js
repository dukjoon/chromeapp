const daysOfWeek = ["mon", "tue", "wed"]; //array 기호: [ ]


//Get Item from Array

console.log(daysOfWeek); //각각의 원소를 따로 볼 수 있다.
console.log(daysOfWeek[2]); //array[원소순서], 컴퓨터는 숫자를 0부터 센다.

//Add one more day to the array
daysOfWeek.push("thur");

console.log(daysOfWeek);


daysOfWeek.pop("thur");
console.log(daysOfWeek);