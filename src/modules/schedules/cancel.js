import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

// Gera evento de click oara cada lista.
periods.forEach((period) => {
    // Captura o evento de clique na lista.
    period.addEventListener("click", async (event) =>{
        if (event.target.classList.contains("cancel-icon")) {
            // Obtém a li pai do elemento clicado.
            const item = event.target.closest("li")
            const { id } = item.dataset

            if(id){
                const isConfirm = confirm("Tem certeza que quer cancelar este agendamento?")

                if(isConfirm){
                    await scheduleCancel({id})
                    schedulesDay()
                }
            }
        }
    })
})