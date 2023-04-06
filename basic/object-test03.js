const users = [
  {
    id: 1,
    name: "문다은",
    age: 20,
    height: 165,
  },
  {
    id: 2,
    name: "윤진섭",
    age: 24,
    height: 177,
  },
  {
    id: 3,
    name: "윤국현",
    age: 22,
    height: 175,
  },
  {
    id: 4,
    name: "배상아",
    age: 23,
    height: 168,
  },
];

// 1번 문제
// {id: 5, name: "이지형", age: 19, height: 200} 데이터를 추가하기
// users.push({ id: 5, name: "이지형", age: 19, height: 200 });
// console.log(users);
// 문제 3번에 지형님이 추가가 안됐기 때문에 원본 배열은 두고 새로운 배열을 만들어준다.
const newUsers = {
  ...users, // 전개 연산자를 사용하면 기존 배열의 모든 것을 새로운 배열에 추가할 수 있다
  4: {
    id: 5,
    name: "이지형",
    age: 19,
    height: 200,
  },
};

console.log(newUsers);

/* 
[
  { id: 1, name: '문다은', age: 20, height: 165 },
  { id: 2, name: '윤진섭', age: 24, height: 177 },
  { id: 3, name: '윤국현', age: 22, height: 175 },
  { id: 4, name: '배상아', age: 23, height: 168 },
  { id: 5, name: '이지형', age: 19, height: 200 }
]

*/

// 2번 문제
// 객체의 데이터를 통해 해당 값만 출력하기
// [ { id: 4, name: '배상아', age: 23, height: 168 } ]

const filterUser = users.filter((user) => user.name == "배상아");
console.log(filterUser);

// 3번 문제
// 객체의 해당 데이터 값만 수정하기
// 데이터중 name이 '윤진섭'에 해당하는 height만 190으로 데이터를 변경하고
// 나머지 데이터들까지 모두 출력한다.
/*
[
{ id: 1, name: '문다은', age: 20, height: 165 },
{ id: 2, name: '윤진섭', age: 24, height: 190 },
{ id: 3, name: '윤국현', age: 22, height: 175 },
{ id: 4, name: '배상아', age: 23, height: 168 }
]
*/

/* 
for(let i = 0; i < users.length; i++) {
  if(users[i].name === "윤진섭"){
    users[i].height = 190;
  }
}

console.log(users)
*/

const userM = users.map((user) => {
  if (user.name == "윤진섭") {
    user.height = 190;
  }
  return user;
});

console.log(userM);

// 4번 문제
// height가 170 이하인 user만 출력하시오

/*
[
{ id: 1, name: '문다은', age: 20, height: 165 },
{ id: 4, name: '배상아', age: 23, height: 168 }
]
*/

const userH = users.filter((user) => {
  return user.height <= 170;
});

console.log(userH);

/*

// 5번 문제 (심화)
// name의 첫 글자가 '윤'으로 시작하는 이름만 출력하시오

/
[
{ id: 2, name: '윤진섭', age: 24, height: 177 },
{ id: 3, name: '윤국현', age: 22, height: 175 }
]
*/

// const userY = users.filter((user) => {
//   return user.name.startsWith("윤");
// });
// console.log(userY);

const userY = users.filter((user) => {
  return user.name[0] === "윤";
});

console.log(userY);
