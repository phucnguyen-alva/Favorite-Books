import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://mmjwsldnelcmlwqlzomf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tandzbGRuZWxjbWx3cWx6b21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjcyMTEsImV4cCI6MjA1NzIwMzIxMX0.H4_XgIjXnuFIxU-R0ozLtC9TDXVno4t1aPOa0punpgs"
const supabase = createClient(supabaseUrl, supabaseKey)

async function getFavoriteBooks() {

let { data: favoritebooks, error } = await supabase
  .from('favoritebooks')
  .select('*')

  
  let bookList = document.getElementById('bookfav');
  
  for (let book of favoritebooks) {
     bookList.innerHTML += `<tr><td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td></tr>`;
   }
}

getFavoriteBooks();