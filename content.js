//定義capoo
const capoo = document.createElement("div");
capoo.className = "cover capoo";
capoo.innerHTML = `
      <div class="ear">
        <div class="ear-left"></div>
        <div class="ear-right">
          <div class="ear-right-outline"></div>
          <div class="ear-right-inner"></div>
        </div>
      </div>
      <div class="body">
        <div class="body-round">
          <div class="body-rounded"></div>
          <div class="body-rounded-outline"></div>
        </div>
        <div class="tail">
          <div class="tail-inner"></div>
          <div class="tail-outline"></div>
          <div class="tail-line"></div>
        </div>
        <div class="eye">
          <div class="eye-left"></div>
          <div class="eye-right"></div>
        </div>
        <div class="mouth">
          <div class="mouth-left">
            <div class="mouth-round"></div>
            <div class="mouth-cover"></div>
          </div>
          <div class="mouth-right">
            <div class="mouth-round"></div>
            <div class="mouth-cover"></div>
          </div>
        </div>
      </div>
      <div class="feet">
        <div class="foot foot-right-1">
          <div class="foot-cover"></div>
          <div class="foot-outline"></div>
          <div class="foot-inner"></div>
        </div>
        <div class="foot foot-right-2">
          <div class="foot-cover"></div>
          <div class="foot-outline"></div>
          <div class="foot-inner"></div>
        </div>
        <div class="foot foot-right-3">
          <div class="foot-cover"></div>
          <div class="foot-outline"></div>
          <div class="foot-inner"></div>
        </div>
        <div class="foot foot-left-1">
          <div class="foot-cover"></div>
          <div class="foot-outline"></div>
          <div class="foot-inner"></div>
        </div>
        <div class="foot foot-left-2">
          <div class="foot-cover"></div>
          <div class="foot-outline"></div>
          <div class="foot-inner"></div>
        </div>
        <div class="foot foot-left-3">
          <div class="foot-cover"></div>
          <div class="foot-outline"></div>
          <div class="foot-inner"></div>
        </div>
      </div>
`;

//定義blakcapoo
const blackCapoo = document.createElement("div");
blackCapoo.className = "cover black-capoo";
blackCapoo.innerHTML = `
<div class="ear">
  <div class="ear-left"></div>
  <div class="ear-right">
    <div class="ear-right-outline"></div>
    <div class="ear-right-inner"></div>
  </div>
</div>
<div class="body">
  <div class="body-round">
    <div class="body-rounded"></div>
    <div class="body-rounded-outline"></div>
  </div>
  <div class="tail">
    <div class="tail-inner"></div>
    <div class="tail-outline"></div>
  </div>
  <div class="eye">
    <div class="eye-left">
      <div class="eye-cover">
        <div class="eye-lash"></div>
      </div>
      <div class="eye-inner"></div>
      <div class="eye-outline"></div>
    </div>
    <div class="eye-right">
      <div class="eye-cover">
        <div class="eye-lash"></div>
      </div>
      <div class="eye-inner"></div>
      <div class="eye-outline"></div>
    </div>
  </div>
  <div class="mouth">
    <div class="mouth-left">
      <div class="mouth-round"></div>
      <div class="mouth-cover"></div>
    </div>
    <div class="mouth-right">
      <div class="mouth-round"></div>
      <div class="mouth-cover"></div>
    </div>
  </div>
</div>
<div class="feet">
  <div class="foot foot-right-1">
    <div class="foot-cover"></div>
    <div class="foot-outline"></div>
    <div class="foot-inner"></div>
  </div>
  <div class="foot foot-right-2">
    <div class="foot-cover"></div>
    <div class="foot-outline"></div>
    <div class="foot-inner"></div>
  </div>
  <div class="foot foot-right-3">
    <div class="foot-cover"></div>
    <div class="foot-outline"></div>
    <div class="foot-inner"></div>
  </div>
  <div class="foot foot-left-1">
    <div class="foot-cover"></div>
    <div class="foot-outline"></div>
    <div class="foot-inner"></div>
  </div>
  <div class="foot foot-left-2">
    <div class="foot-cover"></div>
    <div class="foot-outline"></div>
    <div class="foot-inner"></div>
  </div>
  <div class="foot foot-left-3">
    <div class="foot-cover"></div>
    <div class="foot-outline"></div>
    <div class="foot-inner"></div>
  </div>
</div>
`;

//定義chicken
const chicken = document.createElement("div");
chicken.className = "chicken cover";
chicken.innerHTML = `<div class="body-outline"></div>
<div class="body-inner">
  <div class="eyes">
    <div class="eye eye-left"></div>
    <div class="eye eye-right"></div>
  </div>
  <div class="mouse">
    <div class="mouse-outline"></div>
    <div class="mouse-inner"></div>
  </div>
</div>
<div class="feet">
  <div class="foot foot-left"></div>
  <div class="foot foot-right"></div>
</div>
`;

//定義trumpetChicken
const trumpetChicken = document.createElement("div");
trumpetChicken.className = "trumpet-chicken cover";
trumpetChicken.innerHTML = `<div class="body-outline"></div>
<div class="body-inner">
  <div class="eyes">
    <div class="eye eye-left"></div>
    <div class="eye eye-right"></div>
  </div>
  <div class="mouse">
    <div class="mouse-outline"></div>
    <div class="mouse-inner"></div>
  </div>
</div>
<div class="feet">
  <div class="foot foot-left"></div>
  <div class="foot foot-right"></div>
</div>
<div class="trumpet">
  <div class="trumpet-triangle">
    <div class="triangle-outline"></div>
    <div class="triangle-inner"></div>
  </div>
  <div class="horn-big">
    <div class="horn-outline"></div>
    <div class="horn-inner"></div>
  </div>
  <div class="horn-small">
    <div class="horn-outline"></div>
    <div class="horn-inner"></div>
  </div>
  <div class="trumpet-sound">
    <div class="sound sound-1"></div>
    <div class="sound sound-2"></div>
    <div class="sound sound-3"></div>
  </div>
</div>`;

//random決定加入哪隻capoo
let capooList = [capoo, blackCapoo, chicken, trumpetChicken];
let addDiv = createCapoo();
//加到body內
document.body.appendChild(addDiv);

//建立新的一隻
let newAddDiv = createCapoo();

//每走完一次(10s)，random換一隻
setInterval(function () {
  document.getElementById("runCapoo").remove();
  //加新的一隻到body內
  document.body.appendChild(newAddDiv);
  //建立新的一隻
  newAddDiv = createCapoo();
}, 15000);

//被按到時，隨機在bottom 0%~70%之間移動
function capooMove() {
  //random取得０～５０之間任意值，作為bottom值
  let bottom = Math.random() * 70;
  document.getElementById("runCapoo").style.bottom = bottom + "%";
}

//建立一隻
function createCapoo() {
  randomInt = Math.floor(Math.random() * 4);
  let newAddDiv = capooList[randomInt];
  //加入id
  newAddDiv.setAttribute("id", "runCapoo");
  //加入事件監聽
  newAddDiv.addEventListener("click", capooMove);
  //加到body內
  return newAddDiv;
}
