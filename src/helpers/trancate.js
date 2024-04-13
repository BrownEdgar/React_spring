const trancate = (text = "", symbols = 50) => {
    return text.length <= symbols
      ? text
      : text.slice(0, symbols) + '...'
  }
  
  export default trancate