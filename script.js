const DINNER = [
    // Italian Cuisine
    { name: "Spaghetti Carbonara", category: "Italian" },
    { name: "Lasagna", category: "Italian" },
    { name: "Fettuccine Alfredo", category: "Italian" },
    { name: "Penne Arrabbiata", category: "Italian" },
    { name: "Risotto Mushroom", category: "Italian" },
    { name: "Osso Buco", category: "Italian" },
    { name: "Tiramisu", category: "Italian Dessert" },
    { name: "Eggplant Parmesan", category: "Italian" },
    { name: "Ravioli with Pesto", category: "Italian" },
    { name: "Minestrone Soup", category: "Italian" },
    
    // Mexican Cuisine
    { name: "Chicken Enchiladas", category: "Mexican" },
    { name: "Beef Tacos", category: "Mexican" },
    { name: "Chile Relleno", category: "Mexican" },
    { name: "Carne Asada", category: "Mexican" },
    { name: "Chiles en Nogada", category: "Mexican" },
    { name: "Pollo con Mole", category: "Mexican" },
    { name: "Street Tacos", category: "Mexican" },
    { name: "Quesadillas with Cheese", category: "Mexican" },
    { name: "Pozole Rojo", category: "Mexican" },
    { name: "Chiles Stuffed with Queso", category: "Mexican" },
    
    // American Cuisine
    { name: "Grilled Hamburgers", category: "American" },
    { name: "BBQ Ribs", category: "American" },
    { name: "Fried Chicken", category: "American" },
    { name: "Meatloaf with Mashed Potatoes", category: "American" },
    { name: "Mac and Cheese", category: "American" },
    { name: "Pulled Pork Sandwich", category: "American" },
    { name: "Pot Roast", category: "American" },
    { name: "Grilled Steak", category: "American" },
    { name: "Chicken and Dumplings", category: "American" },
    { name: "New York Cheesecake", category: "American Dessert" },
    
    // Asian Cuisine
    { name: "Kung Pao Chicken", category: "Asian" },
    { name: "Pad Thai", category: "Asian" },
    { name: "Beef Teriyaki", category: "Asian" },
    { name: "Fried Rice", category: "Asian" },
    { name: "Sushi Rolls", category: "Asian" },
    { name: "Ramen Noodles", category: "Asian" },
    { name: "Sesame Chicken", category: "Asian" },
    { name: "Pho", category: "Asian" },
    { name: "General Tso's Chicken", category: "Asian" },
    { name: "Lo Mein Noodles", category: "Asian" },
    
    // Mediterranean/Greek
    { name: "Moussaka", category: "Mediterranean" },
    { name: "Souvlaki", category: "Mediterranean" },
    { name: "Greek Salad with Feta", category: "Mediterranean" },
    { name: "Spanakopita", category: "Mediterranean" },
    { name: "Falafel Wraps", category: "Mediterranean" },
    { name: "Tzatziki with Pita", category: "Mediterranean" },
    { name: "Hummus Platter", category: "Mediterranean" },
    { name: "Tabbouleh Salad", category: "Mediterranean" },
    { name: "Grilled Octopus", category: "Mediterranean" },
    { name: "Baklava", category: "Mediterranean Dessert" },
    
    // Indian Cuisine
    { name: "Butter Chicken", category: "Indian" },
    { name: "Chicken Tikka Masala", category: "Indian" },
    { name: "Saag Paneer", category: "Indian" },
    { name: "Biryani", category: "Indian" },
    { name: "Tandoori Chicken", category: "Indian" },
    { name: "Chana Masala", category: "Indian" },
    { name: "Aloo Gobi", category: "Indian" },
    { name: "Samosas", category: "Indian" },
    { name: "Naan Bread", category: "Indian" },
    { name: "Gulab Jamun", category: "Indian Dessert" },
    
    // French Cuisine
    { name: "Coq au Vin", category: "French" },
    { name: "Beef Bourguignon", category: "French" },
    { name: "Sole Meunière", category: "French" },
    { name: "Duck Confit", category: "French" },
    { name: "Crème Brûlée", category: "French Dessert" },
    { name: "Cassoulet", category: "French" },
    { name: "Escargot", category: "French" },
    { name: "Filet Mignon", category: "French" },
    { name: "Ratatouille", category: "French" },
    { name: "French Onion Soup", category: "French" },
    
    // Seafood
    { name: "Grilled Salmon", category: "Seafood" },
    { name: "Shrimp Scampi", category: "Seafood" },
    { name: "Fish and Chips", category: "Seafood" },
    { name: "Lobster Tails", category: "Seafood" },
    { name: "Crab Cakes", category: "Seafood" },
    { name: "Mussels in White Wine", category: "Seafood" },
    { name: "Clam Chowder", category: "Seafood" },
    { name: "Tuna Steak", category: "Seafood" },
    { name: "Paella", category: "Seafood" },
    { name: "Baked Cod", category: "Seafood" },
    
    // Vegetarian/Vegan
    { name: "Vegetable Stir Fry", category: "Vegetarian" },
    { name: "Bean Chili", category: "Vegetarian" },
    { name: "Stuffed Bell Peppers", category: "Vegetarian" },
    { name: "Veggie Burger", category: "Vegetarian" },
    { name: "Tofu Pad Thai", category: "Vegetarian" },
    { name: "Quinoa Bowl", category: "Vegetarian" },
    { name: "Caprese Salad", category: "Vegetarian" },
    { name: "Veggie Pizza", category: "Vegetarian" },
    { name: "Lentil Soup", category: "Vegetarian" },
    { name: "Buddha Bowl", category: "Vegetarian" },
    
    // Comfort Food
    { name: "Grilled Cheese Sandwich", category: "Comfort Food" },
    { name: "Tomato Soup", category: "Comfort Food" },
    { name: "Baked Beans", category: "Comfort Food" },
    { name: "Cornbread", category: "Comfort Food" },
    { name: "Biscuits and Gravy", category: "Comfort Food" },
    { name: "Turkey Meatballs", category: "Comfort Food" },
    { name: "Chicken Noodle Soup", category: "Comfort Food" },
    { name: "French Toast", category: "Comfort Food" },
    { name: "Pancakes", category: "Comfort Food" },
    { name: "Fried Egg Sandwich", category: "Comfort Food" },
    
    // BBQ/Grilled
    { name: "BBQ Chicken", category: "BBQ" },
    { name: "Grilled Vegetables", category: "BBQ" },
    { name: "Hot Dogs", category: "BBQ" },
    { name: "Beef Brisket", category: "BBQ" },
    { name: "Grilled Corn", category: "BBQ" },
    { name: "BBQ Pulled Chicken", category: "BBQ" },
    { name: "Tri-Tip Steak", category: "BBQ" },
    { name: "Grilled Lamb Chops", category: "BBQ" },
    { name: "Chicken Skewers", category: "BBQ" },
    { name: "Smoked Turkey", category: "BBQ" },
    
    // World Cuisine
    { name: "Shawarma", category: "Middle Eastern" },
    { name: "Falafel", category: "Middle Eastern" },
    { name: "Kimchi and Rice", category: "Korean" },
    { name: "Korean BBQ", category: "Korean" },
    { name: "Bibimbap", category: "Korean" },
    { name: "Tacos al Pastor", category: "Mexican" },
    { name: "Empanadas", category: "Latin American" },
    { name: "Ceviche", category: "Latin American" },
    { name: "Goulash", category: "European" },
    { name: "Schnitzel", category: "European" },
    
    // Breakfast for Dinner
    { name: "Scrambled Eggs with Toast", category: "Breakfast" },
    { name: "Breakfast Burritos", category: "Breakfast" },
    { name: "Waffle and Bacon", category: "Breakfast" },
    { name: "Omelette", category: "Breakfast" },
    { name: "Hash Browns with Eggs", category: "Breakfast" },
    { name: "Breakfast Pizza", category: "Breakfast" },
    { name: "Pancakes and Sausage", category: "Breakfast" },
    { name: "Eggs Benedict", category: "Breakfast" },
    { name: "Breakfast Sandwich", category: "Breakfast" },
    { name: "Shakshuka", category: "Breakfast" },
    
    // Pizza & Pasta Variations
    { name: "Margherita Pizza", category: "Italian" },
    { name: "Pepperoni Pizza", category: "Italian" },
    { name: "Supreme Pizza", category: "Italian" },
    { name: "White Pizza", category: "Italian" },
    { name: "Tortellini Alfredo", category: "Italian" },
    { name: "Gnocchi", category: "Italian" },
    { name: "Baked Ziti", category: "Italian" },
    { name: "Penne Primavera", category: "Italian" },
    { name: "Macaroni and Cheese", category: "Italian-American" },
    { name: "Spaghetti with Meatballs", category: "Italian-American" },
    
    // Light/Healthy Options
    { name: "Grilled Chicken Breast", category: "Healthy" },
    { name: "Steamed Broccoli", category: "Healthy" },
    { name: "Turkey Meatloaf", category: "Healthy" },
    { name: "Salmon with Lemon", category: "Healthy" },
    { name: "Veggie Spring Rolls", category: "Healthy" },
    { name: "Chickpea Salad", category: "Healthy" },
    { name: "Kale Caesar Salad", category: "Healthy" },
    { name: "Turkey Burger", category: "Healthy" },
    { name: "Grilled Fish Tacos", category: "Healthy" },
    { name: "Lean Ground Beef", category: "Healthy" },
    
    // Slow Cooker/Easy Meals
    { name: "Slow Cooker Chili", category: "Easy" },
    { name: "Pulled Pork", category: "Easy" },
    { name: "Slow Cooker Stew", category: "Easy" },
    { name: "Crockpot Chicken", category: "Easy" },
    { name: "Beef Stew", category: "Easy" },
    { name: "Slow Cooker Tacos", category: "Easy" },
    { name: "Crockpot Roast", category: "Easy" },
    { name: "Slow Cooker Curry", category: "Easy" },
    { name: "Crockpot Soup", category: "Easy" },
    { name: "Slow Cooker Ribs", category: "Easy" },
    
    // Spicy Options
    { name: "Spicy Chicken Wings", category: "Spicy" },
    { name: "Spicy Sriracha Noodles", category: "Spicy" },
    { name: "Hot and Spicy Curry", category: "Spicy" },
    { name: "Jalapeño Chicken", category: "Spicy" },
    { name: "Spicy Korean Stew", category: "Spicy" },
    { name: "Ghost Pepper Chili", category: "Spicy" },
    { name: "Spicy Shrimp Pasta", category: "Spicy" },
    { name: "Thai Red Curry", category: "Spicy" },
    { name: "Habanero Tacos", category: "Spicy" },
    { name: "Spicy Beef Satay", category: "Spicy" }
];

