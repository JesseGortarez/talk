$(function () {
    'use strict';

    impress().init();

    $('#boat-animation *, #l4b *, #transitionable-properties *, #intro *').css('animation-play-state', 'paused');
    $('#intro').click(function(){
        $('#intro *').css('animation-play-state', 'running');
    });
    $('#l4b *').click(function(){
        $('#l4b *').css('animation-play-state', 'running');
    });
    $('#transitionable-properties *').click(function(){
        $('#transitionable-properties *').css('animation-play-state', 'running');
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
                    pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'fill 5s 3.5s ease forwards, fade 1s 11.2s ease';
                    pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset ease-in-out';


                    pathsArray[i].style.transitionDuration = Math.floor(Math.random() * (5000 - 2000 + 1000)) + 2000;
                    pathsArray[i].style.transitionDelay = Math.floor(Math.random() * (2500 - 800 + 1000)) + 800;
                    pathsArray[i].style.strokeDashoffset = '0';
                }
                else if (animationName == "fills") {
                    pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'fills 3s 2s ease forwards, fade 1s 11.2s ease';
                    pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset ease-in-out';


                    pathsArray[i].style.transitionDuration = Math.floor(Math.random() * (4500 - 1000 + 1000)) + 1000;
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
        setInterval(function(){
            runAnimation('everything-is-animated', 'fill');
        }, 12000);
    });

});
