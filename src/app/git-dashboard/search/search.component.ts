import { Component, OnInit } from '@angular/core';
import { GitApiService } from '../git-api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string;

  constructor(private gitService:GitApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.gitService.getData(this.searchValue)
    .subscribe((data: any) => console.log(data) )
  }

}
