function addItem() {
    var inputElement = document.getElementById("input");
    var inputValue = inputElement.value;

    if (inputValue.trim() !== "") {
        var checklistField = document.getElementById("checklist");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "item"
        checkbox.value = inputValue;

        var label = document.createElement("label");
        label.appendChild(document.createTextNode(inputValue));
        checklistField.appendChild(checkbox);
        checklistField.appendChild(label);
        checklistField.appendChild(document.createElement("br"));

        inputElement.value = "";
    }
}

document.getElementById("input").addEventListener("keyup",function(event) {
    if (event.key == "Enter") {
        addItem();
    }
});