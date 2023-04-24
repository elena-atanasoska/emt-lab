package mk.ukim.finki.emtlab.model;

import lombok.Data;
import mk.ukim.finki.emtlab.model.enums.Category;


import jakarta.persistence.*;

@Data
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    String name;
    @Enumerated(value = EnumType.STRING)
    Category category;
    @ManyToOne
    Author author;
    int availableCopies;

    public Book(String name, Category category, Author author, Integer availableCopies) {

        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }

    public Book() {

    }
}
