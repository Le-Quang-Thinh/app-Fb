export const request_ = () => {
    return { type: 'REQUESTED' }
  };
  
  export const request_Success = (data) => {
    return { type: 'REQUESTED_SUCCEEDED', data: data }
  };
  
  export const request_Error = () => {
    return { type: 'REQUESTED_FAILED' }
  };
  
  export const fetch_ = () => {
    return { type: 'FETCHED' }
  };
  
  export const toggle = () => {
    return { type: 'TOGGLE' }
  };
  export const Play = (url,volums,text) => {
    const audio = new Audio(url);
    audio.play();
    audio.volume = volums/100;
    return {
      type: "PLAY",
      Messages:text
    };
  };

  export const Volumn = (value) =>{
    return {
      type:'VOLUME',
      volums: value
    }
  }