import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient) {

    }
}