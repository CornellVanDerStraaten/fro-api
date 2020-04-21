// Het resultaat van de JSON bestaat voor een user uit:
// Let op, een property kan uit meerdere objecten bestaan.
// De beschrijving kun je terugvinden op
// https://randomuser.me/documentation#results





// phone
// cell
// nat
function Gender(item) {
    let genderObj = this;
    genderObj.gender = item.gender;
}

function Name(item) {
    let nameObj = this;
    nameObj.title = item.title;
    nameObj.first = item.first;
    nameObj.last = item.last;
}
function Location(item) {
    let locationObj = this;
    locationObj.street = item.street;
    locationObj.city = item.city;
    locationObj.state = item.state;
    locationObj.postcode = item.postcode;
    locationObj.coordinates = item.coordinates;
    locationObj.timezone = item.timezone;
}
function Login(item) {
    let loginObj = this;
    loginObj.uuid = item.uuid;
    loginObj.username = item.username;
    loginObj.password = item.password;
    loginObj.salt = item.salt;
    loginObj.md5 = item.md5;
    loginObj.sha1 = item.sha1;
    loginObj.sha256 = item.sha256;
}
function Dob(item) {
    let dobObj = this;
    dobObj.date = item.date;
    dobObj.age = item.age;
}

function Registered(item) {
    let registeredObj = this;
    registeredObj.date = item.date;
    registeredObj.age = item.age;
}
function Phone(item) {
    let phoneObj = this;
    phoneObj.phone = item;
}
function Cell(item) {
    let cellObj = this;
    cellObj.cell = item;
}
function Nat(item) {
    let natObj = this;
    natObj.nat = item;
}
function Id(item) {
    let idObj = this;
    idObj.id = item;
}

function Email(item) {
    let emailObject = this;
    emailObject.email = item;
}

function Street(item) {
    let streetObj = this;
    streetObj.street = item.street;
}

function Coordinates(item) {
    let locationObject = this;
    locationObject.longitude = item.longitude;
    locationObject.latitude = item.latitude;
}

function Address(item) {
    let addressObj = this;
    addressObj.street = item.street;
    addressObj.city = item.city;
    addressObj.state = item.state;
    addressObj.country = item.country;
    addressObj.postcode = item.postcode;
    addressObj.showStreet = function() {
            console.log(
                addressObj.street.name,
                addressObj.street.number);
        };

        addressObj.showAddress = function() {
            console.log(
                addressObj.city,
                addressObj.state,
                addressObj.country,
                addressObj.postcode);
            // TODO: AF 
        };

}
function Picture(item) {
    let pictureObj = this;
    pictureObj.large = item.large;
    pictureObj.medium = item.medium;
    pictureObj.thumbnail = item.thumbnail;
    }
   // TODO AF

    


// TODO:    Maak de ontbrekende objecten voor
//          gender
//          location
//          email
//          login
//          dob
//          registered
//          phone
//          cell
//          id
//          picture
//          nat