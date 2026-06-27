import type { Promise } from "./types";

// Seed dataset.
//   `source`   = proof the thing was PROMISED (manifesto / primary document).
//   `evidence` = proof of the current STATUS (Government Order, PIB, reputable report).
//   `statusVerified` = true only when `evidence` from a credible outlet backs the status.
//      false = status is reported/best-effort but not yet pinned to an authoritative source.
// All URLs below were checked to resolve (HTTP 200) at build time.
// Statuses reflect the public record as of mid-2026; refresh from goir.ap.gov.in GOs.

const YSRCP_MANIFESTO =
  "https://www.ysrcongress.com/sites/default/files/article_images/2019/04/ysrcp_manifesto-2019.pdf";
const YSRCP_LABEL = {
  en: "YSRCP 2019 manifesto 'Navaratnalu' (official PDF)",
  te: "వైఎస్‌ఆర్‌సిపి 2019 మేనిఫెస్టో 'నవరత్నాలు' (అధికారిక PDF)",
};

// TDP–JSP–BJP 2024 manifesto coverage (verified to list these promises).
const NDA_MANIFESTO =
  "https://theprint.in/india/andhra-pradesh-nda-partners-tdp-bjp-janasena-release-welfare-heavy-manifesto-2/2064385/";
const NDA_LABEL = {
  en: "TDP–JSP–BJP manifesto 2024 (The Print)",
  te: "టీడీపీ–జేఎస్‌పీ–బీజేపీ మేనిఫెస్టో 2024 (ద ప్రింట్)",
};

