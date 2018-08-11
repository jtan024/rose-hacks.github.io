var canvas = document.getElementById('flowers'),
    ctx = canvas.getContext('2d'),
    ww = canvas.width = window.innerWidth,
    wh = canvas.height = window.innerHeight,
    colors = ["#D94A64", "#06ADBF", "#A0D94A", "#F2884B", "#F2C84B"],
    flowers = [];

ctx.lineWidth = 1;

var createFlower = function () {
    const containerSize = 0.30;

    let xPosLeftMax = window.innerWidth * containerSize;
    let xPosLeft = (Math.random() * xPosLeftMax);

    let xPosRightMax = window.innerWidth;
    let xPosRightMin = window.innerWidth - xPosLeftMax;
    let xPosRight = (Math.random() * (xPosRightMax - xPosRightMin)) + (xPosRightMin);
    console.log(xPosRightMin, xPosRightMax);
    let chance = Math.round(Math.random());
    let xPos = (chance === 0) ? xPosLeft : xPosRight;
    console.log(chance, xPos)

    flowers.push({
        speed: Math.random(),
        scaleSpeed: Math.random() / 2 + .05,
        color: colors[Math.floor(Math.random() * 5)],
        position: {
            x: xPos,
            y: Math.round(Math.random() * wh)
        },
        size: 0,
        maxSize: Math.random() * 80 + 40,
        born: false
    });

};

var lastTime = 0;

function draw(a) {

    if (a >= lastTime + 1000) {
        createFlower();
        lastTime = a;
    }

    //Clear the scene
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0, j = flowers.length; i < j; i++) {
        flower = flowers[i];
        var count = 6;
        ctx.beginPath();

        ctx.strokeStyle = flower.color;

        //If flower is not visible, remove it
        if (flower.size <= 0 && flower.born) {
            flowers.splice(i, 1);
            i--;
            j--;
        } else {

            ctx.save();
            ctx.translate(flower.position.x, flower.position.y);
            ctx.rotate(a / (1000 / flower.speed + 200));

            for (var angle = (Math.PI * 2) / count; angle < Math.PI * 2; angle += (Math.PI * 2) / count) {
                var x = Math.cos(angle) * flower.size;
                var y = Math.sin(angle) * flower.size;
                ctx.moveTo(x + flower.size, y);
                ctx.arc(x, y, flower.size, 0, Math.PI * 2);
            }

            if (!flower.born) {
                flower.size += flower.scaleSpeed;
            } else {
                flower.size -= flower.scaleSpeed;
            }

            //Check if flower is growing or reducing
            if (flower.size >= flower.maxSize) {
                flower.born = true;
            }

            ctx.shadowColor = colors[1];
            ctx.stroke();
            ctx.closePath();
            ctx.translate(-flower.position.x, -flower.position.y);
            ctx.restore();

        }

    }

}

var render = function (a) {
    requestAnimationFrame(render);
    draw(a);
}

render();