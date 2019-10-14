import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Thief } from '../interfaces/thief';
import { DummyThievesService } from '../services/dummy-thieves.service';
import { v4 as uuid } from 'uuid';
import { Gender } from '../interfaces/gender';

@Component({
  selector: 'app-add-thief',
  templateUrl: './add-thief.component.html',
  styleUrls: ['./add-thief.component.css']
})
export class AddThiefComponent implements OnInit {
  @ViewChild('f', {static: false}) addThiefForm: NgForm;
  genders: Gender[] = [Gender.male, Gender.female];
  convictionStatus: boolean[] = [true, false];
  thief: Thief = {
    name: '',
    id: uuid(),
    // id: '1234',
    dob: new Date(),
    gender: undefined,
    addresses: [
      {
        house: '',
        street: '',
        city: '',
        landmark: '',
        state: '',
        pocode: -1,
        country: ''
      }
    ],
    stateOfConviction: false
  }
  
  constructor(
    private dummyData: DummyThievesService,
    ) { }
    
    ngOnInit(
    ) {
    }
    
    onSubmit(){
    let thief: Thief;
    console.log(this.addThiefForm);
    const form = this.addThiefForm.form.value;
    const addr = this.thief.addresses[0];
    this.thief.name =  form.name;
    addr.house = form.addressData.house;
    addr.street = form.addressData.street;
    addr.city = form.addressData.city;
    addr.landmark = form.addressData.landmark;
    addr.state = form.addressData.state;
    addr.pocode = form.addressData.pocode;
    addr.country = form.addressData.country;
    this.thief.dob = form.dob;
    this.thief.gender = form.gender;
    this.thief.stateOfConviction = form.conviction;
    console.log(this.thief);
    this.dummyData.addData(this.thief);
  }
}
