const translations = {
  en: {
    tagline: "SWEETS ON THE GO",
    order_now: "Order Now",
    about_title: "Made with Love",
    about_desc: "BISHCAKE offers delicious cakes and custom treats made with love—perfect for any occasion or sweet craving.",
    treats_title: "Our Treats",
    order_form_title: "Place Your Order",
    form_treat: "Treat",
    form_quantity: "Quantity",
    form_date: "Pickup Date",
    form_name: "Name",
    form_note: "Optional Note",
    form_submit: "Send to WhatsApp",
    order_button: "Order",
    whatsapp_greeting: "Hello, I’d like to order:",
    whatsapp_qty: "Qty",
    whatsapp_pickup: "Pickup Date",
    whatsapp_name: "Name",
    whatsapp_note: "Note",
  },
  ru: {
    tagline: "СЛАДОСТИ НА ВЫНОС",
    order_now: "Заказать сейчас",
    about_title: "Сделано с любовью",
    about_desc: "BISHCAKE предлагает вкусные торты и десерты на заказ, сделанные с любовью — идеально для любого случая или сладкого желания.",
    treats_title: "Наши десерты",
    order_form_title: "Оформить заказ",
    form_treat: "Десерт",
    form_quantity: "Количество",
    form_date: "Дата самовывоза",
    form_name: "Имя",
    form_note: "Примечание (по желанию)",
    form_submit: "Отправить в WhatsApp",
    order_button: "Заказать",
    whatsapp_greeting: "Здравствуйте, я хотел(а) бы заказать:",
    whatsapp_qty: "Кол-во",
    whatsapp_pickup: "Дата самовывоза",
    whatsapp_name: "Имя",
    whatsapp_note: "Примечание",
  },
  kg: {
    tagline: "ТАТТУУЛАРДЫ АЛА КЕТИҢИЗ",
    order_now: "Азыр буйрутма",
    about_title: "Сүйүү менен жасалган",
    about_desc: "BISHCAKE ар кандай учурга же таттуу каалоолорго ылайыктуу, сүйүү менен жасалган даамдуу тортторду жана атайын таттууларды сунуштайт.",
    treats_title: "Биздин таттуулар",
    order_form_title: "Буйрутма берүү",
    form_treat: "Таттуу",
    form_quantity: "Саны",
    form_date: "Алып кетүү күнү",
    form_name: "Аты",
    form_note: "Кошумча эскертүү",
    form_submit: "WhatsApp'ка жөнөтүү",
    order_button: "Буйрутма",
    whatsapp_greeting: "Саламатсызбы, мен буйрутма бергим келет:",
    whatsapp_qty: "Саны",
    whatsapp_pickup: "Алып кетүү күнү",
    whatsapp_name: "Аты",
    whatsapp_note: "Эскертүү",
  }
};

const treats = {
  en: [
    {
      id: 'lemon-pound-cake',
      name: 'Iced Lemon Pound Cake',
      desc: 'Tangy and sweet, with a zesty lemon glaze',
      img: 'assets/lemonCake.png'
    },
    {
      id: 'puto-seko',
      name: 'Puto Seko',
      desc: 'Light, crumbly Filipino butter cookies',
      img: 'assets/PutoSeko.png'
    },
    {
      id: 'carrot-cake',
      name: 'Carrot Cake',
      desc: 'Moist cake with grated carrots and spices',
      img: 'assets/carrotCake.png'
    },
    {
      id: 'banana-nut-cake',
      name: 'Banana Nut Cake',
      desc: 'Soft banana sponge with roasted walnuts',
      img: 'assets/bananaBread.png'
    },
    {
      id: 'banana-nut-cupcakes',
      name: 'Banana Nut Cupcakes',
      desc: 'Mini banana cakes packed with chopped nuts',
      img: 'assets/bananaMuffinds.png'
    }
  ],
  ru: [
    { id: 'lemon-pound-cake', name: 'Лимонный кекс с глазурью', desc: 'Терпкий и сладкий, с пикантной лимонной глазурью' },
    { id: 'puto-seko', name: 'Путо Секо', desc: 'Легкое, рассыпчатое филиппинское печенье' },
    { id: 'carrot-cake', name: 'Морковный торт', desc: 'Влажный торт с тертой морковью и специями' },
    { id: 'banana-nut-cake', name: 'Бананово-ореховый торт', desc: 'Мягкий банановый бисквит с жареными грецкими орехами' },
    { id: 'banana-nut-cupcakes', name: 'Бананово-ореховые кексы', desc: 'Мини-кексы с бананом и рублеными орехами' }
  ],
  kg: [
    { id: 'lemon-pound-cake', name: 'Муз менен лимон кекс', desc: 'Кычкыл жана таттуу, лимон глазуру менен' },
    { id: 'puto-seko', name: 'Путо Секо', desc: 'Жеңил, майдаланган филиппиндик май печеньеси' },
    { id: 'carrot-cake', name: 'Сабиз торт', desc: 'Майдаланган сабиз жана татымалдар кошулган нымдуу торт' },
    { id: 'banana-nut-cake', name: 'Банан жаңгак торт', desc: 'Куурулган жаңгак кошулган жумшак банан губкасы' },
    { id: 'banana-nut-cupcakes', name: 'Банан жаңгак кекстери', desc: 'Майдаланган жаңгактар ​​менен толтурулган мини банан торттору' }
  ]
};

