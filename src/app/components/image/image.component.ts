import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ImageComponent implements OnInit {
    closeResult = '';

    @Input() desktopSrc = ''; // image desktop source
    @Input() mobileSrc = ''; // image mobile source

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
    }

    /**
     * Capture open clicks and trigger listener if modal has closed
     * @param content angular template
     * @param src image source
     */
    open(content: any, src: string) {
		this.modalService.open(content, { windowClass: 'modal-image' }).result.then(
			(result) => {
				console.log(`Image modal close image:${src}`);
			},
			(reason) => {
				console.log(`Image modal close image:${src}`);
			},
		);
	}
}
