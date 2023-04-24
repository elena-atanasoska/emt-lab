package mk.ukim.finki.emtlab.model.dto;

import lombok.Data;
import mk.ukim.finki.emtlab.model.Author;
import mk.ukim.finki.emtlab.model.enums.Category;

import jakarta.persistence.*;

@Data
public class BookDto {
    private String name;
    private Category category;
    private long author;
    private int availableCopies;

    public BookDto(String name, Category category, long author, int availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}
