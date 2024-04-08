export const deleteDocument = async (id: string) => {
  const mutations = [
    {
      delete: {
        id: id,
      },
    },
  ];

  const chicken = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_READ_AND_WRITE_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    }
  );
  console.log(chicken);
};
