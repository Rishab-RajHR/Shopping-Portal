document.addEventListener("DOMContentLoaded", requestCategories);
document.addEventListener("DOMContentLoaded", requestBanners);
document.addEventListener("DOMContentLoaded", requestFeatured);
document.addEventListener("DOMContentLoaded", requestNewArrivals);

function requestCategories() {
      fetchCall("menu.php", requestCategories);
      function responseCategories(data) {
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
  
      }
}
      


function getCategoryProducts() {
    console.log("Category Clicked");
}

function requestBanners() {
     fetchCall("banner.php", responseBanner)
     function responseBanner(data) {
              if(data.banners){
              const banners = data.banners
              banners.forEach(banner=>{
                 const slide = document.createElement('div')
                 slide.className = "swiper-slide";
                 slide.style.backgroundImage = `url("http://localhost/ShoppingCart/${banner.image}")`;
                 slide.style.height = "45vh";
                 slide.style.backgroundSize = "cover";
                 const h3 = document.createElement('h3');
                 h3.textContent = banner.name;
                 const p = document.createElement('p');
                 p.textContent = banner.description;
                 const button = document.createElement('button');
                 button.textContent = 'Shop Now';
                 slide.appendChild(h3);
                 slide.appendChild(p);
                 slide.appendChild(button);

                 const swipeWrapper = document.querySelector(".swiper-wrapper");
                  swipeWrapper.append(slide);
              });
              callCarousal();
           }
     }

 
}

// Request for featured products - EventListener

function requestFeatured() {
     fetchCall("featured.php", responseFeatured)
     function responseFeatured(data) {
           const featured = data.featured;
           const featuredSection = document.querySelector(".featured-products");
           populateCatalogue(featured, featuredSection);
     }
}

// End of Request for Featured products - eventlistener ends


// Start Request for new Arrival - EventListener

function requestNewArrivals() {
     fetchCall("newArrivals.php", responseNewArrivals)
     function  responseNewArrivals(data) {
        const newArrivals = data.newArrivals;
        const newArrivalSection = document.querySelector(".new-arrivals");
        populateCatalogue(newArrivals, newArrivalSection);
     }

}

// End of Request for new Arrival - EventListener


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


function populateCatalogue(products, catalogueParent){
      if (products) {
            //  const featuredSection = document.querySelector(".featured-products");
             const catalogue = document.createElement("div");
             catalogue.className = "catalogue";

             products.forEach((prod) => {
                const card = document.createElement('div');
                card.className = 'card';
                const imgDiv = document.createElement('div');
                imgDiv.className ='card-img';
                const descDiv = document.createElement('div');
                descDiv.className = 'card-description';
                card.appendChild(imgDiv);
                card.appendChild(descDiv);
                const img = document.createElement('img');
                img.src = `http://localhost/ShoppingCart/${prod.image}`;
                imgDiv.appendChild(img)
                const nameP = document.createElement('p');
                nameP.className='product-name';
                nameP.textContent = prod.name;
                const priceP = document.createElement('p');
                priceP.className = 'product-price';
                nameP.textContent = `$${prod.price}`;
                descDiv.appendChild(nameP);
                descDiv.appendChild(priceP);
                catalogue.appendChild(card);
             });

             catalogueParent.appendChild(catalogue);
        }
}

// Fetch request refactoring

function fetchCall(resource, callBack, method = "GET") {
      const url = "http://localhost/ShoppingCart/user/backend/";
      fetch(url + resource, {
         method: method,
      })
      .then((res) => res.json())
      .then((data) => {
        callBack(data);
        // ....
        // handleFetchResponse(data)
      })
      .catch((err) => console.log(err));
}