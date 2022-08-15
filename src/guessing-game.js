class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        return
        //this.min = this.min * 3;
        //this.max = max;

    }

    guess() {

        let s = Math.round((this.max - this.min) / 2) + this.min
        this.mid = s;
        console.log(s);
        return s

    }

    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;;

    }
}

module.exports = GuessingGame;
