let buttonEl = document.getElementById('buttonId')
let secureButtonEl = document.getElementById('secureButton')
let closeButtonEl = document.getElementById('closeButton')

let firstnameEl = document.getElementById('firstname')
let first = firstnameEl.value

let lastnameEl = document.getElementById('lastname')
let last = firstnameEl.value

let businessEmailEl = document.getElementById('businessEmail')
let email = firstnameEl.value

let phonenumberEl = document.getElementById('phonenumber')
let number = firstnameEl.value

let registerFromEl = document.getElementById("registerFrom")

let para1 = document.getElementById('para1')
let para2 = document.getElementById('para2')
let para3 = document.getElementById('para3')
let para4 = document.getElementById('para4')

function openpopup() {
    registerFromEl.classList.add('open')

}

function closeButton() {
    registerFromEl.classList.remove('open')
}

function secureButton() {
    if (firstnameEl.value === "") {
        para1.classList.remove("p22")
    } else if (firstnameEl.value !== "") {
        para1.classList.add("p22")
    }
    if (firstnameEl.value === "") {
        para2.classList.remove("p22")
    } else if (firstnameEl.value !== "") {
        para2.classList.add("p22")
    }
    if (firstnameEl.value === "") {
        para3.classList.remove("p22")
    } else if (firstnameEl.value !== "") {
        para3.classList.add("p22")
    }
    if (firstnameEl.value === "") {
        para4.classList.remove("p22")
    } else if (firstnameEl.value !== "") {
        para4.classList.add("p22")
    }
}