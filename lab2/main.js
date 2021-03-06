var database = [
    create("Iphone", "8", 1200, 2, true),
    create("Nokia", "3310", 800, 0.5, false),
    create("Nokia", "5510", 1200, 1, false),
    create("Xiaomi", "Redmi 4", 1900, 2, true),
    create("Google", "Plus", 1900, 4, true)
    ];

console.log(database);
console.log("Filter:");
console.log(ram_filter(2));
console.log("Filter by model:");
console.log(find_by_model("Iphone"));
console.log("Is in database:");
console.log(is_in_database(create("Iphone", "8", 1200, 2, true)));
console.log("Add:");
console.log(buy(create("Iphone", "8", 1200, 2, true)));
console.log(buy(create("Vodaphone", "8", 1200, 2, true)));
console.log(database);
console.log("Remove:");
throw_out("Iphone", "8");
console.log(database);


function ram_filter(minimal_val) {
    return database.filter(phone => phone.ram >= minimal_val)
}

function find_by_model(model) {
    return database.filter(phone => phone.model === model)
}

function find_by_submodel(submodel) {
    return database.filter(phone => phone.submodel === submodel)
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
        database.push(phone);
        return true
    }
    return false
}

function is_same(phone1, phone2) {
    for(key in phone1){
        if(phone1[key]!==phone2[key]){
            return false
        }
    }
    return true
}

function is_in_database(phone) {
    var result = false;
    database.forEach(function(item, index, array) {
        if (is_same(item, phone)) {
            result = true;
        }
    });

    return result
}

function create(model, submodel, battery, ram, touch_screen) {

    return {
        model: model,
        submodel: submodel,
        battery: battery,
        ram: ram,
        touch_screen: touch_screen}
}