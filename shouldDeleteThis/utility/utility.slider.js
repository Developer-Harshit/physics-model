function setSliders() {
    accx = new Slider('Acceleration-X', 'slider-ol')
    accy = new Slider('Acceleration-Y', 'slider-ol')

    accx.addSlider(-5.0, 5.0, 0, 0.0001)
    accy.addSlider(-5.0, 5.0, 0, 0.0001)

    mySliders.accx = accx.element
    mySliders.accy = accy.element

    velx = new Slider('Velocity-X', 'slider-ol')
    vely = new Slider('Velocity-Y', 'slider-ol')

    velx.addSlider(-20, 20, 0, 0.01)
    vely.addSlider(-20, 20, 0, 0.01)

    mySliders.velx = velx.element
    mySliders.vely = vely.element

    s1 = new Slider('Slider-X', 'slider-ol')
    s2 = new Slider('Slider-Y', 'slider-ol')

    s1.addSlider(-20, 20, 0, 0.01)
    s2.addSlider(-20, 20, 0, 0.01)






}
