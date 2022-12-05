const PlayerNameList = document.getElementById('Player-name');

function addPlayerCaed(element){
    const PlayerName = element.parentNode.children[0];
    

    if( PlayerNameList.children.length<5){

        let li = document.createElement('li');
        li.innerText = PlayerName.innerText ;
        PlayerNameList.appendChild(li);
        const btn = element.parentNode.children[2];
        btn.disabled = true;
        btn.style.backgroundColor = 'gray';
        
    }
    else{
        alert('You Alrady select Five players');
    }
}

    // convart string type data in number 

function convartToNumber(event){
    const eventString = event.value;
    const eventNumber = parseFloat(eventString);
    return eventNumber;
}

//cheick error function

function error(event){

    if(isNaN(event.value)){
        alert('your insurt value is not a number. Please Enter number type value');

        
    }
    else if(event.value == ''){
        alert('your input fild is empty! please fillUp.');
    }

}

 //calculate to got plear expenses.
document.getElementById('Calculate').addEventListener('click',function(){
    const perPlayerAmmountFild = document.getElementById('Per-Player-amaount');
    error(perPlayerAmmountFild);
    const perPlayerAmmount = convartToNumber(perPlayerAmmountFild);
    const playerListIndex = PlayerNameList.children.length;
    if (playerListIndex<=0){
        alert("Dont have any play. Please setect player.")
    }
    const allPlayerAmaount = perPlayerAmmount * playerListIndex
    console.log();
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = allPlayerAmaount;
});

//total calculate 
document.getElementById('Calculate-total').addEventListener('click',function(){
    const playerExpensesFild = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesFild.innerText;
    const playerExpenses = parseInt(playerExpensesString);
    

    const ManagerSalaryFild = document.getElementById('manager-salary');
    error(ManagerSalaryFild);
    const ManagerSalary = convartToNumber(ManagerSalaryFild);

    const coachSalaryFild = document.getElementById('coach-salary');
    error(coachSalaryFild);
    const coachSalary = convartToNumber(coachSalaryFild);

    const totalAmaount = playerExpenses + ManagerSalary + coachSalary;

    const total = document.getElementById('total-amaount');
    total.innerText = totalAmaount;


});
