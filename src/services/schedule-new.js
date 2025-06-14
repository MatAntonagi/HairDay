import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when}){
    try {
        // Faz a requisição para enciar os dados do agendamento.
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id, name, when }),
        })
        // Exibe mensagem de agendamento realizado.
        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        alert("Não foi possivel agendar tente novamente mais tarde.")
    }
}