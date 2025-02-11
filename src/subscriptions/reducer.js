import { fetchStripeCustomerPortalURL, fetchSubscriptions } from './actions';

export const initialState = {
  loading: false,
  loadingError: false,
  subscriptions: [],
  stripeCustomerPortalURL: null,
  stripeError: false,
  stripeLoading: false,
};

const subscriptionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case fetchSubscriptions.TRIGGER:
      return {
        ...state,
        loading: true,
        loadingError: false,
      };
    case fetchSubscriptions.SUCCESS:
      return {
        ...state,
        subscriptions: action.payload,
      };
    case fetchSubscriptions.FAILURE:
      return {
        ...state,
        loadingError: true,
      };
    case fetchSubscriptions.FULFILL:
      return {
        ...state,
        loading: false,
      };
    case fetchStripeCustomerPortalURL.TRIGGER:
      return {
        ...state,
        stripeLoading: true,
        stripeCustomerPortalURL: null,
      };
    case fetchStripeCustomerPortalURL.SUCCESS:
      return {
        ...state,
        stripeCustomerPortalURL: action.payload,
      };
    case fetchStripeCustomerPortalURL.FAILURE:
      return {
        ...state,
        stripeError: true,
      };
    case fetchStripeCustomerPortalURL.FULFILL:
      return {
        ...state,
        stripeLoading: false,
      };
    case 'CLEAR_STRIPE_ERROR':
      return {
        ...state,
        stripeError: false,
      };
    default:
      return state;
  }
};

export default subscriptionsReducer;
