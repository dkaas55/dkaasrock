//creating a game of stone paper scissor

let playerpoint
let computerpoint
let trials = [3, 5, 10]
let tri = null
gameactive = false
gameend = false
newgame = false
let final_result
plych = document.querySelector(".yrch").firstElementChild
plychl = document.querySelector(".yrch").lastElementChild
compch = document.querySelector(".compch").firstElementChild
compchl = document.querySelector(".compch").lastElementChild
let stone = document.querySelector(".stone")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let best = document.querySelector(".bestof").getElementsByTagName("button")
let b
end=document.querySelector(".winner")


//----------------------------------------------------------------------------
//main function after chossing option
async function main() {
    let opt = ["stone", "paper", "scissor"]  // options of the game
    d = Math.floor(Math.random() * 3) // random no. for computer 
    a = opt[d]  // initialising computer's choice
    console.log("computer's choice : " + a) //showing computer's choice on console
    console.log("your choice : " + b)  //showing player's choice on console
    let result  // initialising the result of a particular game 
    // will work if player's choce lies in options 
    if (opt.includes(b)) {
        // initialising winning condition for player and computer 
        const playerwin = [["stone", "paper"], ["paper", "scissor"], ["scissor", "stone"]]
        const compwin = [["paper", "stone"], ["scissor", "paper"], ["stone", "scissor"]]
        // making condition that player does not win 
        let playerwon = false
        //loop for checking player's winning condition
        for (const ele of playerwin) {
            //condition to check in player winning condition 
            if (ele[0] == a && ele[1] == b) {
                result = "you won"
                console.log("you win")
                playerwon = true
                playerpoint++
                document.querySelector(".result").style.color = " hsl(103, 100%, 50%)"
                break  //will break execution if player won 

            }
        }
        // will work if player doesnt win 
        if (!playerwon) {
            for (const ele of compwin) {
                //condition to check in computer winning condition 
                if (ele[0] == a && ele[1] == b) {
                    console.log("computer won")
                    result = "Computer won"
                    r = 2
                    document.querySelector(".result").style.color = "hwb(69 0% 0%)"
                    computerpoint++
                }
            }
        }
        //if both chooses same option
        if (a == b) {
            result = "its a tie"
            console.log("its a tie")
            document.querySelector(".result").style.color = "#00ffbf"
        }
    }
    // player choses something else other than the option
    else {
        throw new Error("pagal hai kya");
    }
    // code for displaying the choices on screen

    // to check if button was clicked
    if (buttonclicked == 1) {
        addimg(compch, compchl, plych, plychl, result)//adding image on screen
    }
    

}
//------------------------------------------------------
function sh() {

    document.querySelector(".bestof").classList.remove("hidden")// to show  bestof button
    document.querySelector(".strbtn").classList.add("hidden")//to hide start button option
    start()
}
sh()

//--------------------------------------------------------------
//initialising trials 
function initri() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < best.length; i++) {
            best[i].addEventListener('click', () => {
                tri = trials[i]
                resolve()
            });
        }
    })
}
//-------------------------------------------------------------------------
async function start() {
    await initri()
    if (tri != null) {
        document.querySelector(".bestof").classList.add("hidden")//to hide bestof option
        document.querySelector(".strbtn").classList.remove("hidden")// to show to start button
    }
}
// adding function after clicking button 
stone.addEventListener('click', () => playerchoice("stone"))
paper.addEventListener('click', () => playerchoice("paper"))
scissor.addEventListener('click', () => playerchoice("scissor"))
document.querySelector(".startnew").addEventListener('click', () => { start_game(); document.querySelector(".winner").innerHTML = "" })
//function to start the game
buttondisabled()
function start_game() {
    run = 0
    playerpoint = 0
    computerpoint = 0
    gameactive = true
    gameend = false
    buttonenabled()
    remimg(compch, compchl, plych, plychl)
}

//funtion to choose option
function playerchoice(choiced) {
    
    b = choiced
    buttonclicked = 1
    run++
    main()
    // to stop choosing
    if (run == tri) {
        endgame()
        return
    }

}
//function to end game
async function endgame() {
    gameactive = false
    buttondisabled()
    rndwin()
    gameend = true
    if (gameend) {
        sh()
    }

}
//function to disable button
function buttondisabled() {
    stone.disabled = true
    paper.disabled = true
    scissor.disabled = true
}
//funstion to enable button
function buttonenabled() {
    stone.disabled = false
    paper.disabled = false
    scissor.disabled = false
}


function rndwin() {

    if (playerpoint > computerpoint) {
        final_result = "You won this round"
    }
    if (playerpoint < computerpoint) {
        final_result = "You Lost"
    }
    if (playerpoint == computerpoint) {
        final_result = "This round was a tie"
    }
    console.log(final_result)
    document.querySelector(".status").innerHTML="GAMEOVER"
    end.innerHTML = final_result
}
// function to add image in option on screen
function addimg(compfir, complas, youfir, youlas, result) {
    document.querySelector(".result").innerHTML = result
    youfir.innerHTML = b
    if (youlas && youlas.innerHTML.trim() !== " ") {
        youlas.classList.remove('hidden')
    }
    youlas.src = b + ".png"
    compfir.innerHTML = a
    if (complas && complas.innerHTML.trim() !== " ") {
        complas.classList.remove('hidden')
    }
    complas.src = a + ".png"
}

function remimg(compfir, complas, youfir, youlas) {
    compfir.innerHTML = ""
    complas.classList.add('hidden')
    youfir.innerHTML = ""
    youlas.classList.add('hidden')
    document.querySelector(".result").innerHTML = ""
}

//console.log("Matches won by player : " + playerpoint)
//console.log("Matches won by computer : " + computerpoint)
// to start the game