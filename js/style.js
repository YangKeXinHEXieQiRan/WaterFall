$(document).ready(function() {
    let maxHeights = []

    let introducePages = $(".introduce-box>p")
    introducePages.each(function(index, value) {
        let text = $(value)
        let textLength = $.trim(text.text()).length
        if (textLength > 43) {
            text.text(text.text().substring(0,36) + "...")
        }
    })

    let suspensionPages = $(".suspension-box>p")
    suspensionPages.each(function(index, value) {
        let text = $(value)
        let textLength = $.trim(text.text()).length
        if (textLength > 66) {
            text.text(text.text().substring(0,60) + "...")
        }
    })

    let contentImage = $(".content-image")
    contentImage.each(function(index, value) {
        let image = $(value)
        let suspensionMaxHeight = image.height()/2
        maxHeights[index] = suspensionMaxHeight
    })
    let suspension = $(".suspension-box")
    suspension.each(function(index, value) {
        let box = $(value)
        if (box.height() > maxHeights[index]) {
            box.height(maxHeights[index])
        }
        box.css("margin-top", (0 - box.innerHeight()) + "px")
    })

    let imamgBox = $(".image-box")
    imamgBox.hover(
        function() {
            $(this).children(".suspension-box").fadeIn(200)
        },
        function() {
            suspensionBoxOut($(this))
        })

    let waterfalls = $(".waterfall")
    waterfalls.each(function(index, value) {
        let waterfall = $(value)
        waterfallsWidth(waterfall)
    })
    // $(".waterfall").waterfall()
    // window.addEventListener("resize", function() {
    //     waterfalls.each(function(index, value) {
    //         let waterfall = $(value)
    //         waterfallsWidth(waterfall)
    //     })
    //     // $(".waterfall").waterfall()
    // })
})

function suspensionBoxOut(e) {
    setTimeout(function() {
        e.children(".suspension-box").fadeOut(200)
    }, 120)
}

function waterfallsWidth(e) {
    let itemWidth = $(".waterfall-item").eq(0).outerWidth(true)
    let waterfallWidth = Math.floor($(window).width() / itemWidth) * itemWidth
    e.width(waterfallWidth)
}
