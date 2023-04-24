package mk.ukim.finki.emtlab.config;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import mk.ukim.finki.emtlab.model.Author;
import mk.ukim.finki.emtlab.model.Book;
import mk.ukim.finki.emtlab.model.Country;
import mk.ukim.finki.emtlab.model.dto.BookDto;
import mk.ukim.finki.emtlab.model.enums.Category;
import mk.ukim.finki.emtlab.repository.AuthorRepository;
import mk.ukim.finki.emtlab.repository.BookRepository;
import mk.ukim.finki.emtlab.repository.CountryRepository;
import mk.ukim.finki.emtlab.service.AuthorService;
import mk.ukim.finki.emtlab.service.BookService;
import mk.ukim.finki.emtlab.service.CountryService;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
@AllArgsConstructor
public class DataInitializer {

    private List<Author> authors;
    private List<Book> books;
    private List<Country> countries;
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;
    private final CountryRepository countryRepository;

    @PostConstruct
    public void init() {;
        Country c1 = new Country("Macedonia","Europe");
        Country c2 = new Country("Russia","Europe");
        Country c3 = new Country("USA","North America");
        Country c4 = new Country("England","Europe");
        countries.add(c1);
        countries.add(c2);
        countries.add(c3);
        countries.add(c4);
        countryRepository.saveAll(countries);

        Author a1 = new Author("F. Scott","Fitzgerald",c3);
        Author a2 = new Author("Leo" ,"Tolstoy",c2);
        Author a3 = new Author("Gillian", "Flynn",c3);
        Author a4 = new Author("J. K.", "Rowling",c4);
        Author a5 = new Author("Fyodor", "Dostoevsky",c2);
        authors.add(a1);
        authors.add(a2);
        authors.add(a3);
        authors.add(a4);
        authors.add(a5);
        authorRepository.saveAll(authors);

        Book b1 = new Book("The Great Gatsby", Category.NOVEL,a1,18);
        Book b2 = new Book("Anna Karenina", Category.NOVEL,a2,9);
        Book b3 = new Book("Gone Girl", Category.THRILLER,a3,27);
        Book b4 = new Book("Harry Potter and the Philosopher's Stone", Category.FANTASY,a4,13);
        Book b5 = new Book("Harry Potter and the Chamber of Secrets", Category.FANTASY,a4,11);
        Book b6 = new Book("Crime and Punishment", Category.CLASSICS,a5,4);
        books.add(b1);
        books.add(b2);
        books.add(b3);
        books.add(b4);
        books.add(b5);
        books.add(b6);
        bookRepository.saveAll(books);
    }

}
