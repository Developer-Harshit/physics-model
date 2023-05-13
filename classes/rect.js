class Rect {
    constructor(x, y, w, h, colorType = 1) {

        const render = {
            fillStyle: this.seleteColor(colorType),
            strokeStyle: this.seleteColor(colorType),
            lineWidth: 3
        }
        const options = {
            friction: 0.2,
            frictionAir: 0.00001,
            restitution: 0.00001, render
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        Composite.add(engine.world, this.body);
    }
    seleteColor(colorType) {
        var cx = 220, cy = 220, cz = 220

        switch (colorType) {
            case 0:
                cx = Math.random() * 150 + 100
                cy = Math.random() * 150 + 100
                break
            case 1:
                cy = Math.random() * 150 + 100
                cz = Math.random() * 150 + 100

                break
            case 2:
                cz = Math.random() * 150 + 100
                cx = Math.random() * 150 + 100
                break
            case 3:
                cx = Math.random() * 100 + Math.random() * 75 + 100
                break
            case 4:
                cy = Math.random() * 100 + Math.random() * 75 + 100
                break
            case 5:
                cz = Math.random() * 100 + Math.random() * 75 + 100
                break
            case 6:
                cx = Math.random() * 100 + Math.random() * 75 + 100

                cy = Math.random() * 100 + Math.random() * 75 + 100
                cz = Math.random() * 100 + Math.random() * 75 + 100
                break

        }
        return `rgb(${cx}, ${cy}, ${cz})`
    }
}