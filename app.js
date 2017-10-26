'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//First & Pike Location
var firstAndPike = {
  location: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  avgCustPerHour: [],
  cookieSoldPH: [],
  cookieSoldPD: 0,
  console.log(cookieSoldPD),
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length; i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  },
  randAvgCkePerHour: function(){
    for(var j = 0; j < hours.length;j++){
      this.cookieSoldPH.push(Math.round(this.avgCookieSale * this.avgCustPerHour[j]));
      console.log(this.randAvgCkePerHour);
    }
  },
  totcookieSoldPD: function(){
    var total = 0;
    for(var i = 0; i < hours.length;i++){
      sum += this.cookieSoldPH[i];
    }
    this.cookieSoldPD = sum;
  },

  renderFunct: function(){
    var store1 = document.getElementById('store1');
    var firstandpike = document.getElementById('firstandpike');
    this.randAvgCustPerHour();
    this.randAvgCkePerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    store1.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSoldPH[k] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    }
  }
};

firstAndPike.renderFunct();

//SeaTac location
var seaTacAirport = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  avgCustPerHour: [],
  cookieSoldPH: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length; i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  },
  randAvgCkePerHour: function(){
    for(var j = 0; j < hours.length;j++){
      this.cookieSoldPH.push(Math.round(this.avgCookieSale * this.avgCustPerHour[j]));
      console.log(this.randAvgCkePerHour);
    }
  },
  renderFunct: function(){
    var seaTacLabel = document.getElementById('seaTacLabel');
    var seaTacAirport = document.getElementById('seaTacAirport');
    this.randAvgCustPerHour();
    this.randAvgCkePerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    seaTacLabel.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSoldPH[k] + ' cookies';
      console.log(liEl);
      seaTacAirport.appendChild(liEl);
    }
  }
};

seaTacAirport.renderFunct();

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  avgCustPerHour: [],
  cookieSoldPH: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length; i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  },
  randAvgCkePerHour: function(){
    for(var j = 0; j < hours.length;j++){
      this.cookieSoldPH.push(Math.round(this.avgCookieSale * this.avgCustPerHour[j]));
      console.log(this.randAvgCkePerHour);
    }
  },
  renderFunct: function(){
    var seaCenterLabel = document.getElementById('seaCenterLabel');
    var seattleCenter = document.getElementById('seattleCenter');
    this.randAvgCustPerHour();
    this.randAvgCkePerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    seaCenterLabel.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSoldPH[k] + ' cookies';
      console.log(liEl);
      seattleCenter.appendChild(liEl);
    }
  }
};

seattleCenter.renderFunct();

//Capital Hill Location
var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  avgCustPerHour: [],
  cookieSoldPH: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length; i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  },
  randAvgCkePerHour: function(){
    for(var j = 0; j < hours.length;j++){
      this.cookieSoldPH.push(Math.round(this.avgCookieSale * this.avgCustPerHour[j]));
      console.log(this.randAvgCkePerHour);
    }
  },
  renderFunct: function(){
    var capHillLabel = document.getElementById('capHillLabel');
    var capitolHill = document.getElementById('capitolHill');
    this.randAvgCustPerHour();
    this.randAvgCkePerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    capHillLabel.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSoldPH[k] + ' cookies';
      console.log(liEl);
      capitolHill.appendChild(liEl);
    }
  }
};

capitolHill.renderFunct();

//Alki Beach location
var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  avgCustPerHour: [],
  cookieSoldPH: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length; i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  },
  randAvgCkePerHour: function(){
    for(var j = 0; j < hours.length;j++){
      this.cookieSoldPH.push(Math.round(this.avgCookieSale * this.avgCustPerHour[j]));
      console.log(this.randAvgCkePerHour);
    }
  },
  renderFunct: function(){
    var alkiLabel = document.getElementById('alkiLabel');
    var alki = document.getElementById('alki');
    this.randAvgCustPerHour();
    this.randAvgCkePerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    alkiLabel.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookieSoldPH[k] + ' cookies';
      console.log(liEl);
      alki.appendChild(liEl);
    }
  }
};

alki.renderFunct();
