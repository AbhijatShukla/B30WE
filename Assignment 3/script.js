
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
