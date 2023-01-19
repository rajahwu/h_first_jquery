
$(document).ready(function(){
    
    const clicks = { headclix: 0, eyeclix: 0, noseclick: 0, mouthclick: 0 };
        lightning_one(4000);
        lightning_two(5000);
        lightning_three(7000);

    $("#head").click(function(){
        clicks.headclix < 9 ? clicks.headclix += 1 : clicks.headclix = 0;
        $(this).animate({left: -(clicks.headclix * 367)})
    })
    $("#eyes").click(function(){
        clicks.eyeclix < 9 ? clicks.eyeclix += 1 : clicks.eyeclix = 0;
        $(this).animate({left: -(clicks.eyeclix * 367)})
    })
    $("#nose").click(function(){
        clicks.noseclick < 9 ? clicks.noseclick += 1 : clicks.noseclick = 0;
        $(this).animate({left: -(clicks.noseclick * 367)})
    })
    $("#mouth").click(function(){
        clicks.mouthclick < 9 ? clicks.mouthclick += 1 : clicks.mouthclick = 0;
        $(this).animate({left: -(clicks.mouthclick * 367)})
    })

  function lightning_one(t) {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    return setTimeout(lightning_one, t)
  }

  function lightning_two(t) {
    $("#container #lightning2").fadeIn(250).fadeOut(250);
    return setTimeout(lightning_two, t)
  }

  function lightning_three(t) {
    $("#container #lightning3").fadeIn(250).fadeOut(250);
    return setTimeout(lightning_three, t)
  }
})

