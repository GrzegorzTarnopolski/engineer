export type Nullable<T> = T | null

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface Global extends NodeJS.Global {
    document: Document,
    window: Window,
    navigator: {
        userAgent: string
    }
}

export type KeyValuePair = {
    [key: string]: any // tslint:disable-line no-any
}
