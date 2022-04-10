export class ModelClass {
  showForms: boolean = false;
  showDetails: boolean;
  constructor(
    public userName: string,
    public quote: string,
    public author: string,
    public date: Date,
    public likes: number,
    public unlike: number
  ) {
    this.showDetails = false;
  }
}
