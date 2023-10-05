
const projectContainer = document.querySelector("#project-container")

const projectTimelineTemplate = document.querySelector("#project-timeline-template > .project-timeline")
const projectLinkTemplate = document.querySelector("#project-link-template > .project-link")
const projectLinkRedirectTemplate = document.querySelector("#project-link-redirect-template > .project-link-redirect")
const projectContentTextTemplate = document.querySelector("#project-content-text-template > .project-content-text")
const projectContentLinksTemplate = document.querySelector("#project-content-links-template > .project-content-links")
const projectContentYoutubeTemplate = document.querySelector("#project-content-youtube-template > .project-content-youtube")
const projectTemplate = document.querySelector("#project-template > .project")

var project_map = {}

function createProjects() {
    let currentTimeline
    let projectTimeline
    project_data.forEach((projectData) => {
        let timeline = projectData.timeline
        // Create Project Timeline
        if (timeline != currentTimeline) {
            currentTimeline = timeline
            projectTimeline = projectTimelineTemplate.cloneNode(deep = true)
            let projectTimelineText = projectTimeline.querySelector(".timeline-text")
            projectTimelineText.textContent = timeline
            projectContainer.appendChild(projectTimeline)
        }

        // Project Listing
        let projects = projectData.projects
        projects.forEach((project) => {
            let id = project.id
            let projectNode = createProject(projectTimeline, project)
            project_map[id] = {
                project: project,
                node: projectNode
            }
        })

    })
}

function createProject(parentNode, project) {
    let projectNode = projectTemplate.cloneNode(deep = true)

    // Project ID
    let id = project.id
    let collapsiblesNodes = projectNode.querySelectorAll(".collapsible")
    collapsiblesNodes.forEach((collapsibleNode) => {
        collapsibleNode.setAttribute("target", id)
    })

    // Project Content ID
    let projectContentNode = projectNode.querySelector(".project-content")
    projectContentNode.id = id

    // Project Icon
    let projectIcon = project.icon
    let projectIconNode = projectNode.querySelector(".project-icon")
    projectIconNode.src = projectIcon

    // Project Title
    let title = project.title
    let projectTitleNode = projectNode.querySelector(".project-title")
    projectTitleNode.textContent = title

    // Project Subtitle
    let subtitle = project.subtitle
    let projectSubtitleNode = projectNode.querySelector(".project-subtitle")
    projectSubtitleNode.textContent = subtitle

    // Project Subtitle Links
    let links = project.links
    if (links) {
        let projectLinksNode = projectNode.querySelector(".project-links")
        links.forEach((link) => {
            createProjectLink(projectLinksNode, link)
        })
    }

    let collapsibleNode = projectNode.querySelector(".collapsible")
    let loadProjectContentFunction = () => {
        // Project Content
        let content = project.content
        if (content) {
            createProjectContent(projectContentNode, content)
        }
        collapsibleNode.removeEventListener('click', loadProjectContentFunction)
    }
    collapsibleNode.addEventListener('click', loadProjectContentFunction)

    parentNode.appendChild(projectNode)
    return projectNode
}

// Project subtitle links
function createProjectLink(parentNode, link) {
    let icon = link.icon
    // Redirect svg icon
    if (icon == "redirect") {
        createProjectRedirectLink(parentNode, link)
        return
    }

    let linkNode = projectLinkTemplate.cloneNode(deep = true)
    let href = link.href
    linkNode.href = href

    let iconNode = linkNode.querySelector(".project-link-icon")
    iconNode.src = icon

    parentNode.appendChild(linkNode)
}

function createProjectRedirectLink(parentNode, link) {
    let redirectNode = projectLinkRedirectTemplate.cloneNode(deep = true)

    let href = link.href
    redirectNode.href = href

    let options = link.options
    if (options.includes("rotate")) {
        let rotateNode = redirectNode.querySelector(".redirect-rotate")
        rotateNode.classList.add("rotate-180")
    }

    parentNode.appendChild(redirectNode)
}

// Collapsible Content
function createProjectContent(parentNode, content) {
    let text = content.text
    if (text) {
        createProjectContentText(parentNode, text)
    }

    let links = content.links
    if (links) {
        createProjectContentLinks(parentNode, links)
    }

}

// Text content
function createProjectContentText(parentNode, text) {
    let paragraphs = text.split("\n")
    paragraphs.forEach((paragraph) => {
        createProjectContentTextParagraph(parentNode, paragraph)
    })
}

// Paragraphs of text
function createProjectContentTextParagraph(parentNode, paragraph) {
    let textNode = projectContentTextTemplate.cloneNode(deep = true)
    // Using Inner HTML for additional formatting
    textNode.innerHTML = paragraph

    parentNode.appendChild(textNode)
}

// External embeds
function createProjectContentLinks(parentNode, links) {
    if (Object.keys(links).length == 0) {
        return
    }

    let linksNode = projectContentLinksTemplate.cloneNode(deep = true)

    let youtube = links.youtube
    if (youtube) {
        createProjectContentLinkYoutube(linksNode, youtube)
    }
    
    let itch = links.itch
    if (itch) {
        createProjectContentLinkItch(linksNode, itch)
    }

    parentNode.appendChild(linksNode)
}

// Itch.io embed
function createProjectContentLinkItch(parentNode, itch) {
    let iframe = itch.iframe
    let wrapperNode = document.createElement('div')
    wrapperNode.innerHTML = iframe
    let itchNode = wrapperNode.firstChild
    
    itchNode.classList.add("project-content-itch")
    itchNode.classList.add("w-full")
    itchNode.classList.add("md:w-[680px]")
    itchNode.removeAttribute("width")
    itchNode.height = 180

    parentNode.appendChild(itchNode)
}

// Youtube embed
function createProjectContentLinkYoutube(parentNode, youtube) {
    if (Array.isArray(youtube)) {
        youtube.forEach((yt) => {
            let youtubeNode = projectContentYoutubeTemplate.cloneNode(deep = true)
            youtubeNode.src = yt
            parentNode.appendChild(youtubeNode)
        })
        return
    }

    let youtubeNode = projectContentYoutubeTemplate.cloneNode(deep = true)

    youtubeNode.src = youtube

    parentNode.appendChild(youtubeNode)
}

createProjects()