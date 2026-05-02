const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Shimano Ultegra R8100 Cassette", price: "$110.00", category: "Drivetrain", image: "/images/cat_drivetrain.png", description: "Experience smooth, lightning-fast shifting with the new Shimano Ultegra 12-speed cassette. Designed for precision and longevity." },
  { id: 2, name: "SRAM Red eTap AXS Rear Derailleur", price: "$710.00", category: "Drivetrain", image: "/images/cat_drivetrain.png", description: "Wireless perfection. The SRAM Red eTap AXS rear derailleur provides instantaneous shifts and chain management." },
  { id: 3, name: "Continental Grand Prix 5000 S TR", price: "$85.00", category: "Wheels & Tires", image: "/images/cat_wheels.png", description: "The standard for road tubeless performance. Lower rolling resistance, better puncture protection." },
  { id: 4, name: "Zipp 404 Firecrest Carbon Wheelset", price: "$1,900.00", category: "Wheels & Tires", image: "/images/cat_wheels.png", description: "Aero dominance meets crosswind stability. The Zipp 404 Firecrest is your ultimate all-around speed weapon." },
  { id: 5, name: "Garmin Edge 1040 Solar", price: "$749.00", category: "Accessories", image: "/images/cat_accessories.png", description: "Never stop riding. Solar charging extends battery life up to 100 hours in battery saver mode." },
  { id: 6, name: "KMC X11EL Ti-Nitride 11-Speed Chain", price: "$45.00", category: "Drivetrain", image: "/images/cat_drivetrain.png", description: "Extra light, highly durable, and stunning titanium nitride gold finish." },
  { id: 7, name: "Giro Aether Spherical Helmet", price: "$300.00", category: "Apparel", image: "/images/cat_apparel.png", description: "Revolutionary safety technology meets incredible ventilation and comfort." },
  { id: 8, name: "Wahoo KICKR Core Smart Trainer", price: "$899.00", category: "Accessories", image: "/images/cat_accessories.png", description: "Realistic ride feel and power accuracy to take your indoor training to the next level." },
  { id: 9, name: "Park Tool AK-5 Advanced Kit", price: "$350.00", category: "Tools", image: "/images/cat_accessories.png", description: "Everything you need to perform routine maintenance and advanced repairs at home." },
  { id: 10, name: "Specialized S-Works Tarmac SL8 Frame", price: "$5,500.00", category: "Frames", image: "/images/hero_bg.png", description: "The fastest bike in the world. Unprecedented aerodynamics and weight." },
  { id: 11, name: "Fizik Antares Versus Evo R3 Saddle", price: "$150.00", category: "Components", image: "/images/cat_accessories.png", description: "3D printed comfort tailored for maximum power transfer and pressure relief." },
  { id: 12, name: "Shimano Dura-Ace PD-R9100 Pedals", price: "$280.00", category: "Components", image: "/images/cat_drivetrain.png", description: "The professional's choice. Lightweight carbon body with an extra-wide platform." },
  { id: 13, name: "Muc-Off Nano Tech Bike Cleaner", price: "$15.00", category: "Maintenance", image: "/images/cat_accessories.png", description: "Cuts through grime while protecting your bike's delicate finish." },
  { id: 14, name: "Castelli Free Aero RC Bibshort", price: "$200.00", category: "Apparel", image: "/images/cat_apparel.png", description: "Race-proven comfort with seamless leg grippers and premium chamois." },
  { id: 15, name: "Silca SuperPista Floor Pump", price: "$450.00", category: "Tools", image: "/images/cat_accessories.png", description: "Heirloom quality floor pump built with precision gauges and full metal construction." },
  { id: 16, name: "Enve SES AR Handlebar", price: "$400.00", category: "Components", image: "/images/cat_accessories.png", description: "Aero road handlebars designed for maximum comfort and speed on mixed surfaces." },
  { id: 17, name: "RockShox Pike Ultimate Fork", price: "$899.00", category: "Components", image: "/images/cat_wheels.png", description: "The ultimate trail fork. Unmatched damping performance and stiffness." },
  { id: 18, name: "Maxxis Minion DHF MTB Tire", price: "$80.00", category: "Wheels & Tires", image: "/images/cat_wheels.png", description: "The standard for aggressive all-mountain and downhill riding." },
  { id: 19, name: "Fox Racing Ranger Gel Gloves", price: "$35.00", category: "Apparel", image: "/images/cat_apparel.png", description: "Touchscreen compatible gloves with strategically placed gel padding." },
  { id: 20, name: "SRAM Code RSC Disc Brakes", price: "$265.00", category: "Components", image: "/images/cat_drivetrain.png", description: "Massive stopping power and ultimate adjustability for steep descents." },
];

