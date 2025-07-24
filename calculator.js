
const btn_1 = document.querySelector(".btn_1")
const btn_2 = document.querySelector(".btn_2")
const btn_3 = document.querySelector(".btn_3")
const btn_4 = document.querySelector(".btn_4")
const btn_5 = document.querySelector(".btn_5")
const btn_6 = document.querySelector(".btn_6")
const btn_7 = document.querySelector(".btn_7")
const btn_8 = document.querySelector(".btn_8")
const btn_9 = document.querySelector(".btn_9")
const btn_0 = document.querySelector(".btn_0")
const btn_plus = document.querySelector(".btn_plus")
const btn_minus = document.querySelector(".btn_minus")
const btn_mul = document.querySelector(".btn_mul")
const btn_clear = document.querySelector(".btn_clear")
const btn_equal = document.querySelector(".btn_equal")
const btn_div = document.querySelector(".btn_div")
const input = document.querySelector(".input")
const btn_float = document.querySelector(".btn_float")
const btn_sqroot = document.querySelector(".btn_sqroot")
const btn_MOD = document.querySelector(".btn_MOD")
const btn_Log = document.querySelector(".btn_Log")




//appending the button content in the input field


document.querySelectorAll(".btn").forEach((button) => {
     if (
    !button.classList.contains("btn_clear") &&
    !button.classList.contains("btn_equal") && 
    !button.classList.contains("btn_sqroot")
  )
  button.addEventListener("click", () => {
    input.value += button.textContent;

  });
});

btn_clear.addEventListener('click',()=>{
    input.value =""
})

btn_equal.addEventListener('click',()=>{
    try {
    input.value = eval(input.value); 
  } catch {
    input.value = "Error";
  }
})


btn_sqroot.addEventListener('click', ()=>{
  try{
    const result = eval(input.value)
    input.value = Math.sqrt(result)
  }
  catch{
    input.value = "Error"
  }
})


btn_Log.addEventListener('click', ()=>{
  try{
    const result = eval(input.value)
    input.value = Math.log(result)
  }
  catch{
    input.value = "Error"
  }
})



