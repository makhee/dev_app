/**
 * Main API
 */

let host = 'http://m.netpx.co.kr';

var url_get_contents = host + '/app/api/main/get_contents';

function fetchGetContents() {
    return fetch(url_get_contents)
      .then(response => response.json())
      .then(responseJSON => {
        
        var data = responseJSON.data
        console.log('MainAPI () data: '+data);

        return {
            banner1: data.banner1,
            banner2: data.banner2,
            section1: data.section1,
            section2: data.section2,
            section3: data.section3,
            popular_search: data.popular_search,
            time_sale_list: data.time_sale_list
        };
      })
      .catch(error => {
        console.error(error);
      });
  }

  export default { fetchGetContents: fetchGetContents };