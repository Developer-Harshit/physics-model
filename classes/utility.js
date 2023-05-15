class Utility {
    constructor(colorType) {

        this.color = this.seleteColor(colorType)

    }
    seleteColor(colorType) {
        var cx = 220, cy = 220, cz = 220

        switch (colorType) {
            // 255,0,0
            // 0,255,0
            // 0,0,255
            //     cmy
            // rb
            // gb 
            case 0:
                var cR = (Math.random())

                if (cR > 0.5) {
                    cx = 255, cy = 0, cz = 0
                } else {
                    cx = 0, cy = 255, cz = 0
                }
                break
            case 1:
                var cR = (Math.random())

                if (cR > 0.5) {
                    cx = 255, cy = 255, cz = 0
                } else {
                    cx = 0, cy = 0, cz = 255
                }
                break


            case 2:
                var cR = (Math.random())
                if (cR > 0.5) {
                    cx = 0, cy = 0, cz = 255
                } else {
                    cx = 0, cy = 255, cz = 0
                }
                break

            case 3:
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