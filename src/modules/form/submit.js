import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para formatar input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual / Define a data minima como o dia atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    // Previne o carregamento padrão.
    event.preventDefault()
}