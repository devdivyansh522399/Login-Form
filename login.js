
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const btnLogin = document.querySelector('.login__btn');
const accounts = [account1,account2,account3,account4,account5];
let IsLogin = false;
let currentAccount;
const CreateUserName = function(account){
    account.forEach(function(acc){
            acc.username =  acc.Owner.toLowerCase().split(' ').map(name => name[0]).join('');
    }
    );
};
CreateUserName(accounts);
btnLogin.addEventListener('click', function(){
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        IsLogin = true;
    }
    if(IsLogin){
        window.location.assign("index1.html");
    }
    else{
        window.location.assign("login.html");
    }
});