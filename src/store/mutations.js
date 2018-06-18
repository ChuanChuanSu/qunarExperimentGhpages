export default {
  changeCity(state, city) {
    state.city = city;
    try {
      if (localStorage) {
        localStorage.city = city;
      }
    } catch (e) { console.log(e); }
  },
};
