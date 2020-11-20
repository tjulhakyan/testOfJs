var element = document.getElementById("ho");

element.addEventListener('click', function (event) {
    element.innerHTML= "<div>Paragraph changed!</div>";
    element.id = "ape"
    element.classList.add("hallo");
});

var div = document.getElementsByClassName('hallo')[0];
 div.addEventListener('click', function (event) {
     alert('Hooooi!');
 });
