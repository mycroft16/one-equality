export interface IAbbrName {
    abbr: string,
    name: string,
}

export const statesAndAbbrs: IAbbrName[] = [
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DC', name: 'Washington DC' },
    { abbr: 'DE', name: 'Deleware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WY', name: 'Wyoming' },
    { abbr: 'PR', name: 'Puerto Rico' },
    { abbr: 'AS', name: 'American Samoa' },
    { abbr: 'GU', name: 'Guam' },
    { abbr: 'MP', name: 'Northern Mariana Islands' },
    { abbr: 'VI', name: 'Virgin Islands' }
];

export function stateNameFromAbbr(abbr: string): string {
    return statesAndAbbrs.find(state => state.abbr === abbr).name;
}

export function stateAbbrFromName(name: string): string {
    return statesAndAbbrs.find(state => state.name === name).abbr;
}