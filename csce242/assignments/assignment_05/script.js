let count = 0;

function incrementCount() {
    count++;
    document.getElementById('count').textContent = count;
}

function refreshImage() {
    setTimeout(function () {
        location.reload();
    }, 500); // Timeout is optional for smoother transition
}
