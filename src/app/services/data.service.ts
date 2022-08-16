import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RoutesForVehicle } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data$ = of(data);
}

const data: RoutesForVehicle[] = [
  {
    vehicle: {
      id: 1,
      brand: 'Mercedes Benz',
      model: 'AH22',
      patent: 'ABC123',
      loadSide: 'Derecha',
      fleet: 12,
      capacity: 5.31,
      photo: 'https://aseca.com/wp-content/uploads/2020/06/HalfPack-Freedom.jpg',
    },
    routes: [
      {
        id: 1,
        name: 'Vidrio Martes',
        startTime: '2022-08-16T10:00:00.000Z',
        wasteType: 'Vidrio',
      },
      {
        id: 2,
        name: ' Carton Martes',
        startTime: '2022-08-16T15:00:00.000Z',
        wasteType: 'Carton',
      }
    ]
  },
  {
    vehicle: {
      id: 1,
      brand: 'Mercedes Benz',
      model: 'BC33',
      patent: 'DFG456',
      loadSide: 'Izquierda',
      fleet: 15,
      capacity: 4.20,
      // eslint-disable-next-line max-len
      photo: 'https://suractual.com.ar/download/multimedia.normal.ba24c47dfd2cfaff.63616d696f6e6573207265636f6c6563746f726573202831295f6e6f726d616c2e6a7067.jpg',
    },
    routes: [
      {
        id: 3,
        name: 'Vidrio Martes',
        startTime: '2022-08-16T11:00:00.000Z',
        wasteType: 'Carton',
      },
      {
        id: 4,
        name: ' Carton Martes',
        startTime: '2022-08-16T16:00:00.000Z',
        wasteType: 'Vidrfio',
      }
    ]
  }
];
