import { VocabWord } from '@/lib/types';

// ============================================================================
// VOCABULARY BANK — Levantine (Shami) beginner words.
// ALL entries are AI-drafted (draft: true) and PENDING Alaa's verification.
// Spoken forms preferred over Fusha where they diverge.
// ============================================================================

export const VOCAB: VocabWord[] = [
  // greetings
  { id: 'hello', english: 'hello', ar: 'مرحبا', ph: 'mar7aba', category: 'greetings', draft: true },
  { id: 'welcome', english: 'welcome', ar: 'أهلا وسهلا', ph: 'ahlan w sahlan', category: 'greetings', draft: true },
  { id: 'thanks', english: 'thanks', ar: 'شكرا', ph: 'shukran', category: 'greetings', draft: true },
  { id: 'please', english: 'please', ar: 'لو سمحت', ph: 'law sama7t', category: 'greetings', draft: true },
  { id: 'sorry', english: 'sorry', ar: 'آسف', ph: 'aasif', category: 'greetings', draft: true },
  { id: 'goodbye', english: 'goodbye', ar: 'مع السلامة', ph: 'ma3 as-salaame', category: 'greetings', draft: true },
  { id: 'how-are-you', english: 'how are you', ar: 'كيفك', ph: 'keefak', category: 'greetings', draft: true },
  { id: 'good-morning', english: 'good morning', ar: 'صباح الخير', ph: 'saba7 el-kheir', category: 'greetings', draft: true },
  { id: 'good-night', english: 'good night', ar: 'تصبح على خير', ph: 'tisba7 3ala kheir', category: 'greetings', draft: true },
  { id: 'peace-greeting', english: 'peace be upon you', ar: 'السلام عليكم', ph: 'as-salaamu 3aleikum', category: 'greetings', draft: true },
  { id: 'im-fine', english: "I'm fine", ar: 'منيح', ph: 'mnee7', category: 'greetings', draft: true },
  { id: 'congrats', english: 'congratulations', ar: 'مبروك', ph: 'mabrook', category: 'greetings', draft: true },

  // people-family
  { id: 'mother', english: 'mother', ar: 'إم', ph: 'imm', category: 'people-family', draft: true },
  { id: 'father', english: 'father', ar: 'أب', ph: 'abb', category: 'people-family', draft: true },
  { id: 'brother', english: 'brother', ar: 'أخ', ph: 'akh', category: 'people-family', draft: true },
  { id: 'sister', english: 'sister', ar: 'أخت', ph: 'ukht', category: 'people-family', draft: true },
  { id: 'son', english: 'son', ar: 'إبن', ph: 'ibn', category: 'people-family', draft: true },
  { id: 'daughter', english: 'daughter', ar: 'بنت', ph: 'bint', category: 'people-family', draft: true },
  { id: 'friend', english: 'friend', ar: 'صاحب', ph: 'saa7eb', category: 'people-family', draft: true },
  { id: 'man', english: 'man', ar: 'زلمة', ph: 'zalame', category: 'people-family', draft: true },
  { id: 'woman', english: 'woman', ar: 'مرا', ph: 'mara', category: 'people-family', draft: true },
  { id: 'child', english: 'child', ar: 'ولد', ph: 'walad', category: 'people-family', draft: true },
  { id: 'boy', english: 'boy', ar: 'صبي', ph: 'sabi', category: 'people-family', draft: true },
  { id: 'wife', english: 'wife', ar: 'مرت', ph: 'mart', category: 'people-family', draft: true },
  { id: 'grandmother', english: 'grandmother', ar: 'تيتا', ph: 'teeta', category: 'people-family', draft: true },

  // food-drink
  { id: 'bread', english: 'bread', ar: 'خبز', ph: 'khubz', category: 'food-drink', draft: true },
  { id: 'water', english: 'water', ar: 'مي', ph: 'mayy', category: 'food-drink', draft: true },
  { id: 'coffee', english: 'coffee', ar: 'قهوة', ph: 'qahwe', category: 'food-drink', draft: true },
  { id: 'tea', english: 'tea', ar: 'شاي', ph: 'shaay', category: 'food-drink', draft: true },
  { id: 'rice', english: 'rice', ar: 'رزّ', ph: 'rozz', category: 'food-drink', draft: true },
  { id: 'chicken', english: 'chicken', ar: 'جاج', ph: 'jaaj', category: 'food-drink', draft: true },
  { id: 'meat', english: 'meat', ar: 'لحمة', ph: 'la7me', category: 'food-drink', draft: true },
  { id: 'egg', english: 'egg', ar: 'بيضة', ph: 'bei9a', category: 'food-drink', draft: true },
  { id: 'fruit', english: 'fruit', ar: 'فواكه', ph: 'fawaakeh', category: 'food-drink', draft: true },
  { id: 'apple', english: 'apple', ar: 'تفاحة', ph: 'tuffaa7a', category: 'food-drink', draft: true },
  { id: 'milk', english: 'milk', ar: 'حليب', ph: '7aleeb', category: 'food-drink', draft: true },
  { id: 'sugar', english: 'sugar', ar: 'سكر', ph: 'sukkar', category: 'food-drink', draft: true },
  { id: 'salt', english: 'salt', ar: 'ملح', ph: 'mel7', category: 'food-drink', draft: true },
  { id: 'cheese', english: 'cheese', ar: 'جبنة', ph: 'jibne', category: 'food-drink', draft: true },

  // home
  { id: 'house', english: 'house', ar: 'بيت', ph: 'beit', category: 'home', draft: true },
  { id: 'room', english: 'room', ar: 'أوضة', ph: 'oo9a', category: 'home', draft: true },
  { id: 'door', english: 'door', ar: 'باب', ph: 'baab', category: 'home', draft: true },
  { id: 'window', english: 'window', ar: 'شبّاك', ph: 'shubbaak', category: 'home', draft: true },
  { id: 'kitchen', english: 'kitchen', ar: 'مطبخ', ph: 'maTbakh', category: 'home', draft: true },
  { id: 'bed', english: 'bed', ar: 'تخت', ph: 'takht', category: 'home', draft: true },
  { id: 'table', english: 'table', ar: 'طاولة', ph: 'Taawle', category: 'home', draft: true },
  { id: 'chair', english: 'chair', ar: 'كرسي', ph: 'kursi', category: 'home', draft: true },
  { id: 'key', english: 'key', ar: 'مفتاح', ph: 'miftaa7', category: 'home', draft: true },
  { id: 'bathroom', english: 'bathroom', ar: 'حمّام', ph: '7ammaam', category: 'home', draft: true },
  { id: 'money', english: 'money', ar: 'مصاري', ph: 'masaari', category: 'home', draft: true },

  // places
  { id: 'school', english: 'school', ar: 'مدرسة', ph: 'madrase', category: 'places', draft: true },
  { id: 'work', english: 'work', ar: 'شغل', ph: 'shughel', category: 'places', draft: true },
  { id: 'market', english: 'market', ar: 'سوق', ph: 'soo2', category: 'places', draft: true },
  { id: 'street', english: 'street', ar: 'شارع', ph: 'shaari3', category: 'places', draft: true },
  { id: 'city', english: 'city', ar: 'مدينة', ph: 'madeene', category: 'places', draft: true },
  { id: 'country', english: 'country', ar: 'بلد', ph: 'balad', category: 'places', draft: true },
  { id: 'restaurant', english: 'restaurant', ar: 'مطعم', ph: 'maT3am', category: 'places', draft: true },
  { id: 'hospital', english: 'hospital', ar: 'مستشفى', ph: 'mustashfa', category: 'places', draft: true },
  { id: 'mosque', english: 'mosque', ar: 'جامع', ph: 'jaame3', category: 'places', draft: true },
  { id: 'shop', english: 'shop', ar: 'دكّان', ph: 'dukkaan', category: 'places', draft: true },
  { id: 'airport', english: 'airport', ar: 'مطار', ph: 'maTaar', category: 'places', draft: true },
  { id: 'car', english: 'car', ar: 'سيارة', ph: 'sayyaara', category: 'places', draft: true },
  { id: 'university', english: 'university', ar: 'جامعة', ph: 'jaam3a', category: 'places', draft: true },

  // time
  { id: 'day', english: 'day', ar: 'يوم', ph: 'yom', category: 'time', draft: true },
  { id: 'night', english: 'night', ar: 'ليل', ph: 'leil', category: 'time', draft: true },
  { id: 'morning', english: 'morning', ar: 'صبح', ph: 'sob7', category: 'time', draft: true },
  { id: 'evening', english: 'evening', ar: 'مسا', ph: 'masa', category: 'time', draft: true },
  { id: 'today', english: 'today', ar: 'اليوم', ph: 'il-yom', category: 'time', draft: true },
  { id: 'tomorrow', english: 'tomorrow', ar: 'بكرا', ph: 'bukra', category: 'time', draft: true },
  { id: 'yesterday', english: 'yesterday', ar: 'مبارح', ph: 'mbaari7', category: 'time', draft: true },
  { id: 'now', english: 'now', ar: 'هلق', ph: 'halla2', category: 'time', draft: true },
  { id: 'week', english: 'week', ar: 'أسبوع', ph: 'usboo3', category: 'time', draft: true },
  { id: 'month', english: 'month', ar: 'شهر', ph: 'shaher', category: 'time', draft: true },
  { id: 'year', english: 'year', ar: 'سنة', ph: 'sane', category: 'time', draft: true },
  { id: 'hour', english: 'hour', ar: 'ساعة', ph: 'saa3a', category: 'time', draft: true },
  { id: 'minute', english: 'minute', ar: 'دقيقة', ph: 'da2ee2a', category: 'time', draft: true },

  // adjectives
  { id: 'big', english: 'big', ar: 'كبير', ph: 'kbeer', category: 'adjectives', draft: true },
  { id: 'small', english: 'small', ar: 'زغير', ph: 'zgheer', category: 'adjectives', draft: true },
  { id: 'good', english: 'good', ar: 'منيح', ph: 'mnee7', category: 'adjectives', draft: true },
  { id: 'bad', english: 'bad', ar: 'عاطل', ph: '3aaTel', category: 'adjectives', draft: true },
  { id: 'beautiful', english: 'beautiful', ar: 'حلو', ph: '7ilo', category: 'adjectives', draft: true },
  { id: 'hot', english: 'hot', ar: 'سخن', ph: 'sukhn', category: 'adjectives', draft: true },
  { id: 'cold', english: 'cold', ar: 'بارد', ph: 'baared', category: 'adjectives', draft: true },
  { id: 'new', english: 'new', ar: 'جديد', ph: 'jdeed', category: 'adjectives', draft: true },
  { id: 'old', english: 'old', ar: 'قديم', ph: 'qadeem', category: 'adjectives', draft: true },
  { id: 'fast', english: 'fast', ar: 'سريع', ph: 'saree3', category: 'adjectives', draft: true },
  { id: 'tired', english: 'tired', ar: 'تعبان', ph: 'ta3baan', category: 'adjectives', draft: true },
  { id: 'happy', english: 'happy', ar: 'مبسوط', ph: 'mabsooT', category: 'adjectives', draft: true },
  { id: 'sad', english: 'sad', ar: 'زعلان', ph: 'za3laan', category: 'adjectives', draft: true },
  { id: 'hungry', english: 'hungry', ar: 'جوعان', ph: 'joo3aan', category: 'adjectives', draft: true },
  { id: 'thirsty', english: 'thirsty', ar: 'عطشان', ph: '3aTshaan', category: 'adjectives', draft: true },
  { id: 'cheap', english: 'cheap', ar: 'رخيص', ph: 'rkhees', category: 'adjectives', draft: true },
  { id: 'expensive', english: 'expensive', ar: 'غالي', ph: 'ghaali', category: 'adjectives', draft: true },
  { id: 'easy', english: 'easy', ar: 'سهل', ph: 'sahel', category: 'adjectives', draft: true },
  { id: 'difficult', english: 'difficult', ar: 'صعب', ph: 'sa3eb', category: 'adjectives', draft: true },

  // question-words
  { id: 'what', english: 'what', ar: 'شو', ph: 'shu', category: 'question-words', draft: true },
  { id: 'who', english: 'who', ar: 'مين', ph: 'meen', category: 'question-words', draft: true },
  { id: 'where', english: 'where', ar: 'وين', ph: 'wein', category: 'question-words', draft: true },
  { id: 'when', english: 'when', ar: 'إيمتى', ph: 'eimta', category: 'question-words', draft: true },
  { id: 'why', english: 'why', ar: 'ليش', ph: 'leish', category: 'question-words', draft: true },
  { id: 'how', english: 'how', ar: 'كيف', ph: 'keef', category: 'question-words', draft: true },
  { id: 'how-much', english: 'how much', ar: 'قدّيش', ph: 'addeish', category: 'question-words', draft: true },
  { id: 'which', english: 'which', ar: 'أيّ', ph: 'ayy', category: 'question-words', draft: true },
  { id: 'how-many', english: 'how many', ar: 'كم', ph: 'kam', category: 'question-words', draft: true },

  // pronouns-particles
  { id: 'i', english: 'I', ar: 'أنا', ph: 'ana', category: 'pronouns-particles', draft: true },
  { id: 'you-m', english: 'you (m)', ar: 'إنت', ph: 'inta', category: 'pronouns-particles', draft: true },
  { id: 'you-f', english: 'you (f)', ar: 'إنتي', ph: 'inti', category: 'pronouns-particles', draft: true },
  { id: 'he', english: 'he', ar: 'هو', ph: 'huwwe', category: 'pronouns-particles', draft: true },
  { id: 'she', english: 'she', ar: 'هي', ph: 'hiyye', category: 'pronouns-particles', draft: true },
  { id: 'we', english: 'we', ar: 'إحنا', ph: 'i7na', category: 'pronouns-particles', draft: true },
  { id: 'they', english: 'they', ar: 'هنّي', ph: 'hinne', category: 'pronouns-particles', draft: true },
  { id: 'this', english: 'this', ar: 'هادا', ph: 'haada', category: 'pronouns-particles', draft: true },
  { id: 'that', english: 'that', ar: 'هداك', ph: 'hadaak', category: 'pronouns-particles', draft: true },
  { id: 'here', english: 'here', ar: 'هون', ph: 'hon', category: 'pronouns-particles', draft: true },
  { id: 'there', english: 'there', ar: 'هنيك', ph: 'hneek', category: 'pronouns-particles', draft: true },
  { id: 'yes', english: 'yes', ar: 'أيوا', ph: 'aywa', category: 'pronouns-particles', draft: true },
  { id: 'no', english: 'no', ar: 'لأ', ph: 'la2', category: 'pronouns-particles', draft: true },
  { id: 'and', english: 'and', ar: 'و', ph: 'w', category: 'pronouns-particles', draft: true },
  { id: 'but', english: 'but', ar: 'بس', ph: 'bass', category: 'pronouns-particles', draft: true },
  { id: 'with', english: 'with', ar: 'مع', ph: 'ma3', category: 'pronouns-particles', draft: true },
  { id: 'from', english: 'from', ar: 'من', ph: 'min', category: 'pronouns-particles', draft: true },
  { id: 'in', english: 'in', ar: 'في', ph: 'fi', category: 'pronouns-particles', draft: true },
  { id: 'on', english: 'on', ar: 'على', ph: '3ala', category: 'pronouns-particles', draft: true },
  { id: 'not', english: 'not', ar: 'مش', ph: 'mish', category: 'pronouns-particles', draft: true },
  { id: 'like-this', english: 'like this', ar: 'هيك', ph: 'heik', category: 'pronouns-particles', draft: true },

  // numbers
  { id: 'one', english: 'one', ar: 'واحد', ph: 'waa7ed', category: 'numbers', draft: true },
  { id: 'two', english: 'two', ar: 'تنين', ph: 'tnein', category: 'numbers', draft: true },
  { id: 'three', english: 'three', ar: 'تلاتة', ph: 'tlaate', category: 'numbers', draft: true },
  { id: 'four', english: 'four', ar: 'أربعة', ph: 'arb3a', category: 'numbers', draft: true },
  { id: 'five', english: 'five', ar: 'خمسة', ph: 'khamse', category: 'numbers', draft: true },
  { id: 'six', english: 'six', ar: 'ستّة', ph: 'sitte', category: 'numbers', draft: true },
  { id: 'seven', english: 'seven', ar: 'سبعة', ph: 'sab3a', category: 'numbers', draft: true },
  { id: 'eight', english: 'eight', ar: 'تمانية', ph: 'tmaanye', category: 'numbers', draft: true },
  { id: 'nine', english: 'nine', ar: 'تسعة', ph: 'tis3a', category: 'numbers', draft: true },
  { id: 'ten', english: 'ten', ar: 'عشرة', ph: '3ashra', category: 'numbers', draft: true },
  { id: 'twenty', english: 'twenty', ar: 'عشرين', ph: '3ishreen', category: 'numbers', draft: true },
  { id: 'hundred', english: 'hundred', ar: 'مية', ph: 'miyye', category: 'numbers', draft: true },
  { id: 'thousand', english: 'thousand', ar: 'ألف', ph: 'alf', category: 'numbers', draft: true },

  // colors
  { id: 'red', english: 'red', ar: 'أحمر', ph: 'a7mar', category: 'colors', draft: true },
  { id: 'blue', english: 'blue', ar: 'أزرق', ph: 'azra2', category: 'colors', draft: true },
  { id: 'green', english: 'green', ar: 'أخضر', ph: 'akh9ar', category: 'colors', draft: true },
  { id: 'yellow', english: 'yellow', ar: 'أصفر', ph: 'asfar', category: 'colors', draft: true },
  { id: 'black', english: 'black', ar: 'أسود', ph: 'aswad', category: 'colors', draft: true },
  { id: 'white', english: 'white', ar: 'أبيض', ph: 'abya9', category: 'colors', draft: true },
  { id: 'brown', english: 'brown', ar: 'بني', ph: 'bunni', category: 'colors', draft: true },
  { id: 'orange-color', english: 'orange', ar: 'برتقالي', ph: 'burtu2aani', category: 'colors', draft: true },

  // body
  { id: 'head', english: 'head', ar: 'راس', ph: 'raas', category: 'body', draft: true },
  { id: 'hand', english: 'hand', ar: 'إيد', ph: 'eed', category: 'body', draft: true },
  { id: 'eye', english: 'eye', ar: 'عين', ph: '3ein', category: 'body', draft: true },
  { id: 'foot', english: 'foot', ar: 'إجر', ph: 'ijr', category: 'body', draft: true },
  { id: 'heart', english: 'heart', ar: 'قلب', ph: 'qalb', category: 'body', draft: true },
  { id: 'stomach', english: 'stomach', ar: 'بطن', ph: 'baTen', category: 'body', draft: true },
  { id: 'hair', english: 'hair', ar: 'شعر', ph: 'sha3er', category: 'body', draft: true },
  { id: 'face', english: 'face', ar: 'وجّ', ph: 'wijj', category: 'body', draft: true },
  { id: 'mouth', english: 'mouth', ar: 'تمّ', ph: 'timm', category: 'body', draft: true },
  { id: 'tooth', english: 'tooth', ar: 'سنّ', ph: 'sinn', category: 'body', draft: true },

  // common-phrases
  { id: 'i-dont-know', english: "I don't know", ar: 'ما بعرف', ph: 'ma ba3ref', category: 'common-phrases', draft: true },
  { id: 'whats-your-name', english: "what's your name", ar: 'شو إسمك', ph: 'shu ismak', category: 'common-phrases', draft: true },
  { id: 'no-problem', english: 'no problem', ar: 'ما في مشكلة', ph: 'ma fi mushkle', category: 'common-phrases', draft: true },
  { id: 'inshallah', english: 'God willing / inshallah', ar: 'إن شاء الله', ph: 'inshallah', category: 'common-phrases', draft: true },
  { id: 'a-little', english: 'a little', ar: 'شوي', ph: 'shwayy', category: 'common-phrases', draft: true },
  { id: 'a-lot', english: 'a lot', ar: 'كتير', ph: 'kteer', category: 'common-phrases', draft: true },
  { id: 'of-course', english: 'of course', ar: 'أكيد', ph: 'akeed', category: 'common-phrases', draft: true },
  { id: 'maybe', english: 'maybe', ar: 'يمكن', ph: 'yimken', category: 'common-phrases', draft: true },
  { id: 'lets-go', english: "let's go / come on", ar: 'يلا', ph: 'yalla', category: 'common-phrases', draft: true },
  { id: 'okay-fine', english: 'okay / fine', ar: 'طيّب', ph: 'Tayyeb', category: 'common-phrases', draft: true },
];

export const VOCAB_CATEGORIES: string[] = Array.from(new Set(VOCAB.map((w) => w.category)));

export function vocabByCategory(cat: string): VocabWord[] {
  return VOCAB.filter((w) => w.category === cat);
}
