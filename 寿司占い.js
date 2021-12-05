function getRandomInt(max) {
     return Math.floor(Math.random() * max);
}
function resetblock() {
    image1.style.display ="none";
    image2.style.display ="none";
    image3.style.display ="none";
}

let count;
function randomsushi() {

    count = (getRandomInt(3));
    resetblock();
             switch(count){
                 case 0:
                     //alert("大当たり")
                     image1.style.display ="block";
                     text.innerHTML = "<h1>大当たり!!!</h1>";
                     p1.innerHTML = "<p>大トロ</p>";
                     p2.innerHTML = '<p style="color: yellow;">250円</p>';
                     break;
                 case 1:
                     //alert("当たり")
                     image2.style.display ="block";
                     text.innerHTML = "<h1>当たり!!!</h1>";
                     p1.innerHTML = "<p>サーモン</p>";
                     p2.innerHTML = '<p style="color: aqua;">110円</p>';
                     break;
                 case 2:
                     //alert("はずれ")
                     image3.style.display ="block";
                     text.innerHTML = "<h1>はずれ...</h1>";
                     p1.innerHTML = "<p>シャリ</p>";
                     p2.innerHTML = "<p>10円</p>";
                     break;
             }
}
