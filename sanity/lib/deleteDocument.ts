export const deleteDocument = async (id: string) => {
  const response = await fetch("/api/sanity/documents", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error("Failed to delete document");
  }

  return response.json();
};
