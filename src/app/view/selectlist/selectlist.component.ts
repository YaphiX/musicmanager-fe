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
  selector: 'selectlist',
  templateUrl: './selectlist.component.html',
  styleUrls: ['./selectlist.component.css']
})
export class SelectlistComponent {
	items = [
		{value: 'hot', viewValue: '热门'},
		{value: 'young', viewValue: '青春'},
		{value: 'pop', viewValue: '流行'}
	];
  selectedValue = '';
  songName = '';
	displayedColumns = ['songId', 'songName', 'singerId','singerName', 'mp3Url', 'rank', 'createTime', 'action'];
  exampleDatabase = new ExampleDatabase();
	dataSource: ExampleDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;

	constructor(
	    public dialog: MdDialog,
	    private router: Router) {}
	
	ngOnInit() {
		this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
	}

	openDialog(singerId) {
      if(singerId[0] == 'delete') {
        this.dialog.open(ActionDialog,{
          height: '160px',
          width: '400px',
          data: singerId
        })
      }
      else {
        this.dialog.open(ActionDialog,{
          height: '300px',
          width: '400px',
          data: singerId
        })
      }  
	}
  searchBySelectlist() {
    alert('榜单名：' + this.selectedValue + ',歌曲名：' + this.songName)
  }
}
export interface UserData {
	songId:string
	songName:string
	singerId:string
	singerName:string
	mp3Url:string
	rank:string
	createTime:string
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
      songId: '22222',
      songName: '回到过去',
      singerId: '666',
      singerName: '周杰伦',
      mp3Url: 'http://www.baidu.com',
      rank: '10',
      state: '在线',
      createTime: '2016/12/01'
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
  templateUrl: './dialog/dialog-overview.html',
  styleUrls: ['./dialog/dialog-overview.css']
})
export class ActionDialog { 

  selectedValue: '';

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

  addToSelectList() {
    alert("歌曲id" + this.data + '添加到\'' + this.selectedValue + '\'精选集');
  }
  deleteSelectList() {
    alert('从当前表单删除的歌曲是：' + this.data[1])
  }

}