const SNACKS = [
    // Classic Movie Snacks
    { name: "Buttered Popcorn", category: "Popcorn" },
    { name: "Caramel Popcorn", category: "Popcorn" },
    { name: "Cheese Popcorn", category: "Popcorn" },
    { name: "Spicy Popcorn", category: "Popcorn" },
    { name: "Kettle Corn", category: "Popcorn" },
    { name: "Movie Theater Popcorn", category: "Popcorn" },
    { name: "Sriracha Popcorn", category: "Popcorn" },
    { name: "Dill Pickle Popcorn", category: "Popcorn" },
    { name: "White Chocolate Popcorn", category: "Popcorn" },
    { name: "Cinnamon Sugar Popcorn", category: "Popcorn" },
    
    // Chocolate Treats
    { name: "Chocolate Chip Cookies", category: "Chocolate" },
    { name: "Brownie", category: "Chocolate" },
    { name: "Chocolate Covered Almonds", category: "Chocolate" },
    { name: "Chocolate Truffles", category: "Chocolate" },
    { name: "Chocolate Fudge", category: "Chocolate" },
    { name: "Chocolate Mousse", category: "Chocolate" },
    { name: "Cocoa Dusted Almonds", category: "Chocolate" },
    { name: "Chocolate Caramels", category: "Chocolate" },
    { name: "Chocolate Pudding", category: "Chocolate" },
    { name: "Chocolate Granola Bars", category: "Chocolate" },
    
    // Candy & Sweets
    { name: "Gummy Bears", category: "Candy" },
    { name: "Sour Gummy Worms", category: "Candy" },
    { name: "Jelly Beans", category: "Candy" },
    { name: "Skittles", category: "Candy" },
    { name: "M&Ms", category: "Candy" },
    { name: "Lollipops", category: "Candy" },
    { name: "Hard Candy", category: "Candy" },
    { name: "Taffy Candy", category: "Candy" },
    { name: "Licorice Twists", category: "Candy" },
    { name: "Sour Patch Kids", category: "Candy" },
    
    // Nuts & Seeds
    { name: "Almonds", category: "Nuts" },
    { name: "Cashews", category: "Nuts" },
    { name: "Pecans", category: "Nuts" },
    { name: "Walnuts", category: "Nuts" },
    { name: "Pistachios", category: "Nuts" },
    { name: "Mixed Nuts", category: "Nuts" },
    { name: "Candied Pecans", category: "Nuts" },
    { name: "Honey Roasted Almonds", category: "Nuts" },
    { name: "Spiced Cashews", category: "Nuts" },
    { name: "Sunflower Seeds", category: "Seeds" },
    
    // Salty Snacks
    { name: "Potato Chips", category: "Salty" },
    { name: "Tortilla Chips", category: "Salty" },
    { name: "Pretzels", category: "Salty" },
    { name: "Cheese Crackers", category: "Salty" },
    { name: "Saltines", category: "Salty" },
    { name: "Goldfish Crackers", category: "Salty" },
    { name: "Chex Mix", category: "Salty" },
    { name: "Wasabi Peas", category: "Salty" },
    { name: "Roasted Chickpeas", category: "Salty" },
    { name: "Dried Seaweed Snack", category: "Salty" },
    
    // Fruit Snacks
    { name: "Apple with Peanut Butter", category: "Fruit" },
    { name: "Banana Chips", category: "Fruit" },
    { name: "Dried Cranberries", category: "Fruit" },
    { name: "Dried Mango", category: "Fruit" },
    { name: "Raisins", category: "Fruit" },
    { name: "Dried Apricots", category: "Fruit" },
    { name: "Dried Blueberries", category: "Fruit" },
    { name: "Fruit Leather", category: "Fruit" },
    { name: "Fresh Strawberries", category: "Fruit" },
    { name: "Orange Slices", category: "Fruit" },
    
    // Dairy Snacks
    { name: "Cheese Cubes", category: "Dairy" },
    { name: "String Cheese", category: "Dairy" },
    { name: "Cheese and Crackers", category: "Dairy" },
    { name: "Yogurt", category: "Dairy" },
    { name: "Greek Yogurt Parfait", category: "Dairy" },
    { name: "Milk and Cookies", category: "Dairy" },
    { name: "Cottage Cheese", category: "Dairy" },
    { name: "Mozzarella Sticks", category: "Dairy" },
    { name: "Cheddar Cheese", category: "Dairy" },
    { name: "Parmesan Crisps", category: "Dairy" },
    
    // Homemade Treats
    { name: "Homemade Trail Mix", category: "Homemade" },
    { name: "Granola Bars", category: "Homemade" },
    { name: "Energy Balls", category: "Homemade" },
    { name: "Banana Bread", category: "Homemade" },
    { name: "Zucchini Bread", category: "Homemade" },
    { name: "Homemade Granola", category: "Homemade" },
    { name: "Cookies and Cream Bites", category: "Homemade" },
    { name: "No-Bake Cheesecake Bites", category: "Homemade" },
    { name: "Homemade Beef Jerky", category: "Homemade" },
    { name: "Date and Almond Bars", category: "Homemade" },
    
    // Dips and Spreads
    { name: "Hummus and Veggies", category: "Dips" },
    { name: "Guacamole and Chips", category: "Dips" },
    { name: "Salsa and Chips", category: "Dips" },
    { name: "Spinach Artichoke Dip", category: "Dips" },
    { name: "Ranch Dip and Veggies", category: "Dips" },
    { name: "Peanut Butter and Crackers", category: "Dips" },
    { name: "Almond Butter and Apple", category: "Dips" },
    { name: "Cream Cheese and Pepperoni", category: "Dips" },
    { name: "Queso Dip and Chips", category: "Dips" },
    { name: "Hummus Wrap", category: "Dips" },
    
    // Soda and Drinks (pairing suggestions)
    { name: "Coca-Cola", category: "Drink" },
    { name: "Sprite", category: "Drink" },
    { name: "Orange Fanta", category: "Drink" },
    { name: "Root Beer Float", category: "Drink" },
    { name: "Lemonade", category: "Drink" },
    { name: "Iced Tea", category: "Drink" },
    { name: "Ginger Ale", category: "Drink" },
    { name: "Hot Chocolate", category: "Drink" },
    { name: "Coffee", category: "Drink" },
    { name: "Milkshake", category: "Drink" },
    
    // Ice Cream & Frozen Treats
    { name: "Vanilla Ice Cream", category: "Frozen" },
    { name: "Chocolate Ice Cream", category: "Frozen" },
    { name: "Strawberry Ice Cream", category: "Frozen" },
    { name: "Mint Chocolate Chip", category: "Frozen" },
    { name: "Cookie Dough Ice Cream", category: "Frozen" },
    { name: "Salted Caramel Ice Cream", category: "Frozen" },
    { name: "Rocky Road Ice Cream", category: "Frozen" },
    { name: "Butter Pecan Ice Cream", category: "Frozen" },
    { name: "Ice Cream Sandwich", category: "Frozen" },
    { name: "Frozen Yogurt", category: "Frozen" },
    
    // Baked Goods
    { name: "Sugar Cookie", category: "Baked" },
    { name: "Oatmeal Raisin Cookie", category: "Baked" },
    { name: "Peanut Butter Cookie", category: "Baked" },
    { name: "Double Chocolate Chip", category: "Baked" },
    { name: "Shortbread Cookie", category: "Baked" },
    { name: "Snickerdoodle", category: "Baked" },
    { name: "Molasses Cookie", category: "Baked" },
    { name: "Biscotti", category: "Baked" },
    { name: "Donuts", category: "Baked" },
    { name: "Cinnamon Roll", category: "Baked" },
    
    // Spicy Snacks
    { name: "Spicy Chips", category: "Spicy" },
    { name: "Ghost Pepper Peanuts", category: "Spicy" },
    { name: "Jalapeño Poppers", category: "Spicy" },
    { name: "Spicy Beef Jerky", category: "Spicy" },
    { name: "Sriracha Almonds", category: "Spicy" },
    { name: "Spicy Pumpkin Seeds", category: "Spicy" },
    { name: "Habanero Cashews", category: "Spicy" },
    { name: "Spicy Popcorn Seasoning", category: "Spicy" },
    { name: "Thai Chili Peanuts", category: "Spicy" },
    { name: "Spicy Wasabi Mix", category: "Spicy" },
    
    // Protein Snacks
    { name: "Protein Bar", category: "Protein" },
    { name: "Trail Mix with Protein", category: "Protein" },
    { name: "Beef Jerky", category: "Protein" },
    { name: "Turkey Jerky", category: "Protein" },
    { name: "Protein Chips", category: "Protein" },
    { name: "Roasted Chickpeas", category: "Protein" },
    { name: "Hard Boiled Eggs", category: "Protein" },
    { name: "Nuts and Seeds Mix", category: "Protein" },
    { name: "Cottage Cheese with Fruit", category: "Protein" },
    { name: "Peanut Butter Bites", category: "Protein" },
    
    // Gourmet/Fancy Snacks
    { name: "Chocolate Mousse", category: "Gourmet" },
    { name: "Brie and Crackers", category: "Gourmet" },
    { name: "Aged Cheddar", category: "Gourmet" },
    { name: "Prosciutto and Melon", category: "Gourmet" },
    { name: "Caviar and Blini", category: "Gourmet" },
    { name: "Smoked Salmon and Cream Cheese", category: "Gourmet" },
    { name: "Pâté and Toast", category: "Gourmet" },
    { name: "Truffle Oil Popcorn", category: "Gourmet" },
    { name: "Goat Cheese and Honey", category: "Gourmet" },
    { name: "Dark Chocolate and Sea Salt", category: "Gourmet" },
    
    // Vegan Snacks
    { name: "Vegan Trail Mix", category: "Vegan" },
    { name: "Vegan Granola Bars", category: "Vegan" },
    { name: "Coconut Chips", category: "Vegan" },
    { name: "Almond Flour Cookies", category: "Vegan" },
    { name: "Tahini Cookies", category: "Vegan" },
    { name: "Chia Seed Pudding", category: "Vegan" },
    { name: "Dates Stuffed with Almonds", category: "Vegan" },
    { name: "Vegan Protein Balls", category: "Vegan" },
    { name: "Cashew Cream", category: "Vegan" },
    { name: "Matcha Energy Bites", category: "Vegan" },
    
    // Seasonal Snacks
    { name: "Pumpkin Seeds", category: "Seasonal" },
    { name: "Gingerbread Cookies", category: "Seasonal" },
    { name: "Candy Corn", category: "Seasonal" },
    { name: "Eggnog", category: "Seasonal" },
    { name: "Pumpkin Spice Everything", category: "Seasonal" },
    { name: "Pecan Pie Bites", category: "Seasonal" },
    { name: "Candy Canes", category: "Seasonal" },
    { name: "Holiday Fudge", category: "Seasonal" },
    { name: "Cranberry Muffin", category: "Seasonal" },
    { name: "Candied Pecans", category: "Seasonal" },
    
    // Fun Mix Options
    { name: "Sweet and Salty Mix", category: "Mix" },
    { name: "Trail Mix Deluxe", category: "Mix" },
    { name: "Chocolate and Pretzel Mix", category: "Mix" },
    { name: "Candy and Popcorn", category: "Mix" },
    { name: "Nuts and Chocolate", category: "Mix" },
    { name: "Fruit and Nut Combo", category: "Mix" },
    { name: "Chip and Dip Combo", category: "Mix" },
    { name: "Sweet Breakfast Mix", category: "Mix" },
    { name: "Savory Party Mix", category: "Mix" },
    { name: "Dessert Medley", category: "Mix" }
];

