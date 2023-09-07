// 1: TSLA
// 2: AAPL
// 3: META
// 4: KO
// 5: GOOGL

function changeImage(){
    let container = document.getElementById('container');
    let about_us = document.getElementById('about_us');

    about_us.style.display = 'none';
    container.style.display = 'none';
    container.classList.remove('fadeInDown');
    container.classList.add('fadeIn_reload');
    setTimeout(() => {
        container.style.display = 'block';
        about_us.style.display = 'block';
    }, 25)



    var choice = document.getElementById('choice').value;
    console.log(choice);
    if (choice == "1"){
        document.getElementById('LR').src="static/images/TSLA/tsla_lr.png";
        document.getElementById('keras').src="static/images/TSLA/keras_tsla.png";
    }
    if (choice == "2"){
        document.getElementById('LR').src='static/images/APPL/aapl_lr.png';
        document.getElementById('keras').src="static/images/APPL/keras_aapl.png";
    }
    if (choice == "3"){
        document.getElementById('LR').src='static/images/META/meta_lr.png';
        document.getElementById('keras').src="static/images/META/keras_meta.png";
    }
    if (choice == "4"){
        document.getElementById('LR').src='static/images/KO/ko_lr.png';
        document.getElementById('keras').src="static/images/KO/keras_ko.png";
    }
    if (choice == "5"){
        document.getElementById('LR').src='static/images/GOOGL/googl_lr.png';
        document.getElementById('keras').src="static/images/GOOGL/keras_googl.png";
    }
}