import { Component, OnInit } from '@angular/core';
import { Thief } from 'src/app/interfaces/thief';
import { Address } from 'src/app/interfaces/address';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyThievesService } from 'src/app/services/dummy-thieves.service';
import { Gender } from 'src/app/interfaces/gender';
import { NgForm } from '@angular/forms';
import { ThievesService } from 'src/app/services/thieves.service';
import { DataInjectorService } from 'src/app/services/data-injector.service';

@Component({
  selector: 'app-thief-details',
  templateUrl: './thief-details.component.html',
  styleUrls: ['./thief-details.component.css']
})
export class ThiefDetailsComponent implements OnInit {
  selectedThief: Thief;
  id: string = undefined;
  addresses: Address[];
  thieves: Thief[];
  displayForms: boolean = false;
  genders: Gender[] = [Gender.male, Gender.female];
  convictionStatus: boolean[] = [true, false];
  validity: boolean = undefined;
  error: any = null;

  constructor(
    private route: ActivatedRoute,
    private dummyData: DummyThievesService,
    private theivesService: ThievesService,
    private dataInjector: DataInjectorService
    ) { }

  ngOnInit() {
    //Get the list of thieves
    // this.thieves = this.dummyData.getData();
    this.thievesSubscriber();
    this.dataInjector.getThievesFromThieves();
    this.thieves = this.dataInjector.injectThieves();
    this.displayForms = false;
    //Get id from the url
    this.id = this.route.snapshot.params['id'];
    
    //If id is not retrieveable using snapshot trying subscription
    if(this.id === undefined || this.id === null){
      this.route.params.subscribe((params: Router) => {
        this.id = params['id'];
      });
    } 
    console.log(this.id);
    console.log(this.thieves);
    //Get the thief from the list using the id
    // this.selectedThief = this.thieves.find((thief: Thief) => {
    //   if(thief.id === this.id){
    //     return thief;
    //   }
    // });
    // console.log(this.selectedThief);
  }

  onEdit(){
    this.displayForms = !this.displayForms;
  }

  onSubmit(form: NgForm){
    const values = form.form.value;
    console.log(values);
    //update values by iterating on the form value object
    for(let key in values){
      if(values[key] !== ''){
        // this.dummyData.updateData(key, values[key]);
      }
    }
  }

  onRefresh(){
    console.log(this.thieves);
    //Get the thief from the list using the id
    this.selectedThief = this.thieves.find((thief: Thief) => {
      if(thief.id === this.id){
        return thief;
      }
    });
    console.log(this.selectedThief);
  }

  thievesSubscriber(){
    this.theivesService.fetchThievesFromApi().subscribe(responseData => {
      this.thieves = responseData;
    }, error => {
      this.error = error.message;
    });
  }

}
