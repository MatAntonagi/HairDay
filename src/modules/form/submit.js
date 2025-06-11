import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual / Define a data minima como o dia atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    // Previne o carregamento padrão.
    event.preventDefault()

    
    try {
        // Recupera o nome do cliente.
        const name = clientName.value.trim()
        
        if(!name){
            return alert("Informe o nome do cliente!")
        }

        // Recupera o horario selecionado.
        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            return alert("Selecione a Hora.")
        }

        // Recuperar somente a hora.
        const [hour] = hourSelected.innerText.split(":")

        // Inserir a hora na data.
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime().toString()

        // Faz o agendamento.
        await scheduleNew({
            id,
            name,
            when,
        })

        // Recarrega os agendamentos.
        await schedulesDay()

        // Limpa o input de nome do cliente.
        clientName.value = ""

    } catch (error) {
        alert("Não foi possivel realizar o agendamento")
    }
}