import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  currentIndex!: number;
  currentMovie!: Movie;
  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.currentIndex = this.route.snapshot.params['index'];

    this.currentMovie = await this.dataService.getMovieByIndex(this.currentIndex);

    this.formGroup = this.formBuilder.group(
      {
        id: [this.currentMovie.id],
        caption: [this.currentMovie.caption, [Validators.required]],
        description: [this.currentMovie.description, [Validators.required, this.validateWords]],
        poster: [this.currentMovie.poster, [Validators.required, this.validateLink]]
      }
    )

  }

  private validateWords(control: FormControl): ValidationErrors | null {
    let wordsCount = (control.value as string).split(" ").length;
    if (wordsCount >= 10) {
      return null;
    };
    return {
      'validateWordsError': {
        currentWords: wordsCount
      }
    }
  }

  private validateLink(control : FormControl): ValidationErrors | null{
    let controlValue : string = (control.value as string);
    if(controlValue.startsWith("https://") || controlValue.startsWith("http://")){
      return null;
    }
    return {
      "validateLinkError": {
        currentString: controlValue
      }
    }
  }

  saveData() {
    // console.log(this.formGroup.value);
    this.dataService.setMovieByID(this.formGroup.value);
  }

}
