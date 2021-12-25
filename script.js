var bgContainer = document.getElementById('bg_container');
var spanElement = "";

for (let i = 1; i <= 100; i++) {
    spanElement = document.createElement('span');
    bgContainer.append(spanElement);
}


bgContainer.childNodes.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.zIndex = '2'
        item.style.transform = 'translateY(200vh) rotate(360deg)'
        item.style.opacity = 0
        console.log("item")
    })
})