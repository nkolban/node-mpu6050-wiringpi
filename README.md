# mpu6050-wiringpi

Access to the MPU-6050 accelerometer through WiringPi on the Raspberry Pi.

## install

$ npm install mpu6050-wiringpi

## Usage
The package provides a single method called `readMag` that returns an object containing the `accelX`, `accelY` and `accelZ` portions of the vector.

```
var MPU6050 = require("mpu6050-wiringpi");
var data = MPU6050.read();
console.log("Got acceleration data!");
console.dir(data);
console.log("accelX=" + data.accelX + ", accelY=" + data.accelY + ", accelZ=" + data.accelZ);
```