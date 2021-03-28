import { PersonDetailsComponent } from './person-details/person-details.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { AreaDetailsComponent } from './area-details/area-details.component';
import { CreateAreaComponent } from './create-area/create-area.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { AreaListComponent } from './area-list/area-list.component';
import { UpdateAreaComponent } from './update-area/update-area.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';

const routes: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'persons', component: PersonListComponent },
  { path: 'addPerson', component: CreatePersonComponent },
  { path: 'updatePerson/:id', component: UpdatePersonComponent },
  { path: 'detailsPerson/:id', component: PersonDetailsComponent },
  { path: '', redirectTo: 'area', pathMatch: 'full' },
  { path: 'areas', component: AreaListComponent },
  { path: 'addArea', component: CreateAreaComponent },
  { path: 'updateArea/:id', component: UpdateAreaComponent },
  { path: 'detailsArea/:id', component: AreaDetailsComponent },
  { path: '', redirectTo: 'asset', pathMatch: 'full' },
  { path: 'assets', component: AssetListComponent },
  { path: 'addAsset', component: CreateAssetComponent },
  { path: 'updateAsset/:id', component: UpdateAssetComponent },
  { path: 'detailsAsset/:id', component: AssetDetailsComponent },
  { path: '', redirectTo: 'laon', pathMatch: 'full' },
  { path: 'loans', component: LoanListComponent },
  { path: 'addLoan', component: CreateLoanComponent },
  { path: 'updateLoan/:id', component: UpdateLoanComponent },
  { path: 'detailsLoan/:id', component: LoanDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
