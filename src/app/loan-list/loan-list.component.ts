import { LoanDetailsComponent } from '../loan-details/loan-details.component';
import { Observable } from "rxjs";
import { LoanService } from "../loan.service";
import { Loan } from "../loan";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-loan-list",
  templateUrl: "./loan-list.component.html",
  styleUrls: ["./loan-list.component.css"]
})
export class LoanListComponent implements OnInit {
  loans: Observable<Loan[]>;

  constructor(private loanService: LoanService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.loans = this.loanService.getLoansList();
  }

  deleteLoan(id: number) {
    this.loanService.deleteLoan(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  loanDetails(id: number) {
    this.router.navigate(['detailsLoan/', id]);
  }

  updateLoan(id: number) {
    this.router.navigate(['updateLoan/', id]);
  }
}
