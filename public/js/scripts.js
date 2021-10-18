var showmore_btn;
var toCollapse;

window.onload = function () {
    showmore_btn = document.getElementById('rotateBtn');
    toCollapse = document.getElementsByClassName('UtilContainer')[0];
    toCollapse.style.display = 'none';
}

function showMore() {
    if (toCollapse.style.display === 'none') {
        showmore_btn.style.transform = 'rotate(180deg)';
        toCollapse.style.display = 'grid';
        } else {
            showmore_btn.style.transform = 'rotate(0)';
            toCollapse.style.display = 'none';
        }
}