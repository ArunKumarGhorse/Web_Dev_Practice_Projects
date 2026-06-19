// const root = document.getElementById("root");

// const element1 = document.createElement('h1');
// element1.id = "first";
// element1.className = "h1";
// element1.textContent = "I am Arun Ghorse.";
// element1.style.backgroundColor = "pink";

// const element2 = document.createElement('h2');
// element2.id = "second";
// element2.className = "h2";
// element2.textContent = "I am Vaishu Ghorse.";
// element2.style.backgroundColor = "green";

// root.append(element1);
// root.append(element2);

// Optimal way
const React = {
    createElement: function (tag, attributes, child) {
        const element = document.createElement(tag);
        for (const key in attributes) {
            if (key === 'style') {
                Object.assign(element.style, attributes.style);
            } else {
                element[key] = attributes[key];
            }

        }
        element.textContent = child;
        return element;
    }
}

const ReactDOM = {
    render: function (child, parent) {
        parent.append(child);
    }
}

const root = document.getElementById("root");
const el1 = React.createElement("h1", { id: "first", className: "h1", style: { backgroundColor: "blue" } }, "I am Arun Ghorse");
ReactDOM.render(el1, root);
