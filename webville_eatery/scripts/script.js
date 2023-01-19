$(document).ready(function(){
let v = false;
    $("#vegOn").click(function(){
        if(v == false) {
            $f =  $("li.fish").parent().parent().detach();
            $("li.hamburger").replaceWith("<li class='portobello veg_green'><em>Portobello Mushrooms</em></li>");
            $("li.meat").after("<li class='tofu veg_green'><em>Tofu</em></li>");
            $m = $(".meat").detach()
                v = true;
        }
    });

    $("#restoreMe").click(function(){
        if( v == true) {
             $("ul.menu_entrees li").first().before($f);
             $("li.portobello").replaceWith("<li class='hamburger'>hamburger</li>");
             $m.each(function() {
                $("li.tofu").replaceWith(this);
             })
                v = false;
        }
    });   
});