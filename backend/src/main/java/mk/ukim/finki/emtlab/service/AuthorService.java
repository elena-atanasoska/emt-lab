package mk.ukim.finki.emtlab.service;

import mk.ukim.finki.emtlab.model.Author;
import mk.ukim.finki.emtlab.model.Book;
import mk.ukim.finki.emtlab.model.Country;
import mk.ukim.finki.emtlab.model.dto.BookDto;

import java.util.List;

public interface AuthorService {
        List<Author> listAll();

        Author findById(Long id);

        Author create(String name, String surname, Long countryId);


}
