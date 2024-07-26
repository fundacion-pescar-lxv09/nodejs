const Home = () => `
<p>
    BIENVENIDO A LA PAGINA PRINCIPAL, ESPERAMOS QUE TU EXPERIENCIA FABULOSA. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusantium omnis laudantium explicabo adipisci quas, molestiae ullam, illo quidem ut nam consequatur, ipsam optio enim soluta eaque. Accusantium ad dolorem ErrorPage aut vitae molestiae ipsa facere cum quibusdam corrupti necessitatibus repudiandae, culpa similique ea beatae quisquam. Odit accusantium dolore voluptate?
</p>`;
const Products = () => `
<ul>
    <li>Trenes</li>
    <li>Camiones</li>
    <li>Tractores</li>
</ul>`;
const Services = () => `
<form action="/contact" method="post">
    <h2>Solicite su servicio</h2>
    <label for="name">ingrese su nombre</label>
    <input id="name" name="" type="text">
    <label for="email">ingrese su correo</label>
    <input id="email" name="" type="email">
    <label for="consult">ingrese su consulta</label>
    <textarea id="consult"></textarea>
    <button>Enviar</button>
</form>`;
const ErrorPage = () => `
<h1>Error 404 <small>Pagina no Encontrada</small></h1>
<p>Le pedimos que intente nuevamente o ingrese al siguiente <a href="/">link</a>`
module.exports = { Home, Products, Services, ErrorPage }