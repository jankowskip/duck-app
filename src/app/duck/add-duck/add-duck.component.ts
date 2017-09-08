import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { Duck } from 'app/shared/models/duck.model';

@Component({
  selector: 'app-add-duck',
  templateUrl: './add-duck.component.html',
  styleUrls: ['./add-duck.component.css']
})
export class AddDuckComponent implements OnInit {

  @Output() duckAdded: EventEmitter<Duck> = new EventEmitter();
  duckForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.duckAdded.emit(this.duckForm.value);
  }

  initForm() {
    this.duckForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.max(10)]),
      'type': new FormControl('', Validators.required),
      'imageUrl': new FormControl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9ouakKFPM_33GX5Uv_juwVh61-kjqDgR8VtirosLjlM533jaFg', Validators.required)
    })
  }


}
