let box = document.getElementById("box");
box.style.borderRadius = "20px";

let array = document.querySelectorAll("input");
for (let index = 0; index < array.length; index++) {
    let element = array[index];
    element.addEventListener("blur", function () {
        if (element.id == "TopLeft") {
            box.style.borderTopLeftRadius = element.value;
        }
        else if (element.id == "TopRight") {
            box.style.borderTopRightRadius = element.value;
        }
        else if (element.id == "BottomRight") {
            box.style.borderBottomRightRadius = element.value;
        }
        else {
            box.style.borderBottomLeftRadius = element.value;
        }
        document.getElementById('myTooltip').innerText = "Copy to clipboard";
    });
}
box.addEventListener("click", function () {
    let TopLeft = box.style.borderTopLeftRadius;
    let TopRight = box.style.borderTopRightRadius;
    let BottomRight = box.style.borderBottomRightRadius;
    let BottomLeft = box.style.borderBottomLeftRadius;
    let text = `border-top-left-radius: ${TopLeft};\nborder-top-right-radius: ${TopRight};\nborder-bottom-right-radius: ${BottomRight};\nborder-bottom-left-radius: ${BottomLeft};`;
    navigator.clipboard.writeText(text);
    document.getElementById('myTooltip').innerText = "Copied!";
    document.getElementById('p').innerText = text;
});