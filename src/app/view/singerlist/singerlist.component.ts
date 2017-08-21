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
  selector: 'singerlist',
  templateUrl: './singerlist.component.html',
  styleUrls: ['./singerlist.component.css']
})
export class SingerlistComponent {
  displayedColumns = ['singerId', 'singerName', 'cleanedSingerName', 'singerAlias', 'createTime', 'action'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  singername = '';

  startdate;
  enddate;

  startyear = '';
  startmonth = '';
  startday = '';

  endyear = '';
  endmonth = '';
  endday = '';

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(
    private router: Router) {}

	ngOnInit() {
	  this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
	}

  dateInit() {
    this.startyear = (new Date(Date.parse(this.startdate)).getFullYear()).toString();
    this.startmonth = (new Date(Date.parse(this.startdate)).getMonth()).toString();
    this.startday = (new Date(Date.parse(this.startdate)).getDate()).toString();

    this.endyear = (new Date(Date.parse(this.enddate)).getFullYear()).toString();
    this.endmonth = (new Date(Date.parse(this.enddate)).getMonth()).toString();
    this.endday = (new Date(Date.parse(this.enddate)).getDate()).toString();

    if(this.startdate == '' || this.enddate == '' || (this.startdate == '' && this.enddate == '')) {
      alert('请选择日期')
      return
    } 
    else if(this.startdate == null || this.enddate == null || (this.startdate == null && this.enddate == null)) {
      alert('请选择日期')
      return
    } else {
      alert('起始日期：' + this.startyear +'/'+this.startmonth+'/'+this.startday + ' | 结束日期：' + this.endyear+'/'+this.endmonth+'/'+this.endday)
    }
  }
  searchbysong() {
    alert('歌手名字：' + this.singername)
  }
  searchbydate() {
    this.dateInit()
  }
  selectAll(obj) {
    console.log(obj)
  }
  
  gotoDetail(singerId): void {
    this.router.navigate(['/singerdetail', singerId]);
  }
}

export interface UserData {
  checkBox: Boolean;
  singerId: string;
  singerName: string;
  cleanedSingerName: string;
  singerAlias:any;
  createTime: string;
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
      checkBox: false,
      singerId: '666',
      singerName: '周杰伦jay',
      cleanedSingerName: '周伦论',
      singerAlias: ['jay', 'Jay', '周董', 'jayzhou'],
      createTime: '2016/12/01',
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
