
const {createBluetooth} = require('node-ble')
const {bluetooth, destroy} = createBluetooth()

async function main(){
const adapter = await bluetooth.defaultAdapter()
if (! await adapter.isDiscovering())
  await adapter.startDiscovery()





setInterval(async()=>{
let devices=await adapter.devices()
console.log(devices)
adapter.devices(devices=>{
console.log(devices)
})
},2000)
}
main()
