document.addEventListener('DOMContentLoaded', function (event) {
    console.log('Agora posso ver o HTML')

    const requestFriendshipEl = document.querySelector("#request-friendship")

    requestFriendshipEl.addEventListener('click', function (event) {
        const clickedElement = event.target
        const isFriendshipRequested = clickedElement.dataset.requestedFriendship === 'true'

        if (isFriendshipRequested) {
            clickedElement.innerText = "Solicitar amizade"
            clickedElement.classList.remove('button--active')
            clickedElement.dataset.requestedFriendship = false
        } else {
            clickedElement.innerText = "Solicitando amizade..."
            setTimeout(function () {
                clickedElement.innerText = "Amizade solicitada"
                clickedElement.classList.add('button--active')
                clickedElement.dataset.requestedFriendship = true
            }, 2000)
        }
    })


    /* Abaixo você vai ouvir quando o botão de enviar mensagem for clicado 
    e vai mostrar o elemtno com id "message" mudadndo o atributo "display" 
    para "inline-block" */

    const sendMessageEl = document.querySelector("#send-message")
    sendMessageEl.addEventListener('click', function (event) {
        const buttonClicked = event.target
        const messageTextArea = document.querySelector('#message')

        if (messageTextArea.style.display == 'none') {
            buttonClicked.innerText = "Fechar"
            messageTextArea.style.display = "block"
            sendMessageEl.classList.add('button--active')
        } else {
            buttonClicked.innerText = "Enviar mensagem"
            messageTextArea.style.display = "none"
            sendMessageEl.classList.remove('button--active')
        }
    })





    const postsSalvos = document.querySelectorAll('.post-save')
    postsSalvos.forEach(function (post) {
        post.addEventListener('click', function (event) {
            const postClicado = event.currentTarget
            const postSendoClicado = postClicado.dataset.postSalvo === 'true'

            if (postSendoClicado) {
                postClicado.querySelector('span').innerText = "SALVAR"
                // postClicado.classList.remove('button--active')
                postClicado.dataset.postSalvo = false
            }
            else {
                postClicado.querySelector('span').innerText = "SALVO"
                //postClicado.classList.add('button--active')
                postClicado.dataset.postSalvo = true
            }
            const contador = Array.from(document.querySelectorAll('.post-save')).filter(function (post) { return post.dataset.postSalvo === "true" }).length
            document.querySelector('#contado').innerText = contador
        })
    })




})
//post-save