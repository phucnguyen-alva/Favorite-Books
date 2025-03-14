import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://mmjwsldnelcmlwqlzomf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tandzbGRuZWxjbWx3cWx6b21mIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTYyNzIxMSwiZXhwIjoyMDU3MjAzMjExfQ.oZR1WKVv8EPWDBhQb7f_ThK7ga5yuS6nnsOuew1DVeQ"
const supabase = createClient(supabaseUrl, supabaseKey)

async function getFavoriteBooks() {

let { data: FavoriteBooks, error } = await supabase
  .from('FavoriteBooks')
  .select('*')

  
  let bookList = document.getElementById('bookfav');
  
  for (let book of FavoriteBooks) {
     bookList.innerHTML += `<tr><td>${book.Title}</td>
     <td>${book.Author}</td>
     <td>${book.ISBN}</td>
    `;
   }
}

getFavoriteBooks();