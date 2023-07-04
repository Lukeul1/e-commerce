window.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById('header-container').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'header.html', true);
    xhr.send();
});