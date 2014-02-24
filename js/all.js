$(function () {
    'use strict';

    impress().init();

    $('#boat-animation *, #l4b *, #big *').css('animation-play-state', 'paused');
    $('#l4b *').click(function(){
        $('#l4b *').css('animation-play-state', 'running');
    });
    $('#big *').click(function(){
        $('#big *').css('animation-play-state', 'running');
    });
    $('#boat-animation *').click(function(){
        $('#boat-animation *').css('animation-play-state', 'running');
    });

    $('div').click(function(){
        if ($(this).css('animation-play-state') == 'paused'){
            $(this).css('animation-play-state', 'running');
        }
        else {
            $(this).css('animation-play-state', 'paused');
        }
    });

// Face Animation
    var runAnimation = function(id, animation){
        var id = '#'+id;
        var animationName = animation;

        $(id).css('opacity', '0');
        if ($(id).hasClass('present')){
            $(id).css('opacity', '1');
            var pathsArray = [];

            $(id + ' path').each(function(){
                pathsArray.push(this);
            });

            for(var i = 0; i < pathsArray.length; i++) {
                pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'none';
                pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'none';
                var length = pathsArray[i].getTotalLength();
                pathsArray[i].style.strokeDasharray = length + ' ' + length;
                pathsArray[i].style.strokeDashoffset = length;
                pathsArray[i].style.strokeWidth = '1';
                pathsArray[i].getBoundingClientRect();

                if(animationName == "fill") {
                    pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'fill 3s 2s ease forwards, fade 1s 11.2s ease';
                    pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset ease-in-out';


                    pathsArray[i].style.transitionDuration = Math.floor(Math.random() * (4000 - 1000 + 1000)) + 1000;
                    pathsArray[i].style.transitionDelay = Math.floor(Math.random() * (2000 - 500 + 1000)) + 500;
                    pathsArray[i].style.strokeDashoffset = '0';
                }
                else if (animationName == "fills") {
                    pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'fills 3s 2s ease forwards, fade 1s 11.2s ease';
                    pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset ease-in-out';


                    pathsArray[i].style.transitionDuration = Math.floor(Math.random() * (4000 - 1000 + 1000)) + 1000;
                    pathsArray[i].style.transitionDelay = Math.floor(Math.random() * (2000 - 500 + 1000)) + 500;
                    pathsArray[i].style.strokeDashoffset = '0';
                }
            }
        }
    };
    $('#face, #everything-is-animated').css('opacity', '0');
    $('#face').click(function(){
        runAnimation('face', 'fills');
        setInterval(function(){
            runAnimation('face', 'fills');
        }, 12000);
    });
    $('#everything-is-animated').click(function(){
        runAnimation('everything-is-animated', 'fill');
    });

});
