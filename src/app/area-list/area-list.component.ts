import { AreaDetailsComponent } from '../area-details/area-details.component';
import { Observable } from "rxjs";
import { AreaService } from "../area.service";
import { Area } from "../area";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-area-list",
  templateUrl: "./area-list.component.html",
  styleUrls: ["./area-list.component.css"]
})
export class AreaListComponent implements OnInit {
  areas: Observable<Area[]>;

  constructor(private areaService: AreaService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.areas = this.areaService.getAreasList();
  }

  deleteArea(id: number) {
    this.areaService.deleteArea(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  areaDetails(id: number) {
    this.router.navigate(['detailsArea/', id]);
  }

  updateArea(id: number) {
    this.router.navigate(['updateArea/', id]);
  }
}
