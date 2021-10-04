export const STATUS_ACTIVE = 'active';

export const localeIsRequired = (field: string) => `${field} is required`;
export const localeNotFoundRoute = (originalUrl: string) =>
  `There is no ${originalUrl} on this server`;
