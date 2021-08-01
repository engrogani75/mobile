
// let mainImg = document.querySelector('#mainImg');
// let singleImg = document.querySelectorAll('.small_img');

// singleImg[0].onclick = function(){
//   mainImg.src = singleImg[0].src;
// }

// singleImg[1].onclick = function(){
//   mainImg.src = singleImg[1].src;
// }

// singleImg[2].onclick = function(){
//   mainImg.src = singleImg[2].src;
// }

// singleImg[3].onclick = function(){
//   mainImg.src = singleImg[3].src;
// };










// document.getElementById('img-container').addEventListener('mouseover', function(){
//     imgZoom('featherd')
// })

// function imgZoom (imgId){
//     let img = document.getElementById(imgId)
//     let lens = document.getElementById('lens')

//     lens.style.backgroundImage = `url( ${img.src} )`

//     let ratio = 3;

//     lens.style.backgroundSize = (img.width * ratio) + "px" + (img.height * ratio) + "px";
      
//     img.addEventListener("mousemove", moveLens)
//     lens.addEventListener("mousemove", moveLens)
//     img.addEventListener(" touchmove", moveLens)
    
// function moveLens(){
//     let pos = getCursor()
//     console.log('pos' , pos);


//     let posLeft = pos.x - (lens.offsetWidth / 2)
//     let posTop = pos.y - (lens.offsetHeight / 2)


//     if (posLeft < 0) {
//         posLeft = 0
//     }

//     if (posTop < 0) {
//         posTop = 0
//     }

//     if (posLeft > img.width - lens.offsetWidth / 3) {
//         posLeft = img.width - lens.offsetWidth / 3 
//     }

//     if (posLeft > img.height - lens.offsetHeight/ 3) {
//         posLeft = img.width - lens.offsetHeight / 3 
//     }

//     lens.style.left = posLeft + "px";
//     lens.style.top = posTop + "px";

//     lens.style.backgroundPosition = '-' +(pos.x * ratio) + 'px -' + (pos.y * ratio) + 'px'

// }

// function getCursor(){
    
//     let e = window.event
//     let bounds = img.getBoundingClientRect()


//     console.log('e', e);
//     console.log('bounds', bounds);



//     let x = e.pageX - bounds.left
//     let y = e.pageY - bounds.top

//     x = x - window.pageXOffset;
//     y = y - window.pageYOffset;

    

//     return {'x':x, 'y':y}

// }


// }

// imgZoom('featherd')



// add to Cart  js

document.querySelector('.figure').addEventListener('mousemove', function(){
  zoomPic('mainImg')
})


function zoomPic(imgID) {
  let image = document.getElementById(imgID)
  let glass = document.getElementById('glass')
 glass.style.backgroundImage = `url( ${image.src} )`

 let r = 3

glass.style.backgroundSize = (image.width * r) + "px " + (image.height * r) + "px ";

  image.addEventListener ('mousemove', moveGlass )
  glass.addEventListener ('mousemove', moveGlass)
  image.addEventListener('touchmove', moveGlass)


 function moveGlass(){
   //1
   let pos = cursorGet()
 // console.log('pos:' , pos);
//2
    let posLeft = pos.x - (glass.offsetWidth / 2);
    let posTop = pos.y - (glass.offsetHeight / 2);


    //5
    if (posLeft < 0) {
      posLeft = 0
    }

    if (posTop < 0) {
      posTop = 0
    }

    if (posLeft > image.width - glass.offsetWidth / 3) {
      posLeft = image.width - glass.offsetWidth / 3
    }

    if (posTop > image.height - glass.offsetHeight / 3) {
      posTop = image.height - glass.offsetHeight / 3
    }
//3
    glass.style.left = posLeft + "px ";
    glass.style.top = posTop + 'px ';


    //4

    //lens.style.backgroundPosition = '-' +(pos.x * ratio) + 'px -' + (pos.y * ratio) + 'px'

    glass.style.backgroundPosition = "-" + (pos.x * r) + 'px -' + (pos.y * r) + 'px ';


 }





 

 function cursorGet(){

  let e = window.event
  let b = image.getBoundingClientRect()

  //console.log('e:', e);

  // console.log('b:', b);



   let x = e.pageX - b.left
   let y = e.pageY - b.top

   x = x - window.pageXOffset;
   y = y - window.pageYOffset;

   return{'x' : x, 'y' : y }
 }


}

zoomPic('mainImg')



//add to cart ratting js

const stars = document.querySelectorAll('.star')
const rat = document.querySelector('.rat')

for (x = 0; x < stars.length; x++) {
  stars[x].starValue = (x+1); 

  ['click', 'mouseover', 'mouseout'].forEach(function(e){
    stars[x].addEventListener(e, showRatting)

  })

}

function showRatting(e) {
  let type = e.type;
 let starValue = this.starValue;


 if (type === 'click') {
  if (starValue > 0) {
    rat.innerHTML = 'Thanks for your ' + starValue + " star reviewing"
  } 
}

   stars.forEach(function (elem, ind) {

    if (type === 'click') {
      if (ind < starValue) {
          elem.classList.add('red')
          
      } else {
         elem.classList.remove('red')
      } 
  } 

   if (type === 'mouseover') {
    if (ind < starValue) {
      elem.classList.add('orange')
    } else {
     elem.classList.remove('orange')
    } 
  }

  if (type === 'mouseout') {
    elem.classList.remove('orange')
  }
   

 })


}




