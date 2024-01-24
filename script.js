function playnote(note , duration){
    const melodyoutput = document.getElementById("melodyoutput");
    melodyoutput.innerHTML +=`play ${note}`;
     
    setTimeout( () =>{
        melodyoutput.innerHTML +=`sleep ${duration}s`;

    }, duration *1000);

    

}
 playnote(72 , 0.25);

 playnote(72 , 0.25);

 playnote(76 , 0.25);

 playnote(76 , 0.25);

 playnote(72 , 0.25);

 playnote(83 , 0.25);

 playnote(74 , 0.25);

 playnote(83 , 0.25);

 playnote(79 , 0);

 function attchMp3(){

    const audioPlayer = document.querySelector("audio");
    audioPlayer.src =""
 }
 attchMp3();