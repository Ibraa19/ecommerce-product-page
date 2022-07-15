
var gallery = ["img/image-product-1.jpg",
"img/image-product-2.jpg", "img/image-product-3.jpg",
"img/image-product-4.jpg"];
var galleryCount = 0;

function next(){
    galleryCount++;
    if(galleryCount > 3){
        galleryCount = 0;
    }
    document.getElementById("display-img").src=gallery[galleryCount];
}

function prev(){
    galleryCount--;
    if(galleryCount < 0){
        galleryCount = 3;
    }
    document.getElementById("display-img").src=gallery[galleryCount];
}

imgs = document.getElementsByTagName('img');
var ultiCount = 0;
var menuState = 1;

function changeImg(img){
        newSrc = img.src; //this = reference to image that fired onclick
        focus = document.getElementById("display-img");
        focus.src = newSrc; //no quotes for variable references!
        for(let i = 5; i < 12; i++)
        {
            imgs[i].style.opacity = "100%";
            imgs[i].style.borderColor = "hsl(26, 100%, 100%)"
        }
        img.style.opacity = "50%";
        img.style.borderColor = "hsl(26, 100%, 42%)"
}

function addCount(){
    document.getElementById("item-count").innerHTML++
    ultiCount++;
}

function delCount(){
    var cmp = document.getElementById("item-count").innerHTML;
    if(cmp != 0){
        document.getElementById("item-count").innerHTML--
        ultiCount--;
    }
}

let toggle = 0;

function showCart(){
    if(toggle == 0){
        document.getElementById("cart").style.display="flex";
        toggle++;
    }else if(toggle == 1){
        document.getElementById("cart").style.display="none";
        toggle--;
    }
    
}

let contentCart = document.getElementById("product");
let myEle = document.createElement("div");
let eleBtn = document.createElement("div");

function addCart(){
    const count = document.getElementById("item-count").innerHTML;
    let oldCont = document.getElementById("empty");
    
    if(count > 0)
    {
        document.getElementById("numberItems").style.display = "flex";
        document.getElementById("numberItems").innerHTML = ultiCount;
        document.getElementsByClassName("cart")[0].style.height= "fit-content";
        myEle.setAttribute("class", "new-product")
        eleBtn.setAttribute("class", "add-btn check-btn")
        if(myEle.innerHTML == ''){
            contentCart.removeChild(oldCont);
            myEle.innerHTML = `<img src="img/image-product-1-thumbnail.jpg" alt="">
            <div class="new-desc">
                <span>Fall Limited Edition Sneakers</span>
                <div class="new-prices">
                    <span id="fixed-price">$125.00 x ${ultiCount}   </span>
                    <span id="total-price">$${125.00*ultiCount}</span>
                </div>
            </div>
            <img onclick="delItem()" src="img/icon-delete.svg" alt="">
        </div>`;
            eleBtn.innerHTML = `Checkout`
            contentCart.appendChild(myEle);
            contentCart.appendChild(eleBtn);
            console.log(1)
        }
        
        document.getElementById("fixed-price").innerHTML = `$125.00 x ${ultiCount}`
        document.getElementById("total-price").innerHTML = `$${125.00*ultiCount}`;
    }


    
}




function delItem(){
    document.getElementById("numberItems").style.display = "none";
        document.getElementById("numberItems").innerHTML = 0;
    contentCart.removeChild(myEle);
    contentCart.removeChild(eleBtn);
    let empty = document.createElement("span");
    empty.setAttribute("id", "empty")
    empty.innerHTML="Your cart is empty";
    contentCart.appendChild(empty)
    document.getElementsByClassName("cart")[0].style.height= "200px";
}

// Menu Toggle

let burger = document.getElementById('burger'),
	nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
    burger.style.position = "fixed";
    if(menuState == 1){
        burger.style.position = "fixed";
        menuState--;
    }else if(menuState == 0){
        burger.style.position = "absolute";
        menuState++;
    }
});


/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener(function(e) {
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(3500);
	}, 5500);
});