const MOVIES = [
    // 1970s
    { title: "The Godfather", year: 1972, rating: "R", description: "" },
    { title: "The Godfather Part II", year: 1974, rating: "R", description: "" },
    { title: "A Clockwork Orange", year: 1971, rating: "R", description: "" },
    { title: "Apocalypse Now", year: 1979, rating: "R", description: "" },
    { title: "Rocky", year: 1976, rating: "PG", description: "" },
    { title: "Jaws", year: 1975, rating: "PG", description: "" },
    { title: "Star Wars: Episode IV – A New Hope", year: 1977, rating: "PG", description: "" },
    { title: "Alien", year: 1979, rating: "R", description: "" },
    { title: "Taxi Driver", year: 1976, rating: "R", description: "" },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975, rating: "R", description: "" },
    { title: "The Exorcist", year: 1973, rating: "R", description: "" },
    { title: "Halloween", year: 1978, rating: "R", description: "" },
    { title: "Close Encounters of the Third Kind", year: 1977, rating: "PG", description: "" },
    { title: "The Deer Hunter", year: 1978, rating: "R", description: "" },
    { title: "Monty Python and the Holy Grail", year: 1975, rating: "PG", description: "" },
    { title: "Serpico", year: 1973, rating: "R", description: "" },
    { title: "Chinatown", year: 1974, rating: "R", description: "" },
    { title: "The French Connection", year: 1971, rating: "R", description: "" },
    { title: "Young Frankenstein", year: 1974, rating: "PG", description: "" },
    { title: "Network", year: 1976, rating: "R", description: "" },
    { title: "Rocky II", year: 1979, rating: "PG", description: "" },
    { title: "Smokey and the Bandit", year: 1977, rating: "PG", description: "" },
    { title: "Willy Wonka & the Chocolate Factory", year: 1971, rating: "G", description: "" },
    { title: "Superman", year: 1978, rating: "PG", description: "" },
    { title: "Saturday Night Fever", year: 1977, rating: "R", description: "" },
    { title: "The Omen", year: 1976, rating: "R", description: "" },
    { title: "All the President's Men", year: 1976, rating: "PG", description: "" },
    { title: "The Warriors", year: 1979, rating: "R", description: "" },
    { title: "Mean Streets", year: 1973, rating: "R", description: "" },
    { title: "The Last Picture Show", year: 1971, rating: "R", description: "" },
    { title: "The Conversation", year: 1974, rating: "PG", description: "" },
    { title: "Assault on Precinct 13", year: 1976, rating: "R", description: "" },
    { title: "Carrie", year: 1976, rating: "R", description: "" },
    { title: "Enter the Dragon", year: 1973, rating: "R", description: "" },
    { title: "Dog Day Afternoon", year: 1975, rating: "R", description: "" },
    { title: "Patton", year: 1970, rating: "PG", description: "" },
    { title: "The Sting", year: 1973, rating: "PG", description: "" },
    { title: "The Bad News Bears", year: 1976, rating: "PG", description: "" },
    { title: "Logan's Run", year: 1976, rating: "PG", description: "" },
    { title: "Westworld", year: 1973, rating: "PG", description: "" },
    { title: "The Andromeda Strain", year: 1971, rating: "G", description: "" },
    { title: "The Taking of Pelham 123", year: 1974, rating: "R", description: "" },
    { title: "The Towering Inferno", year: 1974, rating: "PG", description: "" },
    { title: "Papillon", year: 1973, rating: "PG", description: "" },
    { title: "Annie Hall", year: 1977, rating: "PG", description: "" },
    { title: "American Graffiti", year: 1973, rating: "PG", description: "" },
    { title: "Jabberwocky", year: 1977, rating: "PG", description: "" },
    { title: "The Pink Panther Strikes Again", year: 1976, rating: "PG", description: "" },
  
    // 1980s
    { title: "The Empire Strikes Back", year: 1980, rating: "PG", description: "" },
    { title: "Raiders of the Lost Ark", year: 1981, rating: "PG", description: "" },
    { title: "E.T. the Extra-Terrestrial", year: 1982, rating: "PG", description: "" },
    { title: "The Shining", year: 1980, rating: "R", description: "" },
    { title: "Blade Runner", year: 1982, rating: "R", description: "" },
    { title: "Back to the Future", year: 1985, rating: "PG", description: "" },
    { title: "The Terminator", year: 1984, rating: "R", description: "" },
    { title: "Die Hard", year: 1988, rating: "R", description: "" },
    { title: "Ghostbusters", year: 1984, rating: "PG", description: "" },
    { title: "The Goonies", year: 1985, rating: "PG", description: "" },
    { title: "Aliens", year: 1986, rating: "R", description: "" },
    { title: "Raging Bull", year: 1980, rating: "R", description: "" },
    { title: "Scarface", year: 1983, rating: "R", description: "" },
    { title: "Top Gun", year: 1986, rating: "PG", description: "" },
    { title: "The Breakfast Club", year: 1985, rating: "R", description: "" },
    { title: "Ferris Bueller's Day Off", year: 1986, rating: "PG-13", description: "" },
    { title: "The Thing", year: 1982, rating: "R", description: "" },
    { title: "The Princess Bride", year: 1987, rating: "PG", description: "" },
    { title: "Who Framed Roger Rabbit", year: 1988, rating: "PG", description: "" },
    { title: "Stand by Me", year: 1986, rating: "R", description: "" },
    { title: "Indiana Jones and the Temple of Doom", year: 1984, rating: "PG", description: "" },
    { title: "Indiana Jones and the Last Crusade", year: 1989, rating: "PG-13", description: "" },
    { title: "The Karate Kid", year: 1984, rating: "PG", description: "" },
    { title: "The NeverEnding Story", year: 1984, rating: "PG", description: "" },
    { title: "Beverly Hills Cop", year: 1984, rating: "R", description: "" },
    { title: "Gremlins", year: 1984, rating: "PG", description: "" },
    { title: "Platoon", year: 1986, rating: "R", description: "" },
    { title: "Predator", year: 1987, rating: "R", description: "" },
    { title: "Full Metal Jacket", year: 1987, rating: "R", description: "" },
    { title: "Big", year: 1988, rating: "PG", description: "" },
    { title: "Labyrinth", year: 1986, rating: "PG", description: "" },
    { title: "Dirty Dancing", year: 1987, rating: "PG-13", description: "" },
    { title: "When Harry Met Sally", year: 1989, rating: "R", description: "" },
    { title: "The Outsiders", year: 1983, rating: "PG", description: "" },
    { title: "Coming to America", year: 1988, rating: "R", description: "" },
    { title: "Footloose", year: 1984, rating: "PG", description: "" },
    { title: "The Lost Boys", year: 1987, rating: "R", description: "" },
    { title: "Stand and Deliver", year: 1988, rating: "PG", description: "" },
    { title: "Bill & Ted's Excellent Adventure", year: 1989, rating: "PG", description: "" },
    { title: "Little Shop of Horrors", year: 1986, rating: "PG-13", description: "" },
    { title: "WarGames", year: 1983, rating: "PG", description: "" },
    { title: "The Untouchables", year: 1987, rating: "R", description: "" },
    { title: "The Fly", year: 1986, rating: "R", description: "" },
    { title: "Poltergeist", year: 1982, rating: "PG", description: "" },
    { title: "The Color Purple", year: 1985, rating: "PG-13", description: "" },
    { title: "Rain Man", year: 1988, rating: "R", description: "" },
    { title: "First Blood", year: 1982, rating: "R", description: "" },
    { title: "Planes, Trains, and Automobiles", year: 1987, rating: "R", description: "" },
    { title: "The Abyss", year: 1989, rating: "PG-13", description: "" },
    { title: "RoboCop", year: 1987, rating: "R", description: "" },
    { title: "Flashdance", year: 1983, rating: "R", description: "" },
    { title: "My Neighbor Totoro", year: 1988, rating: "G", description: "" },
    { title: "The Dark Crystal", year: 1982, rating: "PG", description: "" },
    { title: "Escape from New York", year: 1981, rating: "R", description: "" },
    { title: "Revenge of the Nerds", year: 1984, rating: "R", description: "" },
    { title: "An American Werewolf in London", year: 1981, rating: "R", description: "" },
    { title: "Beetlejuice", year: 1988, rating: "PG", description: "" },
    { title: "The Great Outdoors", year: 1988, rating: "PG", description: "" },
    { title: "Spaceballs", year: 1987, rating: "PG", description: "" },
    { title: "The Running Man", year: 1987, rating: "R", description: "" },
    { title: "Trading Places", year: 1983, rating: "R", description: "" },
    { title: "Tootsie", year: 1982, rating: "PG", description: "" },
    { title: "Field of Dreams", year: 1989, rating: "PG", description: "" },
    { title: "The Burbs", year: 1989, rating: "PG-13", description: "" },
    { title: "The Color of Money", year: 1986, rating: "R", description: "" },
    { title: "The Hitcher", year: 1986, rating: "R", description: "" },
    { title: "The NeverEnding Story II: The Next Chapter", year: 1989, rating: "PG", description: "" },
    { title: "The Secret of NIMH", year: 1982, rating: "PG", description: "" },
    { title: "Big Trouble in Little China", year: 1986, rating: "PG-13", description: "" },
    { title: "The Adventures of Baron Munchausen", year: 1988, rating: "PG", description: "" },
    { title: "Weird Science", year: 1985, rating: "PG-13", description: "" },
    { title: "Teen Wolf", year: 1985, rating: "PG-13", description: "" },
    { title: "Scanners", year: 1981, rating: "R", description: "" },
    { title: "St. Elmo's Fire", year: 1985, rating: "R", description: "" },
    { title: "Red Dawn", year: 1984, rating: "PG-13", description: "" },
    { title: "The Dead Zone", year: 1983, rating: "R", description: "" },
    { title: "The Elephant Man", year: 1980, rating: "PG", description: "" },
    { title: "The Last Starfighter", year: 1984, rating: "PG", description: "" },
    { title: "Risky Business", year: 1983, rating: "R", description: "" },
    { title: "The Blues Brothers", year: 1980, rating: "R", description: "" },
    { title: "The Golden Child", year: 1986, rating: "PG-13", description: "" },
    { title: "Caddyshack", year: 1980, rating: "R", description: "" },
    { title: "Heathers", year: 1989, rating: "R", description: "" },
    { title: "The Natural", year: 1984, rating: "PG", description: "" },
    { title: "Flash Gordon", year: 1980, rating: "PG", description: "" },
    { title: "Dirty Rotten Scoundrels", year: 1988, rating: "PG", description: "" },
    { title: "Romancing the Stone", year: 1984, rating: "PG", description: "" },
    { title: "Working Girl", year: 1988, rating: "R", description: "" },
    { title: "My Dinner with Andre", year: 1981, rating: "PG", description: "" },
    { title: "Terms of Endearment", year: 1983, rating: "PG", description: "" },
    { title: "Purple Rain", year: 1984, rating: "R", description: "" },
    { title: "Child's Play", year: 1988, rating: "R", description: "" },
    { title: "The Fog", year: 1980, rating: "R", description: "" },
    { title: "Scrooged", year: 1988, rating: "PG-13", description: "" },
    { title: "Airplane!", year: 1980, rating: "PG", description: "" },
    { title: "The Fox and the Hound", year: 1981, rating: "G", description: "" },
    { title: "The Little Mermaid", year: 1989, rating: "G", description: "" },
    { title: "Short Circuit", year: 1986, rating: "PG", description: "" },
    { title: "The Black Cauldron", year: 1985, rating: "PG", description: "" },
    { title: "The Secret of My Success", year: 1987, rating: "PG-13", description: "" },
    { title: "All Dogs Go to Heaven", year: 1989, rating: "G", description: "" },
    { title: "Time Bandits", year: 1981, rating: "PG", description: "" },
    { title: "National Lampoon's Vacation", year: 1983, rating: "R", description: "" },
    { title: "Police Academy", year: 1984, rating: "R", description: "" },
    { title: "Back to the Future Part II", year: 1989, rating: "PG", description: "" },
    { title: "Robocop 2", year: 1990, rating: "R", description: "" },
  
    // 1990s
    { title: "Goodfellas", year: 1990, rating: "R", description: "" },
    { title: "The Silence of the Lambs", year: 1991, rating: "R", description: "" },
    { title: "Terminator 2: Judgment Day", year: 1991, rating: "R", description: "" },
    { title: "Jurassic Park", year: 1993, rating: "PG-13", description: "" },
    { title: "Pulp Fiction", year: 1994, rating: "R", description: "" },
    { title: "The Shawshank Redemption", year: 1994, rating: "R", description: "" },
    { title: "Forrest Gump", year: 1994, rating: "PG-13", description: "" },
    { title: "The Lion King", year: 1994, rating: "G", description: "" },
    { title: "Toy Story", year: 1995, rating: "G", description: "" },
    { title: "Se7en", year: 1995, rating: "R", description: "" },
    { title: "Braveheart", year: 1995, rating: "R", description: "" },
    { title: "The Matrix", year: 1999, rating: "R", description: "" },
    { title: "Fight Club", year: 1999, rating: "R", description: "" },
    { title: "Saving Private Ryan", year: 1998, rating: "R", description: "" },
    { title: "Titanic", year: 1997, rating: "PG-13", description: "" },
    { title: "The Sixth Sense", year: 1999, rating: "PG-13", description: "" },
    { title: "Beauty and the Beast", year: 1991, rating: "G", description: "" },
    { title: "Home Alone", year: 1990, rating: "PG", description: "" },
    { title: "The Big Lebowski", year: 1998, rating: "R", description: "" },
    { title: "Groundhog Day", year: 1993, rating: "PG", description: "" },
    { title: "Aladdin", year: 1992, rating: "G", description: "" },
    { title: "The Green Mile", year: 1999, rating: "R", description: "" },
    { title: "The Fugitive", year: 1993, rating: "PG-13", description: "" },
    { title: "Scream", year: 1996, rating: "R", description: "" },
    { title: "Apollo 13", year: 1995, rating: "PG-13", description: "" },
    { title: "The Truman Show", year: 1998, rating: "PG-13", description: "" },
    { title: "The Rock", year: 1996, rating: "R", description: "" },
    { title: "Léon: The Professional", year: 1994, rating: "R", description: "" },
    { title: "Speed", year: 1994, rating: "R", description: "" },
    { title: "Twister", year: 1996, rating: "PG-13", description: "" },
    { title: "Men in Black", year: 1997, rating: "PG-13", description: "" },
    { title: "Mission: Impossible", year: 1996, rating: "PG-13", description: "" },
    { title: "Starship Troopers", year: 1997, rating: "R", description: "" },
    { title: "Independence Day", year: 1996, rating: "PG-13", description: "" },
    { title: "Heat", year: 1995, rating: "R", description: "" },
    { title: "The Fifth Element", year: 1997, rating: "PG-13", description: "" },
    { title: "Toy Story 2", year: 1999, rating: "G", description: "" },
    { title: "The Iron Giant", year: 1999, rating: "PG", description: "" },
    { title: "American Beauty", year: 1999, rating: "R", description: "" },
    { title: "The Blair Witch Project", year: 1999, rating: "R", description: "" },
    { title: "Clueless", year: 1995, rating: "PG-13", description: "" },
    { title: "Casper", year: 1995, rating: "PG", description: "" },
    { title: "A Bug's Life", year: 1998, rating: "G", description: "" },
    { title: "Armageddon", year: 1998, rating: "PG-13", description: "" },
    { title: "The Mummy", year: 1999, rating: "PG-13", description: "" },
    { title: "Hook", year: 1991, rating: "PG", description: "" },
    { title: "Point Break", year: 1991, rating: "R", description: "" },
    { title: "Bad Boys", year: 1995, rating: "R", description: "" },
    { title: "Star Trek: First Contact", year: 1996, rating: "PG-13", description: "" },
    { title: "The Crow", year: 1994, rating: "R", description: "" },
    { title: "As Good as It Gets", year: 1997, rating: "PG-13", description: "" },
    { title: "Dumb and Dumber", year: 1994, rating: "PG-13", description: "" },
    { title: "The Mask", year: 1994, rating: "PG-13", description: "" },
    { title: "Die Hard with a Vengeance", year: 1995, rating: "R", description: "" },
    { title: "Waterworld", year: 1995, rating: "PG-13", description: "" },
    { title: "The Nightmare Before Christmas", year: 1993, rating: "PG", description: "" },
    { title: "Space Jam", year: 1996, rating: "PG", description: "" },
    { title: "Big Daddy", year: 1999, rating: "PG-13", description: "" },
    { title: "Austin Powers: International Man of Mystery", year: 1997, rating: "PG-13", description: "" },
    { title: "The English Patient", year: 1996, rating: "R", description: "" },
    { title: "Jerry Maguire", year: 1996, rating: "R", description: "" },
    { title: "A Few Good Men", year: 1992, rating: "R", description: "" },
    { title: "The Usual Suspects", year: 1995, rating: "R", description: "" },
    { title: "Trainspotting", year: 1996, rating: "R", description: "" },
    { title: "Philadelphia", year: 1993, rating: "PG-13", description: "" },
    { title: "Good Will Hunting", year: 1997, rating: "R", description: "" },
    { title: "The Birdcage", year: 1996, rating: "R", description: "" },
    { title: "The Mummy Returns", year: 1999, rating: "PG-13", description: "" },
    { title: "Dark City", year: 1998, rating: "R", description: "" },
    { title: "Fear and Loathing in Las Vegas", year: 1998, rating: "R", description: "" },
    { title: "Mission: Impossible 2", year: 2000, rating: "PG-13", description: "" },
    { title: "Fargo", year: 1996, rating: "R", description: "" },
    { title: "American History X", year: 1998, rating: "R", description: "" },
    { title: "The Thin Red Line", year: 1998, rating: "R", description: "" },
    { title: "Sling Blade", year: 1996, rating: "R", description: "" },
    { title: "Seven Years in Tibet", year: 1997, rating: "PG-13", description: "" },
    { title: "The Game", year: 1997, rating: "R", description: "" },
    { title: "The Hunchback of Notre Dame", year: 1996, rating: "G", description: "" },
    { title: "The Lost World: Jurassic Park", year: 1997, rating: "PG-13", description: "" },
    { title: "Anastasia", year: 1997, rating: "G", description: "" },
    { title: "The Saint", year: 1997, rating: "PG-13", description: "" },
    { title: "The Devil's Advocate", year: 1997, rating: "R", description: "" },
    { title: "The Negotiator", year: 1998, rating: "R", description: "" },
    { title: "Rounders", year: 1998, rating: "R", description: "" },
    { title: "Pleasantville", year: 1998, rating: "PG-13", description: "" },
    { title: "Jackie Brown", year: 1997, rating: "R", description: "" },
    { title: "Outbreak", year: 1995, rating: "R", description: "" },
    { title: "The Frighteners", year: 1996, rating: "R", description: "" },
    { title: "Event Horizon", year: 1997, rating: "R", description: "" },
    { title: "Broken Arrow", year: 1996, rating: "R", description: "" },
    { title: "The Cable Guy", year: 1996, rating: "PG-13", description: "" },
    { title: "Demolition Man", year: 1993, rating: "R", description: "" },
    { title: "The Pelican Brief", year: 1993, rating: "PG-13", description: "" },
    { title: "Ghost", year: 1990, rating: "PG-13", description: "" },
    { title: "The Bodyguard", year: 1992, rating: "R", description: "" },
    { title: "Thelma & Louise", year: 1991, rating: "R", description: "" },
    { title: "Sister Act", year: 1992, rating: "PG", description: "" },
    { title: "The Rocketeer", year: 1991, rating: "PG", description: "" },
    { title: "Babe", year: 1995, rating: "G", description: "" },
    { title: "The Long Kiss Goodnight", year: 1996, rating: "R", description: "" },
    { title: "The Insider", year: 1999, rating: "R", description: "" },
    { title: "The Parent Trap", year: 1998, rating: "PG", description: "" },
    { title: "The Prince of Egypt", year: 1998, rating: "PG", description: "" },
    { title: "Scream 2", year: 1997, rating: "R", description: "" },
    { title: "Liar Liar", year: 1997, rating: "PG-13", description: "" },
    { title: "Boys Don't Cry", year: 1999, rating: "R", description: "" },
    { title: "Flubber", year: 1997, rating: "PG", description: "" },
    { title: "The Horse Whisperer", year: 1998, rating: "PG-13", description: "" },
    { title: "Wild Wild West", year: 1999, rating: "PG-13", description: "" },
    { title: "Air Force One", year: 1997, rating: "R", description: "" },
    { title: "Four Weddings and a Funeral", year: 1994, rating: "R", description: "" },
    { title: "The Piano", year: 1993, rating: "R", description: "" },
    { title: "Mulan", year: 1998, rating: "G", description: "" },
    { title: "Jumanji", year: 1995, rating: "PG", description: "" },
    { title: "The Hunt for Red October", year: 1990, rating: "PG", description: "" },
    { title: "The Boondock Saints", year: 1999, rating: "R", description: "" },
    { title: "The Rainmaker", year: 1997, rating: "PG-13", description: "" },
    { title: "A Time to Kill", year: 1996, rating: "R", description: "" },
    { title: "The Quick and the Dead", year: 1995, rating: "R", description: "" },
    { title: "Crimson Tide", year: 1995, rating: "R", description: "" },
    { title: "Galaxy Quest", year: 1999, rating: "PG", description: "" },
    { title: "Bowfinger", year: 1999, rating: "PG-13", description: "" },
    { title: "Deep Impact", year: 1998, rating: "PG-13", description: "" },
    { title: "The General's Daughter", year: 1999, rating: "R", description: "" },
    { title: "The Thomas Crown Affair", year: 1999, rating: "R", description: "" },
    { title: "Contact", year: 1997, rating: "PG", description: "" },
    { title: "Ronin", year: 1998, rating: "R", description: "" },
    { title: "Scream 3", year: 2000, rating: "R", description: "" },
    { title: "Three Kings", year: 1999, rating: "R", description: "" },
    { title: "Eyes Wide Shut", year: 1999, rating: "R", description: "" },
  
    // 2000s
    { title: "Gladiator", year: 2000, rating: "R", description: "" },
    { title: "Memento", year: 2000, rating: "R", description: "" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: "PG-13", description: "" },
    { title: "The Lord of the Rings: The Two Towers", year: 2002, rating: "PG-13", description: "" },
    { title: "The Lord of the Rings: The Return of the King", year: 2003, rating: "PG-13", description: "" },
    { title: "Spider-Man", year: 2002, rating: "PG-13", description: "" },
    { title: "Spider-Man 2", year: 2004, rating: "PG-13", description: "" },
    { title: "The Dark Knight", year: 2008, rating: "PG-13", description: "" },
    { title: "Batman Begins", year: 2005, rating: "PG-13", description: "" },
    { title: "Iron Man", year: 2008, rating: "PG-13", description: "" },
    { title: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, rating: "PG-13", description: "" },
    { title: "The Incredibles", year: 2004, rating: "PG", description: "" },
    { title: "Finding Nemo", year: 2003, rating: "G", description: "" },
    { title: "Shrek", year: 2001, rating: "PG", description: "" },
    { title: "Monsters, Inc.", year: 2001, rating: "G", description: "" },
    { title: "The Bourne Identity", year: 2002, rating: "PG-13", description: "" },
    { title: "The Departed", year: 2006, rating: "R", description: "" },
    { title: "No Country for Old Men", year: 2007, rating: "R", description: "" },
    { title: "There Will Be Blood", year: 2007, rating: "R", description: "" },
    { title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: "R", description: "" },
    { title: "Kill Bill: Vol. 1", year: 2003, rating: "R", description: "" },
    { title: "Kill Bill: Vol. 2", year: 2004, rating: "R", description: "" },
    { title: "Casino Royale", year: 2006, rating: "PG-13", description: "" },
    { title: "The Hangover", year: 2009, rating: "R", description: "" },
    { title: "Superbad", year: 2007, rating: "R", description: "" },
    { title: "Harry Potter and the Sorcerer's Stone", year: 2001, rating: "PG", description: "" },
    { title: "Harry Potter and the Prisoner of Azkaban", year: 2004, rating: "PG", description: "" },
    { title: "Pan's Labyrinth", year: 2006, rating: "R", description: "" },
    { title: "Oldboy", year: 2003, rating: "R", description: "" },
    { title: "Donnie Darko", year: 2001, rating: "R", description: "" },
    { title: "300", year: 2006, rating: "R", description: "" },
    { title: "Avatar", year: 2009, rating: "PG-13", description: "" },
    { title: "District 9", year: 2009, rating: "R", description: "" },
    { title: "I Am Legend", year: 2007, rating: "PG-13", description: "" },
    { title: "Tropic Thunder", year: 2008, rating: "R", description: "" },
    { title: "Up", year: 2009, rating: "PG", description: "" },
    { title: "WALL·E", year: 2008, rating: "G", description: "" },
    { title: "Monsters vs Aliens", year: 2009, rating: "PG", description: "" },
    { title: "Hulk", year: 2003, rating: "PG-13", description: "" },
    { title: "Troy", year: 2004, rating: "R", description: "" },
    { title: "Hot Fuzz", year: 2007, rating: "R", description: "" },
    { title: "Shaun of the Dead", year: 2004, rating: "R", description: "" },
    { title: "Cloverfield", year: 2008, rating: "PG-13", description: "" },
    { title: "Ocean's Eleven", year: 2001, rating: "PG-13", description: "" },
    { title: "Fantastic Four", year: 2005, rating: "PG-13", description: "" },
    { title: "The Hurt Locker", year: 2008, rating: "R", description: "" },
    { title: "Gran Torino", year: 2008, rating: "R", description: "" },
    { title: "The Reader", year: 2008, rating: "R", description: "" },
    { title: "The Last Samurai", year: 2003, rating: "R", description: "" },
    { title: "School of Rock", year: 2003, rating: "PG-13", description: "" },
    { title: "Anchorman: The Legend of Ron Burgundy", year: 2004, rating: "PG-13", description: "" },
    { title: "V for Vendetta", year: 2005, rating: "R", description: "" },
    { title: "The Prestige", year: 2006, rating: "PG-13", description: "" },
    { title: "Slumdog Millionaire", year: 2008, rating: "R", description: "" },
    { title: "The Wrestler", year: 2008, rating: "R", description: "" },
    { title: "American Gangster", year: 2007, rating: "R", description: "" },
    { title: "Wanted", year: 2008, rating: "R", description: "" },
    { title: "King Kong", year: 2005, rating: "PG-13", description: "" },
    { title: "Cinderella Man", year: 2005, rating: "PG-13", description: "" },
    { title: "The Bourne Ultimatum", year: 2007, rating: "PG-13", description: "" },
    { title: "The Curious Case of Benjamin Button", year: 2008, rating: "PG-13", description: "" },
    { title: "American Psycho", year: 2000, rating: "R", description: "" },
    { title: "8 Mile", year: 2002, rating: "R", description: "" },
    { title: "Cast Away", year: 2000, rating: "PG-13", description: "" },
    { title: "Minority Report", year: 2002, rating: "PG-13", description: "" },
    { title: "Collateral", year: 2004, rating: "R", description: "" },
    { title: "Inside Man", year: 2006, rating: "R", description: "" },
    { title: "Zombieland", year: 2009, rating: "R", description: "" },
    { title: "Watchmen", year: 2009, rating: "R", description: "" },
    { title: "Star Trek", year: 2009, rating: "PG-13", description: "" },
    { title: "Children of Men", year: 2006, rating: "R", description: "" },
    { title: "The Others", year: 2001, rating: "PG-13", description: "" },
    { title: "The 40-Year-Old Virgin", year: 2005, rating: "R", description: "" },
    { title: "Wedding Crashers", year: 2005, rating: "R", description: "" },
    { title: "The Pursuit of Happyness", year: 2006, rating: "PG-13", description: "" },
    { title: "Matchstick Men", year: 2003, rating: "PG-13", description: "" },
    { title: "The Terminal", year: 2004, rating: "PG-13", description: "" },
    { title: "Road to Perdition", year: 2002, rating: "R", description: "" },
    { title: "Man on Fire", year: 2004, rating: "R", description: "" },
    { title: "The Assassination of Jesse James by the Coward Robert Ford", year: 2007, rating: "R", description: "" },
    { title: "Ocean's Twelve", year: 2004, rating: "PG-13", description: "" },
    { title: "Ocean's Thirteen", year: 2007, rating: "PG-13", description: "" },
    { title: "The Illusionist", year: 2006, rating: "PG-13", description: "" },
    { title: "The Lincoln Lawyer", year: 2011, rating: "R", description: "" },
    { title: "I, Robot", year: 2004, rating: "PG-13", description: "" },
    { title: "Ladder 49", year: 2004, rating: "PG-13", description: "" },
    { title: "Reign of Fire", year: 2002, rating: "PG-13", description: "" },
    { title: "Gone Baby Gone", year: 2007, rating: "R", description: "" },
    { title: "Enemy at the Gates", year: 2001, rating: "R", description: "" },
    { title: "Blood Diamond", year: 2006, rating: "R", description: "" },
    { title: "Hot Rod", year: 2007, rating: "PG-13", description: "" },
    { title: "Death Proof", year: 2007, rating: "R", description: "" },
    { title: "The Italian Job", year: 2003, rating: "PG-13", description: "" },
    { title: "The Road", year: 2009, rating: "R", description: "" },
    { title: "Constantine", year: 2005, rating: "R", description: "" },
    { title: "The Patriot", year: 2000, rating: "R", description: "" },
    { title: "Mean Girls", year: 2004, rating: "PG-13", description: "" },
    { title: "The Da Vinci Code", year: 2006, rating: "PG-13", description: "" },
    { title: "The Blind Side", year: 2009, rating: "PG-13", description: "" },
    { title: "The Day After Tomorrow", year: 2004, rating: "PG-13", description: "" },
    { title: "Hidalgo", year: 2004, rating: "PG-13", description: "" },
    { title: "The Ring", year: 2002, rating: "PG-13", description: "" },
    { title: "The Village", year: 2004, rating: "PG-13", description: "" },
    { title: "Van Helsing", year: 2004, rating: "PG-13", description: "" },
    { title: "Tears of the Sun", year: 2003, rating: "R", description: "" },
    { title: "House of Flying Daggers", year: 2004, rating: "PG-13", description: "" },
    { title: "The Machinist", year: 2004, rating: "R", description: "" },
    { title: "The Bourne Supremacy", year: 2004, rating: "PG-13", description: "" },
    { title: "Phone Booth", year: 2002, rating: "R", description: "" },
    { title: "Rescue Dawn", year: 2006, rating: "PG-13", description: "" },
    { title: "Shutter Island", year: 2010, rating: "R", description: "" },
    { title: "The Book of Eli", year: 2010, rating: "R", description: "" },
    { title: "The Hangover Part II", year: 2011, rating: "R", description: "" },
    { title: "Poseidon", year: 2006, rating: "PG-13", description: "" },
    { title: "Alpha Dog", year: 2006, rating: "R", description: "" },
    { title: "The Mist", year: 2007, rating: "R", description: "" },
    { title: "30 Days of Night", year: 2007, rating: "R", description: "" },
    { title: "The Taking of Pelham 123", year: 2009, rating: "R", description: "" },
    { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", year: 2005, rating: "PG", description: "" },
    { title: "Dreamgirls", year: 2006, rating: "PG-13", description: "" },
    { title: "The Town", year: 2010, rating: "R", description: "" },
    { title: "Clash of the Titans", year: 2010, rating: "PG-13", description: "" },
    { title: "Hancock", year: 2008, rating: "PG-13", description: "" },
    { title: "National Treasure", year: 2004, rating: "PG", description: "" },
    { title: "National Treasure: Book of Secrets", year: 2007, rating: "PG", description: "" },
    { title: "Pirates of the Caribbean: Dead Man's Chest", year: 2006, rating: "PG-13", description: "" },
    { title: "Pirates of the Caribbean: At World's End", year: 2007, rating: "PG-13", description: "" },
    { title: "Stardust", year: 2007, rating: "PG-13", description: "" },
    { title: "Sunshine", year: 1999, rating: "R", description: "" },
  
    // 2010s
    { title: "Inception", year: 2010, rating: "PG-13", description: "" },
    { title: "The Social Network", year: 2010, rating: "PG-13", description: "" },
    { title: "Mad Max: Fury Road", year: 2015, rating: "R", description: "" },
    { title: "Interstellar", year: 2014, rating: "PG-13", description: "" },
    { title: "The Avengers", year: 2012, rating: "PG-13", description: "" },
    { title: "Avengers: Infinity War", year: 2018, rating: "PG-13", description: "" },
    { title: "Avengers: Endgame", year: 2019, rating: "PG-13", description: "" },
    { title: "Guardians of the Galaxy", year: 2014, rating: "PG-13", description: "" },
    { title: "Black Panther", year: 2018, rating: "PG-13", description: "" },
    { title: "Joker", year: 2019, rating: "R", description: "" },
    { title: "Get Out", year: 2017, rating: "R", description: "" },
    { title: "Hereditary", year: 2018, rating: "R", description: "" },
    { title: "It", year: 2017, rating: "R", description: "" },
    { title: "Frozen", year: 2013, rating: "PG", description: "" },
    { title: "Moana", year: 2016, rating: "PG", description: "" },
    { title: "Inside Out", year: 2015, rating: "PG", description: "" },
    { title: "Toy Story 3", year: 2010, rating: "G", description: "" },
    { title: "Toy Story 4", year: 2019, rating: "G", description: "" },
    { title: "La La Land", year: 2016, rating: "PG-13", description: "" },
    { title: "Whiplash", year: 2014, rating: "R", description: "" },
    { title: "Django Unchained", year: 2012, rating: "R", description: "" },
    { title: "The Wolf of Wall Street", year: 2013, rating: "R", description: "" },
    { title: "Skyfall", year: 2012, rating: "PG-13", description: "" },
    { title: "The Raid: Redemption", year: 2011, rating: "R", description: "" },
    { title: "John Wick", year: 2014, rating: "R", description: "" },
    { title: "Logan", year: 2017, rating: "R", description: "" },
    { title: "Parasite", year: 2019, rating: "R", description: "" },
    { title: "1917", year: 2019, rating: "R", description: "" },
    { title: "The Grand Budapest Hotel", year: 2014, rating: "R", description: "" },
    { title: "Captain America: The Winter Soldier", year: 2014, rating: "PG-13", description: "" },
    { title: "Thor: Ragnarok", year: 2017, rating: "PG-13", description: "" },
    { title: "Deadpool", year: 2016, rating: "R", description: "" },
    { title: "The Hunger Games", year: 2012, rating: "PG-13", description: "" },
    { title: "The Fault in Our Stars", year: 2014, rating: "PG-13", description: "" },
    { title: "Arrival", year: 2016, rating: "PG-13", description: "" },
    { title: "The Conjuring", year: 2013, rating: "R", description: "" },
    { title: "Bird Box", year: 2018, rating: "R", description: "" },
    { title: "The Imitation Game", year: 2014, rating: "PG-13", description: "" },
    { title: "Hacksaw Ridge", year: 2016, rating: "R", description: "" },
    { title: "Zootopia", year: 2016, rating: "PG", description: "" },
    { title: "Rogue One: A Star Wars Story", year: 2016, rating: "PG-13", description: "" },
    { title: "Star Wars: The Force Awakens", year: 2015, rating: "PG-13", description: "" },
    { title: "Frozen II", year: 2019, rating: "PG", description: "" },
    { title: "Baby Driver", year: 2017, rating: "R", description: "" },
    { title: "The Maze Runner", year: 2014, rating: "PG-13", description: "" },
    { title: "The Martian", year: 2015, rating: "PG-13", description: "" },
    { title: "Jojo Rabbit", year: 2019, rating: "PG-13", description: "" },
    { title: "Doctor Sleep", year: 2019, rating: "R", description: "" },
    { title: "American Hustle", year: 2013, rating: "R", description: "" },
    { title: "Creed", year: 2015, rating: "PG-13", description: "" },
    { title: "Creed II", year: 2018, rating: "PG-13", description: "" },
    { title: "Ford v Ferrari", year: 2019, rating: "PG-13", description: "" },
    { title: "Spotlight", year: 2015, rating: "R", description: "" },
    { title: "The Hateful Eight", year: 2015, rating: "R", description: "" },
    { title: "Moonlight", year: 2016, rating: "R", description: "" },
    { title: "Hidden Figures", year: 2016, rating: "PG", description: "" },
    { title: "A Star Is Born", year: 2018, rating: "R", description: "" },
    { title: "Split", year: 2016, rating: "PG-13", description: "" },
    { title: "Sicario", year: 2015, rating: "R", description: "" },
    { title: "The Shape of Water", year: 2017, rating: "R", description: "" },
    { title: "Minions", year: 2015, rating: "PG", description: "" },
    { title: "The Disaster Artist", year: 2017, rating: "R", description: "" },
    { title: "The King's Speech", year: 2010, rating: "PG-13", description: "" },
    { title: "Lincoln", year: 2012, rating: "PG-13", description: "" },
    { title: "Gravity", year: 2013, rating: "PG-13", description: "" },
    { title: "The Nice Guys", year: 2016, rating: "R", description: "" },
    { title: "The Babadook", year: 2014, rating: "Not Rated", description: "" },
    { title: "Edge of Tomorrow", year: 2014, rating: "PG-13", description: "" },
    { title: "The Peanut Butter Falcon", year: 2019, rating: "PG-13", description: "" },
    { title: "Spider-Man: Far From Home", year: 2019, rating: "PG-13", description: "" },
    { title: "Doctor Strange", year: 2016, rating: "PG-13", description: "" },
    { title: "The Revenant", year: 2015, rating: "R", description: "" },
    { title: "The Fighter", year: 2010, rating: "R", description: "" },
    { title: "The Accountant", year: 2016, rating: "R", description: "" },
    { title: "The Founder", year: 2016, rating: "PG-13", description: "" },
    { title: "The Big Short", year: 2015, rating: "R", description: "" },
    { title: "Snowden", year: 2016, rating: "R", description: "" },
    { title: "The Gift", year: 2015, rating: "R", description: "" },
    { title: "The Equalizer", year: 2014, rating: "R", description: "" },
    { title: "The Meg", year: 2018, rating: "PG-13", description: "" },
    { title: "13 Hours", year: 2016, rating: "R", description: "" },
    { title: "Glass", year: 2019, rating: "PG-13", description: "" },
    { title: "John Wick: Chapter 2", year: 2017, rating: "R", description: "" },
    { title: "John Wick: Chapter 3 - Parabellum", year: 2019, rating: "R", description: "" },
    { title: "Three Billboards Outside Ebbing, Missouri", year: 2017, rating: "R", description: "" },
    { title: "Call Me by Your Name", year: 2017, rating: "R", description: "" },
    { title: "Blade Runner 2049", year: 2017, rating: "R", description: "" },
    { title: "Dunkirk", year: 2017, rating: "PG-13", description: "" },
    { title: "Wonder Woman", year: 2017, rating: "PG-13", description: "" },
    { title: "Thor: The Dark World", year: 2013, rating: "PG-13", description: "" },
    { title: "Captain America: The First Avenger", year: 2011, rating: "PG-13", description: "" },
    { title: "Captain America: Civil War", year: 2016, rating: "PG-13", description: "" },
    { title: "Doctor Strange in the Multiverse of Madness", year: 2022, rating: "PG-13", description: "" },
    { title: "Ant-Man", year: 2015, rating: "PG-13", description: "" },
    { title: "Ant-Man and the Wasp", year: 2018, rating: "PG-13", description: "" },
    { title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, rating: "PG-13", description: "" },
    { title: "Eternals", year: 2021, rating: "PG-13", description: "" },
    { title: "Black Widow", year: 2021, rating: "PG-13", description: "" },
  
    // 2020s
    { title: "Dune", year: 2021, rating: "PG-13", description: "" },
    { title: "Dune: Part Two", year: 2024, rating: "PG-13", description: "" },
    { title: "Top Gun: Maverick", year: 2022, rating: "PG-13", description: "" },
    { title: "Spider-Man: No Way Home", year: 2021, rating: "PG-13", description: "" },
    { title: "Everything Everywhere All at Once", year: 2022, rating: "R", description: "" },
    { title: "Oppenheimer", year: 2023, rating: "R", description: "" },
    { title: "Barbie", year: 2023, rating: "PG-13", description: "" },
    { title: "The Batman", year: 2022, rating: "PG-13", description: "" },
    { title: "A Quiet Place Part II", year: 2021, rating: "PG-13", description: "" },
    { title: "The Invisible Man", year: 2020, rating: "R", description: "" },
    { title: "Soul", year: 2020, rating: "PG", description: "" },
    { title: "Turning Red", year: 2022, rating: "PG", description: "" },
    { title: "Encanto", year: 2021, rating: "PG", description: "" },
    { title: "No Time to Die", year: 2021, rating: "PG-13", description: "" },
    { title: "Mission: Impossible – Dead Reckoning Part One", year: 2023, rating: "PG-13", description: "" },
    { title: "The Suicide Squad", year: 2021, rating: "R", description: "" },
    { title: "Knives Out", year: 2019, rating: "PG-13", description: "" },
    { title: "Glass Onion: A Knives Out Mystery", year: 2022, rating: "PG-13", description: "" },
    { title: "A Quiet Place", year: 2018, rating: "PG-13", description: "" },
    { title: "Nope", year: 2022, rating: "R", description: "" },
    { title: "Luca", year: 2021, rating: "PG", description: "" },
    { title: "Wonka", year: 2023, rating: "PG", description: "" },
    { title: "King Richard", year: 2021, rating: "PG-13", description: "" },
    { title: "The Whale", year: 2022, rating: "R", description: "" },
    { title: "The Menu", year: 2022, rating: "R", description: "" },
    { title: "The Mitchells vs the Machines", year: 2021, rating: "PG", description: "" },
    { title: "Evil Dead Rise", year: 2023, rating: "R", description: "" },
    { title: "Smile", year: 2022, rating: "R", description: "" },
    { title: "Uncharted", year: 2022, rating: "PG-13", description: "" },
    { title: "Red Notice", year: 2021, rating: "PG-13", description: "" },
    { title: "The Adam Project", year: 2022, rating: "PG-13", description: "" },
    { title: "The Gray Man", year: 2022, rating: "PG-13", description: "" },
    { title: "Tenet", year: 2020, rating: "PG-13", description: "" },
    { title: "The Little Things", year: 2021, rating: "R", description: "" },
    { title: "Creed III", year: 2023, rating: "PG-13", description: "" },
    { title: "Elvis", year: 2022, rating: "PG-13", description: "" },
    { title: "Bullet Train", year: 2022, rating: "R", description: "" },
    { title: "Judas and the Black Messiah", year: 2021, rating: "R", description: "" },
    { title: "Free Guy", year: 2021, rating: "PG-13", description: "" },
    { title: "Jungle Cruise", year: 2021, rating: "PG-13", description: "" },
    { title: "Dungeons & Dragons: Honor Among Thieves", year: 2023, rating: "PG-13", description: "" },
    { title: "The Creator", year: 2023, rating: "PG-13", description: "" },
    { title: "The Tomorrow War", year: 2021, rating: "PG-13", description: "" },
    { title: "Killers of the Flower Moon", year: 2023, rating: "R", description: "" },
    { title: "Past Lives", year: 2023, rating: "PG-13", description: "" },
    { title: "Talk to Me", year: 2022, rating: "R", description: "" },
    { title: "M3GAN", year: 2023, rating: "PG-13", description: "" },
    { title: "Cocaine Bear", year: 2023, rating: "R", description: "" },
    { title: "Maestro", year: 2023, rating: "R", description: "" },
    { title: "American Fiction", year: 2023, rating: "R", description: "" },
    { title: "Anatomy of a Fall", year: 2023, rating: "R", description: "" },
    { title: "Poor Things", year: 2023, rating: "R", description: "" },
    { title: "Aftersun", year: 2022, rating: "PG-13", description: "" },
    { title: "All Quiet on the Western Front", year: 2022, rating: "R", description: "" },
    { title: "Close", year: 2022, rating: "Not Rated", description: "" },
    { title: "Tár", year: 2022, rating: "R", description: "" },
    { title: "Avatar: The Way of Water", year: 2022, rating: "PG-13", description: "" },
    { title: "Aquaman and the Lost Kingdom", year: 2023, rating: "PG-13", description: "" },
    { title: "Aquaman", year: 2018, rating: "PG-13", description: "" },
    { title: "Deadpool & Wolverine", year: 2024, rating: "R", description: "" },
    { title: "Inside Out 2", year: 2024, rating: "PG", description: "" },
    { title: "Twisters", year: 2024, rating: "PG-13", description: "" }
];

