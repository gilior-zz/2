import * as ko from 'knockout'
import {Observable} from "knockout";
import Children from './children/children'
ko.components.register('children',Children);
class Person{
    name:Observable<string>=ko.observable("lior");
    constructor() {

    }
}
ko.applyBindings(new Person(),document.getElementById('app'))
