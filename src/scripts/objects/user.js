const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    forks: '',
    watchers: '',
    language: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setEvents(events) {
        this.events = events
    },
    setInfosRepositories(infoRepositories) {
        this.forks = infoRepositories.forks
        this.stars = infoRepositories.stargazers_count
        this.watchers = infoRepositories.watchers
        this.language = infoRepositories.language
    },
}

export { user }