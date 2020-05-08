import { Injectable } from '@angular/core';
import { IStateCurrent, IStateHistoric, IStateInfo } from '../../interfaces/states.interface';

@Injectable()
export class StatesNormalizerService {

    public normalizeCurrent(statesCurrent: IStateCurrent[]): IStateCurrent[] {
        return statesCurrent.map(state => {
            return {
                ...state,
                death: this.isNull(state.death),
                hospitalized: this.isNull(state.hospitalized),
                hospitalizedCumulative: this.isNull(state.hospitalizedCumulative),
                hospitalizedCurrently: this.isNull(state.hospitalizedCurrently),
                inIcuCumulative: this.isNull(state.inIcuCumulative),
                inIcuCurrently: this.isNull(state.inIcuCurrently),
                negative: this.isNull(state.negative),
                onVentilatorCumulative: this.isNull(state.onVentilatorCumulative),
                onVentilatorCurrently: this.isNull(state.onVentilatorCurrently),
                pending: this.isNull(state.pending),
                positive: this.isNull(state.positive),
                posNeg: this.isNull(state.posNeg),
                recovered: this.isNull(state.recovered),
                totalTestResults: this.isNull(state.totalTestResults),
            };
        });
    }


    public filterStateHistoric(response: IStateHistoric[], state: string, date: number): IStateHistoric[] {
        if (date) {
            return response.filter(entry => entry.state === state).filter(entry => entry.date === date);
        }
        return response.filter(entry => entry.state === state);
    }

    public filterStateInfo(response: IStateInfo[], state: string): IStateInfo {
        const stateInfo = response.find(entry => entry.state === state);
        return {
            ...stateInfo,
            twitterLink: `https://twitter.com/${stateInfo.twitter.replace('@', '')}`,
        };
    }


    private isNull(value: number): number {
        return (!!value) ? value : 0;
    }

}
