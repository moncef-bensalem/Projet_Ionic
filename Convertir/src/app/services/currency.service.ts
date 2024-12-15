import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/490e822ff036923a1559bdc1/latest/';

  constructor(private http: HttpClient) {


  }

  convert(base: string, target: string, amount: number): Observable<number> {
    const url = `${this.apiUrl}${base}`;

    return this.http.get<any>(url).pipe(
      map(response => {
        // Vérifiez que les taux de change sont présents dans la réponse
        if (response && response.rates && response.rates[target] !== undefined) {
          const rate = response.rates[target];
          return amount * rate;
        } else {
          throw new Error(`Taux de conversion non trouvé pour la devise cible: ${target}`);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // Gérez les erreurs et renvoyez une erreur observable
        console.error('Erreur de conversion:', error);
        return throwError('Erreur lors de la conversion de devise');
      })
    );
  }
}
