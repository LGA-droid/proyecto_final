const menus=[{nombre:"inicio",url:"index.html"},
			{nombre:"¿quienes somos?",url:"quienes.html"},
			{nombre:"contacto",url:"contacto.html"},
]

function cargarmenu() {
	const enlaces = document.getElementById('ulmenu')
	for (const menu of menus) {
		let lista = document.createElement("li")
		lista.innerHTML=`<a href=${menus.url}>${menus.nombre}</a>
		`
	}
}
cargarmenu()
const productos=[{id:1,producto:"tv",urlimg:"index.html",precio:"33"},
			{producto:"?",urlimg:"quienes.html",precio:"33",precio:"33"},
			{producto:"telefono",urlimg:"contacto.html",precio:"33"},
]

function cargarproductos() {
	const enlaces = document.getElementById('ulmenu')
	for (const producto of productos) {
		let lista = document.createElement("div")
		lista.innerHTML=`	<h3>${producto.nombre}</h3>
							<img src=${producto.urlimg}>
							<p>${producto.precio}</p>
							<button onclick="verdetalle(${producto.nombre})"></button>
		`
		enlaces.appendChild(lista)
	}
}

function verdetalle(nombreproducto) {
	const buscarproducto=productos.find(producto=>producto.id===parseInt(idproducto))
localStorage.setItem("detalleproducto",buscarproducto)	
window.location.href="detalle.html" 
}



