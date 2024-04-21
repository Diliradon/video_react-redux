type AddAction = {
  type: 'goods/ADD';
  payload: string;
}

const add = (value: string): AddAction => ({
  type: 'goods/ADD',
  payload: value,
})


type TakeAction = {
  type: 'goods/TAKE';
  payload: string;
}

const take = (value: string): TakeAction => ({
  type: 'goods/TAKE',
  payload: value,
})

type Action = AddAction | TakeAction;

export const goodsReducer = (goods: string[] = [], action: Action) => {
  switch(action.type) {
    case 'goods/ADD':
      return [...goods, action.payload];
    
    case 'goods/TAKE': 
      return goods.filter(good => good !== action.payload);

    default:
      return goods;
  }
};

export const actions = { add, take };

export default goodsReducer;
