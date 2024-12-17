window.onload = function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        lazyLoad:true,
        margin:3,
        responsiveClass:true,
        nav:true,
        autoplay:true,
        timeDelay:100,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    function show(){
        image = document.querySelector("img");
        image.classList.toggle('showoption')
    }
}
function cngimg(num){
    var smwtch2 = 'watch'+num+'.jpg';
    var wimgs = document.querySelector('.wimg')
    wimgs.setAttribute("src",smwtch2);
}

$('.gallery .btn1').click(function(){
    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.gallery .box').show(400)
    }else{
        $('.gallery .box').not('.'+filter).hide(200)
        $('.gallery .box').filter('.'+filter).show(200)
    }
})




// $(document).ready(function(){
    // $(this).toggleClass('fa-times');
    // $('.navbar').toggleClass('toggle-display');
    // });
        // $(window).on('scroll load',function(){
        // menu.classList.remove('fa-times')
        // nav.classList.remove('toggle-display')    
    // })
    // window.onload = function(){
        // $('.home_slide').owlCarousel({
            // item:1,
            // nav:true,
            // dots:false,
            // autoplay:true,
            // autoplayTimeout:8000
            // });    
            // }
            function toggle_menu(){
                let nav = document.querySelector(".navbar")
                let menu = document.querySelector(".menu")
                menu.classList.toggle("fa-times")
                nav.classList.toggle("toggle-display")   
                // 
                // $(window).scroll(function(){
                    // if ($(this).scrollTop() > 50) {
                        // $('.menu').addClass('toggle-display');
                    // } else {
                        // $('#dynamic').removeClass('toggle-display');
                    // }
                // });
                // window.addEventListener(onscroll,function(){
                    // menu.classList.remove("fa-times")
                    // nav.classList.remove("toggle-display")
                // } );
                }
                // 
// }) // Function to add the product to the cart in localStorage
function addToCart(productId) {
    const product = document.getElementById(productId);
    const image = product.querySelector('.images img').src;
    const title = product.querySelector('.discription h3').innerText;
    const price = product.querySelector('.discription .price').innerText;

    // Create a product object
    const productDetails = {
        image: image,
        title: title,
        price: price,
    };

    // Retrieve the current cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart
    cart.push(productDetails);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, you can display a message to the user
    alert(`${title} added to cart!`);
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        // Get the product ID from the button's data-product-id attribute
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
    });
});
