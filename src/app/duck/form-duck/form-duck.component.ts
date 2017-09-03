import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {DuckService} from "../../shared/services/duck.service";

@Component({
  selector: 'app-form-duck',
  templateUrl: './form-duck.component.html',
  styleUrls: ['./form-duck.component.css']
})
export class FormDuckComponent implements OnInit {

  duckForm: FormGroup;

  constructor(private duckService: DuckService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const defaultImage = 'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/a4/a42d7b4d3d209fc7481de154e4d878625829b28c_full.jpg';
    this.duckForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'type': new FormControl('', Validators.required),
      'imageUrl': new FormControl(defaultImage, Validators.required)
    })
  }

  submit(){
    this.duckService.postDuck(this.duckForm.value);
    this.initForm();
  }

}
