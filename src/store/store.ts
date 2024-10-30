import { createStore, action, Action } from "easy-peasy";

import { createTypedHooks } from "easy-peasy";

export interface StepThree {
  location: string;
  whoWeHelp: string[];
  organizationName: string;
}

export interface StepFour {
  address: {
    streetName: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
  };
  deadline: {
    date: string;
    hour: string;
    comments: string;
  };
}

export interface Form {
  stepOne: {
    thingsToDonate: string;
  };

  stepTwo: {
    numberOfSacks: number | null;
  };
  stepThree: StepThree;

  stepFour: StepFour;
}

export interface StoreModel {
  userLogIn: boolean;
  username: string | null;
  form: Form;
  setStepOne: Action<StoreModel, string>;
  setStepTwo: Action<StoreModel, number | null>;
  setStepThree: Action<StoreModel, StepThree>;
  setStepFour: Action<StoreModel, StepFour>;
  setUserLogIn: Action<StoreModel, boolean>;
  setUsername: Action<StoreModel, string | null>;
}

const storeModel: StoreModel = {
  userLogIn: false,
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
  setUserLogIn: action((state, payload) => {
    state.userLogIn = payload;
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
