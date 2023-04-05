const bedName = ["스모스타드", "스베르타"];
const bedSize = "90x200cm";
const loftBed = "로프트 침대";
const loftBedFrame = "로프트 침대 프레임";
const bedColors = [
  "화이트 그레이",
  "화이트 그린",
  "화이트 자작나무",
  "화이트 칠판표면",
  "화이트 페일 터콰이즈",
  "화이트 페일 핑크",
  "화이트 화이틑 프레임",
  "화이트 화이트",
];
const bed5Colors = [
  "화이트 그레이",
  "화이트 그린",
  "화이트 페일 터콰이즈",
  "화이트 페일 핑크",
  "화이트 화이트",
];

kidBeds = {
  loftBed: {
    SMASTAD_1: {
      id: 1,
      name: bedName[0],
      color: bedColors[5],
      composition: "책상+선반2",
      size: bedSize,
      price: "743,000",
      colorPick: bed5Colors,
    },
    SMASTAD_2: {
      id: 2,
      name: bedName[0],
      color: bedColors[5],
      classiFication: loftBed,
      composition: "책상+서랍4",
      size: bedSize,
      price: "718,000",
      colorPick: bedColors,
    },
    SMOSTAD_3: {
      id: 3,
      name: bedName[0],
      color: bedColors[7],
      classiFication: loftBed,
      composition: "책상+서랍3",
      size: bedSize,
      price: "696,000",
      colorPick: bedColors,
    },
    SVARTA_1: {
      id: 4,
      name: bedName[1],
      color: "실버",
    },
  },
  singleBed: {},
  // 길이조절침대
  adjustableBed: {},
  bunkerBed: {},
  bedAccessory: {},
};
