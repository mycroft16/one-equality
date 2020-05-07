import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { reducer } from './errors.state';

@NgModule({
    imports: [StoreModule.forFeature('errors', reducer)],
})
export class ErrorsStoreModule {}