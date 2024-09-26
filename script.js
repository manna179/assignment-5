

document.getElementById('noakhali-donation')
.addEventListener('click', function(){
    
   

    const mainAccount = document.getElementById('my-account').innerText ;
    const mainAccountNumber = parseFloat(mainAccount);
   const donatedAmount = document.getElementById('donated-amount').value;
   const donatedAmountNumber = parseFloat(donatedAmount);
   const totalMain = mainAccountNumber - donatedAmountNumber;

   
   
   if(totalMain < 0){
   return alert('insufficient money')
   }
   
   if(donatedAmountNumber > 0 ){
    document.getElementById('my-account').innerText = totalMain;
    const noakhaliAcoount = document.getElementById('noakhali-account').innerText;
    const noakhaliAcoountNumber = parseFloat(noakhaliAcoount);
    const totalNoakhaliAccountNumber = noakhaliAcoountNumber + donatedAmountNumber; 
    document.getElementById('noakhali-account').innerText = totalNoakhaliAccountNumber;
 
 
    const currentDate = document.createElement('p');
 
     const p = document.createElement('p');
     p.innerText = `${donatedAmount} Taka is Donated for Flood at Noakhali, Bangladesh
      `;
      p.classList.add('font-bold', 'text-lg', 'mb-2', )
     currentDate.innerText = `${new Date()}`
     currentDate.classList.add('mb-8')
     
      document.getElementById('history-section').appendChild(p);
      document.getElementById('history-section').appendChild(currentDate);
   } 
   else{
    return alert('wrong information') 
   }  
   alert('check history')  
})



document.getElementById('donate-feni').addEventListener('click',function(){

    
const myAccount = getInputInfo('my-account')
const feniAcount = getInputInfo('feni-account')
const donateMoney = getInputValue('donate-feni-account');

const totalFeniDonation = myAccount - donateMoney;
if( donateMoney > myAccount){
    return alert('insufficient money')
    }

if(donateMoney > 0){
    document.getElementById('my-account').innerText = totalFeniDonation;

    const totalFeniAccount = feniAcount + donateMoney;
    document.getElementById('feni-account').innerText = totalFeniAccount;
    
    const currentDate = document.createElement('p');
    
    const p = document.createElement('p');
    p.classList.add('font-bold', 'text-lg', 'mb-2',)
    p.innerText = `${donateMoney}  Taka is Donated for famine-2024 at Feni, Bangladesh`;
    document.getElementById('history-section').appendChild(p);
    currentDate.innerText = `${new Date()}`;
    currentDate.classList.add('mb-8')
    document.getElementById('history-section').appendChild(currentDate)
}else{
    alert('wrong information')
}

alert('check history')

})



document.getElementById('donate-quota').addEventListener('click', function(){
    const myAccount = getInputInfo('my-account');
    const quotaAccount = getInputInfo('quota-account');
    const donateForQuota = getInputValue('donate-for-quota');

       const totalQuotaDonation = myAccount - donateForQuota;

       if(donateForQuota > myAccount){
        return alert(' insufficient balance')
     }
     if(donateForQuota > 0){
        document.getElementById('my-account').innerText = totalQuotaDonation;

        const totalquotaAccount = quotaAccount + donateForQuota;
        document.getElementById('quota-account').innerText = totalquotaAccount;
    
        const currentDate = document.createElement('p');
        const p = document.createElement('p');
        p.innerText = `${donateForQuota} `;
        p.classList.add('font-bold')
        document.getElementById('history-section').appendChild(p);
        currentDate.innerText = `${new Date()}`;
        currentDate.classList.add('mb-8')
        document.getElementById('history-section').appendChild(currentDate)
     }else{
        alert('wrong information')
     }
     alert('check history')
})


document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('main-section')
    const donateButton = document.getElementById('donation-btn');
    donateButton.classList.remove('default-button');
    donateButton.classList.add('active-button')
    const historyButton = document.getElementById('history-btn');  
    historyButton.classList.remove('active-button')
    historyButton.classList.add('default-button')
    
})


document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-section')
    const historyButton = document.getElementById('history-btn');
    historyButton.classList.remove('default-button')
    historyButton.classList.add('active-button')
    const donateButton = document.getElementById('donation-btn');
    donateButton.classList.remove('active-button')
    donateButton.classList.add('default-button');

})






