var btn_num = document.getElementsByClassName("btn-num")
var btn_op = document.getElementsByClassName("btn-op")
var num_count_click = 0

for (btn of btn_num){
    btn.onclick = click_num
}

for(btn of btn_op){
    btn.onclick = click_op
}

function click_num(){
    if (num_count_click == 0){
        document.querySelector("p#exp").innerText = ""
    }
    num_count_click++
    document.querySelector("p#exp").innerText += this.value
}

function click_op(){
    if (this.id != "igual"){
        var text = document.querySelector("p#exp").innerText
        if (text[text.length - 1] == "+" || text[text.length - 1] == "-" || text[text.length - 1] == "/" || text[text.length - 1] == "x"){
            document.querySelector("p#exp").innerText += ""
        } else {
            document.querySelector("p#exp").innerText += this.value
        }
    } else {
        document.querySelector("p#exp").innerText = eval(document.querySelector("p#exp").innerText.replace("x", "*"))
        num_count_click = 0
    }
}