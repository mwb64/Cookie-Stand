'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var cookieShop1 = {
  location: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  avgCustPerHour: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length;i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  }
};

cookieShop1;

var cookieShop2 = {
  location: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  avgCustPerHour: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length;i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  }
};

cookieShop2;

var cookieShop3 = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  avgCustPerHour: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length;i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  }
};

cookieShop3;

var cookieShop4 = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  avgCustPerHour: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length;i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  }
};

cookieShop4;

var cookieShop5 = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  avgCustPerHour: [],
  randAvgCustPerHour: function(){
    for(var i = 0;i < hours.length;i++){
      this.avgCustPerHour.push(Math.floor((Math.random() * (this.maxCust - this.minCust ) + 1)));
      console.log(this.avgCustPerHour[i]);
    }
  }
};

cookieShop5;
