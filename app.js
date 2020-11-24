let computer, utente, vincitore

function sceltaComputer(){
    let numeroCasuale = Math.floor(Math.random()*3)
    let sceltePossibili = ["sasso", "forbici", "carta"]
    computer = sceltePossibili[numeroCasuale]
    let sceltaComputer = document.querySelector("#computer")
    sceltaComputer.innerHTML = computer
}

function sceltaUtente(scelta){
    utente = scelta
    determinaVincitore()
}

function determinaVincitore(){
    sceltaComputer()

    if(computer === utente){
        vincitore = 'pareggio'
    } else if( computer === 'carta' && utente === 'sasso' ){
        vincitore = 'computer'
    } else if( computer === 'carta' && utente === 'forbici' ){
        vincitore = 'utente'
    } else if( computer === 'sasso' && utente === 'forbici' ){
        vincitore = 'computer'
    } else if( computer === 'sasso' && utente === 'carta' ){
        vincitore = 'utente'
    } else if( computer === 'forbici' && utente === 'carta' ){
        vincitore = 'computer'
    } else if( computer === 'forbici' && utente === 'sasso' ){
        vincitore = 'utente'
    }

    let spanVincitore = document.querySelector("#vincitore")
    spanVincitore.innerHTML = vincitore
}

