import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Job } from '../model/job';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent implements OnInit{
  
  constructor(private auth:AuthService, private data:DataService){}; 

  queryUserForm:FormGroup = new FormGroup({
    category: new FormControl()
  })

  get Category(){
    return this.queryUserForm.get("category")!
  }

  jobList:Job[]=[];

  ngOnInit():void{
    this.getAllJobs();
  }

  logout(){
    this.auth.logout();
  }
 
  print(){
    if (this.Category.value=="all") {
      this.getAllJobs();
    }
    else {
      this.getJobByCategory(this.Category.value)
    }
  }

  getAllJobs(){
    this.data.getAllJobs().subscribe(res =>{
      this.jobList=res.map((e:any)=>{
        const data =e.payload.doc.data();
        return data;
      })
    },err =>{
      alert("Error feching data")
    });
  }

  getJobByCategory(category:string){
    this.data.getJobByCategory(category).subscribe(res =>{
      this.jobList=res.map((e:any)=>{
        const data =e.payload.doc.data();
        return data;
      })
    },err =>{
      alert("Error feching data")
    });
  }
}
