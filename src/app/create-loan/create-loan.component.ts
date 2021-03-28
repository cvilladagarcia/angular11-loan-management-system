import { LoanService } from '../loan.service';
import { Loan } from '../loan';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {

  loan: Loan = new Loan();
  submitted = false;

  constructor(private loanService: LoanService,
    private router: Router) { }

  ngOnInit() {
  }

  newLoan(): void {
    this.submitted = false;
    this.loan = new Loan();
  }

  save() {
    this.loanService
      .createLoan(this.loan).subscribe(data => {
        console.log(data)
        this.loan = new Loan();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/loans']);
  }

}
