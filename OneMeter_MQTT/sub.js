const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect', function()
{
client.subscribe("#"); //onemeter/e4:2c:db:27:78:cd/adv
console.log("Client has subscribed to the topic sucessfully in the local sever");
});
client.on('message', function(topic,message)
{
    var date_time = new Date();
    console.log(date_time + ' ' + topic.toString());
    console.log(toHexString(message));
    console.log(toCharString(message));
})
function toHexString(byteArray) {
    return Array.from(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('|')
  }
function toCharString(byteArray) {
    return Array.from(byteArray, function(byte) {
      return (byte >= 0x20 && byte < 0x80 ? String.fromCharCode(byte) : '�');
    }).join(' |')
  }