import { Component, inject, input, OnInit } from '@angular/core';
import { Campaigns } from '../../../core/services/campaigns/campaigns';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './donation-form.html',
  styleUrl: './donation-form.scss',
})
export class DonationForm implements OnInit {
  constructor(private readonly campaigns: Campaigns) {}

  id = input.required<string>();

  form!: FormGroup;
  fb = inject(FormBuilder);

  createForm() {
    this.form = this.fb.group({
      amount: [null, [Validators.required, Validators.min(1)]],
      donor: [''],
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  submit() {
    this.campaigns.createDonation(this.id(), this.form.value).subscribe((data) => {
      this.form.reset();
    });
  }
}
