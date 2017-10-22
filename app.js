'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = [];
var cookieSoldPH = 0;

function Store (location,minCust,maxCust,avgCookeSales){
  var cookieTotal = 0;
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookeSales = avgCookeSales;
  this.avgCustPerHour = [];
  this.cookieSoldPH = [];
  this.cookieTotals = [];
  var cookieTotal = 0;
  console.log(cookieTotal);
  allLocations.push(this);

  for(var i = 0;i < hours.length; i++){
    this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
  };

  //COOKIES SOLD PER HOUR
  for(var j = 0; j < hours.length;j++){
    this.cookieSoldPH.push(Math.round(this.avgCookeSales * this.avgCustPerHour[j]));
  };

  // for(var k = 0; k < hours.length;k++){
  //   this.cookieTotal.push(this.cookieSoldPH * this.avgCustPerHour[j]);
  // };
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
  var tdEl = document.createElement ('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  cookiestands.appendChild(trEl);
}
makeHeaderRow();

function makeTableRows(){
  var cookiestands = document.getElementById('cookiestands');
  // var trEl = document.createElement('tr');
  // var tdEl = document.createElement('td');
  for(var i = 0; i < allLocations.length;i++){
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[i].location;
    trEl.appendChild(tdEl);
    cookiestands.appendChild(trEl);
    for(var j = 0; j < allLocations[i].cookieSoldPH.length; j++){
      var tdEl = document.createElement('td');
      tdEl.textContent = allLocations[i].cookieSoldPH[j];
      trEl.appendChild(tdEl);
      cookiestands.appendChild(trEl);
    }
  }
}
makeTableRows();

function storeCreator(event){
  event.preventDefault();
  var newStoreLocation = event.target.location.value;
  var newMinCust = event.target.minCust.value;
  var newMaxCust = event.target.maxCust.value;
  var newAvgCookeSales = event.target.avgCookeSales.value;
  var makeNewStore = new Store(newStoreLocation,newMinCust,newMaxCust,newAvgCookeSales);
  console.log(makeNewStore);
  console.log(storeCreator);
  console.log(allLocations);
  cookiestands.innerHTML = ' ';
  makeHeaderRow();
  makeTableRows();
  event.target.location.value = null;

};
var storeCreateForm = document.getElementById('newStoreLocal');
storeCreateForm.addEventListener('submit',storeCreator);
