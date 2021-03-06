    var pos = 0;
    const pacArray = [
        ['images/PacMan1.png', 'images/PacMan2.png'],
        ['images/PacMan3.png', 'images/PacMan4.png']
    ];
    var direction = 0;
    var focus = 0;

    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth);
        img.src = pacArray[direction][focus];
        if (direction) {
            pos -= 20;
            img.style.left = pos + "px";
        } else {
            pos += 20;
            img.style.left = pos + 'px';
        }
        // Use setTimeout to call Run every 200 millesecs
    }
    function checkPageBounds(direction, imgWidth) {
        // Complete this to reverse direction on hitting page bounds
        // 
        let img = document.getElementById('PacMan');
        let posString = img.style.left;
        let posSplit = posString.split('px');
        let posNum = Number(posSplit[0]);
        if (posNum >= window.innerWidth-200){
            direction++;
        }
        if (posNum === 0 && direction === 1){
            direction = 0;
        }
        console.log(direction);
        return direction;
    }
   setInterval(Run, 200);
