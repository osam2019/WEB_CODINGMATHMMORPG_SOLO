# 0. 요구사항

### 0-1. 컴퓨터 구성

컴퓨터는 크롬만 깔려있으면 된다.





### 0-2. 설치안내

설치는 따로 필요없다.





### 0-3. 사용법

index.html을 실행시키고



화살표 키보드 및 wasd 키보드 키로 캐릭터를 움직이고 마우스로 네모를 클릭해 진행해나가면 된다.





### 0-4. 배포자 및 개발자 연락처

김한결 

주소 : 안산시 상록구 요진아파트 512동 101호

Tel : 010-2597-2391





### 0-5. Chage Log

2019/10/24 23:46	배포





# 1. 서론

왜 우리는 코딩을 '힘들게' 배워야 할까?



나는 코딩 교육을 사회에서 했었다.



물론 창의력이라던가 경험은 별로 없고, 수학적 능력과 프로그래밍 언어에 대한 단순한 흥미에 의해서 공부했었다.



때문에 자바스크립트 문법에 대해서는 자신있었다. (항상 ECMAscript 최신 문서를 원서로 읽었다.)



그런데 내가 가르칠 때마다 사람들은 항상 힘들어했다.



마치 수학 과목이 하나 더 증가했다고 하는 것이다.



거기에 난 좌절했다.



하지만 옆 동네 학원은 잘됐다.



왜 그런가 봤더니 수업내용이 정말 수준 낮게 되어있었다.



그냥 놀고 가는 곳이었다.



물론 그런 교육을 욕하는 것이 아니다.



단지 그것이 정말로 사람들에게 도전욕구를 일으킬 수 있을까? 에 대한 의구심이었다.



그래서 이 프로그램을 생각했다.



이 프로그램은 게임이다.



하지만 단순한 게임이 아니라 '문제' 라는 몬스터를 잡아 현상금을 높이는 게임이다.



이 게임은 아마 코딩같이 지루한 것을 하기 싫어하는 젊은 친구들에게 큰 도전욕구를 불러일으킬 것이다.







# 2. 컨셉

io 게임이라고 들어는 보았는가?



![C1](.\img\C1.PNG)

↑ 수많은 io 게임들



우리가 어릴적 인터넷에서 즐겼던 플래시 게임들이 이젠 io 게임으로 대체되었다.



io 게임들은 무슨 기술을 원천으로 하나?



그것은 바로 HTML canvas이다.



canvas는 우리에게 간단하게 Pixel 수준의 드로잉 툴을 제공한다.



당연히 벡터 방식(플래시)의 것들보다 게임 만드는 데에는 훨씬 적합하다.



그래서 나 또한 io 게임을 만들겠다고 생각했다.



io게임은 플러그인 설치 같은 것이 필요 없이 HTML canvas만 지원하는 전 브라우저에서 구동된다.



따라서 접근성 또한 대단하고, 사람들은 가벼운 마음으로 들어오며, 소스가 공개되어있어 게임의 피드백이 빠르다.



이러한 컨셉을 바탕으로 나는 코딩-수학 대결을 하는 프로그램을 만들었다.







# 3. 파일 설명

img 폴더 : 각종 이미지가 들어있는 폴더

click.js : 마우스 관련 이벤트 코드들을 모아둔 곳

data.js : 서버 database 느낌을 주려고 만듬. 각종 데이터들이 모여있는 곳(server.html과 연결됨)

index.html : 본 프로그램

init.js : 실행할 때 먼저 수행해야할 코드들

main.js : 각종 클래스 정의 및 requestAnimationFrame이 작동되는 곳

README.md : 본 파일

server.html : 원래는 websocket서버를 만드려고 했으나 최근 크롬에서 localhost websocket통신을 막아 대신 iframe으로 통신하는 모양을 낸 것. iframe은 parent에서 직접적으로 접근할 수 없고 message로 통신하기에 본질은 websocket과 매우 유사하다. iframe은 인터넷이 좋지 않다는 가상 설정으로 한번 통신할 때 0.5초의 딜레이를 주었다.





