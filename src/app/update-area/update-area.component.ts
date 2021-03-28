import { Component, OnInit } from '@angular/core';
import { Area } from '../area';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from '../area.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-area',
  templateUrl: './update-area.component.html',
  styleUrls: ['./update-area.component.css']
})
export class UpdateAreaComponent implements OnInit {

  id: number;
  area: Area;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private areaService: AreaService) { }

  ngOnInit() {
    this.area = new Area();

    this.id = this.route.snapshot.params['id'];

    this.areaService.getArea(this.id)
      .subscribe(data => {
        console.log(data)
        this.area = data;
      }, error => console.log(error));
  }

  updateArea() {
    this.areaService.updateArea(this.id, this.area)
      .subscribe(data => {
        console.log(data);
        this.area = new Area();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateArea();
  }

  gotoList() {
    this.router.navigate(['/areas']);
  }

}
