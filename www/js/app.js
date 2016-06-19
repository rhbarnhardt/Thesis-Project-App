document. addEventListener("deviceready", init, false);

function init(){

var playing = false;
//var progressBar = document.getElementById("bar");    
//CHAPTER ONE
streamOne = new Audio("audio/chapterOne.mp3", onSuccess, onError);

document.querySelector("#chapterOne").addEventListener("touchstart", function(){    

    if (playing){
        playing = false;
        streamOne.pause();
document.getElementById("chapterOne").innerHTML = "Pause Chapter";
        $('#hideOne').hide();

    } else {
        playing = true;
        streamOne.play();
document.getElementById("chapterOne").innerHTML = "Play Chapter";
        $('#hideOne').show();
        }
});
    $('streamOne').on('timeupdate', function() {
           $('.progress').progressbar("value", this.currentTime / this.duration);
           });
    
progressBar.addEventListener("tap",seek);
    function seek(e){
        var percent = e.offsetX / this.offsetWidth;
        streamOne.currentTime = percent * streamOne.duration;
       $('#bar').value = percent / 100;
        
    }
 
//CHAPTER TWO
streamTwo = new Audio("audio/chapterTwo.mp3", onSuccess, onError); 

document.querySelector("#chapterTwo").addEventListener("touchstart", function(){    

    if (playing){
        playing = false;
        streamTwo.pause();
document.getElementById("chapterTwo").innerHTML = "Pause Chapter";
        $('#hideTwo').hide();
    } else {
        playing = true;
        streamTwo.play();
        streamTwo.currentTime = 0;
document.getElementById("chapterTwo").innerHTML = "Play Chapter";
    $('#hideTwo').show();
        }
});
 
//CHAPTER THREE
streamThree = new Audio("audio/chapterThree.mp3", onSuccess, onError); 

document.querySelector("#chapterThree").addEventListener("touchstart", function(){    

    if (playing){
        playing = false;
        streamThree.pause();
document.getElementById("chapterThree").innerHTML = "Pause Chapter";
        $('#hideThree').hide();
    } else {
        playing = true;
        streamThree.play();
document.getElementById("chapterThree").innerHTML = "Play Chapter";
$('#hideThree').show();     
        }
});
    
    
function onSuccess() {
    console.log("playAudio():Audio Success");
}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
    'message: ' + error.message + '\n');
}

}



