

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dbms',
    password: '1234'
})
function Connect() {
    connection.connect();
    console.log("connected")
}
function PaymentDetails()
{
var query =
    "create table Payments(Payment_ID varchar(100) PRIMARY KEY,"+
    "Booking_ID int REFERENCES Bookings(Bid)," +
    "Payment_Date DATE," +
    "Method varchar(100)," +
    "Status varchar(100) NOT NULL," +
    "Amount int NOT NULL)"+
    "Pcode int REFERENCES Package"
connection.query(query,
    function(err,results,fields){
        console.log(err)
        console.log(results)
        console.log(fields)
    })
}