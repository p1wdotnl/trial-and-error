enum RadioMessage {
    message1 = 49434,
    Kinderwagen = 30238,
    Plu = 1111
}
input.onButtonPressed(Button.A, function () {
    control.reset()
})
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Rollerskate)
    radio.sendMessage(RadioMessage.Kinderwagen)
    basic.pause(1000)
    basic.showIcon(IconNames.Umbrella)
    radio.sendMessage(RadioMessage.Plu)
    basic.pause(1000)
})
