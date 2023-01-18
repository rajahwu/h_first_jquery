$(document).ready(() => {
    const guessBox$ = $(".guess-box");
    
    randomDiscountBox();
    guessBox$.click(checkForCode);
    
    
    function checkForCode () {
        if($.contains(this, document.getElementById("has_discount"))) {
            $(this).append(getDiscount()).addClass("discount");
        } else {
            $(this).append("<p>Sorry, no discount at this time!</p>").addClass("no_discount");
        }
        guessBox$.removeClass("guess-box");
        guessBox$.each(function() {
            $(this).unbind('click');
        })
    }
    
    function randomDiscountBox() {
        const discountedBox =  guessBox$[getRandom(guessBox$.length)]
        const hasDiscount = document.createElement('span');
        hasDiscount.setAttribute("id", "has_discount");
        discountedBox.append(hasDiscount);
        return discountedBox;
    } 
    
    function getDiscount() {
        const discount = getRandom(100);
        const discount_msg = `<p>Your discount is ${discount}%</p>`;
        return discount_msg;
    }

    function getRandom(num) {
        return Math.floor(Math.random() * num);
    }
});