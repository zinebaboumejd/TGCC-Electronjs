
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#form')
    const nom = document.querySelector('#nom')
    const email = document.querySelector('#email')
    const telephone=document.querySelector("#telephone")
  
    form.addEventListener('submit', (e) => {
      e.preventDefault()
    //   console.log('hello')
      console.log(nom.value)
        console.log(email.value)
        console.log(telephone.value)
        from.reset()
    });
  });
  