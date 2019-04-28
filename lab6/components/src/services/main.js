class PhoneManager {
    constructor() {
        this._databaase = []
    }

    get database() {
        return this._databaase;
    }

    static create_phone(model, submodel, battery, ram, touch_screen, os=false,
                 os_version=false) {
        if (os){
            return  new SmartPhone(model, submodel, battery, ram,
                touch_screen, os);
            } else {
            return new Phone(model, submodel, battery, ram,
                touch_screen, os);
        }
    }
}


class Phone {
    constructor(model, submodel, battery, ram, touch_screen, os) {
        this._model = model;
        this._submodel = submodel;
        this._battery = battery;
        this._ram = ram;
        this._touch_screen= touch_screen;
        this._os = os
    }

    get model() {
        return this._model;
    }

    get sumbodel() {
        return this._submodel;
    }

    get battery() {
        return this._battery;
    }

    get ram() {
        return this._ram;
    }

    get touch_screen() {
        return this._touch_screen;
    }

    show_parameters() {
        console.log(this.battery);
        console.log(this.ram);
        console.log(this.touch_screen);
    }

    show() {
        console.log(this.model);
        console.log(this.submodel);
    }

    get_parameters() {
        return {
            model: this._model = model,
            submodel: this._submodel = submodel,
            battery: this._battery = battery,
            ram: this._ram = ram,
            touch_screen: this._touch_screen= touch_screen,
            os: this._os = os
        }
    }

}

class SmartPhone extends Phone {
    update_os(new_os) {
        if (new_os >= this.os) {
        this._os = new_os;
        }
    }
}