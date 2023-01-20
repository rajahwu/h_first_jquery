
$(document).ready(function(){

    let repeat = true;
    const FREQ = 10000;

    function startAJAXcalls() {
        if(repeat) {
            setTimeout(function() {
                getXMLRacers();
                startAJAXcalls();
            }, FREQ)
        }
    }

    $("#btnStop").click(function(){
        repeat = false;
        $("#freq").text("Updates passed");
    })

    $("btnStart").click(function(){
        repeat = true;
        startAJAXcalls();
        showFrequency();
    })
        getXMLRacers();
        startAJAXcalls();

    function getXMLRacers() {
        $.ajax({
            url: "finishers.xml",
            cache: false,
            dataType: "xml",
            success: function(xml) {
                $("#finishers_m").empty();
                $("#finishers_f").empty();
                $("#finishers_all").empty();
                $(xml).find("runner").each(function() {
                    const info = `<li>Name: ${$(this).find("fname").text()} ${$(this).find("lname").text()} Time: ${$(this).find("time").text()}</li>`;
                    console.log(info);
                    if($(this).find("gender").text() == "m") {
                        $("#finishers_m").append(info);
                    } else if ($(this).find("gender").text() == "f") {
                        $("#finishers_f").append(info);
                    } else {
                        $("#finishers_all").append(info);
                    }
                });
                showFrequency();
                getTimeAjax();
            }
        });
    }

    function showFrequency() {
        $("#freq").text(`Page refresshes every ${FREQ/1000} second(s).`);
    }

    function getTimeAjax() {
        $("#updatedTime").load("time.php")
    }

});
