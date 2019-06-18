import {
  APP_HANDLE_STATE,
  APP_SUCCESS_GET_DATA
} from "../ActionType";

const initState = {
  search: {
    furniture: '',
    furnitureStyle: [],
    deliveryTime: []
  },
  furniture_styles: [],
  deliveryTime: [
    {
      value: '7',
      label: '1 Week'
    },
    {
      value: '14',
      label: '2 Week'
    },
    {
      value: '31',
      label: '1 Month'
    },
    {
      value: '32',
      label: '1 Month >'
    }],
  products: [],
  viewProduct: []
};

function deliveryTime(data) {

}

export default function App(state = initState, action) {
  switch (action.type) {
    case APP_HANDLE_STATE:
        var tempData = []
        var dataLoop

      function furniture(){
        var filter, txtValue, dataFurniture;
        filter = action.value.toUpperCase();

        if (state.search.furnitureStyle.length == 0 && state.search.deliveryTime.length == 0) {
          if (action.value != '' && state.search.furniture.length > action.value.length) {
            dataFurniture = state.products;
          } else if (action.value != '' && state.search.furniture.length < action.value.length) {
            dataFurniture = state.viewProduct;
          } else {
            state.products.map(x => {
              tempData.push(x)
            })
          }
        } else {
          dataFurniture = state.viewProduct;
        }

        if (tempData.length == 0) {
          for (var i = 0; i < dataFurniture.length; i++) {
            txtValue = dataFurniture[i].name;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tempData.push(dataFurniture[i])
            }
          }
        }
        
      }

      function furnitureStyle() {
        if (state.search.furnitureStyle.length == 0 && action.value.length != 0) {
          dataLoop = state.viewProduct
        } else if (state.search.furnitureStyle.length < action.value.length) {
          dataLoop = state.viewProduct
        } else if (state.search.furnitureStyle.length > action.value.length && action.value.length != 0) {
          dataLoop = state.products
        } else if (state.search.furnitureStyle.length == 1 && action.value.length == 0) {
          state.products.map(x => {
            tempData.push(x)
          })
        }
        if (tempData.length == 0) {
          for (var i = 0; dataLoop.length > i; i++) {
            for (var j = 0; dataLoop[i].furniture_style.length > j; j++) {
              var hasil = !action.value.some(ele => !dataLoop[i].furniture_style.includes(ele))
              if (hasil && dataLoop[i].furniture_style.length >= action.value.length) {
                tempData.push(dataLoop[i]);
              }
              break;
            }
          }
        }
      }
      
      function deliveryTime() {
        if (action.value.length != 0) {
          state.products.filter(function (item) {
            for (var i = 0; action.value.length > i; i++) {
              if (action.value[i].value != '32' && parseInt(item.delivery_time) <= parseInt(action.value[i].value)) {
                tempData.push(item);
                return true;
              }
              if (action.value[i].value == '32' && parseInt(item.delivery_time) >= parseInt(action.value[i].value)) {
                tempData.push(item);
                return true;
              }
            }
            return false;
          })
        } else {
          state.products.map(x => {
            tempData.push(x);
          })
        }
      }      
      
      if (action.field == 'furniture') {
        furniture()
      } else if (action.field == 'furnitureStyle') {
        furnitureStyle()
      } else {
        deliveryTime()
      }
      return {
        ...state,
        search: {
          ...state.search,
          [action.field]: action.value,
        },
        viewProduct: tempData
      };
    case APP_SUCCESS_GET_DATA:
      return {
        ...state,
        furniture_styles: action.furniture_styles,
        products: action.products,
        viewProduct: action.products
      };
    default:
  }
  return state;
}
