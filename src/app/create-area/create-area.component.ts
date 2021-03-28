import { AreaService } from '../area.service';
import { Area } from '../area';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css']
})
export class CreateAreaComponent implements OnInit {

  area: Area = new Area();
  submitted = false;

  constructor(private areaService: AreaService,
    private router: Router) { }

  ngOnInit() {
  }

  newArea(): void {
    this.submitted = false;
    this.area = new Area();
  }

  save() {
    this.areaService
      .createArea(this.area).subscribe(data => {
        console.log(data)
        this.area = new Area();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/areas']);
  }

}
