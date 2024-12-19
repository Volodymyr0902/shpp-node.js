/**
 * Formats CSV data from a string of '44.38,34.33,Алушта,31440' templates to an object of
 * 'Kyiv: {population: 1000000, rating: 1}' templates. Such properties are sorted in descending order
 * by inner 'population' properties value and only first 10 of these are saved within this object.
 * All empty and commented out lines are ignored.
 * 
 * @param {string} rawCitiesData Non-fomatted cities data
 * @param {string} text Text paragraph
 * @returns Closure function to replace matching cities names within passed in text with a substring of 
 *          template: 'назва міста (Х місце в ТОП-10 найбільших міст України, населення УУУУУУ чоловік)'
 */
export function getInfoTool(rawCitiesData) {
  const formattedCitiesData = rawCitiesData
    .split("\n")
    .filter((el) => !el.startsWith("#") && el.length > 0)
    .map((el) => {
      el = el.split(",");
      el[2] = el[2].replace(/[^а-яА-Яіїєґґ -]/g, "");
      return { x: +el[0], y: +el[1], name: el[2], population: +el[3] };
    })
    .sort((el1, el2) => el2.population - el1.population)
    .slice(0, 10)
    .reduce((ratedCities, el, index) => {
      ratedCities[el.name] = {
        population: el.population,
        rating: ++index,
      };
      return ratedCities;
    }, {});

  return (text) => {
    Object.entries(formattedCitiesData).forEach((cityData) => {
      text = text.replace(
        cityData[0],
        `${cityData[0]} (${cityData[1].rating} місце в ТОП-10 найбільших міст України, населення ${cityData[1].population} чоловік)`
      );
    });
    return text;
  };
}
