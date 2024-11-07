import { createStore, action } from "easy-peasy";
import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "../lib/types";

const storeModel: StoreModel = {
  username: null,
  form: {
    stepOne: {
      thingsToDonate: "",
    },

    stepTwo: {
      numberOfSacks: null,
    },

    stepThree: {
      location: "",
      whoWeHelp: [],
      organizationName: "",
    },

    stepFour: {
      address: {
        streetName: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
      },
      deadline: {
        date: "",
        hour: "",
        comments: "",
      },
    },
  },

  setStepOne: action((state, payload) => {
    state.form.stepOne.thingsToDonate = payload;
  }),

  setStepTwo: action((state, payload) => {
    state.form.stepTwo.numberOfSacks = payload;
  }),

  setStepThree: action((state, payload) => {
    state.form.stepThree = payload;
  }),
  setStepFour: action((state, payload) => {
    state.form.stepFour = payload;
  }),
  setUsername: action((state, payload) => {
    state.username = payload;
  }),
};

const store = createStore<StoreModel>(storeModel);

export default store;

//typing the hooks
const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
