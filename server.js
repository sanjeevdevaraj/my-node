var express = require('express'); 
var bodyParser = require('body-parser');  
var mysql = require('mysql');
const cors = require('cors')
var corsOptions = {
  origin: 'http://localhost1:8010',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
}); 

var app = express();  

//Refer this for cross origin issue https://expressjs.com/en/resources/middleware/cors.html
//app.use(cors(corsOptions)) --> Enable paticular cros request defined in options
app.use(cors()); //--> Enable all cros request

app.get('/getClientDetails', function (req, res) {  
  con.query("SELECT * FROM registration", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.statusCode = 200;
    res.set('Accept', 'application/json');
    res.json(result);
  });
})  

var urlencodedParser = bodyParser.json({ extended: false })  
app.post('/addClientData', urlencodedParser, function (req, res) {  

  var inputParam = req.body;
  var sql = "INSERT INTO registration(client_name,country_code,phone_number,email_id,contact_me,home_loan,created_date,updated_date)"
  + "VALUES ('"+inputParam.clientName+"',"+inputParam.countryCode+",'"+inputParam.phoneNumber+"','"+inputParam.emailId+"','"+inputParam.contactMe+"',"+inputParam.homeLoan+",now(), now())";
  
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.json(req.body);
    console.log("1 record inserted, ID: " + result.insertId);
  });   
})  

var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  