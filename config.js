/* ======================================================================
   PNS WEBSITE SETTINGS
   Change the text inside the quotes to change the website.
   Keep the quotes and commas exactly as they are, then upload again.
   Catalogues are NOT set here. Upload them from the admin page.
   ====================================================================== */
window.SITE = {
  name: "PNS",
  tagline: "Clothes, rice and spices, exported with care",
  intro: "PNS supplies clothes, rice and spices to buyers overseas. One company, one quote, one shipment.",
  contact: {
    email: "ranveervatsya837@gmail.com",   // your email
    phone: "+91 82104 59357",              // your first phone number
    phone2: "+230 5487 1230",              // your second phone number (leave "" to hide)
    address: ""                            // type your office address here to show it (leave "" to hide)
  },
  adminEmail: "ranveervatsya837@gmail.com", // the email you use to log in at /admin.html
  aboutTitle: "A trading partner you can reach directly",
  about: [
    "PNS exports clothes, rice and spices. We work with suppliers, check the goods, pack them for shipping and handle the paperwork, so you deal with one team.",
    "Orders can be a single product or a mix of all three. We agree the specification, packing and price with you before anything ships."
  ],
  services: [
    ["Sourcing", "We find and compare suppliers for the quality and price you need."],
    ["Packing and labelling", "Cartons, bags and labels prepared for your market."],
    ["Export documents", "Invoice, packing list and the papers your customs office asks for."],
    ["Shipping", "We coordinate container loading and freight to your port."]
  ],
  lines: [
    { name: "Clothes", hs: "HS 61 · 62 · 63", blurb: "Everyday and ethnic wear for retail and wholesale buyers.",
      items: ["Cotton T-shirts and polos", "Kurtas and ethnic wear", "Shirts and trousers", "Bed linen and towels"],
      pack: "Cartons, assorted by size" },
    { name: "Rice", hs: "HS 1006", blurb: "Long grain and everyday rice in bagged packs.",
      items: ["Basmati, long grain", "Sona Masoori", "Parboiled non-basmati", "White raw rice"],
      pack: "5 kg to 50 kg bags" },
    { name: "Spices", hs: "HS 09", blurb: "Whole and ground spices, cleaned and packed for export.",
      items: ["Turmeric, whole and powder", "Cumin seed", "Black pepper", "Red chilli", "Cardamom", "Coriander seed"],
      pack: "1 kg to 25 kg packs" }
  ],
  steps: [
    ["Inquiry", "Send us the product, quantity and destination."],
    ["Quote and samples", "We share prices, specifications and samples on request."],
    ["Order and packing", "You confirm. We prepare, check and pack the goods."],
    ["Shipping", "We load the container and send you the documents."]
  ]
};

/* ======================================================================
   BACKEND CONNECTION (orders and catalogues)
   Paste the two values from your Supabase project here.
   Steps are in SETUP-GUIDE.txt. The anon key is meant to be public.
   ====================================================================== */
window.PNS_BACKEND = {
  url: "https://nmsrgqdtrfnefxgwyzjb.supabase.co",
  anonKey: "sb_publishable_zxkNFiJ0jFeRYdUl9b8P2A_L0vwCZE8"
};
