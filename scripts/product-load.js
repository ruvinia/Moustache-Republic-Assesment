$(document).ready(function() {
           
    // Reading the json file
    $.getJSON('scripts/product.json', function(product) {     
       var productTitle = product.title;
       $('.product-title').html(productTitle);                  

       let productPrice = parseFloat (product.price);
       $('.product-price').text(productPrice); 
       $('.product-price').addClass('visible');

       var productDescription = product.description;
       $('.product-description').text(productDescription);

       var productImage = product.imageURL;
       $('.product-image img').attr("src", productImage);
       $('.product-image img').attr("alt", productTitle);

       $('.small').text(product["sizeOptions"][0].label);
       $('.medium').text(product["sizeOptions"][1].label);
       $('.large').text(product["sizeOptions"][2].label);
    });

    // Selecting the product size
    $('.product-size-container li').click(function(){
        $('.product-size-container li').removeClass('selected');
        $(this).addClass('selected');
        var selectedProductSize = $('.product-size-container li.selected').text();
        $('.selected-size').text(selectedProductSize);
        $('.error-msg').removeClass('visible');
    });

    // Feeding products to minicart
    $('.tocart').click(function() { 
        if ( !$('.selected-size').text().length == 0 ) {            
            $('.cart-summary').text(parseInt($(".cart-summary").text()) + 1);               
            $(".product-row").append($("main .product-container").clone());
            $('.cart-container').addClass('visible');
            $('.mini-cart-wrapper').addClass('active');
            $('.cart-container').find(".product-description, .asterick, .product-size-container, .error-msg, .tocart").remove();
        } else {
            $('.error-msg').addClass('visible');
        }
    });  

    // Toggling the minicart
    $('.mini-cart-wrapper').click(function() { 
        if ( !$('.cart-summary').text().length == 0 ) {            
            $('.cart-container').toggleClass('visible');
            $('.mini-cart-wrapper').toggleClass('active');
        } 
    });  
    
});