import { Injectable } from '@angular/core';
import { environmentDev } from '../../../../environments/environment-dev';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: {} = {};

  constructor() {
    this.config = environmentDev;
  }

  get(name?: string) {
    if (name) {
      return this.config[name];
    }
    return this.config;
  }
}
