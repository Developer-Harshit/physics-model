class Ball {
    constructor(x, y, r, colorType = 0) {
        const render = {
            fillStyle: this.seleteColor(colorType),
            strokeStyle: this.seleteColor('#ffffff'),
            lineWidth: 5
        }
        const options = {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.3,
            render

        }
        this.body = Bodies.circle(x, y, r, options);
        Composite.add(engine.world, this.body);
    }
    seleteColor(colorType) {
        var cx = 250, cy = 250, cz = 250

        switch (colorType) {
            case 0:
                cx = Math.random() * 200 + 50
                cy = Math.random() * 200 + 50
                break
            case 1:
                cy = Math.random() * 100 + 100
                cz = Math.random() * 200 + 50

                break
            case 2:
                cz = Math.random() * 200 + 50
                cx = Math.random() * 200 + 50
                break
            // case 3:
            //     cx = Math.random() * 100 + Math.random() * 75 + 100
            //     break
            // case 4:
            //     cy = Math.random() * 100 + Math.random() * 75 + 100
            //     break
            // case 5:
            //     cz = Math.random() * 100 + Math.random() * 75 + 100
            //     break
            case 3:
                cx = Math.random() * 100 + Math.random() * 175 + 50

                cy = Math.random() * 100 + Math.random() * 175 + 50
                cz = Math.random() * 100 + Math.random() * 175 + 50
                break

        }
        return `rgb(${cx}, ${cy}, ${cz})`
    }
}
