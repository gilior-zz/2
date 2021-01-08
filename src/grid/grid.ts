import template from './grid.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from 'knockout'

class Row {
    name: Observable<string> = ko.observable("");
    count: Observable<number> = ko.observable(0);
    price: Observable<number> = ko.observable(0);
}

class Page {
    rows: ObservableArray<Row> = ko.observableArray();
}

class Grid {
    page_size: Observable<number> = ko.observable(0);
    columns: ObservableArray<string> = ko.observableArray();
    pages: ObservableArray<Page> = ko.observableArray();

    constructor(params: { page_size: number, columns: string[], postbox: Observable }) {
        this.page_size(params.page_size);
        for (const column of params.columns)
            this.columns.push(column);

        params.postbox.subscribe((newValue) => {
            console.log(newValue);
            this.add_item();
        }, this, "mytopic");
    }

    add_item = () => {
        if (!this.pages().length) {
            this.pages.push({
                rows: ko.observableArray([{
                    count: ko.observable(1)
                    , name: ko.observable('new row')
                    , price: ko.observable(1)
                }])
            })
        } else {
            let size_of_last = this.pages()[this.pages().length - 1].rows().length
            if (size_of_last < this.page_size())
                this.pages()[this.pages().length - 1]
                    .rows.push({
                    count: ko.observable(1)
                    , name: ko.observable('new row')
                    , price: ko.observable(1)
                });
            else {
                this.pages.push({
                    rows: ko.observableArray([{
                        count: ko.observable(1)
                        , name: ko.observable('new row')
                        , price: ko.observable(1)
                    }])
                })
            }

        }

    }


}

export default {viewModel: Grid, template: template}
