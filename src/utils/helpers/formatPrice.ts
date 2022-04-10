const formatPrice = (price: number): string => {
  let formatedPrice = Math.floor(price).toString();

  switch (formatedPrice.length) {
    case 7: {
      const firstPart = formatedPrice[0];
      const secondPart = formatedPrice.slice(1, 4);
      const thirdPart = formatedPrice.slice(4);

      formatedPrice = `${firstPart} ${secondPart} ${thirdPart}`;
      break;
    }
    case 6: {
      const firstPart = formatedPrice.slice(0, 3);
      const secondPart = formatedPrice.slice(3);

      formatedPrice = `${firstPart} ${secondPart}`;
      break;
    }
    case 5: {
      const firstPart = formatedPrice.slice(0, 2);
      const secondPart = formatedPrice.slice(2);

      formatedPrice = `${firstPart} ${secondPart}`;
      break;
    }
    // no default
  }

  return formatedPrice;
};

export default formatPrice;
