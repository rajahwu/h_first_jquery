
$(document).ready(function(){

  let int1, int2, int3;
  goLightning();
  window.onblur = stopLighting;
  window.onfocus = goLightning;
  
  const clicks = { headclix: 0, eyesclix: 0, noseclick: 0, mouthclick: 0 };
       
  $("#head").click(function(){
      slideHeadLeft(clicks, "headclix", $(this));
  })
  $("#eyes").click(function(){
     slideHeadLeft(clicks, "eyeclix", $(this));
  })
  $("#nose").click(function(){
     slideHeadLeft(clicks, "noseclick", $(this));
  })
  $("#mouth").click(function(){
    slideHeadLeft(clicks, "mouthclick", $(this));
  })

  const m = 10;
  $("#btnRandom").click(randomize);
  $("#btnReset").click(reset);

  function randomize() {
    $(".face").each(function() {
     const key = `${this.id}clix`;
     clicks[key] = getRandom(m);
     slideHeadLeft(clicks, key, $(this));
    })
  }

  function reset() {
    $(".face").each(function() {
      $(this).animate({left: "0px"},500);
    })
    Object.keys(clicks).forEach(key => clicks[key] = 0);
    console.log(clicks);
  }

  function getRandom(num) {
    return Math.floor(Math.random() * num);
  }

  function slideHeadLeft(obj, key, $wraper) {
    obj[key] < 9 ? obj[key] += 1 : obj[key] = 0;
    $wraper.animate({left: -(obj[key] * 367)});
  }

  function goLightning() {
    int1 = setInterval(lightning_one,4000);
    int2 = setInterval(lightning_two,5000);
    int3 = setInterval(lightning_three, 7000);
  }

  function stopLighting() {
    clearInterval(int1);
    clearInterval(int2);
    clearInterval(int3);
  }

  function lightning_one() {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
  }

  function lightning_two() {
    $("#container #lightning2").fadeIn(250).fadeOut(250);
  }

  function lightning_three() {
    $("#container #lightning3").fadeIn(250).fadeOut(250);
  }

})

