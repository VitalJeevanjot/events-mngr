let cursor = []
cursor[0] = document.createElement("img");

cursor[0].src = "icons8-cursor-64.png";
cursor[0].style.top = 0;
cursor[0].style.left = 0;
cursor[0].style.zIndex = "9999"; // ensure the image is on top of other elements
cursor[0].style.position = "fixed";

// add the image to the document body
document.body.appendChild(cursor[0]);



let _i = 1;
let _total = 4;
let start_x = 0;
let start_y = 0
function v_DoCursor_Moving()
{
    if (_i <= _total) {
        let btn = document.getElementById("btn-" + _i);
        console.log(btn.getBoundingClientRect());
        let box = btn.getBoundingClientRect();
        let x = (box.left + box.right) / 2;
        let y = (box.top + box.bottom) / 2;




        let animation = cursor[0].animate(
            [
                // keyframes
                { transform: `translateY(${start_y}px) translateX(${start_x}px)` },
                { transform: `translateY(${y}px) translateX(${x}px)` },
            ],
            {
                // timing options
                duration: 800,
                iterations: 1,
                fill: "forwards",
                easing: "cubic-bezier(0.3, 0.4, 0.5, 1.0)"
            }
        );

        animation.onfinish = (event) => {
            console.log("Animation finished");
            console.log(event);
            start_x = x;
            start_y = y;
            _i++;
            v_DoCursor_Moving()
        }
    }
    
}
v_DoCursor_Moving()


function v_DoCursor_Clicks() { }
function v_DoOverlay_Highlights() { }
function v_DoOverlay_Confirmations() { }
function v_DoAudio_Playbacks() { }
function v_ChangeCursor_Style() { }











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

//let body = document.getElementsByTagName("body");
//body[0].style. = "none";