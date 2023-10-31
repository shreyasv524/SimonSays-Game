console.log("hellow");
let gamestart = false;
let level1 = 0;
let level = document.querySelector(".level");
let btns = document.querySelectorAll(".box");
let userseq = [];
let pcseq = [];
let arr = ["red","yellow","orange","blue"];



document.addEventListener("keypress",function(){
    if(gamestart == false){
    console.log("game start");
    levelup();
        gamestart = true;
    //    randflash( randcolor())
        // pressbtn();
    }
    
})
// for(let i = 0 ; i <= btns.length; i++){
//     let a = btns[i];
//     a.addEventListener("click",function(){
//         console.log(btns[i]);
//         userflash(btns[i]);
//     })
//     console.log(box);
// }
for(box of btns){
    
        userflash(box);
        
}
function userflash(btn){
    btn.addEventListener("click",function(){
        let usercolor = this.getAttribute("id");
        // console.log(usercolor);
        userseq.push(usercolor);

        ans(userseq.length-1);
        btn.classList.add("green");
        setTimeout(()=>{
            btn.classList.remove("green");
        },100);
        
        // console.log(btn);
    })
    

}
// console.log("user sequence is: ",userseq);
function ans(ind){
    // let ind = level1 - 1;
    if(pcseq[ind] === userseq[ind]){
        if(pcseq.length == userseq.length){
                      levelup();
        }
        // console.log("You are right");
    }
    else{
        level.innerText = `game over please try again`;
        
       
        gamestart = false;
        level1 = 0;
        pcseq = [];
    }
}

function randflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },150);
    }


function levelup(){
    userseq = [];
    level1++;
    level.innerText = `Level ${level1}`;

    let ranind = Math.floor(Math.random()*4);
    let randomcolor = arr[ranind];
    // sconsole.log(randomcolor);
    let randbtn = document.querySelector(`.${randomcolor}`);
    // console.log("random btn is: ",randbtn);
    pcseq.push(randomcolor);
    console.log("game sequence: ",pcseq);
    setTimeout(randflash(randbtn),1000);
}
// function pressbtn (){
//     btns.addEventListener("click",function(){
//         console.log(btns);
//     })
// }

