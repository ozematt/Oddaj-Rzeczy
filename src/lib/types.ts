import { Action } from "easy-peasy";

export type Item = {
  id: string;
  name: string;
  purpose: string;
  collected: string;
};

export type Foundation = {
  text: string;
  elements: Item[];
};

export type Error = {
  location: string;
  msg: string;
  param: string;
  value: string;
};

export type StepThree = {
  location: string;
  whoWeHelp: string[];
  organizationName: string;
};

export type StepFour = {
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
};

export type Form = {
  stepOne: {
    thingsToDonate: string;
  };

  stepTwo: {
    numberOfSacks: number | null;
  };
  stepThree: StepThree;

  stepFour: StepFour;
};

export type StoreModel = {
  username: string | null;
  form: Form;
  setStepOne: Action<StoreModel, string>;
  setStepTwo: Action<StoreModel, number | null>;
  setStepThree: Action<StoreModel, StepThree>;
  setStepFour: Action<StoreModel, StepFour>;
  setUsername: Action<StoreModel, string | null>;
};

export type PageNumberProps = {
  page: number;
  currentPage: number;
  pages: number[];
  handlePageChange: (page: number) => void;
};

export type ItemBtnProps = {
  buttonClicked: string;
  btn: string;
  handleButtonClick: (btn: string) => void;
};

export type BigBtnProps = {
  path: string;
  fill: string;
};
