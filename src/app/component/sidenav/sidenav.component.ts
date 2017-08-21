import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SidenavComponent {
	constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'arrow-down',
        sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/arrow_down.svg'));
  	}

	ngOnInit() {
		let tar = document.getElementsByTagName('ul')
		length = tar.length
		for(let i = 0 ; i < length ; i++) {
			let childrenLen = tar[i].children.length
			let ulheight = (childrenLen * 30).toString()
			ulheight = ulheight + 'px'
			tar[i].style.height = ulheight
		}
	}
	toggle(id, target) {
		let tar = document.getElementById(target)
		let svg = <HTMLElement>document.getElementById(id).childNodes[3].childNodes[0]
		if (tar.style.height != '0px') {
			tar.style.cssText = "height: 0px"
			svg.style.transform = "rotateZ(180deg)"
		} else {
			let childrenLen = tar.children.length
			let ulheight = (childrenLen * 30).toString()
			ulheight = ulheight + 'px'
			tar.style.height = ulheight
			svg.style.transform = "rotateZ(360deg)"	
		}
	}
	changeSpanColor(type, id){
		let tar = document.getElementById(id)
		let img = <HTMLElement>tar.childNodes[1].childNodes[0]
		let svg = <HTMLElement>tar.childNodes[3].childNodes[0]
		let path = "../../../assets/icon/" + id

		type == "change" ? path = path + "1.png" : path = path + ".png";
		type == "change" ? svg.setAttribute("fill","#00abff") : svg.setAttribute("fill","#ffffff");
		img.setAttribute("src",path)
	}
}