interface Review {
    for: {
      count: number;
      user: String;
    };
    against: {
      count: number;
      user: String;
    };
  }

export class Card {
    title!: String
    description!: String
    msg!: String
    createdDate!: Date
    price!: Number
    creator!: String
    link!: String
    img!: String
    review!:  Review
    visible!: Boolean
}