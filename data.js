const Chars = new Map();
class Char{
    constructor(id, x, y, ans, sozi){
        this.id = id;
        this.x = x;
        this.y = y;
        this.ans = ans;
        this.sozi = sozi;
        Chars.set(this.id, this);
    }
}
const ANSWER = new Map();
ANSWER.set(3, [96, 'correct']);
ANSWER.set(4, [36, 'correct']);
ANSWER.set(2, [2, 'correct']);
ANSWER.set(5, [96.174, '0.01']);
ANSWER.set(6, ['1 2 3 4 5 6 7 8 9 10', 'coding']);
localStorage.ans = localStorage.ans ? localStorage.ans : 1;
localStorage.sozi = localStorage.sozi ? localStorage.sozi : 1205;
let temp4 = localStorage.ans.split(',');
new Char(1, 0, 0, new Set(temp4.map(v => parseInt(v))), parseInt(localStorage.sozi));
const temp2 = `숌 코드
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	88	1	1	10.000%
문제
영식이는 민식이가 괴롭힐 때, 동생 하영이에게 문자메시지를 보내서 도움을 요청한다. 민식이는 영식이의 이러한 행동을 알아채고 영식이의 모든 문자메시지를 감시하기 시작했다. 영식이는 동생과의 문자메시지를 민식이에게 들키기 싫어서 무엇인가 비밀 코드를 만들고 싶어했다. 마침 영식이의 왼쪽, 왼쪽 자리에 앉아있는 다솜이가 새로운 문자열 인코딩 방법을 개발했다. 다솜이의 새로운 문자열 인코딩 방법으로 문자열을 코드로 변환한 것을 숌 코드라고 한다.

숌 코드는 숌 코드 인코딩방법으로 문자를 코드로 바꾼다. 인코딩 방법은 알파벳의 집합 S가 주어졌을 때, 집합에 속하는 각 알파벳이 숌 코드에 일치하는 구조로 이루어져 있다. 이때, 어떤 알파벳과 코드를 연결시켜주는 함수를 이용한다고 생각하면 쉽다. 그리고, 코드는 항상 0과 1로만 이루어져 있다. 코드가 비어있을 수도 있다.

예를 들어 S={a,b,c,d}이고, 알파벳을 코드로 바꿔주는 함수 f과 다음과 같이 정의되어있다고 할 수 있다. f(a) = 1, f(b) = 1010, f(c) = 01, f(d) = 10101

함수 f 속에는 반드시 알파벳 한 글자만 들어가는 것이 아니라, 여러 문자가 계속해서 들어갈 수 있다. 이때, 함수는 주어진 문자열을 앞에서부터 차례대로 코드로 바꿔주어 이를 합치는 형식으로 작동한다. 따라서, 위의 예제에서 f(cac) = 01101이다.

만약 어떤 코드를 두 개의 문자열로 해석할 수 있으면, 이 코드를 애매한 코드라고 한다. 영식이는 애매한 코드를 사용하지 않는다고 한다.

만약 어떤 코드를 세 개 이상의 문자열로 해석할 수 있으면, 이 코드를 정말 애매한 코드라고 한다. 예를 들어, 위의 예제에서 애매한 코드는 10101이다. 10101은 ba, acc, d 로 해석할 수 있다.

입력으로 코드가 주어진다. 코드는 0과 1로만 이루어져 있다. 영식이는 어떤 문자열 S를 숌 코드 인코딩 방법을 이용해서 코드로 바꾸려고 한다. 다솜이가 개발한 인코딩방법은 아직 불완전하다. 다솜이가 할 일은 영식이가 코드로 인코딩해서 보낸 문자메시지의 내용을 3개 혹은 그 이상으로 문자열로 바꿀 수 있는지 확인하는 작업이다.

코드가 주어졌을 때, 3개 이상의 문자열로 바꿀 수 있는 숌 코드의 가장 짧은 길이를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 코드의 개수 N이 들어온다. 코드의 개수 N은 2보다 크거나 같고, 26보다 작거나 같은 자연수이다. 둘째 줄부터 한 줄에 하나씩 각각의 알파벳에 해당하는 코드가 입력으로 들어온다. 코드의 길이는 최대 50보다 작거나 같은 자연수 또는 0이다. 만약 코드의 길이가 0이라면 입력으로 -1이 들어온다. 코드는 반드시 0 또는 1만 포함하고 있다. 각각의 코드는 중복될 수 있다.`;
//x좌표, y좌표, 공용문제여부, 문제내용, 즐겨찾기, 문제유형, 난이도, 문제설명, 마우스가 위에 올라가있는지
const MAP = [
    [[{
        key : 3,
        x : 10,
        y : 10,
        gong : true,
        data : '1 + 4 = 5<br>2 + 5 = 12<br>3 + 6 = 21<br>8 + 11 = ?',
        category : '수학',
        level : 1,
        summary : '인터넷문제1',
        onmouse : false,
        sozi : 200
    }, {
        key : 1,
        x : 40,
        y : 60,
        gong : true,
        data : temp2,
        category : '코딩',
        level : 7,
        summary : '백준 1230번',
        onmouse : false,
        sozi : 600
    }, {
        key : 4,
        x : 100,
        y : 100,
        gong : true,
        data : '11 × 11 = 4<br>22 × 22 = 16<br>33 × 33 = ???',
        category : '수학',
        level : 3,
        summary : '지나가던수학',
        onmouse : false,
        sozi: 300
    }, {
        key : 5,
        x : 300,
        y : 300,
        gong : true,
        data : '<img src="./img/초딩수학.jpg" style="width:100%">',
        category : '수학',
        level : 7,
        summary : '인터넷에있었다.',
        onmouse : false,
        sozi: 700
    }], [{
        key : 6,
        x : 10,
        y : 10,
        gong : true,
        data : `1부터 10까지의 값이 나오도록 코딩해보시오.<br>
        중간의 구분은 띄어쓰기로 해주시오.
        예)1 2 3 4 5 6 7 8 9 10`,
    category : '코딩',
    level : 2,
    summary : '코딩해보자',
    onmouse : false,
    sozi : 200
    }], false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, [{
        key : 2,
        x : 10,
        y : 10,
        gong : true,
        data : `var x = 1;<br>
    var y = 2;<br>
    x = y++;<br>
    x = ?;`,
    category : '코딩',
    level : 2,
    summary : '후위연산자',
    onmouse : false,
    sozi : 100
    }]]];
let ii = 0;
for(; localStorage[`c${ii}`]; ii++){
    let temp = JSON.parse(localStorage[`c${ii}`]);
    let X = parseInt(temp.x / 640);
    let Y = parseInt(temp.y / 360);
    temp.x %= 640;
    temp.y %= 360; 
    ANSWER.set(temp.key, [temp.ans, temp.what]);
    delete temp.ans;
    if(MAP[Y][X]){
        MAP[Y][X].push(temp);
    } else {
        MAP[Y][X] = [temp];
    }
}