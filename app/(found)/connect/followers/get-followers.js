'use server';

export default async function getFollowers() {
  try {
    const response = await fetch(
      'https://spotify-api-wrapper.appspot.com/artist/david-kando',
      { next: { revalidate: 60 } }
    );
    const json = await response.json();

    const followers = json.artists?.items[0]?.followers?.total;
    return followers;
  } catch (err) {
    throw new Error(err);
  }
}
