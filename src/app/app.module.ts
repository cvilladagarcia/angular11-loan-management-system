import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { CreateAreaComponent } from './create-area/create-area.component';
import { AreaDetailsComponent } from './area-details/area-details.component';
import { AreaListComponent } from './area-list/area-list.component';
import { UpdateAreaComponent } from './update-area/update-area.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    PersonDetailsComponent,
    PersonListComponent,
    UpdatePersonComponent,
    CreateAreaComponent,
    AreaDetailsComponent,
    AreaListComponent,
    UpdateAreaComponent,
    CreateAssetComponent,
    AssetDetailsComponent,
    AssetListComponent,
    UpdateAssetComponent,
    CreateLoanComponent,
    LoanDetailsComponent,
    LoanListComponent,
    UpdateLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
