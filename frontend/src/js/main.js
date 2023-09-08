const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const imageSlider = document.querySelectorAll(".image-slider");

let flag = 0;

function sliderDisplay(index) {
    for (let items of imageSlider) {
        items.style.display = "none";
    }

    if (index >= imageSlider.length) {
        flag = 0;
        index = 0;
    } else if (index < 0) {
        flag = imageSlider.length - 1;
        index = imageSlider.length - 1;
    }
    imageSlider[index].style.display = "block";

}
  
sliderDisplay(flag);

arrowLeft.addEventListener("click", () => {
    let num = 1;
    flag = flag - num;
    sliderDisplay(flag);
});
    
arrowRight.addEventListener("click", () => {
    let num = 1;
    flag = flag + num;
    sliderDisplay(flag);
});



// const furniture = document.getElementById('furniture')
// const furnitureList = document.getElementById('furniture-list')

// furniture.addEventListener('mouseenter', (() => {
//     furnitureList.classList.toggle('hidden')
// }))
// furniture.addEventListener('mouseout', (() => {
//     furnitureList.classList.toggle('hidden')
// }))  

