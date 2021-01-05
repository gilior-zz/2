import template from './many-controls.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from "knockout";

class ManyControls {
    text_value: Observable<string> = ko.observable<string>("");
    pwd: Observable<string> = ko.observable<string>("");
    selected_option: Observable<string> = ko.observable<string>("");
    options: ObservableArray<string> = ko.observableArray<string>(["alpha","beta","gamma"]);
    radio_selection: Observable<string> = ko.observable<string>("alpha");
    multi_selected_option: ObservableArray<string> = ko.observableArray<string>([]);
    bool_value: Observable<boolean> = ko.observable(false);


    constructor() {
    }

}

export default {viewModel: ManyControls, template: template}