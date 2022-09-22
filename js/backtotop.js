function backtotop(params1,params2) {
    var top =  document.querySelector(params1)
    var body = document.querySelector('body')
    body.onscroll = (e) => {
        console.log(window.scrollY);
        if (window.scrollY >= 200) {
            if (top.classList.length > 0) {
                if (!Array.from(top.classList).includes(params2)) {
                    top.classList.add(params2)
                }
            }
        }
        if (window.scrollY < 200) {
            if (top.classList.length > 0) {
                if (Array.from(top.classList).includes(params2)) {
                    top.classList.remove(params2)
                }
            }
        }
    }
}