function requestNewArrivals() {
     fetchCall("newArrivals.php", responseNewArrivals)
     function  responseNewArrivals(data) {
        const newArrivals = data.newArrivals;
        const newArrivalSection = document.querySelector(".new-arrivals");
        populateCatalogue(newArrivals, newArrivalSection);
     }

}