let pickBtn, pickAgainBtn, movieCard, movieTitle, movieMeta, movieDescription;
let dinnerBtn, dinnerAgainBtn, dinnerCard, dinnerName, dinnerDescription;
let snackBtn, snackAgainBtn, snackCard, snackName, snackDescription;

// ============================================
// MOVIE PICKER FUNCTIONS
// ============================================

function pickRandomMovie() {
    try {
        // Validate MOVIES array exists
        if (!window.MOVIES || !Array.isArray(window.MOVIES) || window.MOVIES.length === 0) {
            console.error('❌ MOVIES array not found or is empty');
            if (movieTitle) movieTitle.textContent = 'Error: Movie list not loaded';
            if (movieCard) movieCard.classList.remove('hidden');
            return;
        }

        // Generate random index
        const randomIndex = Math.floor(Math.random() * window.MOVIES.length);
        const selectedMovie = window.MOVIES[randomIndex];

        // Validate movie object
        if (!selectedMovie || !selectedMovie.title) {
            console.error('❌ Invalid movie object:', selectedMovie);
            if (movieTitle) movieTitle.textContent = 'Error: Invalid movie data';
            if (movieCard) movieCard.classList.remove('hidden');
            return;
        }

        // Update UI with selected movie
        updateMovieCard(selectedMovie);

        // Show card with animation
        if (movieCard) {
            movieCard.classList.remove('hidden');
        }

        // Analytics
        trackMovieSelection(selectedMovie);

    } catch (error) {
        console.error('❌ Error in pickRandomMovie:', error);
        if (movieTitle) movieTitle.textContent = 'Error: ' + error.message;
        if (movieCard) movieCard.classList.remove('hidden');
    }
}

