//init canvas element
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

(function draw() {
    
    //    設定畫布尺寸(像素)
    canvas.width = 400;
    canvas.height = 400;
    
    //淺灰格線
    (function backgroundLIne() {

        let x = 0,
            y = 0;

        ctx.strokeStyle = "rgba(0,0,0,0.1)";
        ctx.beginPath();

        //垂直背景線
        for (; x < 400; x += 50) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 400);
            ctx.fillText(x, x + 2, 10);
        }

        //水平背景線
        for (; y < 400; y += 50) {
            ctx.moveTo(0, y);
            ctx.lineTo(400, y);
            ctx.fillText(y, 2, y);
        }

        ctx.stroke();
    })();

    //房子
    (function house() {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        //地面
        ctx.moveTo(25, 350);
        ctx.lineTo(375, 350);
        ctx.stroke();

        
        //右二黃房
        ctx.fillStyle = "#F05840";
        ctx.moveTo(250,200);
        ctx.lineTo(300,200);
        ctx.lineTo(300,350);
        ctx.lineTo(250,350);
        ctx.lineTo(250,200);
        ctx.fill();
        ctx.stroke();
        
        //白色拱門外框
        ctx.moveTo(100,200);
        ctx.lineTo(250,200);
        ctx.lineTo(250,250);
        ctx.lineTo(200,250);
        ctx.moveTo(150,250);
        ctx.lineTo(100,250);
        ctx.lineTo(100,200);
        ctx.stroke();
        
        //拱門弧形
        ctx.beginPath();
        ctx.arc(175,250,25,Math.PI,0);
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
        ctx.moveTo(175,150);
        ctx.lineTo(249,200);
        ctx.lineTo(101,200);
        ctx.lineTo(175,150);
        ctx.stroke();
        ctx.fill();
        
        //最左黃房
        ctx.fillStyle = "#FEDC45";
        ctx.strokeRect(50, 300, 50, 50);
        ctx.fillRect(50, 300, 50, 50);
        
        //最右橘房
        ctx.rect(300,300,50,50);
        ctx.stroke();
        ctx.fill();
        
    })();
    
    //旗子
    (function flag() {
        
        //旗桿
        let topx, topy;
        
        
        //旗面
        
    })();
    
    
    
})();