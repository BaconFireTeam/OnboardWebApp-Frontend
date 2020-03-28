import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../shared/_service/profile.service';
import { Employee } from '../shared/domain/Employee';

@Component({
  selector: 'app-hr-emp',
  templateUrl: './hr-emp.component.html',
  styleUrls: ['./hr-emp.component.css']
})
export class HrEmpComponent implements OnInit {
  parentPath: string;
  currentPath: string;
  length: number;
  max: number;
  fullList: Array<Employee>;
  employeeList: Array<Employee>;
  search: string = '';
  empty: string;

  constructor(private profileService: ProfileService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.url.subscribe(url => this.parentPath = url[0].path);
    this.route.url.subscribe(url => this.currentPath = url[0].path);

    this.profileService.getEmployees().subscribe(
      (res)=>{
        this.employeeList = res.employeeList;
        this.fullList = res.employeeList
        this.length = res.length;
        this.max = res.length;
        console.log(this.employeeList);
      });
  }

  searchEmp(search: string) {
    this.profileService.searchEmployees(search).subscribe(
      (res)=>{
        this.employeeList = res.employeeList;
        this.length = res.length;
        if(this.length === 0){
          this.empty = "No results to display";
        } else {
          this.empty = "";
        }
      });
  }

  reset() {
    this.employeeList = this.fullList;
    this.length = this.max;
    this.empty = "";
  }
}