// add to catr increase and decrease
var coupneCode = document.getElementById('coupneCode')
var totalPrice = document.getElementById('totalPrice');
var totalAmount = document.getElementById('total_amount')
var shipAmount = document.getElementById('shippingDiscount')
const dsNumber = (increament, price) => {
var decrease =  document.getElementById(increament)
var price=  document.getElementById(price)
  //console.log(ds.value);

  if (decrease.value <= 0) {
    decrease.value = 0
  } else {
    decrease.value = parseInt(decrease.value) - 1
    decrease.style.background = '#000';
    decrease.style.color = '#fff';
    price.innerHTML = parseInt(price.innerHTML) - 1200;
    totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 1200;
    totalAmount.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(shipAmount.innerHTML)
  }
}

const inNumber = (decreament, price) => {
  var increase =  document.getElementById(decreament)
  var price=  document.getElementById(price)
    //console.log(ds.value);
  
    if (increase.value >= 5) {
      increase.value = 5;
      alert('max 5 number aloowed')
      increase.style.background = 'red';
      increase.style.color = '#fff';
      
    } else {
      increase.value = parseInt(increase.value) + 1;
      price.innerHTML = parseInt(price.innerHTML) + 1200;
      totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 1200;
      totalAmount.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(shipAmount.innerHTML)
    }
  }


  const coupnBtn = () =>{
    let totalCurAmount = parseInt(totalAmount.innerHTML);
    let code = document.getElementById('code')
    if (coupneCode.value === 'Osman') {
      let newTotalAmount = totalCurAmount - 100;
      totalAmount.innerHTML = newTotalAmount;
      code.innerHTML = 'code is valid'
    } else {
      code.innerHTML = 'Try agin! code is unvalid'
    }
  }



  // add to descriptions policy and others js

  const addToCartBtn = document.querySelectorAll('.addToCartBtn')
  const details = document.querySelector('#details') 

  addToCartBtn[0].addEventListener('click', function(e){
    let type = e.type;

    if (type === 'click') {
         details.innerHTML = `<ul>
         <li>Product type: Phone</li>
         <li>product name: I phone 12</li>
         <li>Color: Red</li>
         <li>Brand: Apple</li>
       </ul>`
      
   } 

  })

  addToCartBtn[1].addEventListener('click', function(e){
    let type = e.type;

    if (type === 'click') {
         details.innerHTML = `<div>
         <h3>Cash on delivery</h3>
         <ul>
           <li>click on order button</li>
           <li>Then select cash on delivery</li>
           <li>After finishing your shopping Click on ‘CONFIRM ORDER’.</li>
           <li>Give your SHIPPING ADDRESS, then Click on ‘PAY FROM Shopping Credit’.</li>
         </ul>

         <h3>How to Check Account Information</h3>
         <ul>
           <li>Log in to os-technology.com</li>
           <li>Click on your email address.</li>
           <li>Now you can see your Shopping credit and all previous transaction</li>
           </ul>
       </div>`
      
   } 

  })

  addToCartBtn[2].addEventListener('click', function(e){
    let type = e.type;

    if (type === 'click') {
         details.innerHTML = `<h3>Purchase Step</h3>

         <ul>
           <li>Select number of product you want to buy.</li>
           <li>Click on Buy Now button.</li>
           <li>If you are a new user, please click on Sign Up. Then sign up by providing the required information</li>
           <li>Use your user name & password if you are a registered customer.</li>
           <li>Choose your payment (Check out) method.</li>
           <li>Follow required instruction based on payment method.</li>
           <li>Follow required instruction based on payment method.</li>
           <li>Once sold, the product cannot be returned & replaced until it has a warranty.</li>
           <li>Please check your product at the time of delivery</li>
           <li>Disclaimer: Product color may slightly vary due to photography, lighting sources or your monitor settings.</li>
           <li>The product will deliver based on product availability. For further details Click here.</li>
           <li>Requested respected customers to refrain from buying excessive goods after being panicked. We are unable
              to entertain any bulk quantity during COVID-19. Delivery may delay due to COVID-19.</li>
         </ul>

         <h3>Payment methods</h3>
           <ul>
             <li>Cash on Delivery</li>
             <li>Mobile Payment: bKash, Nagad, Rocket</li>
             <li>Card - Visa, Master, Amex, Nexus, Online Banking</li>
             <li>Nexus Pay</li>
             <li>EMI</li>
           </ul>`
      
   } 

  })


  addToCartBtn[3].addEventListener('click', function(e){
    let type = e.type;

    if (type === 'click') {
         details.innerHTML = `
         <ul>
           <li>Please check your products in front of riders or courier service agents.</li>
           <li>Product will be replaced if it has any defect by its manufacturer.</li>
           <li>Customer needs to inform us within 24 hours from the date of delivery*.</li>
           <li>Products must be with the tags intact and in their original packaging, in an unwashed and undamaged condition.</li>
           <li>Replacement for products is subject to inspection and checking by OS team.</li>
           <li>Replacement cannot be possible if the product is burnt, damaged by short circuit, damaged due to neglect, improper usage, or broken by customer..</li>
           <li>Interwar and product of clearance sale cannot be replaced.</li>
           </ul>
       `
      
   } 

  })

  