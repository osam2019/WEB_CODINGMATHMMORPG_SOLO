for(let i = 0, temp = MAP.flat(); i < temp.length; i++){
    if(Array.isArray(temp[i])){
        temp[i].forEach((v) => {
            allMun.set(v.key, v);
        });
    }
}