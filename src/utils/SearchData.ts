export interface SearchRequest {
    aq: string;
    q: string;
    firstResult: number;
    numberOfResults: number;
    enableDidYouMean: boolean;
    groupBy: GroupBy[];
    language: string;
    sortCriteria: 'fieldascending' | 'fielddescending';
    sortField: string;
}

export interface GroupBy {
    field: string;
    maximumNumberOfValues: number;
    sortCriteria: 'nosort' | 'occurrences';
    injectionDepth?: number;
    completeFacetWithStandardValues: boolean;
    allowedValues?: string[];
    queryOverride?: string;
    generateAutomaticRanges?: boolean;
}

export interface SearchResult {
    totalCount: number;
    totalCountFiltered: number;
    duration: number;
    indexDuration: number;
    requestDuration: number;
    searchUid: string;
    pipeline: string;
    apiVersion: number;
    index: string;
    indexToken: string;
    refinedKeywords: any[];
    triggers: any[];
    termsToHighlight: SToHighlight;
    phrasesToHighlight: SToHighlight;
    queryCorrections: any[];
    groupByResults: GroupByResult[];
    categoryFacets: any[];
    results: Result[];
}

export interface GroupByResult {
    field: string;
    Field: string;
    values: Value[];
    globalComputedFieldResults: any[];
    GlobalComputedFieldResults: any[];
}

export interface Value {
    value: string;
    lookupValue: string;
    numberOfResults: number;
    score: number;
    valueType: ValueType;
    Value: string;
    LookupValue: string;
    NumberOfResults: number;
    Score: number;
    computedFieldResults: any[];
    ComputedFieldResults: any[];
}

export enum ValueType {
    Desired = 'Desired',
    Standard = 'Standard',
}

export interface SToHighlight {
    title: string;
}

export interface Result {
    title: string;
    uri: string;
    printableUri: string;
    clickUri: string;
    uniqueId: string;
    excerpt: string;
    firstSentences: null;
    summary: null;
    flags: string;
    hasHtmlVersion: boolean;
    hasMobileHtmlVersion: boolean;
    score: number;
    percentScore: number;
    rankingInfo: null;
    rating: number;
    isTopResult: boolean;
    isRecommendation: boolean;
    titleHighlights: any[];
    firstSentencesHighlights: any[];
    excerptHighlights: any[];
    printableUriHighlights: any[];
    summaryHighlights: any[];
    parentResult: null;
    childResults: any[];
    totalNumberOfChildResults: number;
    absentTerms: any[];
    raw: Raw;
    Title: string;
    Uri: string;
    PrintableUri: string;
    ClickUri: string;
    UniqueId: string;
    Excerpt: string;
    FirstSentences: null;
}

export interface Raw {
    systitle: string;
    systopparent: string;
    sysurihash: string;
    urihash: string;
    tpdisponibiliteraw: string;
    tpcepagenomsplitgroup: string;
    tpbouchon: string;
    tpcodecup: string;
    sysuri: string;
    sysprintableuri: string;
    sysfolders: string;
    tpproducteur: string;
    tpclassification?: string;
    tpcategorieraw: string;
    tpcategorie: string;
    tpquantitelimite: string;
    sysconcepts: string;
    tpinventairetypenomsuccursalerawsplitgroup: string;
    sysindexeddate: number;
    tpcepagesplitgroup: string;
    syslanguage: string;
    tpinventairenomsuccursalesplitgroup: string;
    tpprixbande: string;
    tpcoveoconnectorhasbinarydata: string;
    tpregion: string;
    tppays: string;
    tpdisponibilite: string;
    tpinventairetypesuccursalesplitgroup: string;
    tpcouleur: string;
    syssite: string;
    tppagetitle: string;
    tpthumbnailuri: string;
    tpprixnum: number;
    sysdocumenttype: string;
    tpprixnormal: string;
    syssource: string;
    syssize: number;
    sysdate: number;
    tppagebody: string;
    tpmillesime: string;
    tpnomdebouteille: string;
    tpformat: string;
    systopparentid: number;
    tpsousregion: string;
    tpcodesaq: string;
    syssourcetype: string;
    sysclickableuri: string;
    sysfiletype: string;
    tpcontenant: string;
    tpproductid: string;
    sysrowid: number;
    syscollection: string;
}
