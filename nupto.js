var Numpto = {};

Numpto.init = function () {
    var songs, i, bindFn;

    songs = document.getElementsByClassName('song');

    bindFn = function (event) {
        var i, elem;
        for (i = 0; i < event.target.childNodes.length; i++) {
            elem = event.target.childNodes[i];
            console.log(elem);
            console.log(elem.className);
            if (elem.className === 'hider') {
                elem.setAttribute('class', 'shower');
            } else if (elem.className === 'shower') {
                elem.setAttribute('class', 'hider');
            }
        }
    };

    for (i = 0; i < songs.length; i++) {
        songs[i].onclick=bindFn;
    }

};

Numpto.init();


