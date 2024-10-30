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
