const mqtt = require('mqtt')
const protocol = 'mqtt'
const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
console.log(clientId);

//package.json "scripts" - "test": "echo \"Error: no test specified\" && exit 1"

//custom host & port
//https://www.emqx.com/en/blog/how-to-set-parameters-when-establishing-an-mqtt-connection

//const connectUrl = `${protocol}://${host}:${port}`
const connectUrl = `mqtt://${host}:${port}`

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
  })
  
  const topic = '/nodejs/mqtt'

  client.on('connect', () => {
    console.log('Connected')
  })

  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
    client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
      if (error) {
        console.error(error)
      }
    })
  })


client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString())
})
  