let btn1 = document.getElementById("btn-1");
console.log(btn1.getBoundingClientRect())
let box1 = btn1.getBoundingClientRect()
let x = (box1.left + box1.right) / 2 + 'px'
let y = (box1.top + box1.bottom) / 2 + 'px'

let btn2 = document.getElementById("btn-2");
console.log(btn2.getBoundingClientRect())

const img = document.createElement("img");

img.src = "icons8-cursor-64.png";
img.style.top = 0;
img.style.left = 0;
img.style.zIndex = "9999"; // ensure the image is on top of other elements
img.style.position = "fixed";

// add the image to the document body
document.body.appendChild(img);

img.animate(
    [
        // keyframes
        { transform: "translateY(0px) translateX(0px)" },
        { transform: `translateY(${y}) translateX(${x})` },
    ],
    {
        // timing options
        duration: 1000,
        iterations: 1,
        fill: "forwards",
        easing: "ease-out"
    }
);



/*const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;

console.log(url)*/

/*fetch(request)
    .then((response) => response.blob())
    .then((blob) => {
        let src = URL.createObjectURL(blob);
        console.log(src)
    });*/