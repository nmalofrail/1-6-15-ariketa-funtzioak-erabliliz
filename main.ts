function biratu_ezkerrera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.North)
}
function biratu_eskuinera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.North)
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        biratu_eskuinera()
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        biratu_ezkerrera()
    }
})
