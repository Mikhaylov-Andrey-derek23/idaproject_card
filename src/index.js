
import $ from "jquery";
import "./style/style.scss";

function checkEmpty(el, len){
    if( el.value == "" || el.value.split('').length<len){
        el.style.backgroundColor = "#ffdbdb6e";
        el.addEventListener('keypress', ()=>{
            el.style.backgroundColor = "white"
        })
        if(!document.querySelector(".messageBox")){
            const body = document.querySelector('body');
            const messageBox = document.createElement('div');
            messageBox.innerHTML = "Проверьте вводимую информацию, пожалуста исправьте там где выделенно красным";
            messageBox.setAttribute("class", "messageBox");
            const button = document.createElement('div');
            button.setAttribute("class", "close");
            button.innerHTML="Закрыть";
            messageBox.appendChild(button);
            body.appendChild(messageBox);
            button.addEventListener("click", ()=>{
                body.removeChild(messageBox);
            })
        }
        
        return false;
    }else{
        return true;
    } 
}

$(window).ready(function(){
    let getForm = 0;
    const request = {}
    const form = $("form")
    form.submit(function(e){
        e.preventDefault();
        const numbFour = form.find(".numbFour");
        let numberCard = "";
        numbFour.each(function(){
            if(checkEmpty(this, 4)){
                numberCard = numberCard+ this.value;
                request.numberCard = numberCard;
                getForm++
            }
        })
        const cardName = form.find(".cardName");
        cardName.each(function(){
            if(checkEmpty(this, 6)){
                request.cardName = this.value;
                getForm++
            }
        })
        const numbThree = form.find(".numbThree");
        numbThree.each(function(){
            if(checkEmpty(this, 3)){
                request.cvv2 = this.value;
                getForm++
            }
        })
        const mounth = form.find('.mounth');
        mounth.each(function(){
            request.mounth = this.value
        })
        const year = form.find('.year');
        year.each(function(){
            request.year = this.value
        })

        if(getForm >5){
            fetch('answer.php', {
                method : "post",
                headers :{
                    'content-type': 'application/x-www-form-urlencoded' 
                },
                body :`data= ${JSON.stringify(request)}`
            })
        }         
    })

    const nav = $("nav");

    $(".navMobile").click(function(){
        nav.slideToggle();
    })
})