function updateMovieCard(movie) {
    try {
        if (!movieTitle || !movieMeta || !movieDescription) {
            console.error('❌ Movie card elements not initialized');
            return;
        }

        // Title
        movieTitle.textContent = movie.title || 'Unknown Title';

        // Year and Rating
        const year = movie.year || 'N/A';
        const rating = movie.rating || 'Not Rated';
        movieMeta.innerHTML = `
            <span class="movie-year">${year}</span>
            <span class="movie-rating">${rating}</span>
        `;

        // Description with fallback text
        if (movie.description && movie.description.trim() !== '') {
            movieDescription.textContent = movie.description;
        } else {
            movieDescription.textContent = 'Short description coming soon.';
        }

    } catch (error) {
        console.error('❌ Error updating movie card:', error);
    }
}

// ============================================
// DINNER PICKER FUNCTIONS
// ============================================

function pickRandomDinner() {
    try {
        // Validate DINNER array exists
        if (!window.DINNER || !Array.isArray(window.DINNER) || window.DINNER.length === 0) {
            console.error('❌ DINNER array not found or is empty');
            if (dinnerName) dinnerName.textContent = 'Error: Dinner list not loaded';
            if (dinnerCard) dinnerCard.classList.remove('hidden');
            return;
        }

        // Generate random index
        const randomIndex = Math.floor(Math.random() * window.DINNER.length);
        const selectedDinner = window.DINNER[randomIndex];

        // Validate dinner object
        if (!selectedDinner || !selectedDinner.name) {
            console.error('❌ Invalid dinner object:', selectedDinner);
            if (dinnerName) dinnerName.textContent = 'Error: Invalid dinner data';
            if (dinnerCard) dinnerCard.classList.remove('hidden');
            return;
        }

        // Update UI with selected dinner
        updateDinnerCard(selectedDinner);

        // Show card with animation
        if (dinnerCard) {
            dinnerCard.classList.remove('hidden');
        }

        console.log('✅ Dinner selected:', selectedDinner.name);

    } catch (error) {
        console.error('❌ Error in pickRandomDinner:', error);
        if (dinnerName) dinnerName.textContent = 'Error: ' + error.message;
        if (dinnerCard) dinnerCard.classList.remove('hidden');
    }
}

