// chunk
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// mapAsync with Promise.all
async function mapAsync(array, asyncFunction) {
  return Promise.all(array.map(asyncFunction));
}

// mapWithChunksAsync
async function mapWithChunksAsync(array, asyncFunction, chunkSize) {
  const chunks = chunk(array, chunkSize);
  const results = [];
  for (const chunk of chunks) {
    const chunkResults = await mapAsync(chunk, asyncFunction);
    results.push(...chunkResults);
  }
  return results;
}
    