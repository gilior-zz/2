import * as ko from 'knockout'
import {Observable} from "knockout";
import Children from './children/children'
import Hello from './hello/hello'
import Counter from './counter/counter'
import SimpleList from './simple_list/simple-list'
import SmartList from './smart-list/smart-list'
import ManyControls from './many-controls/many-controls'
import Collections from "./collections/collections";
ko.components.register('children',Children);
ko.components.register('hello',Hello);
ko.components.register('counter',Counter);
ko.components.register('simple-list',SimpleList);
ko.components.register('smart-list',SmartList);
ko.components.register('many-controls',ManyControls);
ko.components.register('collections',Collections);
class Person{
    name:Observable<string>=ko.observable("lior");
    constructor() {

    }
}
ko.applyBindings(new Person(),document.getElementById('app'))
