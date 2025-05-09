import { colors } from "./constant";

export function liveRateItemCalculationTerminal(
  curentItem,
  PrevItem,
  GroupDetail,
  ObjGroup
) {
  try {
    let InTotal = 0;
    let OneClick = 0;
    let Step = 0;
    var dropGrame = [];

    let lv = curentItem;

    if (lv == "") {
      return;
    }
    let IDSymbol = lv.SymbolId;
    let Sname = lv.Symbol;
    let Bid = lv.Bid;
    let Ask = lv.Ask;
    let High = lv.High;
    let Low = lv.Low;
    let Source = lv.Source.toLocaleLowerCase();
    let Time = lv.Time;
    let Stock = lv.Stock;
    let IsDisplayTerminal = lv.IsDisplayTerminal.toLocaleLowerCase();
    let Diff = lv.Diff;

    if (IsDisplayTerminal == "false") {
      return;
    }

    let lvlocal = PrevItem;

    // if (Source == isSource || Source == isSourceNext) {

    var BGColorBid;
    var textColorBid = colors.WHITE;
    var BGColorAsk;
    var textColorAsk = colors.WHITE;

    if (lvlocal != undefined) {
      let lvs = lvlocal;
      let Bidlocal = lvs.Bid;
      let Asklocal = lvs.Ask;

      let BidStatus = StatusUpDownColor(Bidlocal, Bid);
      BGColorBid = BidStatus.BGColor;
      textColorBid = BidStatus.textColor;

      let AskStatus = StatusUpDownColor(Asklocal, Ask);
      BGColorAsk = AskStatus.BGColor;
      textColorAsk = AskStatus.textColor;
    }
    if (GroupDetail.length > 0 && GroupDetail[0].Status == true) {
      if (
        Source.toLocaleLowerCase() == "gold" ||
        Source.toLocaleLowerCase() == "goldnext"
      ) {
        Bid = parseFloat(Bid) + GroupDetail[0].GoldBuyPremium;
        Ask = parseFloat(Ask) + GroupDetail[0].GoldSellPremium;

        Low = parseFloat(Low) + GroupDetail[0].GoldSellPremium;
        High = parseFloat(High) + GroupDetail[0].GoldSellPremium;
      } else {
        Bid = parseFloat(Bid) + GroupDetail[0].SilverBuyPremium;
        Ask = parseFloat(Ask) + GroupDetail[0].SilverSellPremium;

        Low = parseFloat(Low) + GroupDetail[0].SilverSellPremium;
        High = parseFloat(High) + GroupDetail[0].SilverSellPremium;
      }

      var ObjSymbole;
      if (ObjGroup.length > 0) {
        ObjGroupSymbol = (id) => {
          return ObjGroup.find((data) => data.SymbolID == id);
        };
        ObjSymbole = ObjGroupSymbol(parseInt(IDSymbol));
        if (ObjSymbole != undefined) {
          Bid = parseFloat(Bid) + parseFloat(ObjSymbole.BuyPremium);
          Ask = parseFloat(Ask) + parseFloat(ObjSymbole.SellPremium);

          Low = parseFloat(Low) + parseFloat(ObjSymbole.SellPremium);
          High = parseFloat(High) + parseFloat(ObjSymbole.SellPremium);

          if (
            InTotal != ObjSymbole.InTotal ||
            OneClick != ObjSymbole.OneClick
          ) {
            InTotal = ObjSymbole.InTotal;
            OneClick = ObjSymbole.OneClick;
            Step = ObjSymbole.Step;
            dropGrame = [];

            if (Step <= 0) {
              Step = OneClick;
            }
            if (
              InTotal != undefined &&
              OneClick != undefined &&
              InTotal != 0 &&
              OneClick != 0 &&
              Step != 0 && Step != undefined
            ) {
              let grameKg = "";
              if (
                Source.toLocaleLowerCase() == "gold" ||
                Source.toLocaleLowerCase() == "goldnext"
              ) {
                grameKg = "gm";
              } else {
                grameKg = "kg";
              }

              for (let index = OneClick; index <= InTotal; index) {
                var objGram = index.toFixed(1) + " " + grameKg;
                dropGrame.push(objGram);
                index = index + Step;
              }
            }
          }
        } else {
          return;
        }
      }

      if (Number.isNaN(Bid)) {
        Bid = "--";
      }
      if (Number.isNaN(Ask)) {
        Ask = "--";
      }

      if (Number.isNaN(Low)) {
        Low = "--";
      }
      if (Number.isNaN(High)) {
        High = "--";
      }

      const strItem = JSON.stringify({
        IDSymbol: IDSymbol,
        Sname: Sname,
        Bid: Bid,
        Ask: Ask,
        High: High,
        Low: Low,
        Source: Source,
        Time: Time,
        Stock: Stock,
        IsDisplayTerminal: IsDisplayTerminal,
        GramAndKG: dropGrame,
        BGColorBid: BGColorBid,
        textColorBid: textColorBid,
        BGColorAsk: BGColorAsk,
        textColorAsk: textColorAsk,
        Diff: Diff
      });
      return JSON.parse(strItem);
    } else {
      return;
    }
    // } else {
    //   return;
    // }
  } catch (error) {
    console.log(error);
  }
}