let currentLang = 'en';

function changeLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-key]').forEach(elem => {
    const key = elem.getAttribute('data-key');
    if (translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });
  renderTreats();
  populateTreatsDropdown();
}

function renderTreats() {
    const carousel = document.querySelector('.carousel');
    carousel.innerHTML = ''; // Grid container now, not scrollable flex
  const currentTreats = treats.en.map((treat, index) => ({
    ...treat,
    name: treats[currentLang][index].name,
    desc: treats[currentLang][index].desc,
  }));

  currentTreats.forEach(treat => {
    const card = `
      <div class="bg-white rounded-lg shadow-md p-4 text-center flex flex-col justify-between h-80 transition hover:scale-105">
        <img src="${treat.img}" alt="${treat.name}" class="w-32 h-32 object-cover mx-auto rounded-full mb-4 border-4 border-purple-100" />
        <h3 class="font-bold text-md mb-1">${treat.name}</h3>
        <p class="text-xs text-gray-500 mb-4 h-10">${treat.desc}</p>
        <div class="mt-auto">
          <button class="bg-copper text-white text-sm font-bold py-1 px-4 rounded-full w-full hover:bg-opacity-90" onclick="openOrderModal('${treat.id}')" data-key="order_button">${translations[currentLang].order_button}</button>
        </div>
      </div>
    `;
    carousel.innerHTML += card;
  });
}

function populateTreatsDropdown() {
  const select = document.getElementById('treat-selection');
  select.innerHTML = '';
  const currentTreats = treats.en.map((treat, index) => ({
    id: treat.id,
    name: treats[currentLang][index].name
  }));
  currentTreats.forEach(treat => {
    const option = document.createElement('option');
    option.value = treat.id;
    option.textContent = treat.name;
    select.appendChild(option);
  });
}

function openOrderModal(treatId = null) {
  const modal = document.getElementById('orderModal');
  const form = document.getElementById('orderForm');
  if (treatId) form.elements['treat'].value = treatId;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.querySelector('div').classList.remove('scale-95');
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  modal.classList.add('opacity-0');
  setTimeout(() => {
    modal.classList.add('pointer-events-none');
    modal.querySelector('div').classList.add('scale-95');
  }, 200);
}


function getTreatNameById(id) {
  const index = treats.en.findIndex(t => t.id === id);
  return index !== -1 ? treats[currentLang][index].name : 'Unknown Treat';
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  //const phoneNumber = '996503110629';
  const phoneNumber = '996550346970';
  const treatId = formData.get('treat');
  const treatName = getTreatNameById(treatId);
  const quantity = formData.get('quantity');
  const pickupDate = formData.get('date');
  const name = formData.get('name');
  const note = formData.get('note');

  const t = translations[currentLang];

  let message = `${t.whatsapp_greeting}\n🧁 ${treatName}\n${t.whatsapp_qty}: ${quantity}\n${t.whatsapp_pickup}: ${pickupDate}\n${t.whatsapp_name}: ${name}`;
  if (note) message += `\n${t.whatsapp_note}: ${note}`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  closeOrderModal();
});

document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('pickup-date').setAttribute('min', today);
  changeLanguage('en');
});
