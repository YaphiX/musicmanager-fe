import { Component } from '@angular/core'

@Component({
	selector: 'title-bar',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css']
})

export class TitleComponent {
	content = ''
	ngOnInit() {
		this.content = document.getElementsByTagName('title-bar')[0].getAttribute('title')
	}
}