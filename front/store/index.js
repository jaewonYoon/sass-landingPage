"use strict";
exports.__esModule = true;
var mobx_1 = require("mobx");
var Cities = [
    'Amsterdam',
    'London',
    'Madrid'
];
exports.createStore = function () {
    var store = {
        query: mobx_1.observable.box(''),
        setQuery: function (query) {
            store.query.set(query.toLowerCase());
        },
        get filteredCities() {
            return Cities.filter(function (city) { return city.toLowerCase().includes(store.query.get()); });
        }
    };
    return store;
};
