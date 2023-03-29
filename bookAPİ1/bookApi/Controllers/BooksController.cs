using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace bookSummaryApi.Controllers
{
    [Route ("[controller]")]
    [ApiController]
    public class booksController:ControllerBase
    {
        
        [HttpGet]
        public IActionResult Get()
        {
            var books=GetBooks();
            return Ok(books);
        }
        [HttpGet("{id}")]
public IActionResult GetById(int id)
{
    var books = GetBooks().FirstOrDefault(r => r.id == id);
    if (books == null)
    {
        return NotFound();
    }
    return Ok(books);
}
        private List<Book> GetBooks()
        {
        Book book1=new Book (){
        id=1,
        Title="dsfksfhjk",
        Author="djfsjk",
        Description="dshfjkl",
        Summary="sdj"

        

        };
        Book book2=new Book (){
        id =2,
        Title = "To Kill a Mockingbird",
        Author = "Harper Lee",
        Description = "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
        Summary = "The story takes place during three years of the Great Depression in the fictional Maycomb, Alabama. It follows the life of a young girl, Scout Finch, and her brother, Jem, as they grow up and learn about racism and injustice in their small town."
        };
        Book book3=new Book (){        
        id =3,
        Title = "1984",
        Author = "George Orwell",
        Description = "1984 is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One (formerly known as Great Britain), a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.",
        Summary = "The story follows the life of Winston Smith, a low-ranking member of the ruling Party in London, who begins to rebel against the Party's totalitarianism and falls in love with a fellow rebel."};
        Book book4=new Book (){
            id =4,
        Title="Wuthering Heights",
        Author= "Emily Brontë", 
        Description="This novel is a classic tale of love and revenge set in the Yorkshire moors.", 
        Summary="The novel follows the doomed romance of Catherine Earnshaw and Heathcliff, a mysterious orphan adopted by Catherine's father. Heathcliff's obsession with Catherine leads him to seek vengeance on those who separate them."
        
        };
        Book book5=new Book (){
            id =5,
        Title="Nineteen Eighty-Four",
        Author= "George Orwell",
        Description="This novel is a dystopian vision of a totalitarian society where Big Brother controls everything.",
        Summary="The novel follows the life of Winston Smith, a low-ranking member of the ruling Party who works at the Ministry of Truth. Winston secretly rebels against the Party by keeping a diary and falling in love with Julia, a fellow dissident. However, he soon discovers that the Party is watching his every move and will stop at nothing to crush his spirit."
     

        };
        Book book6=new Book (){
            id =6,
        Title="The Lord of the Rings",
        Author=  "J.R.R. Tolkien", 
        Description="This novel is an epic fantasy adventure that tells the story of the struggle between good and evil in Middle-earth.",
        Summary="The novel follows the quest of Frodo Baggins, a young hobbit who inherits a powerful ring from his uncle Bilbo. Frodo must destroy the ring in the fires of Mount Doom before it falls into the hands of the Dark Lord Sauron, who seeks to conquer all of Middle-earth. Along the way, Frodo is aided by a fellowship of friends and allies, including Gandalf the wizard, Aragorn the ranger, Legolas the elf, Gimli the dwarf and Samwise Gamgee, his loyal companion."
        
        };
        Book book7=new Book (){   id=7,
        Title="Jane Eyre",
        Author= "Charlotte Brontë", 
        Description="This novel is a Gothic romance that follows the life of Jane Eyre, an orphan who becomes a governess at Thornfield Hall.",
        Summary="The novel depicts Jane's growth from a shy and plain girl to a strong and independent woman. Jane falls in love with her employer, Mr. Rochester, a brooding and mysterious man who hides a dark secret in his attic. Jane must overcome many obstacles and challenges to find her true happi "
        };
        Book book8 =new Book () {
               id =8,
        Title="Great Expectations", 
        Author="Charles Dickens", 
        Description="This novel is a bildungsroman that traces the development of Pip, an orphan who dreams of becoming a gentleman.", 
        Summary="The novel chronicles Pip's rise and fall in society, as he encounters various characters and events that shape his character and destiny. These include his benefactor Magwitch, a convict who escapes from prison; his cold-hearted love interest Estella, who is raised by the eccentric Miss Havisham; his loyal friend Joe Gargery, a blacksmith who treats him like a son; and his nemesis Compeyson, a swindler who ruins Magwitch's life."
        
        };
        return new List<Book>{book1,book2,book3,book4,book5,book6,book7,book8};
        }
    }

public class Book
{
    public int id {get; set;}
    public string Title { get; set; }
    public string Author { get; set; }
    public string Summary { get; set; }
    public string Description { get; set; }
}



       
}


