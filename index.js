const initialState = { value: 0 };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return { ...state, value: state.value + 1 };
    case "counter/decrement":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

const store = Redux.createStore(counterReducer);

const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");
const valueEl = document.querySelector("#value");

function render() {
  const state = store.getState();
  valueEl.textContent = state.value;
}

render();

store.subscribe(render);

incrementEl.addEventListener("click", () =>
  store.dispatch({ type: "counter/increment" })
);
decrementEl.addEventListener("click", () =>
  store.dispatch({ type: "counter/decrement" })
);
