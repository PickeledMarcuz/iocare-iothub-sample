'use strict';

var iothub = require('azure-iothub');
// Connection string to the iocare test hub. Placeholder '{iothub connection string}'
var connectionString = 'HostName=...;SharedAccessKeyName=...;SharedAccessKey=...';//the connection string can be found from your IOT hub in portal.azure.com
var registry  = iothub.Registry.fromConnectionString(connectionString);

//The following code is to create a device definition in the identity registry in your IOT hub. It creates a device in the registry or returns the ID of it if previously connected
var device = new iothub.Device(null);
device.deviceId = 'firstChipOnAzure';
registry.create(device, function(err, deviceInfo, res){
    if (err) {
        registry.get(device.deviceId, printDeviceInfo);
    }
    if (deviceInfo) {
        printDeviceInfo(err, deviceInfo, res)
    }
});

/*
Note
    The IoT Hub identity registry only stores device identities to enable secure access to the IoT hub. It stores device IDs and keys to use as security credentials and an enabled/disabled flag that you can use to disable access for an individual device. If your application needs to store other device-specific metadata, it should use an application-specific store. Refer to IoT Hub developer guide for more information.
*/
function printDeviceInfo(err,deviceInfo, res) {
    if (deviceInfo) {
        console.log('Device ID: ' + deviceInfo.deviceId);
        console.log('Device Key: ' + deviceInfo.authentication.symmetricKey.primaryKey);
    }
}