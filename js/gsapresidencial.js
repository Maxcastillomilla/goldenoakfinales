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
    /* elementnav.innerHTML = items */




const agregaruno = ()=>{
    console.log('')
    /* document.getElementById("nav2").style.display = "block";

   

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
  }); */

}

const agregardos = ()=>{

    document.getElementById("nav2").style.display = "none";


}


const agregartres = ()=>{

    document.getElementById("nav2").style.display = "none";


}





window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse!!');

        /* agregaruno() */



        gsap.registerPlugin(ScrollTrigger)
        document.getElementById("rd1").checked = true;
        console.log('inicio')


        
        
        
        
        gsap.registerPlugin(ScrollTrigger)
        
        
        
        
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
                document.getElementById("subtitulo").innerHTML = "Impulsa tu hogar hacia el futuro y disminuye tu gasto eléctrico generando tu propia energía"
                document.getElementById("image2").style.backgroundImage = "url(./imagenes/02_01A.jpg)"
                document.getElementById("rd1").checked = true;
                

                
                },
                onEnterBack: function(){
                    
                        document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                        document.getElementById("subtitulo").innerHTML = "Impulsa tu hogar hacia el futuro y disminuye tu gasto eléctrico generando tu propia energía"
                        document.getElementById("image2").style.backgroundImage = "url(./imagenes/02_01A.jpg)"
                        document.getElementById("rd1").checked = true;
                        
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
                    document.getElementById("subtitulo").innerHTML = "Impulsa tu hogar hacia el futuro y disminuye tu gasto eléctrico generando tu propia energía"
                    document.getElementById("image2").style.backgroundImage = "url(./imagenes/02_01A.jpg)"
                    document.getElementById("rd1").checked = true;
                

                
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                    document.getElementById("subtitulo").innerHTML = "Impulsa tu hogar hacia el futuro y disminuye tu gasto eléctrico generando tu propia energía"
                    document.getElementById("image2").style.backgroundImage = "url(./imagenes/02_01A.jpg)"
                    document.getElementById("rd1").checked = true;
                
                /* document.documentElement.style.setProperty('--altura', '24vh'); */
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
                
                scroller: 'main',
                trigger: '#electromovilidad2',
                
                onEnter: function(){
                    document.getElementById("titulo").innerHTML = "ELECTROMOVILIDAD"
                    document.getElementById("subtitulo").innerHTML = "Electrifica tu movimiento y maneja tu empresa hacia un futuro mas limpio y eficiente"
                    document.getElementById("image2").style.backgroundImage = "url(./imagenes/02_02.jpg)"
                    
                    document.getElementById("rd4").checked = true;
                    
                    document.getElementById("nav2").style.display = "none";
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "ELECTROMOVILIDAD"
                    document.getElementById("subtitulo").innerHTML = "Electrifica tu movimiento y maneja tu empresa hacia un futuro mas limpio y eficiente"
                    document.getElementById("image2").style.backgroundImage = "url(./imagenes/02_02.jpg)"
                    
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
                
                
                
            },
            onEnterBack: function(){
                
            
                
            },
            
        
        },
        duration: 0,
        
        
    })

    /* gsap.to({},{
        scrollTrigger:{
            start: "top center",
            end: "bottom center",
            scroller: 'main',
            trigger: '#finalgeneracion',
            
            onEnter: function(){
                
                document.getElementById("rd1").checked = true;
              
            },
            onEnterBack: function(){
                document.getElementById("rd1").checked = true;
                
            },
            
        
        },
        duration: 0,
        
        
    }) */









    gsap.to({},{
        scrollTrigger:{
            start: "top center",
            end: "bottom center",
            scroller: 'main',
            trigger: '#operacion',
            
            onEnter: function(){
                
                
                
            },
            onEnterBack: function(){
                
                
            
                
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
                
                
                
            },
            onEnterBack: function(){
                
            
                
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
                
                
                
            },
            onEnterBack: function(){
                
                
            
                
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

      const rd4 = document.getElementById("rd4")

      rd4.addEventListener('click', () => {
        document.getElementById("rd4").checked = true;
      });






});
const rd4 = document.getElementById("rd4")

      rd4.addEventListener('click', () => {
        document.getElementById("rd4").checked = true;
      });



