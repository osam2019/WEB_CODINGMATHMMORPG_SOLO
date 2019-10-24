canvas.addEventListener('mousemove', (e) => {
    try{
        const temp = getComputedStyle(canvas);
        let w = e.x * 1280 / parseInt(temp.getPropertyValue('width'));
        let h = e.y * 720 / parseInt(temp.getPropertyValue('height'));
        let X = parseInt(A.x + w);
        let Y = parseInt(A.y + h);
        if(X > MAX) {
            X -= MAX;
        }
        if(Y > MAY) {
            Y -= MAY;
        }
        const cx = parseInt(X / 640);
        const cy = parseInt(Y / 360);
        const xx = X - cx * 640;
        const yy = Y - cy * 360;
        if(check(w, h, 0, 0, 135, 70)) {
            choose = 1;
            return true;
        }
        if(check(w, h, 135, 3, 135, 70)) {
            choose = 4;
            return true;
        }
        if(check(w, h, 267, 3, 140, 70)){
            choose = 6;
            return true;
        }
        if(check(w, h, mal.w, mal.h, mal.wid, mal.hei) && mal.display){
            if(ans.has(mal.who.key)){
                
            } else {
                if(check(w, h, mal.w, mal.h + 128 + 64, mal.wid / 2, 256)){
                    choose = 2;
                    return true;
                }
            }
            if(check(w, h, mal.w + mal.wid / 2, mal.h + 128 + 64, mal.wid / 2, 256)){
                choose = 3;
                return true;
            }
        }
        /*if(Array.isArray(MAP[cy][cx])) {
            MAP[cy][cx].forEach((arr) => {
                try{
                    if(check(xx, yy, arr[0], arr[1], 20, 20)) {
                        arr[8]
                        throw new Error('break');
                    }
                } catch(e){
                    if(e.message === 'break') return false;
                }
            })
        }*/
        choose = 0;
        return false;
    }catch(e) {
        console.log('아직 로딩이 되지 않았습니다.');
    }
});

