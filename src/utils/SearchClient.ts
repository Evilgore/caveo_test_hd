import axios, { AxiosPromise } from 'axios';
import { SearchRequest, SearchResult } from './SearchData';

export class SearchClient {

    public q: string = '';

    public buildSearchRequest(): SearchRequest {
        let request: SearchRequest = {
            aq: '',
            q: '',
            firstResult: 0,
            numberOfResults: 10,
            enableDidYouMean: true,
            groupBy: [],
            language: 'en',
            sortCriteria: 'fielddescending',
            sortField: '@tpmillesime',
        };
        return request;
    }

    public doRequest() {
        let request = this.buildSearchRequest();
        axios.post<SearchResult>('/rest/search', request).then((rep) => {
            this.onResult(rep.data);
        }).catch((err) => {
            alert(err);
        });
    }

    public onResult: (result: SearchResult) => void = (result) => { };
}

const client = new SearchClient();

export function getSearchClient(): SearchClient {
    return client;
}

// aq: @tpdisponibilite=="En Ligne"
// searchHub: default
// language: en
// pipeline: default
// firstResult: 0
// numberOfResults: 12
// excerptLength: 200
// tslint:disable-next-line:no-trailing-whitespace
// filterField: 
// enableDidYouMean: true
// sortCriteria: fielddescending
// sortField: @tpmillesime
// queryFunctions: []
// rankingFunctions: []
// retrieveFirstSentences: true
// timezone: America/New_York
// enableDuplicateFiltering: false
// enableCollaborativeRating: false
// let groupBy = [
//     {
//         "field": "@tpenspecial",
// tslint:disable-next-line:max-line-length
//         "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true
//     }, {
//         "field":
//             "@tpdisponibilite", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true, "allowedValues": ["En Succursale", "En Ligne", "Bientôt disponible"], "queryOverride": "@sysuri"
//     }, {
//         "field": "@tpcategorie",
//         "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true
//     }, {
//         "field": "@tppays",
//         "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true
//     }, { "field": "@tpregion", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpmillesime", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpcoteexpertsplitgroup", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpcepagenomsplitgroup", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpinventairenomsuccursalesplitgroup", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpclassification", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tppastilledegout", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpfamilledevinsplitgroup", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpaccordsnommenu", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpparticularitesplitgroup", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpobservationsgustativesacidite", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpobservationsgustativescorps", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpobservationsgustativessucre", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpobservationsgustativestannins", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     { "field": "@tpobservationsgustativestexture", "maximumNumberOfValues": 6, "sortCriteria": "occurrences", "injectionDepth": 1000, "completeFacetWithStandardValues": true },
//     {
//         "field": "@tpprixnum", "completeFacetWithStandardValues": true, "generateAutomaticRanges": true, "maximumNumberOfValues": 1, "queryOverride": "@sysuri", "sortCriteria": "nosort"
//     }];
