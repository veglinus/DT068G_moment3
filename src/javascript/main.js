function checkmark() { // function to show #reoccuringbox in boka.html
    var checkbox = document.getElementById("reoccuring");
    var box = document.getElementById("reoccuringbox");

    if (checkbox.checked) {
        box.style.display = "initial";
    } else {
        box.style.display = "none";
    }
}

function addDate() { // function to add another date
    var boxy = document.getElementById("dates");

    var div = document.createElement("div");

    var newinput = document.createElement("input");
    newinput.setAttribute("type", "datetime-local");
    div.appendChild(newinput);

    var btn = document.createElement("button");
    var btntext = document.createTextNode("Ta bort");
    btn.appendChild(btntext);
    div.appendChild(btn);

    boxy.appendChild(div);
}


if (window.location.pathname == "/boka.html" || window.location.pathname == "/information.html") {
    document.getElementById("ungdom").addEventListener('change', function (event) {

        var value = document.getElementById("ungdom").value;
        if (value === "ungdom") {
            document.getElementById("ungdomstaxa").style.display = "table-row-group";
            document.getElementById("vuxentaxa").style.display = "none";
        }
    });
    
    document.getElementById("vuxen").addEventListener('change', function (event) {
    
        var value = document.getElementById("vuxen").value;
        if (value === "vuxen") {
        document.getElementById("ungdomstaxa").style.display = "none";
        document.getElementById("vuxentaxa").style.display = "table-row-group";
        }
    });
}