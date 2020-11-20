var element = document.getElementById("ho");

element.addEventListener('click', function (event) {
    element.innerHTML= "<div class='hallo'>Paragraph changed!</div>";
});

var div = document.getElementsByClassName('hallo')[0];

 div.addEventListener('click', function (event) {
     alert('Hooooi!');
 });
