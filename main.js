import htm from "https://unpkg.com/htm?module";
import { h, render } from "https://unpkg.com/preact@10.5.13?module";

const html = htm.bind(h);

function App(props) {
  return html`<p>Hello, ${props.name}!</p>`;
}

render(html`<${App} name="developer" />`, document.getElementById("app"));
