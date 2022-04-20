import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor(private router:Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  clickButtonCreate(){
    this.router.navigate(["new"], {relativeTo: this.activedRoute});
  }

}
