import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {IDocument} from '../interfaces/documents';
import { IStudent } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})

export class GetDocumentService {

  documents:IDocument;

  private _domesticDataUrl = 'assets/JSON/domestic-documents.json' ;
  private _internationalDataUrl = 'assets/JSON/international-documents.json' ;

  constructor(private _http: HttpClient) { }

  getDomesticDocuments(): Observable<IDocument> {
    return this._http.get<IDocument>(this._domesticDataUrl);
  }

  getInternationalDocuments(): Observable<IDocument> {
    return this._http.get<IDocument>(this._internationalDataUrl);
  }
}