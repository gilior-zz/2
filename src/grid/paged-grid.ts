import template from './paged-grid.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from "knockout";
import Grid from './grid'

// ko.components.register('grid',Grid);

class GridPager {
     postbox =  ko.observable();

grid_obj:Observable<string>=ko.observable('grid');
    constructor() {
        console.log(this.grid_obj())

    }
    myPostProcessingLogic=()=>{
        console.log(this.grid_obj())
    }

    add_item=()=>{
        this.postbox.notifySubscribers('value', "mytopic");

    }

}

export default {viewModel: GridPager, template: template}
