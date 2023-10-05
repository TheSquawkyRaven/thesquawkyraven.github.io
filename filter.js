
const filterContainer = document.querySelector("#filter-container")
const filterClear = document.querySelector("#filter-clear")
const filterProjectText = document.querySelector("#filter-project-text")

const filterTemplate = document.querySelector("#filter-template > .filter")

var tags = []
var isFiltering = false

function findTags() {
    let unsortedTags = {}
    for (let key in project_map) {
        let value = project_map[key]
        let project = value.project
        let projectNode = value.node

        project.tags.forEach((tag) => {
            if (!unsortedTags.hasOwnProperty(tag)) {
                unsortedTags[tag] = {
                    nodes: []
                }
            }
            unsortedTags[tag].nodes.push(projectNode)
        })
    }
    sortTags(unsortedTags)
}

function sortTags(unsortedTags) {
    for (let key in unsortedTags) {
        tags.push([key, unsortedTags[key].nodes.length])
    }
    tags.sort((a, b) => {
        return b[1] - a[1]
    })
}

function createTags() { 
    tags.forEach((element) => {
        let tag = element[0]
        let filter = filter_data[tag]
        if (filter === undefined) {
            console.warn(`Tag ${tag} not found in filter data`)
            return
        }
        filter.id = tag
        createTag(filterContainer, filter)
    })

    filterClear.addEventListener('click', removeFilter)
}

function createTag(parentNode, filter) {
    let filterNode = filterTemplate.cloneNode(deep = true)

    let name = filter.name
    let filterNameNode = filterNode.querySelector(".filter-text")
    filterNameNode.textContent = name    

    let icon = filter.icon
    let filterIconNode = filterNode.querySelector(".filter-icon")
    filterIconNode.src = icon   

    filterNode.addEventListener('click', () => {
        filterWithTag(filter)
    })

    parentNode.appendChild(filterNode)
}

function filterWithTag(filter) {
    isFiltering = true
    let tagID = filter.id
    let tagName = filter.name
    filterProjectText.textContent = tagName
    filterClear.classList.remove("hidden")
    for (let id in project_map) {
        let value = project_map[id]
        let project = value.project
        let node = value.node
        let tags = project.tags

        if (tags.includes(tagID)) {
            node.classList.remove("hidden")
            node.parentNode.classList.remove("hidden")
        }
        else {
            node.classList.add("hidden")
            let count = node.parentNode.querySelectorAll(":scope > :not(.hidden)").length
            if (count == 2) {
                node.parentNode.classList.add("hidden")
            }
        }
    }
}

function removeFilter() {
    isFiltering = false
    filterProjectText.textContent = ""
    filterClear.classList.add("hidden")
    for (let id in project_map) {
        let value = project_map[id]
        let node = value.node
        
        node.classList.remove("hidden")
        node.parentNode.classList.remove("hidden")
    }
}

findTags()
createTags()
