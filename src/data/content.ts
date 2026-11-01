import type {
  CategoryFilter,
  FuelType,
  Language,
  LocationId,
  RentalPeriod,
  Transmission,
  VehicleCategory,
} from '../types'

export interface SiteContent {
  locale: string
  meta: { title: string; description: string }
  nav: {
    home: string
    skip: string
    fleet: string
    about: string
    why: string
    explore: string
    contact: string
    book: string
    call: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    eyebrow: string
    titleTop: string
    titleBottom: string
    lead: string
    primaryCta: string
    secondaryCta: string
    note: string
    imageAlt: string
  }
  search: {
    title: string
    hint: string
    pickupLocation: string
    pickup: string
    returnLabel: string
    pickupDate: string
    pickupTime: string
    returnDate: string
    returnTime: string
    category: string
    allCategories: string
    button: string
    locations: Record<LocationId, string>
    dateError: string
    note: string
  }
  trust: {
    ratingLabel: string
    reviews: string
    sourceNote: string
    baseValue: string
    baseLabel: string
    contactValue: string
    contactLabel: string
  }
  fleet: {
    eyebrow: string
    title: string
    lead: string
    disclaimer: string
    sample: string
    periodTitle: string
    periodHint: string
    periods: Record<RentalPeriod, string>
    perDay: string
    perWeek: string
    perMonth: string
    seatsLabel: string
    transmissionLabel: string
    fuelLabel: string
    enquire: string
    enquireShort: string
    illustrative: string
    filters: Record<CategoryFilter, string>
    categories: Record<VehicleCategory, string>
    transmissions: Record<Transmission, string>
    fuels: Record<FuelType, string>
    empty: string
    resultNote: (category: string, dates: string) => string
  }
  steps: {
    eyebrow: string
    title: string
    lead: string
    items: { title: string; text: string }[]
    note: string
  }
  why: {
    eyebrow: string
    title: string
    lead: string
    items: { title: string; text: string }[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    stats: { value: string; label: string }[]
    note: string
    imageAlt: string
  }
  explore: {
    eyebrow: string
    title: string
    lead: string
    note: string
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    detailsTitle: string
    phoneLabel: string
    whatsappLabel: string
    whatsappHint: string
    locationLabel: string
    address: string
    directions: string
    mapTitle: string
    formTitle: string
    formLead: string
    fields: {
      name: string
      phone: string
      pickupDate: string
      returnDate: string
      category: string
      namePlaceholder: string
      phonePlaceholder: string
    }
    allCategories: string
    submit: string
    privacy: string
    prefilled: (vehicle: string) => string
    errors: {
      name: string
      phone: string
      pickup: string
      return: string
      dateOrder: string
    }
    success: {
      title: string
      body: string
      call: string
      whatsapp: string
      edit: string
      details: string
    }
  }
  footer: {
    tagline: string
    fleetTitle: string
    companyTitle: string
    contactTitle: string
    disclaimer: string
    illustrative: string
    rights: string
    credit: string
  }
  language: { label: string; en: string; ar: string }
}

const en: SiteContent = {
  locale: 'en-GB',
  meta: {
    title: 'M&M Rent a Car | Car Rental in Athaibah, Muscat, Oman',
    description:
      'Car rental in Muscat and Athaibah, Oman. Explore economy, sedan, SUV, family and luxury car categories, then confirm your rental directly with M&M by phone or WhatsApp.',
  },
  nav: {
    home: 'Home',
    skip: 'Skip to content',
    fleet: 'Our Fleet',
    about: 'About Us',
    why: 'Why Choose Us',
    explore: 'Explore Oman',
    contact: 'Contact',
    book: 'Book Your Car',
    call: 'Call',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'Car rental · Athaibah, Sultanate of Oman',
    titleTop: 'Find the Right Car for Every',
    titleBottom: 'Journey.',
    lead: 'Explore Oman with convenient car rental options designed around your journey.',
    primaryCta: 'Explore Our Fleet',
    secondaryCta: 'Enquire Now',
    note: 'Website concept only. Please contact M&M directly to discuss availability and rental terms.',
    imageAlt: 'A dark luxury sedan driving along an open road at dusk',
  },
  search: {
    title: 'Find your car',
    hint: 'Share your dates and preferred category. This search is illustrative and does not reserve a car.',
    pickupLocation: 'Pickup location',
    pickup: 'Pickup',
    returnLabel: 'Return',
    pickupDate: 'Pickup date',
    pickupTime: 'Time',
    returnDate: 'Return date',
    returnTime: 'Time',
    category: 'Vehicle category',
    allCategories: 'All categories',
    button: 'Search cars',
    locations: {
      muscat: 'Athaibah, Muscat',
      other: 'Other location — to discuss',
    },
    dateError: 'Please check your pickup and return dates.',
    note: 'Illustrative search only. No reservation is made through this website concept.',
  },
  trust: {
    ratingLabel: 'Google rating',
    reviews: '265 Google reviews',
    sourceNote:
      "Based on M&M RENT A CAR's public Google business listing. No review text or testimonial is reproduced in this concept.",
    baseValue: 'Athaibah',
    baseLabel: 'Athaibah, Muscat, Oman',
    contactValue: '+968 9477 8666',
    contactLabel: 'Call or WhatsApp',
  },
  fleet: {
    eyebrow: 'Our Fleet',
    title: 'A car for every kind of journey.',
    lead: 'Explore illustrative Economy Cars, Sedans, SUVs, Luxury Cars and Family Cars, with daily, weekly and monthly rental options to discuss.',
    disclaimer:
      'Illustrative demo content only. Vehicle models, specifications, sample OMR prices and availability are not M&M confirmed fleet or rental rates. Daily, weekly and monthly terms must be confirmed directly.',
    sample: 'Sample',
    periodTitle: 'Rental period',
    periodHint:
      'Choose a sample daily, weekly or monthly rate to see how the fleet could be presented. All amounts are illustrative.',
    periods: { daily: 'Daily', weekly: 'Weekly', monthly: 'Monthly' },
    perDay: 'OMR / day',
    perWeek: 'OMR / week',
    perMonth: 'OMR / month',
    seatsLabel: 'Seats',
    transmissionLabel: 'Transmission',
    fuelLabel: 'Fuel',
    enquire: 'Enquire about this car',
    enquireShort: 'Enquire',
    illustrative: 'Illustrative example',
    filters: {
      all: 'All cars',
      economy: 'Economy',
      sedan: 'Sedan',
      suv: 'SUV',
      luxury: 'Luxury',
      family: 'Family Cars',
    },
    categories: {
      economy: 'Economy',
      sedan: 'Sedan',
      suv: 'SUV',
      luxury: 'Luxury',
      family: 'Family',
    },
    transmissions: { automatic: 'Automatic', manual: 'Manual' },
    fuels: { petrol: 'Petrol', electric: 'Electric', hybrid: 'Hybrid' },
    empty: 'No sample cars in this category yet.',
    resultNote: (category, dates) =>
      dates ? `${category} · ${dates}` : `${category} · all dates`,
  },
  steps: {
    eyebrow: 'Rental Experience',
    title: 'Rental, made simple.',
    lead: 'No account, no long forms. Three clear steps from browsing to a confirmed rental.',
    items: [
      {
        title: 'Choose Your Car',
        text: 'Browse the sample fleet and pick the category that suits your trip — economy, sedan, SUV, family or luxury.',
      },
      {
        title: 'Select Rental Dates',
        text: 'Choose your pickup and return dates and times so M&M can check what is available for your stay.',
      },
      {
        title: 'Contact Us to Confirm',
        text: 'Call or message M&M to confirm availability, the daily rate and the rental terms before you collect the car.',
      },
    ],
    note: 'Submitting an enquiry through this concept site does not create a reservation. All rentals are subject to confirmation by M&M.',
  },
  why: {
    eyebrow: 'Why Choose M&M',
    title: 'A local rental, handled personally.',
    lead: 'A straightforward way to arrange a car in Oman — with a real person on the other end of the conversation.',
    items: [
      {
        title: 'Convenient rental enquiries',
        text: 'Start with a call or a WhatsApp message about your dates, preferred car and pickup or drop-off arrangements. No online account and no complicated checkout.',
      },
      {
        title: 'Multiple vehicle categories',
        text: 'Economy, sedan, SUV, family and luxury categories give you room to match the car to the trip.',
      },
      {
        title: 'Flexible rental options',
        text: 'Discuss your dates and plans directly with M&M. Rental periods and terms are agreed and confirmed with the business.',
      },
      {
        title: 'Customer-focused service',
        text: 'An Athaibah-based business with friendly, direct service and clean, well-presented vehicles. Enquiries are handled by the team, not an automated system.',
      },
      {
        title: 'Easy communication',
        text: 'Reach M&M by phone, WhatsApp or the enquiry form. Share your dates and preferred car in a couple of minutes.',
      },
    ],
  },
  about: {
    eyebrow: 'About M&M',
    title: 'A local car rental business in Athaibah.',
    paragraphs: [
      'M&M RENT A CAR (ام اند ام لتأجير السيارات) is a car rental business based in Athaibah, Muscat, Oman. This website is an independent concept showing how that service could be presented online: clear categories, a calm enquiry flow and direct contact with the business.',
      'M&M is a rental business, not a tour operator. Everything here is designed to help you ask the right questions — availability, daily rate, documents and pickup arrangements — and get an answer from the team directly.',
    ],
    stats: [
      { value: '4.8', label: 'Google rating' },
      { value: '265', label: 'Google reviews' },
      { value: 'Athaibah', label: 'Muscat, Oman' },
    ],
    note: 'Rating and review count are taken from M&M\'s public Google business listing. Vehicle examples and prices on this site are illustrative demo content.',
    imageAlt: 'A white Honda CR-V SUV on a mountain road',
  },
  explore: {
    eyebrow: 'Explore Oman',
    title: 'See more of Oman, on your own schedule.',
    lead: 'Collect your car in Athaibah and take the coast road, head inland to the mountains, or plan a slower weekend through the wadis. A rental keeps the itinerary yours.',
    note: 'Destination notes are for inspiration only. M&M provides car rental, not guided tours.',
  },
  contact: {
    eyebrow: 'Contact & Booking',
    title: "Let's get you on the road.",
    lead: 'Call or WhatsApp M&M to discuss availability and rental terms. This front-end demo form prepares your enquiry in the browser and is not connected to M&M booking systems.',
    detailsTitle: 'Talk to M&M',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp enquiry',
    whatsappHint: 'Message M&M with your dates and preferred car category.',
    locationLabel: 'Location',
    address: 'Behind Al Meera Hypermarket, Athaibah, 48th Street, Building No. 3891, Way No. 4451, Muscat 112, Oman',
    directions: 'Get directions',
    mapTitle: 'Map showing M&M Rent A Car in Athaibah, Muscat, Oman',
    formTitle: 'Booking enquiry',
    formLead: 'Prepare your details, then confirm by phone or WhatsApp.',
    fields: {
      name: 'Full name',
      phone: 'Phone number',
      pickupDate: 'Pickup date',
      returnDate: 'Return date',
      category: 'Preferred vehicle category',
      namePlaceholder: 'Your name',
      phonePlaceholder: '+968 9xxx xxxx',
    },
    allCategories: 'No preference',
    submit: 'Prepare enquiry',
    privacy: 'Demo form — your details stay in this browser and are not sent or stored.',
    prefilled: (vehicle) => `Enquiring about the ${vehicle} (illustrative example).`,
    errors: {
      name: 'Please enter your name.',
      phone: 'Please enter a valid phone number.',
      pickup: 'Please choose a pickup date.',
      return: 'Please choose a return date.',
      dateOrder: 'The return date must be after the pickup date.',
    },
    success: {
      title: 'Enquiry prepared — demo only',
      body: 'Your details were checked in this browser, but nothing has been sent to M&M and no booking has been made. To confirm availability and rental terms, contact M&M directly:',
      call: 'Call M&M',
      whatsapp: 'Continue on WhatsApp',
      edit: 'Edit details',
      details: 'Your details',
    },
  },
  footer: {
    tagline: 'Car rental in Athaibah, Oman. Your journey, your way.',
    fleetTitle: 'Explore',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    disclaimer:
      'Independent website concept designed by TRIBAL³ for presentation purposes. This is not the official M&M RENT A CAR website.',
    illustrative:
      'Vehicle models, specifications, sample prices and availability are illustrative demo content only, not confirmed M&M fleet or rates.',
    rights: '© 2026 TRIBAL³. All rights reserved.',
    credit: 'Concept & design — TRIBAL³',
  },
  language: { label: 'Language', en: 'English', ar: 'العربية' },
}

const ar: SiteContent = {
  ...en,
  locale: 'ar-OM',
  meta: { title: 'ام اند ام لتأجير السيارات | تأجير سيارات في العذيبة ومسقط، عُمان', description: 'تأجير سيارات في العذيبة ومسقط، سلطنة عُمان. خيارات اقتصادية وسيدان ودفع رباعي وعائلية وفخمة، مع أسعار يومية وأسبوعية وشهرية توضيحية وتواصل مباشر مع ام اند ام.' },
  nav: { ...en.nav, home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', skip: '\u062a\u062e\u0637 \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649', fleet: '\u0633\u064a\u0627\u0631\u0627\u062a\u0646\u0627', about: '\u0645\u0646 \u0646\u062d\u0646', why: '\u0644\u0645\u0627\u0630\u0627 \u0627\u0645 \u0627\u0646\u062f \u0627\u0645', explore: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0639\u064f\u0645\u0627\u0646', contact: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627', book: '\u0627\u0633\u062a\u0641\u0633\u0631 \u0627\u0644\u0622\u0646', call: '\u0627\u062a\u0635\u0644', openMenu: '\u0641\u062a\u062d \u0627\u0644\u0642\u0627\u0626\u0645\u0629', closeMenu: '\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0642\u0627\u0626\u0645\u0629' },
  hero: { ...en.hero, eyebrow: '\u062a\u0623\u062c\u064a\u0631 \u0633\u064a\u0627\u0631\u0627\u062a \u00b7 \u0627\u0644\u0639\u0630\u064a\u0628\u0629\u060c \u0645\u0633\u0642\u0637', titleTop: '\u0627\u062e\u062a\u0631 \u0627\u0644\u0633\u064a\u0627\u0631\u0629', titleBottom: '\u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0631\u062d\u0644\u062a\u0643.', lead: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0639\u064f\u0645\u0627\u0646 \u0645\u0639 \u062e\u064a\u0627\u0631\u0627\u062a \u062a\u0623\u062c\u064a\u0631 \u0645\u064a\u0633\u0651\u0631\u0629 \u062a\u0646\u0627\u0633\u0628 \u0631\u062d\u0644\u062a\u0643.', primaryCta: '\u062a\u0635\u0641\u062d \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a', secondaryCta: '\u0627\u0633\u062a\u0641\u0633\u0631 \u0627\u0644\u0622\u0646', note: '\u0645\u0641\u0647\u0648\u0645 \u0645\u0648\u0642\u0639 \u062a\u0635\u0648\u0631\u064a. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0645 \u0627\u0646\u062f \u0627\u0645 \u0644\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062a\u0648\u0627\u0641\u0631.' },
  search: { ...en.search, title: '\u0627\u0628\u062d\u062b \u0639\u0646 \u0633\u064a\u0627\u0631\u062a\u0643', hint: '\u062d\u062f\u062f \u062a\u0648\u0627\u0631\u064a\u062e\u0643 \u0648\u0641\u0626\u0629 \u0627\u0644\u0633\u064a\u0627\u0631\u0629. \u0627\u0644\u0628\u062d\u062b \u062a\u0648\u0636\u064a\u062d\u064a \u0648\u0644\u0627 \u064a\u0646\u0634\u0626 \u062d\u062c\u0632\u0627\u064b.', pickupLocation: '\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645', pickup: '\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645', returnLabel: '\u0627\u0644\u0625\u0631\u062c\u0627\u0639', pickupDate: '\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645', pickupTime: '\u0627\u0644\u0648\u0642\u062a', returnDate: '\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0631\u062c\u0627\u0639', returnTime: '\u0627\u0644\u0648\u0642\u062a', category: '\u0641\u0626\u0629 \u0627\u0644\u0633\u064a\u0627\u0631\u0629', allCategories: '\u062c\u0645\u064a\u0639 \u0627\u0644\u0641\u0626\u0627\u062a', button: '\u0639\u0631\u0636 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a', locations: { muscat: '\u0627\u0644\u0639\u0630\u064a\u0628\u0629\u060c \u0645\u0633\u0642\u0637', other: 'موقع آخر — للتفاهم' }, dateError: '\u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e.', note: '\u0644\u0627 \u064a\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u062d\u062c\u0632 \u0639\u0628\u0631 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639.' },
  trust: { ...en.trust, ratingLabel: '\u062a\u0642\u064a\u064a\u0645 \u062c\u0648\u062c\u0644', reviews: '\u0662\u0666\u0665 \u0645\u0631\u0627\u062c\u0639\u0629 \u0639\u0644\u0649 \u062c\u0648\u062c\u0644', sourceNote: 'معلومات التقييم وعدد المراجعات من قائمة جوجل العامة لام اند ام لتأجير السيارات. لا يتم عرض نصوص مراجعات أو شهادات عملاء في هذا المفهوم.', baseValue: '\u0627\u0644\u0639\u0630\u064a\u0628\u0629', baseLabel: '\u0645\u0633\u0642\u0637\u060c \u0639\u064f\u0645\u0627\u0646', contactLabel: '\u0627\u062a\u0635\u0644 \u0623\u0648 \u0631\u0627\u0633\u0644\u0646\u0627' },
  fleet: { ...en.fleet, periodTitle: 'مدة الإيجار', periodHint: 'اختر سعراً توضيحياً يومياً أو أسبوعياً أو شهرياً لمعرفة كيفية عرض السيارات. جميع المبالغ للتوضيح فقط.', periods: { daily: 'يومي', weekly: 'أسبوعي', monthly: 'شهري' }, perWeek: 'ريال عماني / أسبوع', perMonth: 'ريال عماني / شهر', eyebrow: '\u0633\u064a\u0627\u0631\u0627\u062a\u0646\u0627', title: '\u0633\u064a\u0627\u0631\u0629 \u0644\u0643\u0644 \u0631\u062d\u0644\u0629', lead: '\u062e\u064a\u0627\u0631\u0627\u062a \u062a\u0648\u0636\u064a\u062d\u064a\u0629 \u0645\u0646 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0648\u0627\u0644\u0633\u064a\u062f\u0627\u0646 \u0648\u0627\u0644\u062f\u0641\u0639 \u0627\u0644\u0631\u0628\u0627\u0639\u064a \u0648\u0627\u0644\u0641\u062e\u0645\u0629 \u0648\u0627\u0644\u0639\u0627\u0626\u0644\u064a\u0629. \u062e\u064a\u0627\u0631\u0627\u062a \u064a\u0648\u0645\u064a\u0629 \u0648\u0623\u0633\u0628\u0648\u0639\u064a\u0629 \u0648\u0634\u0647\u0631\u064a\u0629 \u0644\u0644\u0646\u0642\u0627\u0634.', disclaimer: '\u0645\u062d\u062a\u0648\u0649 \u062a\u0648\u0636\u064a\u062d\u064a \u0641\u0642\u0637. \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062a \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0644\u062a\u0648\u0627\u0641\u0631 \u0644\u064a\u0633\u062a \u0645\u0624\u0643\u062f\u0629 \u0645\u0646 \u0627\u0645 \u0627\u0646\u062f \u0627\u0645.', sample: '\u0646\u0645\u0648\u0630\u062c', perDay: '\u0631\u064a\u0627\u0644 \u0639\u0645\u0627\u0646\u064a / \u064a\u0648\u0645', seatsLabel: '\u0645\u0642\u0627\u0639\u062f', transmissionLabel: '\u0646\u0627\u0642\u0644 \u0627\u0644\u062d\u0631\u0643\u0629', fuelLabel: '\u0627\u0644\u0648\u0642\u0648\u062f', enquire: '\u0627\u0633\u062a\u0641\u0633\u0631 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0633\u064a\u0627\u0631\u0629', enquireShort: '\u0627\u0633\u062a\u0641\u0633\u0631', illustrative: '\u0645\u062b\u0627\u0644 \u062a\u0648\u0636\u064a\u062d\u064a', filters: { all: '\u062c\u0645\u064a\u0639 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a', economy: '\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629', sedan: '\u0633\u064a\u062f\u0627\u0646', suv: '\u062f\u0641\u0639 \u0631\u0628\u0627\u0639\u064a', luxury: '\u0641\u062e\u0645\u0629', family: '\u0639\u0627\u0626\u0644\u064a\u0629' }, categories: { economy: '\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629', sedan: '\u0633\u064a\u062f\u0627\u0646', suv: '\u062f\u0641\u0639 \u0631\u0628\u0627\u0639\u064a', luxury: '\u0641\u062e\u0645\u0629', family: '\u0639\u0627\u0626\u0644\u064a\u0629' }, transmissions: { automatic: '\u0623\u0648\u062a\u0648\u0645\u0627\u062a\u064a\u0643\u064a', manual: '\u064a\u062f\u0648\u064a' }, fuels: { petrol: '\u0628\u0646\u0632\u064a\u0646', electric: '\u0643\u0647\u0631\u0628\u0627\u0626\u064a', hybrid: '\u0647\u062c\u064a\u0646' }, empty: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0633\u064a\u0627\u0631\u0627\u062a \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629.', resultNote: (c, d) => d ? `${c} \u00b7 ${d}` : `${c} \u00b7 \u0643\u0644 \u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e` },
  explore: { ...en.explore, eyebrow: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0639\u0645\u0627\u0646', title: 'اكتشف عُمان على إيقاعك.', lead: '\u0645\u0646 \u0645\u0633\u0642\u0637 \u0625\u0644\u0649 \u0646\u0632\u0648\u0649 \u0648\u0635\u0648\u0631 \u0648\u0627\u0644\u062c\u0628\u0644 \u0627\u0644\u0623\u062e\u0636\u0631 \u0648\u0648\u0627\u062f\u064a \u0634\u0627\u0628\u060c \u062e\u0637\u0637 \u0644\u0631\u062d\u0644\u062a\u0643 \u0628\u062d\u0631\u064a\u0629.', note: '\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0644\u0644\u0625\u0644\u0647\u0627\u0645 \u0641\u0642\u0637. \u0627\u0645 \u0627\u0646\u062f \u0627\u0645 \u062a\u0624\u062c\u0631 \u0633\u064a\u0627\u0631\u0627\u062a \u0648\u0644\u0627 \u062a\u0642\u062f\u0645 \u062c\u0648\u0644\u0627\u062a \u0645\u0631\u0634\u062f\u0629.' },
  steps: {
    eyebrow: 'تجربة الإيجار',
    title: 'إيجار بسيط وواضح.',
    lead: 'بدون حساب وبدون نماذج طويلة. ثلاث خطوات واضحة من التصفح إلى تأكيد الإيجار.',
    items: [
      {
        title: 'اختر سيارتك',
        text: 'تصفح السيارات النموذجية واختر الفئة التي تناسب رحلتك — اقتصادية أو سيدان أو دفع رباعي أو عائلية أو فخمة.',
      },
      {
        title: 'حدد تواريخ الإيجار',
        text: 'اختر تواريخ وأوقات الاستلام والإرجاع حتى يتمكن فريق ام اند ام من التحقق من التوفر خلال إقامتك.',
      },
      {
        title: 'تواصل معنا للتأكيد',
        text: 'اتصل أو راسل ام اند ام لتأكيد التوفر والسعر اليومي وشروط الإيجار قبل استلام السيارة.',
      },
    ],
    note: 'إرسال استفسار عبر هذا الموقع التصوري لا ينشئ حجزاً. جميع الإيجارات تخضع لتأكيد ام اند ام.',
  },
  why: {
    eyebrow: 'لماذا ام اند ام',
    title: 'إيجار محلي بإدارة شخصية.',
    lead: 'طريقة مباشرة لاستئجار سيارة في عُمان — مع شخص حقيقي في الطرف الآخر من المحادثة.',
    items: [
      {
        title: 'استفسارات إيجار مريحة',
        text: 'ابدأ بمكالمة أو رسالة واتساب حول تواريخك والسيارة المفضلة وترتيبات الاستلام أو التوصيل. لا حاجة لحساب إلكتروني أو إجراءات دفع معقدة.',
      },
      {
        title: 'فئات متعددة من السيارات',
        text: 'فئات اقتصادية وسيدان ودفع رباعي وعائلية وفخمة تمنحك مرونة لاختيار السيارة المناسبة للرحلة.',
      },
      {
        title: 'خيارات إيجار مرنة',
        text: 'ناقش تواريخك وخططك مباشرة مع ام اند ام. تُتفق فترة الإيجار وشروطه وتُؤكد مع المؤسسة.',
      },
      {
        title: 'خدمة تركز على العميل',
        text: 'مؤسسة مقرها العذيبة تتميز بخدمة ودودة ومباشرة وسيارات نظيفة وحسنة التجهيز. وتتم معالجة الاستفسارات من الفريق بدلاً من نظام آلي.',
      },
      {
        title: 'تواصل سهل',
        text: 'تواصل مع ام اند ام عبر الهاتف أو واتساب أو نموذج الاستفسار. شارك تواريخك والسيارة المفضلة في دقائق.',
      },
    ],
  },
  about: {
    eyebrow: 'عن ام اند ام',
    title: 'مؤسسة تأجير سيارات محلية في العذيبة.',
    paragraphs: [
      'ام اند ام لتأجير السيارات مؤسسة لتأجير السيارات مقرها العذيبة في مسقط، سلطنة عُمان. هذا الموقع مفهوم مستقل يوضح كيف يمكن تقديم الخدمة عبر الإنترنت: فئات واضحة، وتجربة استفسار سهلة، وتواصل مباشر مع المؤسسة.',
      'ام اند ام مؤسسة لتأجير السيارات وليست شركة جولات سياحية. كل ما هنا صُمم لمساعدتك على طرح الأسئلة الصحيحة — التوفر والسعر اليومي والمستندات وترتيبات الاستلام — والحصول على إجابة مباشرة من الفريق.',
    ],
    stats: [
      { value: '4.8', label: 'تقييم جوجل' },
      { value: '265', label: 'مراجعة جوجل' },
      { value: 'العذيبة', label: 'مسقط، عُمان' },
    ],
    note: 'التقييم وعدد المراجعات مأخوذان من قائمة جوجل العامة. أمثلة السيارات والأسعار في هذا الموقع محتوى توضيحي.',
    imageAlt: 'سيارة دفع رباعي بيضاء عائلية على طريق جبلي',
  },
  contact: { ...en.contact, eyebrow: '\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631', title: '\u0644\u0646\u0633\u0627\u0639\u062f\u0643 \u0641\u064a \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642', lead: '\u0647\u0630\u0627 \u0646\u0645\u0648\u0630\u062c \u062a\u0635\u0648\u0631\u064a \u0644\u062a\u062c\u0647\u064a\u0632 \u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0643\u060c \u0648\u0644\u0627 \u064a\u0631\u062a\u0628\u0637 \u0628\u0646\u0638\u0627\u0645 \u0627\u0644\u062d\u062c\u0632 \u0644\u062f\u0649 \u0627\u0645 \u0627\u0646\u062f \u0627\u0645.', detailsTitle: '\u062a\u062d\u062f\u062b \u0645\u0639\u0646\u0627', phoneLabel: '\u0627\u0644\u0647\u0627\u062a\u0641', whatsappLabel: '\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0648\u0627\u062a\u0633\u0627\u0628', whatsappHint: '\u0623\u0631\u0633\u0644 \u062a\u0648\u0627\u0631\u064a\u062e\u0643 \u0648\u0641\u0626\u0629 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629.', locationLabel: '\u0627\u0644\u0645\u0648\u0642\u0639', address: '\u062e\u0644\u0641 \u0647\u0627\u064a\u0628\u0631 \u0645\u064a\u0631\u0627 \u0627\u0644\u0639\u0630\u064a\u0628\u0629\u060c \u0634\u0627\u0631\u0639 48\u060c \u0645\u0628\u0646\u0649 3891\u060c \u0637\u0631\u064a\u0642 4451\u060c \u0645\u0633\u0642\u0637 112\u060c \u0639\u0645\u0627\u0646', directions: '\u0627\u0644\u0627\u062a\u062c\u0627\u0647\u0627\u062a', mapTitle: '\u0645\u0648\u0642\u0639 \u0627\u0645 \u0627\u0646\u062f \u0627\u0645 \u0641\u064a \u0627\u0644\u0639\u0630\u064a\u0628\u0629', formTitle: '\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u062a\u0623\u062c\u064a\u0631', formLead: '\u0623\u062f\u062e\u0644 \u062a\u0641\u0627\u0635\u064a\u0644\u0643 \u0644\u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631.', fields: { name: '\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644', phone: '\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641', pickupDate: '\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645', returnDate: '\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0631\u062c\u0627\u0639', category: '\u0641\u0626\u0629 \u0627\u0644\u0633\u064a\u0627\u0631\u0629', namePlaceholder: '\u0627\u0633\u0645\u0643', phonePlaceholder: '+968 9xxx xxxx' }, allCategories: '\u0628\u062f\u0648\u0646 \u062a\u0641\u0636\u064a\u0644', submit: '\u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631', privacy: '\u0646\u0645\u0648\u0630\u062c \u062a\u0648\u0636\u064a\u062d\u064a. \u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u0644\u0627 \u062a\u063a\u0627\u062f\u0631 \u0627\u0644\u0645\u062a\u0635\u0641\u062d.', prefilled: (v) => `\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0628\u0634\u0623\u0646 ${v} (\u0645\u062b\u0627\u0644 \u062a\u0648\u0636\u064a\u062d\u064a).`, errors: { name: '\u0623\u062f\u062e\u0644 \u0627\u0644\u0627\u0633\u0645.', phone: '\u0623\u062f\u062e\u0644 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u0635\u062d\u064a\u062d.', pickup: '\u062d\u062f\u062f \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645.', return: '\u062d\u062f\u062f \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0631\u062c\u0627\u0639.', dateOrder: '\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0631\u062c\u0627\u0639 \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0628\u0639\u062f \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645.' }, success: { ...en.contact.success, title: '\u062a\u0645 \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u2014 \u0646\u0633\u062e\u0629 \u062a\u0648\u0636\u064a\u062d\u064a\u0629', body: '\u0644\u0645 \u064a\u064f\u0631\u0633\u0644 \u0634\u064a\u0621 \u0625\u0644\u0649 \u0627\u0645 \u0627\u0646\u062f \u0627\u0645 \u0648\u0644\u0645 \u064a\u062a\u0645 \u062d\u062c\u0632 \u0633\u064a\u0627\u0631\u0629. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0641\u0631\u064a\u0642 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0644\u062a\u0623\u0643\u064a\u062f.', call: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627', whatsapp: '\u0645\u062a\u0627\u0628\u0639\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628', edit: '\u062a\u0639\u062f\u064a\u0644', details: '\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644' } },
  footer: { ...en.footer, tagline: '\u062a\u0623\u062c\u064a\u0631 \u0633\u064a\u0627\u0631\u0627\u062a \u0641\u064a \u0645\u0633\u0642\u0637\u060c \u0639\u064f\u0645\u0627\u0646', fleetTitle: '\u0627\u0633\u062a\u0643\u0634\u0641', companyTitle: '\u0627\u0644\u0634\u0631\u0643\u0629', contactTitle: '\u0627\u0644\u062a\u0648\u0627\u0635\u0644', disclaimer: '\u0645\u0641\u0647\u0648\u0645 \u0645\u0648\u0642\u0639 \u0645\u0633\u062a\u0642\u0644 \u0645\u0646 TRIBAL\u00b3 \u0644\u0644\u0639\u0631\u0636. هذا ليس الموقع الرسمي لام اند ام لتأجير السيارات.', illustrative: '\u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0644\u062a\u0648\u0627\u0641\u0631 \u0623\u0645\u062b\u0644\u0629 \u062a\u0648\u0636\u064a\u062d\u064a\u0629 \u0641\u0642\u0637.', rights: '\u00a9 2026 TRIBAL\u00b3. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.', credit: 'الفكرة والتصميم — TRIBAL³' },
  language: { label: '\u0627\u0644\u0644\u063a\u0629', en: 'English', ar: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629' },
}

export const content: Record<Language, SiteContent> = { en, ar }