export function liveRateItemCalculationBullion(curentItem, PrevItem) {
  try {
    let lv = curentItem;
    if (lv == "") {
      return;
    }
   
    let IDSymbol = lv.SymbolId;
    let Sname = lv.Symbol;
    let Bid = lv.Bid;
    let Ask = lv.Ask;
    let High = lv.High;
    let Low = lv.Low;
    let Source = lv.Source;
    let Time = lv.Time;
    
    let Stock = lv.Stock;
    let IsDisplayBullion = lv.IsDisplay;
    let Premium = lv.Premium;

    
     
    let lvlocal = PrevItem;

    var BGColorBid;
    var textColorBid;
    var BGColorAsk;
    var textColorAsk;

    if (lvlocal != undefined) {
      let lvs = lvlocal;
      let Bidlocal = lvs.Bid;
      let Asklocal = lvs.Ask;

      let BidStatus = StatusUpDownColor(Bidlocal, Bid);
      BGColorBid = BidStatus.BGColor;
      textColorBid = BidStatus.textColor;

      let AskStatus = StatusUpDownColor(Asklocal, Ask);
      BGColorAsk = AskStatus.BGColor;
      textColorAsk = AskStatus.textColor;
    }
    if (Number.isNaN(Bid)) {
      Bid = "--";
    }
    if (Number.isNaN(Ask)) {
      Ask = "--";
    }
    const strItem = {
      IDSymbol: IDSymbol,
      Sname: Sname,
      Bid: Bid,
      Ask: Ask,
      High: High,
      Low: Low,
      Source: Source,
      Time: Time,
      Stock: Stock,
      IsDisplayFront: IsDisplayBullion,
      BGColorBid: BGColorBid,
      textColorBid: textColorBid,
      BGColorAsk: BGColorAsk,
      textColorAsk: textColorAsk,
      Premium: Premium,
      cityName:lv.cityName,
      cityId:lv.cityId
    };
    return strItem;
  
  } catch (error) {
    console.log("error ", error);
  }
}

///Status UpDowun ---->
function StatusUpDownColor(strPre, strCur) {
  var BGColor;
  var textColor;
  var PreValue = parseFloat(strPre);
  var CurValue = parseFloat(strCur);

  try {
    if (PreValue < CurValue) {
      BGColor = colors.RATE_UP;
      textColor = colors.WHITE;
    } else if (PreValue > CurValue) {
      BGColor = colors.RATE_DOWN;
      textColor = colors.WHITE;
    } else {
      BGColor = colors.TRANSPARENT_COLOR;
      textColor = colors.textColor;
    }
  } catch (e) {
    BGColor = colors.TRANSPARENT_COLOR;
    textColor = colors.textColor;
  }
  const strColor = JSON.stringify({ BGColor: BGColor, textColor: textColor });

  return JSON.parse(strColor);
}
export function StatusUpDownColorSpot(strPre, strCur) {
  var BGColor;
  var textColor;
  var PreValue = parseFloat(strPre);
  var CurValue = parseFloat(strCur);

  // console.log("preValue ", PreValue)
  // console.log("CurValue ", CurValue)

  try {
    if (PreValue < CurValue) {
      BGColor = colors.RATE_UP;
      textColor = colors.WHITE;
    } else if (PreValue > CurValue) {
      BGColor = colors.RATE_DOWN;
      textColor = colors.WHITE;
    } else {
      BGColor = colors.TRANSPARENT_COLOR;
      textColor = colors.WHITE;
    }
  } catch (e) {
    BGColor = colors.TRANSPARENT_COLOR;
    textColor = colors.WHITE;
  }
  const strColor = { BGColor: BGColor, textColor: textColor };
  return strColor;
}
export function StatusUpDownColorRTGST(strPre, strCur) {
  var BGColor;
  var textColor;
  var PreValue = parseFloat(strPre);
  var CurValue = parseFloat(strCur);

  // console.log("preValue ", PreValue)
  // console.log("CurValue ", CurValue)

  try {
    if (PreValue < CurValue) {
      BGColor = colors.RATE_UP;
      textColor = colors.WHITE;
    } else if (PreValue > CurValue) {
      BGColor = colors.RATE_DOWN;
      textColor = colors.WHITE;
    } else {
      BGColor = colors.TRANSPARENT_COLOR;
      textColor = colors.WHITE;
    }
  } catch (e) {
    BGColor = colors.TRANSPARENT_COLOR;
    textColor = colors.WHITE;
  }
  const strColor = { BGColor: BGColor, textColor: textColor };
  return strColor;
}
