// 침대 브랜드명
const bedName = {
  smostad: "스모스타드",
  svarta: "스베르타",
  kura: "쿠라",
  slakt: "슬렉트",
  busunge: "부숭에",
  sniglar: "스니글라르",
  sundvik: "순드비크",
  mydal: "뮈달",
  vitval: "비트발",
  tuffing: "투핑",
};
// 침대 사이즈
const bedSize = { average: "90x200cm", single: "70x160cm", double: "80x200cm" };
// 침대 종류
const bedType = {
  loftBed: "로프트침대",
  loftBedFrame: "로프트침대프레임",
  doubleSidedBed: "양면침대",
  bedFrame: "침대프레임",
  adjustableBed: "길이조절침대",
  bunkBedFrame: "2층침대프레임",
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
  whitePine: "화이트/소나무",
  pine: "소나무",
  beech: "너도밤나무",
  whiteLightGray: "화이트/라이트그레이",
  darkGray: "다크그레이",
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
      classiFication: bedType.loftBedFrame,
      color: bedColors.silver,
      size: bedSize.average,
      price: "199,000",
    },
  },
  // 싱글침대
  singleBed: {
    KURA_1: {
      id: 1,
      name: bedName.kura,
      classiFication: bedType.doubleSidedBed,
      color: bedColors.whitePine,
      size: bedSize.average,
      price: "269,000",
    },
    SLAKT_1: {
      id: 2,
      name: bedName.slakt,
      classiFication: bedType.bedFrame + " + 수납",
      color: bedColors.white,
      size: bedSize.average,
      price: "399,000",
    },
    SLAKT_2: {
      id: 3,
      name: bedName.slakt,
      classiFication: bedType.bedFrame + "+ 수납함 3개",
      color: bedColors.white,
      size: bedSize.average,
      price: "438,700",
    },
    SLAKT_3: {
      id: 4,
      name: bedName.slakt,
      classiFication: bedType.bedFrame + "+ 갈빗살",
      color: bedColors.white,
      size: bedSize.average,
      price: "199,000",
    },
  },
  // 길이조절침대
  adjustableBed: {
    BUSUNGE_1: {
      id: 1,
      name: bedName.busunge,
      classiFication: bedType.adjustableBed,
      color: bedColors.white,
      size: bedSize.double,
      price: "299,000",
    },
    SNIGLAR_1: {
      id: 2,
      name: bedName.sniglar,
      classiFication: bedType.bedFrame + "+ 갈빗살",
      color: bedColors.beech,
      size: bedSize.single,
      price: "120,000",
    },
    SUNDVIK_1: {
      id: 3,
      name: bedName.sundvik,
      classiFication: bedType.adjustableBed + "+ 갈빗살",
      color: bedColors.white,
      size: bedSize.double,
      price: "269,000",
    },
    SLAKT_4: {
      id: 4,
      name: bedName.slakt,
      classiFication: bedType.adjustableBed + "+ 갈빗살",
      color: bedColors.white,
      size: bedSize.double,
      price: "209,000",
    },
  },
  // 벙커침대
  bunkerBed: {
    MYDAL_1: {
      id: 1,
      name: bedName.mydal,
      classiFication: bedType.bunkBedFrame,
      color: bedColors.pine,
      size: bedSize.average,
      price: "399,000",
    },
    VITVAL_1: {
      id: 2,
      name: bedName.vitval,
      classiFication: bedType.bunkBedFrame,
      color: bedColors.whiteLightGray,
      size: bedSize.average,
      price: "299,000",
    },
    TUFFING_1: {
      id: 3,
      name: bedName.tuffing,
      classiFication: bedType.bunkBedFrame,
      color: darkGray,
      size: bedSize.average,
      price: "200,000",
    },
    VITVAL_2: {
      id: 4,
      name: bedName.vitval,
      classiFication: bedType.loftBedFrame + "+ 책상상판",
      color: bedColors.whiteLightGray,
      size: bedSize.average,
      price: "309,000",
    },
  },
  // 침대 액세서리
  bedAccessory: {},
};

console.log(kidBeds.singleBed.SLAKT_1.classiFication);
