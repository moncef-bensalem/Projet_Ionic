import { Component } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.page.html',
  styleUrls: ['./currency-converter.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, IonicModule],
})
export class CurrencyConverterPage {
  baseCurrency = 'USD';
  targetCurrency = 'EUR';
  amount = 1;
  convertedAmount: number | null = null;

  constructor(private currencyService: CurrencyService) {}

  convertCurrency() {
    this.currencyService.convert(this.baseCurrency, this.targetCurrency, this.amount).subscribe(
      (result) => {
        this.convertedAmount = result;
      },
      (error) => {
        console.error('Erreur de conversion:', error);
      }
    );
  }
}
