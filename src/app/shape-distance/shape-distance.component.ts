import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DistanceService } from './distance.service'; 

@Injectable({
  providedIn: 'root' // This makes the service injectable globally
})
export class DistanceService {
  calculateCylinderDistance(cylinder1: any, cylinder2: any): Observable<number> {
    const distance = this.calculateDistanceBetweenPoints(cylinder1, cylinder2);
    return of(distance); // Return an Observable with the calculated distance
  }

  private calculateDistanceBetweenPoints(cyl1: any, cyl2: any): number {
    const dx = cyl2.x - cyl1.x;
    const dy = cyl2.y - cyl1.y;
    const dz = cyl2.z - cyl1.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
}
