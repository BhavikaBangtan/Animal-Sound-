
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    animal=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/94HZyzPlx/,Anime');
}
function dance(){
    animal.classify(result)
}

