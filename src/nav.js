const links = [
    {link: "home", text: "Inicio"},
    {link: "products", text: "Tienda"},
    {link: "services", text: "Atencion"},
]
const menuList = (array, res="") => {
    array.map(({link, text}) => 
    res+=`<li><a class="nav-link" href="/${link}">${text}</a></li>`)
    return res;
}
const Nav = () => `
    <nav class="navbar navbar-dark navbar-expand-md bg-dark">
        <ul class="navbar-nav navbar-collapse">
            ${menuList(links)}
        </ul>
    </nav>`

module.exports = Nav