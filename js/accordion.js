const container = document.getElementById("content");

function clearClass(node, className) {
    node.classList.remove(className);
}

function show(heading) {
    const cls = "active";
    var elem = heading;
    const parent = heading.parentElement;
    const actives = parent.getElementsByClassName(cls);

    for (const active of actives) {
        clearClass(active, cls);
    }

    heading.nextElementSibling.classList.add('active');
}

if (container.hasChildNodes()) {
    let children = container.getElementsByTagName('a');

    for (const node of children) {
        // const content = node.nextElementSibling;

        node.addEventListener("click", function () {
            show(this);
        });
    }
}