

var div=document.getElementById('count')
 
setTimeout(()=>{
     div.innerHTML=10
       setTimeout(()=>{
           div.innerHTML=9
           setTimeout(()=>{
              div.innerHTML=8
               setTimeout(()=>{
                   div.innerHTML=7
                   setTimeout(()=>{
                      div.innerHTML=6
                       setTimeout(()=>{
                          div.innerHTML=5
                           setTimeout(()=>{
                             div.innerHTML=4
                               setTimeout(()=>{
                                  div.innerHTML=3
                                   setTimeout(()=>{
                                      div.innerHTML=2
                                       setTimeout(()=>{
                                          div.innerHTML=1
                                           setTimeout(()=>{
                                               div.innerHTML=0
                                               setTimeout(()=>{
                                                   div.innerHTML='HAPPY NEW YEAR';
                                               },1000)
                                           },1000)
                                       },1000)
                                   },1000)
                                 
                               },1000)
                           },1000)
                       },1000)
                   },1000)
               },1000)
           },1000)
       },1000)
   },1000)