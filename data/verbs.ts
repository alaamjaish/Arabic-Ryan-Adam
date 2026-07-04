import { Verb } from '@/lib/types';

// ============================================================================
// THE VERB BANK
// ----------------------------------------------------------------------------
// Each verb is anchored on its present-tense "I" form (arPresent / phPresent)
// plus the two memorized past anchors: pastAna (past of انا) and pastHuwa
// (past of هو). The conjugation engine derives everything else.
//
//   draft: false  → from Alaa's original PDF (already verified)
//   draft: true   → AI-drafted expansion, PENDING Alaa's verification
//
// Transliteration: 7=ح, 3=ع, kh=خ, sh=ش, gh=غ, q=ق, DH/9=emphatic.
// ============================================================================

export const VERBS: Verb[] = [
  // ----- FAMILY 1 — Middle Vowel (verified, from PDF) -----------------------
  { id: 'be', english: 'I be', arPresent: 'أكون', phPresent: 'Akoon', family: 1, pastAna: { ar: 'كنت', ph: 'Kunt' }, pastHuwa: { ar: 'كان', ph: 'Kan' } },
  { id: 'go', english: 'I go', arPresent: 'أروح', phPresent: 'Aroo7', family: 1, pastAna: { ar: 'رحت', ph: 'Ru7t' }, pastHuwa: { ar: 'راح', ph: 'Ra7' } },
  { id: 'become', english: 'I become', arPresent: 'أصير', phPresent: 'Aseer', family: 1, pastAna: { ar: 'صرت', ph: 'Sirt' }, pastHuwa: { ar: 'صار', ph: 'Saar' } },
  { id: 'see', english: 'I see', arPresent: 'أشوف', phPresent: 'Ashuuf', family: 1, pastAna: { ar: 'شفت', ph: 'Shuft' }, pastHuwa: { ar: 'شاف', ph: 'Shaaf' } },
  { id: 'live', english: 'I live', arPresent: 'أعيش', phPresent: 'A3eesh', family: 1, pastAna: { ar: 'عشت', ph: '3isht' }, pastHuwa: { ar: 'عاش', ph: '3aash' } },
  { id: 'bring', english: 'I bring', arPresent: 'أجيب', phPresent: 'Ajeeb', family: 1, pastAna: { ar: 'جبت', ph: 'Jibt' }, pastHuwa: { ar: 'جاب', ph: 'Jaab' } },
  { id: 'sell', english: 'I sell', arPresent: 'أبيع', phPresent: 'Abee3', family: 1, pastAna: { ar: 'بعت', ph: 'Bi3t' }, pastHuwa: { ar: 'باع', ph: 'Baa3' } },
  { id: 'win', english: 'I win', arPresent: 'أفوز', phPresent: 'Afooz', family: 1, pastAna: { ar: 'فزت', ph: 'Fuzt' }, pastHuwa: { ar: 'فاز', ph: 'Faaz' } },
  { id: 'hunt', english: 'I hunt', arPresent: 'أصيد', phPresent: 'Aseed', family: 1, pastAna: { ar: 'صدت', ph: 'Sidt' }, pastHuwa: { ar: 'صاد', ph: 'Saad' } },
  { id: 'carry', english: 'I carry', arPresent: 'أشيل', phPresent: 'Asheel', family: 1, pastAna: { ar: 'شلت', ph: 'Shilt' }, pastHuwa: { ar: 'شال', ph: 'Shaal' } },
  { id: 'sleep', english: 'I sleep', arPresent: 'أنام', phPresent: 'Anaam', family: 1, pastAna: { ar: 'نمت', ph: 'Nimt' }, pastHuwa: { ar: 'نام', ph: 'Naam' } },
  { id: 'visit', english: 'I visit', arPresent: 'أزور', phPresent: 'Azoor', family: 1, pastAna: { ar: 'زرت', ph: 'Zurt' }, pastHuwa: { ar: 'زار', ph: 'Zaar' } },
  { id: 'fly', english: 'I fly', arPresent: 'أطير', phPresent: 'Ateer', family: 1, pastAna: { ar: 'طرت', ph: 'Tirt' }, pastHuwa: { ar: 'طار', ph: 'Taar' } },
  { id: 'lean', english: 'I lean', arPresent: 'أميل', phPresent: 'Ameel', family: 1, pastAna: { ar: 'ملت', ph: 'Milt' }, pastHuwa: { ar: 'مال', ph: 'Maal' } },
  { id: 'drive', english: 'I drive', arPresent: 'أسوق', phPresent: 'Asooq', family: 1, pastAna: { ar: 'سقت', ph: 'Suqt' }, pastHuwa: { ar: 'ساق', ph: 'Saaq' } },
  { id: 'say', english: 'I say', arPresent: 'أقول', phPresent: 'Aqool', family: 1, pastAna: { ar: 'قلت', ph: 'Qult' }, pastHuwa: { ar: 'قال', ph: 'Qaal' } },
  { id: 'die', english: 'I die', arPresent: 'أموت', phPresent: 'Amoot', family: 1, pastAna: { ar: 'مت', ph: 'Mutt' }, pastHuwa: { ar: 'مات', ph: 'Maat' } },
  { id: 'enter', english: 'I enter', arPresent: 'أفوت', phPresent: 'Afoot', family: 1, pastAna: { ar: 'فت', ph: 'Futt' }, pastHuwa: { ar: 'فات', ph: 'Faat' } },

  // ----- FAMILY 1 — Middle Vowel (AI draft) ---------------------------------
  { id: 'fear', english: 'I fear', arPresent: 'أخاف', phPresent: 'Akhaaf', family: 1, pastAna: { ar: 'خفت', ph: 'Khift' }, pastHuwa: { ar: 'خاف', ph: 'Khaaf' }, draft: true },
  { id: 'fast', english: 'I fast', arPresent: 'أصوم', phPresent: 'Asoom', family: 1, pastAna: { ar: 'صمت', ph: 'Sumt' }, pastHuwa: { ar: 'صام', ph: 'Saam' }, draft: true },
  { id: 'get-up', english: 'I get up', arPresent: 'أقوم', phPresent: 'Aqoom', family: 1, pastAna: { ar: 'قمت', ph: 'Qumt' }, pastHuwa: { ar: 'قام', ph: 'Qaam' }, draft: true },
  { id: 'increase', english: 'I increase', arPresent: 'أزيد', phPresent: 'Azeed', family: 1, pastAna: { ar: 'زدت', ph: 'Zidt' }, pastHuwa: { ar: 'زاد', ph: 'Zaad' }, draft: true },
  { id: 'taste', english: 'I taste', arPresent: 'أذوق', phPresent: 'Adhooq', family: 1, pastAna: { ar: 'ذقت', ph: 'Dhuqt' }, pastHuwa: { ar: 'ذاق', ph: 'Dhaaq' }, draft: true },
  { id: 'get-lost', english: 'I get lost', arPresent: 'أضيع', phPresent: 'Adee3', family: 1, pastAna: { ar: 'ضعت', ph: 'Di3t' }, pastHuwa: { ar: 'ضاع', ph: 'Daa3' }, draft: true },
  { id: 'turn-around', english: 'I turn around', arPresent: 'أدور', phPresent: 'Adoor', family: 1, pastAna: { ar: 'درت', ph: 'Durt' }, pastHuwa: { ar: 'دار', ph: 'Daar' }, draft: true },
  { id: 'wake-up', english: 'I wake up', arPresent: 'أفوق', phPresent: 'Afooq', family: 1, pastAna: { ar: 'فقت', ph: 'Fuqt' }, pastHuwa: { ar: 'فاق', ph: 'Faaq' }, draft: true },
  { id: 'swim', english: 'I swim', arPresent: 'أعوم', phPresent: 'A3oom', family: 1, pastAna: { ar: 'عمت', ph: '3umt' }, pastHuwa: { ar: 'عام', ph: '3aam' }, draft: true },
  { id: 'be-absent', english: 'I be absent', arPresent: 'أغيب', phPresent: 'Agheeb', family: 1, pastAna: { ar: 'غبت', ph: 'Ghibt' }, pastHuwa: { ar: 'غاب', ph: 'Ghaab' }, draft: true },
  { id: 'spend-the-night', english: 'I spend the night', arPresent: 'أبات', phPresent: 'Abaat', family: 1, pastAna: { ar: 'بت', ph: 'Bitt' }, pastHuwa: { ar: 'بات', ph: 'Baat' }, draft: true },
  { id: 'return', english: 'I return', arPresent: 'أعود', phPresent: 'A3ood', family: 1, pastAna: { ar: 'عدت', ph: '3udt' }, pastHuwa: { ar: 'عاد', ph: '3aad' }, draft: true },
  { id: 'shout', english: 'I shout', arPresent: 'أصيح', phPresent: 'Asee7', family: 1, pastAna: { ar: 'صحت', ph: 'Si7t' }, pastHuwa: { ar: 'صاح', ph: 'Saa7' }, draft: true },
  { id: 'step-on', english: 'I step on', arPresent: 'أدوس', phPresent: 'Adoos', family: 1, pastAna: { ar: 'دست', ph: 'Dust' }, pastHuwa: { ar: 'داس', ph: 'Daas' }, draft: true },
  { id: 'measure', english: 'I measure', arPresent: 'أقيس', phPresent: 'Aqees', family: 1, pastAna: { ar: 'قست', ph: 'Qist' }, pastHuwa: { ar: 'قاس', ph: 'Qaas' }, draft: true },
  { id: 'get-jealous', english: 'I get jealous', arPresent: 'أغار', phPresent: 'Aghaar', family: 1, pastAna: { ar: 'غرت', ph: 'Ghirt' }, pastHuwa: { ar: 'غار', ph: 'Ghaar' }, draft: true },
  { id: 'topple', english: 'I fall (topple)', arPresent: 'أطيح', phPresent: 'Atee7', family: 1, pastAna: { ar: 'طحت', ph: 'Ti7t' }, pastHuwa: { ar: 'طاح', ph: 'Taa7' }, draft: true },
  { id: 'roam', english: 'I roam', arPresent: 'أطوف', phPresent: 'Atoof', family: 1, pastAna: { ar: 'طفت', ph: 'Tuft' }, pastHuwa: { ar: 'طاف', ph: 'Taaf' }, draft: true },
  { id: 'kiss', english: 'I kiss', arPresent: 'أبوس', phPresent: 'Aboos', family: 1, pastAna: { ar: 'بست', ph: 'Bust' }, pastHuwa: { ar: 'باس', ph: 'Baas' }, draft: true },
  { id: 'sew', english: 'I sew', arPresent: 'أخيط', phPresent: 'Akheet', family: 1, pastAna: { ar: 'خطت', ph: 'Khitt' }, pastHuwa: { ar: 'خاط', ph: 'Khaat' }, draft: true },
  { id: 'move-aside', english: 'I move aside', arPresent: 'أزيح', phPresent: 'Azee7', family: 1, pastAna: { ar: 'زحت', ph: 'Zi7t' }, pastHuwa: { ar: 'زاح', ph: 'Zaa7' }, draft: true },
  { id: 'get-dizzy', english: 'I get dizzy', arPresent: 'أدوخ', phPresent: 'Adookh', family: 1, pastAna: { ar: 'دخت', ph: 'Dukht' }, pastHuwa: { ar: 'داخ', ph: 'Daakh' }, draft: true },

  // ----- FAMILY 2 — End Vowel (verified, from PDF) --------------------------
  { id: 'speak', english: 'I speak', arPresent: 'أحكي', phPresent: 'A7ki', family: 2, pastAna: { ar: 'حكيت', ph: '7akait' }, pastHuwa: { ar: 'حكا', ph: '7aka' } },
  { id: 'do', english: 'I do', arPresent: 'أسوّي', phPresent: 'Asawwi', family: 2, pastAna: { ar: 'سويت', ph: 'Sawwait' }, pastHuwa: { ar: 'سوا', ph: 'Sawwa' } },
  { id: 'give', english: 'I give', arPresent: 'أعطي', phPresent: 'A3ti', family: 2, pastAna: { ar: 'عطيت', ph: 'A3tait' }, pastHuwa: { ar: 'عطا', ph: 'A3ta' } },
  { id: 'let', english: 'I let', arPresent: 'أخلّي', phPresent: 'Akhalli', family: 2, pastAna: { ar: 'خليت', ph: 'Khallait' }, pastHuwa: { ar: 'خلا', ph: 'Khalla' } },
  { id: 'walk', english: 'I walk', arPresent: 'أمشي', phPresent: 'Amshi', family: 2, pastAna: { ar: 'مشيت', ph: 'Mashait' }, pastHuwa: { ar: 'مشا', ph: 'Masha' } },
  { id: 'buy', english: 'I buy', arPresent: 'أشتري', phPresent: 'Ashtari', family: 2, pastAna: { ar: 'اشتريت', ph: 'Ishtarait' }, pastHuwa: { ar: 'اشترا', ph: 'Ishtara' } },
  { id: 'build', english: 'I build', arPresent: 'أبني', phPresent: 'Abni', family: 2, pastAna: { ar: 'بنيت', ph: 'Banait' }, pastHuwa: { ar: 'بنا', ph: 'Bana' } },
  { id: 'come', english: 'I come', arPresent: 'أجي', phPresent: 'Ajee', family: 2, pastAna: { ar: 'جيت', ph: 'Jeet' }, pastHuwa: { ar: 'جا', ph: 'Jaa' } },
  { id: 'throw', english: 'I throw', arPresent: 'أرمي', phPresent: 'Armi', family: 2, pastAna: { ar: 'رميت', ph: 'Ramait' }, pastHuwa: { ar: 'رما', ph: 'Rama' } },
  { id: 'cry', english: 'I cry', arPresent: 'أبكي', phPresent: 'Abki', family: 2, pastAna: { ar: 'بكيت', ph: 'Bakait' }, pastHuwa: { ar: 'بكا', ph: 'Baka' } },
  { id: 'sing', english: 'I sing', arPresent: 'أغني', phPresent: 'Aghanni', family: 2, pastAna: { ar: 'غنيت', ph: 'Ghannait' }, pastHuwa: { ar: 'غنى', ph: 'Ghanna' } },
  { id: 'gift', english: 'I gift', arPresent: 'أهدي', phPresent: 'Ahdi', family: 2, pastAna: { ar: 'هديت', ph: 'Hadait' }, pastHuwa: { ar: 'هدا', ph: 'Hada' } },
  { id: 'pray', english: 'I pray', arPresent: 'أصلّي', phPresent: 'Asalli', family: 2, pastAna: { ar: 'صليت', ph: 'Sallait' }, pastHuwa: { ar: 'صلى', ph: 'Salla' } },
  { id: 'find', english: 'I find', arPresent: 'ألاقي', phPresent: 'Alaqi', family: 2, pastAna: { ar: 'لقيت', ph: 'Laqait' }, pastHuwa: { ar: 'لقا', ph: 'Laqa' } },
  { id: 'forget', english: 'I forget', arPresent: 'أنسى', phPresent: 'Ansa', family: 2, pastAna: { ar: 'نسيت', ph: 'Nseet' }, pastHuwa: { ar: 'نسي', ph: 'Nsi' } },
  { id: 'wait', english: 'I wait', arPresent: 'أستنى', phPresent: 'Astanna', family: 2, pastAna: { ar: 'استنيت', ph: 'Stannait' }, pastHuwa: { ar: 'استنى', ph: 'Stanna' } },
  { id: 'start', english: 'I start', arPresent: 'أبدا', phPresent: 'Abda', family: 2, pastAna: { ar: 'بديت', ph: 'Badait' }, pastHuwa: { ar: 'بدا', ph: 'Bada' } },
  { id: 'read', english: 'I read', arPresent: 'أقرا', phPresent: 'Aqra', family: 2, pastAna: { ar: 'قريت', ph: 'Qarait' }, pastHuwa: { ar: 'قرا', ph: 'Qara' } },

  // ----- FAMILY 2 — End Vowel (AI draft) ------------------------------------
  { id: 'grill', english: 'I grill', arPresent: 'أشوي', phPresent: 'Ashwi', family: 2, pastAna: { ar: 'شويت', ph: 'Shawait' }, pastHuwa: { ar: 'شوى', ph: 'Shawa' }, draft: true },
  { id: 'call-out', english: 'I call (call out)', arPresent: 'أنادي', phPresent: 'Anaadi', family: 2, pastAna: { ar: 'ناديت', ph: 'Naadait' }, pastHuwa: { ar: 'نادى', ph: 'Naada' }, draft: true },
  { id: 'jog', english: 'I run (jog)', arPresent: 'أجري', phPresent: 'Ajri', family: 2, pastAna: { ar: 'جريت', ph: 'Jarait' }, pastHuwa: { ar: 'جرى', ph: 'Jara' }, draft: true },
  { id: 'remain', english: 'I remain', arPresent: 'أبقى', phPresent: 'Abqa', family: 2, pastAna: { ar: 'بقيت', ph: 'Baqeet' }, pastHuwa: { ar: 'بقي', ph: 'Biqi' }, draft: true },
  { id: 'agree', english: 'I agree', arPresent: 'أرضى', phPresent: 'ArDa', family: 2, pastAna: { ar: 'رضيت', ph: 'ReDeet' }, pastHuwa: { ar: 'رضي', ph: 'RiDi' }, draft: true },
  { id: 'protect', english: 'I protect', arPresent: 'أحمي', phPresent: 'A7mi', family: 2, pastAna: { ar: 'حميت', ph: '7amait' }, pastHuwa: { ar: 'حمى', ph: '7ama' }, draft: true },
  { id: 'paint', english: 'I paint', arPresent: 'أطلي', phPresent: 'Atli', family: 2, pastAna: { ar: 'طليت', ph: 'Talait' }, pastHuwa: { ar: 'طلى', ph: 'Tala' }, draft: true },
  { id: 'complain', english: 'I complain', arPresent: 'أشكي', phPresent: 'Ashki', family: 2, pastAna: { ar: 'شكيت', ph: 'Shakait' }, pastHuwa: { ar: 'شكى', ph: 'Shaka' }, draft: true },
  { id: 'iron', english: 'I iron', arPresent: 'أكوي', phPresent: 'Akwi', family: 2, pastAna: { ar: 'كويت', ph: 'Kawait' }, pastHuwa: { ar: 'كوى', ph: 'Kawa' }, draft: true },
  { id: 'boil', english: 'I boil', arPresent: 'أغلي', phPresent: 'Aghli', family: 2, pastAna: { ar: 'غليت', ph: 'Ghalait' }, pastHuwa: { ar: 'غلى', ph: 'Ghala' }, draft: true },
  { id: 'fold', english: 'I fold', arPresent: 'أطوي', phPresent: 'Atwi', family: 2, pastAna: { ar: 'طويت', ph: 'Tawait' }, pastHuwa: { ar: 'طوى', ph: 'Tawa' }, draft: true },
  { id: 'intend', english: 'I intend', arPresent: 'أنوي', phPresent: 'Anwi', family: 2, pastAna: { ar: 'نويت', ph: 'Nawait' }, pastHuwa: { ar: 'نوى', ph: 'Nawa' }, draft: true },
  { id: 'hide', english: 'I hide', arPresent: 'أخفي', phPresent: 'Akhfi', family: 2, pastAna: { ar: 'خفيت', ph: 'Khafait' }, pastHuwa: { ar: 'خفى', ph: 'Khafa' }, draft: true },
  { id: 'cancel', english: 'I cancel', arPresent: 'ألغي', phPresent: 'Alghi', family: 2, pastAna: { ar: 'لغيت', ph: 'Laghait' }, pastHuwa: { ar: 'لغى', ph: 'Lagha' }, draft: true },
  { id: 'spend', english: 'I spend (time)', arPresent: 'أقضي', phPresent: 'AqDi', family: 2, pastAna: { ar: 'قضيت', ph: 'QaDait' }, pastHuwa: { ar: 'قضى', ph: 'QaDa' }, draft: true },
  { id: 'turn-off', english: 'I turn off', arPresent: 'أطفي', phPresent: 'Atfi', family: 2, pastAna: { ar: 'طفيت', ph: 'Tafait' }, pastHuwa: { ar: 'طفى', ph: 'Tafa' }, draft: true },
  { id: 'narrate', english: 'I narrate', arPresent: 'أروي', phPresent: 'Arwi', family: 2, pastAna: { ar: 'رويت', ph: 'Rawait' }, pastHuwa: { ar: 'روى', ph: 'Rawa' }, draft: true },
  { id: 'invite', english: 'I invite', arPresent: 'أدعي', phPresent: 'Ad3i', family: 2, pastAna: { ar: 'دعيت', ph: 'Da3ait' }, pastHuwa: { ar: 'دعى', ph: 'Da3a' }, draft: true },
  { id: 'fry', english: 'I fry', arPresent: 'أقلي', phPresent: 'Aqli', family: 2, pastAna: { ar: 'قليت', ph: 'Qalait' }, pastHuwa: { ar: 'قلى', ph: 'Qala' }, draft: true },
  { id: 'crave', english: 'I crave', arPresent: 'أشتهي', phPresent: 'Eshtahi', family: 2, pastAna: { ar: 'اشتهيت', ph: 'Eshtahait' }, pastHuwa: { ar: 'اشتهى', ph: 'Eshtaha' }, draft: true },
  { id: 'sign', english: 'I sign', arPresent: 'أمضي', phPresent: 'EmDi', family: 2, pastAna: { ar: 'مضيت', ph: 'EmDait' }, pastHuwa: { ar: 'مضى', ph: 'EmDa' }, draft: true },
  { id: 'water', english: 'I water', arPresent: 'أسقي', phPresent: 'Asqi', family: 2, pastAna: { ar: 'سقيت', ph: 'Saqait' }, pastHuwa: { ar: 'سقى', ph: 'Saqa' }, draft: true },

  // ----- FAMILY 3 — 3-Letter Shaddeh (verified, from PDF) -------------------
  { id: 'love', english: 'I love', arPresent: 'أحبّ', phPresent: 'A7ebb', family: 3, pastAna: { ar: 'حبيت', ph: '7abbait' }, pastHuwa: { ar: 'حبّ', ph: '7abb' } },
  { id: 'feel', english: 'I feel', arPresent: 'أحسّ', phPresent: 'A7iss', family: 3, pastAna: { ar: 'حسيت', ph: '7assait' }, pastHuwa: { ar: 'حسّ', ph: '7ass' } },
  { id: 'put', english: 'I put', arPresent: 'أحطّ', phPresent: 'A7utt', family: 3, pastAna: { ar: 'حطيت', ph: '7attait' }, pastHuwa: { ar: 'حطّ', ph: '7att' } },
  { id: 'stay', english: 'I stay', arPresent: 'أضلّ', phPresent: 'Adall', family: 3, pastAna: { ar: 'ضليت', ph: 'Dallait' }, pastHuwa: { ar: 'ضلّ', ph: 'Dall' } },
  { id: 'reply', english: 'I reply', arPresent: 'أردّ', phPresent: 'Arudd', family: 3, pastAna: { ar: 'رديت', ph: 'Raddait' }, pastHuwa: { ar: 'ردّ', ph: 'Radd' } },
  { id: 'pass-by', english: 'I pass by', arPresent: 'أمرّ', phPresent: 'Amurr', family: 3, pastAna: { ar: 'مريت', ph: 'Marrait' }, pastHuwa: { ar: 'مرّ', ph: 'Marr' } },
  { id: 'count', english: 'I count', arPresent: 'أعدّ', phPresent: 'A3idd', family: 3, pastAna: { ar: 'عديت', ph: '3addait' }, pastHuwa: { ar: 'عدّ', ph: '3add' } },
  { id: 'tie', english: 'I tie tightly', arPresent: 'أشدّ', phPresent: 'Ashidd', family: 3, pastAna: { ar: 'شديت', ph: 'Shaddait' }, pastHuwa: { ar: 'شدّ', ph: 'Shadd' } },
  { id: 'smell', english: 'I smell', arPresent: 'أشمّ', phPresent: 'Ashumm', family: 3, pastAna: { ar: 'شميت', ph: 'Shammait' }, pastHuwa: { ar: 'شمّ', ph: 'Shamm' } },
  { id: 'extend', english: 'I extend', arPresent: 'أمدّ', phPresent: 'Amudd', family: 3, pastAna: { ar: 'مديت', ph: 'Maddait' }, pastHuwa: { ar: 'مدّ', ph: 'Madd' } },
  { id: 'curse', english: 'I curse', arPresent: 'أسبّ', phPresent: 'Asibb', family: 3, pastAna: { ar: 'سبيت', ph: 'Sabbait' }, pastHuwa: { ar: 'سبّ', ph: 'Sabb' } },
  { id: 'solve', english: 'I untie / solve', arPresent: 'أحلّ', phPresent: 'A7ill', family: 3, pastAna: { ar: 'حليت', ph: '7allait' }, pastHuwa: { ar: 'حلّ', ph: '7all' } },
  { id: 'harm', english: 'I harm', arPresent: 'أضرّ', phPresent: 'Adurr', family: 3, pastAna: { ar: 'ضريت', ph: 'Darrait' }, pastHuwa: { ar: 'ضرّ', ph: 'Darr' } },

  // ----- FAMILY 3 — 3-Letter Shaddeh (AI draft) -----------------------------
  { id: 'bite', english: 'I bite', arPresent: 'أعضّ', phPresent: 'A3edd', family: 3, pastAna: { ar: 'عضيت', ph: '3addait' }, pastHuwa: { ar: 'عضّ', ph: '3add' }, draft: true },
  { id: 'doubt', english: 'I doubt', arPresent: 'أشكّ', phPresent: 'Ashukk', family: 3, pastAna: { ar: 'شكيت', ph: 'Shakkait' }, pastHuwa: { ar: 'شكّ', ph: 'Shakk' }, draft: true },
  { id: 'scratch', english: 'I scratch', arPresent: 'أحكّ', phPresent: 'A7ukk', family: 3, pastAna: { ar: 'حكيت', ph: '7akkait' }, pastHuwa: { ar: 'حكّ', ph: '7akk' }, draft: true },
  { id: 'knock', english: 'I knock', arPresent: 'أدقّ', phPresent: 'Aduqq', family: 3, pastAna: { ar: 'دقيت', ph: 'Daqqait' }, pastHuwa: { ar: 'دقّ', ph: 'Daqq' }, draft: true },
  { id: 'hug', english: 'I hug', arPresent: 'أضمّ', phPresent: 'Adumm', family: 3, pastAna: { ar: 'ضميت', ph: 'Dammait' }, pastHuwa: { ar: 'ضمّ', ph: 'Damm' }, draft: true },
  { id: 'shake', english: 'I shake', arPresent: 'أهزّ', phPresent: 'Ahizz', family: 3, pastAna: { ar: 'هزيت', ph: 'Hazzait' }, pastHuwa: { ar: 'هزّ', ph: 'Hazz' }, draft: true },
  { id: 'pour', english: 'I pour', arPresent: 'أكبّ', phPresent: 'Akubb', family: 3, pastAna: { ar: 'كبيت', ph: 'Kabbait' }, pastHuwa: { ar: 'كبّ', ph: 'Kabb' }, draft: true },
  { id: 'block', english: 'I block', arPresent: 'أسدّ', phPresent: 'Asidd', family: 3, pastAna: { ar: 'سديت', ph: 'Saddait' }, pastHuwa: { ar: 'سدّ', ph: 'Sadd' }, draft: true },
  { id: 'take-apart', english: 'I take apart', arPresent: 'أفكّ', phPresent: 'Afukk', family: 3, pastAna: { ar: 'فكيت', ph: 'Fakkait' }, pastHuwa: { ar: 'فكّ', ph: 'Fakk' }, draft: true },
  { id: 'trim', english: 'I cut (trim)', arPresent: 'أقصّ', phPresent: 'Aquss', family: 3, pastAna: { ar: 'قصيت', ph: 'Qassait' }, pastHuwa: { ar: 'قصّ', ph: 'Qass' }, draft: true },
  { id: 'drag', english: 'I drag', arPresent: 'أجرّ', phPresent: 'Ajurr', family: 3, pastAna: { ar: 'جريت', ph: 'Jarrait' }, pastHuwa: { ar: 'جرّ', ph: 'Jarr' }, draft: true },
  { id: 'suppose', english: 'I suppose', arPresent: 'أظنّ', phPresent: 'Adhunn', family: 3, pastAna: { ar: 'ظنيت', ph: 'Dhannait' }, pastHuwa: { ar: 'ظنّ', ph: 'Dhann' }, draft: true },
  { id: 'cheat', english: 'I cheat', arPresent: 'أغشّ', phPresent: 'Aghushsh', family: 3, pastAna: { ar: 'غشيت', ph: 'Ghashshait' }, pastHuwa: { ar: 'غشّ', ph: 'Ghashsh' }, draft: true },
  { id: 'peek', english: 'I peek', arPresent: 'أطلّ', phPresent: 'Atull', family: 3, pastAna: { ar: 'طليت', ph: 'Tallait' }, pastHuwa: { ar: 'طلّ', ph: 'Tall' }, draft: true },
  { id: 'ring', english: 'I ring', arPresent: 'أرنّ', phPresent: 'Arinn', family: 3, pastAna: { ar: 'رنيت', ph: 'Rannait' }, pastHuwa: { ar: 'رنّ', ph: 'Rann' }, draft: true },
  { id: 'tear', english: 'I tear', arPresent: 'أشقّ', phPresent: 'Ashuqq', family: 3, pastAna: { ar: 'شقيت', ph: 'Shaqqait' }, pastHuwa: { ar: 'شقّ', ph: 'Shaqq' }, draft: true },

  // ----- FAMILY 4 — Long Shaddeh (verified, from PDF) -----------------------
  { id: 'think', english: 'I think', arPresent: 'أفكّر', phPresent: 'Afakkir', family: 4, pastAna: { ar: 'فكرت', ph: 'Fakkart' }, pastHuwa: { ar: 'فكّر', ph: 'Fakkar' } },
  { id: 'change', english: 'I change', arPresent: 'أغيّر', phPresent: 'Aghayyir', family: 4, pastAna: { ar: 'غيرت', ph: 'Ghayyart' }, pastHuwa: { ar: 'غيّر', ph: 'Ghayyar' } },
  { id: 'continue', english: 'I continue', arPresent: 'أكمّل', phPresent: 'Akammel', family: 4, pastAna: { ar: 'كملت', ph: 'Kammalt' }, pastHuwa: { ar: 'كمّل', ph: 'Kammal' } },
  { id: 'try', english: 'I try', arPresent: 'أجرّب', phPresent: 'Ajarreb', family: 4, pastAna: { ar: 'جربت', ph: 'Jarrabt' }, pastHuwa: { ar: 'جرّب', ph: 'Jarrab' } },
  { id: 'decide', english: 'I decide', arPresent: 'أقرّر', phPresent: 'Aqarrir', family: 4, pastAna: { ar: 'قررت', ph: 'Qarrart' }, pastHuwa: { ar: 'قرّر', ph: 'Qarrar' } },
  { id: 'smash', english: 'I break (smash)', arPresent: 'أكسّر', phPresent: 'Akassir', family: 4, pastAna: { ar: 'كسرت', ph: 'Kassart' }, pastHuwa: { ar: 'كسّر', ph: 'Kassar' } },
  { id: 'shut', english: 'I close', arPresent: 'أسكّر', phPresent: 'Asakkir', family: 4, pastAna: { ar: 'سكرت', ph: 'Sakkart' }, pastHuwa: { ar: 'سكّر', ph: 'Sakkar' } },
  { id: 'prepare', english: 'I prepare', arPresent: 'أجهّز', phPresent: 'Ajahhez', family: 4, pastAna: { ar: 'جهزت', ph: 'Jahhazt' }, pastHuwa: { ar: 'جهّز', ph: 'Jahhaz' } },
  { id: 'look-for', english: 'I look for', arPresent: 'أدوّر', phPresent: 'Adawwir', family: 4, pastAna: { ar: 'دورت', ph: 'Dawwart' }, pastHuwa: { ar: 'دوّر', ph: 'Dawwar' } },
  { id: 'develop', english: 'I develop', arPresent: 'أطوّر', phPresent: 'Atawwir', family: 4, pastAna: { ar: 'طورت', ph: 'Tawwart' }, pastHuwa: { ar: 'طوّر', ph: 'Tawwar' } },
  { id: 'finish', english: 'I finish', arPresent: 'أخلّص', phPresent: 'Akhallis', family: 4, pastAna: { ar: 'خلصت', ph: 'Khallast' }, pastHuwa: { ar: 'خلّص', ph: 'Khallas' } },

  // ----- FAMILY 4 — Long Shaddeh (AI draft) ---------------------------------
  { id: 'teach', english: 'I teach', arPresent: 'أعلّم', phPresent: 'A3allem', family: 4, pastAna: { ar: 'علمت', ph: '3allamt' }, pastHuwa: { ar: 'علّم', ph: '3allam' }, draft: true },
  { id: 'clean', english: 'I clean', arPresent: 'أنظّف', phPresent: 'Anadhdhef', family: 4, pastAna: { ar: 'نظفت', ph: 'Nadhdhaft' }, pastHuwa: { ar: 'نظّف', ph: 'Nadhdhaf' }, draft: true },
  { id: 'fix', english: 'I fix', arPresent: 'أصلّح', phPresent: 'Asalle7', family: 4, pastAna: { ar: 'صلحت', ph: 'Salla7t' }, pastHuwa: { ar: 'صلّح', ph: 'Salla7' }, draft: true },
  { id: 'chop', english: 'I chop', arPresent: 'أقطّع', phPresent: 'Aqatte3', family: 4, pastAna: { ar: 'قطعت', ph: 'Qatta3t' }, pastHuwa: { ar: 'قطّع', ph: 'Qatta3' }, draft: true },
  { id: 'remind', english: 'I remind', arPresent: 'أذكّر', phPresent: 'Adhakker', family: 4, pastAna: { ar: 'ذكرت', ph: 'Dhakkart' }, pastHuwa: { ar: 'ذكّر', ph: 'Dhakkar' }, draft: true },
  { id: 'talk', english: 'I talk', arPresent: 'أتكلّم', phPresent: 'Atkallam', family: 4, pastAna: { ar: 'اتكلمت', ph: 'Tkallamt' }, pastHuwa: { ar: 'اتكلّم', ph: 'Tkallam' }, draft: true },
  { id: 'learn', english: 'I learn', arPresent: 'أتعلّم', phPresent: 'At3allam', family: 4, pastAna: { ar: 'اتعلمت', ph: 'T3allamt' }, pastHuwa: { ar: 'اتعلّم', ph: 'T3allam' }, draft: true },
  { id: 'turn-on', english: 'I turn on', arPresent: 'أشغّل', phPresent: 'Ashagghel', family: 4, pastAna: { ar: 'شغلت', ph: 'Shagghalt' }, pastHuwa: { ar: 'شغّل', ph: 'Shaghghal' }, draft: true },
  { id: 'repeat', english: 'I repeat', arPresent: 'أكرّر', phPresent: 'Akarrer', family: 4, pastAna: { ar: 'كررت', ph: 'Karrart' }, pastHuwa: { ar: 'كرّر', ph: 'Karrar' }, draft: true },
  { id: 'dry', english: 'I dry', arPresent: 'أنشّف', phPresent: 'Anashshef', family: 4, pastAna: { ar: 'نشفت', ph: 'Nashshaft' }, pastHuwa: { ar: 'نشّف', ph: 'Nashshaf' }, draft: true },
  { id: 'remember', english: 'I remember', arPresent: 'أتذكّر', phPresent: 'Atdhakkar', family: 4, pastAna: { ar: 'اتذكرت', ph: 'Tdhakkart' }, pastHuwa: { ar: 'اتذكّر', ph: 'Tdhakkar' }, draft: true },
  { id: 'heat', english: 'I heat', arPresent: 'أسخّن', phPresent: 'Asakhkhen', family: 4, pastAna: { ar: 'سخنت', ph: 'Sakhkhant' }, pastHuwa: { ar: 'سخّن', ph: 'Sakhkhan' }, draft: true },
  { id: 'lower', english: 'I lower', arPresent: 'أنزّل', phPresent: 'Anazzel', family: 4, pastAna: { ar: 'نزلت', ph: 'Nazzalt' }, pastHuwa: { ar: 'نزّل', ph: 'Nazzal' }, draft: true },
  { id: 'drop-off', english: 'I drop off', arPresent: 'أوصّل', phPresent: 'Awassel', family: 4, pastAna: { ar: 'وصلت', ph: 'Wassalt' }, pastHuwa: { ar: 'وصّل', ph: 'Wassal' }, draft: true },
  { id: 'call', english: 'I call (phone)', arPresent: 'أتّصل', phPresent: 'Attasel', family: 4, pastAna: { ar: 'اتصلت', ph: 'Ttasalt' }, pastHuwa: { ar: 'اتّصل', ph: 'Ttasal' }, draft: true },
  { id: 'imagine', english: 'I imagine', arPresent: 'أتخيّل', phPresent: 'Atkhayyal', family: 4, pastAna: { ar: 'اتخيلت', ph: 'Tkhayyalt' }, pastHuwa: { ar: 'اتخيّل', ph: 'Tkhayyal' }, draft: true },
  { id: 'explain', english: 'I explain', arPresent: 'أوضّح', phPresent: 'Awadde7', family: 4, pastAna: { ar: 'وضحت', ph: 'Wadda7t' }, pastHuwa: { ar: 'وضّح', ph: 'Wadda7' }, draft: true },
  { id: 'greet', english: 'I greet', arPresent: 'أسلّم', phPresent: 'Asallem', family: 4, pastAna: { ar: 'سلمت', ph: 'Sallamt' }, pastHuwa: { ar: 'سلّم', ph: 'Sallam' }, draft: true },
  { id: 'film', english: 'I film', arPresent: 'أصوّر', phPresent: 'Asawwer', family: 4, pastAna: { ar: 'صورت', ph: 'Sawwart' }, pastHuwa: { ar: 'صوّر', ph: 'Sawwar' }, draft: true },

  // ----- FAMILY 5 — Regular (verified, from PDF) ----------------------------
  { id: 'hear', english: 'I hear', arPresent: 'أسمع', phPresent: 'Asma3', family: 5, pastAna: { ar: 'سمعت', ph: 'Smi3t' }, pastHuwa: { ar: 'سمع', ph: 'Smi3' } },
  { id: 'play', english: 'I play', arPresent: 'ألعب', phPresent: 'Al3ab', family: 5, pastAna: { ar: 'لعبت', ph: 'Li3bt' }, pastHuwa: { ar: 'لعب', ph: 'Li3b' } },
  { id: 'write', english: 'I write', arPresent: 'أكتب', phPresent: 'Aktub', family: 5, pastAna: { ar: 'كتبت', ph: 'Katabt' }, pastHuwa: { ar: 'كتب', ph: 'Katab' } },
  { id: 'cook', english: 'I cook', arPresent: 'أطبخ', phPresent: 'Atbukh', family: 5, pastAna: { ar: 'طبخت', ph: 'Tabakht' }, pastHuwa: { ar: 'طبخ', ph: 'Tabakh' } },
  { id: 'sit', english: 'I sit', arPresent: 'أقعد', phPresent: 'Aq3ud', family: 5, pastAna: { ar: 'قعدت', ph: 'Qa3adt' }, pastHuwa: { ar: 'قعد', ph: 'Qa3ad' } },
  { id: 'pay', english: 'I pay', arPresent: 'أدفع', phPresent: 'Adfa3', family: 5, pastAna: { ar: 'دفعت', ph: 'Dafa3t' }, pastHuwa: { ar: 'دفع', ph: 'Dafa3' } },
  { id: 'understand', english: 'I understand', arPresent: 'أفهم', phPresent: 'Afham', family: 5, pastAna: { ar: 'فهمت', ph: 'Fhemt' }, pastHuwa: { ar: 'فهم', ph: 'Fhim' } },
  { id: 'run', english: 'I run', arPresent: 'أركض', phPresent: 'Arkud', family: 5, pastAna: { ar: 'ركضت', ph: 'Rakadt' }, pastHuwa: { ar: 'ركض', ph: 'Rakad' } },
  { id: 'watch', english: 'I watch', arPresent: 'أشاهد', phPresent: 'Ashahed', family: 5, pastAna: { ar: 'شاهدت', ph: 'Shahadt' }, pastHuwa: { ar: 'شاهد', ph: 'Shahad' } },
  { id: 'lose', english: 'I lose', arPresent: 'أخسر', phPresent: 'Akhsar', family: 5, pastAna: { ar: 'خسرت', ph: 'Khsirt' }, pastHuwa: { ar: 'خسر', ph: 'Khsir' } },
  { id: 'open', english: 'I open', arPresent: 'أفتح', phPresent: 'Afta7', family: 5, pastAna: { ar: 'فتحت', ph: 'Fata7t' }, pastHuwa: { ar: 'فتح', ph: 'Fata7' } },
  { id: 'study', english: 'I study', arPresent: 'أدرس', phPresent: 'Adrus', family: 5, pastAna: { ar: 'درست', ph: 'Darast' }, pastHuwa: { ar: 'درس', ph: 'Daras' } },
  { id: 'fall', english: 'I fall', arPresent: 'أوقع', phPresent: 'Awqa3', family: 5, pastAna: { ar: 'وقعت', ph: 'Waqa3t' }, pastHuwa: { ar: 'وقع', ph: 'Waqa3' } },
  { id: 'arrive', english: 'I arrive', arPresent: 'أوصل', phPresent: 'Awsal', family: 5, pastAna: { ar: 'وصلت', ph: 'Wasalt' }, pastHuwa: { ar: 'وصل', ph: 'Wasal' } },
  { id: 'send', english: 'I send', arPresent: 'أرسل', phPresent: 'Arsil', family: 5, pastAna: { ar: 'أرسلت', ph: 'Arsalt' }, pastHuwa: { ar: 'أرسل', ph: 'Arsal' } },

  // ----- FAMILY 5 — Regular (AI draft) --------------------------------------
  { id: 'drink', english: 'I drink', arPresent: 'أشرب', phPresent: 'Ashrab', family: 5, pastAna: { ar: 'شربت', ph: 'Shribt' }, pastHuwa: { ar: 'شرب', ph: 'Shirib' }, draft: true },
  { id: 'eat', english: 'I eat', arPresent: 'آكل', phPresent: 'Aakol', family: 5, pastAna: { ar: 'أكلت', ph: 'Akalt' }, pastHuwa: { ar: 'أكل', ph: 'Akal' }, draft: true },
  { id: 'ask', english: 'I ask', arPresent: 'أسأل', phPresent: "As'al", family: 5, pastAna: { ar: 'سألت', ph: "Sa'alt" }, pastHuwa: { ar: 'سأل', ph: "Sa'al" }, draft: true },
  { id: 'make', english: 'I make / do', arPresent: 'أعمل', phPresent: 'A3mol', family: 5, pastAna: { ar: 'عملت', ph: '3milt' }, pastHuwa: { ar: 'عمل', ph: '3imil' }, draft: true },
  { id: 'wear', english: 'I wear', arPresent: 'ألبس', phPresent: 'Albos', family: 5, pastAna: { ar: 'لبست', ph: 'Lbist' }, pastHuwa: { ar: 'لبس', ph: 'Libis' }, draft: true },
  { id: 'wash', english: 'I wash', arPresent: 'أغسل', phPresent: 'Aghsol', family: 5, pastAna: { ar: 'غسلت', ph: 'Ghasalt' }, pastHuwa: { ar: 'غسل', ph: 'Ghasal' }, draft: true },
  { id: 'cut', english: 'I cut', arPresent: 'أقطع', phPresent: 'Aqta3', family: 5, pastAna: { ar: 'قطعت', ph: 'Qata3t' }, pastHuwa: { ar: 'قطع', ph: 'Qata3' }, draft: true },
  { id: 'carry-load', english: 'I carry (load)', arPresent: 'أحمل', phPresent: 'A7mol', family: 5, pastAna: { ar: 'حملت', ph: '7amalt' }, pastHuwa: { ar: 'حمل', ph: '7amal' }, draft: true },
  { id: 'pull', english: 'I pull', arPresent: 'أسحب', phPresent: 'As7ab', family: 5, pastAna: { ar: 'سحبت', ph: 'Sa7abt' }, pastHuwa: { ar: 'سحب', ph: 'Sa7ab' }, draft: true },
  { id: 'push', english: 'I push', arPresent: 'أدفش', phPresent: 'Adfosh', family: 5, pastAna: { ar: 'دفشت', ph: 'Dafasht' }, pastHuwa: { ar: 'دفش', ph: 'Dafash' }, draft: true },
  { id: 'draw', english: 'I draw', arPresent: 'أرسم', phPresent: 'Arsom', family: 5, pastAna: { ar: 'رسمت', ph: 'Rasamt' }, pastHuwa: { ar: 'رسم', ph: 'Rasam' }, draft: true },
  { id: 'laugh', english: 'I laugh', arPresent: 'أضحك', phPresent: 'AD7ak', family: 5, pastAna: { ar: 'ضحكت', ph: 'De7ekt' }, pastHuwa: { ar: 'ضحك', ph: 'De7ek' }, draft: true },
  { id: 'catch', english: 'I catch (hold)', arPresent: 'أمسك', phPresent: 'Amsek', family: 5, pastAna: { ar: 'مسكت', ph: 'Msikt' }, pastHuwa: { ar: 'مسك', ph: 'Misik' }, draft: true },
  { id: 'plant', english: 'I plant', arPresent: 'أزرع', phPresent: 'Azra3', family: 5, pastAna: { ar: 'زرعت', ph: 'Zara3t' }, pastHuwa: { ar: 'زرع', ph: 'Zara3' }, draft: true },
  { id: 'break', english: 'I break', arPresent: 'أكسر', phPresent: 'Aksor', family: 5, pastAna: { ar: 'كسرت', ph: 'Kasart' }, pastHuwa: { ar: 'كسر', ph: 'Kasar' }, draft: true },
  { id: 'lock', english: 'I lock / close', arPresent: 'أقفل', phPresent: 'Aqfol', family: 5, pastAna: { ar: 'قفلت', ph: 'Qafalt' }, pastHuwa: { ar: 'قفل', ph: 'Qafal' }, draft: true },
  { id: 'book-reserve', english: 'I book (reserve)', arPresent: 'أحجز', phPresent: 'A7joz', family: 5, pastAna: { ar: 'حجزت', ph: '7ajazt' }, pastHuwa: { ar: 'حجز', ph: '7ajaz' }, draft: true },
  { id: 'ride', english: 'I ride', arPresent: 'أركب', phPresent: 'Arkab', family: 5, pastAna: { ar: 'ركبت', ph: 'Rkibt' }, pastHuwa: { ar: 'ركب', ph: 'Rikib' }, draft: true },
  { id: 'go-down', english: 'I go down', arPresent: 'أنزل', phPresent: 'Anzal', family: 5, pastAna: { ar: 'نزلت', ph: 'Nzilt' }, pastHuwa: { ar: 'نزل', ph: 'Nizil' }, draft: true },
  { id: 'go-up', english: 'I go up / out', arPresent: 'أطلع', phPresent: 'Atla3', family: 5, pastAna: { ar: 'طلعت', ph: 'Tli3t' }, pastHuwa: { ar: 'طلع', ph: 'Tili3' }, draft: true },
  { id: 'go-in', english: 'I go in', arPresent: 'أدخل', phPresent: 'Adkhol', family: 5, pastAna: { ar: 'دخلت', ph: 'Dakhalt' }, pastHuwa: { ar: 'دخل', ph: 'Dakhal' }, draft: true },
  { id: 'leave-quit', english: 'I leave (quit)', arPresent: 'أترك', phPresent: 'Atrok', family: 5, pastAna: { ar: 'تركت', ph: 'Tarakt' }, pastHuwa: { ar: 'ترك', ph: 'Tarak' }, draft: true },
  { id: 'thank', english: 'I thank', arPresent: 'أشكر', phPresent: 'Ashkor', family: 5, pastAna: { ar: 'شكرت', ph: 'Shakart' }, pastHuwa: { ar: 'شكر', ph: 'Shakar' }, draft: true },
  { id: 'steal', english: 'I steal', arPresent: 'أسرق', phPresent: 'Asroq', family: 5, pastAna: { ar: 'سرقت', ph: 'Saraqt' }, pastHuwa: { ar: 'سرق', ph: 'Saraq' }, draft: true },
  { id: 'earn-win', english: 'I earn (win)', arPresent: 'أكسب', phPresent: 'Aksob', family: 5, pastAna: { ar: 'كسبت', ph: 'Ksibt' }, pastHuwa: { ar: 'كسب', ph: 'Kisib' }, draft: true },
  { id: 'wipe', english: 'I wipe', arPresent: 'أمسح', phPresent: 'Amsa7', family: 5, pastAna: { ar: 'مسحت', ph: 'Masa7t' }, pastHuwa: { ar: 'مسح', ph: 'Masa7' }, draft: true },
  { id: 'print', english: 'I print', arPresent: 'أطبع', phPresent: 'Atba3', family: 5, pastAna: { ar: 'طبعت', ph: 'Taba3t' }, pastHuwa: { ar: 'طبع', ph: 'Taba3' }, draft: true },
  { id: 'gather', english: 'I gather', arPresent: 'أجمع', phPresent: 'Ajma3', family: 5, pastAna: { ar: 'جمعت', ph: 'Jama3t' }, pastHuwa: { ar: 'جمع', ph: 'Jama3' }, draft: true },
  { id: 'hit', english: 'I hit', arPresent: 'أضرب', phPresent: 'ADrob', family: 5, pastAna: { ar: 'ضربت', ph: 'Darabt' }, pastHuwa: { ar: 'ضرب', ph: 'Darab' }, draft: true },
  { id: 'request-order', english: 'I request / order', arPresent: 'أطلب', phPresent: 'Atlob', family: 5, pastAna: { ar: 'طلبت', ph: 'Talabt' }, pastHuwa: { ar: 'طلب', ph: 'Talab' }, draft: true },
  { id: 'know', english: 'I know', arPresent: 'أعرف', phPresent: 'A3rof', family: 5, pastAna: { ar: 'عرفت', ph: '3rift' }, pastHuwa: { ar: 'عرف', ph: '3iref' }, draft: true },
  { id: 'shave', english: 'I shave', arPresent: 'أحلق', phPresent: 'A7loq', family: 5, pastAna: { ar: 'حلقت', ph: '7alaqt' }, pastHuwa: { ar: 'حلق', ph: '7alaq' }, draft: true },
  { id: 'sweep', english: 'I sweep', arPresent: 'أكنس', phPresent: 'Aknos', family: 5, pastAna: { ar: 'كنست', ph: 'Kanast' }, pastHuwa: { ar: 'كنس', ph: 'Kanas' }, draft: true },
  { id: 'mix', english: 'I mix', arPresent: 'أخلط', phPresent: 'Akhlot', family: 5, pastAna: { ar: 'خلطت', ph: 'Khalatt' }, pastHuwa: { ar: 'خلط', ph: 'Khalat' }, draft: true },
  { id: 'hang-publish', english: 'I hang / publish', arPresent: 'أنشر', phPresent: 'Anshor', family: 5, pastAna: { ar: 'نشرت', ph: 'Nashart' }, pastHuwa: { ar: 'نشر', ph: 'Nashar' }, draft: true },
];

export const VERBS_BY_ID: Record<string, Verb> = Object.fromEntries(
  VERBS.map((v) => [v.id, v])
);

export function verbsByFamily(family: number): Verb[] {
  return VERBS.filter((v) => v.family === family);
}

export const DRAFT_COUNT = VERBS.filter((v) => v.draft).length;
export const VERIFIED_COUNT = VERBS.filter((v) => !v.draft).length;
