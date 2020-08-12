import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: {} = {};

  constructor() {
    this.config = environment;
  }

  get(name?: string) {
    if (name) {
      return this.config[name];
    }
    return this.config;
  }
}
