/*
//get all information about an item (a single HTTP request is made), and return those data
function GetItem(itemID) {
  var myUrl = "http://www.gw2spidy.com/api/v0.9/json/item/" + escape(itemID);
  var jsonData = UrlFetchApp.fetch(myUrl);
  var jsonString = jsonData.getContentText();
  var jsonObject = JSON.parse(jsonString).result;
  return jsonObject;  
}
 
// pass downloaded item data to functions that return adjusted item value
 
function GetItemSellValue(jsonObject) {
      var adjustedValue = (jsonObject.min_sale_unit_price / 100);
      return adjustedValue;  
}
     
function SalePriceChangedLastHour(jsonObject) {
      var adjustedValue = (jsonObject.sale_price_change_last_hour / 100);
      return adjustedValue;  
}
     //get all information about an item (a single HTTP request is made), and return those data
function GetItem(itemID) {
  var myUrl = "http://www.gw2spidy.com/api/v0.9/json/item/" + escape(itemID);
  var jsonData = UrlFetchApp.fetch(myUrl);
  var jsonString = jsonData.getContentText();
  var jsonObject = JSON.parse(jsonString).result;
  return jsonObject;  
}
 
// pass downloaded item data to functions that return adjusted item value
 
function GetItemSellValue(jsonObject) {
      var adjustedValue = (jsonObject.min_sale_unit_price / 100);
      return adjustedValue;  
}
     
function SalePriceChangedLastHour(jsonObject) {
      var adjustedValue = (jsonObject.sale_price_change_last_hour / 100);
      return adjustedValue;  
}
     
function GetItemBuyValue(jsonObject) {
      var adjustedValue = (jsonObject.max_offer_unit_price / 100);
      return adjustedValue;
}
     
function OfferPriceChangedLastHour(jsonObject) {
      var adjustedValue = (jsonObject.offer_price_change_last_hour / 100);
      return adjustedValue;
}
 
 
// functions call example for prices of Glob of Ectoplasm:
 
//get all information about that item (a single HTTP request is made) and save them in a variable
var ecto = GetItem(19721);
 
//get adjusted values passing already downloaded object info to adjusting functions
var sell=GetItemSellValue(ecto);
var sell_changed=SalePriceChangedLastHour(ecto);
var buy=GetItemBuyValue(ecto);
var buy_changed=OfferPriceChangedLastHour(ecto);

function pass(){
	document.getElementById('passithere').innerHTML = "ecto";
}
function GetItemBuyValue(jsonObject) {
      var adjustedValue = (jsonObject.max_offer_unit_price / 100);
      return adjustedValue;
}
     
function OfferPriceChangedLastHour(jsonObject) {
      var adjustedValue = (jsonObject.offer_price_change_last_hour / 100);
      return adjustedValue;
}
 
 
// functions call example for prices of Glob of Ectoplasm:
 
//get all information about that item (a single HTTP request is made) and save them in a variable
var ecto = GetItem(19721);
 
//get adjusted values passing already downloaded object info to adjusting functions
var sell=GetItemSellValue(ecto);
var sell_changed=SalePriceChangedLastHour(ecto);
var buy=GetItemBuyValue(ecto);
var buy_changed=OfferPriceChangedLastHour(ecto);
*/
function pass(){
	document.getElementById("passithere").innerHTML = ecto;
}