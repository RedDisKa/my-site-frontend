export const routes = {
    homepage: () => '/',
    blog: (tag) => `/blog${tag ? `?tag=${tag}` : ''}`,
    article: (param) => `/article/${param ? param : ':name'}`,
}
