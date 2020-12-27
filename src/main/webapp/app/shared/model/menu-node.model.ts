export interface IMenuNode {
  id?: number;
  name?: string;
  description?: string;
  i18Name?: string;
  stateRef?: string;
  icon?: string;
  leaf?: boolean;
  orderPriority?: number;
  status?: boolean;
  label?: string;
  labelClass?: string;
  extralink?: boolean;
}

export class MenuNode implements IMenuNode {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public i18Name?: string,
    public stateRef?: string,
    public icon?: string,
    public leaf?: boolean,
    public orderPriority?: number,
    public status?: boolean,
    public label?: string,
    public labelClass?: string,
    public extralink?: boolean
  ) {
    this.leaf = this.leaf || false;
    this.status = this.status || false;
    this.extralink = this.extralink || false;
  }
}
