export const utils = {
  parseCartData: function (watchData, cart, cartData) {
    const newCartData = cartData || {};

    const getWatch = function (id) {
      for (let i = 0; i < watchData.length; i++) {
        if (watchData[i].id === parseInt(id)) return watchData[i]
      }
    }

    Object.keys(cart).forEach(id => {
      const watch = getWatch(id);
      newCartData[id] = { ...cart[id], ...watch }
    });
    ;
    return newCartData;
  },

  checkCartItems: function (watchData, cart) {
    Object.keys(cart).forEach(id => {
      let exists = false;
      for (let i = 0; i < watchData.length; i++) {
        const element = watchData[i];
        if (element.id === parseInt(id)) return exists = true;
      }
      if (!exists) delete cart[id];
    })
    return cart;
  }
}