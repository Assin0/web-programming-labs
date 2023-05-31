function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = "Дата и время для русской локали " + today.toLocaleString('ru-RU');

    let out1 = document.getElementById('current-date1');
    let today1 = new Date();
    out1.innerHTML = "Дата и время для арабской локали " + today1.toLocaleString('ar-AA');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = "Дата и время для белорусской локали " + today2.toLocaleString('be-BY');

    let out3 = document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = "Дата и время для болгарской локали " + today3.toLocaleString('bg-BG');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = "Дата и время для испанской локали " + today4.toLocaleString('ca-ES');

    let out5 = document.getElementById('current-date5');
    let today5 = new Date();
    out5.innerHTML = "Дата и время для чешской локали " + today5.toLocaleString('cs-CZ');
}