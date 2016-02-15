/**
 * mpu6050-wiringpi
 * 
 * Methods
 * -------
 * read()
 * Return:
 * An object that contains the acceleration and angular velocity.  The fields contained are:
 * o accelX
 * o accelY
 * o accelZ
 * o angX
 * o angY
 * o angZ
 * 
 */
var MPU6050_ADDRESS        = (0x68)
var MPU6050_REG_PWR_MGMT_1 = (0x6b)
var MPU6050_REG_DATA_START = (0x3b)

var wpi = require('wiring-pi');
wpi.setup('wpi');
var fd = wpi.wiringPiI2CSetup(MPU6050_ADDRESS);
wpi.wiringPiI2CWriteReg8(fd, MPU6050_REG_PWR_MGMT_1, 0);

exports.read = function() {
  var msb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START);
  var lsb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+1);
  var accelX = msb << 8 | lsb;
  if (accelX > 0x8000) {
    accelX = accelX - 0x10000;
  }

  var msb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+2);
  var lsb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+3);
  var accelY = msb << 8 | lsb;
  if (accelY > 0x8000) {
    accelY = accelY - 0x10000;
  }

  var msb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+4);
  var lsb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+5);
  var accelZ = msb << 8 | lsb;
  if (accelZ > 0x8000) {
      accelZ = accelZ - 0x10000;
  }

  var msb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+8);
  var lsb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+9);
  var angX = msb << 8 | lsb;
  if (angX > 0x8000) {
      angX = angX - 0x10000;
  }

  var msb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+10);
  var lsb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+11);
  var angY = msb << 8 | lsb;
  if (angY > 0x8000) {
      angY = angY - 0x10000;
  }

  var msb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+12);
  var lsb = wpi.wiringPiI2CReadReg8(fd, MPU6050_REG_DATA_START+13);
  var angZ = msb << 8 | lsb;
  if (angZ > 0x8000) {
      angZ = angZ - 0x10000;
  }
  return {accelX: accelX, accelY: accelY, accelZ: accelZ, angX: angX, angY: angY, angZ: angZ};
};