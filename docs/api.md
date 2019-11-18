---
id: api
title: APIs
---
<h1 style="color:red">This website is NOT up-to-date, it has been moved to 👇 [https://itpnyu.github.io/p5ble-website](https://itpnyu.github.io/p5ble-website)</h1>

# All APIs:
1. Request and Connect to Bluetooth Devices
2. Read a Bluetooth Characteristic
3. Write to a Bluetooth Characteristic
4. Start and stop GATT Notifications
5. Get disconnected from a Bluetooth Device

# p5ble

```javascript
// Interact with multiple devices, each new p5ble() only connect to one device
const myBLE = new p5ble();
const myOtherBLE = new p5ble();
```

## Properties:
  ### 1. device
  Once it’s connected successfully, .device will have all the information of the device
  ### 2. server
  ### 3. service
  ### 4. characteristics, array

## Methods:
  ### .connect(service, gotCharacteristics?)
  Parameters:
  - Service: Service UUID(e.g. `0x1234`, `0x12345678`, `99999999-0000-1000-8000-00805f9b34fb`) or Service Name(e.g. `battery_service`)
  - gotCharacteristics(optional): A callback function, e.g.
  ```javascript
  (err, characteristics) => { console.log(characteristics) }
  ```

	Returns characteristics: array

  ### .read(characteristic, dataType?, gotData?)
  Parameters:
  - characteristic: The characteristic UUID that you want to read
  - dataType (optional): default to `uint8`, options: `uint16`, `uint32`, `string`, `int8`, `int16`, `int32`, `float32`, `float64`
  - gotData(optional): A callback function, e.g.
  ```javascript
  (err, data) => { console.log(data) }
  ```
	Returns data

  ### .write(characteristic, data)
  ### Parameters:
  - characteristic: The characteristic you want to write to
  - data: String

  ### .startNotifications(characteristic, handleNotifications, dataType?)
  ### Parameters:
  - characteristic: The characteristic you want to start notification
  - handleNotifications: A callback function, e.g. (data) => { console.log(data) }
  - dataType (optional): default to `uint8`, options: `uint16`, `uint32`, `string`, `int8`, `int16`, `int32`, `float32`, `float64`

  ### .stopNotifications(characteristic)
  ### Parameters:
  - characteristic: The characteristic you want to stop notification 

  ### .disconnect()

  ### onDisconnected(handleDisconnected)
  ### Parameters:
  - handleDisconnected: A callback function, e.g. (device) => { console.log('Device ' + device.name + ' is disconnected.'); }

  ### .isConnected()
  returns a `Boolean`

