let timer

function comecar() {
    // 1p = função
    // 2p = tempo em milesegundos

    timer = setInterval(showTime, 1000)
}
function parar() {
    // Parando o setInterval
    clearInterval(timer)
}

function showTime() {
    let d = new Date()

    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let txt = h+':'+m+':'+s

    document.querySelector('.demo').innerHTML = txt
}