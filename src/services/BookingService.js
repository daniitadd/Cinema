const STORAGE_KEY = "bookings";

export const BookingService = {
  getBookings(movieId) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return data[movieId] || [];
  },

  saveBooking(movieId, newBooking) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    if (!data[movieId]) data[movieId] = [];
    data[movieId].push(...newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};
