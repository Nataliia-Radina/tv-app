const URL = {
  BASE: 'http://api.tvmaze.com',
  SEARCH: '/search/shows?q=',
  SCHEDULE: '/schedule',
  SHOWS: '/shows',
  EMBED_CAST: 'embed[]=cast'
}

export const API = {
  getShowsByQuery: q => fetch(`${URL.BASE}${URL.SEARCH}${q}`),
  getTodayShows: (date, country = 'US') => fetch(`${URL.BASE}${URL.SCHEDULE}?country=${country}&date=${date}`),
  getShowDetails: (id) => fetch(`${URL.BASE}${URL.SHOWS}/${id}?${URL.EMBED_CAST}`)
}
