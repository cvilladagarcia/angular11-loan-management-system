import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {

  id: number;
  loan: Loan;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private loanService: LoanService) { }

  ngOnInit() {
    this.loan = new Loan();

    this.id = this.route.snapshot.params['id'];

    this.loanService.getLoan(this.id)
      .subscribe(data => {
        console.log(data)
        this.loan = data;
      }, error => console.log(error));
  }

  updateLoan() {
    this.loanService.updateLoan(this.id, this.loan)
      .subscribe(data => {
        console.log(data);
        this.loan = new Loan();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateLoan();
  }

  gotoList() {
    this.router.navigate(['/loans']);
  }

}
