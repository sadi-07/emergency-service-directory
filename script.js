

// heart count -------------------------

let likeCount = 0;
const likeSection = document.getElementById("likeCount");

const likeBtn = document.querySelectorAll(".like-btn");
for (const btn of likeBtn) {
  btn.addEventListener("click", function(){
    likeCount++;
    likeSection.innerText = likeCount;
  })
}






// call button -------------------------

let coins = 100;
const coinShow = document.getElementById("coinCount"); 
const callButtons = document.querySelectorAll(".call-btn");

coinShow.textContent = coins;

callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (coins < 20) {
      alert("❌ Not enough coins to make a call!");
      return;
    }

    // find the card related to this button
    const card = btn.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent;
    const serviceNumber = card.querySelector(".service-number").textContent;

    // show alert
    alert(`📞 Calling ${serviceName} at ${serviceNumber}`);
    // deduct 20 coins
    coins -= 20;
    coinShow.textContent = coins;
    })
});


// Copy Text ------------------------

let copyCount = 0;
const copySection = document.getElementById("copyCount");

const copyBtn = document.querySelectorAll(".copy-btn");
for (const btn of copyBtn) {
  btn.addEventListener("click", function(){
    copyCount++;
    copySection.innerText = copyCount;
  })
}

function copyText(id){
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(()=>{
    alert("Number is Copied!!")
  })
}

document.getElementById("btn-copy-1").addEventListener("click",function(){
  copyText("service-number-1");
})
document.getElementById("btn-copy-2").addEventListener("click",function(){
  copyText("service-number-2");
})
document.getElementById("btn-copy-3").addEventListener("click",function(){
  copyText("service-number-3");
})
document.getElementById("btn-copy-4").addEventListener("click",function(){
  copyText("service-number-4");
})
document.getElementById("btn-copy-5").addEventListener("click",function(){
  copyText("service-number-5");
})
document.getElementById("btn-copy-6").addEventListener("click",function(){
  copyText("service-number-6");
})
document.getElementById("btn-copy-7").addEventListener("click",function(){
  copyText("service-number-7");
})
document.getElementById("btn-copy-8").addEventListener("click",function(){
  copyText("service-number-8");
})
document.getElementById("btn-copy-9").addEventListener("click",function(){
  copyText("service-number-9");
})


