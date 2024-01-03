// Event listener to listen for the HTML to fully load so that we can access all of it in the DOM in Javascript
document.addEventListener('DOMContentLoaded', function () {
    // Constants for the buttons, the SVG Object, and an array for colour palettes
        const btnCohort = document.getElementById("iterate");
        const btnColor = document.getElementById("recolor");
        const svgObject = document.getElementById('svg-obj');
        const palettes = [
            {shape: "black", text: "#FF1D25"},
            {shape: "#1397e7", text: "black"},
            {shape: "#b628b6", text: "#17bc2b"},
            {shape: "#e3ae28", text: "#88ecf2"},
            {shape: "#ffffff", text: "#30417b"},
            {shape: "#010349", text: "#fbf416"},
            {shape: "#eed9a2", text: "#74b43b"},
            {shape: "#ff3cb0", text: "#0f31d4"}
        ];
    // Set the current palette to 1 in the array, which is the same as the colours in the SVG file
        let currentPaletteNum = 1;
    // Event listener to listen for the SVG to finish loading before any of the following code runs and manipulates the SVG
        svgObject.addEventListener('load', function () {
    // Constant to grab the text elements
            const cohortNum = svgObject.contentDocument.getElementsByClassName('st0');
    // Constant to grab the shape element
            const fwdText = svgObject.contentDocument.querySelectorAll("g");
    // Event listeners for the button clicks
            btnCohort.addEventListener("click", iterateCohort);
            btnColor.addEventListener("click", recolorImg);
    // Function to iterate the cohort number forward:
    // Grabs the text content from the text element and replaces it with the next number
            function iterateCohort() {
                const currentCohort = parseInt(cohortNum[0].textContent);
                const newCohort = currentCohort + 1;
                cohortNum[0].textContent = newCohort;
            }
    // Function to change the colours on the shape elements:
    // Iterates through the array of colour palettes and applies those colours to the shapes
            function recolorImg() {
                const currentPalette = palettes[currentPaletteNum];
                fwdText.forEach(shape => {
                    shape.style.fill = currentPalette.shape;
                });
                cohortNum[0].style.fill = currentPalette.text;
                currentPaletteNum = (currentPaletteNum + 1) % palettes.length;
            }
        });
    });