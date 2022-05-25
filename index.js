"use strict";

let userCelular = false;

if( (navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i))){
	userCelular = true;
	console.log("Estás usando un celular")
}else{
	userCelular = false;
}

// let mediaQuery =  window.matchMedia("(max-width: 436px)");

// if(mediaQuery.matches){
// 	userCelular = true;
// }else{
// 	userCelular = false;
// }
const main = document.querySelector(".main-principal");
const buttonOptions = document.querySelector(".buttonOptions");
const menuMovil = document.querySelector(".menu-movil");
let state = true;
const mostrarMenuMovil=(estado)=>{
	if(state){
		menuMovil.style.transform = "translateY(0px)"
		console.log("funciona")
		state = false;
	}else{
		menuMovil.style.transform = "translateY(-1000px)";
		state = true;
	}
	if(estado){
		menuMovil.style.transform = "translateY(-1000px)";
	}
}

if(userCelular){
	buttonOptions.setAttribute("onclick", "mostrarMenuMovil()")
}else{
	buttonOptions.setAttribute("onclick", "mostrarModal('open')")
}

const scroll =()=>{
	window.scrollTo(-1000,-1000)
}
setTimeout(()=>{
	scroll();
},100)


const colores = ["#FFFF3C","#009323","#9F2FB2","#392FB2","#F83B23","#FFFF3C","#009323","#9F2FB2","#392FB2","#F83B23"];
const titleFutss = document.querySelector(".title-futss");
const letraColor = document.querySelectorAll(".letra");

const pintar=(letra)=>{
	for(let i=0;i<letra.length;i++){
		letra[i].style.color = colores[i];
	}
}
pintar(letraColor);

const rellenoHtml = document.querySelectorAll(".relleno");
const logoMain = document.querySelector(".logo-main");


const animation=(value, relleno, logo)=>{
	if(value == "active"){
		for(let i = 0; i < relleno.length; i++){
			relleno[i].style.transform = "translate(0px)"
			relleno[i].style.transition = "all 0.5s ease";
		}
		if(!userCelular){
			logo.style.transform = "translateX(325%)";
		}else{
			logo.style.display = "none";
		}
	}else{
		for(let i = 0; i < relleno.length; i++){
			relleno[i].style.transform = "translate(5000px)";
			relleno[i].style.transition = "none";
		}
		logo.style.transform = "translateX(0)";
	}	
	
}
titleFutss.addEventListener("mouseover",()=>{
	animation("active", rellenoHtml, logoMain)
})
titleFutss.addEventListener("mouseout",()=>{
	animation("desactive", rellenoHtml, logoMain)
})

const datosOcultar = document.querySelectorAll(".ocultar");
const modal = document.querySelector(".big-modal");
const mostrarModal=(value)=>{
	if(value == "open"){
		modal.style.transform = "translate(0px)";
		modal.style.transition = "transform 0.5s ease";
	}else{
		modal.style.transform = "translate(-5000px)";
		setTimeout(()=>{
			modal.style.transform = "translate(10000px)";
			modal.style.transition = "none";
		},100)
	}
}

const carrusel = document.querySelector(".carrusel");

let carruselDiv = document.querySelectorAll(".selector");

let lastDiv = carruselDiv[carruselDiv.length - 1];


carrusel.insertAdjacentElement("afterbegin", lastDiv);

const moverCarrusel=(direction)=>{
	if(direction == "derecha"){
		let firstDiv = document.querySelectorAll(".selector")[0]; 
		carrusel.style.transform = "translateX(-66%)"
		carrusel.style.transition = "transform 0.5s ease-out";
		
			setTimeout(()=>{
				carrusel.style.transition = "none";
				carrusel.insertAdjacentElement("beforeend", firstDiv);
				carrusel.style.transform = "translateX(-33%)";
			},500)
	}else{
		let carruselDiv = document.querySelectorAll(".selector");
		let lastDiv = carruselDiv[carruselDiv.length - 1];
		carrusel.style.transform = "translateX(0%)"
		carrusel.style.transition = "transform 0.5s ease-out";
		
			setTimeout(()=>{
				carrusel.style.transition = "none";
				carrusel.insertAdjacentElement("afterbegin", lastDiv);
				carrusel.style.transform = "translateX(-33%)";
			},500)
	}
}

setInterval(()=>{
	moverCarrusel("derecha");
},5000)

const button1 = document.querySelectorAll(".button1");
const button2 = document.querySelectorAll(".button2");

for(let i = 0; i < button1.length; i++){
	button1[i].addEventListener("click",()=>{
		moverCarrusel("derecha");
	})
	button2[i].addEventListener("click",()=>{
		moverCarrusel("izquierda");
	})
}


