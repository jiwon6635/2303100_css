class TextManager {
    constructor() {
        this.value = { date: "hello lions!" }
    }

    getValue(){
        return this.value.data;
    }
    
    setValue(newValue) {
        this.value = newValue;
    }
}