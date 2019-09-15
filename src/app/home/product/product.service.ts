import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, mapTo, tap} from 'rxjs/operators';
import {PACK_TYPE, Product} from './product.interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) {}

  search(code: string): Observable<Product|boolean> {
    return of({
      barcode: code,
      name: 'Coca cola Zero',
      photo_url: 'https://image.ceneostatic.pl/data/products/15170177/i-coca-cola-zero-330ml.jpg',
      packing: PACK_TYPE.GLASS
    });

    /*return this.http.post<Product>(`${environment.servers.server}/api/login`, code).pipe(
      tap((product: Product) => {
        return of(product);
      }),
      mapTo(true),
      catchError(error => {
        return of(false);
      })
    );*/
  }

  all(): Observable<Product[]> {
    // return this.http.get<Product[]>(api.products.all);
    return of([
      {
        barcode: '12312312312',
        name: 'Coca cola Zero',
        photo_url: 'https://image.ceneostatic.pl/data/products/15170177/i-coca-cola-zero-330ml.jpg',
        packing: PACK_TYPE.ME_TERAPACK
      },
      {
        barcode: '8745972349234',
        name: 'Sprite 33ml',
        photo_url: 'https://officedepot.scene7.com/is/image/officedepot/208255_p?$OD%2DLarge$&wid=450&hei=450',
        packing: PACK_TYPE.ME_TERAPACK
      },
    ]);
  }
}

