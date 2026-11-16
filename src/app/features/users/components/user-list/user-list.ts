import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';
import { UserService } from '../../../../core/services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { catchError, delay, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: false,
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList implements OnInit {

  isLoading: boolean = false
  errorMessage: string = ''

  data: User[] = [];
  displayedColumns:string[] = ['id','name','username','email','address','phone','website','company'];
  dataSource = new MatTableDataSource<User>([])


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private api: UserService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.userLoad()
  }

  userLoad(){
    //Asyncronous 
    this.isLoading = true
    this.errorMessage = ''
    this.api.getData().pipe(delay(3000),
    catchError((err)=>{
      console.log("fetching data is not getting");
      this.isLoading = false;
      this.errorMessage = 'Failed to load users. Please try again.';
     return throwError(()=>{
        console.log('error',this.errorMessage)
      })
    })
    ).subscribe({
      next: (response) => {
        console.log('status',response.status)
        console.log('headers',response.headers.get("content-type"));

        const users = response.body ?? []
        
        this.data = users
        // Update the dataSource
        this.dataSource.data = users
        this.cdr.markForCheck()
      },
      error: (err) => {
        console.log(err)
        this.isLoading = false
        this.errorMessage = 'Failed to load users. Please try again.'
        this.cdr.markForCheck()
      },
      complete: () => {
        this.isLoading = false
      }
    })
  }
}