function updateDinnerCard(dinner) {
    try {
        if (!dinnerName || !dinnerDescription) {
            console.error('❌ Dinner card elements not initialized');
            return;
        }

        // Name
        dinnerName.textContent = dinner.name || 'Unknown Dinner';

        // Description with category
        dinnerDescription.textContent = `Category: ${dinner.category || 'General'} • Perfect for movie night!`;

    } catch (error) {
        console.error('❌ Error updating dinner card:', error);
    }
}

// ============================================
// SNACK PICKER FUNCTIONS
// ============================================

function pickRandomSnack() {
    try {
        // Validate SNACKS array exists
        if (!window.SNACKS || !Array.isArray(window.SNACKS) || window.SNACKS.length === 0) {
            console.error('❌ SNACKS array not found or is empty');
            if (snackName) snackName.textContent = 'Error: Snack list not loaded';
            if (snackCard) snackCard.classList.remove('hidden');
            return;
        }

        // Generate random index
        const randomIndex = Math.floor(Math.random() * window.SNACKS.length);
        const selectedSnack = window.SNACKS[randomIndex];

        // Validate snack object
        if (!selectedSnack || !selectedSnack.name) {
            console.error('❌ Invalid snack object:', selectedSnack);
            if (snackName) snackName.textContent = 'Error: Invalid snack data';
            if (snackCard) snackCard.classList.remove('hidden');
            return;
        }

        // Update UI with selected snack
        updateSnackCard(selectedSnack);

        // Show card with animation
        if (snackCard) {
            snackCard.classList.remove('hidden');
        }

        console.log('✅ Snack selected:', selectedSnack.name);

    } catch (error) {
        console.error('❌ Error in pickRandomSnack:', error);
        if (snackName) snackName.textContent = 'Error: ' + error.message;
        if (snackCard) snackCard.classList.remove('hidden');
    }
}

