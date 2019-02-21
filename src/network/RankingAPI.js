/**
 * RankingView API
 */
var url_get_list = 'http://m.netpx.co.kr/app/api/ranking/get_list';

function fetchGetList() {
    return fetch(url_get_list)
      .then(response => response.json())
      .then(responseJSON => {
        
        var data = responseJSON.data
        console.log('get_list() data: '+data);

        return {
            total_cnt: data.total_cnt,
            ranking_rate: data.ranking_rate,
            category_list: data.category_list,
            goods_list: data.goods_list
        };
      })
      .catch(error => {
        console.error(error);
      });
  }


  export default { fetchGetList: fetchGetList };