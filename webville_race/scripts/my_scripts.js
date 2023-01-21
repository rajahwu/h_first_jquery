
$(document).ready(function(){
    
    let repeat = true;
    const FREQ = 10000;

    showFrequency();
    getDBRacers();
    startAJAXcalls();

    function showFrequency() {
        $("#freq").text(`Page refresshes every ${FREQ/1000} second(s).`);
    }

    function startAJAXcalls() {
        if(repeat) {
            setTimeout(function() {
                getDBRacers();
                startAJAXcalls();
            }, FREQ)
        }
    }

    function getTimeAjax() {
        // $("#updatedTime").load("time.php")
        const time = "";
        $.ajax({
            url: "time.php",
            cache: false,
            success: function(data) {
                $('#updatedTime').text(data)
            }
        })
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
      

    function getDBRacers(){
        $.getJSON("service.php?action=getRunners", function(json) {
            if(json.runners.length > 0) {
                $("#finishers_m").empty();
                $("#finishers_f").empty();
                $("#finishers_all").empty();

                $.each(json.runners, function() {
        const info = `<li>Name: ${this['fname']} ${this['lname']} Time: ${this['time']} </li>`
                    if(this['gender'] == 'm') {
                        $('#finishers_m').append(info)
                    } else if (this['gender'] == 'f') {
                        $("#finishers_f").append(info)
                    } else {
                        $("#finishers_all").append(info)
                    }});
            } 
        });
        getTimeAjax();
    }

    $("#addRunner").submit(function() {
        return false;
    })
       
    $("#btnSave").click(function() {
        const data = $("#addRunner :input").serializeArray();
        const $url = $("#addRunner").attr('action');
        console.log(data, $url)
        $.post($url, data, function(json){
            console.log(json)
            if(json.status == "fail") {
                alert(json.message)
            }
            if(json.status == "success") {
                alert(json.message);
                clearInputs();
            }
        }, "json");
    });

    function clearInputs() {
        $("#addRunner :input").each(function() {
            $(this).val('')
        });
    } 
  
    // function getXMLRacers() {
    //     $.ajax({
    //         url: "finishers.xml",
    //         cache: false,
    //         dataType: "xml",
    //         success: function(xml) {
    //             $("#finishers_m").empty();
    //             $("#finishers_f").empty();
    //             $("#finishers_all").empty();
    //             $(xml).find("runner").each(function() {
    //                 const info = `<li>Name: ${$(this).find("fname").text()} ${$(this).find("lname").text()} Time: ${$(this).find("time").text()}</li>`;
    //                 console.log(info);
    //                 if($(this).find("gender").text() == "m") {
    //                     $("#finishers_m").append(info);
    //                 } else if ($(this).find("gender").text() == "f") {
    //                     $("#finishers_f").append(info);
    //                 } else {
    //                     $("#finishers_all").append(info);
    //                 }
    //             });
    //             showFrequency();
    //             getTimeAjax();
    //         }
    //     });
    // }

});
