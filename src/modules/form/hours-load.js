import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad({date}){
    const opening = openingHours.map((hour) => {
        // Recupera somente a hora, sem minutos.
        const [schedulesHour] = hour.split(":")

        // Adiciona a hora na data e verfica se está no passado.
        const isHourPast =  dayjs(date).add(schedulesHour, "hour").isAfter(dayjs())
        
        return {
            hour,
            available: isHourPast,
        }
    })

    // Renderiza os horários.
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        // Separa os horários por períodos.
        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        } else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    // Adiciona o evento de click, nos horários disponíveis.
    hoursClick()
}

// Função para add o nome do período.
function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}