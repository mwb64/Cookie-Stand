'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = [];
var cookieSoldPH = 0;
var cookieSoldPD = 0;

function Store (location,minCust,maxCust,avgCookeSales){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookeSales;
  this.avgCustPerHour = [];
  this.cookieSoldPH = [];
  this.totalCookies = 0;
  allLocations.push(this);
  this.randAvgCustPerHour = function(){
    for(var i = 0;i < hours.length; i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
    };
  };
  this.randAvgCustPerHour();
  this.randAvgCkePerHour = function(){
    for(var j = 0; j < hours.length;j++){
      this.cookieSoldPH.push(Math.round(this.avgCookieSale * this.avgCustPerHour[j]));
    };
  };
  this.randAvgCkePerHour();
}

var makeStores = function(){
  var firstandpike = new Store('1st & Pike',23,65,6.3);
  var seatacAirport = new Store('SeaTac Airport',3,24,1.2);
  var seattleCenter = new Store('Seattle Center',11,38,3.7);
  var capitalHill = new Store('Capitol Hill',20,38,2.3);
  var alki = new Store('Alki',2,16,4.6);
};
makeStores();

function makeHeaderRow(){
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Availability';
  trEl.appendChild(thEl);

  for(var k = 0;k < hours.length; k++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[k];
    trEl.appendChild(thEl);
  }
  cookiestands.appendChild(trEl);
}
makeHeaderRow();
