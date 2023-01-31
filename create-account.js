function createAccount(pin, amount) {
    
    return {
        checkBalance(inputPin) {
            if(inputPin === pin) return 'INVALID pin'
            return `$${amount}`;
        },
        deposit(inputPin, depositAmount){
            if(inputPin !== pin) return 'INVALID PIN';
            amount += depositAmount;
            return `Succesfully deposited $${depositAmount}. Current balance is $${amount}`
        },
        withdraw(inputPin, withdrawAmount){
            if(inputPin !== pin) return 'INVALID PIN';
            if(amount === 0) return 'Funds unavaliable for withdraw'
            amount -= withdrawAmount;
            return `Succesfully withdrew $${withdrawAmount}. Current balance is $${amount}`
        },
        changePin(inputPin, desiredPin){
            if(inputPin !== pin) return 'INVALID PIN';
            pin = desiredPin;
            return 'PIN succesfully changed!'
        } 

    };
};

module.exports = { createAccount };
