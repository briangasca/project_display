// 1: TSLA
// 2: AAPL
// 3: META
// 4: KO
// 5: GOOGL

function changeImage(){
    var choice = document.getElementById('choice').value;
    console.log(choice);
    if (choice == "2"){
        document.getElementById('LR').src="static/images/keras_tsla.png"
    }
}