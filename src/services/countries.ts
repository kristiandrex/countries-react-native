import { API_URL } from "~/config";
import { ICountry } from "~/types";

export async function getAllCountries(): Promise<ICountry[]> {
  const fields = [
    "name",
    "capital",
    "population",
    "region",
    "subregion",
    "tld",
    "currencies",
    "languages",
    "borders",
    "flags",
  ];

  const response = await fetch(`${API_URL}/all?fields=${fields.join(",")}`);
  const countries = await response.json();
  return countries;
}
