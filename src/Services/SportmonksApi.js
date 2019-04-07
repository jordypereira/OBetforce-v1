import axios from 'axios'
export default axios.create({
  baseURL: 'https://soccer.sportmonks.com/api/v2.0?api_token=DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD',
  timeout: '1000',
  headers: {
    'Content-Type': 'application/json'
  }
})
