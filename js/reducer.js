let state;// = {count: 0};

function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

document.addEventListener('click', e => {
  dispatch({type: 'INCREASE_COUNT'})
  console.log(e.target.children[1])
})

// render()
dispatch({type: '@@INIT'})