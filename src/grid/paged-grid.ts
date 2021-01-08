import template from './paged-grid.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from "knockout";
import Grid from './grid'

// ko.components.register('grid',Grid);

class GridPager {
    add_item =  ko.observable();
    sort_by_name =  ko.observable();
    jump_to_first_page =  ko.observable();

grid_obj:Observable<string>=ko.observable('grid');
    constructor() {
        console.log(this.grid_obj())

    }
    myPostProcessingLogic=()=>{
        console.log(this.grid_obj())
    }

    on_add_item=()=>{
        this.add_item.notifySubscribers('value', "mytopic");
    }

    on_sort_by_name=()=>{
        this.sort_by_name.notifySubscribers('value', "mytopic");
    }
    on_jump_to_first_page=()=>{
        this.jump_to_first_page.notifySubscribers('value', "mytopic");
    }

}

export default {viewModel: GridPager, template: template}
