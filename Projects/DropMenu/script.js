let selectBox = document.getElementById("select-box");
        let optionBox = document.getElementById("option-box");
        let icon = document.getElementById("icon");
        

        // event listener on select button
        selectBox.addEventListener("click",()=>{
            icon.classList.toggle("rotate-180");
            optionBox.classList.toggle("invisible");
        })

        // event listener to options
        let options = document.getElementsByClassName("opt");
        let social = document.getElementById("social");
        Array.from(options).forEach(option => {
            option.addEventListener("click",(e)=>{
                social.innerText=e.target.innerText;
                icon.classList.toggle("rotate-180");
                optionBox.classList.toggle("invisible");
            })
        });