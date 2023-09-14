document.addEventListener("DOMContentLoaded",
    function(e){
        let a = document.querySelector("input")
        a.addEventListener("input", 
            function(e){
                console.log(e.target.value)
            }
        )
    }
)
function hi(){
    alert("hi")
}

