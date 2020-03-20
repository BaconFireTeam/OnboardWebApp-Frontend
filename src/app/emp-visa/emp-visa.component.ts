import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-visa',
  templateUrl: './emp-visa.component.html',
  styleUrls: ['./emp-visa.component.css']
})
export class EmpVisaComponent implements OnInit {
  optead: File = null;
  i983: File = null;
  i20: File = null;
  stemrec: File = null;
  stemead: File = null;
  onOpt: boolean = true;
  on983: boolean = false;
  on20: boolean = false;
  onStemRec: boolean = false;
  onStemEad: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.stemead !== null){
      this.onStemEad = !this.onStemEad;
    }
    else if(this.stemrec !== null){
      this.onStemRec = !this.onStemRec;
      this.onStemEad = !this.onStemEad;
    }
    else if(this.i20 !== null){
      this.on20 = !this.on20;
      this.onStemRec = !this.onStemRec;
    }
    else if(this.i983 !== null){
      this.on983 = !this.on983;
      this.on20 = !this.on20;
    }
    else if(this.optead !== null){
      this.onOpt = !this.onOpt;
      this.on983 = !this.on983;
    }

  }

}
