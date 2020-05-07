import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './states.state';
import { StatesEffects } from './states.effects';
import { StatesService } from './states.service';
import { StatesNormalizerService } from './states-normalizer.service';

@NgModule({
    imports: [
        StoreModule.forFeature('states', reducer),
        EffectsModule.forFeature([StatesEffects]),
    ],
    providers: [StatesService, StatesNormalizerService],
})
export class StatesStoreModule {}