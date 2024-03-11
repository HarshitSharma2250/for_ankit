class Mobile {
    #unlockPin;
    constructor(model, number, unlockPin) {
        this.model = model;
        this.number = number;

            this.#unlockPin = unlockPin;
        
    }


    get getUnlockPin() {
        return this.#unlockPin;
    }

    set unlockPin(newUnlockPin) {
        this.#unlockPin = newUnlockPin;
    }

    sendSMS(textMessage) {
        return textMessage;
    }
}



export default Mobile
