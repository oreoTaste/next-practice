const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/",
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}
