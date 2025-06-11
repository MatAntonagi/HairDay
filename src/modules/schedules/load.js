import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

// Seleciona o input de data.
const selectDate = document.getElementById("date")

export async function schedulesDay() {
    // Obtém a data do input.
    const date =  selectDate.value

    // Busca na API os agendamentos.
    const dailySchedules = await scheduleFetchByDay({ date })

    // Exibe os agendamentos.
    schedulesShow({ dailySchedules })

    // Renderiza as horas Disponíveis.
    hoursLoad({ date, dailySchedules })
}