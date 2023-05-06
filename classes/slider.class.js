
class Slider {
    constructor(name, formid) {

        this.name = name
        this.formid = formid
    }
    addSlider(min, max, value, step = 0.1) {
        this.parentList = createElement('li')
        this.parentList.parent(this.formid)

        this.element = createSlider(min, max, value, step)
        const p = createP(this.name)

        this.element.parent(this.parentList)
        // this.parentList.child(this.element)
        this.parentList.child(p)

    }
}