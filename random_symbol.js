function random_symbol() {
  random_value = Math.floor(Math.random() * 10175) + 1  
  return String.fromCharCode(random_value);
}