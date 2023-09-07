// 1: TSLA
// 2: AAPL
// 3: META
// 4: KO
// 5: GOOGL
// 6 COST 7 GME 8 JPM 9 WMT 10 BTC

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
        document.getElementById("stock").innerHTML = "Stock: Tesla Motors";
        document.getElementById('LR').src="static/images/arima/lr_tsla.png";
        document.getElementById('keras').src="static/images/keras/keras_tsla.png";
    }
    if (choice == "2"){
        document.getElementById("stock").innerHTML = "Stock: Apple Inc.";
        document.getElementById('LR').src='static/images/arima/lr_aapl.png';
        document.getElementById('keras').src="static/images/keras/keras_aapl.png";
    }
    if (choice == "3"){
        document.getElementById("stock").innerHTML = "Stock: Meta (Facebook)";
        document.getElementById('LR').src='static/images/arima/lr_meta.png';
        document.getElementById('keras').src="static/images/keras/keras_meta.png";
    }
    if (choice == "4"){
        document.getElementById("stock").innerHTML = "Stock: Coca-Cola Company";
        document.getElementById('LR').src='static/images/arima/lr_ko.png';
        document.getElementById('keras').src="static/images/keras/keras_ko.png";
    }
    if (choice == "5"){
        document.getElementById("stock").innerHTML = "Stock: Google";
        document.getElementById('LR').src='static/images/arima/lr_googl.png';
        document.getElementById('keras').src="static/images/keras/keras_googl.png";
    }
    if (choice == "6"){
        document.getElementById("stock").innerHTML = "Stock: Costco";
        document.getElementById('LR').src='static/images/arima/lr_cost.png';
        document.getElementById('keras').src="static/images/keras/keras_cost.png";
    }
    if (choice == "7"){
        document.getElementById("stock").innerHTML = "Stock: Gamestop Inc.";
        document.getElementById('LR').src='static/images/arima/lr_gme.png';
        document.getElementById('keras').src="static/images/keras/keras_gme.png";
    }
    if (choice == "8"){
        document.getElementById("stock").innerHTML = "Stock: JP Morgan & Chase";
        document.getElementById('LR').src='static/images/arima/lr_jpm.png';
        document.getElementById('keras').src="static/images/keras/keras_jpm.png";
    }
    if (choice == "9"){
        document.getElementById("stock").innerHTML = "Stock: Walmart";
        document.getElementById('LR').src='static/images/arima/lr_wmt.png';
        document.getElementById('keras').src="static/images/keras/keras_wmt.png";
    }
    if (choice == "10"){
        document.getElementById("stock").innerHTML = "Stock: Bitcoin";
        document.getElementById('LR').src='static/images/arima/lr_btc.png';
        document.getElementById('keras').src="static/images/keras/keras_btc.png";
    }
}