const modificarHtml=(active, title, content, img)=>{
	if(active){
		datosOcultar.forEach(d=>{
			d.style.display = "none";
		})
		if(userCelular){
			main.style.height = "100%";
		}
		main.innerHTML = `	<div class="main-container">		
								<div class="content-main">
									<h1>${title}</h1>
								</div>
								<div class="title-img">
									<h4> ${content}</h4>
									<div class="img-change">
										<img src="${img}" alt="">
									</div>
								</div>
							</div>`
	
	}else{
		datosOcultar.forEach(d=>{
			d.style.display = "flex";
		})
		if(userCelular){
			main.style.height = "60vh";
		}
		main.innerHTML = `	<div class="logo-main">
									<img src="imgs/funss-logo.png" alt="">
							</div>
								<div class="title-futss">
									<span class="letra"><h4 id="letra">F</h4><h4 class="relleno">uerza</h4></span>
									<span class="letra"><h4 id="letra">U</h4><h4 class="relleno">nitaria para la</h4></span>
									<span class="letra"><h4 id="letra">T</h4><h4 class="relleno">ransformación</h4></span>
									<span class="letra"><h4 id="letra">S</h4><h4 class="relleno">indical y</h4></span>
									<span class="letra"><h4 id="letra">S</h4><h4 class="relleno">ocial</h4></span>
								</div>
							<img src="imgs/fondo-main.jpg" alt="" onclick  ="ampliarImg(true)">`
			setTimeout(()=>{
				let rellenoHtml = document.querySelectorAll(".relleno");
				let letraColor = document.querySelectorAll(".letra");
				let titleFutss = document.querySelector(".title-futss");
				let logoMain = document.querySelector(".logo-main");
				
				pintar(letraColor);
				
				titleFutss.addEventListener("mouseover",()=>{
					animation("active", rellenoHtml, logoMain)
				})
				titleFutss.addEventListener("mouseout",()=>{
					animation("desactive", rellenoHtml, logoMain)
				})
				
			},10)
	}
	
}

const modalButton = document.querySelectorAll(".modal-button");

modalButton[0].addEventListener("click",()=>{
	modificarHtml(false);
})

modalButton[1].addEventListener("click",()=>{
	mostrarMenuMovil(true);
	modificarHtml(true, "Aspiramos llegar a la junta directiva de SIMANA", `The Forest Stewardship Council provides 
	independent assurance that the wood you buy supports forests managed to the highest standards. 
	FSC balances the needs of all forest stakeholders, economic, social and environmental - through an open, 
	member-led democracy`, "logo1.png");
	mostrarModal("close");
})

modalButton[2].addEventListener("click",()=>{
	mostrarMenuMovil(true);
	modificarHtml(true, "Nuestra MISIÓN", `
	<ul>
		<li><span>1.</span> Para hacer de nuestro Sindicato una organización AUTÓNOMA E INDEPENDIENTEMENTE!</li>
		<li><span>2.</span> Para seguir luchando por la defensa de la educación pública como un derecho fundamental con financiación desde el
		Sistema General de participaciones (SGP) del Estado Colombiano.</li>
		<li><span>3.</span> Para contribuir en defensa del Régimen Prestacional, el servicio médico asistencial de los maestros y sus beneficiarios.</li>
		<li><span>4.</span>Para contribuir a la cualificación del maestro, la dignificación de la carrera docente, y hacer la escuela un territorio de paz.</li>
		<li><span>5.</span>Propender porla construcción de un centro recreacional para el magisterio de Nariño.</li>
		<li><span>6.</span>Promover la defensa de los recursos naturales renovables y no renovables.</li>
	</ul>
	`, "logo2.png");
	mostrarModal("close");
})
modalButton[3].addEventListener("click",()=>{
	mostrarMenuMovil(true);
	modificarHtml(true, "SOMOS PACTO HISTÓRICO", `
	<ul>
		<li><span></span>APOYAMOS Y COMPARTIMOS LAS PROPUESTAS DEL PACTO:</li>
		<li><span>1.</span> TIERRA, CRÉDITO, SEGURIDAD Y SOBERANÍA ALIMENTARIA</li>
		<li><span>2.</span> SALUD Y PENSIONES JUSTAS</li>
		<li><span>3.</span> TECHO PARA TODOS</li>
		<li><span>4.</span>	EDUCACIÓN PARA TODOS Y DE CALIDAD</li>
		<li><span>5.</span>	REFORMA AL SISTEMA JUDICIAL</li>
		<li><span>6.</span>	PACTO PARA RECUPERAR LA ECONOMÍA, EL TRABAJO Y LA PRODUCTIVIDAD DEL PAÍS</li>
	</ul>
	`, "imgs/pacto.png");
	mostrarModal("close");
})

