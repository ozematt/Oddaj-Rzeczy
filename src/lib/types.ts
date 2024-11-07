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

export type FormStepThreeData = {
  location: string;
  whoWeHelp: string[];
  organizationName: string;
};

export type FormStepFourData = {
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

export type FormData = {
  stepOne: {
    thingsToDonate: string;
  };

  stepTwo: {
    numberOfSacks: number | null;
  };
  stepThree: FormStepThreeData;

  stepFour: FormStepFourData;
};

export type StoreModel = {
  username: string | null;
  form: FormData;
  setStepOne: Action<StoreModel, string>;
  setStepTwo: Action<StoreModel, number | null>;
  setStepThree: Action<StoreModel, FormStepThreeData>;
  setStepFour: Action<StoreModel, FormStepFourData>;
  setUsername: Action<StoreModel, string | null>;
};

export type PageNumberProps = {
  page: number;
  currentPage: number;
  pages: number[];
  onPageChange: (page: number) => void;
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
