const http = require("http");

const server = http.createServer((req, res) => {
    const resBody = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery goes to th DOM-ville</title>
    <style>
        #change_me {
            position: absolute;
            top: 100px;
            left: 400px;
            font: 24px arial;
        }

        #move_up #move_down #color #disapper {
            padding: 5px;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>

<body>
    <button id="move_up">Move Up</button>
    <button id="move_down">Move Down</button>
    <button id="color">Change Color</button>
    <button id="disappear">Disappear/Re-appear</button>

    <div id="change_me">Make Me Do Stuff!</div>


    <script>
        $(document).ready(() => {
            
            const changeMeWith$ = $("#change_me");
            $("#move_up").click(() => {
                changeMeWith$.animate({ top: 30 }, 200)
            });

            $("#move_down").click(() => {
                changeMeWith$.animate({ top: 500 }, 2000)
            });

            $("#color").click(() => {
                changeMeWith$.css("color", "purple")

            });

            $("#disappear").click(() => {
                changeMeWith$.toggle("slow")
            });
        });
    </script>
</body>

</html>
    `
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(resBody);
    
})

const port = 5000;

server.listen(port, () => {console.log("listening on", port)});