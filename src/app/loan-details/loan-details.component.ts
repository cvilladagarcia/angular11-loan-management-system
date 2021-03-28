import { Loan } from '../loan';
import { Component, OnInit, Input } from '@angular/core';
import { LoanService } from '../loan.service';
import { LoanListComponent } from '../loan-list/loan-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  id: number;
  loan: Loan;

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

  list() {
    this.router.navigate(['loans']);
  }
}