const blogPosts = [
  {
    id: 1,
    title: "How to upgrade your drivetrain for 2026",
    category: "Maintenance",
    excerpt: "A comprehensive guide to choosing the right components for your riding style and ensuring smooth shifting.",
    content: "Upgrading your drivetrain is one of the most impactful changes you can make to your bicycle. With the release of new 12 and 13-speed systems in 2026, you have more options than ever. When considering an upgrade, evaluate whether you want to transition to electronic shifting, which offers flawless performance under load, or stick to reliable mechanical systems. It's also critical to ensure compatibility with your current wheel's freehub body.",
    image: "/images/cat_drivetrain.png",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Tubeless Tires",
    category: "Guides",
    excerpt: "Say goodbye to pinch flats. Everything you need to know about setting up and maintaining tubeless road and gravel tires.",
    content: "Tubeless technology has taken over the cycling world. By removing the inner tube and relying on sealant, riders can run lower tire pressures for better traction and comfort without risking snakebite flats. Setting up tubeless requires a compatible rim, tubeless tape, valves, and a high-quality sealant. While the initial setup can be messy, the long-term benefits on the road or trail are undeniable.",
    image: "/images/cat_wheels.png",
  },
  {
    id: 3,
    title: "Essential Tools Every Cyclist Needs at Home",
    category: "Tools",
    excerpt: "Build your dream home workshop with these essential mechanic tools for basic and advanced bike maintenance.",
    content: "Every cyclist should have a basic toolkit to handle routine maintenance. Start with a high-quality set of hex keys, a torque wrench to protect delicate carbon components, and a sturdy floor pump. As you advance, consider adding a chain whip, cassette lockring tool, and a set of cable cutters. Having the right tools not only saves money on shop labor but also gives you a deeper understanding of your machine.",
    image: "/images/cat_accessories.png",
  },
  {
    id: 4,
    title: "Winter Riding: Essential Gear to Keep You Warm",
    category: "Apparel",
    excerpt: "Don't let the cold stop your training. We review the best winter bib tights, base layers, and gloves.",
    content: "Riding in the cold requires a strategic approach to layering. The core principle is moisture management—if you sweat and the moisture stays against your skin, you will freeze. Start with a merino wool base layer, add a thermal mid-layer if necessary, and finish with a windproof and water-resistant outer shell. Don't forget extremities: neoprene overshoes and insulated lobster gloves are game-changers for winter miles.",
    image: "/images/cat_apparel.png",
  },
  {
    id: 5,
    title: "Aero vs Lightweight: Which Road Frame is Best?",
    category: "Reviews",
    excerpt: "We put the latest climbing frames against pure aero machines to see what really matters on your local climbs.",
    content: "The age-old debate between aerodynamics and weight continues. Physics dictates that on flat roads and at speeds over 15mph, aerodynamics matter far more than weight. However, on steep gradients exceeding 8%, weight becomes the primary resisting force. Modern engineering has given rise to the 'all-around' race bike, blending aero tube shapes with ultra-light carbon layups, rendering the dedicated climbing bike nearly obsolete for the average rider.",
    image: "/images/hero_bg.png",
  },
  {
    id: 6,
    title: "How to Choose the Perfect Cycling Helmet",
    category: "Guides",
    excerpt: "Safety first. Discover the differences between spherical MIPS, aero helmets, and lightweight climbing lids.",
    content: "Your helmet is the single most important piece of safety gear you own. When choosing a helmet, look for rotational impact protection systems like MIPS. Aero road helmets save watts but can be warm in the summer, while heavily vented climbing helmets are incredibly light and cool. Ensure the helmet fits snugly without pressure points; a helmet that doesn't fit correctly cannot protect you properly in a crash.",
    image: "/images/cat_apparel.png",
  },
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.get('/api/blog', (req, res) => {
  res.json(blogPosts);
});

app.get('/api/blog/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Blog post not found' });
  }
});

app.listen(PORT, () => {
  console.log(`CycleSupply Backend running on port ${PORT}`);
});
