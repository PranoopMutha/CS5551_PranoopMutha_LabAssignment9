var request = require('request');
request('https://api.foursquare.com/v2/venues/search?client_id=BHY5FVRSQXV3ERYBXPEKKOYCRXLXYKPE1QA11ET1C5CT2JS1&client_secret=DW20QQLZTYX4CQYHUKIELNEDOZZX0XEN2X4LGYECDEPW035I&v=20160215&limit=10&near=Kansas&query=pizza', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
//	console.log(body);
    //All is good. Print the body
    body = JSON.parse(body);
	var ven = body.response.venues;
	var i;
	for(i=0;i<ven.length;i++)
	{
		console.log(ven[i].name);
	}
	
});