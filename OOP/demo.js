class myDate{
    constructor(day,month,year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
    }

    get month() {
        return this._month;
    }

    set month(value) {
        this._month = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }
}