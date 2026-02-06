// === CONSTANTS ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2601-ftb-et-web-ft-louie";
const RESOURCE = "/guests";
const API = BASE + COHORT + RESOURCE;

export async function getGuestList() {
  try {
    
    const response = await fetch (API);
    const result = await response.json();
    return result.data

  } catch (error) {
    console.error(error)
    // still return something so the app doesn't break on failure
    return []; 
  }
}