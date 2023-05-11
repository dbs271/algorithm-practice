/*
문제 설명
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

제한사항
numbers는 소문자로만 구성되어 있습니다.
numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
1 ≤ numbers의 길이 ≤ 50
"zero"는 numbers의 맨 앞에 올 수 없습니다.
입출력 예
numbers	result
"onetwothreefourfivesixseveneightnine"	123456789
"onefourzerosixseven"	14067
입출력 예 설명
입출력 예 #1

"onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
입출력 예 #1

"onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.
*/

function solution(numbers) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  //변수명을 헷갈리게 지어서 numbers.length까지 했었다.. 변수명도 잘 지어야겠다.. 😂
  for (let i = 0; i < num.length; i++) {
    //split을 num[i] 기준으로 자르고 잘린곳을 i로 메꿔주는 방식(?)이다.
    numbers = numbers.split(num[i]).join(i);
  }

  //split은 string이라 마지막에 number로 형 변환을 해줬다.
  return Number(numbers);
}
