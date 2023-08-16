
export interface ICourseState {
   course: ICourse | null;
   symbols: ISymbols[];
   loading: Loading;
}

export interface ICourse {
    date: string;
    rate: number;
    info: IInfo;
    query: IQuery;
    result: number;
}

export interface IQuery {
    amount: number;
    from: string;
    to: string;
}

export interface IInfo {
    rate: number,
    timestamp: number
}

export interface ISymbols {
    [index: string]: string
}

export type Loading = "loading" | "idle" | "error"



