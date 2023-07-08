class TicketManajer{
    eventos = []
    #precioBaseDeGanancia = 0.15
    idEvt = 0

    agregarEvento(nombre, lugar, precio ,capacidad = 50, fecha = new Date().toLocaleDateString()) {
        this.idEvt++
        const nuevoEvento = {
            id: this.idEvt,
            nombre,
            lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: [],
        }

        this.eventos.push(nuevoEvento);


    }


    getEventos() {
        return this.eventos
    }

    AgregarUsuario(idEvt, idUsuario){
        const evento = this.eventos.find(evento => evento.id === idEvt)
        if(evento){
            evento.participantes.includes(idUsuario)
            ?
            console.log('El usuario ya existe')
            :
            evento.participantes.push(idUsuario)
        }else{
            console.log('No se encuentra el evento')
        }
     }

     ponerEventoEnGira(idEvt, nuevaLocalidad, nuevaFecha) {
        const evento = this.eventos.find(evento => evento.id === idEvt)

        if (evento){
            this.idEvt++
            const nuevoEvento = {
                ...evento,
                id: this.idEvt,
                lugar: nuevaLocalidad,
                fecha: nuevaFecha,
                participantes: [],
            }

            this.eventos.push(nuevoEvento)
        }
     }
 }



    
const islaDeLobos = new TicketManajer()

islaDeLobos.agregarEvento('Isla de lobos', 'Punta del este', 250)

islaDeLobos.AgregarUsuario(1,20)

islaDeLobos.ponerEventoEnGira(1, 'Rusia', new Date().toLocaleDateString())

console.log(islaDeLobos.getEventos())