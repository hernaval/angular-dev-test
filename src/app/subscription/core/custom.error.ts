export class NotSubscriptionPlanError extends Error {
  constructor(duration: number) {
    super(`No subscription plan with duration ${duration}`);
  }
}
