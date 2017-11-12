$.fn.waterfall = function() {
    let items = $(this).children()
    let itemWidth = items.eq(0).outerWidth(true)

    let heights = []
    let number = Math.floor($(window).width() / itemWidth)
    let minHeight = 0
    let minHeightIndex = 0

    items.each(function(index, value) {
        let item = $(value)
        if (index < number) {
            heights[index] = item.outerHeight(true)
        } else {
            item.addClass("waterfall-Handle-item")
        }
    })

    minHeight = Math.min.apply(null, heights)
    minHeightIndex = heights.indexOf(minHeight)

    let handleItems = $(".waterfall-Handle-item")
    handleItems.each(function(index, value) {
        let handleItem = $(value)
        let top = minHeight - handleItem.position().top
        let left = items.eq(minHeightIndex).position().left - handleItem.position().left
        handleItem.css({"top":top,"left":left})
        heights[minHeightIndex] += handleItem.outerHeight(true)
        minHeight = Math.min.apply(null, heights)
        minHeightIndex = heights.indexOf(minHeight)
    })
}