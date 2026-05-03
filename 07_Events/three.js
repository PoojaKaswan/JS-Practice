<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>chai aur Javascript</h1>
    <button id="stop">Stop</button>
    <button id="start">Start</button>
</body>
<script>

    const start = function(){
        console.log("HI")
    }
    
    function sayHi(){
        console.log("Hi")
    }
    document.querySelector('#start').addEventListener('click', sayHi)

    const intervalId = setInterval(sayHi, 2000)

    document.querySelector('#stop').addEventListener('click', function(){
        clearInterval(intervalId)
    })
    
</script>
</html>