canvas.addEventListener('click', (e) => {
    try{
        const temp = getComputedStyle(canvas);
        let w = e.x * 1280 / parseInt(temp.getPropertyValue('width'));
        let h = e.y * 720 / parseInt(temp.getPropertyValue('height'));
        let X = parseInt(A.x + w);
        let Y = parseInt(A.y + h)
        if(X > MAX) {
            X -= MAX;
        }
        if(Y > MAY) {
            Y -= MAY;
        }
        const cx = parseInt(X / 640);
        const cy = parseInt(Y / 360);
        const xx = X - cx * 640;
        const yy = Y - cy * 360;
        if(check(w, h, 0, 0, 135, 70)) {
            sujung.clear();
            console.log('문제 생성');
            div4.innerHTML = '';
            let keys = ['x좌표, y좌표', '카테고리', '문제 내용', '난이도', '문제 요약', '현상금', '답', '답 유형'];
            for(let i = 0; i < keys.length; i++) {
                let temp = document.createElement('div');
                temp.className = 'munSang';
                temp.style.color = 'black';
                temp.textContent = `${i + 1} : ${keys[i]}`;
                div4.appendChild(temp);
            }
            return true;
        }
        if(check(w, h, 135, 3, 135, 70)) {
            console.log('저장된 문제 확인');
            div4.innerHTML = '';
            let keys = Array.from(munjae.keys());
            keys.sort();
            for(let i of keys) {
                let temp = document.createElement('div');
                data = munjae.get(i);
                temp.className = 'munList';
                temp.dataset.key = `${data.key}`;
                temp.textContent = `${data.key}번 : ${data.summary}`;
                if(data.fav) {
                    temp.style.color = 'green';
                    temp.style.fontWeight = 'bold';
                } else {
                    temp.style.color = 'black';
                }
                div4.appendChild(temp);
            }
            return true;
        }
        if(check(w, h, 267, 3, 140, 70)){
            if(div.style.display === 'block') {
                div.style.display = 'none';
                sang = '상태창 보이기';
            } else {
                div.style.display = 'block';
                sang = '상태창 숨기기';
            }
            return true;
        }
        if(check(w, h, mal.w, mal.h, mal.wid, mal.hei) && mal.display){
            if(ans.has(mal.who.key)){
    
            } else {
                if(check(w, h, mal.w, mal.h + 128 + 64, mal.wid / 2, 256)){
                    console.log('문제풀기');
                    div4.innerHTML = mal.who.data;
                    current = mal.who;
                    insert(mal.who);
                    mal.faout();
                }
            }
            if(check(w, h, mal.w + mal.wid / 2, mal.h + 128 + 64, mal.wid / 2, 256)){
                console.log('문제 저장');
                insert(mal.who);
                mal.faout();
            }
            return true;
        }
        if(Array.isArray(MAP[cy][cx])) {
            let good = 0;
            MAP[cy][cx].forEach((arr) => {
                try{
                    if(check(xx, yy, arr.x, arr.y, 20, 20)) {
                        console.log(arr.data);
                        mal.setPos(X, Y, arr);
                        good = 1;
                        throw new Error('break');
                    }
                } catch(e){
                    if(e.message === 'break') return false;
                }
            })
            if(good) {
    
            } else {
                mal.faout();
            }
        } else {
            mal.faout();
            return false;
        }
    }catch(e){
        console.log('아직 로딩이 되지 않았습니다.');
    }
});
document.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowLeft' || e.code === 'KeyA') {
        KEY[0] = true;
    } else if(e.code === 'ArrowRight' || e.code === 'KeyD') {
        KEY[1] = true;
    } else if(e.code === 'ArrowUp' || e.code === 'KeyW') {
        KEY[2] = true;
    } else if(e.code === 'ArrowDown' || e.code === 'KeyS') {
        KEY[3] = true;
    }
});
document.addEventListener('keyup', (e) => {
    if(e.code === 'ArrowLeft' || e.code === 'KeyA') {
        KEY[0] = false;
    } else if(e.code === 'ArrowRight' || e.code === 'KeyD') {
        KEY[1] = false;
    } else if(e.code === 'ArrowUp' || e.code === 'KeyW') {
        KEY[2] = false;
    } else if(e.code === 'ArrowDown' || e.code === 'KeyS') {
        KEY[3] = false;
    }
});
window.addEventListener('click', (e) => {
    conMenu.style.display = 'none';
});
conMenu.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
div.addEventListener('click', (e) => {
    let temp2 = e.target;
    if(temp2.className === 'munList') {
        let temp = munjae.get(parseInt(temp2.dataset.key));
        current = temp;
        div4.textContent = '';
        div4.innerHTML = temp.data;
    } else if(temp2.className === 'munSang') {
        let temp3 = document.createElement('div');
        temp3.className = 'sujung';
        textarea.value = sujung.get(parseInt(temp2.textContent[0]) - 1) ? sujung.get(parseInt(temp2.textContent[0]) - 1) : "";
        temp3.innerHTML = `<h4>${temp2.textContent}</h4>${sujung.get(parseInt(temp2.textContent[0]) - 1) ? sujung.get(parseInt(temp2.textContent[0]) - 1) : ""}`;
        div4.innerHTML = '';
        div4.appendChild(temp3);
    }
});
div.addEventListener('contextmenu', (e) => {
    console.log(e);
    conMenu.textContent = '';
    let temp2 = e.target;
    if(temp2.className === 'munList') {
        let key;
        if(temp2.dataset.key[0] !== 'c'){
            key = parseInt(temp2.dataset.key);
        }else {
            key = temp2.dataset.key;
        }
        let temp = munjae.get(key);
        if(!ans.has(key)){
            conData('문제풀기', 'black', (evt) => {
                current = temp;
                div4.textContent = '';
                div4.innerHTML = temp.data;
            });
        } else {
            conData('문제보기', 'black', (evt) => {
                current = temp;
                div4.textContent = '';
                div4.innerHTML = temp.data;
            });
        }
        conData('삭제', 'red', (evt) => {
            munjae.delete(key);
            del(key);
            div4.removeChild(temp2);
        });
        if(!temp.fav) {
            conData('즐겨찾기', 'orange', (evt) => {
                temp.fav = true;
                modify(temp);
                temp2.style.color = 'green';
                temp2.style.fontWeight = 'bold';
            });
        } else {
            conData('즐겨찾지않기', 'brown', (evt) => {
                temp.fav = false;
                modify(temp);
                temp2.style.fontWeight = 'normal';
                temp2.style.color = 'black';
            });
        }
    } else if(div4.children[0] && (temp2.className === 'sujung' || div4.children[0].className === 'sujung')){
        let keys = ['x좌표, y좌표', '카테고리', '문제 내용', '난이도', '문제 요약', '현상금', '답', '답 유형'];
        conData('완료하고 뒤로', 'blue', (evt) => {
            sujung.set(parseInt(div4.children[0].textContent[0]) - 1, textarea.value);
            textarea.value = ''
            div4.innerHTML = '';
            for(let i = 0; i < keys.length; i++) {
                let temp = document.createElement('div');
                temp.className = 'munSang';
                if(sujung.get(i)) {
                    temp.style.color = 'green';
                    temp.textContent = `${i + 1} : ${keys[i]} (완료)`;
                } else {
                    temp.style.color = 'black';
                    temp.textContent = `${i + 1} : ${keys[i]}`;
                }
                div4.appendChild(temp);
            }
        });
        conData('그냥 뒤로', 'red', (evt) => {
            div4.innerHTML = '';
            for(let i = 0; i < keys.length; i++) {
                let temp = document.createElement('div');
                temp.className = 'munSang';
                if(sujung.get(i)) {
                    temp.style.color = 'green';
                    temp.textContent = `${i + 1} : ${keys[i]} (완료)`;
                } else {
                    temp.style.color = 'black';
                    temp.textContent = `${i + 1} : ${keys[i]}`;
                }
                div4.appendChild(temp);
            }
        });
    } else if(div4.children[0] && (temp2.className === 'munSang' || div4.children[0].className === 'munSang')) {
        conData('문제 전송', 'crimson', (evt) => {
            for(let i = 0; i < 7; i++){
                if(!sujung.has(i)){
                    alert('문제가 제대로 작성되지 않았습니다.');
                    return false;
                }
            }
            let temp3 = {};
            temp3.x = parseInt(sujung.get(0).split(',')[0]);
            temp3.y = parseInt(sujung.get(0).split(',')[1]);
            temp3.category = sujung.get(1);
            temp3.data = sujung.get(2);
            temp3.gong = false;
            temp3.level = sujung.get(3);
            temp3.summary = sujung.get(4);
            temp3.sozi = parseInt(sujung.get(5));
            temp3.ans = sujung.get(6);
            temp3.what = sujung.get(7);
            temp3.onmouse = false;
            console.log(temp3);
            console.log(JSON.stringify(temp3));
            server.contentWindow.postMessage({id:'문제생성', data : temp3}, '*');
        });
        conData('이 항목 수정', 'blue', (evt) => {
            let temp3 = document.createElement('div');
            temp3.className = 'sujung';
            textarea.value = sujung.get(parseInt(temp2.textContent[0]) - 1) ? sujung.get(parseInt(temp2.textContent[0]) - 1) : "";
            temp3.innerHTML = `<h4>${temp2.textContent}</h4>${sujung.get(parseInt(temp2.textContent[0]) - 1) ? sujung.get(parseInt(temp2.textContent[0]) - 1) : ""}`;
            div4.innerHTML = '';
            div4.appendChild(temp3);
        });
    } else {
        conData('데이터 전송', 'crimson', (evt) => {
            if(current && !ans.has(current.key)) {
                server.contentWindow.postMessage({id:'문제', data : [current.key, textarea.value, current.sozi]}, '*');
                div2.innerHTML = `<span style='color:rgb(255,255,0)'> 정답 체크 중</span>`;
            } else {
                server.contentWindow.postMessage({id:'채팅', data : textarea.vale}, '*');
            }
            textarea.value = '';
        });
    }
    conData('저장된 문제 보기', 'green', (evt) => {
        div4.innerHTML = '';
        let keys = Array.from(munjae.keys());
        keys.sort();
        for(let i of keys) {
            let temp = document.createElement('div');
            data = munjae.get(i);
            temp.className = 'munList';
            temp.dataset.key = `${data.key}`;
            temp.textContent = `${data.key}번 : ${data.summary}`;
            if(data.fav) {
                temp.style.color = 'green';
                temp.style.fontWeight = 'bold';
            } else {
                temp.style.color = 'black';
            }
            div4.appendChild(temp);
        }
        return true;
    });
    conData('상태창 숨기기', 'gold', (evt) => {
        if(div.style.display === 'block') {
            div.style.display = 'none';
            sang = '상태창 보이기';
        } else {
            div.style.display = 'block';
            sang = '상태창 숨기기';
        }
    });
    conMenu.style.display = 'block';
    if(e.x + 300 > window.innerWidth) {
        conMenu.style.left = `${e.x - 300}px`;
    } else {
        conMenu.style.left = `${e.x}px`;
    }
    let h = parseInt(getComputedStyle(conMenu).getPropertyValue('height'));
    if(e.y + h > window.innerHeight) {
        conMenu.style.top = `${e.y - h}px`;
    } else {
        conMenu.style.top = `${e.y}px`;
    }
    e.preventDefault();
});