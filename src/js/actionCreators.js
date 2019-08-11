export const addTodo = ( payload ) => {
  return {
    type: 'ADD_TODO',
    id: payload.id,
    text: payload.text,
  }
};

export const completeTodo = ( payload ) => {
  return {
    type: 'COMPLETE_TODO',
    id: payload.id,
  }
};

export const deleteTodo = ( payload ) => {
  return {
    type: 'DELETE_TODO',
    id: payload.id,
  }
};

export const editTodo = ( payload ) => {
  return {
    type: 'EDIT_TODO',
    id: payload.id,
  }
};

export const editedTodo = ( payload ) => {
  return {
    type: 'EDITED_TODO',
    text: payload.text,
    id: payload.id,
  }
};

export const toggleVisibilityFilter = (filter) => {
  return {
    type: 'TOGGLE_VISIBILITY',
    filter
  }
}


export const add = ( text ) => {
  return {
    type: 'ADD',
  }
};

