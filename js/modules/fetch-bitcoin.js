export default function initFetchBtc() {
  async function fetchBtc(valor) {
    const li = document.querySelector(".btc-preco");

    try {
      const valorBtc = await fetch(valor);
      const btcJSON = await valorBtc.json();
      li.innerText = (1000 / btcJSON.BRL.buy).toFixed(4);
    } catch (f) {
      li.innerText = "Falha na comunicação com servidores";
    }
  }
  fetchBtc("https://blockchain.info/ticker");
}
