import { Term } from "./term";

export interface DigitalHealthApplication {

  id : string;

  applicationName : string | null;

  company : string,

  applicationEmail: string | null,

  url : string | null,

  applicationDescription: string | null;

  outcomes : Term [],
  
  conditions : Term [],

  users : Term []

}