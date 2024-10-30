export interface Item {
  id: string;
  name: string;
  purpose: string;
  collected: string;
}

export interface Foundation {
  text: string;
  elements: Item[];
}

export interface Error {
  location: string;
  msg: string;
  param: string;
  value: string;
}

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
