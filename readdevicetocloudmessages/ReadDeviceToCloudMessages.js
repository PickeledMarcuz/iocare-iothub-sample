'use strict';

var EventHubClient = require('azure-event-hubs').Client;

// Primary connection string to IOT Hub known as iocare.
var connectionString = 'HostName=...;SharedAccessKeyName=...;SharedAccessKey=...';//the connection string can be found from your IOT hub in portal.azure.com

//Print out the error message when it happens and messages when recieved.
var printError = function (err) {
    console.log(err.message);
};
var printMessage = function (message) {
    console.log('Message received: ');
    console.log(JSON.stringify(nessage.body));
    console.log('');
};

// client application reciever that will recieve only those messages after it has started.
var client = EventHubClient.fromConnectionString(connectionString);
client.open()
    .then(client.getPartitionIds.bind(client))
    .then(function (partitionIds) {
        return partitionIds.map(function(partitionId) {
            return client.createReceiver('$Default', partitionId, { 'startAfterTime': Date.Now() }).then(function (reciever) {
                console.log('Created partition receiver: ' + partitionId)
                reciever.on('errorReceived', printError);
                reciever.on('message', printMessage);
            });
        });
    })
    .catch(printError);

    