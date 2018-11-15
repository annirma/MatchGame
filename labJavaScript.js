$('form').submit(function (e) {
    let textInput = $('#textId');
    let colorInput = $('#colorId');
    let newRow = $('<tr>');
    let textCell = $('<td>');
    let colorCell = $('<td>');

    textCell.text(textInput.val());
    colorCell.text(colorInput.val());
    colorCell.css('background-color', colorInput.val());

    newRow.append(textCell);
    newRow.append(colorCell);
    $('tbody').append(newRow);

    e.preventDefault();
});

/*
let e1 = document.queryselector("main div");
console.log(e1)

e1.addeventlistener("click", function (event) {
    settimeout(function () {
        console.log(event);
        let newdiv = document.createelement("div");
        e1.appendchild(newdiv);
        newdiv.innerhtml = "<strong>very important!</strong>";
    }, 1000);
    
});

alert("before?");


window.alert = function (message) {
    console.log("alert!! " + message);
};

alert("after!");
*/