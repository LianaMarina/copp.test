const questions = Array.from(document.querySelectorAll('.answer input'));
let count = 0;
let numberChecked = 0;
const results = Array.from(document.querySelectorAll('.hide'));
const btnResult = document.querySelector('.button__result');
btnResult.addEventListener('click', (event)=>{
    count = 0;
    numberChecked = 0;
    results.forEach((p)=>{
        p.classList.add('hide');
    });
    questions.forEach((elem)=>{
        if(elem.checked){
            count+=Number(elem.value);
            numberChecked+=1;
        } else {
            false;
        }
    })
    console.log(count);
    console.log(numberChecked);
    if(numberChecked===20){
        if(count>=20&&count<=30){
            document.querySelector('#result1').classList.remove('hide');
        }else if (count>=31&&count<=45){
            document.querySelector('#result2').classList.remove('hide');
        }else if (count>=46&&count<=60){
            document.querySelector('#result3').classList.remove('hide')
        }else if (count>=61&&count<=80){
            document.querySelector('#result4').classList.remove('hide');
        } 
    } else {
        document.querySelector('#error').classList.remove('hide');
    }
    
});

