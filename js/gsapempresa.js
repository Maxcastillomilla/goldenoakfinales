function detectMob() {
    return ( ( window.innerWidth <= 960 ) && ( window.innerHeight <= 1180 ) );
  }


const ocultar = () => {

    console.log("")

    /* if(!(detectMob())){
        document.documentElement.style.setProperty('--altura', '29vh');
        document.getElementById("subtitulo").style.display = "none"
        /// document.getElementById("verticalmenu").style.display = "none" 

        document.getElementById("nav2").style.top = "calc(29vh - 60px)" 
        
        let x = document.getElementsByClassName("tooltip pc");
        
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        

    } */

}

const mostrar = () => {

    console.log("")

    /* if(!(detectMob())){
        document.documentElement.style.setProperty('--altura', '44vh');
        document.getElementById("subtitulo").style.display = "block"
        ///document.getElementById("verticalmenu").style.display = "block"

        document.getElementById("nav2").style.top = "calc(44vh - 60px)" 

        
        let x = document.getElementsByClassName("tooltip pc");
        
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
        
        
        
        
    } */

}
const principio = document.getElementsByClassName('principio');

const elementnav = document.getElementById('opmenu');


//old
    {/* <li id="opinsta" class="titulomenu"><a class="subr" href="#principio" ">GENERACIÓN</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#operacion" >OPERACIÓN</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#financiamento">FINANCIAMIENTO</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#modalidad">MODALIDAD</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#montaje">MONTAJE</a></li>
 */}


let generaciont = document.getElementById('generaciont');
let operaciont = document.getElementById('operaciont');
let financiamientot = document.getElementById('financiamientot');


let items = `
      <li  class="titulomenu"><a class="subr" href="#principio" id="generaciont" ">GENERACIÓN</a></li>
      <li  class="titulomenu"><a class="subr" href="#operacion" id="operaciont" >OPERACIÓN</a></li>

      <li  class="titulomenu"><a class="subr" href="#financiamento" id="financiamientot" >FINANCIAMIENTO</a></li>   
    `;
    elementnav.innerHTML = items




const agregaruno = ()=>{
    document.getElementById("nav2").style.display = "block";

   

    generaciont = document.getElementById('generaciont');
    operaciont = document.getElementById('operaciont');
    financiamientot = document.getElementById('financiamientot');

    // Add event listeners
generaciont.addEventListener('click', () => {
    generaciont.classList.add('subractive');
    operaciont.classList.remove('subractive');
    financiamientot.classList.remove('subractive');
  });
  
  operaciont.addEventListener('click', () => {
    operaciont.classList.add('subractive');
    generaciont.classList.remove('subractive');
    financiamientot.classList.remove('subractive');
  });
  
  financiamientot.addEventListener('click', () => {
    financiamientot.classList.add('subractive');
    generaciont.classList.remove('subractive');
    operaciont.classList.remove('subractive');
  });

}

const agregardos = ()=>{

    document.getElementById("nav2").style.display = "none";


}


const agregartres = ()=>{

    document.getElementById("nav2").style.display = "none";


}





