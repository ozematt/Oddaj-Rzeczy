//types
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
