import { Area } from '../area';
import { Component, OnInit, Input } from '@angular/core';
import { AreaService } from '../area.service';
import { AreaListComponent } from '../area-list/area-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {

  id: number;
  area: Area;

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

  list() {
    this.router.navigate(['areas']);
  }
}
