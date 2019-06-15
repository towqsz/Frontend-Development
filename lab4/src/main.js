let PhoneManagerActionType = {
    ADD : true,
    REMOVE : false
};




class PhoneManager {
    constructor() {
        this._database = []
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
                element => element.model !== phone.model && element.submodel !== phone.submodel);
            return "Phone removed."
        }
    }


    _is_same(phone1, phone2) {
        for(key in phone1){
            if(phone1[key]!==phone2[key]){
                return false
            }
        }
        return true
    }

    _is_in_database(phone) {
        result = this._database.some(el => el===phone);
        return result
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
}


class Phone {
    constructor(model, submodel, battery, ram, touch_screen, os=null, os_version=null) {
        this._model = model;
        this._submodel = submodel;
        this._battery = battery;
        this._ram = ram;
        this._touch_screen= touch_screen;
        this._os = os;
        this._os_version = os_version;
    }

    get model() {
        return this._model;
    }

    get submodel() {
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
            model: this._model,
            submodel: this._submodel,
            battery: this._battery,
            ram: this._ram,
            touch_screen: this._touch_screen,
            os: this._os,
            os_version: this._os_version
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


let manager = new PhoneManager();
manager.create_phone(
    "Iphone", "XS", 1200, 2, true, "IOS", 12.2, true);
console.log(manager.database);
manager.update_database(new Phone("Nokia", "3310", 800, 0.5, false));
manager.update_database(new Phone("Nokia", "5510", 1200, 1, false));
manager.update_database(new SmartPhone("Xiaomi", "Redmi 4", 1900, 2, true, "Android", 5));
manager.update_database(new SmartPhone("Google", "Plus", 1900, 4, true, "Google", 2));
console.log(manager.database);

console.log("Filter:");
console.log(manager.ram_filter(2));
console.log("Filter by model:");
console.log(manager.find_by_model("Iphone"));
console.log("Is in database:");
//console.log(manager._is_in_database(new Phone("Iphone", "8", 1200, 2, true)));
console.log("Add:");
console.log(manager.create_phone("Iphone", "8", 1200, 2, true, "IOS", 12.1, true));
console.log(manager.database);
console.log("Remove:");
manager.update_database(new SmartPhone("Iphone", "XS", 1200, 2, true,
    "IOS", 12.2), PhoneManagerActionType.REMOVE);
console.log(manager.database);