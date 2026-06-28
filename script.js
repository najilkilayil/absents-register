
let dateEl = document.getElementById("date-el")
let textEl = document.getElementById("name-el")
let saveBtn = document.getElementById("save-btn")
let tableEl = document.getElementById("table-el")

let values = {}

saveBtn.addEventListener("click", function () {
    let date = dateEl.value
    console.log(date)

    let name = textEl.value
    console.log(name)

    if (!values[date]) {
        values[date] = []
    }

    values[date].push(name)

    textEl.value = ""

    tableEl.innerHTML = ""
    for (let date in values) {
        let first = true

        for (let name of values[date]) {
            if (first) {
                tableEl.innerHTML += `
                <tr>
                    <td>${date}</td>
                    <td>${name}</td>
                </tr>
                `

                first = false
            } else {
                tableEl.innerHTML += `
                <tr>
                    <td></td>
                    <td>${name}</td>
                </tr>
                `
            }
        }
    }
})