import { AssetDetailsComponent } from '../asset-details/asset-details.component';
import { Observable } from "rxjs";
import { AssetService } from "../asset.service";
import { Asset } from "../asset";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-asset-list",
  templateUrl: "./asset-list.component.html",
  styleUrls: ["./asset-list.component.css"]
})
export class AssetListComponent implements OnInit {
  assets: Observable<Asset[]>;

  constructor(private assetService: AssetService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.assets = this.assetService.getAssetsList();
  }

  deleteAsset(id: number) {
    this.assetService.deleteAsset(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  assetDetails(id: number) {
    this.router.navigate(['detailsAsset/', id]);
  }

  updateAsset(id: number) {
    this.router.navigate(['updateAsset/', id]);
  }
}
