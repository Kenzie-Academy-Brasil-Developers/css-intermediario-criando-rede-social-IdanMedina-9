const openPostModal = document.querySelectorAll("[data-modal-control]");
const container = document.getElementsByClassName("container");


for(let i = 0; i < openPostModal.length; i++){
    openPostModal[i].addEventListener("click", ()=>{
        let modal = openPostModal[i].getAttribute("data-modal-control")
        document.getElementById(modal).classList.toggle("")
    })
}