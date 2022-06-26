const btns = Array.from(document.getElementsByClassName("btn")) ;

const vendor = document.querySelector(".vendor");
const media = document.querySelector(".media");
const corp = document.querySelector(".corp");
const team = document.querySelector(".team");

const unlimitedReward = document.querySelector(".unlimitedReward");
const lifetimeReward = document.querySelector(".lifetimeReward");

const unlimitedBar = document.querySelector(".unlimited-Bar");
const lifetimeBar = document.querySelector(".lifetime-Bar");

const showPerUnlimited = document.querySelector(".per-unlimited");
const showPerLifetime = document.querySelector(".per-lifetime");

function sum(){
    let total = 0;
    let num1 = parseFloat(vendor.value)
    let num2 = parseFloat(media.value)
    let num3 = parseFloat(corp.value)
    let num4 = parseFloat(team.value)
    if(num1&&num2&&num3&&num4){
        total += num1 + num2 + num3 +num4
    }else{
        return alert("Please fill in all fields")
    }
   
    return total
}

btns.map((btn)=>{
    let total;
    btn.addEventListener("click",(e)=>{
        total = sum()
        let target = e.target.getAttribute("data-target")
        if (isNaN(total)){
            unlimitedReward.innerHTML = ``
            lifetimeReward.innerHTML = ``
        }else{
            unlimitedReward.innerHTML = `$${total * 1.1}`
            lifetimeReward.innerHTML = `$${total * 1.2}`
            let brexPer = total * 0.3
            let stripePer = total * 2.9
            let amexPer = total * 1.3
            if (brexPer > 100|| stripePer > 100 || amexPer > 100){
                unlimitedBar.style.width= "100%"
                lifetimeBar.style.width= "100%"
                showPerUnlimited.innerHTML = "100%"
                showPerLifetime.innerHTML = "100%"
            }else{
                if (target === 'brex'){
                    unlimitedBar.style.width= `${Math.floor(brexPer)}%`
                    lifetimeBar.style.width= `${Math.floor(brexPer)}%`
                    showPerUnlimited.innerHTML = `${Math.floor(brexPer)}%`
                    showPerLifetime.innerHTML = `${Math.floor(brexPer)}%`
                }else if(target ==='stripe'){
                    unlimitedBar.style.width=`${Math.floor(stripePer)}%`
                    lifetimeBar.style.width= `${Math.floor(stripePer)}%`
                    showPerUnlimited.innerHTML = `${Math.floor(stripePer)}%`
                    showPerLifetime.innerHTML = `${Math.floor(stripePer)}%`
                }else{
                    unlimitedBar.style.width= `${Math.floor(amexPer)}%`
                    lifetimeBar.style.width=`${Math.floor(amexPer)}%`
                    showPerUnlimited.innerHTML =`${Math.floor(amexPer)}%`
                    showPerLifetime.innerHTML =`${Math.floor(amexPer)}%`
                }

            }
           
        }
        
    })
})