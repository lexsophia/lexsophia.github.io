/* LexSophia TEAP Reading Original Question Bank (60 Questions, Unofficial Practice) */
const TEAP_CONFIG = {
  "exam": "teap",
  "examName": "TEAP（通常版）",
  "officialRefUrls": {
    "construct": "https://www.eiken.or.jp/teap/construct/",
    "faq": "https://www.eiken.or.jp/teap/faq.html",
    "schedule": "https://www.eiken.or.jp/teap/schedule/",
    "modelAnswers": "https://www.eiken.or.jp/teap/construct/model_ans.html"
  },
  "reading": {
    "officialTotalQuestions": 60,
    "officialTimeMinutes": 70,
    "recommendedMinutes": {
      "1": 7,
      "2A": 7,
      "2B": 8,
      "2C": 15,
      "3A": 8,
      "3B": 25
    },
    "parts": [
      {
        "id": "1",
        "name": "Part 1",
        "label": "語彙・語法",
        "officialCount": 20,
        "recMin": 7,
        "slug": "/teap/reading/part-1/"
      },
      {
        "id": "2A",
        "name": "Part 2A",
        "label": "図表読解",
        "officialCount": 5,
        "recMin": 7,
        "slug": "/teap/reading/part-2a/"
      },
      {
        "id": "2B",
        "name": "Part 2B",
        "label": "大学掲示・メール",
        "officialCount": 5,
        "recMin": 8,
        "slug": "/teap/reading/part-2b/"
      },
      {
        "id": "2C",
        "name": "Part 2C",
        "label": "短文学術読解",
        "officialCount": 10,
        "recMin": 15,
        "slug": "/teap/reading/part-2c/"
      },
      {
        "id": "3A",
        "name": "Part 3A",
        "label": "長文の論理・穴埋め",
        "officialCount": 8,
        "recMin": 8,
        "slug": "/teap/reading/part-3a/"
      },
      {
        "id": "3B",
        "name": "Part 3B",
        "label": "長文・図表の詳細理解",
        "officialCount": 12,
        "recMin": 25,
        "slug": "/teap/reading/part-3b/"
      }
    ]
  }
};

const TEAP_READING_STIMULI = {
  "stim-2b-1": {
    "id": "stim-2b-1",
    "part": "2B",
    "title": "Campus Notice / E-mail 1",
    "body": "NOTICE: Fall Course Add/Drop Period\nStudents may add or drop lecture courses online without penalty until Friday, September 18 at 5:00 P.M. Laboratory courses with limited seating require written approval from the instructor before dropping. After September 18, withdrawing from any course requires a petition to the Academic Office and will appear as 'W' on the transcript. Tuition refunds apply only to drops completed by September 11."
  },
  "stim-2b-2": {
    "id": "stim-2b-2",
    "part": "2B",
    "title": "Campus Notice / E-mail 2",
    "body": "From: Main Library Circulation Desk\nSubject: Extended Hours for Final Exams\nFrom Monday, January 12 through Friday, January 23, the Main Library will remain open until midnight instead of 9:00 P.M. Please note that the Reference Desk and Book Checkout Counter will still close at 8:30 P.M.; only self-checkout kiosks will operate afterward. Group study rooms on the third floor must be reserved online at least two hours ahead, and food is permitted only in the ground-floor lounge."
  },
  "stim-2b-3": {
    "id": "stim-2b-3",
    "part": "2B",
    "title": "Campus Notice / E-mail 3",
    "body": "To: All Residence Hall Students\nSubject: Spring Break Dormitory Checkout\nAll undergraduate dormitories will close at noon on Saturday, March 14. Students who are not staying for the break must unplug all appliances, empty trash bins, and return their room keys to the front desk before departing. International students and varsity athletes who need break housing must register on the Housing Portal by Wednesday, March 4; late applicants will be charged a $45 administrative fee."
  },
  "stim-2b-4": {
    "id": "stim-2b-4",
    "part": "2B",
    "title": "Campus Notice / E-mail 4",
    "body": "ANNOUNCEMENT: Global Fieldwork Scholarship\nThe International Studies Center is accepting applications for summer research grants of up to $1,500. Applicants must be full-time sophomores or juniors with a minimum GPA of 3.2. First-year students are not eligible, and seniors may apply only if they are continuing into a graduate program at this university in the fall. All candidates must submit a two-page research proposal and one faculty recommendation letter by April 10."
  },
  "stim-2b-5": {
    "id": "stim-2b-5",
    "part": "2B",
    "title": "Campus Notice / E-mail 5",
    "body": "From: Prof. Helena Meyer\nTo: Environmental Science 204 Students\nSubject: Revised Field Report Submission\nDue to scheduled maintenance on the university server this Sunday evening, the online submission portal will be offline from 6:00 P.M. to 11:00 P.M. Therefore, the deadline for your Water Quality Field Report has been moved from Sunday at 9:00 P.M. to Monday at 1:00 P.M. Please upload your report as a single PDF file; do not send reports by e-mail unless you receive a technical error message from the portal."
  },
  "stim-2c-1": {
    "id": "stim-2c-1",
    "part": "2C",
    "title": "Urban Cooling Through Street Trees",
    "body": "Many large cities experience the urban heat island effect, in which asphalt roads and concrete buildings absorb solar radiation and raise local temperatures by several degrees. Planting rows of street trees offers a cost-effective response. Beyond casting direct shade over sidewalks and parked vehicles, trees cool surrounding air through transpiration, a process in which water vapor is released from leaves. Recent measurements in three temperate cities showed that tree-lined avenues remained up to three degrees cooler on summer afternoons than nearby treeless streets. City planners note, however, that selecting drought-tolerant native species is essential so that maintenance costs stay manageable during dry summers."
  },
  "stim-2c-2": {
    "id": "stim-2c-2",
    "part": "2C",
    "title": "The Testing Effect in Memory",
    "body": "Students preparing for university examinations often spend hours rereading highlighted textbook chapters. Cognitive psychologists, however, have repeatedly demonstrated that actively retrieving information from memory—known as the testing effect—produces far stronger long-term retention than passive rereading. In one controlled study, two groups read an unfamiliar science passage. Group A reread the text three times, while Group B read it once and then wrote down everything they could recall without looking at the page. Five minutes later, Group A scored slightly higher, but one week later, Group B remembered nearly fifty percent more key concepts."
  },
  "stim-2c-3": {
    "id": "stim-2c-3",
    "part": "2C",
    "title": "Honeybee Navigation on Cloudy Days",
    "body": "Honeybees rely heavily on the position of the sun as a compass when flying between their hive and distant flower patches. Even when thick clouds completely hide the sun from human eyes, honeybees rarely lose their direction. Researchers discovered that bees possess specialized photoreceptors in the upper region of their compound eyes that detect patterns of polarized ultraviolet light scattered across the sky. Because these polarization patterns remain directly linked to the sun's true location, bees can calculate their flight angle as long as a small patch of blue sky is visible."
  },
  "stim-2c-4": {
    "id": "stim-2c-4",
    "part": "2C",
    "title": "Why Free Samples Influence Purchasing",
    "body": "Supermarkets frequently offer small taste samples of new snacks or beverages near store entrances. Although giving away products appears to reduce short-term revenue, behavioral economists explain that free samples trigger a psychological norm called reciprocity—the tendency to feel obligated to return a favor. Shoppers who accept a sample often experience a subtle desire to reciprocate by purchasing the featured item or spending more time browsing nearby shelves. In addition, tasting removes uncertainty about unfamiliar flavors, which is one of the primary barriers to trying a new brand."
  },
  "stim-2c-5": {
    "id": "stim-2c-5",
    "part": "2C",
    "title": "Standardized Time and the Railroads",
    "body": "Before the late nineteenth century, most towns across North America set their clocks according to local solar noon, meaning that neighboring cities just fifty kilometers apart could differ by several minutes. While this system worked well for agricultural communities, it created serious scheduling hazards once express railroads linked distant regions. A single train line might pass through dozens of local time zones in one day, increasing the risk of collisions on shared tracks. In 1883, major railway companies voluntarily adopted four standardized regional time zones—a practical reform that national governments later codified into law."
  },
  "stim-2c-6": {
    "id": "stim-2c-6",
    "part": "2C",
    "title": "Biodegradable Packaging from Seaweed",
    "body": "Single-use plastic wrappers remain one of the most persistent sources of marine litter because conventional polymers can take centuries to break down. In response, materials scientists have developed thin packaging films made from brown seaweed extracts. Unlike corn-based bioplastics, which often require industrial composting facilities operating at high temperatures, seaweed films dissolve naturally in home compost or seawater within a few weeks. Moreover, cultivating seaweed requires neither arable land nor freshwater irrigation, making it an attractive raw material for coastal regions."
  },
  "stim-2c-7": {
    "id": "stim-2c-7",
    "part": "2C",
    "title": "Short Breaks and Workplace Focus",
    "body": "For decades, office productivity was often measured by how many uninterrupted hours an employee remained seated at a desk. Recent ergonomic and cognitive research challenges this assumption. Studies tracking knowledge workers show that mental fatigue builds steadily after about fifty minutes of continuous screen work, leading to slower decision-making and more frequent typing errors. Taking brief five-minute breaks—especially stepping away from screens to stretch or look at distant objects—restores visual comfort and helps workers maintain consistent accuracy throughout the afternoon."
  },
  "stim-2c-8": {
    "id": "stim-2c-8",
    "part": "2C",
    "title": "Loanwords and Cultural Exchange",
    "body": "Languages continuously borrow vocabulary from one another whenever communities interact through trade, migration, or scholarship. Linguists observe that borrowed terms, or loanwords, rarely remain identical to their original forms. Instead, speakers adapt both pronunciation and grammar to fit the patterns of the receiving language. In some cases, a loanword even shifts in meaning over time, narrowing to describe a specific cultural item rather than its broader sense in the source language. Far from weakening a language, this ongoing adaptation demonstrates its flexibility."
  },
  "stim-2c-9": {
    "id": "stim-2c-9",
    "part": "2C",
    "title": "Third Places in Modern Neighborhoods",
    "body": "Sociologists use the term 'third places' to describe informal public gathering spots—such as community libraries, neighborhood parks, and independent coffee shops—that exist outside the home (the first place) and the workplace (the second place). Unlike formal clubs, third places welcome visitors of diverse ages and backgrounds without strict membership requirements. Research indicates that neighborhoods rich in accessible third places report higher levels of mutual trust among residents and lower rates of social isolation among older adults."
  },
  "stim-2c-10": {
    "id": "stim-2c-10",
    "part": "2C",
    "title": "Night Trains Return to Europe",
    "body": "For several decades, low-cost airlines steadily reduced demand for overnight passenger trains across Europe. In recent years, however, sleeper rail services have experienced a notable revival. Environmental awareness has played a major role: rail travel produces a fraction of the carbon emissions per passenger compared with short-haul flights. In addition, modern sleeper carriages now feature quieter cabins, reliable Wi-Fi, and individual power outlets, allowing business and leisure travelers alike to arrive in city centers early in the morning without airport transfers."
  },
  "stim-3a-1": {
    "id": "stim-3a-1",
    "part": "3A",
    "title": "How Public Libraries Adapt to the Digital Era",
    "body": "When digital e-books and online search engines became widespread in the early 2000s, many commentators predicted that physical public libraries would soon become obsolete. [ 1 ], attendance figures in numerous municipalities tell a very different story. Rather than disappearing, libraries have redefined their role as community learning hubs.\n\nOne major reason for this resilience is the persistent digital divide. Although high-speed Internet feels universal in wealthy districts, millions of households still lack reliable home broadband or personal computers. Public libraries bridge this gap by offering free Wi-Fi, desktop terminals, and staff-led workshops on digital literacy. [ 2 ], job seekers and older residents depend on these services to complete online applications and access public healthcare portals.\n\nLibraries have also redesigned their interior spaces to match changing study habits. Traditional rows of silent bookshelves now share floor space with collaborative meeting rooms, quiet reading zones, and maker labs equipped with 3D printers. Because these facilities are open to everyone regardless of income, [ 3 ] encourage social interaction across generations.\n\nFunding, of course, remains an ongoing challenge. Municipal budgets fluctuate from year to year, and licensing fees for digital e-books are often far higher for libraries than for individual consumers. Even so, urban researchers argue that investing in libraries delivers strong social returns. By combining physical community space with equitable access to information, modern libraries continue to [ 4 ] an irreplaceable function in democratic societies."
  },
  "stim-3a-2": {
    "id": "stim-3a-2",
    "part": "3A",
    "title": "Microplastics in Freshwater Rivers",
    "body": "Much of the early scientific attention on plastic pollution focused on the open ocean, where floating debris forms vast accumulation zones. More recent fieldwork, [ 1 ], has revealed that inland rivers and lakes carry surprisingly high concentrations of microplastics—tiny synthetic fragments smaller than five millimeters.\n\nThese particles originate from multiple everyday sources. Synthetic clothing sheds thousands of microscopic fibers during a single laundry cycle, and vehicle tires release rubber dust onto roadways with every kilometer driven. When rain washes urban surfaces, [ 2 ] particles are swept into storm drains and eventually enter river systems.\n\nOnce in freshwater ecosystems, microplastics can be ingested by insects, small fish, and filter-feeding mussels. Laboratory experiments suggest that ingesting plastic reduces the energy available for growth and reproduction, because animals spend effort processing indigestible material. [ 3 ], microplastics can absorb industrial pollutants already present in the water, potentially transferring harmful chemicals up the food chain.\n\nAddressing this problem requires coordinated solutions rather than relying solely on river cleanups. Engineers are developing finer washing-machine filters to capture fibers before wastewater leaves homes, while textile researchers are testing natural plant-based blends that shed less easily. Ultimately, reducing microplastic pollution at its source is far more [ 4 ] than attempting to remove microscopic fragments after they disperse across an entire watershed."
  },
  "stim-3b-1": {
    "id": "stim-3b-1",
    "part": "3B",
    "title": "Vertical Farming and Urban Food Resilience",
    "body": "As global urban populations expand, cities face growing pressure to secure fresh produce without clearing additional farmland. One emerging approach is vertical farming—growing leafy greens, herbs, and berries indoors on stacked shelves under controlled LED lighting. Because plants are cultivated in nutrient-rich water or mist rather than soil, vertical farms can operate inside converted warehouses located only kilometers from city supermarkets.\n\nAdvocates highlight several environmental benefits. Closed-loop irrigation systems recycle evaporated moisture, enabling indoor farms to use up to 90 percent less water than open-field agriculture. Controlled environments also eliminate most agricultural runoff and allow year-round harvests regardless of frost, storms, or drought. In addition, locating farms close to consumers shortens refrigerated truck transport, which reduces food spoilage during transit.\n\nDespite these strengths, agricultural economists caution that vertical farming is not a universal replacement for conventional fields. Artificial lighting, climate control, and air circulation require substantial electricity. Unless a facility draws power from low-carbon renewable sources, its carbon footprint per kilogram of lettuce can actually exceed that of field-grown produce shipped from warmer regions. Furthermore, staple calorie crops such as wheat, rice, and maize grow too tall and require too much light energy to be economically viable indoors.\n\nRecent pilot projects therefore emphasize a hybrid food strategy. Rather than competing with rural grain farms, urban vertical facilities focus on perishable, high-value crops like spinach and basil, especially during winter months when outdoor local harvests pause. As LED efficiency improves and solar microgrids become cheaper, researchers expect vertical farms to serve as a reliable supplement that stabilizes urban supply chains during extreme weather events.",
    "chartData": {
      "type": "table",
      "title": "Comparison of Lettuce Production Methods (Per 1 kg Harvested)",
      "subtitle": "Illustrative University Agronomy Model",
      "headers": [
        "Metric",
        "Open-Field Farm",
        "Greenhouse",
        "Vertical Farm"
      ],
      "rows": [
        [
          "Water Use (Liters)",
          "250 L",
          "60 L",
          "25 L"
        ],
        [
          "Electricity Use (kWh)",
          "0.4 kWh",
          "2.1 kWh",
          "9.5 kWh"
        ],
        [
          "Transport Distance (km)",
          "800 km",
          "180 km",
          "15 km"
        ],
        [
          "Harvest Cycles / Year",
          "2–3",
          "6–8",
          "14–16"
        ]
      ],
      "alt": "Table comparing Open-Field, Greenhouse, and Vertical Farm lettuce production per 1 kg: Water 250L/60L/25L, Electricity 0.4/2.1/9.5 kWh, Transport 800/180/15 km, Harvest Cycles 2-3/6-8/14-16."
    }
  },
  "stim-3b-2": {
    "id": "stim-3b-2",
    "part": "3B",
    "title": "Bilingualism and Executive Attention Across the Lifespan",
    "body": "For much of the twentieth century, some educators worried that exposing young children to two languages simultaneously might slow vocabulary development or cause linguistic confusion. Over the past three decades, however, developmental linguistics and neuroimaging studies have largely overturned that concern. Although bilingual children may initially have slightly smaller vocabularies in each individual language compared with monolingual peers, their combined conceptual vocabulary across both languages is typically equal or larger, and single-language gaps generally disappear by mid-elementary school.\n\nA more active area of research examines whether managing two languages influences broader cognitive skills—particularly executive attention, the mental system used to switch between tasks and ignore distractions. Brain-imaging experiments reveal that when a bilingual speaker uses one language, the other language does not shut off completely; both remain active simultaneously. Constantly selecting the appropriate language while suppressing the other provides regular mental exercise for prefrontal brain networks.\n\nStill, psychologists emphasize that the evidence is nuanced rather than absolute. Early small-scale studies reported clear advantages for bilinguals on laboratory attention tasks, whereas several large recent replications found smaller or inconsistent differences among young healthy adults, whose attention systems are already operating at peak efficiency. More consistent benefits appear at both ends of the lifespan—among young children developing self-regulation and among older adults maintaining cognitive flexibility.\n\nResearchers now focus less on a simple 'bilingual versus monolingual' label and more on daily language experience. Factors such as age of acquisition, frequency of switching between languages, and whether both languages are used in diverse social settings all shape cognitive outcomes. In short, bilingualism is best understood not as a fixed trait, but as a dynamic spectrum of everyday practice.",
    "chartData": {
      "type": "bar",
      "title": "Average Task-Switching Error Rate by Age Group (%)",
      "subtitle": "Illustrative Cognitive Lab Study (Lower = Better Accuracy)",
      "unit": "%",
      "labels": [
        "Ages 8–10 (Mono)",
        "Ages 8–10 (Bi)",
        "Ages 20–25 (Mono)",
        "Ages 20–25 (Bi)",
        "Ages 65+ (Mono)",
        "Ages 65+ (Bi)"
      ],
      "values": [
        18,
        13,
        7,
        6,
        21,
        14
      ],
      "alt": "Bar chart of task-switching error rates (lower is better): Ages 8-10 Mono 18% vs Bi 13%; Ages 20-25 Mono 7% vs Bi 6%; Ages 65+ Mono 21% vs Bi 14%."
    }
  }
};

