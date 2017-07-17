import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {DuckHttpService} from "../duck-http.service";

@Component({
  selector: 'app-add-duck',
  templateUrl: './add-duck.component.html',
  styleUrls: ['./add-duck.component.css']
})
export class AddDuckComponent implements OnInit {

  duckForm: FormGroup;

  constructor(private httpDuck: DuckHttpService) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.httpDuck.addDuck(this.duckForm.value);
  }

  initForm() {
    this.duckForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'type': new FormControl('', Validators.required),
      'imageUrl': new FormControl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9ouakKFPM_33GX5Uv_juwVh61-kjqDgR8VtirosLjlM533jaFg', Validators.required)
    })
  }


}
