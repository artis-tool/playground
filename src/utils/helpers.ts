import { createGlobalState, useDark } from '@vueuse/core'

export const generateHTML = (
  payload: Record<string, any>,
  isDark?: boolean,
) => {
  return `<html class="${isDark ? '' : ''}">
        <head>
            <style id="_style">${payload.css}</style>
            <script type="module" id="_script">
              ${payload.javascript}
            </\script>
        </head>
        <body>
            ${payload.html}
        </body>
    </html>`
}

export const useDarkGlobal = createGlobalState(() => useDark())

export const initialEditorValue = {
  html: '<!DOCTYPE html>\n  <html>\n\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <title>Test</title>\n    <meta name="description" content="" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n  </head>\n\n  <body class="m:0 p:0 vHeight:100vh textColor:black bgColor:white display:flex justifyContent:center alignItems:center">\n\n    <main-component></main-component>\n\n  </body>\n  </html>',
  javascript: 'import { design } from "https://unpkg.com/artis@1.0.4/artis.js";\n\nclass MainComponent extends HTMLElement {\n  constructor() {\n    super();\n  }\n  connectedCallback() {\n    const style = `\n      p:40\n      m:20\n      fontFamily:sans,serif\n      textSize:50\n      textColor:white\n      bgColor:rgba(423,145,103,1)\n      curveStyle:inset\n      curveWidth:10\n      curveRadius:20\n      cursor:pointer\n    `;\n    const tmpl = document.createElement("template");\n    tmpl.innerHTML = `\n      <div class="${style}">\n        Hello World!\n      </div>\n    `;\n    this.appendChild(tmpl.content.cloneNode(true));\n    design(true); // init artis.js\n  }\n}\ncustomElements.define("main-component", MainComponent);\n',
}
