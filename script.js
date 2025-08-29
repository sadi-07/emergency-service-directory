

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


// history and call --------------------------

let coinCount = 100;
let coinSection = document.getElementById("coinCount");


const callBtn = document.querySelectorAll(".call-btn");
for (const btn of callBtn) {
  btn.addEventListener("click", function(){
    if(coinCount < 20){
      alert("Not enough coins!! Minimum 20 coins required to make a call.");
      return;
    }
    coinCount = coinCount - 20;
    coinSection.innerText = coinCount;

    let card = this.parentNode.parentNode;

    let allHeading2 = card.getElementsByTagName("h2");

    let serviceName = allHeading2[0].innerText;
    let serviceNumber = allHeading2[1].innerText;

    let timeLive = new Date().toLocaleTimeString();

    alert("Calling " + serviceName + ":- " + serviceNumber)

    document.getElementById("history-section").innerHTML += `

      <div class="flex justify-between items-center bg-[#f3f2f3] p-3 rounded-lg mt-2">
                    <div>
                        <h2 class="text-base sm:text-lg font-semibold">${serviceName}</h2>
                        <p class="text-gray-600 text-sm sm:text-base font-[500]">${serviceNumber}</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-sm sm:text-base font-[500]">${timeLive}</p>
                    </div>
      </div>

    `;
    
  })
}

document.getElementById("clear-btn").addEventListener("click", function(){
  document.getElementById("history-section").innerHTML = "";
})

