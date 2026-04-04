import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

const countryData = countries.getNames("en", { select: "official" });

const countryList = Object.entries(countryData).map(([code, name]) => ({
  code,
  name,
}));
export default countryList;
