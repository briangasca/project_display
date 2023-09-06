// 1: TSLA
// 2: AAPL
// 3: META
// 4: KO
// 5: GOOGL

function changeImage(){
    let container = document.getElementById('container');
    container.style.display = 'none';
    container.classList.remove('fadeInDown');
    container.classList.add('fadeIn_reload');
    setTimeout(() => {
        container.style.display = 'block';
    }, 25)



    var choice = document.getElementById('choice').value;
    console.log(choice);
    if (choice == "1"){
        document.getElementById('LR').src="static/images/TSLA/lr_tsla.png";
        document.getElementById('keras').src="static/images/TSLA/keras_tsla.png";
    }
    if (choice == "2"){
        document.getElementById('LR').src='';
        document.getElementById('keras').src="static/images/APPL/keras_aapl.png";
    }
    if (choice == "3"){
        document.getElementById('keras').src="static/images/META/keras_meta.png";
    }
    if (choice == "4"){
        document.getElementById('keras').src="static/images/KO/keras_ko.png";
    }
    if (choice == "5"){
        document.getElementById('keras').src="static/images/GOOGL/keras_googl.png";
    }
}