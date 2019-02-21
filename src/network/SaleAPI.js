/**
 * SaleView API
 */

let host = 'http://m.netpx.co.kr';

var url_get_list = host + '/app/api/sale/get_list';

function fetchGetList() {
    return fetch(url_get_list)
      .then(response => response.json())
      .then(responseJSON => {
        
        var data = responseJSON.data
        console.log('SaleAPI fetchGetList() data: '+data);

        return {
            sort: data.sort,
            total_cnt: data.total_cnt,
            sale_rate_list: data.sale_rate_list,
            category_list: data.category_list,
            sub_category_list: data.sub_category_list,
            goods_list: data.goods_list
        };
      })
      .catch(error => {
        console.error(error);
      });
  }


  export default { fetchGetList: fetchGetList };