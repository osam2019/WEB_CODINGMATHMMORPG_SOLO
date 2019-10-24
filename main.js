class Mal{
    constructor(){
        this.display = false;
        this.gl = 0;
        this.wid = 256;
        this.hei = 256;
    }
    delPos(){
        this.display = false;
        this.gl = 0;
        this.who = false;
    }
    faout(){
        if(this.gl > 1){
            this.gl = 0.99;
        }
        this.glu = -0.02;
    }
    setPos(x, y, who){
        if(this.who === who) return false;
        this.gl = 0;
        this.glu = 0.02;
        this.x = x;
        this.y = y;
        this.who = who
        this.display = true;
    }
    draw(){
        if(!this.display) return false;
        let xx = this.x - A.x;
        let yy = this.y - A.y;
        if(xx < -320) {
            xx += MAX;
        }
        if(yy < -180) {
            yy += MAY;
        }
        ctx.save();
        ctx.beginPath();
        this.gl += this.glu;
        ctx.globalAlpha = this.gl;
        if(this.gl > 1) {
            this.gl = 1;
        } else if(this.gl < 0) {
            this.display = false;
            this.who = false;
            this.gl = 0;
            return false;
        }
        this.w = xx - 128;
        this.h = yy - 300;
        ctx.font = "16pt '맑은 고딕'";
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'rgb(240, 240, 240)';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.rect(xx - 128, yy - 300 ,this.wid, this.hei);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        if(ans.has(this.who.key)) {
            drawButton(this.w, this.h + 128 + 64, 128, 64, 'white', 'gray', '이미 푼 문제', 1);
        } else {
            if(choose === 2){
                drawButton(this.w, this.h + 128 + 64, 128, 64, 'blue', 'white', '문제 도전', 1);
            } else {
                drawButton(this.w, this.h + 128 + 64, 128, 64, 'white', 'blue', '문제 도전', 1);
            }
        }
        if(choose === 3) {
            drawButton(this.w + 128, this.h + 128 + 64, 128, 64, 'green', 'white', '문제 저장', 1);
        } else {
            drawButton(this.w + 128, this.h + 128 + 64, 128, 64, 'white', 'green', '문제 저장', 1);
        }
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillText(`문제종류 : ${this.who.category}`, this.w + 20, this.h + 20, this.wid - 40);
        ctx.fillText(`난이도 : ${'★'.repeat(parseInt(this.who.level/2))}${'☆'.repeat(this.who.level%2)}`, this.w + 20, this.h + 50, this.wid - 40);
        ctx.fillText(`문제요약 : ${this.who.summary}`, this.w + 20, this.h + 80, this.wid - 40);
        ctx.fillText(`현상금 : ${this.who.sozi}`, this.w + 20, this.h + 110, this.wid - 40);
        ctx.closePath();
        ctx.restore();
    }
}

