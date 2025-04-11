function detectMob() {
    return ( ( window.innerWidth <= 960 ) && ( window.innerHeight <= 1180 ) );
  }


const ocultar = () => {

    if(!(detectMob())){
        document.documentElement.style.setProperty('--altura', '29vh');
        document.getElementById("subtitulo").style.display = "none"
        /* document.getElementById("verticalmenu").style.display = "none" */

        document.getElementById("nav2").style.top = "calc(29vh - 60px)" 
        
        let x = document.getElementsByClassName("tooltip pc");
        
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        

    }

}

const mostrar = () => {

    if(!(detectMob())){
        document.documentElement.style.setProperty('--altura', '44vh');
        document.getElementById("subtitulo").style.display = "block"
        /* document.getElementById("verticalmenu").style.display = "block" */

        document.getElementById("nav2").style.top = "calc(44vh - 60px)" 

        
        let x = document.getElementsByClassName("tooltip pc");
        
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
        
        
        
        
    }

}


const elementnav = document.getElementById('opmenu');


//old
    {/* <li id="opinsta" class="titulomenu"><a class="subr" href="#principio" ">GENERACIÓN</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#operacion" >OPERACIÓN</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#financiamento">FINANCIAMIENTO</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#modalidad">MODALIDAD</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#montaje">MONTAJE</a></li>
 */}


const agregaruno = ()=>{

    let items = `
      <li id="opinsta" class="titulomenu"><a class="subr" href="#principio" ">GENERACIÓN</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#operacion" >OPERACIÓN</a></li>
      <li id="" class="titulomenu"><a class="subr" href="#financiamento">FINANCIAMIENTO</a></li>    
    `;
    elementnav.innerHTML = items

}

const agregardos = ()=>{

    let items = `
      
    
    `;
    elementnav.innerHTML = items

}


const agregartres = ()=>{

    let items = `
      
    
    `;
    elementnav.innerHTML = items

}





