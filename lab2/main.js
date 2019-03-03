// obiekt ze swojej dziedziny -> w środku: number, string, boolean
// kilka funkcji do tego (bazy danych) -> wyszukaj, crud: foreach, filter, pop,
// push
//
// crud - create, read, update, delete
//


var database = [
    create("Iphone", "8", 1200, 2, true),
    create("Nokia", "3310", 800, 0.5, false),
    create("Nokia", "5510", 1200, 1, false),
    create("Xiaomi", "Redmi 4", 1900, 2, true),
    create("Google", "Plus", 1900, 4, true)
    ];


//console.log(is_same(create("Iphone", "8", 1200, 2, true), create("Iphone", "8", 1200, 2, true)));
// still debugging is_in_database:
console.log(is_in_database(create("Iphone", "8", 1200, 2, true)));
//buy(create("Iphone", "8", 1200, 2, true));
//console.log(database);


function ram_filter(minimal_val) {
    function is_big_enough(value) {
        return value.ram >= minimal_val
    }

    return database.filter(is_big_enough)
}

function find_by_model(model) {
    var phone_list = [];
    database.forEach(function(item, index, array) {
        if (item.model===model) {
            phone_list.push(item)
        }
    });
    return phone_list
}

function find_by_submodel(submodel) {
    var phone_list = [];
    database.forEach(function(item, index, array) {
        if (item.submodel===submodel) {
            phone_list.push(item)
        }
    });
    return phone_list
}

function throw_out(model, submodel) {
    database.forEach(function(item, index, array) {
        if (item.model===model && item.submodel===submodel) {
            database.splice(index, 1);
        }
    });
}

function buy(phone) {
    if (!is_in_database(phone)){
        database.push(phone)
    }
}

function is_same(phone1, phone2) {
    for(key in phone1){
        if(phone1[key]!=phone2[key]){
            return false
        }
    }
    return true
}

function is_in_database(phone) {
    database.forEach(function(item, index, array) {
        if (is_same(item, phone)) {
            return true
        }
    });

    return false
}

function create(model, submodel, battery, ram, touch_screen) {

    return {
        model: model,
        submodel: submodel,
        battery: battery,
        ram: ram,
        touch_screen: touch_screen}
}