basic.forever(function () {
    led.plotBarGraph(
    input.temperature(),
    50
    )
    if (input.temperature() < 37) {
        basic.showString("I'm Fine")
    } else if (input.temperature() == 38) {
        basic.showString("I'm Sick")
    } else {
        basic.showString("I'm Fever")
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    }
})
