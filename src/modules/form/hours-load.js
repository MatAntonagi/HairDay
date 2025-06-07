import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours"


export function hoursLoad({date}){
    const opening = openingHours.map((hour) => {
        // Recupera somente a hora, sem minutos.
        const [schedulesHour] = hour.split(":")

        // Adiciona a hora na data e verfica se está no passado.
        const isHourPast =  dayjs(date).add(schedulesHour, "hour").isAfter(dayjs())
        
        return {
            hour,
            avaliable: isHourPast,
        }
    })

    console.log(opening)
}