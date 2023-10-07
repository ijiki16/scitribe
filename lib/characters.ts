export async function getAllCharacters() {
  const data = await fetch(`${process.env.API_ENDPOINT}/characters`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
