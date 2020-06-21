export enum OrderStatus {
  // When the order has been created, but the ticket it is trying to order has not ben reserved
  Created = "created",

  // The ticket the order is trying to reserve has already been reserved, or when user has cancelled the order
  // or expires before payment
  Cancelled = "cancelled",

  //  The order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  // Reserved and payment was provided
  Complete = "complete",
}
