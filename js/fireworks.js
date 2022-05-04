“使用严格”；

 函数更新坐标（e）{
     pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingClientRect().left，pointerY = e.clientY ||  e.touches[
         0].clientY - canvasEl.getBoundingClientRect().top
 }

 函数 setParticuleDirection(e) {
     var t = 日本动漫.random(0, 360) * Math.PI / 180,
         a = 日本动漫.random(50, 180),
         n = [-1, 1][anime.random(0, 1)] * a;
     返回 {
         x: ex + n * Math.cos(t),
         y: ey + n * Math.sin(t)
     }
 }

 函数 createParticule(e, t) {
     变量 a = {};
     返回 ax = e, ay = t, a.color = colors[anime.random(0, colors.length - 1)], a.radius = 日本动漫.random(16, 32), a.endPos =
         setParticuleDirection(a), a.draw = function () {
             ctx.beginPath(), ctx.arc(ax, ay, a.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = a.color, ctx.fill()
         }， 一种
 }

 函数 createCircle(e, t) {
     变量 a = {};
     返回 ax = e, ay = t, a.color = "#F00", a.radius = 0.1, a.alpha = 0.5, a.lineWidth = 6, a.draw = function () {
         ctx.globalAlpha = a.alpha, ctx.beginPath(), ctx.arc(ax, ay, a.radius, 0, 2 * Math.PI, !0), ctx.lineWidth =
             a.lineWidth, ctx.strokeStyle = a.color, ctx.stroke(), ctx.globalAlpha = 1
     }， 一种
 }

 函数渲染粒子（e）{
     for (var t = 0; t < e.animatables.length; t++) {
         e.animatables[t].target.draw()
     }
 }

 函数动画粒子（e，t）{
     for (var a = createCircle(e, t), n = [], i = 0; i < numberOfParticules; i++) {
         n.push（创建粒子（e，t））
     }
     动漫时间线（）。添加（{
         目标：n，
         x: 函数 (e) {
             返回 e.endPos.x
         },
         y：函数（e）{
             返回 e.endPos.y
         },
         半径：0.1，
         持续时间：anime.random(1200, 1800),
         缓动：“easeOutExpo”，
         更新：渲染粒子
     }）。添加（{
         目标：一个，
         半径：anime.random(80, 160),
         线宽：0，
         α： {
             值：0，
             缓动：“线性”，
             持续时间：anime.random(600, 800)
         },
         持续时间：anime.random(1200, 1800),
         缓动：“easeOutExpo”，
         更新：渲染粒子，
         偏移量：0
     })
 }

 函数去抖动（e，t）{
     变量一个;
     返回函数（）{
         var n = 这个，
             i = 参数；
         clearTimeout(a), a = setTimeout(function () {
             e.apply(n, i)
         }, t)
     }
 }
 var canvasEl = document.querySelector(".fireworks");
 如果（画布El）{
     var ctx = canvasEl.getContext("2d"),
         numberOfParticles = 30,
         指针X = 0，
         指针Y = 0，
         点击 = "鼠标按下",
         颜色 = [“#FF1461”、“#18FF92”、“#5A87FF”、“#FBF38C”]、
         setCanvasSize = debounce(函数 () {
             canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHeight, canvasEl.style.width =
                 window.innerWidth + "px", canvasEl.style.height = window.innerHeight + "px", canvasEl.getContext(
                     "2d").scale(2, 2)
         }, 500),
         渲染=动漫（{
             持续时间：1 / 0，
             更新：函数（）{
                 ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
             }
         });
     document.addEventListener（点击，函数（e）{
         "sidebar" !== e.target.id && "toggle-sidebar" !== e.target.id && "A" !== e.target.nodeName && "IMG" !==
             e.target.nodeName && (render.play(), updateCoords(e), animateParticules(pointerX, pointerY))
     }, !1), setCanvasSize(), window.addEventListener("resize", setCanvasSize, !1)
 }
 “使用严格”；

 函数更新坐标（e）{
     pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingClientRect().left，pointerY = e.clientY ||  e.touches[
         0].clientY - canvasEl.getBoundingClientRect().top
 }

 函数 setParticuleDirection(e) {
     var t = 日本动漫.random(0, 360) * Math.PI / 180,
         a = 日本动漫.random(50, 180),
         n = [-1, 1][anime.random(0, 1)] * a;
     返回 {
         x: ex + n * Math.cos(t),
         y: ey + n * Math.sin(t)
     }
 }

 函数 createParticule(e, t) {
     变量 a = {};
     返回 ax = e, ay = t, a.color = colors[anime.random(0, colors.length - 1)], a.radius = 日本动漫.random(16, 32), a.endPos =
         setParticuleDirection(a), a.draw = function () {
             ctx.beginPath(), ctx.arc(ax, ay, a.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = a.color, ctx.fill()
         }， 一种
 }

 函数 createCircle(e, t) {
     变量 a = {};
     返回 ax = e, ay = t, a.color = "#F00", a.radius = 0.1, a.alpha = 0.5, a.lineWidth = 6, a.draw = function () {
         ctx.globalAlpha = a.alpha, ctx.beginPath(), ctx.arc(ax, ay, a.radius, 0, 2 * Math.PI, !0), ctx.lineWidth =
             a.lineWidth, ctx.strokeStyle = a.color, ctx.stroke(), ctx.globalAlpha = 1
     }， 一种
 }

 函数渲染粒子（e）{
     for (var t = 0; t < e.animatables.length; t++) {
         e.animatables[t].target.draw()
     }
 }

 函数动画粒子（e，t）{
     for (var a = createCircle(e, t), n = [], i = 0; i < numberOfParticules; i++) {
         n.push（创建粒子（e，t））
     }
     动漫时间线（）。添加（{
         目标：n，
         x: 函数 (e) {
             返回 e.endPos.x
         },
         y：函数（e）{
             返回 e.endPos.y
         },
         半径：0.1，
         持续时间：anime.random(1200, 1800),
         缓动：“easeOutExpo”，
         更新：渲染粒子
     }）。添加（{
         目标：一个，
         半径：anime.random(80, 160),
         线宽：0，
         α： {
             值：0，
             缓动：“线性”，
             持续时间：anime.random(600, 800)
         },
         持续时间：anime.random(1200, 1800),
         缓动：“easeOutExpo”，
         更新：渲染粒子，
         偏移量：0
     })
 }

 函数去抖动（e，t）{
     变量一个;
     返回函数（）{
         var n = 这个，
             i = 参数；
         clearTimeout(a), a = setTimeout(function () {
             e.apply(n, i)
         }, t)
     }
 }
 var canvasEl = document.querySelector(".fireworks");
 如果（画布El）{
     var ctx = canvasEl.getContext("2d"),
         numberOfParticles = 30,
         指针X = 0，
         指针Y = 0，
         点击 = "鼠标按下",
         颜色 = [“#FF1461”、“#18FF92”、“#5A87FF”、“#FBF38C”]、
         setCanvasSize = debounce(函数 () {
             canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHeight, canvasEl.style.width =
                 window.innerWidth + "px", canvasEl.style.height = window.innerHeight + "px", canvasEl.getContext(
                     "2d").scale(2, 2)
         }, 500),
         渲染=动漫（{
             持续时间：1 / 0，
             更新：函数（）{
                 ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
             }
         });
     document.addEventListener（点击，函数（e）{
         "sidebar" !== e.target.id && "toggle-sidebar" !== e.target.id && "A" !== e.target.nodeName && "IMG" !==
             e.target.nodeName && (render.play(), updateCoords(e), animateParticules(pointerX, pointerY))
     }, !1), setCanvasSize(), window.addEventListener("resize", setCanvasSize, !1)
 }; 