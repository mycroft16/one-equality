import { Injectable } from '@angular/core';
import { ApiPublicService } from '../api/api-public.service';
import { Observable } from 'rxjs';
import { IPetition, IPetitionFilter, IPetitionObj } from '../../interfaces/petition.interface';

@Injectable()
export class PetitionService {
    constructor(private apiPublicService: ApiPublicService) { }


    public createPetition(petitionObj: IPetitionObj): Observable<number> {
        return this.apiPublicService.post(
            'Petition',
            {
                body: petitionObj,
            }
        );
    }


    public deletePetition(petitionId: number): Observable<number> {
        return this.apiPublicService.delete(
            'Petition',
            {
                params: {
                    petitionId,
                }
            }
        );
    }


    public fetchPetition(petitionId: number): Observable<IPetition> {
        return this.apiPublicService.get(
            'Petition',
            {
                params: {
                    petitionId,
                }
            }
        );
    }


    public fetchPetitions(petitionFilter: IPetitionFilter): Observable<IPetition[]> {
        return this.apiPublicService.get(
            'Petitions',
            {
                body: petitionFilter,
            }
        );
    }


    public togglePetition(petitionId: number): Observable<{ petitionId: number, isPublished: boolean }> {
        return this.apiPublicService.put(
            'PetitionToggle',
            {
                body: {
                    petitionId,
                }
            }
        );
    }


    public updatePetition(petition: IPetition): Observable<IPetition> {
        return this.apiPublicService.put(
            'Petition',
            {
                body: petition,
            }
        );
    }


}
