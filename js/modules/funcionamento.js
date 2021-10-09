export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

// const agora = new Date();
// const futuro = new Date("Jan 25 2025");

// function transformaDia(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformaDia(agora.getTime());
// const diasFuturo = transformaDia(futuro.getTime());

// console.log(agora.getDate());
// console.log(futuro);
// console.log(Math.floor(diasFuturo - diasAgora));