# 4. 사용된 기술 나열

이 프로그램은 어느정도 나의 프로그래밍 실력을 연습하려고 만들었기에 그 어떤 라이브러리도 쓰지 않았고



최신 자바스크립트 기술을 쓰려고 했다.



- Map : Map은 key와 value로 된 순회 가능한 객체로 중복체크 및 접근이 그냥 객체보다 수월하여 썼다.
  
  
  
  
  
- Set : Set은 key로만 된 순회 가능한 객체로 값을 넣을 때 중복체크가 가능하여 같은 답을 두번 답하는 일이 없게 하였다.
  
  
  
  
- class : javascript는 원래 prototype이나 ECMAscript2015 이후에는 자바스크립트를 객체지향처럼 코딩할 수 있게 만들엇다. 물론 내부에서는 prototype으로 돌아간다.
  
  
  
  
- arrow function : 화살표함수는 this바인딩이 되지 않고, 객체 생성 기능이 제거되어있어  가볍고, 보기 쉽다.
  
  
  
  
- localStorage : 오래된 기술이고, 단점이 많아(String만 쓸 수 있다던가) 쓰기 싫었지만 보안상 iframe에서는 indexedDB를 사용할 수 없어 어쩔 수 없이 사용자가 만든 문제를 저장할 때 썼다. 브라우저를 껐다 다시켜도 값이 그대로 남아있다.
  
  
  
  
- indexedDB : 브라우저 데이터베이스. 하드디스크에 저장되고, 저장 공간은 하드디스크의 50%일 정도로 제한이 없다. localStorage와 다르게 javascript의 모든 타입을 제공한다.
  
  
  
  
- postMessage : iframe은 보안상의 문제로 DOM에서 접근할 수 없다. 하지만 통신은 할 수 있다. 이 과정은 마치 Server와 Client간에 socket통신과 닮아있어, 보안상 구현이 되지 않는 Websocket을 대신하여 구현하였다. 물론 밖에서 프로그램을 만들 때에는 Websocket으로 만들 것이다. 이로인해 대규모 멀티 플레이 기능은 구현하지 못했다.
  
  
  
  
- let, const : let과 const는 괄호안에 스코프가 있는 block scope이다. 따라서 for안에 선언한 값은 밖으로 나오면 접근할 수 없다. 이로 인해 다양한 변수 충돌을 막았다.
  
  
  
  
- of : of는 순회가능한 객체들에서 key 와 value중 value값만 쏙 빼와서 for문을 돌리는 데에 도움을 준다.
  
  
  
  
- foreach, map : Array의 순회 기능 중 하나로 각 값들을 간단한 구현식으로  순회 가능하도록 할 수 있다.
  
  
  
  
- requestAnimationFrame : 보통 게임을 만든다 하면 setInterval를 쓸 것 같지만 최근의 경우 requestAnimationFrame이라는 재귀 형식의 함수가 등장했고, 이 함수는 화면의 깜빡임과 동기화 되어 중간에 frame이 빠지는 일이라던가, 너무 많은 계산을 하는 것을 막아준다.
  
  
  
  
- Proxy : 변수를 감시해주는 객체. 이 경우엔 로딩의 변경을 감지해 로딩으 값이 바뀌 때마다 set 함수가 발동해 다른 로딩값을 수정해주도록 했다.





# 5. 창 설명

![C2](.\img\C2.PNG)

​																					로딩될 때의 창





![C4](.\img\C4.PNG)

​														문제를 풀 때의 창. 이미지 및 동영상도 지원한다.





![C5](.\img\C5.PNG)

​																저장된 문제를 볼 때의 상태창





먼저 상태창이다.



상태창은 각종 정보가 뜨는 곳이고, 유일하게 DOM으로 구성되어있다.



