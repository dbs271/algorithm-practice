// {
// 객체 선언
// 나머지 문제들 전부 해당 객체를 복사 붙여넣기해서 사용합니다
// 각각의 id와 name의 값으로 '웹페', '이지' ,'단순' 을 가지고 있는 객체를 만드시오
// }

let obj = [
  {
    id: 1,
    name: "웹페",
  },
  {
    id: 2,
    name: "이지",
  },
  {
    id: 3,
    name: "단순",
  },
];

{
  // 객체 접근
  let output_data = obj[1].name;
  console.log(output_data); // 이지
}

{
  // 객체 값 변경
  // 2번째 id의 값을 '이퍼'로 변경하시오
  obj[1].id = "이퍼";
  console.log(obj[1]);
}

{
  // 객체 찾기
  // 3번째 단순만 Key, value를 둘 다 출력하시오
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].name === "단순") {
      for (let key in obj[i]) {
        console.log(key, obj[i][key]);
      }
    }
  }
}

{
  const array = [1, 2, 3, 4, 5];
  // 위의 배열의 값을 가지고 객체의 '단순'을 출력하시오
  const index = array.indexOf(3); // index는 2가 된다.
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id === index + 1 && obj[i].name === "단순") {
      console.log(obj[i].name);
      break;
    }
  }
}
