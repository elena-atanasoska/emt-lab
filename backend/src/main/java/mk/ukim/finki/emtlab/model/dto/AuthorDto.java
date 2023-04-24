package mk.ukim.finki.emtlab.model.dto;

import jakarta.persistence.ManyToOne;
import lombok.Data;
import mk.ukim.finki.emtlab.model.Country;

@Data
public class AuthorDto {
    private String name;
    private String surname;
    @ManyToOne
    private Long country;

    public AuthorDto(String name, String surname, Long country) {
        this.name = name;
        this.surname = surname;
        this.country = country;
    }
}
