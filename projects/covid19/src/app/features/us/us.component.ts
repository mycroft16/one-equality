import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { AppState } from '../../data-store/store/app.store';
import { fetchStatesCurrent } from '../../data-store/store/states/states.actions';
import { selectCurrentSnapshot } from '../../data-store/store/states/states.state';
import { IStateCurrent } from '../../data-store/interfaces/states.interface';

@Component({
    selector: 'app-us',
    templateUrl: './us.component.html',
    styleUrls: ['./us.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsComponent implements OnInit {

    public displayColumns: string[] = [
        'state',
        'testsTotal',
        'testsPositive',
        'testsNegative',
        'deaths',
        'mortalityRate',
        'recovered',
        'recoveryRate',
        'hospitalizedCurrently',
        'hospitalizedCumulative',
        'hospitalizedRate',
        'inIcuCurrently',
        'inIcuCumulative',
        'inIcuRate',
        'onVentilatorCurrently',
        'onVentilatorCumulative',
        'onVentilatorRate'
    ];
    public statesData: BehaviorSubject<IStateCurrent[]> = new BehaviorSubject(null);

    constructor(private router: Router, private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.store.dispatch(fetchStatesCurrent());
        this.store.pipe(selectCurrentSnapshot).subscribe(data => this.statesData.next(data));
    }

    public getRate(amount: number, total: number): number {
        return (!!total) ? amount / total : 0;
    }

    public onStateClicked(state: string): void {
        this.router.navigate(['/state', state]);
    }
}