class Char{
    static MY = 0;
    static Cnum = new Map();
    constructor(who, x, y){
        this.x = x;
        this.y = y;
        if(!who) {
            //나인 경우
           if(!Char.MY) {
               //내가 없었을 경우
                Char.MY = 1;
                Char.Cnum.set(0, this);
           } else {
               //내가 이미 있는 경우

           }
        } else {
            //내가 아닌 경우
            if(Char.Cnum.has(who)) {
                //이미 등록된 캐릭터일 때
            } else {
                //등록되지 않은 경우
                Char.Cnum.set(who, this);
            }
        }
    }
    del(who){
        if(!who) {
            //나를 지운 경우
            if(!Char.MY) {
                //내가 없었을 경우
            } else {
                //내가 이미 있는 경우
                Char.Cnum.delete(who);
            }
            Char.MY = 0;
        } else{
            //남을 지운 경우
            if(Char.Cnum.has(who)) {
                //이미 등록된 캐릭터일 때
                Char.Cnum.delete(who);
            } else {
                //등록되지 않은 경우
            }

        }
    }
    draw(x, y, color){
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.fillStyle = color;
        ctx.lineWidth = 5;
        ctx.rect(x, y, 40, 40);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    move(x, y){
        this.draw(620, 340, 'green');
        if(x === 0 && y === 0) {
        }
        if(x === 1) {
            this.x += v;
            if(this.x > MAX) {
                this.x -= MAX;
            }
        } else if(x === -1) {
            this.x -= v;
            if(this.x < 0) {
                this.x += MAX;
            }
        }

        if(y === 1) {
            this.y += v;
            if(this.y > MAY) {
                this.y -= MAY;
            }
        } else if(y === -1) {
            this.y -= v;
            if(this.y < 0) {
                this.y += MAY;
            }
        }
        let X = parseInt(this.x / 640);
        let Y = parseInt(this.y / 360);
        let p = 0;
        let t = 0;
        for(let i = Y; p < 3; p++, i++){
            if(i === MAP.length){
                i = 0;
            }
            for(let j = X; t < 3; t++, j++){
                if(j === MAP[i].length){
                    j = 0;
                }
                if(Array.isArray(MAP[i][j])) {
                    MAP[i][j].forEach((arr) => {
                        let xx = arr.x + j * 640 - this.x;
                        let yy = arr.y + i * 360 - this.y;
                        if(xx < -320) {
                            xx += MAX;
                        }
                        if(yy < -180) {
                            yy += MAY;
                        }

                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle = 'black';
                        ctx.lineWidth = 3;
                        if(arr.gong) {
                            ctx.fillStyle = 'yellow';
                        } else {
                            ctx.fillStyle = 'red';
                        }
                        if(ans.has(arr.key)) {
                            ctx.arc(xx + 10, yy + 10, 10, 0, 2 * Math.PI);
                        } else {
                            ctx.rect(xx, yy, 20, 20); 
                        }
                        //ctx.rect(xx, yy, 20, 20);
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();
                        ctx.restore(); 
                    });
                }
            }
            t = 0;
        }
    }
}
const mal = new Mal();
const A = new Char(0, 0, 0);
(function move(){
    ctx.clearRect(0, 0, 1280, 720);
    let cx = 0, cy = 0;
    if(KEY[0] && KEY[1] || !(KEY[0] || KEY[1])){
        cx = 0;
    } else if(KEY[0]) {
        cx = -1;
    } else {
        cx = 1;
    }
    if(KEY[2] && KEY[3] || !(KEY[2] || KEY[3])){
        cy = 0;
    } else if(KEY[2]) {
        cy = -1;
    } else {
        cy = 1;
    }
    A.move(cx, cy);
    mal.draw();
    if(choose === 1) {
        drawButton(3, 3, 128, 64, 'purple', 'rgb(240,240,240)', '문제 생성', 5);
    } else {
        drawButton(3, 3, 128, 64, 'rgb(240,240,240)', 'purple', '문제 생성', 5);
    }
    if(choose === 4) {
        drawButton(135, 3, 128, 64, 'green', 'rgb(240,240,240)', '저장된 문제', 5);
    } else {
        drawButton(135, 3, 128, 64, 'rgb(240,240,240)', 'green', '저장된 문제', 5);
    }
    if(choose === 6) {
        drawButton(267, 3, 140, 64, 'gold', 'rgb(240,240,240)', sang, 5);
    } else {
        drawButton(267, 3, 140, 64, 'rgb(240,240,240)', 'gold', sang, 5);
    }
    drawButton(3, 655, 128, 64, 'white', 'black', `소지금 : ${sozi}$`, 5, 10);
    drawButton(3, 590, 128, 30, 'white', 'black', `x좌표 : ${A.x + 640 > 3200 ? A.x + 640 - 3200 : A.x + 640}`, 0, 10);
    drawButton(3, 620, 128, 30, 'white', 'black', `y좌표 : ${A.y + 360 > 1800 ? A.y + 360 - 1800 : A.y + 360}`, 0, 10);
    requestAnimationFrame(move);
})();
re(0);