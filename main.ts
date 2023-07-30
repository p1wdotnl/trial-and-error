enum RadioMessage {
    Plu = 1111,
    Kinderwagen = 30238,
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
    motorbit.forward(100)
    basic.pause(500)
    motorbit.turnright(50)
    basic.pause(500)
    motorbit.turnleft(50)
    basic.pause(500)
    motorbit.forward(50)
    basic.pause(500)
    motorbit.brake()
    basic.showIcon(IconNames.Asleep)
})
function zetAllePinnen (aan: boolean) {
    pins.digitalWritePin(DigitalPin.P0, aan)
    pins.digitalWritePin(DigitalPin.P1, aan)
    pins.digitalWritePin(DigitalPin.P2, aan)
    pins.digitalWritePin(DigitalPin.P3, aan)
    pins.digitalWritePin(DigitalPin.P4, aan)
    pins.digitalWritePin(DigitalPin.P5, aan)
    pins.digitalWritePin(DigitalPin.P6, aan)
    pins.digitalWritePin(DigitalPin.P7, aan)
    pins.digitalWritePin(DigitalPin.P8, aan)
    pins.digitalWritePin(DigitalPin.P9, aan)
    pins.digitalWritePin(DigitalPin.P10, aan)
    pins.digitalWritePin(DigitalPin.P11, aan)
    pins.digitalWritePin(DigitalPin.P12, aan)
    pins.digitalWritePin(DigitalPin.P13, aan)
    pins.digitalWritePin(DigitalPin.P14, aan)
    pins.digitalWritePin(DigitalPin.P15, aan)
    pins.digitalWritePin(DigitalPin.P16, aan)
}
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (control.deviceSerialNumber()))
})
// v0.0..0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            basic.showArrow(ArrowNames.North)
            motorbit.brake()
        } else {
            basic.showArrow(ArrowNames.East)
        }
    } else {
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P16) < 5) {
        motorbit.brake()
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.clearScreen()
    }
})
