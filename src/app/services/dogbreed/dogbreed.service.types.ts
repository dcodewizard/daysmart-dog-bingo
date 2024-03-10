export interface ListAllBreedsResponse {
  message: { [breed: string]: string[] };
  status: string;
}
