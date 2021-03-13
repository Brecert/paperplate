customElements.define(
  "template-element",
  class extends HTMLTemplateElement {
    constructor() {
      super();
      this.defineCustomElement();
    }

    defineCustomElement() {
      const template = this;
      const elementName = template.dataset.elementName;

      if (!elementName) {
        throw new Error("data-element-name must be defined");
      }

      customElements.define(
        elementName,
        class extends HTMLElement {
          constructor() {
            super();
            template.content;
            this.attachShadow({ mode: "open" }).appendChild(
              template.content.cloneNode(true)
            );
          }
        }
      );
    }
  },
  { extends: "template" }
);