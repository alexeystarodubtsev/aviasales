const CHEAP = "CHEAP";
const FAST = "FAST";
const NOSTOP =  {titleName : "Без пересадок", title : "NO_STOP", qtyStops : 0};
const ONESTOP = {titleName : "1 пересадка", title : "ONE_STOP", qtyStops : 1};
const TWOSTOP = {titleName : "2 пересадки", title : "TWO_STOP", qtyStops : 2};
const THREESTOP = {titleName : "3 пересадки", title : "THREE_STOP", qtyStops : 3};
const getStopTitleName =(qty) => {
    const stops = [NOSTOP,ONESTOP,TWOSTOP,THREESTOP];
    try {
        return stops.filter(s => s.qtyStops === qty)[0].titleName;
    }
    catch (error)
    {
        return ">3 пересадок";
    }
}
export {CHEAP, FAST, NOSTOP, ONESTOP, TWOSTOP, THREESTOP, getStopTitleName}