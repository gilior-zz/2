import template from './grid.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from "knockout";

class Row {
    name: Observable<string> = ko.observable("");
    count: Observable<number> = ko.observable(0);
    price: Observable<number> = ko.observable(0);
}
class Page{
    rows:ObservableArray<Row>=ko.observableArray();
}

class Grid {
    page_size: Observable<number> = ko.observable(0);
    columns: ObservableArray<string> = ko.observableArray();
    pages: ObservableArray<Page> = ko.observableArray();

    constructor(params: { page_size: number, columns: string[] }) {
        this.page_size(params.page_size);
        for (const column of params.columns)
            this.columns.push((column));
    }


}

export default {viewModel: Grid, template: template}