package mk.ukim.finki.emtlab.service;

import mk.ukim.finki.emtlab.model.Country;

import java.util.List;

public interface CountryService {

    List<Country> listAll();

    Country findById(Long id);

    Country create(String name, String continent);

}
