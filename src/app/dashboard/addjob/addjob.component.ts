import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job';
import { DataService } from '../../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrl: './addjob.component.css'
})
export class AddjobComponent  implements OnInit{

  constructor(private data:DataService){}

  addjobForm:FormGroup =new FormGroup({
    category: new FormControl('',[Validators.required,Validators.minLength(3)]),
    companyName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    jobTitle:new FormControl('',[Validators.required,Validators.minLength(3)]),
    description:new FormControl('',[Validators.required,Validators.minLength(3)]),
    salary:new FormControl('',[Validators.required]),
    applyStart: new FormControl('',[Validators.required]),
    applyEnd:new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {

    }
  

  id:string='';
  category: string='';
  companyName:string='';
  jobTitle:string='';
  description:string='';
  salary:string='';
  applyStart: number|null=null;
  applyEnd:number|null=null;

  jobList:Job[]=[];

  jobObj:Job={
    id:'',
    category: '',
    companyName: '',
    jobTitle: '',
    description: '',
    salary: '',
    applyStart: null,
    applyEnd: null
  };
  
  get Category(){
    return this.addjobForm.get("category")!;
  }
  get CompanyName(){
    return this.addjobForm.get("companyName")!;
  }
  get JobTitle(){
    return this.addjobForm.get("jobTitle")!;
  }
  get Description(){
    return this.addjobForm.get("description")!;
  }
  get Salary(){
    return this.addjobForm.get("salary")!;
  }
  get ApplyStart(){
    return this.addjobForm.get("applyStart")!;
  }
  get ApplyEnd(){
    return this.addjobForm.get("applyEnd")!;
  }


  addJob(){
    if(this.Category.value=='' || this.CompanyName.value=='' || this.JobTitle.value=='' || this.Salary.value=='' || this.Description.value==''|| this.ApplyStart.value == null || this.ApplyEnd.value == null){
      alert("Please fill all the fields");
      return
    }
    this.jobObj.id='';
    this.jobObj.category=this.Category.value;
    this.jobObj.companyName=this.CompanyName.value;
    this.jobObj.jobTitle=this.JobTitle.value;
    this.jobObj.salary=this.Salary.value;
    this.jobObj.description=this.Description.value;
    this.jobObj.applyStart=this.ApplyStart.value;
    this.jobObj.applyEnd=this.ApplyEnd.value;

    this.data.addJob(this.jobObj);
    alert("Add successfully!");
    this.addjobForm.reset();

  }

  

}
