import { createAction, props, union } from '@ngrx/store';

export const clearAllErrors = createAction(
    '[Errors] Clear All Errors'
);

export const clearLastError = createAction(
    '[Errors] Clear Last Error'
);

export const setError = createAction(
    '[Errors] Set Error',
    props<{ error: string }>()
);

const actions = union({
    clearAllErrors,
    clearLastError,
    setError,
});

export type ActionsUnion = typeof actions;
