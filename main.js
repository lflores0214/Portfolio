

$(document).ready(function (){
    $('.submit').click(function (event) {
        
        console.log("Im clicked!")

        var email = $('.contact-email').val()
        var name = $('.contact-name').val()
        var message = $('.contact-msg').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length < 5 ) {
            alert('email is valid')
            event.preventDefault()
        } 
        if (name.length ==  0){
            alert('Please enter your name')
            event.preventDefault()
        }
        if ( message.length < 20 ){
            alert('message must have at least 20 characters')
            event.preventDefault()
        }
    })
})