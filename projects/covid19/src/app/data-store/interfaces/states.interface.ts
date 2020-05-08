export interface IStateCurrent {
    checkTimeEt: string;
    commercialScore: number;
    dateChecked: string;
    dateModified: string;
    death: number;
    fips: string;
    grade: string;
    hash: string;
    hospitalized: number;
    hospitalizedCumulative: number;
    hospitalizedCurrently: number;
    inIcuCumulative: number;
    inIcuCurrently: number;
    lastUpdateEt: string;
    negative: number;
    negativeScore: number;
    onVentilatorCumulative: number;
    onVentilatorCurrently: number;
    pending: number;
    positive: number;
    positiveScore: number;
    posNeg: number;
    recovered: number;
    score: number;
    state: string;
    totalTestResults: number;
}

export interface IStateHistoric {
    date: number;
    dateChecked: string;
    death: number;
    deathIncrease: number;
    fips: string;
    hash: string;
    hospitalized: number;
    hospitalizedCumulative: number;
    hospitalizedCurrently: number;
    hospitalizedIncrease: number;
    inIcuCumulative: number;
    inIcuCurrently: number;
    negative: number;
    negativeIncrease: number;
    onVentilatorCumulative: number;
    onVentilatorCurrently: number;
    pending: number;
    positive: number;
    positiveIncrease: number;
    posNeg: number;
    recovered: number;
    state: string;
    totalTestResults: number;
}

export interface IStateInfo {
    covid19Site: string;
    covid19SiteOld: string;
    covid19SiteSecondary: string;
    fips: string;
    name: string;
    notes: string;
    pui: string;
    pum: false;
    state: string;
    twitter: string;
    twitterLink?: string;
}
