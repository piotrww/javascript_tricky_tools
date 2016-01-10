$( document ).ready(function() {
    var a = 100;

    var myCanvas = $('canvas')[0];
    var ctx = myCanvas.getContext('2d');

    $(window).on('resize', resize);

    resize();
    update();

    function resize() {

        myCanvas.height = window.innerHeight; //dostosowanie do obecengo okna
        myCanvas.width = window.innerWidth;

        draw();
    }

    function draw() {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

        ctx.fillStyle = 'red';
        ctx.fillRect(100, a, 300, 20);

        ctx.fillStyle = 'white';
        ctx.fillRect(200, a*2, 400, 20);

        ctx.fillStyle = 'blue';
        ctx.fillRect(300, a*2.7, 500, 20);
    }

    function update() {
        draw();
        if (a < 200) {
            a++;
        }
        requestAnimationFrame(update);
    }
});