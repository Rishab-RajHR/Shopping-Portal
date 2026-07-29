document.addEventListener("DOMContentLoaded", requestCategories);
document.addEventListener("DOMContentLoaded", requestBanners);
function requestCategories() {
    fetch("http://localhost/ShoppingCart/user/backend/menu.php", {
         method: "GET",
    })
       .then((res) => res.json())
       .then((data) => {
          //  console.log(data);
          const nav = document.querySelector('.navigation')
          if(data.categories){
              const ul = document.createElement('ul')
              data.categories.forEach(cat => {
                const li = document.createElement('li')
                li.className = cat;
                li.textContent = cat;
                li.addEventListener('click', getCategoryProducts)
                ul.appendChild(li)
              });
              nav.append(ul);
          }
       })
       .catch((err) => console.log(err))
}

function getCategoryProducts() {
    console.log("Category Clicked");
}

function requestBanners() {
    fetch("http://localhost/ShoppingCart/user/backend/banner.php", {
         method: "GET",
    })
       .then((res) => res.json())
       .then((data) => {
        //    console.log(data);
           if(data.banners){
              const banners = data.banners
              banners.forEach(banner=>{
                 const slide = document.createElement('div')
                 slide.className = "swiper-slide";
                 slide.style.backgroundImage = `url("http://localhost/ShoppingCart/${banner.image}")`;
                 slide.style.height = "45vh";
                 slide.style.backgroundSize = "cover";
                 const swipeWrapper = document.querySelector(".swiper-wrapper");
                  swipeWrapper.append(slide);
              });
              callCarousal();
           }
       })
       .catch((err) => console.log(err))
}

function callCarousal(){
      const swiper = new Swiper('.swiper', {
          // Optional paramters
          loop: true,

        //   If we need pagination
        pagination: {
              el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });
}
