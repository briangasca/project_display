function changeImage(){
    var choice = document.getElementById('choice').value;
    console.log(choice);
    if (choice == "2"){
        document.getElementById('LR').src="static/images/keras_tsla.png"
    }
}