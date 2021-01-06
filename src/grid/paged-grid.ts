import template from './paged-grid.html'
import * as ko from 'knockout'
import {Observable, ObservableArray} from "knockout";
import Grid from './grid'

ko.components.register('grid',Grid);

class GridPager {


    constructor() {

    }


}

export default {viewModel: GridPager, template: template}