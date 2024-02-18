import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Job } from '../../model/job';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-managejob',
  templateUrl: './managejob.component.html',
  styleUrl: './managejob.component.css'
})
export class ManagejobComponent implements OnInit{

  constructor(private data:DataService){}

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

  editjobForm:FormGroup =new FormGroup({
    id: new FormControl(''),
    category: new FormControl('',[Validators.required,Validators.minLength(3)]),
    companyName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    jobTitle:new FormControl('',[Validators.required,Validators.minLength(3)]),
    description:new FormControl('',[Validators.required,Validators.minLength(3)]),
    salary:new FormControl('',[Validators.required]),
    applyStart: new FormControl('',[Validators.required]),
    applyEnd:new FormControl('',[Validators.required]),
  })
  
  get Id(){
    return this.editjobForm.get("id")!;
  }
  get Category(){
    return this.editjobForm.get("category")!;
  }
  get CompanyName(){
    return this.editjobForm.get("companyName")!;
  }
  get JobTitle(){
    return this.editjobForm.get("jobTitle")!;
  }
  get Description(){
    return this.editjobForm.get("description")!;
  }
  get Salary(){
    return this.editjobForm.get("salary")!;
  }
  get ApplyStart(){
    return this.editjobForm.get("applyStart")!;
  }
  get ApplyEnd(){
    return this.editjobForm.get("applyEnd")!;
  }



  ngOnInit():void{
    this.getAllJobs();
  }

  
  getAllJobs(){
    this.data.getAllJobs().subscribe(res =>{
      this.jobList=res.map((e:any)=>{
        const data =e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data;
      })
    },err =>{
      alert("Error feching data")
    });
  }

  deleteJob(job:Job){
    if(window.confirm("Sure to delete "+job.companyName+"\'s "+job.jobTitle+" ?")){
      this.data.deleteJob(job);
    }    
  }

  onEdit(job:Job){   
    this.editjobForm.controls["id"].setValue(job.id) 
    this.editjobForm.controls["category"].setValue(job.category)
    this.editjobForm.controls["companyName"].setValue(job.companyName)
    this.editjobForm.controls["jobTitle"].setValue(job.jobTitle)
    this.editjobForm.controls["description"].setValue(job.description)
    this.editjobForm.controls["salary"].setValue(job.salary)
    this.editjobForm.controls["applyStart"].setValue(job.applyStart)
    this.editjobForm.controls["applyEnd"].setValue(job.applyEnd)
  }

  UpdateJob(){
    this.jobObj.id=this.Id.value;
    this.jobObj.category=this.Category.value;
    this.jobObj.companyName=this.CompanyName.value;
    this.jobObj.jobTitle=this.JobTitle.value;
    this.jobObj.salary=this.Salary.value;
    this.jobObj.description=this.Description.value;
    this.jobObj.applyStart=this.ApplyStart.value;
    this.jobObj.applyEnd=this.ApplyEnd.value;
    //alert(this.jobObj.id);
     this.data.updateJob(this.jobObj);
     alert("Update successfully!");
     this.editjobForm.reset();    
  }
  
}
