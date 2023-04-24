package mk.ukim.finki.emtlab.model.enums;

import lombok.Data;

import jakarta.persistence.*;

import java.util.Random;


public enum Category {
    NOVEL,
    THRILLER,
    HISTORY,
    FANTASY,
    BIOGRAPHY,
    CLASSICS,
    DRAMA;


    private static final Random PRNG = new Random();

    public static Category randomCategory()  {
        Category[] categories = values();
        return categories[PRNG.nextInt(categories.length)];
    }
}