export const promises: Promise[] = [
  // ---------------- NDA government (2024–29) — "Super Six" ----------------
  {
    id: "nda-thalliki-vandanam",
    termId: "tdp-2024",
    category: "education",
    title: {
      en: "Thalliki Vandanam — ₹15,000/year per school child",
      te: "తల్లికి వందనం — పాఠశాల విద్యార్థికి ఏటా ₹15,000",
    },
    fullText: {
      en: "Financial assistance of ₹15,000 per year for every child studying, paid to the mother under 'Thalliki Vandanam'.",
      te: "'తల్లికి వందనం' కింద చదువుతున్న ప్రతి విద్యార్థికి తల్లి ద్వారా ఏటా ₹15,000 ఆర్థిక సహాయం.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: {
      label: {
        en: "TDP–Jana Sena–BJP manifesto 2024 (The News Minute)",
        te: "టీడీపీ–జనసేన–బీజేపీ మేనిఫెస్టో 2024 (ద న్యూస్ మినిట్)",
      },
      url: "https://www.thenewsminute.com/andhra-pradesh/ap-polls-tdp-jana-sena-manifesto-promises-free-gas-cylinders-unemployment-allowance",
    },
    evidence: [
      {
        label: {
          en: "Scheme launched, ₹15,000/child disbursed (Deccan Herald, Jun 2025)",
          te: "పథకం ప్రారంభం, విద్యార్థికి ₹15,000 జమ (డెక్కన్ హెరాల్డ్, జూన్ 2025)",
        },
        url: "https://www.deccanherald.com/india/andhra-pradesh/andhra-govt-launches-talliki-vandanam-scheme-rs-15000-to-be-given-for-school-going-child-3584484",
      },
    ],
  },
  {
    id: "nda-free-bus-women",
    termId: "tdp-2024",
    category: "women",
    title: {
      en: "Free bus travel for all women",
      te: "మహిళలందరికీ ఉచిత బస్సు ప్రయాణం",
    },
    fullText: {
      en: "Free travel for all women in state-run RTC buses.",
      te: "ప్రభుత్వ ఆర్టీసీ బస్సుల్లో మహిళలందరికీ ఉచిత ప్రయాణం.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: {
      label: {
        en: "TDP–JSP manifesto 2024 (Prokerala)",
        te: "టీడీపీ–జేఎస్‌పీ మేనిఫెస్టో 2024 (ప్రొకేరళ)",
      },
      url: "https://www.prokerala.com/news/articles/a1527301.html",
    },
    evidence: [
      {
        label: {
          en: "'Stree Shakti' free women's bus travel launched (Deccan Herald, Aug 2025)",
          te: "'స్త్రీ శక్తి' మహిళల ఉచిత బస్సు ప్రయాణం ప్రారంభం (డెక్కన్ హెరాల్డ్, ఆగ 2025)",
        },
        url: "https://www.deccanherald.com/india/andhra-pradesh/tdp-led-andhra-govt-launches-stree-shakti-free-bus-travel-scheme-for-women-on-independence-day-3683012",
      },
    ],
    cityStatus: [
      { city: "visakhapatnam", status: "completed" },
      { city: "vijayawada", status: "completed" },
    ],
  },
  {
    id: "nda-aadabidda-nidhi",
    termId: "tdp-2024",
    category: "women",
    title: {
      en: "Aadabidda Nidhi — ₹1,500/month to women 19–59",
      te: "ఆడబిడ్డ నిధి — 19–59 ఏళ్ల మహిళలకు నెలకు ₹1,500",
    },
    fullText: {
      en: "₹1,500 per month (₹18,000/year) to every woman aged 19 to 59 years.",
      te: "19 నుండి 59 ఏళ్ల ప్రతి మహిళకు నెలకు ₹1,500 (ఏటా ₹18,000).",
    },
    status: "not_started",
    statusVerified: false,
    source: {
      label: {
        en: "TDP–JSP–BJP manifesto 2024 (India TV)",
        te: "టీడీపీ–జేఎస్‌పీ–బీజేపీ మేనిఫెస్టో 2024 (ఇండియా టీవీ)",
      },
      url: "https://www.indiatvnews.com/news/india/andhra-pradesh-assembly-election-2024-tdp-bjp-jsp-alliance-manifesto-20-lakh-jobs-skill-census-n-chandrababu-naidu-pawan-kalyan-lok-sabha-polls-2024-05-01-928872",
    },
    // No launch GO or credible launch report found as of mid-2026; treated as not started.
  },
  {
    id: "nda-annadata-sukhibhava",
    termId: "tdp-2024",
    category: "agriculture",
    title: {
      en: "Annadata Sukhibhava — ₹20,000/year to farmers",
      te: "అన్నదాత సుఖీభవ — రైతులకు ఏటా ₹20,000",
    },
    fullText: {
      en: "₹20,000 per year financial assistance to every farmer family (inclusive of PM-Kisan).",
      te: "ప్రతి రైతు కుటుంబానికి ఏటా ₹20,000 ఆర్థిక సహాయం (పీఎం-కిసాన్‌తో కలిపి).",
    },
    status: "in_progress",
    statusVerified: false,
    source: {
      label: {
        en: "TDP–JSP–BJP manifesto 2024 (The Print)",
        te: "టీడీపీ–జేఎస్‌పీ–బీజేపీ మేనిఫెస్టో 2024 (ద ప్రింట్)",
      },
      url: "https://theprint.in/india/andhra-pradesh-nda-partners-tdp-bjp-janasena-release-welfare-heavy-manifesto-2/2064385/",
    },
    // Reported launched and disbursing (Aug 2025) but only partisan-aggregator sourcing
    // located; kept as in_progress / unverified pending an authoritative citation.
  },
  {
    id: "nda-20-lakh-jobs",
    termId: "tdp-2024",
    category: "jobs",
    title: {
      en: "20 lakh jobs, or ₹3,000/month unemployment aid",
      te: "20 లక్షల ఉద్యోగాలు, లేదా నెలకు ₹3,000 నిరుద్యోగ భృతి",
    },
    fullText: {
      en: "20 lakh jobs for youth over the term; ₹3,000 per month unemployment allowance until a job is provided.",
      te: "ఐదేళ్లలో యువతకు 20 లక్షల ఉద్యోగాలు; ఉద్యోగం వచ్చే వరకు నెలకు ₹3,000 నిరుద్యోగ భృతి.",
    },
    status: "in_progress",
    statusVerified: true,
    source: {
      label: {
        en: "TDP–JSP–BJP manifesto 2024 (India TV)",
        te: "టీడీపీ–జేఎస్‌పీ–బీజేపీ మేనిఫెస్టో 2024 (ఇండియా టీవీ)",
      },
      url: "https://www.indiatvnews.com/news/india/andhra-pradesh-assembly-election-2024-tdp-bjp-jsp-alliance-manifesto-20-lakh-jobs-skill-census-n-chandrababu-naidu-pawan-kalyan-lok-sabha-polls-2024-05-01-928872",
    },
    evidence: [
      {
        label: {
          en: "Recruitment ongoing, but 2026 budget allocated ₹0 for the ₹3,000 allowance (Hans India)",
          te: "నియామకాలు జరుగుతున్నాయి, కానీ 2026 బడ్జెట్‌లో ₹3,000 భృతికి ₹0 కేటాయింపు (హన్స్ ఇండియా)",
        },
        url: "https://www.thehansindia.com/andhra-pradesh/budget-disappoints-unemployed-youth-1048588",
      },
    ],
  },
  {
    id: "nda-deepam-cylinders",
    termId: "tdp-2024",
    category: "welfare",
    title: {
      en: "Deepam — 3 free LPG cylinders per year",
      te: "దీపం — ఏటా 3 ఉచిత వంట గ్యాస్ సిలిండర్లు",
    },
    fullText: {
      en: "Three free cooking-gas cylinders per year to eligible households under the Deepam scheme.",
      te: "దీపం పథకం కింద అర్హత గల కుటుంబాలకు ఏటా మూడు ఉచిత వంట గ్యాస్ సిలిండర్లు.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: {
      label: {
        en: "TDP–Jana Sena manifesto 2024 (The News Minute)",
        te: "టీడీపీ–జనసేన మేనిఫెస్టో 2024 (ద న్యూస్ మినిట్)",
      },
      url: "https://www.thenewsminute.com/andhra-pradesh/ap-polls-tdp-jana-sena-manifesto-promises-free-gas-cylinders-unemployment-allowance",
    },
    evidence: [
      {
        label: {
          en: "'Deepam-2' free LPG scheme launched (Deccan Herald, Nov 2024)",
          te: "'దీపం-2' ఉచిత గ్యాస్ పథకం ప్రారంభం (డెక్కన్ హెరాల్డ్, నవం 2024)",
        },
        url: "https://www.deccanherald.com/india/andhra-pradesh/andhra-cm-launches-free-cooking-gas-cylinder-scheme-deepam-2-3258728",
      },
    ],
  },
  {
    id: "nda-tap-water",
    termId: "tdp-2024",
    category: "infrastructure",
    title: {
      en: "Free tap connection and clean drinking water to every household",
      te: "ప్రతి ఇంటికీ ఉచిత నల్లా కనెక్షన్, స్వచ్ఛమైన తాగునీరు",
    },
    fullText: {
      en: "A free tap connection and supply of clean drinking water to every household.",
      te: "ప్రతి ఇంటికీ ఉచిత నల్లా కనెక్షన్, స్వచ్ఛమైన తాగునీటి సరఫరా.",
    },
    status: "in_progress",
    statusVerified: false,
    source: {
      label: {
        en: "TDP–JSP–BJP manifesto 2024 (The Print)",
        te: "టీడీపీ–జేఎస్‌పీ–బీజేపీ మేనిఫెస్టో 2024 (ద ప్రింట్)",
      },
      url: "https://theprint.in/india/andhra-pradesh-nda-partners-tdp-bjp-janasena-release-welfare-heavy-manifesto-2/2064385/",
    },
    // Tracked under Jal Jeevan Mission (~74% rural household tap coverage in 2025,
    // state target 2028). Awaiting a stable authoritative link for the figure.
  },
  {
    id: "nda-bc-pension-50",
    termId: "tdp-2024",
    category: "welfare",
    title: {
      en: "Pensions for Backward Classes from age 50",
      te: "వెనుకబడిన తరగతులకు 50 ఏళ్ల నుంచి పింఛన్లు",
    },
    fullText: {
      en: "BC declaration with pensions to Backward Classes from the age of 50 and a special protection act.",
      te: "బీసీ డిక్లరేషన్‌తో 50 ఏళ్ల నుంచి వెనుకబడిన తరగతులకు పింఛన్లు, ప్రత్యేక రక్షణ చట్టం.",
    },
    status: "not_started",
    statusVerified: false,
    source: {
      label: {
        en: "TDP–JSP–BJP manifesto 2024 (The Print)",
        te: "టీడీపీ–జేఎస్‌పీ–బీజేపీ మేనిఫెస్టో 2024 (ద ప్రింట్)",
      },
      url: "https://theprint.in/india/andhra-pradesh-nda-partners-tdp-bjp-janasena-release-welfare-heavy-manifesto-2/2064385/",
    },
    evidence: [
      {
        label: {
          en: "Issued as a 10-point election declaration; no enactment found (The South First)",
          te: "10-పాయింట్ల ఎన్నికల ప్రకటనగా విడుదల; చట్టం కాలేదు (ద సౌత్ ఫస్ట్)",
        },
        url: "https://thesouthfirst.com/andhrapradesh/tdp-jsps-10-point-declaration-for-backward-classes-includes-%E2%82%B94000-pension-atrocities-act/",
      },
    ],
  },

  // ---------------- YSRCP government (2019–24) — "Navaratnalu" ----------------
  {
    id: "ysrcp-amma-vodi",
    termId: "ysrcp-2019",
    category: "education",
    title: {
      en: "Amma Vodi — ₹15,000/year to mothers for schooling",
      te: "అమ్మ ఒడి — చదువు కోసం తల్లులకు ఏటా ₹15,000",
    },
    fullText: {
      en: "₹15,000 per year to every mother/guardian sending their children to school, under Amma Vodi.",
      te: "అమ్మ ఒడి కింద పిల్లలను బడికి పంపే ప్రతి తల్లి/సంరక్షకునికి ఏటా ₹15,000.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Launched Jan 2020, ₹15,000/yr to ~43 lakh mothers, ran full term (The Logical Indian)",
          te: "జన 2020లో ప్రారంభం, ~43 లక్షల తల్లులకు ఏటా ₹15,000, పూర్తి కాలం (ద లాజికల్ ఇండియన్)",
        },
        url: "https://thelogicalindian.com/ap-amma-vodi-scheme-2/",
      },
    ],
  },
  {
    id: "ysrcp-rythu-bharosa",
    termId: "ysrcp-2019",
    category: "agriculture",
    title: {
      en: "YSR Rythu Bharosa — annual support to farmers",
      te: "వైఎస్‌ఆర్ రైతు భరోసా — రైతులకు వార్షిక సహాయం",
    },
    fullText: {
      en: "Annual financial assistance to farmer families (₹13,500/year, inclusive of PM-Kisan) under YSR Rythu Bharosa.",
      te: "వైఎస్‌ఆర్ రైతు భరోసా కింద రైతు కుటుంబాలకు వార్షిక ఆర్థిక సహాయం (ఏటా ₹13,500, పీఎం-కిసాన్‌తో కలిపి).",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Launched Oct 2019, ₹13,500/yr to farmers, ran full term (eGovtSchemes)",
          te: "అక్టో 2019లో ప్రారంభం, రైతులకు ఏటా ₹13,500, పూర్తి కాలం (ఈగవ్ట్‌స్కీమ్స్)",
        },
        url: "https://www.egovtschemes.com/ysr-rythu-bharosa/",
      },
    ],
  },
  {
    id: "ysrcp-aarogyasri",
    termId: "ysrcp-2019",
    category: "health",
    title: {
      en: "YSR Aarogyasri — health cover up to ₹5 lakh",
      te: "వైఎస్‌ఆర్ ఆరోగ్యశ్రీ — ₹5 లక్షల వరకు ఆరోగ్య బీమా",
    },
    fullText: {
      en: "Expanded Aarogyasri health coverage up to ₹5 lakh per family for listed treatments.",
      te: "జాబితాలోని చికిత్సలకు కుటుంబానికి ₹5 లక్షల వరకు విస్తరించిన ఆరోగ్యశ్రీ బీమా.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Revamped Aarogyasri; ₹5 lakh limit, later raised to ₹25 lakh (The South First)",
          te: "పునరుద్ధరించిన ఆరోగ్యశ్రీ; ₹5 లక్షల పరిమితి, తర్వాత ₹25 లక్షలకు పెంపు (ద సౌత్ ఫస్ట్)",
        },
        url: "https://thesouthfirst.com/andhrapradesh/here-is-all-you-need-to-know-about-the-revamped-ysr-aarogyasri-scheme/",
      },
    ],
  },
  {
    id: "ysrcp-pension-kanuka",
    termId: "ysrcp-2019",
    category: "welfare",
    title: {
      en: "YSR Pension Kanuka — higher social security pensions",
      te: "వైఎస్‌ఆర్ పింఛను కానుక — పెంచిన సామాజిక భద్రత పింఛన్లు",
    },
    fullText: {
      en: "Social security pensions raised in phases (to ₹3,000+ per month for eligible categories).",
      te: "సామాజిక భద్రత పింఛన్లు దశలవారీగా పెంపు (అర్హుల వర్గాలకు నెలకు ₹3,000+ వరకు).",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Pension raised to ₹3,000/month (Jan 2024), ~66 lakh beneficiaries (Sakshi)",
          te: "పింఛను నెలకు ₹3,000కు పెంపు (జన 2024), ~66 లక్షల లబ్ధిదారులు (సాక్షి)",
        },
        url: "https://www.sakshi.com/telugu-news/andhra-pradesh/ysr-pension-kanuka-money-increased-3000-rupees-1891318",
      },
    ],
  },
  {
    id: "ysrcp-prohibition",
    termId: "ysrcp-2019",
    category: "welfare",
    title: {
      en: "Phased total prohibition of liquor",
      te: "దశలవారీగా సంపూర్ణ మద్య నిషేధం",
    },
    fullText: {
      en: "Total prohibition of liquor to be implemented in a phased manner over the term.",
      te: "ఐదేళ్లలో దశలవారీగా సంపూర్ణ మద్య నిషేధం అమలు.",
    },
    status: "in_progress",
    statusVerified: true,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Only partial steps (govt retail, fewer outlets, higher prices); total prohibition not achieved (The News Minute)",
          te: "పాక్షిక చర్యలు మాత్రమే (ప్రభుత్వ విక్రయం, తక్కువ దుకాణాలు, ధరల పెంపు); సంపూర్ణ నిషేధం జరగలేదు (ద న్యూస్ మినిట్)",
        },
        url: "https://www.thenewsminute.com/article/will-prohibition-work-jagans-andhra-pradesh-look-ysrcp-govt-s-plan-102581",
      },
    ],
  },
  {
    id: "ysrcp-vizag-capital",
    termId: "ysrcp-2019",
    category: "infrastructure",
    title: {
      en: "Visakhapatnam as executive capital",
      te: "విశాఖపట్నం కార్యనిర్వాహక రాజధానిగా",
    },
    fullText: {
      en: "Develop Visakhapatnam as the executive capital of the state.",
      te: "విశాఖపట్నాన్ని రాష్ట్ర కార్యనిర్వాహక రాజధానిగా అభివృద్ధి చేయడం.",
    },
    status: "in_progress",
    statusVerified: true,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Decentralisation Act (2020) repealed in 2021; litigation pending; never operationalized (Wikipedia)",
          te: "వికేంద్రీకరణ చట్టం (2020) 2021లో రద్దు; వ్యాజ్యం పెండింగ్; అమలు కాలేదు (వికీపీడియా)",
        },
        url: "https://en.wikipedia.org/wiki/2019%E2%80%932024_Amaravati_protests",
      },
    ],
    cityStatus: [
      {
        city: "visakhapatnam",
        status: "in_progress",
        note: {
          en: "Capital legislation passed then repealed; held up in courts through the term.",
          te: "రాజధాని చట్టం ఆమోదం తర్వాత రద్దు; కాలమంతా కోర్టుల్లో నిలిచిపోయింది.",
        },
      },
    ],
  },
  {
    id: "ysrcp-houses-poor",
    termId: "ysrcp-2019",
    category: "welfare",
    title: {
      en: "House sites and houses for the poor",
      te: "పేదలకు ఇంటి స్థలాలు, ఇళ్లు",
    },
    fullText: {
      en: "Distribute house sites and build houses for eligible poor families.",
      te: "అర్హత గల పేద కుటుంబాలకు ఇంటి స్థలాల పంపిణీ, ఇళ్ల నిర్మాణం.",
    },
    status: "in_progress",
    statusVerified: false,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "~30 lakh sites distributed; houses sanctioned, completion count varies by source (The News Minute)",
          te: "~30 లక్షల స్థలాలు పంపిణీ; ఇళ్లు మంజూరు, పూర్తి సంఖ్య మూలాన్ని బట్టి మారుతుంది (ద న్యూస్ మినిట్)",
        },
        url: "https://www.thenewsminute.com/article/andhra-cm-launches-low-cost-housing-scheme-poor-pedalandariki-illu-140320",
      },
    ],
  },

  // ---------------- NDA government (2024–29) — additional manifesto promises ----------------
  {
    id: "nda-amaravati-capital",
    termId: "tdp-2024",
    category: "infrastructure",
    title: {
      en: "Develop Amaravati as the state capital",
      te: "అమరావతిని రాష్ట్ర రాజధానిగా అభివృద్ధి",
    },
    fullText: {
      en: "Amaravati will be developed as the capital city and measures taken for its reconstruction.",
      te: "అమరావతిని రాజధాని నగరంగా అభివృద్ధి చేసి, దాని పునర్నిర్మాణానికి చర్యలు తీసుకుంటారు.",
    },
    status: "in_progress",
    statusVerified: true,
    source: { label: NDA_LABEL, url: NDA_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Cabinet approved major new Amaravati construction works (Deccan Chronicle, Dec 2025)",
          te: "అమరావతి కొత్త నిర్మాణ పనులకు కేబినెట్ ఆమోదం (డెక్కన్ క్రానికల్, డిసె 2025)",
        },
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/ap-cabinet-approves-new-construction-works-in-amaravati-1923275",
      },
    ],
    cityStatus: [
      {
        city: "vijayawada",
        status: "in_progress",
        note: {
          en: "Amaravati capital region adjoins Vijayawada; construction resumed.",
          te: "అమరావతి రాజధాని ప్రాంతం విజయవాడకు ఆనుకుని ఉంది; నిర్మాణం పునఃప్రారంభం.",
        },
      },
    ],
  },
  {
    id: "nda-anna-canteens",
    termId: "tdp-2024",
    category: "welfare",
    title: {
      en: "Revive Anna Canteens — meals at ₹5",
      te: "అన్న క్యాంటీన్లు పునరుద్ధరణ — ₹5కు భోజనం",
    },
    fullText: {
      en: "Reopen Anna Canteens offering meals through the day at a highly subsidised ₹5.",
      te: "రోజంతా ₹5 రాయితీ ధరకు భోజనం అందించే అన్న క్యాంటీన్లను తిరిగి తెరవడం.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: {
      label: {
        en: "TDP 2024 poll promise (The News Minute)",
        te: "టీడీపీ 2024 ఎన్నికల హామీ (ద న్యూస్ మినిట్)",
      },
      url: "https://www.thenewsminute.com/andhra-pradesh/discontinued-by-ysrcp-tdp-relaunches-anna-canteens-in-andhra",
    },
    evidence: [
      {
        label: {
          en: "TDP govt relaunched Anna Canteens at ₹5/meal (The News Minute, 2024)",
          te: "టీడీపీ ప్రభుత్వం ₹5/భోజనానికి అన్న క్యాంటీన్లు పునఃప్రారంభం (ద న్యూస్ మినిట్, 2024)",
        },
        url: "https://www.thenewsminute.com/andhra-pradesh/discontinued-by-ysrcp-tdp-relaunches-anna-canteens-in-andhra",
      },
    ],
  },
  {
    id: "nda-mega-dsc",
    termId: "tdp-2024",
    category: "jobs",
    title: {
      en: "Mega DSC — large-scale teacher recruitment",
      te: "మెగా డీఎస్‌సీ — భారీ స్థాయిలో ఉపాధ్యాయ నియామకాలు",
    },
    fullText: {
      en: "A mega teacher recruitment drive and an annual job calendar to fill vacancies.",
      te: "ఖాళీల భర్తీకి మెగా ఉపాధ్యాయ నియామక డ్రైవ్, వార్షిక ఉద్యోగ క్యాలెండర్.",
    },
    status: "in_progress",
    statusVerified: true,
    source: { label: NDA_LABEL, url: NDA_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Mega DSC 2025 announced to recruit 16,000+ teachers (The South First)",
          te: "16,000+ ఉపాధ్యాయుల నియామకానికి మెగా డీఎస్‌సీ 2025 ప్రకటన (ద సౌత్ ఫస్ట్)",
        },
        url: "https://thesouthfirst.com/andhrapradesh/andhra-pradesh-government-announces-mega-dsc-2025-to-recruit-over-16000-teachers/",
      },
    ],
  },
  {
    id: "nda-scrap-land-titling",
    termId: "tdp-2024",
    category: "infrastructure",
    title: {
      en: "Repeal the YSRCP-era Land Titling Act",
      te: "వైఎస్‌ఆర్‌సిపి కాలపు ల్యాండ్ టైట్లింగ్ చట్టం రద్దు",
    },
    fullText: {
      en: "The Land Titling Act introduced by the YSRCP government will be rescinded.",
      te: "వైఎస్‌ఆర్‌సిపి ప్రభుత్వం తెచ్చిన ల్యాండ్ టైట్లింగ్ చట్టాన్ని రద్దు చేస్తారు.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: NDA_LABEL, url: NDA_MANIFESTO },
    evidence: [
      {
        label: {
          en: "AP Land Titling Repeal Act, 2024 (Act 11 of 2024) — official text (PRS)",
          te: "ఏపీ ల్యాండ్ టైట్లింగ్ రద్దు చట్టం, 2024 (చట్టం 11/2024) — అధికారిక పాఠం (PRS)",
        },
        url: "https://prsindia.org/files/bills_acts/acts_states/andhra-pradesh/2024/Act11of2024AP.pdf",
      },
    ],
  },
  {
    id: "nda-polavaram",
    termId: "tdp-2024",
    category: "infrastructure",
    title: {
      en: "Complete the Polavaram irrigation project",
      te: "పోలవరం సాగునీటి ప్రాజెక్టు పూర్తి",
    },
    fullText: {
      en: "Quick completion of the Polavaram irrigation project.",
      te: "పోలవరం సాగునీటి ప్రాజెక్టును త్వరితగతిన పూర్తి చేయడం.",
    },
    status: "in_progress",
    statusVerified: true,
    source: { label: NDA_LABEL, url: NDA_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Under active construction; completion targeted October 2026 (The Chenab Times)",
          te: "క్రియాశీల నిర్మాణంలో; అక్టోబర్ 2026 పూర్తి లక్ష్యం (ద చీనాబ్ టైమ్స్)",
        },
        url: "https://thechenabtimes.com/2026/05/28/international-experts-affirm-polavaram-projects-pace-and-quality/",
      },
    ],
  },
  {
    id: "nda-pension-hike-4000",
    termId: "tdp-2024",
    category: "welfare",
    title: {
      en: "Raise social security pension to ₹4,000/month",
      te: "సామాజిక భద్రత పింఛను నెలకు ₹4,000కు పెంపు",
    },
    fullText: {
      en: "Welfare pensions will be hiked from ₹3,000 to ₹4,000 per month.",
      te: "సంక్షేమ పింఛన్లను నెలకు ₹3,000 నుంచి ₹4,000కు పెంచుతారు.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: NDA_LABEL, url: NDA_MANIFESTO },
    evidence: [
      {
        label: {
          en: "GO MS 43 (13.06.2024): pension raised to ₹4,000/month — official AP order",
          te: "జీవో ఎంఎస్ 43 (13.06.2024): పింఛను నెలకు ₹4,000కు పెంపు — అధికారిక ఏపీ ఉత్తర్వు",
        },
        url: "https://sspensions.ap.gov.in/SSP/Documents/GO%20MS%2043%2013.06.2024.pdf",
      },
    ],
  },

  // ---------------- YSRCP government (2019–24) — additional Navaratnalu promises ----------------
  {
    id: "ysrcp-vidya-deevena",
    termId: "ysrcp-2019",
    category: "education",
    title: {
      en: "Jagananna Vidya Deevena — full college fee reimbursement",
      te: "జగనన్న విద్యా దీవెన — పూర్తి కళాశాల ఫీజు రీయింబర్స్‌మెంట్",
    },
    fullText: {
      en: "Full reimbursement of college tuition fees, paid quarterly to mothers.",
      te: "కళాశాల ట్యూషన్ ఫీజుల పూర్తి రీయింబర్స్‌మెంట్, తల్లులకు త్రైమాసికంగా చెల్లింపు.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Fee reimbursement disbursed quarterly to mothers through the term (Deccan Chronicle)",
          te: "కాలమంతా తల్లులకు త్రైమాసికంగా ఫీజు రీయింబర్స్‌మెంట్ (డెక్కన్ క్రానికల్)",
        },
        url: "https://www.deccanchronicle.com/nation/current-affairs/180323/cm-to-disburse-rs-69868-crore-under-jagananna-vidya-deevena-today.html",
      },
    ],
  },
  {
    id: "ysrcp-cheyutha",
    termId: "ysrcp-2019",
    category: "women",
    title: {
      en: "YSR Cheyutha — annual aid to women 45–60",
      te: "వైఎస్‌ఆర్ చేయూత — 45–60 ఏళ్ల మహిళలకు వార్షిక సహాయం",
    },
    fullText: {
      en: "Financial assistance to SC/ST/BC/Minority women aged 45–60 (₹75,000 over four years).",
      te: "45–60 ఏళ్ల ఎస్సీ/ఎస్టీ/బీసీ/మైనారిటీ మహిళలకు ఆర్థిక సహాయం (నాలుగేళ్లలో ₹75,000).",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Final phase released; ₹75,000 over four years per woman (Deccan Chronicle)",
          te: "చివరి దశ విడుదల; ఒక్కో మహిళకు నాలుగేళ్లలో ₹75,000 (డెక్కన్ క్రానికల్)",
        },
        url: "https://www.deccanchronicle.com/nation/current-affairs/cm-jagan-releases-rs-5060-crore-under-ysr-cheyutha-884529",
      },
    ],
  },
  {
    id: "ysrcp-nadu-nedu",
    termId: "ysrcp-2019",
    category: "education",
    title: {
      en: "Mana Badi Nadu-Nedu — revamp government schools",
      te: "మన బడి నాడు-నేడు — ప్రభుత్వ పాఠశాలల పునరుద్ధరణ",
    },
    fullText: {
      en: "Upgrade government school infrastructure and introduce English medium under Nadu-Nedu.",
      te: "నాడు-నేడు కింద ప్రభుత్వ పాఠశాలల మౌలిక సదుపాయాల అభివృద్ధి, ఆంగ్ల మాధ్యమం ప్రవేశం.",
    },
    status: "in_progress",
    statusVerified: true,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Phase 1 done (~15,715 schools); Phase 2 stalled on funds (The South First)",
          te: "దశ 1 పూర్తి (~15,715 పాఠశాలలు); నిధుల లేమితో దశ 2 నిలిచిపోయింది (ద సౌత్ ఫస్ట్)",
        },
        url: "https://thesouthfirst.com/pti/phase-2-of-andhra-pradesh-chief-ministers-ambitious-mana-badi-nadu-nedu-comes-to-halt/",
      },
    ],
  },
  {
    id: "ysrcp-sunna-vaddi",
    termId: "ysrcp-2019",
    category: "women",
    title: {
      en: "YSR Sunna Vaddi — zero-interest loans to women SHGs",
      te: "వైఎస్‌ఆర్ సున్నా వడ్డీ — మహిళా సంఘాలకు వడ్డీ లేని రుణాలు",
    },
    fullText: {
      en: "Reimburse interest so women's self-help group loans are effectively zero-interest.",
      te: "మహిళా స్వయం సహాయక సంఘాల రుణాలు వడ్డీ లేకుండా ఉండేలా వడ్డీని రీయింబర్స్ చేయడం.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "₹13,054 cr interest reimbursed to 1 cr+ SHG women (National Herald)",
          te: "1 కోటి+ సంఘ మహిళలకు ₹13,054 కోట్ల వడ్డీ రీయింబర్స్ (నేషనల్ హెరాల్డ్)",
        },
        url: "https://www.nationalheraldindia.com/national/andhra-pradesh-cm-disburses-rs-13054-crore-interest-reimbursement-under-ysr-sunna-vaddi-scheme",
      },
    ],
  },
  {
    id: "ysrcp-disha-act",
    termId: "ysrcp-2019",
    category: "women",
    title: {
      en: "AP Disha Act — fast-track law for crimes against women",
      te: "ఏపీ దిశ చట్టం — మహిళలపై నేరాలకు ఫాస్ట్-ట్రాక్ చట్టం",
    },
    fullText: {
      en: "Enact the Disha Act for fast-track investigation and trial of crimes against women.",
      te: "మహిళలపై నేరాల ఫాస్ట్-ట్రాక్ దర్యాప్తు, విచారణ కోసం దిశ చట్టాన్ని తీసుకురావడం.",
    },
    status: "in_progress",
    statusVerified: true,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "Assembly passed the Bill (2019); Presidential assent never granted, not operational (Republic)",
          te: "అసెంబ్లీ బిల్లు ఆమోదం (2019); రాష్ట్రపతి ఆమోదం రాలేదు, అమలులోకి రాలేదు (రిపబ్లిక్)",
        },
        url: "https://www.republicworld.com/india-news/general-news/andhra-pradesh-govt-yet-to-provide-clarifications-mha-clears-air-on-pending-disha-bill.html",
      },
    ],
  },
  {
    id: "ysrcp-matsyakara-bharosa",
    termId: "ysrcp-2019",
    category: "agriculture",
    title: {
      en: "YSR Matsyakara Bharosa — support to fishermen",
      te: "వైఎస్‌ఆర్ మత్స్యకార భరోసా — మత్స్యకారులకు సహాయం",
    },
    fullText: {
      en: "Financial assistance to fishermen families during the annual fishing-ban period.",
      te: "వార్షిక చేపల వేట నిషేధ కాలంలో మత్స్యకార కుటుంబాలకు ఆర్థిక సహాయం.",
    },
    status: "completed",
    statusVerified: true,
    completionPct: 100,
    source: { label: YSRCP_LABEL, url: YSRCP_MANIFESTO },
    evidence: [
      {
        label: {
          en: "₹123.52 cr to 1,23,519 fishermen; final disbursal May 2024 (ICSF)",
          te: "1,23,519 మత్స్యకారులకు ₹123.52 కోట్లు; చివరి చెల్లింపు మే 2024 (ICSF)",
        },
        url: "https://icsf.net/newss/andhra-pradesh-3-52-crore-as-assistance-for-the-fishing-ban-period-to-fishermen-families/",
      },
    ],
  },
];
