//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

{
    "CocktailDB_API": {
      "base_url": "www.thecocktaildb.com/api/json/v1/1",
      "endpoints": [
        {
          "method": "Search cocktail by name",
          "description": "Search for a cocktail by its name.",
          "url": "/search.php?s={cocktail_name}",
          "example": "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        },
        {
          "method": "List all cocktails by first letter",
          "description": "List all cocktails starting with a specific letter.",
          "url": "/search.php?f={letter}",
          "example": "www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        },
        {
          "method": "Search ingredient by name",
          "description": "Search for an ingredient by its name.",
          "url": "/search.php?i={ingredient_name}",
          "example": "www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka"
        },
        {
          "method": "Lookup full cocktail details by ID",
          "description": "Lookup detailed information about a cocktail by its ID.",
          "url": "/lookup.php?i={cocktail_id}",
          "example": "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"
        },