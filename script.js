
let dateEl = document.getElementById("date-el")
let textEl = document.getElementById("name-el")
let saveBtn = document.getElementById("save-btn")
let tableEl = document.getElementById("table-el")

saveBtn.addEventListener("click", function() {
    let date = dateEl.value
    console.log(date)

    let name = textEl.value
    console.log(name)

    tableEl.innerHTML += `
        <tr>
            <td>${date}</td>
            <td>${name}</td>
        </tr>
    `
})