function cancelbtnhide () {
    document.getElementById('add-password-modal').style.display = 'none';
    window.location.href="/";
}

const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
        if (id == "login-modal") {
            document.getElementById("signup-modal").style.display = "none";
        }
        else if (id == "signup-modal") {
            document.getElementById("login-modal").style.display = "none";
        }
        else if (id == "add-password-modal") {
            document.getElementById('modals-hide').style.display = 'none';
        }
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";

        document.getElementById("email-verify").style.display = "none";
        //close modal
        const close = document.getElementById("close-modal");
        close.addEventListener("click", () =>{
            modalWrapper.style.display = "none";
            modal.style.display = "none";
        //I added this later, didn't cover it on the tutorial
        document.querySelector("header").style.display = "unset";
        })

        //I added this later, didn't cover it on the tutorial
        // document.querySelector("header").style.display = "none";
    }
}


//copy to clipboard
const copies = document.querySelectorAll(".copy");
copies.forEach(copy =>{
    copy.onclick = () =>{
        let elemntToCopy = copy.previousElementSibling;
        elemntToCopy.select();
        document.execCommand("copy");
    }
})

//I added this later, didn't cover it on the tutorial
//Display the actions of the password card for mobile devices
const actions = document.querySelectorAll(".actions");
if (actions){
    console.log('actions invoked!')
    actions.forEach(action =>{
        action.onclick = () =>{
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 3000)
        }
    })
}