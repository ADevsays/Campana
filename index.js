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

if(userCelular){
	
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

const main = document.querySelector(".main-principal");

const modificarHtml=(active, title, content, img)=>{
	if(active){
		datosOcultar.forEach(d=>{
			d.style.display = "none";
		})
	
		main.innerHTML = `	<div class="content-main">
								<h1>${title}</h1>
								<h4> ${content}</h4>
							</div>
							<div class="img-change">
								<img src="${img}" alt="">
							</div>`
	}else{
		datosOcultar.forEach(d=>{
			d.style.display = "flex";
		})
		main.innerHTML = `	
							<div class="logo-main">
									<img src="imgs/funss-logo.png" alt="">
								</div>
							<div class="title-futss">
								<span class="letra"><h4 id="letra">F</h4><h4 class="relleno">uerza</h4></span>
								<span class="letra"><h4 id="letra">U</h4><h4 class="relleno">nitaria para la</h4></span>
								<span class="letra"><h4 id="letra">T</h4><h4 class="relleno">ransformación</h4></span>
								<span class="letra"><h4 id="letra">S</h4><h4 class="relleno">indical y</h4></span>
								<span class="letra"><h4 id="letra">S</h4><h4 class="relleno">ocial</h4></span>
							</div>
							<img src="imgs/fondo-main.jpg" alt="">`
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
	modificarHtml(true, "Aspiramos llegar a la junta directiva de SIMANA", `The Forest Stewardship Council provides 
	independent assurance that the wood you buy supports forests managed to the highest standards. 
	FSC balances the needs of all forest stakeholders, economic, social and environmental - through an open, 
	member-led democracy`, "logo1.png");
	mostrarModal("close");
})

modalButton[1].addEventListener("click",()=>{
	modificarHtml(true, "Nuestra MISIÓN", `The Forest Stewardship Council provides 
	independent assurance that the wood you buy supports forests managed to the highest standards. 
	FSC balances the needs of all forest stakeholders, economic, social and environmental - through an open, 
	member-led democracy`, "logo2.png");
	mostrarModal("close");
})
modalButton[2].addEventListener("click",()=>{
	modificarHtml(true, "SOMOS PACTO HISTÓRICO", `SThe Forest Stewardship Council provides 
	independent assurance that the wood you buy supports forests managed to the highest standards. 
	FSC balances the needs of all forest stakeholders, economic, social and environmental - through an open, 
	member-led democracy por nosotros`, "imgs/pacto.png");
	mostrarModal("close");
})

modalButton[3].addEventListener("click",()=>{
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