modalButton[4].addEventListener("click",()=>{
	mostrarMenuMovil(true);
	modificarHtml(true, "VOTE BIEN, VOTE 10", `The Forest Stewardship Council provides 
	independent assurance that the wood you buy supports forests managed to the highest standards. 
	FSC balances the needs of all forest stakeholders, economic, social and environmental - through an open, 
	member-led democracy`, "logo.png");
	mostrarModal("close");
})

modalButton[5].addEventListener("click",()=>{
	modificarHtml(true, "Aspiramos llegar a la junta directiva de SIMANA", `The Forest Stewardship Council provides 
	independent assurance that the wood you buy supports forests managed to the highest standards. 
	FSC balances the needs of all forest stakeholders, economic, social and environmental - through an open, 
	member-led democracy`, "logo1.png");
	mostrarModal("close");
})

modalButton[6].addEventListener("click",()=>{
	modificarHtml(true, "Nuestra MISIÓN", `
	<ul>
		<li><span>1.</span> Para hacer de nuestro Sindicato una organización AUTÓNOMA E INDEPENDIENTEMENTE!</li>
		<li><span>2.</span> Para seguir luchando por la defensa de la educación pública como un derecho fundamental con financiación desde el
		Sistema General de participaciones (SGP) del Estado Colombiano.</li>
		<li><span>3.</span> Para contribuir en defensa del Régimen Prestacional, el servicio médico asistencial de los maestros y sus beneficiarios.</li>
		<li><span>4.</span>Para contribuir a la cualificación del maestro, la dignificación de la carrera docente, y hacer la escuela un territorio de paz.</li>
		<li><span>5.</span>Propender porla construcción de un centro recreacional para el magisterio de Nariño.</li>
		<li><span>6.</span>Promover la defensa de los recursos naturales renovables y no renovables.</li>
	</ul>`, "logo2.png");
	mostrarModal("close");
})
modalButton[7].addEventListener("click",()=>{
	modificarHtml(true, "SOMOS PACTO HISTÓRICO", `
	<ul>
		<li><span></span>APOYAMOS Y COMPARTIMOS LAS PROPUESTAS DEL PACTO:</li>
		<li><span>1.</span> TIERRA, CRÉDITO, SEGURIDAD Y SOBERANÍA ALIMENTARIA</li>
		<li><span>2.</span> SALUD Y PENSIONES JUSTAS</li>
		<li><span>3.</span> TECHO PARA TODOS</li>
		<li><span>4.</span>	EDUCACIÓN PARA TODOS Y DE CALIDAD</li>
		<li><span>5.</span>	REFORMA AL SISTEMA JUDICIAL</li>
		<li><span>6.</span>	PACTO PARA RECUPERAR LA ECONOMÍA, EL TRABAJO Y LA PRODUCTIVIDAD DEL PAÍS</li>
	</ul>
	`, "imgs/pacto.png");
	mostrarModal("close");
})

modalButton[8].addEventListener("click",()=>{
	modificarHtml(true, "VOTE BIEN, VOTE 10", `The Forest Stewardship Council provides 
	independent assurance that the wood you buy supports forests managed to the highest standards. 
	FSC balances the needs of all forest stakeholders, economic, social and environmental - through an open, 
	member-led democracy`, "logo.png");
	mostrarModal("close");
})


document.getElementById("house-button").addEventListener("click",()=>{
	mostrarModal("close");
	modificarHtml(false);
})

document.querySelector(".button-logo").addEventListener("click",()=>{
	mostrarModal("close");
	modificarHtml(false);
})
const buttonEquis = document.querySelector(".equis");

const ampliarImg=(value)=>{
	const displayImgAmp = document.querySelector(".imagen-ampliada");
	if(value){
		displayImgAmp.style.display  = "flex";
	}else{
		displayImgAmp.style.display  = "none";
	}
}


buttonEquis.addEventListener("click",()=>{
	ampliarImg(false);
})

const cardsDerecha= document.querySelectorAll(".derecha");
const cardsIzquierda= document.querySelectorAll(".izquierda");

const observarD =(entries)=>{
	for(const entry of entries){
		if(entry.isIntersecting){
			entry.target.style.transform = "translateX(0px)"
		}
	}
}

const observerD = new IntersectionObserver(observarD, {
	root: null,
	rootMargin: "1000px 5100px 0px 0px",
	threshold: 0.9
});

for (let card of cardsDerecha){
	observerD.observe(card);
}


//Izquierda

const observarI =(entries)=>{
	for(const entry of entries){
		if(entry.isIntersecting){
			entry.target.style.transform = "translateX(0px)"
		}
	}
}

const observerI = new IntersectionObserver(observarI, {
	root: null,
	rootMargin: "100px 0px 0px 5100px",
	threshold: 0.9
});

for (let card of cardsIzquierda){
	observerI.observe(card);
}




