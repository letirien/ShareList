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
    id!: Number
    userId!: Number
    familyId!:Number
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