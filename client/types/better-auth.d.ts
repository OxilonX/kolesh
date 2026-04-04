import "@better-auth/core";

declare module "@better-auth/core" {
  interface User {
    country?: string;
    gender?: string;
    age?: string;
  }
}