상태창은 크기를 늘리거나 줄이거나 옮기길 수 있고, 오른쪽 클릭을 상태창만의 고유 contextmenu로 만들었다.



구성은 간단하게 위쪽 탭 div2



내용이 있는 div4



그리고 textarea다.



물론 textarea 대신에 다른 editor를 쓰려고 했지만 시간이 없었다.



그 다음은 모두 canvas이다.



![C6](.\img\C6.png)





게임 화면은 다음과 같다.



먼저 왼쪽 상단에 있는 3개의 버튼은 각각 다른 기능을 갖고 있다.



### 5-1. 문제생성



먼저 문제생성은 문제를 생성한다.





![C3](.\img\C3.PNG)![C7](.\img\C7.PNG)



|               문제를 생성할 때의 창                |
| :------------------------------------------------: |
| 각각의 항목을 모두 완료해야지 문제를 보낼 수 있다. |



여기에 중요한 것은  위치, 현상금, 답 유형이다.



위치는 x좌표와 y좌표로 구성되어있다.



현상금은 문제를 낼 때의 현상금인데, 현상금을 걸 때에는 나의 금액에서 까인다.



답 유형은 3개정도 있는데, correct(완전히 맞추기), less(근사값), conding(코드 실행) 이 있다.



그 중 coding의 경우 직접 코드를 쳐서 실행하는 것이다.



코드는 new Function으로 실행하여, 별도의 라이브러리 없이 코드가 실행되고, eval과는 다르게 보안 및 scope문제가 없다.



문제를 보내는 과정은 다음과 같다.



![C1](.\img\C1.gif)

​																				문제를 보내는 과정



그럼 문제가 필드에 추가되고 다음과 같이 여행을 다닐 수 있다.



![C2](.\img\C2.gif)





유저가 낸 문제는 빨간색 사각형, 운영자가 낸 문제는 노란색 사각형으로 표시된다.



그리고 문제를 풀면 원으로 표시되는 기법이다.







### 5-2. 저장된 문제

다음으로 저장된 문제이다.



저장된 문제는 서버와 통신하는 것이 아니라 indexedDB에 저장되는 원리이다.



서버의 부하를 줄이고, 브라우저를 껐다가 켜도 저장된 데이터를 생각하다보니 indexedDB가 가장 좋아보였다.



![C3](.\img\C3.gif)

indexedDB에 저장된 저장된 문제들



그래서 서버와의 통신이 힘들 때도 대부분의 것들을 해결할 수 있다.



물론 문제를 보내는 행위는 할 수 없겠지만 말이다.



뿐만 아니라 저장된 문제는 즐겨찾기를 해둘 수 있다.



위에 있는 초록색 글자가 즐겨찾기 되어있는 저장된 문제이다.





### 5-3. 상태창 숨기기

간단하다.



상태창을 숨기거나, 다시 나타나게 한다.



![C4](.\img\C4.gif)





# 6. 문제풀기

문제를 푸는 과정은 간단하다.



사각형을 누르고 문제를 풀거나, 혹은 이미 푼 문제는 문제 저장하기로 저장된 문제에서 볼 수 있다.



저장된 문제는 나중에 지울 수도 있기에 마음껏 저장해도 된다.



![C5](.\img\C5.gif)





# 7. 코드 설명

이제 하나하나의 코드를 설명하겠다.



먼저 구현한 custom contextmenu 이다.

```javascript
div.addEventListener('contextmenu', (e) => { ... });
function conData(data, color = 'black', action = null){
    let temp = document.createElement('div');
    temp.className = 'list';
    temp.textContent = data;
    temp.style.color = color;
    temp.onclick = action;
    conMenu.appendChild(temp);
}
```



conData는 메뉴바 하나에 대한 서술이고, action은 콜백으로 어떤 메뉴를 눌렀을 때의 함수를 실행하게 한다.



