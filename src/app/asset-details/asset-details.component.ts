import { Asset } from '../asset';
import { Component, OnInit, Input } from '@angular/core';
import { AssetService } from '../asset.service';
import { AssetListComponent } from '../asset-list/asset-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {

  id: number;
  asset: Asset;

  constructor(private route: ActivatedRoute, private router: Router,
    private assetService: AssetService) { }

  ngOnInit() {
    this.asset = new Asset();

    this.id = this.route.snapshot.params['id'];

    this.assetService.getAsset(this.id)
      .subscribe(data => {
        console.log(data)
        this.asset = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['assets']);
  }
}
