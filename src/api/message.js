/**
 * This file contains client-side API functions that call our express.js backend routes
 */

export const getMessage = async () => {
  try {
    const response = await fetch('/api/message');
    const data = await response.json();
    return data.message;
  } catch (error) {
    throw new Error('Failed to load message: ', error);
  }
};
