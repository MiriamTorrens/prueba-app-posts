export interface PostType {
    id: number 
    userId: number
    title: string
    body: string
}

export interface UserType {
    id: number
    name: string
    username: string
}

export interface PropsCard {
    post: PostType
}