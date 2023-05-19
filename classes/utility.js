class Utility {
    constructor(colorType) {

        this.color = this.seleteColor(colorType)
        this.chains = []
        // structure [{chain: object,host: body}]

    }

    seleteColor(colorType) {
        var cx = 130, cy = 130, cz = 130

        switch (colorType) {
            // 255,0,0
            // 0,255,0
            // 0,0,255
            //     cmy cm cy my
            // rb
            // gb 
            case 0:
                var cR = (Math.random())

                if (cR > 0.5) {
                    cx = 130, cy = 30, cz = 190
                } else {
                    cx = 30, cy = 130, cz = 190
                }
                break
            case 1:
                var cR = (Math.random())

                if (cR > 0.5) {
                    cx = 190, cy = 30, cz = 130
                } else {
                    cx = 30, cy = 190, cz = 130
                }
                break
            case 2:
                var cR = (Math.random())

                if (cR > 0.5) {
                    cx = 130, cy = 30, cz = 190
                } else {
                    cx = 190, cy = 130, cz = 30
                }
                break
            case 3:
                var cR = (Math.random())

                if (cR > 0.5) {
                    cx = 170, cy = 10, cz = 150
                } else {
                    cx = 190, cy = 130, cz = 30
                }
                break

            case 4:
                var cR = (Math.random())
                if (cR > 0.5) {
                    cx = 30, cy = 150, cz = 190
                } else {
                    cx = 190, cy = 130, cz = 30
                }
                break

            case 5:
                var cR = (Math.random())
                if (cR > 0.5) {
                    cx = 0, cy = 140, cz = 190
                } else {
                    cx = 160, cy = 180, cz = 20
                }
                break

            case 6:
                var cR = (Math.random())
                if (cR > 0.5) {
                    cx = 0, cy = 0, cz = 0
                } else {
                    cx = 255, cy = 255, cz = 255
                }
                break

        }
        return rgb_to_hex(cx, cy, cz)
        return `rgb(${cx}, ${cy}, ${cz})`
    }
}