window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse!!');

        agregaruno()



        gsap.registerPlugin(ScrollTrigger)
        document.getElementById("rd1").checked = true;
        console.log('inicio')


        
        
        
        
        gsap.registerPlugin(ScrollTrigger)
        document.getElementById("rd1").checked = true;
        
        
        
        //////////////
        
        gsap.to({},{
            scrollTrigger:{
                start: "top center",
                end: "bottom center",
                makers: false,
                scroller: 'main',
                
                trigger: '#principio',
                
                onEnter: function(){
                document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/01_01.jpg)"
                document.getElementById("rd1").checked = true;
                agregaruno()

                
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/01_01.jpg)"
                document.getElementById("rd1").checked = true;
                agregaruno()
                /* document.documentElement.style.setProperty('--altura', '24vh'); */
                },
                
            
                
        
                    
                
            },
            duration: 0,
            
            
        })

        gsap.to({},{
            scrollTrigger:{
                start: "top center",
                end: "bottom center",
                makers: false,
                scroller: 'main',
                
                trigger: '#finalprincipio',
                
                onEnter: function(){
                document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/01_01.jpg)"
                document.getElementById("rd1").checked = true;
                agregaruno()
                operaciont.classList.remove('subractive');
                generaciont.classList.remove('subractive');
                financiamientot.classList.add('subractive');

                
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/01_01.jpg)"
                document.getElementById("rd1").checked = true;
                agregaruno()
                operaciont.classList.remove('subractive');
                generaciont.classList.remove('subractive');
                financiamientot.classList.add('subractive');
                /* document.documentElement.style.setProperty('--altura', '24vh'); */
                },
                /* onLeave:function(){
                    
                    document.getElementById("titulo").innerHTML = "CONSULTORÍA"
                    document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/01_02.jpg)"
                    document.getElementById("rd2").checked = true;
                    agregaruno()
                    document.getElementById("nav2").style.display = "none";
                },
                onLeaveBack:function(){
                    
                    document.getElementById("titulo").innerHTML = "CONSULTORÍA"
                    document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/01_02.jpg)"
                    document.getElementById("rd2").checked = true;
                    agregaruno()
                    document.getElementById("nav2").style.display = "none";
                    }, */
                
            
                
        
                    
                
            },
            duration: 0,
            
            
        })








        gsap.to({},{
            scrollTrigger:{
                /* start: "top center",
                end: "bottom center", */
                makers: true,
                scroller: 'main',
                trigger: '#consultoria2',
                
                onEnter: function(){
                    document.getElementById("titulo").innerHTML = "CONSULTORÍA"
                    document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/01_02.jpg)"
                    document.getElementById("rd2").checked = true;
                    agregaruno()
                    document.getElementById("nav2").style.display = "none";

                
                },
                onEnterBack: function(){
                    
                        document.getElementById("titulo").innerHTML = "CONSULTORÍA"
                        document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
                        document.getElementById("image").style.backgroundImage = "url(./imagenes/01_02.jpg)"
                        document.getElementById("rd2").checked = true;
                        agregaruno()
                        document.getElementById("nav2").style.display = "none";
                },
                
            
                
        
                    
                
            },
            duration: 0,
            
            
        })




        gsap.to({},{
            scrollTrigger:{
                start: "top center",
                end: "bottom center",
                makers: false,
                scroller: 'main',
                trigger: '#consultoria2final',
                
                onEnter: function(){
                    document.getElementById("titulo").innerHTML = "CONSULTORÍA"
                    document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/01_02.jpg)"
                    document.getElementById("rd2").checked = true;
                    agregaruno()
                    document.getElementById("nav2").style.display = "none";
                
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "CONSULTORÍA"
                    document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/01_02.jpg)"
                    document.getElementById("rd2").checked = true;
                    agregaruno()
                    document.getElementById("nav2").style.display = "none";
                },
                
            
                
        
                    
                
            },
            duration: 0,
            
            
        })
        
        
        
        
        
  
    ///////////////////////


  /*   const electromovilidad2 = document.getElementById('electromovilidad');
    const rect3 = electromovilidad2.getBoundingClientRect();
    let xelectromovilidad2 = rect3.left + window.scrollX;
    let yelectromovilidad2 = rect3.top + window.scrollY; */
    
    
   

        
        
        gsap.to({},{
            scrollTrigger:{
                /* start: "top center",
                end: "bottom center", */
                scroller: 'main',
                trigger: '#electromovilidad2',
                
                onEnter: function(){
                    document.getElementById("titulo").innerHTML = "ELECTROMOVILIDAD"
                    document.getElementById("subtitulo").innerHTML = "Electrifica tu movimiento y maneja tu empresa hacia un futuro mas limpio y eficiente"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/electroimagen.png)"
                    
                    document.getElementById("rd4").checked = true;
                    
                    document.getElementById("nav2").style.display = "none";
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "ELECTROMOVILIDAD"
                    document.getElementById("subtitulo").innerHTML = "Electrifica tu movimiento y maneja tu empresa hacia un futuro mas limpio y eficiente"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/electroimagen.png)"
                    
                    document.getElementById("rd4").checked = true;
                    
                    document.getElementById("nav2").style.display = "none";
                    
                },
                
            
            },
            duration: 0,
            
            
        })



