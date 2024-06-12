 
 /* INPUTS*/
 const  firstName = document.querySelector('.firstnameinp');
const  lasttName = document.querySelector('.lastnameinp');
const email =document.querySelector('.emailinp');
const  generalradio = document.querySelector('#generalradioinp')
const  supportradio = document.querySelector('#supportradioinp')
const  textArea = document.querySelector('.textarea')
const checkboxinp = document.querySelector('.aggrementinp')
const submitBtn = document.querySelector('.submit')
const form =document.querySelector('form')
const thankYouPage = document.querySelector('.card2')
let invalid = false

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if (firstName.value=== ""){
        document.querySelector('.firtsnamerror').style.display="block"
        invalid= false 
        submitBtn.disabled=true 
        setTimeout(()=>{
            document.querySelector('.firtsnamerror').style.display="none"
        }, 10000);
    } else {
        document.querySelector('.firtsnamerror').style.display="none"
        invalid=true
    }
    if (lasttName.value=== ""){
        document.querySelector('.lastnamerror').style.display="block"
        invalid= false 
        submitBtn.disabled=true 
        setTimeout(()=>{
            document.querySelector('.lastnamerror').style.display="none"
        }, 10000);
    } else {
        document.querySelector('.lastnamerror').style.display="none"
        invalid=true
    }
    if (email.value=== ""){
        document.querySelector('.emailerror').style.display="block"
        invalid= false 
        submitBtn.disabled=true 
        setTimeout(()=>{
            document.querySelector('.emailerror').style.display="none"
        }, 10000);
    } else {
        document.querySelector('.emailerror').style.display="none"
        invalid=true
    }  if  (generalradio.checked){
        document.querySelector('.checkedradioimg').style.display="flex"
        generalradio.style.display="none"
        invalid= false 
        submitBtn.disabled=true 
        setTimeout(()=>{
            document.querySelector('.errorbtngeneral').style.display="none"
        }, 10000);
    }   else  (
        document.querySelector('.errorbtngeneral').style.display="block"
         )
         if  (supportradio.checked){
            document.querySelector('#radioimg2').style.display="flex"
            supportradio.style.display="none"
            invalid= false 
            submitBtn.disabled=true 
        }   else  (
            document.querySelector('.errorbtnsupport').style.display="block"
                

             )
             if (textArea.value===""){
                document.querySelector('.errortextarea').style.display="block"
                invalid= false
                submitBtn.disabled=true
                setTimeout(()=>{
                    document.querySelector('.errortextarea').style.display="none"
                }, 10000);
             } else {
                document.querySelector('.errortextarea').style.display="none"
             }
             if(checkboxinp.checked){
                document.querySelector('.aggrementerror').style.display="none"
             } else {
                document.querySelector('.aggrementerror').style.display="block"
                setTimeout(()=>{
                    document.querySelector('.aggrementerror').style.display="none"
                }, 10000);
             }
})

submitBtn.addEventListener('click', ()=>{
    if (firstName.value && 
        lasttName.value &&
         email.value &&
          generalradio.checked &&
          supportradio.checked &&
          textArea.value &&
          checkboxinp.checked){
            thankYouPage.style.display="block"
          } else {
           alert.apply('please fill in all fields and chrck the terms')
          }
})