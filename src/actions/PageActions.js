export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

let cached = false
let photosArr = []

export function getPhotos(year) {
  return function(dispatch) {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })

    if (cached) {
      let photos = makeYearPhotos(photosArr, year)
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos,
      })
    } else {
      getMorePhotos(0, 200, year, dispatch)
    }
  }
}

function makeYearPhotos(photos, selectedYear) {
  let yearPhotos = []
  photos.forEach(item => {
    let createdYear = new Date(item.date * 1000).getFullYear()
    if (createdYear === selectedYear) {
      yearPhotos.push(item)
    }
  })
  yearPhotos.sort((a, b) => b.likes_count - a.likes_count)
  return yearPhotos
}

function getMorePhotos(offset, count, year, dispatch) {
  window.VK.api(
    'photos.getAll',
    {
      extended: 0,
      count: 5,
      offset: 0,
      v: '5.87',
    },
    r => {
      try {
        console.log(r)
        photosArr = photosArr.concat(r.response.items)
        if (offset <= r.response.count) {
          offset += 200
          getMorePhotos(offset, count, year, dispatch)
        } else {
          cached = true
          let photos = makeYearPhotos(photosArr, year)
          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: photos,
          })
        }
      } catch (err) {
        dispatch({
          type: GET_PHOTOS_FAIL,
          error: true,
          payload: new Error(err),
        })
      }
    }
  )
}
