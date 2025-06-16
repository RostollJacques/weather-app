import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchFacade } from '@weather/search-state';

@Component({
  selector: 'lib-search',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchBarComponent {
  private fb = inject(FormBuilder);
  private searchFacade = inject(SearchFacade);

  form: FormGroup = this.fb.group({
    searchString: [''],
  });
  focus = false;

  searchStringSubmit() {
    const searchString = this.form.value.searchString?.trim();
    if (searchString) {
      this.searchFacade.searchCityName(searchString);
      this.clear();
      console.log('searchStringSubmit', searchString);
    } else {
      console.log('raise error');
    }
  }

  clear() {
    this.form.get('searchString')?.setValue('');
  }

  setFocus() {
    this.focus = !this.focus;
  }
}
