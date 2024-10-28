import { createStore, action, Action } from "easy-peasy";

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
    toGive: string;
  };

  stepTwo: {
    numberOfBugs: string;
  };
  stepThree: StepThree;

  stepFour: StepFour;
}

export interface StoreModel {
  userLogIn: boolean;
  form: Form;
  setStepOne: Action<StoreModel, string>;
  setStepTwo: Action<StoreModel, string>;
  setStepThree: Action<StoreModel, StepThree>;
  setStepFour: Action<StoreModel, StepFour>;
  setUserLogIn: Action<StoreModel, boolean>;
}

const storeModel: StoreModel = {
  userLogIn: false,
  form: {
    stepOne: {
      toGive: "",
    },

    stepTwo: {
      numberOfBugs: "",
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
    state.form.stepOne.toGive = payload;
  }),

  setStepTwo: action((state, payload) => {
    state.form.stepTwo.numberOfBugs = payload;
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
};

const store = createStore(storeModel);

export default store;
