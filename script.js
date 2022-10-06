var spinner = document.querySelector(".spinnerBG");
window.addEventListener("load", () => {
    spinner.classList.add("noOpacity");
    spinner.addEventListener("transitionend", () => {
        spinner.remove();
    });
});
var first = document.querySelectorAll(".greeting .text"),
    text = first[0],
    d = new Date();
var weekday = new Array(7);
    weekday[0] = "Sunday 💪😀";
    weekday[1] = "Monday 🖖";
    weekday[2] = "Tuesday 😜";
    weekday[3] = "Wednesday 😌☕️";
    weekday[4] = "Thursday 🤗";
    weekday[5] = "Friday 🥰";
    weekday[6] = "Saturday 😴";
var n = weekday[d.getDay()];
var randomPhraseArray = new Array(7);
    randomPhraseArray[0] = "Whoops, it's ";
    randomPhraseArray[1] = "Oh my, it's ";
    randomPhraseArray[2] = "Happy ";
    randomPhraseArray[3] = "Seems it's ";
    randomPhraseArray[4] = "Awesome, it's ";
    randomPhraseArray[5] = "Have a nice ";
    randomPhraseArray[6] = "Happy fabulous ";
    randomPhraseArray[7] = "Enjoy your ";
var randomNumber = Math.floor(Math.random() * 6),
    r = randomPhraseArray[randomNumber];
text.innerHTML = r + n;
var inputItem = document.querySelector(".inputItem"),
    inputDate = document.querySelector(".inputDate"),
    inputImage = document.querySelector(".inputImage"),
    tasks = document.querySelector(".tasks"),
    add = document.getElementById("add"),
    clearAll = document.getElementById("clearAll");
var clearFunction = () => {
    inputItem.value = "";
    inputDate.value = "";
    inputImage.value = "";
}
clearAll.addEventListener("click", clearFunction);
add.onclick = function () {
    if (inputItem.value.trim() == "" || inputDate.value.trim() == "" || inputImage.value.trim() == "" ) {
        alert("🔡 Please fill up the inputs!")
    } else {
        tasks.classList.remove("displayNone");
        tasks.innerHTML += `
        <li>
            <div class="container-fluid">
            <div class="row box">
                <div class="col-md-4 col-sm-4 col-4">
                <img src="${inputImage.value}" class="img-fluid imgSrc">
                </div>
                <div class="col-md-4 col-sm-4 col-4 moreInfo">
                <h3 class="title">${inputItem.value}</h3>
                <p class="rate">Due: ${inputDate.value}</p>
                </div>
                <div class="col-md-4 col-sm-4 col-4 delete">
                <i class="fas fa-times deleteTask"></i>
                </div>
            </div>
            </div>
        </li>
        `
        inputItem.value = "";
        inputDate.value = "";
        inputImage.value = "";
    }
}
var deleteTaskFunction = (e) => {
    if(e.target.classList.contains("deleteTask")){
        e.target.parentElement.parentElement.remove();
    }
}
window.addEventListener("click", deleteTaskFunction);
var thumbnailBG = document.querySelector(".thumbnailBG"),
    thumbnailOGImage = document.querySelector(".thumbnailSrc");
var imgsThumbnail = (t) => {
    if(t.target.classList.contains("imgSrc")) {
        thumbnailBG.classList.replace("displayNone", "displayBlock");
        thumbnailOGImage.src = t.target.src;
    }
}
window.addEventListener("click", imgsThumbnail);
var body = document.querySelector("body");
var removeImgSrc = (b) => {
    if(thumbnailBG.classList.contains("displayBlock")) {
        thumbnailBG.classList.replace("displayBlock", "displayNone");
        thumbnailOGImage.src = "";
    }
}
body.addEventListener("click", removeImgSrc);
var iconMode = document.querySelector("#modes");
var changeMode = () => {
    iconMode.classList.toggle("fa-sun");
    body.classList.toggle("darkModeBody");
}
iconMode.addEventListener("click", changeMode);
let accBtns = document.querySelectorAll(".accBG .accordion .accBtn"),
    accItems = document.querySelectorAll(".accBG .accordion .accItem");
for(let a = 0; a<accBtns.length; a++) {
    accBtns[a].onclick = function () {
        if(accItems[a].style.height == 0) {
            accItems[a].style.height = accItems[a].scrollHeight + "px";
        } else {
            accItems[a].style.height = null;
        }
    }
}
var footer = document.querySelector("#footer"),
    accBG = document.querySelector(".accBG");
var help = () => {
    accBG.classList.remove("displayNone");
}
footer.addEventListener("click", help);
var removeAcc = (r) => {
    if(r.target.classList.contains("accBG")) {
        accBG.classList.add("displayNone")
    }
}
body.addEventListener("click", removeAcc);