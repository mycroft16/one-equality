import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { format } from 'date-fns';

import { AppState } from '../../data-store/store/app.store';
import { fetchStateHistoric, fetchStateInfo } from '../../data-store/store/states/states.actions';
import { stateNameFromAbbr } from '../../data-store/utilities/state-helper';
import { selectHistoricSnapshot, selectStateInfoSnapshot } from '../../data-store/store/states/states.state';
import { IStateHistoric, IStateInfo } from '../../data-store/interfaces/states.interface';

@Component({
    selector: 'app-state',
    templateUrl: './state.component.html',
    styleUrls: ['./state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class StateComponent implements OnInit {

    public datesData: BehaviorSubject<IStateHistoric[]> = new BehaviorSubject(null);
    public displayColumns: string[] = [
        'date',
        'testsTotal',
        'testsIncrease',
        'positive',
        'positiveIncrease',
        'hospitalizedCumulative',
        'hospitalizedIncrease',
        'death',
        'deathIncrease'
    ];
    public stateAbbr: string;
    public stateInfo: BehaviorSubject<IStateInfo> = new BehaviorSubject(null);
    public stateName: string;

    constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.activatedRoute.paramMap.pipe(
            filter(params => !!params),
            take(1)
        ).subscribe(params => {
            this.stateAbbr = params.get('id').toString();
            this.stateName = stateNameFromAbbr(this.stateAbbr);
            this.store.dispatch(fetchStateHistoric({ state: this.stateAbbr, date: null }));
            this.store.dispatch(fetchStateInfo({ state: this.stateAbbr }));

        });

        this.store.pipe(selectHistoricSnapshot).subscribe(stateHistoricData => this.datesData.next(stateHistoricData));
        this.store.pipe(selectStateInfoSnapshot).subscribe(stateInfoData => this.stateInfo.next(stateInfoData));
    }

    public getDate(value: number): string {
        const dateString = value.toString();
        const formattedString = `${dateString.substr(0, 4)}-${dateString.substr(4, 2)}-${dateString.substr(6, 2)}`;
        return format(new Date(formattedString), 'MMM d');
    }

}
