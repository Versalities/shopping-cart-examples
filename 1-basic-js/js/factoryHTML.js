//factory for creating html elements

const FactoryHTML = (element, cssClass, innerHTML) => {
  let htmlElement = document.createElement(element);

  htmlElement.className = cssClass || null;

  htmlElement.innerHTML = innerHTML || null;

  return htmlElement;
}
