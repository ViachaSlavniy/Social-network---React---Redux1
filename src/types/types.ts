export type PostType = {
    id: number
    message: string
    likesCounts: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string | null
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type UserType = {
    name: string,
    id: number,
    photos: PhotosType,
    status: string,
    followed: boolean
}

export type DialogType = {
    id: number
    name: String
    img: string
}
export type MessageType = {
    id: number
    message: String
    img: string
}

export type FrinedType = {
    id: number
    name: string
    img: string
}