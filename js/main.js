function createElemWithText(tagName = 'p', text = '', className) {
    // Create the element using tagName
    const element = document.createElement(tagName);
    // set the text content
    element.textContent = text;

    // If className is provided, set it
    if (className) {
        element.className = className;
    }

    //return element
    return element;
}

