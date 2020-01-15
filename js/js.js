var bebe=document.getElementsByClassName("bebe")
var construccion=document.getElementsByClassName("contruccion")
var deportes=document.getElementsByClassName("deportes")
var educacion=document.getElementsByClassName("educacion")
var eventos=document.getElementsByClassName("evento")
var fumigaciones=document.getElementsByClassName("fumigaciones")
var gourmet=document.getElementsByClassName("gourmet")
var hogar=document.getElementsByClassName("hogar")
var mascotas=document.getElementsByClassName("mascotas")
var paisajismo=document.getElementsByClassName("paisajismo")
var papeleria=document.getElementsByClassName("papeleria")
var propiedades=document.getElementsByClassName("propiedades")
var salud=document.getElementsByClassName("salud")
var tecnico=document.getElementsByClassName("tecnico")
var vestuario=document.getElementsByClassName("vestuario")
var servicio=document.getElementsByClassName("servicio")
var servicios=document.getElementsByClassName("servicios")



function ShowSelected()
{
/* Para obtener el valor */
var cod = document.getElementById("producto").value;
    if(cod==="todos"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="inline-block";
        
        
        }
    }
    if(cod==="bebes_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
    
        for (let x = 0; x < bebe.length; x++){
          bebe[x].style.display="inline-block";
          
          
          }
          
    
      
    }
    if(cod==="construccion_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
     
      for (let x = 0; x < construccion.length; x++){
        construccion[x].style.display="inline-block";
        
       
        
       
    }
  }
    if(cod==="deportes_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
  
        for (let x = 0; x < deportes.length; x++){
          deportes[x].style.display="inline-block";
          
          
          }
          
         
    }
    if(cod==="educacion_"){  
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }

        for (let x = 0; x < educacion.length; x++){
          educacion[x].style.display="inline-block";
          
          
          }
    }
          


    if(cod==="evento_"){  
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
            for (let x = 0; x < eventos.length; x++){
              eventos[x].style.display="inline-block";
              
              
             }

    }

    if(cod==="fumigaciones_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
      for (let x = 0; x < fumigaciones.length; x++){
          fumigaciones[x].style.display="inline-block";
                
                
        }
               
    }
    if(cod==="gourmet_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
                for (let x = 0; x < gourmet.length; x++){
                  gourmet[x].style.display="inline-block";
                  
                  
                  }
                 
    }
    if(cod==="hogar_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
  
          for (let x = 0; x < hogar.length; x++){
              hogar[x].style.display="inline-block";
                    
                    
           }
                   
    }
   
    if(cod==="mascotas_"){
    

      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
                    for (let x = 0; x < mascotas.length; x++){
                      mascotas[x].style.display="inline-block";
                      
                      
                   
    }
  }
   
    if(cod==="paisajismo_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
                      for (let x = 0; x < paisajismo.length; x++){
                        paisajismo[x].style.display="inline-block";
                        
                        
                        }
                        
    }
   
    if(cod==="papeleria_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
         for (let x = 0; x < papeleria.length; x++){
        papeleria[x].style.display="inline-block";
                          
                          
                        
    }
  }
    if(cod==="propiedades_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
         for (let x = 0; x < propiedades.length; x++){
         propiedades[x].style.display="inline-block";
                            
         }
                           
    }
    if(cod==="salud_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
      
       for (let x = 0; x < salud.length; x++){
        salud[x].style.display="inline-block";
       }
                        
    }
    if(cod==="tecnico_"){
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
         for (let x = 0; x < tecnico.length; x++){
          tecnico[x].style.display="inline-block";
          }
    }

    if(cod==="servicios_"){
     
      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
         for (let x = 0; x < servicios.length; x++){
          servicios[x].style.display="inline-block";
         }

    }
    if(cod==="vestuario_"){

      for (let x = 0; x < servicio.length; x++){
        servicio[x].style.display="none";
        
        
        }
      
       for (let x = 0; x < vestuario.length; x++){
        vestuario[x].style.display="inline-block";
                                  
        }
                                 
    }

  }
 







