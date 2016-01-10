$( document ).ready(function() {
    console.log( "ready!" );


    var scrollingTime = 1000;
    var currentSlideIndex = 0;



    var $box = $(".wrapVisible");
    var $slaids = $box.find('.wrapper');
    var $slaid = $slaids.find('.my4Slider');

    var numberOfSlaids = $slaid.length;


    var first3Slaids = $slaids.find('.my4Slider:lt(3)').clone();
    var lastSlaid = $slaids.find('.my4Slider:last-child').clone();

    $slaids.append(first3Slaids);
    $slaids.prepend(lastSlaid);

    $('.left').on('click', moveLeft);
    $('.right').on('click', moveRight);



    function moveLeft() {
        $slaids.animate({
            'margin-left': '+=256px'
        }, 800, goToLastwhenStart)

    }

    function moveRight() {
        $slaids.animate({
            'margin-left': '-=256px'
        }, 800, backToStartWhenFinish)
    }

    function goToLastwhenStart() {
        currentSlideIndex--;
        if(currentSlideIndex === -1) {
            currentSlideIndex = numberOfSlaids-1;
            $slaids.css('margin-left', -256*numberOfSlaids+'px');
        }
    }

    function backToStartWhenFinish() {
        currentSlideIndex++;

        if(currentSlideIndex === numberOfSlaids) {
            currentSlideIndex = 0;
            $slaids.css('margin-left', 0);
        }

    }


});