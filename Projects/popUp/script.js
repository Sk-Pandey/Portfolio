let msg = document.getElementById("message");
let btn = document.getElementById("btn");
let ok = document.getElementById("ok");
        btn.addEventListener("click",()=>{
            btn.classList.add("hidden");
            msg.classList.remove("hidden");
            msg.classList.add("animate-popUp");
        })
        ok.addEventListener("click",()=>{
                msg.classList.add("hidden");
                
        })