document.querySelector("#git-kommandos").classList.add("active")
document.querySelector("#terminal-kommandos").classList.remove("active")

showTopic = () =>{
    let topic = document.querySelector("#topic").value
    switch (topic){
        case "showGit":
            document.querySelector("#git-kommandos").classList.add("active")
            document.querySelector("#terminal-kommandos").classList.remove("active")
            document.querySelector("#terminal-kommandos").classList.add("inactive")
            document.querySelector("#js-methoden").classList.remove("active")
            document.querySelector("#js-methoden").classList.add("inactive")
            break;
    }
    switch (topic){
        case "showTerminal":
            document.querySelector("#terminal-kommandos").classList.add("active")
            document.querySelector("#git-kommandos").classList.remove("active")
            document.querySelector("#git-kommandos").classList.add("inactive")
            document.querySelector("#js-methoden").classList.remove("active")
            document.querySelector("#js-methoden").classList.add("inactive")
            document.querySelector("#js-operatoren").classList.remove("active")
            document.querySelector("#js-operatoren").classList.add("inactive")
            break;
    }
    switch (topic){
        case "showJSMethoden":
            document.querySelector("#js-methoden").classList.add("active")
            document.querySelector("#git-kommandos").classList.remove("active")
            document.querySelector("#git-kommandos").classList.add("inactive")
            document.querySelector("#terminal-kommandos").classList.remove("active")
            document.querySelector("#terminal-kommandos").classList.add("inactive")
            document.querySelector("#js-operatoren").classList.remove("active")
            document.querySelector("#js-operatoren").classList.add("inactive")
            break;
    }
    switch (topic){
        case "showJSOperatoren":
            document.querySelector("#js-operatoren").classList.add("active")
            document.querySelector("#git-kommandos").classList.remove("active")
            document.querySelector("#git-kommandos").classList.add("inactive")
            document.querySelector("#terminal-kommandos").classList.remove("active")
            document.querySelector("#terminal-kommandos").classList.add("inactive")
            document.querySelector("#js-methoden").classList.remove("active")
            document.querySelector("#js-methoden").classList.add("inactive")
            break;
    }
}