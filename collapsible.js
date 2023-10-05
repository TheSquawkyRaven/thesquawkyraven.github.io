
const collapsibles = document.querySelectorAll(".collapsible:not([target=''])")
var col = {}

collapsibles.forEach((collapsible) => {
    let target = collapsible.getAttribute("target")
    if (col[target] === undefined) {
        col[target] = {
            sources: [],
            targetNodes: document.querySelectorAll(`#${target}`)
        }
    }
    col[target].sources.push(collapsible)
    collapsible.addEventListener('click', () => {
        toggleCollapsible(collapsible)
    })
    toggleCollapsible(collapsible, true)
})


function toggleCollapsible(collapsible, doCollapse) {
    if (doCollapse === undefined) {
        doCollapse = collapsible.getAttribute("collapsed") !== "true"
    }
    let target = collapsible.getAttribute("target")
    col[target].sources.forEach((source) => {
        let onCollapseNodes = collapsible.querySelectorAll(".on-collapse")
        onCollapseNodes.forEach((onCollapseNode) => {
            let onCollapse = onCollapseNode.getAttribute("oncollapse")
            if (onCollapse !== null) {
                if (doCollapse) {
                    onCollapseNode.classList.add(onCollapse)
                }
                else{
                    onCollapseNode.classList.remove(onCollapse)
                }
            }
        })
        source.setAttribute("collapsed", doCollapse)
    })
    let targetNodes = col[target].targetNodes
    targetNodes.forEach((targetNode) => {
        if (doCollapse) {
            targetNode.classList.add("collapse-anim")
            targetNode.classList.remove("expand-anim")
            setTimeout(() => {
                targetNode.classList.add("hidden")
            }, 0.5);
        }
        else {
            targetNode.classList.add("expand-anim")
            targetNode.classList.remove("collapse-anim")
            targetNode.classList.remove("hidden")
        }
    })
}

function collapse(collapsible) {
    toggleCollapsible(collapsible, true)
}

function expand(collapsible) {
    toggleCollapsible(collapsible, false)
}


function collapseAll() {
    collapsibles.forEach((collapsible) => {
        collapse(collapsible)
    })
}

function expandAll() {
    collapsibles.forEach((collapsible) => {
        expand(collapsible)
    })
}
