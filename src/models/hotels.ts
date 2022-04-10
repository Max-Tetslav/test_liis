export interface IHotel {
  hotelName: string;
  priceAvg: number;
  stars: number;
  hotelId: number;
}

export interface IResponseHotels {
  data: IHotel[];
}

export interface IPayloadGetHotels {
  city: string;
  fromDate: string;
  toDate: string;
  days: string;
}

export interface IFavouriteHotel extends IHotel {
  date: string;
  days: string;
}

export enum EFavouriteStatuses {
  YES = 'yes',
  NO = 'no',
}

export enum ESortTypes {
  RATE = 'rate',
  PRICE = 'price',
}

export enum ESortDirections {
  UP = 'up',
  DOWN = 'down',
}
