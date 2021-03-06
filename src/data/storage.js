import { Plugins } from '@capacitor/core'
const { Storage } = Plugins

// Get all
export const getAllLikes = async () => {
    const likes = await Storage.values()
    return likes
}

// Check if Product is <3
export const getLike = async (id) => {
    const ret = await Storage.get({key: id})
    return ret.value
}

// Add or Remove Product From Likes
export const setLike = async (id, boolean) => {
    await Storage.set({
        key: id,
        value: boolean
    })
}

// Process Likes on User Click
export const processLikes = async (id, isLiked) => {
    if (isLiked == 'false') {
        await setLike(id, true)
        console.log(id + ' added to Favourites')
    } else if (isLiked == 'true') {
        await setLike(id, false)
        console.log(id + ' removed from Favourites')
    }
}

