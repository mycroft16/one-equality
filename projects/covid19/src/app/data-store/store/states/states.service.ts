import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { StatesNormalizerService } from './states-normalizer.service';
import { Observable } from 'rxjs';
import { IStateCurrent, IStateHistoric, IStateInfo } from '../../interfaces/states.interface';
import { map } from 'rxjs/operators';


@Injectable()
export class StatesService {
    constructor(private apiService: ApiService, private normalizer: StatesNormalizerService) { }


    public fetchStatesCurrent(): Observable<IStateCurrent[]> {
        return this.apiService.get<IStateCurrent[]>('states/current').pipe(
            map((response: IStateCurrent[]) => this.normalizer.normalizeCurrent(response))
        );
    }


    public fetchStateHistoric(state: string, date: number): Observable<IStateHistoric[]> {
        return this.apiService.get<IStateHistoric[]>('states/daily').pipe(
            map((response: IStateHistoric[]) => this.normalizer.filterStateHistoric(response, state, date))
        );
    }


    public fetchStateInfo(state: string): Observable<IStateInfo> {
        return this.apiService.get<IStateInfo[]>('states/info').pipe(
            map((response: IStateInfo[]) => this.normalizer.filterStateInfo(response, state))
        );
    }
}
