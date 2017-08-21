import {Component, ViewChild, Inject} from '@angular/core';
import { Router } from '@angular/router';
import {DataSource} from '@angular/cdk/table';
import {MdPaginator} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
	selector: 'similar-singer',
	templateUrl: './similarsinger.component.html',
	styleUrls: ['./similarsinger.component.css']
})

export class SimilarSingerComponent {
  displayedColumns = ['singerId', 'singerName'];
 	exampleDatabase = new ExampleDatabase();
	dataSource: ExampleDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
  constructor(
    private router: Router) {}

	ngOnInit() {
	  this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
	}
  gotoDetail(singerId): void {
    this.router.navigate(['/singerdetail', singerId]);
  }
}
export interface UserData {
  singerId: string
  singerName: string;
}

export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 10; i++) { this.addUser(); }
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
      singerId: '666',
      singerName: '周杰伦',
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