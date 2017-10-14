'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var cookieShop1 = {
  location: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
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

cookieShop1.renderFunct();
