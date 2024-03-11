let first_pay_btn = document.getElementById('first_pay_btn');
let input_number = document.getElementById('input_number');
let input_data = document.getElementById('input_data');
let output_data = document.getElementById('output_data');
let amount_sending = document.querySelectorAll('.amount_sending')
const pinInputs = document.querySelectorAll('#pin_here input');
let submit_secondPage = document.getElementById('submit_secondPage');
let finalPage = document.getElementById('finalPage');



let totalBalance = 2000;

output_data.style.display='none'

function checkUpdate() {
    let randomTime = Math.random() * 4 + 1;
    return new Promise((res, rej) => {
        first_pay_btn.addEventListener('click', () => {
            input_data.textContent='data loding .....'
            setTimeout(() => {
     if (input_number.value > 100000  ) {
                        rej('Maximum amount should be 100000');
                    } else if(input_number.value > totalBalance){
                        rej('you dont have enough balance');
                    } else if(input_number.value<1){
                        rej('min amount should more than 1rs');
                    }
                    else{
                        res(input_number.value);
                        input_data.style.display='none'
                        output_data.style.display='block'
                    }
                }, 1000 * randomTime);
            });
    });
}

checkUpdate()
.then((res) => {
        // show amount on sending page -------------------
        amount_sending.forEach((ele)=>{
            ele.textContent=res
        })
    })
    .catch((err) => alert(err));

    pinInputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
          const currentValue = event.target.value;
    
          if (currentValue.length === 1) {
            // Move focus to the next input field
            const nextIndex = index + 1;
            if (nextIndex < pinInputs.length) {
              pinInputs[nextIndex].focus();
            }
            else{
                input.blur();
            }
          }
        });
      });


      finalPage.style.display='none'

function SecondSubmit(){
    let randomTime = Math.random() * 4 + 1;
    return new Promise((res, rej) => {
        submit_secondPage.addEventListener('click', () => {
            output_data.textContent='data loding .....'
            setTimeout(() => {
                    res();
                    finalPage.style.display = 'block';
                    output_data.style.display = 'none';
                
            }, 1000*randomTime);
            
        })
    })

}

SecondSubmit().then((res)=>res).catch((err)=>err)