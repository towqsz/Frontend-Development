const uuidv4 = require('uuid/v4');

let PhoneManagerActionType = {
    ADD : true,
    REMOVE : false
};


class Phone {
    constructor(model, submodel, battery, ram) {
        this.id = uuidv4();
        this.model = model;
        this.submodel = submodel;
        this.battery = battery;
        this.ram = ram;
    }


    show_parameters() {
        console.log(this.battery);
        console.log(this.ram);
    }

    show() {
        console.log(this.model);
        console.log(this.submodel);
    }

    get_parameters() {
        return [
            "Model: " + this._model,
            "Submodel: " + this._submodel,
            "Battery: " + this._battery,
            "Ram: " + this._ram
        ]
    }

}

class SmartPhone extends Phone {
    constructor(model, submodel, battery, ram, touch_screen, os, os_version) {
        super(model, submodel, battery, ram);
        this.id = uuidv4();
        this.model = model;
        this.submodel = submodel;
        this.battery = battery;
        this.ram = ram;
        this.touch_screen= touch_screen;
        this.os = os;
        this.os_version = os_version;
    }


    update_os(new_os) {
        if (new_os >= this.os) {
            this._os = new_os;
        }
    }

    get_parameters(phone) {
        return [
            "Model: " + phone._model,
            "Submodel: " + phone._submodel,
            "Battery: " + phone._battery,
            "Ram: " + phone._ram,
            "Touch screen: " + phone._touch_screen,
            "Operating system: " + phone._os,
            "OS version: " + phone._os_version
        ]
    }

}

class PhoneManager {
    constructor() {
        this._database = [
            new SmartPhone("Iphone", "XS", 1200, 2, true, "IOS", 12.2),
            new Phone("Nokia", "3310", 800, 0.5, false),
            new Phone("Nokia", "5510", 1200, 1, false),
            new SmartPhone("Xiaomi", "Redmi 4", 1900, 2, true, "Android", 5),
            new SmartPhone("Google", "Plus", 1900, 4, true, "Google", 2)
        ];
        this.phones = this.database
    }

    get database() {
        return this._database;
    }

    create_phone(model, submodel, battery, ram, touch_screen, os=false,
                 os_version=false, add=false) {
        if (os){
            var phone = new SmartPhone(model, submodel, battery, ram,
                touch_screen, os, os_version);
        } else {
            var phone = new Phone(model, submodel, battery, ram,
                touch_screen);
        }
        if(add){
            this.update_database(phone)
        }
        return phone
    }

    update_database(phone=false, action=PhoneManagerActionType.ADD) {
        if(!phone){
            return "Database not updated. Data field not filled.";
        } else if (action) {
            if (!this._is_in_database(phone)) {
                this._database.push(phone);
                return "Phone added successfully."
            } else {
                return "Phone already in database."
            }
        } else {
            this._database = this._database.filter(
                element => element.id !== phone.id);
            return "Phone removed."
        }
    }


    _is_same(phone1, phone2) {
            if(phone1!==phone2) {
                return false
            }
        return true
    }

    _is_in_database(phone) {
        return this._database.some(el => el===phone);
    }

    ram_filter(minimal_val) {
        return this._database.filter(phone => phone.ram >= minimal_val)
    }

    find_by_model(model) {
        return this._database.filter(phone => phone.model === model)
    }

    find_by_submodel(submodel) {
        return this._database.filter(phone => phone.submodel === submodel)
    }

    get_phone_parameters(phone) {
        return [
        "Id: " + phone.id,
        "Model: " + phone.model,
        "Submodel: " + phone.submodel,
        "Battery: " + phone.battery,
        "Ram: " + phone.ram,
        "Touch screen: " + phone.touch_screen,
        "Operating system: " + phone.os,
        "OS version: " + phone.os_version]
    }
}


export default PhoneManager
export {PhoneManagerActionType}