다음은 다루기 제일 어려웠던 indexedDB에 대한 내용이다.



```javascript
function insert(data){
    let request = indexedDB.open('M');
    request.onerror = (e) => {
        console.log('에러가 왜 났지?');
    }
    request.onsuccess = (e) => {
        const db = request.result;
        const objectStore = db.transaction(['저장된문제'], 'readwrite').objectStore('저장된문제');
        objectStore.add(data);
        munjae.set(data.key, data);
    }
}
function modify(data){
    
    ...
    
}
function del(key) {
    
    ...
    
}
```



각각 항상 transaction을 생성해야해서 추가(insert), 수정(modify), 삭제(del) 를 함수화 해버렸다.



보통 저장된 문제를 관리 할 때 쓴다.



```javascript
function drawButton(x, y, w, h, rc, tc, text, lw, ts = 16){
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = rc;
    ctx.lineWidth = lw;
    ctx.rect(x, y, w, h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${ts}pt '맑은 고딕'`;
    ctx.fillStyle = tc;
    ctx.fillText(text, x + w / 2, y + h / 2);
    ctx.closePath();
    ctx.restore();
}

function check(x1, y1, x2, y2, w, h) {
    if(x1 > x2 && x1 < x2 + w && y1 > y2 && y1 < y2 + h) {
        return true;
    }
    return false;
}
```



canvas는 버튼을 지원하지 않는다.



따라서 버튼을 눌렀는지 감지하는 함수(check)와 버튼을 한번에 그려주는 함수(drawButton)를 구현했다.



```javascript
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
        
       ...
       
    }
    A.move(cx, cy);
    mal.draw();
    
    ...
    
    requestAnimationFrame(move);
})();
```



위 함수는 60fps 흐름을 만드는 데에 총괄을 하는 함수로 모든 행동은 다 여기로 흘러들어온다.



A는 본인 캐릭터를 의미하고, A.move 메소드는 주변에 있는 오브젝트의 생성을 관리하는 함수이다.



이 게임은 캐릭터는 가만히 있고, 맵이 움직이기에 A.move지만 사실 Map.move라고 볼 수 있다.



mal.draw 메소드는 말풍선의 생성 및 사라짐을 총괄한다.



```javascript
div2.onmousedown = (e) => {
    let X = e.x - parseInt(div.style.left);
    let Y = e.y - parseInt(div.style.top);
    document.onmousemove = (e) => {
        let xx = e.x;
        let yy = e.y - 5;
        div.style.left = `${xx - X}px`;
        div.style.top = `${yy - Y}px`;
    }
}

