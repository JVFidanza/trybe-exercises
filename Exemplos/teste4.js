let bla = {
    bla: 12,
};
let ble = {
    ble: 13,
};
ble = bla;
let bli;
ble.bla = 15;

console.log(bla, ble, bli);