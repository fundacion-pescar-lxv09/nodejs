// Datos simulados
export const appData = {
    title: "Pescar Express",
    message: "Bienvenido a la pagina principal",
    links: [
        { text: "Inicio", link: "/" },
        { text: "Perfil", link: "/user/1" },
        { text: "Publicaciones", link: "/posts" }
    ]
}
export const user = {
    name: "cristian",
    email: "cristiandracedo@hotmail.com",
    address: {
        street: "calle falsa",
        number: 123,
        zipcode: "ABC321",
        city: "Springfield"
    }
}
export const posts = [
    {
        title: "publicacion x",
        description:  "nuevo producto",
        price: "$ 999.9999"
    },
    {
        title: "publicacion y",
        description:  "nuevo producto",
        price: "$ 2999.99"
    },
    {
        title: "publicacion z",
        description: "nuevo producto",
        price: "$ 5999.00"
    }
]