var lib={};


lib.PhoneManager = (function () {

    is_same = function is_same(phone1, phone2) {
        for(key in phone1){
            if(phone1[key]!==phone2[key]){
                return false
            }
        }
        return true
    };

    is_in_database = function is_in_database(phone) {
        var result = false;
        database.forEach(function(item, index, array) {
            if (this.is_same(item, phone)) {
                result = true;
            }
        });

        return result
    };

    return {
        show_phones: function () {
            database.forEach(function(item, index, array) {
                console.log(item.get_parameters())
            });
        },

        ram_filter: function ram_filter(minimal_val) {
            return database.filter(phone => phone.ram >= minimal_val)
        },

        find_by_model: function find_by_model(model) {
            return database.filter(phone => phone.model === model)
        },

        find_by_submodel: function find_by_submodel(submodel) {
            return database.filter(phone => phone.submodel === submodel)
        },

        throw_out: function throw_out(model, submodel) {
            database.forEach(function(item, index, array) {
                if (item.model===model && item.submodel===submodel) {
                    database.splice(index, 1);
                }
            });
        },

        is_in_database: this.is_in_database,

        buy: function buy(phone) {
            if (!is_in_database(phone)){
                database.push(phone);
                return true
            }
            return false
        },

        create: function create(model, submodel, battery, ram, touch_screen,
                                os=false, os_version=false) {
            if (os){
                var aPhone = new SmartPhone(model, submodel, battery, ram,
                    touch_screen, os, os_version)
            } else {
                var aPhone = new Phone(model, submodel, battery, ram,
                    touch_screen)
            }
            return aPhone
        }

    }

})();






function Phone(model, submodel, battery, ram, touch_screen) {
    this.model = model;
    this.submodel = submodel;
    this.battery = battery;
    this.ram = ram;
    this.touch_screen= touch_screen;
}

Phone.prototype = {
    show: function () {
        console.log(this.model);
        console.log(this.submodel)
    },

    show_parameters: function() {
        console.log(this.battery);
        console.log(this.ram);
        console.log(this.touch_screen);
    },
    get_parameters: function () {
        return this
    }
};

function SmartPhone(model, submodel, battery, ram, os, os_version){
    Phone.call(this, model, submodel, battery, ram);
    this.os = os;
    this.os_version = os_version;
}

SmartPhone.prototype = Object.create(Phone.prototype);
SmartPhone.prototype.constructor = SmartPhone;

SmartPhone.prototype.update_os = function(os, os_version) {
    this.os = os;
    this.os_version = os_version
};

SmartPhone.prototype.show_os = function() {
    console.log(this.os);
    console.log(this.os_version);
};


var database = [
    new Phone("Iphone", "8", 1200, 2, true),
    new Phone("Nokia", "3310", 800, 0.5, false),
    new Phone("Nokia", "5510", 1200, 1, false),
    new Phone("Xiaomi", "Redmi 4", 1900, 2, true),
    new Phone("Google", "Plus", 1900, 4, true)];

var available_phones = [];
lib.PhoneManager.show_phones();
console.log("Filter:");
console.log(lib.PhoneManager.ram_filter(2));
console.log("Filter by model:");
console.log(lib.PhoneManager.find_by_model("Iphone"));
console.log("Is in database:");
console.log(lib.PhoneManager.is_in_database(new Phone("Iphone", "8", 1200, 2, true)));
console.log("Add:");
console.log(lib.PhoneManager.buy(new Phone("Iphone", "8", 1200, 2, true)));
console.log(lib.PhoneManager.buy(new Phone("Vodaphone", "8", 1200, 2, true)));
console.log(database);
console.log("Remove:");
lib.PhoneManager.throw_out("Iphone", "8");
console.log(database);

