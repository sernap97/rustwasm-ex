fn main() {
use wasm_bindgen::prelude::*;
 
#[wasm_bindgen(start)]
pub fn run() {
   algebra();
}
 
#[wasm_bindgen]
extern "C" {
   #[wasm_bindgen(js_namespace = console)]
   fn log(s: &str);
 
   #[wasm_bindgen(js_namespace = console, js_name = log)]
   fn log_u32(a: u32);
 
   #[wasm_bindgen(js_namespace = console, js_name = log)]
   fn log_many(a: &str, b: &str);
}
 
macro_rules! console_log {
   ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}
 
 
fn algebra(){
   console_log!("{}", 5u32.pow(7));
 
} 
}