const TEAP_READING_BANK = [
  {
    "id": "teap-r1-01",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "research",
    "difficulty": "B1",
    "questionType": "academic-verb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Before publishing their findings, the biologists conducted three additional trials to (   ) the accuracy of the initial measurements.",
    "options": [
      "verify",
      "imitate",
      "occupy",
      "postpone"
    ],
    "correctIndex": 0,
    "explanationJa": "「初期測定の正確さを検証する（verify）」が文脈に最適。研究結果の公表前に追加実験を行う目的に一致します。",
    "translationJa": "研究結果を発表する前に、生物学者たちは初期測定の正確さを検証するためにさらに3回の試験を行った。",
    "evidence": "additional trials to (verify) the accuracy of the initial measurements",
    "distractorReasons": [
      "正解：verify（検証する・確かめる）が「正確さを確認する」文脈に一致。",
      "imitate（模倣する）は正確さを確かめる行為に合わない。",
      "occupy（占める）は目的語 the accuracy と結びつかない。",
      "postpone（延期する）は追加試験を行う目的と矛盾する。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-02",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "environment",
    "difficulty": "B1",
    "questionType": "academic-noun",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Rising ocean temperatures have caused a noticeable (   ) in the migration routes of several coastal fish species.",
    "options": [
      "shift",
      "remedy",
      "margin",
      "verdict"
    ],
    "correctIndex": 0,
    "explanationJa": "回遊ルートにおける顕著な「変化・移動（shift）」が正解。",
    "translationJa": "海水温の上昇により、いくつかの沿岸魚種の回遊ルートに顕著な変化が生じている。",
    "evidence": "a noticeable (shift) in the migration routes",
    "distractorReasons": [
      "正解：shift（変化・移行）はルートの変化を自然に表す。",
      "remedy（治療法・改善策）は自然現象の結果に合わない。",
      "margin（余白・差）はルートの変化を指さない。",
      "verdict（評決・判断）は法的・評価的文脈の語。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-03",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "education",
    "difficulty": "A2",
    "questionType": "academic-adjective",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Because the introductory seminar fills up quickly, early registration is (   ) for first-year students planning to major in economics.",
    "options": [
      "essential",
      "fragile",
      "shallow",
      "modest"
    ],
    "correctIndex": 0,
    "explanationJa": "導入ゼミはすぐ満席になるため、早期登録が「不可欠（essential）」であるという因果関係。",
    "translationJa": "導入セミナーはすぐに満席になるため、経済学専攻を予定する1年生にとって早期登録は不可欠である。",
    "evidence": "fills up quickly, early registration is (essential)",
    "distractorReasons": [
      "正解：essential（不可欠な）が満席になりやすい状況と論理的に一致。",
      "fragile（壊れやすい）は登録の性質に合わない。",
      "shallow（浅い）は文脈に不適切。",
      "modest（控えめな）は早期登録の必要性を表せない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-04",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "technology",
    "difficulty": "B1",
    "questionType": "academic-adverb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Although the new battery prototype costs slightly more to manufacture, it charges (   ) faster than conventional lithium cells.",
    "options": [
      "substantially",
      "narrowly",
      "reluctantly",
      "casually"
    ],
    "correctIndex": 0,
    "explanationJa": "比較級 faster を強調する「大幅に（substantially）」が最適。",
    "translationJa": "新しい試作バッテリーは製造コストがわずかに高いものの、従来のリチウム電池より大幅に速く充電できる。",
    "evidence": "charges (substantially) faster than conventional lithium cells",
    "distractorReasons": [
      "正解：substantially（大幅に）は比較級 faster を自然に強める。",
      "narrowly（かろうじて）は高速充電の利点と噛み合わない。",
      "reluctantly（しぶしぶ）は電池の動作に使えない。",
      "casually（気軽に）は充電速度の修飾語として不自然。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-05",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "psychology",
    "difficulty": "B2",
    "questionType": "academic-verb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Participants who slept fewer than five hours struggled to (   ) complex visual details during the afternoon memory test.",
    "options": [
      "retain",
      "assign",
      "compel",
      "endure"
    ],
    "correctIndex": 0,
    "explanationJa": "記憶テストにおいて視覚的細部を「記憶にとどめる・保持する（retain）」が正解。",
    "translationJa": "睡眠時間が5時間未満だった参加者は、午後の記憶テストで複雑な視覚的細部を保持するのに苦労した。",
    "evidence": "struggled to (retain) complex visual details during the afternoon memory test",
    "distractorReasons": [
      "正解：retain（保持する・記憶にとどめる）が記憶テストの文脈に一致。",
      "assign（割り当てる）は記憶テストの被験者動作に合わない。",
      "compel（強いる）は人・行動を目的語にとる。",
      "endure（耐える）は visual details を記憶する意味にならない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-06",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "economics",
    "difficulty": "B1",
    "questionType": "academic-noun",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "The municipal government offered tax reductions as a financial (   ) for small businesses to adopt renewable heating systems.",
    "options": [
      "incentive",
      "obstacle",
      "symptom",
      "interval"
    ],
    "correctIndex": 0,
    "explanationJa": "再生可能暖房システムの導入を促す経済的「誘因・インセンティブ（incentive）」が正解。",
    "translationJa": "市当局は中小企業が再生可能エネルギー暖房を導入するための経済的誘因として減税を提供した。",
    "evidence": "tax reductions as a financial (incentive)",
    "distractorReasons": [
      "正解：incentive（誘因・奨励策）が減税の目的に合致。",
      "obstacle（障害）は減税の目的と逆の意味になる。",
      "symptom（症状・兆候）は政策手段に合わない。",
      "interval（間隔）は経済的動機を表さない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-07",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "campus-life",
    "difficulty": "A2",
    "questionType": "collocation",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Students wishing to borrow rare manuscripts from the archive must submit a signed request form at least three days (   ).",
    "options": [
      "in advance",
      "by chance",
      "at random",
      "on strike"
    ],
    "correctIndex": 0,
    "explanationJa": "「少なくとも3日前に（in advance）」は学術・事務手続きの定番表現。",
    "translationJa": "書庫から希少な手稿を借りたい学生は、少なくとも3日前に署名入りの申請書を提出しなければならない。",
    "evidence": "at least three days (in advance)",
    "distractorReasons": [
      "正解：in advance（前もって・事前に）が予約手続きに一致。",
      "by chance（偶然に）は申請手続きの条件に合わない。",
      "at random（無作為に）は日数表現 three days と不自然。",
      "on strike（ストライキ中で）は文脈無関係。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-08",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "health",
    "difficulty": "B1",
    "questionType": "academic-verb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Regular brisk walking can (   ) the risk of cardiovascular disease even among adults who begin exercising in middle age.",
    "options": [
      "diminish",
      "provoke",
      "inherit",
      "fabricate"
    ],
    "correctIndex": 0,
    "explanationJa": "定期的な早歩きが心血管疾患のリスクを「減らす（diminish）」が正解。",
    "translationJa": "定期的な早歩きは、中年期から運動を始める成人であっても心血管疾患のリスクを減らすことができる。",
    "evidence": "Regular brisk walking can (diminish) the risk",
    "distractorReasons": [
      "正解：diminish（減少させる）がリスク低減の文脈に一致。",
      "provoke（引き起こす・刺激する）は健康効果と逆。",
      "inherit（受け継ぐ）は運動によるリスク変化に合わない。",
      "fabricate（捏造する）は疾患リスクに使えない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-09",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "sociology",
    "difficulty": "B2",
    "questionType": "academic-adjective",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Because the survey relied exclusively on volunteers from a single urban district, its conclusions cannot be considered (   ) of the national population.",
    "options": [
      "representative",
      "consecutive",
      "destructive",
      "affirmative"
    ],
    "correctIndex": 0,
    "explanationJa": "「be representative of 〜（〜を代表する・典型的な）」は社会調査の重要コロケーション。",
    "translationJa": "その調査は単一の都市地区のボランティアのみに依存していたため、結論は全国民を代表するものとはみなせない。",
    "evidence": "cannot be considered (representative) of the national population",
    "distractorReasons": [
      "正解：representative（代表する）が標本バイアスの議論に一致。",
      "consecutive（連続した）は前置詞 of とこの意味で結びつかない。",
      "destructive（破壊的な）は調査結果の妥当性に合わない。",
      "affirmative（肯定的な）は代表性の文脈に合わない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-10",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "history",
    "difficulty": "B1",
    "questionType": "academic-noun",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Archaeologists uncovered pottery fragments that provide clear (   ) of long-distance maritime trade during the Bronze Age.",
    "options": [
      "evidence",
      "permission",
      "shelter",
      "jealousy"
    ],
    "correctIndex": 0,
    "explanationJa": "青銅器時代の遠距離海上交易の明確な「証拠（evidence）」を示す土器片。",
    "translationJa": "考古学者たちは、青銅器時代の遠距離海上交易の明確な証拠となる土器片を発掘した。",
    "evidence": "provide clear (evidence) of long-distance maritime trade",
    "distractorReasons": [
      "正解：evidence（証拠）が考古学的発見の役割に一致。",
      "permission（許可）は土器片が示す内容に合わない。",
      "shelter（避難所）は文脈不適切。",
      "jealousy（嫉妬）は交易の証明と無関係。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-11",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "science",
    "difficulty": "B2",
    "questionType": "academic-verb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "The chemical coating is designed to (   ) moisture from penetrating the outer layer of the wooden museum artifacts.",
    "options": [
      "prevent",
      "persuade",
      "propose",
      "predict"
    ],
    "correctIndex": 0,
    "explanationJa": "「prevent A from -ing（Aが〜するのを防ぐ）」の定型語法。",
    "translationJa": "その化学コーティングは、湿気が木製の博物館収蔵品の外層に浸透するのを防ぐように設計されている。",
    "evidence": "(prevent) moisture from penetrating the outer layer",
    "distractorReasons": [
      "正解：prevent（防ぐ）は prevent O from -ing の構文を取る。",
      "persuade（説得する）は無生物の moisture を目的語にとれない。",
      "propose（提案する）は from -ing の語法を取らない。",
      "predict（予測する）は防湿コーティングの目的と合わない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-12",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "transport",
    "difficulty": "B1",
    "questionType": "academic-noun",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Expanding dedicated bicycle lanes along commuter routes has eased morning traffic (   ) near the central station.",
    "options": [
      "congestion",
      "affection",
      "nutrition",
      "ambition"
    ],
    "correctIndex": 0,
    "explanationJa": "朝の交通「渋滞（congestion）」を緩和した、という定番コロケーション（traffic congestion）。",
    "translationJa": "通勤路沿いに自転車専用レーンを拡充したことで、中央駅付近の朝の交通渋滞が緩和された。",
    "evidence": "eased morning traffic (congestion)",
    "distractorReasons": [
      "正解：congestion（混雑・渋滞）が traffic と自然に結びつく。",
      "affection（愛情）は交通と無関係。",
      "nutrition（栄養）は文脈不適切。",
      "ambition（野心）は交通状況を表せない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-13",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "media",
    "difficulty": "B2",
    "questionType": "academic-adjective",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "While headline summaries are convenient, readers who rely only on brief alerts often miss the (   ) context behind policy debates.",
    "options": [
      "broader",
      "steeper",
      "tighter",
      "louder"
    ],
    "correctIndex": 0,
    "explanationJa": "政策議論の背後にある「より広い（broader）」文脈を見落とす、が自然。",
    "translationJa": "見出しの要約は便利だが、短い速報だけに頼る読者は政策議論の背後にあるより広い文脈を見落としがちである。",
    "evidence": "miss the (broader) context behind policy debates",
    "distractorReasons": [
      "正解：broader（より広い）は context と頻出のコロケーション。",
      "steeper（より急な）は勾配・価格などに使う。",
      "tighter（よりきつい）は文脈の広がりを表さない。",
      "louder（よりうるさい）は抽象名詞 context に合わない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-14",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "culture",
    "difficulty": "B1",
    "questionType": "phrasal-verb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Several regional festivals were canceled in the 1990s, but local youth groups have recently worked to (   ) the traditional dances.",
    "options": [
      "bring back",
      "turn down",
      "break into",
      "give away"
    ],
    "correctIndex": 0,
    "explanationJa": "途絶えた伝統舞踊を「復活させる（bring back）」が文脈に一致。",
    "translationJa": "1990年代にいくつかの地域祭りが中止されたが、近年地元の若者団体が伝統舞踊を復活させようと取り組んでいる。",
    "evidence": "canceled in the 1990s, but ... worked to (bring back) the traditional dances",
    "distractorReasons": [
      "正解：bring back（復活させる・取り戻す）が中止後の再興に一致。",
      "turn down（断る・音量を下げる）は文脈と逆。",
      "break into（侵入する）は舞踊の再興に合わない。",
      "give away（無料で配る・秘密を漏らす）は不適切。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-15",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "research",
    "difficulty": "B2",
    "questionType": "academic-verb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "The committee rejected the grant application because the proposed timeline failed to (   ) potential delays in equipment delivery.",
    "options": [
      "account for",
      "interfere with",
      "depend upon",
      "conform to"
    ],
    "correctIndex": 0,
    "explanationJa": "「account for 〜（〜を考慮に入れる・説明する）」が申請却下の理由として最適。",
    "translationJa": "提案された日程が機材納品の遅れの可能性を考慮に入れていなかったため、委員会は助成金申請を却下した。",
    "evidence": "failed to (account for) potential delays",
    "distractorReasons": [
      "正解：account for（考慮に入れる）が計画の不備を的確に表す。",
      "interfere with（妨害する）は意味が通らない。",
      "depend upon（〜に依存する）は遅れに依存する意味になり不自然。",
      "conform to（〜に従う）は delays と合わない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-16",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "education",
    "difficulty": "B1",
    "questionType": "academic-noun",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "To help international students adjust to academic writing, the university offers free individual (   ) throughout the semester.",
    "options": [
      "consultations",
      "decorations",
      "migrations",
      "excavations"
    ],
    "correctIndex": 0,
    "explanationJa": "留学生の論文執筆を支援する無料の個別「相談（consultations）」。",
    "translationJa": "留学生が学術的な文章作成に慣れるのを助けるため、大学は学期中ずっと無料の個別相談を提供している。",
    "evidence": "offers free individual (consultations)",
    "distractorReasons": [
      "正解：consultations（相談・個別指導）が大学ライティング支援に一致。",
      "decorations（装飾）は学習支援と無関係。",
      "migrations（移住）は文脈に合わない。",
      "excavations（発掘）は学術執筆支援と無関係。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-17",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "environment",
    "difficulty": "B2",
    "questionType": "academic-adjective",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Wetlands play a (   ) role in filtering agricultural runoff before rainwater reaches major drinking-water reservoirs.",
    "options": [
      "vital",
      "vague",
      "rigid",
      "spare"
    ],
    "correctIndex": 0,
    "explanationJa": "「play a vital role in 〜（〜において極めて重要な役割を果たす）」の定番表現。",
    "translationJa": "湿地は、雨水が主要な飲料水貯水池に届く前に農業排水をろ過する上で極めて重要な役割を果たしている。",
    "evidence": "play a (vital) role in filtering agricultural runoff",
    "distractorReasons": [
      "正解：vital（極めて重要な）が role と定番コロケーションを作る。",
      "vague（曖昧な）はろ過機能の重要性に合わない。",
      "rigid（厳格な・硬い）は生態系の役割に不自然。",
      "spare（予備の）は文脈に合わない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-18",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "economics",
    "difficulty": "B2",
    "questionType": "academic-adverb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Consumer spending grew slowly during the first quarter, yet online retail sales expanded (   ) over the same period.",
    "options": [
      "rapidly",
      "barely",
      "falsely",
      "mildly"
    ],
    "correctIndex": 0,
    "explanationJa": "対比の yet（しかし）により、slowly（ゆっくり）の反対である「急速に（rapidly）」が入る。",
    "translationJa": "第1四半期の個人消費の伸びは緩やかだったが、同期間のオンライン小売売上は急速に拡大した。",
    "evidence": "grew slowly ... yet online retail sales expanded (rapidly)",
    "distractorReasons": [
      "正解：rapidly（急速に）が対比の yet と slowly にきれいに呼応。",
      "barely（ほとんど〜ない）は対比にならず不自然。",
      "falsely（誤って）は売上拡大の修飾に合わない。",
      "mildly（穏やかに）は slowly と対比にならない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-19",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "international",
    "difficulty": "B2",
    "questionType": "academic-noun",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "Diplomats from twelve nations reached a tentative (   ) on sharing satellite weather data to improve early storm warnings.",
    "options": [
      "consensus",
      "rehearsal",
      "inventory",
      "appetite"
    ],
    "correctIndex": 0,
    "explanationJa": "12カ国の外交官が暫定的な「合意（consensus）」に達した（reach a consensus）。",
    "translationJa": "12カ国の外交官は、早期嵐警報を改善するために衛星気象データを共有することで暫定的な合意に達した。",
    "evidence": "reached a tentative (consensus) on sharing satellite weather data",
    "distractorReasons": [
      "正解：consensus（合意・意見の一致）が reach a ... on 〜 と結びつく。",
      "rehearsal（リハーサル）は外交協議の結果に合わない。",
      "inventory（在庫）は文脈不適切。",
      "appetite（食欲・欲求）は合意形成に合わない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r1-20",
    "exam": "teap",
    "skill": "reading",
    "part": "1",
    "setId": "set-1",
    "topic": "campus-life",
    "difficulty": "B1",
    "questionType": "academic-verb",
    "stimulusId": null,
    "instruction": "Choose the best word or phrase to complete each sentence.",
    "question": "All laboratory notebooks must be clearly labeled so that instructors can (   ) each student's experimental procedures.",
    "options": [
      "evaluate",
      "evacuate",
      "exaggerate",
      "evaporate"
    ],
    "correctIndex": 0,
    "explanationJa": "教員が学生の実験手順を「評価する（evaluate）」ためにラベルを明記する。",
    "translationJa": "教員が各学生の実験手順を評価できるよう、すべての実験ノートには明確にラベルを貼らなければならない。",
    "evidence": "instructors can (evaluate) each student's experimental procedures",
    "distractorReasons": [
      "正解：evaluate（評価する）が教員の役割に一致。",
      "evacuate（避難させる）は綴りが似たひっかけ。",
      "exaggerate（誇張する）は文脈不適切。",
      "evaporate（蒸発する）は綴りが似たひっかけ。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2a-01",
    "exam": "teap",
    "skill": "reading",
    "part": "2A",
    "setId": "set-2a-1",
    "topic": "education",
    "difficulty": "B1",
    "questionType": "bar-chart",
    "stimulusId": null,
    "instruction": "Look at the chart or table and choose the best answer to each question.",
    "question": "According to the chart, which statement is true about the surveyed students?",
    "options": [
      "More than half of the students prefer studying at home or in a dorm.",
      "The Main Library is more than twice as popular as the Campus Cafe.",
      "Study Lounges are preferred by more students than Campus Cafes.",
      "Fewer than 60% of students choose either the Main Library or Home / Dorm."
    ],
    "correctIndex": 1,
    "explanationJa": "Main Library（38%）は Campus Cafe（16%）の2倍（32%）を上回っているため、選択肢2が数学的に正確です。",
    "translationJa": "図によると、調査対象となった学生について正しい記述はどれか。",
    "evidence": "Main Library: 38%, Campus Cafe: 16% (16 × 2 = 32 < 38)",
    "distractorReasons": [
      "Home/Dormは29%で過半数（50%超）ではない。",
      "正解：38%は16%の2倍（32%）より大きい。",
      "Study Lounge（12%）はCampus Cafe（16%）より少ない。",
      "38% + 29% = 67%なので60%未満ではない。"
    ],
    "chartData": {
      "type": "bar",
      "title": "Preferred Study Locations Among University Students (%)",
      "subtitle": "Survey of 400 undergraduates at Northbridge University (2025)",
      "unit": "%",
      "labels": [
        "Main Library",
        "Home / Dorm",
        "Campus Cafe",
        "Study Lounge",
        "Other"
      ],
      "values": [
        38,
        29,
        16,
        12,
        5
      ],
      "alt": "Bar chart showing preferred study locations: Main Library 38%, Home/Dorm 29%, Campus Cafe 16%, Study Lounge 12%, Other 5%."
    },
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2a-02",
    "exam": "teap",
    "skill": "reading",
    "part": "2A",
    "setId": "set-2a-2",
    "topic": "environment",
    "difficulty": "B1",
    "questionType": "line-chart",
    "stimulusId": null,
    "instruction": "Look at the chart or table and choose the best answer to each question.",
    "question": "What trend is shown in the campus electricity report between 2020 and 2024?",
    "options": [
      "Electricity use decreased every year, dropping by 130 MWh in total.",
      "The sharpest single-year decline occurred between 2020 and 2021.",
      "Electricity consumption rose slightly in 2022 before falling again.",
      "By 2024, electricity use had fallen to less than half of the 2020 level."
    ],
    "correctIndex": 0,
    "explanationJa": "2020年の520 MWhから毎年減少し、2024年は390 MWh（差は520 − 390 = 130 MWh）となっています。",
    "translationJa": "2020年から2024年のキャンパス電力消費報告に示されている傾向はどれか。",
    "evidence": "2020: 520 MWh → 2021: 495 → 2022: 470 → 2023: 430 → 2024: 390 (total drop = 130 MWh)",
    "distractorReasons": [
      "正解：毎年連続して減少し、合計130 MWh減少している。",
      "2020→2021は25 MWh減だが、2022→2023と2023→2024は各40 MWh減でより大きい。",
      "2022年は495から470へ減少しており上昇していない。",
      "2020年の半分は260 MWhであり、390 MWhは半分未満ではない。"
    ],
    "chartData": {
      "type": "line",
      "title": "Annual Campus Electricity Use (MWh)",
      "subtitle": "Greenfield College Facilities Report, 2020–2024",
      "unit": "MWh",
      "labels": [
        "2020",
        "2021",
        "2022",
        "2023",
        "2024"
      ],
      "values": [
        520,
        495,
        470,
        430,
        390
      ],
      "alt": "Line chart of annual campus electricity use in MWh: 2020=520, 2021=495, 2022=470, 2023=430, 2024=390."
    },
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2a-03",
    "exam": "teap",
    "skill": "reading",
    "part": "2A",
    "setId": "set-2a-3",
    "topic": "transport",
    "difficulty": "B1",
    "questionType": "table",
    "stimulusId": null,
    "instruction": "Look at the chart or table and choose the best answer to each question.",
    "question": "Which route experienced a decrease in daily passengers from Spring to Fall?",
    "options": [
      "North Dorm Loop",
      "Science Park Express",
      "Station Direct",
      "West Library Shuttle"
    ],
    "correctIndex": 1,
    "explanationJa": "表の Change 列を見ると、減少（−15）しているのは Science Park Express（310→295人）だけです。",
    "translationJa": "春学期から秋学期にかけて1日あたり利用者数が減少した路線はどれか。",
    "evidence": "Science Park Express: Spring 310 → Fall 295 (-15)",
    "distractorReasons": [
      "North Dorm Loopは+60の増加。",
      "正解：Science Park Expressのみ310から295へ15人減少。",
      "Station Directは+60の増加。",
      "West Library Shuttleは+35の増加。"
    ],
    "chartData": {
      "type": "table",
      "title": "Campus Shuttle Ridership by Route (Daily Average)",
      "subtitle": "Spring Semester vs. Fall Semester (Passengers / Day)",
      "headers": [
        "Route",
        "Spring",
        "Fall",
        "Change"
      ],
      "rows": [
        [
          "North Dorm Loop",
          "420",
          "480",
          "+60"
        ],
        [
          "Science Park Express",
          "310",
          "295",
          "-15"
        ],
        [
          "Station Direct",
          "650",
          "710",
          "+60"
        ],
        [
          "West Library Shuttle",
          "180",
          "215",
          "+35"
        ]
      ],
      "alt": "Table of daily shuttle ridership: North Dorm Loop 420->480 (+60), Science Park Express 310->295 (-15), Station Direct 650->710 (+60), West Library Shuttle 180->215 (+35)."
    },
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2a-04",
    "exam": "teap",
    "skill": "reading",
    "part": "2A",
    "setId": "set-2a-4",
    "topic": "campus-life",
    "difficulty": "B2",
    "questionType": "bar-chart",
    "stimulusId": null,
    "instruction": "Look at the chart or table and choose the best answer to each question.",
    "question": "Based on the chart, what percentage of the total loans across these five subjects were in Psychology?",
    "options": [
      "20%",
      "22%",
      "26%",
      "30%"
    ],
    "correctIndex": 2,
    "explanationJa": "5分野の合計は 14 + 18 + 22 + 26 + 20 = 100（千冊）です。Psychology は 26 なので割合は 26 / 100 = 26% です。",
    "translationJa": "グラフに基づくと、これら5分野の総貸出数に占める心理学（Psychology）の割合は何%か。",
    "evidence": "Total = 14 + 18 + 22 + 26 + 20 = 100k; Psychology = 26k (26%)",
    "distractorReasons": [
      "20%はBiology（20k）の割合。",
      "22%はEconomics（22k）の割合。",
      "正解：合計100kのうち26kなので26%。",
      "30%はグラフの数値と一致しない。"
    ],
    "chartData": {
      "type": "bar",
      "title": "Undergraduate Library Book Loans by Subject (Thousands)",
      "subtitle": "Academic Year 2024–2025",
      "unit": "k",
      "labels": [
        "Literature",
        "History",
        "Economics",
        "Psychology",
        "Biology"
      ],
      "values": [
        14,
        18,
        22,
        26,
        20
      ],
      "alt": "Bar chart of book loans in thousands: Literature 14k, History 18k, Economics 22k, Psychology 26k, Biology 20k."
    },
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2a-05",
    "exam": "teap",
    "skill": "reading",
    "part": "2A",
    "setId": "set-2a-5",
    "topic": "technology",
    "difficulty": "B2",
    "questionType": "table",
    "stimulusId": null,
    "instruction": "Look at the chart or table and choose the best answer to each question.",
    "question": "A student wants a laptop that weighs less than 1.2 kg and lasts at least 11 hours during web browsing. Which model meets both requirements?",
    "options": [
      "AeroBook 13",
      "CampusPro 14",
      "NoteLite Air",
      "StudyMax 15"
    ],
    "correctIndex": 0,
    "explanationJa": "重さ1.2 kg未満を満たすのは AeroBook 13（1.15 kg）と NoteLite Air（0.98 kg）。さらに Web Browsing 11時間以上を満たすのは AeroBook 13（11.5 h）のみです。",
    "translationJa": "重さ1.2kg未満かつウェブ閲覧で11時間以上持続するノートPCを求める学生にとって、両方の条件を満たすモデルはどれか。",
    "evidence": "AeroBook 13: Weight 1.15 kg (< 1.2) and Web Browsing 11.5 h (>= 11)",
    "distractorReasons": [
      "正解：1.15kgかつウェブ閲覧11.5時間で両条件を満たす。",
      "CampusPro 14は1.42kgで重さ条件を満たさない。",
      "NoteLite Airはウェブ閲覧9.5時間で11時間未満。",
      "StudyMax 15は1.65kgで重さ条件を満たさない。"
    ],
    "chartData": {
      "type": "table",
      "title": "Student Laptop Battery Life Comparison (Hours)",
      "subtitle": "University IT Lab Standardized Test",
      "headers": [
        "Model",
        "Web Browsing",
        "Video Playback",
        "Weight (kg)"
      ],
      "rows": [
        [
          "AeroBook 13",
          "11.5 h",
          "13.0 h",
          "1.15"
        ],
        [
          "CampusPro 14",
          "14.0 h",
          "15.5 h",
          "1.42"
        ],
        [
          "NoteLite Air",
          "9.5 h",
          "11.0 h",
          "0.98"
        ],
        [
          "StudyMax 15",
          "12.5 h",
          "13.5 h",
          "1.65"
        ]
      ],
      "alt": "Table comparing 4 laptops: AeroBook 13 (11.5h web, 13.0h video, 1.15kg), CampusPro 14 (14.0h, 15.5h, 1.42kg), NoteLite Air (9.5h, 11.0h, 0.98kg), StudyMax 15 (12.5h, 13.5h, 1.65kg)."
    },
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2b-01",
    "exam": "teap",
    "skill": "reading",
    "part": "2B",
    "setId": "set-2b-1",
    "topic": "campus-life",
    "difficulty": "B1",
    "questionType": "notice-condition",
    "stimulusId": "stim-2b-1",
    "instruction": "Read the notice or e-mail and choose the best answer to the question.",
    "question": "What must a student do to drop a laboratory course on September 15?",
    "options": [
      "Submit a formal petition to the Academic Office",
      "Obtain written approval from the course instructor",
      "Pay a late withdrawal fee before 5:00 P.M.",
      "Accept a 'W' mark on the official transcript"
    ],
    "correctIndex": 1,
    "explanationJa": "9月15日は9月18日以前ですが、実験科目（Laboratory courses）は履修取消の前に担当教員の書面承認（written approval）が必要と明記されています。",
    "translationJa": "9月15日に実験科目を履修取消するために学生がすべきことは何か。",
    "evidence": "Laboratory courses with limited seating require written approval from the instructor before dropping.",
    "distractorReasons": [
      "Academic Officeへの申請書は9月18日以降に必要。",
      "正解：実験科目は担当教員の書面承認が必要。",
      "延滞手数料の記載はなく、9月18日まではペナルティなし。",
      "'W'が記載されるのは9月18日以降の取消。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2b-02",
    "exam": "teap",
    "skill": "reading",
    "part": "2B",
    "setId": "set-2b-2",
    "topic": "campus-life",
    "difficulty": "A2",
    "questionType": "email-hours",
    "stimulusId": "stim-2b-2",
    "instruction": "Read the notice or e-mail and choose the best answer to the question.",
    "question": "What library service will NOT be available at 10:00 P.M. on January 15?",
    "options": [
      "Using the self-checkout kiosks",
      "Studying in a reserved third-floor room",
      "Getting help at the Reference Desk",
      "Eating a snack in the ground-floor lounge"
    ],
    "correctIndex": 2,
    "explanationJa": "期末試験期間は深夜0時まで開館しますが、Reference Desk と Book Checkout Counter は午後8時30分に閉まるため、午後10時には利用できません。",
    "translationJa": "1月15日の午後10時に利用できない図書館サービスはどれか。",
    "evidence": "the Reference Desk and Book Checkout Counter will still close at 8:30 P.M.",
    "distractorReasons": [
      "セルフ貸出機は20:30以降も稼働する。",
      "3階のグループ学習室は予約すれば開館時間中利用可能。",
      "正解：レファレンスデスクは20:30で終了する。",
      "1階ラウンジでは飲食が許可されている。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2b-03",
    "exam": "teap",
    "skill": "reading",
    "part": "2B",
    "setId": "set-2b-3",
    "topic": "campus-life",
    "difficulty": "B1",
    "questionType": "notice-deadline",
    "stimulusId": "stim-2b-3",
    "instruction": "Read the notice or e-mail and choose the best answer to the question.",
    "question": "What happens if an international student applies for break housing on March 6?",
    "options": [
      "The student will be required to pay a $45 fee.",
      "The application will be automatically rejected.",
      "The student must vacate the room by March 14.",
      "The student must get approval from an athletic coach."
    ],
    "correctIndex": 0,
    "explanationJa": "春休み滞在の申請締切は3月4日であり、締切後の申請者（late applicants）には45ドルの事務手数料が課されると明記されています。",
    "translationJa": "留学生が3月6日に春休み中の寮滞在を申し込んだ場合、どうなるか。",
    "evidence": "register on the Housing Portal by Wednesday, March 4; late applicants will be charged a $45 administrative fee.",
    "distractorReasons": [
      "正解：3月4日の締切を過ぎているため45ドルの手数料がかかる。",
      "自動却下されるとは書かれていない。",
      "滞在申請すれば退去不要。",
      "運動部コーチの承認は必要と書かれていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2b-04",
    "exam": "teap",
    "skill": "reading",
    "part": "2B",
    "setId": "set-2b-4",
    "topic": "education",
    "difficulty": "B2",
    "questionType": "notice-eligibility",
    "stimulusId": "stim-2b-4",
    "instruction": "Read the notice or e-mail and choose the best answer to the question.",
    "question": "Who is eligible to apply for the Global Fieldwork Scholarship?",
    "options": [
      "A first-year student with a 3.8 GPA",
      "A full-time junior with a 3.4 GPA",
      "A senior who will start a corporate job in September",
      "A part-time sophomore with a 3.5 GPA"
    ],
    "correctIndex": 1,
    "explanationJa": "対象はGPA 3.2以上のフルタイムの2年生・3年生（sophomores or juniors）。4年生は本学大学院へ進学する場合のみ可。よってフルタイム3年生・GPA 3.4が該当します。",
    "translationJa": "Global Fieldwork Scholarship に応募資格があるのは誰か。",
    "evidence": "Applicants must be full-time sophomores or juniors with a minimum GPA of 3.2.",
    "distractorReasons": [
      "1年生（First-year students）は対象外。",
      "正解：フルタイムの3年生でGPA 3.4（3.2以上）なので資格あり。",
      "4年生は本学大学院進学予定者のみ対象で、企業就職予定者は不可。",
      "パートタイム学生は full-time の条件を満たさない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2b-05",
    "exam": "teap",
    "skill": "reading",
    "part": "2B",
    "setId": "set-2b-5",
    "topic": "research",
    "difficulty": "B1",
    "questionType": "email-action",
    "stimulusId": "stim-2b-5",
    "instruction": "Read the notice or e-mail and choose the best answer to the question.",
    "question": "When should a student e-mail the Water Quality Field Report to Prof. Meyer?",
    "options": [
      "If the student finishes the report on Sunday at 7:00 P.M.",
      "If the report contains both text and data tables",
      "Only if the submission portal displays a technical error",
      "Whenever the student wants confirmation before Monday"
    ],
    "correctIndex": 2,
    "explanationJa": "メール末尾に「ポータルから技術エラーメッセージを受け取った場合を除き、メールで送らないこと（do not send reports by e-mail unless...）」と明記されています。",
    "translationJa": "学生が水質調査レポートをメイヤー教授にメール送信すべきなのはどのような場合か。",
    "evidence": "do not send reports by e-mail unless you receive a technical error message from the portal.",
    "distractorReasons": [
      "日曜19時はメンテナンス中だが締切が月曜13時に延びているためメール不要。",
      "単一PDFでアップロードするよう指示されている。",
      "正解：ポータルで技術エラーが出た場合のみメール送信。",
      "確認のためのメール送信は禁止されている。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-01",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-1",
    "topic": "environment",
    "difficulty": "B1",
    "questionType": "main-idea",
    "stimulusId": "stim-2c-1",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "What is the main point of the passage?",
    "options": [
      "Concrete buildings are being replaced by wooden structures in temperate cities.",
      "Street trees help lower urban temperatures, though species selection matters.",
      "Transpiration prevents trees from surviving in dry summer climates.",
      "Sidewalk shade is more expensive to maintain than asphalt roads."
    ],
    "correctIndex": 1,
    "explanationJa": "街路樹が日陰と蒸散によって都市のヒートアイランド現象を緩和する効果と、乾燥に強い在来種の選定が重要であることを述べています。",
    "translationJa": "この文章の主旨は何か。",
    "evidence": "Planting rows of street trees offers a cost-effective response... selecting drought-tolerant native species is essential",
    "distractorReasons": [
      "木造建築への建て替えは書かれていない。",
      "正解：街路樹の冷却効果と樹種選定の重要性が全体の主旨。",
      "蒸散が木の生存を妨げるとは述べていない。",
      "維持費の比較対象が誤っている。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-02",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-2",
    "topic": "psychology",
    "difficulty": "B1",
    "questionType": "detail",
    "stimulusId": "stim-2c-2",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "According to the study described in the passage, how did Group B perform?",
    "options": [
      "They outperformed Group A both five minutes and one week later.",
      "They scored lower than Group A immediately, but remembered much more after a week.",
      "They forgot almost half of the passage within five minutes.",
      "They needed three times as long to read the science passage."
    ],
    "correctIndex": 1,
    "explanationJa": "5分後は再読したGroup Aがわずかに高得点だったものの、1週間後は想起テストを行ったGroup Bが約50%多く記憶していました。",
    "translationJa": "文章で紹介されている研究によると、グループBの成績はどうだったか。",
    "evidence": "Five minutes later, Group A scored slightly higher, but one week later, Group B remembered nearly fifty percent more key concepts.",
    "distractorReasons": [
      "5分後はGroup Aの方がわずかに高かった。",
      "正解：直後はGroup Aがやや上だったが、1週間後はGroup Bが大きく上回った。",
      "5分以内に半分忘れたとは書かれていない。",
      "読書時間の長さは述べられていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-03",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-3",
    "topic": "science",
    "difficulty": "B2",
    "questionType": "inference",
    "stimulusId": "stim-2c-3",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "What can be inferred about honeybees from the passage?",
    "options": [
      "They cannot locate flowers unless the entire sky is completely cloudless.",
      "They use light cues that are invisible to humans to stay oriented.",
      "They rely on magnetic fields rather than sunlight on cloudy afternoons.",
      "They stop flying whenever ultraviolet light reaches the hive."
    ],
    "correctIndex": 1,
    "explanationJa": "厚い雲で人間の目から太陽が隠れても、ハチは偏光紫外線パターンを感知する特殊な受容体で方角を特定できるとあり、人間には見えない光の手がかりを使っていることが推論できます。",
    "translationJa": "文章からミツバチについて推論できることは何か。",
    "evidence": "Even when thick clouds completely hide the sun from human eyes... detect patterns of polarized ultraviolet light",
    "distractorReasons": [
      "わずかな青空が見えれば定位できるため誤り。",
      "正解：人間には見えない偏光紫外線を手がかりにしている。",
      "磁場を使うという記述はない。",
      "紫外線で飛行をやめるとは書かれていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-04",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-4",
    "topic": "economics",
    "difficulty": "B1",
    "questionType": "paraphrase",
    "stimulusId": "stim-2c-4",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "According to the passage, why do free samples help overcome resistance to new brands?",
    "options": [
      "They allow shoppers to judge the taste before paying.",
      "They lower the retail price of nearby shelves.",
      "They force store entrances to stay less crowded.",
      "They eliminate the need for supermarket advertising."
    ],
    "correctIndex": 0,
    "explanationJa": "末尾の「tasting removes uncertainty about unfamiliar flavors（試食は未知の味に対する不確実性を取り除く）」を言い換えた選択肢1が正解です。",
    "translationJa": "文章によると、無料試食が新ブランドへの抵抗感を和らげる理由は何か。",
    "evidence": "tasting removes uncertainty about unfamiliar flavors, which is one of the primary barriers to trying a new brand.",
    "distractorReasons": [
      "正解：購入前に味を確かめられるため不確実性が解消される。",
      "価格を下げるという記述はない。",
      "混雑緩和の話ではない。",
      "広告が不要になるとは述べていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-05",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-5",
    "topic": "history",
    "difficulty": "B2",
    "questionType": "detail",
    "stimulusId": "stim-2c-5",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "Who first introduced the four standardized regional time zones in North America?",
    "options": [
      "National lawmakers responding to farmers",
      "Major railway companies acting voluntarily",
      "Astronomers working in coastal observatories",
      "Municipal mayors seeking faster mail delivery"
    ],
    "correctIndex": 1,
    "explanationJa": "1883年に主要鉄道会社が自主的に4つの標準時間帯を採用し、各国政府は後からそれを法制化したと明記されています。",
    "translationJa": "北米で4つの標準時間帯を最初に導入したのは誰か。",
    "evidence": "In 1883, major railway companies voluntarily adopted four standardized regional time zones",
    "distractorReasons": [
      "政府は後から法制化したので誤り。",
      "正解：主要鉄道会社が自主的に導入した。",
      "天文学者の記述はない。",
      "市長や郵便の記述はない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-06",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-6",
    "topic": "technology",
    "difficulty": "B1",
    "questionType": "detail",
    "stimulusId": "stim-2c-6",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "What advantage do seaweed films have over corn-based bioplastics?",
    "options": [
      "They are stronger than steel containers.",
      "They break down naturally without industrial composting plants.",
      "They require more freshwater irrigation to grow quickly.",
      "They last for centuries in marine environments."
    ],
    "correctIndex": 1,
    "explanationJa": "トウモロコシ由来バイオプラスチックが高温の工業用コンポスト施設を要するのに対し、海藻フィルムは家庭コンポストや海水中でも数週間で自然分解される点が利点とされています。",
    "translationJa": "海藻フィルムがトウモロコシ由来バイオプラスチックより優れている点は何か。",
    "evidence": "Unlike corn-based bioplastics, which often require industrial composting facilities... seaweed films dissolve naturally in home compost or seawater",
    "distractorReasons": [
      "鉄より強いという記述はない。",
      "正解：工業用施設なしで自然分解される。",
      "淡水灌漑は不要（neither arable land nor freshwater irrigation）と明記。",
      "数世紀残るのは従来のプラスチック。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-07",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-7",
    "topic": "health",
    "difficulty": "B1",
    "questionType": "main-idea",
    "stimulusId": "stim-2c-7",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "What is the main message of the passage?",
    "options": [
      "Employees should avoid using computer screens in the afternoon.",
      "Brief, regular breaks away from screens help sustain accuracy and focus.",
      "Typing errors are caused mainly by poor keyboard design.",
      "Longer desk hours always lead to higher daily output."
    ],
    "correctIndex": 1,
    "explanationJa": "約50分ごとに画面から離れて5分程度の短い休憩を取ることで、視覚的快適さと正確性を維持できるという主張が中心です。",
    "translationJa": "この文章の主なメッセージは何か。",
    "evidence": "Taking brief five-minute breaks—especially stepping away from screens... helps workers maintain consistent accuracy",
    "distractorReasons": [
      "午後に画面使用を避けるべきとは述べていない。",
      "正解：画面から離れる短い休憩が正確さと集中力を保つ。",
      "キーボード設計の話ではない。",
      "長時間の着席が成果を生むという通説に異議を唱えている。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-08",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-8",
    "topic": "culture",
    "difficulty": "B2",
    "questionType": "detail",
    "stimulusId": "stim-2c-8",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "According to linguists in the passage, what often happens to a loanword after it enters a new language?",
    "options": [
      "Its pronunciation and meaning may gradually adapt to the receiving language.",
      "It replaces all native grammatical rules within a single generation.",
      "It is used only in written academic scholarship.",
      "It weakens the flexibility of the borrowing community."
    ],
    "correctIndex": 0,
    "explanationJa": "借用語は受け入れ言語のパターンに合わせて発音・文法が適応し、意味も時間とともに変化（狭義化など）することがあると述べています。",
    "translationJa": "文章中の言語学者によると、借用語が新しい言語に入った後によく起こることは何か。",
    "evidence": "speakers adapt both pronunciation and grammar... a loanword even shifts in meaning over time",
    "distractorReasons": [
      "正解：発音・文法や意味が受け入れ言語に合わせて変化する。",
      "文法規則をすべて置き換えるとは書いていない。",
      "学術書に限定されるとは言っていない。",
      "言語を弱めるのではなく柔軟性を示すと述べている。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-09",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-9",
    "topic": "sociology",
    "difficulty": "B2",
    "questionType": "inference",
    "stimulusId": "stim-2c-9",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "What makes a location qualify as a 'third place' according to the passage?",
    "options": [
      "It charges an annual membership fee to keep crowds small.",
      "It is an open, informal social space separate from home and work.",
      "It is restricted exclusively to retired residents.",
      "It operates only during weekend community festivals."
    ],
    "correctIndex": 1,
    "explanationJa": "家庭（第1）と職場（第2）の外にあり、厳しい会員条件なしに多様な人々が集える非公式な公共空間がサードプレイスと定義されています。",
    "translationJa": "文章によると、ある場所が「サードプレイス」に該当する条件は何か。",
    "evidence": "informal public gathering spots... outside the home and the workplace... without strict membership requirements",
    "distractorReasons": [
      "年会費や会員制とは逆の特徴。",
      "正解：家庭と職場から独立した開かれた非公式な空間。",
      "高齢者限定ではない（多様な年齢層を歓迎）。",
      "週末の祭り限定ではない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r2c-10",
    "exam": "teap",
    "skill": "reading",
    "part": "2C",
    "setId": "set-2c-10",
    "topic": "transport",
    "difficulty": "B1",
    "questionType": "detail",
    "stimulusId": "stim-2c-10",
    "instruction": "Read the short passage and choose the best answer to the question.",
    "question": "Which factor is mentioned as contributing to the revival of European night trains?",
    "options": [
      "Airports have banned all short-haul morning flights.",
      "Sleeper trains emit much less carbon per passenger than short flights.",
      "Train tickets are now distributed free to university students.",
      "Overnight trains travel faster than commercial jet aircraft."
    ],
    "correctIndex": 1,
    "explanationJa": "短距離フライトに比べて乗客1人あたりの二酸化炭素排出量がごくわずかであるという環境意識の高まりが、夜行列車復活の主要因として挙げられています。",
    "translationJa": "ヨーロッパの夜行列車復活に寄与した要因として挙げられているのはどれか。",
    "evidence": "rail travel produces a fraction of the carbon emissions per passenger compared with short-haul flights.",
    "distractorReasons": [
      "空港が短距離便を禁止したという記述はない。",
      "正解：短距離航空便より1人あたりの炭素排出量が大幅に少ない。",
      "大学生向け無料配布の記述はない。",
      "ジェット機より速いとは書かれていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3a-01",
    "exam": "teap",
    "skill": "reading",
    "part": "3A",
    "setId": "set-3a-1",
    "topic": "sociology",
    "difficulty": "B1",
    "questionType": "logical-connector",
    "stimulusId": "stim-3a-1",
    "instruction": "Read the passage and choose the best word or phrase to fill in each numbered blank.",
    "question": "Choose the best phrase for blank [ 1 ].",
    "options": [
      "However",
      "Therefore",
      "For instance",
      "Similarly"
    ],
    "correctIndex": 0,
    "explanationJa": "前文「物理的な図書館は廃れると予測された」に対し、後文「来館者数は全く異なる現実を示している」と逆接でつなぐ However が正解。",
    "translationJa": "空欄 [ 1 ] に入る最も適切な語句を選べ。",
    "evidence": "predicted that physical public libraries would soon become obsolete. [However], attendance figures ... tell a very different story.",
    "distractorReasons": [
      "正解：However（しかし）が予測と現実の対比を明確につなぐ。",
      "Therefore（したがって）は因果になり意味が逆。",
      "For instance（例えば）は具体例ではなく反証なので不適切。",
      "Similarly（同様に）は対比に合わない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3a-02",
    "exam": "teap",
    "skill": "reading",
    "part": "3A",
    "setId": "set-3a-1",
    "topic": "sociology",
    "difficulty": "B1",
    "questionType": "logical-connector",
    "stimulusId": "stim-3a-1",
    "instruction": "Read the passage and choose the best word or phrase to fill in each numbered blank.",
    "question": "Choose the best phrase for blank [ 2 ].",
    "options": [
      "As a result",
      "By contrast",
      "Otherwise",
      "In spite of this"
    ],
    "correctIndex": 0,
    "explanationJa": "無料Wi-FiやPC・講座の提供という原因を受けて、「その結果（As a result）」求職者や高齢者がサービスに頼っているという因果関係。",
    "translationJa": "空欄 [ 2 ] に入る最も適切な語句を選べ。",
    "evidence": "offering free Wi-Fi, desktop terminals, and staff-led workshops... [As a result], job seekers and older residents depend on these services",
    "distractorReasons": [
      "正解：As a result（その結果）がサービス提供と利用の因果をつなぐ。",
      "By contrast（対照的に）は対比関係ではない。",
      "Otherwise（さもなければ）は仮定の逆結果になり不自然。",
      "In spite of this（これにもかかわらず）は逆接で文脈に合わない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3a-03",
    "exam": "teap",
    "skill": "reading",
    "part": "3A",
    "setId": "set-3a-1",
    "topic": "sociology",
    "difficulty": "A2",
    "questionType": "reference-pronoun",
    "stimulusId": "stim-3a-1",
    "instruction": "Read the passage and choose the best word or phrase to fill in each numbered blank.",
    "question": "Choose the best word for blank [ 3 ].",
    "options": [
      "they",
      "it",
      "those",
      "which"
    ],
    "correctIndex": 0,
    "explanationJa": "直前の複数名詞 these facilities（これらの施設）を指す主格代名詞 they が正解。",
    "translationJa": "空欄 [ 3 ] に入る最も適切な語を選べ。",
    "evidence": "Because these facilities are open to everyone..., [they] encourage social interaction",
    "distractorReasons": [
      "正解：they が複数名詞 these facilities を受ける主語になる。",
      "it は単数なので複数名詞を受けられない。",
      "those 単独では主語として不自然。",
      "which は関係代名詞となり主節の主語が欠ける。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3a-04",
    "exam": "teap",
    "skill": "reading",
    "part": "3A",
    "setId": "set-3a-1",
    "topic": "sociology",
    "difficulty": "B2",
    "questionType": "academic-collocation",
    "stimulusId": "stim-3a-1",
    "instruction": "Read the passage and choose the best word or phrase to fill in each numbered blank.",
    "question": "Choose the best verb for blank [ 4 ].",
    "options": [
      "fulfill",
      "dismiss",
      "conceal",
      "impose"
    ],
    "correctIndex": 0,
    "explanationJa": "「fulfill a function（機能を果たす）」は学術英文の頻出コロケーション。",
    "translationJa": "空欄 [ 4 ] に入る最も適切な動詞を選べ。",
    "evidence": "modern libraries continue to [fulfill] an irreplaceable function",
    "distractorReasons": [
      "正解：fulfill（果たす）が an irreplaceable function と自然に結びつく。",
      "dismiss（退ける）は文脈と逆。",
      "conceal（隠す）は機能を果たす意味にならない。",
      "impose（課す）は機能に対して不自然。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3a-05",
    "exam": "teap",
    "skill": "reading",
    "part": "3A",
    "setId": "set-3a-2",
    "topic": "environment",
    "difficulty": "B1",
    "questionType": "logical-connector",
    "stimulusId": "stim-3a-2",
    "instruction": "Read the passage and choose the best word or phrase to fill in each numbered blank.",
    "question": "Choose the best word for blank [ 1 ].",
    "options": [
      "however",
      "moreover",
      "consequently",
      "meanwhile"
    ],
    "correctIndex": 0,
    "explanationJa": "初期の研究は外洋に集中していたのに対し、近年の調査では内陸の河川・湖沼でも高濃度が判明したという対比なので however が正解。",
    "translationJa": "空欄 [ 1 ] に入る最も適切な語を選べ。",
    "evidence": "early scientific attention ... focused on the open ocean... More recent fieldwork, [however], has revealed that inland rivers...",
    "distractorReasons": [
      "正解：however（しかしながら）が外洋と内陸河川の対比を示す。",
      "moreover（さらに）は同方向の追加であり対比に合わない。",
      "consequently（その結果）は因果関係にならない。",
      "meanwhile（一方で同時に）は時系列の対比（early vs more recent）にやや弱い。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3a-06",
    "exam": "teap",
    "skill": "reading",
    "part": "3A",
    "setId": "set-3a-2",
    "topic": "environment",
    "difficulty": "A2",
    "questionType": "determiner-reference",
    "stimulusId": "stim-3a-2",
    "instruction": "Read the passage and choose the best word or phrase to fill in each numbered blank.",
    "question": "Choose the best word for blank [ 2 ].",
    "options": [
      "such",
      "every",
      "much",
      "either"
    ],
    "correctIndex": 0,
    "explanationJa": "直前の繊維やタイヤ粉塵といった粒子を指して「そのような粒子（such particles）」とする such が正解。",
    "translationJa": "空欄 [ 2 ] に入る最も適切な語を選べ。",
    "evidence": "When rain washes urban surfaces, [such] particles are swept into storm drains",
    "distractorReasons": [
      "正解：such（そのような）は複数名詞 particles を修飾して前文の具体例を受けられる。",
      "every は単数名詞にしか使えない。",
      "much は不可算名詞に使う。",
      "either は単数名詞に使う。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3a-07",
    "exam": "teap",
    "skill": "reading",
    "part": "3A",
    "setId": "set-3a-2",
    "topic": "environment",
    "difficulty": "B2",
    "questionType": "logical-connector",
    "stimulusId": "stim-3a-2",
    "instruction": "Read the passage and choose the best word or phrase to fill in each numbered blank.",
    "question": "Choose the best phrase for blank [ 3 ].",
    "options": [
      "Furthermore",
      "Nevertheless",
      "Instead",
      "In short"
    ],
    "correctIndex": 0,
    "explanationJa": "消化不能物質による成長阻害という悪影響に加え、「さらに（Furthermore）」有害化学物質を吸着する別の悪影響を追加しているため Furthermore が正解。",
    "translationJa": "空欄 [ 3 ] に入る最も適切な語句を選べ。",
    "evidence": "reduces the energy available for growth... [Furthermore], microplastics can absorb industrial pollutants",
    "distractorReasons": [
      "正解：Furthermore（さらに）が2つ目の悪影響を自然に追加する。",
      "Nevertheless（それにもかかわらず）は逆接で不適切。",
      "Instead（その代わりに）は代替関係ではない。",
      "In short（要するに）は要約ではなく新情報の追加なので不適切。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3a-08",
    "exam": "teap",
    "skill": "reading",
    "part": "3A",
    "setId": "set-3a-2",
    "topic": "environment",
    "difficulty": "B2",
    "questionType": "academic-adjective",
    "stimulusId": "stim-3a-2",
    "instruction": "Read the passage and choose the best word or phrase to fill in each numbered blank.",
    "question": "Choose the best adjective for blank [ 4 ].",
    "options": [
      "effective",
      "accidental",
      "redundant",
      "hostile"
    ],
    "correctIndex": 0,
    "explanationJa": "拡散後に除去するより発生源で減らす方がはるかに「効果的（effective）」であるという結論。",
    "translationJa": "空欄 [ 4 ] に入る最も適切な形容詞を選べ。",
    "evidence": "reducing microplastic pollution at its source is far more [effective] than attempting to remove...",
    "distractorReasons": [
      "正解：effective（効果的な）が発生源対策の優位性を表す。",
      "accidental（偶然の）は政策評価に合わない。",
      "redundant（冗長な）は文脈と逆。",
      "hostile（敵対的な）は不適切。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-01",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-1",
    "topic": "environment",
    "difficulty": "B1",
    "questionType": "main-idea",
    "stimulusId": "stim-3b-1",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "What is the primary purpose of the passage?",
    "options": [
      "To argue that vertical farms should completely replace rural grain agriculture",
      "To evaluate both the advantages and current limitations of vertical farming",
      "To explain how supermarkets refrigerate leafy greens during summer",
      "To describe the history of LED lighting in warehouse construction"
    ],
    "correctIndex": 1,
    "explanationJa": "第2段落で垂直農法の利点（節水・通年収穫・輸送短縮）、第3段落で課題（電力消費・主食作物への不向き）、第4段落で補完的活用を論じており、利点と限界の両面評価が主旨です。",
    "translationJa": "この文章の主な目的は何か。",
    "evidence": "Advocates highlight several environmental benefits... Despite these strengths, agricultural economists caution...",
    "distractorReasons": [
      "穀物農業の完全置換は否定されている。",
      "正解：垂直農法の利点と現在の限界の両面を評価している。",
      "スーパーの冷蔵技術の説明ではない。",
      "LEDの歴史の説明ではない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-02",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-1",
    "topic": "environment",
    "difficulty": "B1",
    "questionType": "detail",
    "stimulusId": "stim-3b-1",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "According to the passage, how do vertical farms reduce water consumption?",
    "options": [
      "By capturing and recycling moisture within closed-loop systems",
      "By planting drought-resistant wheat varieties indoors",
      "By collecting rainwater on warehouse roofs during winter",
      "By shipping produce only to dry coastal cities"
    ],
    "correctIndex": 0,
    "explanationJa": "第2段落に「閉鎖循環式灌漑システムが蒸発した水分を再利用する（Closed-loop irrigation systems recycle evaporated moisture）」と明記されています。",
    "translationJa": "文章によると、垂直農法はどのように水消費量を削減しているか。",
    "evidence": "Closed-loop irrigation systems recycle evaporated moisture, enabling indoor farms to use up to 90 percent less water",
    "distractorReasons": [
      "正解：閉鎖循環システム内で水分を回収・再利用している。",
      "小麦は屋内栽培に不向きと述べられている。",
      "屋根の雨水回収は書かれていない。",
      "配送先限定の話ではない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-03",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-1",
    "topic": "environment",
    "difficulty": "B2",
    "questionType": "detail",
    "stimulusId": "stim-3b-1",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "Why are crops like wheat and rice considered unsuitable for vertical farming?",
    "options": [
      "They spoil too quickly during refrigerated truck transport.",
      "They cannot absorb nutrients from water or mist.",
      "Their height and high light requirements make indoor production uneconomical.",
      "Consumers prefer buying grain crops exclusively in winter."
    ],
    "correctIndex": 2,
    "explanationJa": "第3段落末尾に「小麦・米・トウモロコシなどの主食作物は背が高すぎ、必要な光エネルギーも多すぎて屋内では経済的に成り立たない」とあります。",
    "translationJa": "小麦や米のような作物が垂直農法に不向きとされる理由は何か。",
    "evidence": "staple calorie crops such as wheat, rice, and maize grow too tall and require too much light energy to be economically viable indoors.",
    "distractorReasons": [
      "傷みやすいのは葉物野菜の特徴。",
      "水や霧から栄養吸収できないとは書かれていない。",
      "正解：草丈と光エネルギー要件が大きすぎて採算が合わない。",
      "冬限定で購入するとは書かれていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-04",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-1",
    "topic": "environment",
    "difficulty": "B2",
    "questionType": "chart-integration",
    "stimulusId": "stim-3b-1",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "According to the table, how does a Vertical Farm compare with an Open-Field Farm for producing 1 kg of lettuce?",
    "options": [
      "It uses one-tenth as much water, but requires far more electricity.",
      "It uses less electricity and requires longer transport distances.",
      "It produces fewer harvest cycles per year than open-field farms.",
      "It uses exactly the same amount of water as a greenhouse."
    ],
    "correctIndex": 0,
    "explanationJa": "表より、水使用量は Open-Field 250 L に対し Vertical Farm 25 L（ちょうど1/10）、一方電力は 0.4 kWh に対し 9.5 kWh と大幅に多いことが読み取れます。",
    "translationJa": "表によると、レタス1kgの生産において垂直農法は露地栽培と比べてどうか。",
    "evidence": "Water: 25 L vs 250 L (1/10); Electricity: 9.5 kWh vs 0.4 kWh",
    "distractorReasons": [
      "正解：水は10分の1（25L対250L）だが、電力消費は大幅に多い（9.5対0.4kWh）。",
      "電力は多く、輸送距離は短い（15km対800km）。",
      "収穫回数は14–16回で露地（2–3回）よりはるかに多い。",
      "温室は60Lなので25Lと同じではない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-05",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-1",
    "topic": "environment",
    "difficulty": "B2",
    "questionType": "inference",
    "stimulusId": "stim-3b-1",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "What can be inferred from the passage and table about reducing a vertical farm's carbon footprint?",
    "options": [
      "Using renewable electricity is crucial because indoor electricity demand is very high.",
      "Increasing transport distance to 800 km will lower energy consumption.",
      "Switching from LEDs to soil beds will double the annual harvest cycles.",
      "Greenhouses always consume more electricity than vertical farms."
    ],
    "correctIndex": 0,
    "explanationJa": "本文第3段落（低炭素な再エネ電力でないと炭素排出量が上回り得る）と表（9.5 kWhという高い電力使用量）を照合すると、再エネ電力の利用が鍵であることが推論できます。",
    "translationJa": "本文と表から、垂直農法の炭素排出量を減らすことについて何が推論できるか。",
    "evidence": "Unless a facility draws power from low-carbon renewable sources... + Table: Electricity Use 9.5 kWh",
    "distractorReasons": [
      "正解：電力消費が9.5kWhと非常に高いため、再生可能エネルギーの利用が不可欠。",
      "輸送距離を増やすとむしろ排出が増える。",
      "土壌栽培で収穫回数が倍増する記述はない。",
      "表では温室2.1kWh＜垂直農法9.5kWh。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-06",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-1",
    "topic": "environment",
    "difficulty": "B1",
    "questionType": "paraphrase",
    "stimulusId": "stim-3b-1",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "According to the final paragraph, what role are vertical farms expected to play in future city food systems?",
    "options": [
      "Replacing all winter imports of wheat and maize",
      "Acting as a complementary source that strengthens supply stability",
      "Eliminating the need for supermarkets in urban centers",
      "Providing free solar microgrids to rural farms"
    ],
    "correctIndex": 1,
    "explanationJa": "最終段落の「a reliable supplement that stabilizes urban supply chains（都市の供給網を安定させる信頼できる補完手段）」を言い換えた選択肢2が正解です。",
    "translationJa": "最終段落によると、将来の都市食料システムで垂直農法はどのような役割を果たすと期待されているか。",
    "evidence": "serve as a reliable supplement that stabilizes urban supply chains during extreme weather events.",
    "distractorReasons": [
      "穀物の輸入を代替する役割ではない。",
      "正解：供給の安定性を高める補完的な供給源。",
      "スーパーを不要にするとは書いていない。",
      "農村へ電力網を無料提供する話ではない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-07",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-2",
    "topic": "psychology",
    "difficulty": "B1",
    "questionType": "detail",
    "stimulusId": "stim-3b-2",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "What does modern research say about the vocabulary of young bilingual children?",
    "options": [
      "They permanently lag behind monolingual peers in both languages.",
      "Their combined vocabulary across both languages is generally equal to or larger than that of monolingual peers.",
      "They cannot learn a second language until mid-elementary school.",
      "They experience severe linguistic confusion when reading aloud."
    ],
    "correctIndex": 1,
    "explanationJa": "第1段落に「2言語を合わせた概念語彙数は通常同等かそれ以上であり、単一言語での差も小学校中学年までに概ね解消される」と明記されています。",
    "translationJa": "現代の研究は、幼いバイリンガル児の語彙について何を述べているか。",
    "evidence": "their combined conceptual vocabulary across both languages is typically equal or larger",
    "distractorReasons": [
      "永続的に遅れるわけではなく中学年までに差は消える。",
      "正解：2言語合計の語彙数は単一言語児と同等以上。",
      "小学校中学年まで学べないとは書いていない。",
      "音読時の混乱は述べられていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-08",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-2",
    "topic": "psychology",
    "difficulty": "B2",
    "questionType": "detail",
    "stimulusId": "stim-3b-2",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "According to brain-imaging studies in the second paragraph, what happens when a bilingual person speaks one of their languages?",
    "options": [
      "The second language completely turns off until the conversation ends.",
      "Both languages remain active at the same time in the brain.",
      "The prefrontal cortex stops monitoring distractions.",
      "Vocabulary from both languages merges into a single grammar."
    ],
    "correctIndex": 1,
    "explanationJa": "第2段落に「一方の言語を使っているときも、もう一方の言語は完全にオフにならず、両方が同時に活性化している」と明記されています。",
    "translationJa": "第2段落の脳画像研究によると、バイリンガルが一方の言語を話すとき何が起きているか。",
    "evidence": "the other language does not shut off completely; both remain active simultaneously.",
    "distractorReasons": [
      "完全にオフにならない（does not shut off completely）と明記。",
      "正解：両言語が同時に活性化し続けている。",
      "前頭前野はむしろ頻繁に鍛えられる。",
      "単一文法に融合するとは書かれていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-09",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-2",
    "topic": "psychology",
    "difficulty": "B2",
    "questionType": "detail",
    "stimulusId": "stim-3b-2",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "Why did large recent studies find smaller differences between bilingual and monolingual young adults?",
    "options": [
      "Young adults rarely switch between languages in daily life.",
      "The attention systems of healthy young adults are already functioning near peak efficiency.",
      "Most young adults in the studies were tested only in their weaker language.",
      "Laboratory attention tasks are too difficult for university students."
    ],
    "correctIndex": 1,
    "explanationJa": "第3段落に「健康な若年成人の注意システムはすでにピーク効率で機能しているため、差が小さいか一貫しない結果になった」とあります。",
    "translationJa": "近年の大規模研究で、若年成人のバイリンガルとモノリンガルの差が小さかった理由は何か。",
    "evidence": "whose attention systems are already operating at peak efficiency.",
    "distractorReasons": [
      "日常で切り替えないからではない。",
      "正解：若年成人の注意機能がすでにピーク水準にあるため。",
      "弱い言語のみでテストしたとは書かれていない。",
      "課題が難しすぎるとは述べていない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-10",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-2",
    "topic": "psychology",
    "difficulty": "B2",
    "questionType": "chart-integration",
    "stimulusId": "stim-3b-2",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "According to the chart, which age group shows the largest gap in error rate between monolinguals and bilinguals?",
    "options": [
      "Ages 8–10 (a 5 percentage-point gap)",
      "Ages 20–25 (a 1 percentage-point gap)",
      "Ages 65+ (a 7 percentage-point gap)",
      "All three age groups show identical gaps."
    ],
    "correctIndex": 2,
    "explanationJa": "グラフの誤答率差は、8–10歳が 18%−13% = 5ポイント、20–25歳が 7%−6% = 1ポイント、65歳以上が 21%−14% = 7ポイントで、65歳以上が最大です。",
    "translationJa": "グラフによると、モノリンガルとバイリンガルの誤答率の差が最も大きい年齢層はどれか。",
    "evidence": "Ages 65+: Mono 21% vs Bi 14% (7-point gap) > Ages 8–10 (5-point) > Ages 20–25 (1-point)",
    "distractorReasons": [
      "8–10歳は5ポイント差で2番目。",
      "20–25歳は1ポイント差で最小。",
      "正解：65歳以上が21%対14%の7ポイント差で最大。",
      "3群の差は同一ではない。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-11",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-2",
    "topic": "psychology",
    "difficulty": "B2",
    "questionType": "chart-integration",
    "stimulusId": "stim-3b-2",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "How does the chart support the discussion in the third paragraph?",
    "options": [
      "It shows that young adults make more errors than older adults.",
      "It confirms that differences are minimal in young adulthood but clearer in childhood and older age.",
      "It proves that bilingualism eliminates all task-switching errors.",
      "It demonstrates that older monolinguals outperform children."
    ],
    "correctIndex": 1,
    "explanationJa": "第3段落「若年成人では差が小さい一方、幼児期と高齢期でより一貫した利点が現れる」という本文と、グラフ（20–25歳は1%差、8–10歳5%差・65歳以上7%差）が完全に一致します。",
    "translationJa": "グラフは第3段落の議論をどのように裏付けているか。",
    "evidence": "smaller differences among young healthy adults... More consistent benefits appear at both ends of the lifespan",
    "distractorReasons": [
      "若年成人（6–7%）は高齢者（14–21%）より誤答が少ない。",
      "正解：若年成人では差がごく小さく、子どもと高齢者で明確な差があることを裏付けている。",
      "誤答をゼロにするわけではない。",
      "高齢モノリンガル（21%）は子ども（18%）より誤答率が高い。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  },
  {
    "id": "teap-r3b-12",
    "exam": "teap",
    "skill": "reading",
    "part": "3B",
    "setId": "set-3b-2",
    "topic": "psychology",
    "difficulty": "B2",
    "questionType": "main-idea",
    "stimulusId": "stim-3b-2",
    "instruction": "Read the passage and the accompanying data, then choose the best answer to each question.",
    "question": "What conclusion does the author reach in the final paragraph?",
    "options": [
      "Researchers should stop comparing different social environments.",
      "Bilingualism should be viewed as a spectrum shaped by daily language practices.",
      "Learning a second language after age ten provides no cognitive benefit.",
      "Simple yes-or-no labels are the most accurate way to classify speakers."
    ],
    "correctIndex": 1,
    "explanationJa": "最終段落で「固定的な特性ではなく、日常の実践によって形作られる動的なスペクトラムとして捉えるべきだ」と結論づけています。",
    "translationJa": "筆者は最終段落でどのような結論に達しているか。",
    "evidence": "bilingualism is best understood not as a fixed trait, but as a dynamic spectrum of everyday practice.",
    "distractorReasons": [
      "社会的環境の違いを重視すべきと述べている。",
      "正解：日常の言語使用に左右されるスペクトラムとして理解すべき。",
      "10歳以降の学習に効果がないとは述べていない。",
      "単純な二元ラベルから脱却すべきと述べている。"
    ],
    "chartData": null,
    "sourceType": "original",
    "reviewStatus": "reviewed",
    "version": "1.0.0"
  }
];
