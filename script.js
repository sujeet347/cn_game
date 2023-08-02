try {
    var color = ["red", "blue", "yellow"];
    var shape = ["triangle", "circle", "square"];

    function changeColor() {
        const gamearea = document.getElementById("gameArea");
        const randomColor = color[Math.floor(Math.random() * color.length)];
        gamearea.style.backgroundColor = randomColor;

    }

    function changeShape() {
        const shapeElement = document.getElementById("shape");
        const randomshape = shape[Math.floor(math.random() * color.length)];
        shapeElement.classList.remove("triangle", "circle", "square");
        shapeElement.classList.add(randomshape);
    }
    changeColor();
    changeShape();


}
catch (error) {
    console.error("An error occurred:", error);
}
