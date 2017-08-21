import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'singerdetail',
	templateUrl: './singerdetail.component.html',
	styleUrls: ['./singerdetail.component.css']
})

export class SingerDetailComponent {
	cleanedSingerName = '';
 	singerAlias = [];
	urlSongId = document.location.href.split('/').pop();
	json:any;

	constructor(
	    private router: Router) {}

	getData(){
		let json = {
			"singerId": '666',
			"singerName": '周杰伦jay',
			"cleanedSingerName": '周伦论',
			"singerAlias": ['jay','jayzhou','jayjay'],
			"nation": 'Chinese',
			"period": '90年代',
			"createTime": '2016/12/01',
			"sex": '男',
			"singerClass": '华语男'
		}
		return {json}
	}
	
	ngOnInit() {
		this.json = this.getData().json;
		for (let item of this.json["singerAlias"]) {
			this.singerAlias.push(item)
		}
		this.cleanedSingerName = this.json["cleanedSingerName"];
	}

	trackByIndex(index: number, obj: any): any {
  		return index;
	}

	addSingerAlias() {
		this.singerAlias.push('')
		console.log(this.singerAlias)
	}

	clearSingerAlias() {
		for(let i = this.singerAlias.length; i>=0; i--){
			if(this.singerAlias[i] == '') {
				this.singerAlias.splice(i,1)
			}
		}
		console.log(this.singerAlias)
	}
  	back() {
    	window.history.back()
 	}
	submit() {
		this.singerAlias.forEach(function(ele,index,array) {
			if(ele == '') {
				array.splice(index,1)
			}
		})
		console.log(this.cleanedSingerName)
		console.log(this.singerAlias.join('$'))
	}
}

