
let dateEl = document.getElementById("date-el")
let textEl = document.getElementById("name-el")
let saveBtn = document.getElementById("save-btn")
let tableEl = document.getElementById("table-el")

let values = JSON.parse(localStorage.getItem("values"))

if (values === null) {
    values = {}
}

function render() {
    tableEl.innerHTML = ""
    for (let date in values) {
        let first = true
        let total = values[date].length

        for (let name of values[date]) {
            if (first) {
                tableEl.innerHTML += `
                <tr id="tr-main">
                    <td>${date}</td>
                    <td>${name}</td>
                    <td>${total}</td>
                </tr>
                `

                first = false
            } else {
                tableEl.innerHTML += `
                <tr>
                    <td></td>
                    <td>${name}</td>
                    <td></td>
                </tr>
                `
            }
        }
    }
}

saveBtn.addEventListener("click", function () {
    let date = dateEl.value
    console.log(date)

    let name = textEl.value
    console.log(name)

    if (!values[date]) {
        values[date] = []
    }

    if ( date === "" || name === "" ) {
        alert("Please enter date and student name!")
        return
    }

    values[date].push(name)

    localStorage.setItem("values", JSON.stringify(values))
    render()
    textEl.value = ""
})
render()