function updateSnackCard(snack) {
    try {
        if (!snackName || !snackDescription) {
            console.error('❌ Snack card elements not initialized');
            return;
        }

        // Name
        snackName.textContent = snack.name || 'Unknown Snack';

        // Description with category
        snackDescription.textContent = `Category: ${snack.category || 'General'} • The perfect movie snack!`;

    } catch (error) {
        console.error('❌ Error updating snack card:', error);
    }
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

function attachEventListeners() {
    // MOVIE PICKER LISTENERS
    if (pickBtn) {
        pickBtn.addEventListener('click', () => {
            pickRandomMovie();
            pickBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                pickBtn.style.transform = 'scale(1)';
            }, 100);
        });
    }

    if (pickAgainBtn) {
        pickAgainBtn.addEventListener('click', () => {
            movieCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomMovie();
                movieCard.style.opacity = '1';
            }, 300);
        });
    }

    // DINNER PICKER LISTENERS
    if (dinnerBtn) {
        dinnerBtn.addEventListener('click', () => {
            pickRandomDinner();
            dinnerBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                dinnerBtn.style.transform = 'scale(1)';
            }, 100);
        });
    }

    if (dinnerAgainBtn) {
        dinnerAgainBtn.addEventListener('click', () => {
            dinnerCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomDinner();
                dinnerCard.style.opacity = '1';
            }, 300);
        });
    }

    // SNACK PICKER LISTENERS
    if (snackBtn) {
        snackBtn.addEventListener('click', () => {
            pickRandomSnack();
            snackBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                snackBtn.style.transform = 'scale(1)';
            }, 100);
        });
    }

    if (snackAgainBtn) {
        snackAgainBtn.addEventListener('click', () => {
            snackCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomSnack();
                snackCard.style.opacity = '1';
            }, 300);
        });
    }

    console.log('✅ All event listeners attached successfully');
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Space or Enter to pick
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        
        // Determine which button is focused
        if (document.activeElement === pickAgainBtn) {
            pickAgainBtn.click();
        } else if (document.activeElement === dinnerAgainBtn) {
            dinnerAgainBtn.click();
        } else if (document.activeElement === snackAgainBtn) {
            snackAgainBtn.click();
        } else {
            // Default to movie picker if nothing specific is focused
            if (pickBtn) pickBtn.click();
        }
    }
});