{/* <li  class="titulomenu"><a class="subr" href="#principio" id="generaciont" ">GENERACIÓN</a></li>
      <li  class="titulomenu"><a class="subr" href="#operacion" id="operaciont" >OPERACIÓN</a></li>

      <li  class="titulomenu"><a class="subr" href="#financiamento" id="financiamientot" >FINANCIAMIENTO</a></li> 

 */}

      gsap.to({},{
        scrollTrigger:{
            start: "top center",
            end: "bottom center",
            scroller: 'main',
            trigger: '#principio',
            
            onEnter: function(){
                generaciont.classList.add('subractive');
                operaciont.classList.remove('subractive');
                financiamientot.classList.remove('subractive');
                
                
            },
            onEnterBack: function(){
                generaciont.classList.add('subractive');
                operaciont.classList.remove('subractive');
                financiamientot.classList.remove('subractive');
                document.getElementById("nav2").style.display = "none";
            
                
            },
            
        
        },
        duration: 0,
        
        
    })

    gsap.to({},{
        scrollTrigger:{
            start: "top center",
            end: "bottom center",
            scroller: 'main',
            trigger: '#finalgeneracion',
            
            onEnter: function(){
                generaciont.classList.add('subractive');
                operaciont.classList.remove('subractive');
                financiamientot.classList.remove('subractive');
                
               /*  document.getElementById("nav2").style.display = "none"; */
            },
            onEnterBack: function(){
                generaciont.classList.add('subractive');
                operaciont.classList.remove('subractive');
                financiamientot.classList.remove('subractive');
                
               /*  document.getElementById("nav2").style.display = "none"; */
                
            },
            
        
        },
        duration: 0,
        
        
    })









    gsap.to({},{
        scrollTrigger:{
            start: "top center",
            end: "bottom center",
            scroller: 'main',
            trigger: '#operacion',
            
            onEnter: function(){
                operaciont.classList.add('subractive');
                generaciont.classList.remove('subractive');
                financiamientot.classList.remove('subractive');
                
                
            },
            onEnterBack: function(){
                operaciont.classList.add('subractive');
                generaciont.classList.remove('subractive');
                financiamientot.classList.remove('subractive');
                
            
                
            },
            
        
        },
        duration: 0,
        
        
    })


    gsap.to({},{
        scrollTrigger:{
            start: "top center",
            end: "bottom center",
            scroller: 'main',
            trigger: '#finaloperacion',
            
            onEnter: function(){
                operaciont.classList.add('subractive');
                generaciont.classList.remove('subractive');
                financiamientot.classList.remove('subractive');
                
                
            },
            onEnterBack: function(){
                operaciont.classList.add('subractive');
                generaciont.classList.remove('subractive');
                financiamientot.classList.remove('subractive');
                
            
                
            },
            
        
        },
        duration: 0,
        
        
    })

























    gsap.to({},{
        scrollTrigger:{
            start: "top center",
            end: "bottom center",
            scroller: 'main',
            trigger: '#financiamento',
            
            onEnter: function(){
                operaciont.classList.remove('subractive');
                generaciont.classList.remove('subractive');
                financiamientot.classList.add('subractive');
                
                
            },
            onEnterBack: function(){
                operaciont.classList.remove('subractive');
                generaciont.classList.remove('subractive');
                financiamientot.classList.add('subractive');
                
            
                
            },
            
        
        },
        duration: 0,
        
        
    })





















    // Add event listeners
/*     generaciont.addEventListener('click', () => {
        generaciont.classList.add('subractive');
        operaciont.classList.remove('subractive');
        financiamientot.classList.remove('subractive');
      });
      
      operaciont.addEventListener('click', () => {
        operaciont.classList.add('subractive');
        generaciont.classList.remove('subractive');
        financiamientot.classList.remove('subractive');
      });
      
      financiamientot.addEventListener('click', () => {
        financiamientot.classList.add('subractive');
        generaciont.classList.remove('subractive');
        operaciont.classList.remove('subractive');
      });

 */










});



