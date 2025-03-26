export type Hotel = {
  id: number;
  name: string;
  thumbnailUrl: string;
  starRating: number;
  address: {
    streetAddress: string;
    extendedAddress: string;
    locality: string;
    postalCode: string;
    region: string;
    countryName: string;
    countryCode: string;
  };
  welcomeRewards: {
    collect: boolean;
  };
  guestReviews: {
    unformattedRating: number;
    rating: string;
    total: number;
    scale: number;
  };
  tripAdvisorGuestReviews: {
    rating: number;
    total: number;
  };
  landmarks: {
    label: string;
    distance: string;
  }[];
  ratePlan: {
    price: {
      current: string;
      exactCurrent: number;
      old: string;
      info: string;
      additionalInfo: string;
      totalPricePerStay: string;
    };
    features: {
      freeCancellation: boolean;
      paymentPreference: boolean;
      noCCRequired: boolean;
    };
    type: string;
  };
  neighbourhood: string;
  deals: {
    greatRate: boolean;
    priceReasoning: string;
  };
  messaging: {
    scarcity: string;
  };
  badging: unknown;
  pimmsAttributes: string;
  coupon: string;
  coordinate: {
    lat: number;
    lon: number;
  };
  roomsLeft: number;
  providerType: string;
  supplierHotelId: number;
};
