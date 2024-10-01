export default async function getAllPhotoData() {
	const results = await fetch(
		`${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
		{
			headers: {
				Authorization: `${process.env.PRIVATE_HEADER}`,
			},
		},
	);

	if (!results.ok) throw new Error("Failed to fetch photo data");

	return results.json();
}
