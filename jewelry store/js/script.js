/* galerija */
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

const modal = document.getElementById('myModal');
const images = document.getElementsByClassName('myImages');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function (evt) {
        console.log(evt);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}


