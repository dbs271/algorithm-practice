// 침대 브랜드명
const bedName = {
  smostad: "스모스타드",
  svarta: "스베르타",
};
// 침대 사이즈
const bedSize = { average: "90x200cm" };
// 침대 종류
const bedType = {
  loftBed: "로프트침대",
  loftBedFrame: "로프트침대프레임",
};
// 침대 색상
const bedColors = {
  whiteGray: "화이트 그레이",
  whiteGreen: "화이트 그린",
  whiteWood: "화이트 자작나무",
  whiteBoard: "화이트 칠판표면",
  whitePaleTurquoise: "화이트 페일 터콰이즈",
  whitePalePink: "화이트 페일 핑크",
  whiteFrame: "화이트 화이트 프레임",
  white: "화이트 화이트",
  silver: "실버",
};

kidBeds = {
  // 로프트침대
  loftBed: {
    SMASTAD_1: {
      id: 1,
      name: bedName.smostad,
      classiFication: bedType.loftBed,
      color: bedColors.whitePalePink,
      composition: "책상+선반2",
      size: bedSize.average,
      price: "743,000",
      colorPick: [
        bedColors.whiteGray,
        bedColors.whiteGreen,
        bedColors.whitePaleTurquoise,
        bedColors.whitePalePink,
        bedColors.white,
      ],
    },
    SMASTAD_2: {
      id: 2,
      name: bedName.smostad,
      classiFication: bedType.loftBed,
      color: bedColors.whitePalePink,
      composition: "책상+서랍4",
      size: bedSize.average,
      price: "718,000",
      colorPick: [
        bedColors.whiteGray,
        bedColors.whiteGreen,
        bedColors.whiteWood,
        bedColors.whiteBoard,
        bedColors.whitePaleTurquoise,
        bedColors.whitePalePink,
        bedColors.whiteFrame,
        bedColors.white,
      ],
    },
    SMOSTAD_3: {
      id: 3,
      name: bedName.smostad,
      classiFication: bedType.loftBed,
      color: bedColors.white,
      composition: "책상+서랍3",
      size: bedSize.average,
      price: "696,000",
      colorPick: [
        bedColors.whiteGray,
        bedColors.whiteGreen,
        bedColors.whiteWood,
        bedColors.whiteBoard,
        bedColors.whitePaleTurquoise,
        bedColors.whitePalePink,
        bedColors.whiteFrame,
        bedColors.white,
      ],
    },
    SVARTA_1: {
      id: 4,
      name: bedName.svarta,
      classsiFication: bedType.loftBedFrame,
      color: bedColors.silver,
      size: bedSize.average,
      price: "199,000",
    },
  },
  // 싱글침대
  singleBed: {},
  // 길이조절침대
  adjustableBed: {},
  bunkerBed: {},
  bedAccessory: {},
};

console.log(kidBeds.loftBed.SMASTAD_1.name);
