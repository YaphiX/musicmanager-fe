import {Component, ViewChild, Inject, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/table';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'playcount',
  templateUrl: './playcount.component.html',
  styleUrls: ['./playcount.component.css']
})
export class PlaycountComponent {
    displayedColumns = ['songId', 'songName', 'singerId', 'singerName', 'playCount', 'state'];
	exampleDatabase = new ExampleDatabase();
	dataSource: ExampleDataSource | null;
	songname = '';
	singername = '';

	@ViewChild(MdPaginator) paginator: MdPaginator;

	constructor(
		private router: Router) {}

	ngOnInit() {
		this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
	}


	searchbysong() {
		alert('歌曲名称：' + this.songname+' | 歌手名字：' + this.singername)
	}
	gotoDetail(songId): void {
		this.router.navigate(['/playcount', songId]);
	}
}

export interface UserData {
  songId: string;
  songName: string;
  singerId: string;
  singerName: string;
  playCount: string;
  state: string;
}

/** An example database that the data source uses to retrieve data for the table. */
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
      // checkBox: false,
      // id: (this.data.length + 1).toString(),
      // name: name,
      // progress: Math.round(Math.random() * 100).toString(),
      // color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
      songId: '111',
      songName: '回到过去-111111',
      singerId: '666',
      singerName: '周杰伦jay',
      playCount: '12341',
      state: '在线',
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
