import {Component, ViewChild, Inject, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/table';
import {MdPaginator, MD_DIALOG_DATA, MdDialog} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
	selector: 'songdetial',
	templateUrl: './songdetail.component.html',
	styleUrls: ['./songdetail.component.css']
})

export class SongDetailComponent {
	displayedColumns = ['thirdSongId', 'songSource', 'songName', 'singerName', 'coverUrl', 'hotDegree', 'state', 'createTime', 'lastEditTime', 'action'];
  	exampleDatabase = new ExampleDatabase();
	dataSource: ExampleDataSource | null;

	cleanedSongName = '';
 	songAlias = [];
 	hotDegree = '';

 	title = '';
	urlSongId = '';
	json:any;

	@ViewChild(MdPaginator) paginator: MdPaginator;

	constructor(
	    public dialog: MdDialog,
	    private router: Router) {}

	getData(){
		let json = {
			"songId": this.urlSongId,
			"songName": '回到过去',
			"cleanedSongName": '回到过去',
			"songAlias": ['回到过去1','回到过去2','回到过去3','回到过去1','回到过去2','回到过去3','回到过去1','回到过去2','回到过去3'],
			"singerId": '666',
			"singerName": '周杰伦jay',
			"cleanedSingerName": '周伦论',
			"singerAlias": ['jay','jayzhou','jayjay'],
			"playSource": '百度',
			"state": '在线',
			"createTime": '2016/12/01',
			"songClass": '民族音乐',
			"songTag": '流行，舒缓',
			"language": '中文',
			"releaseTime": '2016/07/09',
			"songTime": '04:23',
			"hotDegree": '1312'
		}
		return  {json}
	}
	
	ngOnInit() {
		if(document.location.href.indexOf('playcount') != -1) {
			document.getElementsByTagName('title-bar')[0].setAttribute('title', '播放次数')
		} else {
			document.getElementsByTagName('title-bar')[0].setAttribute('title', '歌曲列表')
		}
		this.urlSongId = document.location.href.split('/').pop();
		this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
		this.json = this.getData().json;
		console.log(this.json)
		for (let item of this.json["songAlias"]) {
			this.songAlias.push(item)
		}
		this.cleanedSongName = this.json["cleanedSongName"]
	}
	openDialog(songId) {
		if(songId[0] == 'coverImage') {
			this.dialog.open(ActionDialog,{
		        height: '300px',
		        width: '400px',
		        data: songId
	    	})
		} else {
			this.dialog.open(ActionDialog,{
	        height: '300px',
	        width: '400px',
	        data: songId
    	})
		}
	}
	trackByIndex(index: number, obj: any): any {
  		return index;
	}
	addSongAlias() {
		this.songAlias.push('')
		console.log(this.songAlias)
	}
	clearSongAlias() {
		for(let i = this.songAlias.length; i>=0; i--){
			if(this.songAlias[i] == '') {
				this.songAlias.splice(i,1)
			}
		}
		console.log(this.songAlias)
	}
	back() {
	    window.history.back()
	}
	submit() {
		for(let i = this.songAlias.length; i>=0; i--){
			if(this.songAlias[i] == '') {
				this.songAlias.splice(i,1)
			}
		}
		console.log(this.cleanedSongName)
		console.log(this.songAlias.join('$'))
	}
}
export interface UserData {
	thirdSongId: string;
	songSource: string;
	songName: string;
	singerName: string;
	coverUrl: string;
	hotDegree: string;
	state: string;
	createTime: string;
	lastEditTime: string;
}

export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 1; i++) { this.addUser(); }
  }

  /** Adds a new user to the database. */
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser() {
    return {
      thirdSongId: '22222',
      songSource: '爱听美达',
      songName: '回到过去',
      singerName: '周杰伦',
      coverUrl: 'http://rokidstory.oss-cn-hangzhou.aliyuncs.com/story/album/0c9bc5f1cut/0c9bc5f1cut_mobile_medium.jpg',
      hotDegree: '1312',
      state: '在线',
      createTime: '2016/12/01',
      lastEditTime: '2017/01/01'
    };
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}

@Component({
  selector: 'dialog-overview',
  templateUrl: '../dialog/dialog-overview.html',
  styleUrls: ['../dialog/dialog-overview.css']
})
export class ActionDialog { 

  selectedValue: '';

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

  addToSelectList() {
    alert("歌曲id" + this.data + '添加到\'' + this.selectedValue + '\'精选集');
  }
}