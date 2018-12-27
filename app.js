//init canvas element
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

let time = 0;

function draw() {

    time++;

    //設定畫布尺寸(像素)
    canvas.width = 400;
    canvas.height = 400;

    //淺灰格線
//    (function backgroundLIne() {
//
//        let x = 0,
//            y = 0;
//
//        ctx.strokeStyle = "rgba(0,0,0,0.1)";
//        ctx.beginPath();
//
//        //垂直背景線
//        for (; x < 400; x += 50) {
//            ctx.moveTo(x, 0);
//            ctx.lineTo(x, 400);
//            ctx.fillText(x, x + 2, 10);
//        }
//
//        //水平背景線
//        for (; y < 400; y += 50) {
//            ctx.moveTo(0, y);
//            ctx.lineTo(400, y);
//            ctx.fillText(y, 2, y);
//        }
//
//        ctx.stroke();
//    })();

    //房子
    (function house() {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        //地面
        ctx.moveTo(25, 350);
        ctx.lineTo(375, 350);
        ctx.stroke();


        //右二深橘房
        ctx.fillStyle = "#F05840";
        ctx.moveTo(250, 200);
        ctx.lineTo(300, 200);
        ctx.lineTo(300, 350);
        ctx.lineTo(250, 350);
        ctx.lineTo(250, 200);
        ctx.fill();
        ctx.stroke();

        //白色拱門外框
        //拱門弧形
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.moveTo(100, 200);
        ctx.lineTo(250, 200);
        ctx.lineTo(250, 250);
        ctx.lineTo(200, 250);
        ctx.arc(175, 250, 25, 0, Math.PI, true);
        ctx.moveTo(150, 250);
        ctx.lineTo(100, 250);
        ctx.lineTo(100, 200);
        ctx.fill();
        ctx.stroke();

        //拱門橘柱
        ctx.beginPath();
        ctx.fillStyle = "#FF9448";
        ctx.rect(100, 250, 50, 100);
        ctx.rect(200, 250, 50, 100);
        ctx.fill();
        ctx.stroke();

        //拱門屋頂
        ctx.beginPath();
        ctx.fillStyle = "#F05840";
        ctx.moveTo(175, 150);
        ctx.lineTo(249, 200);
        ctx.lineTo(101, 200);
        ctx.lineTo(175, 150);
        ctx.fill();
        ctx.stroke();

        //最左黃房
        ctx.fillStyle = "#FEDC45";
        ctx.fillRect(50, 300, 50, 50);
        ctx.strokeRect(50, 300, 50, 50);

        //最右橘房
        ctx.rect(300, 300, 50, 50);
        ctx.fill();
        ctx.stroke();

    })();

    //旗子
    (function flag() {

        ctx.lineWidth = 2;

        //旗面頂點
        var flagY = 100 - (mouse.y / 5);

        //旗桿
        ctx.beginPath();
        ctx.moveTo(175, 150);
        ctx.lineTo(175, flagY + 20);

        //旗面
        ctx.fillStyle = "hsl(" + (mouse.x % 360) + ", 70%, 70%)";
        ctx.lineTo(175, flagY);
        ctx.lineTo(200, flagY + 10 - (time % 5));
        ctx.lineTo(175, flagY + 20);
        ctx.fill();
        ctx.stroke();

    })();

    //車子
    (function car() {

        ctx.lineWidth = 2;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";

        //車殼x軸位置 (基準點:車殼左上角)
        let carx = time % 440 - 50;
        //左右車輪x軸位置 (基準點:車輪中心點)
        let carLeftWheel = carx + 10;
        let carRightWheel = carx + 29;

        //車體
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.rect(carx, 325, 39, 25);
        ctx.fill();
        ctx.stroke();

        //輪子
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(carLeftWheel, 350, 5, 0, 2 * Math.PI);
        ctx.arc(carRightWheel, 350, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

    })();

    //滑鼠黑點
//    (function mousePoint() {
//        ctx.fillstyle = "black";
//
//        ctx.beginPath();
//        ctx.arc(mouse.x, mouse.y, 5, 0, 2 * Math.PI);
//        ctx.fill();
//    })();


}

setInterval(draw, 30);

var mouse = {
    x: 0,
    y: 0
}

canvas.addEventListener("mousemove", function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
})
