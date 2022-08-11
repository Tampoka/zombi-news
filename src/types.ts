export type UriString = string
export type UniqueString = string
export type EntityId = number | UniqueString
export type DateIsoString = string

export type Post = {
    _id: EntityId
    date: DateIsoString
    category: Category
    title: string
    lead: string
    content: string
    image: UriString
    source: UriString
}

export type Category = "科学・IT" | "社会" | "経済"

export type Person = string
export type RelativeTime = string
export type Comment = {
    id: EntityId
    author: Person
    content: string
    time: RelativeTime
    post: EntityId
}