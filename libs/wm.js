'use strict';
;(function() {
    const LENCX = 'lencx.github.io'
    var rotate = function(target) {
        let context = target.getContext('2d')
        let metrics = context.measureText(LENCX)
        let x = (target.width / 2) - metrics.width*1.5
        let y = (target.height / 2) + 50 * 2
        context.translate(x, y)
        context.globalAlpha = 0.3
        context.fillStyle = '#000'
        context.font = '36px Shrikhand'
        context.rotate(-45 * Math.PI / 180)
        context.fillText(LENCX, 0, 0)
        return target
    }

    let $postImg = document.querySelectorAll('article img')
    for(let i=0, len=$postImg.length; i<len; i++) {
    let _this, src, text, _parent
    _this = $postImg[i]
    src = _this.src
    text =watermark.text
    _parent = _this.parentNode
    watermark([src])
        .image(text.lowerRight(LENCX, '24px Marck Script', '#f00', 0.7))
        .render()
        .image(rotate)
        .then(img => {
            _parent.appendChild(img)
        })
        .then(() => {
            _parent.removeChild(_this)
        })
    }
})()