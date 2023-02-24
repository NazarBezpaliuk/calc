const a = document.querySelector("#a");
const c = document.querySelector("#c");
const reset = document.querySelector("#reset");
const f = document.querySelector("#f");
const ok = document.querySelector("#ok");
const b = document.querySelector("#b");
const box = document.querySelector(".calc");

let aA = 0;

let cC = 0;

let l = "";

function getRandomInt() {
  aA = Math.floor(Math.random() * 100);
  cC = Math.floor(Math.random() * 100);
  gg();

  a.textContent = aA;
  c.textContent = cC;
  box.style.display = "flex";
  f.style.borderColor = "black";
  f.value = "";
  reset.style.display = "none";
}

const gg = () => {
  const n = ["+", "-", "*", "/"];
  l = n[Math.floor(Math.random() * 2)];
  b.textContent = l;
};

const verify = () => {
  if (b.textContent === "+") {
    const s = `${aA + cC}`;
    if (s === f.value) {
      getRandomInt();
      return;
    }
    f.style.borderColor = "red";
    return;
  }
  if (b.textContent === "-") {
    const s = `${aA - cC}`;
    if (s === f.value) {
      getRandomInt();
      return;
    }
    f.style.borderColor = "red";
    return;
  }
  if (b.textContent === "/") {
    const s = `${aA / cC}`;
    if (s === f.value) {
      getRandomInt();
      return;
    }
    f.style.borderColor = "red";
    return;
  }
  if (b.textContent === "*") {
    const s = `${aA * cC}`;
    if (s === f.value) {
      getRandomInt();
      return;
    }
    f.style.borderColor = "red";
    return;
  }
};

ok.addEventListener("click", verify);
reset.addEventListener("click", getRandomInt);
// reset.addEventListener("click", gg);
