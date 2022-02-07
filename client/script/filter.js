function filterDevices() {
    let filter = document.querySelector('#filter');
    let name = document.querySelectorAll('.nameDevices');
    let devices = document.querySelectorAll('.screenGrp');
    for (let i = 0; i < devices.length; i++) {
        let element = (filter.value).toLowerCase();
        if (name[i].toLowerCase().includes(element) === true) {
            devices[i].style.display = "block";
        } else {
            devices[i].style.display = "None";
        }
    }
};

window.onload = function () {
    filterDevices()
}