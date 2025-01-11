function customRender(reactElement, container){
    const domElement=document.createElement()
} 
const reactElement= {
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank"
    },
    children:'Click me to visit google'
}
const container=document.querySelector('#root');
customrender(reactElement,container);