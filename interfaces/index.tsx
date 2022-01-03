import { ParsedUrlQuery } from 'node:querystring'

export interface Params extends ParsedUrlQuery {
    id: string
}

export interface PostData {
    id: string
    content?: string
    title: string
    date: string
}