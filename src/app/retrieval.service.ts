import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class RetrievalService {

  constructor(private http: HttpClient) { }

  list() {}

}
