export const genId = () => "id-" + Math.random().toString(16).slice(2);

export function formatToRelative(dateString: string): string {
  const fecha = new Date(dateString);
  const ahora = new Date();
  const diferencia = (ahora.getTime() - fecha.getTime()) / 1000; // En segundos
  if (diferencia < 60) {
    return "hace menos de un minuto";
  } else if (diferencia < 3600) {
    const minutos = Math.floor(diferencia / 60);
    return `hace ${minutos} ${minutos === 1 ? "minuto" : "minutos"}`;
  } else if (diferencia < 86400) {
    const horas = Math.floor(diferencia / 3600);
    return `hace ${horas} ${horas === 1 ? "hora" : "horas"}`;
  } else if (diferencia < 604800) {
    const dias = Math.floor(diferencia / 86400);
    return `hace ${dias} ${dias === 1 ? "día" : "días"}`;
  } else {
    return fecha.toLocaleDateString();
  }
}
