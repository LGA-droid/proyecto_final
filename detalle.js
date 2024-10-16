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









