import type { QuizQuestion } from "@/lib/quiz-types";

export const questions = [
  {
    "id": "BIB-001",
    "section": "Bibliografie și limite de materie",
    "topic": "Încadrare post",
    "difficulty": "scenario",
    "sourceAct": "Tematica oficială Administrator II / anunț de examen",
    "type": "single",
    "question": "Un candidat pregătește examenul cu bibliografia pentru educator pt grupa mică, presupunând că Administrator II are atribuții didactice. Care este încadrarea reală a postului Administrator II / studii medii la Grădinița cu program prelungit „Pescăruș” Mangalia și de ce contează acest lucru pentru materia învățată?",
    "options": [
      {
        "id": "A",
        "text": "Gestionarea administrativă a bunurilor, aprovizionarea, inventarul, depozitarea și aplicarea normelor de igienă/SSM/PSI, fără atribuții didactice."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, predarea directă a copiilor și elaborarea curriculumului pentru grupa mică."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, doar supravegherea copiilor în curte în timpul pauzelor, fără răspunderi de gestionare."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, coordonarea activităților instructiv-educative ale educatoarelor din unitate."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Administrator II este post administrativ (gestiune, aprovizionare, inventar, norme igienice/SSM/PSI), NU post didactic. Confuzia duce la învățarea unei materii care NU se examinează, deci la respingere.",
    "tooltipCorrect": "Postul este administrativ, NU didactic; materia examenului reflectă atribuțiile reale de gestiune, nu pe cele de educator."
  },
  {
    "id": "BIB-002",
    "section": "Bibliografie și limite de materie",
    "topic": "Surse și bibliografie",
    "difficulty": "scenario",
    "sourceAct": "Documentul de învățare Administrator II + tematica oficială",
    "type": "single",
    "question": "Pentru a economisi timp, un candidat renunță la suportul de învățare și la tematica oficială și învață doar din rezumate de pe bloguri. Ce risc fundamental apare și care este baza corectă a materiei?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, niciun risc, pentru că blogurile sintetizează mai clar decât actele oficiale și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Risc major: rezumatele neoficiale pot omite modificările/completările actelor și pot inventa praguri; materia examenului se bazează pe suportul de învățare + tematica/bibliografia oficială din anunț."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, risc doar pentru partea de acte normative; pentru SSM/PSI orice sursă este acceptată ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, risc redus, atâta timp cât rezumatele sunt datate recent și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Banca de întrebări urmărește materia din suportul de învățare și tematica oficială. Rezumatele neoficiale pot prezenta forme învechite sau eronate ale actelor și praguri greșite, generând răspunsuri incorecte la examen.",
    "tooltipCorrect": "Materia de examen = suportul de învățare + tematica/bibliografia oficială; sursele neoficiale riscă să omită modificări și să inventeze praguri."
  },
  {
    "id": "BIB-003",
    "section": "Bibliografie și limite de materie",
    "topic": "Forma actelor la examen",
    "difficulty": "scenario",
    "sourceAct": "Nota din tematica oficială privind forma actelor",
    "type": "single",
    "question": "Un act din bibliografie (ex. Legea 123/2008) a fost modificat printr-un text publicat DUPĂ data publicării anunțului de examen. Un candidat a învățat pe forma modificată ulterior. Ce formă a actului contează la examen și de ce?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, forma modificată ulterior, pentru că este cea mai nouă și „mai corectă”."
      },
      {
        "id": "B",
        "text": "Orice formă găsită pe prima pagină a unui motor de căutare, indiferent de dată."
      },
      {
        "id": "C",
        "text": "Forma cu modificările și completările valabile până la data publicării anunțului de examen."
      },
      {
        "id": "D",
        "text": "Conform procedurii, prima formă publicată inițial, fără nicio modificare ulterioară."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tematica precizează că se consideră forma valabilă cu modificările/completările până la ziua publicării anunțului. O modificare ulterioară anunțului NU intră în materia examenului, deci învățarea ei poate duce la răspunsuri greșite.",
    "tooltipCorrect": "Contează forma valabilă la data publicării anunțului, cu modificările/completările până atunci — nu forma inițială și nici modificările ulterioare."
  },
  {
    "id": "BIB-004",
    "section": "Bibliografie și limite de materie",
    "topic": "Surse oficiale",
    "difficulty": "scenario",
    "sourceAct": "Portalul Legislativ – forma printabilă/actualizată",
    "type": "single",
    "question": "Pentru a verifica forma actualizată a Ordinului 1563/2008, candidatul folosește o copie xerox veche, fără modificări. Care este procedura corectă și de ce contează „forma printabilă” de pe Portalul Legislativ?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, descarcă orice PDF care conține numărul actului, indiferent de sursă sau dată."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, se bazează exclusiv pe varianta memorată de un coleg care a susținut examenul în alt an."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, copia xerox este suficientă dacă are ștampila unității pe ea și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Caută actul pe Portalul Legislativ și folosește „forma printabilă”/actualizată, care reflectă modificările valabile până la data anunțului."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Portalul Legislativ oferă forma consolidată/actualizată a actului prin „forma printabilă”. Copiile neoficiale sau învechite pot prezenta texte fără modificări, generând răspunsuri greșite la grile.",
    "tooltipCorrect": "Portalul Legislativ + „forma printabilă”/actualizată este sursa fiabilă; copiile învechite pot omite modificările și duc la erori."
  },
  {
    "id": "DOT-001",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Obligativitate Anexa 2",
    "difficulty": "basic",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II constată că unitatea dispune de 6 din 8 categorii de dotări prevăzute în Anexa 2. Ce face?",
    "options": [
      {
        "id": "A",
        "text": "Semnalează lipsa dotărilor din categoriile neacoperite conducerii, deoarece existența tuturor dotărilor din Anexa 2 este obligatorie pentru serviciile 0–6 ani."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, așteaptă ca grădiniță să depășească capacitatea máximă înainte de a completa dotările."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, consideră că unitatea poate funcționa cu 6 categorii dacă grupele sunt mici și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, raportează conducerii că nu sunt suficiente resurse și inventarul este complet și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 stabilește că existența tuturor dotărilor obligatorii este imperativă; cantitățile se ajustează după nevoi și nr. copii, dar toate categoriile trebuie prezente. Administrator-ul semnalează conducerii lipsa dotărilor conform reglementărilor.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2, stabilește obligativitatea tuturor dotărilor; cantitățile le stabilește unitatea în funcție de nevoi și nr. copii."
  },
  {
    "id": "DOT-002",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Cine stabilește cantități dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește o solicitare din partea educatoarei: sunt necesare 8 scaune suplimentare pt o grupă de antepreșcolari (0–3 ani) care tocmai s-a deschis cu 12 copii. Ce decide?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, refuză, deoarece Anexa 2 stabilește numărul exact: 4 scauni per grupă."
      },
      {
        "id": "B",
        "text": "Cumpără scaunele imediat, deoarece standardele prevăd scauni cu dimensiuni 21-20-20 și numărul se stabilește de unitate după nr. copii."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, cumpără doar 6 scauni pentru a economisi bugete și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, așteaptă ordinul superintendentului școlelor înainte de a procura scaunele."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Ordinul 4143/2022, Anexa 2, prevede că cantitățile dotărilor le stabilește unitatea în funcție de nevoile lor și nr. de copii din grupă. Dimensiunile scaunelor pt antepreșcolari sunt 21-20-20; administrator-ul aprovizionează în baza necesităților educatorului.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: cantitățile se stabilesc de unitate după nevoi și nr. copii; dimensiuni antepreșcolar 21-20-20."
  },
  {
    "id": "DOT-003",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Scaune antepreșcolar vs preșcolar",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește un ofertă de 10 scaune cu dimensiuni 30-29-26 cm. În inventarul grădinței sunt 2 grupe: antepreșcolari (0–3 ani) și preșcolari (3–6 ani). Care grup poate folosi aceste scaune?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, ambele grupe, dar la preșcolari nu sunt dimensiunile standard."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, doar grupa de antepreșcolari, conform Anexei 2 și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Grupa de preșcolari (3–6 ani), conform standardelor Anexei 2 care stabilesc scaune 30-29-26 pentru această vârstă."
      },
      {
        "id": "D",
        "text": "Pe baza dispoziției, nici una, deoarece din ordinul 4143 sunt restricții de utilizare a scaunelor pe nivele."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 prevede dimensiuni diferite de scaune: antepreșcolar (0–3 ani) — 21-20-20 cm; preșcolar (3–6 ani) — 26-24-23 și 30-29-26 cm. Scaunele 30-29-26 sunt specifice pentru preșcolari.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: antepreșcolar 21-20-20; preșcolar 26-24-23 și 30-29-26."
  },
  {
    "id": "DOT-004",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Mese antepreșcolar vs preșcolar",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește ofertă de mese pt 4 copii cu lungimea 52 cm. Grădiniță are o grupă de antepreșcolari (0–3 ani). Pot fi folosite aceste mese?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, da, lungimea mesei nu contează; copiii se pot adapta."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, da, 52 cm este dimensiunea standard pt orice vârstă."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, doar dacă educatoarea aprobă folosirea lor."
      },
      {
        "id": "D",
        "text": "Nu, deoarece pt antepreșcolari (0–3) lungimea mesei trebuie să fie 43 cm; masa de 52 cm este pt preșcolari (3–6)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 stabilește: pentru antepreșcolari (0–3 ani), mese pt 4 copii cu lungimea 43 cm; pentru preșcolari (3–6), mese pt 4 copii cu lungimi 47 și 52 cm. Dimensiunile sunt diferite și adaptat la talia copiilor.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: mese antepreșcolar (I=43); mese preșcolar (I=47, II=52)."
  },
  {
    "id": "DOT-005",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Fier de călcat - Joc de rol",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "La centrul de Joc de rol din grupa de antepreșcolari (0–3 ani) educatoarea solicită un fier de călcat de jucărie. Administrator-ul II constată că acest echipament nu figura în inventar. Ce decide?",
    "options": [
      {
        "id": "A",
        "text": "Refuză procurarea, deoarece fierul de călcat în Joc de rol este prevăzut în Anexa 2 DOAR pt preșcolari (3–6 ani), nu pt antepreșcolari."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, procură fierul de călcat, deoarece este parte din dotarea obligatorie pentru orice grupă."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, cumpără fierul după o evaluare internă a nevoilor grupei și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, solicită permisiune părinților înainte de a cumpăra și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 enumeră dotări specifice pentru antepreșcolar și preșcolar. Fierul de călcat în centrul de Joc de rol este DOAR la preșcolari (3–6). Pentru antepreșcolari (0–3), dotările de Joc de rol includ: păpuși, cărucior, veselă, miniechipamente casnice (aragaz, mașină de spălat, chiuvetă), set îngrijire plante, dar NU fier de călcat.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: fier de călcat în Joc de rol DOAR la preșcolar (3–6)."
  },
  {
    "id": "DOT-006",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Microscop digital - Știință preșcolar",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește o cerere de finanțare pt achiziția unui microscop digital. Grădiniță are 2 grupe: una de antepreșcolari (0–3 ani) și una de preșcolari (3–6 ani). Pentru care grupă/grupe se justifică procurarea conform Anexei 2?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, pentru antepreșcolari, deoarece copiii mici au nevoie mai mult de explorare senzorială."
      },
      {
        "id": "B",
        "text": "DOAR pentru grupa de preșcolari (3–6), conform Anexei 2, care prevede Microscop digital DOAR la preșcolar, nu la antepreșcolar."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, pentru ambele grupe, deoarece microscopia este importantă la orice vârstă."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, doar pentru grupa cu mai mulți copii urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 prevede Microscop digital DOAR la preșcolar (3–6 ani). Pentru antepreșcolari (0–3), centrul de Știință conține alte materiale: lupă, cutii cu materiale din natură, recipiente, seturi de stimulare senzorială, albume, Logic I, dar NU microscop digital.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: Microscop digital DOAR la preșcolar (3–6)."
  },
  {
    "id": "DOT-007",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Logic II, mulaje, planșe solar - preșcolar",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II face inventarul anuual al centrului de Știință. Găsește Logic I, planșe cu anotimpuri, mulaje de animale. Grupa are copii de preșcolar (3–6). Ce verifică mai departe?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, comandă doar suplimente la planșele existente, fără a adăuga materiale noi."
      },
      {
        "id": "B",
        "text": "Conform procedurii, consideră inventarul complet, deoarece Logic I este suficient pentru preșcolari."
      },
      {
        "id": "C",
        "text": "Verifică dacă sunt și Logic II și planșe sistem solar, care lipsesc și sunt obligatorii la preșcolar conform Anexei 2."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, semnalează că centrul de Știință nu trebuie să aibă atât de mult material."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 prevede pentru preșcolar: Logic I ȘI Logic II, mulaje, planșe sistem solar ȘI anotimpuri. La antepreșcolar se găsește doar Logic I. Administrator-ul verifică completitudinea și semnalează orice lipsuri conducerii.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: preșcolar cu Logic I + II, mulaje, planșe solar + anotimpuri."
  },
  {
    "id": "DOT-008",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Jaloane, coardă, cercuri, stegulețe - mișcare preșcolar",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Educatoarea grupei de antepreșcolari (0–3 ani) solicită jaloane și cercuri colorate pt joacă în curte. Administrator-ul II constată că acestea nu sunt în inventar. Ce decide?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, achizitionează doar cercuri, nu și jaloane ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, așteaptă cazul unei accidentări înainte de a introduce jalonauri."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, cumpără imediat, deoarece sunt materiale standard pt mișcare la orice vârstă."
      },
      {
        "id": "D",
        "text": "Refuză, deoarece jaloane, coardă, cercuri și stegulețe sunt prevăzute în Anexa 2 DOAR pt preșcolari (3–6), nu pt antepreșcolari (0–3)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 stabilește că jaloane, coardă, cercuri și stegulețe sunt echipamente de mișcare DOAR pentru preșcolari (3–6). Pentru antepreșcolari (0–3), echipamentele de mișcare sunt: tobogan, tunel de târâre, bază de atracții, saltea, spalier, popice, mingi (min. 2 dimensiuni), triciclete, trotinete, minicoș de baschet, minipoartă de fotbal.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: jaloane, coardă, cercuri, stegulețe DOAR la preșcolar (3–6)."
  },
  {
    "id": "DOT-009",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Bază atracții - antepreșcolar",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II observă că echipamentul de mișcare 'bază de atracții' folosit de grupa de antepreșcolari (0–3 ani) e degradat și nu mai sigur. Ce verifică și ce face?",
    "options": [
      {
        "id": "A",
        "text": "Verifică conform Anexei 2 că baza de atracții este prevăzută DOAR pt antepreșcolari (0–3), limitează accesul copiilor la echipamentul defect și semnalează defecțiunea conducerii cu prioritate pt reparații SSM/PSI."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, comandă o nouă bază de atracții fără a verifica defecțiunea și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, consideră că doar preșcolarii au nevoie de bază de atracții și eliminină din inventar urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, lasă copiii să continue joacă, deoarece educatoarea va supraveghea și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 prevede bază de atracții DOAR pentru antepreșcolari (0–3). Administrator-ul II asigură că echipamentele sunt verificate periodic (fără suruburi ieșite, rugină, lemn aschiat, muchii periculoase). Dacă sunt defecte, limitează accesul și semnalează conducerii cu prioritate.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: bază de atracții pt antepreșcolar; administr. verific. periodic și limit. acces la defecte."
  },
  {
    "id": "DOT-010",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Mingi - 2 dimensiuni minime",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II face inventar la echipamentele de mișcare și găsește doar mingi de tenis (mici). Educatoarea solicită și mingi mai mari. Ce justificare legal dă?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, neaga, deoarece mingiile de tenis sunt suficiente; nu sunt alte dimensiuni prevăzute."
      },
      {
        "id": "B",
        "text": "Aprobă achiziriția, citând Anexa 2 care prevede 'mingi (min. 2 dimensiuni)' în echipamentele de mișcare interior/exterior."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, procedează la inventar anual fără a completa mingiile."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, solicită aprobarea părinților pentru a cumpăra mingi suplimentare."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 enumeră mingi (min. 2 dimensiuni) ca dotare obligatorie în categoria 'Aparatură, echipamente și jocuri pt mișcare'. Administrator-ul asigură prezența mai multor dimensiuni de mingi pt diverse activități și grupe de vârstă.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: mingi în min. 2 dimensiuni sunt obligatorii."
  },
  {
    "id": "DOT-011",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Bibliotecă joasă - rafturi oblice deschise",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește o ofertă de bibliotecă înaltă cu ușile închise. Educatoarea spune că copiii nu vor putea lua singuri cărți. Ce criterii legal aplică?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, cumpără ambele, biblioteca închisă și una joasă deschisă ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, acceptă biblioteca închisă dacă are o dulap suplimentar pt jucării și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Refuză și solicită o bibliotecă JOASĂ cu RAFTURI DESCHISE (oblice), conform Anexei 2, pt a asigura accesul copiilor la materiale și stimularea autonomiei."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, aprobă oferta, deoarece copiii pot cere cărți educatoarei ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 prevede bibliotecă JOASĂ cu RAFTURI DESCHISE (oblice) pt a facilita accesul copiilor la cărți. Standardul 4.1.1 afirmă că copiii trebuie să aibă acces la materiale, iar jucăriile/cărțile se aranjează pe rafturi JOASE.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2 + Standard 4.1.1: bibliotecă joasă cu rafturi deschise oblice, accesibil copiilor."
  },
  {
    "id": "DOT-012",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Pernuțe bibliotecă - șezut individual",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II inventariază centrul de Bibliotecă și constată că biblioteca are rafturi joase oblice, dar LIPSESC pernuțele individuale de șezut. Educatoarea spune că copiii citesc în scaune. Care este situația?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, se pot folosi perne din dormitor pt a adapta centrul și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, situația e OK, deoarece scaunele sunt suficiente pt citit ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, pernuțele sunt opționale și nu sunt în normativ și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Lipsesc pernuțele individuale, care sunt obligatorii pt centrul de Bibliotecă conform Anexei 2, creindu-se spații confortabile de citit."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 prevede pernuțe individuale pt șezut în centrul de Bibliotecă. Acestea asigură confort și creează atmosferă de lectură plăcută. Administrator-ul le procură pt a completa dotarea obligatorie.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: pernuțe individuale pt șezut în centrul Bibliotecă sunt obligatorii."
  },
  {
    "id": "DOT-013",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "All-in-One și Laptop cu internet",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește un buget pt echipamente tehnologice. Unitatea are o singură grupă de preșcolari. All-in-One și Laptop cu internet sunt AMBELE obligatorii?",
    "options": [
      {
        "id": "A",
        "text": "Da, conform Anexei 2, categoria 'Aparatură tehnologică' prevede AMBELE: All-in-One/Laptop cu internet (varianta OR), Display interactiv, Scaner, Sistem sunet, Masă luminoasă, Aparat foto."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, doar Laptop, deoarece e mai portabil și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, nu, doar one dintre ele; administrator-ul alege funcția mai potrivit ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, niciuna, deoarece copiii nu trebuie să folosească calculatoare urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 enumeră aparatura tehnologică obligatorie: All-in-One VAGY Laptop cu internet (alternativa), Display interactiv, Scaner documente portabil, Sistem sunet, Masă luminoasă, Aparat foto digital pt copii. Administrator-ul asigură prezența acestor echipamente.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: Aparatură tehnologică include All-in-One VAGY Laptop internet, Display, Scaner, Sunet, Masă luminoasă, Aparat foto."
  },
  {
    "id": "DOT-014",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Display interactiv - folosință pedagogică",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Educatoarea din grupa de antepreșcolari solicită Display interactiv pentru activități. Administrator-ul II verifică Anexa 2. Display-ul este prevăzut?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, doar dacă școala are o sală de calculatoare separată ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Da, Display interactiv face parte din echipamentele tehnologice obligatorii în Anexa 2 pt ambele grupe (antepreșcolar și preșcolar)."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, doar pt grădinițe mari cu mai mult de 3 grupe și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, nu, Display interactiv e prea complex pentru antepreșcolari ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 enumeră Display interactiv drept echipament tehnologic obligatoriu. Nu sunt restricții de vârstă în acest normativ; este disponibil pt ambele grupe (antepreșcolar și preșcolar) și utilizat conform nevoilor pedagogice.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: Display interactiv e echipament tehnologic obligatoriu."
  },
  {
    "id": "DOT-015",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Scaner portabil documente",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II trebuie să documenteze (fotografieze/scaneze) meniuri, registre de activități, fișe copii. Care echipament din Anexa 2 putea folosi?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, aparat foto + Display interactiv; scanerul nu e listat."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, aparat foto digital; scanerul nu e necesar ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Scaner documente portabil, care face parte din echipamentele obligatorii din Anexa 2 pt digitaliza documente pe hârtie."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, doar Laptop cu camera încorporată urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 prevede Scaner documente portabil ca echipament obligatoriu pentru digitalizarea eficientă a documentelor pe hârtie. Administrator-ul o folosește pt documentație administrativă și arhivare.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: Scaner documente portabil e obligatoriu pt digitalizare."
  },
  {
    "id": "DOT-016",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Masă luminoasă - centre cu materiale",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II observă că masa luminoasă din sala de grupă nu funcționează (lampă arsă). Educatoarea spune că copiii se joacă cu slide-uri colorate pe ea. De ce e importantă o reparație imediată?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, E opțională și se folosește doar la solicitarea educatoarei urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, nu e importantă; masa se poate folosi fără lumină și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, se cumpără una nouă abia după inventar anual urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "E importantă, deoarece Masa luminoasă este echipament obligatoriu din Anexa 2 pt stimularea explorării senzoriale și a creativității; reparația se efectuează urgent."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 prevede Masă luminoasă ca echipament obligatoriu din categoria Aparatură tehnologică. Ea facilitează explorarea senzorială (cu slide-uri, materiale transparente, obiecte). Administrator-ul asigură funcționarea și reparații urgente.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: Masă luminoasă e echipament obligatoriu pt explorare senzorială."
  },
  {
    "id": "DOT-017",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Aparat foto digital copii",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Grupa de preșcolari dorește să fotografie proiectul său didactic (construcție). Administrator-ul II dispune de Aparat foto digital pt copii (prevăzut în Anexa 2). Decizie?",
    "options": [
      {
        "id": "A",
        "text": "Permite accesul copiilor sub supraveghere, deoarece Aparat foto digital pt copii e echipament obligatoriu din Anexa 2, destinat explorării fotografice și dezvoltării creativității."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, refuză; doar educatoarea poate fotografia, nu copiii urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, permite, dar doar după cursuri de fotografie ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, sugereaza folosirea Laptopului în locul aparatului de foto și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 prevede Aparat foto digital pt copii ca echipament obligatoriu din categoria Aparatură tehnologică. Acesta facilitează explorarea fotografică și stimulează creativitatea copiilor sub supravegherea educatoarei.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: Aparat foto digital pt copii e echipament obligatoriu."
  },
  {
    "id": "DOT-018",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Sistem sunet - activități muzicale",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Educatoarea cere o instalație sunet pt joc muzical. Administrator-ul II constată că Sistemul sunet din Anexa 2 este obligatoriu, dar e defect. Prioritate?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, sugestia: folosește Laptopul pt muzică în locul unui sistem sunet dedicat."
      },
      {
        "id": "B",
        "text": "Urgent! Sistemul sunet e echipament obligatoriu din Anexa 2. Administrator-ul prioritizează reparațiea/înlocuirea pt a asigura activități muzicale și auditive."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, nu e urgent; grădiniță poate funcționa fără muzică ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, se repară doar dacă educatoare va folosi-o zilnic și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 prevede Sistemul sunet drept echipament tehnologic obligatoriu. Facilitează activități muzicale, auditive și de limbaj. Administrator-ul asigură funcționarea și reparații prompte.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: Sistemul sunet e echipament obligatoriu."
  },
  {
    "id": "DOT-019",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Dulap jucării materiale - siguranță",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II observă un dulap pt jucării/materiale deschis, cu piese mici la nivelul ochilor copiilor de 0–3 ani. Conform Anexei 2, care este obligația?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, educatoarea trebuie să supravegheze; dulapul este OK deschis și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, se mută dulapul mai sus, pt a fi inaccesibil urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Administrator-ul semnalează și asigură aranjamentul conform Anexei 2: dulapul pt jucării/materiale trebuie să aibă ușă (nu rămâne deschis), materiale dăunătoare/periculoase inaccesibile copiilor, și rafturi organizate sigur."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, dulapul deschis e bun; copiii invață să-și găsească jucăriile și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 prevede dulapul pt jucării/materiale. Administrator-ul asigură că acesta este închis (ușă), conținut organizat sigur, și materiale periculoase inaccesibile copiilor. Standardele 4.1.1 și regulamentele SSM/PSI cere aranjamente sigure.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: dulap jucării cu ușă, aranjament sigur, materiale periculoase inaccesibile."
  },
  {
    "id": "DOT-020",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Paturi și saltele - odihna",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II găsește 8 paturi, dar FĂRĂ saltele, în dormitorul pentru grupa de antepreșcolari (15 copii). Decizie?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, copiii se odihnesc pe paturi fără saltele; saltele nu sunt obligatorii și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, copiii mai mari nu au nevoie de odihnă; doar cei mici dorm ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, se folosesc piuțe în locul saltelor ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Lipsesc atât paturi cât și saltele individuale. Anexa 2 prevede paturi/saltele individuale pt odihnă. Administrator-ul procură saltele lipsă și mai adaugă paturi conform nr. copii din grupă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 prevede paturi/saltele individuale pt zona de odihnă. Sunt obligatorii, higienic și ergonomic. Administrator-ul asigură nr. suficient pentru toți copii din grupă și starea lor (material impermeabil pt antepreșcolari, curățare regulată).",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: paturi/saltele individuale pt odihnă obligatorii."
  },
  {
    "id": "DOT-021",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Centre Construcții - dotări obligatorii",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II face inventar la centrul de Construcții: cărămizi din lemn, cuburi, țevi carton. Educatoarea spune că lipsesc alte materiale. Ce prevede Anexa 2?",
    "options": [
      {
        "id": "A",
        "text": "Anexa 2 prevede centre de Construcții cu materiale variate: cărămizi, cuburi, țevi, dar și alte elemente constructive (placi, bare, elemente metalice ușoare, etc.) pt a stimula invenția și creativitatea. Educatoarea ar trebui să specifice ce lipsește."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, centrul de Construcții nu e obligatoriu dacă grădiniță e mică și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, centrul Construcții are doar cărămizi și cuburi; alte materiale sunt opționale și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, materialele în centrul de Construcții sunt doar din plastic și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 menționează centrul de Construcții cu materiale diverse pt a stimula creativitatea și gândirea spațială. Administrator-ul inventariază și completeaza materialele necesare conform nevoilor și solicitărilor educatorilor.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: centrul Construcții cu materiale variate obligatoriu."
  },
  {
    "id": "DOT-022",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Centre Artă - dotări specifice",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Educatoarea grupei de preșcolari solicită vopsele de ulei, pensule profesionale și tele. Administrator-ul II verifica Anexa 2 pt dotările centrului de Artă. Precizare?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, centrul de Artă necesită doar vopsele acrilice și hârtie; vopsele de ulei sunt prea avansate și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Anexa 2 prevede centrul de Artă cu materiale variate: vopsele (diverse tipuri), pensule, hârtie, marcaje, cretă, coli colorate, paste și alte materiale pt desen și pictură. Vopsele de ulei pot fi incluse; pensule profesionale pot fi adaptate. Administrator-ul procură conform nevoilor pedagogice și vârstei copiilor."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, centrul de Artă nu necesită atât de mult material și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, doar vopsele acrilice și hârtie; pensulele nu sunt esențiale urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 enumeră centrul de Artă cu materiale diverse. Administrator-ul asigură disponibilitatea vopselelor (acrilice, acuarele, etc.), pensule, hârtie colorată, markere, cretă, colaje și alte materiale pt expresia plastică. Adaptează selectarea după vârstă și nevoile copiilor.",
    "tooltipCorrect": "Ordinul ME nr. 4143/2022, Anexa 2: centrul Artă cu vopsele, pensule, hârtie și materiale diverse."
  },
  {
    "id": "DOT-023",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Standard 4.1.1 - acces copiilor la materiale",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2, Standard 4.1.1",
    "type": "single",
    "question": "Administrator-ul II constată că jucăriile din centrul de Construcții sunt pe rafturi înalte (la înălțimea educatoarei). Copiii le cer educatoarei pt fiecare activitate. Conform Standard 4.1.1, care e problemă și soluție?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, rafturi înalte sunt bune; copiii invață să ceară ajutor urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, copiii nu ar trebui să acceseze materiale singuri din motive de siguranță; racle înalte sunt OK și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "E problemă! Standard 4.1.1 (Ordinul 4143/2022, Anexa 2) prevede că copiii trebuie să aibă ACCES la materiale. Soluție: administrator-ul reorganizează, pun rafturi JOASE pe care copiii pot lua singuri materialele, stimulând autonomia și explorarea."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, nu e problemă; educatoarea distribuie jucăriile; copiii nu trebuie să le acceseze singuri urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Standard 4.1.1 (Ordinul ME nr. 4143/2022, Anexa 2) stabilește că copiii trebuie să aibă ACCES la materiale pentru a participa activ la joacă și învățare. Materialele se aranjează pe RAFTURI JOASE, accesibile. Administrator-ul asigură acest aranjament în toate centrele de activitate.",
    "tooltipCorrect": "Standard 4.1.1: copiii au acces la materiale; rafturi joase, aranjament sigur și accesibil."
  },
  {
    "id": "DOT-024",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Standard 4.1.1 - jucării aranjate sigur",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2, Standard 4.1.1",
    "type": "single",
    "question": "Administrator-ul II observă că în grupa de antepreșcolari pe rafurile joase sunt amestecate piese mic (10 mm) cu cuburi mari și piese cu muchii ascuțite. Conform Standard 4.1.1, ce verifica mai departe?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, consideră OK; copiii trebuie să se întâlnească cu diverse materiale urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, piese mici nu sunt periculoase dacă educatoarea supraveghează și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, aranjamentul amestec e bun; copiii invață despre diversitate și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "E problemă! Standard 4.1.1 cere ca materiale pe rafturi joase să fie aranjate SIGUR și ACCESIBIL. Administrator-ul: (1) separă piesele mici (pericol inghițire la 0–3), (2) izolează piese cu muchii ascuțite, (3) organiza grupe de materiale sigure după vârstă/tip. Semnalează conducerii necesitatea revizuirii aranjamentelor."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Standard 4.1.1 (Ordinul ME nr. 4143/2022, Anexa 2) nu numai că prevede ACCES, ci și SIGURANȚA. Materialele pe rafturi joase trebuie organizate de grup (piese mici separate - pericol inghițire pt 0–3; piese cu muchii ascuțite izolate). Administrator-ul și educatoarea asigură și supraveghere și aranjament sigur în raport cu vârstă.",
    "tooltipCorrect": "Standard 4.1.1: acces copiilor PLUS siguranță; materiale grupate după vârstă, pericole izolate."
  },
  {
    "id": "DOT-025",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Standard 4.1.2 - planșe/jetoane/albume tematice",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2, Standard 4.1.2",
    "type": "single",
    "question": "Administrator-ul II inventariază centrul de Știință și găsește cărți de povești și planșe cu obiecte. Standard 4.1.2 (Anexa 2) cere planșe/jetoane/albume pe teme specifice. Ce lipsește?",
    "options": [
      {
        "id": "A",
        "text": "Lipsesc planșe/jetoane/albume pe teme educative specifice: EDUCAȚIE SANITARĂ, ECOLOGICĂ, RUTIERĂ, STEAM și VALORI (conform Standard 4.1.2). Administrator-ul procură materiale pe aceste teme obligatorii."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, cărți de povești sunt suficiente; alte teme sunt opționale și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, nimănui; planșele găsite sunt suficiente ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, planșele de obiecte sunt suficiente; pe alte teme copiii învață oral și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Standard 4.1.2 (Ordinul ME nr. 4143/2022, Anexa 2) prevede planșe/jetoane/albume pe teme educative: educație sanitară, ecologică, rutieră, STEAM și valori. Acestea sunt obligatorii pt a sprijini învățarea pe teme importante. Administrator-ul asigură completitudinea.",
    "tooltipCorrect": "Standard 4.1.2: planșe/jetoane/albume tematicecobligatorii pe: sanitară, ecologică, rutieră, STEAM, valori."
  },
  {
    "id": "DOT-026",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Standard 4.1.2 - tema educație rutieră",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2, Standard 4.1.2",
    "type": "single",
    "question": "Educatoarea preșcolarilor solicită planșe pt educație rutieră. Administrator-ul II constată că aceasta nu sunt în centrul de Știință. Judecăți?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, tema e importantă, dar se poate integrate fără materiale dedicate ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Standard 4.1.2 prevede explicit planșe/jetoane pe tema EDUCAȚIE RUTIERĂ. Acestea sunt obligatorii și administrator-ul procură imediat pt a sprijini învățarea regulilor de circulație."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, copiii învață circulația pe stradă, nu din planșe și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, educație rutieră nu e tema obligatorie pt grădiniță și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Standard 4.1.2 (Ordinul ME nr. 4143/2022, Anexa 2) enumeră explicit tema EDUCAȚIE RUTIERĂ între planșele/jetoane obligatorii. Administrator-ul asigură prezența acestor materiale pt a sprijini învățarea copiilor.",
    "tooltipCorrect": "Standard 4.1.2: planșe pe EDUCAȚIE RUTIERĂ sunt obligatorii conform Anexei 2."
  },
  {
    "id": "DOT-027",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Standard 4.1.2 - tema STEAM",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2, Standard 4.1.2",
    "type": "single",
    "question": "Administrator-ul II observă că centrul de Știință are planșe pe educație sanitară și ecologică, dar NU are materiale pe tema STEAM. Compliance cu Standard 4.1.2?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, OK, deoarece educație sanitară și ecologică sunt majore; STEAM e opțional ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, planșe pe sanitară și ecologică sunt suficiente; alte teme sunt suplimentare și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "NU e OK. Standard 4.1.2 prevede planșe/jetoane pe 5 teme: sanitară, ecologică, rutieră, STEAM și valori. Lipsesc materiale pe STEAM. Administrator-ul procură imediat."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, STEAM se invață prin proiecte, nu din planșe și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Standard 4.1.2 (Ordinul ME nr. 4143/2022, Anexa 2) stipulează 5 teme obligatorii: educație sanitară, ecologică, rutieră, STEAM și valori. Fiecare temă trebuie reprezentată prin planșe/jetoane/albume. Administrator-ul asigură completitudinea pe toate 5 teme.",
    "tooltipCorrect": "Standard 4.1.2: 5 teme obligatorii: sanitară, ecologică, rutieră, STEAM, valori."
  },
  {
    "id": "DOT-028",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Role administrator - inventar anual",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește sarcina de a face inventarul anual al dotărilor. De ce e important?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, E doar pt contabilitate; educatorii nu sunt implicați urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, se face doar când apare o problemă, nu anual ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, E o formalitate administrativă; nu influența activitatea și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "E esențial! Inventarul asigură: (1) evidența stării dotărilor, (2) identificarea lipsurilor/degradărilor, (3) planificarea aprovizionării, (4) documentație de gestiune. Administrator-ul verifica completitudinea conform Anexei 2 și semnalează conducerii."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, impune respectarea dotărilor obligatorii. Administrator-ul II gestionează bunurile și ține inventarul. Inventarul anual asigură: evidență, identificare lipsuri/degradări, planificarea aprovizionării și documentație SSM/PSI.",
    "tooltipCorrect": "Administrator-ul: ține inventar anual pt dotări; identifică lipsuri/degradări; planifica aprovizionări."
  },
  {
    "id": "DOT-029",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Role administrator - aprovizionare",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Educatoarea grupei de preșcolari solicită 5 triciclete pentru activități de mișcare în curte. Administrator-ul II constată că actuali sunt doar 2 și degradate. Ce face?",
    "options": [
      {
        "id": "A",
        "text": "Tricicletele sunt în Anexa 2 ca echipament obligatoriu de mișcare. Administrator-ul: (1) planifica reparații pt cele 2 degradate, (2) procura triciclete suplimentare conform nr. copii din grupă (min. 1 pe 2–3 copii), (3) planifica în buget anual."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, achizionează doar 3 triciclete, cel mai ieftin model și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, spune că tricicletele sunt opționale dacă grădiniță are alte jocuri urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, spune că nu e buget; copiii se joacă cu scaunele urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 prevede triciclete în echipamentele de mișcare. Administrator-ul II aprovizionează conform nevoilor grupei și stării bunurilor. Gestionează aprovizionarea, reparațiile și planificarea bugetului. Consulta educatoarele pt nr. necesar.",
    "tooltipCorrect": "Anexa 2: triciclete obligatorii; administrator planifica aprovizionare și reparații."
  },
  {
    "id": "DOT-030",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Role administrator - întreținere și reparații",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II observă un tobogan (echipament de mișcare antepreșcolar din Anexa 2) cu marginile rugozitate și lemn aschiat. Activitate pe tobogan: în 15 minute. Ce prioritate?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, lasă copiii să se joace; supraveghetoarea va fi atentă și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "URGENT! Conform Anexei 2 și regulilor SSM, echipamentele de joacă trebuie verificate periodic, fără suruburi ieșite, rugină, lemn aschiat, muchii periculoase. Administrator-ul: (1) LIMITEAZĂ IMEDIAT ACCESUL la tobogan, (2) REPAREAZĂ/ȘLEFUIEȘTE marginile, (3) VERIFICĂ alte echipamente, (4) DOCUMENTEAZĂ intervenția."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, se va repara după joacă, în weekend urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, rugozitatea e firească; nu e problemă și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile SSM impun verificări periodice ale echipamentelor de joacă. Administrator-ul asigură: fără suruburi ieșite, rugină, lemn aschiat, muchii ascuțite, suprafețe ce reduc riscul. Pericolele se elimină IMEDIAT; accesul se limitează pâna la reparație.",
    "tooltipCorrect": "Echipamente joacă: verificate periodic, fără pericoluri; lipsuri/defecte = limitare acces imediat."
  },
  {
    "id": "DOT-031",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Role administrator - semnalare lipsuri/degradări",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II identifică: (1) Display interactiv defect, (2) 3 scaune rupte în grupă de preșcolari, (3) Biblioteca dispune de rafturi înalte (nu joase). Cine anunță și cum?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, se reparează singur tac; conducerea nu trebuie anunțată și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, se așteaptă plângerea părinților pt a se interveni ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Administrator-ul SEMNALEAZĂ IMEDIAT CONDUCERII (director, responsabil dotări) prin raport scris: defecte echipamente, lipsuri, neconformități cu Anexa 2. Menționează prioritatea (siguranță pt Display, necesitate imediat pt scaune și bibliotecă) și propune soluții."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, doar educatoarea; nu e responsabilitatea administratorului și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile administrative impun ca Administrator-ul II să SEMNALEZE CONDUCERII: (1) defectele echipamentelor, (2) lipsurile de dotări, (3) neconformități cu normativul. Raportul trebuie scris, cu prioritizare (SSM/PSI > nevoie funcționare > completare optionall).",
    "tooltipCorrect": "Administrator semnalează scris conducerii: defecte, lipsuri, neconformități; prioritizează siguranță."
  },
  {
    "id": "DOT-032",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Role administrator - limitare acces la defecte",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II descoperă că o mică saltea din dormitor are cuzenet pătrunzând (risc de umezire și mucegai). Copiii trebuie să se odihnească azi. Decizie?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, O lasă și o monitorizează zilnic; s-ar putea să se usuce ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, O lasă în uz; copiii vor folosi și alte saltele și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, copiii vor folosi pernele în locul saltelor pt o zi și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "LIMITEAZĂ IMEDIAT ACCESUL la salteaua defectă, o retrage din uz. Paturi/saltele individuale sunt obligatorii (Anexa 2); aceasță coșia nu mai îndeplinește condiții higieno-sanitare. Administrator-ul: (1) izolează-o, (2) procură înlocuitoare, (3) documentează incidentul."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, prevede paturi/saltele individuale în dormitor. Acestea trebuie în stare corespunzătoare (impermeabil pt antepreșcolari, curățe regulat). Defectele (cuzenet, mucegai) necesită retragere IMEDIATĂ din uz și înlocuire. Administrator-ul limitează accesul la dotări defecte periculoase.",
    "tooltipCorrect": "Dotări defecte periculoase: retragere imediat, limitare acces, înlocuire, documentare."
  },
  {
    "id": "DOT-033",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Role administrator - substanțe periculoase inaccesibile",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II constată că un dulap de depozitare în hol conține: sticlă de înălbitor, detergenți concentrate, spray de insecticid. Copiii trecând prin hol au acces la dulap. Conformitate cu Anexa 2?",
    "options": [
      {
        "id": "A",
        "text": "NU E CONFORM! Anexa 2 și regulile SSM cere: substanțe periculoase INACCESIBILE copiilor. Administrator-ul: (1) MUTĂ substanțele într-un dulap ÎNCHIS CU LACĂT într-o cameră inaccesibilă copiilor, (2) LIMITEAZĂ ACCESUL DOAR la personal autorizat, (3) ETICHETEAZĂ clar periculul, (4) ASIGURĂ echipament protecție personalului."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, educatoarea trebuie să supravegheze; administrator nu e responsabil urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, E OK; substanțele sunt în sticle închise urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, se pun substanțele pe raft înalt; copiii nu pot ajunge și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile SSM/PSI impun ca produsele de curățenie și substanțele periculoase să fie INACCESIBILE copiilor. Trebuie: dulap închis cu lacăt, în cameră inaccesibilă, etichetare clară, personal doar autorizat. Administrator-ul asigură conformitate și verifică regulat.",
    "tooltipCorrect": "Substanțe periculoase: INACCESIBILE copiilor; dulap cu lacăt, cameră inaccesibilă, etichetare."
  },
  {
    "id": "DOT-034",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Role administrator - documentație dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește 15 scaune noi pt grupa de preșcolari. Ce documentație trebuie să întocmească?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, doar factura; inventarul nu e necesar ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Documentație OBLIGATORIE: (1) CHITANȚĂ de primire (aprovizionare), (2) FACTURA furnizorului (pentru audit), (3) ADAUGĂ la INVENTAR cu date: tip, nr., dimensiuni conform Anexa 2, stare, locație, data achiziției. Pentru gestiune bunurilor și SSM/PSI."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, nici una; se le dă educatoarei și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, se notează pe foaie; computerul nu e obligatoriu și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Administrator-ul II gestionează bunurile unității. Pentru aprovizionare, trebuie: chitanță recepție, facturi furnizor, și înregistrare în inventar (detaliată: tip, cantitate, dimensiuni conf. Anexa 2, stare, locație, dată). Documentația asigură audit, SSM/PSI și continuitate.",
    "tooltipCorrect": "Aprovizionare dotări: chitanță, facturi, înregistrare inventar (tip, nr., dim., stare, locație)."
  },
  {
    "id": "DOT-035",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Sala grupă - organizare dotări",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II inspectează sala de grupă de antepreșcolari. Vede: scaune (mici, conforme), mese (conforme), biblioteca (rafturi joase deschise + pernuțe OK), centre activate (Construcții, Artă, Joc de rol, Știință). Aspect general?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, lipsă doar marginile de protecție la colturi urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, biblioteca cu rafturi joase e riscantă; ar trebui înaltă și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Pare CONF conform cu Anexa 2! Administrator-ul: (1) verifica fiecare centru (Joc de rol: fără fier de călcat la antepreșcolar, OK), (2) verifica materiale sigure și accesibile (Standard 4.1.1), (3) verifica planșe/jetoane tematice (Standard 4.1.2), (4) verifica dulap jucării închis cu ușă, materiale periculoase inaccesibile, (5) documentează starea în inventar."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, sunt prea multe centre; copiii se distrag urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, prevede în sala de grupă: mobilier conform, 5 centre activate, acces la materiale (Standard 4.1.1), planșe tematice (Standard 4.1.2), dulap sigur. Administrator-ul verifica fiecare element conform normativului și documentează conformitatea.",
    "tooltipCorrect": "Sala grupă: mobilier conf., 5 centre, acces materiale, planșe tematice, dulap sigur."
  },
  {
    "id": "DOT-036",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Dormitor - paturi și saltele",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II observă dormitorul grupei de preșcolari (18 copii): 18 paturi cu saltele. Saltele: pe unele zăceau jucării, pe altele perne cu pat neprotejat. Conformitate?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, educatoarea trebuie să aranjeze patul, nu administrator urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, E obișnuit ca copiii să lase jucării în pat; nu e problemă și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, paturi și saltele sunt prezente; stocarea e în regulă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "NU E CONFORM! Anexa 2: paturi/saltele trebuie în stare igienică (material impermeabil la antepreșcolari; curățene). Administrator-ul: (1) RETRAGE jucăriile de pe saltele, (2) ASIGURĂ că fiecare saltea e curată și protejată (cearșaf/capetă), (3) INSTITUIE regulă de igienă (jucării în dulapuri, nu pe paturi), (4) VERIFICA și reparează protecția saltelor."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, prevede paturi/saltele individuale în stare corespunzătoare (material impermeabil pt antepreșcolari, curățene regulată). Administrator-ul asigură: igienă, protecție (cearșafuri/capete), organizarea spațiului (jucării în dulapuri, nu pe paturi), și verifica conformitatea regulat.",
    "tooltipCorrect": "Dormitor: paturi/saltele individuale, curate, protejate; jucării în dulapuri."
  },
  {
    "id": "DOT-037",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Grup sanitar - organizare și igienă",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II inspecționează grupul sanitar al grădinței. Constată: mobilier conform vârstei, apa curgătoare, dar pe raftul de lângă chiuvetă sunt sticle de săpun lichid și șampon deschise. Evaluare?",
    "options": [
      {
        "id": "A",
        "text": "PARȚIAL OK! Anexa 2 prevede grup sanitar cu dotări conforme. Dar sticle deschise creează risc: (1) evaporare, (2) contaminare, (3) potențial acces periculos. Administrator-ul: (1) INCHIDE sticlele, (2) STOCHEAZĂ în container închis, (3) FOLOSEȘTE dosatoare dispenser, (4) VERIFICA igienă regulat."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, sticle deschise sunt economice și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, OK; copiii au acces la îngrijire și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, educatoarea trebuie să supravegheze; nu e de administrator și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 prevede grup sanitar. Administrator-ul asigură: mobilier conform vârstei, apa curgătoare, produse de igienă în stare corespunzătoare (închise, protejate). Sticlele deschise sunt risc de contaminare și deteriorare. Se folosesc dosatoare/dispensere pentru control și igienă.",
    "tooltipCorrect": "Grup sanitar: mobilier, apă, produse în dosatoare închise; igienă regulată."
  },
  {
    "id": "DOT-038",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Oficiu și bucătărie - vizibilitate ",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Anexa 2 menționează 'oficiu și bucătărie-vizibil' ca spații. De ce 'vizibil'?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, E despre geamuri; trebuie să aibă lumină naturală urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "'Vizibil' înseamnă că bucătăria trebuie să fie TRANSPARENTĂ pentru conducere și control administrativ. Administrator-ul: (1) asigură accesul autorităților pt verificări SSM/igienă, (2) documentează activitățile de aprovizionare/prelucrare, (3) verifica conformitatea meniurilor și stocării alimentelor."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, 'Vizibil' înseamnă că copiii pot vedea cine gătește ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, nu are semnificație; e doar o notă și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Menționarea 'bucătărie-vizibil' în Anexa 2 indică că aceasta spațiu trebuie transparent pentru control administrativ și SSM. Administrator-ul: asigură acces pt verificări, documentează activități, verifica conformitate cu norme alimentare și igieno-sanitare. Nu e nici secret, nici cu copiii în bucătărie.",
    "tooltipCorrect": "Bucătărie-vizibil: transparență pt control administrativ, SSM, verificări conformitate."
  },
  {
    "id": "DOT-039",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Depozitare materiale și alimente",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II inspecționează depozitul: pe raft inferior sunt cutii cu jucării (cu piese mici) lângă saci cu făină deschiși. Evaluare conformitate Anexa 2?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, jucării și alimente pot sta lângă; sunt în depozit ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, saci deschiși sunt OK; se pot folosi rapid și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "NU E CONFORM! Anexa 2 cere depozitare organizată pe categorii și sigură. Administrator-ul: (1) SEPARĂ jucării de alimente (contaminarischi, infestare), (2) ÎNCHIDE saci deschiși (protejează de umiditate, insecte), (3) ORGANIZEAZĂ pe rafturi: sus alimente cu protecție, jos jucării în cutii închise, (4) ETICHETE clar, (5) VERIFICĂ lunar."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, OK; sunt închiși într-o cameră ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile SSM impun depozitare organizată și sigură. Administrator-ul asigură: separare alimente de non-alimente, saci/cutii închise (protecție umiditate, insecte, contaminare), organizare logică, etichetare, și verificări regulate.",
    "tooltipCorrect": "Depozit: alimente separate, saci/cutii închise, rafturi organizate, etichetate, verificări regulate."
  },
  {
    "id": "DOT-040",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Curte și loc de joacă - echipamente mișcare",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II inventariază echipamentele din curte: tobogan, tunel, saltea, spalier, popice, mingi (1 dimensiune), triciclete. Grupa: antepreșcolari (0–3). Conformitate Anexa 2?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, mingi de o dimensiune sunt suficiente; trotinete sunt periculoase la antepreșcolari și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, E complet; toate echipamentele sunt prezente urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, sunt suficiente; celelalte sunt pentru grădini mai mari ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "LIPSESC: (1) mingi în min. 2 dimensiuni (doar 1 dimensiune găsite), (2) trotinete, (3) minicoș baschet, (4) minipoartă fotbal. Anexa 2 prevede această echipamente la antepreșcolari. Administrator-ul procura cele lipsă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 enumeră echipamente obligatorii de mișcare exterior pentru antepreșcolari: tobogan, tunel de târâre, bază de atracții, saltea, spalier, popice, mingi (min. 2 dimensiuni), triciclete, trotinete, minicoș baschet, minipoartă fotbal. Administrator-ul completeaza lipsurile.",
    "tooltipCorrect": "Antepreșcolar mișcare exterior: tobogan, tunel, bază, saltea, spalier, popice, mingi (2 dim.), trotinete, minicoș, minipoartă."
  },
  {
    "id": "DOT-041",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Curte preșcolari - echipamente suplimentare",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Educatoarea grupei de preșcolari (3–6) solicita jaloane și cercuri pt joacă ritm în curte. Grupa de antepreșcolari cere același. Administrator-ul II verifica Anexa 2. Decizii?",
    "options": [
      {
        "id": "A",
        "text": "Aprobă DOAR pt preșcolari! Jaloane, coardă, cercuri, stegulețe sunt în Anexa 2 DOAR pt preșcolari (3–6), NU pt antepreșcolari. Pentru antepreșcolari, se propun alte activități ritm cu echipamentele existente (tobogan, tunel, saltea)."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, aprobă ambele, deoarece sunt materiale sigure și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, aprobă doar cercuri, nu jaloane ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, refuază ambele; sunt prea avansate ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 diferențiază echipamentele de mișcare după vârstă. Jaloane, coardă, cercuri și stegulețe sunt DOAR pentru preșcolari (3–6). Pentru antepreșcolari (0–3), se folosesc alte echipamente: tobogan, tunel, saltea, spalier, popice, mingi, triciclete, trotinete, minicoș, minipoartă.",
    "tooltipCorrect": "Jaloane, coardă, cercuri, stegulețe: DOAR preșcolar (3–6)."
  },
  {
    "id": "DOT-042",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Hol și coridoare - circulație sigură",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II observă în hol: ușa de evacuare parțial blocată de o bancă; stingătoare acoperit de o nică; tabloul electric cu cabluri ieșite. Conformitate Anexa 2 și PSI?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, OK; mobilierul din hol nu e restricționat ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "NU E CONFORM! Anexa 2 și regulile PSI/SSM cere: (1) UȘILE de evacuare LIBERE (nici o blocaj), (2) STINGĂTOARE ACCESIBIL (nu acoperit), (3) CABLURI SIGURE (nu ieșite). Administrator-ul: mută banca, retrage nicia, asigură cabluri și verifica regulat."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, banca e convenientă pt copiii care stau în hol și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, E doar un hol; regulile sunt mai puțin stricte ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile PSI/SSM stabilesc că în spații de circulație (hol, coridoare): ușile de evacuare libere (nici un blocaj), stingătoare și hidranti accesibili și vizibili, cabluri electrice sigure (nu ieșite, nici expuse). Administrator-ul verifica regulat și corectează neconformitățile urgent.",
    "tooltipCorrect": "Hol/coridoare: ușile evacuare libere, stingătoare accesibil, cabluri sigure."
  },
  {
    "id": "DOT-043",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Scenă mixte - decizii prioritare",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II se confruntă cu 3 situații simultan: (1) Biblioteca lipsă pernuțe; (2) un tobogan are lemn aschiat; (3) Display-ul defect din sala de grupă. Care e prioritate SSM/siguranță?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, prioritate egală; se rezolva în ordinea apariției ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, prioritate Display; sunt echipamente tehnologice și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "PRIORITATE: (1) Tobogan lemn aschiat - LIMITEAZĂ ACCES IMEDIAT, reparează URGENT (risc accident pe loc); (2) Display defect - LIMITEAZĂ ACCES pt copiii care l-ar forța (risc electric), reparează în ziua; (3) Pernuțe bibliotecă - PROCURĂ în 1–2 zile (confort, nu risc imediat). Administrator-ul DOCUMENTEAZĂ toate intervenții."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, prioritate Biblioteca; copiii ar trebui să citească ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile SSM/PSI impun ca Administrator-ul să prioritizeze: (1) pericolele imediate (răniri, electrocutare) cu limitare acces urgent; (2) defecte funcționale cu reparație aceeași zi; (3) lipsuri care nu creează pericol cu procurare în 1–2 zile. Documentarea tuturor intervenții e obligatorie.",
    "tooltipCorrect": "Prioritate: pericolele immediate (limitare acces) > defecte funcționale > lipsuri de confort."
  },
  {
    "id": "DOT-044",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Verificare periodică echipamente mișcare",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II instituie o procedură de verificare lunară a echipamentelor de mișcare din curte. Ce trebuie verificat?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, educatoarea verifica zilnic; administrator nu trebuie și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, doar dacă copiii se plâng că e defect ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, se verifica doar sezonier ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Anexa 2 cere verificare PERIODICĂ. Administrator-ul verifica: (1) suruburi ieșite, (2) rugină/coroziune, (3) lemn aschiat/deteriorat, (4) muchii ascuțite/periculoase, (5) suprafețe care reduc riscul (gumă, ciment) intacte, (6) stabilitate/fixare. Documentează starea și defectele într-un REGISTRU DE VERIFICARE."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, prevede verificări periodice ale echipamentelor de joacă (fără suruburi ieșite, rugină, lemn aschiat, muchii ascuțite, suprafețe sigure). Administrator-ul instituie program lunar, documentează starea și defectele, și corectează urgenta pericolele.",
    "tooltipCorrect": "Echipamente mișcare: verificare lunară pentru suruburi, rugină, muchii, suprafețe; documentare în registru."
  },
  {
    "id": "DOT-045",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Planificare bugetară aprovizionare",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II trebuie să planifice bugetul anual pt aprovizionare dotări. Pe ce se bază?",
    "options": [
      {
        "id": "A",
        "text": "Pe INVENTAR anual și NEVOILE identificate: (1) completa lipsuri conform Anexei 2, (2) reparații echipamente defecte, (3) înlocuire deteriorate, (4) upgrade dacă copii au crescut. Se consulta educatoarele pt nevoile fiecărei grupe. Se prioritizează siguranță (SSM/PSI) > funcționare > confort. Se negoziază cu furnizori pt calitate și preț."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, nu e responsabilitate administratorului; conducerea decide ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, doar pe cheltuielile trecute; continuă cu aceeași sumă urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, pe cere educatoarele; administrator nu judecă prioritățile ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Administrator-ul II gestionează aprovizionarea dotărilor. Planificarea bugetară se bază pe: inventar anual, identificare lipsuri conform Anexei 2, reparații și înlocuiri necesare, și consultare cu educatoarele. Prioritizează siguranță (SSM/PSI), apoi funcționare, apoi confort. Negociază pt calitate și preț.",
    "tooltipCorrect": "Planificare bugetară: inventar + lipsuri Anexa 2 + reparații + consultare educatoare + prioritizare SSM."
  },
  {
    "id": "DOT-046",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Recepție și control calitate aprovizionări",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II primește 12 scaune noi pt preșcolari. Recepția: dimensiuni 26-24-23, material lemn, fără zgârieturi, cu certificat calitate. Decizie?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, acceptă imediat; sunt noi și cu certificat urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "VERIFICA înainte de acceptare: (1) dimensiuni conforme Anexa 2 (26-24-23 OK pt preșcolar), (2) material sigur (lemn lipsit de vopsele toxice?), (3) nicio muchie ascuțită/rugozitate, (4) structură stabilă, (5) certificat de conformitate. COMPARA cu factura (nr., preț, data). SEMNEAZĂ chitanță recepție. ÎNREGISTREAZĂ în inventar cu toate detalii."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, certificatul e dovadă; nu mai verifica ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, educatoarea verifica; administrator doar semnează și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Administrator-ul II nu trebuie doar să semneze; trebuie să verifica: dimensiuni conforme Anexei 2, material sigur, nicio defect (muchii ascuțite, rugozitate, instabilitate), certificat de conformitate. Semnează chitanță recepție și înregistrează în inventar (tip, nr., dimensiuni, stare, dată). Aceasta protejează unitatea.",
    "tooltipCorrect": "Recepție: verifica dimensiuni, material sigur, nicio defect, certificat; semnează și înregistrează."
  },
  {
    "id": "DOT-047",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Gestionare dotări uzate și degradate",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II constată în dormitor 4 saltele vechi, decolorate, cu umiditate și miros. Sunt deteriorate. Decizie?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, se pot dona unei alte grădini dacă e nevoie și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, le lasă în uz; copiii se odihnesc oricum și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "RETRAGE imediat din uz (risc infecție, alergie); le pun în depozit pentru eliminare conform legislației. PROCURA înlocuitoare care să respecte Anexa 2 (paturi/saltele individuale, material impermeabil pt antepreșcolari, curățene). DOCUMENTEAZĂ retragere și înlocuire în inventar."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, le pune într-o cameră care nu se folosește ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile igieno-sanitare impun ca dotări uzate/deteriorate cu risc (umiditate, miros, infecție) să fie RETRASE din uz IMEDIAT. Se procura înlocuitoare conforme. Eliminarea se face conform legislației de gestionare deșeuri. Documentarea în inventar și jurnalul de dotări.",
    "tooltipCorrect": "Dotări uzate/degradate: retragere imediat, procurare înlocuitoare, documentare."
  },
  {
    "id": "DOT-048",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Rolul administratorului în educația copiilor (indirect)",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "De ce e important ca Administrator-ul II să asigure dotări complete și conforme Anexei 2?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, dotări sunt auxiliare; educația depinde mai mult de educator și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, E doar pentru documentație; educația e responsabilitate educatoarei și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, anexa 2 e doar o recomandare; nu e obligatorie pt calitate și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Dotări complete și sigure sunt FUNDAMENTALE pt educație de calitate. Administrator-ul: (1) facilitează centrele de activitate (Bibliotecă, Construcții, Artă, Joc de rol, Știință) în care copiii explorează și invață, (2) asigura acces la materiale (Standard 4.1.1), (3) suportă dezvoltare motorie (echipamente mișcare), (4) protejează sănătate copiilor (material sigur, igienă). Fără dotări, educație e limitată."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, stabilește normativul de dotări MINIME pentru educația timpurie de calitate. Dotări complete și sigure sunt FUNDAMENTALE. Administrator-ul asigură: mediu potrivit pentru explorare, acces la materiale, dezvoltare motorie, protecție sănătate. Educatoarea folosește dotările pt a implementa curriculum. Sunt complementare.",
    "tooltipCorrect": "Dotări Anexa 2: fundamentale pt calitate educației; facilitează explorare, acces, dezvoltare, protecție."
  },
  {
    "id": "DOT-049",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Comunicare cu educatoarele asupra dotărilor",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II dorește să asigure feedback din educatoare pt îmbunătățire dotări. Cum procedează?",
    "options": [
      {
        "id": "A",
        "text": "Comunicare REGULATĂ: (1) ÎNTÂLNIRI lunare/trimestriale cu educatoarele, (2) INVITAȚIE pt sugestii pe dotări (lipsuri, defecte, nevoie upgrade), (3) AUDIT anual al fiecărui centru cu educatoarea, (4) DOCUMENTARE cereri și urmare-up. Transparență și colaborare asigură nevoile reale sunt îndeplinite."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, educatorii nu trebuie să se implice în gestionare dotări urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, NU comunică; administator decide singur ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, doar răspunde la plângeri formale și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Administrator-ul II trebuie să comunice regulat cu educatoarele pentru înțelegerea nevoilor reale. Procedura: întâlniri periodice, invitație pentru sugestii (lipsuri, defecte, upgrade), audit anual al fiecărui centru, documentare cereri și follow-up. Colaborare asigură că Anexa 2 e respectată și nevoile sunt satisfăcute.",
    "tooltipCorrect": "Comunicare educatoare: întâlniri regulate, invitație sugestii, audit anual, documentare, follow-up."
  },
  {
    "id": "DOT-050",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Curățenie și dezinfecție dotări",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II observă că minge de mici și cuburi din centre nu se curață după joacă. Conform Anexei 2 și igieno-sanitară, ce procedură instituie?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, copiii curață singuri; nu e responsabilitate și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "PROCEDURĂ DE CURĂȚENIE: (1) Zilnic după joacă, curățare cu apă și săpun pt jucăriile de plastic/metal. (2) Săptămânal, dezinfecție cu soluție aprobată (ex. clor diluat). (3) Regulă: jucării cu piese mici în cutii închise între utilizări. (4) INREGISTRA curățenia într-un REGISTRU pt a evita contaminare și infecții. Educatoarea și curățătoare se implică; administrator supervizează."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, jucăriile noi nu se curață; doar vechi se curață ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, se curață trimestrial, e suficient ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile igieno-sanitare impun curățenie regulată a jucăriilor și materialelor. Administrator-ul instituie: curățare zilnică după joacă, dezinfecție săptămânală, stocaj în cutii închise. Educatoarea și curățătoare se implică; se documentează în registru. Aceasta previne infecții și alergii.",
    "tooltipCorrect": "Curățenie jucării: zilnic după joacă, dezinfecție săptămânală, stocaj închis, documentare în registru."
  },
  {
    "id": "DOT-051",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Evaluare conformitate Anexa 2 - audit intern",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II plănuiește audit intern anual al conformității cu Anexa 2. Ce etape?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, nu e necesar; conformitatea e evident urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, audit este responsabilitate doar a inspectoratului urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "AUDIT INTERN ANUAL: (1) CHECKLIST pe fiecare categorie din Anexa 2 (Mobilier, Materiale, Aparatură tehnologică, Mișcare), (2) VIZITĂ fiecare spațiu (sala de grupă, dormitor, grup sanitar, oficiu, depozit, curte), (3) VERIFICA Standard 4.1.1 (acces materiale) și 4.1.2 (planșe tematice), (4) DOCUMENTARE lipsuri și defecte, (5) RAPORT conducerii cu recomandări și urgență, (6) FOLLOW-UP pâna la remediere. Anual."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, se face audit doar dacă sunt probleme raportate și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Administrator-ul II trebuie să instituie audit intern anual. Etape: checklist per categorie din Anexa 2, vizită fiecare spațiu, verificare Standards 4.1.1 și 4.1.2, documentare lipsuri/defecte, raport conducerii, follow-up pâna la remediere. Aceasta asigură conformitate continuă și proactivitate (nu doar reactivă la plângeri).",
    "tooltipCorrect": "Audit intern anual: checklist Anexa 2, vizite spații, verifica Standards, documentare, raport, follow-up."
  },
  {
    "id": "DOT-052",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Dotări și inclusivitate copii cu nevoie speciale",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Grădiniță primește un copil cu probleme motrice (scaun cu rotile). Anexa 2 asigură accesibilitate în sala de grupă?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, copilul trebuie să se adapteze la spațiul existent urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, E responsabilitate părintelui să-și adapteze copilul ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, spațiul nu se modifică; copilul se încadrează ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Anexa 2 prevede dotări MINIME. Administrator-ul trebuie să ADAPTEZE spațiul: (1) coridor suficient pt scaun cu rotile, (2) MESE/SCAUNE accesibile (nu doar fixate), (3) CENTRE activation accesibile (nu doar pe rafturi înalte), (4) GRUP SANITAR cu bare de susținere dacă e nevoie. Colabora cu educatoare și părinți pt a personaliza spațiul. LEGE: educație incluzivă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 prevede dotări minime; Administrator-ul trebuie să asigure accesibilitate pentru toți copiii, inclusiv cei cu nevoi speciale. Adaptări: coridoare libere pt scaun cu rotile, mese/scaune modulabile, centre activation accesibile, echipamente suplimentare dacă e nevoie (bare, rampe). Colaborare cu educatoare și părinți. Aceasta e obligație legală de incluziune.",
    "tooltipCorrect": "Accesibilitate copii nevoi speciale: coridoare, mese modulabile, centre accesibile, echipamente adapt."
  },
  {
    "id": "DOT-053",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Siguranța electrica echipamente tehnologice",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II observă că All-in-One și Laptopul din sala de grupă sunt conectate la o singură prelungitor improvizată, care se încinge. Conform Annexei 2 și SSM?",
    "options": [
      {
        "id": "A",
        "text": "NU E CONFORM SSM/PSI! Administrator-ul: (1) DECONECTEAZA imediat prelungitorul improvizat, (2) VERIFICA instalație electrică (tablou principal), (3) INSTALEAZĂ prize standard cu pământare corespunzătoare pt fiecare echipament, (4) Nici o prelungitor improvizată, nici supraîncărcări. (5) VERIFICA cabluri (nicio deteriorare, nicio expunere), (6) PRINDERE cabluri pt a evita zvarcituri."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, OK; aparatele funcționează, deci sunt sigure urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, încingerea e normală; aparatele sunt vechi și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, prelungitoarele improvizate sunt economice; se pot folosi ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile PSI/SSM impun siguranță electrică pentru echipamentele tehnologice. Administrator-ul asigură: prize standard cu pământare corespunzătoare, nici prelungitoare improvizate, nici supraîncărcări, cabluri integre și fixate. Verifică anual instalația electrică. Pericolele electrice (încingere) sunt semn de defect urgent.",
    "tooltipCorrect": "Aparatură tehnologică: prize standard pământate, fără prelungitoare improvizate, cabluri sigure, verificare electrică."
  },
  {
    "id": "DOT-054",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Protecția datelor copii în dotări digitale",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Grădiniță folosește Aparat foto digital pt copii pt activități. Fotografiile sunt stocate pe un Laptop din sala de grupă, neprotejat cu parolă. Conformitate?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, copii sunt sub supraveghere; datele lor sunt sigure urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "NU E CONFORM! Datele copii (fotografii) trebuie protejate conform Legii GDPR și reglementări educație. Administrator-ul: (1) STOCHEAZĂ foți pe Laptop/dispozitiv PROTEJAT cu parolă puternică, (2) ACCES doar PERSONAL AUTORIZAT (educatoare, directoare), (3) UTILIZARE imagini copii NUMAI cu CONSIMȚĂMÂNTUL PĂRINȚI, (4) Nici COPII UPLOAD pe internet/social media fără aprob. GDPR protejeaza minori."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, OK; foțile sunt doar pt activități educative ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, foți din grădiniță nu sunt date sensibile ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și Legea GDPR impun protecția datelor copiilor (inclusiv fotografii). Administrator-ul asigură: dispozitive protejate cu parolă, acces doar personal autorizat, utilizare imagini cu consimțământul părinți, nici upload pe rețele fără aprobare. Datele copiilor sunt sensibile și protected.",
    "tooltipCorrect": "Aparat foto copii: dispozitiv protejat parolă, acces autorizat, imagini cu consimț. părinți, GDPR."
  },
  {
    "id": "DOT-055",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Igienă Masă luminoasă și materiale senzoriale",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Masa luminoasă din sala preșcolarilor este folosită cu slide-uri colorate și materiale senzoriale (margele, paste de colorat, sticlă). După joacă, masa rămâne murdară. Conformitate?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, OK; se va curața după ce se înșiră alte activități și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, masa luminoasă e echipament; copiii nu trebuie s-o atingă dacă e murdară urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "NU E CONFORM! Echipament tehnologic folosit cu materiale senzoriale trebuie curățat ZILNIC după utilizare: (1) ȘTERGE masa luminoasă cu cărpă moale, ușor umedă, (2) CURAȚĂ slide-uri și materiale cu apă + săpun, (3) USUCĂ complet înainte de reîncepere, (4) STOCHEAZĂ materiale în cutii închise, curate. (5) DESINFECTEAZĂ săptămânal. IGIENĂ = SSM."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, materiale senzoriale se curață la sfârșit de săptămână urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Ordinul ME nr. 4143/2022, Anexa 2, și regulile igieno-sanitare impun igienă pentru toate echipamentele și materiale folosite cu copiii. Masa luminoasă și materialele senzoriale se curață zilnic după utilizare (ștergere, apă + săpun, uscare), dezinfectate săptămânal, și stocate în cutii curate. Aceasta previne infecții și alergie.",
    "tooltipCorrect": "Masă luminoasă și materiale senzoriale: curățate zilnic după joacă, dezinfectate săptămânal."
  },
  {
    "id": "DOT-056",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Acum și în viitor - planificare dotări pe termen lung",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II plănuiește strategii pe termen lung (3–5 ani) pt dotări. Cum procedează?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, doar conducerea face planuri; administrator execută ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, nu e nevoie; se procură cum se poate anual și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, planificare pe termen lung e prea complicat; se face doar urgent și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "PLANIFICARE PE TERMEN LUNG: (1) AUDIT Anexa 2 actual (lipsuri, defecte estimate), (2) PROIECTARE în 3–5 ani: ce se va uzura, ce upgrade e necesar (ex. copii cresc → mese mai mari), (3) BUGETE ANUAL pe baza proiecției, (4) PRIORITIZARE: siguranță > funcționare > confort, (5) CĂUTARE fonduri suplimentare (proiecte, donații), (6) COMUNICARE cu conducere + părinți. Transparență și planificare asigură consistență."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Administrator-ul II trebuie să gândească strategiv. Planificare pe termen lung: audit actual, proiectare 3–5 ani (uzură estimată, upgrade după creștere copii), bugete anuale, prioritizare SSM, căutare fonduri suplimentare, comunicare. Transparență și planificare asigură consistență și evită deficite de dotări.",
    "tooltipCorrect": "Planificare termen lung: audit, proiectare 3–5 ani, bugete anuale, prioritizare, fonduri, comunicare."
  },
  {
    "id": "DOT-057",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Parteneriate pt aprovizionare dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II dorește să procure dotări cu buget limitat. Care sunt strategii?",
    "options": [
      {
        "id": "A",
        "text": "STRATEGII APROVIZIONARE: (1) LICITAȚII DESCHISE (negociază preț, asigură calitate), (2) PARTENERIATE cu furnizori locali (scont pt cantitate, plată pe rate), (3) DONAȚII de la comunitate (părinți, ONG-uri), (4) PROIECTE EUROPENE (granturi pentru educație timpurie), (5) RECONDIȚIONARE echipamente vechi (pt a economisi), (6) ÎMPRUMUTURI între unități (temporar). Calitate și siguranță NU se compromit; doar preț se negoziază."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, se cumpără doar cele mai ieftine opțiuni ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, bugetul limitat; grădiniță trebuie să funcționeze cu mai puțin și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, nu e rolul administratorului; conducerea se ocupă și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Administrator-ul II trebuie să găsească strategii pentru aprovizionare eficientă cu buget limitat: licitații deschise, parteneriate, donații, proiecte europene, recondiționare, împrumuturi. Nici o compromis pe calitate și siguranță conform Anexei 2. Negociază preț, nu standard.",
    "tooltipCorrect": "Aprovizionare eficientă: licitații, parteneriate, donații, proiecte, recondiționare, împrumuturi."
  },
  {
    "id": "DOT-058",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Rapoarte și documente administartor dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Ce documente trebuie ținute de Administrator-ul II referitor la dotări?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, E prea mult; doar inventar și facturi urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "DOCUMENTE OBLIGATORII: (1) INVENTAR anual (detaliat: tip, nr., dim., stare, locație), (2) REGISTRU VERIFICĂRI echipamente (lunar/trimestrial), (3) REGISTRU CURĂȚENIE jucării (zilnic), (4) RAPOARTE DEFECTE semnalate conducerii, (5) CHITANȚE RECEPȚIE, (6) FACTURI furnizori, (7) PROGRAME REPARAȚII/ÎNLOCUIRI, (8) AUDIT ANUAL CONFORMITATE. Documentație = evidență și responsabilitate."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, documentația e responsabilitate contabilitate, nu administrator urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, facturi; restul nu e obligatoriu și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Administrator-ul II ține: inventar anual detaliat, registre de verificări periodice (echipamente, curățenie), rapoarte defecte semnalate conducerii, chitanțe recepție, facturi, programe de reparații, audit anual conformitate cu Anexa 2. Documentația asigură evidență, responsabilitate și audit trail.",
    "tooltipCorrect": "Documente administrator: inventar, registre verificări, registre curățenie, rapoarte defecte, chitanțe, facturi, audit."
  },
  {
    "id": "DOT-059",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Rol administrator în SSM și dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Legătura între Anexa 2 (dotări minime) și legislația SSM?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, SSM e responsabilitate medicului de muncă; dotări e responsabilitate administrator și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, annexa 2 e 100% educație; SSM e 0% legat și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "INTEGRARE STRÂNSĂ! Dotări minime Anexa 2 sunt ELEMENTUL FIZIC al SSM: (1) Echipamente verificate periodic, fără pericoluri (SSM), (2) Materiale sigure pt copii (toxic test), (3) Spații igienice și curățe (SSM), (4) Substanțe periculoase inaccesibile (SSM). Administrator-ul asigură: Anexa 2 PLUS Legea SSM = mediu sigur pt copii. SSM și dotări = inseparabile."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, sunt independente; Anexa 2 e doar pentru educație ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 (dotări minime) și Legea SSM sunt INTEGRAT. Dotări conforme Anexei 2 sunt elementul fizic al SSM: echipamente verificate periodic, fără pericoluri, materiale sigure, spații igienice, substanțe inaccesibile. Administrator-ul asigură ambele. SSM și dotări = inseparabile.",
    "tooltipCorrect": "Anexa 2 + SSM: integrat; dotări conforme = mediu sigur; verificări, materiale sigure, igienă, inaccesibilitate."
  },
  {
    "id": "DOT-060",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Scenariu complet - audit de conformitate",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II face audit anual de conformitate Anexa 2. Halluri în sala de grupă: (1) Biblioteca cu rafturi înalte, NU joase; (2) Centru Știință LIPSĂ planșe tematice; (3) Dulap jucării deschis lângă grup sanitar; (4) Tobogan în curte cu muchii ascuțite. Prioritate remediere?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, toți se rezolvă după audit anual complet ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, educatoarea trebuie să remediere; nu e sarcina administrator și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, se prioritizează doar topoglanul; celelalte pot aștepta și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "PRIORITATE IMEDIATĂ (SSM): (1) Tobogan muchii ascuțite = LIMITEAZĂ ACCES, REPAREAZĂ urgent (risc rănire). (2) Dulap deschis lângă grup sanitar = INCHIDE ușă, VERIFICA conținut (siguranță copii). (3) Biblioteca rafturi înalte = SEMNALEAZĂ URGENT pt înlocuire (Standard 4.1.1). (4) Planșe tematice lipsă = PROCURĂ în 1–2 zile (Standard 4.1.2). DOCUMENTEAZĂ DIN AUDIT, RAPORTEAZĂ CONDUCERII, FOLLOW-UP."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Audit anual de conformitate Anexa 2. Administrator-ul prioritizează: (1) Pericolele imediate (SSM) cu limitare acces urgent și reparație aceeași zi (tobogan muchii ascuțite, dulap deschis). (2) Neconformități Standard 4.1.1/4.1.2 cu semnalare și procurare urgent (1–2 zile). Documentare din audit, raport conducerii, follow-up confirmă remediere.",
    "tooltipCorrect": "Audit conformitate: prioritate SSM (limitare acces, reparații urgent) > Standards (semnalare, procurare 1–2 zile)."
  },
  {
    "id": "DOT-061",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Litigii și reclamații referitor la dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Părinți se plâng că scaunele din sala de grupă sunt deteriorate și copilul s-a rănit. Administrator-ul II cum răspunde?",
    "options": [
      {
        "id": "A",
        "text": "PROCEDURĂ RESPONSABILITATE: (1) ASCULTĂ plângerea și colectează date (data, loc, copil, detalii rănire), (2) VERIFICA scaunele în audit SSM urgent, (3) DOCUMENTEAZĂ starea (fotografie, înscrierea în registru defecte), (4) LIMITEAZĂ IMEDIAT ACCESUL la scaunele deteriorate, (5) INFORMEAZĂ CONDUCEREA și PĂRINȚI pe care au drept să știe, (6) PROCURĂ ÎNLOCUITOARE urgent, (7) COOPEREAZĂ cu medic pt rănire copil (dacă e cazul). RESPONSABILITATE ADMINISTRATORULUI = Anexa 2 + SSM."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, neagă responsabilitatea; scaunele sunt în folosință normală și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, răniri din joacă se ignică; sunt accidente normale și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, părinții sunt responsabili de supravegherea copiilor; nu grădiniță și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Administrator-ul II este responsabil pentru conformitate Anexei 2 și SSM. La plângere despre scaune deteriorate: asculta, verifica, documenteaza, limiteaza acces, informa conducere/parinti, procura inlocuitoare, coopereaza pt rănire. Responsabilitate administratorului = echipamente sigure conform Anexei 2.",
    "tooltipCorrect": "Plângere dotări defecte: ascultă, verifica urgent, documentează, limitează acces, raportează, procură înlocuitoare."
  },
  {
    "id": "DOT-062",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Dotări și ecologie - gestionare deșeuri",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II elimina dotări uzate (paturi vechi, scaune rupte). Cum procedează pt a respecta ecologia?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, se-le aruncă la gunoi; gestionarea e responsabilitate gunoierului ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "GESTIONARE RESPONSABILĂ: (1) EVALUEAZĂ dacă sunt reparabile pt donație/vânzare (alte grădini, ONG-uri), (2) RECICLARE materiale (lemn, metal, plastic separate), (3) COMPOST materiale biodegradabile, (4) RESPECTĂ legislația deșeuri (clasificare, depozitare temporară, contract cu prestator)., (5) DOCUMENTEAZĂ eliminare (protocol de înlăturare). ECOLOGIE = responsabilitate administrator."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, ecologia nu e responsabilitate grădiniței; doar să funcționeze și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, se donează tuturor; reciclarea nu e necesară urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Administrator-ul II elimina dotări uzate responsabil: evaluează reparabilitate, reciclează materiale pe categorii, composta biodegradabile, respectă legislația deșeuri, contractează prestatori autorizați, documentează. Ecologie și responsabilitate socială sunt parte din rol administratorului.",
    "tooltipCorrect": "Eliminare dotări: reparabilitate, reciclare material, compostare, legislație deșeuri, prestatori autorizați."
  },
  {
    "id": "DOT-063",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Rapoarte pe indicatori dotări - evaluare calitate",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Director solicită raport pe indicatori: % conformitate Anexa 2, % echipamente funcționare, % defecte remediate. Administrator-ul II cum calculează?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, doar conform/neconform; procentaje nu sunt relevante și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, indicatori sunt prea complicate; administrativa nu trebuie să măsoare urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "INDICATORI CALITATE: (1) % Conformitate = (dotări prezente / dotări obligatorii Anexa 2) x 100; ex. 95% = 1 lipsă din 20. (2) % Funcționare = (echipamente funcționale / total) x 100; ex. 85% = 3 defecte. (3) % Remediate = (defecte reparate în 7 zile / total defecte) x 100; ex. 80% = 4 din 5 reparate. RAPORT LUNAR/TRIMESTRIAL conducerii. Indicatori arată EFICIENȚĂ administrării."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, nu sunt indicatori; totul e OK și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Administrator-ul II calculeaza indicatori pe calitate: (1) % Conformitate Anexa 2 (prezente/obligatorii); (2) % Funcționare (funcționale/total); (3) % Remediate (reparate-în-7-zile/total). Rapoarte lunare/trimestriale conducerii. Indicatori arata eficiența administrării și necesitate fonduri.",
    "tooltipCorrect": "Indicatori calitate: % conformitate Anexa 2, % funcționare echipamente, % defecte remediate în 7 zile."
  },
  {
    "id": "DOT-064",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Cooperare cu furnizori și service",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Echipamentele tehnologice din grădiniță necesită service anual. Administrator-ul II cum stabilește contractul cu furnizor?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, educatoare verifica echipamentul zilnic; nu e nevoie de service și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, service e luxu; grădiniță cumpără echipament și-l folosește pâna se strica și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, se apelează la service doar în caz de defect și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "CONTRACT SERVICE ANUAL: (1) NEGOCIAZĂ cu furnizor, (2) INCLUE verificări preventive (2x anual: verificare funcționare, curatare, update soft), (3) ASIGURĂ răspuns RAPID la defecte (max 48h), (4) STABILEȘTE termenul de GARANȚIE (ex. 2 ani), (5) CLAUZULĂ: service respectă Anexa 2 (echipamente trebuie operaționale pt educație), (6) DOCUMENTEAZĂ intervențiile în REGISTRU SERVICE. Mentenanța preventivă = costuri mai mici pe termen lung."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Administrator-ul II negociază contract service anual cu furnizor: verificări preventive (2x/an), răspuns rapid la defecte (max 48h), garanție, și documentare. Mentenanța preventivă reduce costuri pe termen lung și asigură conformitate Anexei 2.",
    "tooltipCorrect": "Contract service echipamente: verificări preventive (2x/an), răspuns rapid, garanție, documentare."
  },
  {
    "id": "DOT-065",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Colaborare cu inspectoratul și audit extern",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Inspectoratul școlilor anunță audit extern pe dotări Anexa 2. Administrator-ul II cum se pregătește?",
    "options": [
      {
        "id": "A",
        "text": "PREGĂTIRE AUDIT EXTERN: (1) FINALIZEAZĂ audit intern (checklist Anexa 2, documentare lipsuri), (2) REMEDIERE urgentă a neconformităților identificate, (3) PREGĂTIRE DOCUMENTE: inventar anual, registre verificări, rapoarte defecte, facturi, chitanțe, contracte service, (4) SPAȚII curate și organizate (dotări accesibile, aparente), (5) INFORMARE educatori că vor fi interviști pe dotări, (6) RAPORT SCRIS pe remedieri după audit intern. TRANSPARENȚĂ asigură audit OK."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, se cumpără dotări noi inainte de audit și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, nu e nevoie să se pregătească; grădiniță e sub control și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, nu se pregătește; se oferă doar tura facilităților urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Administrator-ul II se pregătește pentru audit extern: audit intern urgent, remediere neconformități, pregătire documente (inventar, registre, rapoarte), spații curate, informare educatori, raport scris. Transparență și proactivitate asigură audit OK și demonstreaza seriozitate.",
    "tooltipCorrect": "Pregătire audit extern: audit intern urgent, remediere neconformități, documente, spații curate, informare educatori."
  },
  {
    "id": "DOT-066",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Scenariu crisis - inundare / incendiu și dotări",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Inundație în depozitul grădinței: paturi, saltele, materiale în apă. Administrator-ul II cum acționează?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, se usucă; se pot folosi din nou și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "ACȚIUNE IMEDIATĂ: (1) LIMITEAZĂ ACCESUL copii la depozit (siguranță), (2) EVALUEAZĂ DAUNELE (paturi, saltele, jucării, echipamente), (3) DOCUMENTA (fotografie, date daunelor), (4) CONTACTEAZĂ asigurare (dacă e polită), (5) IZOLEAZĂ bunuri umede în spatiu aerat (prevenție mucegai), (6) ANUNȚĂ CONDUCERE și părinți (dotări afectate, necesitate aprovizionare urgentă), (7) PROCURĂ ÎNLOCUITOARE conform Anexa 2 (prioritate paturi/saltele / echipamente), (8) DISPUN curatare/dezinfecție completă depozit. CRISIS = transparență + action URGENT."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, se așteaptă asigurarea; grădiniță nu face nimic ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, se curață și se continuă joacă normal urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Inundație/crisis: Administrator-ul II acționează urgent: limitează acces (siguranță), evaluează daunele, documentează, contactează asigurare, izolează pentru prevenție mucegai, anunță conducere/părinți, procură înlocuitoare conform Anexei 2, și dispun curatare. Crisis = transparență, rapid response, și revenire la conformitate.",
    "tooltipCorrect": "Crisis dotări (inundație, incendiu): limitare acces, evaluare daunee, documentare, asigurare, înlocuire urgent, curatare."
  },
  {
    "id": "DOT-067",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Dotări și sănătate copil - alergie și sensibilități",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Copil cu alergie la latex nu poate folosi mingiile din curte (latex). Administrator-ul II cum procedează?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, mingiile sunt pentru toți; copilul nu le folosește și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, mingiile sunt conforme Anexa 2; nu se schimbă urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "ADAPTARE MEDICAL: (1) COLECTEAZĂ DATE de la familie pe alergia copilului, (2) COORDONEAZĂ cu medic școlii, (3) ASIGURĂ MINGI ALTERNATIVE (non-latex) pt copil și alte copii sensibili, (4) DOCUMENTEAZĂ în fișa copilului, (5) INFORMEAZĂ EDUCATOARE și colegi de joacă pe siguranța alternativei. INCLUZIUNE = adaptare pentru sănătate copilului. Anexa 2 flexible pe materiale, nu pe numere."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, părintele trebuie să găsească mingii non-latex acasă ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Administrator-ul II asigură incluziune pentru copii cu alergii: colectează date, coordonează cu medic, procura alternative (mingi non-latex), documentează, informează educatori. Anexa 2 specifica tipuri de dotări, nu necesara material exact; flexibility este posibil pt sănătate copilului.",
    "tooltipCorrect": "Alergii copii: date medicale, alternative procurate, documentare, informare educatori, incluziune."
  },
  {
    "id": "DOT-068",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Tabel comparativ dotări antepreșcolar vs preșcolar",
    "difficulty": "basic",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Ce element din Anexa 2 este DIFERIT între antepreșcolar (0–3) și preșcolar (3–6)?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, dulapul pentru jucării; doar preșcolari au urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, mingi; doar preșcolari au ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, biblioteca; doar antepreșcolari au rafturi joase ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Microscop digital - DOAR preșcolar are; antepreșcolar nu are. (Alte diferențe: scaune/mese dimensiuni diferite, Logic I vs I+II, jaloane/coardă/cercuri/stegulețe DOAR preșcolar, fier de călcat în Joc de rol DOAR preșcolar, bază atracții DOAR antepreșcolar.)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Microscop digital este DOAR preșcolar conform Anexei 2. Alte diferențe: dimensiuni scaune/mese, Logic I vs I+II, jaloane/coardă/cercuri/stegulețe DOAR preșcolar, fier de călcat Joc de rol DOAR preșcolar, bază atracții DOAR antepreșcolar. Administrator-ul cunoaște bine diferențele pe vârstă.",
    "tooltipCorrect": "Microscop digital DOAR preșcolar; jaloane/cercuri/stegulețe DOAR preșcolar; bază atracții DOAR antepreșcolar."
  },
  {
    "id": "DOT-069",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Accesibilitate mobilier pentru micii copii",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Mese și scaune din grupa de antepreșcolari (0–3) trebuie dimensionate conform Anexei 2. De ce?",
    "options": [
      {
        "id": "A",
        "text": "Dimensionare ERGONOMICĂ și SIGURANȚĂ: scaune 21-20-20 (antepreșcolar) și mese 43 sunt calculate pt înălțimea și proporțiile copiilor mic (0–3). Scaunele mari (26-24-23 / 30-29-26 preșcolar) ar fi periculoase (copilul nu ating pământ = presiune pe picioare + cădere). Mese mari copiii nu ajung pe suprafață = frustrare. Dimensionare corectă = siguranță + dezvoltare."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, dimensionarea nu contează; copiii se obișnuiesc urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, E estetică; copiii se adaptează la orice și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, E doar standard; nu e obligatoriu pe stict și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Dimensionare mobilier conform Anexei 2 este ERGONOMICĂ și de SIGURANȚĂ. Scaune mici (21-20-20 antepreșcolar) și mese 43 sunt calculate pt proporții copii mic. Scaunele mari: pericol de cădere și presiune pe picioare. Mese mari: copii nu ajung. Administrator-ul asigură dimensionare corecta pe vârstă.",
    "tooltipCorrect": "Mobilier antepreșcolar: 21-20-20 scaune, 43 mese (ergonomie + siguranță copii mic)."
  },
  {
    "id": "DOT-070",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Spații mici - cum se adaptează dotări",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Grădiniță cu spații mici: sala de grupă 40 m². Cum se asigură toate 5 centre din Anexa 2 (Bibliotecă, Joc de rol, Construcții, Artă, Știință)?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, sîn spații mici; unitatea nu trebuie respecte Anexa 2 și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "ADAPTARE SPAȚII MICI: (1) CENTRE MULTIFUNCȚIONALE (ex. Construcții + Artă în aceeași zonă cu rafturi separate), (2) MOBILIER MODULAR (mese pliabile, dulapuri pe roți) pt flexibilitate, (3) ROTAȚIE MATERIALE (coloane zilnice vs o săptămână), (4) SPAȚII COMUNE (hol/coridor pentru joacă mișcare alternativ), (5) DEPOZITARE VERTICALĂ (rafturi pe pereți = maximizare spațiu). IMPORTANTE: 5 centre trebuie prezente conform Anexa 2; manager creativitate în organizare, nu compromis pe conținut."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, nu se pot tote; spațiu e prea mic urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, se limitează la 3 centre; restul se ignică și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Chiar în spații mici, Anexa 2 TREBUIE respectată (5 centre obligatoriu). Administrator-ul adaptează: centre multifuncționale, mobilier modular, rotație materiale, depozitare verticală, spații comune. Creativitate în organizare, nu compromis pe conținut.",
    "tooltipCorrect": "Spații mici: centre multifuncționale, mobilier modular, rotație materiale, depozitare verticală, spații comune."
  },
  {
    "id": "DOT-071",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Inițiative cu părinții pt aprovizionare",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II deschide o inițiativă: părinți donează echipamente/materiale pt dotări. Cum se procedează?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, nu se acceptă donații de la părinți; grădiniță cumpără oficial și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, se acceptă orice părinții donează; nu se verifica și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "DONAȚII ORGANIZ ATE: (1) COMUNICARE CLARĂ pe ce sunt NECESARE (conform Anexa 2 - ex. mingi, cărți, materiale artă), (2) CRITERII CALITATE: noi sau in stare excelentă, sigure (nici expuse toxice, nici defecte), (3) VERIFICARE ÎNAINTE DE ACCEPTARE (siguranta copii), (4) DOCUMENTARE donație (cine, ce, data), (5) MULȚUMIRE PUBLIC (transparență, motivație). Donații = comunitate implicată, bugete mai ample pt nevoie majore."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, părinți nu trebuie să se implice în dotări și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Administrator-ul II poate organiza donații din comunitate, dar cu criterii clare: necesități din Anexa 2, calitate și siguranță (verificare înainte de acceptare), documentare, și mulțumire publică. Donații + bugete oficiale = resurse mai ample si comunitate implicată.",
    "tooltipCorrect": "Donații părinți: necesități Anexa 2, criterii calitate, verificare sigurană, documentare, mulțumire publică."
  },
  {
    "id": "DOT-072",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Inspecția de PSI și control dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Inspecția de PSI (Protecția Securității Incendiilor) efectuează inspecție. Ce verifica referitor la dotări?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, PSI verifica doar căile de evacuare; dotări nu-i interesează și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, dotări combustibile sunt OK dacă sunt în depozit ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, PSI e independent de dotări; nu se ocupă și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "PSI verifica DOTĂRI sub aspect PSI: (1) CĂILE EVACUARE libere de mobilier (ușe, coridoare, scări), (2) STINGĂTOARE accesibil, vizibil, verificat periodic, (3) CABLURI ELECTRICE echipamente integre (nici deteriorate, nici improvizate), (4) MATERIALE COMBUSTIBILE stocate sigur (nici lângă surse căldură), (5) SPAȚII inaccesibile copiilor pt substanțe periculoase. Administrator-ul asigură conformitate PSI PLUS Anexa 2."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "PSI verifica dotări sub aspect incendii: căi de evacuare libere, stingătoare accesibil, cabluri sigure, materiale combustibile sigur stocate, inaccesibilitate copiilor pt substanțe. Administrator-ul asigură conformitate PSI PLUS Anexa 2 (sunt complementare).",
    "tooltipCorrect": "PSI verifica dotări: căi evacuare libere, stingătoare accesibil, cabluri sigure, materiale sigur stocate."
  },
  {
    "id": "DOT-073",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Instruirea personalului pe dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II trebuie să instruiască personalul pe utilizare dotări sigură. Ce conținut?",
    "options": [
      {
        "id": "A",
        "text": "INSTRUIRE PERSONALULUI ANUAL: (1) UTILIZARE SIGURĂ echipamente (Display, Masă luminoasă, Scaner), (2) PROCEDURE CURĂȚENIE jucării și materiale, (3) REGULI ACCES spații depozit (substanțe periculoase inaccesibile), (4) VERIFICARE PERIODICĂ echipamente, (5) RAPORTARE DEFECTE conducerii urgent, (6) MĂSURI SSM (nici suruburi ieșite, nici muchii ascuțite). Instructajul DOCUMENTAT; semnează prezență și înțelegere."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, instruire se face doar când apare un defect și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, instruire nu e necesară; dotările sunt intuitive ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, educatoarele se instruiesc singure; nu e sarcina administrator și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Administrator-ul II instruiește personalul anual pe: utilizare sigură echipamente, curățenie proceduri, reguli acces depozit, verificare periodică, raportare defecte, măsuri SSM. Instructaj documentat cu prezență și semnături. Aceasta asigură practici consistente și SSM.",
    "tooltipCorrect": "Instruire personalului anual: utilizare echipamente, curățenie, acces depozit, verificări, raportare, SSM."
  },
  {
    "id": "DOT-074",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Raport anual conducere pe dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II trebuie să prezinte raport anual conducerii pe starea dotări. Ce incluude?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, doar o listă cu ce s-a cumpărat urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "RAPORT ANUAL COMPLET: (1) AUDIT CONFORMITATE Anexa 2 (% completitudine, lipsuri), (2) STARE ECHIPAMENTE (% funcționare, defecte remediate), (3) CHELTUIELI anual (achiziții, reparații, service), (4) INDICATORI CALITATE (timpi remediere, satisfacție educatori), (5) NECONFORMITĂȚI IDENTIFICATE și remedieri implementate, (6) PLANURI VIITOR (3–5 ani), (7) RECOMANDĂRI conducerii (investiții urgente). RAPORT TRANSPARENT = conducere informată, bugete planiface."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, raport doar dacă sunt probleme urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, raportul nu e necesar; conducerea vede singură și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Raport anual conducerii: audit conformitate Anexa 2, stare echipamente, cheltuieli, indicatori calitate, neconformități și remedieri, planuri viitor, recomandări. Raport transparent asigură conducere informată, bugete planificate și prioritizare.",
    "tooltipCorrect": "Raport anual conducerii: audit conformitate, stare echipamente, cheltuieli, indicatori, neconformități, planuri, recomandări."
  },
  {
    "id": "DOT-075",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Rolul administrator-ul în dezvoltarea curriculum",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "De ce dotări Anexa 2 sunt ESENȚIALE pt curriculum timpuriu?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, educatorul improvizează; nu e nevoie de dotări și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, dotări sunt auxiliare; curriculum depinde de educator urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "RELAȚIE CURRICULUM-DOTĂRI: Centrul Construcții → gândire spațială, Logic I/II. Centrul Artă → expresie creativă, motricitate fină. Centrul Știință → explorare, STEAM. Centrul Bibliotecă → literație. Mișcare → dezvoltare motorie grosieră. Dotări Anexa 2 sunt INSTRUMENTUL curriculum; fără dotări, curriculum nu poate fi implementat. Administrator-ul ca PARTENER educator."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, curriculum scris; dotări nu e parte din el și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Dotări Anexa 2 sunt ESENȚIALE pt curriculum timpuriu. 5 centre activate = 5 domenii de învățare. Administrator-ul care asigură dotări este PARTENER educator în implementarea curriculum. Dotări + educator = educație de calitate.",
    "tooltipCorrect": "Dotări Anexa 2 = instrumente curriculum; 5 centre = 5 domenii; Administrator-ul = partener educator."
  },
  {
    "id": "DOT-076",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Transformări socio-economice și dotări",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Grădiniță într-o zonă defavorizată economică. Cum asigură Administrator-ul II dotări Anexa 2 cu resurse limitate?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, dotări complete sunt privileg pentru grădinițe bogate și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, zona defavorizată trebuie să accepte mai puține dotări urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, nu e posibil; zona defavorizată nu poate avea dotări complete urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "STRATEGIE INCLUZIVĂ: (1) PARTENERIAȚI LOCALE (ONG-uri, primărie, comunitate), (2) DONAȚII ORGANIZATE (părinți, firme locale), (3) PROGRAME EUROPENE fondare (educație timpurie), (4) RECYCLARE materiale (reparații creative, repurposing), (5) VOLUNTARIAT (părinți, seniori pt montare, reparații), (6) PRIORITATE SSM (sigurană) > CONFORT. PRINCIPIU: incluziune = toți copii merită Anexa 2, indiferent de economie. Administrator-ul = PROBLEM SOLVER + ADVOCATE."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Chiar în zone defavorizate, Administrator-ul II asigură Anexa 2 prin: parteneriate locale, donații, programe europene, reciclare, voluntariat. Incluziune înseamnă toți copii merită educație de calitate cu dotări conforme, indiferent de economie. Administrator = problem-solver și advocate pentru copii.",
    "tooltipCorrect": "Zone defavorizate: parteneriate, donații, programe europene, reciclare, voluntariat; incluziune = toți copii."
  },
  {
    "id": "DOT-077",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Viitorul dotări - evoluție și inovație",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Anexa 2 prevede dotări 'minimale'. Ce ar putea evolua în viitor?",
    "options": [
      {
        "id": "A",
        "text": "EVOLUȚIE POSIBILĂ: (1) TEHNOLOGIE (deja Display interactiv, aparat foto; viitor = VR didactică?), (2) SUSTAINABILITY (echipamente eco-friendly, materiale reciclate), (3) INCLUSIVITATE (mai multe adaptări copii nevoi speciale), (4) STEM → STEAM (mai multă artă + tehnologie), (5) BINE-FIINȚĂ (spații relax, materiale senzoriale expanded). Administrator-ul RĂMÂNE FLEXIBIL, documentează inovații, și propune actualizări conducerii conform evoluției normelor."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, dotări vor rămâne la nivel anilor 2000 și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, dotări minimale sunt fixe; nu se vor schimba și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, inovația nu e responsabilitate administrator; doar respecta Anexa 2 și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 stabilește minime; viitorul poate evolua: mai multă tehnologie, sustainability, inclusivitate, STEAM expandat, bine-ființă. Administrator-ul rămâne flexibil, documentează inovații, și propune actualizări conducerii conform evoluției normelor și nevoilor copiilor.",
    "tooltipCorrect": "Evoluție dotări: tehnologie, sustainability, inclusivitate, STEAM, bine-ființă; Administrator flexibil și inovativ."
  },
  {
    "id": "DOT-078",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Etica și responsabilitate administratorului",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administrator-ul II se confruntă cu presiune conducerii: reducere buget 30% pt dotări. Cum răspunde?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, reduce tac tac; nu-și cere nimeni acordul și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "RESPONSABILITATE ETICĂ: (1) PREZINTĂ IMPACT în scris: 30% reducere = lipsă dotări Anexa 2 = incapacitate implementare curriculum + risc SSM. (2) PROPUNE ALTERNATIVE: economii prin parteneriate/donații/proiecte, NU reducere dotări esențiale. (3) EVIDENȚIAZĂ RISCURI LEGAL: audit va identifica neconformitate, părinți vor reclamă, autoritățile vor sancționa. (4) PUNE CONDIȚIE: acceptă reducere DOAR pe non-esențial (ex. upgrade tehnologic), nu ESENȚIAL (securitate, centre activate). ETICA = nu se compromit siguranța copiilor."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, raportează problem părinților să se plâng conducerii ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, acceptă reducerea; conducerea decide bugetul și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Responsabilitate etică Administrator-ul: NU compromit siguranța copiilor și conformitate Anexa 2 chiar sub presiune buget. Prezintă impact în scris, propune alternative (parteneriate, donații, proiecte), evidențiază riscuri legal, și pune condiții. Etica = integritate și advocacy pentru copii.",
    "tooltipCorrect": "Presiune buget: prezintă impact scris, propune alternative, evidențiază riscuri legal, nu compromit sigurană."
  },
  {
    "id": "DOT-079",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Competențe și development Administrator-ul II",
    "difficulty": "medium",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Care sunt competențe esențiale pt Administrator-ul II care gestionează dotări Anexa 2?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, doar a-și ține inventarul urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, E doar de executare; fără competențe speciale urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "COMPETENȚE ESENȚIALE: (1) CUNOAȘTERE Anexa 2 (în detaliu, pe vârstă), (2) GESTIONARE BUNURI (inventar, aprovizionare, reparații), (3) SIGURANȚĂ SSM/PSI (verificări, remedieri urgente), (4) COMUNICARE conducere/educatori/părinți, (5) PROBLEM-SOLVING creativ (bugete limitate, soluții inovative), (6) LEADERSHIP soft (motivare voluntariat, parteneriate), (7) DOCUMENTARE (rapoarte, registre, audit). Development = cursuri SSM, legislație, management. Administrator-ul = PROFESSIONAL."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, competențele se învață pe parcurs; training nu e necesar ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Administrator-ul II care gestionează dotări trebuie: cunoștință Anexa 2, gestionare bunuri, SSM/PSI, comunicare, problem-solving, leadership, documentare. Development profesional: cursuri SSM, legislație, management. Administrator = professional cu competențe continue.",
    "tooltipCorrect": "Competențe Administrator: Anexa 2, gestionare bunuri, SSM/PSI, comunicare, problem-solving, leadership, documentare."
  },
  {
    "id": "DOT-080",
    "section": "Dotări minimale - Ordin 4143/2022",
    "topic": "Concluzie - rol fundamental Administrator-ul în educația timpurie",
    "difficulty": "basic",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "De ce e Administrator-ul II crucial în educația timpurie de calitate conform Anexei 2?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, nu e crucial; e doar de administrație și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, educatoarea e crucială; administrator e auxiliar și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, dotări nu influențează calitatea educației și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "CRUCIAL! Administrator-ul asigură: (1) MEDIU SIGUR (SSM + PSI), (2) DOTĂRI CONFORME curriculum (5 centre activate), (3) ACCES copiilor la materiale (Standard 4.1.1), (4) PLANȘE TEMATICE (Standard 4.1.2), (5) CONTINUITATE EDUCAȚIE (mecanisme reparații, upgrades). FĂRĂ dotări conforme, educație DE CALITATE NU E POSIBILĂ. Administrator = FONDAMENT educației timpurii. Postul e STRATEGIC, NU rutinar."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Administrator-ul II este CRUCIAL în educația timpurie. Asigură: mediu sigur (SSM/PSI), dotări conforme curriculum, acces copiilor, planșe tematice, continuitate educație. Fără dotări conforme, educație de calitate NU e posibilă. Postul e STRATEGIC, nu rutinar. Administrator-ul + Educatoarea = PARTENERIAT pt copii.",
    "tooltipCorrect": "Administrator-ul: crucial pt mediu sigur, dotări conforme, acces materiale, continuitate; postul = STRATEGIC."
  },
  {
    "id": "ALI-001",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Prag zahăr la limită",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "La recepție sosește un lot de biscuiți. Eticheta arată 14,8 g zaharuri/100 g, ambalaj intact, termen valabil. Ce decide administratorul și de ce?",
    "options": [
      {
        "id": "A",
        "text": "Acceptă lotul pe criteriul zahăr (sub 15 g), dar verifică și grăsimile/sarea și integritatea ambalajului."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, acceptă necondiționat, dacă ambalajul este intact."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, refuză; orice produs cu zahăr adăugat este nerecomandat."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, refuză lotul, deoarece 14,8 g depășește pragul de 15 g/100 g."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Pragul Anexei 1 (Ordinul 1563/2008) pt zahăr este >15 g/100 g; la 14,8 g lotul NU e nerecomandat pe zahăr, dar administratorul verifică TOATE criteriile (grăsimi, sare, calorii/unitate) și integritatea ambalajului la recepție.",
    "tooltipCorrect": "Sub 15 g zaharuri/100 g NU declanșează criteriul zahăr; se verifică însă restul criteriilor din Anexa 1."
  },
  {
    "id": "ALI-002",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Verificare etichetă și dovadă compoziție",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, art. 7",
    "type": "single",
    "question": "Transportistul aduce 50 kg de brânză de oi în ambalaj sigilat, fără etichetă nutrițională. Cere să o accepte „pentru că o cunoaște de ani\". Ce spune administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, acceptă, sprijinindu-se pe incredere și relație lungă cu furnizor și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Refuză; art. 7 din Ordinul 1563 cere DOVADA compoziției prin etichetă/specificații de la producător/buletin analiză. Acceptă doar cu documentație."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, acceptă, dar o depozitează separat și o verifică după cateva zile."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, refuză imediat pentru că orice produs neeticheta e interzis în scopuri religioase."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Art. 7 din Ordinul 1563/2008 obligă operatorii să facă dovada compoziției prin etichetă, specificații de la producător sau buletin de analiză. Lipsa acesteia înseamnă NU se acceptă lotul.",
    "tooltipCorrect": "Dovada compoziției (etichetă/specificații/buletin) e obligatorie; relația de încredere nu substituie conformitatea legală."
  },
  {
    "id": "ALI-003",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Prag grăsimi și acizi grași trans/saturați",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "La recepție: o sarcină de mălaie pentru pudinguri. Etichetă: 18 g grăsimi/100 g (din care 4 g saturate, 0,8 g trans). Ambalaj OK, termen OK. Ce decide administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, refuză, deoarece 18 g depășește pragul de 20 g grăsimi."
      },
      {
        "id": "B",
        "text": "Refuză, pentru că orice produs cu acizi grași e interzis pt copii sub 6 ani."
      },
      {
        "id": "C",
        "text": "Acceptă; grăsimile sunt sub 20 g și acizii sunt sub pragurile de saturate (5 g) și trans (1 g)."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, acceptă, dar o folosește numai în pudinguri, nu în alte rețete."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1 interzice produse cu >20 g grăsimi/100 g ȘI (saturate >5 g SAU trans >1 g). 18 g grăsimi + 4 g saturate + 0,8 g trans = se încadrează în limitele acceptable.",
    "tooltipCorrect": "Ambele condiții trebuie verificate cumulativ: grăsimi totale ȘI saturate/trans; sub praguri = acceptabil."
  },
  {
    "id": "ALI-004",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Prag sare și sodiu la limită",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Sosește o sarcină de pește congelat etichetat. Etichetă: 1,45 g sare/100 g (sau 0,58 g sodiu/100 g). Integritate ambalaj OK. Ce decide administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, refuză, deoarece sarea 1,45 g este sub 1,5 g dar sodiul este sub 0,6 g."
      },
      {
        "id": "B",
        "text": "Potrivit normei, acceptă, dar cere și o analiză microbiologică din partea furnizorului."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, refuză, pentru că pesciul congelat e interzis în grădinițe."
      },
      {
        "id": "D",
        "text": "Acceptă; atât sarea (1,45 g < 1,5 g) cât și sodiul (0,58 g < 0,6 g) sunt sub pragurile Anexei 1."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 1: sare >1,5 g/100 g SAU sodiu >0,6 g/100 g declanșează criteriul. La 1,45 g sare și 0,58 g sodiu = ambii sub praguri = acceptabil.",
    "tooltipCorrect": "Pragurile sării sunt SAU inclusiv pe sare SAU pe sodiu; dacă ambii sunt sub praguri, produsul se acceptă."
  },
  {
    "id": "ALI-005",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Băuturi răcoritoare și excepția apei îmbuteliate",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Administratorul primește o ofertă: 20 cutii de apă minerală îmbuteliată și 10 cutii de suc natural 100% fruct. Ce acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Apă minerală îmbuteliată NU e interzisă, dar sucul natural 100% da; refuză sucul."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, acceptă doar ceaiul neîndulcit."
      },
      {
        "id": "C",
        "text": "Potrivit normei, ambele sunt interzise pt că sunt băuturi."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, apă minerală da, sucul doar în proporție de 1/3 din cantitate."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 1: băuturi răcoritoare ORICE tip sunt nerecomandate, CU EXCEPȚIA apei potabile/minerale îmbuteliate. Sucul natural, chiar 100%, e clasificat ca băutură și intru în interdicție.",
    "tooltipCorrect": "Apă îmbuteliată = acceptabilă; orice alt tip de băutură (suc, nectare, sucuri îndulcite) = nerecomandate."
  },
  {
    "id": "ALI-006",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Excepția fructelor și legumelor proaspete la zahăr",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Administratorul primește banane proaspete cu 23 g zaharuri/100 g. Refuză sau acceptă? De ce?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, refuză; bananele sunt prea energice pt copii mici."
      },
      {
        "id": "B",
        "text": "Acceptă; fructele și legumele proaspete au EXCEPȚIE la pragul zahăr din Anexa 1."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, refuză, deoarece 23 g depășește pragul de 15 g zaharuri."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, acceptă, dar o folosește cu moderație."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 1 explicit: \"Zahăruri: peste 15 g zaharuri/100 g produs (prăjituri, bomboane, acadele, similare). Excepție: fructele și legumele proaspete.\"",
    "tooltipCorrect": "Fructele și legumele proaspete sunt exceptate de la pragul zahăr; bananele, mărul, strugurii naturali se acceptă indiferent de conținutul natural de zahăr."
  },
  {
    "id": "ALI-007",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Calorii pe unitatea de vânzare - produs în limită",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Sosește un lot de 100 de batonuri proteice. Etichetă: 290 kcal per baton (unitatea de vânzare). Ambalaj OK, termen OK. Ce decide administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Refuză; batonurile proteice nu sunt produse recomandate nici sub 300 kcal."
      },
      {
        "id": "B",
        "text": "Acceptă, dar distribui cu restrângeri (maxim 1 baton pe copil/zi)."
      },
      {
        "id": "C",
        "text": "Acceptă; pragul din Anexa 1 este >300 kcal/unitate; la 290 kcal lotul se acceptă."
      },
      {
        "id": "D",
        "text": "Potrivit normei, refuză, deoarece 290 kcal este aproape de 300 kcal."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1: \"Calorii pe unitatea de vânzare: peste 300 kcal pe unitatea de vânzare.\" La 290 kcal/baton NU se declanșează criteriul.",
    "tooltipCorrect": "Pragul e >300 kcal; la 290 kcal acceptă; la 301 kcal refuză. Numerele la limită se verifică cu exactitate."
  },
  {
    "id": "ALI-008",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Alimente neambalate și excepția bananelor/citricelor",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Furnizorul propune: 5 kg morcovi proaspeți vrac, 3 kg banane neambalate, 4 kg cartofi prăjiți în sac deschis. Ce acceptă administratorul?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, numai morcovii și cartofii; bananele neambalate sunt interzise."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, toate trei; dacă produsele sunt proaspete, ambalajul nu e obligatoriu."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, numai morcovii; bananele și cartofii sunt neambalate și interzisi."
      },
      {
        "id": "D",
        "text": "Morcovii și bananele; Anexa 1 acceptă fructele proaspete neambalate. Cartofii prăjiți refuză (grăsimi >20 g + neambalați)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 1: \"Alimente neambalate: alimente vrac, sandvișuri neambalate. Excepție: bananele și citricele.\" Cartofii prăjiți sunt și neambalați și depășesc pragul grăsimi (>20 g) și calorii (>300 kcal).",
    "tooltipCorrect": "Excepția neambalării se aplică bananelor și citricelor; alte fructe/legume vrac se acceptă. Cartofii prăjiți = combinație de criterii (grăsimi, calorii, ambalaj)."
  },
  {
    "id": "ALI-009",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Difuzarea listei alimente nerecomandate - excepția creșelor",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 123/2008, art. 9",
    "type": "single",
    "question": "Administratorul unei grădinițe cu program prelungit (cu copii 3-6 ani) întreabă: cum primesc lista alimentelor nerecomandate?",
    "options": [
      {
        "id": "A",
        "text": "O primesc prin inspectoratul școlar județean."
      },
      {
        "id": "B",
        "text": "O redactez singur pe baza experienței."
      },
      {
        "id": "C",
        "text": "Pe baza dispoziției, O primesc direct de la MSP."
      },
      {
        "id": "D",
        "text": "O primesc de la Inspecția Sanitară de Stat."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Art. 9 din Legea 123/2008: \"MSP întocmește lista... inspectoratele școlare județene/București o comunică tuturor unităților, mai puțin creșelor; creșelor li se comunică direct de MSP.\" Grădinița = unitate școlară, primește prin inspectorat.",
    "tooltipCorrect": "Grădinițele și școlile primesc lista prin inspectoratul școlar; creșele primesc direct de MSP. Administratorul cere documentul oficial."
  },
  {
    "id": "ALI-010",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Meniuri avizate medical și aprobate de conducător",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 123/2008, art. 11",
    "type": "single",
    "question": "Meniul lunii viioare propus de bucătărie conține carne prăjită și maioneză. Administratorul o sesizează. Ce trebuie făcut conform legii?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, aprobă dacă mâncarea e calorice suficiente pe hârtie și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Meniurile trebuie AVIZATE de personalul medical și APROBATE de conducător. Cere aviz medical; dacă medical refuză, se exclud mâncările (carne prăjită, maioneză sunt conflictuale)."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, aprobă singur, dacă i se pare în regulă ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, respinge și cere bucătarului să schimbe, fără alt proces ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Art. 11 din Legea 123/2008: \"Meniurile din cantine/locații asimilate sunt avizate de personalul medical și aprobate de conducătorul unității.\" Procesul e dublat: aviz medical + aprobare conducător.",
    "tooltipCorrect": "Meniurile necesită aviz medical (nutriție) și aprobare conducători; ambele sunt obligatorii și documentate."
  },
  {
    "id": "ALI-011",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Interzicerea preparării, comercializării, distribuirii",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 123/2008, art. 10",
    "type": "single",
    "question": "Art. 10 din Legea 123/2008 interzice în incinta unităților care dintre următoarele?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, numai vânzarea; distribuirea profesională e acceptă."
      },
      {
        "id": "B",
        "text": "În aplicarea regulii, doar în cazul alimentelor cu gram trans."
      },
      {
        "id": "C",
        "text": "Prepararea, comercializarea ȘI distribuirea alimentelor din lista nerecomandata."
      },
      {
        "id": "D",
        "text": "Pe baza dispoziției, comercializarea alimentelor nerecomandate."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Art. 10 din Legea 123/2008: \"în incinta unităților sunt interzise prepararea, comercializarea și distribuirea alimentelor din listă.\" Trei acțiuni interzise: preparare + comercializare + distribuire.",
    "tooltipCorrect": "Interdicția e asupra toate trei activități (nu doar o parte): NU se prepară, NU se comercializează, NU se distribuie."
  },
  {
    "id": "ALI-012",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Control Inspecția Sanitară de Stat",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 123/2008, art. 15",
    "type": "single",
    "question": "Cine are atribuția de a constata încălcări și de a sancționa nerespectarea listei alimentelor nerecomandate?",
    "options": [
      {
        "id": "A",
        "text": "Administratorul, pe baza verificării proprii."
      },
      {
        "id": "B",
        "text": "În aplicarea regulii, conducătorul unității."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, inspectoratul școlar."
      },
      {
        "id": "D",
        "text": "Inspecția Sanitară de Stat din MSP."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Art. 15 din Legea 123/2008: \"Constatarea încălcărilor și sancționarea → Inspecția Sanitară de Stat din MSP.\"",
    "tooltipCorrect": "Controlul și sancționarea sunt responsabilitatea Inspecției Sanitare de Stat, nu a conducerii unitare; administratorul semnalează și cooperează."
  },
  {
    "id": "ALI-013",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Contravenții art. 9-12",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 123/2008, art. 16",
    "type": "single",
    "question": "Art. 16 din Legea 123/2008 definește contravenții ca încălcarea articolelor 9-12. Ce conțin acestea?",
    "options": [
      {
        "id": "A",
        "text": "Lista nerecomandate (9), preparare/comercializare/distribuire (10), meniuri avizate (11), alte dispoziții (12)."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, doar meniurile neaprobate ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, nerespectarea ambalajelor și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, doar comercializarea fără documente și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Art. 16: \"Contravenții = încălcarea art. 9–12\" (difuzare lista, interdicție preparare/comercializare/distribuire, meniuri avizate, alte norme).",
    "tooltipCorrect": "Contravenția acoperă: nerespectarea listei, prepararea/vânzarea/distribuirea interzise, meniuri fără aviz medical/aprobare conducător."
  },
  {
    "id": "ALI-014",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Intrare în vigoare 30 de zile",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 123/2008, art. 17",
    "type": "single",
    "question": "Art. 17 din Legea 123/2008 precizează timing-ul intrării în vigoare. Care?",
    "options": [
      {
        "id": "A",
        "text": "La 1 ianuarie al anului următor."
      },
      {
        "id": "B",
        "text": "În 30 de zile de la publicare."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, imediat după publicare."
      },
      {
        "id": "D",
        "text": "Conform procedurii, la discreția MSP."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Art. 17 din Legea 123/2008: \"Intră în vigoare în 30 de zile de la publicare.\" Timeline fix.",
    "tooltipCorrect": "Legea intră în vigoare în 30 zile; unitățile au 30 de zile pentru conformitate după publicare."
  },
  {
    "id": "ALI-015",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Dovada compoziție prin etichetă sau specificații",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, art. 7",
    "type": "single",
    "question": "Administratorul primește o sarcină de brânză de 10 kg cu o hârtie de la producător. Hârtia conține: \"Brânză de oi, conținut grăsime 28%, sare 1,8%\". E dovadă suficientă?",
    "options": [
      {
        "id": "A",
        "text": "Nu; se cere etichetă pe ambalaj, nu notă de producător."
      },
      {
        "id": "B",
        "text": "Parțial; se acceptă dacă mai cere și buletin de analiză."
      },
      {
        "id": "C",
        "text": "Da; hârtia e specificație de la producător, acceptă conform art. 7."
      },
      {
        "id": "D",
        "text": "Nu; brânzele de oi sunt interzise indiferent de dovadă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Art. 7 din Ordinul 1563/2008: \"Dovada compoziției prin etichetă, specificații de la producător sau buletin de analiză.\" Hârtia producătorului cu conținut nutrițional = specificație acceptabilă.",
    "tooltipCorrect": "Art. 7 acceptă trei forme: etichetă pe produs, specificații de la producător, buletin analiză; una e suficientă."
  },
  {
    "id": "ALI-016",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Grăsimi și acizi grași trans la pragul superior",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Sosește margarină cu etichetă: 21 g grăsimi/100 g (din care 3 g saturate, 0,9 g trans). Ambalaj OK, termen OK. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Refuză; margarinele sunt interzise total în grădinițe."
      },
      {
        "id": "B",
        "text": "Acceptă; grăsimile saturate și trans sunt sub pragurile 5 g și 1 g."
      },
      {
        "id": "C",
        "text": "Acceptă, dar o distribuie cu atenție copiilor sub 3 ani."
      },
      {
        "id": "D",
        "text": "Refuză; grăsimile totale 21 g depășesc pragul de 20 g/100 g."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 1: grăsimi >20 g/100 g sunt nerecomandate. La 21 g grăsimi totale (chiar dacă saturate/trans sunt OK) = DEPĂȘIRE pe grăsimi totale.",
    "tooltipCorrect": "Criteriul grăsimi se aplică pe totalul grăsimilor; dacă >20 g, e nerecomandat, indiferent de compoziția saturate/trans."
  },
  {
    "id": "ALI-017",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Grăsimi saturate peste 5 g la carne grasă",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Carne de porc etichetă: 19 g grăsimi/100 g (din care 8 g saturate). Ambalaj OK. Ce decide administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Refuză; pragul pentru grăsimile SATURATE >5 g e depășit (8 g saturate)."
      },
      {
        "id": "B",
        "text": "Potrivit normei, acceptă; grăsimile totale 19 g sunt sub 20 g."
      },
      {
        "id": "C",
        "text": "Refuză; carnea roșie e interzisă în scopuri nutriționale."
      },
      {
        "id": "D",
        "text": "Potrivit normei, acceptă, dar o folosește în rețete cu calorii scăzute."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 1: \"Grăsimi: peste 20 g grăsimi/100 g, din care cumulativ grăsimi saturate peste 5 g SAU acizi grași trans peste 1 g.\" La 8 g saturate (>5 g) = satisface una din condiții de nerecomandat.",
    "tooltipCorrect": "Criteriul se satisface dacă grăsimi TOTALE >20 ȘI (saturate >5 SAU trans >1); la grăsimi 19 dar saturate 8 = NU satisface „grăsimi >20\" deci SE ACCEPTĂ."
  },
  {
    "id": "ALI-018",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Sare la prag exact 1,5 g",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Sosește chips etichetat: 1,5 g sare/100 g. Ambalaj OK, termen OK. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, refuză; chips sunt interzise indiferent de sare."
      },
      {
        "id": "B",
        "text": "Acceptă; pragul e >1,5 g, nu ≥1,5 g; la 1,5 g exact se acceptă."
      },
      {
        "id": "C",
        "text": "Acceptă, dar le ține în depozit separat de alte alimente."
      },
      {
        "id": "D",
        "text": "Pe baza dispoziției, refuză; 1,5 g e pragul exact, deci depășire."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 1: \"Sare: peste 1,5 g sare/100 g (SAU peste 0,6 g sodiu)\". Cuvântul \"peste\" = >1,5 g, nu ≥1,5 g. La exact 1,5 g, nu se depășește pragul.",
    "tooltipCorrect": "Pragul e \"peste 1,5 g\", adică >1,5 g; la 1,5 g exact se acceptă; la 1,51 g se refuză."
  },
  {
    "id": "ALI-019",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Sodiu la pragul exact 0,6 g",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "La recepție: pâine specială etichetă 0,6 g sodiu/100 g. Verifică si ambalaj intact, termen valabil. Ce decide administratorul conform Anexei 1?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii, refuză; sodiul 0,6 g depășește pragul de sare/sodiu."
      },
      {
        "id": "B",
        "text": "Refuză; pâinea e carbohidrat pe care nu-l verifică. Doar grăsimi/sare."
      },
      {
        "id": "C",
        "text": "Acceptă; pragul e >0,6 g sodiu; la 0,6 g exact se acceptă conform Anexei 1."
      },
      {
        "id": "D",
        "text": "Acceptă, cu condiția ca sarea sa fie <1,5 g; deci ambele criterii verificate."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1: sare >1,5 g SAU sodiu >0,6 g. Pragul sodiu e \"peste 0,6\", nu \"de la 0,6\". La 0,6 g exact = la limita, acceptabil.",
    "tooltipCorrect": "Sodiu >0,6 g = refuză. La 0,6 g = acceptă. Cuvântul \"peste\" e esențial."
  },
  {
    "id": "ALI-020",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Zahăr exact 15 g la biscuiți",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "La recepție sosesc biscuiți cu etichetă: 15 g zaharuri/100 g. Ambalaj intact, termen valabil. Ce decide administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispoziției, refuză; biscuiții sunt interzisi total."
      },
      {
        "id": "B",
        "text": "Potrivit normei, refuză; zahărul 15 g depășește pragul."
      },
      {
        "id": "C",
        "text": "Potrivit normei, acceptă, dar le ține sub cheie."
      },
      {
        "id": "D",
        "text": "Acceptă; pragul e >15 g zaharuri; la exact 15 g se acceptă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 1: zaharuri >15 g/100 g. Pragul e \"peste 15\", nu \"de la 15\". La 15 g exact = la limita, acceptabil.",
    "tooltipCorrect": "Zahăr >15 g = refuză. La 15 g = acceptă. Precisia numerelor e critică."
  },
  {
    "id": "ALI-021",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Calorii exact 300 kcal pe unitate",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Batonul energetic etichetă: 300 kcal per unitate baton. Ambalaj intact. Ce decide administratorul conform Anexei 1?",
    "options": [
      {
        "id": "A",
        "text": "Acceptă; pragul e >300 kcal; la 300 kcal exact se acceptă."
      },
      {
        "id": "B",
        "text": "Potrivit normei, refuză; batonele energetice sunt interzise."
      },
      {
        "id": "C",
        "text": "Conform procedurii, acceptă, dar le dă copiilor la anumite orare."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, refuză; 300 kcal depășește pragul."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 1: calorii >300 kcal pe unitate de vânzare. Pragul e \"peste 300\", la 300 kcal exact = acceptabil.",
    "tooltipCorrect": "Calorii >300 = refuză. La 300 = acceptă. Granița se verifică strict."
  },
  {
    "id": "ALI-022",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Copil cu alergie la lapte și meniu personalizat",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 123/2008, art. 11",
    "type": "single",
    "question": "Un copil are alergie documentată la lapte. Meniul standard include lapte la gustare și brânză. Ce face administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, ignora alergia; meniul e obligatoriu pentru toți și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Sesizează personalul medical și conducătorul; se avizează meniu adaptat fără lapte. Cere certificat medical și adaptează aprovizionarea."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, înlocuiește din propria inițiativă lapte cu apă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, anulează mâncărurile cu lapte pt tot grupul și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Art. 11: meniurile avizate medical și aprobate de conducător; copilul cu alergie cere adaptare documentată și aviz medical. Administratorul coordonează, nu hotărăște unilateral.",
    "tooltipCorrect": "Meniuri personalizate (alergii, restricții medicale) = avizate medical, aprobate conducător, documentate."
  },
  {
    "id": "ALI-023",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Combinație: zahăr OK, dar grăsimi depășite",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Ciocolată etichetă: 12 g zaharuri/100 g (OK), dar 28 g grăsimi/100 g (din care 18 g saturate). Ambalaj OK. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, refuză; ciocolata e nerecomandata indiferent de cifre."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, acceptă; zahărul e sub 15 g, deci e OK și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Refuză; zahărul e OK dar grăsimile 28 g depășesc pragul 20 g și saturate 18 g depășesc 5 g. Se verifică TOATE criteriile."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, acceptă, dar o dă copiilor în proporție mică urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1 cere verificare cumulativă: zahăr, grăsimi, sare, calorii. Un singur criteriu nerespectat = refuză. La ciocolată: zahăr OK, dar grăsimi >20 g ȘI saturate >5 g = nerecomandat.",
    "tooltipCorrect": "Verificare cumulativă: chiar dacă zahărul e OK, restul criteriilor (grăsimi, sare, calorii) se controlează; un singur nerespectă = refuză."
  },
  {
    "id": "ALI-024",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Etichetă lipsă și refuz recepție",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, art. 7",
    "type": "single",
    "question": "La recepție: 25 kg de paste sosesc într-un sac kraft generic, nici etichetă nutrițională, nici specificații. Furnizor zice: \"E bună, garantez.\" Ce face administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, acceptă, dar ține lotul în carantină 5 zile și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, acceptă; pastele simple nu au etichetă nutrițională și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, acceptă, sprijinindu-se pe garanția furnizorului și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Refuză; art. 7 cere dovada compoziției (etichetă/specificații/buletin). Fără acestea, NU acceptă. Cere documente de la furnizor."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Art. 7 din Ordinul 1563: operatorii trebuie să dovedească compoziția prin etichetă, specificații sau buletin. Fără dovadă = NU se acceptă, indiferent de relație cu furnizor.",
    "tooltipCorrect": "Dovada compoziție e obligatorie și non-negociabilă; administrator refuză ferm și cere documente."
  },
  {
    "id": "ALI-025",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Apă în sticle reutilizabile vs apă îmbuteliată",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Furnizor propune: \"Pot aduce apă din puțul privat în sticle din grădiniță, în loc de apă îmbuteliată, e mai ieftine.\" Ce spune administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Refuză; Anexa 1 acceptă \"apă potabilă/minerală îmbuteliată\". Apă din alt surse, chiar în sticle, nu corespunde. Cere apă îmbuteliată oficială."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, acceptă, cu condiția unei analize microbiologice lunare și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, acceptă; e apă, nu importă sursa urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, acceptă; apă dinainte era obișnuita în grădinițe și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 1: băuturi cu excepție apei potabile/minerale îmbuteliate. Cuvântul \"îmbuteliată\" indică sursă sigură, înregistrată. Apă de alt sursă, oricât de pură, nu satisface criteriul.",
    "tooltipCorrect": "Apă îmbuteliată = apă potabilă/minerală din sursă înregistrată și sigilată. Apă din puț, chiar în sticle, nu e acceptabilă conform Anexei 1."
  },
  {
    "id": "ALI-026",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Recepție și verificare termen de valabilitate",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, art. 7",
    "type": "single",
    "question": "Sosește o sarcină de lapte. Etichetă nutrițională: OK. Termen valabil: 2 august. Data recepției: 1 august. Ambalaj: OK. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, refuză; termenul e prea aproape și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Acceptă; termen e valid (2 august > 1 august). Notează în evidență lot și termen; urmărește consumare până la 2 august."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, refuză; laptele se primește cu minim 7 zile termen și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, acceptă, dar o ține în hladă maxim 1 zi și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Recepție: verifica termen, ambalaj, etichetă, integritate. La 1 august, termen 2 august = valid (1 zi disponibil). Administratorul acceptă și gestionează pe baza termenului.",
    "tooltipCorrect": "Termen valid = data recepției < data expirare. Acceptă și dokumentează; cu cât mai puțin timp, cu atât mai repede folosește."
  },
  {
    "id": "ALI-027",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Defect ambalaj - crăpătură mica",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, art. 7",
    "type": "single",
    "question": "Sosește o sarcină de biscuiți (etichetă OK, zahăr OK, termen OK), dar pe colț ambalajului e o crăpătură de 1 cm. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, acceptă; crăpăturile se lipesc cu scotch."
      },
      {
        "id": "B",
        "text": "Potrivit normei, acceptă; crăpătura e mică, NU afectează siguranța."
      },
      {
        "id": "C",
        "text": "Refuză; ambalaj defect = risc contaminare, expunere umiditate, NU se acceptă."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, acceptă, dar o depozitează la partea de sus, protejata."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Recepție verifică integritate ambalaj. Crăpătură = risc contaminare microbiologică, deteriorare produs, expunere la umiditate. Se refuză lot cu ambalaj defect.",
    "tooltipCorrect": "Ambalaj = barieră; defect = NU se acceptă. Administrator nu reparează; cere lot nou intreg."
  },
  {
    "id": "ALI-028",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Depozitare pe categorii: uscate / refrigerate / congelate",
    "difficulty": "scenario",
    "sourceAct": "Ordin 1955/1995 (din art. 6 al Ordinului 1563)",
    "type": "single",
    "question": "Administratorul primește: orez, brânză, carne congelată, legume proaspete, brânzeturi în formă de plăci. Cum le depozitează?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, toate în același dulap, pe rafturi ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, carne la congelator, restul oricunde urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, după culoare pentru ușurință vizuală urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Uscate (orez) la temperatura camerei; brânzele și carnea în frigider/congelator pe rafturi separate; legumele proaspete într-o cămară răcoroasă. Separare obligatorie pe categorie, cu etichete de dată recepție."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Igienă și siguranță alimentară: depozitare pe categorii (uscate, refrigerate, congelate, proaspete) evită contaminare încrucișată. Fiecare categorie cu condiții proprii de temperatură/umiditate și etiquetare dată recepție.",
    "tooltipCorrect": "Depozitare = separare rigidă pe categorie. Uscate 15-20°C; brânzeturi/carne 0-4°C; congelate <-18°C; legume în cămară răcoroasă. Fiecare lot etichetat cu dată și termen."
  },
  {
    "id": "ALI-029",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Separare curățenie de alimente",
    "difficulty": "scenario",
    "sourceAct": "Ordin 1955/1995 (igienă în unitățile copiilor)",
    "type": "single",
    "question": "Unde depozitează administratorul dezinfectantul, detergentul, peria de toaletă și alte substanțe periculoase?",
    "options": [
      {
        "id": "A",
        "text": "Într-o cămară separată, cu lacăt, cu semnalizare de pericol, INACCESIBILĂ copiilor. Niciodată lângă alimente sau depozit alimentar."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, într-un dulap deschis pe care doar personalul îl cunoaște și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, sub chiuvetă, lângă apă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, într-o cămară, dar pe aceeași parte cu alimentele și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Siguranță copii și igienă: substanțe periculoase (curățenie, dezinfectanți, minciuni) depozitate SEPARAT, lacuite, cu semnalizare, NU accesibile copiilor, NU în apropiere de alimente.",
    "tooltipCorrect": "Curățenie = peril biologic/chimic; separare absolută, lacăt, semnalizare. Interzis mix cu alimente."
  },
  {
    "id": "ALI-030",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Suspiciune contaminare - acțiune imediată",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 123/2008, art. 10",
    "type": "single",
    "question": "La pregătire gustare, brânzeta are miros ciudat și culoare neobișnuită. Administratorul suspectează contaminare. Ce face?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, O servește primului copil ca test ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "NU O FOLOSEȘTE. O izolează. Anunță conducătorul și nutriționistul. Notează lot, dată, motiv. Sesizează Inspecția Sanitară dacă riscul e mare. Cere investigație furnizor."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, O fierbe înainte de servire și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, ignora și o distribuie copiilor, dacă nu au sesizat ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Precauție: suspiciune = suspensiune folosire. Art. 10 (interzicere distribuire alimente nerecomandate/contamnate). Administratorul e garant siguranța; anunță, documentează, nu riscă.",
    "tooltipCorrect": "Suspiciune contaminare = STOP imediat. Izolează, notează, anunță, investigă. NU servi copiilor în nicio situație."
  },
  {
    "id": "ALI-031",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Preparare carne prăjită și prohibiție",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 123/2008, art. 10",
    "type": "single",
    "question": "Meniul propune carne prăjită la cină. Administrator observă. Ce decizie?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, O servește, dar cu salată urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, aprobă dacă e o dată pe lună ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Refuză; art. 10 interzice distribuirea alimentelor nerecomandate. Carnea prăjită depășite praguri grăsimi/calorii. Cere carne fiartă sau grilă."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, aprobă; carnea e nutrientă ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Carne prăjită = grăsimi >20 g/100 g, calorii >300 kcal/porție, acizi grași trans potențiali. Art. 10 interzice în incintă. Prepară gătit sănătos (fiartă, grilă).",
    "tooltipCorrect": "Carne prăjită = nerecomandat cumul. Art. 10 interzice; administrator refuză și cere alternativă sănătoasă."
  },
  {
    "id": "ALI-032",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Maioneză și cremă cu ouă - interzicere totală",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Anexa 2 din Ordinul 1563/2008 face precizări privind cremele cu ouă, frișcă și maioneze în meniuri. Care e regula?",
    "options": [
      {
        "id": "A",
        "text": "Sunt interzise iarna, de acceptă vara."
      },
      {
        "id": "B",
        "text": "Se acceptă dacă sunt preparate zilnic."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, sunt acceptate, dar cu moderație."
      },
      {
        "id": "D",
        "text": "Sunt interzise total, indiferent de anotimp."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2, cap. 3, p. 8: \"Sunt interzise cremele cu ouă și frișcă și maionezele, indiferent de anotimp.\" Interzicere absolută.",
    "tooltipCorrect": "Maioneză + cremă cu ouă + frișcă = interzise total, toate anotimpurile. Administrator NU permite nici o excepție."
  },
  {
    "id": "ALI-033",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Ouă - omletă la cuptor vs ochiuri prăjite",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu: ouă ca sursa de proteine. Anexa 2 precizează ce metoda de gătire se recomandă?",
    "options": [
      {
        "id": "A",
        "text": "Omletă la cuptor."
      },
      {
        "id": "B",
        "text": "Ochiuri românești prăjite."
      },
      {
        "id": "C",
        "text": "Omletă prăjită în tigaie."
      },
      {
        "id": "D",
        "text": "Ochiuri prăjite în ulei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2: \"Omletă la cuptor, NU ochiuri românești/prăjite.\" Cuptor = gătit sănătos (NU ulei/grăsimi în exces).",
    "tooltipCorrect": "Ouă = omletă la cuptor. Prăjit = interzis. Administrator cere rețeta specifică."
  },
  {
    "id": "ALI-034",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Tocături și prelucrare termică fierbere/cuptor",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu: tocătură de carne. Ce spune Anexa 2 despre prelucrarea termică?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, tocăturile sunt interzise total."
      },
      {
        "id": "B",
        "text": "Sunt acceptate NUMAI dacă prelucrate termic prin fierbere sau la cuptor, NU prăjite."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, se acceptă dacă sunt congelajte."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, se acceptă daca sunt dintr-o zonă de calitate."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2, cap. 3, p. 6: \"Tocăturile sunt acceptate NUMAI dacă prelucrate termic prin fierbere sau la cuptor.\"",
    "tooltipCorrect": "Tocături = fierbere/cuptor. Prăjit/fript = interzis. Administrator verifică rețeta de gătire."
  },
  {
    "id": "ALI-035",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Salate și legume crudite în meniu",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Conform Anexei 2, cum se îmbogățește meniul copiilor cu vitamine și minerale esențiale?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispoziției, cu alune și semințe."
      },
      {
        "id": "B",
        "text": "Pe baza dispoziției, cu fructe deshidratate."
      },
      {
        "id": "C",
        "text": "Cu salate din crudități și legume-frunze în supe/ciorbe."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, cu suplimente vitaminice sintetice."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2, cap. 3, p. 7: \"Meniul se îmbogățește cu vitamine/minerale prin salate din crudități și legume-frunze în supe/ciorbe.\"",
    "tooltipCorrect": "Vitamine = salate de crudități + legume verzi în supe. Natural, nu suplimente."
  },
  {
    "id": "ALI-036",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Evitare combinații digestive nefavorabile la cină",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu cină: iahnie de fasole + iaurt. Administrator observă. Ce spune?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, aprobă; copiii au nevoie de proteine și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, aprobă; ambele sunt sănătoase ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, aprobă, dar doar pentru copii >5 ani urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Refuză; Anexa 2 spune că la cină se evită combinații cu efecte digestive nefavorabile. Fasole + iaurt = incompatibil. Cere fie fasole cu crudități, fie iaurt separat."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2, cap. 3, p. 5: \"La cină se evită mâncărurile cu efort digestiv puternic sau combinații cu efecte digestive nefavorabile (ex.: iahnie de fasole cu iaurt/compot).\"",
    "tooltipCorrect": "Cină = evitar combinații grele (fasole + iaurt) pt odihnă normală. Administrator respectă restricții de ore/combinații."
  },
  {
    "id": "ALI-037",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Evitare asociere alimente aceeași grupă la same meal",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu mic dejun: pâine cu gem + ceai. Administrator verifică conform Anexei 2. Ce decizie?",
    "options": [
      {
        "id": "A",
        "text": "Refuză; p. 4 din Anexa 2 spune că se evită asocierea alimentelor din aceeași grupă. Pâine + gem = ambii glucide (carbohidraț). Cere: lapte cu pâine și gem, SAU carne/derivate lactate cu pâine."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, aprobă; ambele sunt acceptabile ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, aprobă; cina nu e problema ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, aprobă cu adaos de zahăr urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2, cap. 3, p. 4: \"Se evită asocierea alimentelor din aceeași grupă... Ex.: la micul dejun NU ceai cu pâine cu gem, CI cu preparate din carne/derivate lactate; se poate lapte cu pâine+gem/biscuiți.\"",
    "tooltipCorrect": "Mic dejun = diversificare grupe. Pâine+gem (ambii glucide) = NU. Lapte+pâine+gem = OK. Sau carne+pâine."
  },
  {
    "id": "ALI-038",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Proporție gustare în rația zilnică",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Grădiniță cu program 6 ore. Ce proporție din rația energetică zilnică trebuie să acopere gustarea conform Anexei 2?",
    "options": [
      {
        "id": "A",
        "text": "30%."
      },
      {
        "id": "B",
        "text": "10%."
      },
      {
        "id": "C",
        "text": "20%."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, 5%."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2, cap. 3, p. 2: \"Meniurile asigură aport conform anexele 3–4, proporțional cu timpul petrecut în colectivitate (ex.: program școlar 6 ore → gustare care asigură 10% din rația energetică zilnică).\"",
    "tooltipCorrect": "6 ore = 10% rație zilnică. Timp mai lung = % mai mari. Administrator calcul pe baza programului efectiv."
  },
  {
    "id": "ALI-039",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Rații realizate vs rații recomandate în creșe",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Creșă cu orar de zi. Ce procent din rații recomandate trebuie realizate conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "90–95%."
      },
      {
        "id": "B",
        "text": "50–60%."
      },
      {
        "id": "C",
        "text": "75–80%."
      },
      {
        "id": "D",
        "text": "60–70%."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4, art. 4: \"În creșele cu orar de zi și în grădinițele cu orar prelungit, rații realizate trebuie să reprezinte 75–80% din rații recomandate.\"",
    "tooltipCorrect": "Creșe/grădinițe orar prelungit = 75-80% rații. Copilul e acasă pentru alte mese. Administrator calcul rații pe baza programului."
  },
  {
    "id": "ALI-040",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Depășire rație lapte cu până la 20%",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Rația recomandată lapte/lactate: 700 ml. Rație realizată: 840 ml. Se acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, se acceptă, dar doar luni."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, nu; rația trebuie exactă ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, nu; depășire de 140 ml e excesivă."
      },
      {
        "id": "D",
        "text": "Da; art. 3 din Anexa 4 permite depășire cu până la 20%. 840 ml = 20% mai mult decât 700 ml."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4, art. 3: \"Se permite depășirea rației cu până la 20% la lapte/produse lactate, carne/preparate, pește, legume/fructe.\"",
    "tooltipCorrect": "Depășire ±20% acceptabilă pe anumite grupe (lapte, carne, pești, legume). Administrator verific pe medie 2 săptămâni."
  },
  {
    "id": "ALI-041",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Calcul rații pe 10 zile lucrătoare în 3 perioade",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Cum se calculează rații medii realizate pentru copiii din grădiniță conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "Din foile de alimente scoase zilnic pe 10 zile lucrătoare (februarie, mai, octombrie), împărțit la nr. de consumatori."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, din consumul anual urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, din estimare anuală a bucătarului ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, din consum mediu pe lună și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4: \"Calcul rații: pe baza foilor de alimente scoase zilnic din magazie, pe 10 zile lucrătoare (2 săptămâni consecutive) în februarie, mai, octombrie; împărțit la nr. total consumatori → rație medie/copil, comparată cu tabel.\"",
    "tooltipCorrect": "Rații = calcul metodic pe 10 zile/2 săpt în 3 rânduri/an (feb, mai, oct). Eșantion reprezentativ pt sezon diferit."
  },
  {
    "id": "ALI-042",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Echivalență cașcaval = 700 ml lapte",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Anexei 4, cât cașcaval e echivalent cu 1 litru de lapte pentru calculul rației zilnice?",
    "options": [
      {
        "id": "A",
        "text": "200 g."
      },
      {
        "id": "B",
        "text": "143 g."
      },
      {
        "id": "C",
        "text": "70 g."
      },
      {
        "id": "D",
        "text": "350 g."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4, Echivalențe: \"100 g cașcaval = 700 ml lapte.\" → 1000 ml = (1000/700) × 100 = 143 g cașcaval.",
    "tooltipCorrect": "100 g cașcaval = 700 ml lapte. Proporție directă. Administrator calcul echivalențe pt diversificare."
  },
  {
    "id": "ALI-043",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Echivalență mezeluri în carne",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Anexei 4, 100 g mezeluri ce cantitate de carne crudă echivalează în rație?",
    "options": [
      {
        "id": "A",
        "text": "100 g."
      },
      {
        "id": "B",
        "text": "80 g."
      },
      {
        "id": "C",
        "text": "125 g."
      },
      {
        "id": "D",
        "text": "150 g."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4: \"100 g mezeluri = 125 g carne.\" Mezelurile sunt concentrate (deshidratate), deci mai puțin volum e echivalent cu mai mult în carne proaspătă.",
    "tooltipCorrect": "Mezeluri concentr: 100 g mezeluri = 125 g carne. Administrator ajustează rații cu echivalențele oficiale."
  },
  {
    "id": "ALI-044",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Lapte praf integral 100 g echiv. cu cât lapte proaspăt",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Anexei 4, 100 g lapte praf integral echivalează cât ml de lapte proaspăt?",
    "options": [
      {
        "id": "A",
        "text": "400 ml."
      },
      {
        "id": "B",
        "text": "1000 ml."
      },
      {
        "id": "C",
        "text": "200 ml."
      },
      {
        "id": "D",
        "text": "800 ml."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4, Echivalențe: \"100 g lapte praf integral = 800 ml lapte proaspăt.\"",
    "tooltipCorrect": "Lapte praf = concentr. 100 g praf = 800 ml proaspăt. Administrator reconstituie și calculează rații."
  },
  {
    "id": "ALI-045",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Fructe deshidratate și reîncorporare água",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "100 g fructe deshidratate (în rație) = cât fructe crude ar trebui mâncare copilul?",
    "options": [
      {
        "id": "A",
        "text": "400 g."
      },
      {
        "id": "B",
        "text": "150 g."
      },
      {
        "id": "C",
        "text": "300 g."
      },
      {
        "id": "D",
        "text": "200 g."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4: \"100 g fructe deshidratate = 400 g fructe crude.\"",
    "tooltipCorrect": "Deshidrare = concentrare; 100 g deshidratate = 400 g crude. Administrator compensează cu salate crudite și fructe proaspete."
  },
  {
    "id": "ALI-046",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Compot în echiv. zahăr și conținut energetic",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Anexei 4, 100 g compot echivalează cât grame de zahăr în calcul rație?",
    "options": [
      {
        "id": "A",
        "text": "25 g."
      },
      {
        "id": "B",
        "text": "15 g."
      },
      {
        "id": "C",
        "text": "40 g."
      },
      {
        "id": "D",
        "text": "10 g."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4: \"100 g compot = 15 g zahăr.\"",
    "tooltipCorrect": "Compot = conservă; 100 ml compot = 15 g zahăr in total daily budget. Administrator limita compot și preferă fructe proaspete."
  },
  {
    "id": "ALI-047",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Bomboane și conținut zahăr în echivalență",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Anexei 4 a Ordinului 1563/2008, cât grame de zahăr conțin 100 grame de bomboane în echivalență pentru calcul rații?",
    "options": [
      {
        "id": "A",
        "text": "80 g."
      },
      {
        "id": "B",
        "text": "70 g."
      },
      {
        "id": "C",
        "text": "90 g."
      },
      {
        "id": "D",
        "text": "100 g."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4: \"Bomboane = 90 g zahăr (per 100 g).\"",
    "tooltipCorrect": "Bomboane = 90% zahăr. Interzise total in lista alimente nerecomandate. NU se uses in meniuri."
  },
  {
    "id": "ALI-048",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Nectare de fructe și conținut zahăr",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Anexei 4, cât grame de zahăr conține 100 ml de nectare de fructe?",
    "options": [
      {
        "id": "A",
        "text": "20 g."
      },
      {
        "id": "B",
        "text": "50 g."
      },
      {
        "id": "C",
        "text": "15 g."
      },
      {
        "id": "D",
        "text": "30 g."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4: \"Nectar = 30 g zahăr (per 100 ml).\" Clasificat ca băutură; interzis la copii.",
    "tooltipCorrect": "Nectare = băutură, interzisă. 100 ml = 30 g zahăr. Administrator NU acceptă nici în ofertă."
  },
  {
    "id": "ALI-049",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Miere și conținut zahăr",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Anexei 4, cât grame de zahăr conține 100 grame de miere naturală?",
    "options": [
      {
        "id": "A",
        "text": "80 g."
      },
      {
        "id": "B",
        "text": "70 g."
      },
      {
        "id": "C",
        "text": "50 g."
      },
      {
        "id": "D",
        "text": "95 g."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4: \"Miere = 80 g zahăr (per 100 g).\"",
    "tooltipCorrect": "Miere = 80% zahăr natural. Se evită miere la copii <1 an (risc botulism). Pentru mai mari, cu moderație."
  },
  {
    "id": "ALI-050",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Ciocolată și conținut zahăr + grăsimi vegetale",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Anexei 4, ciocolată conține cât g zahăr și cât g grăsimi vegetale per 100 g?",
    "options": [
      {
        "id": "A",
        "text": "30 zahăr, 15 grăsimi."
      },
      {
        "id": "B",
        "text": "50 zahăr, 30 grăsimi."
      },
      {
        "id": "C",
        "text": "70 zahăr, 50 grăsimi."
      },
      {
        "id": "D",
        "text": "90 zahăr, 70 grăsimi."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4: \"Ciocolată = 50 g zahăr + 30 g grăsime vegetală (per 100 g).\"",
    "tooltipCorrect": "Ciocolată = 50% zahăr + 30% grăsimi. Dubla nerespectare; interzisă in lista alimente nerecomandate."
  },
  {
    "id": "ALI-051",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Cartofi prăjiți și calorii/grăsimi",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Cartofi prăjiți sunt clasificați în tabelul 2 din Anexa 4 (valoare calorică) ca având ce nivel caloric?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, calorii scăzute (5-60)."
      },
      {
        "id": "B",
        "text": "Calorii crescute (120-300)."
      },
      {
        "id": "C",
        "text": "Calorii foarte crescute (>300)."
      },
      {
        "id": "D",
        "text": "Calorii moderate (60-120)."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4, Tabel 2: \"Cartofi prăjiți = foarte crescută peste 300 kcal/100 g.\" Interzis din cauza calorii + grăsimi.",
    "tooltipCorrect": "Cartofi prăjiți = >300 kcal, grăsimi >20 g. Dubla nerespectare. Administrator cere cartofi coapți/fierți."
  },
  {
    "id": "ALI-052",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Sosuri - maioneză, ketchup și conținut",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Maioneză se clasifică pe nivelul de calorii conform tabelului 2 din Anexa 4 cum se încadrează?",
    "options": [
      {
        "id": "A",
        "text": "Crescute (120-300)."
      },
      {
        "id": "B",
        "text": "Conform procedurii, moderate (60-120)."
      },
      {
        "id": "C",
        "text": "Potrivit normei, scăzute (5-60)."
      },
      {
        "id": "D",
        "text": "Foarte crescute (>300)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4, Tabel 2: \"Maioneză = foarte crescută (>300 kcal/100 g).\" PLUS interzisă explicit în Anexa 2 ca \"cremă cu ouă\".",
    "tooltipCorrect": "Maioneză = interzisă dublu: calorii >300 + cremă cu ouă. Administrator NU acceptă nici în rețete."
  },
  {
    "id": "ALI-053",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Lapte degresat vs lapte integral caloric",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "În tabelul 2 din Anexa 4, laptele degresat e clasificat ca având ce calorii?",
    "options": [
      {
        "id": "A",
        "text": "Scăzute (5-60 kcal)."
      },
      {
        "id": "B",
        "text": "Foarte crescute (>300 kcal)."
      },
      {
        "id": "C",
        "text": "Moderate (60-120 kcal)."
      },
      {
        "id": "D",
        "text": "Crescute (120-300 kcal)."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4, Tabel 2: \"Lapte degresat = scăzută (5-60 kcal/100 g).\"",
    "tooltipCorrect": "Lapte degresat = calorii mici, sănătos. Lapte integral = calorii mai mari dar acceptabil pe nutrienți."
  },
  {
    "id": "ALI-054",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Brânzeturi sărate și pragul sare",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Brânzeturi sărate sunt exemplo din Anexa 1 la pragul sare. Care e pragul?",
    "options": [
      {
        "id": "A",
        "text": ">2 g sare/100 g."
      },
      {
        "id": "B",
        "text": ">1,5 g sare/100 g."
      },
      {
        "id": "C",
        "text": ">0,8 g sare/100 g."
      },
      {
        "id": "D",
        "text": ">1,2 g sare/100 g."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 1: \"Sare: peste 1,5 g sare/100 g (SAU peste 0,6 g sodiu).\" Brânzurile sărate sunt exemple.",
    "tooltipCorrect": "Pragul sare = >1,5 g/100 g. Brânzuri normale 0,8-1,4 g = acceptabile. Brânzuri sărate >1,5 = interzise."
  },
  {
    "id": "ALI-055",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Chipsuri ca exemplu nerecomandat multiplu",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Chipsuri sunt exemple explicit în Anexa 1 la care criterii de nerecomandat?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, sare și calorii și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza dispoziției, sare, calorii și ambalaj (neambalate vrac)."
      },
      {
        "id": "C",
        "text": "Sare, grăsimi și calorii; neambalate vrac; neetichetate."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, doar sare."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1 listează: chipsuri la sare (>1,5 g sare), grăsimi (>20 g), calorii (>300 kcal), și adesea vrac/neetichetate. Multipli criterii nerespecta.",
    "tooltipCorrect": "Chipsuri = multiplu nerespectare (sare, grăsimi, calorii). Administrator refuză complet."
  },
  {
    "id": "ALI-056",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Biscuiți sărați și praguri",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Biscuiți sărați etichetă: 12 g zahăr, 18 g grăsimi (5 g saturate), 1,8 g sare. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii, acceptă; zahărul și grăsimile sunt sub praguri."
      },
      {
        "id": "B",
        "text": "Conform procedurii, refuză; biscuiții sunt interzisi total."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, acceptă, dar distribuie moderat."
      },
      {
        "id": "D",
        "text": "Refuză; sarea 1,8 g depășește pragul 1,5 g. De-a lungul, multipli factori."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 1: sare >1,5 g/100 g. La 1,8 g sare = depășire. Chiar dacă zahăr și grăsimi sunt OK, sarea = nerecomandat. Verificare cumulativă.",
    "tooltipCorrect": "Multipli criterii; un singur nerespectă = refuză. Sarea 1,8 > 1,5 = depășire."
  },
  {
    "id": "ALI-057",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Sticksuri și sare/calorii",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Sticksuri etichetă: 1,9 g sare/100 g, 250 kcal/baston (porție 40 g). Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Refuză; sarea 1,9 g depășește pragul 1,5 g/100 g."
      },
      {
        "id": "B",
        "text": "Acceptă; calorii pe porție sunt sub 300 kcal."
      },
      {
        "id": "C",
        "text": "Potrivit normei, refuză; sticksurile sunt alimente vrac."
      },
      {
        "id": "D",
        "text": "Conform procedurii, acceptă, dar limita la 1 baston/zi."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 1: sare >1,5 g/100 g. La 1,9 g sare = depășire. Calorii pe porție sunt separate de calorii pe unitate vânzare (baston 250 kcal < 300).",
    "tooltipCorrect": "Sare >1,5 = nerecomandat. Chiar dacă calorii porție OK, sarea depășite = refuză."
  },
  {
    "id": "ALI-058",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Covrigei și sare",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "La recepție covrigei etichetă: 2,2 g sare/100 g. Ambalaj OK. Ce decide administratorul?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii, acceptă, dar 1 covrig pe săptămână."
      },
      {
        "id": "B",
        "text": "Refuză; sare 2,2 g depășește pragul 1,5 g/100 g."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, refuză; sunt neambalați."
      },
      {
        "id": "D",
        "text": "Acceptă; covrigei sunt alimente tradiționale."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 1: sare >1,5 g/100 g. La 2,2 g sare = nerecomandat. Tradițional nu substituie reglementare.",
    "tooltipCorrect": "Covrigei sărați = sare mare. 2,2 > 1,5 = refuză. Administrator cere opțiuni fără sare."
  },
  {
    "id": "ALI-059",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Mezeluri grase și grăsimi",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "La recepție salamă etichetă: 35 g grăsimi/100 g (22 g saturate), ambalaj OK. Ce hotărâre ia administratorul?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, acceptă; mezelurile sunt proteice."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, refuză; sunt mezeluri porcine."
      },
      {
        "id": "C",
        "text": "Refuză; grăsimi 35 g depășesc 20 g și saturate 22 g depășesc 5 g. Dubla nerespectare."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, acceptă, dar în porții mici."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1: grăsimi >20 g ȘI (saturate >5 g SAU trans >1 g). La 35 g grăsimi + 22 g saturate = dubla nerespectare.",
    "tooltipCorrect": "Salamă grasă = multiplu nerespectare. Administrator cere mezeluri magre (<20 g grăsimi, <5 g saturate)."
  },
  {
    "id": "ALI-060",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Brânzeturi calorice și grăsimi",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "La recepție brânză topită etichetă: 24 g grăsimi/100 g (14 g saturate), termen valabil. Ce decide?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, acceptă, dar în porții mici pe pâine."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, acceptă; brânza e calcică."
      },
      {
        "id": "C",
        "text": "Pe baza dispoziției, refuză; brânzele topite sunt interzise."
      },
      {
        "id": "D",
        "text": "Refuză; grăsimi 24 g depășesc 20 g și saturate 14 g depășesc 5 g. Nerecomandat."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 1: grăsimi >20 g ȘI saturate >5 g. La 24 g grăsimi + 14 g saturate = nerecomandat.",
    "tooltipCorrect": "Brânza topită = grăsimi mari. Administrator cere brânzeturi naturale magre (<20 g grăsimi)."
  },
  {
    "id": "ALI-061",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Pizza și hamburger - multipli criterii",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Pizza și hamburger sunt menționați în Anexa 1. La ce criterii se referă?",
    "options": [
      {
        "id": "A",
        "text": "Grăsimi (>20 g), potențial trans; calorii (>300 kcal/porție); sare (din sos); neambalate/vrac adesea."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, grăsimi, sare și calorii; slab ambalate urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, grăsimi și calorii și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, doar zahăr ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 1 listează pizza și hamburger ca exemple de produse cu grăsimi >20 g, acizi grași trans, calorii >300 kcal, sare (din sosuri/condimente).",
    "tooltipCorrect": "Pizza/hamburger = nerecomandat cumulativ. Administrator evită complet."
  },
  {
    "id": "ALI-062",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Alune și semințe sărate",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Alune sărate etichetă: 2 g sare/100 g, 600 kcal/100 g. Ambalaj OK. Acceptă administratorul lotul?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, acceptă, dar 1 mână pe zi și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Refuză; sare 2 g depășește 1,5 g; calorii 600 kcal depășesc 300 kcal. Dubla nerespectare. Doar alune nesărate în meniu."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, refuză; sunt alergizante ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, acceptă; sunt nutrient densi urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 1: sare >1,5 g + calorii >300 kcal/unitate = dubla nerespectare. Administrator acceptă numai alune/semințe NESĂRATE.",
    "tooltipCorrect": "Alune sărate = sare + calorii depășite. Nesărate, în porții mici = acceptabile."
  },
  {
    "id": "ALI-063",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Margarină și acizi grași trans",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Margarină etichetă: 80 g grăsimi/100 g (0,5 g trans). Ambalaj OK. Ce hotărâre?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, acceptă; acizi trans 0,5 g sunt sub pragul 1 g."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, refuză; 80 g grăsimi depășesc masiv pragul 20 g."
      },
      {
        "id": "C",
        "text": "Refuză; grăsimi >20 g ȘI trans 0,5 g. Chiar dacă trans < 1 g, grăsimile totale = depășire."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, acceptă cu unt în proporție egală."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1: grăsimi >20 g SAU (saturate >5 g SAU trans >1 g). La 80 g grăsimi totale = masiva depășire, indiferent de trans.",
    "tooltipCorrect": "Margarină = grăsimi 80 g. Pragul e >20 g. Refuză. Se recomandă unt natural în mici cantități."
  },
  {
    "id": "ALI-064",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Unt și conținut grăsimi",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Unt etichetă: 82 g grăsimi/100 g (51 g saturate). Ambalaj OK. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, refuză; sunt numai grăsimi."
      },
      {
        "id": "B",
        "text": "În aplicarea regulii, acceptă în porții sub 10 g pe copil/zi."
      },
      {
        "id": "C",
        "text": "Potrivit normei, acceptă; untul e ingredient tradițional."
      },
      {
        "id": "D",
        "text": "Refuză; 82 g depășesc 20 g și saturate 51 g depășesc 5 g."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 1: grăsimi >20 g ȘI saturate >5 g. Untul pur = aproape 100% grăsimi, dar se folosește în mici cantități (10-20 g/zi per copil). În rație măsurat pe echivalențe, nu per 100 g.",
    "tooltipCorrect": "Unt pur = 82% grăsimi. În rație: 20-30 g/zi (echivalență), nu 100 g. Administrator măsoară porții mici."
  },
  {
    "id": "ALI-065",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Smântână și grăsimi",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Smântână 30% grăsime etichetă: 30 g grăsimi/100 g. Ambalaj OK. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Refuză; 30 g depășesc 20 g."
      },
      {
        "id": "B",
        "text": "Acceptă; e ingredient."
      },
      {
        "id": "C",
        "text": "Acceptă în rații <5 g per copil."
      },
      {
        "id": "D",
        "text": "Refuză; e interzisă explicit."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 1: grăsimi >20 g. Smântână 30% = 30 g grăsimi/100 g = depășire. În rație: echivalență unt, mici cantități (10-20 ml smântână).",
    "tooltipCorrect": "Smântână 30% = grăsimi 30 g. Depășire. Se folosește rareori, în porții mici <5 ml."
  },
  {
    "id": "ALI-066",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Înghețată și calorii/grăsimi",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Înghețată etichetă: 12 g grăsimi/100 g, 200 kcal/100 g. Ambalaj OK. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, refuză; înghețata e interzisă."
      },
      {
        "id": "B",
        "text": "Acceptă; grăsimi 12 g < 20 g, calorii 200 kcal < 300 kcal."
      },
      {
        "id": "C",
        "text": "Conform procedurii, acceptă; sunt sub praguri."
      },
      {
        "id": "D",
        "text": "Potrivit normei, acceptă, dar vara doar și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Annexa 4: înghețata clasificată \"calorii crescute (120-300)\". 12 g grăsimi + 200 kcal/100 g = sub praguri. Acceptabilă în meniu vara, ca desert.",
    "tooltipCorrect": "Înghețată 200 kcal < 300; grăsimi 12 g < 20 g = acceptabilă moderat. Administrator oferi ca snack/desert ocazional."
  },
  {
    "id": "ALI-067",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Prăjituri și grăsimi/zahăr/calorii",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Prăjitură etichetă: 22 g zahăr, 18 g grăsimi, 350 kcal/porție (100 g). Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispoziției, acceptă; prăjiturile sunt corespunzătoare băieților activi."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, acceptă; zahărul e sub 15 g... ups, 22 g!"
      },
      {
        "id": "C",
        "text": "Refuză; zahăr 22 g depășește 15 g; calorii 350 kcal depășesc 300 kcal. Multipli criterii."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, acceptă, dar o oferă pe anumite zile."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1: zahăr >15 g ȘI calorii >300 kcal = multipli nerespectare. Prăjiturile tipice nu se acceptă.",
    "tooltipCorrect": "Prăjitură = zahăr + calorii depășite. Refuză. Oferă tort fait maison cu zahăr redus ocazional."
  },
  {
    "id": "ALI-068",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Industrie carne prăjită - hamburgeri",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 1",
    "type": "single",
    "question": "Hamburger etichetă: 16 g grăsimi (4 g trans), 270 kcal/unitate. Acceptă?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, acceptă cu salată ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, acceptă, dar 1 hamburger pe lună și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, acceptă; sunt sub praguri urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Refuză; grăsimi 16 g OK, trans 4 g depășesc 1 g pragul. Calorii 270 kcal OK. Dar FORMA + metoda (prăjit) = nerecomandat. Hamburgerul e exemplu Anexei 1."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 1: hamburger este explicit exemplu la grăsimi/trans. Trans 4 g > 1 g = nerecomandat. Chiar dacă cifrele ies aproape, hamburgerul pe lista exemple = refuză.",
    "tooltipCorrect": "Hamburger = lista explicite nerecomandate. Acizi trans mari (4 g). Refuză complet."
  },
  {
    "id": "ALI-069",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Pui/pește prăjit vs grilă",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu: pui prăjit la cină. Administrator sesizează. Ce metoda gătire cere?",
    "options": [
      {
        "id": "A",
        "text": "Cere grilă sau copt la cuptor. Prăjit = grăsimi >20 g, calorii >300 kcal. Anexa 2 nu prescrie prăjit."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, acceptă prăjit, dar o echilibrează cu salată."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, acceptă prăjit; copiii îl iubesc ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, cere fierbere și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2: metoda gătire sănătoasă = fierbere, cuptor, grilă. Prăjit = grăsimi excesive. Administrator refuză și cere alternativă.",
    "tooltipCorrect": "Prăjit = nerecomandat. Grilă/cuptor/fierbere = sănătos. Administrator cere metoda în meniu."
  },
  {
    "id": "ALI-070",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Carne roșie în piramida alimentară și limitări",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Carnea roșie în piramida alimentară din Anexa 5 se consumă cum de frequent?",
    "options": [
      {
        "id": "A",
        "text": "De 3-4 ori pe săptămână."
      },
      {
        "id": "B",
        "text": "Ocazional."
      },
      {
        "id": "C",
        "text": "Conform procedurii, zilnic."
      },
      {
        "id": "D",
        "text": "Interzisă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 5: \"Carnea roșie se consumă ocazional.\" Piramida recomandă mai mult pui/pește/proteine vegetale.",
    "tooltipCorrect": "Carne roșie = ocazional (1-2/săptămână). Pui, pești, leguminoase = mai frecvent."
  },
  {
    "id": "ALI-071",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Fier - necesitate și surse",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Anexa 2 preșcolari cere aport zilnic de fier cât mg, și care sunt sursele?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, 5 mg din iaurt și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, 20 mg din vitamina sintetică urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "8-15 mg din carne de vacă/pasăre/porc, fasole, alune, cereale integrale, vegetale-frunze verzi."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, nici fier, copiii nu au nevoie și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2, cap. 5: \"Fier 8–15 mg/zi (carne de vacă/pasăre/porc, fasole, alune, cereale integrale/fortificate, vegetale cu frunze verzi).\"",
    "tooltipCorrect": "Fier = 8-15 mg/zi. Carne roșie, leguminoase, cereale, vegetale verzi. Administrator diversifică meniu."
  },
  {
    "id": "ALI-072",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Proteine - necesitate și procent calorii",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Proteine totale ce procent din valoarea calorică zilnică trebuie conform Anexei 3 la toate grupele de vârstă?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, 5-8%."
      },
      {
        "id": "B",
        "text": "25-30%."
      },
      {
        "id": "C",
        "text": "35-40%."
      },
      {
        "id": "D",
        "text": "14-16%."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 3: \"Proteine totale: 14–16% din valoarea calorică (toate grupele).\"",
    "tooltipCorrect": "Proteine = 14-16% calorii/zi. Carne, pui, pești, ouă, lactate, leguminoase."
  },
  {
    "id": "ALI-073",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Lipide - procent pe vârstă antepreșcolar",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Proteine totale ce procent din valoarea calorică trebuie conform Anexei 3?",
    "options": [
      {
        "id": "A",
        "text": "35-40%."
      },
      {
        "id": "B",
        "text": "25-30%."
      },
      {
        "id": "C",
        "text": "45-50%."
      },
      {
        "id": "D",
        "text": "15-20%."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 3: \"Lipide: 35–40% (1–3 ani).\"",
    "tooltipCorrect": "Lipide antepreșcolar = 35-40% calorii. Preșcolar = 30-35%. Școlari = 25-30%."
  },
  {
    "id": "ALI-074",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Glucide - procent pe vârstă preșcolar",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Glucide ce procent din valoare calorică la copiii 4-6 ani conform Anexei 3 din piramida alimentară?",
    "options": [
      {
        "id": "A",
        "text": "35-40%."
      },
      {
        "id": "B",
        "text": "50-55%."
      },
      {
        "id": "C",
        "text": "55-60%."
      },
      {
        "id": "D",
        "text": "40-50%."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 3: \"Glucide: 50–55% (4–6 ani).\"",
    "tooltipCorrect": "Glucide preșcolar = 50-55% calorii. Antepreșcolar = 45-53%. Școlari = 55-60%."
  },
  {
    "id": "ALI-075",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Calciu rație antepreșcolari",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Calciu pe zi copiii 1-3 ani conform Anexei 3 (mg de calciu zilnic) din rația recomandată?",
    "options": [
      {
        "id": "A",
        "text": "800 mg."
      },
      {
        "id": "B",
        "text": "1100 mg."
      },
      {
        "id": "C",
        "text": "900 mg."
      },
      {
        "id": "D",
        "text": "700 mg."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 3: \"Calciu 1–3 ani: 900 mg/zi.\"",
    "tooltipCorrect": "Calciu antepreșcolar = 900 mg/zi. Preșcolar = 900 mg. Școlari = 1100-1200 mg."
  },
  {
    "id": "ALI-076",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Iod rație antepreșcolari",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Iod pe zi copiii 1-3 ani conform Anexei 3 (micrograme zilnic), necesar zilnic?",
    "options": [
      {
        "id": "A",
        "text": "40 mcg."
      },
      {
        "id": "B",
        "text": "100 mcg."
      },
      {
        "id": "C",
        "text": "80 mcg."
      },
      {
        "id": "D",
        "text": "60 mcg."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 3: \"Iod 1–3 ani: 60 mcg/zi.\"",
    "tooltipCorrect": "Iod antepreșcolar = 60 mcg/zi. Preșcolar = 80 mcg. Școlari = 100+ mcg."
  },
  {
    "id": "ALI-077",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Untura vs unt în antepreșcolar",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Ce zice Anexa 4 a Ordinului 1563 despre untura în rații antepreșcolari?",
    "options": [
      {
        "id": "A",
        "text": "NU se recomandă untura; se folosesc unt sau smântână."
      },
      {
        "id": "B",
        "text": "Pe baza dispoziției, untura e opțională."
      },
      {
        "id": "C",
        "text": "Potrivit normei, untura e interzisă total."
      },
      {
        "id": "D",
        "text": "Conform procedurii, se recomandă untura."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4, art. 3: \"La antepreșcolari și preșcolari NU se recomandă untura, ci numai untul sau smântâna.\"",
    "tooltipCorrect": "Antepreșcolar = unt/smântână. Preșcolar = unt/smântână. Untura = NU."
  },
  {
    "id": "ALI-078",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Mărime porție carne pe bază piramidă",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Piramida alimentară din Anexa 5 - mărime porție carne slabă fiartă/grătar?",
    "options": [
      {
        "id": "A",
        "text": "60 g."
      },
      {
        "id": "B",
        "text": "90 g."
      },
      {
        "id": "C",
        "text": "120 g."
      },
      {
        "id": "D",
        "text": "75 g."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 5: \"Carne slabă fiartă/grătar = 90 g (porție).\"",
    "tooltipCorrect": "Porție carne = 90 g. Administrator măsoară și dozează conform piramidei."
  },
  {
    "id": "ALI-079",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Mărime porție cașcaval pe bază piramidă",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Piramida alimentară din Anexa 5 - mărime porție cașcaval în grame per copil?",
    "options": [
      {
        "id": "A",
        "text": "25 g."
      },
      {
        "id": "B",
        "text": "20 g."
      },
      {
        "id": "C",
        "text": "30 g."
      },
      {
        "id": "D",
        "text": "50 g."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 5: \"Cașcaval = 30 g (porție).\"",
    "tooltipCorrect": "Porție cașcaval = 30 g. Administrator controlează cu cântar alimentar."
  },
  {
    "id": "ALI-080",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Mărime porție mezeluri pe bază piramidă",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Piramida alimentară din Anexa 5 a Ordinului 1563/2008 - mărime porție mezeluri în grame?",
    "options": [
      {
        "id": "A",
        "text": "75 g."
      },
      {
        "id": "B",
        "text": "30 g."
      },
      {
        "id": "C",
        "text": "40 g."
      },
      {
        "id": "D",
        "text": "50 g."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 5: \"Mezeluri = 50 g (porție).\" Mezeluri sunt concentrate, deci porție mai mica decât carne proaspătă.",
    "tooltipCorrect": "Porție mezeluri = 50 g. Administrator dozează conform tabelei."
  },
  {
    "id": "ALI-081",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - tocături prelucrare termică",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniul aprobat pentru prânz în grupa preșcolari (4-6 ani) include chifteluțe din carne tocată pregătite prin prăjire în baie de ulei. Administratorul care verifică meniul observă metoda și procedează cum? Pe ce regulă din Anexa 2 se bazează decizia?",
    "options": [
      {
        "id": "A",
        "text": "Sesizează nerespectarea Anexei 2: tocăturile sunt acceptate NUMAI prin fierbere sau la cuptor, NU prin prăjire; cere înlocuirea/prelucrarea corespunzătoare."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, aprobă, deoarece carnea tocată este permisă indiferent de metoda de preparare."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, aprobă dacă se adaugă maioneză, pentru uniformitate și imbunătățire senzorială."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, aprobă doar dacă porția nu depășește 200 kcal pe unitate și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008): tocăturile sunt acceptate NUMAI prelucrate termic prin fierbere sau la cuptor; prăjirea NU este admisă pentru grupa preșcolari. De asemenea, Anexa 2 interzice oricând maionezele și cremele cu ouă + frișcă, indiferent de anotimp.",
    "tooltipCorrect": "Tocături: doar fierte sau la cuptor. Maioneză și creme cu ouă + frișcă: interzise oricând. Ouă: omletă la cuptor, NU ochiuri."
  },
  {
    "id": "ALI-082",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - combinație meniu aceeași grupă",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "La micul dejun pentru preșcolari se propune: ceai cu zahăr + pâine cu gem. Ce observă administratorul conform principiilor Anexei 2 și de ce aceasta nu este o combinație recomandată?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, refuză deoarece gem-ul conține prea mult zahăr pentru grădiniță, indiferent de alte alimente ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Sesizează că sunt combinate două alimente din aceeași grupă (ambele glucide/carbohidrați din cereale și zahăr); micul dejun trebuie să includă preparate din carne sau derivate lactate, NU numai glucide."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, nu observă nimic problematic; ambele alimente sunt permise și sigure și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, observă că porția de ceai este prea mică (sub 100 ml) și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 4: Se evită asocierea alimentelor din aceeași grupă. La micul dejun, NU ceai cu pâine cu gem, CI pâine cu preparate din carne/derivate lactate (ex. brânză, lapte), sau lapte cu pâine/biscuiți. Gem-ul este permis, dar trebuie asociat cu surse de proteine/derivate lactate.",
    "tooltipCorrect": "Se evită combinații cu două alimente din aceeași grupă. Mic dejun: ceai+pâine cu gem ≠ recomandată. Corect: pâine cu carne/brânză, sau lapte cu pâine cu gem."
  },
  {
    "id": "ALI-083",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - ouă preparare",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniul de luni la prânz pentru grupa 3-6 ani propune ochiuri românești (ouă prăjite în ulei). Administratorul verifică și respinge meniul pe bază Anexei 2. Ce metodă de preparare a ouălor este acceptată conform reglementărilor?",
    "options": [
      {
        "id": "A",
        "text": "Ochiuri românești dacă se prepară în untură, NU în ulei."
      },
      {
        "id": "B",
        "text": "Ouăle coapte în coajă sunt permise, dar nu și ochiurile."
      },
      {
        "id": "C",
        "text": "Omletă la cuptor este singura metodă recomandată."
      },
      {
        "id": "D",
        "text": "Ouăle fierte sunt singura metodă acceptată."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 6: Ouăle sunt acceptate NUMAI ca omletă la cuptor. Ochiurile românești (prăjite în ulei/untură) NU sunt permise. Regula se aplică pentru toate grupele de vârstă în colectivități.",
    "tooltipCorrect": "Ouă: omletă la cuptor NUMAI. Interzise: ochiuri românești, ouă prăjite, ouă coapte în coajă servite ca atare."
  },
  {
    "id": "ALI-084",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - maionezi interzise",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "În luna martie, bucătareasă deschide un borcan de maioneză pentru pregătire salată. Administratorul intervine. Ce prevedere din Anexa 2 justifică refuzul maionezei în meniu, indiferent de anotimp?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, maioneza este permisă, dar numai în porții sub 10 g pe copil."
      },
      {
        "id": "B",
        "text": "Maioneza nu e interzisă, dar trebuie depozitată la temperatură sub 4°C permanent."
      },
      {
        "id": "C",
        "text": "Maioneza este permisă doar în lunile reci (noiembrie-februarie), când riscul microbial e mai mic."
      },
      {
        "id": "D",
        "text": "Maioneza este interzisă oricând în colectivități de preșcolari și școlari, conform Anexei 2."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 8: Sunt interzise maionezele și cremele cu ouă și frișcă, indiferent de anotimp. Aceasta este o regulă de protecție a sănătății copiilor, fără excepții sezonale.",
    "tooltipCorrect": "Maioneză și creme cu ouă + frișcă: interzise oricând, indiferent de anotimp sau temperatură."
  },
  {
    "id": "ALI-085",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - reguli cină efort digestiv",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniul de cină pentru grupa preșcolari prevede: iahnie de fasole + iaurt deshis + compot. Administratorul sesizează o problemă conform Anexei 2. Ce spune regula și de ce această combinație e neadecvată la cină?",
    "options": [
      {
        "id": "A",
        "text": "La cină se evită mâncărurile cu efort digestiv puternic și combinații nefavorabile; iahnia de fasole + iaurt + compot sunt o combinație care poate cauza inconfort gastric la somn."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, porția de fasole e prea mică; trebuie dublată pentru a asigura fier suficient ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, compotul nu trebuie servit după iaurt; trebuie servit întâi, apoi iaurt urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, iahnia de fasole nu conține proteine suficiente dacă nu se adaugă carne tocată și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 5: La cină se evită mâncărurile cu efort digestiv puternic și combinații cu efecte digestive nefavorabile (ex. iahnie fasole + iaurt/compot). Această combinație poate afecta digestia și somnul copiilor. Cina trebuie mai ușoară și mai ușor digerabilă.",
    "tooltipCorrect": "Cină: evitați efort digestiv puternic. Iahnie fasole + iaurt + compot = combinație nefavorabilă pentru seara."
  },
  {
    "id": "ALI-086",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - vitamine din crudități",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Administratorul revizuiește meniul pe o săptămână și observă că salate din crudități lipsesc complet. Ce obligație din Anexa 2 încalcă meniul și cum trebuie completat?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, nu e problemă; copiii primesc vitamine din legume gătite în supe și ciorbe."
      },
      {
        "id": "B",
        "text": "Meniul trebuie îmbogățit cu vitamine/minerale prin salate din crudități și legume-frunze în supe/ciorbe; salata crudă e recomandată zilnic."
      },
      {
        "id": "C",
        "text": "Vitaminele se pot compensa prin suplimente; meniurile fără crudități sunt acceptabile dacă se ofera apă cu vitamine adăugate."
      },
      {
        "id": "D",
        "text": "Legumele coapte în ciorbe conțin aceeași cantitate de vitamine ca și crudităților; salata crudă nu e obligatorie."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 7: Meniul se îmbogățește cu vitamine și minerale prin salate din crudități și legume-frunze în supe/ciorbe. Vitamina C și alți nutrienți sunt mai bine reținuți în legume crudă; legumele fiarte pierd parte din conținut.",
    "tooltipCorrect": "Meniu trebuie completat cu salate din crudități și legume-frunze în supe/ciorbe pentru aport optim de vitamine și minerale."
  },
  {
    "id": "ALI-087",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - preșcolar cantitate practică",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Pentru micul dejun grupa preșcolari (5 ani), administratorul calculeaza porția de carne: 5 linguri (1 per an de vârstă). Ce observă și corectează din perspectiva recomandărilor Anexei 2?",
    "options": [
      {
        "id": "A",
        "text": "Porția nu conteaza; se serveste o porție standard egală pentru toți preșcolarii, indiferent de vârstă."
      },
      {
        "id": "B",
        "text": "Porția e prea mare; pentru preșcolar 5 ani, o lingură nu înseamnă 5 linguri, ci o lingură per an la fiecare grup (carne e 1 lingură, nu sunt 5 linguri)."
      },
      {
        "id": "C",
        "text": "Porția e corectă conform regulei unei linguri per an de vârstă din fiecare grup alimentar."
      },
      {
        "id": "D",
        "text": "Porția e prea mică; trebuie dublată pentru a asigura proteine suficiente."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula pentru preșcolar: cantitate practică = o lingură din fiecare grup alimentar pentru fiecare an de vârstă. Pentru copil 5 ani: o lingură (1 cm³) din fiecare grup. Pentru micul dejun care include carne: 5 linguri total întreg micul dejun (carne, pâine, brânză, legume, etc.), NU numai carne.",
    "tooltipCorrect": "Preșcolar: 1 lingură per an de vârstă din FIECARE grup, NU 1 lingură total. Pentru 5 ani = cca. 5 linguri total (mix de alimente)."
  },
  {
    "id": "ALI-088",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - calorii 4-6 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Administratorul planifică aprovizionarea pentru grupa 4-6 ani și calculeaza necesarul caloric zilnic. Ce valoare din Anexa 3 trebuie să atingă rația medie zilnică?",
    "options": [
      {
        "id": "A",
        "text": "3100 kcal."
      },
      {
        "id": "B",
        "text": "1300 kcal."
      },
      {
        "id": "C",
        "text": "2400 kcal."
      },
      {
        "id": "D",
        "text": "1800 kcal."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): necesarul zilnic mediu pentru copii 4-6 ani este 1800 kcal. Pentru 1-3 ani: 1300 kcal; 7-10 ani: 2400 kcal; 11-14 băieți: 3100 kcal.",
    "tooltipCorrect": "Calorii zilnice: 1-3 ani = 1300; 4-6 ani = 1800; 7-10 = 2400."
  },
  {
    "id": "ALI-089",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - proteine procent",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Ce procent din valoarea calorică zilnică trebuie să represinte proteinele totale pentru orice grupă de vârstă, conform Anexei 3?",
    "options": [
      {
        "id": "A",
        "text": "14-16%."
      },
      {
        "id": "B",
        "text": "10-12%."
      },
      {
        "id": "C",
        "text": "30-35%."
      },
      {
        "id": "D",
        "text": "20-25%."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): proteinele totale trebuie să reprezinte 14-16% din valoarea calorică pentru toate grupele de vârstă (1-3, 4-6, 7-10, adolescenți).",
    "tooltipCorrect": "Proteine: 14-16% din totalul calorii pentru orice vârstă."
  },
  {
    "id": "ALI-090",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - lipide 7-10 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Ce interval de procent din calorii trebuie să reprezinte lipidele (grăsimile) pentru grupa 7-10 ani, conform Anexei 3?",
    "options": [
      {
        "id": "A",
        "text": "20-25%."
      },
      {
        "id": "B",
        "text": "25-30%."
      },
      {
        "id": "C",
        "text": "35-40%."
      },
      {
        "id": "D",
        "text": "30-35%."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): lipidele: 35-40% (1-3 ani), 30-35% (4-6 ani), 25-30% (școlari/adolescenți, inclusiv 7-10 ani).",
    "tooltipCorrect": "Lipide: 35-40% (1-3), 30-35% (4-6), 25-30% (școlari)."
  },
  {
    "id": "ALI-091",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - glucide 4-6 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Ce interval de procent din valoarea calorică trebuie să aibă glucidele (carbohidrații) pentru grupa 4-6 ani, conform Anexei 3?",
    "options": [
      {
        "id": "A",
        "text": "55-60%."
      },
      {
        "id": "B",
        "text": "60-65%."
      },
      {
        "id": "C",
        "text": "50-55%."
      },
      {
        "id": "D",
        "text": "45-53%."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): glucide: 45-53% (1-3 ani), 50-55% (4-6 ani), 55-60% (școlari).",
    "tooltipCorrect": "Glucide: 45-53% (1-3), 50-55% (4-6), 55-60% (școlari)."
  },
  {
    "id": "ALI-092",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - calciu 4-6 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Ce cantitate zilnică de calciu (în mg) trebuie asigurată pentru grupa 4-6 ani, conform Anexei 3?",
    "options": [
      {
        "id": "A",
        "text": "1200 mg."
      },
      {
        "id": "B",
        "text": "800 mg."
      },
      {
        "id": "C",
        "text": "1100 mg."
      },
      {
        "id": "D",
        "text": "900 mg."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): calciu: 1-3 ani 900 mg, 4-6 ani 900 mg, 7-9 ani 1100 mg, 10-12 ani 1200 mg.",
    "tooltipCorrect": "Calciu: 1-3 = 900; 4-6 = 900; 7-9 = 1100 mg/zi."
  },
  {
    "id": "ALI-093",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - fier 1-3 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Ce cantitate zilnică de fier (în mg) recomandă Anexa 3 pentru grupa 1-3 ani?",
    "options": [
      {
        "id": "A",
        "text": "8 mg."
      },
      {
        "id": "B",
        "text": "6 mg."
      },
      {
        "id": "C",
        "text": "10 mg."
      },
      {
        "id": "D",
        "text": "9 mg."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): fier: 1-3 ani 8 mg, 4-6 ani 9 mg, 7-9 ani 10 mg/zi.",
    "tooltipCorrect": "Fier: 1-3 = 8; 4-6 = 9; 7-9 = 10 mg/zi."
  },
  {
    "id": "ALI-094",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - iod 4-6 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Ce cantitate zilnică de iod (în mcg) recomandă Anexa 3 pentru grupa 4-6 ani?",
    "options": [
      {
        "id": "A",
        "text": "60 mcg."
      },
      {
        "id": "B",
        "text": "80 mcg."
      },
      {
        "id": "C",
        "text": "120 mcg."
      },
      {
        "id": "D",
        "text": "100 mcg."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): iod: 1-3 ani 60 mcg, 4-6 ani 80 mcg/zi.",
    "tooltipCorrect": "Iod: 1-3 = 60; 4-6 = 80 mcg/zi."
  },
  {
    "id": "ALI-095",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - calcul rații perioada",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Administratorul trebuie să calculeze rațiile medii aprovizionate pentru grupa 4-6 ani. Pe ce perioadă și în ce luni trebuie efectuat calculul, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, pe o zi, în orice lună."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, pe o lună continuă, în iunie."
      },
      {
        "id": "C",
        "text": "Pe 10 zile lucrătoare (2 săptămâni consecutive) în februarie, mai sau octombrie."
      },
      {
        "id": "D",
        "text": "Potrivit normei, pe 5 zile lucrătoare în septembrie, pentru anul școlar viitor."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), art.2: calculul rații se face pe baza foilor de alimente scoase zilnic din magazie, pe 10 zile lucrătoare (2 săptămâni consecutive), în februarie, mai sau octombrie; apoi se împarte la numărul total de consumatori.",
    "tooltipCorrect": "Calcul rații: 10 zile lucrătoare (2 săpt. consecutive) în februarie, mai SAU octombrie."
  },
  {
    "id": "ALI-096",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - depășire rație lapte",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Administratorul calculează rația medie de lapte/lactate pentru grupa 7-10 ani și constată 850 ml echivalent lapte zilnic, iar tabelul 1 recomandă 800 ml. Cu câte procente depășește și e acceptabilă conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, depășește cu 6,25%; NU e acceptabilă, trebuie redusă la 800 ml exact."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, E acceptabilă oricât ar fi, lapte NU se poate depăși."
      },
      {
        "id": "C",
        "text": "Pe baza dispoziției, depășește cu 50 ml; trebuie redusă imediat, e prea mult lapte pt vârstă."
      },
      {
        "id": "D",
        "text": "Depășește cu 6,25%; e acceptabilă conform art.3, care permite depășire de până la 20% la lapte/lactate."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), art.3: se permite depășirea rației cu până la 20% la lapte/produse lactate, carne/preparate, pește, legume/fructe. 850 ml vs 800 ml = +6,25%, sub limita de 20%; acceptabil.",
    "tooltipCorrect": "Depășire permitută: până 20% la lapte/lactate, carne, pește, legume/fructe. 6,25% ≤ 20% = acceptabil."
  },
  {
    "id": "ALI-097",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - antepreșcolar untura",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Magazionerul informează administratorul că lotul recent aprovizionat conține 15 kg de untura pentru grupa antepreșcolar (1-3 ani). Ce descoperă administratorul conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "Sesizează nerespectarea Anexei 4, art.3: la antepreșcolari și preșcolari NU se recomandă untura, CI numai untul sau smântâna. Cere înlocuire."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, E acceptabilă, cu condiția ca unturile să provin de la furnizor certificat."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, nu e problemă; untura e o grăsime permisă pentru orice vârstă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, untura e permisă, dar doar în porții sub 10 g pe copil zilnic și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), art.3: la antepreșcolari și preșcolari NU se recomandă untura; se folosește numai unt sau smântână. Untura e grăsime solidă cu conținut ridicat de saturate; copiii mici au digestie mai sensibilă.",
    "tooltipCorrect": "Antepreșcolari/preșcolari: NU untura, CI unt sau smântână NUMAI."
  },
  {
    "id": "ALI-098",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - grădiniță orar prelungit %",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Grădiniță „Pescăruș\" are program prelungit. Administratorul revizuiește rațiile aprovizionate și trebuie să asigure ce procent din rațiile recomandate, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "85-95%."
      },
      {
        "id": "B",
        "text": "75-80%."
      },
      {
        "id": "C",
        "text": "60-70%."
      },
      {
        "id": "D",
        "text": "100% exact."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), art.4: în creșele cu orar de zi și în grădinițele cu orar prelungit, rațiile realizate trebuie să reprezinte 75-80% din rațiile recomandate (întrucât copiii nu petrec 24 ore în colectivitate).",
    "tooltipCorrect": "Grădiniță orar prelungit: 75-80% din rații recomandate."
  },
  {
    "id": "ALI-099",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - echivalență lapte praf",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Aprovizionarea include 200 g de lapte praf integral. Administratorul calculeaza echivalentul în lapte proaspăt pentru a verifica rația. Cu câți ml de lapte proaspăt echivalează, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "800 ml."
      },
      {
        "id": "B",
        "text": "400 ml."
      },
      {
        "id": "C",
        "text": "1600 ml."
      },
      {
        "id": "D",
        "text": "1200 ml."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: 100 g lapte praf integral = 800 ml lapte proaspăt. Deci 200 g = 1600 ml.",
    "tooltipCorrect": "Lapte praf: 100 g = 800 ml lapte proaspăt. 200 g = 1600 ml."
  },
  {
    "id": "ALI-100",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - echivalență cașcaval",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniurile includ cașcaval în loc de lapte. Administratorul verifică echivalența: 100 g cașcaval sunt echivalenți cu câți ml de lapte proaspăt, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "900 ml."
      },
      {
        "id": "B",
        "text": "550 ml."
      },
      {
        "id": "C",
        "text": "350 ml."
      },
      {
        "id": "D",
        "text": "700 ml."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: 100 g cașcaval = 700 ml echivalent lapte proaspăt.",
    "tooltipCorrect": "Cașcaval: 100 g = 700 ml lapte proaspăt (echivalent)."
  },
  {
    "id": "ALI-101",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - echivalență telemea vacă",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include telemea de vacă. Ce echivalență în lapte proaspăt se aplică pentru 100 g telemea de vacă, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "550 ml."
      },
      {
        "id": "B",
        "text": "700 ml."
      },
      {
        "id": "C",
        "text": "350 ml."
      },
      {
        "id": "D",
        "text": "450 ml."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: 100 g telemea de vacă = 550 ml echivalent lapte proaspăt.",
    "tooltipCorrect": "Telemea vacă: 100 g = 550 ml lapte. Telemea oi: 100 g = 450 ml lapte."
  },
  {
    "id": "ALI-102",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - echivalență mezeluri carne",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu includet 100 g mezeluri în loc de carne. Administratorul calculeaza echivalența în carne naturală. Cu câți grame de carne naturală echivalează, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "80 g."
      },
      {
        "id": "B",
        "text": "125 g."
      },
      {
        "id": "C",
        "text": "150 g."
      },
      {
        "id": "D",
        "text": "100 g."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe carne: 100 g mezeluri = 125 g carne naturală.",
    "tooltipCorrect": "Mezeluri: 100 g = 125 g carne. Specialități (șuncă Praga, muschi file): 100 g = 135 g carne."
  },
  {
    "id": "ALI-103",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - echivalență specialități carne",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include 100 g specialitate carne (șuncă de Praga). Ce echivalență în carne naturală aplică administratorul din Anexa 4?",
    "options": [
      {
        "id": "A",
        "text": "100 g carne."
      },
      {
        "id": "B",
        "text": "125 g carne."
      },
      {
        "id": "C",
        "text": "135 g carne."
      },
      {
        "id": "D",
        "text": "150 g carne."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe carne: 100 g specialități (șuncă Praga, muschi file, etc.) = 135 g carne naturală.",
    "tooltipCorrect": "Specialități: 100 g = 135 g carne naturală. Mezeluri: 100 g = 125 g carne."
  },
  {
    "id": "ALI-104",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - echivalență smântână unt",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu prescrie smântână. Administratorul calculeaza ce echivalență în unt se aplică pentru 100 g smântână, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "80 g unt."
      },
      {
        "id": "B",
        "text": "20 g unt."
      },
      {
        "id": "C",
        "text": "60 g unt."
      },
      {
        "id": "D",
        "text": "40 g unt."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: 100 g smântână = 40 g unt.",
    "tooltipCorrect": "Smântână: 100 g = 40 g unt (echivalent)."
  },
  {
    "id": "ALI-105",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - tabel 1 carne 1-3 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de carne/preparate din carne se recomandă pentru grupa 1-3 ani?",
    "options": [
      {
        "id": "A",
        "text": "60 g."
      },
      {
        "id": "B",
        "text": "110 g."
      },
      {
        "id": "C",
        "text": "40 g."
      },
      {
        "id": "D",
        "text": "85 g."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1 rații zilnice: carne/preparate: 60 g (1-3 ani), 85 g (4-6 ani), 110 g (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Carne: 1-3 ani = 60 g; 4-6 = 85 g; 7-10 = 110 g/zi."
  },
  {
    "id": "ALI-106",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - tabel 1 pește 1-3 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de pește se recomandă pentru grupa 1-3 ani?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispoziției, 15 g."
      },
      {
        "id": "B",
        "text": "0 g (NU se recomandă)."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, 40 g."
      },
      {
        "id": "D",
        "text": "Potrivit normei, 25 g."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: pește: 0 g (1-3 ani), 15 g (4-6 ani), 25 g (7-10 ani). Pentru antepreșcolari NU se include pește în rație zilnică recomandată.",
    "tooltipCorrect": "Tabel 1 - Pește: 1-3 ani = 0 g; 4-6 = 15 g; 7-10 = 25 g/zi."
  },
  {
    "id": "ALI-107",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - tabel 1 ouă",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de ouă se recomandă pentru grupa 4-6 ani?",
    "options": [
      {
        "id": "A",
        "text": "40 g."
      },
      {
        "id": "B",
        "text": "20 g."
      },
      {
        "id": "C",
        "text": "35 g."
      },
      {
        "id": "D",
        "text": "30 g."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: ouă: 30 g (1-3 ani), 35 g (4-6 ani), 40 g (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Ouă: 1-3 = 30 g; 4-6 = 35 g; 7-10 = 40 g/zi."
  },
  {
    "id": "ALI-108",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - tabel 1 grăsimi",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de grăsimi totale (unt, ulei, smântână) se recomandă pentru grupa 7-10 ani?",
    "options": [
      {
        "id": "A",
        "text": "25 g."
      },
      {
        "id": "B",
        "text": "50 g."
      },
      {
        "id": "C",
        "text": "32 g."
      },
      {
        "id": "D",
        "text": "40 g."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: grăsimi totale: 25 g (1-3 ani), 32 g (4-6 ani), 40 g (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Grăsimi: 1-3 = 25 g; 4-6 = 32 g; 7-10 = 40 g/zi."
  },
  {
    "id": "ALI-109",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - tabel 1 cartofi",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de cartofi se recomandă pentru grupa 4-6 ani?",
    "options": [
      {
        "id": "A",
        "text": "150 g."
      },
      {
        "id": "B",
        "text": "130 g."
      },
      {
        "id": "C",
        "text": "180 g."
      },
      {
        "id": "D",
        "text": "110 g."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: cartofi: 110 g (1-3 ani), 150 g (4-6 ani), 180 g (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Cartofi: 1-3 = 110 g; 4-6 = 150 g; 7-10 = 180 g/zi."
  },
  {
    "id": "ALI-110",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - tabel 1 fructe",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de fructe se recomandă pentru grupa 7-10 ani?",
    "options": [
      {
        "id": "A",
        "text": "130 g."
      },
      {
        "id": "B",
        "text": "150 g."
      },
      {
        "id": "C",
        "text": "100 g."
      },
      {
        "id": "D",
        "text": "180 g."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: fructe: 100 g (1-3 ani), 130 g (4-6 ani), 150 g (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Fructe: 1-3 = 100 g; 4-6 = 130 g; 7-10 = 150 g/zi."
  },
  {
    "id": "ALI-111",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - tabel 2 valoare calorică",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Administratorul revizuiește gustarea (iaurt cu 40 kcal/100g, porție 150g). În ce categorie din Tabelul 2 (valoare calorică) se situează această gustare?",
    "options": [
      {
        "id": "A",
        "text": "Moderată (60-120 kcal/100g)."
      },
      {
        "id": "B",
        "text": "Conform procedurii, sub 5 kcal."
      },
      {
        "id": "C",
        "text": "Scăzută (5-60 kcal/100g)."
      },
      {
        "id": "D",
        "text": "Crescută (120-300 kcal/100g)."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 2: valoare calorică scăzută = 5-60 kcal/100g. Iaurt degresat 40 kcal/100g se încadrează în această categorie. Porția 150g = 60 kcal, corespunde gustării pentru copii.",
    "tooltipCorrect": "Tabel 2: scăzută = 5-60 kcal/100g (iaurt degresat, lapte, legume, fructe proaspete)."
  },
  {
    "id": "ALI-112",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - compot echivalență zahăr",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include 100 g compot. Administratorul verifică echivalența zahăr din Anexa 4. Compotul conține ce cantitate de zahăr?",
    "options": [
      {
        "id": "A",
        "text": "40 g zahăr."
      },
      {
        "id": "B",
        "text": "30 g zahăr."
      },
      {
        "id": "C",
        "text": "5 g zahăr."
      },
      {
        "id": "D",
        "text": "15 g zahăr."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe zahăr: 100 g compot = 15 g zahăr. Dulceață = 70 g; gem/peltea/marmeladă = 40 g zahăr/100g.",
    "tooltipCorrect": "Compot: 100 g = 15 g zahăr. Gem: 100 g = 40 g zahăr."
  },
  {
    "id": "ALI-113",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - ciocolată echivalență",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include ciocolată. Administratorul calculeaza echivalența din Anexa 4 pentru 100 g ciocolată. Ce echivalență de zahăr și grăsime vegetală se aplică?",
    "options": [
      {
        "id": "A",
        "text": "50 g zahăr + 30 g grăsime vegetală."
      },
      {
        "id": "B",
        "text": "20 g zahăr + 15 g grăsime vegetală."
      },
      {
        "id": "C",
        "text": "30 g zahăr + 25 g grăsime vegetală."
      },
      {
        "id": "D",
        "text": "60 g zahăr + 40 g grăsime vegetală."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: ciocolată 100 g = 50 g zahăr + 30 g grăsime vegetală.",
    "tooltipCorrect": "Ciocolată: 100 g = 50 g zahăr + 30 g grăsime vegetală."
  },
  {
    "id": "ALI-114",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - bomboane echivalență zahăr",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include bomboane. Ce echivalență de zahăr se aplică pentru 100 g bomboane, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "80 g zahăr."
      },
      {
        "id": "B",
        "text": "90 g zahăr."
      },
      {
        "id": "C",
        "text": "50 g zahăr."
      },
      {
        "id": "D",
        "text": "70 g zahăr."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe zahăr: bomboane 100 g = 90 g zahăr.",
    "tooltipCorrect": "Bomboane: 100 g = 90 g zahăr. Miere: 100 g = 80 g zahăr."
  },
  {
    "id": "ALI-115",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - fructe deshidratate echivalență",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include 100 g fructe deshidratate. Administratorul calculeaza echivalența în fructe crude. Cu câte grame de fructe crude echivalează, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "500 g fructe crude."
      },
      {
        "id": "B",
        "text": "200 g fructe crude."
      },
      {
        "id": "C",
        "text": "400 g fructe crude."
      },
      {
        "id": "D",
        "text": "300 g fructe crude."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: fructe deshidratate 100 g = 400 g fructe crude.",
    "tooltipCorrect": "Fructe deshidratate: 100 g = 400 g fructe crude."
  },
  {
    "id": "ALI-116",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - piramidă 1800 kcal legume",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Pentru o rație de 1800 kcal (grupa 4-6 ani), piramida alimentară din Anexa 5 recomandă câte cești de legume zilnic?",
    "options": [
      {
        "id": "A",
        "text": "3 cești."
      },
      {
        "id": "B",
        "text": "2 cești."
      },
      {
        "id": "C",
        "text": "1,5 cești."
      },
      {
        "id": "D",
        "text": "2,5 cești."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008): la 1800 kcal (4-6 ani): cereale 180g, legume 2,5 cești, fructe 1,5 cești, lapte 3 cești, carne 150g.",
    "tooltipCorrect": "1800 kcal: legume 2,5 cești, fructe 1,5, lapte 3 cești, carne 150g, cereale 180g."
  },
  {
    "id": "ALI-117",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - piramidă 2400 kcal carne",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Pentru o rație de 2400 kcal (grupa 11-13 ani), piramida alimentară din Anexa 5 recomandă ce cantitate zilnică de carne?",
    "options": [
      {
        "id": "A",
        "text": "195 g."
      },
      {
        "id": "B",
        "text": "165 g."
      },
      {
        "id": "C",
        "text": "150 g."
      },
      {
        "id": "D",
        "text": "220 g."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008): la 2400 kcal (11-13 ani): cereale 240g, legume 3 cești, fructe 2 cești, lapte 3 cești, carne 195g.",
    "tooltipCorrect": "2400 kcal (11-13 ani): carne 195g, cereale 240g, legume 3 cești, fructe 2, lapte 3 cești."
  },
  {
    "id": "ALI-118",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții pâine cereale",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul calculează porțiile zilnice din grupa cereale. Conform Anexei 5, o porție de pâine/cereale uscate/fierte este definită exact cum?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, 2 felii de pâine sau 1 ceașcă de orez pentru orice fel."
      },
      {
        "id": "B",
        "text": "1 felie de pâine; 1/3 ceașcă cereale uscate; 1/2 ceașcă cereale fierte/orez/paste."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, 100 g pâine sau 1 ceașcă cereale fierte."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, 50 g pâine sau 50 g cereale urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: pâine = 1 felie; cereale uscate = 1/3 ceașcă; cereale fierte/orez/paste = 1/2 ceașcă. Porțiile diferă după stare de preparare.",
    "tooltipCorrect": "Porție pâine: 1 felie. Cereale uscate: 1/3 ceașcă. Cereale fierte: 1/2 ceașcă."
  },
  {
    "id": "ALI-119",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porție lapte iaurt",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul măsoară porțiile de lapte/iaurt degresat pentru gustare. Conform Anexei 5, volumul exact al unei porții este:",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii, 200 ml, echivalent 2 ceașcă."
      },
      {
        "id": "B",
        "text": "În aplicarea regulii, 150 ml, echivalent 1,5 ceașcă."
      },
      {
        "id": "C",
        "text": "100 ml, echivalent 1 ceașcă (notă: 1 ceașcă = 100 ml)."
      },
      {
        "id": "D",
        "text": "Pe baza dispoziției, 50 ml, echivalent 1/2 ceașcă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: lapte degresat/iaurt = 1 ceașcă = 100 ml. Notă: 1 ceașcă = 100 ml pentru toate măsurile din piramidă.",
    "tooltipCorrect": "Porție lapte/iaurt: 1 ceașcă = 100 ml."
  },
  {
    "id": "ALI-120",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porție carne fiartă",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul determină porția corectă de carne la prânz. Conform Anexei 5, o porție de carne slabă fiartă sau grătar este echivalentă cu:",
    "options": [
      {
        "id": "A",
        "text": "60 g."
      },
      {
        "id": "B",
        "text": "120 g."
      },
      {
        "id": "C",
        "text": "75 g."
      },
      {
        "id": "D",
        "text": "90 g."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: carne slabă fiartă/grătar = 90 g. Porția e standardizată pentru a asigura aport proteic corect.",
    "tooltipCorrect": "Porție carne: 90 g (slabă fiartă/grătar)."
  },
  {
    "id": "ALI-121",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porție cașcaval brânzeturi",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Meniu includet brânzeturi în gustare. Conform Anexei 5, o porție de cașcaval solid este echivalentă cu ce greutate?",
    "options": [
      {
        "id": "A",
        "text": "30 g."
      },
      {
        "id": "B",
        "text": "50 g."
      },
      {
        "id": "C",
        "text": "40 g."
      },
      {
        "id": "D",
        "text": "20 g."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: cașcaval = 30 g. Brânza topită = 35 g. Mezeluri = 50 g.",
    "tooltipCorrect": "Porție cașcaval: 30 g. Brânză topită: 35 g. Mezeluri: 50 g."
  },
  {
    "id": "ALI-122",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porție fruct mediu întreg",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul stabilește porțiile de fructe proaspete. Conform Anexei 5, o porție standard de fruct mediu (măr, portocală) este:",
    "options": [
      {
        "id": "A",
        "text": "150 g fruct tăiat."
      },
      {
        "id": "B",
        "text": "1 fruct mediu întreg."
      },
      {
        "id": "C",
        "text": "Potrivit normei, 2 fructe mici."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, 1/2 fruct mediu."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: fruct mediu = 1 întreg. Fructe tăiate = 1/2 ceașcă. Suc neîndulcit = 1/2 ceașcă.",
    "tooltipCorrect": "Porție fruct: 1 mediu. Fructe tăiate: 1/2 ceașcă."
  },
  {
    "id": "ALI-123",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții legume frunze verzi",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul măsoară porțiile de legume pentru salată. Conform Anexei 5, o porție de legume cu frunze verzi (spanac, salată) este:",
    "options": [
      {
        "id": "A",
        "text": "1/2 ceașcă."
      },
      {
        "id": "B",
        "text": "1,5 ceașcă."
      },
      {
        "id": "C",
        "text": "1 ceașcă."
      },
      {
        "id": "D",
        "text": "2 ceașcă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: legume frunze verzi = 1 ceașcă. Legume crude tăiate/fierte = 1/2 ceașcă. Cartof = 1 mediu.",
    "tooltipCorrect": "Porție legume verzi: 1 ceașcă. Legume crude tăiate: 1/2 ceașcă."
  },
  {
    "id": "ALI-124",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții maxime 2-6 ani",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Conform Anexei 5, nr. maxim de porții din grupa pâine/cereale/paste pentru grupa 2-6 ani este:",
    "options": [
      {
        "id": "A",
        "text": "7-8 porții/zi."
      },
      {
        "id": "B",
        "text": "4-5 porții/zi."
      },
      {
        "id": "C",
        "text": "5-6 porții/zi."
      },
      {
        "id": "D",
        "text": "6 porții/zi."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), nr. maxim porții/zi: pâine/cereale/paste: 6 (2-6 ani) / 5-6 (7-10) / 6-7 (11-13).",
    "tooltipCorrect": "Porții maxime pâine/cereale: 6 (2-6 ani), 5-6 (7-10), 6-7 (11-13)."
  },
  {
    "id": "ALI-125",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții maxime lactate",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Conform Anexei 5, nr. maxim de porții din grupa lactate pentru orice grupă de vârstă 2-13 ani este:",
    "options": [
      {
        "id": "A",
        "text": "3 porții/zi."
      },
      {
        "id": "B",
        "text": "4 porții/zi."
      },
      {
        "id": "C",
        "text": "2 porții/zi."
      },
      {
        "id": "D",
        "text": "5 porții/zi."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), nr. maxim porții/zi: lactate: 3 (pentru toate grupele 2-13 ani).",
    "tooltipCorrect": "Porții maxime lactate: 3/zi pentru orice vârstă (2-13 ani)."
  },
  {
    "id": "ALI-126",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - proporționalitate meniu",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Grădiniță „Pescăruș\" are program 8 ore zilnic. Conform Anexei 2, gustarea trebuie să asigure ce procent din rația energetică zilnică recomandată?",
    "options": [
      {
        "id": "A",
        "text": "25% din rația energetică zilnică."
      },
      {
        "id": "B",
        "text": "10% din rația energetică zilnică."
      },
      {
        "id": "C",
        "text": "15-20% din rația energetică zilnică."
      },
      {
        "id": "D",
        "text": "5% (nu e obligatoriu, depinde de situație)."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 2: meniurile asigură aport conform anexele 3-4, proporțional cu timpul petrecut în colectivitate. Exemplu: program 6 ore → gustare = 10% din rația energetică zilnică. Pentru 8 ore, se pot ajusta proporțional (gustare + 2 porții poate raporta la 12-15%).",
    "tooltipCorrect": "Meniu proporțional timp: program 6h → gustare 10% rație zilnică. Program 8h: proporțional mai mult."
  },
  {
    "id": "ALI-127",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - diversitate preșcolar",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Pe o săptămână, meniu preșcolari (3-6 ani) include pâine alb la 4 mese și pâine neagră la 2 mese. Administratorul revizuiește conform Anexei 2. Ce regulă nu e respectată?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, pâinea neagră nu e permisă pentru preșcolari; doar pâine albă."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, proporția e corectă; nu e problemă cu diversitatea."
      },
      {
        "id": "C",
        "text": "Se încalcă principiul diversității: preșcolarilor trebuie varietate largă; altern pâini și cereale diferite."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, pâinea albă și neagră sunt echivalente; proporția nu contează."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula pentru preșcolar: varietate largă (pâine, cereale, orez, paste, vegetale, fructe, lapte/brânză/iaurt, carne, pui, pește, ouă). Proporția 4:2 albă/neagră nu asigură diversitate suficientă; se recomandă mix mai variat de alimente din fiecare grup pe săptămână.",
    "tooltipCorrect": "Preșcolar: varietate largă din toate grupele. Mix pâini e bun, dar cu alte cereale și surse diverse."
  },
  {
    "id": "ALI-128",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - carne schema preșcolar",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu preșcolar (4-6 ani) 1 săptămână include: luni - carne de vită, marți - pui, miercuri - carne de vită, joi - porc, vineri - pui. Administratorul observă o problemă conform Anexei 2. Ce spune regula?",
    "options": [
      {
        "id": "A",
        "text": "Proporția carne roșie vs pui e inegală; trebuie egalizat cu mai multă vită."
      },
      {
        "id": "B",
        "text": "Sunt prea multe tipuri de carne; copiii preșcolari trebuie doar pui și porc."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, lipsește pește; trebuie inclus cel puțin o dată pe săptămână."
      },
      {
        "id": "D",
        "text": "Varietatea e bună; carnea de vită, pui, porc sunt recomandări pentru preșcolari."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula preșcolar: varietate largă (carne de vită, pui, porc, pește). Schema prezentată asigură diversitate: 2x vită, 2x pui, 1x porc. E acceptabilă; carnea de vită nu e interzisă (cinc de vită e bună sursă de fier pentru preșcolari).",
    "tooltipCorrect": "Preșcolar: varietate carne. Vită, pui, porc, pești sunt recomandări. Schema cu 2-1-2-1 e bună."
  },
  {
    "id": "ALI-129",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - consistență culori poftă",
    "difficulty": "medium",
    "sourceAct": "Ordinul 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu preșcolar o săptămână: 5 zile includ brocoli/varză/morcovi (culori verde/portocaliu). Administratorul observă lipsă în Anexa 2. Ce regulă încalcă meniu-ul pentru preșcolari?",
    "options": [
      {
        "id": "A",
        "text": "Se încalcă regula consistență/culori diferite pt stimulare poftei; 5 zile din 5 cu legume coapte/monotone; trebuie salate crudă, fructe colorate, texturi diferite."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, legumele verde sunt prea multe; trebuie mai multa varză roșie urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, NU încalcă nimic; abundența legumelor verzi e bună pentru vitamina K și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, brocoli e interzis pentru preșcolari; prea fibrosos și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula preșcolar: consistență/culori diferite pentru stimularea poftei; legume monotone coapte pe 5 zile nu asigură diversitate vizuală/texturală. Trebuie mix: salate crudă (roșu, verde), fructe (galbene, roșii, portocalii), texturi (gras, pufos, crocant).",
    "tooltipCorrect": "Preșcolar: consistență/culori diverse. Mix crudități, fructe colorate, texturi variate stimulează pofta."
  },
  {
    "id": "ALI-130",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - vitamine salate minerale",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu o săptămână nu include nicio salată de crudități, dar include legume-frunze în supe zilnic. Administratorul revizuiește conform Anexei 2. Ce spune regula?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, E suficient; legume-frunze coapte în supe conțin aceleași vitamine."
      },
      {
        "id": "B",
        "text": "Meniu trebuie îmbogățit cu salate crudități ȘI legume-frunze în supe; vitamina C e mai bine reținută în crudități."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, vitamina C din supe se pierde; trebuie compensată cu supliment."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, salata crudă e opțională pentru preșcolari; supa e suficientă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 7: meniu se îmbogățește cu vitamine/minerale prin SALATE din crudități ȘI legume-frunze în supe/ciorbe. Vitamina C din crudități se reține mult mai bine decât din legume fiarte; trebuie ambele pentru aport optim.",
    "tooltipCorrect": "Vitamine: salate crudități ȘI legume-frunze în supe. Crudități = vit. C mai bună. Ambele necesare."
  },
  {
    "id": "ALI-131",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - mic dejun lapte variante",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Micul dejun preșcolar: 5 zile lapte cu cereale. Administratorul verifică conform Anexei 2 regula 4. Ce spune regula și e acceptabil?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, E bine; proteinele din lapte și carbohidrații din cereale sunt essențiali urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, NU se incalca nimic; lapte și cereale sunt din grupe diferite și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Se încalcă regula: nu se combine 2 alimente din aceeași grupă. Lapte + cereale sunt ambele din grupa lactate/cereale cumulativ; trebuie variante cu carne/brânză, nu doar lapte zilnic."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, E acceptabil; lapte cu cereale e combinație perfectă de proteine și glucide și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 4: se evită asocierea alimentelor din aceeași grupă. La micul dejun, recomandarea e: alternare între lapte+pâine/biscuiți (o variantă), și preparate carne/brânză (alta variantă), NU lapte zilnic cu cereale. Câteva variante + un favorit pentru preșcolari e mai bun.",
    "tooltipCorrect": "Mic dejun: variante diferite. Lapte + cereale o dată/două. Alt-uri: pâine cu brânză, pâine cu carne."
  },
  {
    "id": "ALI-132",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - lipide 1-3 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Ce interval de procent din calorii trebuie să reprezinte lipidele pentru grupa 1-3 ani, conform Anexei 3?",
    "options": [
      {
        "id": "A",
        "text": "30-35%."
      },
      {
        "id": "B",
        "text": "40-45%."
      },
      {
        "id": "C",
        "text": "25-30%."
      },
      {
        "id": "D",
        "text": "35-40%."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): lipide: 35-40% (1-3 ani), 30-35% (4-6 ani), 25-30% (școlari). Copiii mici au nevoie de mai mulți lipizi pentru dezvoltare neurologică.",
    "tooltipCorrect": "Lipide: 35-40% (1-3 ani), 30-35% (4-6), 25-30% (școlari)."
  },
  {
    "id": "ALI-133",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 3 - glucide 1-3 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 3",
    "type": "single",
    "question": "Ce interval de procent din calorii trebuie să reprezinte glucidele pentru grupa 1-3 ani, conform Anexei 3?",
    "options": [
      {
        "id": "A",
        "text": "45-53%."
      },
      {
        "id": "B",
        "text": "40-45%."
      },
      {
        "id": "C",
        "text": "50-55%."
      },
      {
        "id": "D",
        "text": "55-60%."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 3 (Ordinul 1563/2008): glucide: 45-53% (1-3 ani), 50-55% (4-6 ani), 55-60% (școlari).",
    "tooltipCorrect": "Glucide: 45-53% (1-3), 50-55% (4-6), 55-60% (școlari)."
  },
  {
    "id": "ALI-134",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - tabel 1 lapte 1-3 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de lapte/lactate (echiv. lapte) se recomandă pentru grupa 1-3 ani?",
    "options": [
      {
        "id": "A",
        "text": "600 ml."
      },
      {
        "id": "B",
        "text": "700 ml."
      },
      {
        "id": "C",
        "text": "900 ml."
      },
      {
        "id": "D",
        "text": "800 ml."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: lapte/lactate: 700 ml (1-3 ani), 700 ml (4-6 ani), 800 ml (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Lapte: 1-3 = 700 ml; 4-6 = 700 ml; 7-10 = 800 ml/zi."
  },
  {
    "id": "ALI-135",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - cereale-făină 4-6 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de produse cerealiere (echiv. făină) se recomandă pentru grupa 4-6 ani?",
    "options": [
      {
        "id": "A",
        "text": "90 g făină."
      },
      {
        "id": "B",
        "text": "280 g făină."
      },
      {
        "id": "C",
        "text": "160 g făină."
      },
      {
        "id": "D",
        "text": "230 g făină."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: produse cerealiere (echiv. făină): 90 g (1-3 ani), 160 g (4-6 ani), 230 g (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Cereale-făină: 1-3 = 90 g; 4-6 = 160 g; 7-10 = 230 g/zi."
  },
  {
    "id": "ALI-136",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - legume 4-6 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de alte legume (NU cartofi) se recomandă pentru grupa 4-6 ani?",
    "options": [
      {
        "id": "A",
        "text": "200 g."
      },
      {
        "id": "B",
        "text": "210 g."
      },
      {
        "id": "C",
        "text": "230 g."
      },
      {
        "id": "D",
        "text": "220 g."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: alte legume: 210 g (1-3 ani), 220 g (4-6 ani), 230 g (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Alte legume: 1-3 = 210 g; 4-6 = 220 g; 7-10 = 230 g/zi."
  },
  {
    "id": "ALI-137",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - zahăr 7-10 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Conform Tabelului 1 din Anexa 4, ce cantitate zilnică de zahăr/produse zaharoase se recomandă pentru grupa 7-10 ani?",
    "options": [
      {
        "id": "A",
        "text": "50 g."
      },
      {
        "id": "B",
        "text": "45 g."
      },
      {
        "id": "C",
        "text": "40 g."
      },
      {
        "id": "D",
        "text": "35 g."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 1: zahăr/produse zaharoase: 35 g (1-3 ani), 45 g (4-6 ani), 50 g (7-10 ani).",
    "tooltipCorrect": "Tabel 1 - Zahăr: 1-3 = 35 g; 4-6 = 45 g; 7-10 = 50 g/zi."
  },
  {
    "id": "ALI-138",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - piramidă 2000 kcal",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Pentru o rație de 2000 kcal (grupa 7-10 ani), piramida alimentară din Anexa 5 recomandă ce cantitate de cereale?",
    "options": [
      {
        "id": "A",
        "text": "200 g cereale."
      },
      {
        "id": "B",
        "text": "180 g cereale."
      },
      {
        "id": "C",
        "text": "240 g cereale."
      },
      {
        "id": "D",
        "text": "150 g cereale."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008): la 2000 kcal (7-10 ani): cereale 180g, legume 2,5 cești, fructe 2 cești, lapte 3 cești, carne 165g.",
    "tooltipCorrect": "2000 kcal (7-10 ani): cereale 180g, legume 2,5 cești, fructe 2, lapte 3 cești, carne 165g."
  },
  {
    "id": "ALI-139",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porție brânză vacă proaspătă",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Meniu includet brânză de vacă proaspătă ca sursă de proteine. Conform Anexei 5, o porție standard de brânză vacă este:",
    "options": [
      {
        "id": "A",
        "text": "1 ceașcă."
      },
      {
        "id": "B",
        "text": "3/4 ceașcă."
      },
      {
        "id": "C",
        "text": "1/2 ceașcă."
      },
      {
        "id": "D",
        "text": "1/3 ceașcă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: brânză de vacă proaspătă = 1/2 ceașcă. Cașcaval = 30 g. Brânază topită = 35 g.",
    "tooltipCorrect": "Porție brânză vacă: 1/2 ceașcă (proaspătă)."
  },
  {
    "id": "ALI-140",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porție ciocolată dulciuri",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul calculează porțiile pentru dulciuri ocazionale. Conform Anexei 5, o porție standard de ciocolată este:",
    "options": [
      {
        "id": "A",
        "text": "20 g."
      },
      {
        "id": "B",
        "text": "25 g."
      },
      {
        "id": "C",
        "text": "10 g."
      },
      {
        "id": "D",
        "text": "15 g."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: ciocolată = 15 g. Dulciuri sunt permise ocazional. Porția mică asigură aport caloric controlat.",
    "tooltipCorrect": "Porție ciocolată: 15 g."
  },
  {
    "id": "ALI-141",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții cartofi prăjiți măr",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul revizuiește o gustare cu cartofi prăjiți. Conform Anexei 5, o porție corectă de cartofi prăjiți este:",
    "options": [
      {
        "id": "A",
        "text": "10 felii."
      },
      {
        "id": "B",
        "text": "20 felii."
      },
      {
        "id": "C",
        "text": "15 felii."
      },
      {
        "id": "D",
        "text": "5 felii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: cartofi prăjiți = 10 felii. Porția e limitată pt a controla caloriile (cartofi prăjiți: >300 kcal/100g).",
    "tooltipCorrect": "Porție cartofi prăjiți: 10 felii."
  },
  {
    "id": "ALI-142",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - cina preșcolar ușoară",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Cina preșcolar include: meniu cu carne tocată prăjită + salată + pâine + băutură fierbinte înainte de culcare (ora 19:00). Administratorul observă probleme conform Anexei 2. Ce sesizează?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, pâinea la cină nu e recomandată; ar trebui numai carne + salată ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Sesizează: (1) carnea tocată NU e prăjită (doar fiartă/cuptor); (2) masa prea târziu/fierbinte înainte de culcare perturbă somnul; cina trebuie mai ușoară/mai devreme."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, meniu e corect; copiii au nevoie de proteine la cină urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, porția de salată e prea mică; trebuie dublată și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), reguli: (1) tocăturile NUMAI fierte/cuptor, NU prăjite; (2) la cină se evită efort digestiv puternic, combinații nefavorabile; masa fierbinte/grea înainte de culcare afectează somnul. Cina trebuie ușoară, mai devreme.",
    "tooltipCorrect": "Cină: tocături doar fiartă/cuptor. Evitați mâncări greu digerabile înainte de culcare."
  },
  {
    "id": "ALI-143",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - depășire legume 15%",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Rația medie calculată: legume 240 g zilnic (recomandare tabel 1 = 220 g pentru grupa 4-6). E depășire de 20 g. Administratorul calculează procentul. E acceptabil conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "Depășire 20 g e prea mult; trebuie redusă imediat la 220 g."
      },
      {
        "id": "B",
        "text": "Depășire oricât e bună; legume NU se pot depăși."
      },
      {
        "id": "C",
        "text": "Depășire 9,09%; acceptabilă (sub 20% maxim permitut)."
      },
      {
        "id": "D",
        "text": "Depășire 9,09%; NU acceptabilă pt legume, doar pt lapte/carne."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), art.3: depășire permitută până 20% la lapte/lactate, carne, pește, legume/fructe. 240 vs 220 g = 20g = 9,09% (sub 20%); acceptabil pentru legume.",
    "tooltipCorrect": "Depășire legume/fructe: până 20%. 240 vs 220 = +9% ≤ 20% = acceptabil."
  },
  {
    "id": "ALI-144",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - pâine albă echivalență făină",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include pâine albă. Administratorul verifică echivalență: pâine albă 100 g conține ce echivalență de făină, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "73 g făină."
      },
      {
        "id": "B",
        "text": "80 g făină."
      },
      {
        "id": "C",
        "text": "70 g făină."
      },
      {
        "id": "D",
        "text": "76 g făină."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: pâine neagră = 71 g făină/100g; semialbă = 73 g; albă = 76 g făină/100g.",
    "tooltipCorrect": "Pâine: neagră 71g făină, semialbă 73g, albă 76g/100g pâine."
  },
  {
    "id": "ALI-145",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - miere echivalență zahăr",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include miere. Ce echivalență de zahăr se aplică pentru 100 g miere, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "80 g zahăr."
      },
      {
        "id": "B",
        "text": "60 g zahăr."
      },
      {
        "id": "C",
        "text": "70 g zahăr."
      },
      {
        "id": "D",
        "text": "90 g zahăr."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe zahăr: miere 100 g = 80 g zahăr.",
    "tooltipCorrect": "Miere: 100 g = 80 g zahăr (echivalent)."
  },
  {
    "id": "ALI-146",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - bulion echivalență tomate",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Supa include bulion. Administratorul calculează echivalență: 100 g bulion/pastă roșii sunt echivalenți cu câte grame de tomate crude, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "800 g tomate."
      },
      {
        "id": "B",
        "text": "600 g tomate."
      },
      {
        "id": "C",
        "text": "400 g tomate."
      },
      {
        "id": "D",
        "text": "200 g tomate."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: bulion/pastă roșii = 600 g tomate.",
    "tooltipCorrect": "Bulion/pastă roșii: 100 g = 600 g tomate crude."
  },
  {
    "id": "ALI-147",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porție suc neîndulcit natural",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Meniu includet suc natural neîndulcit ca aport de vitamine. Conform Anexei 5, o porție standard este:",
    "options": [
      {
        "id": "A",
        "text": "1 ceașcă."
      },
      {
        "id": "B",
        "text": "1/4 ceașcă."
      },
      {
        "id": "C",
        "text": "1/2 ceașcă."
      },
      {
        "id": "D",
        "text": "1,5 ceașcă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: suc legume/fructe neîndulcit = 1/2 ceașcă (50 ml din totalul 100 ml/ceașcă).",
    "tooltipCorrect": "Porție suc neîndulcit: 1/2 ceașcă (50 ml)."
  },
  {
    "id": "ALI-148",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porție cartof mediu cruditate",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul determină porția de cartofi fierți la prânz. Conform Anexei 5, o porție standard de cartof mediu este:",
    "options": [
      {
        "id": "A",
        "text": "1 cartof mic (sub 100g)."
      },
      {
        "id": "B",
        "text": "1/2 cartof mediu."
      },
      {
        "id": "C",
        "text": "2 cartofi mici (50g fiecare)."
      },
      {
        "id": "D",
        "text": "1 cartof mediu."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), mărime porție: 1 cartof mediu. Porția asigură aport de carbohidrați și amidon pentru energie.",
    "tooltipCorrect": "Porție cartof: 1 mediu."
  },
  {
    "id": "ALI-149",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții maxime legume 7-10 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Conform Anexei 5, nr. maxim de porții din grupa legume pentru grupa 7-10 ani este:",
    "options": [
      {
        "id": "A",
        "text": "5-6 porții/zi."
      },
      {
        "id": "B",
        "text": "3 porții/zi."
      },
      {
        "id": "C",
        "text": "4-5 porții/zi."
      },
      {
        "id": "D",
        "text": "6-7 porții/zi."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), nr. maxim porții/zi: legume: 3 (2-6 ani) / 4-5 (7-10) / 5-6 (11-13).",
    "tooltipCorrect": "Porții maxime legume: 3 (2-6 ani), 4-5 (7-10), 5-6 (11-13)."
  },
  {
    "id": "ALI-150",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții maxime carne grup",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Conform Anexei 5, nr. maxim de porții din grupa carne/pui/pește/fasole/mazăre/ouă pentru grupa 2-6 ani este:",
    "options": [
      {
        "id": "A",
        "text": "4 porții/zi."
      },
      {
        "id": "B",
        "text": "1 porție/zi."
      },
      {
        "id": "C",
        "text": "3 porții/zi."
      },
      {
        "id": "D",
        "text": "2 porții/zi."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), nr. maxim porții/zi: carne/pui/pește/fasole/mazăre/ouă: 1 (2-6 ani) / 2 (7-10) / 2-3 (11-13).",
    "tooltipCorrect": "Porții maxime carne: 1 (2-6 ani), 2 (7-10), 2-3 (11-13)."
  },
  {
    "id": "ALI-151",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții maxime dulciuri bombon",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Administratorul revizuiește meniul pe o săptămână și observă dulciuri zilnic. Conform Anexei 5, dulciuri/bomboane sunt permise cu ce frecvență?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, zilnic, 1 porție."
      },
      {
        "id": "B",
        "text": "Pe baza dispoziției, de 3 ori pe săptămână."
      },
      {
        "id": "C",
        "text": "1 porție ocazional (NU zilnic)."
      },
      {
        "id": "D",
        "text": "Conform procedurii, 2-3 porții pe săptămână."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), nr. maxim porții: dulciuri = 1 ocazional (NU zilnic, CI doar ocazional pt a limita calorii și zahăr).",
    "tooltipCorrect": "Dulciuri: 1 porție ocazional NUMAI, NU zilnic."
  },
  {
    "id": "ALI-152",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - prânz glucide legume",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Meniu prânz preșcolar: mămăligă + paste cu sos roșii + pâine. Administratorul observă problema conform regulei Anexei 2. Ce sesizează?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, propoția e corectă; mămăligă + paste oferă energie suficientă."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, mămăliga e prea grea pentru copii; trebuie înlocuită."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, meniu e ok; paste și mămăligă sunt din cereale, proteic."
      },
      {
        "id": "D",
        "text": "Se încalcă regula 4: sunt 2 feluri preponderent glucide din cereale (mămăligă + paste); trebuie 1 glucid + legume, NU 2 glucide."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula 4: la prânz NU sunt permise 2 feluri preponderent glucide din cereale. Se recomandă 1 glucid (mămăligă SAU paste) + legume ca fel 2, NU mămăligă + paste cumulate.",
    "tooltipCorrect": "Prânz: NU 2 glucide din cereale. Corect: 1 glucid + legume/salată."
  },
  {
    "id": "ALI-153",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - telemea oi echivalență",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include telemea de oi. Ce echivalență în lapte proaspăt se aplică pentru 100 g telemea de oi, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "450 ml."
      },
      {
        "id": "B",
        "text": "550 ml."
      },
      {
        "id": "C",
        "text": "650 ml."
      },
      {
        "id": "D",
        "text": "350 ml."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe: 100 g telemea de oi = 450 ml echivalent lapte proaspăt.",
    "tooltipCorrect": "Telemea oi: 100 g = 450 ml lapte. Telemea vacă: 100 g = 550 ml lapte."
  },
  {
    "id": "ALI-154",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - porții fructe maxime 2-6 ani",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Conform Anexei 5, nr. maxim de porții din grupa fructe pentru grupa 2-6 ani este:",
    "options": [
      {
        "id": "A",
        "text": "3 porții/zi."
      },
      {
        "id": "B",
        "text": "2-4 porții/zi."
      },
      {
        "id": "C",
        "text": "2 porții/zi."
      },
      {
        "id": "D",
        "text": "4 porții/zi."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), nr. maxim porții/zi: fructe: 2-4 (2-6 ani) / 3 (7-10) / 3-4 (11-13).",
    "tooltipCorrect": "Porții maxime fructe: 2-4 (2-6 ani), 3 (7-10), 3-4 (11-13)."
  },
  {
    "id": "ALI-155",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - valoare calorică foarte crescută",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Administratorul revizuiește gustarea: cartofi prăjiți 50g (tabel 2 = peste 300 kcal/100g). Ce observă conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, E acceptabilă dacă se servește cu apă minerală ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, porția e prea mică; trebuie mărită la 100g și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Cade în categoria foarte crescută (>300 kcal/100g); gustarea copiilor trebuie sub 60 kcal/100g (scăzută) sau moderată; cartofi prăjiți nu sunt recomandați."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, E bună; cartofi prăjiți sunt aceptați în gustare și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), Tabel 2: valoare calorică foarte crescută = peste 300 kcal/100g. Cartofi prăjiți, ciocolată, bomboane, dulciuri cu cremă cad în aceasta categorie. Gustările pentru copii trebuie scăzute/moderate (5-120 kcal/100g).",
    "tooltipCorrect": "Tabel 2 - Cartofi prăjiți: >300 kcal (foarte crescută). Gustări: prefer scăzută/moderată."
  },
  {
    "id": "ALI-156",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - fier anemia copii",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 2",
    "type": "single",
    "question": "Administratorul planifică meniu săptămânal pentru grupa 7-10 ani și țintă aportul de fier conform Anexei 2. De ce fier este important și ce surse asigură aportul adecvat?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, fier e necesar doar pentru bieți; fetele nu au nevoie și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, doar suplimentele de fier asigură nivelul corect ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, fier nu e esențial; recomandarea e opțională ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Fier 8-15 mg/zi previne anemia. Surse: carne de vacă/pasăre/porc, fasole, alune, cereale integrale/fortificate, vegetale cu frunze verzi."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 2 (Ordinul 1563/2008), regula școlar: fier 8-15 mg/zi (carne, fasole, alune, cereale integrale, vegetale frunze). Fieul e critic pentru oxigenare tisulară și prevenirea anemiei, mai ales copii în creștere.",
    "tooltipCorrect": "Fier: 8-15 mg/zi din carne, fasole, cereale integrale, vegetale verzi. Previne anemia."
  },
  {
    "id": "ALI-157",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 4 - dulceață echivalență zahăr",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Meniu include dulceață. Ce echivalență de zahăr se aplică pentru 100 g dulceață, conform Anexei 4?",
    "options": [
      {
        "id": "A",
        "text": "70 g zahăr."
      },
      {
        "id": "B",
        "text": "60 g zahăr."
      },
      {
        "id": "C",
        "text": "40 g zahăr."
      },
      {
        "id": "D",
        "text": "50 g zahăr."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), echivalențe zahăr: dulceață = 70 g zahăr/100g.",
    "tooltipCorrect": "Dulceață: 100 g = 70 g zahăr."
  },
  {
    "id": "ALI-158",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - ceașcă volum",
    "difficulty": "basic",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Conform Anexei 5, o ceașcă (unitate de măsură pentru porții) este echivalentă cu:",
    "options": [
      {
        "id": "A",
        "text": "200 ml."
      },
      {
        "id": "B",
        "text": "100 ml."
      },
      {
        "id": "C",
        "text": "150 ml."
      },
      {
        "id": "D",
        "text": "50 ml."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008), notă: 1 ceașcă = 100 ml. Această unitate e folosită pentru toate porțiile din piramidă.",
    "tooltipCorrect": "1 ceașcă = 100 ml (notă Anexa 5)."
  },
  {
    "id": "ALI-159",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 2 - depășire 20% carne meniu",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 4",
    "type": "single",
    "question": "Rații calculate: carne 96 g zilnic pentru grupa 4-6 ani (tabel 1 = 85 g). Depășire 11 g. Administratorul verifică dacă e acceptabilă conform Anexei 4, art.3.",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, depășire oricât e bună la carne."
      },
      {
        "id": "B",
        "text": "Depășire 12,94%; NU acceptabilă pt carne, doar pt legume."
      },
      {
        "id": "C",
        "text": "Depășire 12,94%; acceptabilă (sub 20% maxim)."
      },
      {
        "id": "D",
        "text": "11 g e prea mult; trebuie redusă imediat."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 4 (Ordinul 1563/2008), art.3: depășire permitută până 20% la lapte/lactate, CARNE, pește, legume/fructe. 96 vs 85 g = 11g = 12,94% (sub 20%); acceptabilă pentru carne.",
    "tooltipCorrect": "Depășire carne: până 20%. 96 vs 85 = +12,94% ≤ 20% = acceptabil."
  },
  {
    "id": "ALI-160",
    "section": "Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008",
    "topic": "Anexa 5 - piramidă 1600 kcal",
    "difficulty": "medium",
    "sourceAct": "Ordinul MS nr. 1563/2008, anexa nr. 5",
    "type": "single",
    "question": "Pentru o rație de 1600 kcal (grupa 4-6 ani), piramida alimentară din Anexa 5 recomandă ce cantitate de fructe zilnic?",
    "options": [
      {
        "id": "A",
        "text": "2 cești."
      },
      {
        "id": "B",
        "text": "1 ceașcă."
      },
      {
        "id": "C",
        "text": "2,5 cești."
      },
      {
        "id": "D",
        "text": "1,5 cești."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Anexa 5 (Ordinul 1563/2008): la 1600 kcal (4-6 ani): cereale 150g, legume 2 cești, fructe 1,5 cești, lapte 3 cești, carne 150g.",
    "tooltipCorrect": "1600 kcal: fructe 1,5 cești, legume 2, lapte 3 cești, cereale 150g, carne 150g."
  },
  {
    "id": "SSM-001",
    "section": "SSM - Legea 319/2006",
    "topic": "Blocare dispozitiv de siguranță - obligație lucrător",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un angajat al grădiniței blochează senzorul unei ferestre antifoc în grup sanitar, fiindcă \"deschiderea ușii pune copiii pe curent\". Administratorul observă. Cum trebuie să acționeze?",
    "options": [
      {
        "id": "A",
        "text": "Să oprească imediat utilizarea echipamentului cu dispozitivul blocat, să restabilească funcționalitatea senzorului, să anunțe deficiența și să instruiască personalul că dispozitivele de siguranță NU pot fi blocate conform Legii 319/2006."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, să improvizeze o soluție cu cearcan pentru a înlocui senzorul și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, să ceri permisiunea proprietarului clădirii înainte de a lua orice măsură și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, să îi avertizeze verbal și să verifice din nou peste o lună și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. IV obligă lucrătorul să NU elimine, modifice sau blocheze dispozitivele de siguranță. Administratorul (angajator) trebuie să oprească utilizarea, să restabilească protecția și să instruiască personalul. Senzorul NU e decorativ — previne incendii.",
    "tooltipCorrect": "Dispozitivele de siguranță NU se blochează. Se oprește utilizarea, se restabilește, se anunță, se instruiește."
  },
  {
    "id": "SSM-002",
    "section": "SSM - Legea 319/2006",
    "topic": "Utilizare corectă EIP - refuzul unui coleg",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un muncitor crede că mănușile de protecție \"nu sunt necesare\" când manipulează clor pentru curățenie și refuză să le poarte. Administratorul II observă. Ce obligație din Legea 319/2006 aplică și cum trebuie să reacționeze?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, să schimbe muncitorul cu altul și să nu mai abordeze subiectul urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Administratorul trebuie să impună utilizarea EIP și să instruiască că refuzul de a folosi mijloace de protecție încalcă obligațiile lucrătorului din cap. IV și că va fi raportat autorităților de control."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, nimic — dacă muncitorul spune că n-are nevoie, e decizia lui personală ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, să aștepte până la următoarea inspecție SSM pentru a fi sancționat oficial urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. IV obligă lucrătorul să utilizeze corect EIP (echipamentele individuale de protecție) puse la dispoziție și să le păstreze corespunzător. Administratorul asigură instruirea și supraveghează respectarea. Refuzul este încălcare a obligației și trebuie documentat și raportat.",
    "tooltipCorrect": "EIP nu e opțional. Lucrătorul e obligat să îl folosească; administratorul instruiește și supravegheaza conformitatea."
  },
  {
    "id": "SSM-003",
    "section": "SSM - Legea 319/2006",
    "topic": "Nerespectarea instrucțiunilor de lucru - risc accident",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un lucrător din grădiniță manipulează gresie moale (pentru grup sanitar) într-o cameră fără ventilație și ușile închise, ignorând instrucțiunile scrise care cere ventilație constantă. Ce risc și ce obligație din Legea 319/2006 sunt încălcate?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, nici un risc — gresia nu emite substanțe dăunătoare urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Conform procedurii, riscul de zgomot excesiv; administratorul trebuie să obțină autorizație de la autoritățile locale."
      },
      {
        "id": "C",
        "text": "Riscul de intoxicație cu vapori din adezivul gresiei; lucrătorul încalcă obligația de a respecta instrucțiunile de lucru din cap. IV."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, nici un pericol profesional — doar disconfort termic și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. IV obligă lucrătorul să respecte instrucțiunile de lucru și măsurile de protecție. Lucrul cu materiale care emit vapori (adezivi, soluții) impune ventilație. Administratorul monitorizează conformitatea și investigă încălcări.",
    "tooltipCorrect": "Instrucțiunile de lucru sunt obligatorii. Ventilația nu e opțională pentru manipulare substanțe."
  },
  {
    "id": "SSM-004",
    "section": "SSM - Legea 319/2006",
    "topic": "Anunțare imediată a situației periculoase",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "O lucrătoare observă o alunecare pe podeaua udă în grup sanitar și o scapă. Ea se gândește că o va anunța pe administratoarea \"după ora de prânz\" când vor fi mai puține copii. Este corect acest comportament conform Legei 319/2006?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, da, cu condiția să poată o seara o notă în jurnal urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, nu, dar ar putea anunța pe ceilalți colegi dacă o consideră necesar și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, da, este logic să aștepte când situația e mai liniștit și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Nu. Legea 319/2006, cap. IV obligă anunțarea IMEDIATĂ a conducătorului locului de muncă pentru orice situație care poate produce accident sau îmbolnăvire. Alunecarile pe podeaua udă sunt pericol iminent."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. IV art. privind comunicare: lucrătorul anunță IMEDIAT conducătorului orice situație care poate produce accident. \"După ora de prânz\" e prea târziu — în interval pot aluneca alți angajați sau copii. Imediaticitate = protecție.",
    "tooltipCorrect": "Anunțarea situațiilor periculoase trebuie făcută IMEDIAT, nu mai târziu."
  },
  {
    "id": "SSM-005",
    "section": "SSM - Legea 319/2006",
    "topic": "Cooperare cu organele de control SSM",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Într-o inspecție SSM, un inspector cere să acceseze registrul de accidente și să vorbească cu muncitori. Un coleg spune administratoarei: \"Nu trebuie să avem voie acestora să vadă documente — sunt private\". Cum ar trebui să reacționeze administratorul II?",
    "options": [
      {
        "id": "A",
        "text": "Să permită accesul deplin și să coopereze complet. Legea 319/2006, cap. IV obligă cooperarea cu organele de control. Documentele de SSM sunt controlabile de autorități."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, să refuze accesul și să-i cere inspectorului o autorizație scrisă de la prefect și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, să permită accesul numai parțial — doar la registrul de prezență urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, să cere inspectorului să vină cu avocatul grădiniței ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. IV obligă lucrătorul și angajatorul să coopereze cu organele de control (inspecții SSM, inspectori ITM, etc.). Registrele de accidente sunt documente obligatorii și controlabile. Refuzul e încălcare graves.",
    "tooltipCorrect": "Cooperarea cu organele de control este obligatorie. Documentele SSM se prezintă la cerere."
  },
  {
    "id": "SSM-006",
    "section": "SSM - Legea 319/2006",
    "topic": "Eliminare dispozitiv de siguranță - prohibit",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un angajat decide că protecția de la vârful unei mese de joacă (cu colț ascuțit) \"se rupe frecvent și e la modă ca copii să joace cu colț descoperit\". O scoate și o aruncă. Administratorul descoperă. Ce articolează din Legea 319/2006 este încălcată?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, capitolul V (supraveghere medicală) — doar medicul poate decide despre protecție și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Capitolul IV: lucrătorul NU poate elimina sau modifica dispozitivele de siguranță. Protecția colțului ascuțit e măsură de prevenire. Acțiunea e prohibită și trebuie restabilită imediat."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, capitolul III (prevenire incendii) — are legătură cu electricitate urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, nici o prevedere — protecția e decorativă și nu are efect real și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. IV explicit: lucrătorul NU elimină, modifică sau blochează dispozitivele de siguranță, alarmele, semnalizările. Protecția colțului e dispozitiv de siguranță. Administratorul o restabilește, anunță deficiența și instruiește.",
    "tooltipCorrect": "NU se elimină dispozitive de siguranță. Nici pentru \"comoditate\" nici pentru \"modă\". Se restabilesc imediat."
  },
  {
    "id": "SSM-007",
    "section": "SSM - Legea 319/2006",
    "topic": "Instruire și curățenie — obligații pe locul de muncă",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "După primirea unei cantități de dezinfectant, administratorul observă că în camera de depozitare lipsește eticheta cu instrucțiunile de utilizare și riscuri. Ce face administratorul pentru a respecta obligațiile din Legea 319/2006?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, pune dezinfectantul imediat în mai multe sticle mici pentru a se distribui și instruiește verbal pe fiecare persoană care îl utilizează."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, asteapta să vadă cum îl folosesc lucrătorii și doar atunci o instruiește dacă observă greșeli ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Returnează substanța furnizorului pentru a obține informații complete (etichetă, fișă de securitate), cere explicații și instruiește personalul înainte de utilizare conform Legii 319/2006, cap. IV."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, pune la dispoziție dezinfectantul sub supravegherea conducătorului grupei — copiii NU vor avea acces oricum și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. IV obligă angajatorul să asigure instruire pentru utilizare corectă a substanțelor periculoase. Fără etichetă și fișă de securitate nu se poate respecta această obligație. Returnarea și reaprovizionarea cu documente complete sunt cerințe obligatorii.",
    "tooltipCorrect": "Substanțele periculoase se utilizează numai cu documente complete (etichetă, fișă de siguranță) și instruire de la administrator."
  },
  {
    "id": "SSM-008",
    "section": "SSM - Legea 319/2006",
    "topic": "Transport intern și utilizare corectă",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un muncitor transportă într-un cărucior 5 sticle mari de apă clorinată (fiecare 20 kg) pe o scară abruptă, fără să le fixeze. Ele se clătinesc și una cade. Care este incălcarea și cum trebuie să acționeze administratoarea?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, problema este doar cu sticla căzută — se cumpără alta și gata și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, doar o gloomă — se întâmplă. Se curăță și se reia transportul pe aceeași scară ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, muncitorul e responsabil de accident, dar administratoarea nu trebuie să-l instruiască din nou ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Incălcare a obligației din Legea 319/2006, cap. IV: lucrătorul trebuie să utilizeze corect mijloace de transport intern (fixare, ritmicitate, drumuri sigure). Administratoarea instruiește despre procedura corectă: fixare sticle, transport pe planuri mai ușoare sau cu asistență."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. IV obligă utilizare corectă a mijloacelor de transport intern și a oricărui echipament. Transport nesigur (fără fixare, pe scări abrupte) crează risc de vătămare și pierdere de material. Instruirea și supravegherea sunt responsabilități ale administratorului.",
    "tooltipCorrect": "Transportul intern (cărucior, mâini) necesită fixare, ritmicitate și drumuri sigure. Fără asta e risc de accident."
  },
  {
    "id": "SSM-009",
    "section": "SSM - Legea 319/2006",
    "topic": "Comunicare imediată a accidentelor",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un muncitor se lovește ușor la mână cu o cărămidă în depozit (o mică vânătaie, fără sânge). El decide să nu spună nimănui și să continue munca. După 3 ore, mâna începe să se umfle și doare. Cum ar trebui procedurile din Legea 319/2006 cap. IV?",
    "options": [
      {
        "id": "A",
        "text": "Lucrătorul TREBUIA să anunțe IMEDIAT administratoarea. Legea 319/2006, cap. IV obligă comunicare imediată a accidentelor, indiferent de gravitate aparentă. Umflarea târzie e semn că leziunea era mai gravă."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, lucrătorul e vinovat că nu și-a răspândit răbdarea — administratoarea nu e responsabilă și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, accidentul nu e oficial decât dacă sunt martorii — fără martori NU se înregistrează și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, E corect — nu trebuie anunțat decât accidentele grave cu sânge abundent ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. IV art. comunicare: lucrătorul anunță IMEDIAT orice accident (vătămare, chiar mică). Administratorul înregistrează, oferă prim-ajutor și eventul cercetare. Amânare în raportare ascunde riscuri și prejudiciază investigație.",
    "tooltipCorrect": "Accidentele se anunță IMEDIAT, oricât de mici. Comunicare promptă = apărare și documentare."
  },
  {
    "id": "SSM-010",
    "section": "SSM - Legea 319/2006",
    "topic": "Alegerea și respectarea unei metode de lucru sigură",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Doi muncitori discută cum să-și facă o sarcină (curățare în spații înalte). Unul spune: \"Avem o scară 3m care nu are trei picioare fixe stabil — o mai înclinăm și gata\". Cel de-al doilea: \"Legea 319 cere lucru sigur. Trebuie să cerăm o scară stabilă\". Cine are dreptate conform Legii 319/2006 cap. IV?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, primul — sunt experiență de 10 ani pe construcții și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Al doilea. Legea 319/2006, cap. IV obligă utilizare corectă a echipamentelor și a metodelor de lucru. O scară instabilă = risc de cădere. Administratorul asigură echipamente corespunzătoare și instruiește metodele corecte."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, nici și nici — e doar problemă de organizare, nu legală și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, primul — lucrează cu ce are la mână urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. IV: utilizare corectă a aparaturii, uneltelor și echipamentelor. O scară cu picioare defecte nu e \"echipament corect\" — crează risc de cădere. Administratorul responsabil nu permite lucru pe echipament instabil.",
    "tooltipCorrect": "Echipamentele instabile NU se folosesc. Se cere administrator schimb/reparație înainte de lucru."
  },
  {
    "id": "SSM-011",
    "section": "SSM - Legea 319/2006",
    "topic": "Obligații administrator privind instruire și supraveghere",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un nou muncitor ajunge la grădiniță. Administratoarei nu-i are timp să-l instruiască pe prima zi și-l trimite direct la depozit să aranjeze materiale periculoase (vopsea, diluant, adeziv). Este aceasta acceptabil conform Legii 319/2006?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, da, cu condiția ca muncitorul să fi lucrat anterior în mediu similar și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, da, dacă altă colegă îl privește din departe urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Nu. Administratorul e obligat (cap. IV) să instruiască lucrătorul despre utilizare corectă a substanțelor, echipamentelor, EIP și reguli de lucru ÎNAINTE de a-l pune să lucreze. Lipsa instruirii = încălcare."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, nu, dar numai dacă are COVID în zona locală și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. IV: lucrătorului trebuie asigurată instruire în legătură cu riscurile locului de muncă și măsuri de protecție. Administratorul e responsabil să instruiască ÎNAINTE de comenzi. Instruire = responsabilitate director.",
    "tooltipCorrect": "Fiecare lucrător nou primește instruire completă înainte de a lucra. E responsabilitate a administratorului."
  },
  {
    "id": "SSM-012",
    "section": "SSM - Legea 319/2006",
    "topic": "Semnalizare și respectarea regulilor de acces",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "O ușă a camerei de depozit cu produse chimice poartă tablă roșie cu \"Interzis copiilor\" și \"Acces numai personal autorizat\". Un părintor intră să caute ceva și-și deschide copilului ușa. Cum trebuie să reacționeze administratoarea?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, să lase copilul să intre 5 minute dacă ar vrea \"doar o privire\" și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, să schimbe eticheta cu \"Atenție — copii pe propriul risc\" ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, nimic — e ușă și se deschide, nu e ușă de sejur și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Trebuie să refuze accesul imediat, să explice pericol chimic, și să relocheze semnalizarea dacă nu e vizibilă. Legea 319/2006, cap. IV obligă respectare semnalizării și a regulilor de acces. Părintele nu e \"personal autorizat\"."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. IV: lucrătorul (și angajatorul) respectă semnalizările și regulile de acces. Substanțe chimice în camere speciale trebuie inaccesibile copiilor. Semnalizare clară și aplicare strictă = protecție.",
    "tooltipCorrect": "Semnalizarea se respectă strict. Substanțele periculoase = acces restricționat, copii NU au voie."
  },
  {
    "id": "SSM-013",
    "section": "SSM - Legea 319/2006",
    "topic": "Medicin muncii și control la angajare",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "Un nou angajat pentru manipulare produse de curățenie nu face control medical la angajare și administratorul decide că \"copii nu se vătămă din fum, deci nu e nevoie de medicină a muncii\". Este legal?",
    "options": [
      {
        "id": "A",
        "text": "Nu. Legea 319/2006, cap. V obligă angajator să asigure supraveghere medicală adecvată riscurilor, inclusiv control medical la angajare. Produsele chimice prezintă riscuri pentru angajat (nu doar copii) — dermatite, probleme respiratorii, alergii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, medicină a muncii se face doar odată la 5 ani urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, da, controlul medical e doar pentru muncitori care lucrează în fabrici, nu în grădiniți ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, da, medicină a muncii e costly și greaca nu-și asigură copii așa urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. V: lucrul cu substanțe chimice (clor, dezinfectanți, vopsea, adezivi) prezintă riscuri de contact piele, respirator, ochi. Angajatorul obligă control medical la angajare, periodic și după expuneri. Faptul că grădina are copii NU scutește pe angajat.",
    "tooltipCorrect": "Medicină a muncii cu control la angajare e obligatorie pentru orice post cu riscuri (chimice, biologice, fizice)."
  },
  {
    "id": "SSM-014",
    "section": "SSM - Legea 319/2006",
    "topic": "Riscuri biologice în grădiniță — obligații",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "O angajată lucra cu copii și are contact frecvent cu secreții (scuturi, tuse, vomă). Administratoarea nu o ia în evidență pt medicină a muncii privind riscuri biologice și nu-i ofere vaccinuri (gripa, covid). Este conformă cu Legea 319/2006?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, da, vaccinuri sunt opționale și nu sunt obligație a grădiniței și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Nu. Legea 319/2006, cap. V include riscuri biologice în grădiniță (contact secreții, scuturi, boli contagioase). Angajatorul trebuie să asigure supraveghere medicală, să evalueze risc, să ofere măsuri (vaccinuri, EIP, igienă) și control periodic."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, copiii nici nu transmit boli — doar adulții bolnavi ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, da, copiii sunt sănătoși și nu transmit boli ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. V: supraveghere medicală adecvată riscurilor. Riscurile biologice (contact secreții, boli infecțioase) sunt prezente în grădiniți. Angajatorul (administrator) evaluează risc, ofere protecție (EIP, igienă, vaccinuri) și supraveghea periodic. Neglijare = încălcare.",
    "tooltipCorrect": "Riscuri biologice în grădiniță = contact cu copii bolnavi. Supraveghere medicală și protecție sunt obligatorii."
  },
  {
    "id": "SSM-015",
    "section": "SSM - Legea 319/2006",
    "topic": "Control periodic și verificare aptitudine",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "Un angajat s-a controlat medical la angajare (3 ani în urmă). Administratoarea nu-l mai controlează de atunci și presupune că \"dacă ar fi bolnav, ar fi zis singur\". Este corect?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, da, controlul periodic e opțional și depinde de voința angajatului și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, controlul medical e obligatoriu doar pentru piloți și șoferi ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Nu. Legea 319/2006, cap. V obligă controale periodice de medicină a muncii, nu doar la angajare. Administratorul planifică verificări regulate (anual sau la intervale prescrise) pentru a detecta probleme de sănătate care afectează aptitudine."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, da, o dată la angajare e suficient dacă omul nu se plânge și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. V: angajatorul asigură supraveghere medicală printr-un control la angajare și controale periodice. Perioada dintre verificări depinde de riscuri, dar neglijare nu e opțiune. Periodice = anual sau la interval recomandat.",
    "tooltipCorrect": "Controale medicale periodice sunt obligatorii. Angajatorul (administrator) le planifică și urmărește."
  },
  {
    "id": "SSM-016",
    "section": "SSM - Legea 319/2006",
    "topic": "Riscuri fizice — efort și alunecări",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "În grupa sanitară, podeaua e adesea udă (din jocuri cu apă). Administratoarea nu pune cojocuri antiderapante și nici nu instituie pauze pentru uscare. Trei muncitori s-au întins deja pe podeaua udă. Ce obligație din Legea 319/2006 cap. V este încălcată?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, nici una — alunecări se întâmplă în orice locație și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, E doar problemă de disciplină — vor ști să merg mai rar pe podeaua udă și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, doar muncitorii sunt responsabili pentru alegerea pantofilor urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Supraveghere medicală a riscului de căderi. Administratoarea trebuie să evalueze riscul (podea udă = cădere imediată), să asigure măsuri (cojocuri, uscare, EIP anti-alunecare) și să monitorizeze eventele și starea angajaților după căderi."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. V: riscuri fizice în grădiniță includ alunecări și căderi. Administratorul evaluează riscul (podea udă = mare risc), asigură protecție (cojocuri, uscare, EIP), supraveghea angajații și oferă control medical la oricine s-a lovit (evaluare accidentare, limitări temporare).",
    "tooltipCorrect": "Alunecări pe podele ude = risc fizic în grădiniță. Administratorul pune cojocuri, uscare periodică și monitorizează sănătatea angajaților."
  },
  {
    "id": "SSM-017",
    "section": "SSM - Legea 319/2006",
    "topic": "Efort fizic și condiții medicale relevante",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "Un muncitor spune administratoarei că are dureri cronice de spate și nu poate ridica obiecte grele (saci cu nisip, baxuri cu mâncare). Administratoarea zice: \"Toți au dureri de spate. Și ridică toți.\" Cu ce obligație din Legea 319/2006 cap. V este în conflict?",
    "options": [
      {
        "id": "A",
        "text": "Cu supravegherea medicală și evaluarea aptitudinii. Dacă muncitorul are afecțiune medicală relevantă (dureri spinale cronice), trebuie verificare medicală și eventualadaptare a sarcinilor. Legea 319/2006, cap. V obligă adaptare măsuri pentru persoane cu afecțiuni relevante."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, nu-i obligație a grădiniței — muncitorul trebuie să se întâlnească cu propriul medic particular ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, adaptarea e doar pentru persoane cu dizabilități 80%+, nu pentru dureri ordinare și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, cu nici una — lucrul fizic e obligatoriu indiferent de stare medicală și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. V obligă angajatorul să adapteze măsuri pentru persoane cu afecțiuni medicale relevante. Dureri spinale cronice = limitație pentru efort fizic. Administratorul solicită evaluare medicală și reduce/adapte sarcini (nu mai ridică grele, nu face lucru pe scări etc.).",
    "tooltipCorrect": "Afecțiuni medicale relevante (spinale, cardiace, etc.) necesită adaptare sarcini. Administratorul evaluează cu medicul și reajustează."
  },
  {
    "id": "SSM-018",
    "section": "SSM - Legea 319/2006",
    "topic": "Riscuri cu substanțe — contact piele și respirator",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "O muncitoare manipulează frecvent (zilnic, 8 ore) produse de curățenie concentrate și începe să aibă mâini uscate, crevase, dermatită. Administratoarea o vede dar spune: \"Asta se întâmplă la toată lumea la curățenie — nu e boală\". Ce lipsă de obligație?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, nici o obligație — dermatita e cosmetic, nu medical ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Supraveghere medicală și evaluare risc chimic. Contactul zilnic cu substanțe concentrate = risc dermatologic documentat. Administratoarea trebuie să evalueze expunere, să ofere EIP corespunzător (mânuși de protecție, creme), și să asigure control medical pentru dermatită profesională."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, dermatita e responsabilitate personală, nu a grădiniței și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, muncitoarea trebuie să-și spele pur și simplu mâinile mai des urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. V: supraveghere medicală pentru riscuri chimice (contact piele). Dermatita din contact cu substanțe de curățenie e risc profesional documentat. Administratorul evaluează expunere, oferă EIP (mânuși, creme protectoare), și oferă control medical pentru diagnosticare și tratament.",
    "tooltipCorrect": "Dermatita din substanțe chimice e risc profesional. Administratorul ofere EIP și control medical."
  },
  {
    "id": "SSM-019",
    "section": "SSM - Legea 319/2006",
    "topic": "Evaluare și adaptare pt intoleranțe alimentare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "O muncitoare care manipulează alimente zilnic are alergii la fructe de mare (crevete, moluște). Administratoarea nu o evaluează medical și o obligă să manipuleze mancaruri cu crevete în perioada de pregătire. Muncitoarea se înrăiește cu urticarie. Este acceptabil?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, administratoarea ar trebui să-i dea antihistaminic înainte de lucru ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, da, alergia e problema personală și poate lucra dacă vrea ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Nu. Legea 319/2006, cap. V obligă evaluare medicală pentru riscuri biologice/alimentare și adaptare măsuri. Muncitoarea cu alergii cunoscute NU trebuie expusă la alergen. Administratoarea trebuie să-o mute pe post fără fructe de mare sau să-i ofere EIP (mănuși)."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, alergia e invenție — creveta nu-i alergen real ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. V: adaptare măsuri pentru persoane cu afecțiuni medicale relevante. Alergie la fructe de mare = risc la locul de muncă cu manipulare alimente. Administratorul evaluează cu medic și adapte (post fără alergene, EIP, rotație) sau mută pe altă sarcină.",
    "tooltipCorrect": "Alergii cunoscute = adaptare post sau sarcini. Administratorul cooperează cu medicul și protejează muncitoarea."
  },
  {
    "id": "SSM-020",
    "section": "SSM - Legea 319/2006",
    "topic": "Verificare aptitudine după expunere la risc",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "Un muncitor lucrează 3 zile consecutiv în depozit cu ventilație defectuasă, expus la fum și vapori. Administratoarea nu-l trimite la medicul muncii pentru verificare \"dacă e nevoie\". El se plânge de dureri de cap și amețeli. Cum ar trebui să acționeze?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, să-i dea Aspirina și să-l lase să se odihnească 2 zile și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, să aștepte ca muncitorul să se intoarcă de acasă sănătos și să reia munca și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, să-i schimbe doar locul de muncă fără control medical urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Să-l trimită IMEDIAT la control medical după expunere. Legea 319/2006, cap. V obligă verificare aptitudine după expuneri la riscuri. Simptomele (dureri de cap, ameți) sunt semne de efecte — medicul evaluează și decide dacă muncitor e apt sau trebuie tratament."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. V: control medical după expuneri la riscuri. Muncitorul expus 3 zile la vapori și fum este expus real la riscuri respiratorii. Simptomele (dureri de cap, ameți) sunt indicii de problemă. Administratorul trimite la medicul muncii pentru evaluare și eventual tratament.",
    "tooltipCorrect": "După expuneri la riscuri, control medical imediat. Medicul evaluează aptitudine și sănătate."
  },
  {
    "id": "SSM-021",
    "section": "SSM - Legea 319/2006",
    "topic": "Definire accident cu vătămare",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "Un muncitor se lovește ușor la deget cu ciocan (nici sânge, nici spital). Un coleg observă și zice: \"Asta nu e accident în sens legal — nu s-a rănit grav\". Este corect?",
    "options": [
      {
        "id": "A",
        "text": "Incorect. Legea 319/2006, cap. VI defineșe accident cu vătămare pe locul de muncă orice incident care produce o vătămare corporală (chiar mică). Lovitura de ciocan = vătămare, deci accident (pân și urme sunt dovadă)."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, corect — accidentele legale sunt numai cu spitalizare ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, nu e accident decât dacă e martori ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, accidentele se numără numai dacă omul lips 3 zile de la lucru urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. VI: accident cu vătămare = orice incident pe locul de muncă care produce o vătămare corporală (leziune tisulară, indiferent de amploare). Chiar ușoare loviturile, pân, vânătăi sunt accidente și trebuie anunțate, investigate și înregistrate.",
    "tooltipCorrect": "Accident = orice vătămare corporală pe locul de muncă. Chiar mică. Se anunță și se înregistrează."
  },
  {
    "id": "SSM-022",
    "section": "SSM - Legea 319/2006",
    "topic": "Incident periculos — definire și raportare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "O scară se clatină în mâinile muncitorului căreia urcă spre raft, dar el reușește să se susțină și nu cade. Niciun rănit. O colegă spune: \"Nu-i accident — nu s-a întâmplat nimic\". Trebuie raportat conform Legii 319/2006?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, scara e doar instrument — clatinarea nu e pericol real urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Da, trebuie raportat ca incident periculos. Legea 319/2006, cap. VI includ în evenimentele raportabile și situații care NU au produs vătămare dar PUTEA produce accident (clatinare scară = risc cădere, deci incident periculos)."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, E incident periculos dar se raportează numai dacă se află un inspector în birou urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, nu trebuie raportat — nu s-a rănit nimeni și nici nu a fost pericol real și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. VI: evenimentele raportabile includ accidente cu vătămare ȘI incidente periculoase (situații care NU au produs vătămare dar PUTEA produce accident). Scara clatinată = risc cădere documentat. Administratorul raportează și investigează cauza (scară defectă? procedură greșit?).",
    "tooltipCorrect": "Incident periculos = situație care putea produce accident (chiar dacă nimeni nu s-a rănit). Se raportează și investighează."
  },
  {
    "id": "SSM-023",
    "section": "SSM - Legea 319/2006",
    "topic": "Anunțare imediată a conducătorului locului de muncă",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "Un muncitor sufocă puțin după ce curăță o cameră cu clorina și nu-și face bine plămânii. El se gândește că va cere apă și va merge la spital peste 2 ore dacă nu se simte mai bine. Nu anunță administratoarea. Este corect?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, da, e bine că nu-i deranjează administratoarea cu mica problemă ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, sufocul trece de obicei în 10 minute — nu e nevoie de anunțare și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Nu. Legea 319/2006, cap. VI obligă anunțare IMEDIATĂ a conducătorului (administratorului) pentru orice situație care poate produce accident sau îmbolnăvire. Sufocul după clorin = urgent medical. Administratora trebuie să ofere prim-ajutor și să-l trimită la control medical imediat."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, muncitorul ar trebui să-și monitorizeze singur și să-și ia propriul taxi la spital și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. VI: anunțare IMEDIATĂ a conducătorului locului de muncă pentru orice situație ce poate produce accident/îmbolnăvire. Sufoc după expunere la clor = semn de inhalare dăunătoare. Administratorul ofere prim-ajutor (aer curat, poziție), anunță medicul și trimite la control medical urgent.",
    "tooltipCorrect": "Simptomele după expunere (sufoc, ameți, dureri) se anunță IMEDIAT. Nu se așteaptă timp."
  },
  {
    "id": "SSM-024",
    "section": "SSM - Legea 319/2006",
    "topic": "Cercetare și cauze ale accidentelor",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "După un accident (muncitor cade de pe scară), administratoarea trebuie să cerceteze. Un coleg spune: \"Cercetarea durează — mai bine NU o mai facem și-i spun omului că nu s-a întâmplat nimic?\" Cum ar trebui să gândească administratoarea?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, cercetarea ar trebui făcută numai de inspecție SSM, nu de administrator ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, colegul are dreptate — cercetarea e costisitoare în timp și bani și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, cercetare e opțională dacă muncitorul zice \"nu vreau\" și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Incorect. Legea 319/2006, cap. VI obligă cercetare a oricărui accident (cu sau fără vătămare) pentru a identifica cauze și măsuri de prevenire. Fără cercetare, acelaș accident se repetă. Administratoarea cercetează: de ce scara era instabilă? de ce muncitor a cărcat pe scară fără fixare? etc."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. VI: evenimentele (accidente, incidente) se cercetează pentru a identifica cauze și a preveni în viitor. Fără cercetare, riscurile se ignoră și se repetă. Administratorul investigă ORICÂND se produce accident și documentează constatări, cauze și măsuri corecative.",
    "tooltipCorrect": "Orice accident se cercetează pentru cauze și prevenire. E responsabilitate a administratorului."
  },
  {
    "id": "SSM-025",
    "section": "SSM - Legea 319/2006",
    "topic": "Modificarea locului evenimentului — prohibit",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "După un accident (muncitor cade pe aur în depozit), administratoarea vede noroi pe podea și decide: \"Curăț acum podea și o aranj — nu vreau să vadă inspectorii locul murdar\". Este corect?",
    "options": [
      {
        "id": "A",
        "text": "Nu. Legea 319/2006, cap. VI prohibit modificare locului evenimentului dacă poate afecta cercetarea și determinarea cauzelor. Administratoarea trebuie să păstreze locul intact pentru cercetare (fotografii, constatări tehnician, eventual inspecție). Curățenie se face DUPĂ cercetare."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, da, e bine să se curețe rapid și să se evite stigmatizarea locului și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, locul se poate curăța imediat dacă inspecția nu vine în 24 de ore și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, modificare e OK dacă muncitorul spune că nu-i nevoie de cercetare ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. VI: NU se modifică locul evenimentului dacă poate afecta cercetarea și identificarea cauzelor. Noroi, scară, etiquete de pericol — toate sunt dovezi. Administratorul documentează (fotografii), cercetează cu tehniciani și abia apoi curăță. EXCEPT dacă salva persoane sau îndepărtează pericol iminent (cădere altă persoană).",
    "tooltipCorrect": "Locul accidentului se păstrează intact pentru cercetare. Curățenie doar DUPĂ documentare și investigație."
  },
  {
    "id": "SSM-026",
    "section": "SSM - Legea 319/2006",
    "topic": "Salvare persoane vs. păstrare loc — prioritate",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "Un muncitor cade pe o scară și-și agață mâna sub reperul ieșit. Scara se clătină și-i amenință pe alții. Administratoarea trebuie să-l scoată din pericol (care va muta scara). Dar apoi, pentru cercetare, e nevoie de locul intact. Cum prioritizează administratoarea?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, scoate muncitorul și imediat curăță toată zona — nu-i nevoie de dovezi și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Scoate muncitorul din pericol, stabilizează scara (care modifică puțin locul), și APOI documentează cu fotografii ceea ce mai e intact. Legea 319/2006, cap. VI: salvarea persoanelor și înlăturarea pericolului iminent au prioritate asupra păstrării locului. După salvare, cercetare pe baza fotografiilor."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, păstrează locul intact și nu-l mai scoate pe muncitor — protecția scenei e mai importantă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, asteapta inspecție SAM să vină și să dea aprobarea pentru mutare și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. VI: NU se modifică locul evenimentului dacă afectează cercetare, CU EXCEPȚIA salvării persoanelor sau înlăturării unui pericol iminent. Scara clatinată care amenință alții = pericol iminent. Administratorul o stabilizează (salva vieți), apoi fotografiază ceea ce rămâne intakt și cercetează.",
    "tooltipCorrect": "Salvare vieți > păstrare loc. Dacă trebuie să mutezi ceva pentru salvare, o faci. Apoi fotografiezi și cercetezi."
  },
  {
    "id": "SSM-027",
    "section": "SSM - Legea 319/2006",
    "topic": "Refuzul de a anunța accident — consecințe",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "Un muncitor cade și-și rupe braț. Administratoarea ii zice: \"Te-ai lovit pe acasă — nu pe locul de muncă. Nu îl anunț pe nimeni și nici nu-l înregistrez\". Muncitorul are frică de jobs și acceptă. Este legal?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, da, e acord între ei — nu trebuie anunțat și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, anunțare e opțională dacă vânzări spital sunt mici urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Nu. Legea 319/2006, cap. VI obligă anunțare IMEDIAT și înregistrare a oricărui accident pe locul de muncă, indiferent de acord între parți. Refuzul de anunțare/înregistrare e încălcare graves și expune grădiniță la sancțiuni și entități de control. Muncitorul trebuie informat și protejat (asigurare, salariu în recuperare)."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, pot face aranjament dacă muncitor e speriat de pierderea jobului și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. VI: anunțare IMEDIAT și înregistrare/raportare evenimentelor sunt obligatorii, indiferent de acord. Refuz de anunțare = încălcare graves. Administratorul trebuie să anunțe conducere, medicul muncii și organele de control (ITM, ISJ). Ascundere = pedeapsă penală și civilă.",
    "tooltipCorrect": "Accidente se anunță și se înregistrează obligatoriu. Ascundere = infracțiune."
  },
  {
    "id": "SSM-028",
    "section": "SSM - Legea 319/2006",
    "topic": "Cooperare în cercetare — obligație lucrătorului",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "După un accident, o echipă de cercetare din SSM interviu lucrătorii. Unul dintre ei refuză să fie intervievat și zice: \"Nu vorbesc cu cercetătorii — e problemă personală între mine și administrator\". Este permis?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, da, are drept la intimitate și nu trebuie să vorbească cu cercetători și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, poate refuza, dar atunci cercetarea nu e validă și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, lucrătorul trebuie să vorbească cu administator doar dacă se simte că are drept ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Nu. Legea 319/2006, cap. IV și VI obligă cooperare cu cercetători și organele de control SSM. Refuzul de a coopera în cercetarea accidentelor e încălcare și poate fi sancționat."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. IV (cooperare) și cap. VI (cercetare): lucrătorului e obligație să coopereze cu cercetători SSM, cu administratorul și cu organele de control. Refuz de cooperare = încălcare. Scopul cercetării e identificarea cauzelor și prevenire — cooperarea protejează angajații din viitor.",
    "tooltipCorrect": "Cooperare în cercetare accidente = obligație. Refuzul e încălcare și poate fi sancționat."
  },
  {
    "id": "SSM-029",
    "section": "SSM - Legea 319/2006",
    "topic": "Înregistrare și evidență de accidente",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "Administratoarea ține un jurnal de mână cu \"accidente mici — toți au fost bine\". Inspecția SSM solicită registrul oficial de accidente și administratoarea spune: \"Nu am registru oficial — notez în jurnal\". Este acceptabil?",
    "options": [
      {
        "id": "A",
        "text": "Nu. Legea 319/2006, cap. VI obligă înregistrare și raportare conform procedurilor legale stabilite. Administratorul ține registru oficial de accidente (conform formularelor și procedurilor) și îl ține la dispoziția organelor de control."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, da, jurnalul personal e suficient pentru înregistrări și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, jurnalul e privat și inspecția nu are drept să-l vadă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, înregistrări e opțională dacă nu-s accidente grave și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. VI: evenimentele (accidente, incidente) se înregistrează și se raportează conform procedurilor legale. Administratorul ține registru oficial (formular standardizat), completează cu date complete (dată, timp, loc, descriere, persoane implicate, martorii, cauze) și îl ține la dispoziția organelor de control (ITM, inspecție SSM).",
    "tooltipCorrect": "Accidente se înregistrează în registru oficial standardizat. Jurnal personal nu e suficient."
  },
  {
    "id": "SSM-030",
    "section": "SSM - Legea 319/2006",
    "topic": "Raportare situații ce putea produce accident",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "O apă se varsă în hol și nimeni nu-i rănit. Administratoarea se gândește: \"Nu-s vătămări — nu are rost să raportez.\" Un coleg zice: \"Pe bună dreptate — situație care putea produce accident trebuie raportată.\" Cine are dreptate?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, nici una — situații minore nu merita raportare și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Colegul are dreptate. Legea 319/2006, cap. VI obligă raportare și înregistrare și a situațiilor care PUTEA produce accident (incidente periculoase), chiar dacă nimeni nu s-a rănit. Apă varsată în hol = risc alunecari și căderi. Se înregistrează și se studiază cum s-a întâmplat pt prevenire."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, administratoarea — nu s-a rănit nimeni, deci nu e raport ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, raportare e doar pentru accidente cu ambulanță ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. VI: raportare și înregistrare se aplică și situațiilor care NU au produs vătămare dar PUTEA produce accident (incidente periculoase). Apă varsată = risc alunecari. Administratorul documentează, cercetează cum s-a întâmplat (depozitor spart? scurgere?) și pune măsuri (curățenie regulată, cojocuri, semne).",
    "tooltipCorrect": "Situații ce putea produce accident (incidente periculoase) se raportează și se investigă."
  },
  {
    "id": "SSM-031",
    "section": "SSM - Legea 319/2006",
    "topic": "Femei gravide — adaptare măsuri de protecție",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VII",
    "type": "single",
    "question": "O muncitoare anunță administratoarea că e gravidă (luna 2). Administratoarea o ține pe aceleleași sarcini: manipulare depozit (grele), expunere produse chimice (clor), și efort fizic (8 ore zilnic la picioare). Este conform Legii 319/2006?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, da, gravida poate lucra în orice post dacă se simte bine și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, gravida ar trebui să-și ia leave de acasă dacă nu e confortabil urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Nu. Legea 319/2006, cap. VII obligă adaptare măsuri pentru femei gravide. Riscuri (efort fizic, chimice, alunecări) pot afecta sarcina. Administratoarea trebuie să: retrage din manipulare grele, reduc expunere chimice (mănuși, ventilație), oferă pauze frecvente, adaptează locul pentru ușurare. Medicul muncii evaluează și recomandă restricții."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, riscuri de lucru nu afectează bebelușul — placentă protejează ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. VII: adaptare măsuri pentru femei gravide. Riscuri documentate în grădiniță (efort fizic, chimice, alunecări, boli infecțioase) pot afecta sarcina. Administratorul luchrează cu medicul muncii pentru a restricționa/adapta sarcini (mut din depozit la birou, reduc chimice, ofere pauze frecvente, picioare ridicate).",
    "tooltipCorrect": "Femei gravide: adaptare măsuri. Reduc efort fizic, chimice, stres. Medicul muncii recomandă restricții."
  },
  {
    "id": "SSM-032",
    "section": "SSM - Legea 319/2006",
    "topic": "Femei lăuze — restricții la expuneri",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VII",
    "type": "single",
    "question": "O muncitoare se întorce de la licență de maternitate (copil 3 luni) și e încă în perioada de alăptare. Grădina o trimite înapoi la depozit cu clor (8 ore zilnic, fără ventilație adecvată). Poate clorul afecta copilul prin lapte?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, nu, clorul nu intra în lapte — nu e risc și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, riscuri chimice nu intra în lapte matern urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, alăptarea e problema personală a femeii — munca continua normal urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Corect — poate afecta. Legea 319/2006, cap. VII protejează femei în perioada de alăptare. Clorul și alte chimice nu trebuie să expună alăptare (substanțe pot intra în lapte). Administratoarea trebuie să adapte: mută la birou, reduc chimice, ofere pauze pentru alăptare."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. VII: protecție pentru femei care alăptează. Riscuri documentate (chimice) pot fi absorbite și transferate în lapte. Administratorul adapte măsuri: reduc expunere chimice, ofere pauze pentru alăptare, eventual mut pe post cu risc minim pe perioada alăptării. Medicul muncii recomandă restricții specifice.",
    "tooltipCorrect": "Femei alăptoare: adaptare măsuri. Reduc expunere chimice, ofere pauze. Medicul recomandă restricții."
  },
  {
    "id": "SSM-033",
    "section": "SSM - Legea 319/2006",
    "topic": "Tineri — supraveghere și instruire adecvate",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 319/2006, cap. VII",
    "type": "single",
    "question": "Un tânăr (17 ani) e angajat într-o grădiniță cu program prelungit. Administratoarea-l pune să lucreze in depozit cu substanțe chimice fără instruire specială. Este legal?",
    "options": [
      {
        "id": "A",
        "text": "Nu. Legea 319/2006, cap. VII include tinerii (sub 18 ani) ca grup sensibil. Administratoarea obligată să: asigure instruire specială, supraveghere mai atentă, restricții la munca periculoasă (chimice concentrate, efort fizic greu, riscuri biologice). Medicul muncii evaluează aptitudine."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, instruire e opțională dacă tânărul a lucrat înainte urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, tinerii nu sunt incluși în categorii sensibile — doar gravide și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, da, adolescenți pot lucra cu orice dacă au 16+ și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. VII: tinerii (sub 18 ani) sunt grup sensibil. Adolescenții nu sunt coapți biologic/psihologic. Administratorul asigură: instruire specifică, supraveghere cu atenție, restricții munca periculoasă (chimice concentrate, mașini, efort greu). Medicul muncii evaluează apt. și limitări pe vârstă.",
    "tooltipCorrect": "Tineri sub 18 ani: grup sensibil. Instruire specială, supraveghere, restricții munca periculoasă."
  },
  {
    "id": "SSM-034",
    "section": "SSM - Legea 319/2006",
    "topic": "Persoane cu dizabilități — adaptare sarcini",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VII",
    "type": "single",
    "question": "Un angajat cu grădină de 25% (probleme de vedere) angajat în depozit. Administratoarea-l pune să verifice etiquete pe produse și să numere ingrediente (citeț fin). Angajat se plânge că nu vede bine și comite greșeli. Cum trebuie să acționeze administratoare?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, angajați cu dizabilități trebuie să accepte orice post și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Legea 319/2006, cap. VII obligă adaptare măsuri pentru persoane cu dizabilități. Problemele de vedere = limită pt citit fin. Administratoare trebuie să: mută pe sarcini cu text mai mare (inventar, prelucrare date) sau la care prezența nu necesită ochii (organizare material), ofere lupe cu iluminare, adaptează locul de muncă (scaun înalt, iluminare mai bună)."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, dacă nu poate citi etiquete, nu e bun pt depozit — să-l deschidă din grădiniță și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, dizabilitatea e problema angajatului — trebuie să-și înlătureze limitările el ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. VII: persoane cu dizabilități sunt grup sensibil. Administratorul obligat să adaptez măsuri (locul de muncă, sarcini, echipament, orar) conform aptitudinilor. Problemele de vedere → mut de la citit fin la sarcini mai generale, ofere lupe/iluminare, eventuala tehnologie de asistență. Medicul muncii recomandă adaptări specifice.",
    "tooltipCorrect": "Dizabilități: adaptare măsuri și sarcini. Administratorul luchrează cu medicul pentru adaptări."
  },
  {
    "id": "SSM-035",
    "section": "SSM - Legea 319/2006",
    "topic": "Afecțiuni medicale cronice — evaluare și adaptare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VII",
    "type": "single",
    "question": "Un muncitor are asma ocupațională diagnosticată din expunere anterioară la chimice. Administratoare-l angajează și-l trimite în depozit cu produse volatile (diluanți, solvenți, vopsele) 8 ore zilnic. După o lună, muncitorul suferă crize de astm și cere restricții. Administratoare refuza. Este legal conform Legii 319/2006?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, muncitor trebuie să ia medicamente și să continue cu aceleași sarcini și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, da, asma e condiție medicală personală — grădina nu e responsabilă pentru agravări și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Nu. Legea 319/2006, cap. VII: persoane cu afecțiuni medicale relevante sunt grup sensibil. Asma ocupațională e limitație profesională documentată. Administratoare obligată să evalueze cu medicul și să restricționeze expunere (mut din depozit, ofere masca respiratorie, reduc ore în chimice) conform recomandării medicale."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, persoane cu asma nu trebuia angajate în grădiniță și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. VII: persoane cu afecțiuni medicale relevante (asma ocupațională) sunt grup sensibil. Administratorul obligat să adaptez măsuri și restricții expunere conform evaluării medicale. Expunere neadaptată la chimice volatile = agravare boală și răspundere juridică.",
    "tooltipCorrect": "Afecțiuni medicale relevante: evaluare medicală și adaptare măsuri. Nu se continuă expunere dacă medicul recomandă restricții."
  },
  {
    "id": "SSM-036",
    "section": "SSM - Legea 319/2006",
    "topic": "Evaluare riscuri pentru grupuri sensibile — obligație administratorului",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. VII",
    "type": "single",
    "question": "Grădina angajează 5 persoane noi: 1 gravidă, 1 tânăr 17ani, 1 cu problemă spinal, 1 cu alergii la praf, 1 normal. Administratoarea nu evaluează riscuri specifice pt fiecareul și zice: \"Toți vor sa lucreze in depozit cu chimice — la fel toți.\" Este corect?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, da, e egal pentru toți — NU discriminare și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, evaluare individuală e discriminare — trebuie trătat egali pe toți și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, riscuri sunt obiective — nu depinde de grup și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Nu. Legea 319/2006, cap. VII obligă angajator să evalueze riscuri specific pt fiecare grup sensibil (gravide, tineri, dizabilități, alergii). Aceleași riscuri afectează diferit pe fiecare. Administratoare trebuie să: evalueze medical, restricționez/adapte sarcini individual (gravidă mut din depozit, tânăr cu supraveghere + instruire, spinal fără grele, alergii cu masca/filtru)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. VII: angajatorul obligat să evalueze riscuri și adaptez măsuri individual pt fiecare persoană din grup sensibil. Egalitate ≠ identitate. Tratament egal pentru toți = greșit (ignora nevoile specifice). Tratament diferențiat pe baza riscurilor = corect și obligatoriu. Medicul muncii evaluează și recomandă restricții.",
    "tooltipCorrect": "Grupuri sensibile: evaluare individuală și adaptare măsuri specific pe baza riscurilor."
  },
  {
    "id": "SSM-037",
    "section": "SSM - Legea 319/2006",
    "topic": "Lanț de obligații — cap. IV, V, VI (accident chimie)",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV-VI",
    "type": "single",
    "question": "O muncitoare inhala vapori de diluant în depozit (ventilație defectă, NU-i avertizare). Nimeni n-a observat, dar după 1 oră-și simte cauza dureri de cap și ameți. Ce obligații aplică și ce ordine (cap. IV, V, VI)?",
    "options": [
      {
        "id": "A",
        "text": "(1) Anunță IMEDIAT administratoare (cap. IV — comunicare imediată), (2) Administrator ofere prim-ajutor și-o trimite la control medical urgent (cap. V — supraveghere medicală după expunere), (3) Cercetează cauza — de ce ventilație era defectă? (cap. VI — cercetare), (4) Documentează și raportează eveniment (cap. VI — înregistrare), (5) Reparează ventilație și instruiește personalul (cap. IV — măsuri prevenire)."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, asteapta pâna mâine și merge la doctor particular — administratoare nu e responsabilă urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, muncitoare e responsabil — trebuia să verifice ventilație înainte de lucru urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, administratoare notează în jurnal și amâna cercetarea la sfârsit de lună urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006: (cap. IV) lucrătorului anunță IMEDIAT situație periculoasă. (Cap. V) Administrator ofere control medical urgent și evaluează riscuri chimice. (Cap. VI) Cercetează cauza (ventilație defectă) și documentează. (Cap. IV) Reparează și instruiește prevenție. Lanț: comunicare → acuzie medicală → investigație → reparație → instruire.",
    "tooltipCorrect": "Accident chimic: anunț → medicină → cercetare → reparație → instruire. Toate obligații cap. IV-VI aplică."
  },
  {
    "id": "SSM-038",
    "section": "SSM - Legea 319/2006",
    "topic": "Scară instabilă și accident — modificare loc accidental",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV, VI",
    "type": "single",
    "question": "Muncitor cade de pe scară instabilă în depozit și-și rupe picior. Locul show scară cu picioare ieșite de jos. Administratoare vrea să curețe grăbite și să mut scara \"pentru a nu deranja alții\". Ce trebuie să-i explice inspecția SSM?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, administratoare poate muta dacă nu-s martorii pe-acolo urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "NU se modifica locul evenimentului. Legea 319/2006, cap. VI prohibit modificare dacă poate afecta cercetare. Scara instabilă = dovadă a cauzei. Administratoarea trebuie să: (1) Documenteze cu fotografii, (2) Cerceteze (cum scara devine instabilă?), (3) Abia apoi curețe și repareze. EXCEPT dacă pericol iminent — atunci mut, dar fotografiază prima."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, scara e doar instrument — ce dovadă are pentru cercetare ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, curățenia e mai importantă — move scara și gata urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. VI: NU se modifică locul accidentului dacă poate afecta cercetare. Scara instabilă = dovadă materiala a cauzei. Administratorul documentează (fotografii), cercetează cauza (cum s-a deocheat), și abia apoi curăță. Mut imediat = pierde dovada și investigație.",
    "tooltipCorrect": "Locul accidentului: fotografiază ÎNAINTE de curățenie. Nu se modifica cât timp cercetarea e în curs."
  },
  {
    "id": "SSM-039",
    "section": "SSM - Legea 319/2006",
    "topic": "Obligații cap. IV+V — instruire și medicină pt chimie",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV, V",
    "type": "single",
    "question": "Grădina primeste cantitate noua de clor concentrat (fără etichetă în limba română, doar ruseștea). Administratoare-l pune la dispoziție muncitorilor \"dacă știu cum să-l folosească\". Trei muncitori dezvolt probleme respiratorii. Ce obligații (cap. IV, V) nu au fost respectate?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, probleme respiratorii sunt allergie personală, nu risc profesional și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, muncitori au responsabilitate personală de a citi etichete ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "(Cap. IV) NU-și putea folosi chimic fără instrucțiuni corecte — administratoare obligată să cerere etichetă în limba locului și să instruiască. (Cap. V) Obligată să asigure supraveghere medicală pt riscul chimic (control la angajare, periodic, și după expunere/probleme). Trei muncitori cu probleme respiratorii = semnale de expunere neadaptate și necesitate control medical urgent."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, nu e problema administrației — etichetă e responsabilitate furnizorului și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006: (cap. IV) substanțe pericolase se folosesc numai cu documente (etichetă, fișă de siguranță) în limba locului și instruire de administrator. Fără etichetă NU se folosește. (Cap. V) Riscuri chimice necesită supraveghere medicală, control periodic și urgent după expunere. Trei muncitori cu probleme = dovadă că măsuri medicale lipseau.",
    "tooltipCorrect": "Substanțe chimice: etichetă obligatorie, instruire obligatorie, medicină obligatorie. Lipsă = infracțiune SSM."
  },
  {
    "id": "SSM-040",
    "section": "SSM - Legea 319/2006",
    "topic": "Gravidă și accident — prioritate adaptare (cap. VII, IV)",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VII, IV",
    "type": "single",
    "question": "O muncitoare gravidă (luna 3) e expusă la miros de gaz (scurgere în bucătărie) și se doare abdominal. Administratoare NU adaptase pina atunci munca. Cum prioritizează obligațiile cap. VII și IV?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, gaz pe scurt nu dăunează copilul — muncitoare poate continua și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, administratoare trebuie să-i ofere doar mască de protecție și gata și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, muncitoare trebuie să-și termine turnu — gravida e decizie personală și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "(Cap. VII) Prioritate: IMEDIAT retrage din expunere chimică (gaz). Femei gravide = grup sensibil — riscuri chimice pot afecta sarcina. (Cap. IV) Anunță IMEDIAT conducere despre expunere la gaz (pericol). (Cap. V) Control medical urgent (evaluare sarcină după expunere). (Cap. IV) Reparează scurgere și instruiește prevenție. Ordinea: retrage din pericol → medicină urgentă → reparație → instruire."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006: (cap. VII) femei gravide = grup sensibil protejat. Expunere la gaz = risc iminent pentru sarcină. Prioritate: retrage din pericol IMEDIAT. (Cap. IV) anunț conducere și lucrători despre pericol. (Cap. V) control medical urgent după expunere chimică. (Cap. IV) reparează scurgere și instruiește. Lanț: protecție gravidă → alertă → medicină → reparație.",
    "tooltipCorrect": "Gravide în pericol chimic: retrage IMEDIAT, medicină urgent, reparație, instruire."
  },
  {
    "id": "SSM-041",
    "section": "SSM - Legea 319/2006",
    "topic": "EIP refuzat și accident rezultat — responsabilitate",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV, VI",
    "type": "single",
    "question": "Administratoare ofere mănuși de protecție pt manipulare clorin. Muncitor le refuza — \"vreau să simt material\". După 2 ore, mâinile arde și crapă din clor. Accident se raportează — cine e responsabil?",
    "options": [
      {
        "id": "A",
        "text": "Ambii. (Cap. IV) Administratoare oferse EIP și instruiție — aceea e obligație îndeplinit. (Cap. IV) Muncitor refuza EIP și este încălcare a obligației sale de a-l utiliza. (Cap. VI) Accident se raportează oricare. Responsabilitate mixtă: administratoare nu-l forța pe muncitor să refuze (avea supraveghere?), și muncitor încălcă obligație. În litigiu, instanța evaluează cât fiecare contributed."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, muncitor — a refuzat EIP și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, nici nu — e accident personal al muncitorului și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, administratoare — nu-i impuse muncitorului și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006: (cap. IV) Administratoare obligată să ofere EIP și instruire — ASTA e făcut. (Cap. IV) Muncitor obligat să-l utilizeze corect — refuz = încălcare a obligației. (Cap. VI) Accident se raportează indiferent. Responsabilitate mixtă: administratoare ar trebui să supravegheze și să forțeze utilizare EIP (supraveghea și sancționa refuzul); muncitor încalcă obligație prin refuz. Instanța decide după probă care parte e mai vinovat.",
    "tooltipCorrect": "EIP refuzat: ambii au obligații. Administratoare ofere + supraveghea; muncitor utilizează. Refuzul e încălcare."
  },
  {
    "id": "SSM-042",
    "section": "SSM - Legea 319/2006",
    "topic": "Tânăr în pericol — instruire și supraveghere (cap. IV, VII)",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV, VII",
    "type": "single",
    "question": "Tânăr 17 ani e pus în depozit cu substanțe chimice și-i zice: \"Citeți etiqueta și lucrează\". După 1 oră face o greșeală: amestecă două chimice care reacționează și face fum. Cine e responsabil conform cap. IV și VII?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, tânărul NU trebuia angajat în depozit — asta e greșeala inițiala urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Administratore. (Cap. IV) Instruire nu e doar \"citit etichetă\" — trebuie instruire detaliat despre utilizare, compatibilitate, riscuri. (Cap. VII) Tineri = grup sensibil — necesită supraveghere ATENTĂ și instruire SPECIFICĂ (nu-s coapți pt riscuri chimice). Administratoare NU asigură nicio măsură — pune tânăr în risc fără supraveghiere. Responsabilitate amministrației."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, tânărul — ar trebui să citească și să gândească și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, nici nu — muncitor era adult suficient de a lucra și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006: (cap. IV) instruire detaliată e obligație. \"Citit etichetă\" nu e instruire — trebuie explicare practică. (Cap. VII) tineri (sub 18) = grup sensibil care necesită supraveghere atentă și instruire specifică + restricții. Administratoare omise ambele. Responsabilitate: administratoare nu asigură instruire nici supraveghere pt grup sensibil.",
    "tooltipCorrect": "Tineri: instruire detaliat + supraveghere atentă + restricții. \"Citit etichetă\" nu e instruire."
  },
  {
    "id": "SSM-043",
    "section": "SSM - Legea 319/2006",
    "topic": "Miros de gaz — anunț imediata vs. delay (cap. IV, VI)",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV, VI",
    "type": "single",
    "question": "O muncitoare simte miros de gaz în birou (gaz metan posibil din scurgere). Ea spune colegei: \"O voi anunța după ce-și termina aceasta sarcină — în 30 de minute.\" Este corect conform cap. IV?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, 30 minute nu e delay substanțial dacă gaz e ușor și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, da, e bine sa-și termina sarcina întâi ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Nu. (Cap. IV) Obligație de anunțare IMEDIATĂ pentru orice situație care poate produce accident. Miros de gaz = pericol iminent (explozie, intoxicație). Trebuie anunțat ACUM, nu peste 30 min. Delay risca expunere continuă a altor persoane și persoane. (Cap. VI) Apoi se cercetează sursa."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, miros de gaz se raportează doar dacă-l simt mai multi oameni și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006: (cap. IV) anunț IMEDIAT conducătorului locului de muncă pentru orice situație ce poate produce accident/îmbolnăvire. Miros de gaz = pericol iminent (explozie, intoxicație, asphixie). Nu se amână. (Cap. VI) după anunț, se cercetează sursa și se întreprind măsuri (evacuare, verificare installer gaz, reparație).",
    "tooltipCorrect": "Miros de gaz = anunț IMEDIAT. Nu se amână. Risc iminent."
  },
  {
    "id": "SSM-044",
    "section": "SSM - Legea 319/2006",
    "topic": "Alunecări pe podea —risc cunoscut, măsuri neluate",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV, V",
    "type": "single",
    "question": "Grupa sanitară are podea adesea udă (din jocuri cu apă). În 2 luni, 4 muncitori alunecă și se lovesc ușor. Administratoare nu ia măsuri — nu pune cojocuri, nu stabilește protocol uscare. Riscul se repetă. Care obligații (cap. IV, V) sunt încălcate continuu?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, după 4 alunecări, administratoare ar trebui să închidă grupa sanitară și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, măsuri sunt responsabilitate muncitorilor — trebuie să meargă mai atent ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, nici una — alunecări sunt inevitabile în baie ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "(Cap. IV) Administratoare obligată să asigure locul de muncă sigur — cojocuri antiderapante, uscare periodică, semnalizare. (Cap. V) După fiecare accident, control medical pentru evaluare leziuni și adaptare. După 4 accidente, pattern = risc cronice. Administratoare negligență să ia măsuri și să protejeze personalul. Obligații cap. IV (protecție loc) și cap. V (medicină după accident) sunt încălcate."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006: (cap. IV) administratore obligată să asigure locul de muncă sigur — cojocuri, uscare, semnalizare. (Cap. V) riscul de alunecări/căderi = risc fizic care necesită supraveghere medicală și control după accident. După 4 accidente = pattern clar de risc nemanagejat. Administratoare neglijează obligații.",
    "tooltipCorrect": "Alunecări repetate: administratore pune cojocuri, uscare, semnalizare. După accident: control medical pentru angajați."
  },
  {
    "id": "SSM-045",
    "section": "SSM - Legea 319/2006",
    "topic": "Substanță nedocumentată — ce prevederi aplică (cap. IV, V)",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV, V",
    "type": "single",
    "question": "Grădina primeste sac cu pulbere neetichetat (destinată curățenie — cineva zice). Administratoare nu știe compoziție, riscuri, cum să-l folosească. Pune la dispoziția muncitorilor. Ce prevederi din Legea 319/2006 încalcă?",
    "options": [
      {
        "id": "A",
        "text": "(Cap. IV) Utilizare substanțe — obligație: NUMAI cu documente (etichetă, fișă de siguranță care specifică compoziție, riscuri, EIP, prim-ajutor). Fără documente, NU se folosește. (Cap. V) Riscuri chimice necesită supraveghere medicală. Administratoare nu poate asigura nici una fără cunoștință compoziție. Dacă cineva se rănești, nici prim-ajutor nu se poate offeri. Încălcare graves."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, muncitori trebuie să testeze pe braț și să vadă daca-i sigur ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, nici una — dacă-i pentru curățenie, nu-i periculos și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, etichetă e doar recomandare, nu obligație ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006: (cap. IV) substanțe periculoase se utilizează NUMAI cu documente complete (etichetă, fișă siguranță) în limba locului. Fără documente = NU se folosește. (Cap. V) riscuri chimice necesită supraveghere medicală și cunoștință despre efecte. Administratore incapabil să asigure nici una. Pericol de rănire și neizbăvitor prim-ajutor.",
    "tooltipCorrect": "Substanțe nedocumentate: NU se folosesc. E obligație să returnezi și să ceri documente complete."
  },
  {
    "id": "SSM-046",
    "section": "SSM - Legea 319/2006",
    "topic": "Dispozitiv pericol blocat + muncitor refuza raportare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Detectorul de fum în depozit se declanșează des (fals alarm) și un muncitor-l blochează cu ceva pentru \"pace\". Administratore observă. Muncitor zice: \"Nu spun nimic — vreau să rămân liniștit pe post.\" Cum trebuie să reacționeze administratoare?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, muncitor are drept la confidențialitate — nu-i poate obliga sa-și accepte dispozitiv și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Nu. (Cap. IV) Blocarea detectoru = eliminare dispozitiv de siguranță — prohibit. Administratoare: (1) Deblochez detector IMEDIAT, (2) Investighez de ce alarma falsă (senzu murdar? gaz test? defect?) și reparează, (3) Instruiță muncitorul că dispozitive NU se blochează, (4) Dacă muncitor refuza să accepte instructaj, e incălcare a obligației — se documentează și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, respectă dorința muncitorului — nu-i forța să raporteze ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, detector fals alarme — nu-i pericol real ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. IV: NU se blochează dispozitive de siguranță. Detector de fum blocat = risc incendiu nedetectat. Administratore: deblochez, investighez alarma falsă, instruiază și reparează. Refuzul muncitorului de a respecta = incălcare și trebuie documentat și raportat.",
    "tooltipCorrect": "Dispozitive de siguranță: NU se blochează. Deblochez, investighez cauza, instruiază, reparează."
  },
  {
    "id": "SSM-047",
    "section": "SSM - Legea 319/2006",
    "topic": "Control medical nu oferit — impact pe responsabilitate (cap. V, VI)",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. V, VI",
    "type": "single",
    "question": "Un muncitor se lovește ușor cu cărămidă, administratoare nu-l trimite la control medical \"dacă e prea mic\". O lună mai târziu, muncitor se prezintă la tribunal că durerea s-a agravat și-i cere despăgubiri. Administratore zice: \"E bine că-i trimiși — era accident minor.\" Tribunal poate susține cererea muncitorului?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, controlul medical e opțional pentru accidente mici și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, nu — administratoare nu-i responsabil de agravări ulterioare urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Da, poate. (Cap. V) Administratoare obligată să asigure control medical URGENT după accident — oricât de mic par. (Cap. VI) Cercetare și înregistrare accidente sunt obligații. Lipsă control medic = lipsă evaluare leziunii și diagnostic. Delayed care = risc agravare și nedetectare fracturi/lesiuni interne. Tribunal poate susține că administratoare neglijență în SSM și-i obliga la despăgubiri."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, muncitor trebuia să-i forțeze administratoare să-l trimită și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006: (cap. V) control medical după accident (oricât de mic) este obligatoriu pt evaluare leziuni. (Cap. VI) înregistrare și cercetare sunt obligații. Lipsă control medic = lipsă diagnostic și eventual mascare leziuni serioase. Delayed care poate agrava stare și deține muncitor. Tribunal poate susține cerere și obliga la despăgubiri.",
    "tooltipCorrect": "După accident: control medical IMEDIAT. Lipsă = neglijență și potențial despăgubiri juridice."
  },
  {
    "id": "SSM-048",
    "section": "SSM - Legea 319/2006",
    "topic": "Incorigibil refuza măsuri — sancțiune și documentare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un muncitor refuza consecvent să utilizeze EIP (mănuși, protecție ochi) la manipulare chimice, ignoră avertismente și instruiți. Administratore-l avertizează și documentează, dar refuza continua. Ce măsuri ar trebui luate?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, muncitor are drept de refuza EIP — e decizie personală urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, administratore NU poate suspenda de la sarcini — e discriminare și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, avertisment verbal suficient — nu se poate lua altă măsură ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "(Cap. IV) După avertismente și instruiți documentate, muncitorul continuă să refuze = incălcare persistentă a obligației. Administratore trebuie să: (1) Emite avertisment scris cu dată, (2) Suspendă de la sarcini chimice temporar (redirectez pe alt post), (3) Raportez conducerii și organelor de control (ITM, inspecție SSM), (4) Dacă refuzul continua, proces disciplinar poate urma — până la destituire pt incălcare repetată obligații SSM."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. IV: utilizare EIP e obligație. Refuzul persistent = incălcare. Administratore documentează (avertisment scris), suspendă de la sarcini riscante, raportează conducere și ITM. Dacă refuza continua, proces disciplinar. Suspensie de post chimice = măsură de protecție, nu discriminare — scop e protecția muncitorului și altora.",
    "tooltipCorrect": "Refuz persistent EIP: avertisment scris, suspensie sarcini riscante, raportare conducere și ITM."
  },
  {
    "id": "SSM-049",
    "section": "SSM - Legea 319/2006",
    "topic": "Accident ascuns — implicații legale și raportare obligatorie",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "Două muncitori au o înțelegere: muncitor se lovește dar \"nu-i spune nimănui\" și-i administratoare nu-l raportează, în schimb muncitor obține \"zile libere plate\". După investigație IT, accidentul e descoperit. Ce implicații legale?",
    "options": [
      {
        "id": "A",
        "text": "Grave implicații. (Cap. VI) Anunțare și raportare accidente sunt obligații LEGALE, nu negociabile. Ascundere = încălcare și posibil penal (falsificarea registrelor, sustragere probă). Muncitor e și complice. Administratore risca: sancțiune SSM, amenda contravențională, pedeapsa penală (în cazuri grave), plus responsabilitate civilă pentru despăgubiri muncitorului (dacă leziunile se agravează fără tratament). ITM și inspecție SSM investighez."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, ascundere accidente e normal pt a nu afecta imagine grădiniței ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, E deal privat între ei — inspecția SSM nu trebuie implicată ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, muncitor e responsabil — administratoare doar încasează zvonuri și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. VI: anunțare și raportare accidente sunt obligații legale absolute, nu negociabile. Ascundere = încălcare penală. Administratore risca pedeapsa penală (fals registru, sustragere probă), amenda contravențională SSM, responsabilitate civila. Muncitor e complice și risca sancțiune disciplinară. ITM investighez și raportează.",
    "tooltipCorrect": "Accidente nu se ascund. Ascundere = infracțiune penală și civila."
  },
  {
    "id": "SSM-050",
    "section": "SSM - Legea 319/2006",
    "topic": "Cooperare inspecție SSM — verificare registre și întrebări",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Inspector SSM cere să vadă registrul de accidente și să vorbească cu 3 muncitori implici. Administratoare zice: \"Nu. Asta e privat — vreau înainte permisiune de la prefect\". Ce spune Legea 319/2006?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, cooperare cu inspecție e opțională dacă nu-s infracțiuni grave și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Nu. (Cap. IV) Lucrătorul și angajatorul (administratore) sunt obligații să coopereze cu organele de control SSM. Inspector SSM are drept de acces la registre și de a discuta cu muncitori. Refuzul = încălcare și putere fi sancționat cu amendă sau pedeapsa penală pt obstacol control oficial."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, administratoare e corect — prefect trebuie să autorizeze inspectii urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, registru e proprietate grădiniței și NU poate fi asta cu outsider ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. IV: cooperare cu organele de control (ITM, inspecție SSM) e obligație legală. Inspector SSM are autoritate de acces la registre și documente SSM și de a discuta cu angajații. Refuzul = obstacol control oficial = infracțiune și pedeapsa penală sau civila.",
    "tooltipCorrect": "Cooperare cu inspecție SSM: obligatorie. Registre și muncitori sunt accesibili."
  },
  {
    "id": "SSM-051",
    "section": "SSM - Legea 319/2006",
    "topic": "Riscuri biologice în grădiniță — COVID și masuri",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "O muncitoare în contact cu copii zilnic (grup cu COVID activ) NU e vaccinată și NU-i oferit masca. Adminsitratore nu o ține în evidență medicală pt risc biologic. După 1 săptămână, muncitoare se îmbolnăvește cu COVID grav. Ce obligații din cap. V au fost încălcate?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, nici una — COVID e pandemi global, nu risc profesional urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, muncitoare e responsabil de propriul statut vaccinare ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "(Cap. V) Riscuri biologice în grădiniță (contact infecții) necesită: (1) Supraveghere medicală adecuată (control la angajare, periodic, după expuneri), (2) Evaluare vaccinări și oferta vaccinului (COVID, gripă), (3) EIP corespunzător (masca) cand risc. Administratoare omise toate. Expunere neadaptată + lipsă control medic = neglijență graves SSM."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, masca nu-i necesară în copii — nu transmit boli și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. V: riscuri biologice în grădiniță (contact infecții de la copii) necesită supraveghere medicală, control periodic, oferta vaccinurilor și EIP cand risc. Administratore obligată să evalueze și oferă măsuri. Omitere = neglijență SSM care poate duce la boli profesionale și despăgubiri.",
    "tooltipCorrect": "Riscuri biologice în grădiniță: supraveghere medicală, vaccinuri oferta, masca la risc."
  },
  {
    "id": "SSM-052",
    "section": "SSM - Legea 319/2006",
    "topic": "Instrucțiuni de lucru — cum trebuie ele redactate și asimilate",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Administratoare redactează \"Instrucțiuni — nu faceți greșeli la curățenie\". Un muncitor spune: \"E prea vag — cum sa evit greșeli dacă nu-mi spui care-s riscurile și ce EIP trebuie?\" Care e corect?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, instrucțiuni lungă sunt împovărătoare — scurt e mai bine și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, instrucțiunea e suficientă — muncitor trebuie să ghichească urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, scris ne e suficient — muncitor trebuie doar verbal instruita ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Muncitor are dreptate. (Cap. IV) Instrucțiuni de lucru trebuie să fie specifice, clare, scrise în limba locului, și să includ: riscuri identificate (chimice, fizice, biologice), metode corecte, EIP necesar, prim-ajutor. \"Nu faceți greșeli\" nu e instrucțiune. Administratoare trebuie să redacteze clar cu detalii."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. IV: instrucțiuni de lucru trebuie să fie clare, specifice și detaliate. Trebuie să includ riscuri (chimice, fizice), metode corecte, EIP, prim-ajutor, acces, reguli. Redactare vagă = ineficace. Administratore trebuie să redacteze și să verifice că muncitorul a înțeles.",
    "tooltipCorrect": "Instrucțiuni de lucru: clare, specifice, cu riscuri, EIP, metode, prim-ajutor. Verbal + scris."
  },
  {
    "id": "SSM-053",
    "section": "SSM - Legea 319/2006",
    "topic": "Evidență medicală și dumneavoastră confidențial",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "Medicul muncii confirmă că o muncitoare are asma ocupațională legată la loc de muncă și recomandă restricții. Administratoare-i publică diagnostic pe tablă \"Atenție — Iacuți are asma\" pt sa toți știe. E corect?",
    "options": [
      {
        "id": "A",
        "text": "Nu. (Cap. V) Informații medicale sunt confidențiale conform legii privității datelor. Administratore NU poate dezvălui diagnostic public. Diagnosticul se comunică NUMAI muncitorului și se utilizează intern (restricții sarcini) confidențial. Dezvălui = încălcare confidențialitate și poate fi sancționat."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, da, toți trebuie să știe despre medicale muncitorilor și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, toți trebuie să evite să dăuneze muncitoare cu asma — trebuie public ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, diagnostic e informație publică pe locul de muncă și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. V și legislație privității: informații medicale sunt confidențiale. Administratore poate cunoaște diagnostic pt a lua măsuri, dar NU-l dezvălui public. Comunicare se face privat cu muncitorul și restricții se implementază confidențial. Dezvălui = încălcare confidențialitate și discriminare potențiala.",
    "tooltipCorrect": "Informatii medicale: confidențiale. Administratore le utilizează privat pentru restricții, nu le publică."
  },
  {
    "id": "SSM-054",
    "section": "SSM - Legea 319/2006",
    "topic": "Cerere control medical după expunere — prioritate și urgență",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "Muncitor inhala fum acru (izvor neidentificat) și se plânge de tuse și dispnee. Administratoare spune: \"Control medical la următorii controale periodice — e peste 6 luni.\" Muncitor spune: \"Acum simt simptome!\" Administratoare: \"Așteptă.\" Cum ar trebui să procedeze?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, administratoare are dreptate — controlul periodic e suficient ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Incorect. (Cap. V) După expunere și simptome, control medical trebuie urgent (în 24-48 ore). Tusa și dispneea sunt semne de inhalare dăunătoare. Administratoare trebuie să-l trimită urgent la medicul muncii PT evaluare și eventual tratament. Delay risca agravare și nedetectare inflamatie sau pneumonie."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, simptome minore — nu justifica control urgent și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, muncitor trebuie să meargă la doctor particular dacă-i urgent ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. V: după expunere și simptome, control medical e urgent (24-48 ore). Tusa și dispnee = semne inhalare dăunătoare care necesită evaluare medicală rapida. Administratore obligată să-l trimită urgent. Delay = risc agravare și pedeapsa SSM.",
    "tooltipCorrect": "Simptome după expunere: control medical urgent (24-48h). Nu se asteapta periodic."
  },
  {
    "id": "SSM-055",
    "section": "SSM - Legea 319/2006",
    "topic": "Echipament defect blocat cu intenție vs. blocat din neglijență",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un dispozitiv de siguranță pe mașină se blochează: într-un caz, angajat-o blochează vânzând (pricep lipsit de diligență); în alt caz, angajat-o blochează intenționat (zice \"mi-a bătut mâna, o scap\"). Conform cap. IV, e diferență de responsabilitate?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, neglijența e mai gravă decât intenție în SSM urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, nu — ambii sunt egali — neglijență și intenție sunt același nivel de incălcare ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Da — e diferență în responsabilitate. (Cap. IV) NU se blochează dispozitive, indiferent intenție. Dar: Neglijență (distragere) = avertisment și instruire. Intenție (deliberat) = încălcare graves, care putea fi sancționată mai aspru (avertisment scris, suspensie temporara, proces disciplinar). Ambii sunt incălcări, dar intenție e mai gravă și risca pedeapsa harsher."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, intenție nu contează în SSM — doar acțiunea contează și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. IV: blocarea dispozitivelor e prohibit, indiferent motivație. Dar în sancționare, Intenție (deliberat) vs. neglijență (distragere) sunt factori. Ambii sunt incălcări, dar intenție e mai gravă și putea duce la sancțiuni mai serioase. Administratore ajustează pedeapsa după context și intenție.",
    "tooltipCorrect": "Blocare dispozitiv: prohibit indiferent. Intenție e mai gravă decât neglijență în sancționare."
  },
  {
    "id": "SSM-056",
    "section": "SSM - Legea 319/2006",
    "topic": "Documentare accident mic — registru obligatoriu",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "Muncitor se lovește ușor la picioare cu unealtă (nici sânge, nici durere). Administratoare spune: \"Accident prea mic — nu merită înregistrat în registru oficial.\" Corect?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, da, înregistrare e numai pentru accidente clar grave ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, pândor vânătaie nu sunt vătămări — nu se înregistrează și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, registru oficiel e numai pt accidente cu absență de la lucru urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Nu. (Cap. VI) Orice accident cu vătămare corporală (chiar mic — pân, vânătaie) trebuie înregistrat în registru oficial. Criteriu: a existat contacte și a existat vătămare corporală (chiar mică). Administratore obligată să înregistreze data, ora, loc, descriere, martorii, cauze și investigație."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006, cap. VI: orice accident cu vătămare corporală se înregistrează în registru oficial. \"Mic\" NU e criteriu de excludere. Pân, vânătaie sunt vătămări și trebuie înregistrate. Administratore documentează complet.",
    "tooltipCorrect": "Orice accident cu vătămare (chiar mic) se înregistrează. Registru oficial = obligatoriu."
  },
  {
    "id": "SSM-057",
    "section": "SSM - Legea 319/2006",
    "topic": "Refuz de prim-ajutor după accident — responsabilitate",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "După accident (muncitor cade și-și doare umărul), muncitor refuza prim-ajutor și zice: \"Nu vreau, merg acasă.\" Administratoare o lasă să plece fără evaluare medicală. O oră mai târziu, umerul e umflat și inflamație se agravează. Muncitor cere despăgubiri. Administratoare e responsabil?",
    "options": [
      {
        "id": "A",
        "text": "Administratore e parțial responsabil. (Cap. VI) După accident, administratore obligată să ofere prim-ajutor și control medical. Chiar dacă muncitor refuza, administratore trebuie să: (1) Documente refuzul în scris (semnate), (2) Informează muncitorul despre riscuri non-evaluare (agravare potențiala), (3) Ofere control medical din nou. Lipsă documentare refuzului = neglijență administratorului. Tribunal poate susține cerere muncitorului."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, muncitor are control total — administratore nu-i responsabil și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, agravări ulterioare sunt responsabilitate muncitorului, nu administratorului urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, nu — muncitor refuza și pleacă — e decizia lui urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 319/2006, cap. VI: administratore obligată să ofere prim-ajutor și control medical după accident. Chiar refuzul muncitorului, administratore trebuie să documenze refuzul (scris), să informeze despre riscuri și să ofere din nou control. Lipsă documentare = neglijență. Tribunal poate susține cerere muncitorului.",
    "tooltipCorrect": "După accident: ofere prim-ajutor și control medical. Refuzul se documentează scris."
  },
  {
    "id": "SSM-058",
    "section": "SSM - Legea 319/2006",
    "topic": "Comunicare riscuri între colegii și informare conducere",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Doi muncitori din grup știu că ventilație în depozit e defectă și vorbesc între ei despre \"miros rău\". Nici nu-l anunță administratoarea. După o lună, o muncitoare se îmbolnăvește cu probleme respiratorii. Cui e vina — colegii pentru nu-au anunțat?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, muncitoare care s-a îmbolnăvit e responsabil — ar trebui să-și păzească sănătatea și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Ambii sunt parțial vinovați. (Cap. IV) Lucrătorului obligație anunț IMEDIAT conducătorului orice situație care poate produce accident/îmbolnăvire. Colegii anunț între ei e insuficient. Dar: Administrator (conducător) e prim responsabil pentru evaluare riscuri și măsuri protecție — trebuia să monitorizeze ventilație și să acționeze. Lipsă anunț + lipsă măsuri = colegii și administratore sunt vinovați."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, administratore singur e responsabil — colegii nu conteaza urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, da — colegii trebuia să anunțe ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006, cap. IV: lucrătorii anunță IMEDIAT conducătorului (administratorului) riscuri. Convorbiri între colegi sunt insuficiente. Administrators e prim responsabil pentru evaluare riscuri și măsuri. Nerespectarea ambilor = colegii și administratore vinovați.",
    "tooltipCorrect": "Riscuri se anunță conducătorului IMEDIAT, nu se discută doar între colegi."
  },
  {
    "id": "SSM-059",
    "section": "SSM - Legea 319/2006",
    "topic": "Reevaluare riscuri după schimbare in grădiniță",
    "difficulty": "medium",
    "sourceAct": "Legea nr. 319/2006, cap. IV-V",
    "type": "single",
    "question": "Grădina introduce nou echipament (dispozitor de igienizare cu UV) și redecorează cu materiale noi (mobilier, tapete). Administratoare nu reevaluează riscuri și nu instruiește muncitori despre echipament UV (pericol ochi). Un muncitor se lovește ocular. Obligații lipsă?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, administratore nu-i obligat să reevalueze — echipament e nou, nu riscuri vecii și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, echipament UV e sigur — nu-i risc real ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Obligații lipsă. (Cap. IV+V) Schimbare in loc de muncă (echipament, materiale) necesită reevaluare riscuri și re-instruire. Administratore obligată să: (1) Identifice riscuri UV (pericol ochi, piele), (2) Instruieze muncitori despre utilizare sigură, EIP (protecție ochi), pericole, (3) Asigure supraveghere medicală pt riscuri noi (control ochi periodic). Omitere = incălcare și risc accident."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, muncitori trebuie singuri să citească manual echipament și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 319/2006, cap. IV+V: schimbări în loc de muncă (echipament, materiale) necesită reevaluare riscuri și re-instruire. Administratore obligată să identifice riscuri (UV pentru ochi și piele), să instruieze muncitori și să asigure supraveghere medicală. Omitere = incălcare și risc accident.",
    "tooltipCorrect": "Schimbări în locul de muncă: reevaluare riscuri, re-instruire, supraveghere medicală."
  },
  {
    "id": "PSI-001",
    "section": "PSI - Legea 307/2006",
    "topic": "Miros fum în oficiu cu materiale combustibile",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "În oficiul grădiniței, administratorul detectează miros puternic de fum și observă un cablu electric încins lângă cutii de carton cu materiale de birou. Copiii se află în sălile adiacente. Care este acțiunea CORECTĂ și principiul din Legea 307/2006 care o ghidează?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, stinge zona cu apă de la robinetul din grupul sanitar și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, așteaptă să vadă dacă apare flacără, apoi anunță conducătorului și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, ascunde cutiile de materiale ca să nu se vadă la controlul de securitate."
      },
      {
        "id": "D",
        "text": "Deconectează sursa (fără a se expune), anunță imediat, declanșează evacuarea organizată a copiilor fără panică, fără a-și pune viața în pericol."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — orice situație ce poate produce incendiu se anunță IMEDIAT; se acționează conform instruirii FĂRĂ a pune viața în pericol; viața copiilor și personalului este prioritatea absolută; căile de evacuare se mențin libere; bunurile pot fi înlocuite, viețile nu.",
    "tooltipCorrect": "Anunț imediat + acționez conform instruajului, prioritate evacuarea organizată a copiilor, NU pun viața în pericol."
  },
  {
    "id": "PSI-002",
    "section": "PSI - Legea 307/2006",
    "topic": "Priză electrică defectă în sala de grupă",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul observă că o priză din peretele unei săli de grupă are contacte expuse și o mică scânteie la apăsarea unui întrerupător vecin. Ce obligație din Legea 307/2006 (cap. II, sec. 6) aplică administratorului și care este ordinea acțiunilor?",
    "options": [
      {
        "id": "A",
        "text": "Blochează accesul copiilor prin semnalizare, anunță imediat conducerea, solicita intervenție electricianului, NU permite reactivarea până la reparație/aviz."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, curățe priza cu un cârpă și o dă din nou în funcțiune pt a nu deranja activitatea grupei."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, anunță deminenticii conducerea dar permite activităților să continue, va repara după program."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, izolează priza cu bandă izolatoare și o lasă copiilor să nu se atingă și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul/conducătorul evalueaza riscurile de incendiu și asigură dotarea, funcționarea și menținerea libere a mijloacelor/instalațiilor. Contactele expuse și scânteile sunt semne de defect periculos. Se blochează imediat, se anunță și se solicita reparație, NU se tolereaza riscul.",
    "tooltipCorrect": "Blochează accesul, anunță imediat, solicita reparație — contacte expuse + scântei = risc incendiu."
  },
  {
    "id": "PSI-003",
    "section": "PSI - Legea 307/2006",
    "topic": "Prelungitor improvizat supraîncărcat lângă materiale inflamabile",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "În depozitul de materiale, administratorul descoperă un prelungitor improvizat (cuplat pe mai mulți adaptori) care alimentează 4 electrocasnice simultan, instalat lângă cutii de pânzeturi și materiale textile. Cablul prelungitorului este cald la pipă. Care este situația?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, îți dai seama că cablul se va răci, verifică din nouă după 2 ore și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Deconectează imediat, notează întregul setup, anunță conducerea, informează personalul că improvizațiile electrice + supraîncărcare = risc incendiu major, se înlocuiesc cu instalații regulate."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, este o soluție practică pentru că sala are puțin spațiu și putere, se poate tolera temporar urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, deplasează doar cutiile departe, lasă prelungitorul cum e ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — salariații și conducători nu fac improvizații electrice sau surse de foc necontrolate. Cablul cald, supraîncărcarea, proximitatea materialelor textile = scenariu incendiu. Se deconectează imediat și se solicita instalații regulate conforme cu norme electrice.",
    "tooltipCorrect": "Improvizații electrice + supraîncărcare + materiale inflamabile = risc incendiu major — deconectez imediat, anunț, cer instalații regulate."
  },
  {
    "id": "PSI-004",
    "section": "PSI - Legea 307/2006",
    "topic": "Stingător blocat în spatele dulapului la intrare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "La inspecția săptămânală, administratorul constată că stingătorul montat lângă ușa de intrare a hallului este parțial acoperit în spate de un dulap care a fost mutat. Stingătorul nu este vizibil și nici accesibil fără mișcat dulapul. Cum interpreta aceasta situație în raport cu obligațiile administratorului?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, nu e o problemă, stingătorul e acolo, copiii oricum nu trebuie să-l folosească și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, notează o viitoare reparație, deocamdată nu e urgent urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Deplasează imediat dulapul, reglează poziția stingătorului să fie clar vizibil și accesibil în caz de urgență, verifica dacă mai sunt alți stingătoare blocați, actualizeaza ronda de verificare."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, îl mută pe o rafă mai sigură unde e protejat de accidente accidentale ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul asigură ca mijloacele de stingere sunt vizibile, accesibile și funcționale. Un stingător blocat e inutil și încalcă legislația. Se reface imediat accesibilitatea și se verifica toți ceilalți stingătoare.",
    "tooltipCorrect": "Stingătoarele trebuie vizibile și accesibile — deplasez dulapul imediat, verific toți stingătoarele."
  },
  {
    "id": "PSI-005",
    "section": "PSI - Legea 307/2006",
    "topic": "Ușă de evacuare încuiată cu cheia în zori",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Administratorul gaseste ușa de evacuare din sufragerie încuiată cu cheia în zori (în caz de urgență, n-ar fi timp s-o deschidă cineva). Motivul dat de personalul de curat este „prevenția furturilor\". Ce prevedere din Legea 307/2006 încalca aceasta practică?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, nu e încalcare, măsura de securitate este justificată pt bunuri ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, se blochează și mai sigur cu barajă de fier pe exterior urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, se poate tolera dacă are cineva cheia mereu la ea și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Căile de evacuare trebuie libere și funcționale în orice moment; încuierea cu cheia = blocare absolută, INTERZISĂ. Se deschide imediat, se monitorizează altfel (CCTV, documente de acces)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — căile de evacuare se mențin libere și funcționale. Încuierea cu cheia blochează evacuarea de urgență. Bunurile sunt secundare față de viață. Se deschide imediat și se găsesc alte măsuri (supraveghere, documente de ieșire).",
    "tooltipCorrect": "Căile de evacuare LIBERE și FUNCȚIONALE întotdeauna — ușa deschidere imediat, nu se mai încuiază cu cheia."
  },
  {
    "id": "PSI-006",
    "section": "PSI - Legea 307/2006",
    "topic": "Exercițiu de evacuare cu copiii plângând și haotic",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul organizează un exercițiu de evacuare cu copiii. Pe jumătate din drumul de evacuare, unii copii încep să plângă și se formează înghesuire ușoară la ușa de ieșire din hol. Câțiva nu ascultă instrucțiunile și se întorc să-și ia jucăriile. Ce indică aceasta și ce obligație a administratorului nu a fost îndeplinită înainte?",
    "options": [
      {
        "id": "A",
        "text": "Personalul nu a fost instruibil pe ordine de evacuare, signale, locul de adunare și calmarea copiilor. Administratorul nu a elaborat instrucțiuni PSI clare și nu a verificat că toți le cunosc și le respectă înainte de exercițiu."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, se repeată exercițiul fără preparație, pana când se rezolvă pe account singuri ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, copiii se vor obișnui cu practică, nu e nevoie de pregatire specială urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, exercițiul nu avea sens, copiii sunt prea mici pt evacuation, se renunță la practică și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul elaborează instrucțiuni PSI, stabilește atribuții și verifica că personalul le cunoaște și respecta. Un exercițiu haotic semnalează că pregătirea a fost insuficientă. Se elaborează instrucțiuni clare, se instruieste personalul și copiii, se repeta exercițiile organizat.",
    "tooltipCorrect": "Exercițiul dezorganizat = instrucțiuni PSI insuficiente — elaborez clar, instruiesc personalul pe semnale/ordine/loc de adunare, repet organizat."
  },
  {
    "id": "PSI-007",
    "section": "PSI - Legea 307/2006",
    "topic": "Copil ramas în grupa sanitara in timp ce se evacueaza",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Într-un exercițiu de evacuare, un copil din grupa mare merge la grup sanitar în momentul în care sună alarma. Până ajunge personalul să-l aducă, grupul este evacuat. Copilul ajunge la locul de adunare după 3 minute. Ce prevedere din Legea 307/2006 reflectă aceasta situație și cum se elimina riscul?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, nu e problemă dacă ajunge la adunare, practica este acceptabilă și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Interzicerea accesului la grup sanitar în timp ce se evacuează și desemnarea unei persoane responsabile cu căutarea și salvarea copiilor rămași sunt obligații. Se revizuiesc procedurile, se asigură că personalul cunoaște cine verifica grupa sanitara primă data."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, se închide grupa sanitara pe perioada exercițiilor urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, se permite accesul, dar copilul ăsta trebuie atenționat că e periculos urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — în caz de incendiu se acționează conform instruirii, fără a pune viața în pericol, dar cu prevenție și organizare. Se stabiles ca grup sanitar se verifică, se desemnează persoane responsabile pt căutare și se asigură că toți copiii evacueaza. Practici ad-hoc = nepregătire.",
    "tooltipCorrect": "Desemnez persoană pt verificare grupa sanitara, asigur că toți copiii evacueaza, revizuiesc procedurile."
  },
  {
    "id": "PSI-008",
    "section": "PSI - Legea 307/2006",
    "topic": "Hidrant inaccesibil în curte din cauza mobilei",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "La înspecție, administratorul observă că hidrantul din curte este bloccat de o bancă din lemn și de unele nisipuri depuse acolo. Hidrantul nu este marcajat cu panoul roșu standard și personalul interogat nu știe unde este. Ce obligații din Legea 307/2006 (cap. II, sec. 6) sunt încălcate?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, se lasă cum e, firma de apă e responsabilă urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, hidrantul e o amenajare decorativă, nu se folosește nici când ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Se menține accesul liber la hidrant, se instaleaza panoul roșu de identificare, se instruieste personalul unde este și cum se folosește. Accesul = obligație de intervenție rapidă."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, nu sunt obligații speciale pt hidranți, sunt responsabilitate a apei și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul menține libere căile de evacuare și accesul pt intervenție. Hidranții sunt mijloace de stingere, deci se mențin accesibili, identificabili și se instruieste personalul. Blocarea = încălcare de obligații critice.",
    "tooltipCorrect": "Hidrant accesibil, marcat clar, personalul pe proceduri — aceasta sunt obligații de intervenție."
  },
  {
    "id": "PSI-009",
    "section": "PSI - Legea 307/2006",
    "topic": "Substanțe inflamabile în depozit comun neseparate",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul constată că în depozitul comun al grădiniței se ține vopsea, diluant și produse de curățenie (inclusiv alcool) pe aceeași rație cu obiecte de mobilier din lemn și textile. Nu exista nici o semnalizare de pericol și nici separare de zone. Care este situația și obligația administratorului?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, se muta vopseaua și diluantul într-o anexa separat, dar alcoolul și produsele de curățenie pot rămâne și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, soluția de depozitare e acceptabilă daca e bine organizat pe rafturi ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, se vopsesc ușile și pereții depozitului cu vopsea de foc-rezistent, asta rezolva și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Se separa substanțele inflamabile și chimice în zona distinctă, se etichetează pericolele, se creaza evidență a substanțelor, se instruieste personalul pe manipulare și prim-ajutor. Administratorul evidenționează riscul combinat al substantelor și materialelor inflamabile."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul identifică riscurile de incendiu și evidența substanțelor periculoase, inclusiv modul de intervenție. Proximitatea vopselor, diluantului, alcoolului și materialelor inflamabile multiplică riscul exponențial. Se separa, se etichetează și se instruieste.",
    "tooltipCorrect": "Substanțe inflamabile și materiale se separa, se etichetează, se face evidență, se instruieste personalul."
  },
  {
    "id": "PSI-010",
    "section": "PSI - Legea 307/2006",
    "topic": "Persoană fumând în lângă dulapul cu materiale",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Un muncitor extern (reparator) intra în depozit și fumează o țigară lângă dulapul cu textile și pânzeturi. Administratorul îl observa. Care este acțiunea obligatorie și motivul?",
    "options": [
      {
        "id": "A",
        "text": "Stopa imediat, interzice fumatul în perimetrul interior și în apropierea materialelor inflamabile, verifică dacă nu a ramas cenușă, documenta incident. Fumat = sursă de foc necontrolata."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, îi spune să meargă afară după ce termina treaba, deocamdată e ok și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, deschide ferestre pt ventilație și lasă să continue și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, lasă să fumeze, e o pauza normală pentru muncitor și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — salariații și oricine în incintă nu fac surse de foc necontrolate. Fumatul lângă textile = risc incendiu direct. Se stopa imediat, se interzice și se verifica dacă n-a ramas foc. Fumatul lângă materiale combustibile = încalcare gravă.",
    "tooltipCorrect": "Fumatul lângă textile = sursă de foc necontrolata — stop imediat, interzis în apropiere de materiale inflamabile."
  },
  {
    "id": "PSI-011",
    "section": "PSI - Legea 307/2006",
    "topic": "Lipsă aviz de securitate la incendiu pentru noul salon",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Grădiniță deschide un nou salon pentru copii de 1-2 ani în spaiul unei foste bucătării. Conducerea crede că nu e nevoie de aviz PSI separat pentru că e aceeași clădire. Administratorul primeste ordinul să mobilieze sala și s-o puie în funcțiune rapid. Ce ar trebui verificat ÎNTÂI?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, se mobiliază imediat și se pun copii, nu e nevoie de birocrație specială și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Se verifica dacă e nevoie de aviz de securitate la incendiu pentru noul salon, se solicita de la autorități, NU se pune în funcțiune fără aviz, se coordonează cu conducerea pe procedura obligatorie."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, se intreaba doar administratia locala daca e okay și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, se asteapta o inspecție legala, pana atunci se deschide și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul solicita și obține avizele/autorizațiile de securitate la incendiu când legea cere. Unui spaiu nou destinat copiilor, chiar în aceeași clădire, i se aplica același standard. Se verifica obligația legala și se solicita aviz înainte de punerea în funcțiune.",
    "tooltipCorrect": "Spațiu nou = aviz de securitate la incendiu obligatoriu — verific, solicit, NU pun în funcțiune fără."
  },
  {
    "id": "PSI-012",
    "section": "PSI - Legea 307/2006",
    "topic": "Personal nemotivat, necuratos pe regulile PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul constată că un salariat tinde să nu respecte regulile PSI: lasă obiecte pe căile de evacuare, uneori cade cheia stingatorului unde și-o bagă în buzunar în loc s-o lase accesibila. Când i se pun întrebări pe proceduri, nu le stie. Cum ar trebui administratorul să raspunda la situație conform Legea 307/2006?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, îi spune pe ușă că nu e bun, dar îl lasă pe post o vreme ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, il amenința cu concediul dacă nu se schimbă imediat urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Instruieste din nou personalul pe regulile/obligațiile specifice, verifica înțelegere, documenta instruire, urmărește respectarea, corectează nepotriviri, iar daca persistente, ia măsuri disciplinare."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, lasă, poate unii oameni nu sunt ineresi, nu poti obliga pe toți și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul elaborează instrucțiuni PSI, verifică că personalul cunoaște și respecta, și asigură conformitate. Dacă respectarea e slaba, trebuie instruire din nou, monitorizare și măsuri progresive, nu pasivitate. Siguranța nu e opțională.",
    "tooltipCorrect": "Instruiesc din nou, verific, documenta, urmăresc respectarea și corectez — siguranța nu e opțională."
  },
  {
    "id": "PSI-013",
    "section": "PSI - Legea 307/2006",
    "topic": "Lipsă dispoziții scrise de responsabilități PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "La o inspecție, inspectorul cere să vada dispoziția scrisă a conducerii privind responsabilităților în caz de incendiu. Grădiniță nu are document scris, doar vorbit pe ture. Ce defect structural semnalează aceasta?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, nu e problemă, vorbitul e la fel de valid ca scrisul în situații de urgență și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, se asteapta să se întamble ceva, apoi se vor face dispoziții și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, se poate emite o dispoziție, dar nu e necesară adusă la cunoștință, toți stiu și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Lipsesc dispoziții scrise formale, care sunt obligatorii. Administratorul trebuie să redacteze și să aducă la cunoștință personalului dispoziția scrisă cu responsabilități în situații de urgență și procedure de evacuare."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul stabilește responsabilități prin dispoziții scrise, aduse la cunoștință personalului. Fără scris și comunicare formala, nu e posibil a verifica cine ce trebuie sa faca și nu se poate documenta conformitate. Dispoziția scrisă e obligatorie și e dovada organizării interne.",
    "tooltipCorrect": "Dispoziție scrisă a responsabilităților PSI, adusă la cunoștință — aceasta e obligatorie."
  },
  {
    "id": "PSI-014",
    "section": "PSI - Legea 307/2006",
    "topic": "Stingător expirat, neverificat de ani",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul descoperă că stingătoarele din hol nu au fost verificate și nici nu au eticheta de verificare de ani buni. Certificatele de calitate scriu data 2019. Cum interpret situația și ce acțiuni ia?",
    "options": [
      {
        "id": "A",
        "text": "Stingătoarele expirate și neverificate sunt ineloce și periculoase dacă se încearcă folosire. Se scoate din serviciu, se solicita înlocuire cu stingătoare verificate și conforme, se planifica verificări periodice regulate, se documenta."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, nu conteaza verificarea, stingătoarele sunt funcționale din manufacture urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, se vor verifica la următorul audit, deocamdată e ok urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, se apasă pe scurt pt a-i testa, daca merge, se lasa și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul asigură funcționarea și dotarea mijloacelor de stingere. Stingătoarele neverificate și expirate sunt ineficace și trebuie înlocuite cu cele verificate, cu certificare curentă. Verificarea regulara și menținerea sunt obligatorii.",
    "tooltipCorrect": "Stingătoare expirate și neverificate — înlocuiesc cu verificate și conforme, planifiez verificări regulate."
  },
  {
    "id": "PSI-015",
    "section": "PSI - Legea 307/2006",
    "topic": "Material de depozitare cu eticheta de inflamabil pe foc",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Într-un depozit se ține o cutie mare de material pentru joacă cu eticheta roșie \"Inflamabil - NU atingeți cu flacără sau fum\". Cutia se afla lângă tabloul electric și în apropiere de un gaz de caloriferi. Se are la curent cu pericolul, dar se crede că e deja evaluata. Ce e insuficient?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, se asteapta să vina un inspector pt a spune cum e bine și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Se separa cutia de tabloul electric și caloriferi, se creaza o distanță de minim 1 metru, se verifica dacă nu e alte materiale inflamabile în apropiere, se documenta măsuri. Cunoștința nu e suficientă fără acțiune fizică de separare a riscurilor."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, eticheta e suficientă, toți știu că nu se aprinde foc lângă incendiu ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, se pune o tablă de lemn între cutie și tabloul electric ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul identifică și evaluează riscurile, apoi ia măsuri concrete de reducere. Cunoașterea riscului nu e suficientă; trebuie separarea fizică a materialelor inflamabile de surse de căldură/electricitate. Se separa, se documentează și se menține separarea.",
    "tooltipCorrect": "Evaluez risc, iau măsuri concrete — separa material inflamabil de surse de căldură și tablourile electrice."
  },
  {
    "id": "PSI-016",
    "section": "PSI - Legea 307/2006",
    "topic": "Apel rapid și comunicare în caz de incendiu",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "În caz de incendiu detectat în grădiniță, care este pasul ÎNTÂI obligatoriu conform Legea 307/2006?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, verifica extinderea incendiului inainte."
      },
      {
        "id": "B",
        "text": "În aplicarea regulii, cauta să stingi incendiul cu orice mijloace disponibile."
      },
      {
        "id": "C",
        "text": "Anunță imediat autoritățile de urgență (112) și apoi se executa evacuare și instrucțiuni PSI."
      },
      {
        "id": "D",
        "text": "Conform procedurii, evacuezi copiii pe o rază departe și abia apoi anunți."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — în caz de incendiu se anunță imediat. Apelul rapid (112) este prioritate, apoi evacuarea și respectarea instrucțiunilor. Nu se riscă o persoană prin știngere în incendii mari.",
    "tooltipCorrect": "Anunț imediat 112, apoi evacuez și acționez conform instructajului."
  },
  {
    "id": "PSI-017",
    "section": "PSI - Legea 307/2006",
    "topic": "Locul de adunare rece și prost accesibil",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul verifica procedura de evacuare și constată că locul de adunare desemnat este într-o stradă laterala departe, lipsit de sisteme de încălzire și locuri de șezut. Iarna și noaptea e nepotrivit pentru copii mici. Ce obligație se cere revizuita?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, se asteapta vremea mai bună sa se mearga în locul departe și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, locul actual e bun, e departe si sigur de clădire și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, copiii se țin în mână și se duc unde s-a spus, indiferent de condiții ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Se identifica un loc de adunare mai apropiat și mai potrivit (ex. curtea grădiniței, un spațiu vecinesc protejat), se verifica accesibilitate, se asigura adăpost în caz de vreme rea, se instruieste personalul pe noul loc."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul stabilește proceduri care sunt practice și considerate cu vârstele copiilor. Un loc departe și nepotrivit în vreme rece nu e realist și e nepietăți pentru copii. Se identifica loc apropiat, adăpost și se instruieste personalul.",
    "tooltipCorrect": "Loc de adunare apropiat, potrivit pentru copii, cu adăpost — practicitate și siguranță."
  },
  {
    "id": "PSI-018",
    "section": "PSI - Legea 307/2006",
    "topic": "Cabinet medical fără instrucțiuni PSI specific",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Cabinetul medical al grădiniței nu are instrucțiuni scrise privind evacuarea urgentă și locul de adunare, nici echipaje de prim-ajutor designate. Se crede că medicul știe ce trebuie făcut. Ce lipsește?",
    "options": [
      {
        "id": "A",
        "text": "Fiecare spațiu (inclusiv cabinet) trebuie să aiba instrucțiuni scrise PSI, respecta caile de evacuare și să fie integral la procedurile de evacuare. Se redactează instrucțiuni specifice pentru cabinet și se instruieste medicul."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, se asteapta ca medicul să vorbească cu ceilalți; vorbitul ajunge și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, medicul stie ca-și domeniu, nu e nevoie de instrucțiuni scrise urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, cabinetul medical nu e relevant pt evacuare, doar sălile de grupă conteaza și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — instrucțiunile PSI se aplica întregii instituții și fiecărui spațiu, inclusiv cabinet medical. Medicul trebuie să cunoască caile de evacuare, locul de adunare și responsabilități specifice. Instrucțiunile scrise și aduse la cunoștință sunt obligatorii.",
    "tooltipCorrect": "Instrucțiuni scrise PSI în fiecare spațiu, inclusiv cabinet — obligatoriu și aduse la cunoștință."
  },
  {
    "id": "PSI-019",
    "section": "PSI - Legea 307/2006",
    "topic": "Sarcina cine anunța vs cine evacueaza",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul întocmeste planu de evacuare dar nu specifică CINE anunță 112, CINE strânge copiii din diferite săli, CINE merge înaintea copiilor. Totul e vag: \"oricine vede incendiul\". Ce e neconfprm cu obligațiile?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, un anumit salariat e responsabil de totul, pentru că nu trebuie nimeni altcineva implicat ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Administratorul trebuie să stabilească responsabilități CONCRETE și scrise pt evacaure: cine anunța 112 cu prioritate, cine verifica fiecare sală, cine ghidează copiii, cine e responsabil de locul de adunare. Claritate = siguranța și ordine."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, vag e ok dacă toți stiu că trebuie să acționeze urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, se asteapta în momentul incendiului să se improvizeze și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul stabilește responsabilități concrete și scrise. Vaguitatea = haos în urgență și nerespectare de obligații. Fiecare persoană trebuie să știe exact ce-i cade și să fie capabilă s-o execute.",
    "tooltipCorrect": "Responsabilități CONCRETE și scrise — cine anunța, cine strânge, cine ghidează, cine verifica — claritate și ordine."
  },
  {
    "id": "PSI-020",
    "section": "PSI - Legea 307/2006",
    "topic": "Deschidere ușii de evacuare în direcție greșită",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Administratorul constată că ușa de evacuare din sufragerie se deschide în direcția incintei (se trage spre interior), nu spre exterior. În caz de urgență cu multă lume, ușa poate rămâne blocata și nu se deschide ușor. Ce prevedere din legea PSI se referă la aceasta?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, nu e o problemă, se trage și se deschide urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, se forțează ușa până se deschide urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Căile de evacuare trebuie să fie libere și funcționale. Ușa care se deschide spre interior în situații de evacuare în masă este periculoasa. Se reorganizează sa se deschidă spre exterior (împinge), dacă nu e posibil se cere soluție alternativă."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, ușa actuala e ok daca nu e prea multă lume și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — căile de evacuare se mențin libere și funcționale. O ușă care se trage în interior și care se poate bloca în situații cu multă lume este neconfprmă și periculoasă. Se reorganizează de urgență pentru deschidere spre exterior.",
    "tooltipCorrect": "Ușa de evacuare se deschide SPRE EXTERIOR — siguranță în masă și situații de urgență."
  },
  {
    "id": "PSI-021",
    "section": "PSI - Legea 307/2006",
    "topic": "Copii cu pană mobilitate în inchis la etaj",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "În grădiniță sunt 2 copii cu dificultăți de mobilitate (chirurgie recent, tulburări de motor). Salonul lor este la etajul 2, iar scara principala de evacuare e singura cale rapida. Care este obligația administratorului de a pregăti evacuare?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, se lasă copiii pe loc, vor fi evacuzați dupa copiii tipici și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, se așteapta situația și se improvizează ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, se cere părinților să-i ia pe copii pt ore de pericol și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Se elaborează procedură specific pentru copiii cu dificultăți de mobilitate: cine ii transporta, pe care cale alternativă (scară ușoară, rampa, vicetvă), cu ce echipament dacă necesar, se instruieste personalul, se executa exercițiu cu ei pt a-i familiariza."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul elaborează instrucțiuni de evacuare care sunt practice pentru TOȚI copiii, inclusiv cei cu dificultăți. Se designează proceduri specifice, se instruieste personalul și se executa exerciții. Nicio cale de evacuare = măsură inacceptabilă.",
    "tooltipCorrect": "Procedură specific pentru copii cu dificultăți de mobilitate — cale alternativă, personal desemnat, exercițiu regulat."
  },
  {
    "id": "PSI-022",
    "section": "PSI - Legea 307/2006",
    "topic": "Alarma porno în mod silențios noaptea",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Grădiniță cu program prelungit are copii care dorm noaptea. Sistemul de alarma incendiu este setat să se declanșeze doar o lumina alba silențioasă în fiecare cameră. Nici o acustică. Se crede că lumina \"nu va speria copiii\". Ce e neconfprm?",
    "options": [
      {
        "id": "A",
        "text": "Sistemul de avertizare trebuie să fie eficace și clar audibil pt că toți (copii somiori, personal) să perceapă semnalul. Lumina alba silențiosa nu e suficientă. Se instaleaza sirena/claxon cu nivel sonor adecvat, testat regulat."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, lumina silențioasă e ingrijitoare si nu speria urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, se poate folosi doar lumina daca se vrea și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, se trezesc copiii cu vorba in ureche urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — instalațiile de avertizare se menține libere și funcționale, și trebuie să fie eficace. Alarma silențioasă NU alertează pe copii somiori sau personal absent din birou. Se instalează avertizare sonoră adecvată nivelului de zgomot al instituției.",
    "tooltipCorrect": "Alarma clara și audibilă pentru toți — silențios nu e suficient. Testat regulat."
  },
  {
    "id": "PSI-023",
    "section": "PSI - Legea 307/2006",
    "topic": "Verificare stingătoare și documentare",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Cu ce frecvență trebuie verificate stingătoarele și cum se documenta conform obligațiilor administratorului privind funcționarea mijloacelor de stingere?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, producătorul e responsabil de verificare și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Stingătoarele se verifica la intervale regulate (conform legii, minimum anual + o inspecție lung-termen), cu eticheta de verificare pe fiecare, și se ține evidență. Administratorul asigură conformitate."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, se verifica doar dacă se folosesc urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, anual este suficient, nu e nevoie de documentație urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul asigură funcționarea și dotarea mijloacelor de stingere. Verificarea regulara (minim anuala) și documentația (etichete + evidență) sunt obligatorii. Fără dovadă de verificare = neconformitate.",
    "tooltipCorrect": "Verificare regulara minim anuala, etichetă pe fiecare, evidență documentata — obligatoriu."
  },
  {
    "id": "PSI-024",
    "section": "PSI - Legea 307/2006",
    "topic": "Răspundere conducător vs salariat",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Un salariat încalcă regulile PSI (lasă o ușă de evacuare blocata, ascunde un stingător). Cine poartă răspunderea pentru nerespectare în cazul unui incendiu: salariatul sau administratorul/conducătorul?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, nici care nu poartă răspundere și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, doar salariatul, pentru că a facut greșala concreta ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Administratorul poartă răspundere de a asigura că personalul cunoaște și respectă regulile. Dacă salariatul încalcă, administratorul e responsabil de a fi detectat/corectat. Răspundere partajata: salariat pentru acțiune, administrator pentru supraveghere/corecție."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, statul poartă răspunderea urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul verifică că personalul respectă instrucțiunile PSI și ia măsuri corective. Dacă regulile sunt călcate și administratorul nu a dispus corecții, e responsabil pentru deficiență de supraveghere. Răspunderea e partajata.",
    "tooltipCorrect": "Răspundere partajata: salariat pentru acțiune, administrator pentru instruire și supraveghere."
  },
  {
    "id": "PSI-025",
    "section": "PSI - Legea 307/2006",
    "topic": "Teste regulate de sirena in program cu copii",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul planifiaza teste ale sirenei de incendiu. Sunt propuse 2 opțiuni: (1) teste fără avertisment, în timp ce copiii sunt în activități, pt a surprinde (2) teste anunțate in avans, cu pregatire. Care e corecta din perspectiva obligațiilor PSI?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, nu se testează deloc, se folosieste doar la incendiu real și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, se testează in mod aleatoriu când nu-și dau seama părinții și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, testele fără avertisment sunt mai eficace pentru a verifica reaction reala și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Testele se fac cu avertisment și pregatire prealabila. Alarma se folosieste doar pentru exerciții de evacuare planificat sau incendii reale. Testele fără avertisment sfiarsă copiilor și nu au scop educativ. Se anunța in avans, se executa cu personalul pregătit și copiii instrui."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul elaborează instrucțiuni de evacuare și exerciții. Testele și exercițiile se fac organizat, cu pregatire și intenție educativă, nu pentru a speria copii. Teste planificate = familiarizare + ordine, teste fără avertisment = panică și dezordine.",
    "tooltipCorrect": "Teste anunțate cu pregatire prealabila, exercițiu organizat — educație și familiarizare, nu panică."
  },
  {
    "id": "PSI-026",
    "section": "PSI - Legea 307/2006",
    "topic": "Coridor cu depozitare de jucării blocand calea",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Coridorul care duce la ușa de evacuare a grădiniței este folosit pentru depozitare de jucării și materiale pe rafturi din lemn. Asta ocupă aproximativ 40% din lățimea coridorului. Se crede că măcar jumătate din spațiu rămâne liber și e de ajuns. Ce prevedere este încalcata?",
    "options": [
      {
        "id": "A",
        "text": "Căile de evacuare trebuie să fie LIBERE, adică neopstrue cu depozitare permanenta. Materialele din coridor trebuie mutate, coridorul se curăță, se menține liber permanent. 40% ocupare = blocare de cale."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, se muta jucăriile doar în zile cu inspectii ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, nu e o problemă dacă mai rămâne jumătate din cale ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, se poate tolera dacă jucăriile sunt mici și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — căile de evacuare se menține libere. Depozitarea permanenta în coridor = blocare de cale, indiferent dacă mai rămâne spațiu. Se curăță și se destin coridorul NUMAI pentru evacuare.",
    "tooltipCorrect": "Cale de evacuare LIBERA — nu depozitare permanenta, nu blocaje, nu improvizații."
  },
  {
    "id": "PSI-027",
    "section": "PSI - Legea 307/2006",
    "topic": "Verificare cu inspectori și documente",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Ce obligație are administratorul în legătură cu controalele și inspectiile efectuate de autorități conform Legea 307/2006?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, poate refuza inspectorii și le spune că nu sunt binevenite și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Administratorul permite controalele, pune la dispoziție documentele cerute (instrucțiuni PSI, evidența stingătoare, raporturi, avize) și coopereaza cu inspectorii."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, dă acces doar dacă inspectorul are permis de la MAI și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, se ascund documentele sensibile, se arata doar o parte și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul permite controalele și pune la dispoziție documentele. Refuzul sau ascunderea de documente = încalcare gravă și posibilă penalizare. Transparență și cooperare sunt obligatorii.",
    "tooltipCorrect": "Permite controale, pune documente la dispoziție, coopereaza cu inspectorii — obligatoriu."
  },
  {
    "id": "PSI-028",
    "section": "PSI - Legea 307/2006",
    "topic": "Copii evacuați și reîntrați din greșeală",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Într-un exercițiu de evacuare, copiii sunt evacuați și strânși la locul de adunare. După 2 minute, un salariat privit că exercițiul a fost din greșeală (a apăsat butonul alarmei accidental) și-i reintroduce pe copii în clădire. Ce e greșit cu această practică?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, copiii pot fi reintroduși dacă un salariat e sigur că e fals-alarm și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, se evacuează de fiecare dată, dar reintroducerea e la discreție și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Odata declansata evacuarea, aceasta se executa COMPLET. Nu se reintra pana când AUTORITATEA (conducere/pompieri) nu dă ordinul. Reintroducerea prematura = încalcare de protocol și nepregătire. Se asteapta confirmarea că e sigur."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, E ok dacă s-a descoperit greșeala repede și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — evacuarea se executa conform instruirii și se menține până când situația se confirmă ca sigură și autoritatea dă ordinul de reintroducere. Reintrare prematura = ignorare de protocol și risc de tăiere de evacuare într-o urgență reala.",
    "tooltipCorrect": "Evacuare = executa complet pana la ordinul de reintroducere, nu improvizații."
  },
  {
    "id": "PSI-029",
    "section": "PSI - Legea 307/2006",
    "topic": "Personal NE-instruit pe obligații PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul angajează un nou salariat, cel care va fi responsabil cu o sală de grupă. La angajare, i se dau doar instrucțiuni pe activități cu copii și nu primeste instruire PSI, nici nu stie caile de evacuare și nici ce trebuie să facă în caz de incendiu. După 2 săptămâni vine o inspecție PSI. Ce defect structural va descoperi inspectorul?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, nu e defect; salariatul va învăța în timp și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, inspectorul nu verifică instruire individuala ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, se asteapta exercițiul de evacuare ca salariatul să se gândească ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Defect gravă: salariatul nu a primit instruire PSI obligatoria (proceduri, caile de evacuare, responsabilități, prim-ajutor). Administratorul nu a documentat instruire. Se instruieste imediat și se ține evidență."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul elaborează instrucțiuni PSI și verifică că personalul le cunoaște. Angajatul nou trebuie instruit la hire și documentat. Fără instruire = neconformitate și risc în urgență.",
    "tooltipCorrect": "Instruire PSI pentru fiecare salariat la angajare, documentata, verificata cunoaștere."
  },
  {
    "id": "PSI-030",
    "section": "PSI - Legea 307/2006",
    "topic": "Semnalizare absenta pe care de evacuare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Coridorul cu calea de evacuare nu are nici o semnalizare (săgeți, inscripții \"EVACUARE\") și nici pictograme luminoase. Se crede că toți știu unde să meargă. Ce obligație e neindeplinita?",
    "options": [
      {
        "id": "A",
        "text": "Semnalizarea căii de evacuare este obligatorie: săgeți, inscripții luminoase, pictograme. Se instalează semnalizare clara pe traseul de evacuare pt orientare în condiții de urgență și fumagie."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, se vopsesc pereții cu vopsea fluorescenta urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, inspectori vor fi ghizi ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, semnalizarea e opțională, copiii se orientează după oameni urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — semnalizarea căilor de evacuare și mijloacelor de stingere este parte a obligațiilor administratorului privind funcționarea instalațiilor. Se instalează semnalizare clara (săgeți, inscripții, pictograme) pe fiecare traseu.",
    "tooltipCorrect": "Semnalizare clara pe traseu de evacuare — săgeți, inscripții, pictograme luminoase obligatorii."
  },
  {
    "id": "PSI-031",
    "section": "PSI - Legea 307/2006",
    "topic": "Scurtcircuit în tabloul electric, fum ușor",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Administratorul observa fum ușor ieșind din tabloul electric și e speriat. Se gândeste că poate fi doar o mică problemă de supraîncărcare. Ce trebuie să faca ÎNTÂI conform obligațiilor?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, așteaptă să vadă dacă crevează vreun intreruptor și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Anunță imediat (deschide ușa să nu se acumuleze fum în incinta cu copii), deconectează curentul la comanda dacă stie cum, anunța conducerea și serviciile urgență, declanșează evacuare dacă se agravează, NU întinde mâna în tablou."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, versează apă pe tabloul electric pentru a stinge fumul și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, scoate tabloul din priza și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — orice situație ce produce fum/miros și poate produce incendiu se anunța IMEDIAT. Fumul din tabloul electric = scurtcircuit, pericol de incendiu. Se anunța, se deconectează curent dacă sigur, se anunța urgență, se evacuează copii dacă se agravează.",
    "tooltipCorrect": "Fum din tablou = anunț imediat, deconectez curent dacă sigur, anunț urgență, evaluez evacuare."
  },
  {
    "id": "PSI-032",
    "section": "PSI - Legea 307/2006",
    "topic": "Documentație PSI și avize neactualizate",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul verifica dosarul cu documente PSI și descoperă că instrucțiunile PSI sunt din 2020, avizul de securitate la incendiu a expirat în 2023 și n-au fost renew, iar verificarea stingătoarelor se ține în caiete neindexate. Cand a venit ultima inspecție?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, dosarul se ține în secret, inspectori nu trebuie să vadă urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, documentația veche nu e problemă dacă e salvata ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Documentația trebuie actualizata regulat. Instrucțiuni de actualizat la fiecare schimbare (personal, clădire, echipament), avize de renew la timp, evidență să fie accesibilă și clara. Administratorul e responsabil de menținerea dosarului actualizat."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, se updated doar dacă vine inspecție urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul menține dosarul PSI actualizat, instrucțiunile se revizuiesc regulat, avizele se renew la timp, evidența stingătoarelor și alte documente sunt accesibile și clare. Documentație expirata = neconformitate.",
    "tooltipCorrect": "Documentație actualizata, avize renew la timp, evidență clara — obligatoriu."
  },
  {
    "id": "PSI-033",
    "section": "PSI - Legea 307/2006",
    "topic": "Gaz butană în bucătărie fără autorizație",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Bucătăria grădiniței folosiește gaz butană (recipient portabil de 10 kg) pentru cuptor pe lângă masa de lucru. Nu exista autorizație speciala PSI pentru echipament cu gaz. Riscul nu a fost evaluata formal. Ce e necesar?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, inspectorul nu verifica folosirea gazului și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, se ține gazul în sac la picioarele mesei de lucru și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, gazul butană e sigur, nu necesită autorizație și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Gaz butană = substanță inflamabilă cu risc major. Se evalueaza riscul formal, se obține autorizație PSI dacă e necesara, se stabilesc reguli de depozitare (departe de surse de căldură), se instruieste personalul, se ține evidența butelii cu dată de verificare și înlocuire."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul identifică și evaluează riscuri de incendiu, inclusiv substanțele inflamabile ca gaz butană. Se obține autorizație PSI dacă e impusă de lege, se depozitează conform reguli, se instruieste personalul și se menține evidență.",
    "tooltipCorrect": "Gaz butană = risc major — evaluez, cer autorizație, depozitez corect, instruiesc, ținuu evidență."
  },
  {
    "id": "PSI-034",
    "section": "PSI - Legea 307/2006",
    "topic": "Salvare proprie vs evacuare copii în incendiu",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "În caz de incendiu în sala copiilor, administratorul se gândeste dacă trebuie să intre pe fum dens ca să salveze copii care n-au plecat. Care e principiul din Legea 307/2006 care ghidează decizia?",
    "options": [
      {
        "id": "A",
        "text": "Se acționează conform instruirii FĂRĂ a pune viața în pericol. Daca fum = pericol serios, NU se intra. Se anunța urgență, se evacuează ceilalți copii, se lasa pompieri să facă salvarea. O persoană moarta = nu salvează pe nimeni."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, administratorul trebuie să se sacrifice pentru copii și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, se asteapta pompieri înaintea evacuării ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, se încearcă salvare orice preț și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — \"fără a pune viața în pericol\" e principiu central. Nici o persoană n-ar trebui să-și pună viața în pericol serios. Evacuare sistematică, anunțarea urgență și lăsarea pompierilor să facă salvări în condiții periculoase sunt obligații.",
    "tooltipCorrect": "Evacuare conform instrucțiunilor, fără a pune viață în pericol — anunț urgență, nu salvare temerara."
  },
  {
    "id": "PSI-035",
    "section": "PSI - Legea 307/2006",
    "topic": "Mica scurgere de gaz, miros ușor de reclame",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Administratorul detectează miros ușor de gaz (reclame) în bucătărie, dar nu vede flacără sau fum. Se gândeste că poate fi o mica scurgere nepericloasă. Cum trebuie sa acționeze?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, lasă ușa deschisa și asteapta să dispară mirosul și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Miros de gaz = pericol potențial de explozie. Se anunța imediat, se opresesc activitati în bucătărie (NU flacără, NU scântei), se aereaza, se solicita verificare de specialist PSI/gaz, se evacuează daca se întăreste mirosul."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, se verifică mai târziu după program și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, se aprinde mereu un chibrit ca să vadă dacă e gaz urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — orice situație ce poate produce incendiu se anunța IMEDIAT. Miros de gaz = pericol de explozie. Se opresesc activități cu foc/scântei, se anunța specialist și se aereaza. NU se aprinde focul pt a verifica (asta ar declanșa explozie).",
    "tooltipCorrect": "Miros de gaz = anunț imediat, oprezesc foc, aereaza, solicit specialist — pericol de explozie."
  },
  {
    "id": "PSI-036",
    "section": "PSI - Legea 307/2006",
    "topic": "Distrugere evidență după incident minor",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Se întâmplă o mica scurgere de apă din sistem de stingere în hol (probabil o mică deteriorare a peretelui). Administratorul notează incident pe o hârtie, apoi o distruge după ce se curată. Nu se raportează autorității. Ce e necesar conform Legea 307/2006?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, distrugerea documentului e ok dacă incidentul era minor și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, autoritatea nu verifică incidente minore ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Incidentele și evenimentele (chiar minore) se înregistrează și se raportează conform procedurilor. Se menține evidență, se investiga cauza, se ia măsuri. Distrugerea documentului = încălcare de obligații de înregistrare."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, numai incidentele grave se raportează urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul menține evidență și raportează incidente conform procedurilor. Distrugerea documentelor = ascundere de date și neconformitate cu obligațiile de înregistrare și raportare.",
    "tooltipCorrect": "Evidență și raportare incidente, chiar minore — distrugere de documente = încălcare."
  },
  {
    "id": "PSI-037",
    "section": "PSI - Legea 307/2006",
    "topic": "Instructie verbala doar, nu scris",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul da instrucțiuni verbale personalului: \"daca e incendiu, anunța 112 și evacuați copii\". Instruirea e considerata suficientă. Nu exista instrucțiuni scrise. Ce defect e?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, vorbitul e ok dacă toți ascultă și-și amintesc urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, fiecare salariat trebuie să-și scrie propriile instrucțiuni și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, se scriu instrucțiuni numai daca vine inspecție și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Instrucțiuni scrise sunt obligatorii: PSI, evacuare, responsabilități. Vorbitul nu e dovada, nu e accesibil tuturor, nu se poate verifica cunoașterea clara. Se redacteaza instrucțiuni scrise și se evidențiaza că personalul le-a primit și înțeles."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — instrucțiuni PSI trebuie scrise și aduse la cunoștință personalului. Forma scrisa = dovadă, claritate, comunicare uniforma. Vorbitul = neverificabil și pierdut în timp.",
    "tooltipCorrect": "Instrucțiuni scrise PSI obligatorii, aduse la cunoștință personalului, semnat de fiecare."
  },
  {
    "id": "PSI-038",
    "section": "PSI - Legea 307/2006",
    "topic": "Copil cu alergii și cale de evacuare blocata",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Un copil din grupa are simptome de asma. Cale de evacuare din grupa sa este blocata cu o usa care se-a umflat din cauza umezelii și dificil de deschis sub presiune. In caz de incendiu, copilul cu asma necesita aer curat și cale ușor accesibila. Ce obligații sunt încălcate?",
    "options": [
      {
        "id": "A",
        "text": "Căile de evacuare trebuie libere și funcționale pentru TOȚI, inclusiv copii cu limitări medicale. Ușa umflata = cale defecta. Se reparează sau se înlocuiește urgenta, se asigura cale sigura pentru copil. Și deschidere = obligație de adaptare."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, ușa umflata va fi reparata după program urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, copilul cu asma poate fi evacuat mai lent și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, copilul va fi evacuate și va respira greu, normal urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — căile de evacuare se mențin libere și funcționale. Un copil cu asma și o ușă defecta = risc crescut. Se reparează urgenta și se asigura cale deschisa și ușor de deschis pt copilul cu probleme respiratorii.",
    "tooltipCorrect": "Cale de evacuare libera și funcțională pentru TOȚI, inclusiv copii cu limitări medicale — reparare urgenta."
  },
  {
    "id": "PSI-039",
    "section": "PSI - Legea 307/2006",
    "topic": "Verificare locul de adunare - acces și condiții",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Locul de adunare desemnat pentru evacuare este o piața publica pe lângă grădiniță, dar nu e nici îngrădit nici monitorizat. Copiii pot fugi în orice direcție. Se crede că \"e destul de departe de clădire\". Ce e neconfprm?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, se tine copiii cu mâna pt a nu fuga urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Locul de adunare trebuie sigur: ingrădit sau delimitat, monitorizat, cu acces controlat. Se designează o zona în curtea grădiniței ingraditsa, sau o piața ingraditsa, unde copii se pot controla și superviza. Libertatea de mișcare = risc de dispariție copii."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, piața libera e ok, copiii nu vor fugi și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, piața publica e mai ieftina, se ține asa și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul desemnează loc de adunare sigur și controlabil. O piață publica deschisă = risc de dispariție copii și imposibilitate de monitorizare. Se designează zona ingraditsa și supervizata.",
    "tooltipCorrect": "Loc de adunare ingrădit și monitorizat, controlat, nu piață deschisă cu risc de fugi."
  },
  {
    "id": "PSI-040",
    "section": "PSI - Legea 307/2006",
    "topic": "Electrocuție risc la outdoor și scurgeri apă",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "În curte se folosiește o frigider portabila pentru gustări și apă, alimentata cu prelungitor de la priza exterioară. Este vreme ploioasă și locul are apă acumulata. Riscul de electrocuție (dacă frigiderul se defectează) nu a fost considerat. Ce obligație e neindeplinita?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, frigidera e ok la exterior daca e îngrijitoare și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, se accepta riscul, copiii/personalul vor fi atenționati și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Evaluarea riscurilor trebuie să includa electrocuție și contact cu apă. Se verifica ce echipamente sunt folosite la exterior, se asigura protecție contra umezeli (loc uscat, cablu izolat/adaptor cu protecție), se instruieste personalul să NU atingă echipament/plug dacă e umed."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, electrocuție e risc mic, se ignora și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul evaluează riscuri incluzând electrocuție și contact electric. Echipament electric la exterior în condiții umede = risc crescut. Se ia măsuri: loc uscat, protecție cabluri, instruire personal.",
    "tooltipCorrect": "Evaluez riscuri electrocuție, protejez echipament la exterior, instruiesc personal."
  },
  {
    "id": "PSI-041",
    "section": "PSI - Legea 307/2006",
    "topic": "Diferența între obligații admin vs obligații salariat",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Cine poartă răspunderea de a elabora instrucțiuni PSI și de a asigura funcționarea mijloacelor de stingere?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, inspectorul PSI, când vine la inspecție."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, pompierii locali și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, fiecare salariat pentru propria nevoie."
      },
      {
        "id": "D",
        "text": "Administratorul/conducătorul instituției, care apoi verifică respectarea de personalul instituției."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — obligațiile administratorului/conducătorului sunt explicite: elaborare instrucțiuni, asigurare funcționare, verificare personal. Salariații au obligații diferite: respectare, utilizare corectă, raportare incidente.",
    "tooltipCorrect": "Administrator: elabora instrucțiuni, asigura funcționare, verifica; Salariat: respecta, raporteaza."
  },
  {
    "id": "PSI-042",
    "section": "PSI - Legea 307/2006",
    "topic": "Sânge și contaminarnt după incendiu periculos",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "După un incendiu minor în grădiniță, un copil e ușor rănit și sângerează, iar locul incendiului are cenușă și reziduuri chimice. Care este succesiunea de obligații conform Legea 307/2006?",
    "options": [
      {
        "id": "A",
        "text": "Se evaluează rănit (prim-ajutor/ambulanta dacă grav), se izolează locul incendiului (NU se modifică pana la cercetare), se anunța autorități, se face cercetare cauzelor, se documenta. Cenușă și reziduuri sunt dovezi de investigație."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, se dă vina pe o sursă și gata ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, se curăță locul ca să nu se vadă la inspecție urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, se curăță imediat și se dă cu antiseptic ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — evenimentul se cercetează pentru cauze și prevenire; locul NU se modifică dacă afectează cercetarea, cu excepția salvării persoanelor. Și rănit se evaluează medical. Documentare și investigație sunt obligatorii.",
    "tooltipCorrect": "Prim-ajutor rănit, locul incendiu izolat (dovezi), anunț autorități, investigație — NU se curață pre-investigație."
  },
  {
    "id": "PSI-043",
    "section": "PSI - Legea 307/2006",
    "topic": "Instalație de avertizare defecta și ignorata",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Sirena de incendiu din grădiniță se-a defectat și produce doar sunete intermitente și confuze. În loc s-o repareze, administratorul tolereaza situația spunând \"copiii au auzit din nou\". Ce obligație nu e respectata?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, sirena defecta e acceptabila daca mai dă vreun sunet ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Sisteme de avertizare trebuie funcționale și clare. Sirena defecta = inefectiva. Se reparează sau se înlocuiește urgenta, se verifica funcționalitate, se testează regulat."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, copii vorbesc prea mult, oricum nu aud sirenă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, se asteapta un incendiu real ca să vina mecanicul urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — instalații de avertizare se menține libere și funcționale. O sirena defecta și intermitenta NU e funcțională. Se reparează urgenta și se testează regulat.",
    "tooltipCorrect": "Sirena funcțională și clara obligatorie — reparare urgenta, testare regulata."
  },
  {
    "id": "PSI-044",
    "section": "PSI - Legea 307/2006",
    "topic": "Personal cu prea mult lucru, neglijare PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Un salariat e prea ocupat (mulți copii, puțini angajați) și neglijează să raporteze o priză defecta sau să ții caile de evacuare curate. Se crede că \"va fi mai bine peste vreme când se angajeza mai mult\". Ce răspund administratorului?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, inspectorul va critica și va obliga și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, se tolereaza neglijența pana la angajări noi și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Ocuparea nu e scuza. Administratorul reorganizează responsabilități, asigura că obligații PSI se îndeplinesc (priza se reparează imediat, căile se curață), verifica respectarea și ia măsuri disciplinare daca persista. Sigurança e prioritate."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, salariatul va învăța pe cont propriu că trebuie și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul asigură conformitate indiferent de ocupare. Ocupare ≠ scuza pentru neglijență PSI. Se reorganizează sarcini, se instruieste, se monitorizează și se corectează.",
    "tooltipCorrect": "Ocupare NU e scuza pentru neglijență PSI — reorganizez responsabilități, asigur conformitate, verific."
  },
  {
    "id": "PSI-045",
    "section": "PSI - Legea 307/2006",
    "topic": "Prevenție vs intervenie in filosofia PSI",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Ce este accentul principal al Legea 307/2006 în protecția contra incendiilor în instituții?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, intervenție rapidă cu pompieri și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, evacuare imediate, nu prevenție ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, stingere de incendii pe cont propriu ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Prevenire: identificare și eliminare riscuri de incendiu, menținere căi de evacuare și mijloace funcționale, instruire personale. Intervenție e ultimă resortă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — scopul este prevenire și limitarea propagării, cu protecția vieții. Prevenire = evitare de incendiu. Intervenție și stingere sunt secundare.",
    "tooltipCorrect": "Accent pe prevenire: elimina riscuri, menține căi libere, instruieste personal — nu stingere."
  },
  {
    "id": "PSI-046",
    "section": "PSI - Legea 307/2006",
    "topic": "Pom decorativ uscat lângă vopsea și diluant",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "În depozit se ține un pom decorativ uscat (ex. brad uscat din Crăciun) lângă vopsea, diluant și alcool. Administratorul constată aceasta și se gândeste \"pomul nu-i activ, nu-i pericol\". Ce risc nu intelege?",
    "options": [
      {
        "id": "A",
        "text": "Pom uscat = material foarte inflamabil, ușor de aprins. Lângă vopsea și diluant (inflamabile) și alcool (combustibil) = scenariu incendiu catastrofal. Se scoate pomul imediat din depozit."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, pomul uscat nu-i pericol ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, se va muta după Anul Nou urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, se lasă unde-i că e decorativ ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — identificarea riscurilor include materiale organice uscate (pom, frunze). Pom uscat lângă inflamabile = risc exponențial de incendiu. Se scoate urgent din depozit.",
    "tooltipCorrect": "Pom uscat e material inflamabil — scoate din depozit cu substanțe chimice imediat."
  },
  {
    "id": "PSI-047",
    "section": "PSI - Legea 307/2006",
    "topic": "Testare și înlocuire baterie în detector fum",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Un detector de fum din grajdina bîzîie (semnal de baterie slabă). Administratorul vede că detector-ul este din 2010 și nu stie când a fost ultima dată înlocuita bateria. Ce trebuie verificat și actualizat?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, se cumpără detector nou din 2024 și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Se schimba bateria imediat (are semnal de slaba), se ține evidență cu data înlocuirii, se verifica funcționalitate după schimbare, se planifica înlocuirea periodica (anual minimum). Bateria slabă = detector inefectiv."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, detectorul funcționează, nu e nevoie de schimbare urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, se-a tăcut din nou, deci mai merge și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul asigură funcționare instalații. Detector fum cu baterie slabă = inefectiv. Se schimba bateria imediat, se testează și se menține evidență cu dată.",
    "tooltipCorrect": "Detector fum cu baterie slaba — schimb imediat, test funcționalitate, evidență cu data."
  },
  {
    "id": "PSI-048",
    "section": "PSI - Legea 307/2006",
    "topic": "Răspundere copii pentru regulile PSI",
    "difficulty": "basic",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Cine poartă răspunderea de a asigura că copiii respectă regulile de siguranță la incendiu (ex. NU joacă cu stingători, NU blocheaza uși)?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, copiii singuri, pentru că-și spun alții și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, nicio pentru că sunt copii ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Personalul instituției (educators, administratori) — prin instruire, supraveghere și corectare comportamentelor copiilor. Copii mici NU au răspundere legala, doar personalul."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, părinții din acasă ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — personalul instituției este responsabil de instruire și supraveghere copii. Copii mici nu-și asumă răspundere legala, adulții le-o asigură.",
    "tooltipCorrect": "Personal — instruieste, supraveghează și corectează comportamentul copiilor, nu copii înșiți."
  },
  {
    "id": "PSI-049",
    "section": "PSI - Legea 307/2006",
    "topic": "Acces neautorizat la tabloul electric și stingătoare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Copii care se joacă nesupravegheat au acces la tabloul electric din hol și au ajuns sa-și rănească mâinile. De asemenea, stingătoarele sunt accesibile copiilor și unii spun că \"și-au vrut sa-l folosească\". Ce obligații personalului sunt nerespectate?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, copii sunt curiosi, e normal să-și rănească urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, se culpă copii pentru curioitate și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, se lasă copii să exploreze liber urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Personalul NU blochează căi de evacuare și stingătoare, dar NU lasă copii nesupravegheti pe lângă echipament electric/mijloace stingere. Se asigura supraveghere, se blocheza accesul neautorizat la tablou (lacăt), se educă copii să NU atingă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — personalul supraveghează și protejează copii de pericole. Tablou electric neprotejat și stingătoare accesibile copiilor nesupravegheați = risc. Se asigura supraveghere, se blocheza acces neautorizat și se educă copii.",
    "tooltipCorrect": "Supraveghere, acces blocat la tablou și stingătoare, educație copii — NU explorare liberă lângă pericol."
  },
  {
    "id": "PSI-050",
    "section": "PSI - Legea 307/2006",
    "topic": "Prost îngrijire a cablurilor și prelungitoarelor",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Cablurile prelungitoarelor sunt tinute cu banda largă de țesătură pe perete. Unele sunt ușor deteriorate (izolatia crăpata în locuri). Se crede că \"tabeoul e groasă, protecția nu dispare\". Ce e greșit?",
    "options": [
      {
        "id": "A",
        "text": "Izolatia crăpata = risc de electrocuție/scurtcircuit. Se înlocuiesc cablurile deteriorate, se folosieste protecție potrivita (canalul plastic), se verifica periodic pentru deteriorare. Improvizații sunt interzise."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, banda e suficiente protecție urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, banda de țesătură e inginerie suficiente ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, se asteapta cablurile sa se rupă și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — salariații nu fac improvizații cu cabluri și echipament electric. Izolatia crăpata = risc serios de scurtcircuit și electrocuție. Se înlocuiesc și se protejează corect.",
    "tooltipCorrect": "Izolatia crăpata = risc — înlocuiesc cablurile și protejez cu canalul plastic, verify periodic."
  },
  {
    "id": "PSI-051",
    "section": "PSI - Legea 307/2006",
    "topic": "Depozitare carburanti și materiale de curățenie amestecat",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Grădiniță ține benzina pentru masinor de tuns iarba și sprayuri de curățenie în același dulap vecinul. Nicio separare, nicio ventilație. Se crede că \"sunt departe de copii\". Cum evalueaza adminstratr riscul?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, se deschide ușa dulapului regulat pt ventilație urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Departe de copii ≠ departe de pericol. Benzina și sprayuri = vapori inflamabili. Amestecare + fără ventilație = risc explozie. Se separa în zone distincte, se etichetează, se ventileza, se depoziteza conform regulilor chimice."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, departe de copii e sigur urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, se ține în cutii de carton pt protecție urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul evaluează riscuri chimice și inflamabile. Benzina și sprayuri amestecat fără ventilație = pericol ridicat de explozie. Se separa, se etichetează și se depoziteza conform norme chimice.",
    "tooltipCorrect": "Benzina și sprayuri = separa în zone, ventilare, etichetare — NU amestecare."
  },
  {
    "id": "PSI-052",
    "section": "PSI - Legea 307/2006",
    "topic": "Documentație dispariția și copii ale avizelor PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Administratorul nu găsește originalul avizului de securitate la incendiu și nici copia notariala. Se-are doar o copie \"de mână\" a unei pagini. La inspecție, se cere avizul. Cum se explica?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, se cere copie de la vecinu care e inspector urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, se zice inspectorului că s-a pierdut ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Originale și copii notariale trebuie păstrate și accesibile pt inspecție. Pierderea documentului = defect grav. Se solicita original din nou de la autoritate, se menține în dosar sigur, se ține și copie notariala."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, copie de mână e valida cu semnatura și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul menține dosarul cu documente avizelor. Pierderea = neconformitate. Se solicita reemitere de la autoritate și se păstrează în loc sigur.",
    "tooltipCorrect": "Documente în dosar sigur, accesibil pt inspecție — pierderea = defect, solicita reemitere."
  },
  {
    "id": "PSI-053",
    "section": "PSI - Legea 307/2006",
    "topic": "Fum din sistem de ventilație, cauza necunoscuta",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Administratorul observa fum ușor ieșind din orificiile de ventilație ale bucătariei. Cauza nu e clară (poate de la cuptorul, poate de la sistem, poate de la o problemă de ardere). Se-a miros ușor de ars. Cum trebuie sa acționeze?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, se ignora, ar fi doar o mică problemă și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, asteapta să vadă dacă mai iese fum urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, se deschide fereastra și gata urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Anunța imediat, opresec bucătaria (NU foc/aparate active), aereaza zona, contacteaza specialist HVAC/gaz pentru investigație. Fum = pericol potențial de incendiu, cauza trebuie stabila."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — fum din sistem = situație ce poate produce incendiu. Se anunța imediat, se opresec sursele de căldură, se contacteaza specialist și se investigează. NU se ignora.",
    "tooltipCorrect": "Fum din ventilație = anunț imediat, oprez căldură, contactez specialist, investigație."
  },
  {
    "id": "PSI-054",
    "section": "PSI - Legea 307/2006",
    "topic": "Sfật vs practica efectiva PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Grădiniță are instrucțiuni PSI pe hârtie scrise, dar personalul nu le urmărisce: uși de evacuare sprijinite deschis, stingătoare bloccate, căi neîngrijite. Administratorul zice \"instrucțiunile sunt acolo, NU-I culpa mea dacă nu se respecta\". Ce e insuficient?",
    "options": [
      {
        "id": "A",
        "text": "Scris ≠ executare. Administratorul trebuie să verifica ACTIVE că personalul respecta instrucțiunile, să monitorizeze, să corecteze și să ia măsuri disciplinare dacă e necesar. Scrisul = cerință, verificare = obligație."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, se distribuie instrucțiuni și gata urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, instrucțiuni scrise sunt destule, rest e responsabilitate personala și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, inspectorii vor opri nerespectarea urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul nu doar elaborează instrucțiuni, dar verifica și asigura că sunt respectate. Scris fără verificare și corectie = neglijență administrativă. Se monitoriza și se iau măsuri.",
    "tooltipCorrect": "Instrucțiuni scrise + verificare ACTIVA + corectie + măsuri — nu doar scris și gata."
  },
  {
    "id": "PSI-055",
    "section": "PSI - Legea 307/2006",
    "topic": "Soccane și coloane de fum cu copii în apropiere",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Un copil sufocă (tuse ușoară și zice că-i e rece). Administratorul observa și o mică coloană de fum-rece din tabloul electric din afara. Se gândeste \"e doar un cablu care se încinge ușor\". Cum trebuie să procedeze?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, se lasă copilul să tușeasc, se observa tabloUl mai târziu și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Orice fum din echipament electric = pericol. Se deconectează curent (dacă sigur), se scoate copilul din zona cu fum, se aereaza, se anunța urgență (112 daca sunt simptome de inalare grava). Fum-rece din tablou = scurtcircuit."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, se face apa pe tabloul electric și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, se ignora, va disparea fumul singur ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — fum din echipament electric = scurtcircuit și pericol incendiu. Și copilul ce sufocă are nevoie de aer curat. Se deconectează curent, se evacuează zona și se anunța urgență dacă e grav.",
    "tooltipCorrect": "Fum din tablou = deconectez curent, evacez zona fum, anunț urgență dacă copil suferă."
  },
  {
    "id": "PSI-056",
    "section": "PSI - Legea 307/2006",
    "topic": "Sfără semnalizare de pericol pe substanțe toxice",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Substanțele de curățenie (acid muriaticà, sprayuri chimice) se ține într-un dulap curat fără picograme de pericol și fără etichete. Personalul stie ce-i acolo din memorie, dar nu e documentat. Copii iau lucruri din doapă. Ce e neconfprm?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, se lasă dar se verifica des și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, copii-sunt atenționati verbal ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Etichete și semnalizare pericol sunt obligatorii pe substanțe chimice. Se adaugă etichete cu pictograme toxicitate, se face inventar scris, se blocheza dulapul cu lacăt dacă accesibil copiilor, se instruieste personal și se evidențiaza pericol."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, memoria e suficate daca personalul stie urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — substanțe periculoase trebuie etichetate și evidentiiate. Fără etichete și cu acces copii nesupravegheti = pericol de intoxicare. Se etichetează, se face inventar și se blocheza acces neautorizat.",
    "tooltipCorrect": "Etichetare chimice, etichete pericol, inventar scris, acces blocat — obligatoriu."
  },
  {
    "id": "PSI-057",
    "section": "PSI - Legea 307/2006",
    "topic": "Exercițiu evacuare cu mers ușor și ignorare indicații",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "Într-un exercițiu de evacuare, unii copii ignora indicațiile și se-au intorc să ia jucării, alții nu țin ordinea de mars și se-au răspândesc pe cale. Personalul nu-și respecta posturile (unii nu-și stiu locul). Exercițiul e considerat \"ok\" pentru că toți copii sunt ies afară. Ce e neconfprm?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, exerciții nu au sens, sunt doar formaliști urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, copii sunt prea mici, nu se-pot organiza urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, exercițiu-ul OK dacă copii ies, indiferent de mod urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Evacuare trebuie ORGANIZATA și conform instrucțiuni, nu haotic. Se repeta exercițiul cu pre-instruire, se stabilesc ordine de mars, se desemnează persoane per cale, se instruieste copii și personalul pe discipline și ascultare de semnale."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — evacuarea se face conform instruirii, organizat, fără panică. Un exercițiu haotic cu indiferență la semnale și ordine = nepregătire. Se elaborează instrucțiuni clare, se instruieste, se repeta exercițiile cu discipline.",
    "tooltipCorrect": "Evacuare organizata conform instrucțiuni, discipline și semnale — nu haos și ignorare."
  },
  {
    "id": "PSI-058",
    "section": "PSI - Legea 307/2006",
    "topic": "Neplată de taxă de control PSI de 2 ani",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Grădiniță nu a plătit taxa anuala de control PSI de 2 ani (credeam că e opțională sau că-i o scapare administrativă). La inspecție se constata neachitare. Ce consecințe poate fi?",
    "options": [
      {
        "id": "A",
        "text": "Control și inspecții PSI sunt servicii obligatorii, cu taxe asociate. Neachitare = neconformitate și pasibil de sancțiuni (penalități, interzicere funcționare daca gravă). Se regularizeaza neintârziat."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, inspectorul va uita de neachitare și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, taxa de control e voluntara, nu-i obligatorie ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, se va plăti pe viitor, acum nu ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul obtine avizele și autorizațiile obligatorii. Control PSI e serviciu obligatoriu cu taxe. Neachitare = neconformitate și pasibil de sancțiuni. Se regularizeaza.",
    "tooltipCorrect": "Control PSI obligatoriu cu taxe — neachitare = sancțiuni, regularizeaza neintârziat."
  },
  {
    "id": "PSI-059",
    "section": "PSI - Legea 307/2006",
    "topic": "Renouveau și actualizare a instrucțiunilor PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Instrucțiunile PSI ale grădiniței sunt scrise în 2018 și nu au fost revizuite de atunci. Între timp s-a deschis un nou salon, s-a schimbat patru angajați și s-au instalat noi stingătoare. Instrucțiunile vechi nu mai reflecta realitatea. Cine e responsabil de actualizare?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, instrucțiuni vechi sunt valide pana când cineva zice că sunt greșite ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Administratorul revizuieste instrucțiunile periodic (anual minimum) și la orice schimbare majora (personal, clădire, echipament). Se actualizează pentru a reflecta realitatea actuala."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, dacă nimeni nu se-a plâncut, sunt ok ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, se asteapta o inspecție ca să spuna ce-i greșit ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — instrucțiunile trebuie actuale și reflectând realitatea. Schimbări (personal, clădire, echipament) impun reviziere. Se actualizează regulat și la schimbări.",
    "tooltipCorrect": "Instrucțiuni revizuite anual și la schimbări majore — actualitate obligatorie."
  },
  {
    "id": "PSI-060",
    "section": "PSI - Legea 307/2006",
    "topic": "Supraîncărcare cale de evacuare cu material pentru joacă",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 1",
    "type": "single",
    "question": "După-amiaza, administratorul vede că cale de evacuare din coridor este folosita ca depozit temporar pentru materiale de joacă care trebuie mutate. Se crede că materiale sunt temporare (până seara se-au scoate). Ce prevedere sunt încălcate?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, se retrage cale la sfârșitul zilei urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, temporar e ok, se-au scoate seara urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Căile de evacuare trebuie libere MEREU, nu \"temporar\". Orice obstacol (chiar temporar) = blocare și risc în cazul urgență. Materiale se mută în loc de depozitare separat imediat, coridorul se curăță permanent."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, se lasă materiale în cale, se mutează când se termina program și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 1 — căile de evacuare se mențin libere. \"Temporar\" NU e suficient; în caz de urgență de mâine, copii vor întâmpina obstacol. Se menține permanent liber.",
    "tooltipCorrect": "Cale evacuare LIBERA mereu — \"temporar\" NU e acceptat, liber permanent."
  },
  {
    "id": "PSI-061",
    "section": "PSI - Legea 307/2006",
    "topic": "Responsabilitate și răspundere penala în caz de incendiu cu pagube",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, cap. II, sec. 6",
    "type": "single",
    "question": "Un incendiu se produce în grădiniță din cauza unui cablu deteriorat în perete care nu a fost reparata deși salariatul l-a raportat administratorului luni. Incendiul produce pagube si rani ușoare. Cine poarta răspunderea legala: salariatul, administratorul sau ambii?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, nicio pentru că e accident ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, cablul e responsabilitate a electricianului, nu al grădiniței și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, salariatul care-a raportat e responsabil că nu-l-a forțat s-o repare ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Administratorul poarta răspunderea principala: a primit raport, nu-a dispus reparație urgenta. Salariatul și-a făcut datoria prin raportare. Neacțiune = neglijență și răspundere penala/civila pt pagube și răniri."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea nr. 307/2006, cap. II, sec. 6 — administratorul are obligații de a verifica și actiona pe rapoarte de pericol. Neacțiune pe cablul deteriorat cunoscut = neglijență și răspundere legala. Salariatul a făcut datoria prin raportare.",
    "tooltipCorrect": "Administrator răspunde: a primit raport, trebuia reparație urgenta — neacțiune = responsabilitate penala/civila."
  },
  {
    "id": "INF-001",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Secret de serviciu vs. secret de stat",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 4 alin. 3",
    "type": "single",
    "question": "Administratorul II întocmește un raport intern cu lista copiilor înscriși, situția financiară a familiilor restante la taxă și contractele cu furnizorii de alimente. Documentul nu trebuie cunoscut decât persoanelor cărora le este necesar pentru atribuții, iar divulgarea poate prejudicia unitatea și familiile. Ce categorie de informație clasificată se aplică și de ce NU este „secret de stat”?",
    "options": [
      {
        "id": "A",
        "text": "Secret de serviciu, deoarece divulgarea prejudiciază o persoană juridică de drept public/privat (unitatea), nefiind legat de siguranța națională/apărare — HG 585/2002 art. 4 alin. 3."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, secret de stat, pentru că orice document intern nedistribuit public se protejează la acest nivel urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, secret de stat nivel „secret”, pentru că implică date cu caracter personal și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, nicio categorie; lista copiilor și contractele sunt informații publice automat și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 585/2002 art. 4 alin. 3 definește secretul de serviciu ca informația a cărei divulgare prejudiciază o persoană juridică de drept public sau privat. Secretul de stat (art. 4 alin. 2) vizează siguranța națională/apărarea — nu este cazul unui raport intern de grădiniță. Datele cu caracter personal justifică protecție, dar nu ridică nivelul la secret de stat.",
    "tooltipCorrect": "Secret de serviciu (art. 4 alin. 3): prejudiciază unitatea, nu siguranța națională. Date personale ≠ secret de stat."
  },
  {
    "id": "INF-002",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Niveluri secret de stat",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 4 alin. 2",
    "type": "single",
    "question": "Conducerea solicită administratorului să explice, la instructaj, care sunt nivelurile secretului de stat. Care enumerare este corectă și ce presupun?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, două niveluri: „confidențial” și „strict confidențial” ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Trei niveluri: strict secret de importanță deosebită, strict secret și secret — divulgarea fiecăruia prejudiciază siguranța națională/apărarea."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, un singur nivel generic: „secret de stat”, fără subniveluri și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, patru niveluri: intern, secret, strict secret, top secret și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 585/2002 art. 4 alin. 2 stabilește trei niveluri pentru secretul de stat: a) strict secret de importanță deosebită; b) strict secret; c) secret. Toate se acordă când divulgarea prejudiciază siguranța națională/apărarea.",
    "tooltipCorrect": "3 niveluri secret de stat: strict secret de importanță deosebită / strict secret / secret."
  },
  {
    "id": "INF-003",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Ghid de clasificare",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 5",
    "type": "single",
    "question": "O grădiniță nouă nu are încă un ghid de clasificare a informațiilor. Administratorul II întâmpină frecvent dileme (lista copiilor, dosarele de personal, rapoartele financiare — ce se clasează și la ce nivel). Conform HG 585/2002, cum se reglementează clasificarea internă?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, fiecare salariat decide singur, după raionament propriu, ce este secret și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, ghidul se ia de pe internet, fără aprobare internă urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Autoritatea întocmește un ghid de clasificare, aprobat personal și în scris de împuterniciți/funcționari superiori abilitați; după ghid se clasifică informațiile."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, ghidul este opțional; clasificarea se face doar la solicitarea ISJ urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 585/2002 art. 5 obligă autoritățile să întocmească un ghid de clasificare, aprobat personal și în scris de împuterniciți/funcționari superiori abilitați. Ghidul este instrumentul pe baza căruia se decide ce se clasează și la ce nivel.",
    "tooltipCorrect": "Ghid de clasificare obligatoriu (art. 5), aprobat în scris de împuterniciți."
  },
  {
    "id": "INF-004",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Liste de informații clasificate",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 6 și art. 7",
    "type": "single",
    "question": "Administratorul II vrea să clarifice cine aprobă lista proprie de informații clasificate. Conduce o unitate fără informații de secret de stat, doar de secret de serviciu. Conform HG 585/2002, cine stabilește lista cu secrete de serviciu, respectiv cine aprobă lista cu secrete de stat?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, lista cu secrete de serviciu o aprobă inspectorul ștar; cea cu secrete de stat, prin HG."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, ambele liste le aprobă conducătorul unității, în mod identic."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, listele cu secrete de serviciu se publică în Monitorul Oficial."
      },
      {
        "id": "D",
        "text": "Lista cu secrete de stat se aprobă/actualizează prin HG; listele cu secrete de serviciu le stabilesc conducătorii unităților."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 585/2002: art. 6 — listele proprii cu secrete de stat se aprobă și se actualizează prin HG; art. 7 — listele cu secrete de serviciu le stabilesc conducătorii unităților. Pentru o grădiniță cu doar secret de serviciu, lista se stabilește de conducătorul unității.",
    "tooltipCorrect": "Secret de stat → HG (art. 6); secret de serviciu → conducătorul unității (art. 7)."
  },
  {
    "id": "INF-005",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Principiul necesității cunoașterii",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 8",
    "type": "single",
    "question": "Un educator solicită administratorului II acces la întregul registru de evidență a copiilor (adrese, telefon părinți, situație financiară) „pentru a-și cunoaște grupa”. Administratorul deține lista ca secret de serviciu. Conform HG 585/2002 art. 8, cum se delimitează accesul?",
    "options": [
      {
        "id": "A",
        "text": "Accesul se limitează strict la informațiile necesare îndeplinirii atribuțiilor; educatorului i se comunică doar datele copiilor din grupa sa, nu și adresele/situația financiară a tuturor."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, accesul se acordă doar după publicarea listei pe site urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, accesul se refuză complet, inclusiv pentru grupa proprie, deoarece este secret urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, accesul integral se acordă oricărui salariat al unității, indiferent de atribuții urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 585/2002 art. 8 include în secretele de serviciu informații care nu trebuie cunoscute decât de persoanele cărora le sunt necesare pentru îndeplinirea atribuțiilor. Principiul necesității cunoașterii limitează accesul la strictul necesar; educatorul nu are nevoie de adresele/situația financiară a tuturor copiilor.",
    "tooltipCorrect": "Acces strict la ce este necesar atribuțiilor (art. 8), nu acces integral „pentru că suntem colegi”."
  },
  {
    "id": "INF-006",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Procedura de clasificare",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 10 și art. 11",
    "type": "single",
    "question": "Administratorul II redactează un nou document (sinteză a contractelor și a restanțelor) și ezită dacă să-l claseze. Conform HG 585/2002, după ce instrumente se face clasificarea și cine verifică corectitudinea ei?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, clasificarea se face pe baza unui model de pe internet; verificarea o face ISJ."
      },
      {
        "id": "B",
        "text": "Clasificarea se face consultând ghidul și listele (art. 10), iar șeful ierarhic al emitentului verifică corectitudinea clasificării (art. 11)."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, documentul se clasează automat „strict secret” doar pentru că are și date financiare."
      },
      {
        "id": "D",
        "text": "Pe baza dispoziției, clasificarea se face după opinia conducătorului, fără instrumente scrise; verificarea o face emitentul."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 585/2002 art. 10: clasificarea se face consultând ghidul și listele. art. 11: șeful ierarhic al emitentului verifică dacă clasificarea este corectă. Clasificarea nu se face arbitrar sau după modeluri neoficiale.",
    "tooltipCorrect": "Clasificare cu ghid+liste (art. 10); verificare de șeful ierarhic al emitentului (art. 11)."
  },
  {
    "id": "INF-007",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Termene de clasificare",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 12",
    "type": "single",
    "question": "Un document este clasificat „strict secret de importanță deosebită”. La instructaj, un coleg susține că Protecția durează 50 de ani ca la orice secret. Conform HG 585/2002, care sunt termenele de clasificare, dacă nu necesită protecție mai îndelungată?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, 50 de ani pentru toate nivelurile și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, 10 ani pentru secret de serviciu, nelimitat pentru secret de stat."
      },
      {
        "id": "C",
        "text": "Strict secret de importanță deosebită — până la 100 ani; strict secret — 50 ani; secret — 30 ani; pot fi prelungite prin HG."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, toate nivelurile: 30 de ani urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 585/2002 art. 12 stabilește termene: strict secret de importanță deosebită — până la 100 ani; strict secret — 50 ani; secret — 30 ani (dacă nu necesită protecție mai îndelungată). Acestea pot fi prelungite prin HG.",
    "tooltipCorrect": "100 / 50 / 30 ani (strict secret de importanță deosebită / strict secret / secret)."
  },
  {
    "id": "INF-008",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Reevaluare periodică",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 13",
    "type": "single",
    "question": "Lista cu secrete de serviciu a grădiniței a fost făcută acum cinci ani și n-a mai fost atinsă. Conducerea consideră că este suficient. Conform HG 585/2002, ce obligație există față de nivelurile și termenele de clasificare?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, lista rămâne valabilă pe termen nelimitat, fără reevaluare."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, reevaluarea se face doar dacă intervine un control."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, reevaluarea o solicită doar părinții, în scris și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Verificarea periodică și reevaluarea nivelurilor/termenelor sunt obligatorii (art. 13), nu o simplă recomandare."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 585/2002 art. 13 impune verificarea periodică și reevaluarea nivelurilor și termenelor de clasificare. O listă neactualizată poate duce la supraevaluare (protecție inutilă) sau subevaluare (lipsă de protecție).",
    "tooltipCorrect": "Reevaluare periodică obligatorie (art. 13), chiar și fără control extern."
  },
  {
    "id": "INF-009",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Compunerea din niveluri diferite",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 14",
    "type": "single",
    "question": "Administratorul II compune un dosar din trei extrase: unul „secret”, altul „strict secret” și unul nesecret. Va folosi dosarul pentru un raport către conducere. Conform HG 585/2002 art. 14, cum se clasifică dosarul compus, respectiv cumulul neprelucrat de extrase?",
    "options": [
      {
        "id": "A",
        "text": "(Documentul prelucrat se clasifică conform noului conținut, putând fi superior originalelor; cumulul neprelucrat de extrase primește nivelul extrasului cu cel mai înalt nivel (art. 14).)"
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, dosarul devine automat nesecret, fiind o compunere urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, dosarul se clasează la nivelul celui mai puțin important extras ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, fiecare pagină păstrează nivelul inițial, fără un nivel de ansamblu și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 585/2002 art. 14: (1) documentul rezultat din prelucrarea informațiilor cu niveluri diferite se clasifică conform noului conținut (poate fi superior originalelor); (2) cumulul neprelucrat de extrase primește nivelul extrasului cu cel mai înalt nivel.",
    "tooltipCorrect": "Prelucrat → după conținutul nou; neprelucrat → nivelul celui mai înalt extras (art. 14)."
  },
  {
    "id": "INF-010",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Rolul marcării",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 15",
    "type": "single",
    "question": "Un stagiar întreabă de ce trebuie marcate documentele clasificate, dacă oricum accesul se acordă doar pe autorizație. Conform HG 585/2002 art. 15, care este scopul marcării?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, marcarea este o simplă decorare, fără rol funcțional."
      },
      {
        "id": "B",
        "text": "Marcarea atenționează persoanele care gestionează/accesează documentul că trebuie aplicate măsuri specifice de protecție."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, marcarea servește doar arhivei naționale, nu unității."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, marcarea înlocuiește complet autorizația de acces și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 585/2002 art. 15: marcarea atenționează persoanele care gestionează sau accesează informația că trebuie aplicate măsuri specifice. Ea nu înlocuiește autorizația, ci o completează; fără marcare, deținătorul nu este avertizat că trebuie să protejeze documentul.",
    "tooltipCorrect": "Marcarea = atenționare că se aplică măsuri specifice de protecție (art. 15)."
  },
  {
    "id": "INF-011",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Supra/subevaluare și contestare",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 16 și art. 17",
    "type": "single",
    "question": "Un document a fost clasificat „strict secret”, deși conținutul (o listă internă de mobilier) AR putea fi doar „secret de serviciu”. Administratorul II consideră că este supraevaluat. Conform HG 585/2002, ce se poate face?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, administratorul reclasifică unilateral, fără să anunțe emitentul ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, contestarea se face doar penal, nu și administrativ urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Supraevaluările/subevaluările se supun atenției emitentului; dacă reclasifică, informează deținătorii; clasificarea se face doar dacă se impune protecția, iar supra/subevaluarea se poate contesta în contencios administrativ (art. 16–17)."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, supraevaluarea se ignoră, clasificarea e definitivă și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 585/2002 art. 16: supraevaluările/subevaluările se supun atenției emitentului, care, dacă reclasifică, informează deținătorii. art. 17: informațiile se clasează doar dacă se impune protecția; supra/subevaluarea se poate contesta în contencios administrativ.",
    "tooltipCorrect": "Se atrage atenția emitentului (art. 16); contestare în contencios (art. 17); clasificare doar dacă se impune."
  },
  {
    "id": "INF-012",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Declasificare",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 19 și art. 20",
    "type": "single",
    "question": "Un document „secret de stat” a ajuns la termenul de clasificare. Administratorul II întreabă cum se declasifică și în ce cazuri se declasifică chiar înainte de termen. Conform HG 585/2002, care este răspunsul corect?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, declasificarea se face prin decizia adunării generale a părinților și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, declasificarea se face automat la expedierea documentului spre arhivă urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, secretul de stat se declasifică prin ordinul administratorului, oricând ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Secretul de stat se declasifică prin HG, la solicitarea motivată a emitentului; se declasifică dacă: termenul a expirat, dezvăluirea nu mai poate prejudicia, sau clasificarea a fost atribuită de persoană neîmputernicită prin lege (art. 19–20)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 585/2002 art. 19: secretele de stat se declasifică prin HG, la solicitarea motivată a emitentului. art. 20: se declasifică dacă (a) termenul a expirat; (b) dezvăluirea nu mai poate prejudicia; (c) clasificarea a fost atribuită de persoană neîmputernicită prin lege.",
    "tooltipCorrect": "Declasificare secret de stat prin HG (art. 19); cazuri art. 20 — termen expirat / fără prejudiciu / neîmputernicit."
  },
  {
    "id": "INF-013",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Marcare secret de serviciu pe pagini",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 2",
    "type": "single",
    "question": "Găsești pe copiatorul din secretariat, liber, un extras din registrul de evidență a copiilor cu mențiunea „secret de serviciu” tipărită doar pe prima pagină. Conform HG 781/2002, care este neregula de marcare și ce măsură imediată se impune?",
    "options": [
      {
        "id": "A",
        "text": "Marcarea trebui să figureze pe FIECARE pagină și pe fiecare se înscrie „secret de serviciu”; retragi documentul de pe copiator, limitezi accesul și anunți conducerea, lăsarea pe copiator liber fiind risc de compromitere."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, faci fotocopii pentru toți educatorii să le folosească în grupă ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, ștergi mențiunea „secret de serviciu” ca să poți circula documentul urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, nicio neregulă; marcarea pe prima pagină este suficientă urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 2: pentru secretul de serviciu, numărul de înregistrare este precedat de litera „S”, iar pe FIECARE pagină se înscrie „secret de serviciu”. Un document cu marcare incompletă, lăsat liber pe copiator, este risc de compromitere: se retrage, se limitează accesul, se anunță conducerea.",
    "tooltipCorrect": "„Secret de serviciu” pe FIECARE pagină (art. 2); copiator liber = risc de compromitere."
  },
  {
    "id": "INF-014",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Marcare dosar pe copertă și pagină de titlu",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 2",
    "type": "single",
    "question": "Administratorul II pregătește un dosar volum de secrete de serviciu pentru arhivare. Conform HG 781/2002 art. 2, unde se marchează dosarele/volumele?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, doar la registratura județeană, nu la unitate urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Dosarele/volumele se marchează pe copertă și pe pagina de titlu; pe fiecare pagină se înscrie „secret de serviciu”."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, marcarea dosarului este facultativă dacă paginile sunt marcate."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, doar pe ultima pagină, discret și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 2: dosarele/volumele cu secret de serviciu se marchează pe copertă și pe pagina de titlu; pe fiecare pagină se înscrie „secret de serviciu”, iar numărul de înregistrare este precedat de litera „S”.",
    "tooltipCorrect": "Dosar: copertă + pagină de titlu; pagini: „secret de serviciu” pe fiecare (art. 2)."
  },
  {
    "id": "INF-015",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Evidență separată a secretelor de serviciu",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 3",
    "type": "single",
    "question": "Administratorul II ține documentele secrete de serviciu și pe cele nesecrete în același registru de corespondență, „ca să fie mai ușor de găsit”. Conform HG 781/2002 art. 3, ce este greșit?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, secretele de serviciu se amestecă doar cu cele nesecrete, nu cu cele de stat."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, este corect, un singur registru este suficient și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Evidența documentelor secrete de serviciu se ține SEPARAT de cea a celor secrete de stat și nesecrete, în registrul special."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, registrul special se ține doar dacă există și secret de stat."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 3: evidența documentelor secrete de serviciu se ține separat de cea a celor secrete de stat și de cea a documentelor nesecrete, în registrul special. Amestecarea crește riscul de divulgare și îngreunează controlul.",
    "tooltipCorrect": "Evidență separată, în registrul special (art. 3) — nu în registrul general."
  },
  {
    "id": "INF-016",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Scoaterea din incintă",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 4",
    "type": "single",
    "question": "Administratorul II vrea să ducă acasă, weekend, un dosar cu secret de serviciu „pentru a termina un raport”. Conform HG 781/2002 art. 4, ce este interzis?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, este permis, dacă dosarul este ținut în geantă ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, este permis dacă administratorul locuiește aproape de unitate."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, este permis doar vineri seara, cu condiția revenirii luni."
      },
      {
        "id": "D",
        "text": "Este interzisă scoaterea documentelor secrete de serviciu din incinta unității fără aprobarea conducătorului."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 4: scoaterea din incintă a documentelor secrete de serviciu este interzisă fără aprobarea conducătorului. Munca „de acasă” cu astfel de documente este o încălcare și risc de compromitere.",
    "tooltipCorrect": "Scoaterea din incintă fără aprobarea conducătorului = interzisă (art. 4)."
  },
  {
    "id": "INF-017",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Funcții cu acces",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 5",
    "type": "single",
    "question": "La o recompartizare, administratorul II trebuie să precizeze ce funcții din grădiniță presupun acces la secrete de serviciu. Conform HG 781/2002 art. 5, cine le stabilește?",
    "options": [
      {
        "id": "A",
        "text": "Funcțiile care presupun acces la secrete de serviciu se stabilesc de conducătorii unităților."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, le stabilește inspectoratul școlar, centralizat."
      },
      {
        "id": "C",
        "text": "Funcțiile cu acces se deduc automat din fișa postului standard, fără decizie."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, le stabilește secretarul din primărie."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 5: funcțiile care presupun acces la secrete de serviciu se stabilesc de conducătorii unităților. Decizia aparține conducerii, nu ISJ sau primăriei.",
    "tooltipCorrect": "Conducătorul unității stabilește funcțiile cu acces (art. 5)."
  },
  {
    "id": "INF-018",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Autorizația de acces",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6",
    "type": "single",
    "question": "Un educator este înlocuitor nou și are nevoie de acces la un document cu secret de serviciu, pe baza discuției verbale cu administratorul II. Conform HG 781/2002 art. 6, ce se impune?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, accesul se acordă verbal, ca să fie operativ urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Accesul personalului este permis NUMAI pe baza autorizației scrise, emisă de conducătorul unității; evidența autorizațiilor se ține centralizat în Registrul pentru evidența autorizațiilor."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, autorizația se emite doar pentru secrete de stat, nu pentru cele de serviciu urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, accesul se acordă prin simpla prezență în local urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 6: accesul personalului la secrete de serviciu se face NUMAI pe baza autorizației scrise, emisă de conducătorul unității; evidența autorizațiilor se ține centralizat, de structura/funcționarul de securitate, în Registrul pentru evidența autorizațiilor.",
    "tooltipCorrect": "Acces doar pe autorizație scrisă de la conducător (art. 6); registru centralizat."
  },
  {
    "id": "INF-019",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Eliberarea autorizației",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 7",
    "type": "single",
    "question": "Pentru eliberarea unei autorizații de acces, un salariat solicită administratorului II să o treacă rapid, „fără formalități”. Conform HG 781/2002 art. 7, ce trebuie să prezinte și să semneze persoana?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, prezintă CV-ul, fără referințe sau angajament și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, semnează doar o declarație pe loc, fără verificare ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Prezintă recomandări/referințe despre onestitate/profesionalism de la conducătorii cărora li se subordonează și semnează un angajament de confidențialitate; structura de securitate verifică autenticitatea și prezintă conducătorului propuneri."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, doar buletinul, fără alt document urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 7: pentru eliberarea autorizației, persoana prezintă recomandări/referințe despre onestitate/profesionalism de la conducătorii cărora li se subordonează și semnează un angajament de confidențialitate; structura de securitate verifică autenticitatea și prezintă conducătorului propuneri.",
    "tooltipCorrect": "Recomandari/referințe + angajament de confidențialitate; structura verifică, conducătorul decise (art. 7)."
  },
  {
    "id": "INF-020",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Retragerea autorizației",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 8",
    "type": "single",
    "question": "Un salariat căruia i-a fost retrasă autorizația de acces (atribuțiile postului nu mai presupun acces) întreabă ce se întâmplă fizic cu autorizația. Conform HG 781/2002 art. 8, în ce cazuri se retrage și ce se face ulterior?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, se retrage doar dacă titularul solicită acest lucru ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, după retragere, autorizația se predă titularului ca suvenir și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, se retrage doar la demisie; autorizația rămâne valabilă altfel și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Se retrage de conducător dacă: încetează raporturile de muncă/serviciu; atribuțiile postului nu mai presupun acces; titularul a încălcat reglementările; după retragere, structura de securitate distruge autorizația pe bază de proces-verbal."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 8: retragerea se face de conducător în cazurile — (a) încetarea raporturilor de muncă/serviciu sau a demnității publice; (b) atribuțiile postului nu mai presupun acces; (c) titularul a încălcat reglementările. După retragere, structura de securitate distruge autorizația pe bază de proces-verbal.",
    "tooltipCorrect": "3 cazuri de retragere; după — distrugere pe proces-verbal (art. 8)."
  },
  {
    "id": "INF-021",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Accesul străinilor / dublă cetățenie",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 9",
    "type": "single",
    "question": "Un partener ONG străin vrea să consulte documente interne clasificate pentru un proiect. Conform HG 781/2002 art. 9, pe ce bază pot accesa informații secrete cetățenii străini, cu dublă cetățenie sau apatrizi?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza autorizației speciale de acces."
      },
      {
        "id": "B",
        "text": "Fără nicio autorizație, ca să nu se blocheze proiectul."
      },
      {
        "id": "C",
        "text": "Pe baza autorizației obișnuite, ca persoanele fizice autohtone."
      },
      {
        "id": "D",
        "text": "Doar cu acordul verbal al administratorului."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 9: accesul cetățenilor străini, cu dublă cetățenie sau apatrizi la informații secrete se face pe baza autorizației speciale de acces — nu pe autorizația obișnuită și nu verbal.",
    "tooltipCorrect": "Străini/dublă cetățenie/apatrizi → autorizație specială de acces (art. 9)."
  },
  {
    "id": "INF-022",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Transportul documentelor secrete",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 10",
    "type": "single",
    "question": "Administratorul II trebuie să trimită un document cu secret de serviciu de la sediu la ISJ. Un coleg propune să-l pună într-un plic oarecare pe un taxi. Conform HG 781/2002 art. 10, cum se face transportul?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, prin poșă electronică, nedeschisă."
      },
      {
        "id": "B",
        "text": "Transportul se face conform reglementărilor (HG), nu improvizat prin curier oarecare."
      },
      {
        "id": "C",
        "text": "În aplicarea regulii, oricum, prin orice curier, important este să ajungă."
      },
      {
        "id": "D",
        "text": "În aplicarea regulii, doar cu mașina personală a administratorului, fără altă formă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 10: transportul informațiilor/documentelor secrete se face conform reglementărilor (HG). Improvizația cu taxi/plic oarecare/curier neautorizat este risc de compromitere.",
    "tooltipCorrect": "Transport conform reglementărilor HG (art. 10), nu improvizat."
  },
  {
    "id": "INF-023",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Compromiterea informației",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 11",
    "type": "single",
    "question": "S-a produs o compromitere: un document cu secret de serviciu a fost fotografiat de un vizitator și postat pe social media. Conform HG 781/2002 art. 11, ce trebuie să dispună conducătorii și cui îi informează?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, se șterge contul de social media și nu mai este nevoie de nimic și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, se ignoră, dacă fotografiile au puține vizualizări ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conducătorii dispun cercetarea administrativă pentru a stabili condițiile, responsabilitățile și posibilitățile de recuperare/limitare; aduc imediat la cunoștință instituțiilor cu atribuții de coordonare/control; pentru recuperarea prejudiciilor se pot adresa instanțelor."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, doar persoana care a fotografiat răspunde, unitatea nu are obligații și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 11: în caz de compromitere, conducătorii dispun cercetarea administrativă (condiții, responsabilități, recuperare/limitare), informează imediat instituțiile cu atribuții de coordonare/control, iar pentru recuperarea prejudiciilor se pot adresa instanțelor judecătorești.",
    "tooltipCorrect": "Compromitere → cercetare administrativă + informare instituții + posibil instanță (art. 11)."
  },
  {
    "id": "INF-024",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Răspunderea pentru încălcare",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 12",
    "type": "single",
    "question": "Un salariat a divulgat un secret de serviciu din neatenție. La instructaj, se discută ce forme de răspundere atrage nerespectarea regimului. Conform HG 781/2002 art. 12, ce formulare este corectă?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit normei, doar răspunderea civilă, pentru prejudiciu."
      },
      {
        "id": "B",
        "text": "Conform procedurii, doar amendă administrativă, fără alte forme."
      },
      {
        "id": "C",
        "text": "Doar răspunderea disciplinară, întrucât nu e vorba de secret de stat."
      },
      {
        "id": "D",
        "text": "Nerespectarea atrage răspundere penală, civilă, contravențională sau disciplinară."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 12: nerespectarea reglementărilor atrage răspundere penală, civilă, contravențională sau disciplinară, după caz. Nu se reduce la o singură formă.",
    "tooltipCorrect": "Patru forme de răspundere: penală, civilă, contravențională, disciplinară (art. 12)."
  },
  {
    "id": "INF-025",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Norme proprii de aplicare",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 15",
    "type": "single",
    "question": "Grădinița a fost înființată recent și nu și-a elaborat încă norme proprii de protecție a secretelor de serviciu. Conform HG 781/2002 art. 15, în ce termen și ce trebuie să facă?",
    "options": [
      {
        "id": "A",
        "text": "În 60 de zile de la publicarea HG, unitățile emit norme proprii de aplicare."
      },
      {
        "id": "B",
        "text": "Normele se preiau verbatim de la o unitate vecină, fără adaptare."
      },
      {
        "id": "C",
        "text": "Pe baza dispoziției, normele proprii sunt facultative, se fac doar la control."
      },
      {
        "id": "D",
        "text": "Conform procedurii, normele se emit în 5 ani de la înființare."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 15: în 60 de zile de la publicare, unitățile emit norme proprii de aplicare. Lipsa normelor proprii lasă regimul neaplicat și creează riscuri (marked improper, acces necontrolat).",
    "tooltipCorrect": "Norme proprii în 60 de zile de la publicare (art. 15)."
  },
  {
    "id": "INF-026",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Limitele amenzilor pentru secret de serviciu",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 13",
    "type": "single",
    "question": "La instructaj, un coleg afirmă că sancțiunile contravenționale pentru secretele de serviciu sunt identice ca valoare cu cele pentru secretele de stat. Conform HG 781/2002 art. 13, ce este corect?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, amenzile se dublează pentru secretele de serviciu ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Sancțiunile contravenționale din HG 585 se aplică și pentru secretele de serviciu, dar limitele amenzilor se reduc la jumătate (fără ca minimele speciale să fie sub minimele generale)."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, sancțiunile sunt identice, fără nicio diferență și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, pentru secrete de serviciu nu există sancțiuni contravenționale și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 13: sancțiunile contravenționale din HG 585 se aplică și pentru secretele de serviciu, dar limitele amenzilor se reduc la jumătate, cu menținerea ca minimele speciale să nu fie sub minimele generale.",
    "tooltipCorrect": "Amenzile se reduc la jumătate pt. secret de serviciu (art. 13)."
  },
  {
    "id": "INF-027",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Contravenție specifică art. 4 și art. 6",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 14",
    "type": "single",
    "question": "Administratorul II a scos un document cu secret de serviciu din incintă fără aprobare și a acordat alteia acces verbal, fără autorizație. Conform HG 781/2002 art. 14, ce încălcare specifică a comis și ce sancțiune?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, doar răspundere penală, fără sancțiune contravențională urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, nicio încălcare, ambele sunt permise dacă sunt de scurtă durată și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Nerespectarea art. 4 (scoaterea fără aprobare) și art. 6 alin. 1 (acces fără autorizație) este contravenție, sancționată cu avertisment sau amendă 500.000–10.000.000 lei (lei vechi)."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, doar avertisment scris, fără amendă și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 14: nerespectarea art. 4 (scoaterea fără aprobare) și art. 6 alin. 1 (acces fără autorizație) constituie contravenție sancționată cu avertisment sau amendă 500.000–10.000.000 lei (lei vechi).",
    "tooltipCorrect": "Contravenție art. 4 & art. 6 alin. 1 → avertisment sau amendă (art. 14)."
  },
  {
    "id": "INF-028",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Telegram/WhatsApp cu listă copii",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 4 și art. 11",
    "type": "single",
    "question": "O educatoare fotografiază cu telefonul lista copiilor (adrese, telefoane părinți) și o trimite într-un grup de WhatsApp cu părinți, ca să „faciliteze comunicarea”. Administratorul II observă. Care este primul raționament corect?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, se permite dacă se șterge mesajul după 24 ore urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, este corect, fiindcă grădinița folosește WhatsApp pentru comunicare și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, se permite doar dacă grupul are membri verificați ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Lista fiind secret de serviciu, fotografierea și distribuirea sunt compromitere: retragi/imaginea șterge, dispui cercetare administrativă, informezi conducerea și instituțiile abilitate; datele personale ale altor copii nu se transmit părinților."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Lista copiilor cu date de contact este secret de serviciu; fotografierea și transmiterea în grup realizează o compromitere (HG 781/2002 art. 11): se retrage/distrug suporturile, se declanșează cercetare administrativă, se informează conducerea și instituțiile cu atribuții de coordonare/control. Datele personale ale altor copii nu se transmit părinților (principiul necesității cunoașterii, art. 8 din HG 585).",
    "tooltipCorrect": "Foto + grup = compromitere (art. 11); cercetare administrativă + informare; datele altor copii nu se distribuie."
  },
  {
    "id": "INF-029",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Depozitare inaccesibilă",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 4",
    "type": "single",
    "question": "Dosarele cu secret de serviciu sunt ținute într-un dulap fără lacăt din biroul administratorului II, într-o încăpere în care intră și curatorii. Ce măsură se impune conform HG 781/2002?",
    "options": [
      {
        "id": "A",
        "text": "Securizarea depozitării (dulap încuiat, acces restricționat) pentru a preveni scoaterea/consultarea neautorizată; accesul doar pe autorizație, iar scoaterea din incintă doar cu aprobarea conducătorului (art. 4 respectiv art. 6)."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, lăsarea lor pe birou, pentru rapiditate ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, mutarea dosarelor în cancelaria comună urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, nicio măsură, fiindcă biroul este al administratorului și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Secretele de serviciu trebuie depozitate astfel încât să prevină accesul/scoaterea neautorizată (dulap încuiat, spațiu cu acces controlat). HG 781/2002 art. 4 interzice scoaterea din incintă fără aprobarea conducătorului, iar art. 6 condiționează accesul de autorizație. Dulap descuiat într-o încăpere cu curatori creează risc de compromitere.",
    "tooltipCorrect": "Depozitare securizată (încuiat, acces controlat); interzisă scoaterea fără aprobare (art. 4)."
  },
  {
    "id": "INF-030",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Acces „doar o privire”",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6",
    "type": "single",
    "question": "Un coleg dintr-o altă secțiune, fără atribuții privind secretele, îi cere administratorului II să-i arate „doar o secundă” un contract cu un furnizor, clasificat secret de serviciu. Ce refuz este legal motivat?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, refuzul este motivat doar dacă colegul este din altă unitate și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Refuzul este motivat: accesul se acordă NUMAI pe autorizație scrisă de la conducător și doar dacă atribuțiile postului presupun acces; „o privire” fără autorizație = încălcare art. 6, chiar și fără multiplicare."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, refuzul nu este motivat; colegii pot vedea orice ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, se permite, cu condiția ca el să nu fotografieze și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 6: accesul la secrete de serviciu se face doar pe autorizație scrisă de la conducătorul unității, pentru persoanele ale căror atribuții presupun acces (art. 5). Consultarea „fără multiplicare” este tot acces și cere autorizație; principiul necesității cunoașterii (HG 585 art. 8) exclude curiozitatea.",
    "tooltipCorrect": "Acces doar pe autorizație (art. 6), chiar și pentru „o privire”."
  },
  {
    "id": "INF-031",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Distrugerea pe proces-verbal",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 8",
    "type": "single",
    "question": "O autorizație de acces a devenit inoperabilă, iar administratorul II o rupe în bucăți și o aruncă la coș. Conform HG 781/2002 art. 8, ce a omis?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, trebuia s-o predea titularului și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, trebuia doar s-o păstreze intr-un dosar urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "După retragere, structura de securitate distruge autorizația pe bază de PROCES-VERBAL, nu prin aruncare simplă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, nimic; aruncarea la coș este suficientă și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 8: după retragerea autorizației, structura de securitate distruge autorizația pe bază de proces-verbal. Aruncarea simplă nu lasă urmă de evidență și nu dovedește distrugerea, ceea ce îngreunează controlul.",
    "tooltipCorrect": "Distrugerea autorizației pe proces-verbal (art. 8), nu la coș."
  },
  {
    "id": "INF-032",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Multiplicare pe copiator",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 1 și art. 11",
    "type": "single",
    "question": "Administratorul II înmultuje, pe copiatorul liber din hol, un document cu secret de serviciu pentru a-l distribui mai multor destinații, fără să consemneze multiplicarea. Conform HG 781/2002, ce reguli sunt încălcate?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, doar dacă multiplicarea se face color și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, doar art. 11, doar dacă se pierd copii ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, niciuna; multiplicarea pe copiator este liberă urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Regulile de multiplicare și manipulare (art. 1) sunt încălcate: multiplicarea se consemnează și se face în condiții de protecție; copiator liber + lipsă evidență = risc de compromitere (art. 11 context)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 1 aplică secretelor de serviciu regulile de evidență, întocmire, păstrare, procesare, MULTIPLICARE, manipulare etc. Multiplicarea se consemnează și se face în condiții de protecție; pe copiator liber, fără evidență, există copii lăsate/uitate — risc de compromitere (art. 11).",
    "tooltipCorrect": "Multiplicare consemnată + protecție (art. 1); copiator liber fără evidență = risc art. 11."
  },
  {
    "id": "INF-033",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Email trimis greșit",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 11 și art. 1",
    "type": "single",
    "question": "Administratorul II trimite, din greșeală, către o listă largă de adrese de email (în loc de conducere) un raport cu secret de serviciu privind restanțele și furnizorii. Ce face ÎNTÂI, conform logicii HG 781/2002?",
    "options": [
      {
        "id": "A",
        "text": "Recunoaște compromiterea: solicită retragerea/ștergerea de la toți destinatarii, anunță imediat conducerea și declanșează cercetarea administrativă (art. 11), consemnând transmiterea eronată."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, așteaptă să vadă dacă cineva răspunde, apoi decide și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, nu face nimic, fiindcă a fost „din greșeală” urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, șterge mesajul doar din „Trimise” propriu urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Transmisia greșită a unui secret de serviciu este o compromitere (HG 781/2002 art. 11): se solicită retragerea/ștergerea la toți destinatarii, se anunță imediat conducerea, se declanșează cercetarea administrativă și se consemnează evenimentul. „Din greșeală” nu elimină compromiterea.",
    "tooltipCorrect": "Compromitere → retragere/ștergere, anunț conducere, cercetare administrativă (art. 11)."
  },
  {
    "id": "INF-034",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Dosarul de personal ca secret de serviciu",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 8 și art. 4 alin. 3",
    "type": "single",
    "question": "Un coleg solicită să vadă integral dosarul de personal al unei educatoare (salariu, sancțiuni, date medicale). Administratorul II îl păstrează ca secret de serviciu. Care raționament rezistă?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, doar datele medicale sunt protejate, restul sunt publice și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Dosarul de personal, conținând date sensibile (salariu, sancțiuni, date medicale), se protejează ca secret de serviciu; accesul se acordă doar dacă este necesar atribuțiilor (HG 585 art. 8), pe autorizație (HG 781 art. 6)."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, orice salariat poate consulta dosarele de personal ale colegilor urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, dosarul de personal e public, ca orice document de personal ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Dosarul de personal (salariu, sancțiuni, date medicale) este secret de serviciu (HG 585/2002 art. 4 alin. 3 — divulgarea prejudiciază unitatea/persona) și intră sub art. 8 (informații necesare doar celor cu atribuții). Accesul se face pe autorizație (HG 781/2002 art. 6), nu la cererea curiozității.",
    "tooltipCorrect": "Dosar de personal = secret de serviciu; acces pe autorizație, doar pentru atribuții (art. 8 + art. 6)."
  },
  {
    "id": "INF-035",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Document cu termen expirat",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 20",
    "type": "single",
    "question": "Un document cu secret de stat a atins termenul de clasificare. Administratorul II întreabă ce se întâmplă. Conform HG 585/2002, ce se aplică?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, rămâne clasificat pe termen nelimitat, pentru siguranță și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, se distrug, fără declasificare ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Dacă termenul a expirat, se declasifică (art. 20 lit. a); la solicitarea motivată a emitentului, se declasifică prin HG (art. 19)."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, se reclasifică automat la un nivel superior urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 585/2002 art. 20 lit. a: se declasifică dacă termenul a expirat; art. 19: secretul de stat se declasifică prin HG, la solicitarea motivată a emitentului. Menținerea clasificării peste termen fără prelungire prin HG este supraevaluare.",
    "tooltipCorrect": "Termen expirat → declasificare (art. 20 lit. a), prin HG la solicitare (art. 19)."
  },
  {
    "id": "INF-036",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Acces copil/părinte la propriile date",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 581/2002, art. 8; HG nr. 781/2002, art. 6",
    "type": "single",
    "question": "Un părinte solicită acces la dosarul propriului copil din registrul grădiniței, clasificat secret de serviciu. Cum conciliază administratorul II dreptul părintelui cu regimul secretului de serviciu?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, se refuză fără motivare scrisă ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, refuză total; dosarul este secret, deci nimeni nu-l vede și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, se predă întreg registrul, ca să caute singur ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Accesul părintelui la datele propriului copil se realizează conform legii și procedurii unității, pe bază de solicitare și identitate; acest lucru NU înseamnă acces integral la registrul cu toți copiii, ci strict la cele necesare și justificate legal."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Secretul de serviciu protejează registrul (HG 585/2002 art. 8 — informațiile necesare doar celor cu atribuții), dar dreptul părintelui la datele propriului copil se realizează conform legii/procedurii. Accesul este individualizat, nu se deschide registrul integral; accesul intern al altor persoane rămâne pe autorizație (HG 781/2002 art. 6).",
    "tooltipCorrect": "Acces individualizat la datele proprii; nu acces integral la registru (art. 8 + art. 6)."
  },
  {
    "id": "INF-037",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Reevaluare după reorganizare",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 13",
    "type": "single",
    "question": "Grădinița a preluat o nouă atribuție (gestiunea unei cantine proprii) și au apărut noi tipuri de documente sensibile (facturi, liste de alergii alimentare, contracte catering). Conform HG 585/2002, ce obligație are administratorul II față de lista de clasificare?",
    "options": [
      {
        "id": "A",
        "text": "Verificarea periodică și reevaluarea nivelurilor/termenelor (art. 13): include noile documente în listă, stabilește nivelul și termenul, pentru a evita subevaluarea (lipsă protecție) și supraevaluarea (protecție inutilă)."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, reevaluarea se face o singură dată, la înființare și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, niciuna; lista veche rămâne valabilă până la un control ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, noile documente se clasează automat „strict secret” urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 585/2002 art. 13 obligă verificarea periodică și reevaluarea nivelurilor și termenelor. Schimbarea atribuțiilor care aduce documente noi sensibile impune actualizarea listei; altfel apar subevaluări (information neprotejat) sau supraevaluări.",
    "tooltipCorrect": "Reevaluare periodică (art. 13) — noile documente se includ în listă, cu nivel/termen."
  },
  {
    "id": "INF-038",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Contestare supraevaluare",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 17",
    "type": "single",
    "question": "Conducerea a clasificat „strict secret” un simplu inventar de mobilier care ar trebui, cel mult, secret de serviciu. Salariatul afectat consideră că este supraevaluare și sigur pe procedura de contestare. Conform HG 585/2002, unde se contestă?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, doar la adunarea generală a părinților și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Supraevaluarea/subevaluarea se poate contesta în contencios administrativ; separat, supraevaluările se atrag atenției emitentului, care poate reclasifica (art. 16–17)."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, doar prin plângere penală și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, nu se poate contesta; clasificarea e definitivă și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 585/2002 art. 17: supraevaluarea/subevaluarea se poate contesta în contencios administrativ; art. 16: supraevaluările/subevaluările se atrag atenției emitentului, care, dacă reclasifică, informează deținătorii. Clasificarea NU este definitivă și poate fi verificată.",
    "tooltipCorrect": "Contestare în contencios administrativ (art. 17); atragere atenției emitentului (art. 16)."
  },
  {
    "id": "INF-039",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Distrugerea documentelor expirate",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 1 și art. 8",
    "type": "single",
    "question": "O serie de documente cu secret de serviciu au fost declasificate/inoperabile și administratorul II vrea să le distrugă. Conform HG 781/2002, ce regulă se aplică?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, se aruncă în coșul de hârtie, ca orice deșeu și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, se păstrează la nesfârșit, pentru orice eventualitate ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Distrugerea face parte din regula de manipulare (art. 1) și, ca pentru autorizația retrasă (art. 8), se face pe bază de PROCES-VERBAL, cu evidență, nu prin aruncare simplă."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, se donează unei alte unități, fără formă ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 1 include regula de distrugere a secretelor de serviciu; distrugerea se face cu evidență, pe bază de proces-verbal (asemeni distrugerii autorizației retrei în art. 8), nu prin aruncare simplă — altfel nu se poate dovedi scoaterea din evidență.",
    "tooltipCorrect": "Distrugere pe proces-verbal, cu evidență (art. 1, principiu art. 8)."
  },
  {
    "id": "INF-040",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Compunere/traducere/rezumat",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 14",
    "type": "single",
    "question": "Administratorul II face un rezumat al unui document „secret de stat” pentru o destinție care are nevoie doar de esența. Conform HG 585/2002 art. 14, la ce nivel se clasează rezumatul?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, rezumatul se clasifică întotdeauna mai jos decât originalul și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, rezumatul devine automat nesecret ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, rezumatul nu se poate face, fiind interzis urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Rezumatele/traducerile/extrasele primesc nivelul corespunzător conținutului lor (art. 14 alin. 3), deci rezumatul păstrează nivelul dacă păstrează informația sensibilă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 585/2002 art. 14 alin. 3: rezumatele/traducerile/extrasele primesc nivelul corespunzător conținutului. Dacă rezumatul păstrează informația sensibilă, rămâne la nivelul aplicabil — scurtarea nu scade automat nivelul.",
    "tooltipCorrect": "Rezumat/extras/traducere → nivel după conținutul său (art. 14 alin. 3), nu automat mai jos."
  },
  {
    "id": "INF-041",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Delegare în concediu",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 5 și art. 6",
    "type": "single",
    "question": "Administratorul II pleacă în concediu și îi deleagă temporar pe un coleg pentru gestionarea secretelor de serviciu, dar colegul nu are autorizație de acces. Ce trebuie să se facă, conform HG 781/2002?",
    "options": [
      {
        "id": "A",
        "text": "Funcțiile cu acces se stabilesc de conducător (art. 5), iar accesul se acordă doar pe AUTORIZAȚIE SCRISĂ emisă de conducător (art. 6); se emite autorizație temporară pentru perioada delegării, cu evidentă în Registru."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, colegul așteaptă până se întoarce administratorul din concediu ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, se predă dulapul descuiat, ca să fie operativ ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, delegarea verbală este suficientă pentru concediu urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 5: funcțiile cu acces sunt stabilite de conducător; art. 6: accesul se face doar pe autorizație scrisă. Delegarea în concediu cere emiterea unei autorizații (eventual temporare), cu evidentă în Registrul pentru evidența autorizațiilor, nu o predare verbală.",
    "tooltipCorrect": "Delegare = autorizație scrisă temporară de la conducător (art. 5 + art. 6)."
  },
  {
    "id": "INF-042",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Transport cu însoțitor/sigilat",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 10",
    "type": "single",
    "question": "Trebuie transportat un colet cu documente de secret de serviciu la inspectorat. Un coleg propune să-l trimită prin poșă rapidă, fără listă de expediere. Conform HG 781/2002 art. 10, ce principiu se aplică?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, se scanează și se trimite prin email necriptat, mai simplu urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Transportul se face conform reglementărilor (HG), cu măsuri de protecție (pachet sigilat, însoțitor/listă de expediere, evidentă), nu improvizat prin poșă rapidă oarecare."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, poșta rapidă obișnuită este suficientă urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, se trimite doar cu autovehiculul administratorului, fără evidentă ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 10: transportul informațiilor/documentelor secrete se face conform reglementărilor (HG), cu măsuri de protecție (sigilare, însoțitor, listă de expediere, evidentă). Poșa rapidă oarească sau emailul necriptat sunt riscuri de compromitere.",
    "tooltipCorrect": "Transport conform HG — sigilat, însoțitor, evidentă (art. 10); nu poșă/email improvizat."
  },
  {
    "id": "INF-043",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Copiator cu pagini uitate",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 1 și art. 11",
    "type": "single",
    "question": "La finalul zilei, pe copiatorul din secretariat găsești două pagini cu „secret de serviciu” ramase de la o multiplicare. Ce-i faci ÎNTÂI, conform logicii HG 781/2002?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, le refolosești pe spate, ca ciorne și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, le dai la arhivă împreună cu alte documente și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Le retragi, le securizezi, verifică cine a multiplicat și dacă multiplicarea a fost consemnată; dacă exista risc de compromitere, anunți conducerea și declanșezi cercetare administrativă (art. 11); regula de multiplicare/manipulare (art. 1) a fost încălcată."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, le lași pentru a doua zi, ca să le continue cine a inceput și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 1 impune reguli de multiplicare/manipulare; pagini uitate pe copiator = încălcare și risc de compromitere (art. 11). Întâi se retrag/securizează, se identifică multiplicarea și se verifică evidentă, apoi se anunță conducerea dacă există risc și se declanșează cercetarea administrativă.",
    "tooltipCorrect": "Multiplicare nesupravegheată = risc art. 11; retragere, securizare, evidentă, cercetare (art. 1)."
  },
  {
    "id": "INF-044",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Vizitator/audit fără autorizație",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6",
    "type": "single",
    "question": "Un auditor extern (not de la instituții abilitate) solicită să consulte documente cu secret de serviciu pe baza unui mandat general „de audit”. Ce face administratorul II, conform HG 781/2002?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, refuză fără să verifice nimic și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, îi deschide toate dosarele, fiindcă e „audit” ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, permisiunea se dă verbal, ca să nu blocheze auditul urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Accesul se acordă doar pe autorizație scrisă de la conducătorul unității și după verificare (art. 6 și art. 7); mandatul general nu înlocuiește autorizația specifică, iar persoanele externe fără atribuții nu primesc acces."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 6: accesul la secret de serviciu se face doar pe autorizație scrisă de la conducător; art. 7: pentru eliberare se cer recomandări/referințe și angajament de confidențialitate, iar structura de securitate verifică. Un mandat general de audit nu înlocuiește autorizația specifică și nici accesul celor fără atribuții.",
    "tooltipCorrect": "Audit extern ≠ acces automat; necesită autorizație specifică + verificare (art. 6–7)."
  },
  {
    "id": "INF-045",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Dosar mixt secret + nesecret",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 3 și art. 14",
    "type": "single",
    "question": "Administratorul II ține într-un același dosar documente nesecrete și un extras cu secret de serviciu „ca să fie împreună contextul”. Conform HG 781/2002, ce reguli sunt încălcate?",
    "options": [
      {
        "id": "A",
        "text": "Evidența se face separat (art. 3), iar cumulul neprelucrat de documente cu niveluri diferite primește nivelul celui mai înalt (HG 585 art. 14 alin. 2); amestecarea Transformă tot dosarul în secret de serviciu și încalcă regula de evidentă separată."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, doar dacă exista și secret de stat ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, este permis, dacă dosarul este încuiat și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, niciuna; contextul justifică amestecarea ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 3: evidenta se ține separat (secret de serviciu vs. nesecrete). HG 585/2002 art. 14 alin. 2: cumulul neprelucrat de extrase primește nivelul celui mai înalt. Amestecarea face întregul dosar secret de serviciu și încalcă evidenta separată, îngreunând controlul.",
    "tooltipCorrect": "Evidență separată (art. 3) + nivelul celui mai înalt la cumul (art. 14)."
  },
  {
    "id": "INF-046",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Marcare pe copertă și titlu",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 2",
    "type": "single",
    "question": "Administratorul II leagă un volum de secrete de serviciu și marchează doar paginile, fără să marcheze coperta. Conform HG 781/2002 art. 2, ce omite?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, trebuia să marcheze doar coperta, nu și paginile ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Dosarele/volumele se marchează pe copertă și pe pagina de titlu; omite aceste mărci, volumul poate fi confundat cu un document obișnuit."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, nimic; marcarea paginilor este suficientă ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, marcarea se face doar pe CD, nu pe suport hârtie și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 2: dosarele/volumele cu secret de serviciu se marchează pe copertă și pe pagină de titlu, iar pe fiecare pagină se înscrie „secret de serviciu”. Lipsa mărcii pe copertă face volumul să pară obișnuit, risc de manipulare incorectă.",
    "tooltipCorrect": "Marcare: copertă + pagină de titlu + fiecare pagină (art. 2)."
  },
  {
    "id": "INF-047",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Numerotare cu litera „S”",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 2",
    "type": "single",
    "question": "Administratorul II înregistrează documentele cu secret de serviciu cu numere obișnuite (ex. „nr. 127/2025”), la fel ca pe cele nesecrete. Conform HG 781/2002 art. 2, ce particularitate are numărul de înregistrare?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, numărul se scrie cu cerneală roșie, fără altă marcă."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, numerotarea se face doar cu cifre romane."
      },
      {
        "id": "C",
        "text": "Numărul de înregistrare este precedat de litera „S”, pentru identificare imediată a regimului."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, nicio particularitate; numerotarea este identică."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 2: pentru identificare, numărul de înregistrare al unui document cu secret de serviciu este precedat de litera „S”. Aceasta permite recunoașterea imediată a regimului și separarea de evidența generală (art. 3).",
    "tooltipCorrect": "Număr precedat de litera „S” (art. 2), pt. identificarea regimului."
  },
  {
    "id": "INF-048",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Deținătorul nemarcat",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 15",
    "type": "single",
    "question": "Un coleg primește un document fără nicio marcă, dar a cărui natura trebuia clasificată secret de serviciu. Nu-l protejază, fiindcă „n-avea marcă”. Conform HG 585/2002, ce rol are marcarea și cine răspunde de lipsa ei?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, colegul răspunde singur; marcarea e problemă lui și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, fără marcă, documentul devine automat public și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, marcarea e opțională, deci toți sunt liberi să-l difuzeze și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Marcarea atenționează pe cel care gestionează/accesează că trebuie aplicate măsuri specifice (art. 15); lipsa marcării reduce posibilitatea de a-l proteja, dar clasificarea se face dacă se impune (art. 17), iar emitentul răspunde de marcarea corectă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 585/2002 art. 15: marcarea atenționează persoanele care gestionează/accesează de măsurile specifice; art. 17: clasificarea se face doar dacă se impune protecția. Lipsa marcării este deficiență a emitentului, dar nu face documentul public; responsabilul cu emiterea/marcarea răspunde, iar colegul ar fi trebuit să semnaleze.",
    "tooltipCorrect": "Marcarea = atenționare pt. măsuri specifice (art. 15); lipsa ei = deficiență, nuallowed public."
  },
  {
    "id": "INF-049",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Inscripție pe pagină manuscris",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 2",
    "type": "single",
    "question": "Administratorul II redactează de mâna, într-un caiet, note despre restanțe și furnizori, care trebuiesc protejate ca secret de serviciu. Conform HG 781/2002 art. 2, ce are obligația să înscrie?",
    "options": [
      {
        "id": "A",
        "text": "Pe fiecare pagină se înscrie „secret de serviciu”, iar la înregistrare numărul este precedat de litera „S”; regimul se aplică indiferent de suport (hârtie, caiet, electronic)."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, nimic; caietul manuscris nu intră sub regim și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, doar paginii de copertă a caietului și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, doar semnătura, fără mențiunea „secret de serviciu” urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 2: pe fiecare pagină se înscrie „secret de serviciu”, iar numărul de înregistrare este precedat de litera „S”. Regimul nu depinde de suport: manuscris, tipărit sau electronic — dacă informația e clasificată, marcarea se aplică.",
    "tooltipCorrect": "„Secret de serviciu” pe fiecare pagină, indiferent de suport (art. 2)."
  },
  {
    "id": "INF-050",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Registru de evidență a autorizațiilor",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6",
    "type": "single",
    "question": "La un control, se constată că au fost emise 6 autorizații de acces, dar în Registru sunt înregistrate doar 2. Conform HG 781/2002 art. 6, ce deficiență structurală există?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, niciuna; Registryul este optional ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Evidența autorizațiilor trebui să fie ținută centralizat, în Registrul pentru evidența autorizațiilor; lipsele din Registru înseamnă acces necontrolat și încălcare art. 6, cu risc de compromitere."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, registryul se ține doar dacă sunt >10 autorizații și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, registryul se păstrează la domiciliul administratorului și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 6: evidența autorizațiilor se ține centralizat, de structura/funcționarul de securitate, în Registrul pentru evidența autorizațiilor. Lipsa înregistrării înseamnă acces neevidențiat și încălcare art. 6, ce creează risc de compromitere și îngreunează cercetarea.",
    "tooltipCorrect": "Registrul autorizațiilor — centralizat, complet (art. 6); lipsă = acces necontrolat."
  },
  {
    "id": "INF-051",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Angajamentul de confidențialitate",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 7",
    "type": "single",
    "question": "Un nou salariat cu atribuții de acces refuză să semneze angajamentul de confidențialitate, susținând că el „nu va divulga nimic”. Conform HG 781/2002 art. 7, ce se aplică?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, accesul se refuză, dar fără motivare și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, se emite autorizație temporară, fără celelalte formalități urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Fără semnarea angajamentului de confidențialitate și prezentarea recomandărilor/referențelor, nu se emite autorizația; structura de securitate verifică apoi și prezintă propuneri conducătorului, care decide."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, accesul se acordă fără angajament, pe încredere ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 7: pentru eliberarea autorizației, persoana prezintă recomandări/referințe și semnează angajament de confidențialitate; structura de securitate verifică autenticitatea și prezintă propuneri conducătorului. Refuzul angajamentului blochează emiterea autorizației — nu există acces „pe încredere”.",
    "tooltipCorrect": "Fără angajament + referințe: nu se emite autorizația (art. 7)."
  },
  {
    "id": "INF-052",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Caz de retragere — încălcare reglementări",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 8",
    "type": "single",
    "question": "Un titular de autorizație a discutat în public, la o cafea, despre un contract clasificat. Conform HG 781/2002 art. 8, ce caz de retragere se aplică?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, doar cazul (a) — încetarea raporturilor de muncă ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, nicio retragere, doar o discuție amicală urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, niciunul — discuția la cafea nu se pedepsește ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Cazul (c): titularul a încălcat reglementările; conducătorul retrage autorizația, iar structura de securitate o distruge pe proces-verbal."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 8 prevede retragerea autorizației între altele când titularul a încălcat reglementările (lit. c). Discuția publică despre un document clasificat este încălcare; conducătorul retrage autorizația, iar structura de securitate o distruge pe proces-verbal.",
    "tooltipCorrect": "Încălcare reglementări = caz de retragere (art. 8 lit. c) + distrugere pe PV."
  },
  {
    "id": "INF-053",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Suport electronic",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 1",
    "type": "single",
    "question": "Administratorul II păstrează copii ale unor documente cu secret de serviciu pe un stick USB necriptat, pe care îl ține în geantă împreună cu cheile. Conform HG 781/2002, ce reguli se aplică?",
    "options": [
      {
        "id": "A",
        "text": "Regimul se aplică indiferent de suport (art. 1): păstrare/procesare/transmitere electronică cu măsuri de protecție (criptare, control al accesului), iar scoaterea suportului din incintă cere aprobarea conducătorului (principiu art. 4)."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, trebuie doar șters la final, fără alte măsuri și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, se permite pe orice USB, atât timp cât e în geantă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, USB-ul nu intră sub regim, fiind suport electronic ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 1 aplică secretelor de serviciu regulile de păstrare, procesare, transmitere, indiferent de suport. Suportul electronic necesită măsuri tehnice (criptare, control acces), iar scoaterea suportului din incintă ține de principiul art. 4 (aprobarea conducătorului). USB necriptat în geantă = risc de compromitere/înstrăinare.",
    "tooltipCorrect": "Regim pe orice suport (art. 1); scoaterea suportului cere aprobare (art. 4)."
  },
  {
    "id": "INF-054",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Vizitator străin în unitate",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 9",
    "type": "single",
    "question": "Un expert dintr-o rețea europeană (cetățean străin) vrea să studieze documente interne clasificate pentru un proiect Erasmus+. Conform HG 781/2002, ce autorizație se cere?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, autorizația obișnuită, ca pentru orice salariat și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Cetățeanul străin accesează informații secrete pe baza AUTORIZAȚIEI SPECIALE de acces (art. 9), nu pe autorizația obișnuită."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, nicio autorizație, fiindcă e proiect european."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, doar acordul verbal al conducerii și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 9: cetățenii străini, cu dublă cetățenie sau apatrizi accesează informații secrete pe baza autorizației speciale de acces — nu pe autorizația obișnuită. Proiectul european nu scutește de această cerință.",
    "tooltipCorrect": "Străin / dublă cetățenie / apatrid → autorizație specială de acces (art. 9)."
  },
  {
    "id": "INF-055",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Selectarea nivelului prin ghid+liste",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 10",
    "type": "single",
    "question": "Administratorul II ezită dacă un raport cu date financiare se clasează secret de serviciu sau rămâne nesecret. Conform HG 585/2002 art. 10, după ce instrumente se hotărăște?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, după opinia personală, fără instrumente."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, după o căutare pe internet."
      },
      {
        "id": "C",
        "text": "După consultarea ghidului de clasificare și a listelor de informații clasificate."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, după decizia ad-hoc a secretarului."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 585/2002 art. 10: clasificarea se face consultând ghidul (art. 5) și listele (art. 6–7). Aceste instrumente întemeiază decizia și evită clasificarea arbitrară — fie supraevaluare inutilă, fie subevaluare periculoasă.",
    "tooltipCorrect": "Clasificare: consultare ghid + liste (art. 10), nu decizie ad-hoc."
  },
  {
    "id": "INF-056",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Reevaluare / actualizare prin HG (secr. de stat)",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 6 și art. 13",
    "type": "single",
    "question": "Lista cu secrete de stat, întocmită odată, a suferit modificări legislative noi. Conform HG 585/2002, cum se actualizează lista și ce obligație periodează?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, actualizarea se face doar de ISJ, nu prin HG și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, actualizarea este optionale, doar la control ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, lista rămâne nemodificată, decrete niciun instrument."
      },
      {
        "id": "D",
        "text": "Lista cu secrete de stat se aprobă/actualizează prin HG (art. 6), iar nivelurile/termenele se reevaluează periodic (art. 13)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 585/2002 art. 6: listele cu secrete de stat se aprobă/actualizează prin HG; art. 13: verificare periodică și reevaluare a nivelurilor/termenelor. Niciuna nu se face la nivelul unității prin simplă decizie internă pentru secretele de stat.",
    "tooltipCorrect": "Secrete de stat: actualizare prin HG (art. 6) + reevaluare periodică (art. 13)."
  },
  {
    "id": "INF-057",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Liste secrete de serviciu de către conducător",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 7",
    "type": "single",
    "question": "Conducerea refuză să întocmească lista cu secrete de serviciu, susținând că este treaba inspectoratului. Conform HG 585/2002, cine stabilește listele cu secrete de serviciu?",
    "options": [
      {
        "id": "A",
        "text": "Listele cu secrete de serviciu le stabilesc conducătorii unităților (art. 7), deci chiar conducerea grădiniței are această obligație."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, ministerul Educației, pt. toate unitățile și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, nimeni; listele sunt facultative și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, inspectoratul școlar, centralizat și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 585/2002 art. 7: listele cu secrete de serviciu le stabilesc conducătorii unităților. Nu este atribuția ISJ sau a ministerului; conducerea grădiniței este obligată să întocmească și să actualizeze lista proprie.",
    "tooltipCorrect": "Secret de serviciu → lista de conducătorul unității (art. 7), nu ISJ."
  },
  {
    "id": "INF-058",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Verificare de șeful ierarhic",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 11",
    "type": "single",
    "question": "Un emitent a clasificat un document iar șeful ierarhic, primindu-l, observă că nivelul pare prea ridicat. Conform HG 585/2002 art. 11, ce are obligația să facă?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, să accepte clasificarea, fără intervenție și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Șeful ierarhic al emitentului verifică dacă clasificarea este corectă; dacă nu, se aplică procedura de supra/subevaluare (art. 16) — atrage atenția emitentului, care, dacă reclasifică, informează deținătorii."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, să reclasifice unilateral, fără să informeze pe nimeni urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, să șteargă marcarea, ca documentul să circule liber urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 585/2002 art. 11: șeful ierarhic al emitentului verifică corectitudinea clasificării; art. 16: supraevaluările/subevaluările se atrag atenției emitentului, care, dacă reclasifică, informează deținătorii. Verificarea NU înseamnă ștergere unilaterală a marcării.",
    "tooltipCorrect": "Șeful ierarhic verifică clasificarea (art. 11); reclasificare prin emitent (art. 16)."
  },
  {
    "id": "INF-059",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Compunere secrete de serviciu",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 14",
    "type": "single",
    "question": "Administratorul II compune un raport nou din două documente de secret de serviciu cu niveluri diferite, prelucrând informația. Conform HG 585/2002 art. 14, la ce nivel se clasează raportul prelucrat?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, la nivelul celui mai puțin important extras și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, la nivelul emițătorului inițial ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform noului conținut, putând fi superior originalelor (art. 14 alin. 1) — prelucrarea poate ridica nivelul dacă sinteza aduce plus de sensibilitate."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, automatic ca nesecret, fiind prelucrare și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 585/2002 art. 14 alin. 1: documentul rezultat din prelucrarea informațiilor cu niveluri diferite se clasifică conform noului conținut, putând fi chiar superior originalelor. Sinteza poate agrava sensibilitatea, deci nivelul se stabilește pe conținutul rezultat.",
    "tooltipCorrect": "Prelucrat → nivel după noul conținut, poate fi superior (art. 14 alin. 1)."
  },
  {
    "id": "INF-060",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Caz de declasificare — neîmputernicit",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 20",
    "type": "single",
    "question": "Se descoperă că un document „secret de stat” a fost clasificat de un salariat fără a fi împuternicit prin lege să facă acest lucru. Conform HG 585/2002 art. 20, ce se aplică?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, se dublează termenul de clasificare și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, se trece automat la un nivel superior urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, clasificarea rămâne valabilă, doar se schimbă titularul."
      },
      {
        "id": "D",
        "text": "Se declasifică, deoarece clasificarea a fost atribuită de persoană neîmputernicită prin lege (art. 20 lit. c)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 585/2002 art. 20 lit. c: se declasifică dacă clasificarea a fost atribuită de persoană neîmputernicită prin lege. Clasificarea de secret de stat cere împuternicire legală; fără ea, actul nu produce protecție validă și se declasifică.",
    "tooltipCorrect": "Clasificare de neîmputernicit → declasificare (art. 20 lit. c)."
  },
  {
    "id": "INF-061",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Declasificare fără prejudiciu",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 20",
    "type": "single",
    "question": "Un document clasificat a ajuns la o vechime la care dezvăluirea nu mai poate prejudicia (situația descrisă nu mai este actuală). Conform HG 585/2002, ce se întâmplă?",
    "options": [
      {
        "id": "A",
        "text": "Se declasifică, deoarece dezvăluirea nu mai poate prejudicia (art. 20 lit. b)."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, se reclasifică la un nivel inferior."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, se distrug fără declasificare."
      },
      {
        "id": "D",
        "text": "Conform procedurii, rămâne clasificat până la termenul inițial, oricare ar fi el."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 585/2002 art. 20 lit. b: se declasifică dacă dezvăluirea nu mai poate prejudicia. Clasificarea se menține doar cât se impune protecția (art. 17); când riscul dispare, declasificarea este procedura corectă.",
    "tooltipCorrect": "Fără prejudiciu posibil → declasificare (art. 20 lit. b)."
  },
  {
    "id": "INF-062",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Prelungire termen prin HG",
    "difficulty": "medium",
    "sourceAct": "HG nr. 585/2002, art. 12",
    "type": "single",
    "question": "Un document clasificat „strict secret” a ajuns la 50 de ani, dar protecția se impune încă. Conform HG 585/2002 art. 12, ce se poate face?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea regulii, automat rămâne clasificat încă 50 de ani."
      },
      {
        "id": "B",
        "text": "Termenul (50 ani pt. strict secret) poate fi prelungit prin HG."
      },
      {
        "id": "C",
        "text": "Se reclasifică automat la „secret de importanță deosebită”."
      },
      {
        "id": "D",
        "text": "Conform procedurii, se declasifică necondiționat la 50 de ani."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 585/2002 art. 12: termenele (100/50/30 ani) pot fi prelungite prin HG, dacă protecția se impune mai îndelungat. Prelungirea NU este automată — cere act normativ; altfel, la expirare se aplică declasificarea (art. 20 lit. a).",
    "tooltipCorrect": "Termen prelungibil prin HG (art. 12), nu automat."
  },
  {
    "id": "INF-063",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Evidență separată vs. activitate curentă",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 3",
    "type": "single",
    "question": "Administratorul II își organizează registrul astfel: dosarele de secret de serviciu sunt note cu „S”, dar evidenta se faceîn același registru cu corespondența curentă, la rubrici diferite. Conform HG 781/2002 art. 3, ce este greșit?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, este corect, fiindcă rubricile sunt diferite urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, separarea cere doar culoare diferită, nu registru diferit și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Evidența se ține SEPARAT de cea a documentelor secrete de stat și nesecrete, în REGISTRUL SPECIAL; separarea pe rubrici în același registru nu este suficientă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, evidența se ține doar electronic, nu pe hârtie și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 3: evidența documentelor secrete de serviciu se ține separat, în registrul special, nu doar pe rubrici în registrul general. Amestecarea în același registru, chiar pe rubrici, îngreunează controlul și crește riscul de consultare neautorizată.",
    "tooltipCorrect": "Registrul special, separat (art. 3) — nu rubrici în registrul general."
  },
  {
    "id": "INF-064",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Aprobare pentru scoatere (art. 4)",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 4 și art. 14",
    "type": "single",
    "question": "O lucrare de arhivare cere ducerea unor dosare cu secret de serviciu la arhiva județeană. Administratorul II le pregătește, dar nu a obținut aprobarea conducătorului pentru scoaterea din incintă. Conform HG 781/2002, ce sancțiune și ce măsură corectă se aplică?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, se permise dacă distanța este sub 5 km și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, nicio sancțiune, fiindcă este vorba de arhivă ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, doar dacă arhiva este a unității, nu a județului ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Scoaterea fără aprobare este interzisă (art. 4) și contravenție sancționabilă cu avertisment sau amendă (art. 14); procedura corectă: obții aprobarea conducătorului înainte de scoatere și organizezi transportul conform HG (art. 10)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 4: scoaterea din incintă fără aprobarea conducătorului este interzisă; art. 14: contravenție sancționată cu avertisment sau amendă. Procedura corectă: aprobarea conducătorului înainte de scoatere, plus transport conform HG (art. 10).",
    "tooltipCorrect": "Scoatere fără aprobare = interzisă + contravenție (art. 4, art. 14); transport conform HG (art. 10)."
  },
  {
    "id": "INF-065",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Fotografiere cu telefonul",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 1 și art. 11",
    "type": "single",
    "question": "Pentru a „lucra de acasă”, un coleg fotografiază cu telefonul pagini dintr-un dosar cu secret de serviciu, fără aprobare și fără evidentă. Conform HG 781/2002, ce forme de încălcare apar?",
    "options": [
      {
        "id": "A",
        "text": "Multiplicare/manipulare neconsemnată (art. 1), reproducere pe suport electronic fără măsuri de protecție, scoatere virtuală din incintă și, dacă imaginile ajung acasă, risc de compromitere (art. 11)."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, doar dacă telefonul este personal, nu de serviciu ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, niciuna, dacă nu postează fotografiile ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, doar dacă se folosesc la concurență ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 1 reglementează multiplicarea/manipularea/reproducerea pe orice suport; fotografierea neautorizată este multiplicare neconsemnată și o formă de scoatere virtuală din incintă, cu risc de compromitere (art. 11) dacă imaginile ajung în afara unității. „De acasă” nu justifică.",
    "tooltipCorrect": "Fotografierea = multiplicare neconsemnată (art. 1) + risc art. 11."
  },
  {
    "id": "INF-066",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Concediu medical al titularului",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 5 și art. 8",
    "type": "single",
    "question": "Titularul unei autorizații de acces este în concediu medical prelungit, dar nimeni nu știe dacă autorizația rămâne activă. Conform HG 781/2002, ce se aplică?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, rămâne activă, indiferent de circumstanțe și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Dacă atribuțiile postului nu mai presupun acces pe perioada concediului, se suspendă/retrage conform art. 8; în orice caz, delegarea către altcineva cere o autorizație separată (art. 5–6)."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, se lasă titularul să o păstreze, fără evidentă ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, autorizația se transferă automatic înlocuitorului și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 8 permite retragerea când atribuțiile postului nu mai presupun acces; în concediu medical prelungit, accesul nu se exercită, iar delegarea către altcineva cere o autorizație separată (art. 5–6). Autorizația NU se transferă automatic.",
    "tooltipCorrect": "Acces suspendat/retras dacă atribuțiile nu mai presupun acces (art. 8); delegare = autorizație separată."
  },
  {
    "id": "INF-067",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Circulatie pe email intern",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 1 și art. 6",
    "type": "single",
    "question": "Administratorul II trimite un document cu secret de serviciu pe o listă internă largă de email (toți salariații), fiindcă „e mai simplu”. Conform HG 781/2002, ce principii sunt încălcate?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, doar dacă sunt și adrese externe urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, niciunul; emailul intern este sigur ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Transmiterea este reglementată (art. 1); accesul se acordă doar pe autorizație, celor cu atribuții (art. 6, art. 5 — principiul necesității, HG 585 art. 8). Trimiterea pe listă largă încalcă principiul accesului minimal și creează risc de compromitere."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, doar dacă emailul este color urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 1 reglementează transmiterea; art. 6 și art. 5 condiționează accesul de autorizație și atribuții; HG 585/2002 art. 8 limitează accesul la strictul necesar. Trimiterea pe listă largă, „ca să fie simplu”, încalcă accesul minimal și risipă protecția.",
    "tooltipCorrect": "Acces minimal pe autorizație (art. 5–6, art. 8); lista largă = încălcare."
  },
  {
    "id": "INF-068",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Reproducere pe copiator — obligația evidentă",
    "difficulty": "medium",
    "sourceAct": "HG nr. 781/2002, art. 1",
    "type": "single",
    "question": "Administratorul II pregătește 5 copii ale unui document cu secret de serviciu pentru 5 destinții autorizate. Conform HG 781/2002, ce trebuie să consemneze?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, nimic; copiile nu se evidentă ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, doar copiile se evidentă, nu originalul și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, doar dacă sunt peste 10 copii și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Multiplicarea se consemnează în evidentă (câte copii, pentru cine), iar fiecare copie păstrează marcarea; regulile de multiplicare/manipulare sunt obligatorii (art. 1)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 1 include regula de multiplicare: numărul de copii se consemnează în evidentă, împreună cu destințion, iar fiecare copie păstrează marcarea „secret de serviciu”. Lipsa evident angajează riscul de copii „libere” și de compromitere.",
    "tooltipCorrect": "Multiplicare consemnată (câte, pentru cine) + marcare pe fiecare copie (art. 1)."
  },
  {
    "id": "INF-069",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Dosar pierdut / compromitere parțială",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 11",
    "type": "single",
    "question": "În timpul unei mutări interne, se pierde un dosar cu secret de serviciu, care ulterior este găsit într-un hol public. Conform HG 781/2002, ce pași urmează administratorul II?",
    "options": [
      {
        "id": "A",
        "text": "Tratează incidentul ca compromitere: conducerea dispune cercetare administrativă (condiții, responsabilități, recuperare/limitare), se informează instituțiile cu atribuții de coordonare/control și, după caz, se adresează instanțelor pentru recuperarea prejudiciilor."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, recuperează dosarul și ascunde incidentul și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, doar îl reintroduce în evidentă, fără cercetare și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, refac dosarul din memorie urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 11: în caz de compromitere, conducătorii dispun cercetarea administrativă, informează instituțiile cu atribuții de coordonare/control și se pot adresa instanțelor pt. recuperarea prejudiciilor. Un dosar „tăiat” în hol public este compromitere, chiar dacă a fost recuperat ulterior.",
    "tooltipCorrect": "Compromitere (art. 11): cercetare administrativă + informare + posibil instanță."
  },
  {
    "id": "INF-070",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Necunoașterea instrucțiunilor",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 12 și art. 15",
    "type": "single",
    "question": "Un salariat nou sparge regimul de secret de serviciu „fiindcă nimeni nu i-a spus regulile”. Conform HG 781/2002, cum se apreciază responsabilitatea unității?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, răspunde doar salariatul, chiar dacă nu a fost instruir urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Unitatea are obligația normelor proprii în 60 de zile de la publicare (art. 15) și a instruirii; nerespectarea atrage răspundere penală/civilă/contravențională/disciplinară (art. 12), iar lipsa instruirii NU il descarcacă complet pe salariat, dar antrenează și răspunderea unității."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, nimeni nu răspunde dacă este salariat nou ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, unitatea nu are nicio responsabilitate; doar salariatul răspunde și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 15 obligă unitatea la norme proprii (în 60 de zile) și instruire; art. 12 atrage răspundere penală/civilă/contravențională/disciplinară. Lipsa instruirii arată deficiență a unității, dar nu înlătură total răspunderea salariatului pentru fapte evidente; responsabilitatea este, în concret, partajată.",
    "tooltipCorrect": "Unitate = norme proprii (art. 15) + instruire; răspundere multiple (art. 12), partajată."
  },
  {
    "id": "INF-071",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Consultație — defalcarea accesului",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 5 și art. 6; HG nr. 585/2002, art. 8",
    "type": "single",
    "question": "Un comisar de achiziții solicită acces la toate contractele clasificate, incluse cele cu furnizori de alimente. Conform principiilor HG 581/585 și HG 781, cum se delimitează accesul?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, I se deschid toate contractele, fiindcă face achiziții și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, accesul se acordă verbal, dacă este urgent urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Accesul se acordă doar la informațiile necesare atribuției de achiziții, pe autorizație scrisă (art. 6); dacă nu are atribuții privind anumite contracte, accesul se refuză pt. acele (principiul necesității, art. 8) — „fac achiziții” nu este autorizație generală."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, I se refuză tot, fără verificare și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 6 cere autorizație scrisă; HG 585/2002 art. 8 limitează accesul la informațiile necesare atribuțiilor. Funcția de achiziții NU este autorizație generală pentru orice contract; accesul se calibrează pe necesitate, pe autorizație emisă de conducător.",
    "tooltipCorrect": "Autorizație specifică + doar ce este necesar atribuțiilor (art. 6 + art. 8)."
  },
  {
    "id": "INF-072",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Marcare incompletă pe copiator",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 2 și art. 11",
    "type": "single",
    "question": "Un coleg a multiplicat un document și a lăsat pe copiator o copie cu „secret de serviciu” doar pe prima pagină, în loc să marcheze fiecare pagină. Ce-i cere administratorul II ÎNTÂI?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, să o arunce la coș și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, să lase copia, se va vedea mai târziu urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, să marcheze doar coperta, nu fiecare pagină urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Recuperează copia, marchează corect fiecare pagină (art. 2), consemnează multiplicarea și evaluează riscul de compromitere; dacă a stat liberă, anunță conducerea și, după caz, declanșează cercetare administrativă (art. 11)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 2: marcarea pe fiecare pagină; multiplicarea se consemnează (art. 1). O copie cu marcare incompletă lăsată liberă este risc de compromitere (art. 11) — se recuperează, se marchează corect, se consemnează și se evaluează riscul, după caz cercetare administrativă.",
    "tooltipCorrect": "Recuperare + marcare pe fiecare pagină (art. 2) + evidentă; risc → art. 11."
  },
  {
    "id": "INF-073",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Publicare istoric vs. regim actual",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 17 și art. 20",
    "type": "single",
    "question": "Un document vechi „secret de serviciu” descrie o situație complet schimbată azi; dezvăluirea nu mai poate prejudicia unitatea. Conducerea vrea totuși să-l păstreze clasificat „pentru siguranță”. Conform HG 585/2002, ce este corect?",
    "options": [
      {
        "id": "A",
        "text": "Clasificarea se face doar dacă se impune protecția (art. 17); dacă dezvăluirea nu mai poate prejudicia, se declasifică (art. 20 lit. b). Supraevaluarea „de siguranță” nu este justificată legal."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, să se reclasifice la un nivel superior ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, să se distrugă imediat și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, să rămână clasificat, supraevaluarea este permisionă și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 585/2002 art. 17: clasificarea se face doar dacă se impune protecția; art. 20 lit. b: dacă dezvăluirea nu mai poate prejudicia, se declasifică. Menținerea „de siguranță” a unei clasificări inutile este supraevaluare, opozabilă și contestabilă (art. 16–17).",
    "tooltipCorrect": "Doar dacă se impune protecția (art. 17); fără prejudiciu → declasificare (art. 20 lit. b)."
  },
  {
    "id": "INF-074",
    "section": "Informații clasificate - HG 585/2002 și HG 781/2002",
    "topic": "Recapitulare — decizie integrată",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002 și HG nr. 781/2002",
    "type": "single",
    "question": "Administratorul II găsește pe biroul curatorului, în incinta cu acces liber, un document cu „secret de serviciu” nenumărat (fără „S”), nemarcat pe pagini, aparent uitat. Care este lanțul corect de acțiuni, conform HG 781/2002?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, îl distruge, ca să nu mai fie problemă și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "1) Recuperează și securizează documentul; 2) verifică de la cine provine și de ce este nemarcat/incorect evidentiat (art. 2); 3) marchează corect și introduce în registru (litera „S”); 4) evaluează riscul de compromitere, iar dacă a fost accesibil persoanelor fără autorizație, anunță conducerea și declanșează cercetare administrativă (art. 11)."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, îl lasă pe birou, dacă nu-i al său și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, îl pune la arhivă împreună cu documentele nesecrete urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Lanțul corect reflectă HG 781/2002: (art. 2) marcarea pe fiecare pagină și număr cu „S”; (art. 1–3) evidenta separată în registru special; (art. 6) acces pe autorizație; (art. 11) compromitere → cercetare administrativă + informare. Recuperarea, marcarea, evident și evaluarea riscului sunt pașii integrati.",
    "tooltipCorrect": "Recuperare → marcare corectă (art. 2) → evidenta (art. 1–3) → evaluare risc/cercetare (art. 11)."
  },
  {
    "id": "SCN-001",
    "section": "Scenarii mixte de examen",
    "topic": "Recepție lot la limită + etichetă lipsă",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, art. 7 + Legea nr. 123/2008, art. 10",
    "type": "single",
    "question": "Administratorul II recepționează un lot de biscuiți sărați pentru gustarea copiilor. Pe ambalaj: 1,4 g sare/100 g (sub pragul de 1,5 g), dar ambalajul NU are etichetă nutritională conformă (lipsește tabelul). Ce face ÎNTÂI, din perspectiva Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, acceptă lotul: 1,4 g sare e sub prag, deci eticheta nu mai contează și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, acceptă lotul, dar numai pt. personal, nu pt. copii și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Refuză/Suspendă recepția: deși sarea este sub prag, lipsa etichetei conforme încadrează produsul ca aliment neetichetat (Anexa 1 pct. 7) și operatorul trebuie să facă dovada compoziției prin etichetă/specificații/buletin (art. 7); fără dovadă, intră sub interdicția art. 10 din Legea 123/2008."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, acceptă lotul și servește biscuiții copiilor, notând only lipsa etichetei ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Combinație OM 1563/2008 + Legea 123/2008: pragul de sare (1,5 g/100 g, Anexa 1 pct. 3) NU este singurul filtru — alimentul neetichetat (pct. 7) și lipsa dovezii compoziției (art. 7) îl exclud. În incinta unității, prepararea/comercializarea/distribuția alimentelor din lista nerecomandate sunt interzise (Legea 123/2008 art. 10). Administratorul II nu decide după un singur criteriu.",
    "tooltipCorrect": "Sub prag pt. sare ≠ acceptabil: eticheta lipsă (pct. 7) + dovada compoziției (art. 7) + interdicția art. 10."
  },
  {
    "id": "SCN-002",
    "section": "Scenarii mixte de examen",
    "topic": "Defect de joacă + PSI + SSM",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, Secțiunea 1 și 6; Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "În curte, un cățel de joacă are un șurub ieșit și rugină. E plângerea unui educator; copii urmează să iasă în pauză. Ce face ÎNTÂI Administrator II, combinând PSI și SSM?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, așteaptă investiția din bugetul viitor ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, scoate șurubul singur cu plierul, fără consemnare și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, anunță personalul să fie atent și lasă copii să se joace și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "(1) Oprește/restrânge accesul copiilor la echipament (prevenire accident — SSM cap. IV comunicare imediată + PSI limitare risc); (2) semnalează și marchează zona; (3) solicită remedierea/înlocuirea; (4) consemnează și anunță conducerea. Întâi se previne accidentul, apoi se remediază."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Scenariu mixt SSM (Legea 319/2006 cap. IV: comunicare imediată a riscului, NU se lasă locul periculos) + PSI (Legea 307/2006: limitează propagarea, protejare viață). Întâi se oprește accesul și se marchează zona (prevenire accident copii), apoi se remedierează și se consemnează. Dotările periculoase se semnalează conducerii (OM 4143/2022Anexa 2 — rol administrator).",
    "tooltipCorrect": "Întâi oprești accesul (SSM + PSI), marchi zona, remediere, consemnezi, anunți."
  },
  {
    "id": "SCN-003",
    "section": "Scenarii mixte de examen",
    "topic": "Miros de fum în oficiu + alimente depozitate",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, Secțiunea 1 și 6; Legea nr. 123/2008",
    "type": "single",
    "question": "Administratorul II simte miros de fum în oficiul cu alimente. Lângă tabloul electric sunt depozitate cutii de cereale. Ce face ÎNTÂI, conform PSI și alimentație?",
    "options": [
      {
        "id": "A",
        "text": "(1) Anunță imediat (posibil incendiu) și acționează conform instructajului fără a-și pune viața în pericol (PSI Secțiunea 1); (2) deconectează/izolează sursele dacă poate face-o în siguranță; (3) mută alimentele din apropierea sursei de căldură/tabloului electric (combustibile lângă sursă = risc PSI) și verifică depozitarea lor corectă ulterior."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, iese și închide ușa, fără să anunțe și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, anunță copiii și așteaptă un pompier și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, stinge cu apă pe tabloul electric urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "PSI Legea 307/2006: în caz de incendiu se anunță imediat și se acționează conform instructajului, fără a pune viața în pericol; combustibilele lângă surse de căldură/tablouri electrice sunt interzise (Secțiunea 6 — administrator stabilește responsabilități scrise + menține libere căile/instalațiile). Depozitarea alimentelor lângă tablou electric combină risc PSI cu încălcarea condițiilor de depozitare; NU se stinge cu apă pe electric.",
    "tooltipCorrect": "Anunți + acționezi conform instructajului (fără risc personal) + muți combustibilele din zona sursei; fără apă pe electric."
  },
  {
    "id": "SCN-004",
    "section": "Scenarii mixte de examen",
    "topic": "Document secret pe copiator + PSI ofiicu",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 2, art. 11; Legea nr. 307/2006, Secțiunea 1",
    "type": "single",
    "question": "Pe copiatorul din oficiu — unde a existat un scurtcircuit azi-dimineață — găsești un document cu „secret de serviciu” tipărit doar pe prima pagină. Care este ordinea corectă a acțiunilor?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, repari mai întâi scurtcircuitul, apoi te ocupi de document și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "(1) Recuperează și securizează documentul (marcare incompletă — art. 2; risc de compromitere prin copiator liber — art. 11 context); (2) deconectează copiatorul și semnalează scurtcircuitul (PSI — risc incendiu, fără improvizații electrice); (3) anunță conducerea pt. ambele; (4) marchează corect paginile și consemnează."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, lași totul pe mâine urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, faci fotocopii și apoi repari și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Combinație HG 781/2002 (marcare pe fiecare pagină, art. 2 + compromitere art. 11) cu PSI Legea 307/2006 (scurtcircuit = risc incendiu, fără improvizații electrice). Întâi se securizează documentul și se deconectează sursa (două riscuri paralele), apoi se remedierează și se anunță conducerea. Nu se fac copii până la clarificare.",
    "tooltipCorrect": "Recuperezi documentul + deconectezi copiatorul; anunți conducerea; marchezi + consemnezi."
  },
  {
    "id": "SCN-005",
    "section": "Scenarii mixte de examen",
    "topic": "Detergenți lângă grup sanitar + acces copii",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2; Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "În depozitul adiacent grupului sanitar găsești detergenți pe un raft la nivelul copiilor, iar ușa depozitului rămâne uneori deschisă. Ce face Administrator II, combinând dotări și SSM?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, doar pune un semn „nu atinge” urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, lași detergenții; în final, curățărea îi folosește în grup sanitar și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "(1) Mută detergenții într-un spațiu sigur, inaccesibil copiilor, separat și etichetat (OM 4143/2022 Anexa 2: produse de curățenie/substanțe periculoase inaccesibile copiilor); (2) remedierea ușii/încuietorii (acces necontrolat = risc); (3) instruiște personalul pt. manipulare (SSM cap. IV: utilizează corect substanțele, EIP) și consemnează lipsurile."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, mută detergenții sub paturile copiilor, mai la îndemână ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "OM 4143/2022 Anexa 2: produse de curățenie/substanțe periculoase inaccesibile copiilor, separate și etichetate. Legea 319/2006 cap. IV: lucrătorul utilizează corect substanțele și EIP, anunță riscurile. Combinat: securizarea depozitării + remedierea accesului + instruire + consemnare lipsuri; un semn „nu atinge” nu ține copiii în siguranță.",
    "tooltipCorrect": "Detergenți inaccesibili copii (Anexa 2) + remediere ușă + instruire EIP (SSM) + consemnare."
  },
  {
    "id": "SCN-006",
    "section": "Scenarii mixte de examen",
    "topic": "Stingător blocat de mobilier",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, Secțiunea 6; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "În holul grădiniței, un dulap cu materiale didactice blochează parțial accesul la stingător, iar lângă el s-a adăugat un prelungitor încărcat cu mai multe aparate. Ce face Administrator II, conform PSI + dotări?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, pune un stingător suplimentar lângă dulap, în loc să eliberezi ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, scoate stingătorul, ca să nu mai fie blocat și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, lasă așa, fiind prelungitorul e necesar urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "(1) Eliberează accesul la stingător (mijloacele de stingere se mențin libere și funcționale — PSI Secțiunea 1/6); (2) elimină prelungitorul supraincărcat (fără improvizații electrice, fără surse de foc necontrolate); (3) mută dulapul în depozit corespunzător (gestiune bunuri) și consemnează."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 307/2006: mijloacele de stingere și căile de evacuare se mențin libere și funcționale (Secțiunea 1); fără improvizații electrice sau surse de foc necontrolate (obligația salariatului); administratorul asigură dotarea/funcționarea (Secțiunea 6). OM 4143/2022 Anexa 2: bunurile se gestionează cu inventar, mutări consemnate. Nu se adaugă stingătoare „paralel” și nici nu se elimină cel existent.",
    "tooltipCorrect": "Eliberezi stingătorul + elimini prelungitorul supraincărcat + muți dulapul (consemnat)."
  },
  {
    "id": "SCN-007",
    "section": "Scenarii mixte de examen",
    "topic": "Meniu tocătură prăjită + maioneză",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 2 pct. 6 și pct. 8; Legea nr. 123/2008, art. 11",
    "type": "single",
    "question": "Meniul propus pt prânz include tocătură prăjită în tigaie și cartofi prăjiți, plus o maioneză ca sos. Din perspectiva Administrator II, ce este neconform și de ce, fără a pregăti rețete?",
    "options": [
      {
        "id": "A",
        "text": "Tocăturile sunt acceptate NUMAI prin fierbere sau la cuptor (Anexa 2 pct. 6), NU prăjite; cartofii prăjiți și maioneza sunt în lista alimentelor nerecomandate (Anexa 1 pct. 2) și maionezele sunt interzise indiferent de anotimp (Anexa 2 pct. 8); meniurile sunt avizate medical și aprobate de conducător (Legea 123 art. 11) — administratorul semnalează neconformitatea."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, doar maioneza este problema, tocătura prăjită este acceptabilă ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, totul este conform; Administrator II doar aprovizionează și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, este conform dacă se servește cald și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 1563/2008 Anexa 2: pct. 6 — tocături doar prin fierbere/cuptor; pct. 8 — maioneze interzise indiferent de anotimp. Anexa 1 pct. 2 — grăsimi peste 20 g/100 g (cu criterii de saturate/trans) încadrează cartofii prăjiți ca nerecomandați. Legea 123/2008 art. 11: meniurile avizate medical + aprobate de conducător. Administrator II NU pregătește, dar recepționează/aprovizionează conform și semnalează neconformitatea meniului.",
    "tooltipCorrect": "Tocături doar fierte/cuptor (pct. 6) + maioneză interzisă (pct. 8); cartofi prăjiți = lista pct. 2."
  },
  {
    "id": "SCN-008",
    "section": "Scenarii mixte de examen",
    "topic": "Copil cu alergie + meniu + depozitare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 123/2008, art. 11; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Un copil are alergie la arahide. Meniul nu indică alergeni, iar în depozit mingin ambalaje cu alune sunt amestecate cu alimentele pt copii. Ce face Administrator II, integrând alimentație și dotări?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, pune alunele pe raft pt copii, ca să le aleagă și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "(1) Semnalează conducerii lipsa identificării alergenilor în meniu (Legea 123 art. 11 — meniuri avizate medical, adaptate stării de sănătate); (2) separă și etichetează depozitarea alimentelor cu alergeni, inaccesibile/confundabile (OM 4143/2022 Anexa 2 — separare corectă, etichetare, evitarea contaminării); (3) asigură circuitul pt masa copilului alergic; nu lasă răspunderea exclusiv medicală."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, nimic; alergia se rezolvă la personal medical și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, elimină copilul alergic ca să simplifice și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 123/2008 art. 11: meniurile sunt avizate de personal medical și aprobate de conducător, adaptate stării de sănătate. OM 4143/2022 Anexa 2: depozitarea cu separare corectă, etichetare, evitarea contaminării. Alăturarea alimentelor cu alergeni la cele pt copii + lipsa alergenilor în meniu este dublă încălcare; Administrator II semnalează, separă, etichetează și asigură circuit.",
    "tooltipCorrect": "Semnalezi lipsa alergenilor în meniu (art. 11) + separi/etichetezi depozitarea (Anexa 2)."
  },
  {
    "id": "SCN-009",
    "section": "Scenarii mixte de examen",
    "topic": "Scurgere apă + stingător + acces copii",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV; Legea nr. 307/2006, Secțiunea 1; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "În grup sanitar, o țeavă a pierdut apă pe pardoseală, iar un prelungitor trece pe podea spre un aparat. Copiii sunt la activitate. Ce face ÎNTÂI Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, șterge cu mop și lasă prelungitorul și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, trimite copii să meargă prin apă, să se obișnuiască ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "(1) Marchează/limitează zona pt a preveni alunecarea (SSM + OM 4143/2022 Anexa 2 — administrator limitează accesul la defecte periculoase); (2) deconectează și ridică prelungitorul din apă (PSI — fără improvizații/surse în apropierea apei, risc electrocutare/incendiu); (3) anunță remedierea și consemnează. Întâi se asigură viața copiilor."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, așteaptă fonduri pt reparație; doar pune un prost și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trei acte combinate: SSM (Legea 319/2006 cap. IV — comunicare imediată, NU se lasă locul periculos), PSI (Legea 307/2006 — fără improvizații electrice lângă apă, risc electrocutare/incendiu), dotări (OM 4143/2022 Anexa 2 — administrator limitează accesul la defecte periculoase, semnalează, urmărește remedierea). Întâi se previne accidentul (marcare + deconectare), apoi remediere + consemnare.",
    "tooltipCorrect": "Marchezi/limitezi zona + deconectezi prelungitorul din apă + anunți remediere (SSM+PSI+dotări)."
  },
  {
    "id": "SCN-010",
    "section": "Scenarii mixte de examen",
    "topic": "Substanțe clasificate pe copiator + curățenie",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 2, art. 11; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "În cabinetul directorului, o copie cu „secret de serviciu” este pe birou (nemarcată pe pagini) și, lângă copiator, o sticlă de clor fără etichetă. Copiii vin cu o vis-a-vis pentru predare materiale. Ce face ÎNTÂI Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, lași copiii să vadă copiatorul, e educativ urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, primește copiii, evenimentele se rezolvă după ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, toarnă clorul în chiuvetă, cu copiii de față ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "(1) Recuperează/securizează documentul (marcare incompletă — art. 2; risc compromitere art. 11) și îl înlătură din accesul vizitatorilor; (2) mută/etichetează clorul într-un depozit inaccesibil copiilor (OM 4143/2022 Anexa 2); (3) amână/organizează vizita copiilor astfel încât să nu treacă prin cabinet cu riscuri prezente. Întâi se elimină riscurile pt copii și pt informație."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Combinație HG 781/2002 (marcare pe fiecare pagină art. 2; compromitere art. 11) cu OM 4143/2022 Anexa 2 (substanțe periculoase inaccesibile copiilor, etichetate, separate). Două riscuri paralele (compromitere info + intoxicare copii). Administrator II securizează documentul, mută/etichetează clorul și organizează vizita fără expunere la riscuri.",
    "tooltipCorrect": "Securizezi documentul (art. 2/11) + muti/etichetezi clorul (Anexa 2) + organizezi vizita copiilor."
  },
  {
    "id": "SCN-011",
    "section": "Scenarii mixte de examen",
    "topic": "Recepție prag-limită + SSM manipulare",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 1 pct. 3; Legea nr. 319/2006, cap. IV și V",
    "type": "single",
    "question": "Recepționezi un lot de covrigei sărați cu 0,58 g sodiu/100 g (sub pragul de 0,6 g sodiu) și 1,3 g sare/100 g (sub 1,5 g). Operatorul a livrat fără buletin, iar manipulantul refuză mănușile de descărcare. Ce decide Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Suspendă recepția: sub praguri NU scutește de dovada compoziției (art. 7); fără buletin/specificații nu se face dovada; totodată impune EIP la descărcare (SSM cap. IV — utilizare corectă EIP; cap. V — supraveghere sănătate), instruiește și consemnează; dacă lotul nu se conformează, se refuză."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, acceptă lotul (sub praguri) și lasă manipulantul fără EIP și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, refuză doar pentru EIP, lotul nu contează urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, acceptă lotul și donează surplusul ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 1563/2008: sub praguri (Anexa 1 pct. 3 — sare 1,5 g sau sodiu 0,6 g) NU scutește de art. 7 (dovada compoziției prin etichetă/specificații/buletin). Legea 319/2006 cap. IV: lucrătorul utilizează corect EIP; cap. V: supraveghere sănătate. Administrator II decide integrat: dovada + EIP; fără conformitate, recepția se suspendă/refuză.",
    "tooltipCorrect": "Sub prag ≠ acceptabil fără dovada (art. 7) + EIP obligatoriu la manipulare (SSM)."
  },
  {
    "id": "SCN-012",
    "section": "Scenarii mixte de examen",
    "topic": "Document în geantă + transport fără aprobare",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 4 și art. 10; Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Administratorul II pleacă acasă cu un dosar cu secret de serviciu în geantă, „ca să termine acasă”, și vine pe jos prin parc. Ce încălcări cumulează?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, doar dacă este prins în control urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "(1) Scoaterea din incintă fără aprobarea conducătorului (art. 4 — contravenție art. 14); (2) transport neconform (art. 10 — trebuie conform HG, nu pe jos/în geantă); (3) risc de muncă cu document clasificat în afara unității, nedeclarat — angajatul NU lucrează la domiciliu neautorizat (SSM cap. IV — NU se fac activități în afara cadrului stabilit), și riscul de compromitere (art. 11)."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, niciuna; geanta protejază documentul ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, doar dacă dosarul este prea greu urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002: art. 4 (scoatere fără aprobare — contravenție art. 14), art. 10 (transport conform HG). Legea 319/2006 cap. IV: activitatea se desfășoară în cadrul stabilit, NU improvizat acasă. Cumulare: contravenție info clasificată + procedură transport + risc SSM/compromitere (art. 11). Geanta nu schimbă regimul.",
    "tooltipCorrect": "Scoatere fără aprobare (art. 4) + transport neconform (art. 10) + muncă neautorizat (SSM)."
  },
  {
    "id": "SCN-013",
    "section": "Scenarii mixte de examen",
    "topic": "Meniu cu omletă ochiuri + calcul rație",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 2 pct. 6; Anexa 4 art. 3",
    "type": "single",
    "question": "Bucătarul propune pt copii ochiuri românești (ou prăjit) și reclamă că rația de ouă (Anexa 4) este prea mică. Administrator II, fără a prepara, ce răspunde?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, ochiurile sunt conforme; rația se ignoră urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, se prepară ochiuri, rația se dublează ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "(1) Ouale se prepară ca OMLETĂ LA CUPTOR, NU ochiuri românești/prăjite (Anexa 2 pct. 6); (2) rațiile se calculează pe baza foilor de alimente pe 10 zile lucrătoare în februarie/mai/octombrie (Anexa 4), se compară cu Tabelul 1, iar depășirea este permisă până la 20% pt anumite grupe (art. 3); semnalează pt ajustare, nu ignoră."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, se înlocuiesc ouăle cu dulciuri urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "OM 1563/2008 Anexa 2 pct. 6: ouăle ca omletă la cuptor, NU ochiuri prăjite. Anexa 4: rațiile se calculează pe 10 zile lucrătoare (feb/mai/oct), compară cu Tabelul 1, depășire permisă până la 20% pt lapte/carne/pește/legume-fructe (art. 3). Administrator II NU prepară, dar recepționează/aprovizionează conform și semnalează neconformitatea + ajustarea rației.",
    "tooltipCorrect": "Ouă omletă la cuptor (pct. 6); rații pe 10 zile + ±20% pt anumite grupe (Anexa 4)."
  },
  {
    "id": "SCN-014",
    "section": "Scenarii mixte de examen",
    "topic": "Băuturi răcoritoare la automate + apă",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 1 pct. 4; Legea nr. 123/2008, art. 10",
    "type": "single",
    "question": "Un furnizor instalează un automat în hol cu sucuri carbogazoase și apă minerală, spunând că e doar pt personal. Ce decide Administrator II, conform alimentației?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, acceptă: e pt personal, nu pt copii urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, acceptă, dar pune un semn „doar pt personal” urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, acceptă doar sucurile, nu și apa și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "(1) În incinta unității se interzic prepararea/comercializarea/distribuția alimentelor din listă (Legea 123 art. 10); băuturile răcoritoare sunt interzise, cu excepția apei potabile/minerale îmbuteliate (Anexa 1 pct. 4); automatul cu sucuri carbogazoase încalcă, chiar dacă e expus pt personal — incinta unității de învățământ este reglementată ca atare."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "OM 1563/2008 Anexa 1 pct. 4: băuturile răcoritoare sunt ORICE tip, cu excepția apei potabile/minerale îmbuteliate; în incinta școlilor se vinde NUMAI apă îmbuteliată. Legea 123/2008 art. 10: în incintă sunt interzise prepararea/comercializarea/distribuția alimentelor din listă. Un automat cu sucuri carbogazoase este neconform indiferent de destinția „personal”, întrucât incinta este cea protejată.",
    "tooltipCorrect": "Sucuri carbogazoase interzise în incintă (pct. 4); doar apă îmbuteliată (art. 10)."
  },
  {
    "id": "SCN-015",
    "section": "Scenarii mixte de examen",
    "topic": "Acordare acces verbal +ierarhie",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6; Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Un coleg cu grad didactic îi cere Administrator II să vadă rapoartele financiare (secret de serviciu) „verbally, pt căsuntem în urgency”. Ce refuz este legal motivat?",
    "options": [
      {
        "id": "A",
        "text": "Refuz pe motiv că accesul se acordă NUMAI pe autorizație scrisă de la conducător (HG 781 art. 6), pt persoane cu atribuții (art. 5); un cadru didactic fără atribuții financiare NU are acces, iar urgența NU înlocuiește autorizația. SSM cap. IV: NU se ocolește procedura din „urgență”."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, acceptă, dar numai o singură dată ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, cedează, fiindcă este urgency ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, acceptă dacă acesta promite să nu divulgze și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 6: acces pe autorizație scrisă de la conducător; art. 5: funcții cu acces stabilite de conducător. Un cadru didactic fără atribuții financiare nu intră sub funcțiile cu acces. Legea 319/2006 cap. IV: procedura NU se ocolește invocând „urgență”; refuzul este legal și se dokumentează.",
    "tooltipCorrect": "Acces doar pe autorizație (art. 6), nu verbal; urgența NU scutește procedura."
  },
  {
    "id": "SCN-016",
    "section": "Scenarii mixte de examen",
    "topic": "Echipament joacă + SSM + PSI",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2; Legea nr. 307/2006, Secțiunea 6; Legea nr. 319/2006, cap. V",
    "type": "single",
    "question": "Un lemn de joacă are muchie despicată după o vară; instructorul SUA de joacă raportează. Ce face Administrator II, combinând dotări + PSI + SSM?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, lași așa, lemnul se rotește singur urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "(1) Oprește accesul copiilor la lemnul cu muchie despicată (OM 4143 Anexa 2 — fără muchii periculoase, lemn așchiat; oprește folosirea, raportează reparare); (2) marchează zona; (3) verifică dacă riscul este nou dupa o schimbare (SSM cap. V — supraveghere sănătate, reevaluare după schimbare); (4) asigură că nu e sursă de foc dacă lemnul se usucă / nu se depozitează combustibil lângă el (PSI)."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, scoate lemnul și îl arde în curte urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, intrimnă lemnul cu lipici și lasă copiii să se joace și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "OM 4143/2022 Anexa 2: echipamente de joacă fără muchii periculoase, lemn așchiat, șuruburi ieșite, rugină; administratorul oprește folosirea și raportează reparare. SSM Legea 319/2006 cap. V: supraveghere sănătate, reevaluare riscuri după schimbare. PSI Legea 307/2006: fără combustibil lângă surse. Combinat: oprește, marchează, reevaluează, raportează; improvizația cu lipici sau arderea sunt riscuri.",
    "tooltipCorrect": "Opresți accesul + marchi + reevaluezi riscuri (cap. V) + raportezi; fără improvizații."
  },
  {
    "id": "SCN-017",
    "section": "Scenarii mixte de examen",
    "topic": "Inventar lipsă + casare + info clasificată",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2; HG nr. 781/2002, art. 8/art. 1",
    "type": "single",
    "question": "La inventar, constati lipsă a două laptops din dotare; un dosar cu secret de serviciu care a acompaniat un laptop a dispărut cu el. Ce proceduri cumulează Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, așteaptă să apară dosarul la o inspecție și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, cumpără două laptops pt a nu se vedea lipsa și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "(1) Consemnează lipsurile bunurilor și raportează conducerii pt completare/înlocuire/reparare (OM 4143 Anexa 2); (2) tratează lipsa dosarului cu secret de serviciu ca posibilă compromitere — cercetare administrativă (HG 781 art. 11); (3) dacă a existat autorizație legată de acces, se analizează retragerea (art. 8); (4) distrugerea/retragerea se face pe proces-verbal (art. 8/art. 1)."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, doar raportezi lipsa laptops; dosarul se rezolvă singur urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "OM 4143/2022 Anexa 2: lipsurile/degradările se consemnează și se raportează conducerii pt completare. HG 781/2002: lipsa unui dosar cu secret de serviciu este posibilă compromitere — art. 11 cercetare administrativă; art. 8 analiză retragere autorizație dacă e caz; PV pt distrugere/retragere. Două proceduri paralele: gestiune bunuri + protecție info.",
    "tooltipCorrect": "Lipsuri consemnate (Anexa 2) + compromitere art. 11 + retragere PV (art. 8)."
  },
  {
    "id": "SCN-018",
    "section": "Scenarii mixte de examen",
    "topic": "Aprovizionare apă + depozitare + PSI",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 1 pct. 4; Legea nr. 307/2006, Secțiunea 1",
    "type": "single",
    "question": "Aprovizionezi apă minerală îmbuteliată în sticle PET pt copii, dar o depozitezi în cămara cu boilerul pe gaz, îngrămădită pe recipientele de carton. Ce verifici, integrând alimentație + PSI?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, apa este conformă, depozitarea nu contează ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, lasi pe carton, în final apa nu arde ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, renunți la apă, fiindcă e grea de depozitat urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "(1) Apa minerală îmbuteliată este conformă (Anexa 1 pct. 4 — excepție de la lista băuturilor nerecomandate); (2) dar depozitarea pt alimente trebuie corectă, separata, evitând contaminarea (OM 4143 Anexa 2), iar lângă boilerul pe gaz NU se depozitează materiale combustibile (cartonul) — PSI Secțiunea 1: fără combustibile lângă surse de căldură; mută și reorganizează depozitarea."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "OM 1563/2008 Anexa 1 pct. 4: apa minerală îmbuteliată este excepție conformă. OM 4143/2022 Anexa 2: depozitarea alimentelor cu separare, etichetare, fără contaminare. PSI Legea 307/2006: fără materiale combustibile (carton) lângă surse de căldură/boiler pe gaz. Apa conformă, dar depozitarea creează risc PSI + se depreciază condițiile alimentare; se mută și reorganizează.",
    "tooltipCorrect": "Apă conformă (pct. 4); dar fără carton lângă gaz (PSI) + depozitare corectă (Anexa 2)."
  },
  {
    "id": "SCN-019",
    "section": "Scenarii mixte de examen",
    "topic": "Comunicare risc + accident copil",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Un copil se plânge că s-a lovita la mână pe o margine ascuțită a unei mese defecte din sala de grupă, iar mozaicul e crăpat. Ce face Administrator II, combinând SSM și dotări?",
    "options": [
      {
        "id": "A",
        "text": "(1) Comunică imediat evenimentul conducătorului locului de muncă (SSM cap. VI — eveniment accident cu vătămare); (2) NU modifică locul evenimentului, cu excepția salvării/sesizării pericolului; (3) cercetare pt cauze (margine ascuțită/masă defectă — OM 4143 Anexa 2: mobilier stabil, fără muchii periculoase, semnalat pt remediere); (4) marchează/limitează accesul și consemnează."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, așteaptă vinerea pt a verifica formatul urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, repară masa imediat, apoi raportează și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, dă vina pe educator, fără a verifica mobilierul ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "SSM Legea 319/2006 cap. VI: evenimentul (accident cu vătămare) se comunică imediat; locul NU se modifică, cu excepția salvării și înlăturării pericolului; se cercetează pt cauze. OM 4143/2022 Anexa 2: mobilier stabil, fără muchii periculoase; defectele se semnalează și se limitează accesul. Întâi comunicare + păstrare loc pt cercetare, apoi remediere.",
    "tooltipCorrect": "Comunicare imediată + NU modifici (decât salvare) + cercetare cauze + marchi masa (Anexa 2)."
  },
  {
    "id": "SCN-020",
    "section": "Scenarii mixte de examen",
    "topic": "Listă copii pe site + secret de serviciu",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 8; HG nr. 781/2002, art. 4 și art. 11",
    "type": "single",
    "question": "Pentru transparență, conducerea publică pe un blog lista copiilor înscriși cu nume, adrese și telefon părinți. Ce este greșit, conform HG 585/781?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, este corect dacă blogul are parolă ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Lista copiilor cu date de contact se protejează ca secret de serviciu (HG 585 art. 8 — info necesare doar celor cu atribuții; art. 4 alin. 3 — prejudiciază unitatea/persona). Publicarea pe blog = compromitere (HG 781 art. 11): cercetare administrativă, informare instituții abilitate, retragere/ștergere de la publicare, protejarea datelor."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, este corept dacă se șterge după 30 zile ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, nimic; transparența publică este permisă și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 585/2002 art. 8: informațiile necesare doar celor cu atribuții; art. 4 alin. 3: secret de serviciu. Datele cu caracter personal (adrese, telefon) NU se publică în scopul „transparenței”. HG 781/2002 art. 11: publicarea este compromitere — cercetare administrativă, informarea instituțiilor abilitate, ștergere. Parola pe blog nu schimbă caracterul de compromitere.",
    "tooltipCorrect": "Listă copii = secret de serviciu (art. 8); publicare = compromitere (art. 11)."
  },
  {
    "id": "SCN-021",
    "section": "Scenarii mixte de examen",
    "topic": "Inspecție SSM + înregistrări documente",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6 și art. 11; Legea nr. 319/2006, cap. VI",
    "type": "single",
    "question": "Inspectorul SSM solicită registrele de evidență a accidentelor și, separat, acces la dosarele cu secret de serviciu „pt control”. Cum procedează Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, predă toate dosarele cu secret de serviciu, ca să coopereze ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, refuză toate documentele, fără distinctie și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "(1) Pun la dispoziție registrele/evidenta accidentelor (SSM cap. VI — raportare/înregistrare; PSI — permite controalele); (2) accesul la secretele de serviciu se acordă doar pe autorizație scrisă de la conducător, după verificare, pt instituțiile cu atribuții de coordonare/control (HG 781 art. 6, art. 11) — cooperează dar în limitele procedurii; nu se predă integral „la cerere generală”."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, predă numai registrele, fără să verifice și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "SSM Legea 319/2006 cap. VI + PSI: înregistrările/raportările accidentelor se pun la dispoziție pt control. HG 781/2002 art. 6 + art. 11: accesul la secret de serviciu pe autorizație, iar instituțiile cu atribuții de coordonare/control se informează în caz de compromitere; cooperare în limitele procedurii, fără predare integrală arbitrară. Distincție pe tip de document.",
    "tooltipCorrect": "Registre accidente disponibile (SSM/PSI); secrete doar pe autorizație (art. 6), nu integral."
  },
  {
    "id": "SCN-022",
    "section": "Scenarii mixte de examen",
    "topic": "Creșă vs. grădiniță — comunicare lista",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 123/2008, art. 9; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Într-o structură cu grădiniță și creșă, Administrator II distribuie lista alimentelor nerecomandate ambelor componente prin ISJ. Ce este incorect, conform legii?",
    "options": [
      {
        "id": "A",
        "text": "În temeiul normelor în vigoare, lista nu se comunică deloc creșelor și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, incorect? Distribuția prin ISJ este suficientă pt ambele urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, lista se comunică doar prin director urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Legea 123/2008 art. 9: lsp-ul comunică lista tuturor unităților prin inspectoratele școlare județene, MAI PUȚIN creșelor; creșelor li se comunică DIRECT de MSP. Deci pt creșă, comunicarea prin ISJ este incorectă — se cere comunicare directă de la MSP."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 123/2008 art. 9: MSP întocmește/actualizează lista; inspectoratele școlare județene/București o comunică tuturor unităților, MAI PUȚIN creșelor — creșelor li se comunică DIRECT de MSP. Într-o structură mixtă, comunicarea pt creșă NU se face prin ISJ. OM 4143/2022 Anexa 2 reglementează dotările pt ambele (0–6 ani), dar comunicarea listei are regim distinct.",
    "tooltipCorrect": "Creșelor — direct de MSP (art. 9), NU prin ISJ."
  },
  {
    "id": "SCN-023",
    "section": "Scenarii mixte de examen",
    "topic": "Recepție lapte praf + echivalență + depozitare",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 4; Legea nr. 123/2008, art. 11",
    "type": "single",
    "question": "Recepționezi lapte praf integral în loc de lapte proaspăt, pt a asigura rația de lapte/lactate (Anexa 4 Tabel 1 — 700/700/800 ml echivalent). Cum verifici conformitatea, fără a prepara?",
    "options": [
      {
        "id": "A",
        "text": "(1) Echivalența: 100 g lapte praf integral = 800 ml lapte proaspăt (Anexa 4); verificați conversia pt a asigura rația; (2) recepționezi cu etichetă/specificații/buletin (art. 7), ambalaj integru; (3) depozitare conformă (uscat, etichetat, fără contaminare — OM 4143 Anexa 2); (4) meniul e avizat medical + aprobat de conducător (Legea 123 art. 11)."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, refuză laptele praf, preferă doar proaspăt ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, acceptă 100 g = 100 ml direct ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, contează doar greutatea praf, 100 g = 100 g lapte și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 1563/2008 Anexa 4: 100 g lapte praf integral = 800 ml echivalent lapte proaspăt; echivalențele sunt pt asigurarea rației (Tabel 1). art. 7: dovada compoziției (etichetă/specificații/buletin). OM 4143/2022 Anexa 2: depozitare corectă, etichetată, fără contaminare. Legea 123/2008 art. 11: meniu avizat medical + aprobat de conducător. Laptele praf NU se echivalează 1:1.",
    "tooltipCorrect": "100 g lapte praf integral = 800 ml lapte (Anexa 4); depozitare corectă; meniu avizat (art. 11)."
  },
  {
    "id": "SCN-024",
    "section": "Scenarii mixte de examen",
    "topic": "Aprovizionare cartofi prăjiți + lista nerecomandată",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 1 pct. 2 și Anexa 4 Tabel 2; Legea nr. 123/2008, art. 10",
    "type": "single",
    "question": "Un furnizor propune cartofi prăjiți congelați pt prânz, prelucrează cu ulei pt a fi foarte gustoși. Ce decide Administrator II, din perspectiva aprovizionării conforme?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, doar dacă se servesc reci urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "NU: cartofii prăjiți sunt alimente nerecomandate (Anexa 1 pct. 2 — grăsimi >20 g/100 g, în cazul prăjirii) și în categoria „foarte crescută” peste 300 kcal/100 g (Anexa 4 Tabel 2); în incintă se interzice distribuirea (Legea 123 art. 10). Aprovizionează cartofi proaspeți pt fierbere/copere."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, da, dar doar pt adulți, pește copii ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, da; sunt potriviți pt copii, fiind congelați urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "OM 1563/2008 Anexa 1 pct. 2: cartofii prăjiți intră în lista alimentelor nerecomandate (grăsimi depășesc pragul prin prăjire); Anexa 4 Tabel 2: peste 300 kcal/100 g (foarte crescută). Legea 123/2008 art. 10: în incintă se interzice prepararea/comercializarea/distribuția alimentelor din listă. Administrator II NU aprovizionează cu nerecomandate; alege cartofi proaspeți pt fierbere/copere.",
    "tooltipCorrect": "Cartofi prăjiți = lista pct. 2 + >300 kcal (Tabel 2); interzisă distribuirea (art. 10)."
  },
  {
    "id": "SCN-025",
    "section": "Scenarii mixte de examen",
    "topic": "Stingător → verificare + autorizație PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, Secțiunea 6; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Un stingător din hol are eticheta de verificare expirată. Un coleg vrea să-l rearmeze singur cu un tub de pe internet. Ce face Administrator II, conform PSI + dotări?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, îl lasă expirat, va fi bine ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, permisiunea se dă să-l rearmeze singur și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "(1) Stingătorul expirat NU se folosessște stingător expirat: asigură dotarea/funcționarea mijloacelor de stingere (PSI Secțiunea 6), fără improvizații; (2) rearmanerea self-made este interzisă (NU se improvizează, NU se folosesc surse necontrolate — obligație salariat); (3) solicită verificare/încărcare de firmă autorizată, consemnează în inventar (OM 4143 Anexa 2) și asigură stingător de rezervă în perioada."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, îl reavizează singur, cu un sticker nouu și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 307/2006 Secțiunea 6: administratorul asigură dotarea/funcționarea mijloacelor de stingere, semnalizare și evacuare, solicită/obține avizele/autorizațiile de securitate la incendiu. Obligația salariatului: NU improvizații. OM 4143/2022 Anexa 2: stingătoare verificate periodically; defectele se consemnează. Reavizare/încărcare de firmă autorizată; NU se „rearmează” manual.",
    "tooltipCorrect": "Stingător expirat → firmă autorizată (PSI Secțiunea 6); fără improvizații; consemnat (Anexa 2)."
  },
  {
    "id": "SCN-026",
    "section": "Scenarii mixte de examen",
    "topic": "Compromitere document + răspundere",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 11 și art. 12",
    "type": "single",
    "question": "Un document cu secret de serviciu ajunge în sala de grupă din greșeală și este fotografiat de un părinte în tur. Cum apreciezi răspunderea, conform HG 781?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, nimeni, fiind „din greșeală” și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, doar părintele rspunde pt fotografie și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, rspunde doar elevul care a fotografiat, dacă e major urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "(1) Compromitere (art. 11): conducerea dispune cercetare administrativă pt cauze, responsabilități, recuperare/limitare; informează instituțiile cu atribuții de coordonare/control; pt recuperare prejudicii, se poate adresa instanței; (2) răspundere penală/civilă/contravențională/disciplinară pt cei în blame (art. 12), inclusiv salariatul care a lăsat documentul în sala de grupă."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 11: compromitere → cercetare administrativă + informare instituții + instanță pt prejudicii. art. 12: răspundere penală/civilă/contravențională/disciplinară. Răspunderea NU se reduce la fotograf; salariatul care a lăsat documentul în sala de grupă și-a încălcat obligațiile, iar părintele pt actul propriu — cercetarea stabilește fiecare.",
    "tooltipCorrect": "Cercetare administrativă (art. 11) + răspunderi multiple (art. 12), nu un singur vinovat."
  },
  {
    "id": "SCN-027",
    "section": "Scenarii mixte de examen",
    "topic": "Bucătărie — separare alimente + SSM",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2; Legea nr. 319/2006, cap. IV și V",
    "type": "single",
    "question": "În oficiu, pe aceeași masă, sunt depozitate alimente crude pt preparare și produse de curățenie neetichetate. Personalul lucrează fără EIP cu substanțele. Ce face Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "(1) Separate alimentele de produsele de curățenie (OM 4143 Anexa 2: inaccesibile copii, separate, etichetate; OM 1563 Anexa 1 pct. 7 pt etichete); evitarea contaminării; (2) impune EIP pt manipularea substanțelor (SSM cap. IV — utilizare corectă EIP); (3) instruire + supraveghere sănătate pt riscuri chimice (cap. V); (4) etichetează și consemnează lipsurile."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, mută produsele cu curtele pe jos ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, lasă personalul fără EIP, c-o să se descurce ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, nimic, oficiu este o singură arie și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 4143/2022 Anexa 2: produse de curățenie/substanțe periculoase separate, etichetate, inaccesibile copii; OM 1563 art. 7 etichetare; separare alimente pt a evita contaminarea. SSM Legea 319/2006 cap. IV: lucrătorul utilizează corect EIP; cap. V: supraveghere sănătate pt riscuri chimice. Pe aceeași masă alimente + detergenți = risc de contaminare și intoxicație; se separă, se etichetează, se instruiește.",
    "tooltipCorrect": "Separi alimente/detergenți (Anexa 2) + EIP (SSM cap. IV) + supraveghere (cap. V)."
  },
  {
    "id": "SCN-028",
    "section": "Scenarii mixte de examen",
    "topic": "Recepție fructe neambalate",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 1 pct. 6; Legea nr. 123/2008, art. 10",
    "type": "single",
    "question": "Un furnizor propune mere și banane proaspete, în vrac (neambalate), pt gustarea copiilor. Ce decide Administrator II, conform Anexei 1?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, refuză tot pt că nu au etichetă urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "(1) Alimentele neambalate/vrac sunt nerecomandate (Anexa 1 pct. 6), dar bananele și CITRICELE sunt excepție — se acceptă; merele în vrac, fără ambalare și fără a se încadra în alt criteriu, sunt problematice ca aliment vrac, dar merele ca atare NU sunt interzise, ci forma de vrac. deci se pot accepta cu conditia spălării/porționării pt copii, iar bananele/citricele direct acceptate."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, refuză toate fructele neambalate, fără excepție și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, refuză doar merele, acceptă bananele urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "OM 1563/2008 Anexa 1 pct. 6: alimentele neambalate/vrac sunt nerecomandate, dar bananele și citricele sunt excepție. Merele ca atare NU sunt pe lista nerecomandată, dar forma vrac ridică problema alimentului neambalat; pt copii, se spală și se porționează. Bananele/citricele sunt acceptate direct ca excepție (pct. 6). Administrator II nu refuză fructele ”în bloc”.",
    "tooltipCorrect": "Banane/citrice = excepție (pct. 6); mereNU sunt nerecomandate, dar se spală/porționează."
  },
  {
    "id": "SCN-029",
    "section": "Scenarii mixte de examen",
    "topic": "Băuturi pt sărbătoare + copil cu diabet",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 123/2008, art. 11; Ordinul MS nr. 1563/2008, Anexa 1 pct. 4 și pct. 1",
    "type": "single",
    "question": "Pt o sărbătoare, se propune un suc de fructe natural pt copii, dar și o băutură răcoritoare cola „mai jos, pt copii”. Un copil cu diabet participă. Ce decide Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, se acceptă cola, doar pt sărbătoare și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Pe baza dispozițiilor curente, refuză copilul cu diabet la sărbătoare ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "(1) Cola e băutură răcoritoare — interzisă în incintă, cu excepția apei îmbuteliate (Anexa 1 pct. 4; Legea 123 art. 10); NU se aprovizionează pt „sărbătoare”; (2) sucurile de fructe naturale pot intra pt gustare, dar pt copilul cu diabet, meniul se adaptează stării de sănătate (Legea 123 art. 11 — meniu avizat medical, adaptat); (3) propune apă/soluție adaptată pt copil; semnalează conducerii ajustarea."
      },
      {
        "id": "D",
        "text": "Pe baza dispozițiilor curente, toți beau cola, e doar o zi ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Anexa 1 pct. 4: băuturile răcoritoare sunt interzise, cu excepția apei îmbuteliate; Legea 123/2008 art. 10: în incintă se interzice distribuirea. Legea 123 art. 11: meniul se adaptează stării de sănătate, avizat medical, aprobat de conducător. pt sărbătoare NU se aprovisionează cola; sucul natural se evaluează, iar copilul cu diabet are meniul adaptat.",
    "tooltipCorrect": "Cola interzisă (pct. 4 + art. 10); copil diabetic — meniu adaptat medical (art. 11)."
  },
  {
    "id": "SCN-030",
    "section": "Scenarii mixte de examen",
    "topic": "Autorizație PSGI + distrugere PV",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 8 și art. 11",
    "type": "single",
    "question": "Un salariat și-a încălcat atribuțiile privind un document cu secret de serviciu; conducerea retrage autorizația. El spune „de ce se distruge, pot să o păstrez ca suvenir? Cum se realizează?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, da, o păstrează, fiind autorizația lui și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, se lasă la dosar, fără distrugere și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Pe baza dispozițiilor curente, se predă titularului, ca o amintire ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "NU: după retragere, structura de securitate distruge autorizația pe bază de PROCES-VERBAL (art. 8). Pe lângă aceasta, dacă fapta constituie compromitere, se declangează cercetare administrativă (art. 11) — pt cauze, responsabilități, recuperare/limitare și se informează instituțiile cu atribuții."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 8: după retragere, structura de securitate distruge autorizația pe proces-verbal — NU se păstrează de titular. art. 11: dacă fapta implică compromitere, cercetare administrativă + informare instituții. Procesul-verbal dovedește retragerea și distrugerea, important pt control.",
    "tooltipCorrect": "Distrugere pe PV (art. 8) — nu suvenir; compromitere → cercetare (art. 11)."
  },
  {
    "id": "SCN-031",
    "section": "Scenarii mixte de examen",
    "topic": "Bancă de mobiler defect + circuit curat/murdar",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2; Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "În dormitor, paturile sunt instabile, iar lenjeria murdară nu este separată de cea curată, pe un samestec de rafturi. Ce face Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "(1) Paturile instabile se semnalează/limitază accesul și se urmărește remedierea (OM 4143 Anexa 2: paturi/saltele individuale, stabile, sigure); (2) separă textilele curate de cele murdare (circuit curat/murdar — Anexa 2) și asigură lenjerie individuală; (3) comunică riscurile (SSM cap. IV; posibil risc de contact/copii cu afecțiuni); (4) consemnează și raportează conducerii pt remediere."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, lasă lenjeria amestecată, pt nr. de copii redus ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, doar spală lenjeria murdară, fără separare urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, mută copiii pe saltele pe podea urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 4143/2022 Anexa 2: dormitorul necesită paturi/saltele curate, stabile, lenjerie individuală, separare circuit curat/murdar, aerisire, spațiu suficient. SSM Legea 319/2006 cap. IV: comunicare imediată a riscurilor (contact cu lenjerie murdară). Paturi instabile + amestec textile = risc igienico-sanitar și accident; se separă, se semnalează, se remediază.",
    "tooltipCorrect": "Paturi remediate (Anexa 2) + circuit curat/murdar separat + comunicare risc (SSM)."
  },
  {
    "id": "SCN-032",
    "section": "Scenarii mixte de examen",
    "topic": "Fractură copil la joacă + cercetare SSM",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VI; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Un copil suferă o fractură căzând de pe tobogan defectiv. Ce pași urmează Administrator II, integrând SSM și dotări?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, doar raportează părinților, fără SSM urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "(1) Comunică imediat evenimentul (accident cu vătămare — SSM cap. VI); (2) NU modifică locul evenimentului, cu excepția salvării copiilor/înlăturării pericolului iminent; (3) cercetează cauzele (tobogan defectiv — OM 4143 Anexa 2: echipamente verificate periodically, fără defecte; risc preexistent dacă n-a fost consemnat); (4) separă/oprește accesul la tobogan, asistă pt activarea asigurării și raportează conducerii; cercetare oficială asfixi numai după prim-ajutor."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, repară toboganul imediat, înainte de orice ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, mută copiii într-un loc fără a documenta ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "SSM Legea 319/2006 cap. VI: evenimentul (accident cu vătămare) se comunică imediat; locul NU se modifică, cu excepția salvării/înlăturării pericolului; se cercetează cauzele. OM 4143/2022 Anexa 2: echipamente de joacă verificate periodically, fără defecte. Tobogan defectiv cu accident = cercetare cauze (prevenție nerealizată), oprire acces, documentare — NU repară înainte de cercetare.",
    "tooltipCorrect": "Comunicare imediată + NU modifici locul (decât salvare) + cercetare cauze + oprești tobogan."
  },
  {
    "id": "SCN-033",
    "section": "Scenarii mixte de examen",
    "topic": "Reproducere pe copiator + compromitere",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 1 și art. 11",
    "type": "single",
    "question": "Administratorul II multiplică pe copiator 10 copii ale unui document secret de serviciu, pt 10 destinații autorizate; una dintre copii este luată de un vizitator din greșeală. Ce se întâmplă?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit reglementării aplicabile, se fac alte 10 copii, ca să acopere urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, se consideră pierderea ca fiind minoră și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "(1) Multiplicarea se consemnează în evidentă (art. 1), fiecare copie păstrează marcarea; (2) lipsa unei copii este risc de compromitere, dacă a ajuns la persoană neautorizată — cercetare administrativă (art. 11), informare instituții abilitate, recuperare; (3) se corectează procedura de multiplicare/manipulare și se revede evidenta."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, nimic; este doar o copie, important e originalul și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 1: multiplicarea se consemnează în evidentă, fiecare copie păstrează marcarea. art. 11: o copie ajunsă la o persoană neautorizată este compromitere — cercetare administrativă, informare, recuperare. O copie are același regim ca originalul pt informația pe care o poartă. Se corectează procedura și se revede evidenta.",
    "tooltipCorrect": "Multiplicare consemnată (art. 1); copie pierdută = compromitere art. 11."
  },
  {
    "id": "SCN-034",
    "section": "Scenarii mixte de examen",
    "topic": "Gravidele la muncă + manipulare chimică",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. VII; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "O angajată gravidă este repartizată la manipularea detergenților agresivi în oficiu, fără EIP adaptat. Ce face Administrator II, combinând SSM cap. VII și dotări?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, lasă, dacă ea este de acord urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, îi spune să-și ceară transfer singură urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, îi cere să semneze că își asumă urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "(1) Gravida/lăuza este grup sensibil (SSM cap. VII) — angajatorul adaptează măsurile de protecție pt a preveni expunerea la riscuri pt sănătatea ei sau a copilului; (2) reorganizează atribuțiile — NU manipulare chimică agresivă fără adaptare/EIP; (3) detergenții se folosesc cu separat/etichetat/inaccesibil copii (OM 4143 Anexa 2) și dețin EIP pt toți; (4) supraveghere medicală (cap. V) pt gravida."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006 cap. VII: grupuri sensibile (gravide, lăuze, care alăptează) — angajatorul adaptează măsurile de protecție să prevină expunerea la riscuri. cap. V: supraveghere medicală. OM 4143/2022 Anexa 2: detergenții manevrați cu EIP, separați, etichetați. Acordul angajatei NU elimină obligația angajatorului; se reorganizează atribuțiile și se asigură supraveghere.",
    "tooltipCorrect": "Gravida = grup sensibil (cap. VII): adaptare atribuții + EIP + supraveghere (cap. V)."
  },
  {
    "id": "SCN-035",
    "section": "Scenarii mixte de examen",
    "topic": "Email greșit + secret + protecția datelor",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 11; Legea nr. 123/2008, art. 11",
    "type": "single",
    "question": "Administratorul II trimite, din greșeală, lista copiilor cu restanțe și informații medicale (alergii) către un grup larg de adrese de email, în loc de conducere. Ce pași urmează?",
    "options": [
      {
        "id": "A",
        "text": "(1) Compromitere a informației clasificate (HG 781 art. 11): retrage/șterge de la destinatari, anunță imediat conducerea, cercetare administrativă, informare instituții abilitate; (2) datele medicale intră în protecția datelor sensible, iar meniul adaptat alergei se avizează medical (Legea 123 art. 11) — divulgarea lor creează risc pt copii; (3) consemnează transmiterea și stabilește măsuri pt a nu se repeta (listă restrictivă, criptare)."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, anunță doar după ce observă cineva urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, trimite din nou, corectat, fără să comunice greșeala și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, șterge din „Trimise” și atât și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 11: compromitere → cercetare administrativă + informare instituții + recuperare. Datele cu caracter personal și medicale sunt protejate suplimentar; divulgarea pt alergii poate pune în risc siguranța copiilor (Legea 123/2008 art. 11 — meniu avizat medical pt stări de sănătate). „Din greșeală” NU elimină compromiterea; se consemnează și se previne recurența.",
    "tooltipCorrect": "Compromitere (art. 11) + date medicale protejate (art. 11); retragere + cercetare + prevenire."
  },
  {
    "id": "SCN-036",
    "section": "Scenarii mixte de examen",
    "topic": "Inspecție_SAN + sancțiuni alimente",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 123/2008, art. 15 și art. 16; Ordinul MS nr. 1563/2008, art. 1",
    "type": "single",
    "question": "Inspectorul sanitar constată că în oficiu se distribuie copii sweetsuri (bomboane) peste 15 g zahăr/100 g. Cine constată/sancționează și ce încălcare este, din perspectiva Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Conform practicii administrative curente, doar educatorii sunt sancționați urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Constatarea și sancționarea revin Inspecției Sanitare de Stat din MSP (Legea 123 art. 15); încălcarea art. 9–12 este contravenție (art. 16); bomboanele >15 g zahăr/100 g sunt aliment nerecomandat (OM 1563 Anexa 1 pct. 1), iar în incintă comercializarea/distribuția sunt interzise (art. 10). Administrator II, prin aprovizionare conforme, previne."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, directorul sancționează, nu Inspecția Sanitară și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Potrivit reglementării aplicabile, bomboanele sunt permise dacă sunt naturale și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 123/2008 art. 15: constatarea și sancționarea revin Inspecției Sanitare de Stat din MSP; art. 16: contravenție = încălcarea art. 9–12. OM 1563/2008 Anexa 1 pct. 1: >15 g zahăr/100 g = aliment nerecomandat (bomboane); art. 10: în incintă se interzice distribuirea. Administrator II NU aprovizionează sweetsuri peste prag, prevenind sancțiunea.",
    "tooltipCorrect": "Inspecția Sanitară de Stat sancționează (art. 15); bomboane >15 g zahăr = pct. 1; interzis în incintă (art. 10)."
  },
  {
    "id": "SCN-037",
    "section": "Scenarii mixte de examen",
    "topic": "Listă autorizații + retragere pe concediu",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6 și art. 8",
    "type": "single",
    "question": "Registru autorizațiilor arată că patru titulari sunt pe concediu prelungit/detasare, iar accesul lor la secrete de serviciu nu mai este actual. Ce măsuri corecte rezultă?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, se transferă către înlocuitori automatic ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, le lași active, convenabil pt întoarcere urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "(1) se analizează retractarea pentru titularii al căror post NU mai presupune acces pe perioada concediului (art. 8 lit. b); (2) distrugerea pe proces-verbal pt cei retrași (art. 8); (3) actualizează Registrul pt evidența autorizațiilor (art. 6) și, la întoarcere, se reemite dacă atribuțiile reimpun acces; nu se păstrează „inactiv” pe termen nelimitat."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, se șterg din Registru, fără PV urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 8: retragere când atribuțiile postului NU mai presupun acces; după retragere, distrugere pe PV. art. 6: evidența centralizată în Registru. Titularii inactivi pe concediu prelungit nu trebuie să rămână cu acces „suspendat” doar pe hârtie; se retractă și se reemite la întoarcere dacă se impune. NU se transferă, NU se șterg fără PV.",
    "tooltipCorrect": "Retragere dacă nu mai presupune acces (art. 8) + distrugere PV + actualizare Registru (art. 6)."
  },
  {
    "id": "SCN-038",
    "section": "Scenarii mixte de examen",
    "topic": "Inventar lipsa laptops + 2 factori",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2; Legea nr. 307/2006, Secțiunea 6",
    "type": "single",
    "question": "La inventar, un laptop din dotare lipsește, iar un hidrant din coridor este acoperit cu cutii de carton. Ce face Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, lasă cutiile pe hidrant, sunt temporare și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, cumpără alt laptop pt a nu se vedea lipsa urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, mută lipsa pe un alt inventar și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "(1) Consemnează lipsa laptopului, raportează conducerii pt completare/înlocuire (OM 4143 Anexa 2); (2) eliberează imediat hidrantul accesibil pt intervenție (PSI Secțiunea 6 — mijloacele/accesul pt intervenție libere); (3) dacă laptopul conținea date sensibile, procedura suport electronic + posibil compromitere (HG 781 principii); (4) NU se ascunde lipsa și NU se blochează hidranții."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "OM 4143/2022 Anexa 2: lipsurile se consemnează și se raportează conducerii pt completare. Legea 307/2006 Secțiunea 6: administratorul menține libere mijloacele de stingere și accesul pt intervenție; obstrucționarea hidrantului cu cutii este încălcare gravă. Lipsa + date sensibile pe laptop ridică problematic compromiterii (HG 781). Lipsa NU se ascunde.",
    "tooltipCorrect": "Lipsa consemnată (Anexa 2) + hidrant eliberat (PSI) + date sensibile → eventual art. 11."
  },
  {
    "id": "SCN-039",
    "section": "Scenarii mixte de examen",
    "topic": "Băutură carbogazoasă pt copii + poziție administrator",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 123/2008, art. 10; Ordinul MS nr. 1563/2008, Anexa 1 pct. 4",
    "type": "single",
    "question": "Un sponsor donează pt sărbătoare un lot de sucuri carbogazoase colorate. Directorul vrea să le servească copiilor „fiindcadă de la sponsor”. Ce poziție corectă ia Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Refuză distribuirea în incintă: sucurile carbogazoase sunt băuturi răcoritoare, interzise în incintă (Anexa 1 pct. 4, excepție doar apă îmbuteliată; Legea 123 art. 10 interzice distribuirea). Donația NU schimbă regimul alimentelor; se poate mulțumi sponsorului și alege o alternativă conformă (apă îmbuteliată, fructe)."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, acceptă,s dar doar pt personal ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, acceptă; donația scutește regula și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, acceptă, dar diluată cu apă și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 1563/2008 Anexa 1 pct. 4: băuturile răcoritoare sunt interzise, cu excepția apei îmbuteliate. Legea 123/2008 art. 10: în incintă se interzic prepararea/comercializarea/distribuția alimentelor din listă. Donația nu schimbă regimul; incinta unității rămâne protejată indiferent de sursă. Administrator II NU aprobă distribuția, propune alternativă conformă.",
    "tooltipCorrect": "Sucuri carbogazoase interzise în incintă (pct. 4 + art. 10); donația NU schimbă regimul."
  },
  {
    "id": "SCN-040",
    "section": "Scenarii mixte de examen",
    "topic": "Două acte — SSM + PSI + acces copii",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV; Legea nr. 307/2006, Secțiunea 1",
    "type": "single",
    "question": "Un cablu electric odihne peste un calorifer, iar un stingător din apropiere este încărcat cu un breloc de hârtie. Copii urmează să treacă. Ce face ÎNTÂI Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, repară stingătorul cu un breloc nou urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "(1) Izolează/deconectează cablul de pe calorifer (PSI — fără improvizații electrice, fără surse de foc necontrolate; SSM — NU elimină/NU modifică dispozitivele de siguranță, anunță); (2) eliberează stingătorul de hârtie (mijloace de stingere libere și funcționale — PSI Secțiunea 1); (3) marchează și anunță conducerea pt remedieri; (4) NU lasă copii să treacă până se elimină riscul."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, lasă, doar pt azi este urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, mută copii, dar lasă cablul și stingătorul ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 307/2006 Secțiunea 1: mijloacele de stingere se mențin libere/funcționale; fără improvizații electrice/surse de foc necontrolate (obligația salariatului); Secțiunea 6: administratorul asigură funcționarea. Legea 319/2006 cap. IV: NU elimină/modifică dispozitive de siguranță, comunică imediat riscul. Cablu pe calorifer + stingător blocat = dublu risc; se izolează, se eliberează, se marchează, se anunță.",
    "tooltipCorrect": "Deconectează cablu de pe calorifer + eliberează stingător + marchează + anunți (PSI + SSM)."
  },
  {
    "id": "SCN-041",
    "section": "Scenarii mixte de examen",
    "topic": "Hartă evacuare + instrucțiuni PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, Secțiunea 6",
    "type": "single",
    "question": "Elevii de practică din grădiniță nu cunosc traseul de evacuare. Conducerea NU a stabilit responsabilități scrise pt PSI. Ce deficiențe identifică Administrator II, conform Legii 307?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, doar un plan pe perete rezolvă totul urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, niciuna, dacă stingătoarele sunt noi și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "(1) Lipsesc dispozițiile scrise prin care se stabilesc responsabilitățile PSI, aduse la cunoștința personalului (Secțiunea 6); (2) lipsesc/elaborează instrucțiunile PSI și instruirea personalului (inclusiv pt practică) privind traseul de evacuare și locul de adunare; (3) fără instruire, salariații NU pot evacua corect copii; Administrator II propune elaborarea instruciunilor + instructaje/exerciții."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, copiii învață singuri la nevoie și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Legea 307/2006 Secțiunea 6: administratorul stabilește responsabilitățile prin DISPOZIȚII SCRISE aduse la cunoștința personalului, elaborează instrucțiunile PSI, verifică dacă personalul le cunoaște/respectă, asigură instructaje/exerciții de evacuare. Lipsa dispozițiilor + a instruirii practic NU permite evacuarea corectă a copiilor; un plan pe perete NU este suficient.",
    "tooltipCorrect": "Dispoziții scrise + instrucțiuni PSI + instruire/exerciții (Secțiunea 6) — obligatorii."
  },
  {
    "id": "SCN-042",
    "section": "Scenarii mixte de examen",
    "topic": "Tocături prăjite + creme cu ouă",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 2 pct. 6 și pct. 8",
    "type": "single",
    "question": "Bucătarul propune pt ziua copilului: chifteluțe prăjite în ulei și o cremă cu ouă și frișcă pt prăjitură. Din perspectiva aprovizionării/Stanței Administr II, ce semnalezi?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, doar crema este problema și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, acceptă dacă se servesc reci urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, toate sunt conforme, fiind prăjite bine ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "(1) Tocăturile sunt acceptate NUMAI prin fierbere sau la cuptor (Anexa 2 pct. 6) — chifteluțe prăjite NU sunt conforme; (2) cremele cu ouă și frișcă sunt interzise indiferent de anotimp (pct. 8); (3) Administrator II semnalează conducerii neconformitatea meniului (Legea 123 art. 11 — meniu avizat medical, aprobat de conducător) și propune alternative (chifteluțe la cuptor, fructe pt desert)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "OM 1563/2008 Anexa 2 pct. 6: tocături doar fierte/cuptor; pct. 8: creme cu ouă și frișcă interzise indiferent de anotimp. Combinația prăjită + cremă reprezintă dublă neconformitate. Meniul se avizează medical și se aprobă de conducător (Legea 123/2008 art. 11). Administrator II NU pregătește, dar semnalează neconformitatea și aprobă alternativa conformă.",
    "tooltipCorrect": "Tocături doar fierte/cuptor (pct. 6) + cremă cu ouă/frișcă interzisă (pct. 8)."
  },
  {
    "id": "SCN-043",
    "section": "Scenarii mixte de examen",
    "topic": "Dulap de secret descuiat + curățenie",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 4 și art. 11; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Dulapul cu secrete de serviciu este descuiat, iar curățitorul, la igienizare, a ridicat și răsfoit dosare fără să știe ce sunt. Ce proceduri urmează Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "(1) Securizează dulapul încuiat cu acces controlat (HG 781 art. 4/6 — acces pe autorizație); (2) tratează ca risc/compromitere (art. 11) — cercetare administrativă dacă răsfoirea creează expunere; (3) instruiește curățitorul (știind NU are acces, NU trebuie să manipuleze dosare); (4) principiul Anexa 2 (OM 4143): proceduri interne clare pentru curățenie în zone cu documente."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, demite curățitorul, fără cercetare urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, lasă descuiat, pt a fi mai operativ urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, nimic; curățitorul trebuie să curețe urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 4/6: acces/scoatere controlată; art. 11: compromitere → cercetare administrativă. Curățitorul fără autorizație nu trebuie să manipuleze dosare — atât procedura unității (instruire, separare curățenie/documnte), cât și securizarea dulapului sunt deficiențe de remediat. OM 4143/2022 Anexa 2: proceduri interne clare. Demiterea fără cercetare NU este remediu.",
    "tooltipCorrect": "Securizezi dulapul (art. 4/6) + cercetare art. 11 + instruiești curățitorul + proceduri interne."
  },
  {
    "id": "SCN-044",
    "section": "Scenarii mixte de examen",
    "topic": "Apă pe scări + evacuare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV; Legea nr. 307/2006, Secțiunea 1",
    "type": "single",
    "question": "Apa scursă pe scările de evacuare îngheață pe timp de iarnă, transformând scările în patinouri. Ce face Administrator II, integrând SSM + PSI?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, așteaptă primăvara, să se usuce ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "(1) Marchează și remediatează imediat riscul de alunecare/cădere pe calea de evacuare (SSM cap. IV — comunicare, NU se lasă pericol; PSI Secțiunea 1 — căile de evacuare se mențin libere și funcționale); (2) remedierea sursei scurgerilor; (3) asigură semnalizarea anti-alunecare /material abraziv pt tracțiune; (4) NU se blochează căile de evacuare; consemnează șimonitorizează."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, închide scările pe timp de iarnă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, lasă gheața, e natural și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Calea de evacuare trebuie să rămână liberă și funcțională (Legea 307/2006 Secțiunea 1); SSM Legea 319/2006 cap. IV: comunicare imediată a riscului, NU se lasă locul periculos. Apa înghețată pe scări de evacuare = risc accident + blocare evacuare. Se marchează, se remediază sursa, se asigură tracțiune (abraziv), se semnalizează; NU se închide scările.",
    "tooltipCorrect": "Marchi + remedieri sursă + abraziv pt evacuare liberă (PSI + SSM cap. IV)."
  },
  {
    "id": "SCN-045",
    "section": "Scenarii mixte de examen",
    "topic": "Materiale senzoriale + verif siguranță",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2; Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Recepționezi un set de materiale senzoriale pt antepreșcolari, unele cu piese sub 3 cm, netestibilabile pt înghițire, și marcatoare cu miros puternic. Ce decide Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, le dai copiilor mari, ca să nu se înece cei mici urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, acceptă, doar le observi la copii urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "(1) Materialele pt antepreșcolari trebuie să fie adecvate vârstei, sigure, fără risc de înghițire/asfixiere (OM 4143 Anexa 2 — materiale sigure, fără risc; Legea 319 cap. IV — comunicare risc); (2) piesele sub 3 cm reprezintă pericol de înghițire pt antepreșcolari — se refuză/se solicită certificare de siguranță; (3) marcatoarele cu miros puternic pot emite compuși volatali — se verifică eticheta/atestare; (4) recepționezi doar după dovada conformității."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, acceptă, materiale senzoriale sunt toate conforme urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "OM 4143/2022 Anexa 2: materialele pt antepreșcolari (0–3 ani) trebuie adecvate vârstei, sigure, fără risc de înghițire/asfixiere, fără muchii periculoase, fără compuși volatili cu miros. Legea 319/2006 cap. IV: comunicare risc, NU se utilizează EIP/improvizații. Piesele sub 3 cm pt antepreșcolari = risc de înghițire — se refuză fără certificare; materialele cu miros se verifică (etichetă/atestare).",
    "tooltipCorrect": "Materiale senzoriale pt antepreșcolari: fără piese înghițibile (<3cm), fără compuși volatili (Anexa 2)."
  },
  {
    "id": "SCN-046",
    "section": "Scenarii mixte de examen",
    "topic": "Cartofi cu sare margină + etichetă",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 1 pct. 3 și pct. 7; Legea nr. 123/2008, art. 10",
    "type": "single",
    "question": "Recepționezi chipsuri cu 1,49 g sare/100 g (sub prag) dar fără etichetă nutritională. Administrator II decide:",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea măsurilor prevăzute, acceptă cu excepție, pt că e la margine și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, refuză doar pt sare, nu pt etichetă și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, acceptă, fiind doar 0,01 g sub prag și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "NU acceptă: deși sarea e sub pragul de 1,5 g/100 g (Anexa 1 pct. 3), lipsa etichetei conforme îl încadrează în aliment neetichetat (pct. 7) și fără dovada compoziției (art. 7); suplimentar, chipsurile sunt ca atare alimente cu sare crescută și risc de încadrare — se solicită etichetă/specificații/buletin, altfel recepția se refuză (Legea 123 art. 10)."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "OM 1563/2008 Anexa 1: praguri — sare 1,5 g/100 g (pct. 3), aliment neetichetat (pct. 7); art. 7: dovada compoziției prin etichetă/specificații/buletin. Sub pragul pt sare NU elimină cerința etichetei — un aliment poate fi nerecomandat pe alte criterii (pct. 5 kcal, pct. 2 grăsimi dacă prăjit, pct. 7 etichetă). Legea 123/2008 art. 10 interzice distribuirea în incintă.",
    "tooltipCorrect": "Sub prag sare ≠ acceptabil; lipsă etichetă = pct. 7; art. 7 dovada; art. 10 interzice."
  },
  {
    "id": "SCN-047",
    "section": "Scenarii mixte de examen",
    "topic": "Aprovizionare citrice + suc natural + copii",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 1 pct. 4 și pct. 6; Legea nr. 123/2008, art. 11",
    "type": "single",
    "question": "Pt gustare, aprovizionezi portocale (citrice, excepție vrac) și suc de portocale proaspăt stors. Un copil are intoleranță la fructoza. Ce verifici, ca Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "(1) Citricele sunt excepție de la alimentul neambalat/vrac (Anexa 1 pct. 6), suc de portocale proaspăt NU este băutură răcoritoare (Anexa 1 pct. 4 exlude doar ape îmbuteliate — pt suc natural se verifică); (2) pt copilul cu intoleranță, meniul se adaptează stării de sănătate (Legea 123 art. 11 — aviz medical, aprobare conducere); (3) se recepționează cu dovada caracteristicilor și se asigură variantă alternativă pt copil; NU se servesc „identic pt toți”."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, refuzi citricile, din cauza intoleranței și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Potrivit procedurii stabilite, citricele sunt excepție, deci totul e conform, inclusiv pt copil urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Conform practicii administrative curente, serviezi suc în cutie, indiferent de compoziție ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 1563/2008 Anexa 1: citricele sunt excepție de la alimentul neambalat (pct. 6). Sucul de fructe proaspăt NU este băutură răcoritoare (pct. 4) — dar se verifică conformitatea. Legea 123/2008 art. 11: meniul se adaptează stării de sănătate, avizat medical, aprobat de conducător. Pt intoleranța la fructoză, copilul are variantă; NU se refuză citricele „în bloc” și NU se servesc identic pt toți.",
    "tooltipCorrect": "Citrice = excepție (pct. 6); suc natural ≠ băutură răcoritoare (pct. 4); copil cu intoleranță → meniu adaptat (art. 11)."
  },
  {
    "id": "SCN-048",
    "section": "Scenarii mixte de examen",
    "topic": "Echipament UV + SSM + PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV–V; Legea nr. 307/2006, Secțiunea 6",
    "type": "single",
    "question": "Grădinița a achiziționat un dispozitiv de igienizare cu UV pt jucării. Personalul nu a fost instruit, iar dispozitivul este lângă materiale combustibile. Ce face Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, îl așază lângă copiator, fiindcă e electric urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "(1) Reevaluare riscuri după schimbare (SSM cap. IV–V) — pericol UV pt ochi/piele, instruire obligatorie, EIP (protecție ochi), supraveghere medicală pt riscuri noi; (2) NU se amplasează lângă materiale combustibile (PSI Secțiunea 6 — fără combustibile lângă surse, măsuri de protecție la incendiu); (3) instruciuni scrise de utilizare și supraveghere; (4) consemnează în inventar (OM 4143 Anexa 2) și include în circuit de verificare."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, îl pornește, e noutate ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, lasă personalul să se descurce, fără instruire și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 319/2006 cap. IV–V: schimbare în locul de muncă (echipament nou cu risc UV) necesită reevaluare riscuri, instruire, EIP, supraveghere medicală. Legea 307/2006 Secțiunea 6: fără materiale combustibile lângă surse, măsuri de protecție la incendiu, instruciuni PSI. OM 4143/2022 Anexa 2: bunul se consemnează în inventar. Combinat: instruire + amplasare sigură + supraveghere + consemnare.",
    "tooltipCorrect": "Reevaluare risc UV + instruire + EIP (cap. IV–V); fără combustibil lângă el (PSI); în inventar."
  },
  {
    "id": "SCN-049",
    "section": "Scenarii mixte de examen",
    "topic": "Doc de pe copiator + acces străin",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 2, art. 6, art. 9, art. 11",
    "type": "single",
    "question": "Într-o zi de vizită Erasmus+, un expert străin intră în secretariat și vede pe copiator un document cu „secret de serviciu” nemarcat pe pagini. Ce face Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, îl lasă să se uite, fiind vizită oficială și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, îi arată tot dosarul, ca act de transparență și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "(1) Recuperează/securizează documentul (marcare incompletă — art. 2); (2) accesul cetățeanului străin la informații secrete cere AUTORIZAȚIE SPECIALĂ de acces (art. 9) — NU pe vizita generală; (3) evaluează riscul de compromitere (art. 11) — dacă a văzut informații sensibile, cercetare administrativă + informare instituții; (4) marchează corect paginile, consemnează."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, scoate documentul fără să se uite nimeni ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 781/2002 art. 2: marcare pe fiecare pagină; art. 9: străinul accesează pe autorizație specială, NU în vizită generală; art. 11: compromitere → cercetare administrativă + informare. Vizualizarea accidentală pe copiator liber este risc; se recuperează, se apreciază riscul, se marchează, se consemnează — NU se expune și NU se ascunde incidentul.",
    "tooltipCorrect": "Recuperezi (art. 2) + străin = autorizație specială (art. 9) + eventual cercetare (art. 11)."
  },
  {
    "id": "SCN-050",
    "section": "Scenarii mixte de examen",
    "topic": "Hidrant exterior + copii + joacă",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, Secțiunea 1; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "În curte, un hidrant exterior este înglobat într-o structură de joacă din lemn, iar accesul pt intervenție este blocat de nisip. Ce face Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, lasă, nu se vede hidrantul și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, demontează hidrantul ca să nu mai deranjeze ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, mută copii pe altă zonă, dar lași hidrantul blocat urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "(1) Eliberează accesul la hidrant (PSI Secțiunea 1 — mijloacele de stingere și accesul pt intervenție se mențin libere/funcționale); (2) NU amplasează structuri de joacă care înglobează/obstrucționează hidrante; (3) reorganizează curtea — echipamente de joacă în zone fără blocarea acceselor (OM 4143 Anexa 2 — exterior adaptat vârstei, sigur); (4) consemnează și raportează pt remediere."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 307/2006 Secțiunea 1: mijloacele de stingere/accesul pt intervenție se mențin libere și funcționale; NU se blochează hidranții. OM 4143/2022 Anexa 2: spațiul exterior adaptat vârstei, sigur, fără obstrucții periculoase. Înglobarea hidrantului în structură de joacă + blocare cu nisip e dublă încălcare; se eliberează, se reorganizează, NU se demontează hidrantul.",
    "tooltipCorrect": "Eliberezi hidrantul + reorganizezi curtea (PSI + Anexa 2); fără blocări."
  },
  {
    "id": "SCN-051",
    "section": "Scenarii mixte de examen",
    "topic": "Meniu cu ouă la cuptor + SSM bucătar",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 2 pct. 6; Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Bucătarul prepară omletă la cuptor (conformă Anexa 2 pct. 6), dar folosește un cuptor cu defecțiune la termostat și fără EIP termic. Ce semnalează Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "(1) Omleta la cuptor este conformă ca formă de preparare (Anexa 2 pct. 6); (2) dar cuptorul cu termostat defect = risc SSM (cap. IV — NU se folosesc aparate defecte/nesigure, se anunță) și risc igienico-alimentar (preparare inegală); (3) lipsa EIP termic = încălcare cap. IV (utilizare corectă EIP); (4) oprește cuptorul, solicită reparare, instruiește personalul, consemnează pt inventar/dotări."
      },
      {
        "id": "B",
        "text": "Potrivit reglementării aplicabile, permisiunea se dă să continue, omleta trebuie servită și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "Pe baza evaluării de rutină, nimic, omleta e conformă și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, cere să se facă ochiuri în schimb urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 1563/2008 Anexa 2 pct. 6: ouăle ca omletă la cuptor — conform ca formă. Dar aparatul cu termostat defect = risc SSM și igienico-alimentar; Legea 319/2006 cap. IV: NU se utilizează aparate defecte, se anunță; utilizare corectă EIP. Administrator II semnalează, oprește cuptorul, solicită reparare, instruiește; nu schimbă forma de preparare (ochiuri ar fi nonconformă).",
    "tooltipCorrect": "Omletă la cuptor conformă (pct. 6), dar cuptor defect = SSM + EIP lipsă; se oprește și se repară."
  },
  {
    "id": "SCN-052",
    "section": "Scenarii mixte de examen",
    "topic": "Reproducere document pe memory stick + scoatere",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 1, art. 4, art. 11",
    "type": "single",
    "question": "Administratorul II copiază pe stick USB un dosar cu secret de serviciu pt a-l duce la ISJ pe cont propriu, fără aprobare. Ce încălcări cumulează?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, niciuna, stick-ul este suport personal ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "(1) Multiplicare/reproducere pe suport electronic neconsemnată (art. 1); (2) scoatere din incintă fără aprobarea conducătorului (art. 4 — contravenție art. 14); (3) transport neconform (art. 10); (4) risc de compromitere dacă stick-ul nu este protejat (art. 11). Suportul personal NU schimbă regimul; procedura oficială cere aprobare, transport conform și evidentă."
      },
      {
        "id": "C",
        "text": "Conform procedurii interne, este permise dacă stick-ul este încuiat cu parolă urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Pe baza evaluării de rutină, doar dacă are mai puțin de 5 documente ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 1: regula de multiplicare pe orice suport; art. 4: scoaterea fără aprobare este interzisă (art. 14 contravenție); art. 10: transport conform HG; art. 11: risc de compromitere. Suportul personal cu parolă NU scutește de procedură; copierea trebuie consemnată, scoaterea aprobată de conducător, transport organizat conform.",
    "tooltipCorrect": "Multiplicare (art. 1) + scoatere fără aprobare (art. 4/14) + transport (art. 10) + risc (art. 11)."
  },
  {
    "id": "SCN-053",
    "section": "Scenarii mixte de examen",
    "topic": "Defect apă caldă + igienă copii + SSM",
    "difficulty": "scenario",
    "sourceAct": "Ordinul ME nr. 4143/2022, Anexa 2; Legea nr. 319/2006, cap. IV",
    "type": "single",
    "question": "Apă caldă în grupul sanitar nu funcționează; copii nu se pot spăla pe mâini înainte de masă. Ce face Administrator II, integrând dotări și SSM?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, închide grupul sanitar complet și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Potrivit procedurii stabilite, lasă copii să mănânce fără spălare, pt o zi urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "(1) Grupul sanitar trebuie să aibă instalații funcționale (OM 4143 Anexa 2 — apă, săpun, posete/uscător, igienizare); defectul se consemnează și se raportează pt remediere; (2) asigură soluții alternative imediate (apă caldă în carafe, dezinfectant pt mâini) pt igiena copiilor înainte de masă; (3) comunică riscul (SSM cap. IV) — risc igienico-sanitar și de îmbolnăvire; (4) NU se lasă pe termen fără remediere."
      },
      {
        "id": "D",
        "text": "Potrivit procedurii stabilite, anunță doar după ce se strică mai tare și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "OM 4143/2022 Anexa 2: grupul sanitar cu instalații funcționale, săpun, prosoape/uscător, dezinfectare — lipsa apei calde este deficiență ce se consemnează și se remediază. SSM Legea 319/2006 cap. IV: comunicare risc igienico-sanitar. Alternative imediate (carafe, dezinfectant) pt a nu lăsa copii fără igienă; NU se închide grupul și NU se lasă pe termen.",
    "tooltipCorrect": "Instalații funcționale (Anexa 2) + alternative imediate + comunicare risc (SSM)."
  },
  {
    "id": "SCN-054",
    "section": "Scenarii mixte de examen",
    "topic": "Cerere date copil — acces al părintelui",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6; HG nr. 585/2002, art. 8",
    "type": "single",
    "question": "Un părinte divorțat solicită Administrator II toate datele copilului său, inclusiv datele celuilalt părinte (adresă, telefon) din registrul clasificat secret de serviciu. Cum se delimitează accesul?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, I se predă tot registrul pt a se lămuri și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, I se refuză absolut tot urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "În aplicarea instrucțiunilor unității, I se dau datele celuilalt părinte direct și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "(1) Principiul necesității cunoașterii (HG 585 art. 8) — părintele accesează datele propriului copil, NU pe cele ale celuilalt părinte sau ale altor copii; (2) accesul intern al altor persoane se face pe autorizație (HG 781 art. 6); (3) verifică identitatea și titlul legal, comunică strict datele necesare și justificate; NU se deschide registrul integral."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 585/2002 art. 8: informațiile necesare doar celor cu atribuții; datele celuilalt părinte NU sunt „necessary pt atribuțiile” părintelui solicitant. HG 781/2002 art. 6: accesul intern pe autorizație, nu pe cerere generală. Accesul părintelui se individualizează la datele propriului copil, cu verificarea identității/titlului; NU se deschide registrul integral și NU se comunică date ale terților.",
    "tooltipCorrect": "Acces strict la datele propriului copil (art. 8) + acces intern pe autorizație (art. 6)."
  },
  {
    "id": "SCN-055",
    "section": "Scenarii mixte de examen",
    "topic": "Achiziție stingătoare + inventar + verificare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, Secțiunea 6; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Administratorul II recepționează 4 stingătoare noi pt sălile de grupă. Ce verificări cumulează, conform PSI + dotări?",
    "options": [
      {
        "id": "A",
        "text": "(1) Verifică tipul/capacitatea potrivită pt clasa de incendiu pt copii/săli (PSI Secțiunea 6 — dotarea/funcționarea mijloacelor de stingere); (2) etichetare/atestare conformă de la firmă autorizată; (3) amplasează vizibil și accesibil, NU în dulap încuiat sau ascuns; (4) le include în inventar și programul de verificare periodically (OM 4143 Anexa 2 — inventar, întreținere); (5) instruiște personalul cu locul fiecăruia."
      },
      {
        "id": "B",
        "text": "Pe baza evaluării de rutină, le lași în cutii originale, pt a nu se murdări ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, le așază oriunde, important să fie și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, le pune în cancelarie, pt siguranță și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Legea 307/2006 Secțiunea 6: asigură dotarea/funcționarea mijloacelor de stingere, semnalizare, evacuare; etichetare de firmă autorizată. OM 4143/2022 Anexa 2: bunurile se inventariază, stingătoarele se verifică periodically, vizibile/accesibile. Stingătoarele NU se pun ascunse/în cancelarie; se amplasează vizibil și se instruiește personalul cu locul fiecăruia.",
    "tooltipCorrect": "Tip potrivit + atestare firmă + amplasare vizibilă/accesibilă + inventar + instruire (PSI + Anexa 2)."
  },
  {
    "id": "SCN-056",
    "section": "Scenarii mixte de examen",
    "topic": "Accident — tăiere cu cuțit de curățare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV și cap. VI",
    "type": "single",
    "question": "Un coleg se taie la mâna cu un cuțit de curățare în oficiu, accident care a produs vătămare. Cuțitul nu era în suport, ci pe masă. Ce face Administrator II, conform SSM?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, repară suportul înainte de cercetare ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "(1) Comunică imediat evenimentul (accident cu vătămare — SSM cap. VI); (2) NU modifică locul evenimentului, cu excepția salvării persoanei/înlăturării pericolului iminent; (3) asigură prim-ajutor/asistență medicală; (4) cercetare pt cauze (cuțit pe masă, fără suport — instruciuni de lucru necunoscute/nerespectate, cap. IV); (5) consemnează și propune măsuri: suport pt cuțite, instruire, EIP pt manipulare."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, mută cuțitul înainte de sosire și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "Potrivit regulamentului intern, dă vina pe coleg, fără cercetare și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "SSM Legea 319/2006 cap. VI: eveniment (accident cu vătămare) se comunică imediat; locul NU se modifică, cu excepția salvării/înlăturării pericolului; se cercetează cauzele. cap. IV: respectarea instrucțiunilor de lucru, manipulare corectă uneltele. Căutarea cauzelor (cuțit pe masă, fără suport, lipsă instruire) precede remedierea; NU se mută probele și NU se blamează fără cercetare.",
    "tooltipCorrect": "Comunicare imediată + NU modifici locul (decât salvare) + cercetare cauze + măsuri."
  },
  {
    "id": "SCN-057",
    "section": "Scenarii mixte de examen",
    "topic": "Lista furnizori ca secret + contracte",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 585/2002, art. 4 alin. 3 și art. 8; HG nr. 781/2002, art. 4 și art. 6",
    "type": "single",
    "question": "Un alt furnizor solicită lista furnizorilor actuali ai grădiniței și condițiile contractelor, ca să poată formula o ofertă. Lista este clasificată secret de serviciu. Ce răspuns corect dă Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit procedurii stabilite, refuză verbal și nu explică procedura ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "Potrivit regulamentului intern, O comunică, fiind interesat în ofertă ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "(1) Lista furnizorilor/contractelor poate fi secret de serviciu dacă divulgarea prejudiciază unitatea (HG 585 art. 4 alin. 3) și intră la info necesare doar celor cu atribuții (art. 8); (2) accesul pt un terț NU se acordă pe autorizație internă (HG 781 art. 6) — pt achiziții, se aplică procedura de transparenta/officială; (3) NU se comunică pe bază de solicitare liberă; se redirecționează către procedura legală de achiziții."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, predă lista fără verificări și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "HG 585/2002 art. 4 alin. 3 + art. 8: lista furnizorilor/contractelor poate fi secret de serviciu pt că divulgarea prejudiciaază unitatea, fiind necesară doar celor cu atribuții. HG 781/2002 art. 6: accesul intern pe autorizație; pt terți, NU se comunică pe solicitare liberă, ci se aplică procedura legală de achiziții/transparentă. Administrator NU predă lista, ci redirecționează către procedură.",
    "tooltipCorrect": "Lista furnizori = potential secret (art. 4/8); terții NU primesc pe solicitare, ci prin procedura achiziții."
  },
  {
    "id": "SCN-058",
    "section": "Scenarii mixte de examen",
    "topic": "Doi.copy pe copiator + compromitere",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 1 și art. 11",
    "type": "single",
    "question": "Două copii ale unui document cu secret de serviciu, făcute pe copiator, sunt găsite pe o masă din cancelarie, fără marcă pe pagini, accesibile oricărui vizitator. Ce face Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Conform procedurii interne, le lasă, nu sunt originale și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, le distribuie educaților, pt comoditate și se consemnează în evidentă."
      },
      {
        "id": "C",
        "text": "Conform practicii administrative curente, le aruncă la coș ca măsură curentă de gestiune."
      },
      {
        "id": "D",
        "text": "(1) Recuperează și securizează ambele copii (HG 781 art. 2 — marcare pe fiecare pagină); (2) consemnează multiplicarea în evidentă (art. 1); (3) evaluează riscul de compromitere — accesibile vizitatorilor = risc art. 11, eventual cercetare administrativă + informare; (4) corectează procedura de multiplicare/manipulare și marchează corect paginile."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HG 781/2002 art. 1: multiplicare consemnată în evidentă; art. 2: marcare pe fiecare pagină. art. 11: compromitere (accesibile vizitatorilor) → cercetare administrativă + informare. Copiile au același regim ca informația pe care o poartă; NU se distribuie „de comoditate”, NU se lasă libere și NU se aruncă — se recuperază, se marchează, se consemnează, se apreciază riscul.",
    "tooltipCorrect": "Recuperezi ambele + marcare (art. 2) + evidentă (art. 1) + eventual cercetare (art. 11)."
  },
  {
    "id": "SCN-059",
    "section": "Scenarii mixte de examen",
    "topic": "Bucatarie + recepție cu etichetă pe alimente",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, art. 7; Ordinul ME nr. 4143/2022, Anexa 2",
    "type": "single",
    "question": "Recepționezi un lot de carne pt copii, cu etichetă dar fără specificații/buletin de analiză, în ambalaj murdar. Ce decide Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "(1) art. 7: dovada compoziției prin ETICHETĂ, specificații de la producător sau BULETIN — lipsa specificațiilor/buletinului înseamnă dovada incompletă; (2) ambalaj murdar = risc de contaminare (OM 4143 Anexa 2 — depozitare/corectă, fără contaminare); (3) suspendă/refuză recepția până la dovada completă + ambalaj curat; (4) consemnează și semnalează conducerii; NU se acceptă pe baza etichetei singure cu ambalaj murdar."
      },
      {
        "id": "B",
        "text": "Conform practicii administrative curente, acceptă și curăță ambalajul, fără dovada suplimentară ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În temeiul normelor în vigoare, acceptă dacă mirosul este bun urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, acceptă, fiindcă are etichetă urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "OM 1563/2008 art. 7: operatorul face dovada compoziției prin etichetă, specificații de la producător sau buletin de analiză — eticheta singură cu ambalaj murdar NU constituie dovadă completă. OM 4143/2022 Anexa 2: depozitare corectă, fără contaminare. Ambalajul murdar este risc de contaminare; se suspendă/refuză recepția până la dovada completă + ambalaj curat.",
    "tooltipCorrect": "Dovada art. 7 (etichetă + specificații/buletin) + fără contaminare (Anexa 2); suspendă/refuză."
  },
  {
    "id": "SCN-060",
    "section": "Scenarii mixte de examen",
    "topic": "Inspecție PSI + inchis căi evacuare",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 307/2006, Secțiunea 1 și 6",
    "type": "single",
    "question": "Inspecția PSI găsește că ușa de la sala mare pt evacuare este încuiată cu lacăt și cheia este la un singur salariat, adesea absent pt scurt timp. Ce obligă Administrator II să facă?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, scoate ușa, ca să nu mai fie problemă și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "(1) Căile de evacuare se mențin LIBERE și funcționale (Legea 307 Secțiunea 1) — ușa încuiată cu cheia la un singur salariat blochează evacuarea; (2) stabilește responsabilități prin DISPOZIȚII scrise (Secțiunea 6) pt accesul/cheile; (3) asigură un sistem în care ușa este accesibilă pt evacuare (manetă panica, cheie la mai mulți, supraveghere); (4) instruiește personalul și organizează exerciții de evacuare."
      },
      {
        "id": "C",
        "text": "Potrivit regulamentului intern, trece lacătul pe un alt singur salariat urmărind respectarea normei."
      },
      {
        "id": "D",
        "text": "Conform procedurii interne, lasă lacătul, important este că e încuiată și se raportează conducerii."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Legea 307/2006 Secțiunea 1: căile de evacuare se mențin libere și funcționale; Secțiunea 6: administratorul stabilește responsabilități prin dispoziții scrise, asigură funcționarea, instructaje/exerciții. Ușa încuiată cu cheia la un singur salariat blochează evacuarea; se asigură accesibilitatea (manetă panica/chei distribuite/supraveghere) și NU se mută problema pe alt „single point”.",
    "tooltipCorrect": "Cale de evacuare liberă (Secțiunea 1) + dispoziții scrise pt chei (Secțiunea 6) + exerciții."
  },
  {
    "id": "SCN-061",
    "section": "Scenarii mixte de examen",
    "topic": "Meniu 10% rație energetică + progr școlar",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008, Anexa 2 pct. (3) reg. 2",
    "type": "single",
    "question": "Pt o program de 6 ore, gustarea aportază 5% din rația energetică zilnică. Ce semnalează Administrator II, din perspectiva alimentației, fără a prepara?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza evaluării de rutină, se lasă, copii mănâncă acasă urmărind respectarea normei."
      },
      {
        "id": "B",
        "text": "În aplicarea instrucțiunilor unității, este suficient, gustarea nu contează și se raportează conducerii."
      },
      {
        "id": "C",
        "text": "(1) Meniurile asigură aport conform Anexele 3–4, PROPORȚIONAL cu timpul petrecut în colectivitate — ex. program școlar 6 ore → gustare care asigură 10% din rația energetică zilnică (Anexa 2 reg. 2); (2) 5% NU este conform pt 6 ore; (3) meniul se avizează de personal medical și se aprobă de conducător (Legea 123 art. 11); Administrator II semnalează conducerii ajustarea."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, se dublează cele 5% la 10% ad-hoc ca măsură curentă de gestiune."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "OM 1563/2008 Anexa 2 reg. 2: aportul este proporțional cu timpul petrecut în colectivitate — pt program școlar 6 ore, gustarea asigură 10% din rația energetică zilnică. 5% este sub pragul proporțional. Legea 123/2008 art. 11: meniu avizat medical + aprobat de conducător. Administrator NU ajustează ad-hoc, ci semnalează pt ajustare prin personal medical/conducere.",
    "tooltipCorrect": "10% pt 6 ore (Anexa 2 reg. 2); meniu avizat (art. 11); NU ad-hoc, ci prin medical/conducere."
  },
  {
    "id": "SCN-062",
    "section": "Scenarii mixte de examen",
    "topic": "Reevaluare riscuri + grup sensibil + PSI",
    "difficulty": "scenario",
    "sourceAct": "Legea nr. 319/2006, cap. IV, V, VII; Legea nr. 307/2006, Secțiunea 6",
    "type": "single",
    "question": "O angajată care alăptează este programată la oficiu cu manipulare de detergenți și în apropierea centralei pe gaz. Ce măsuri împreună ia Administrator II?",
    "options": [
      {
        "id": "A",
        "text": "Pe baza dispozițiilor curente, lasă, dacă acceptă ea și se raportează conducerii."
      },
      {
        "id": "B",
        "text": "Conform procedurii interne, îi cere să semneze renunțare ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, O transferă fără să adapteze și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "(1) Angajata care alăptează = grup sensibil (SSM cap. VII) — angajatorul adaptează măsurile de protecție să prevină expunerea la riscuri; (2) NU manipulare detergenți agresivi fără adaptare/EIP; (3) NU amplasare lângă centrală pe gaz (PSI Secțiunea 6 — măsuri de protecție, fără surse necontrolate pt grup sensibil); (4) supraveghere medicală (cap. V), reorganizare atribuții, eventual pauze pt alăptat conform legii muncii."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Legea 319/2006 cap. VII: grupuri sensibile (care alăptează) — angajatorul adaptează măsurile de protecție; cap. V: supraveghere medicală. PSI Legea 307/2006 Secțiunea 6: măsuri de protecție, fără surse necontrolate. Combinat: reorganizare atribuții (fără detergenți agresivi, fără centrală pe gaz în apropiere), EIP, supraveghere medicală, pauze pt alăptat. Acordul angajatei NU elimină obligația angajatorului.",
    "tooltipCorrect": "Grup sensibil (cap. VII) → adaptare atribuții + EIP + supraveghere (cap. V) + fără surse necontrolate (PSI)."
  },
  {
    "id": "SCN-063",
    "section": "Scenarii mixte de examen",
    "topic": "Reproducere document + acces coleg + retractare autorizație",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 6, art. 8, art. 11",
    "type": "single",
    "question": "Un titular cu autorizație de acces reproduce pe copiator un document cu secret de serviciu pt un coleg FĂRĂ atribuții și FĂRĂ autorizație. Ce consecințe cumulează?",
    "options": [
      {
        "id": "A",
        "text": "(1) Accesul celui de-al doilea trebuia să fie pe autorizație (art. 6) — fără autorizație, primirea/evidența este ilegală; (2) multiplicarea se consemnează în evidentă (art. 1); (3) titularul a încălcat reglementările → caz de RETRAGERE a autorizației (art. 8 lit. c) + distrugere pe PV; (4) riscul de compromitere (art. 11) → cercetare administrativă + informare; (5) NU se reduce la o simplă discuție."
      },
      {
        "id": "B",
        "text": "În aplicarea măsurilor prevăzute, doar colegul este vinovat ca măsură curentă de gestiune."
      },
      {
        "id": "C",
        "text": "Potrivit reglementării aplicabile, se scuza prin „colaborare internă” și se raportează conducerii."
      },
      {
        "id": "D",
        "text": "În aplicarea măsurilor prevăzute, niciuna, a avut autorizație el urmărind respectarea normei."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HG 781/2002 art. 6: acces pe autorizație, nu pe „colaborare internă”; art. 1: multiplicare consemnată; art. 8: încălcarea reglementărilor = caz de retragere a autorizației + distrugere pe PV; art. 11: riscul de compromitere → cercetare administrativă. Cei doi au roluri distincte, dar împreună realizează comunicarea neautorizată — consecințe cumulate, NU se reduce la discuție.",
    "tooltipCorrect": "Acces fără autorizație (art. 6) + multiplicare (art. 1) + retragere (art. 8) + art. 11."
  },
  {
    "id": "SCN-064",
    "section": "Scenarii mixte de examen",
    "topic": "Copiator + document pe birou + compromise",
    "difficulty": "scenario",
    "sourceAct": "HG nr. 781/2002, art. 2, art. 4, art. 11",
    "type": "single",
    "question": "Administratorul II găsește pe biroul din sala comună un document cu „secret de serviciu” (marcat doar pe prima pagină) lăsat de un coleg; la ușă, un prelungitor improvizat trece peste el. Care e ordinea acțiunilor?",
    "options": [
      {
        "id": "A",
        "text": "În aplicarea instrucțiunilor unității, repară prelungitorul cu bandă, fără să atingă documentul ca măsură curentă de gestiune."
      },
      {
        "id": "B",
        "text": "(1) Recuperează și securizează documentul (marcare incompletă art. 2; accesibil în sala comună = risc art. 11); (2) deconectează/elibererează prelungitorul improvizat (PSI — fără improvizații electrice); (3) consemnează ambele deficiențe și anunță conducerea; (4) marchează corect paginile, introduce în registru, cercetare administrativă pt risc; NU predominant ordinea „mut prelungitor”, ci protejarea informației și eliminarea riscului electric în paralel."
      },
      {
        "id": "C",
        "text": "În aplicarea măsurilor prevăzute, mută mai întâi prelungitorul, apoi documentul și se consemnează în evidentă."
      },
      {
        "id": "D",
        "text": "În aplicarea instrucțiunilor unității, lasă ambele pe mâine și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HG 781/2002 art. 2: marcare pe fiecare pagină; art. 11: accesibilitatea în sală comună = risc compromitere → cercetare administrativă; art. 4: scoatere/regim. PSI Legea 307/2006: fără improvizații electrice. Două riscuri paralele se abordează în paralel: securizarea documentului + deconectarea prelungitorului, apoi consemnare, marcare corectă, cercetare. NU predominant ordinea, ci acțiunea integrată.",
    "tooltipCorrect": "Recuperezi doc (art. 2/11) + deconectezi prelungitor (PSI) + consemnezi + marchezi + cercetare."
  },
  {
    "id": "SCN-065",
    "section": "Scenarii mixte de examen",
    "topic": "Recapitulare integrată — recepție, dotare, SSM/PSI, info",
    "difficulty": "scenario",
    "sourceAct": "Ordinul MS nr. 1563/2008 + Legea 123/2008 + Ordinul ME nr. 4143/2022 + Legea 319/2006 + Legea 307/2006 + HG 585/2002 + HG 781/2002",
    "type": "single",
    "question": "Într-o săptămână, Administrator II: recepționează un lot cu prag-limită dar fără etichetă, constată un stingător blocat de mobilier, un coleg manipulează detergenți fără EIP, și găsește pe copiator un document cu secret de serviciu nemarcat pe pagini. În ce ordine stabilește prioritatea și ce acționează?",
    "options": [
      {
        "id": "A",
        "text": "Potrivit regulamentului intern, așteaptă o decizie a conducerii pt fiecare și se consemnează în evidentă."
      },
      {
        "id": "B",
        "text": "În temeiul normelor în vigoare, repară totul în ordine cronologică, fără prioritizare urmărind respectarea normei."
      },
      {
        "id": "C",
        "text": "(1) Prioritatea ÎNTÂI: riscurile pt viața/siguranța copiilor și personalului (stingător blocat — PSI; detergenți fără EIP — SSM) + securizarea informației (document nemarcat pe copiator — HG 781); (2) apoi recepția lotului (suspendă/refuză fără dovada art. 7 + Legea 123 art. 10); (3) fiecare deficiență se consemnează și se raportează conducerii (OM 4143 Anexa 2 pt dotări/inventar); (4) NU se lasă copiii în preajma riscurilor și NU se amână securizarea informației. Acțiuni în paralel pe fronturi, NU strict secvențial."
      },
      {
        "id": "D",
        "text": "În temeiul normelor în vigoare, începe cu recepția, fiind cea mai documentată și se consemnează în evidentă."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Recapitulare integrată: prioritatea ÎNTÂI viața/siguranța (PSI + SSM) și securitatea informației (HG 781, fiind compromitere potențială), apoi aspectele alimentare (OM 1563 art. 7 + Legea 123 art. 10). Fiecare deficiență se consemnează și se raportează conducerii (OM 4143 Anexa 2 pt gestionare bunuri). Administrator II NU așteaptă decizii pt riscurile imediate și NU lasă copiii în preajma pericolelor; acționează în paralel pe fronturi.",
    "tooltipCorrect": "Întâi viață/siguranță (PSI+SSM) + securitate info (HG 781), apoi recepție (art. 7+10); consemnezi tot."
  }
] satisfies QuizQuestion[];
