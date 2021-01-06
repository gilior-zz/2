import template from './collections.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from "knockout";

class Collections {
    parents: ObservableArray<{ name: Observable<string>, children: ObservableArray<string> }> = ko.observableArray<{ name: Observable<string>, children: ObservableArray<string> }>([
        {name: ko.observable("Annabelle "), children: ko.observableArray()},
        {name: ko.observable("Charles "), children: ko.observableArray()},
        {name: ko.observable("Bertie "), children: ko.observableArray()},
    ])

    constructor() {
    }

    on_add_child = (data:any, event:any) => {
        var index = event.target.getAttribute("index")

        this.parents()[index].children.push("New child")
    }

}

export default {viewModel: Collections, template: template}