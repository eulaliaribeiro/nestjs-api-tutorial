import { Injectable } from "@nestjs/common";

//business logic
@Injectable({})
export class AuthService {

    signup(){
        return {msg: 'I have signed up'}
    }
    signin(){
        return {msg: 'I have signed in'}
    }
}

const service = new AuthService()   