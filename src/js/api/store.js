import { createStore, action } from "easy-peasy";

const storeModel = {
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