// ============================================
// ANALYTICS TRACKING
// ============================================

function trackMovieSelection(movie) {
    try {
        console.log('Movie selected:', {
            title: movie.title,
            year: movie.year,
            rating: movie.rating,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Analytics error:', error);
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 Movie Picker Initializing...');

    // Initialize Movie Elements
    pickBtn = document.getElementById('pickBtn');
    pickAgainBtn = document.getElementById('pickAgainBtn');
    movieCard = document.getElementById('movieCard');
    movieTitle = document.getElementById('movie-title');
    movieMeta = document.getElementById('movie-meta');
    movieDescription = document.getElementById('movie-description');

    // Initialize Dinner Elements
    dinnerBtn = document.getElementById('dinnerBtn');
    dinnerAgainBtn = document.getElementById('dinnerAgainBtn');
    dinnerCard = document.getElementById('dinnerCard');
    dinnerName = document.getElementById('dinner-name');
    dinnerDescription = document.getElementById('dinner-description');

    // Initialize Snack Elements
    snackBtn = document.getElementById('snackBtn');
    snackAgainBtn = document.getElementById('snackAgainBtn');
    snackCard = document.getElementById('snackCard');
    snackName = document.getElementById('snack-name');
    snackDescription = document.getElementById('snack-description');

    // Validate all critical elements exist
    const essentialElements = [
        { name: 'pickBtn', element: pickBtn },
        { name: 'dinnerBtn', element: dinnerBtn },
        { name: 'snackBtn', element: snackBtn },
        { name: 'movieCard', element: movieCard },
        { name: 'dinnerCard', element: dinnerCard },
        { name: 'snackCard', element: snackCard }
    ];

    let allElementsFound = true;
    essentialElements.forEach(el => {
        if (!el.element) {
            console.error(`❌ Missing element: ${el.name}`);
            allElementsFound = false;
        }
    });

    if (!allElementsFound) {
        console.error('❌ ERROR: Some DOM elements not found!');
        return;
    }

    // Verify data arrays are loaded (with graceful fallbacks)
    let moviesLoaded = window.MOVIES && window.MOVIES.length > 0;
    let dinnersLoaded = window.DINNER && window.DINNER.length > 0;  // Changed: DINNER (singular)
    let snacksLoaded = window.SNACKS && window.SNACKS.length > 0;

    if (!moviesLoaded) {
        console.warn('⚠️ MOVIES array not loaded - Movie Picker will not work');
        // Create empty array as fallback
        window.MOVIES = [{ title: 'Error: Movies not loaded', year: 0, rating: 'N/A', description: 'Movie data file missing' }];
    } else {
        console.log(`✅ MOVIES loaded: ${window.MOVIES.length} movies`);
    }

    if (!dinnersLoaded) {
        console.warn('⚠️ DINNER array not loaded - Dinner Picker will not work');
        // Create empty array as fallback
        window.DINNER = [{ name: 'Error: Dinner not loaded', category: 'Data Missing' }];
    } else {
        console.log(`✅ DINNER loaded: ${window.DINNER.length} dinners`);
    }

    if (!snacksLoaded) {
        console.warn('⚠️ SNACKS array not loaded - Snack Picker will not work');
        // Create empty array as fallback
        window.SNACKS = [{ name: 'Error: Snacks not loaded', category: 'Data Missing' }];
    } else {
        console.log(`✅ SNACKS loaded: ${window.SNACKS.length} snacks`);
    }

    console.log(`✅ All data loaded successfully!`);
    console.log(`   • Movies: ${window.MOVIES.length}`);
    console.log(`   • Dinners: ${window.DINNER.length}`);
    console.log(`   • Snacks: ${window.SNACKS.length}`);

    // Attach event listeners
    attachEventListeners();

    // Add focus styling for accessibility
    [pickBtn, dinnerBtn, snackBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('focus', function() {
                this.style.outline = `2px solid #d4af37`;
                this.style.outlineOffset = '2px';
            });
            btn.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        }
    });

    console.log('🎉 Movie Picker Ready!');
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`⏱️ Page load time: ${pageLoadTime}ms`);
    });
}