
$(document).ready(function(){

    getXMLRacers()
    
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
                    } else if ($(this).find("gender") == "f") {
                        $("#finishers_f").append(info);
                    } else {
                        $("#finishers_all").append(info);
                    }
                });
                getTime();
            }
        });
    }

	
	function getTime(){
        const a_p = "";
        const d = new Date();
        const curr_hour = d.getHours();
        
        (curr_hour < 12) ? a_p = "AM" : a_p = "PM";
        (curr_hour == 0) ? curr_hour = 12 : curr_hour = curr_hour;
        (curr_hour > 12) ? curr_hour = curr_hour - 12 : curr_hour = curr_hour;
        
        const curr_min = d.getMinutes().toString();
        const curr_sec = d.getSeconds().toString();
        if (curr_min.length == 1) { curr_min = "0" + curr_min; }
        if (curr_sec.length == 1) { curr_sec = "0" + curr_sec; } 
        
        $('#updatedTime').html(curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p );
    }
});
