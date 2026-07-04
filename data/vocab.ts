import { VocabWord } from '@/lib/types';

// ============================================================================
// WORDS — the connective tissue of the language: prepositions, particles,
// question words, greetings, adverbs, phrases, numbers, colors.
// NOT nouns / adjectives / verbs (those have their own sections) — no redundancy.
// ALL AI-drafted (draft: true) — PENDING Alaa's verification. Levantine (Shami).
// ============================================================================

export const VOCAB: VocabWord[] = [
  // ---- prepositions (the big one) ----
  { id: 'in', english: 'in', ar: 'في', ph: 'fi', category: 'prepositions', draft: true },
  { id: 'on', english: 'on', ar: 'على', ph: '3ala', category: 'prepositions', draft: true },
  { id: 'under', english: 'under', ar: 'تحت', ph: 'ta7t', category: 'prepositions', draft: true },
  { id: 'above', english: 'above / over', ar: 'فوق', ph: 'foo2', category: 'prepositions', draft: true },
  { id: 'behind', english: 'behind', ar: 'ورا', ph: 'wara', category: 'prepositions', draft: true },
  { id: 'in-front-of', english: 'in front of', ar: 'قدّام', ph: '2uddaam', category: 'prepositions', draft: true },
  { id: 'next-to', english: 'next to / beside', ar: 'جنب', ph: 'janb', category: 'prepositions', draft: true },
  { id: 'between', english: 'between', ar: 'بين', ph: 'bein', category: 'prepositions', draft: true },
  { id: 'inside', english: 'inside', ar: 'جوّا', ph: 'juwwa', category: 'prepositions', draft: true },
  { id: 'outside', english: 'outside', ar: 'برّا', ph: 'barra', category: 'prepositions', draft: true },
  { id: 'with', english: 'with', ar: 'مع', ph: 'ma3', category: 'prepositions', draft: true },
  { id: 'at-have', english: 'at / have (عند)', ar: 'عند', ph: '3ind', category: 'prepositions', draft: true },
  { id: 'from', english: 'from', ar: 'من', ph: 'min', category: 'prepositions', draft: true },
  { id: 'to', english: 'to (a place)', ar: 'لـ', ph: 'la', category: 'prepositions', draft: true },
  { id: 'until', english: 'until', ar: 'حتى', ph: '7atta', category: 'prepositions', draft: true },
  { id: 'about', english: 'about', ar: 'عن', ph: '3an', category: 'prepositions', draft: true },
  { id: 'without', english: 'without', ar: 'بدون', ph: 'bidoon', category: 'prepositions', draft: true },
  { id: 'after', english: 'after', ar: 'بعد', ph: 'ba3d', category: 'prepositions', draft: true },
  { id: 'before', english: 'before', ar: 'قبل', ph: '2abl', category: 'prepositions', draft: true },
  { id: 'like-as', english: 'like / as', ar: 'مثل', ph: 'mitel', category: 'prepositions', draft: true },
  { id: 'instead-of', english: 'instead of', ar: 'بدل', ph: 'badal', category: 'prepositions', draft: true },
  { id: 'around', english: 'around / about', ar: 'حوالي', ph: '7awaali', category: 'prepositions', draft: true },
  { id: 'toward', english: 'toward', ar: 'باتجاه', ph: 'bittijaah', category: 'prepositions', draft: true },
  { id: 'against', english: 'against', ar: 'ضد', ph: 'Didd', category: 'prepositions', draft: true },
  { id: 'during', english: 'during', ar: 'خلال', ph: 'khilaal', category: 'prepositions', draft: true },
  { id: 'far-from', english: 'far from', ar: 'بعيد عن', ph: 'b3eed 3an', category: 'prepositions', draft: true },
  { id: 'close-to', english: 'close to', ar: 'قريب من', ph: '2reeb min', category: 'prepositions', draft: true },
  { id: 'up', english: 'up (upward)', ar: 'لفوق', ph: 'la-foo2', category: 'prepositions', draft: true },
  { id: 'down', english: 'down (downward)', ar: 'لتحت', ph: 'la-ta7t', category: 'prepositions', draft: true },
  { id: 'on-top-of', english: 'on top of', ar: 'ع راس', ph: '3a raas', category: 'prepositions', draft: true },

  // ---- particles / connectors ----
  { id: 'and', english: 'and', ar: 'و', ph: 'w', category: 'particles', draft: true },
  { id: 'but', english: 'but / only', ar: 'بس', ph: 'bass', category: 'particles', draft: true },
  { id: 'or', english: 'or', ar: 'أو', ph: 'aw', category: 'particles', draft: true },
  { id: 'because', english: 'because', ar: 'لأنه', ph: 'la2inno', category: 'particles', draft: true },
  { id: 'so-that', english: 'so / in order to', ar: 'عشان', ph: '3ashaan', category: 'particles', draft: true },
  { id: 'if', english: 'if', ar: 'إذا', ph: 'iza', category: 'particles', draft: true },
  { id: 'also', english: 'also / too', ar: 'كمان', ph: 'kamaan', category: 'particles', draft: true },
  { id: 'still-yet', english: 'still / not yet', ar: 'لسا', ph: 'lissa', category: 'particles', draft: true },
  { id: 'then', english: 'then / afterwards', ar: 'بعدين', ph: 'ba3dein', category: 'particles', draft: true },
  { id: 'not', english: 'not', ar: 'مش', ph: 'mish', category: 'particles', draft: true },
  { id: 'there-is', english: 'there is', ar: 'في', ph: 'fi', category: 'particles', draft: true },
  { id: 'there-isnt', english: "there isn't", ar: 'ما في', ph: 'ma fi', category: 'particles', draft: true },
  { id: 'yes', english: 'yes', ar: 'آه', ph: 'aah', category: 'particles', draft: true },
  { id: 'no', english: 'no', ar: 'لأ', ph: 'la2', category: 'particles', draft: true },

  // ---- question words ----
  { id: 'what', english: 'what', ar: 'شو', ph: 'shu', category: 'questions', draft: true },
  { id: 'who', english: 'who', ar: 'مين', ph: 'meen', category: 'questions', draft: true },
  { id: 'where', english: 'where', ar: 'وين', ph: 'wein', category: 'questions', draft: true },
  { id: 'when', english: 'when', ar: 'إيمتى', ph: 'eimta', category: 'questions', draft: true },
  { id: 'why', english: 'why', ar: 'ليش', ph: 'leish', category: 'questions', draft: true },
  { id: 'how', english: 'how', ar: 'كيف', ph: 'keef', category: 'questions', draft: true },
  { id: 'how-much', english: 'how much', ar: 'قدّيش', ph: 'addeish', category: 'questions', draft: true },
  { id: 'how-many', english: 'how many', ar: 'كم', ph: 'kam', category: 'questions', draft: true },
  { id: 'which', english: 'which', ar: 'أيّ', ph: 'ayy', category: 'questions', draft: true },

  // ---- adverbs (time / place / manner) ----
  { id: 'now', english: 'now', ar: 'هلق', ph: 'halla2', category: 'adverbs', draft: true },
  { id: 'today', english: 'today', ar: 'اليوم', ph: 'il-yom', category: 'adverbs', draft: true },
  { id: 'tomorrow', english: 'tomorrow', ar: 'بكرا', ph: 'bukra', category: 'adverbs', draft: true },
  { id: 'yesterday', english: 'yesterday', ar: 'مبارح', ph: 'mbaari7', category: 'adverbs', draft: true },
  { id: 'always', english: 'always', ar: 'دايماً', ph: 'daayman', category: 'adverbs', draft: true },
  { id: 'never', english: 'never', ar: 'أبداً', ph: 'abadan', category: 'adverbs', draft: true },
  { id: 'sometimes', english: 'sometimes', ar: 'أحياناً', ph: 'a7yaanan', category: 'adverbs', draft: true },
  { id: 'together', english: 'together', ar: 'مع بعض', ph: 'ma3 ba3D', category: 'adverbs', draft: true },
  { id: 'again', english: 'again', ar: 'كمان مرة', ph: 'kamaan marra', category: 'adverbs', draft: true },
  { id: 'quickly', english: 'quickly', ar: 'بسرعة', ph: 'bsir3a', category: 'adverbs', draft: true },
  { id: 'slowly', english: 'slowly', ar: 'على مهل', ph: '3ala mahl', category: 'adverbs', draft: true },
  { id: 'early', english: 'early', ar: 'بكير', ph: 'bakkeer', category: 'adverbs', draft: true },
  { id: 'late-adv', english: 'late', ar: 'متأخر', ph: 'mit2akher', category: 'adverbs', draft: true },
  { id: 'very', english: 'very / a lot', ar: 'كتير', ph: 'kteer', category: 'adverbs', draft: true },
  { id: 'a-little', english: 'a little', ar: 'شوي', ph: 'shwayy', category: 'adverbs', draft: true },
  { id: 'here', english: 'here', ar: 'هون', ph: 'hon', category: 'adverbs', draft: true },
  { id: 'there', english: 'there', ar: 'هنيك', ph: 'hneek', category: 'adverbs', draft: true },
  { id: 'like-this', english: 'like this', ar: 'هيك', ph: 'heik', category: 'adverbs', draft: true },

  // ---- greetings ----
  { id: 'hello', english: 'hello', ar: 'مرحبا', ph: 'mar7aba', category: 'greetings', draft: true },
  { id: 'welcome', english: 'welcome / hi', ar: 'أهلا وسهلا', ph: 'ahlan w sahlan', category: 'greetings', draft: true },
  { id: 'thanks', english: 'thanks', ar: 'شكراً', ph: 'shukran', category: 'greetings', draft: true },
  { id: 'please', english: 'please', ar: 'لو سمحت', ph: 'law sama7t', category: 'greetings', draft: true },
  { id: 'sorry', english: 'sorry', ar: 'آسف', ph: 'aasif', category: 'greetings', draft: true },
  { id: 'goodbye', english: 'goodbye', ar: 'مع السلامة', ph: 'ma3 as-salaame', category: 'greetings', draft: true },
  { id: 'how-are-you', english: 'how are you', ar: 'كيفك', ph: 'keefak', category: 'greetings', draft: true },
  { id: 'good-morning', english: 'good morning', ar: 'صباح الخير', ph: 'saba7 el-kheir', category: 'greetings', draft: true },
  { id: 'good-evening', english: 'good evening', ar: 'مسا الخير', ph: 'masa el-kheir', category: 'greetings', draft: true },
  { id: 'good-night', english: 'good night', ar: 'تصبح على خير', ph: 'tisba7 3ala kheir', category: 'greetings', draft: true },
  { id: 'peace-greeting', english: 'peace be upon you', ar: 'السلام عليكم', ph: 'as-salaamu 3aleikum', category: 'greetings', draft: true },
  { id: 'congrats', english: 'congratulations', ar: 'مبروك', ph: 'mabrook', category: 'greetings', draft: true },
  { id: 'see-you', english: 'see you', ar: 'بشوفك', ph: 'bshoofak', category: 'greetings', draft: true },

  // ---- common phrases ----
  { id: 'i-want', english: 'I want', ar: 'بدّي', ph: 'biddi', category: 'phrases', draft: true },
  { id: 'i-have', english: 'I have', ar: 'عندي', ph: '3indi', category: 'phrases', draft: true },
  { id: 'i-dont-know', english: "I don't know", ar: 'ما بعرف', ph: 'ma ba3ref', category: 'phrases', draft: true },
  { id: 'whats-your-name', english: "what's your name", ar: 'شو اسمك', ph: 'shu ismak', category: 'phrases', draft: true },
  { id: 'no-problem', english: 'no problem', ar: 'ما في مشكلة', ph: 'ma fi mushkle', category: 'phrases', draft: true },
  { id: 'inshallah', english: 'God willing / inshallah', ar: 'إن شاء الله', ph: 'inshallah', category: 'phrases', draft: true },
  { id: 'lets-go', english: "let's go / come on", ar: 'يلا', ph: 'yalla', category: 'phrases', draft: true },
  { id: 'okay-fine', english: 'okay / fine', ar: 'طيّب', ph: 'Tayyeb', category: 'phrases', draft: true },
  { id: 'thank-god', english: 'thank God', ar: 'الحمد لله', ph: 'il7amdulillah', category: 'phrases', draft: true },
  { id: 'never-mind', english: 'never mind', ar: 'ولا يهمّك', ph: 'wala yhimmak', category: 'phrases', draft: true },
  { id: 'thats-it', english: "that's it", ar: 'بس هيك', ph: 'bass heik', category: 'phrases', draft: true },
  { id: 'excuse-me', english: 'excuse me', ar: 'عن إذنك', ph: '3an iznak', category: 'phrases', draft: true },
  { id: 'of-course', english: 'of course', ar: 'أكيد', ph: 'akeed', category: 'phrases', draft: true },
  { id: 'maybe', english: 'maybe', ar: 'يمكن', ph: 'yimken', category: 'phrases', draft: true },

  // ---- numbers ----
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

  // ---- colors ----
  { id: 'red', english: 'red', ar: 'أحمر', ph: 'a7mar', category: 'colors', draft: true },
  { id: 'blue', english: 'blue', ar: 'أزرق', ph: 'azra2', category: 'colors', draft: true },
  { id: 'green', english: 'green', ar: 'أخضر', ph: 'akh9ar', category: 'colors', draft: true },
  { id: 'yellow', english: 'yellow', ar: 'أصفر', ph: 'asfar', category: 'colors', draft: true },
  { id: 'black', english: 'black', ar: 'أسود', ph: 'aswad', category: 'colors', draft: true },
  { id: 'white', english: 'white', ar: 'أبيض', ph: 'abyaD', category: 'colors', draft: true },
  { id: 'brown', english: 'brown', ar: 'بني', ph: 'bunni', category: 'colors', draft: true },
  { id: 'orange-color', english: 'orange', ar: 'برتقالي', ph: 'burtu2aani', category: 'colors', draft: true },
  { id: 'pink', english: 'pink', ar: 'وردي', ph: 'wardi', category: 'colors', draft: true },
  { id: 'purple', english: 'purple', ar: 'بنفسجي', ph: 'banafsaji', category: 'colors', draft: true },
  { id: 'gray', english: 'gray', ar: 'رمادي', ph: 'rmaadi', category: 'colors', draft: true },
  { id: 'gold', english: 'gold', ar: 'ذهبي', ph: 'zahabi', category: 'colors', draft: true },
  { id: 'silver', english: 'silver', ar: 'فضّي', ph: 'faDDi', category: 'colors', draft: true },
  { id: 'navy', english: 'navy', ar: 'كحلي', ph: 'ku7li', category: 'colors', draft: true },
  { id: 'beige', english: 'beige', ar: 'بيج', ph: 'beige', category: 'colors', draft: true },
  { id: 'turquoise', english: 'turquoise', ar: 'فيروزي', ph: 'fayroozi', category: 'colors', draft: true },
];

export const VOCAB_CATEGORIES: string[] = Array.from(new Set(VOCAB.map((w) => w.category)));

export function vocabByCategory(cat: string): VocabWord[] {
  return VOCAB.filter((w) => w.category === cat);
}
