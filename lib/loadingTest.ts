export async function loadingTest(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
