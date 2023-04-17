import { Component, Input, OnInit } from '@angular/core';

interface img {
    desktop: string,
    mobile: string
}

@Component({
    selector: 'app-tile-content',
    templateUrl: './tile-content.component.html',
    styleUrls: ['./tile-content.component.scss']
})
export class TileContentComponent implements OnInit {

    @Input() title = "";
    @Input() description = "";
    @Input() image: img = { desktop: '', mobile: '' };

    constructor() { }

    ngOnInit() {
    }

}
