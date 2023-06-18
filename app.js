console.clear();

let input = document.getElementById('input');
const boxes = document.querySelectorAll('.box');
const clearBtn = document.getElementById('clear')
let resultDisplayed = false;
let samShoping = [];

// boxes :

for(let i = 0; i < boxes.length; i++){

  boxes[i].addEventListener('click',function(){
    input.value = this.textContent;
    const price = boxes[i].textContent.split(" ")
    console.log(price[0]);
  })
}
  clearBtn.addEventListener('click',()=>{
    input.value = ' ';
    console.clear();
})


boxes.forEach(box =>{
  box.addEventListener('click',(e)=>{
    samShoping.push(e.target.price)
    samShoping.map((n)=>{
      return n + e;
    })
    console.log(samShoping);
  })
})


// shop :

function shop(totalPrice){
    const discount = (totalPrice > 70_000) ? "10%" : "5%" ;
    console.log("your discount in our shop is :" + discount);

        if(discount == "10%"){
            const p1 = totalPrice * 0.1;
            const finishprice = totalPrice - p1;
            console.log("your profit in our shop is :" + p1 + "$");
            console.log("your cost is : " + finishprice + "$");
        }else{
            const p2 = totalPrice * 0.05;
            const finishprice = totalPrice - p2;
            console.log("your profit in our shop is :" + p2 + "$");
            console.log("your cost is : " + finishprice  + "$");

        }
}

shop(80_000)