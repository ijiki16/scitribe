export async function getAllCharacters() {
  console.log("API_ENDPOINT");
  console.log(process.env.API_ENDPOINT);

  // const data = await fetch(`${process.env.API_ENDPOINT}/characters`);

  // if (!data.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // return data.json();

  return [];
}
