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
    basic.pause(1000)
    motorbit.turnleft(50)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
})
basic.showIcon(IconNames.Yes)
