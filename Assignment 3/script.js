
//Creating object
var request = new XMLHttpRequest();

//Opening connection request
request.open('GET', 'http://api.countrylayer.com/v2/lang/hin?access_key=5b6b423eb38b305e8744a84e970fe3df');

//send request
request.send();

//data after response
request.onload = function(){
    var data = JSON.parse(this.response);
    for (var i = 0; i<data.length; i++){
        console.log(data[i].name);
    }
}

var request2 = new XMLHttpRequest();

//Opening connection request
request2.open('GET', 'https://api.countrylayer.com/v2/currency/inr?access_key=5b6b423eb38b305e8744a84e970fe3df');

//send request
request2.send();

//data after response
request2.onload = function(){
    var data2 = JSON.parse(this.response);
    for (var i = 0; i<data2.length; i++){
        console.log(data2[i].name);
    }
}
