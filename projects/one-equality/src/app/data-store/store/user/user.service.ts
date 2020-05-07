import { Injectable } from '@angular/core';
import { ApiPublicService } from '../api/api-public.service';
import { Observable } from 'rxjs';
import { IPartialUser, IUser, IUserObj } from '../../interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(private apiPublicService: ApiPublicService) { }


    public createPartialUser(partialUserObj: IPartialUser): Observable<IUser> {
        return this.apiPublicService.post(
            'PartialUser',
            {
                body: partialUserObj,
            }
        );
    }


    public createUser(userObj: IUserObj): Observable<IUser> {
        return this.apiPublicService.post(
            'User',
            {
                body: userObj,
            }
        );
    }


    public fetchUser(username: string, password: string): Observable<IUser> {
        return this.apiPublicService.get(
            'User',
            {
                params: {
                    username,
                    password,
                }
            }
        );
    }


    public updateUser(user: IUser): Observable<IUser> {
        return this.apiPublicService.put(
            'User',
            {
                body: user,
            }
        );
    }
}
