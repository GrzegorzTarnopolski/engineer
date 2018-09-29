import {
    is,
    isNil,
    isEmpty,
    compose,
    not,
    find,
    propEq,
    filter,
    head,
    assoc,
    ifElse,
    toPairs,
    always,
    cond,
    zipObj,
    values,
    equals,
    T,
    pick,
    has,
    prop,
    take
} from 'ramda'

// tslint:disable no-any
const isDefined = (subject: any) => typeof subject !== 'undefined' && subject !== null
const ifDefined = (subject: any, then: (subject: any) => void) => isDefined(subject) && then(subject)
const all = (...params: Array<any>) => params.every(Boolean)
const hasElements = (array: Array<any>) => Array.isArray(array) && array.length > 0
const isEqual = <T = {}>(comparator: any, followingValue?: any) => (value: T) => is(Function, comparator)
    ? comparator(value) === followingValue
    : value === comparator
// tslint:enable no-any
const notEmpty = (value: string): boolean => compose(not, isEmpty)(value)

export {
    isDefined,
    ifDefined,
    is,
    isNil,
    T,
    notEmpty,
    all,
    hasElements,
    find,
    propEq,
    filter,
    head,
    assoc,
    ifElse,
    compose,
    toPairs,
    always,
    isEmpty,
    not,
    cond,
    zipObj,
    values,
    equals,
    pick,
    has,
    prop,
    take,
    isEqual
}
