let leftBtn = document.getElementById("left-btn");
let rigthBtn = document.getElementById("right-btn");
let images = Array.from(document.querySelectorAll(".images-container img"));
let list = Array.from(document.querySelectorAll(".points li"));
let count = 1;


rigthBtn.onclick = () => {
    console.log(count);
    list.forEach((e) => e.classList.remove("active"));
    if (count === images.length) {
        list[count - 1].className = "active";
        return false;
    }
    else {
        if (images[count - 1] !== undefined) images[count - 1].style.right = "-99999px";
        images[count].style.left = 0;
        count++;
        list[count - 1].className = "active";
    }
}
leftBtn.onclick = () => {
    console.log(count);
    list.forEach((e) => e.classList.remove("active"));
    if (count === 1) {
        list[count - 1].className = "active";
        return false;
    }
    else {
        if (count === images.length) {
            images[count - 1].style.left = "-9999px";
            count--;
            images[count - 1].style.right = 0;
            list[count - 1].className = "active";
        }
        else {
            if (images[count - 1] !== undefined) images[count - 1].style.left = "-99999px";
            count--;
            images[count - 1].style.right = 0;
            list[count - 1].className = "active";
        }
    }
}