const periods = document.querySelectorAll(".period")

// Gera evento de click oara cada lista.
periods.forEach((period) => {
    // Captura o evento de clique na lista.
    period.addEventListener("click", (event) =>{
        if (event.target.classList.contains("cancel-icon")) {
            // Obtém a li pai do elemento clicado.
            const item = event.target.closest("li")
            const { id } = item.dataset

            if(id){
                const isConfirm = confirm("Tem certeza que quer cancelar este agendamento?")

                if(isConfirm){
                    console.log("REMOVER")
                }
            }
        }
    })
})