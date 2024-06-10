const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect', function()
{
    setInterval(function()
{
    var random = Math.random()*50;
    console.log(random);
    if(random<30)
        {
            client.publish('kvese','Simple MQTT using local machine' +random.toString() + '.');
        }
},3000);
});