for(let i = 0; i < 4; i++){
    div3[i] = document.createElement('div');
    div.appendChild(div3[i]);
    
    ...
    
    if(i === 0) {
        div3[i].onmousedown = (e) => {
            document.onmousemove = (e) => {
                let xx = e.x - 5;
                let yy = e.y - 5;
                let l = parseInt(div.style.left);
                let t = parseInt(div.style.top);
                div.style.width = `${parseInt(div.style.width) + l - xx}px`;
                div.style.height = `${parseInt(div.style.height) + t - yy}px`;
                div.style.left = `${xx}px`;
                div.style.top = `${yy}px`;
            }
        }
    } else if(i === 1) {
        div3[i].onmousedown = (e) => {
            document.onmousemove = (e) => {...}
        }
    } else if(i === 2) {
        div3[i].onmousedown = (e) => {
            document.onmousemove = (e) => {...}
        }
    } else {
        div3[i].onmousedown = (e) => {
            document.onmousemove = (e) => {...}
        }
    }
}
```



위 코드는 상태창의 움직임 및 크기 조절을 총괄한다.



onmousemove가 항상 실행되는 것이 아닌 그때마다 생겼다 사라졌다를 반복하며



상태창의 4개의 꼭지점에 div3 들을 생성해 크기 조절을 할 수 있게 하였다.



div2는 상태창의 상태바로 상태바를 누르면 mousemove가 생성돼 상태창을 움직일 수 있다.



```javascript
let p = new Proxy(tp, {
    set: function(target, name, value){
        if(name === 'l'){
            console.log(`set : ${value}`);
            div4.innerHTML = `<span style='font-size:30px'>${value}% 로딩</span>`
            target[name] = value;
            if(value === 100){
                div4.innerHTML = `<span style='font-size:30px'>로딩 성공</span>`;
            }
            return value;
        }
    }
});
```



p는 Proxy 객체로 p.l의 값이 바뀔 때마다 수시로 수정되도록 하였다.



따라서 p.l이 어디서 바뀌던 상관없이 값은 업데이트된다.



```javascript
//index.html
const server = document.getElementById('server');
server.onload = () => {
    server.contentWindow.postMessage({id:'login', num : 1}, '*');
};
window.addEventListener('message', (e) => {
    console.log(e.data.id);
    if(e.data.id === '문제생성') {
        
        ...
        
    }
    if(e.data.id === 'check') {
        
        ...
        
    }
    if(e.data.id === 'comp') {
        p.l += 20;
        
        ...
        
    }
    if(e.data.id === 'MAP'){
        p.l += 20;
        
        ...
        
    }
})
```



index.html은 server.html과 message로 통신하고, 이를 만든 이유는 Websockect의 시뮬레이션이다.



Websocket은 localhost에서의 통신이 안되기 때문에(Chrome에서만 ㅂㄷㅂㄷ) 이렇게 할 수 밖에 없었다.



server와의 통신은 위와 같이 server.contentWindow.postMessage 메소드로 한다.



```javascript
//server.html
window.addEventListener('message', (e) => {
        setTimeout(() => {
            if(e.data.id === '문제') {
                let data = e.data.data;
                let mun = ANSWER.get(data[0]);
                if(mun[1] === 'correct') {
                    if(mun[0] == data[1]) {
                        window.parent.postMessage( . . . );
                        ...
                    }
                }
            }
        }, 1000);
    });
```



위는 server.html에서의 통신 코드이다.



setTimeout을 준 이유는 통신에 방해 요소가 있을 경우를 시뮬레이션 하고 싶었기 때문이다.







# 8. 앞으로의 계획

다음과 같은 기능을 넣는다.



| 기능명                | 기능설명                                                     |
| --------------------- | ------------------------------------------------------------ |
| 멀티플레이            | 게임인 만큼 당연히 멀티플레이를 구현하려고 했었고, Websocket으로 구현할 것이다. |
| 3D                    | 원래는 3D로 구현할 생각이었다. 라이브러리는 three.js로 3D구현을 WebGL같은 어려운 것이 아닌 좀 더 쉬운 것으로 구현 가능하게끔 해준다. |
| 문제 크롤링           | 원래부터 크롤링할 생각이었으나, 많은 사이트가 CORS를 구비해 힘들었다. 하지만 jsonp로 뚫을 수 있고, nodejs를 쓰면 이 문제 또한 해결된다. |
| html 문제 이미지 채점 | 말 그대로 html같은 웹 문제를 이미지로 채점하는 기능이다. 이미지 인식은 이미 Google layer를 사용해 5% 미만의 오차율로 성공한 사례가 있기에 구현이 그리 어렵지는 않다.  html 문제를 내도 결과가 같게 나오지만 답은 다른 경우가 많다. 따라서 이 경우는 이미지로 채점하면 해결 가능해진다. |



버그 리포트는 언제나 환영이다.





# 9. 마치는 말

코딩에 도전하지도 않는다면 코딩은 어렵고 지루한 것이 될 것이다.



하지만 어렵고 지루한 코딩수업만 한다면 그것은 아무도 코딩에 도전하지 않게 할 것이다.



코딩은 도전할 가치가 있고, 재미있을 자격이 있다.



이 프로그램은 그것을 증명할 것이다.