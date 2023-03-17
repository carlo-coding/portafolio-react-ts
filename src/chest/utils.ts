export const genId = () => "id-" + Math.random().toString(16).slice(2);

export function formatToRelative(dateString: string): string {
  const fecha = new Date(dateString);
  const ahora = new Date();
  const diferencia = (ahora.getTime() - fecha.getTime()) / 1000; // En segundos
  if (diferencia < 60) {
    return "less than a minute ago";
  } else if (diferencia < 3600) {
    const minutos = Math.floor(diferencia / 60);
    return `${minutos} ${minutos === 1 ? "minute" : "minute"} ago`;
  } else if (diferencia < 86400) {
    const horas = Math.floor(diferencia / 3600);
    return `${horas} ${horas === 1 ? "hour" : "hours"} ago`;
  } else if (diferencia < 604800) {
    const dias = Math.floor(diferencia / 86400);
    return `${dias} ${dias === 1 ? "day" : "days"} ago`;
  } else {
    return fecha.toLocaleDateString();
  }
}
export function sortObjectsByCreatedAt(objects: any[]) {
  return objects.slice().sort((a: any, b: any) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });
}
