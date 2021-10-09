export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  // aqui pegou tanto o id quando o diretório p onde iria
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    /*   const topo = section.offsetTop;
    FORMA ALTERNATIVA
     window.scrollTo({
       top: topo,
       behavior: "smooth"
     }); */
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
