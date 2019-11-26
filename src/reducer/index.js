const initialState = {
    data:[] ,
    loading: false,
    error: false,
    volums: 50,
    TToggle: true,
    Messages:'Hello'
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REQUESTED':
        return {
          data: '',
          loading: true,
          error: false,
          volums: state.volums ,
          TToggle: true

        };
      case 'REQUESTED_SUCCEEDED':
        return {
          data: action.data,
          loading: false,
          error: false,
          volums :state.volums ,
          TToggle: true,
          Messages:state.Messages
        };
      case 'REQUESTED_FAILED':
        return {
          data: '',
          loading: false,
          error: true,
          volums :state.volums ,
          TToggle: true
        };
    case 'TOGGLE':
        return {
            data:state.data,
            TToggle: !state.TToggle,
            volums:state.volums ,
          Messages:state.Messages
          };
    case 'PLAY':
      return {
          data:state.data,
          TToggle: true,
          volums: state.volums,
          Messages:action.Messages,
        };
      case 'VOLUME':
      return {
          data:state.data,
          TToggle: true,
          volums:action.volums,
          Messages:state.Messages
        };
      default:
        return state;
    }
  };
  export default reducer;