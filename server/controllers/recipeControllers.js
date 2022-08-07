require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

//homepage
exports.homepage = async(req, res) => {
    try{
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
        const mexican = await Recipe.find({ 'category': 'Mexican' }).limit(limitNumber);
        const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);


        const food = {latest, american, mexican, chinese};

        res.render('index', {title: 'Cooking Blog - Home', categories, food});
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

// categories
exports.exploreCategories = async(req, res) => {
    try{
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);

        res.render('categories', {title: 'Cooking Blog - Categories', categories});
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

// recipre/:id
exports.exploreRecipe = async(req, res) => {
    try{
        let recipeId = req.params.id;
        const recipe = await Recipe.findById(recipeId);
        res.render('recipe', {title: 'Cooking Blog - Recipe', recipe});
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}






































































































// async function insertDymmyCategoryData(){
//     try{
//         await Category.insertMany([
//         {
//             "name": "Thai",
//             "image": "thai-food.jpg"
//         },
//         {
//             "name": "Thai",
//             "image": "thai-food.jpg"
//         },
//         {
//             "name": "American",
//             "image": "american-food.jpg"
//         },
//         {
//             "name": "Chinese",
//             "image": "chinese-food.jpg"
//         },
//         {
//             "name": "Mexican",
//             "image": "mexican-food.jpg"
//         },
//         {
//             "name": "Indian",
//             "image": "indian-food.jpg"
//         },
//         {
//             "name": "Spanish",
//             "image": "spanish-food.jpg"
//         },
//     ]);
//     }catch (error){
//         console.log('err', + error)
//     }
// }
// insertDymmyCategoryData();


// async function insertDymmyRecipeData(){
//     try{
//         await Recipe.insertMany([
//             {
//                 "name": "Stuffed salmon",
//                 "discription": `
//                 This recipe works great as a stand-alone dish, but also as a component in Jamies Sunny Gathering from Together see the full collection of menus here.

// GET AHEAD You can prep this on the day, if you prefer. Put the capers into a small bowl, then tear in the anchovies and strip in the rosemary leaves. Squash and destone the olives, tearing the flesh into the bowl, then finely slice and add the chilli. Finely grate over the lemon zest, squeeze in the juice, add 2 tablespoons of olive oil, and mix well. Cover and refrigerate overnight.

// ON THE DAY Place the salmon skin side down in the middle of your largest roasting tray and use the tip of a small sharp knife to make deep cuts into the flesh at 3cm intervals. Now stuff each cut, using the knife to help you. I start by dividing up the olives and anchovies, then add the rosemary, chilli and capers. Take your time and enjoy the process. Sprinkle any excess around the salmon.

// TO SERVE Preheat the oven to 180°C/350°F/gas 4. Roast the salmon at the bottom of the oven for 20 minutes. Let it rest for 10 minutes, then serve.`,
//                 "email": "Helloangelo@gmail.com",
//                 "ingredients": [
//                     "1 heaped tablespoon baby capers in brine",
//                     "10 anchovy fillets in oil , from sustainable sources",
//                     "2 sprigs of rosemary",
//                     "10 mixed-colour olives",
//                     "1 fresh red chilli",
//                     "1 lemon",
//                     "olive oil",
//                     "1.2 kg side of salmon , skin on, pin-boned, from sustainable sources"
//                 ],
//                 "category": "Chinese",
//                 "image": "Stuffed-salmon.jpg"
//             },
//             {
//             "name": "Surf & turf",
//             "discription": `
//             To butterfly the prawns, peel off the inner part of the shell, keeping the heads and tails on (theres loads of flavour in there). Carefully run a sharp knife down the back of the prawns and use the tip of the knife to pull out the vein and discard. Repeat with the remaining prawns.
// To make the marinade, squeeze the juice of the lime into a large bowl with the spice paste and 1 tablespoon of olive oil, and mix well. Add the prawns and toss them all in the marinade. Set aside for 30 minutes to 1 hour.
// Light your barbecue and let it calm down. Make sure youve got your coals high on one side and low on the other for control.
// To prepare the steak, lightly score through the fat, then rub all over with ½ a tablespoon of olive oil, a pinch of sea salt and plenty of black pepper.`,
//             "email": "Helloangelo@gmail.com",
//             "ingredients": [
//                 "12 raw prawns , shell on, from sustainable sources",
//                 "1 lime",
//                 "2 teaspoons Keralan spice paste",
//                 "olive oil",
//                 "1 x 3 cm-thick sirloin steak , (600g)",
//                 "2 flatbreads , to serve",
//                 "SALAD",
//                 "2 limes",
//                 "1 Scotch bonnet , optional",
//                 "1 mango",
//                 "1 carrot",
//                 "4 spring onions",
//                 "1 handful of roasted cashew nuts",
//                 "½ a bunch of fresh mint , (15g)",
//                 "½ a fresh coconut , (100g)"
//             ],
//             "category": "American",
//             "image": "Surf-&-turf.jpg"
//             },
//             {
//                 "name": "Tamarind, Honey & Sesame Chicken",
//                 "discription": `
//                 Preheat the oven to 200°C/180°C fan/gas mark 6.

// In a jug, combine the tamarind, honey, fish sauce, soy sauce, sesame oil, garlic and salt.

// Pour half the sauce into a roasting tray, then add the spring onions. Score each chicken thigh twice, then place on top, skin side up. Coat the flesh but leave the skin dry. Reserve the remaining sauce for drizzling over the finished dish. If you have time, leave to marinate for at least 20 minutes if not, proceed to the next step.

// Sprinkle each chicken thigh with sea salt flakes and a touch of black pepper, then place in the oven for 400 minutes, or until cooked through. If you like a crispier skin, heat the grill to high and place the tray under it for a minute or two, or until the skin is done to your liking.

// Once ready, sprinkle the chicken with thinly sliced spring onion. Combine the tray juices with the leftover sauce and drizzle over liberally. Great with bowls of rice, Cucumber pickle (see page 183 of Dominiques Kitchen) and Garlicky green beans (see page 168 of Dominiques Kitchen), sprinkled with a few spoonfuls of Peanut serundeng (see page 163 of Dominiques Kitchen).`,
//                 "email": "Helloangelo@gmail.com",
//                 "ingredients": [
//                     "120 g tamarind paste",
//                     "8 tablespoons honey",
//                     "3 tablespoons fish sauce",
//                     "2 tablespoons light soy sauce",
//                     "2 tablespoons sesame oil , preferably toasted",
//                     "4 cloves of garlic , crushed",
//                     "½ teaspoon salt",
//                     "4 spring onions , cut into 5cm pieces",
//                     "8 chicken thighs , skin on, bone in, fat trimmed"
//                 ],
//                 "category": "Indian",
//                 "image": "Tamarind-Chicken.jpg"
//             },
//             {
//                 "name": "Sticky kickin' wings",
//                 "discription":`
//                 Toast the sesame seeds in a dry 20cm non-stick frying pan on a medium heat until lightly golden, then remove to a plate.
// Still on the heat, sit the wings in the pan they should fit snugly. Let them colour for 1 minute on each side, then add the teriyaki and just cover the wings with water.
// Halve the chilli lengthways and add to the pan. Simmer for 35 to 40 minutes, or until the chicken is tender and the sauce is nice and sticky, turning occasionally.
// Add a splash of red wine vinegar to the pan and jiggle around to pick up the gnarly bits.
// Trim and finely slice the spring onions, scatter them over the chicken with the toasted sesame seeds, and get stuck in.`,
//                 "email": "Helloangelo@gmail.com",
//                 "ingredients": [
//                     "1 tablespoon sesame seeds",
//                     "4 large free-range chicken wings",
//                     "2 tablespoons teriyaki sauce",
//                     "1 fresh red chilli",
//                     "2 spring onions"
//                 ],
//                 "category": "Mexican",
//                 "image": "Sticky-kickin.jpg"
//             }
//         ]);
//     }catch (error){
//         console.log('err', + error)
//     }
// }
// insertDymmyRecipeData();
