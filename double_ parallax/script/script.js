
    function parralax() {
        var prlxLayer1 = document.getElementById('contLayer1');
        prlxLayer1.style.top = -(window.pageYOffset/4)+'px';

        var prlxLayer2 = document.getElementById('contLayer2');
        prlxLayer2.style.top = -(window.pageYOffset/2)+'px';

        var prlxLayer3 = document.getElementById('contLayer3');
        prlxLayer3.style.top = -(window.pageYOffset)+'px';

    }

    window.addEventListener("scroll", parralax, false);

