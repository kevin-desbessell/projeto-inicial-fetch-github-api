import { baseUrl } from '/src/scripts/variables.js'

async function followersFollowing(userNamee) {
    const response = await fetch(`${baseUrl}/${userNamee}`)
    return await response.json()
}

export { followersFollowing }