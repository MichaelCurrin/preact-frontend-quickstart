import htm from "https://unpkg.com/htm?module";
import { h, render } from "https://unpkg.com/preact@10.5.13?module";

const html = htm.bind(h);

function TextSample(props) {
  const msg = props.msg;
  return html` <p>Message: <i>${msg}</i></p> `;
}

function App(props) {
  const { name } = props;
  const msg = "This is a Preact demo";

  return html`
    <div>
      <h2>Greeting with fixed value</h2>
      <p>Hello, <b>${name}</b>!</p>

      <h2>Text sample</h2>
      <${TextSample} msg=${msg} />
    </div>
  `;
}

render(html`<${App} name="developer" />`, document.getElementById("app"));
