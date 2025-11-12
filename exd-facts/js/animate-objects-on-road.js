"use strict";

const fishInfo = [
  {
    fishName: "Gul kirurgfisk",
    fishColor: "Gul",
    fishLocation: "Det centrale/vestlige Stillehav",
    fishLength: "Op til 20 cm",
    fishFood: "Alger og små krebsdyr",
  },
  {
    fishName: "Dværgkejserfisk",
    fishColor: "Orange og sort",
    fishLocation:
      "Australien, Indonesien, Det østlige Stillehav og Det centrale/vestlige Stillehav",
    fishLength: "Op til 19 cm",
    fishFood: "Alger og små krebsdyr",
  },
  {
    fishName: "Paletkirurgfisk",
    fishColor: "Blå, sort og gul",
    fishLocation: "Det Indiske Ocean og det vestlige Stillehav",
    fishLength: "Op til 31 cm",
    fishFood: "Alger og små krebsdyr",
  },
  {
    fishName: "Klovnefisk",
    fishColor: "Orange, sort og hvid",
    fishLocation: "Det østlige Indiske Ocean, Australien og Indonesien",
    fishLength: "Op til 8 cm",
    fishFood: "Mikroalger, zooplankton og små krebsdyr",
  },
  {
    fishName: "Pudsefisk",
    fishColor: "Hvid, blå og sort",
    fishLocation:
      "Det østlige Indiske Ocean, Det vestlige Indiske Ocean, Australien, Det Røde Hav, Indonesien, Det østlige Stillehav og Det centrale/vestlige Stillehav",
    fishLength: "Op til 11 cm",
    fishFood: "Parasitter, små krebsdyr og zooplankton",
  },
  {
    fishName: "Hvidstrubet kirugfisk",
    fishColor: "Hvid, blå, gul og sort",
    fishLocation: "Det østlige Indiske Ocean og Indonesien",
    fishLength: "Op til 30 cm",
    fishFood: "Alger og små krebsdyr",
  },
  {
    fishName: "Pincetfisk",
    fishColor: "Hvid, gul, orange og sort",
    fishLocation: "Det vestlige Indiske Ocean, Australien og Indonesien",
    fishLength: "Op til 20 cm",
    fishFood: "Hvirvelløse dyr, små krebsdyr, større krebsdyr og zooplankton",
  },
  {
    fishName: "Sortbåndet kirugfisk",
    fishColor: "Hvid og sort",
    fishLocation: "Det øst og vestlige Indiske Ocean",
    fishLength: "Op til 11 cm",
    fishFood: "Alger",
  },
];

// Tilføj event listener til knappen for at navigere tilbage start siden
document.getElementById("tilbage").addEventListener("click", function () {
  window.location.href = "../exd-akvarie/index.html";
});