export type MenuItem = {
  name: string;
  price: number;
  description?: string;
};

export type MenuCategory = {
  name: string;
  slug: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    name: "Mezedes",
    slug: "mezedes",
    items: [
      {
        name: "Tzatziki",
        price: 3.8,
        description:
          "Strained Greek yogurt, cucumber, dill, garlic, olive oil",
      },
      {
        name: "Melitzanosalata",
        price: 4,
        description: "Roasted eggplant dip, pomegranate, lemon paste",
      },
      {
        name: "Feta Mousse",
        price: 5.5,
        description: "Whipped feta cheese, honey, pita",
      },
      {
        name: "Htipiti",
        price: 3.5,
        description: "Spicy feta pepper dip",
      },
      {
        name: "White Hummus",
        price: 3.5,
        description: "Dried raisin olive oil, sauteed pine nuts, mint",
      },
    ],
  },
  {
    name: "Salads",
    slug: "salads",
    items: [
      {
        name: "Nina's Greek Salad",
        price: 4,
        description:
          "Wild greens, tomato, Kalamata olives, mix cheese, red onion, pulled olives, vinaigrette",
      },
      {
        name: "Burrata",
        price: 5.5,
        description:
          "Piquillo peppers, balsamic cream, caramelized toasted pine nuts, mozzarella, cherry tomato, basil oil",
      },
      {
        name: "Athens Salad",
        price: 5.5,
        description:
          "Whipped feta cheese, sweet corn, pita, parmesan cheese, romaine lettuce",
      },
    ],
  },
  {
    name: "Appetizers",
    slug: "appetizers",
    items: [
      {
        name: "Shrimp Saganaki",
        price: 5.2,
        description: "Saganaki tomato, oregano balsamic, sauteed shrimp",
      },
      {
        name: "Calamari",
        price: 5,
        description: "Feta yogurt, flaky Maldon salt, sweet sauce, fig",
      },
      {
        name: "Lamb Croquettes",
        price: 3.5,
        description: "Bechamel, lemon zest, pita",
      },
      {
        name: "Crispy Zucchini",
        price: 3.5,
        description: "Crispy feta cheese, fig balsamic glaze, herbs, dill",
      },
    ],
  },
  {
    name: "Main Course",
    slug: "main-course",
    items: [
      {
        name: "Catch of the Day (800g)",
        price: 13,
        description: "Market fish, olive paste, pool peppers",
      },
      {
        name: "Seafood Orzo",
        price: 8,
        description:
          "Mixed pasta, prawn, shrimp, mussel, cherry tomato",
      },
      {
        name: "Chicken Souvlaki",
        price: 6,
        description: "Tender chicken thigh, herbs, tzatziki",
      },
      {
        name: "Supreme Lemonato",
        price: 9,
        description: "Baked chicken supreme, lemon herb sauce",
      },
      {
        name: "Beef Souvlaki",
        price: 12.4,
        description: "Premium beef skewers, herbs, pita",
      },
      {
        name: "Steak",
        price: 13,
        description: "250g Ribeye, potato oven, berry glaze",
      },
      {
        name: "Mushroom Short Ribs",
        price: 14.5,
        description: "Mushroom sauce, potato crust, crispy filo",
      },
      {
        name: "Penne Pasta",
        price: 5,
        description: "Pink sauce, chicken cream, basil leaf",
      },
    ],
  },
  {
    name: "Sandwiches",
    slug: "sandwiches",
    items: [
      {
        name: "Beef Gyros",
        price: 4.5,
        description:
          "Souvlaki meat, flatbread, Greek salad, sour cream, fresh lime",
      },
      {
        name: "Chicken Gyros",
        price: 3.5,
        description:
          "Chicken thigh, flatbread, Greek salad, sour cream, fresh lime",
      },
    ],
  },
  {
    name: "Sides",
    slug: "sides",
    items: [
      {
        name: "Feta Fries",
        price: 3.5,
        description: "Hand-cut fries, feta cheese crumble",
      },
      {
        name: "Spiced French Fries",
        price: 2.5,
        description: "Seasoned crispy fries",
      },
      {
        name: "Potato Puree",
        price: 5,
        description: "Double cream sweet puree, butter",
      },
      {
        name: "Lemon Roasted Potatoes",
        price: 3,
        description: "Herb-roasted lemon potatoes",
      },
      {
        name: "Pita Bread",
        price: 1,
        description: "Freshly baked pita bread, crispy garlic, olives",
      },
    ],
  },
  {
    name: "Desserts",
    slug: "desserts",
    items: [
      {
        name: "Deconstructed Baklava",
        price: 3.5,
        description: "Filo, sugar vanilla cream, crunchy filo layers",
      },
      {
        name: "Chocolate Mousse",
        price: 6.5,
        description:
          "70% dark chocolate, extra virgin olive oil, white Modica salt",
      },
      {
        name: "Vanilla Panna Cotta",
        price: 2,
        description: "Double cream, whole milk",
      },
      {
        name: "Lemon Sorbet",
        price: 3,
        description: "Fresh lemon, sugar, water",
      },
    ],
  },
  {
    name: "Beverages",
    slug: "beverages",
    items: [
      { name: "Espresso", price: 1.5 },
      { name: "Double Espresso", price: 2.5 },
      { name: "Cappuccino", price: 3 },
      { name: "Flat White", price: 3 },
      { name: "Latte", price: 5 },
      { name: "Jing Earl Grey Tea", price: 3 },
      { name: "Jing Chamomile", price: 3 },
      { name: "Jing Green Tea", price: 3 },
      { name: "Jing English Breakfast", price: 3 },
      { name: "Soft Drinks", price: 1.5 },
      { name: "House Mocktails", price: 3 },
    ],
  },
];
