const { cpSync } = require("fs");

const students = [
  {
    id: 1,
    name: "김철수",
    age: 18,
    gender: "male",
    grade: 3,
    class: 1,
    scores: {
      math: 85,
      english: 92,
      science: 78,
    },
  },
  {
    id: 2,
    name: "이영희",
    age: 17,
    gender: "female",
    grade: 3,
    class: 2,
    scores: {
      math: 78,
      english: 95,
      science: 87,
    },
  },
  {
    id: 3,
    name: "박민수",
    age: 16,
    gender: "male",
    grade: 2,
    class: 1,
    scores: {
      math: 92,
      english: 88,
      science: 90,
    },
  },
  {
    id: 4,
    name: "정미영",
    age: 18,
    gender: "female",
    grade: 3,
    class: 3,
    scores: {
      math: 90,
      english: 82,
      science: 93,
    },
  },
  {
    id: 5,
    name: "이영수",
    age: 17,
    gender: "male",
    grade: 2,
    class: 2,
    scores: {
      math: 80,
      english: 85,
      science: 88,
    },
  },
  {
    id: 6,
    name: "한지민",
    age: 18,
    gender: "female",
    grade: 3,
    class: 1,
    scores: {
      math: 95,
      english: 92,
      science: 96,
    },
  },
  {
    id: 7,
    name: "신동엽",
    age: 16,
    gender: "male",
    grade: 2,
    class: 3,
    scores: {
      math: 87,
      english: 89,
      science: 91,
    },
  },
  {
    id: 8,
    name: "최지우",
    age: 17,
    gender: "female",
    grade: 2,
    class: 2,
    scores: {
      math: 92,
      english: 87,
      science: 85,
    },
  },
  {
    id: 9,
    name: "장우혁",
    age: 16,
    gender: "male",
    grade: 3,
    class: 3,
    scores: {
      math: 88,
      english: 84,
      science: 90,
    },
  },
  {
    id: 10,
    name: "홍길동",
    age: 18,
    gender: "male",
    grade: 3,
    class: 2,
    scores: {
      math: 85,
      english: 90,
      science: 92,
    },
  },
];

// 모든 문제들은 배열 혹은 변수에 담아서 출력해주세요.
// 배열 없이 console.log()를 사용 할 경우 재사용을 할 수가 없습니다.

// 0. 학생들이 총 몇명이 있는지 출력해주세요.
const people = students.length;
console.log(people);

// 1. 나이가 16살 미만인 학생만 출력해주세요.
const under16 = students.filter((student) => student.age < 17);
console.log("1: ", under16);

// 2. 2반인 학생들만 출력해주세요
const two = students.filter((student) => student.class === 2);
console.log("2: ", two);

// 3. 성별이 "male"인 학생들만 출력해주세요
const mans = students.filter((student) => student.gender == "male");
console.log("3: ", mans);

// 4. 각 학생들을 "제 이름은 @@@ 이고 나이는 @@ 입니다." 형식에 맞게 출력해주세요

const namesAndAges = students.map(
  (student) => `제 이름은 ${student.name}이고 나이는 ${student.age} 입니다.`
);

// const names = students.map((student) => student.name);
// const ages = students.map((student) => student.age);

// const namesAndAges = names.map((name, index) => {
//   return `제 이름은 ${name}이고 나이는 ${ages[index]} 입니다.`;
// });
console.log("4: ", namesAndAges);
// 5. 각 학생들의 수학, 영어의 점수를 모두 더해주고 평균을 구해주세요 (수학 + 영어) / 학생 수

const mathAndEn = students.map(
  (student) => student.scores.math + student.scores.english / students.length
);

// const math = students.map((student) => student.scores.math);
// const english = students.map((student) => student.scores.english);
// const mathAndEn = math.map(
//   (mat, index) => mat + english[index] / students.length
// );

console.log("5: ", mathAndEn);

// 6. 2반 학생들의 수학 점수의 평균을 구해주세요

// const twoClassMathAvg = students
//   .filter((student) => student.class === 2)
//   .map((student) => student.scores.math)
//   .reduce((acc, cur, arr) => acc + cur / arr.length);

const twoClass = students.filter((student) => student.class === 2);
const twoClassMath = twoClass.map((student) => student.scores.math);
const twoClassMathSum = twoClassMath.reduce((acc, cur) => acc + cur);
const twoClassMathAvg = twoClassMathSum / twoClassMath.length;
console.log("6: ", twoClassMathAvg);
