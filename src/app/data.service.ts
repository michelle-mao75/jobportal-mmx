import { Injectable } from '@angular/core';
import { AngularFirestore } from'@angular/Fire/compat/firestore';
import { Job } from './model/job';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }

  addJob(job : Job){
    job.id = this.afs.createId();
    return this.afs.collection('/Job').add(job);    
  }

  getAllJobs(){
    return this.afs.collection('/Job').snapshotChanges();
  }

  getJobByCategory(category:string){
    return this.afs.collection('/Job',ref=>ref.where('category','==',category)).snapshotChanges();
  }

  deleteJob(job:Job){
    return this.afs.doc('/Job/'+job.id).delete();
  }

  updateJob(job:Job){
    return this.afs.doc('/Job/'+job.id).update({
      category:job.category,
      companyName:job.companyName,
      jobTitle:job.jobTitle,
      salary:job.salary,
      description:job.description,
      applyStart:job.applyStart,
      applyEnd:job.applyEnd})
  }
}
