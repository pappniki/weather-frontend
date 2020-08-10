import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  catForm: FormGroup;
  kinds = ['cirmos', 'perzsa', 'sziámi', 'NO KIND'];

  catFormModel = {        // model to save new Cat
    name: "",
    age: 0,
    sex: '',
    kind: [],
    genres: []
  };

  genreType = [
    {type: 'G', displayName: 'G - genre'},
    {type: 'R', displayName: 'R - Restricted'},
    {type: 'C', displayName: 'C - Child only'},
    {type: 'P', displayName: 'P - Parents only'}
  ];

  editingCat = {
    name: "New Name",
    age: 2000,
    sex: 'Egyéb',
    kind: ['cirmos', 'perzsa'],
    genres: [
      {type: 'R', displayName: 'R - Restricted'},
      {type: 'C', displayName: 'C - Child only'}
    ]
  };


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.catForm = new FormGroup({
      'name': new FormControl(''),
      'age': new FormControl(null),
      'sex': new FormControl('', [Validators.email]),
      'kind': new FormControl(''),
      'genres': new FormArray([])
    });
    this.renderBoxList();
  }

  renderBoxList() {
    this.genreType.forEach(genre => {
      (this.catForm.controls.genres as FormArray).push(new FormControl(false))
    })

  }

  submit() {
    console.log(this.catForm.value.genres);
    this.catFormModel = {...this.catForm.value};
    this.catFormModel.genres = this.makeGenreListToSend();
    console.log(this.catFormModel);
  }

  makeGenreListToSend() {
    let genres = [];
    this.catForm.value.genres.forEach(
      (box, index) => {
        if (box) {
          genres.push(this.genreType[index])
        }
      }
    );
    return genres;
  }


  patchValue = () => {
    const newCatDate = this.editingCat;
    this.catForm.patchValue({
      name: newCatDate.name,
      age: newCatDate.age,
      sex: newCatDate.sex,
      kind: newCatDate.kind,
      genres: this.patchGenreValue(newCatDate.genres)
    })

  };

  patchGenreValue = (genresList: Array<any>) => {
    const boxList = [];
    this.genreType.map(gen => gen.type)
      .forEach(genType => {
        let value = false;
        genresList.forEach(gen => {
          if (gen.type === genType) {
            value = true;
          }
        })
        boxList.push(value)
      });
    return boxList;

  }

}



