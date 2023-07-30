enum RadioMessage {
    Plu = 1111,
    Kinderwagen = 30238,
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(100)
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
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.TShirt)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    motorbit.forward(100)
    while (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.pause(20)
    }
    motorbit.brake()
    basic.showIcon(IconNames.Asleep)
})
pins.digitalWritePin(DigitalPin.P15, 1)
// v0.0..0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            basic.showArrow(ArrowNames.North)
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
