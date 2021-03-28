import { AssetService } from '../asset.service';
import { Asset } from '../asset';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {

  asset: Asset = new Asset();
  submitted = false;

  constructor(private assetService: AssetService,
    private router: Router) { }

  ngOnInit() {
  }

  newPerson(): void {
    this.submitted = false;
    this.asset = new Asset();
  }

  save() {
    this.assetService
      .createAsset(this.asset).subscribe(data => {
        console.log(data)
        this.asset = new Asset();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/assets']);
  }

}
