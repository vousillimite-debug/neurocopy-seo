/**
 * Fetch avec retry exponentiel
 * @param {string} url
 * @param {RequestInit} options
 * @param {number} retries
 * @param {number} delay - délai initial en ms
 * @returns {Promise<Response>}
 */
export async function fetchWithRetry(url, options = {}, retries = 3, delay = 500) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url, options)
      if (response.ok) return response
      if (response.status >= 500 && attempt < retries - 1) {
        await sleep(delay * Math.pow(2, attempt))
        continue
      }
      return response
    } catch (err) {
      if (attempt < retries - 1) {
        await sleep(delay * Math.pow(2, attempt))
        continue
      }
      throw err
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
