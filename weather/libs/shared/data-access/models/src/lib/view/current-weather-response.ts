import { Coordinate } from '../api/coordinate';
import { Weather } from '../api/weather';
import { Main } from '../api/main';
import { Wind } from '../api/wind';
import { Clouds } from '../api/clouds';
import { Sys } from '../api/sys';

export interface CurrentWeatherResponse {
  coord: Coordinate;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
