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
  selector: 'guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
	displayedColumns = ['location', 'guideSentence', 'action'];
  exampleDatabase = new ExampleDatabase();
	dataSource: ExampleDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;

	constructor(
	    public dialog: MdDialog,
	    private router: Router) {}
	
	ngOnInit() {
		this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
	}

	openDialog(guideId) {
	    this.dialog.open(ActionDialog,{
	        height: '300px',
	        width: '400px',
	        data: guideId
    	})
	}
}
export interface UserData {
	guideId:string,
	location:string,
	guideSentence:string
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
      guideId: '123456',
	    location: '音乐入口处',
	    guideSentence: '若琪，播放周杰伦的歌'
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

  textValue: '';

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

  saveGuide() {
    alert('语句id：' + this.data + '，修改的内容：' + this.textValue)
  }
}
