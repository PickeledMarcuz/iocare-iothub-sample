'use strict';

//MQTT protocol for messaging and iot-device. Require the device for message.
var clientFromConnectionString = require ('azure-iot-device-mqtt').clientFromConnectionString;
var Message = require('azure-iot-device').Message;

//Primary connection string to iocare IOT hub.
var connectionString = 'HostName=...;SharedAccessKeyName=...;SharedAccessKey=...'; //the connection string can be found from your IOT hub in portal.azure.com
var client = clientFromConnectionString(connectionString);

// Output disply of the application
function printResultFor(op) {
    return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString());
        if (res) console.log(op + ' status: ' + res.constructor.name);
    };
}

//Callback and use setInterval function to send new messages to IOT hub every second
 var connectCallback = function (err) {
   if (err) {
     console.log('Could not connect: ' + err);
   } else {
     console.log('Client connected');

     // Create a message and send it to the IoT Hub every second
     setInterval(function(){
         /*
            here you need to craft the actual way you want to send the RGB colours
        */
         console.log("Sending message: " + message.getData());
         client.sendEvent(message, printResultFor('send'));
     }, 300000); // 5 minutes in milliseconds is 300000
   }
 };
