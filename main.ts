enum RadioMessage {
    message1 = 49434,
    Kinderwagen = 30238,
    Plu = 1111
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    motorbit.forward(60)
    basic.pause(500)
    motorbit.turnright(50)
    basic.pause(3000)
    motorbit.turnleft(50)
    basic.pause(3000)
    motorbit.forward(20)
    basic.pause(2000)
    basic.showIcon(IconNames.Yes)
})
// v0.0..0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        basic.showNumber(0)
    } else {
        basic.showNumber(1)
    }
    basic.pause(500)
})
