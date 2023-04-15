// Array

{
  let input_data = ["웹페", "이지", "단순", "한보", "조기"];

  let output_data = input_data.slice(0, 2).join("");

  console.log(output_data); // 웹페이지
  //   output = 웹페이지
}

{
  let input_data = ["웹페", "이지", "단순", "한보", "조기"];

  let output_data = input_data.slice(2, 4);

  console.log(output_data); // ["단순", "화보"]
}

{
  let input_data = [1, 2, 3, 4, 5];
  let output_data = input_data[4];
  console.log(output_data); // 5
}

{
  // for 사용
  let input_data = [1, 2, 3, 4, 5];
  for (let i = 0; i < input_data.length; i++) {
    input_data[i] += 10;
  }
  console.log(input_data); // [11,12,13,14,15]
}

{
  // forEach 사용
  let input_data = [10, 20, 30, 40, 50];

  input_data.forEach((item, index, arr) => {
    arr[index] = item / 2;
  });

  console.log(input_data); // [5, 10, 15, 20, 25]
}

// **
{
  // map 사용
  let input_data = [10, 20, 30, 40, 50];
  let output_data = input_data.map((input) => {
    return input / 2;
  });
  console.log(output_data); // [1, 2, 3, 20, 25]
}

{
  let input_data = [10, 20, 30, 40, 50];
  let output_data = input_data.splice(2, 2);
  console.log(output_data); // [30, 40]
}

{
  let input_data = [10, 20, 30, 40, 50];
  input_data.splice(2, 2);
  console.log(input_data); // [10, 20, 50]
}

{
  let input_data = [10, 20, 30, 40, 50];
  let output_data = input_data.indexOf(40);
  console.log(output_data); // 3 *인덱스 번호
}

{
  let input_data = "오늘 날씨는 매우 맑음";
  let output_data = input_data.replace("맑음", "흐림").split(" ");
  console.log(output_data); // ["오늘", "날씨는", "매우", "흐림"]
}

// {
//   // '=' 금지
//   let input_data = "오늘 날씨는 매우 맑음";
//   console.log(output_data); // ["내일", "날씨는", "매우", "맑음]
// }
