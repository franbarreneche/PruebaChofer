export interface RoutesForVehicle {
  vehicle: Vehicle;
  routes: Route[];
}

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  patent: string;
  loadSide: string;
  fleet: number;
  capacity: number;
  photo: string;
}

export interface Route {
  id: number;
  name: string;
  startTime: string;
  wasteType: string;
}