window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse!!');

        agregaruno()



        gsap.registerPlugin(ScrollTrigger)
        document.getElementById("rd1").checked = true;
        
        
        
        
        const solar2 = document.getElementById('solar2');
        const rect = solar2.getBoundingClientRect();
        let xsolar2 = rect.left + window.scrollX;
        let ysolar2 = rect.top + window.scrollY;
        
        gsap.to({},{
            scrollTrigger:{
                start: ysolar2+'px',
                end: (ysolar2 + 450) +'px' ,
                markers: false,
                
                trigger: 'body',    
                
                onEnter: function(){
                    mostrar()
                    agregaruno()



                },
                onEnterBack: function(){
                    mostrar()
                    agregaruno()

                },
                onLeave: function(){
                    ocultar()

                },
                            
            },
            duration: 0,    
        })
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        /* gsap.to({},{
            scrollTrigger:{
                start: "bottom center",
                end: " center center",
                maker: true,
                
                trigger: '#solar2',
                
                onEnter: function(){
                    document.documentElement.style.setProperty('--altura', '44vh');
                },
                onEnterBack: function(){
                    document.documentElement.style.setProperty('--altura', '44vh');
                },
                
                            
            },
            duration: 0,    
        })
        */
        
        
        
        
        
        
        
        
        gsap.registerPlugin(ScrollTrigger)
        document.getElementById("rd1").checked = true;
        
        
        
        
        //try de achicar
        
        /* gsap.to({},{
            scrollTrigger:{
                start: "bottom center",
                end: " center center",
                maker: true,
                
                trigger: '#solar2',
                
                onEnter: function(){
                    document.documentElement.style.setProperty('--altura', '25vh');
                },
                onEnterBack: function(){
                    document.documentElement.style.setProperty('--altura', '25vh');
                },
                
            
                
        
                    
                
            },
            duration: 1,
            
            
        }) */
        
        //////////////
        
        gsap.to({},{
            scrollTrigger:{
                start: "bottom center",
                end: " center center",
                makers: false,
                
                trigger: '#solar2',
                
                onEnter: function(){
                document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
                document.getElementById("rd1").checked = true;
                agregaruno()

                
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
                document.getElementById("rd1").checked = true;
                agregaruno()
                /* document.documentElement.style.setProperty('--altura', '24vh'); */
                },
                
            
                
        
                    
                
            },
            duration: 0,
            
            
        })







        gsap.to({},{
            scrollTrigger:{
                start: "bottom center",
                end: " center center",
                makers: false,
                
                trigger: '#financiamento',
                
                onEnter: function(){
                document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
                document.getElementById("rd1").checked = true;
                agregaruno()

                
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "ENERGÍA SOLAR"
                document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
                document.getElementById("rd1").checked = true;
                agregaruno()
                /* document.documentElement.style.setProperty('--altura', '24vh'); */
                },
                
            
                
        
                    
                
            },
            duration: 0,
            
            
        })
        
        
        
        
        
        
        ////////////////////////////////////
        
        const consultoria2 = document.getElementById('consultoria');
        const rect2 = consultoria2.getBoundingClientRect();
        let xconsultoria2 = rect2.left + window.scrollX;
        let yconsultoria2 = rect2.top + window.scrollY;
        
        
        gsap.to({},{
            scrollTrigger:{
                start: (yconsultoria2-500)+'px',
                end: (yconsultoria2 - 50) +'px' ,
                markers: false,
                
                trigger: 'body',    
                
                onEnter: function(){
                    mostrar()
                    agregardos()
                },
                onEnterBack: function(){
                    mostrar()
                    agregardos()
                },
                onLeave: function(){
                    ocultar()
                },
                onLeaveBack: function(){
                    ocultar()
                },
                            
            },
            duration: 0,    
        })
        
        
        
        gsap.to({},{
            scrollTrigger:{
                start: "top bottom",
                end: "bottom center",
                
                trigger: '#consultoria',
                
                onEnter: function(){
                    document.getElementById("titulo").innerHTML = "CONSULTORÍA"
                    document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/consultoria.jpg)"
                    document.getElementById("rd2").checked = true;
                    
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "CONSULTORÍA"
                document.getElementById("subtitulo").innerHTML = "Potencia la gestión energética de tu empresa, apoyándote en nuestra experiencia y datos objetivos"
                document.getElementById("image").style.backgroundImage = "url(./imagenes/consultoria.jpg)"
                document.getElementById("rd2").checked = true;
                
                    
                },
                
                onLeave: function(){
                console.log(" ")
                /* document.documentElement.style.setProperty('--altura', '44vh'); */
                },
                onLeaveBack:function(){
                    /* document.documentElement.style.setProperty('--altura', '44vh'); */
                    console.log(" ")
                    
                }
            },
            duration: 0,
            
            
        })
        
        
        
        
        
        /* gsap.to({},{
            scrollTrigger:{
                start: "top bottom",
                end: "bottom center",
                
                trigger: '#solarservice',
                
                onEnter: function(){
                    document.getElementById("titulo").innerHTML = "Operación y Mantenimiento"
                    document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
                    document.getElementById("rd3").checked = true;
                    
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "Operación y Mantenimiento"
                    document.getElementById("subtitulo").innerHTML = "Suma a tu empresa al combate contra el cambio climático y disminuye tu gasto eléctrico en el proceso"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/esportada.jpg)"
                    document.getElementById("rd3").checked = true;
                    
                },
                
                onLeave: function(){
                console.log(" ")
                },
                onLeaveBack:function(){
        
                    console.log(" ")
                    
                }
            },
            duration: 0,
            
            
        }) */






    ///////////////////////


    const electromovilidad2 = document.getElementById('electromovilidad');
    const rect3 = electromovilidad2.getBoundingClientRect();
    let xelectromovilidad2 = rect3.left + window.scrollX;
    let yelectromovilidad2 = rect3.top + window.scrollY;
    
    
    gsap.to({},{
        scrollTrigger:{
            start: (yelectromovilidad2-400)+'px',
            end: (yelectromovilidad2 + 200) +'px' ,
            markers: false,
            
            trigger: 'body',    
            
            onEnter: function(){
                mostrar()
                agregartres()
            },
            onEnterBack: function(){
                agregartres()
                mostrar()
            },
            onLeave: function(){
                ocultar()
            },
            onLeaveBack: function(){
                ocultar()
            },
                        
        },
        duration: 0,    
    })

   








        
        
        
        
        
        gsap.to({},{
            scrollTrigger:{
                start: "top bottom",
                end: "bottom top",
                
                trigger: '#electromovilidad',
                
                onEnter: function(){
                    document.getElementById("titulo").innerHTML = "ELECTROMOVILIDAD"
                    document.getElementById("subtitulo").innerHTML = "Electrifica tu movimiento y maneja tu empresa hacia un futuro mas limpio y eficiente"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/electroimagen.png)"
                    
                    document.getElementById("rd4").checked = true;
                    mostrar()
                    
                },
                onEnterBack: function(){
                    document.getElementById("titulo").innerHTML = "ELECTROMOVILIDAD"
                    document.getElementById("subtitulo").innerHTML = "Electrifica tu movimiento y maneja tu empresa hacia un futuro mas limpio y eficiente"
                    document.getElementById("image").style.backgroundImage = "url(./imagenes/electroimagen.png)"
                    
                    document.getElementById("rd4").checked = true;
                    mostrar()
                
                    
                },
                
                onLeave: function(){
                console.log(" ")
                ocultar()
                
                },
                onLeaveBack:function(){
                    
                    ocultar()
                    console.log(" ")
                    
                }
            },
            duration: 0,
            
            
        })

});


