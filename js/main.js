function backtotop(params1, params2) {
    var top = document.querySelector(params1)
    var body = document.querySelector('body')
    body.onscroll = (e) => {
        //console.log(window.scrollY);
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

function active(parent, children) {
    var parent = document.querySelector(parent)
    parent.querySelectorAll('a').forEach((e) => {
        e.onclick = (e) => {
            // parent.querySelectorAll(children).forEach((e) => {
            //     e.classList.remove('active')
            // })
            parent.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
        }
    })
}
