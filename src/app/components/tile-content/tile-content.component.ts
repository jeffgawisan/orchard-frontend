import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

interface img {
    desktop: string,
    mobile: string
}

@Component({
    selector: 'app-tile-content',
    templateUrl: './tile-content.component.html',
    styleUrls: ['./tile-content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TileContentComponent implements OnInit {

    closeResult = '';

    @Input() title = "";
    @Input() description = "";
    @Input() image: img = { desktop: '', mobile: '' };

    constructor() { }

    ngOnInit() {
    }

    /**
     * Capture Read More anchor clicks
     */
    onSelectReadMore() {
        console.log(`Clicked read more title:${this.title}`);
    }
}
