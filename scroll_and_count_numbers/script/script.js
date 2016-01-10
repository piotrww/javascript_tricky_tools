$( document ).ready(function() {
    console.log('ready');

///Function start when scroll top is 500 or more.


   $(window).on('scroll', tryToCount);



    function tryToCount () {
        var $topOffset = $(window).scrollTop();
        var $myWindowValueStart = 90;

        if ($topOffset >= $myWindowValueStart) { // myAnimated == false - dzialaloby ale to zbedny zapis
            console.log('Already scrolled!');
            CountNumbersAfter();
            $(window).off('scroll', tryToCount);//wylaczenie tego co na starcie
        }
    }

    function CountNumbersAfter() {
        var myArr = [365,98,200,1756];

        for (var i=0;i<myArr.length;i++) {
            CountNumber(i,  myArr[i]);
            console.log(i);
        }
    }

    function CountNumber(index, numb) {
        var $myCounter =  $('.counter:eq('+ index +')');

        var times = 100;

        for(var i=0; i < times; i++) {
            setTimeout(count, i*20, numb, i);
        }

        function count(numb, i) {
            $myCounter.text(Math.floor(numb * i/times));
        }
    }



})