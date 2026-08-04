function requestCategories() {
      fetchCall("menu.php", responseCategories);
      function responseCategories(data) {
              const nav = document.querySelector('.navigation');
          if(data.categories){
              const ul = document.createElement('ul')
              data.categories.forEach(cat => {
                const li = document.createElement('li')
                li.className = cat;
                li.textContent = cat;
                li.addEventListener('click', getCategoryProducts.bind(cat));
                ul.appendChild(li)
              });
              nav.append(ul);
          }
  
      }
}