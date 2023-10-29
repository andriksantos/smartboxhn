function horario() {
  const hoy = new Date();
  const dia = hoy.getDay();
  const hora = hoy.getHours();
  const minutos = hoy.getMinutes();
  const diasLaborables = [1, 2, 3, 4, 5];

  // Verifica si es un día laborable
  if (diasLaborables.includes(dia)) {
    // Verifica si es antes de las 8:00 am
    if (hora < 8) {
      return "El horario de atención es de lunes a viernes de 8:00 am a 5:30 pm";
    }
    // Verifica si es después de las 5:30 pm
    else if (hora >= 17 && minutos >= 30) {
      return "Cerrado";
    }
    // Si es un día laborable y está dentro del horario de atención, devuelve el horario
    else {
      return "Estamos abiertos hoy de lunes a viernes de 8:00 am a 5:30 pm";
    }
  }
  // Verifica si es sábado y está dentro del horario de atención
  else if (dia === 6 && hora >= 8 && hora < 12) {
    return "Estamos abiertos hoy sábado de 8:00 am a 12:00 pm";
  }
  // Si no es un día laborable o está fuera del horario de atención, devuelve el mensaje de cerrado
  else {
    return "Cerrado";
  }
}