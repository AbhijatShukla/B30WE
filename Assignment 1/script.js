
//Creating object
var request = new XMLHttpRequest();

//Opening connection request
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

//send request
request.send();

//data after response
request.onload = function(){
    var data = JSON.parse(this.response);
    for (var i = 0; i<data.length; i++){
        console.log(data[i].id);
    }
}