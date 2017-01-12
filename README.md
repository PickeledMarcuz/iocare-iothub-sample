#Introduction 
The structure of this program is based on the guides for IOT Hub found on GitHub and in the documentation of Azure docs.

#Guides
Get started: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-node-node-getstarted#create-a-simulated-device-app
Connect Device: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-node-node-getstarted#create-a-simulated-device-app
Device Managment: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-node-node-getstarted#create-a-simulated-device-app

#Connect to CHIP
To connect the C.H.I.P that Mathias had shown me use the following commands while connected to it via serial on 115200 baud.
The below will allow you to connect to WiFi. I suggest creating an autoscript for this so that onPower it will connect to WiFi.

SSH COM# Serial: 115200
User: chip
Pass: chip

nmcli device wifi list 
Sudo nmcli device wifi connect '(name/SSID)' ifname wlan0
Sudo nmcli device wifi connect '(name/SSID)' password '(wifi password)' ifname wlan0

If it’s a BSSID
Sudo nmcli device wifi connect '(name/SSID)' password '(wifi password)' ifname wlan0 hidden yes