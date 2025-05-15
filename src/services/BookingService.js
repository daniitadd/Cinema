const STORAGE_KEY = "bookings";
const USERS_KEY = "userData";

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
  },

  saveUserData(userInfo) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    users.push(userInfo);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  }
};
