'use strict';

//wip
const clientUUID = localStorage.getItem('clientUUID')
document.cookie = `uuid=${clientUUID}; SameSite=lax;`
fetch('/userlog', {
    credentials: 'include'
})

const stylesheet = newElem('link', {rel: 'stylesheet', href: '/scss'})

async function newElem(type = "p", {...options} = {}, br, parent = document.body) {
    const node = document.createElement(type);
    Object.assign(node, options)
    parent.appendChild(node)
    br && newElem('br', parent)
    return node;
}

let header = newElem('h2', { innerHTML: 'Shortcuts'})
let links = [
    newElem('a', { innerHTML: 'Postman', href: 'https://www.postman.com'}, true), 
    newElem('a', { innerHTML: 'VSCode Insiders', href: 'https://insiders.vscode.dev'}, true), 
    newElem('a', { innerHTML: 'VSCode Stable', href: 'https://vscode.dev'}, true)
]

/**
 * Self Destruct, no longer useful.
 */

let self = document.querySelector("script[src='js']");
self.parentNode.removeChild(self)