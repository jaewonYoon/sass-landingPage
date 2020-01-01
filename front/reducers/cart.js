const initialState = {
    isAddingCart: false,
    isRemovingCart: false,
    isEditingCart: false,
    addingCartError: '',
    removingCartError: '',
    editingCartError: '',
    purchaseList: [],
}

export const LOAD_MAIN_CART_REQUEST = 'LOAD_MAIN_CART_REQUEST';
export const LOAD_MAIN_CART_SUCCESS = 'LOAD_MAIN_CART_SUCCESS';
export const LOAD_MAIN_CART_FAILURE = 'LOAD_MAIN_CART_FAILURE';

export const ADD_MAIN_CART_REQUEST = 'ADD_MAIN_CART_REQUEST';
export const ADD_MAIN_CART_SUCCESS = 'ADD_MAIN_CART_SUCCESS';
export const ADD_MAIN_CART_FAILURE = 'ADD_MAIN_CART_FAILURE';

export const REMOVE_MAIN_CART_REQUEST = 'REMOVE_MAIN_CART_REQUEST';
export const REMOVE_MAIN_CART_SUCCESS = 'REMOVE_MAIN_CART_SUCCESS';
export const REMOVE_MAIN_CART_FAILURE = 'REMOVE_MAIN_CART_FAILURE';

export const EDIT_MAIN_CART_REQUEST = 'EDIT_MAIN_CART_REQUEST';
export const EDIT_MAIN_CART_SUCCESS = 'EDIT_MAIN_CART_SUCCESS';
export const EDIT_MAIN_CART_FAILURE = 'EDIT_MAIN_CART_FAILURE';

export default (state = initialState, action) => {
    switch(action.type){
        case LOAD_MAIN_CART_REQUEST : {
            return {
                ...state,
                isAddingCart : true,
                addingCartError: '',
            }
        }
        case LOAD_MAIN_CART_SUCCESS : {
            return {
                ...state,
                isAddingCart : false, 
                purchaseList: []
            }
        }
        default: {
            return {
                ...state 
            }
        }
    }
}; 

