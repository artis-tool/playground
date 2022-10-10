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
  html: '<!DOCTYPE html>\n  <html>\n\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <title></title>\n    <meta name="description" content="" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n  </head>\n\n  <body class="m:0 p:0 vHeight:100vh textColor:black bgColor:rgba(31,34,38,1) display:flex justifyContent:center alignItems:center">\n\n    <main-component></main-component>\n\n  </body>\n  </html>\n',
  javascript: 'import { design } from "https://unpkg.com/artis@1.1.0/artis.js";\n\nclass MainComponent extends HTMLElement {\n  constructor() {\n    super();\n  }\n  connectedCallback() {\n    const cardStyle = `stack:2 position:relative h:200 w:300 display:flex justifyContent:center alignItems:center bgColor:rgba(63,70,78,1) curveRadius:30 overflow:hidden`;\n    const imageStyle = `stack:3 position:absolute top:-60 right:-60 transform:rotate(25deg) h:200 w:200 imageFit:cover imagePosition:center filter:saturate(3)`;\n    const outerShapeStyle = `stack:1 position:absolute h:200 w:200 top:-60 right:-60 bgColor:white curveRadius:60 transform:rotate(45deg) opacity:0.05`;\n    const shapeStyle = `stack:2 position:absolute h:150 w:150 bgColor:transparent curveRadius:100 curveWidth:40 curveStyle:solid curveColor:white opacity:0.1`;\n    const textStyle = `stack:3 mt:10 p:30 textSize:30 textColor:white fontFamily:sans,serif`;\n    const footerTextStyle = `position:absolute bottom:-30 left:0 textColor:rgba(255,255,255,0.40) textAlign:center vWidth:100%`;\n\n    const tmpl = document.createElement("template");\n    tmpl.innerHTML = `<div class="position:relative">\n        <div class="${outerShapeStyle}"></div>\n        <img class="${imageStyle} filter:contrast(0) opacity:0.5" src="https://artisjs.netlify.app/logo.svg" alt="Artis" loading="lazy" />\n        <div class="${cardStyle}">\n          <img class="${imageStyle}" src="https://artisjs.netlify.app/logo.svg" alt="Artis" />\n          <div class="${shapeStyle} top:-60 right:-60"></div>\n          <div class="${shapeStyle} top:-40 right:-30"></div>\n          <div class="${shapeStyle} top:-20 right:-20"></div>\n          <div class="${textStyle}">\n            Hello <br> World!\n            <div class="textSize:60 fontFamily:serif">\n              I\'m artis\n            </div>\n          </div>\n        </div>\n        <div class="${footerTextStyle}">\n          I can do simple thing, Im shy!\n        </div>\n      </div>\n    `;\n    this.appendChild(tmpl.content.cloneNode(true));\n    design(true); // init artis.js\n  }\n}\ncustomElements.define("main-component", MainComponent);\n',
}
