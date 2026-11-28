/* LexSophia Static Question Bank, Translations, Books & Articles */
/* =====================================================================
   LABEL MAPS (Japanese UI labels for skills and Part subtitles)
   ===================================================================== */

const SKILLS = {
  photo: '写真描写',
  response: '応答',
  conversation: '会話理解',
  talk: '説明文理解',
  grammar: '文法',
  vocabulary: '語彙',
  structure: '文構造',
  reading: '読解'
};

/* Japanese labels for the `focus` metadata, shown on the review screen only.
   Falls back to the raw value if a new focus tag is added to the pool. */
const FOCUS_LABELS = {
  'parts of speech': '品詞', 'verb tense': '時制', 'verb form': '動詞の形',
  'prepositions': '前置詞', 'conjunctions': '接続詞', 'relative pronouns': '関係代名詞',
  'pronouns': '代名詞', 'determiners': '限定詞', 'subject-verb agreement': '主語と動詞の一致',
  'gerund/infinitive': '動名詞・不定詞', 'sentence structure': '文構造',
  'vocabulary': '語彙', 'collocations': 'コロケーション',
  'transition words': 'つなぎ言葉', 'sentence insertion': '文挿入',
  'purpose': '目的', 'detail': '詳細情報', 'paraphrase': '言い換え',
  'paraphrased detail': '言い換えされた詳細', 'inference': '推測',
  'cross-passage detail': '複数文書の詳細', 'cross-passage inference': '複数文書の推測',
  'cross-passage distinction': '複数文書の識別',
  'photo action': '写真内の動作', 'wh-question': '疑問詞への応答',
  'request': '依頼への応答', 'negative question': '否定疑問文', 'choice question': '選択疑問文', 'statement response': '文への応答',
  'conversation detail': '会話の詳細', 'conversation purpose': '会話の目的',
  'talk detail': '説明文の詳細', 'talk purpose': '説明文の目的'
};

const PART_NAMES = {
  1: '写真描写',
  2: '応答問題',
  3: '会話問題',
  4: '説明文問題',
  5: '短文穴埋め',
  6: '長文穴埋め',
  7: '読解問題'
};

/* =====================================================================
   PASSAGES
   ---------------------------------------------------------------------
   Imported from LexSophia_TOEIC_Reading_100Q_Pool_Design.xlsx (Passages).
   A passage has either { header, body } or { sections: [...] } for
   double-passage Part 7 sets. In Part 6 bodies, [11] marks blank 11.
   Blank numbers are stored as authored; the test renderer renumbers them
   for display so a 20-question form always shows blanks 11-14.
   ===================================================================== */

const PASSAGES = {
  p6_relocation: {
    part: 6, type: "email",
    header: "Dear Mr. Lindqvist,",
    body: "Thank you for choosing Northgate Business Solutions for your office relocation. We are writing to confirm that your move has been scheduled for Saturday, August 22, [11] at 8:00 A.M.\n\nOur crew will arrive with all of the necessary packing materials. [12] Items that have not been boxed by the time the crew arrives may be subject to an additional packing fee.\n\nPlease note that our standard insurance covers damage of up to $5,000 at no extra charge. [13], this coverage does not apply to electronic equipment valued at more than $5,000. Customers transporting such items are advised to purchase supplementary coverage, which can be added to your contract at any time before the move date.\n\nIf you have any questions or need to [14] the schedule, please contact your move coordinator, Amelia Ruiz, at 555-0142.\n\nSincerely,\nNorthgate Business Solutions"
  },
  p7_expense: {
    part: 7, type: "notice",
    header: "Kestrel Analytics\nNotice to all employees: New travel reimbursement procedure",
    body: "Beginning July 1, all requests for travel reimbursement must be submitted through the ExpenseHub portal rather than on paper forms. Receipts should be photographed and uploaded at the time each expense is incurred. Requests submitted more than 30 days after the travel date will not be approved without written authorization from a department head.\n\nEmployees who have not yet activated their ExpenseHub accounts should do so before their next business trip. Activation instructions were sent to all staff on June 3; anyone who did not receive them should contact the IT Service Desk. Training sessions will be held in Conference Room 2B on June 18 and June 25 at 10:00 A.M. Attendance is optional but strongly recommended for employees who travel frequently.\n\nPaper forms received after July 1 will be returned to the sender unprocessed."
  },
  p7_print: {
    part: 7, type: "double email",
    sections: [
      { header: "From: Lena Brandt, Events Coordinator, Verve Media\nTo: Solstice Print Group\nSubject: Quote request: conference brochures\nDate: March 2", body: "Verve Media is preparing brochures for the Coastal Marketing Summit on April 14. We need 1,500 copies of a 12-page, full-color brochure printed on recycled paper and delivered to our Bristol office no later than April 7. Could you send a quote by March 6? We would also like to know whether a discount is available for orders of more than 1,000 copies." },
      { header: "From: Tomas Rivera, Account Manager, Solstice Print Group\nTo: Lena Brandt\nSubject: RE: Quote request: conference brochures\nDate: March 4", body: "Thank you for your inquiry. The price includes free delivery to Bristol, and orders of 1,000 copies or more automatically qualify for a 10 percent discount, which has already been applied. Our recycled stock is on back order and is not expected until March 27. Because printing takes five business days, we cannot guarantee delivery before April 7 on that paper. Standard coated stock is available immediately at the same price. Please let us know your choice by March 11." }
    ]
  },
  p6_training: {
    part: 6, type: "memo",
    header: "To: All Branch Managers\nSubject: Customer-service workshop",
    body: "Next month, Blue Harbor Bank will introduce a new customer-service training program for all branch employees. Each branch manager is responsible for selecting two employees to attend the first workshop, [71] on October 8 at the central training center.\n\nThe session will focus on handling difficult customer situations and explaining new digital-banking services clearly. [72] Participants will also practice responding to common questions through short role-play activities.\n\nBecause space is limited, managers should submit the names of their selected employees no later than September 25. [73], any substitutions made after that date must be approved by the training coordinator.\n\nManagers who need additional information should [74] the Human Resources portal, where a detailed schedule and preparation guide are available."
  },
  p6_subscription: {
    part: 6, type: "customer email",
    header: "Subject: Renewal of your DataScope subscription",
    body: "Dear Ms. Anders,\n\nThank you for using DataScope Professional. Your annual subscription is scheduled to expire on November 30. To ensure uninterrupted access, we recommend [75] your account before that date.\n\nCustomers who renew for another full year will receive a 15 percent discount. [76] The discounted price will appear automatically when you sign in to your account and select the annual plan.\n\nPlease note that payment information stored in your account may need to be updated if your credit card has recently expired. [77], the renewal cannot be processed until valid payment information is provided.\n\nIf you have questions about your subscription, please [78] our customer support team through the online help center.\n\nSincerely,\nDataScope Customer Care"
  },
  p6_facility: {
    part: 6, type: "announcement",
    header: "Facilities Department Announcement",
    body: "The east entrance of the Hawthorne Office Center will be closed from January 12 through January 16 while new security gates are installed. During this period, all employees and visitors should [79] the west entrance on Pine Street.\n\nSecurity staff will be stationed there throughout business hours to assist visitors. [80] Employees are advised to allow a few extra minutes when arriving in the morning because temporary lines may form.\n\nDelivery drivers should continue to use the loading area behind the building. [81], large deliveries scheduled for January 13 must be moved to another date because the rear access road will be resurfaced that day.\n\nWe apologize for any inconvenience and appreciate your [82] during this temporary closure."
  },
  p7_library_event: {
    part: 7, type: "web notice",
    header: "Riverton Public Library — Evening Author Talk",
    body: "On Thursday, May 21, the Riverton Public Library will host novelist Dana Cole for a discussion of her newest book, The Quiet Crossing. The event begins at 6:30 P.M. in the second-floor lecture room and is free to the public. Seating is limited to 120 people, so advance registration is recommended.\n\nRegistered guests should arrive by 6:20 P.M. After that time, unclaimed seats may be offered to walk-in visitors. Copies of Ms. Cole's books will be available for purchase in the lobby before and after the talk. The author will sign books only after the discussion has ended.\n\nBecause the library parking lot is being resurfaced, visitors are encouraged to use the municipal garage on King Street, where parking is free after 6:00 P.M."
  },
  p7_vendor_invoice: {
    part: 7, type: "double passage",
    sections: [
      { header: "From: Mira Shah, Office Manager\nTo: Accounts Payable\nSubject: Invoice 8841", body: "I reviewed the attached invoice from GreenLine Office Supply. Most of the order arrived on Tuesday, but the six adjustable monitor stands listed on the invoice were not included in the delivery. GreenLine told me this morning that the stands are temporarily out of stock and will be shipped separately next week. Please process payment for the items we received, but hold payment for the stands until they arrive." },
      { header: "Invoice 8841 — GreenLine Office Supply", body: "Printer paper: 20 boxes — delivered\nDesk organizers: 12 — delivered\nAdjustable monitor stands: 6 — back ordered\nDelivery fee: waived for orders over $500\nPayment terms: due within 30 days of delivery" }
    ]
  },
  p7_train_schedule: {
    part: 7, type: "schedule notice",
    header: "North Coast Rail — Weekend Service Update",
    body: "Due to bridge maintenance, trains between Harbor City and Milltown will operate on a revised schedule this Saturday and Sunday. The 8:10 A.M. express from Harbor City will depart at 8:35 A.M. and will make all local stops. The 9:20 A.M. express is canceled.\n\nPassengers traveling from Harbor City to Lakeside before 10:00 A.M. should use the 7:40 A.M. local or the revised 8:35 A.M. service. Normal service is expected to resume on Monday.\n\nTickets for canceled trains may be used on any other North Coast Rail service on the same day without an additional fee. Passengers who decide not to travel may request a refund through the company's website."
  },
  p7_hotel_reviews: {
    part: 7, type: "double passage",
    sections: [
      { header: "Harbor View Hotel — Spring Business Package", body: "Book a two-night stay between March 1 and May 31 and receive complimentary breakfast, late checkout at 2:00 P.M., and one free airport shuttle ride. The package is available only for reservations made directly through the hotel's website. Meeting-room rental is not included." },
      { header: "From: Claire Morgan\nTo: Harbor View Hotel\nSubject: Reservation H4821", body: "I booked two nights for April 18–20 through your website using the Spring Business Package. My flight arrives at 9:15 P.M. on April 18. Could you confirm whether the complimentary shuttle operates that late? I will also need a small meeting room for three hours on April 19. Please let me know the rental price." }
    ]
  },
  p7_software_update: {
    part: 7, type: "internal memo",
    header: "Internal Memo — Orion Project Software Update",
    body: "Beginning next Tuesday, all employees in the design department must use version 6.4 of Orion Project Software. The update includes a new file-sharing feature and several security improvements. Computers connected to the company network will install the update automatically overnight on Monday.\n\nEmployees working remotely should open the Orion updater before Tuesday morning and follow the on-screen instructions. The installation takes approximately 15 minutes and requires the computer to restart once. Any unsaved work will be lost during the restart.\n\nA short online tutorial covering the new sharing feature will be available on the Learning Portal beginning Monday afternoon. Staff members who experience installation problems should contact Technical Support rather than reinstalling the program themselves."
  },
  p7_job_fair: {
    part: 7, type: "double passage",
    sections: [
      { header: "Metro Career Expo — September 12", body: "Riverside Convention Hall, 10:00 A.M.–4:00 P.M.\nMore than 60 employers from technology, finance, retail, and hospitality will attend. Admission is free for students and recent graduates who register online by September 10. Walk-in admission is $8. Resume-review appointments are available in 20-minute time slots and must be booked in advance." },
      { header: "From: Elena Park, Campus Recruiter\nTo: Marketing Club Members\nSubject: Metro Career Expo", body: "Our company will have a booth at the Metro Career Expo next Saturday. I will be there from 10:00 A.M. until 1:30 P.M., and my colleague Jordan Lee will take over afterward. If you plan to stop by, bring a printed résumé; we can give brief feedback between scheduled interviews. Please note that our company is not participating in the official resume-review appointments listed on the event website." }
    ]
  },
  p7_bakery: {     part: 7, type: "article",     header: "Golden Crust Bakery to Open Three New Locations",     body: "Golden Crust Bakery, a regional chain known for its sourdough bread, will open three new locations by the end of this year, the company announced on Tuesday. The expansion will bring the total number of shops to seven and includes the company's first location outside Oregon, in Austin, Texas.\n\nFounder and CEO Maria Chen started Golden Crust in 2011, selling loaves from a stall at a Portland farmers market. The business has grown steadily since then, with sales rising 18 percent last year as demand for its baked goods increased among both retail and wholesale customers.\n\nUnlike the existing shops, the new locations will include small classroom spaces where customers can take baking courses taught by the company's bakers. The company also plans to hire about sixty additional employees across the three sites. Applications for the Austin store open next month, and the company says it will give priority to applicants with experience in food service."   },   p7_delivery: {     part: 7, type: "double email",     sections: [       { header: "From: Daniel Osei, Operations Manager, Hartley Furniture\nTo: Grace Liu, SwiftLine Logistics\nSubject: Change to Saturday delivery schedule\nDate: October 14", body: "Dear Ms. Liu,\n\nI am writing to request a change to our regular delivery arrangement. Beginning in November, our showroom will be closed on Saturdays for approximately two months while the building is renovated. We would therefore like to move our weekly delivery of display furniture from Saturday to Friday, starting the first week of November.\n\nCould you let me know whether Friday delivery is possible, and whether the change would affect the delivery fees we currently pay? We would like to keep the same morning time slot if it is available.\n\nThank you for your help.\n\nDaniel Osei" },       { header: "From: Grace Liu, SwiftLine Logistics\nTo: Daniel Osei, Operations Manager, Hartley Furniture\nSubject: Re: Change to Saturday delivery schedule\nDate: October 15", body: "Dear Mr. Osei,\n\nThank you for your message. We can move your deliveries to Fridays beginning November 7. If you confirm the new schedule by October 28, there will be no additional charge for the change.\n\nOne point to note: because of heavy traffic on Fridays, deliveries scheduled after 2:00 P.M. sometimes arrive later than planned. Since you prefer a morning slot, this should not affect you. Your usual arrival time of between 9:00 and 10:00 A.M. is available on Fridays.\n\nPlease reply by October 28 to confirm.\n\nGrace Liu" }     ]   }
,
  p6_workshop: {     part: 6, type: "notice",     header: "Riverton Community Center — Weekend Photography Workshop",     body: "Riverton Community Center will offer a two-day photography workshop on Saturday, November 21, and Sunday, November 22. The workshop is intended for beginners who want to learn how to take better photographs with a digital camera.\n\nParticipants will practice taking photographs indoors and outdoors, and [91] will receive individual comments from the instructor, Ms. Paula Grant, at the end of each day. [92]\n\nBecause the class is limited to fifteen people, early registration is recommended. To register, please visit the center's front desk [93] November 14. The fee of $45 includes all course materials.\n\nWe look forward to your [94] in this popular program."   },
  p7_marathon: {     part: 7, type: "web notice",     header: "City Marathon: Road Closures and Event Information",     body: "The annual Riverside City Marathon will take place on Sunday, October 18, starting at 8:00 A.M. in Central Park. Approximately 12,000 runners are expected to participate in this year's event.\n\nTo ensure the safety of the runners, several roads in the city center will be closed to traffic between 7:00 A.M. and 2:00 P.M. These include River Road, Bridge Street, and the northern section of Harbor Avenue. Drivers who normally use these roads are advised to use the East Bypass instead. Bus routes 4 and 9 will also be detoured during the closure.\n\nResidents who live along the marathon route and need to travel on Sunday morning should contact the event office by October 12 to request a temporary parking permit for the garage on Fifth Street, where spaces will be available free of charge."   },
  p7_course: {     part: 7, type: "double passage",     sections: [       { header: "Sakura Cooking Studio — Weekend Courses (November)", body: "Sakura Cooking Studio offers two weekend courses in November. The Baking Basics course meets on Saturdays from 10:00 A.M. to 1:00 P.M. and covers breads, cakes, and pastries. The World Cuisine course meets on Sundays from 11:00 A.M. to 2:00 P.M.; each week focuses on the dishes of a different country. Both courses run for four weeks and cost $160, including ingredients. Students must bring their own aprons." },       { header: "From: Emily Ross\nTo: Sakura Cooking Studio\nSubject: Course inquiry\nDate: October 20", body: "Hello,\n\nI am interested in joining one of your November courses, but I work on Saturday mornings, so I can only attend a class held on another day. Also, I am allergic to nuts. Could you tell me whether the dishes in the course I can take include nuts, and whether substitutions are possible?\n\nThank you,\nEmily Ross" }     ]   },
  p7_apartment: {     part: 7, type: "advertisement",     header: "Sunnyvale Apartments — Now Leasing",     body: "Sunnyvale Apartments is now leasing one- and two-bedroom units for occupancy starting December 1. Monthly rent starts at $950 for a one-bedroom unit and $1,300 for a two-bedroom unit, including water and parking.\n\nAll units feature a modern kitchen, in-unit laundry facilities, and access to a shared fitness center. A community room can be reserved free of charge by residents for private events.\n\nAn open house will be held on Saturday, November 14, from 10:00 A.M. to 4:00 P.M. Visitors can tour model units and speak with the leasing staff. Applications submitted during the open house will have the $50 application fee waived."   },
  p7_deadline: {     part: 7, type: "email",     header: "From: Ken Watanabe, Project Manager\nTo: Project Team\nSubject: Change to the Atlas Project Deadline\nDate: November 2",     body: "Hi everyone,\n\nI'm writing to let you know that the client has agreed to extend the deadline for the Atlas project by one week. Our final report is now due on November 20 instead of November 13.\n\nBecause of this change, the review meeting scheduled for this Friday will be moved to next Tuesday at 10:00 A.M. Please use the extra time to check your sections carefully rather than rushing to finish.\n\nIf the new deadline causes any problems with your other assignments, please let me know by Wednesday so we can adjust workloads.\n\nBest regards,\nKen Watanabe"   },
  p7_hiring: {     part: 7, type: "double passage",     sections: [       { header: "Job Posting: Bilingual Customer Support Representative — NovaTel Communications", body: "NovaTel Communications is seeking a customer support representative for its international help desk. Applicants must have at least three years of customer service experience and be able to communicate fluently in English and Spanish. The position involves answering customer inquiries by phone and e-mail in both languages. Working hours are Monday to Friday, 9:00 A.M. to 5:00 P.M. Interested candidates should apply online by November 25." },       { header: "From: Lucia Fernandez\nTo: NovaTel Hiring Team\nSubject: Application for Customer Support Representative\nDate: November 5", body: "Dear Hiring Team,\n\nI would like to apply for the customer support representative position. For the past four years, I have worked at a hotel front desk, where I assisted guests from many countries. I grew up in Mexico and speak Spanish at home, and I use English at work every day.\n\nI am available to start in early December and would welcome the opportunity to discuss my application in an interview.\n\nSincerely,\nLucia Fernandez" }     ]   },
  p7_market: {     part: 7, type: "article",     header: "Hillcrest Farmers Market Marks Ten Years",     body: "The Hillcrest Farmers Market celebrated its tenth anniversary on Saturday, with more than forty local vendors and an estimated 3,000 visitors attending the special event. What began in 2016 as a small weekend market with eight stalls has grown into one of the city's most popular weekly attractions.\n\nOrganizers announced on Saturday that, starting next spring, the market will also open on Wednesday evenings at a second location in the Riverside district, in response to requests from residents who cannot visit on weekends.\n\nThe market is known for its fresh produce, baked goods, and handmade crafts. Admission is free, and parking is available at the community center next to the market site."   },
"p6_conference": {
  "part": 6,
  "type": "email",
  "header": "To: Dr. Alan Reyes\nFrom: Sofia Marchetti, Program Coordinator\nSubject: Your session at the Regional Marketing Conference",
  "body": "Dear Dr. Reyes,\n\nThank you for agreeing to speak at the Regional Marketing Conference on October 17. Your session [95] for 10:00 A.M. in Room 3 of the Harbor Convention Center, immediately after the opening address.\n\n[96] the venue has changed from last year, the overall schedule remains the same, and we expect about 200 people to attend your session. A technician will be available to assist you [97] the session, so please arrive at least twenty minutes early to check your slides and microphone.\n\nCould you send us a copy of your presentation slides by October 10? [98] If you need any additional equipment, please let me know by the same date.\n\nWe look forward to welcoming you.\n\nSincerely,\nSofia Marchetti"
},
"p7_office_move": {
  "part": 7,
  "type": "notice",
  "header": "NOTICE TO ALL EMPLOYEES: OFFICE RELOCATION",
  "body": "We are pleased to announce that Hartwell Financial Group will relocate its headquarters from 210 King Street to the Meridian Tower at 88 Harbor Avenue. The move will take place over the weekend of March 14–15, and normal operations will resume at the new location on Monday, March 16.\n\nTo help the moving company work efficiently, all employees are asked to remove every personal item from their desks by 5:00 P.M. on Friday, March 13. Boxes and labels will be distributed by the Facilities Department on March 9. Any items left behind after the deadline will be discarded.\n\nThe Meridian Tower is a five-minute walk from Central Station, and a company shuttle will also run between the station and the building every fifteen minutes during the morning and evening rush hours. Employee parking will be available in the underground garage for a monthly fee of $60.\n\nPlease direct any questions about the relocation to Ms. Dana Whitfield in the Facilities Department at extension 4421."
},
"p7_language_school": {
  "part": 7,
  "type": "advertisement",
  "header": "BRIGHTPATH LANGUAGE SCHOOL — NEW TERM STARTS FEBRUARY 10",
  "body": "Would you like to speak a new language with confidence? BrightPath Language School is now accepting registrations for the spring term. We offer courses in Spanish, French, Mandarin, and Korean for adult learners of all levels, from complete beginners to advanced speakers.\n\nOur most popular course, Evening Conversation, meets every Tuesday and Thursday from 7:00 P.M. to 8:30 P.M. To ensure that every student has plenty of speaking practice, each class is limited to eight students. For those who prefer to study during the day, Weekend Intensive classes are held on Saturdays from 9:00 A.M. to 1:00 P.M.\n\nTuition for the ten-week term is $420, plus a one-time enrollment fee of $30. Register by January 31 and receive a 15 percent discount on tuition. All course materials are included in the price.\n\nVisit our school at 512 Elm Street or register online at www.brightpathlanguage.example.com."
},
"p7_delivery_inquiry": {
  "part": 7,
  "type": "email",
  "header": "To: customer.service@furnishpro.com / From: m.alvarez@brightline-events.com / Subject: Delivery of Order #88412",
  "body": "Dear Customer Service Team,\n\nI am writing to ask about order #88412, which I placed on April 2 for twenty office chairs and five desks. When I placed the order, your Web site indicated that delivery would take five to seven business days. However, it is now April 16, and the items have still not arrived.\n\nThis is a serious problem for us because we are preparing for a company training event on April 24, and the furniture is needed for the event room. Could you please check the status of my order and let me know exactly when the delivery will take place? If the full order cannot be delivered by April 22, I would like to know whether a partial delivery of the chairs is possible.\n\nWhen you reply, I would appreciate it if you could confirm the delivery schedule in writing. I have attached a copy of my purchase receipt to this e-mail for your reference.\n\nThank you for your prompt attention to this matter.\n\nSincerely,\nMaria Alvarez\nOffice Manager, BrightLine Events"
},
"p7_cafe_opening": {
  "part": 7,
  "type": "article",
  "header": "New Café Brings Fresh Bread to Maple Street",
  "body": "Residents of the Maple Street neighborhood welcomed a new business on Saturday as Hoshino Bakery Café opened its doors at 14 Maple Street. More than one hundred customers visited on the first day, and by noon the café had sold out of its popular melon bread.\n\nThe café is owned by Kenji Hoshino, who spent twelve years working as a baker at several well-known hotels in the city before deciding to start his own business. \"I wanted to create a place where neighbors can relax and enjoy bread that is baked fresh every morning,\" Mr. Hoshino said.\n\nIn addition to bread and pastries, the café serves coffee made from beans roasted at the Tanaka Farm, located just outside the city. The menu also includes sandwiches and a daily soup made with seasonal vegetables.\n\nHoshino Bakery Café is open from 7:00 A.M. to 7:00 P.M. Tuesday through Sunday and is closed on Mondays. The café has seating for thirty customers, as well as a small terrace that will open in the spring."
},
"p7_museum_exhibition": {
  "part": 7,
  "type": "information",
  "header": "SPECIAL EXHIBITION: \"Colors of the Sea — Maritime Art from the 19th Century\"",
  "body": "The Riverdale Museum of Art is proud to present \"Colors of the Sea,\" a special exhibition featuring more than eighty paintings and drawings by European maritime artists of the nineteenth century. The exhibition will run from Saturday, October 4, through Sunday, December 21, in the museum's East Wing.\n\nAdmission to the special exhibition is 1,200 yen for adults and 600 yen for children aged 6 to 12. Children under 6 are admitted free of charge. Please note that on weekdays, adult tickets are discounted to 1,000 yen. Tickets may be purchased at the museum entrance or in advance through the museum's Web site.\n\nOn Saturdays and Sundays, visitors can join a free hands-on workshop in which they can try traditional watercolor techniques. Workshops begin at 11:00 A.M. and 2:00 P.M. and are limited to twenty participants each, on a first-come, first-served basis.\n\nThe museum is open from 9:30 A.M. to 5:30 P.M. and is closed on Mondays. Last admission is thirty minutes before closing."
},
"p7_driver_recruitment": {
  "part": 7,
  "type": "job posting",
  "header": "NOW HIRING: DELIVERY DRIVERS — SwiftHaul Logistics Co.",
  "body": "SwiftHaul Logistics Co. is seeking full-time delivery drivers to join our Osaka distribution center. Drivers will deliver packages to homes and businesses within the city using company vehicles and will typically complete 60 to 80 deliveries per day.\n\nRequirements:\n• A valid commercial driver's license (Class B or above)\n• At least two years of driving experience\n• The ability to lift packages weighing up to 25 kilograms\n• A clean driving record for the past three years\n\nWe offer a starting monthly salary of 290,000 yen, plus overtime pay and a transportation allowance. Shifts are five days per week, and drivers may choose either an early shift (6:00 A.M.–3:00 P.M.) or a late shift (1:00 P.M.–10:00 P.M.).\n\nNew drivers receive two weeks of paid training, during which they ride with an experienced driver to learn routes and delivery procedures. Uniforms and safety equipment are provided free of charge.\n\nTo apply, please send your resume to careers@swifthaul.example.co.jp by May 30. Selected applicants will be contacted for an interview within two weeks."
},
"p7_meeting_reschedule": {
  "part": 7,
  "type": "email",
  "header": "Subject: Marketing Meeting Rescheduled to Friday, March 13",
  "body": "Dear Team,\n\nI am writing to let you know that our weekly marketing meeting, originally scheduled for Thursday, March 12 at 10:00 a.m., has been moved to Friday, March 13 at 2:00 p.m. The change is necessary because Ms. Alvarez, our regional sales director, will be visiting the head office on Friday and would like to join the discussion.\n\nThe meeting will still be held in Conference Room B on the fourth floor, and it is expected to last about ninety minutes. Please bring the updated sales figures for February, as Ms. Alvarez will review the quarterly targets with us. If you have not yet submitted your monthly report, please send it to me by Wednesday afternoon so that I can prepare the summary documents.\n\nIf the new time conflicts with another appointment, please contact me as soon as possible so that we can make alternative arrangements.\n\nThank you for your understanding.\n\nBest regards,\nDaniel Kim\nMarketing Manager"
},
"p7_fare_revision": {
  "part": 7,
  "type": "notice",
  "header": "Notice: Fare Changes Effective April 1",
  "body": "City Transit Authority — Notice to Passengers\n\nThe City Transit Authority will revise fares on all bus and subway services beginning Wednesday, April 1. The changes are being made to cover rising fuel and maintenance costs.\n\nUnder the new rates, a standard one-way fare will increase from $2.50 to $2.75. A ten-trip ticket will cost $24.00, up from $22.50. The monthly pass will rise from $80.00 to $88.00.\n\nFares for seniors and students will remain unchanged, and children under six will continue to ride free when accompanied by an adult. Passengers who purchased a monthly pass before April 1 may continue to use it until it expires.\n\nNew fare charts will be posted at all stations by March 20. For details, visit www.citytransit.example or call the information line at 555-0147."
},
"p7_restaurant_review": {
  "part": 7,
  "type": "review",
  "header": "The Olive Branch — ★★★★☆ (4 out of 5 stars)",
  "body": "The Olive Branch, a Mediterranean restaurant that opened on Harbor Street last spring, has quickly become one of the most talked-about dining spots in the neighborhood.\n\nOn my visit last Saturday, the dining room was nearly full by seven o'clock, yet the staff remained calm and attentive. Our server explained the specials in detail and happily adjusted a dish for my companion, who cannot eat nuts.\n\nThe grilled sea bass, served with lemon and herbs, was excellent — fresh, light, and generously portioned. The lamb kebabs were flavorful, though slightly overcooked. For dessert, the baklava was crisp and not overly sweet.\n\nPrices are reasonable for the quality: most main courses cost between $18 and $26. My only complaint concerns parking; the small lot behind the restaurant fills up quickly, and street parking nearby is limited.\n\nOverall, The Olive Branch is well worth a visit. I recommend booking a table in advance, especially on weekends."
},
"p7_charity_walk": {
  "part": 7,
  "type": "article",
  "header": "Record Turnout at Eighth Annual Walk for Hope",
  "body": "More than 1,200 people gathered at Riverside Park on Sunday morning for the eighth annual Walk for Hope, a charity event held to raise money for the city's children's hospital.\n\nParticipants walked a five-kilometer course along the river, cheered on by local bands and volunteers handing out water. This year's event raised a record $54,000 through registration fees and donations, exceeding last year's total by $9,000.\n\n'We are grateful to everyone who took part,' said event organizer Maria Santos. 'The money will be used to buy new equipment for the hospital's children's ward and to fund its weekend play program.'\n\nLocal businesses also supported the event. Harbor Bakery provided free breakfast for the volunteers, and City Sports donated 200 T-shirts for the first walkers to register.\n\nThe ninth Walk for Hope is scheduled for next October, and registration will open in August through the hospital's website."
},
"p7_furniture_sale": {
  "part": 7,
  "type": "advertisement",
  "header": "Comfort Living Furniture — Winter Clearance Sale",
  "body": "Comfort Living Furniture is holding its biggest clearance sale of the year from January 16 to January 25 at our downtown store on Fifth Avenue.\n\nSave up to 40 percent on selected sofas, dining sets, and bedroom furniture. Our popular three-seat Haven sofa, originally priced at $1,500, is now available for $900. Dining tables are reduced by 25 percent, and all lamps and rugs are half price while supplies last.\n\nCustomers who spend $499 or more will receive free delivery within the city. In addition, anyone who opens a Comfort Living store card during the sale will receive an extra 10 percent off their first purchase.\n\nThe store will be open extended hours during the sale, from 9:00 a.m. to 9:00 p.m. daily. Visit us soon — once these items are gone, they will not be restocked."
},
"p7_airport_shuttle": {
  "part": 7,
  "type": "information",
  "header": "Blue Line Shuttle: Airport Service Timetable and Information",
  "body": "The Blue Line Shuttle provides direct service between Central Station and Westfield International Airport. The trip takes approximately 45 minutes, depending on traffic.\n\nBuses depart from Central Station every 30 minutes. The first bus leaves at 5:00 a.m., and the last bus leaves at 11:00 p.m. Buses also depart from the airport every 30 minutes, beginning at 6:00 a.m.\n\nA one-way ticket costs $12 for adults and $6 for children under 12. Tickets must be purchased in advance through our website or at the ticket machines at Central Station; drivers do not sell tickets and cannot accept cash.\n\nEach passenger may bring one large suitcase and one small carry-on bag free of charge. Additional bags cost $5 each. Passengers traveling with bicycles or other oversized items should contact us at least 24 hours in advance, as space is limited.\n\nPlease arrive at the stop at least 10 minutes before departure. Buses cannot wait for late passengers."
},
"p7_venue_booking": {
  "part": 7,
  "type": "double email",
  "sections": [
    {
      "header": "E-mail from Dana Whitfield to Kenji Mori — February 10",
      "body": "Dear Mr. Mori,\nI am writing to reserve a room at Sakura Hall for a one-day training seminar for our staff. We would like to hold the event on Friday, March 13, from 9:00 A.M. to 5:00 P.M., and we expect about 60 employees to attend. We will need a projector and screen for presentations, and we would also like to arrange a buffet lunch for all participants.\nOur keynote speaker, Dr. Alan Reyes, will be joining us from overseas, and Friday is the only day he is available that week. Could you please let me know whether a suitable room is free on that date, and send me an estimate of the total cost?\nThank you.\nDana Whitfield\nBrightpath Consulting"
    },
    {
      "header": "E-mail from Kenji Mori to Dana Whitfield — February 12",
      "body": "Dear Ms. Whitfield,\nThank you for your inquiry. Unfortunately, both of our large rooms are already booked on Friday, March 13. However, Room A, which seats up to 120 people, is available on Saturday, March 14, and Friday, March 20.\nThe rental fee for Room A is ¥85,000 for a full day, and this includes the use of a projector and screen. Our buffet lunch is ¥1,800 per person. If you confirm a booking, we ask that you pay a deposit of 30 percent of the total cost within five business days.\nPlease let me know which date you prefer, and I will prepare a detailed estimate.\nKenji Mori\nSakura Hall"
    }
  ]
},
"p7_kyoto_tour": {
  "part": 7,
  "type": "double advertisement and email",
  "sections": [
    {
      "header": "Advertisement — Highland Trails Travel",
      "body": "Discover the colors of autumn with our Kyoto Autumn Leaves Tour! This three-day, two-night trip runs from November 21 to 23 and costs ¥68,000 per person. The price includes round-trip bus transportation from Kyoto Station, two nights at the Arashiyama Riverside Hotel, and breakfast each morning. Book by October 31 and receive a 10 percent early-booking discount. For an additional ¥4,000 per person, you can join a traditional tea ceremony led by a local tea master. The tour departs Kyoto Station at 8:30 A.M. on November 21, and a minimum of ten participants is required. Reserve your seats today!"
    },
    {
      "header": "E-mail from Paul Andersen to Highland Trails Travel — October 28",
      "body": "Dear Highland Trails staff,\nI saw your advertisement for the Kyoto Autumn Leaves Tour and would like to book two seats, for myself and my wife, for the November 21 departure. Since I am writing before the end of October, I understand that the early-booking discount will apply. Please add the tea ceremony for both of us as well.\nBefore I send my payment, I have one question: my wife does not eat meat, so could you tell me whether vegetarian meals can be arranged at the hotel? Also, please confirm the total amount I should pay.\nThank you.\nPaul Andersen"
    }
  ]
},
"p7_training_program": {
  "part": 7,
  "type": "triple",
  "sections": [
    {
      "header": "Notice from the Human Resources Department — March 10",
      "body": "The Human Resources Department is pleased to announce this year's Spring Skills Training Program. Four workshops will be offered in April: Excel Basics, Presentation Skills, Project Management, and Data Analysis. Each employee may enroll in a maximum of two workshops, and enrollment must be completed through the company portal by Friday, March 28. All workshops were originally scheduled to be held in Seminar Room B; however, please check the final schedule below, as some rooms have been changed. Employees who complete a workshop will receive a certificate of completion. Department managers have been asked to adjust work schedules so that interested staff can attend."
    },
    {
      "header": "E-mail from Ryo Nakamura to the Human Resources Department — March 20",
      "body": "Dear HR team,\nI have enrolled in two workshops through the portal: Project Management and Data Analysis. I am writing because my supervisor has scheduled a meeting with an important client on the afternoon of April 15, and I am worried that it may overlap with one of my workshops. Could you tell me whether I will still be able to attend the full session?\nAlso, if there are still seats available, I would like to join Excel Basics as well. Please let me know if that is possible.\nThank you.\nRyo Nakamura\nSales Department"
    },
    {
      "header": "Spring Skills Training Program — Final Schedule (updated March 24)",
      "body": "Excel Basics — Wednesday, April 8, 9:30 A.M.–12:30 P.M., Room 301, Instructor: Ms. Ito\nPresentation Skills — Friday, April 10, 1:00 P.M.–4:00 P.M., Room 301, Instructor: Mr. Grant\nProject Management — Wednesday, April 15, 9:30 A.M.–4:30 P.M., Room 402, Instructor: Ms. Park\nData Analysis — Friday, April 17, 9:30 A.M.–4:30 P.M., Room 402, Instructor: Mr. Osei\nNote: All rooms were changed from Seminar Room B on March 24.\nEnrollment is through the company portal only, and the deadline is March 28. Please arrive at least ten minutes before the start of each session and bring your employee ID card. Questions should be directed to the Human Resources Department at extension 2140."
    }
  ]
}
};

/* =====================================================================
   QUESTION BANK — 100 items
   ---------------------------------------------------------------------
   Imported from LexSophia_TOEIC_Reading_100Q_Pool_Design.xlsx
   (Question Bank sheet), with editorial grammar corrections where needed.
   Part 5: 60 | Part 6: 16 | Part 7: 24.
   Fields: id, part, passageId?, blank?, focus, skill, difficulty,
           text, choices[4], answer (0-3 index into choices).
   IDs are stable and are the key for future item-level analytics; edit or
   remove an individual item by its id without touching anything else.
   Answer-choice order is intentionally NOT shuffled at runtime.
   ===================================================================== */

const QUESTION_BANK = [
  /* ---------------- Part 5: Incomplete sentences (60) ---------------- */
  { id: "p5-01", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "easy",
    text: "The quarterly financial report must be reviewed ___ before it is distributed to shareholders.",
    choices: ["thorough", "thoroughly", "thoroughness", "more thorough"], answer: 1 },
  { id: "p5-02", part: 5, focus: "verb tense", skill: "grammar", difficulty: "medium",
    text: "By the time the auditors arrive next Monday, the finance team ___ all of the expense records.",
    choices: ["compiled", "has compiled", "will have compiled", "is compiling"], answer: 2 },
  { id: "p5-03", part: 5, focus: "prepositions", skill: "grammar", difficulty: "medium",
    text: "Travel expense claims must be submitted ___ 30 days of the employee's return from the trip.",
    choices: ["within", "until", "since", "among"], answer: 0 },
  { id: "p5-04", part: 5, focus: "conjunctions", skill: "structure", difficulty: "medium",
    text: "___ the company's profits rose last year, its share price fell by nearly 12 percent.",
    choices: ["Despite", "However", "Although", "Because of"], answer: 2 },
  { id: "p5-05", part: 5, focus: "relative pronouns", skill: "grammar", difficulty: "medium",
    text: "Applicants ___ résumés are received after the deadline will not be considered for the position.",
    choices: ["who", "whose", "which", "whom"], answer: 1 },
  { id: "p5-06", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "medium",
    text: "The new supplier was selected primarily because of its ___ delivery record and competitive pricing.",
    choices: ["reliable", "capable", "probable", "available"], answer: 0 },
  { id: "p5-07", part: 5, focus: "collocations", skill: "vocabulary", difficulty: "easy",
    text: "Please ___ the attached form and return it to Human Resources by the end of the week.",
    choices: ["complete", "fulfill", "achieve", "conduct"], answer: 0 },
  { id: "p5-08", part: 5, focus: "sentence structure", skill: "structure", difficulty: "hard",
    text: "The board members considered ___ the merger vote until the legal review was finished.",
    choices: ["to postpone", "postponed", "postpone", "postponing"], answer: 3 },
  { id: "p5-09", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "hard",
    text: "Because the two departments' budget estimates were ___, the finance director requested a full reconciliation.",
    choices: ["inconsistent", "incapable", "indifferent", "inconvenient"], answer: 0 },
  { id: "p5-10", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "easy",
    text: "The ___ of the revised employee handbook has been delayed until the legal team finishes its review.",
    choices: ["distribute", "distributed", "distribution", "distributable"], answer: 2 },

  /* ---------------- Part 6: Text completion (16, four 4-question sets) ---------------- */
  { id: "p6-11", part: 6, passageId: "p6_relocation", blank: 11, focus: "verb form", skill: "grammar", difficulty: "medium",
    text: "Choose the best answer for blank (11).",
    choices: ["begin", "beginning", "begun", "to beginning"], answer: 1 },
  { id: "p6-12", part: 6, passageId: "p6_relocation", blank: 12, focus: "sentence insertion", skill: "reading", difficulty: "hard",
    text: "Choose the best sentence for blank (12).",
    choices: ["However, we ask that the contents of all desks be packed in advance by your staff.", "Our new warehouse opened in downtown Portland last spring.", "The invoice for your previous move is attached for your records.", "Many of our crew members have been with the company for over a decade."], answer: 0 },
  { id: "p6-13", part: 6, passageId: "p6_relocation", blank: 13, focus: "transition words", skill: "structure", difficulty: "medium",
    text: "Choose the best answer for blank (13).",
    choices: ["Therefore", "Similarly", "However", "Otherwise"], answer: 2 },
  { id: "p6-14", part: 6, passageId: "p6_relocation", blank: 14, focus: "vocabulary", skill: "vocabulary", difficulty: "medium",
    text: "Choose the best answer for blank (14).",
    choices: ["notify", "modify", "apply", "remind"], answer: 1 },

  /* ---------------- Part 7: Reading comprehension (24, eight 3-question sets) ---------------- */
  { id: "p7-15", part: 7, passageId: "p7_expense", focus: "purpose", skill: "reading", difficulty: "easy",
    text: "What is the purpose of the notice?",
    choices: ["To announce a change in how expenses are submitted", "To remind employees of the annual travel budget", "To introduce a new department head", "To explain how to book business trips"], answer: 0 },
  { id: "p7-16", part: 7, passageId: "p7_expense", focus: "paraphrased detail", skill: "reading", difficulty: "medium",
    text: "According to the notice, when should receipts be uploaded?",
    choices: ["Within 30 days of the trip", "At the end of each month", "When the expense occurs", "After a department head approves them"], answer: 2 },
  { id: "p7-17", part: 7, passageId: "p7_expense", focus: "inference", skill: "reading", difficulty: "hard",
    text: "What is suggested about the training sessions?",
    choices: ["They are mandatory for all staff.", "They will be led by the IT Service Desk.", "They are most useful for employees who travel often.", "They will be repeated in July."], answer: 2 },
  { id: "p7-18", part: 7, passageId: "p7_print", focus: "paraphrased detail", skill: "reading", difficulty: "medium",
    text: "What does Ms. Brandt ask about in her e-mail?",
    choices: ["Whether the printer can deliver to more than one location", "Whether reduced pricing applies to large orders", "Whether a design service is available", "Whether the brochures can be printed in two languages"], answer: 1 },
  { id: "p7-19", part: 7, passageId: "p7_print", focus: "cross-passage inference", skill: "reading", difficulty: "medium",
    text: "What is suggested about the quoted price?",
    choices: ["It is higher than Verve Media's budget.", "It does not include delivery charges.", "It already reflects the discount Ms. Brandt asked about.", "It is valid only until March 11."], answer: 2 },
  { id: "p7-20", part: 7, passageId: "p7_print", focus: "inference", skill: "reading", difficulty: "hard",
    text: "What will most likely happen if Ms. Brandt chooses the recycled paper?",
    choices: ["The brochures may arrive after the requested date.", "The 10 percent discount will no longer apply.", "Delivery to Bristol will incur an extra charge.", "The order will need to be reduced to 1,000 copies."], answer: 0 },

  /* ---------------- Part 5: Incomplete sentences (60) ---------------- */
  { id: "p5-21", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "easy",
    text: "The marketing team responded ___ to the unexpected increase in customer inquiries.",
    choices: ["prompt", "promptly", "promptness", "prompting"], answer: 1 },
  { id: "p5-22", part: 5, focus: "verb tense", skill: "grammar", difficulty: "medium",
    text: "Ms. Ortiz ___ three client meetings before she left for the airport yesterday afternoon.",
    choices: ["conducts", "has conducted", "had conducted", "will conduct"], answer: 2 },
  { id: "p5-23", part: 5, focus: "prepositions", skill: "grammar", difficulty: "easy",
    text: "The conference room is available ___ 2:00 P.M. and 5:00 P.M. on Thursday.",
    choices: ["between", "during", "through", "along"], answer: 0 },
  { id: "p5-24", part: 5, focus: "conjunctions", skill: "structure", difficulty: "medium",
    text: "The shipment will leave today ___ the final inspection is completed by noon.",
    choices: ["unless", "provided that", "despite", "whereas"], answer: 1 },
  { id: "p5-25", part: 5, focus: "relative pronouns", skill: "grammar", difficulty: "medium",
    text: "The consultant with ___ we discussed the expansion plan will return next week.",
    choices: ["who", "whose", "whom", "which"], answer: 2 },
  { id: "p5-26", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "easy",
    text: "Customers may request a full ___ if the product is returned within 14 days.",
    choices: ["refund", "renewal", "receipt", "revenue"], answer: 0 },
  { id: "p5-27", part: 5, focus: "collocations", skill: "vocabulary", difficulty: "medium",
    text: "The director will ___ a decision after reviewing the final proposal.",
    choices: ["do", "make", "take", "set"], answer: 1 },
  { id: "p5-28", part: 5, focus: "sentence structure", skill: "structure", difficulty: "hard",
    text: "Only after the safety inspection ___ permission to reopen the factory.",
    choices: ["the manager received", "did the manager receive", "the manager did receive", "received the manager"], answer: 1 },
  { id: "p5-29", part: 5, focus: "pronouns", skill: "grammar", difficulty: "easy",
    text: "Each department is responsible for updating ___ own contact list by Friday.",
    choices: ["its", "their", "his", "our"], answer: 0 },
  { id: "p5-30", part: 5, focus: "subject-verb agreement", skill: "grammar", difficulty: "medium",
    text: "A series of workshops on workplace safety ___ scheduled for next month.",
    choices: ["are", "were", "is", "have"], answer: 2 },
  { id: "p5-31", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "medium",
    text: "The company will provide ___ assistance to employees relocating overseas.",
    choices: ["finance", "financial", "financially", "financed"], answer: 1 },
  { id: "p5-32", part: 5, focus: "verb tense", skill: "grammar", difficulty: "easy",
    text: "The museum ___ at 9:30 A.M. every day except Monday.",
    choices: ["opens", "opened", "has opened", "will have opened"], answer: 0 },
  { id: "p5-33", part: 5, focus: "prepositions", skill: "grammar", difficulty: "medium",
    text: "All applicants must submit two references ___ addition to the completed application form.",
    choices: ["at", "in", "on", "for"], answer: 1 },
  { id: "p5-34", part: 5, focus: "conjunctions", skill: "structure", difficulty: "easy",
    text: "Please contact the help desk ___ you experience any difficulty installing the update.",
    choices: ["if", "despite", "until", "whereas"], answer: 0 },
  { id: "p5-35", part: 5, focus: "relative pronouns", skill: "grammar", difficulty: "hard",
    text: "The research facility, several rooms of ___ were renovated last year, will host the delegation.",
    choices: ["that", "which", "what", "whom"], answer: 1 },
  { id: "p5-36", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "medium",
    text: "The new accounting software is designed to ___ the amount of time spent processing invoices.",
    choices: ["reduce", "decline", "lowering", "decreaseable"], answer: 0 },
  { id: "p5-37", part: 5, focus: "collocations", skill: "vocabulary", difficulty: "easy",
    text: "Employees are encouraged to ___ advantage of the free training sessions.",
    choices: ["make", "take", "have", "use"], answer: 1 },
  { id: "p5-38", part: 5, focus: "sentence structure", skill: "structure", difficulty: "medium",
    text: "The maintenance crew expects ___ the repairs by the end of the day.",
    choices: ["complete", "completing", "to complete", "completed"], answer: 2 },
  { id: "p5-39", part: 5, focus: "determiners", skill: "grammar", difficulty: "medium",
    text: "There are only ___ seats remaining for Friday's presentation, so early registration is recommended.",
    choices: ["few", "a few", "little", "a little"], answer: 1 },
  { id: "p5-40", part: 5, focus: "subject-verb agreement", skill: "grammar", difficulty: "hard",
    text: "Neither the regional manager nor the sales representatives ___ available for comment yesterday.",
    choices: ["was", "were", "has been", "is"], answer: 1 },
  { id: "p5-41", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "easy",
    text: "The hotel lobby has been ___ redesigned to improve accessibility.",
    choices: ["complete", "completion", "completely", "completedly"], answer: 2 },
  { id: "p5-42", part: 5, focus: "verb tense", skill: "grammar", difficulty: "medium",
    text: "Since joining the company in 2023, Mr. Lee ___ several major software projects.",
    choices: ["leads", "led", "has led", "will lead"], answer: 2 },
  { id: "p5-43", part: 5, focus: "prepositions", skill: "grammar", difficulty: "medium",
    text: "The revised policy will remain in effect ___ further notice.",
    choices: ["by", "until", "since", "during"], answer: 1 },
  { id: "p5-44", part: 5, focus: "conjunctions", skill: "structure", difficulty: "hard",
    text: "___ the weather improves, the outdoor product demonstration will be moved indoors.",
    choices: ["Unless", "Because of", "While", "In spite of"], answer: 0 },
  { id: "p5-45", part: 5, focus: "relative pronouns", skill: "grammar", difficulty: "easy",
    text: "The employee ___ submitted the winning design will receive a special award.",
    choices: ["which", "whose", "who", "whom"], answer: 2 },
  { id: "p5-46", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "medium",
    text: "Because demand has been stronger than expected, the manufacturer plans to ___ production next quarter.",
    choices: ["expand", "extendable", "enlarge on", "spread out"], answer: 0 },
  { id: "p5-47", part: 5, focus: "collocations", skill: "vocabulary", difficulty: "medium",
    text: "Before making a purchase, customers should ___ the terms of the warranty carefully.",
    choices: ["review", "watch", "look", "inspect on"], answer: 0 },
  { id: "p5-48", part: 5, focus: "sentence structure", skill: "structure", difficulty: "easy",
    text: "Ms. Chen asked the receptionist ___ the meeting room for two hours.",
    choices: ["reserve", "to reserve", "reserving", "reserved"], answer: 1 },
  { id: "p5-49", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "hard",
    text: "The committee questioned the ___ of expanding into a market with such high distribution costs.",
    choices: ["feasible", "feasibly", "feasibility", "feasibleness"], answer: 2 },
  { id: "p5-50", part: 5, focus: "verb tense", skill: "grammar", difficulty: "hard",
    text: "If the supplier had informed us earlier, we ___ an alternative shipment in time.",
    choices: ["arrange", "would arrange", "would have arranged", "had arranged"], answer: 2 },
  { id: "p5-51", part: 5, focus: "prepositions", skill: "grammar", difficulty: "easy",
    text: "The annual report is available ___ the company's website.",
    choices: ["on", "at", "to", "with"], answer: 0 },
  { id: "p5-52", part: 5, focus: "conjunctions", skill: "structure", difficulty: "medium",
    text: "Mr. Patel will lead the presentation, ___ Ms. Gomez will answer questions from the audience.",
    choices: ["whereas", "because of", "despite", "unless"], answer: 0 },
  { id: "p5-53", part: 5, focus: "relative pronouns", skill: "grammar", difficulty: "medium",
    text: "The warehouse ___ the replacement parts are stored is located near the airport.",
    choices: ["who", "where", "whose", "whom"], answer: 1 },
  { id: "p5-54", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "easy",
    text: "The restaurant will be closed temporarily while the kitchen is being ___.",
    choices: ["renovated", "reserved", "recruited", "repeated"], answer: 0 },
  { id: "p5-55", part: 5, focus: "collocations", skill: "vocabulary", difficulty: "hard",
    text: "The board agreed to ___ responsibility for the additional costs caused by the delay.",
    choices: ["hold", "take", "carry on", "bring"], answer: 1 },
  { id: "p5-56", part: 5, focus: "sentence structure", skill: "structure", difficulty: "medium",
    text: "We recommend that all visitors ___ their identification badges at all times.",
    choices: ["wear", "wears", "wore", "wearing"], answer: 0 },
  { id: "p5-57", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "medium",
    text: "The CEO gave a remarkably ___ explanation of the company's long-term strategy.",
    choices: ["clarity", "clear", "clearly", "clearing"], answer: 1 },
  { id: "p5-58", part: 5, focus: "verb tense", skill: "grammar", difficulty: "easy",
    text: "The customer service team usually ___ within one business day.",
    choices: ["responds", "responded", "has responded", "will have responded"], answer: 0 },
  { id: "p5-59", part: 5, focus: "prepositions", skill: "grammar", difficulty: "medium",
    text: "The discount applies only ___ orders placed before September 30.",
    choices: ["for", "to", "with", "from"], answer: 1 },
  { id: "p5-60", part: 5, focus: "conjunctions", skill: "structure", difficulty: "easy",
    text: "The office will remain open ___ the renovation work is being completed on another floor.",
    choices: ["while", "unless", "because of", "despite"], answer: 0 },
  { id: "p5-61", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "hard",
    text: "The committee decided that the proposed timeline was too ___ to allow for proper testing.",
    choices: ["ambitious", "obedient", "generous", "steady"], answer: 0 },
  { id: "p5-62", part: 5, focus: "collocations", skill: "vocabulary", difficulty: "medium",
    text: "The company plans to ___ a survey to learn more about customer preferences.",
    choices: ["conduct", "perform to", "make out", "operate"], answer: 0 },
  { id: "p5-63", part: 5, focus: "sentence structure", skill: "structure", difficulty: "hard",
    text: "Not until the contract was signed ___ the construction team begin work on the site.",
    choices: ["could", "the team could", "could the team", "the team can"], answer: 2 },
  { id: "p5-64", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "easy",
    text: "The new security system can be installed ___ without interrupting normal business operations.",
    choices: ["easy", "easier", "easily", "ease"], answer: 2 },
  { id: "p5-65", part: 5, focus: "verb tense", skill: "grammar", difficulty: "medium",
    text: "The engineering team ___ the prototype for six months before presenting it to investors.",
    choices: ["develops", "had been developing", "will develop", "has developed"], answer: 1 },
  { id: "p5-66", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "medium",
    text: "The hotel offers a ___ shuttle service between the airport and the city center.",
    choices: ["complimentary", "temporary", "alternative", "considerable"], answer: 0 },
  { id: "p5-67", part: 5, focus: "collocations", skill: "vocabulary", difficulty: "easy",
    text: "Visitors are asked to ___ attention to the safety instructions posted near the entrance.",
    choices: ["give", "pay", "make", "bring"], answer: 1 },
  { id: "p5-68", part: 5, focus: "parts of speech", skill: "grammar", difficulty: "medium",
    text: "The success of the campaign depends largely on the ___ of the information provided to customers.",
    choices: ["accurate", "accurately", "accuracy", "accurateness"], answer: 2 },
  { id: "p5-69", part: 5, focus: "vocabulary", skill: "vocabulary", difficulty: "hard",
    text: "To avoid delays, managers were asked to ___ any staffing concerns before the holiday period began.",
    choices: ["address", "locate", "attend", "face toward"], answer: 0 },
  { id: "p5-70", part: 5, focus: "sentence structure", skill: "structure", difficulty: "medium",
    text: "The revised schedule allows employees ___ their training sessions at more convenient times.",
    choices: ["attend", "attending", "to attend", "attended"], answer: 2 },

  /* ---------------- Part 6: Text completion (16, four 4-question sets) ---------------- */
  { id: "p6-15", part: 6, passageId: "p6_training", blank: 71, focus: "verb form", skill: "grammar", difficulty: "medium",
    text: "Choose the best answer for blank (71).",
    choices: ["held", "holding", "which will be held", "has held"], answer: 2 },
  { id: "p6-16", part: 6, passageId: "p6_training", blank: 72, focus: "sentence insertion", skill: "reading", difficulty: "hard",
    text: "Choose the best sentence for blank (72).",
    choices: ["The bank opened its newest branch in June.", "The program was developed after a review of recent customer feedback.", "Several managers have already changed departments.", "The central training center is closed on Sundays."], answer: 1 },
  { id: "p6-17", part: 6, passageId: "p6_training", blank: 73, focus: "transition words", skill: "structure", difficulty: "medium",
    text: "Choose the best answer for blank (73).",
    choices: ["In addition", "For example", "However", "Otherwise"], answer: 2 },
  { id: "p6-18", part: 6, passageId: "p6_training", blank: 74, focus: "vocabulary", skill: "vocabulary", difficulty: "easy",
    text: "Choose the best answer for blank (74).",
    choices: ["consult", "borrow", "receive", "divide"], answer: 0 },
  { id: "p6-19", part: 6, passageId: "p6_subscription", blank: 75, focus: "gerund/infinitive", skill: "grammar", difficulty: "medium",
    text: "Choose the best answer for blank (75).",
    choices: ["renew", "renewing", "renewed", "renewal"], answer: 1 },
  { id: "p6-20", part: 6, passageId: "p6_subscription", blank: 76, focus: "sentence insertion", skill: "reading", difficulty: "hard",
    text: "Choose the best sentence for blank (76).",
    choices: ["Monthly plans are not eligible for this offer.", "Our headquarters recently moved to a larger building.", "Most customers use the service on mobile devices.", "The help center closes at 6:00 P.M. on Fridays."], answer: 0 },
  { id: "p6-21", part: 6, passageId: "p6_subscription", blank: 77, focus: "transition words", skill: "structure", difficulty: "medium",
    text: "Choose the best answer for blank (77).",
    choices: ["Nevertheless", "Otherwise", "Likewise", "Meanwhile"], answer: 1 },
  { id: "p6-22", part: 6, passageId: "p6_subscription", blank: 78, focus: "vocabulary", skill: "vocabulary", difficulty: "easy",
    text: "Choose the best answer for blank (78).",
    choices: ["contact", "combine", "approach to", "arrive"], answer: 0 },
  { id: "p6-23", part: 6, passageId: "p6_facility", blank: 79, focus: "vocabulary", skill: "vocabulary", difficulty: "medium",
    text: "Choose the best answer for blank (79).",
    choices: ["use", "carry", "apply", "pass"], answer: 0 },
  { id: "p6-24", part: 6, passageId: "p6_facility", blank: 80, focus: "sentence insertion", skill: "reading", difficulty: "hard",
    text: "Choose the best sentence for blank (80).",
    choices: ["The security gates were purchased from a local manufacturer.", "Temporary signs will direct people from the parking area to the correct doors.", "The cafeteria menu will also change next week.", "Employees may request new parking permits in February."], answer: 1 },
  { id: "p6-25", part: 6, passageId: "p6_facility", blank: 81, focus: "transition words", skill: "structure", difficulty: "hard",
    text: "Choose the best answer for blank (81).",
    choices: ["As a result", "Similarly", "For instance", "In contrast"], answer: 0 },
  { id: "p6-26", part: 6, passageId: "p6_facility", blank: 82, focus: "vocabulary", skill: "vocabulary", difficulty: "medium",
    text: "Choose the best answer for blank (82).",
    choices: ["patience", "permission", "arrival", "operation"], answer: 0 },

  /* ---------------- Part 7: Reading comprehension (24, eight 3-question sets) ---------------- */
  { id: "p7-21", part: 7, passageId: "p7_library_event", focus: "purpose", skill: "reading", difficulty: "easy",
    text: "What is the main purpose of the notice?",
    choices: ["To promote a library event", "To announce new library membership fees", "To recruit volunteers for a book sale", "To explain changes to library opening hours"], answer: 0 },
  { id: "p7-22", part: 7, passageId: "p7_library_event", focus: "detail", skill: "reading", difficulty: "medium",
    text: "What may happen after 6:20 P.M.?",
    choices: ["The author may begin signing books.", "Reserved seats may be given to walk-in visitors.", "The lecture room may be moved downstairs.", "The municipal garage may begin charging a fee."], answer: 1 },
  { id: "p7-23", part: 7, passageId: "p7_library_event", focus: "inference", skill: "reading", difficulty: "hard",
    text: "What is suggested about visitors who drive to the event?",
    choices: ["They should arrive before 6:00 P.M.", "They may need to park away from the library.", "They must register their vehicles in advance.", "They will receive a parking voucher from the author."], answer: 1 },
  { id: "p7-24", part: 7, passageId: "p7_vendor_invoice", focus: "detail", skill: "reading", difficulty: "easy",
    text: "Which item has not yet arrived?",
    choices: ["Printer paper", "Desk organizers", "Monitor stands", "Shipping labels"], answer: 2 },
  { id: "p7-25", part: 7, passageId: "p7_vendor_invoice", focus: "cross-passage inference", skill: "reading", difficulty: "medium",
    text: "Why will payment for part of the invoice be delayed?",
    choices: ["The invoice total is incorrect.", "Some goods are still on back order.", "The delivery fee was not waived.", "The payment deadline has already passed."], answer: 1 },
  { id: "p7-26", part: 7, passageId: "p7_vendor_invoice", focus: "cross-passage detail", skill: "reading", difficulty: "hard",
    text: "What can be inferred about the order total?",
    choices: ["It is more than $500.", "It includes an express-delivery charge.", "It was paid before the delivery arrived.", "It contains fewer than six different products."], answer: 0 },
  { id: "p7-27", part: 7, passageId: "p7_train_schedule", focus: "detail", skill: "reading", difficulty: "medium",
    text: "What will happen to the 8:10 A.M. express?",
    choices: ["It will depart earlier than usual.", "It will leave at 8:35 A.M. and make local stops.", "It will operate only on Sunday.", "It will terminate at Lakeside."], answer: 1 },
  { id: "p7-28", part: 7, passageId: "p7_train_schedule", focus: "paraphrase", skill: "reading", difficulty: "medium",
    text: "What may passengers do with a ticket for a canceled train?",
    choices: ["Use it on another service that day", "Exchange it only at Harbor City Station", "Use it on Monday instead", "Receive a meal voucher"], answer: 0 },
  { id: "p7-29", part: 7, passageId: "p7_train_schedule", focus: "inference", skill: "reading", difficulty: "hard",
    text: "Who would most likely need to change travel plans?",
    choices: ["A passenger planning to take the 9:20 A.M. express on Saturday", "A passenger traveling on Monday afternoon", "A passenger leaving Harbor City at 7:40 A.M.", "A passenger using the municipal bus system"], answer: 0 },
  { id: "p7-30", part: 7, passageId: "p7_hotel_reviews", focus: "detail", skill: "reading", difficulty: "easy",
    text: "Which benefit is included in the Spring Business Package?",
    choices: ["Free meeting-room rental", "Complimentary breakfast", "Two airport shuttle rides", "A room upgrade"], answer: 1 },
  { id: "p7-31", part: 7, passageId: "p7_hotel_reviews", focus: "cross-passage inference", skill: "reading", difficulty: "medium",
    text: "Why does Ms. Morgan contact the hotel?",
    choices: ["To cancel a reservation", "To ask about two services related to her stay", "To request a discount on a longer stay", "To complain about a shuttle delay"], answer: 1 },
  { id: "p7-32", part: 7, passageId: "p7_hotel_reviews", focus: "cross-passage detail", skill: "reading", difficulty: "hard",
    text: "Which request from Ms. Morgan is not covered by the package?",
    choices: ["Breakfast during her stay", "A late checkout", "Use of an airport shuttle", "A meeting room on April 19"], answer: 3 },
  { id: "p7-33", part: 7, passageId: "p7_software_update", focus: "purpose", skill: "reading", difficulty: "medium",
    text: "Why was the memo written?",
    choices: ["To announce a required software update", "To introduce a new design department", "To request feedback about a training course", "To explain a change in remote-work policy"], answer: 0 },
  { id: "p7-34", part: 7, passageId: "p7_software_update", focus: "detail", skill: "reading", difficulty: "medium",
    text: "What should remote employees do before Tuesday morning?",
    choices: ["Back up files to an external drive", "Open the Orion updater and follow the instructions", "Contact Technical Support for a password", "Visit the office to install the update"], answer: 1 },
  { id: "p7-35", part: 7, passageId: "p7_software_update", focus: "inference", skill: "reading", difficulty: "hard",
    text: "Why are employees advised to save their work before installation?",
    choices: ["The update removes older project files.", "The computer must restart during installation.", "The tutorial requires a separate login.", "The network will be unavailable on Monday."], answer: 1 },
  { id: "p7-36", part: 7, passageId: "p7_job_fair", focus: "detail", skill: "reading", difficulty: "medium",
    text: "Who can enter the expo for free?",
    choices: ["Anyone who arrives before 10:00 A.M.", "Students and recent graduates who register by September 10", "Only members of university career clubs", "People with resume-review appointments"], answer: 1 },
  { id: "p7-37", part: 7, passageId: "p7_job_fair", focus: "cross-passage inference", skill: "reading", difficulty: "medium",
    text: "What does Ms. Park suggest Marketing Club members bring?",
    choices: ["A printed résumé", "A student ID card", "An $8 admission fee", "A list of references"], answer: 0 },
  { id: "p7-38", part: 7, passageId: "p7_job_fair", focus: "cross-passage distinction", skill: "reading", difficulty: "hard",
    text: "What is indicated about Ms. Park's company?",
    choices: ["It will leave the expo at 1:30 P.M.", "It charges for résumé feedback.", "It is not part of the expo's official résumé-review program.", "It accepts only candidates from the technology field."], answer: 2 }
,   { id: "p7-45", part: 7, passageId: "p7_bakery", focus: "main purpose", skill: "reading", difficulty: "easy",     text: "What is the article mainly about?",     choices: ["The expansion of a bakery business", "A new type of bread developed by a bakery", "A change in the ownership of a bakery chain", "The history of farmers markets in Portland"], answer: 0 },   { id: "p7-46", part: 7, passageId: "p7_bakery", focus: "detail", skill: "reading", difficulty: "medium",     text: "According to the article, what will the new locations offer that the existing shops do not?",     choices: ["Baking courses", "Free samples of new products", "Online ordering", "Extended opening hours"], answer: 0 },   { id: "p7-47", part: 7, passageId: "p7_bakery", focus: "detail", skill: "reading", difficulty: "medium",     text: "What is indicated about Maria Chen?",     choices: ["She opened the first shop in Austin.", "She plans to retire at the end of this year.", "She began by selling bread at a farmers market.", "She previously worked for a supermarket chain."], answer: 2 },   { id: "p7-48", part: 7, passageId: "p7_delivery", focus: "purpose", skill: "reading", difficulty: "easy",     text: "What is the purpose of the first e-mail?",     choices: ["To request a change to a delivery schedule", "To complain about damaged furniture", "To order new furniture for a showroom", "To cancel a delivery contract"], answer: 0 },   { id: "p7-49", part: 7, passageId: "p7_delivery", focus: "detail", skill: "reading", difficulty: "medium",     text: "According to the second e-mail, what should Mr. Osei do by October 28?",     choices: ["Confirm the new schedule to avoid an extra charge", "Pay an additional delivery fee", "Complete the showroom renovation", "Choose a morning delivery slot"], answer: 0 },   { id: "p7-50", part: 7, passageId: "p7_delivery", focus: "cross-passage inference", skill: "reading", difficulty: "hard",     text: "What is suggested about Friday deliveries?",     choices: ["Afternoon deliveries may arrive later than planned.", "They cost more than Saturday deliveries.", "They are unavailable during the renovation.", "They require two drivers for each delivery."], answer: 0 }
,   { id: "p6-35", part: 6, passageId: "p6_workshop", blank: 91, focus: "grammar / pronoun", skill: "grammar", difficulty: "medium",     text: "Choose the best answer for blank (91).",     choices: ["their", "they", "themselves", "them"], answer: 1 },   { id: "p6-36", part: 6, passageId: "p6_workshop", blank: 92, focus: "sentence insertion", skill: "reading", difficulty: "hard",     text: "Choose the best sentence for blank (92).",     choices: ["Participants should bring their own cameras because only a few can be borrowed from the center.", "The center also offers swimming lessons for children on weekends.", "Ms. Grant has exhibited her photographs in three countries.", "Last year's workshop was canceled because of bad weather."], answer: 0 },   { id: "p6-37", part: 6, passageId: "p6_workshop", blank: 93, focus: "vocabulary / preposition", skill: "vocabulary", difficulty: "medium",     text: "Choose the best answer for blank (93).",     choices: ["during", "since", "until", "by"], answer: 3 },   { id: "p6-38", part: 6, passageId: "p6_workshop", blank: 94, focus: "word form", skill: "grammar", difficulty: "medium",     text: "Choose the best answer for blank (94).",     choices: ["participant", "participation", "participate", "participated"], answer: 1 },   { id: "p7-51", part: 7, passageId: "p7_marathon", focus: "purpose", skill: "reading", difficulty: "easy",     text: "What is the main purpose of the notice?",     choices: ["To inform residents about road closures during an event", "To recruit volunteers for a marathon", "To announce the results of a race", "To sell tickets for a sporting event"], answer: 0 },   { id: "p7-52", part: 7, passageId: "p7_marathon", focus: "detail", skill: "reading", difficulty: "medium",     text: "According to the notice, what should drivers do on October 18?",     choices: ["Contact the event office for a parking permit", "Use the East Bypass instead of the closed roads", "Take bus routes 4 and 9", "Park in the garage on Fifth Street"], answer: 1 },   { id: "p7-53", part: 7, passageId: "p7_marathon", focus: "detail", skill: "reading", difficulty: "medium",     text: "Who is advised to contact the event office by October 12?",     choices: ["Bus drivers on routes 4 and 9", "Residents along the route who need to travel on Sunday morning", "Runners who have not yet registered", "Visitors arriving from outside the city"], answer: 1 },   { id: "p7-54", part: 7, passageId: "p7_course", focus: "detail", skill: "reading", difficulty: "easy",     text: "According to the course description, what must students bring?",     choices: ["Their own ingredients", "Their own aprons", "A notebook", "The course fee in cash"], answer: 1 },   { id: "p7-55", part: 7, passageId: "p7_course", focus: "purpose", skill: "reading", difficulty: "easy",     text: "Why does Ms. Ross write to the studio?",     choices: ["To ask whether a course fits her schedule and dietary needs", "To register for the Baking Basics course", "To request a refund for a course", "To apply for a teaching position"], answer: 0 },   { id: "p7-56", part: 7, passageId: "p7_course", focus: "cross-passage inference", skill: "reading", difficulty: "hard",     text: "Which course is Ms. Ross able to take?",     choices: ["The Baking Basics course", "The World Cuisine course", "Both courses", "Neither course"], answer: 1 }
,   { id: "p7-57", part: 7, passageId: "p7_apartment", focus: "purpose", skill: "reading", difficulty: "easy",     text: "What is the purpose of the advertisement?",     choices: ["To advertise apartments available for rent", "To announce a rent increase", "To recruit leasing staff", "To describe rules for current residents"], answer: 0 },   { id: "p7-58", part: 7, passageId: "p7_apartment", focus: "detail", skill: "reading", difficulty: "medium",     text: "What is included in the monthly rent?",     choices: ["Electricity and Internet service", "Water and parking", "Fitness center access for guests", "Furniture for the units"], answer: 1 },   { id: "p7-59", part: 7, passageId: "p7_apartment", focus: "detail", skill: "reading", difficulty: "medium",     text: "What is offered to people who apply during the open house?",     choices: ["A reduced first month's rent", "A free parking space", "The application fee will be waived", "A tour of the fitness center"], answer: 2 },   { id: "p7-60", part: 7, passageId: "p7_deadline", focus: "purpose", skill: "reading", difficulty: "easy",     text: "Why did Mr. Watanabe write the e-mail?",     choices: ["To announce a change to a project deadline", "To ask the client for an extension", "To cancel a team meeting", "To assign new projects to the team"], answer: 0 },   { id: "p7-61", part: 7, passageId: "p7_deadline", focus: "detail", skill: "reading", difficulty: "medium",     text: "When will the review meeting be held?",     choices: ["This Friday", "Next Tuesday at 10:00 A.M.", "November 20", "Wednesday morning"], answer: 1 },   { id: "p7-62", part: 7, passageId: "p7_deadline", focus: "detail", skill: "reading", difficulty: "medium",     text: "What are team members asked to do by Wednesday?",     choices: ["Submit the final report", "Finish checking their sections", "Inform the manager of any schedule problems", "Meet with the client"], answer: 2 },   { id: "p7-63", part: 7, passageId: "p7_hiring", focus: "detail", skill: "reading", difficulty: "medium",     text: "What is required of applicants for the position?",     choices: ["A degree in communications", "At least three years of customer service experience", "Experience working at a hotel", "Availability to work on weekends"], answer: 1 },   { id: "p7-64", part: 7, passageId: "p7_hiring", focus: "purpose", skill: "reading", difficulty: "easy",     text: "Why did Ms. Fernandez write the e-mail?",     choices: ["To apply for a position", "To ask about working hours", "To request an interview in Spanish", "To complain about a phone service"], answer: 0 },   { id: "p7-65", part: 7, passageId: "p7_hiring", focus: "cross-passage inference", skill: "reading", difficulty: "hard",     text: "Which requirement in the posting does Ms. Fernandez clearly meet?",     choices: ["She has a university degree", "She has more customer service experience than required", "She has a technical support certificate", "She is available to start immediately"], answer: 1 },   { id: "p7-66", part: 7, passageId: "p7_market", focus: "main idea", skill: "reading", difficulty: "easy",     text: "What is the article mainly about?",     choices: ["The anniversary and expansion of a farmers market", "The history of farming in Hillcrest", "A competition among market vendors", "New parking rules at a community center"], answer: 0 },   { id: "p7-67", part: 7, passageId: "p7_market", focus: "detail", skill: "reading", difficulty: "medium",     text: "How many vendors took part in the anniversary event?",     choices: ["Eight", "More than forty", "About three thousand", "Ten"], answer: 1 },   { id: "p7-68", part: 7, passageId: "p7_market", focus: "detail", skill: "reading", difficulty: "medium",     text: "What change will take place next spring?",     choices: ["The market will move to the Riverside district", "Admission will no longer be free", "The market will also open on Wednesday evenings at another location", "The market will be held indoors"], answer: 2 }
,
{
  "id": "p6-39",
  "part": 6,
  "passageId": "p6_conference",
  "blank": 95,
  "text": "Choose the best answer for blank (95).",
  "choices": [
    "schedules",
    "is scheduled",
    "schedule",
    "scheduling"
  ],
  "answer": 1,
  "skill": "grammar",
  "focus": "verb form",
  "difficulty": "easy"
},
{
  "id": "p6-40",
  "part": 6,
  "passageId": "p6_conference",
  "blank": 96,
  "text": "Choose the best answer for blank (96).",
  "choices": [
    "Despite",
    "Because of",
    "Although",
    "Unless"
  ],
  "answer": 2,
  "skill": "grammar",
  "focus": "connector",
  "difficulty": "medium"
},
{
  "id": "p6-41",
  "part": 6,
  "passageId": "p6_conference",
  "blank": 97,
  "text": "Choose the best answer for blank (97).",
  "choices": [
    "among",
    "between",
    "within",
    "during"
  ],
  "answer": 3,
  "skill": "vocabulary",
  "focus": "preposition",
  "difficulty": "medium"
},
{
  "id": "p6-42",
  "part": 6,
  "passageId": "p6_conference",
  "blank": 98,
  "text": "Choose the best answer for blank (98).",
  "choices": [
    "The conference dinner will be held at a restaurant near the venue.",
    "Slides received after that date cannot be included in the printed program.",
    "Registration fees are refundable until the end of this month.",
    "Last year's conference attracted more than three hundred participants."
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "sentence insertion",
  "difficulty": "medium"
},
{
  "id": "p7-72",
  "part": 7,
  "passageId": "p7_office_move",
  "text": "What is the main purpose of the notice?",
  "choices": [
    "To announce a change in the company's office location",
    "To introduce new employees to the staff",
    "To explain the company's holiday schedule",
    "To request volunteers for a cleaning day"
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-73",
  "part": 7,
  "passageId": "p7_office_move",
  "text": "What are employees asked to do by Friday, March 13?",
  "choices": [
    "Reserve a parking space in the new building",
    "Attend an orientation session on the fifth floor",
    "Remove all personal items from their desks",
    "Update their contact information online"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-74",
  "part": 7,
  "passageId": "p7_office_move",
  "text": "What can be inferred about the new office?",
  "choices": [
    "It is smaller than the current office.",
    "It can be reached by public transportation.",
    "It will open later than originally planned.",
    "It does not have space for client meetings."
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "inference",
  "difficulty": "hard"
},
{
  "id": "p7-75",
  "part": 7,
  "passageId": "p7_language_school",
  "text": "What is being advertised?",
  "choices": [
    "Private tutoring for high school students",
    "Translation services for businesses",
    "Language courses for adults",
    "Study-abroad programs in Europe"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-76",
  "part": 7,
  "passageId": "p7_language_school",
  "text": "What is true about the evening conversation class?",
  "choices": [
    "It is limited to eight students.",
    "It requires an advanced test score.",
    "It is held on Saturday mornings.",
    "It costs more than the other classes."
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-77",
  "part": 7,
  "passageId": "p7_language_school",
  "text": "What will happen if a student registers by January 31?",
  "choices": [
    "The student will receive a free textbook.",
    "The enrollment fee will be waived.",
    "The student can attend a trial lesson.",
    "The tuition will be reduced by 15 percent."
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-78",
  "part": 7,
  "passageId": "p7_delivery_inquiry",
  "text": "Why did Ms. Alvarez write the e-mail?",
  "choices": [
    "To place a new order for office chairs",
    "To ask about an order that has not arrived",
    "To request a refund for a damaged product",
    "To change the items in a recent order"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-79",
  "part": 7,
  "passageId": "p7_delivery_inquiry",
  "text": "What does Ms. Alvarez say about the delivery date?",
  "choices": [
    "It was changed without her knowledge.",
    "It falls after her company's event.",
    "It was confirmed by a sales representative.",
    "It is later than the date she was originally given."
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-80",
  "part": 7,
  "passageId": "p7_delivery_inquiry",
  "text": "What has Ms. Alvarez included with her e-mail?",
  "choices": [
    "A photograph of the event room",
    "A copy of her purchase receipt",
    "A list of alternative products",
    "A map showing her office location"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-81",
  "part": 7,
  "passageId": "p7_cafe_opening",
  "text": "What is the article mainly about?",
  "choices": [
    "The history of a popular bakery chain",
    "Renovation plans for a train station",
    "A competition for local coffee roasters",
    "The opening of a new café in a neighborhood"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-82",
  "part": 7,
  "passageId": "p7_cafe_opening",
  "text": "According to the article, what is special about Hoshino Bakery Café?",
  "choices": [
    "It stays open twenty-four hours a day.",
    "It sells bread made at a famous hotel.",
    "It uses beans roasted at a nearby farm.",
    "It offers free drinks to first-time visitors."
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-83",
  "part": 7,
  "passageId": "p7_cafe_opening",
  "text": "What can be inferred about Mr. Hoshino?",
  "choices": [
    "He previously worked as a baker.",
    "He plans to open a second location soon.",
    "He learned baking while living abroad.",
    "He inherited the café from his parents."
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "inference",
  "difficulty": "hard"
},
{
  "id": "p7-84",
  "part": 7,
  "passageId": "p7_museum_exhibition",
  "text": "What is the purpose of the notice?",
  "choices": [
    "To recruit volunteers for a museum",
    "To explain changes to membership fees",
    "To describe recent museum renovations",
    "To announce a special exhibition"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-85",
  "part": 7,
  "passageId": "p7_museum_exhibition",
  "text": "What is NOT mentioned about the exhibition?",
  "choices": [
    "The dates it will run",
    "The price of admission for children",
    "The name of the exhibition curator",
    "A workshop offered on weekends"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "negative",
  "difficulty": "medium"
},
{
  "id": "p7-86",
  "part": 7,
  "passageId": "p7_museum_exhibition",
  "text": "How much would two adults and one child pay to enter the exhibition on a weekday?",
  "choices": [
    "2,400 yen",
    "2,600 yen",
    "3,000 yen",
    "3,300 yen"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "hard"
},
{
  "id": "p7-87",
  "part": 7,
  "passageId": "p7_driver_recruitment",
  "text": "What kind of position is being advertised?",
  "choices": [
    "Warehouse supervisor",
    "Vehicle mechanic",
    "Delivery driver",
    "Customer service representative"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-88",
  "part": 7,
  "passageId": "p7_driver_recruitment",
  "text": "Which of the following is a requirement for the position?",
  "choices": [
    "Experience working in a warehouse",
    "A commercial driver's license",
    "Availability to work on weekends only",
    "A degree in logistics management"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-89",
  "part": 7,
  "passageId": "p7_driver_recruitment",
  "text": "What does the company offer to new drivers during their first month?",
  "choices": [
    "A company vehicle for personal use",
    "A uniform allowance of 10,000 yen",
    "Paid training with an experienced driver",
    "A guaranteed bonus of 50,000 yen"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-90",
  "part": 7,
  "passageId": "p7_meeting_reschedule",
  "text": "Why was this e-mail sent?",
  "choices": [
    "To announce a change to a meeting schedule",
    "To introduce a new regional director",
    "To request monthly sales reports",
    "To reserve a conference room"
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-91",
  "part": 7,
  "passageId": "p7_meeting_reschedule",
  "text": "When will the meeting now take place?",
  "choices": [
    "Thursday, March 12 at 10:00 a.m.",
    "Friday, March 13 at 10:00 a.m.",
    "Friday, March 13 at 2:00 p.m.",
    "Wednesday, March 11 in the afternoon"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "easy"
},
{
  "id": "p7-92",
  "part": 7,
  "passageId": "p7_meeting_reschedule",
  "text": "What are the recipients asked to bring to the meeting?",
  "choices": [
    "Their appointment calendars",
    "A summary of the quarterly targets",
    "Their monthly reports",
    "The updated February sales figures"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-93",
  "part": 7,
  "passageId": "p7_fare_revision",
  "text": "When will the new fares take effect?",
  "choices": [
    "March 20",
    "April 1",
    "Immediately",
    "When current passes expire"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "easy"
},
{
  "id": "p7-94",
  "part": 7,
  "passageId": "p7_fare_revision",
  "text": "How much will a passenger save on each trip by using a ten-trip ticket instead of paying the standard one-way fare?",
  "choices": [
    "$0.25",
    "$1.50",
    "$0.15",
    "$0.35"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "calculation",
  "difficulty": "hard"
},
{
  "id": "p7-95",
  "part": 7,
  "passageId": "p7_fare_revision",
  "text": "Which of the following will NOT change under the new fares?",
  "choices": [
    "Fares for senior citizens",
    "The price of a ten-trip ticket",
    "The cost of a monthly pass",
    "The standard one-way fare"
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "negative",
  "difficulty": "medium"
},
{
  "id": "p7-96",
  "part": 7,
  "passageId": "p7_restaurant_review",
  "text": "What did the reviewer say about the grilled sea bass?",
  "choices": [
    "It was slightly overcooked.",
    "It was too expensive.",
    "It was fresh and excellent.",
    "It was served without herbs."
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "easy"
},
{
  "id": "p7-97",
  "part": 7,
  "passageId": "p7_restaurant_review",
  "text": "What can be inferred about The Olive Branch?",
  "choices": [
    "It does not take reservations.",
    "It has become popular since it opened.",
    "It is busiest at lunchtime.",
    "It mainly serves seafood."
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "inference",
  "difficulty": "medium"
},
{
  "id": "p7-98",
  "part": 7,
  "passageId": "p7_restaurant_review",
  "text": "Which of the following is NOT true according to the review?",
  "choices": [
    "The restaurant opened last spring.",
    "Most main courses cost between $18 and $26.",
    "The dining room was nearly full by seven o'clock.",
    "The baklava was overly sweet."
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "negative",
  "difficulty": "medium"
},
{
  "id": "p7-99",
  "part": 7,
  "passageId": "p7_charity_walk",
  "text": "How many people participated in the Walk for Hope?",
  "choices": [
    "More than 1,200",
    "Exactly 200",
    "About 900",
    "More than 5,000"
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "easy"
},
{
  "id": "p7-100",
  "part": 7,
  "passageId": "p7_charity_walk",
  "text": "How much money did the event raise last year?",
  "choices": [
    "$9,000",
    "$40,500",
    "$45,000",
    "$63,000"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "calculation",
  "difficulty": "medium"
},
{
  "id": "p7-101",
  "part": 7,
  "passageId": "p7_charity_walk",
  "text": "According to the article, the money raised will be used to",
  "choices": [
    "build a new children's hospital",
    "pay for next year's event",
    "provide breakfast for volunteers",
    "buy equipment and support a play program"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-102",
  "part": 7,
  "passageId": "p7_furniture_sale",
  "text": "When does the clearance sale end?",
  "choices": [
    "January 16",
    "January 25",
    "February 1",
    "When all items are sold"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "easy"
},
{
  "id": "p7-103",
  "part": 7,
  "passageId": "p7_furniture_sale",
  "text": "A customer buys the Haven sofa at its sale price and opens a store card to receive the additional discount. How much does the customer pay for the sofa?",
  "choices": [
    "$810",
    "$900",
    "$990",
    "$1,350"
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "calculation",
  "difficulty": "hard"
},
{
  "id": "p7-104",
  "part": 7,
  "passageId": "p7_furniture_sale",
  "text": "What does Comfort Living offer free of charge?",
  "choices": [
    "A store card",
    "Gift wrapping for all purchases",
    "Delivery for orders of $499 or more",
    "Furniture assembly"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-105",
  "part": 7,
  "passageId": "p7_airport_shuttle",
  "text": "A passenger needs to arrive at the airport by 9:30 a.m. What is the latest shuttle the passenger can take from Central Station?",
  "choices": [
    "8:00 a.m.",
    "8:30 a.m.",
    "9:00 a.m.",
    "9:45 a.m."
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "calculation",
  "difficulty": "hard"
},
{
  "id": "p7-106",
  "part": 7,
  "passageId": "p7_airport_shuttle",
  "text": "How much is a one-way ticket for a child under 12?",
  "choices": [
    "$5",
    "$6",
    "$12",
    "Free of charge"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-107",
  "part": 7,
  "passageId": "p7_airport_shuttle",
  "text": "Which of the following is NOT true about the shuttle service?",
  "choices": [
    "Buses leave Central Station every 30 minutes.",
    "The trip takes about 45 minutes.",
    "Tickets can be bought from the driver.",
    "One large suitcase is carried free of charge."
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "negative",
  "difficulty": "hard"
},
{
  "id": "p7-108",
  "part": 7,
  "passageId": "p7_venue_booking",
  "text": "What is the purpose of Ms. Whitfield's e-mail?",
  "choices": [
    "To apply for a job at Sakura Hall",
    "To ask about reserving a room for a company event",
    "To confirm the menu for a buffet lunch",
    "To invite Dr. Reyes to speak at a seminar"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-109",
  "part": 7,
  "passageId": "p7_venue_booking",
  "text": "How many people does Ms. Whitfield expect to attend the seminar?",
  "choices": [
    "30",
    "85",
    "60",
    "120"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "easy"
},
{
  "id": "p7-110",
  "part": 7,
  "passageId": "p7_venue_booking",
  "text": "Which date will Ms. Whitfield most likely choose for the seminar?",
  "choices": [
    "Saturday, March 14",
    "Friday, March 13",
    "Saturday, March 21",
    "Friday, March 20"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "cross-reference",
  "difficulty": "hard"
},
{
  "id": "p7-111",
  "part": 7,
  "passageId": "p7_venue_booking",
  "text": "If Ms. Whitfield books Room A and orders the buffet lunch for all 60 participants, what will the total cost be?",
  "choices": [
    "¥193,000",
    "¥108,000",
    "¥85,000",
    "¥175,000"
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "cross-reference",
  "difficulty": "hard"
},
{
  "id": "p7-112",
  "part": 7,
  "passageId": "p7_venue_booking",
  "text": "What is NOT mentioned in Mr. Mori's reply?",
  "choices": [
    "The capacity of Room A",
    "A discount for weekday bookings",
    "The deadline for paying a deposit",
    "The price of the buffet lunch"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "negative",
  "difficulty": "medium"
},
{
  "id": "p7-113",
  "part": 7,
  "passageId": "p7_kyoto_tour",
  "text": "What is the main purpose of the advertisement?",
  "choices": [
    "To recruit tour guides for the autumn season",
    "To announce a discount on hotel rooms in Kyoto",
    "To promote a guided trip to see autumn leaves",
    "To explain how to book a tea ceremony"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-114",
  "part": 7,
  "passageId": "p7_kyoto_tour",
  "text": "What is included in the tour price?",
  "choices": [
    "Breakfast each morning",
    "Lunch and dinner each day",
    "A traditional tea ceremony",
    "Train tickets to Kyoto Station"
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "medium"
},
{
  "id": "p7-115",
  "part": 7,
  "passageId": "p7_kyoto_tour",
  "text": "Why does Mr. Andersen believe he qualifies for the early-booking discount?",
  "choices": [
    "He is a returning customer of the company",
    "He is booking seats for two people",
    "He works for a travel magazine",
    "He is making his booking before the October deadline"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "cross-reference",
  "difficulty": "medium"
},
{
  "id": "p7-116",
  "part": 7,
  "passageId": "p7_kyoto_tour",
  "text": "How much should Mr. Andersen pay in total?",
  "choices": [
    "¥136,400",
    "¥130,400",
    "¥122,400",
    "¥144,000"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "cross-reference",
  "difficulty": "hard"
},
{
  "id": "p7-117",
  "part": 7,
  "passageId": "p7_kyoto_tour",
  "text": "What can be inferred from Mr. Andersen's question about meals?",
  "choices": [
    "He wants to change hotels",
    "He has already paid for the tour",
    "The advertisement does not say whether vegetarian meals are available",
    "His wife will not join the tea ceremony"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "inference",
  "difficulty": "medium"
},
{
  "id": "p7-118",
  "part": 7,
  "passageId": "p7_training_program",
  "text": "What is the purpose of the notice?",
  "choices": [
    "To announce a series of training workshops for employees",
    "To introduce new employees to the company",
    "To explain changes to the company portal",
    "To ask managers to evaluate their staff"
  ],
  "answer": 0,
  "skill": "reading",
  "focus": "purpose",
  "difficulty": "easy"
},
{
  "id": "p7-119",
  "part": 7,
  "passageId": "p7_training_program",
  "text": "By what date must employees enroll in the workshops?",
  "choices": [
    "March 10",
    "March 20",
    "March 24",
    "March 28"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "detail",
  "difficulty": "easy"
},
{
  "id": "p7-120",
  "part": 7,
  "passageId": "p7_training_program",
  "text": "In which room will the Data Analysis workshop be held?",
  "choices": [
    "Seminar Room B",
    "Room 402",
    "Room 301",
    "Room 204"
  ],
  "answer": 1,
  "skill": "reading",
  "focus": "cross-reference",
  "difficulty": "medium"
},
{
  "id": "p7-121",
  "part": 7,
  "passageId": "p7_training_program",
  "text": "Will Mr. Nakamura be able to join Excel Basics in addition to the two workshops he has already chosen?",
  "choices": [
    "Yes, because seats are still available",
    "Yes, if his supervisor approves it",
    "No, because employees may take no more than two workshops",
    "No, because enrollment closed on March 20"
  ],
  "answer": 2,
  "skill": "reading",
  "focus": "cross-reference",
  "difficulty": "medium"
},
{
  "id": "p7-122",
  "part": 7,
  "passageId": "p7_training_program",
  "text": "What problem does Mr. Nakamura have with the Project Management workshop?",
  "choices": [
    "He has not yet enrolled in it",
    "It is held in a room that is too small",
    "Its instructor has not been decided",
    "It runs at the same time as his client meeting"
  ],
  "answer": 3,
  "skill": "reading",
  "focus": "inference",
  "difficulty": "hard"
}
];

/* =====================================================================
   JAPANESE TRANSLATIONS (review screen only)
   ---------------------------------------------------------------------
   Kept in separate maps keyed by the stable question / passage id so the
   English pool above stays byte-identical and a single translation can be
   corrected without touching any rendering code.

   QUESTION_TRANSLATIONS[id] = {
     text:        question sentence in Japanese; a blank stays as ＿＿＿＿
                  and never contains the correct answer
     choices:     one entry per English choice, same order
     explanation: reserved for a future 「解説を見る」 feature (empty for now)
   }
   PASSAGE_TRANSLATIONS[id].sections mirrors PASSAGES[id]: one { header, body }
   per section, so double passages stay in their original order. [11] style
   markers are preserved and renumbered by the review renderer.
   ===================================================================== */

const QUESTION_TRANSLATIONS = {

  /* ---- Part 5 ---- */
  "p5-01": {
    text: "四半期の財務報告書は、株主に配布される前に＿＿＿＿確認されなければならない。",
    choices: [
      "徹底的な",
      "徹底的に",
      "徹底していること",
      "より徹底的な"
    ],
    explanation: ''
  },
  "p5-02": {
    text: "監査担当者が来週の月曜日に到着するまでに、財務チームは経費記録をすべて＿＿＿＿。",
    choices: [
      "まとめた",
      "まとめ終えている",
      "まとめ終えているだろう",
      "まとめているところだ"
    ],
    explanation: ''
  },
  "p5-03": {
    text: "出張費の請求は、従業員が出張から戻って30日＿＿＿＿提出しなければならない。",
    choices: [ "以内に", "までずっと", "以来", "の中で" ],
    explanation: ''
  },
  "p5-04": {
    text: "昨年、その会社の利益は増加した＿＿＿＿、株価は12パーセント近く下落した。",
    choices: [ "にもかかわらず（後ろは名詞句）", "しかしながら", "にもかかわらず（後ろは文）", "ことが原因で" ],
    explanation: ''
  },
  "p5-05": {
    text: "＿＿＿＿履歴書が締め切り後に届いた応募者は、その職の選考対象とならない。",
    choices: [ "（人・主格）", "（人・所有格）", "（物）", "（人・目的格）" ],
    explanation: ''
  },
  "p5-06": {
    text: "その新しい供給業者が選ばれた主な理由は、＿＿＿＿納品実績と競争力のある価格設定であった。",
    choices: [
      "信頼できる",
      "有能な",
      "ありそうな",
      "入手できる"
    ],
    explanation: ''
  },
  "p5-07": {
    text: "添付の用紙に＿＿＿＿、今週末までに人事部へ返送してください。",
    choices: [
      "記入して",
      "果たして",
      "達成して",
      "実施して"
    ],
    explanation: ''
  },
  "p5-08": {
    text: "役員たちは、法務レビューが終わるまで合併の採決を＿＿＿＿ことを検討した。",
    choices: [
      "延期する",
      "延期した",
      "延期する",
      "延期する"
    ],
    explanation: ''
  },
  "p5-09": {
    text: "二つの部署の予算見積もりに＿＿＿＿があったため、財務部長は全面的な照合を要請した。",
    choices: [ "食い違い", "能力不足", "無関心", "不便" ],
    explanation: ''
  },
  "p5-10": {
    text: "改訂された従業員ハンドブックの＿＿＿＿は、法務チームのレビューが終わるまで延期されている。",
    choices: [
      "配布する",
      "配布された",
      "配布",
      "配布できる"
    ],
    explanation: ''
  },

  /* ---- Part 6 ---- */
  "p6-11": {
    text: "空欄(11)に最も適した語句を選んでください。",
    choices: [
      "始まる",
      "始まること",
      "始まった",
      "（誤った語形）to beginning"
    ],
    explanation: ''
  },
  "p6-12": {
    text: "空欄(12)に最も適した文を選んでください。",
    choices: [
      "ただし、すべての机の中身については、事前に御社のスタッフの方で梱包していただくようお願いいたします。",
      "当社の新しい倉庫は昨年の春にポートランド中心部に開設されました。",
      "前回の引っ越しの請求書を、記録用に添付いたします。",
      "当社の作業員の多くは、10年以上にわたって勤務しています。"
    ],
    explanation: ''
  },
  "p6-13": {
    text: "空欄(13)に最も適した語句を選んでください。",
    choices: [
      "したがって",
      "同様に",
      "しかしながら",
      "そうでなければ"
    ],
    explanation: ''
  },
  "p6-14": {
    text: "空欄(14)に最も適した語句を選んでください。",
    choices: [
      "知らせる",
      "変更する",
      "申し込む",
      "思い出させる"
    ],
    explanation: ''
  },

  /* ---- Part 7 ---- */
  "p7-15": {
    text: "この通知の目的は何ですか。",
    choices: [
      "経費の提出方法の変更を知らせること",
      "従業員に年間の出張予算を思い出させること",
      "新しい部長を紹介すること",
      "出張の予約方法を説明すること"
    ],
    explanation: ''
  },
  "p7-16": {
    text: "通知によると、領収書はいつアップロードすべきですか。",
    choices: [
      "出張から30日以内",
      "毎月末",
      "その費用が発生したとき",
      "部長が承認した後"
    ],
    explanation: ''
  },
  "p7-17": {
    text: "研修会について何が示唆されていますか。",
    choices: [
      "全職員に義務づけられている。",
      "IT サービスデスクが担当する。",
      "出張の多い従業員にとって最も役立つ。",
      "7月にもう一度実施される。"
    ],
    explanation: ''
  },
  "p7-18": {
    text: "Brandtさんはメールで何について尋ねていますか。",
    choices: [
      "その印刷会社が複数の場所に配送できるかどうか",
      "大口注文に割引価格が適用されるかどうか",
      "デザインサービスが利用できるかどうか",
      "パンフレットを2言語で印刷できるかどうか"
    ],
    explanation: ''
  },
  "p7-19": {
    text: "提示された価格について何が示唆されていますか。",
    choices: [
      "Verve Media の予算を上回っている。",
      "配送料が含まれていない。",
      "Brandtさんが尋ねた割引がすでに反映されている。",
      "3月11日までしか有効でない。"
    ],
    explanation: ''
  },
  "p7-20": {
    text: "Brandtさんが再生紙を選んだ場合、何が起こる可能性が高いですか。",
    choices: [
      "パンフレットの到着が希望日より遅くなるかもしれない。",
      "10パーセントの割引が適用されなくなる。",
      "ブリストルへの配送に追加料金がかかる。",
      "注文を1,000部に減らす必要が生じる。"
    ],
    explanation: ''
  },

  /* ---- Part 5 ---- */
  "p5-21": {
    text: "マーケティングチームは、顧客からの問い合わせが予想外に増えたことに＿＿＿＿対応した。",
    choices: [
      "迅速な",
      "迅速に",
      "迅速さ",
      "促すこと"
    ],
    explanation: ''
  },
  "p5-22": {
    text: "Ortizさんは、昨日の午後に空港へ向かう前に、3件の顧客との打ち合わせを＿＿＿＿。",
    choices: [
      "行う",
      "行ってきた",
      "行い終えていた",
      "行う予定だ"
    ],
    explanation: ''
  },
  "p5-23": {
    text: "その会議室は木曜日の午後2時と5時＿＿＿＿利用できる。",
    choices: [ "の間に", "の間中", "を通して", "に沿って" ],
    explanation: ''
  },
  "p5-24": {
    text: "最終検査が正午までに完了＿＿＿＿、その荷物は本日出荷される。",
    choices: [ "しない限り", "すれば", "にもかかわらず", "である一方で" ],
    explanation: ''
  },
  "p5-25": {
    text: "私たちが拡大計画について話し合った＿＿＿＿コンサルタントは、来週戻ってくる。",
    choices: [ "（人・主格）", "（人・所有格）", "（人・目的格）", "（物）" ],
    explanation: ''
  },
  "p5-26": {
    text: "商品が14日以内に返品された場合、顧客は全額の＿＿＿＿を請求できる。",
    choices: [
      "返金",
      "更新",
      "領収書",
      "収益"
    ],
    explanation: ''
  },
  "p5-27": {
    text: "部長は最終提案を検討したうえで決定を＿＿＿＿だろう。",
    choices: [
      "する",
      "下す",
      "取る",
      "定める"
    ],
    explanation: ''
  },
  "p5-28": {
    text: "安全検査の後になって初めて、マネージャーは工場の再開許可を＿＿＿＿。",
    choices: [ "受け取った（通常の語順）", "受け取った（倒置した語順）", "確かに受け取った", "受け取られた" ],
    explanation: ''
  },
  "p5-29": {
    text: "各部署は、金曜日までに＿＿＿＿連絡先リストを更新する責任がある。",
    choices: [ "自部署の", "彼らの", "彼の", "私たちの" ],
    explanation: ''
  },
  "p5-30": {
    text: "職場の安全に関する一連の研修が、来月に＿＿＿＿。",
    choices: [ "予定されている（複数扱い）", "予定されていた", "予定されている（単数扱い）", "予定を持っている" ],
    explanation: ''
  },
  "p5-31": {
    text: "その会社は、海外へ転勤する従業員に＿＿＿＿支援を提供する予定だ。",
    choices: [
      "財務",
      "金銭的な",
      "金銭的に",
      "資金を提供された"
    ],
    explanation: ''
  },
  "p5-32": {
    text: "その美術館は月曜日を除く毎日、午前9時30分に＿＿＿＿。",
    choices: [
      "開館する",
      "開館した",
      "開館したところだ",
      "開館し終えているだろう"
    ],
    explanation: ''
  },
  "p5-33": {
    text: "応募者は全員、記入済みの応募用紙＿＿＿＿、推薦状を2通提出しなければならない。",
    choices: [ "だけで", "に加えて", "の上で", "のために" ],
    explanation: ''
  },
  "p5-34": {
    text: "アップデートのインストールで問題が発生＿＿＿＿、ヘルプデスクにご連絡ください。",
    choices: [ "した場合は", "したにもかかわらず", "するまで", "する一方で" ],
    explanation: ''
  },
  "p5-35": {
    text: "その研究施設は、いくつかの部屋が昨年改装された＿＿＿＿だが、代表団を迎える予定だ。",
    choices: [ "というもの（that）", "というもの（which）", "すること（what）", "誰か（whom）" ],
    explanation: ''
  },
  "p5-36": {
    text: "その新しい会計ソフトは、請求書の処理にかかる時間を＿＿＿＿ように設計されている。",
    choices: [
      "減らす",
      "減少する",
      "下げること",
      "decreaseable"
    ],
    explanation: ''
  },
  "p5-37": {
    text: "従業員は無料の研修を＿＿＿＿ことが奨励されている。",
    choices: [
      "作る",
      "利用する",
      "持つ",
      "使う"
    ],
    explanation: ''
  },
  "p5-38": {
    text: "保守作業班は、その日の終わりまでに修理を完了＿＿＿＿見込みだ。",
    choices: [ "する", "しながら", "できる", "された" ],
    explanation: ''
  },
  "p5-39": {
    text: "金曜日の発表会には残席が＿＿＿＿しかないため、早めの登録をお勧めします。",
    choices: [ "ほとんど", "わずか", "ほとんど（数えられない名詞用）", "わずか（数えられない名詞用）" ],
    explanation: ''
  },
  "p5-40": {
    text: "地域統括責任者も営業担当者たちも、昨日はコメントを出せる状態＿＿＿＿。",
    choices: [ "だった（単数扱い）", "だった（複数扱い）", "であり続けている", "である" ],
    explanation: ''
  },
  "p5-41": {
    text: "ホテルのロビーは、利用しやすさを高めるために＿＿＿＿改装された。",
    choices: [ "完全な", "完了", "完全に", "completedly" ],
    explanation: ''
  },
  "p5-42": {
    text: "2023年に入社して以来、Leeさんは大規模なソフトウェア開発案件をいくつか＿＿＿＿。",
    choices: [
      "率いる",
      "率いた",
      "率いてきた",
      "率いる予定だ"
    ],
    explanation: ''
  },
  "p5-43": {
    text: "改訂された方針は、追って通知がある＿＿＿＿有効である。",
    choices: [ "までに", "まで", "以来", "の期間中" ],
    explanation: ''
  },
  "p5-44": {
    text: "天候が回復＿＿＿＿、屋外での製品実演は屋内に移される。",
    choices: [ "しない限り", "が原因で", "する間に", "にもかかわらず" ],
    explanation: ''
  },
  "p5-45": {
    text: "入賞したデザインを提出した＿＿＿＿従業員は、特別賞を受け取る。",
    choices: [ "（物）", "（人・所有格）", "（人・主格）", "（人・目的格）" ],
    explanation: ''
  },
  "p5-46": {
    text: "需要が予想を上回っているため、その製造業者は来四半期に生産を＿＿＿＿予定だ。",
    choices: [
      "拡大する",
      "延長できる",
      "enlarge on",
      "spread out"
    ],
    explanation: ''
  },
  "p5-47": {
    text: "購入する前に、顧客は保証の条件を注意深く＿＿＿＿べきである。",
    choices: [ "確認する", "見る", "見る", "inspect on" ],
    explanation: ''
  },
  "p5-48": {
    text: "Chenさんは受付係に、会議室を2時間＿＿＿＿よう頼んだ。",
    choices: [
      "予約する",
      "予約する",
      "予約する",
      "予約する"
    ],
    explanation: ''
  },
  "p5-49": {
    text: "委員会は、これほど流通コストの高い市場へ進出することの＿＿＿＿に疑問を呈した。",
    choices: [
      "実現可能な",
      "実現可能なように",
      "実現可能性",
      "feasibleness"
    ],
    explanation: ''
  },
  "p5-50": {
    text: "もし供給業者がもっと早く知らせてくれていたら、私たちは代わりの出荷を間に合うように＿＿＿＿。",
    choices: [
      "手配する",
      "手配するだろう",
      "手配できていただろう",
      "手配してしまっていた"
    ],
    explanation: ''
  },
  "p5-51": {
    text: "年次報告書は会社のウェブサイト＿＿＿＿入手できる。",
    choices: [ "上で", "のところで", "へ", "とともに" ],
    explanation: ''
  },
  "p5-52": {
    text: "Patelさんが発表を担当し、＿＿＿＿Gomezさんが聴衆からの質問に答える。",
    choices: [ "一方で", "が原因で", "にもかかわらず", "でない限り" ],
    explanation: ''
  },
  "p5-53": {
    text: "交換部品が保管されている＿＿＿＿倉庫は、空港の近くにある。",
    choices: [ "（人・主格）", "（場所）", "（人・所有格）", "（人・目的格）" ],
    explanation: ''
  },
  "p5-54": {
    text: "厨房が＿＿＿＿間、そのレストランは一時的に閉店する。",
    choices: [
      "改装されている",
      "予約されている",
      "採用されている",
      "繰り返されている"
    ],
    explanation: ''
  },
  "p5-55": {
    text: "取締役会は、遅延によって生じた追加費用の責任を＿＿＿＿ことに合意した。",
    choices: [
      "保持する",
      "引き受ける",
      "続ける",
      "持ってくる"
    ],
    explanation: ''
  },
  "p5-56": {
    text: "来訪者は全員、常に身分証バッジを＿＿＿＿ことをお勧めします。",
    choices: [
      "着用する",
      "着用する",
      "着用した",
      "着用すること"
    ],
    explanation: ''
  },
  "p5-57": {
    text: "最高経営責任者は、会社の長期戦略について際立って＿＿＿＿説明を行った。",
    choices: [
      "明確さ",
      "明確な",
      "明確に",
      "clearing"
    ],
    explanation: ''
  },
  "p5-58": {
    text: "顧客サービスチームは通常、1営業日以内に＿＿＿＿。",
    choices: [
      "返答する",
      "返答した",
      "返答してきた",
      "返答し終えているだろう"
    ],
    explanation: ''
  },
  "p5-59": {
    text: "その割引は、9月30日より前に行われた注文＿＿＿＿のみ適用される。",
    choices: [ "のために", "に対して", "とともに", "から" ],
    explanation: ''
  },
  "p5-60": {
    text: "別の階で改装工事が行われている＿＿＿＿、そのオフィスは開いたままとなる。",
    choices: [ "間も", "でない限り", "が原因で", "にもかかわらず" ],
    explanation: ''
  },
  "p5-61": {
    text: "委員会は、提案された日程は適切なテストを行うには＿＿＿＿すぎると判断した。",
    choices: [
      "野心的",
      "従順",
      "気前がよい",
      "安定している"
    ],
    explanation: ''
  },
  "p5-62": {
    text: "その会社は、顧客の好みをより詳しく知るために調査を＿＿＿＿予定だ。",
    choices: [
      "実施する",
      "perform to",
      "make out",
      "運営する"
    ],
    explanation: ''
  },
  "p5-63": {
    text: "契約が結ばれて初めて、建設チームは現場での作業を＿＿＿＿。",
    choices: [ "始める（助動詞なし）", "始めることができた（通常の語順）", "始めることができた（倒置した語順）", "始めることができる" ],
    explanation: ''
  },
  "p5-64": {
    text: "その新しいセキュリティシステムは、通常の業務を中断することなく＿＿＿＿設置できる。",
    choices: [
      "簡単な",
      "より簡単な",
      "簡単に",
      "容易さ"
    ],
    explanation: ''
  },
  "p5-65": {
    text: "技術チームは、投資家に披露する前の6か月間、その試作品を＿＿＿＿。",
    choices: [
      "開発する",
      "開発し続けていた",
      "開発する予定だ",
      "開発してきた"
    ],
    explanation: ''
  },
  "p5-66": {
    text: "そのホテルは、空港と市街地の間で＿＿＿＿送迎サービスを提供している。",
    choices: [
      "無料の",
      "一時的な",
      "代わりの",
      "かなりの"
    ],
    explanation: ''
  },
  "p5-67": {
    text: "来訪者は、入口付近に掲示された安全上の指示に注意を＿＿＿＿よう求められている。",
    choices: [
      "与える",
      "払う",
      "作る",
      "持ってくる"
    ],
    explanation: ''
  },
  "p5-68": {
    text: "そのキャンペーンの成否は、顧客に提供される情報の＿＿＿＿に大きく左右される。",
    choices: [
      "正確な",
      "正確に",
      "正確さ",
      "accurateness"
    ],
    explanation: ''
  },
  "p5-69": {
    text: "遅延を避けるため、管理職は休暇期間が始まる前に人員配置上の懸念に＿＿＿＿よう求められた。",
    choices: [
      "対処する",
      "位置を突き止める",
      "付き添う",
      "face toward"
    ],
    explanation: ''
  },
  "p5-70": {
    text: "改訂された予定表により、従業員はより都合のよい時間に研修を＿＿＿＿ことができる。",
    choices: [
      "受講する",
      "受講する",
      "受講する",
      "受講する"
    ],
    explanation: ''
  },

  /* ---- Part 6 ---- */
  "p6-15": {
    text: "空欄(71)に最も適した語句を選んでください。",
    choices: [
      "開催された",
      "開催すること",
      "開催される予定である",
      "開催してきた"
    ],
    explanation: ''
  },
  "p6-16": {
    text: "空欄(72)に最も適した文を選んでください。",
    choices: [
      "その銀行は6月に最新の支店を開設しました。",
      "このプログラムは、最近の顧客からの意見を検討したうえで作成されました。",
      "すでに何人かの管理職が部署を異動しています。",
      "中央研修センターは日曜日は閉まっています。"
    ],
    explanation: ''
  },
  "p6-17": {
    text: "空欄(73)に最も適した語句を選んでください。",
    choices: [
      "さらに",
      "例えば",
      "しかしながら",
      "そうでなければ"
    ],
    explanation: ''
  },
  "p6-18": {
    text: "空欄(74)に最も適した語句を選んでください。",
    choices: [
      "参照する",
      "借りる",
      "受け取る",
      "分ける"
    ],
    explanation: ''
  },
  "p6-19": {
    text: "空欄(75)に最も適した語句を選んでください。",
    choices: [
      "更新する",
      "更新すること",
      "更新された",
      "更新"
    ],
    explanation: ''
  },
  "p6-20": {
    text: "空欄(76)に最も適した文を選んでください。",
    choices: [
      "月額プランはこの特典の対象外です。",
      "当社の本社は最近、より大きな建物に移転しました。",
      "ほとんどのお客様はモバイル端末でこのサービスをご利用です。",
      "ヘルプセンターは金曜日は午後6時に閉まります。"
    ],
    explanation: ''
  },
  "p6-21": {
    text: "空欄(77)に最も適した語句を選んでください。",
    choices: [
      "それにもかかわらず",
      "そうでなければ",
      "同様に",
      "その一方で"
    ],
    explanation: ''
  },
  "p6-22": {
    text: "空欄(78)に最も適した語句を選んでください。",
    choices: [
      "連絡する",
      "組み合わせる",
      "approach to",
      "到着する"
    ],
    explanation: ''
  },
  "p6-23": {
    text: "空欄(79)に最も適した語句を選んでください。",
    choices: [
      "利用する",
      "運ぶ",
      "申し込む",
      "通り過ぎる"
    ],
    explanation: ''
  },
  "p6-24": {
    text: "空欄(80)に最も適した文を選んでください。",
    choices: [
      "そのセキュリティゲートは地元の製造業者から購入されました。",
      "駐車場から適切な入口まで案内する臨時の掲示が設置されます。",
      "食堂のメニューも来週変更されます。",
      "従業員は2月に新しい駐車許可証を申請できます。"
    ],
    explanation: ''
  },
  "p6-25": {
    text: "空欄(81)に最も適した語句を選んでください。",
    choices: [
      "その結果",
      "同様に",
      "例えば",
      "対照的に"
    ],
    explanation: ''
  },
  "p6-26": {
    text: "空欄(82)に最も適した語句を選んでください。",
    choices: [
      "ご辛抱",
      "許可",
      "到着",
      "運用"
    ],
    explanation: ''
  },

  /* ---- Part 7 ---- */
  "p7-21": {
    text: "この通知の主な目的は何ですか。",
    choices: [
      "図書館の催しを知らせること",
      "図書館の新しい会費を発表すること",
      "古本市のボランティアを募集すること",
      "図書館の開館時間の変更を説明すること"
    ],
    explanation: ''
  },
  "p7-22": {
    text: "午後6時20分以降に何が起こる可能性がありますか。",
    choices: [
      "著者が本へのサインを始めるかもしれない。",
      "確保された席が当日来場者に提供されるかもしれない。",
      "講演室が階下に変更されるかもしれない。",
      "市営駐車場が料金を取り始めるかもしれない。"
    ],
    explanation: ''
  },
  "p7-23": {
    text: "車で来場する人について何が示唆されていますか。",
    choices: [
      "午後6時前に到着すべきである。",
      "図書館から離れた場所に駐車する必要があるかもしれない。",
      "事前に車両を登録しなければならない。",
      "著者から駐車券を受け取る。"
    ],
    explanation: ''
  },
  "p7-24": {
    text: "まだ届いていない品目はどれですか。",
    choices: [
      "プリンター用紙",
      "デスクオーガナイザー",
      "モニタースタンド",
      "配送ラベル"
    ],
    explanation: ''
  },
  "p7-25": {
    text: "請求書の一部の支払いが保留されるのはなぜですか。",
    choices: [
      "請求書の合計金額が誤っているため。",
      "一部の商品がまだ入荷待ちであるため。",
      "配送料が免除されなかったため。",
      "支払期限がすでに過ぎているため。"
    ],
    explanation: ''
  },
  "p7-26": {
    text: "注文の合計金額について何が推測できますか。",
    choices: [
      "500ドルを超えている。",
      "速達の配送料が含まれている。",
      "配送が到着する前に支払われた。",
      "6種類未満の商品しか含まれていない。"
    ],
    explanation: ''
  },
  "p7-27": {
    text: "午前8時10分発の急行はどうなりますか。",
    choices: [
      "いつもより早く出発する。",
      "午前8時35分に出発し、各駅に停車する。",
      "日曜日のみ運行する。",
      "レイクサイドが終点となる。"
    ],
    explanation: ''
  },
  "p7-28": {
    text: "運休した列車の切符について、乗客は何ができますか。",
    choices: [
      "同じ日の別の便で使う",
      "ハーバーシティ駅でのみ交換する",
      "代わりに月曜日に使う",
      "食事券を受け取る"
    ],
    explanation: ''
  },
  "p7-29": {
    text: "旅行の予定を変更する必要が最もありそうなのは誰ですか。",
    choices: [
      "土曜日の午前9時20分発の急行に乗る予定の乗客",
      "月曜日の午後に移動する乗客",
      "午前7時40分にハーバーシティを出発する乗客",
      "市営バスを利用する乗客"
    ],
    explanation: ''
  },
  "p7-30": {
    text: "春のビジネスパッケージに含まれている特典はどれですか。",
    choices: [
      "会議室の無料利用",
      "無料の朝食",
      "空港送迎2回分",
      "客室のアップグレード"
    ],
    explanation: ''
  },
  "p7-31": {
    text: "Morganさんがホテルに連絡したのはなぜですか。",
    choices: [
      "予約を取り消すため",
      "滞在に関わる2つのサービスについて尋ねるため",
      "長期滞在の割引を求めるため",
      "送迎の遅延について苦情を言うため"
    ],
    explanation: ''
  },
  "p7-32": {
    text: "Morganさんの要望のうち、パッケージに含まれないものはどれですか。",
    choices: [
      "滞在中の朝食",
      "レイトチェックアウト",
      "空港送迎の利用",
      "4月19日の会議室"
    ],
    explanation: ''
  },
  "p7-33": {
    text: "この社内連絡はなぜ書かれましたか。",
    choices: [
      "必要なソフトウェアの更新を知らせるため",
      "新しいデザイン部門を紹介するため",
      "研修講座についての意見を求めるため",
      "在宅勤務規定の変更を説明するため"
    ],
    explanation: ''
  },
  "p7-34": {
    text: "在宅勤務の従業員は火曜日の朝までに何をすべきですか。",
    choices: [
      "外付けドライブにファイルをバックアップする",
      "Orion の更新プログラムを開き、画面の指示に従う",
      "パスワードについて技術サポートに連絡する",
      "更新のためにオフィスへ行く"
    ],
    explanation: ''
  },
  "p7-35": {
    text: "インストール前に作業を保存するよう勧められているのはなぜですか。",
    choices: [
      "更新によって古いプロジェクトファイルが削除されるため。",
      "インストール中にコンピューターを再起動する必要があるため。",
      "チュートリアルに別のログインが必要なため。",
      "月曜日はネットワークが利用できないため。"
    ],
    explanation: ''
  },
  "p7-36": {
    text: "誰が無料で入場できますか。",
    choices: [
      "午前10時前に到着した人全員",
      "9月10日までに登録した学生と卒業して間もない人",
      "大学のキャリアクラブの会員のみ",
      "履歴書添削の予約をしている人"
    ],
    explanation: ''
  },
  "p7-37": {
    text: "Parkさんはマーケティングクラブの会員に何を持ってくるよう勧めていますか。",
    choices: [
      "印刷した履歴書",
      "学生証",
      "8ドルの入場料",
      "推薦者の一覧"
    ],
    explanation: ''
  },
  "p7-38": {
    text: "Parkさんの会社について何が示されていますか。",
    choices: [
      "午後1時30分に会場を離れる。",
      "履歴書への助言に料金を課している。",
      "会場の公式な履歴書添削プログラムには参加していない。",
      "技術分野の候補者しか受け付けない。"
    ],
    explanation: ''
  },   "p7-45": {     text: "この記事の主な内容は何ですか。",     choices: ["ベーカリー事業の拡大", "新しい種類のパンの紹介", "ベーカリーの経営者の交代", "ファーマーズマーケットの歴史"],     explanation: ''   },   "p7-46": {     text: "記事によると、新店舗が既存店にないものとして提供するのは何ですか。",     choices: ["製パン講座", "無料の試食", "オンライン注文", "延長営業"],     explanation: ''   },   "p7-47": {     text: "Maria Chen について示されていることは何ですか。",     choices: ["オースティンに最初の店を開いた", "今年引退する予定である", "ファーマーズマーケットでパンを売ることから始めた", "以前はスーパーマーケットチェーンで働いていた"],     explanation: ''   },   "p7-48": {     text: "最初のメールの目的は何ですか。",     choices: ["配送スケジュールの変更を依頼すること", "破損した家具について苦情を言うこと", "ショールーム用の新しい家具を注文すること", "配送契約を解約すること"],     explanation: ''   },   "p7-49": {     text: "2通目のメールによると、Osei氏は10月28日までに何をしなければなりませんか。",     choices: ["追加料金なしで変更できるよう、新しいスケジュールを確認すること", "追加料金を支払うこと", "ショールームを改装すること", "午前の配送枠を選ぶこと"],     explanation: ''   },   "p7-50": {     text: "金曜日の配送について示唆されていることは何ですか。",     choices: ["午後の配送は通常より遅れる場合がある", "土曜日の配送より料金が高い", "改装期間中は利用できない", "運転手が2人必要である"],     explanation: ''   }
,   "p6-35": {     text: "空欄(91)に最も適した語句を選んでください。",     choices: ["彼らの", "彼らは", "彼ら自身を", "彼らを"],     explanation: ''   },   "p6-36": {     text: "空欄(92)に最も適した文を選んでください。",     choices: ["センターから借りられるカメラは数台しかないため、参加者は自分のカメラを持参してください。", "センターでは週末に子ども向けの水泳レッスンも開いています。", "Grant氏は3か国で写真を展示したことがあります。", "昨年のワークショップは悪天候のため中止されました。"],     explanation: ''   },   "p6-37": {     text: "空欄(93)に最も適した語句を選んでください。",     choices: ["〜の間", "〜以来", "〜まで（ずっと）", "〜までに"],     explanation: ''   },   "p6-38": {     text: "空欄(94)に最も適した語句を選んでください。",     choices: ["参加者", "参加（すること）", "参加する", "参加した"],     explanation: ''   },   "p7-51": {     text: "この通知の主な目的は何ですか。",     choices: ["イベント中の通行止めについて住民に知らせること", "マラソンのボランティアを募集すること", "レースの結果を発表すること", "スポーツイベントのチケットを販売すること"],     explanation: ''   },   "p7-52": {     text: "通知によると、10月18日にドライバーは何をすべきですか。",     choices: ["駐車許可証についてイベント事務所に連絡する", "通行止めの道路の代わりに East Bypass を使う", "バスの4番と9番路線を利用する", "Fifth Street の駐車場に駐車する"],     explanation: ''   },   "p7-53": {     text: "10月12日までにイベント事務所へ連絡するよう勧められているのは誰ですか。",     choices: ["4番と9番路線のバス運転手", "コース沿いに住み、日曜の朝に移動が必要な住民", "まだ登録していないランナー", "市外から来る来訪者"],     explanation: ''   },   "p7-54": {     text: "コース案内によると、受講者が持参しなければならないものは何ですか。",     choices: ["自分の材料", "自分のエプロン", "ノート", "現金での受講料"],     explanation: ''   },   "p7-55": {     text: "Ross氏がスタジオに書いたのはなぜですか。",     choices: ["自分の日程と食事の事情にコースが合うか尋ねるため", "Baking Basics コースに申し込むため", "コースの返金を求めるため", "講師の仕事に応募するため"],     explanation: ''   },   "p7-56": {     text: "Ross氏が参加できるコースはどれですか。",     choices: ["Baking Basics コース", "World Cuisine コース", "両方のコース", "どちらのコースも参加できない"],     explanation: ''   },   "p7-57": {     text: "この広告の目的は何ですか。",     choices: ["賃貸可能なアパートを紹介すること", "家賃の値上げを告知すること", "賃貸スタッフを募集すること", "現入居者向けのルールを説明すること"],     explanation: ''   },   "p7-58": {     text: "毎月の家賃に含まれているのは何ですか。",     choices: ["電気代とインターネット代", "水道代と駐車場代", "ゲストのフィットネスセンター利用", "部屋の家具"],     explanation: ''   },   "p7-59": {     text: "内見会当日に申し込んだ人に提供されるものは何ですか。",     choices: ["初月の家賃の割引", "無料の駐車スペース", "申込手数料の免除", "フィットネスセンターの見学"],     explanation: ''   },   "p7-60": {     text: "Watanabe氏がメールを書いたのはなぜですか。",     choices: ["プロジェクトの期限変更を知らせるため", "クライアントに延長を依頼するため", "チーム会議を中止するため", "チームに新しいプロジェクトを割り当てるため"],     explanation: ''   },   "p7-61": {     text: "レビュー会議はいつ開かれますか。",     choices: ["今週の金曜日", "来週火曜日の午前10時", "11月20日", "水曜日の午前中"],     explanation: ''   },   "p7-62": {     text: "チームメンバーは水曜までに何をするよう求められていますか。",     choices: ["最終レポートを提出すること", "自分の担当部分の確認を終えること", "日程上の問題があればマネージャーに知らせること", "クライアントと面会すること"],     explanation: ''   },   "p7-63": {     text: "この職の応募者に求められる条件は何ですか。",     choices: ["コミュニケーション学の学位", "少なくとも3年のカスタマーサービス経験", "ホテルでの勤務経験", "週末勤務が可能であること"],     explanation: ''   },   "p7-64": {     text: "Fernandez氏がメールを書いたのはなぜですか。",     choices: ["職に応募するため", "勤務時間について尋ねるため", "スペイン語での面接を希望するため", "電話サービスについて苦情を言うため"],     explanation: ''   },   "p7-65": {     text: "求人に挙げられた条件のうち、Fernandez氏が明確に満たしているものはどれですか。",     choices: ["大学の学位を持っている", "求められる以上のカスタマーサービス経験がある", "技術サポートの資格を持っている", "すぐに勤務を開始できる"],     explanation: ''   },   "p7-66": {     text: "この記事の主題は何ですか。",     choices: ["ファーマーズマーケットの周年と拡大", "Hillcrest の農業の歴史", "市場の出店者同士の競争", "コミュニティセンターの新しい駐車ルール"],     explanation: ''   },   "p7-67": {     text: "周年イベントに参加した出店者はいくつですか。",     choices: ["8つ", "40を超える数", "約3,000", "10"],     explanation: ''   },   "p7-68": {     text: "来春に起こる変化は何ですか。",     choices: ["市場が Riverside 地区へ移転する", "入場が無料でなくなる", "市場が別の場所で水曜の夜にも開かれる", "市場が屋内で開催される"],     explanation: ''   },
"p6-39": {
  "text": "空欄 (95) に入る最適な答えを選んでください。",
  "choices": [
    "予定する",
    "予定されている",
    "予定",
    "予定すること"
  ]
},
"p6-40": {
  "text": "空欄 (96) に入る最適な答えを選んでください。",
  "choices": [
    "〜にもかかわらず（名詞用）",
    "〜のために（名詞用）",
    "〜だけれども",
    "〜しない限り"
  ]
},
"p6-41": {
  "text": "空欄 (97) に入る最適な答えを選んでください。",
  "choices": [
    "〜の間（3つ以上）",
    "〜の間（2つ）",
    "〜以内に",
    "〜の間（期間）"
  ]
},
"p6-42": {
  "text": "空欄 (98) に入る最適な答えを選んでください。",
  "choices": [
    "カンファレンスの夕食会は会場近くのレストランで開かれます。",
    "その日を過ぎて届いたスライドは、印刷プログラムに掲載できません。",
    "登録料は今月末まで返金可能です。",
    "昨年のカンファレンスには300人以上の参加者が集まりました。"
  ]
},
"p7-72": {
  "text": "この通知の主な目的は何ですか。",
  "choices": [
    "会社のオフィス移転を発表すること",
    "新入社員をスタッフに紹介すること",
    "会社の休日スケジュールを説明すること",
    "清掃日のボランティアを募集すること"
  ]
},
"p7-73": {
  "text": "従業員は3月13日（金）までに何をするよう求められていますか。",
  "choices": [
    "新しいビルの駐車スペースを予約すること",
    "5階でのオリエンテーションに出席すること",
    "机から私物をすべて片づけること",
    "オンラインで連絡先情報を更新すること"
  ]
},
"p7-74": {
  "text": "新しいオフィスについて推測できることは何ですか。",
  "choices": [
    "現在のオフィスより狭い",
    "公共交通機関で通うことができる",
    "当初の予定より遅れて開業する",
    "顧客との会議用のスペースがない"
  ]
},
"p7-75": {
  "text": "何が宣伝されていますか。",
  "choices": [
    "高校生向けの個別指導",
    "企業向けの翻訳サービス",
    "大人向けの語学講座",
    "ヨーロッパへの留学プログラム"
  ]
},
"p7-76": {
  "text": "夜間の会話クラスについて正しいものはどれですか。",
  "choices": [
    "定員は8名に限られている",
    "上級レベルのテストスコアが必要である",
    "土曜日の午前中に開催される",
    "他のクラスより料金が高い"
  ]
},
"p7-77": {
  "text": "受講生が1月31日までに申し込むとどうなりますか。",
  "choices": [
    "無料のテキストがもらえる",
    "入学金が免除される",
    "体験レッスンを受けることができる",
    "授業料が15パーセント割引になる"
  ]
},
"p7-78": {
  "text": "アルバレスさんがこのメールを書いた理由は何ですか。",
  "choices": [
    "オフィスチェアを新規に注文するため",
    "届いていない注文について尋ねるため",
    "破損した商品の返金を求めるため",
    "最近の注文の商品を変更するため"
  ]
},
"p7-79": {
  "text": "配送日について、アルバレスさんは何と言っていますか。",
  "choices": [
    "知らないうちに変更されていた",
    "彼女の会社のイベントの後になる",
    "営業担当者によって確認されていた",
    "当初伝えられた日付より遅れている"
  ]
},
"p7-80": {
  "text": "アルバレスさんはメールに何を添付しましたか。",
  "choices": [
    "イベント会場の写真",
    "購入時の領収書のコピー",
    "代替商品のリスト",
    "彼女のオフィスの場所を示す地図"
  ]
},
"p7-81": {
  "text": "この記事は主に何について書かれていますか。",
  "choices": [
    "人気ベーカリーチェーンの歴史",
    "駅の改修計画",
    "地元のコーヒー焙煎業者のコンテスト",
    "ある地域における新しいカフェの開店"
  ]
},
"p7-82": {
  "text": "記事によると、ホシノ・ベーカリー・カフェの特徴は何ですか。",
  "choices": [
    "24時間営業している",
    "有名ホテルで作られたパンを販売している",
    "近郊の農園で焙煎された豆を使っている",
    "初めての来店客に無料ドリンクを提供している"
  ]
},
"p7-83": {
  "text": "星野さんについて推測できることは何ですか。",
  "choices": [
    "以前パン職人として働いていた",
    "近いうちに2号店を開く予定である",
    "海外在住中にパン作りを学んだ",
    "両親からカフェを受け継いだ"
  ]
},
"p7-84": {
  "text": "この案内の目的は何ですか。",
  "choices": [
    "美術館のボランティアを募集すること",
    "会員料金の変更を説明すること",
    "美術館の最近の改修について説明すること",
    "特別展を告知すること"
  ]
},
"p7-85": {
  "text": "この特別展について言及されていないものはどれですか。",
  "choices": [
    "開催される日程",
    "子どもの入場料",
    "展示のキュレーター（学芸員）の名前",
    "週末に提供されるワークショップ"
  ]
},
"p7-86": {
  "text": "大人2名と子ども1名が平日にこの特別展に入場すると、合計いくらになりますか。",
  "choices": [
    "2,400円",
    "2,600円",
    "3,000円",
    "3,300円"
  ]
},
"p7-87": {
  "text": "どのような職種が募集されていますか。",
  "choices": [
    "倉庫管理者",
    "自動車整備士",
    "配送ドライバー",
    "カスタマーサービス担当者"
  ]
},
"p7-88": {
  "text": "この職種の応募要件はどれですか。",
  "choices": [
    "倉庫での勤務経験",
    "商用運転免許",
    "週末のみ勤務可能であること",
    "物流管理の学位"
  ]
},
"p7-89": {
  "text": "この会社は新しいドライバーに対して最初の1か月間何を提供しますか。",
  "choices": [
    "私的使用が可能な社用車",
    "10,000円の制服手当",
    "経験豊富なドライバーによる有給研修",
    "50,000円の保証ボーナス"
  ]
},
"p7-90": {
  "text": "このメールが送られた目的は何ですか。",
  "choices": [
    "会議のスケジュールの変更を知らせるため",
    "新しい地域部長を紹介するため",
    "月次売上報告書の提出を求めるため",
    "会議室を予約するため"
  ]
},
"p7-91": {
  "text": "会議は変更後、いつ開催されますか。",
  "choices": [
    "3月12日（木）午前10時",
    "3月13日（金）午前10時",
    "3月13日（金）午後2時",
    "3月11日（水）の午後"
  ]
},
"p7-92": {
  "text": "受信者は会議に何を持参するよう求められていますか。",
  "choices": [
    "自分の予定表",
    "四半期目標の概要",
    "月次報告書",
    "2月の最新の売上数字"
  ]
},
"p7-93": {
  "text": "新しい運賃はいつから適用されますか。",
  "choices": [
    "3月20日",
    "4月1日",
    "直ちに",
    "現在の定期券の期限が切れたとき"
  ]
},
"p7-94": {
  "text": "10回券を使うと、通常の片道運賃を払う場合と比べて、1回あたりいくら節約できますか。",
  "choices": [
    "0.25ドル",
    "1.50ドル",
    "0.15ドル",
    "0.35ドル"
  ]
},
"p7-95": {
  "text": "新しい運賃でも変更されないのはどれですか。",
  "choices": [
    "高齢者の運賃",
    "10回券の価格",
    "1か月定期券の価格",
    "通常の片道運賃"
  ]
},
"p7-96": {
  "text": "レビュアーはスズキのグリルについてどう述べていますか。",
  "choices": [
    "少し火が通り過ぎていた",
    "高すぎた",
    "新鮮で絶品だった",
    "ハーブなしで提供された"
  ]
},
"p7-97": {
  "text": "ジ・オリーブ・ブランチについて推測できることは何ですか。",
  "choices": [
    "予約は受け付けていない",
    "オープン以来人気が出ている",
    "最も混むのは昼食時である",
    "主に魚介類を提供している"
  ]
},
"p7-98": {
  "text": "レビューによれば、正しくないのはどれですか。",
  "choices": [
    "レストランは昨年の春にオープンした",
    "メインコースのほとんどは18ドルから26ドルである",
    "午後7時には店内はほぼ満席だった",
    "バクラヴァは甘すぎた"
  ]
},
"p7-99": {
  "text": "ウォーク・フォー・ホープには何人が参加しましたか。",
  "choices": [
    "1,200人以上",
    "ちょうど200人",
    "約900人",
    "5,000人以上"
  ]
},
"p7-100": {
  "text": "昨年のイベントではいくら集まりましたか。",
  "choices": [
    "9,000ドル",
    "40,500ドル",
    "45,000ドル",
    "63,000ドル"
  ]
},
"p7-101": {
  "text": "記事によれば、集まったお金は何に使われますか。",
  "choices": [
    "新しい子ども病院を建設する",
    "来年のイベントの費用をまかなう",
    "ボランティアに朝食を提供する",
    "機器を購入し、遊びプログラムを支援する"
  ]
},
"p7-102": {
  "text": "クリアランスセールはいつ終わりますか。",
  "choices": [
    "1月16日",
    "1月25日",
    "2月1日",
    "全商品が売り切れたとき"
  ]
},
"p7-103": {
  "text": "ある客がセール価格でヘイブンソファを買い、追加割引を受けるためにストアカードを新規で作った。この客がソファに支払う金額はいくらですか。",
  "choices": [
    "810ドル",
    "900ドル",
    "990ドル",
    "1,350ドル"
  ]
},
"p7-104": {
  "text": "コンフォート・リビングが無料で提供するのはどれですか。",
  "choices": [
    "ストアカード",
    "全購入品のギフト包装",
    "499ドル以上の注文の配送",
    "家具の組み立て"
  ]
},
"p7-105": {
  "text": "乗客は午前9時30分までに空港に到着しなければなりません。中央駅から乗れる最も遅いシャトルはどれですか。",
  "choices": [
    "午前8時",
    "午前8時30分",
    "午前9時",
    "午前9時45分"
  ]
},
"p7-106": {
  "text": "12歳未満の子どもの片道料金はいくらですか。",
  "choices": [
    "5ドル",
    "6ドル",
    "12ドル",
    "無料"
  ]
},
"p7-107": {
  "text": "シャトルサービスについて、正しくないのはどれですか。",
  "choices": [
    "バスは中央駅を30分ごとに出発する",
    "所要時間は約45分である",
    "チケットは運転手から買える",
    "大きなスーツケース1個は無料で持ち込める"
  ]
},
"p7-108": {
  "text": "Whitfieldさんがメールを送った目的は何ですか。",
  "choices": [
    "Sakura Hallに就職を申し込むこと",
    "会社のイベントのために部屋を予約できるか問い合わせること",
    "ビュッフェランチのメニューを確定すること",
    "Reyes博士をセミナーの講演に招待すること"
  ]
},
"p7-109": {
  "text": "Whitfieldさんは、セミナーに何人の参加を見込んでいますか。",
  "choices": [
    "30人",
    "85人",
    "60人",
    "120人"
  ]
},
"p7-110": {
  "text": "Whitfieldさんがセミナーの日程として最も選びそうなのはどれですか。",
  "choices": [
    "3月14日（土）",
    "3月13日（金）",
    "3月21日（土）",
    "3月20日（金）"
  ]
},
"p7-111": {
  "text": "WhitfieldさんがRoom Aを予約し、参加者60人全員分のビュッフェランチを注文した場合、総額はいくらになりますか。",
  "choices": [
    "193,000円",
    "108,000円",
    "85,000円",
    "175,000円"
  ]
},
"p7-112": {
  "text": "Moriさんの返信に言及されていないのはどれですか。",
  "choices": [
    "Room Aの収容人数",
    "平日予約の割引",
    "デポジットの支払期限",
    "ビュッフェランチの料金"
  ]
},
"p7-113": {
  "text": "この広告の主な目的は何ですか。",
  "choices": [
    "秋シーズンのツアーガイドを募集すること",
    "京都のホテルの割引を告知すること",
    "紅葉を見るガイド付き旅行を宣伝すること",
    "茶道体験の予約方法を説明すること"
  ]
},
"p7-114": {
  "text": "ツアー料金に含まれているのはどれですか。",
  "choices": [
    "毎朝の朝食",
    "毎日の昼食と夕食",
    "伝統的な茶道体験",
    "京都駅までの電車チケット"
  ]
},
"p7-115": {
  "text": "Andersenさんが早期予約割引の対象になると考えている理由はどれですか。",
  "choices": [
    "同社のリピーターだから",
    "2人分を予約するから",
    "旅行雑誌で働いているから",
    "10月の締切前に予約するから"
  ]
},
"p7-116": {
  "text": "Andersenさんが支払うべき総額はいくらですか。",
  "choices": [
    "136,400円",
    "130,400円",
    "122,400円",
    "144,000円"
  ]
},
"p7-117": {
  "text": "Andersenさんの食事に関する質問から推測できることはどれですか。",
  "choices": [
    "ホテルを変更したいと思っている",
    "すでにツアー代金を支払った",
    "広告にはベジタリアン食が用意できるかどうか書かれていない",
    "彼の妻は茶道体験に参加しない"
  ]
},
"p7-118": {
  "text": "この通知の目的は何ですか。",
  "choices": [
    "社員向けの研修ワークショップの開催を告知すること",
    "新入社員を会社に紹介すること",
    "社内ポータルの変更点を説明すること",
    "管理職に部下の評価を求めること"
  ]
},
"p7-119": {
  "text": "社員はいつまでにワークショップに申し込まなければなりませんか。",
  "choices": [
    "3月10日",
    "3月20日",
    "3月24日",
    "3月28日"
  ]
},
"p7-120": {
  "text": "Data Analysisのワークショップはどの部屋で開催されますか。",
  "choices": [
    "Seminar Room B",
    "402号室",
    "301号室",
    "204号室"
  ]
},
"p7-121": {
  "text": "Nakamuraさんは、すでに選んだ2つのワークショップに加えてExcel Basicsにも参加できますか。",
  "choices": [
    "はい、まだ席が空いているから",
    "はい、上司が承認すれば可能である",
    "いいえ、社員は2つまでしか受講できないから",
    "いいえ、申込は3月20日に締め切られたから"
  ]
},
"p7-122": {
  "text": "Project Managementのワークショップについて、Nakamuraさんが抱えている問題はどれですか。",
  "choices": [
    "まだ申し込んでいない",
    "開催される部屋が狭すぎる",
    "講師がまだ決まっていない",
    "彼の顧客との会議と時間が重なっている"
  ]
}
};

const PASSAGE_TRANSLATIONS = {
  p6_relocation: {
    sections: [
      { header: "Lindqvist様",
        body: "このたびはオフィス移転に Northgate Business Solutions をお選びいただきありがとうございます。お客様の移転が8月22日（土）午前8時[11]予定されておりますことを、確認のためご連絡いたします。\n\n当社の作業員は必要な梱包資材をすべて持参いたします。[12] 作業員の到着時点で箱詰めされていない品物については、追加の梱包料金が発生する場合があります。\n\n当社の標準保険は、追加料金なしで5,000ドルまでの損害を補償いたします。[13]、この補償は5,000ドルを超える電子機器には適用されません。そうした品物を運搬されるお客様には、追加補償のご購入をお勧めしております。追加補償は移転日前であればいつでも契約に加えることができます。\n\nご不明な点がある場合、または日程を[14]必要がある場合は、移転コーディネーターの Amelia Ruiz（555-0142）までご連絡ください。\n\n敬具\nNorthgate Business Solutions" }
    ]
  },
  p7_expense: {
    sections: [
      { header: "Kestrel Analytics\n全従業員へのお知らせ: 新しい出張費精算手続き",
        body: "7月1日より、出張費の精算申請はすべて、紙の用紙ではなく ExpenseHub のポータルから提出しなければなりません。領収書は、各費用が発生した時点で撮影してアップロードしてください。出張日から30日を超えて提出された申請は、部門長による書面での承認がない限り承認されません。\n\nまだ ExpenseHub のアカウントを有効にしていない従業員は、次回の出張より前に手続きを行ってください。有効化の手順は6月3日に全職員へ送付されています。受け取っていない場合は IT サービスデスクにご連絡ください。研修会は6月18日と6月25日の午前10時に会議室2Bで実施されます。参加は任意ですが、出張の多い従業員には強くお勧めします。\n\n7月1日以降に届いた紙の用紙は、処理されずに差出人へ返送されます。" }
    ]
  },
  p7_print: {
    sections: [
      { header: "差出人: Lena Brandt（イベント担当、Verve Media）\n宛先: Solstice Print Group\n件名: 見積依頼: 会議用パンフレット\n日付: 3月2日",
        body: "Verve Media では、4月14日開催の Coastal Marketing Summit 用のパンフレットを準備しています。12ページのフルカラーのパンフレットを再生紙に印刷したものを1,500部、遅くとも4月7日までにブリストルの事務所へ納品していただく必要があります。3月6日までに見積書をお送りいただけますか。また、1,000部を超える注文に割引が適用されるかどうかも知りたいと思っています。" },
      { header: "差出人: Tomas Rivera（アカウントマネージャー、Solstice Print Group）\n宛先: Lena Brandt\n件名: RE: 見積依頼: 会議用パンフレット\n日付: 3月4日",
        body: "お問い合わせありがとうございます。価格にはブリストルへの無料配送が含まれており、1,000部以上のご注文は自動的に10パーセントの割引の対象となります。この割引はすでに適用済みです。当社の再生紙は現在入荷待ちで、3月27日まで入荷の見込みがありません。印刷に5営業日かかるため、その用紙では4月7日より前の納品を保証できません。標準のコート紙であれば同じ価格ですぐにご用意できます。3月11日までにご希望をお知らせください。" }
    ]
  },
  p6_training: {
    sections: [
      { header: "宛先: 支店長各位\n件名: 顧客対応研修",
        body: "来月、Blue Harbor Bank は全支店の従業員を対象とした新しい顧客対応研修プログラムを導入します。各支店長は、10月8日に中央研修センターで[71]第1回研修に参加する従業員を2名選ぶ責任があります。\n\nこの研修では、難しい顧客対応への対処と、新しいデジタルバンキングサービスを分かりやすく説明する方法に重点を置きます。[72] 参加者は、短いロールプレイを通じてよくある質問への応答も練習します。\n\n定員に限りがあるため、支店長は選んだ従業員の氏名を9月25日までに提出してください。[73]、その日以降の変更については研修コーディネーターの承認が必要です。\n\n追加の情報が必要な支店長は、人事部のポータルを[74]ください。詳細な日程と準備の手引きが掲載されています。" }
    ]
  },
  p6_subscription: {
    sections: [
      { header: "件名: DataScope のご契約更新について\nAnders様",
        body: "DataScope Professional をご利用いただきありがとうございます。お客様の年間契約は11月30日に満了する予定です。中断なくご利用いただくため、その日より前にアカウントを[75]ことをお勧めいたします。\n\nさらに1年間の更新をされたお客様は15パーセントの割引を受けられます。[76] 割引後の価格は、アカウントにサインインして年間プランを選択すると自動的に表示されます。\n\nなお、クレジットカードの有効期限が最近切れている場合は、アカウントに登録されたお支払い情報の更新が必要になることがあります。[77]、有効なお支払い情報が提供されるまで更新手続きを進めることはできません。\n\nご契約についてご質問がある場合は、オンラインヘルプセンターからカスタマーサポートチームに[78]ください。\n\n敬具\nDataScope カスタマーケア" }
    ]
  },
  p6_facility: {
    sections: [
      { header: "施設部からのお知らせ",
        body: "Hawthorne Office Center の東口は、新しいセキュリティゲートの設置のため、1月12日から1月16日まで閉鎖されます。この期間中、従業員および来訪者の皆様は、Pine Street 側の西口を[79]ください。\n\n営業時間中は警備員が常駐し、来訪者の対応にあたります。[80] 一時的に列ができる可能性があるため、従業員の皆様は朝の到着時に数分の余裕を持つことをお勧めします。\n\n配送業者の方は、引き続き建物裏の荷降ろし場所をご利用ください。[81]、1月13日に予定されている大口配送については、裏手の通路がその日に再舗装されるため、別の日に変更していただく必要があります。\n\nご不便をおかけして申し訳ございません。この一時的な閉鎖の間、皆様の[82]に感謝いたします。" }
    ]
  },
  p7_library_event: {
    sections: [
      { header: "Riverton 公共図書館 — 夜の著者トーク",
        body: "5月21日（木）、Riverton 公共図書館は小説家 Dana Cole 氏を迎え、最新作『The Quiet Crossing』についての対談を開催します。イベントは午後6時30分に2階の講演室で始まり、どなたでも無料でご参加いただけます。席数は120名までのため、事前登録をお勧めします。\n\n登録済みのお客様は午後6時20分までにご来場ください。その時刻を過ぎると、確保されていない席は当日来場者に提供される場合があります。Cole 氏の著書は、トークの前後にロビーで購入できます。著者によるサインは、対談の終了後にのみ行われます。\n\n図書館の駐車場は再舗装中のため、King Street の市営駐車場のご利用をお勧めします。同駐車場は午後6時以降は無料です。" }
    ]
  },
  p7_vendor_invoice: {
    sections: [
      { header: "差出人: Mira Shah（オフィスマネージャー）\n宛先: 買掛金担当\n件名: 請求書8841",
        body: "GreenLine Office Supply からの添付の請求書を確認しました。注文の大半は火曜日に届きましたが、請求書に記載されている高さ調節可能なモニタースタンド6台は配送に含まれていませんでした。GreenLine から今朝、そのスタンドは一時的に在庫切れで、来週別便で発送されると連絡がありました。受領した品目については支払いを進め、スタンドの分は到着するまで支払いを保留してください。" },
      { header: "請求書8841 — GreenLine Office Supply",
        body: "プリンター用紙: 20箱 — 納品済み\nデスクオーガナイザー: 12点 — 納品済み\n高さ調節可能なモニタースタンド: 6台 — 入荷待ち\n配送料: 500ドルを超える注文は免除\n支払条件: 納品から30日以内" }
    ]
  },
  p7_train_schedule: {
    sections: [
      { header: "North Coast Rail — 週末の運行情報",
        body: "橋の保守作業のため、今週の土曜日と日曜日、ハーバーシティとミルタウンの間の列車は変更された時刻表で運行します。ハーバーシティ発午前8時10分の急行は午前8時35分発となり、各駅に停車します。午前9時20分発の急行は運休します。\n\n午前10時より前にハーバーシティからレイクサイドへ向かうお客様は、午前7時40分発の普通列車または変更後の午前8時35分発をご利用ください。通常の運行は月曜日に再開する見込みです。\n\n運休した列車の切符は、追加料金なしで同じ日の North Coast Rail の他の便でご利用いただけます。ご乗車を取りやめるお客様は、当社のウェブサイトから払い戻しを申請できます。" }
    ]
  },
  p7_hotel_reviews: {
    sections: [
      { header: "Harbor View Hotel — 春のビジネスパッケージ",
        body: "3月1日から5月31日までの間に2泊のご予約をいただくと、無料の朝食、午後2時までのレイトチェックアウト、および空港送迎1回分が無料で付いてきます。このパッケージは、ホテルのウェブサイトから直接ご予約いただいた場合にのみ適用されます。会議室の利用料は含まれません。" },
      { header: "差出人: Claire Morgan\n宛先: Harbor View Hotel\n件名: 予約 H4821",
        body: "春のビジネスパッケージを利用して、御社のウェブサイトから4月18日から20日までの2泊を予約しました。私の便は4月18日の午後9時15分に到着します。無料の送迎がその時間まで運行しているかどうか、ご確認いただけますか。また、4月19日に3時間、小さな会議室が必要になります。利用料をお知らせください。" }
    ]
  },
  p7_software_update: {
    sections: [
      { header: "社内連絡 — Orion Project ソフトウェアの更新",
        body: "来週の火曜日から、デザイン部門の全従業員は Orion Project Software のバージョン6.4を使用しなければなりません。この更新には、新しいファイル共有機能といくつかのセキュリティ改善が含まれます。社内ネットワークに接続されたコンピューターは、月曜日の夜間に自動的に更新をインストールします。\n\n在宅で勤務する従業員は、火曜日の朝より前に Orion の更新プログラムを開き、画面の指示に従ってください。インストールには約15分かかり、コンピューターを一度再起動する必要があります。保存していない作業は再起動中に失われます。\n\n新しい共有機能を扱う短いオンラインチュートリアルが、月曜日の午後から Learning Portal で利用できるようになります。インストールで問題が生じた職員は、自分でプログラムを再インストールせず、技術サポートにご連絡ください。" }
    ]
  },
  p7_job_fair: {
    sections: [
      { header: "Metro Career Expo — 9月12日\nRiverside Convention Hall、午前10時〜午後4時",
        body: "技術、金融、小売、接客の各分野から60社を超える企業が参加します。9月10日までにオンラインで登録した学生および卒業して間もない方は入場無料です。当日入場は8ドルです。履歴書添削の予約は20分単位で、事前予約が必要です。" },
      { header: "差出人: Elena Park（採用担当）\n宛先: マーケティングクラブ会員各位\n件名: Metro Career Expo",
        body: "当社は来週の土曜日、Metro Career Expo にブースを出展します。私は午前10時から午後1時30分まで会場におり、その後は同僚の Jordan Lee が引き継ぎます。立ち寄る予定がある方は、印刷した履歴書をお持ちください。予定されている面談の合間に簡単な助言ができます。なお、当社はイベントのウェブサイトに掲載されている公式の履歴書添削の予約には参加しておりませんのでご了承ください。" }
    ]
  },
  p7_bakery: { sections: [ { header: "Golden Crust Bakery、新たに3店舗をオープンへ", body: "サワードウブレッドで知られる地域チェーンの Golden Crust Bakery は、火曜日の発表によると、今年末までに新たに3店舗をオープンする。今回の拡大により店舗数は合計7店舗となり、オレゴン州外では初となるテキサス州オースティンの店舗も含まれる。\n\n創業者でCEOの Maria Chen は2011年、ポートランドのファーマーズマーケットの屋台でパンを売ることから Golden Crust を始めた。それ以来事業は着実に成長し、昨年は小売・卸売の両方で焼き菓子への需要が高まり、売上は18%増加した。\n\n既存店と異なり、新店舗には、同社のパン職人が教える製パン講座を受けられる小規模な教室スペースが設けられる。また同社は、3店舗合わせて約60人の従業員を追加で採用する計画だ。オースティン店への応募は来月開始され、飲食サービス業の経験がある応募者が優先される。" } ] },   p7_delivery: {     part: 7, type: "double email",     sections: [       { header: "差出人: Daniel Osei、Hartley Furniture 運営マネージャー\n宛先: Grace Liu、SwiftLine Logistics\n件名: 土曜日の配送スケジュールの変更\n日付: 10月14日", body: "Liu様\n\n通常の配送手配の変更をお願いしたく、ご連絡いたします。11月から、当社のショールームは、建物の改装のため約2か月間、土曜日は閉店いたします。そのため、展示用家具の週1回の配送を、11月の第1週から土曜日ではなく金曜日に変更していただきたいと考えております。\n\n金曜日への配送が可能かどうか、また変更によって現在の配送料金に影響があるかどうかをお知らせください。可能であれば、現在の午前の時間帯のままでお願いしたいと思います。\n\nご対応ありがとうございます。\n\nDaniel Osei" },       { header: "差出人: Grace Liu、SwiftLine Logistics\n宛先: Daniel Osei、Hartley Furniture 運営マネージャー\n件名: Re: 土曜日の配送スケジュールの変更\n日付: 10月15日", body: "Osei様\n\nご連絡ありがとうございます。11月7日から、配送を金曜日に変更することが可能です。10月28日までに新しいスケジュールをご確認いただければ、変更に追加料金はかかりません。\n\nなお、金曜日は交通量が多いため、午後2時以降に予定された配送は、予定より遅れる場合があります。お客様は午前中の枠をご希望ですので、影響はないと思われます。通常の到着時間である午前9時から10時の間は、金曜日でもご利用いただけます。\n\n10月28日までに、ご確認の返信をお願いいたします。\n\nGrace Liu" }     ]   }
,
  p6_workshop: {     sections: [       { header: "Riverton Community Center — 週末写真ワークショップ",         body: "Riverton Community Center では、11月21日（土）と22日（日）に2日間の写真ワークショップを開催します。このワークショップは、デジタルカメラでより良い写真を撮る方法を学びたい初心者の方を対象としています。\n\n参加者は室内と屋外で撮影の練習を行い、[91]各日の終わりに講師の Paula Grant 氏から個別のコメントを受けます。[92]\n\n定員は15名のため、早めの登録をお勧めします。登録は、11月14日[93]にセンターの受付までお越しください。受講料45ドルには、教材費がすべて含まれています。\n\nこの人気プログラムへの皆様の[94]を心よりお待ちしております。" }     ]   },
  p7_marathon: {     sections: [       { header: "シティマラソン：通行止めとイベント情報",         body: "年に一度の Riverside City Marathon は、10月18日（日）午前8時に Central Park をスタートして開催されます。今年は約12,000人のランナーが参加する見込みです。\n\nランナーの安全確保のため、市中心部のいくつかの道路が午前7時から午後2時まで通行止めになります。対象は River Road、Bridge Street、Harbor Avenue の北側区間です。これらの道路を通常利用するドライバーは、代わりに East Bypass のご利用をお願いします。バスの4番と9番路線も、通行止めの間は迂回運行となります。\n\nマラソンコース沿いに住んでいて日曜の朝に移動が必要な住民の方は、10月12日までにイベント事務所へ連絡し、Fifth Street の駐車場の一時許可証を申請してください。スペースは無料でご利用いただけます。" }     ]   },
  p7_course: {     sections: [       { header: "Sakura Cooking Studio — 週末コース（11月）",         body: "Sakura Cooking Studio では、11月に2つの週末コースを開講します。Baking Basics コースは土曜日の午前10時から午後1時までで、パン、ケーキ、ペイストリーを扱います。World Cuisine コースは日曜日の午前11時から午後2時までで、毎週異なる国の料理を取り上げます。どちらのコースも4週間で、受講料は材料費込みで160ドルです。受講者は自分のエプロンを持参してください。" },       { header: "差出人: Emily Ross\n宛先: Sakura Cooking Studio\n件名: コースについてのお問い合わせ\n日付: 10月20日",         body: "こんにちは。\n\n11月のコースのいずれかに参加したいのですが、土曜の午前中は仕事があるため、別の曜日のクラスしか参加できません。また、私はナッツアレルギーがあります。私が参加できるコースの料理にナッツが含まれるかどうか、また代替が可能かどうかを教えていただけますか。\n\nよろしくお願いいたします。\nEmily Ross" }     ]   },
  p7_apartment: {     sections: [       { header: "Sunnyvale Apartments — 入居者募集中",         body: "Sunnyvale Apartments では、12月1日から入居可能な1ベッドルームおよび2ベッドルームの物件を募集しています。家賃は1ベッドルームが月950ドルから、2ベッドルームが月1,300ドルからで、水道代と駐車場代が含まれています。\n\n全戸にモダンなキッチンと室内洗濯設備を備え、共用フィットネスセンターも利用できます。コミュニティルームは、住民の方がプライベートイベントのために無料で予約できます。\n\n11月14日（土）午前10時から午後4時まで、内見会を開催します。モデルルームの見学や、賃貸スタッフへの相談が可能です。内見会当日に申し込んだ方は、50ドルの申込手数料が免除されます。" }     ]   },
  p7_deadline: {     sections: [       { header: "差出人: Ken Watanabe、プロジェクトマネージャー\n宛先: プロジェクトチーム\n件名: Atlas プロジェクトの期限変更について\n日付: 11月2日",         body: "皆さん\n\nAtlas プロジェクトの期限を1週間延長することに、クライアントが同意してくれたことをお知らせします。最終レポートの提出期限は11月13日から11月20日に変更されました。\n\nこの変更に伴い、今週金曜日に予定されていたレビュー会議は、来週火曜日の午前10時に移ります。急いで終わらせようとせず、余った時間を使って自分の担当部分をしっかり確認してください。\n\n新しい期限によって他の業務に支障が出る場合は、水曜までに知らせてください。業務量を調整します。\n\nよろしくお願いいたします。\nKen Watanabe" }     ]   },
  p7_hiring: {     sections: [       { header: "求人：バイリンガル・カスタマーサポート担当 — NovaTel Communications",         body: "NovaTel Communications では、国際ヘルプデスクのカスタマーサポート担当を募集しています。応募者は、カスタマーサービスの経験が少なくとも3年あり、英語とスペイン語の両方で流暢にコミュニケーションできることが条件です。業務は、両言語での電話およびメールによる顧客対応です。勤務時間は月曜から金曜の午前9時から午後5時まで。希望者は11月25日までにオンラインで応募してください。" },       { header: "差出人: Lucia Fernandez\n宛先: NovaTel 採用チーム\n件名: カスタマーサポート職への応募\n日付: 11月5日",         body: "採用チームの皆様\n\nカスタマーサポート担当の職に応募いたします。私は過去4年間、ホテルのフロントデスクで働き、多くの国のゲストの対応をしてきました。メキシコで育ち、家庭ではスペイン語を話し、仕事では毎日英語を使っています。\n\n12月初めから勤務可能です。面接で私の応募についてお話しする機会をいただければ幸いです。\n\n敬具\nLucia Fernandez" }     ]   },
  p7_market: {     sections: [       { header: "Hillcrest Farmers Market、10周年を迎える",         body: "Hillcrest Farmers Market は土曜日に10周年を祝い、地元の出店者40以上と推定3,000人の来場者が特別イベントに参加しました。2016年に8つの屋台から始まった小さな週末市場は、今では市で最も人気のある毎週の名物の一つに成長しました。\n\n主催者は土曜日、来春から、週末に来られない住民からの要望に応えて、Riverside 地区の第2会場で水曜の夜にも市場を開くと発表しました。\n\nこの市場は新鮮な農産物、焼き菓子、手作りの工芸品で知られています。入場は無料で、市場に隣接するコミュニティセンターに駐車場があります。" }     ]   },
"p6_conference": {
  "sections": [
    {
      "header": "宛先：Alan Reyes博士\n差出人：プログラムコーディネーター Sofia Marchetti\n件名：地域マーケティング会議でのあなたのセッションについて",
      "body": "Reyes博士\n\n10月17日の地域マーケティング会議で講演を引き受けてくださりありがとうございます。あなたのセッションは、開会のあいさつの直後、ハーバーコンベンションセンターの3号室で午前10時に[95]。\n\n会場は昨年から変更になりました[96]、全体の日程は変わらず、あなたのセッションには約200人の参加が見込まれます。セッション[97]は技術スタッフがサポートしますので、スライドとマイクの確認のため、少なくとも20分前にはお越しください。\n\n10月10日までに発表スライドのコピーをお送りいただけますか。[98] 追加の機材が必要な場合は、同じ日までにご連絡ください。\n\nお迎えできるのを楽しみにしています。\n\n敬具\nSofia Marchetti"
    }
  ]
},
"p7_office_move": {
  "sections": [
    {
      "header": "全従業員へのお知らせ：オフィス移転について",
      "body": "ハートウェル・ファイナンシャル・グループは、本社をキングストリート210番地から、ハーバーアベニュー88番地のメリディアン・タワーへ移転することをお知らせいたします。移転は3月14日（土）から15日（日）の週末に行われ、通常業務は3月16日（月）より新所在地で再開されます。\n\n引っ越し業者が効率よく作業できるよう、全従業員は3月13日（金）午後5時までに、机から私物をすべて片づけるようお願いいたします。段ボール箱とラベルは、3月9日に総務部より配布されます。期限後に残された物品は廃棄されます。\n\nメリディアン・タワーは中央駅から徒歩5分で、朝夕のラッシュ時には駅とビルの間を15分間隔で会社のシャトルバスも運行します。従業員用駐車場は地下ガレージに月額60ドルで利用できます。\n\n移転に関するご質問は、総務部のデイナ・ウィットフィールド（内線4421）までお問い合わせください。"
    }
  ]
},
"p7_language_school": {
  "sections": [
    {
      "header": "ブライトパス語学学校 — 新学期は2月10日開始",
      "body": "自信を持って新しい言語を話せるようになりませんか。ブライトパス語学学校では、春学期の受講登録を受け付けています。完全な初心者から上級者まで、大人の学習者を対象に、スペイン語、フランス語、中国語、韓国語の講座を開講しています。\n\n最も人気のある講座「夜間会話」は、毎週火曜日と木曜日の午後7時から8時30分まで行われます。すべての受講生が十分に話す練習ができるよう、各クラスの定員は8名に限られています。日中に学びたい方には、土曜日の午前9時から午後1時までの「週末集中」クラスもあります。\n\n10週間コースの授業料は420ドルで、別途、入学金30ドルが1回のみかかります。1月31日までにお申し込みいただくと、授業料が15パーセント割引になります。教材費はすべて料金に含まれています。\n\nエルムストリート512番地の当校にお越しいただくか、www.brightpathlanguage.example.com からオンラインでお申し込みください。"
    }
  ]
},
"p7_delivery_inquiry": {
  "sections": [
    {
      "header": "宛先：customer.service@furnishpro.com／差出人：m.alvarez@brightline-events.com／件名：注文 #88412 の配送について",
      "body": "カスタマーサービスチーム 御中\n\n4月2日に注文した注文番号 #88412（オフィスチェア20脚と机5台）についてお問い合わせいたします。注文した際、貴社のウェブサイトには配送に5〜7営業日かかると表示されていました。しかし、現在は4月16日ですが、商品はまだ届いていません。\n\n4月24日に会社の研修イベントを予定しており、そのイベント会場にこの家具が必要なため、これは深刻な問題です。注文の状況を確認し、配送が正確にいつ行われるのか教えていただけますか。4月22日までに注文全体を配送できない場合は、椅子だけの部分配送が可能かどうかも知りたいと思います。\n\nご返信の際には、配送スケジュールを書面で確認していただけると幸いです。参考までに、購入時の領収書のコピーをこのメールに添付いたします。\n\n本件への迅速なご対応をよろしくお願いいたします。\n\n敬具\nマリア・アルバレス\nブライトライン・イベンツ オフィスマネージャー"
    }
  ]
},
"p7_cafe_opening": {
  "sections": [
    {
      "header": "新しいカフェがメープルストリートに新鮮なパンを届ける",
      "body": "メープルストリート地区の住民たちは、土曜日、ホシノ・ベーカリー・カフェがメープルストリート14番地に開店し、新しい店を歓迎しました。初日には100人を超える客が訪れ、正午までには人気のメロンパンが売り切れました。\n\nこのカフェのオーナーは星野健司さんで、自分の店を持つことを決める前、市内の有名ホテル数軒で12年間パン職人として働いていました。「近所の人たちがくつろいで、毎朝焼きたてのパンを楽しめる場所を作りたかったのです」と星野さんは語りました。\n\nパンやペストリーに加えて、このカフェでは、市外にある田中農園で焙煎された豆を使ったコーヒーを提供しています。メニューにはサンドイッチや、旬の野菜を使った日替わりスープもあります。\n\nホシノ・ベーカリー・カフェは、火曜日から日曜日の午前7時から午後7時まで営業し、月曜日は定休日です。店内には30席があり、春にオープン予定の小さなテラス席もあります。"
    }
  ]
},
"p7_museum_exhibition": {
  "sections": [
    {
      "header": "特別展：「海の色彩 — 19世紀の海洋美術」",
      "body": "リバーデール美術館は、19世紀ヨーロッパの海洋画家による絵画と素描80点以上を展示する特別展「海の色彩」を開催いたします。本展は10月4日（土）から12月21日（日）まで、美術館の東棟で開催されます。\n\n特別展の入場料は、大人1,200円、6歳から12歳の子ども600円です。6歳未満の子どもは無料です。なお、平日は大人料金が1,000円に割引されます。チケットは美術館の入口、または美術館のウェブサイトで事前に購入できます。\n\n土曜日と日曜日には、伝統的な水彩画の技法を体験できる無料のハンズオンワークショップに参加できます。ワークショップは午前11時と午後2時に始まり、各回先着20名までです。\n\n美術館は午前9時30分から午後5時30分まで開館し、月曜日は休館です。最終入場は閉館の30分前です。"
    }
  ]
},
"p7_driver_recruitment": {
  "sections": [
    {
      "header": "急募：配送ドライバー — スウィフトホール・ロジスティクス株式会社",
      "body": "スウィフトホール・ロジスティクス株式会社では、大阪配送センターで勤務する正社員の配送ドライバーを募集しています。ドライバーは社用車を使用して市内の家庭や事業所に荷物を配送し、通常1日に60〜80件の配送を行います。\n\n応募要件：\n• 有効な商用運転免許（クラスB以上）\n• 2年以上の運転経験\n• 25キログラムまでの荷物を持ち上げられること\n• 過去3年間、無事故・無違反の運転記録であること\n\n初任給は月給290,000円で、残業代と交通手当が加算されます。勤務は週5日で、早番（午前6時〜午後3時）か遅番（午後1時〜午後10時）のいずれかを選択できます。\n\n新しいドライバーには2週間の有給研修があり、その間、経験豊富なドライバーに同乗して配送ルートと手順を学びます。制服と安全装備は無料で支給されます。\n\n応募をご希望の方は、5月30日までに履歴書を careers@swifthaul.example.co.jp までお送りください。書類選考を通過した方には、2週間以内に面接のご連絡をいたします。"
    }
  ]
},
"p7_meeting_reschedule": {
  "sections": [
    {
      "header": "件名：マーケティング会議を3月13日（金）に変更します",
      "body": "チームの皆様へ\n\nお知らせいたします。毎週のマーケティング会議は、当初3月12日（木）午前10時に予定されていましたが、3月13日（金）午後2時に変更となりました。これは、地域営業部長のアルバレス氏が金曜日に本社を訪問し、会議に参加したいと希望しているためです。\n\n会議はこれまで通り4階の会議室Bで行われ、約90分の予定です。アルバレス氏が四半期目標について確認しますので、2月の最新の売上数字をお持ちください。月次報告書をまだ提出していない方は、水曜日の午後までに私までお送りください。概要資料を準備します。\n\n新しい時間が別の予定と重なる場合は、できるだけ早くご連絡ください。代替案を調整します。\n\nご理解ありがとうございます。\n\n敬具\nダニエル・キム\nマーケティング・マネージャー"
    }
  ]
},
"p7_fare_revision": {
  "sections": [
    {
      "header": "お知らせ：4月1日より運賃を改定します",
      "body": "市交通局 ― 乗客の皆様へのお知らせ\n\n市交通局は、4月1日（水）より、すべてのバスおよび地下鉄の運賃を改定します。この改定は、燃料費と維持費の上昇に対応するためのものです。\n\n新しい料金では、通常の片道運賃は2.50ドルから2.75ドルに値上がりします。10回券は22.50ドルから24.00ドルになります。1か月定期券は80.00ドルから88.00ドルに値上がりします。\n\n高齢者および学生の運賃は変更されず、6歳未満の子どもは大人の同伴があれば引き続き無料で乗車できます。4月1日より前に定期券を購入した乗客は、有効期限が切れるまでそのまま使用できます。\n\n新しい運賃表は3月20日までに全駅に掲示されます。詳細は www.citytransit.example をご覧いただくか、案内ダイヤル 555-0147 までお電話ください。"
    }
  ]
},
"p7_restaurant_review": {
  "sections": [
    {
      "header": "ジ・オリーブ・ブランチ ― ★★★★☆（5つ星中4つ）",
      "body": "昨年の春、ハーバー通りにオープンした地中海料理レストラン『ジ・オリーブ・ブランチ』は、早くも近隣で最も話題の飲食店の一つになりました。\n\n先週の土曜日に訪れたところ、午後7時には店内はほぼ満席でしたが、スタッフは落ち着いて丁寧に対応していました。サーバーは本日のおすすめを詳しく説明し、ナッツが食べられない私の同伴者のために、料理を快く調整してくれました。\n\nレモンとハーブを添えたスズキのグリルは絶品で、新鮮で軽く、量もたっぷりでした。ラムのケバブは風味豊かでしたが、少し火が通り過ぎていました。デザートのバクラヴァはパリッとしていて、甘すぎませんでした。\n\n価格は質に見合って手頃で、メインコースのほとんどは18ドルから26ドルです。唯一の不満は駐車場で、店の裏の小さな駐車場はすぐに満車になり、近くの路上駐車も限られています。\n\n全体として、ジ・オリーブ・ブランチは訪れる価値が十分にあります。特に週末は、事前に予約することをお勧めします。"
    }
  ]
},
"p7_charity_walk": {
  "sections": [
    {
      "header": "第8回『ウォーク・フォー・ホープ』に過去最多の参加者",
      "body": "日曜日の朝、市内の子ども病院のための資金を集めるチャリティーイベント、第8回『ウォーク・フォー・ホープ』に、リバーサイド公園に1,200人以上が集まりました。\n\n参加者は川沿いの5キロのコースを歩き、地元のバンドや、水を配るボランティアの応援を受けました。今年のイベントでは参加費と寄付で過去最高の54,000ドルが集まり、昨年の総額を9,000ドル上回りました。\n\n「参加してくださった皆さんに感謝します」と、主催者のマリア・サントス氏は語りました。「このお金は、病院の小児病棟の新しい機器の購入と、週末の遊びプログラムの資金に使われます。」\n\n地元企業もイベントを支援しました。ハーバー・ベーカリーはボランティアに無料の朝食を提供し、シティ・スポーツは最初に申し込んだ参加者のためにTシャツ200枚を寄付しました。\n\n第9回は来年10月に予定されており、申し込みは8月から病院のウェブサイトで始まります。"
    }
  ]
},
"p7_furniture_sale": {
  "sections": [
    {
      "header": "コンフォート・リビング家具 ― 冬のクリアランスセール",
      "body": "コンフォート・リビング家具は、1月16日から1月25日まで、五番街のダウンタウン店で今年最大のクリアランスセールを開催します。\n\n厳選されたソファ、ダイニングセット、寝室用家具が最大40％オフ。人気の3人掛け『ヘイブン』ソファは、通常価格1,500ドルが今なら900ドルです。ダイニングテーブルは25％オフ、ランプとラグはすべて在庫限り半額です。\n\n499ドル以上お買い上げのお客様には、市内への配送が無料になります。さらに、セール期間中にコンフォート・リビングのストアカードを新規でお作りいただくと、初回購入がさらに10％オフになります。\n\nセール期間中は営業時間を延長し、毎日午前9時から午後9時まで営業します。お早めにお越しください。在庫がなくなり次第終了し、再入荷はありません。"
    }
  ]
},
"p7_airport_shuttle": {
  "sections": [
    {
      "header": "ブルーライン・シャトル：空港行き時刻表とご案内",
      "body": "ブルーライン・シャトルは、中央駅とウェストフィールド国際空港の間を直行で結びます。所要時間は交通状況により約45分です。\n\nバスは中央駅を30分ごとに出発します。始発は午前5時、最終は午後11時です。空港からのバスも30分ごとに出発し、午前6時から始まります。\n\n片道料金は大人が12ドル、12歳未満の子どもが6ドルです。チケットは当社のウェブサイトか中央駅の券売機で事前に購入してください。運転手はチケットを販売しておらず、現金も扱えません。\n\n乗客は大きなスーツケース1個と小さな手荷物1個を無料で持ち込めます。追加の荷物は1個につき5ドルです。自転車などの大型の荷物をお持ちの方は、スペースに限りがあるため、少なくとも24時間前までにご連絡ください。\n\n出発の10分前までにはバス停にお越しください。バスは遅れた乗客を待つことはできません。"
    }
  ]
},
"p7_venue_booking": {
  "sections": [
    {
      "header": "Dana WhitfieldからKenji Moriへのメール — 2月10日",
      "body": "Mori様\n当社スタッフ向けの1日研修セミナーのため、Sakura Hallの部屋を予約したくご連絡いたします。3月13日（金）の午前9時から午後5時に開催したいと考えており、約60人の社員の参加を見込んでいます。発表用にプロジェクターとスクリーンが必要で、参加者全員分のビュッフェランチも手配したいと思っています。\n基調講演者のAlan Reyes博士は海外から来日し、その週は金曜日しか都合がつきません。その日程で適した部屋が空いているかどうかをお知らせいただき、総額の見積もりをお送りいただけますか。\nよろしくお願いいたします。\nDana Whitfield\nBrightpath Consulting"
    },
    {
      "header": "Kenji MoriからDana Whitfieldへのメール — 2月12日",
      "body": "Whitfield様\nお問い合わせありがとうございます。あいにく、3月13日（金）は当ホールの大きな部屋が両方ともすでに予約済みです。ただし、最大120名まで収容できるRoom Aは、3月14日（土）と3月20日（金）に空きがございます。\nRoom Aの利用料は1日85,000円で、プロジェクターとスクリーンの使用料も含まれています。ビュッフェランチはお一人様1,800円です。ご予約が確定しましたら、5営業日以内に総額の30％をデポジットとしてお支払いください。\nご希望の日程をお知らせいただければ、詳細な見積もりを作成いたします。\nKenji Mori\nSakura Hall"
    }
  ]
},
"p7_kyoto_tour": {
  "sections": [
    {
      "header": "広告 — Highland Trails Travel",
      "body": "当社の京都紅葉ツアーで秋の彩りを満喫しませんか。この3日間・2泊の旅は11月21日から23日までで、お一人様68,000円です。料金には京都駅からの往復バス送迎、嵐山リバーサイドホテルでの2泊、毎朝の朝食が含まれています。10月31日までにお申し込みいただくと、早期予約割引として10％オフになります。お一人様追加4,000円で、地元の茶道家が指導する伝統的な茶道体験にもご参加いただけます。ツアーは11月21日午前8時30分に京都駅を出発し、最少催行人数は10名です。今すぐお席をご予約ください。"
    },
    {
      "header": "Paul AndersenからHighland Trails Travelへのメール — 10月28日",
      "body": "Highland Trailsのご担当者様\n京都紅葉ツアーの広告を拝見し、11月21日出発分を、私と妻の2名分で予約したいと思います。10月末より前にご連絡していますので、早期予約割引が適用されると理解しています。茶道体験も2人分追加してください。\nお支払いの前に1つ質問があります。妻は肉を食べないのですが、ホテルでベジタリアン食を用意してもらうことは可能でしょうか。また、支払うべき総額もご確認いただけますか。\nよろしくお願いいたします。\nPaul Andersen"
    }
  ]
},
"p7_training_program": {
  "sections": [
    {
      "header": "人事部からの通知 — 3月10日",
      "body": "人事部は、今年度の春季スキル研修プログラムの開催をお知らせいたします。4月には、Excel Basics、Presentation Skills、Project Management、Data Analysisの4つのワークショップが開かれます。各社員が申し込めるのは最大2つまでで、申込は3月28日（金）までに社内ポータルで完了させてください。すべてのワークショップは当初Seminar Room Bで開催される予定でしたが、一部の部屋が変更されていますので、下記の最終日程表をご確認ください。ワークショップを修了した社員には修了証が授与されます。各部門の管理職には、希望する社員が参加できるよう業務日程の調整をお願いしています。"
    },
    {
      "header": "Ryo Nakamuraから人事部へのメール — 3月20日",
      "body": "人事部ご担当者様\nポータルを通じて、Project ManagementとData Analysisの2つのワークショップに申し込みました。ご連絡したのは、上司が4月15日の午後に重要な顧客との会議を設定したため、私のワークショップのどちらかと重なってしまうのではないかと心配しているからです。セッションの全時間に参加できるかどうか教えていただけますか。\nまた、まだ席に空きがあれば、Excel Basicsにも参加したいのですが、可能でしょうか。\nよろしくお願いいたします。\nRyo Nakamura\n営業部"
    },
    {
      "header": "春季スキル研修プログラム — 最終日程表（3月24日更新）",
      "body": "Excel Basics — 4月8日（水）午前9時30分〜午後12時30分、301号室、講師：Ito氏\nPresentation Skills — 4月10日（金）午後1時〜4時、301号室、講師：Grant氏\nProject Management — 4月15日（水）午前9時30分〜午後4時30分、402号室、講師：Park氏\nData Analysis — 4月17日（金）午前9時30分〜午後4時30分、402号室、講師：Osei氏\n注：すべての部屋は3月24日にSeminar Room Bから変更されました。\n申込は社内ポータルからのみ受け付け、締切は3月28日です。各セッションの開始10分前までにお越しのうえ、社員証をお持ちください。お問い合わせは人事部（内線2140）までお願いします。"
    }
  ]
}
};

/* =====================================================================
   ANSWER EXPLANATIONS (review screen)
   ---------------------------------------------------------------------
   Concise item-specific reasons. The correct option itself is rendered
   separately, so these notes focus on the grammar rule or textual evidence.
   ===================================================================== */

const QUESTION_EXPLANATIONS = {
  "p5-01": "reviewed は動詞なので、動作の程度を表す副詞 thoroughly が入ります。thorough は形容詞、thoroughness は名詞です。",
  "p5-02": "by the time＋現在形が未来の期限を示しており、その時点までの完了を表す未来完了 will have compiled が適切です。",
  "p5-03": "within＋期間で「その期間以内に」という意味になります。within 30 days は『30日以内に』です。",
  "p5-04": "後ろに主語＋動詞の完全な節が続き、前後が逆接なので接続詞 Although が入ります。Despite と Because of の後ろには名詞が必要です。",
  "p5-05": "空欄は applicants と résumés の所有関係を表すため whose が適切です。whose résumés で『履歴書が～である応募者』となります。",
  "p5-06": "delivery record と自然に結びつき『信頼できる納品実績』を表す reliable が文脈に合います。",
  "p5-07": "complete a form は『用紙に記入する』という定番の組み合わせです。fulfill や achieve は form を目的語に取りません。",
  "p5-08": "consider は目的語に動名詞を取るため、consider postponing の形が正解です。",
  "p5-09": "照合を求めた理由は二つの予算見積もりが一致していなかったことなので、inconsistent『不一致の』が適切です。",
  "p5-10": "The ___ of ... が主語になっているため名詞 distribution が必要です。",
  "p6-11": "Saturday, August 22 を後ろから説明する分詞構文で、beginning at 8:00 A.M.『午前8時開始で』が自然です。",
  "p6-12": "直後に『箱詰めされていない品には追加料金』とあるため、事前に机の中身を梱包するよう依頼する文が最も自然につながります。",
  "p6-13": "標準保険で損害を補償する内容と、高額な電子機器には適用されない内容が対比されるため However が適切です。",
  "p6-14": "modify the schedule で『予定を変更する』という意味になり、連絡先を案内する文脈に合います。",
  "p7-15": "冒頭で7月1日から経費精算を紙ではなく ExpenseHub で行うと説明しているため、提出方法の変更を知らせることが目的です。",
  "p7-16": "本文の at the time each expense is incurred が『各経費が発生した時』を意味します。",
  "p7-17": "参加は任意ですが、頻繁に出張する社員には strongly recommended とされているため、そうした社員に最も有用だと分かります。",
  "p7-18": "Ms. Brandt は1,000部を超える注文に割引があるか尋ねています。reduced pricing は discount の言い換えです。",
  "p7-19": "返信には10％割引が already been applied とあり、提示価格には依頼した割引がすでに反映されています。",
  "p7-20": "再生紙の入荷は3月27日予定で印刷に5営業日かかり、4月7日までの配送を保証できないため、希望日より遅れる可能性があります。",
  "p5-21": "responded を修飾する副詞 promptly『迅速に』が必要です。prompt は形容詞です。",
  "p5-22": "空港へ出発した時点より前に3件の会議を終えていたため、過去の基準点より前の完了を表す過去完了 had conducted が適切です。",
  "p5-23": "between A and B で『AとBの間』を表します。between 2:00 P.M. and 5:00 P.M. が正しい形です。",
  "p5-24": "provided that は『～という条件で』を表し、正午までに検査が終われば出荷するという条件関係に合います。",
  "p5-25": "前置詞 with の目的語になる関係代名詞が必要なので whom が適切です。with whom の形で使います。",
  "p5-26": "request a full refund は『全額返金を求める』という定番表現です。空欄には名詞が必要です。",
  "p5-27": "make a decision で『決定する』という固定表現になります。",
  "p5-28": "Only after を文頭に置くと主節が倒置になり、助動詞 did が主語 the manager の前に出ます。",
  "p5-29": "Each department は単数扱いなので、対応する所有格は its です。",
  "p5-30": "主語の中心は単数の A series なので動詞は is になります。workshops に引っ張られないことがポイントです。",
  "p5-31": "名詞 assistance を修飾する形容詞 financial が必要です。financial assistance で『金銭的支援』です。",
  "p5-32": "every day が習慣・通常の時刻表を示すため、現在形 opens が適切です。",
  "p5-33": "in addition to は『～に加えて』という固定表現です。",
  "p5-34": "『インストールで問題が起きた場合は連絡してください』という条件を表す if が適切です。",
  "p5-35": "前置詞 of の目的語として施設を受ける関係代名詞 which が必要です。several rooms of which の形になります。",
  "p5-36": "be designed to の後ろには動詞の原形が入り、reduce the amount of time で『時間を減らす』となります。",
  "p5-37": "take advantage of は『～を活用する』という固定表現です。",
  "p5-38": "expect to do の形を取るため、to complete が適切です。",
  "p5-39": "seats は数えられる複数名詞で、残数が少ないことを表す a few が適切です。a little は数えられない名詞に使います。",
  "p5-40": "neither A nor B では通常、動詞を近い主語 B に一致させます。sales representatives が複数で、yesterday が過去なので were です。",
  "p5-41": "redesigned を修飾する副詞 completely が必要です。",
  "p5-42": "Since joining ... が過去から現在までの期間を示すため、現在完了 has led が適切です。",
  "p5-43": "until further notice は『追って通知があるまで』という定番表現です。",
  "p5-44": "『天候が改善しない限り屋内へ移す』という意味なので Unless が適切です。unless は if ... not に相当します。",
  "p5-45": "空欄は人 employee を受け、後ろの submitted の主語になるため who が適切です。",
  "p5-46": "需要増加を受けて生産を増やす文脈なので、動詞 expand『拡大する』が適切です。",
  "p5-47": "review the terms で『条件をよく確認する』という自然な組み合わせになります。",
  "p5-48": "ask 人 to do『人に～するよう頼む』の形なので to reserve が入ります。",
  "p5-49": "the ___ of の空欄には名詞が必要で、feasibility『実現可能性』が適切です。",
  "p5-50": "If＋過去完了は過去の事実に反する条件を表し、主節は would have＋過去分詞になります。",
  "p5-51": "ウェブサイト上を表すときは前置詞 on を使い、on the company's website となります。",
  "p5-52": "Patel氏とGomez氏の異なる役割を対比しているため whereas『一方で』が適切です。",
  "p5-53": "warehouse を場所として受け、そこで部品が保管されることを示す関係副詞 where が適切です。",
  "p5-54": "kitchen is being renovated で『厨房が改装されている』という受動進行形になります。",
  "p5-55": "take responsibility for は『～の責任を負う』という固定表現です。",
  "p5-56": "recommend that＋主語＋動詞の原形という形なので wear が正解です。",
  "p5-57": "名詞 explanation を修飾する形容詞 clear が必要です。remarkably はその形容詞をさらに修飾しています。",
  "p5-58": "usually が習慣を示し、主語 The customer service team は単数なので三人称単数現在の responds が適切です。",
  "p5-59": "apply to は『～に適用される』という固定表現です。",
  "p5-60": "改装工事が別の階で進んでいる間も営業するという同時進行を表す while が適切です。",
  "p5-61": "十分なテスト期間を確保できないほど計画が野心的だった、という意味なので ambitious が適切です。",
  "p5-62": "conduct a survey は『調査を実施する』という定番の組み合わせです。",
  "p5-63": "否定的な Not until が文頭に出ると主節は倒置になり、could the team begin の語順になります。",
  "p5-64": "installed を修飾する副詞 easily が必要です。easy は形容詞です。",
  "p5-65": "提示した時点まで6か月間開発を続けていたので、過去完了進行形 had been developing が適切です。",
  "p5-66": "complimentary はホテルなどで『無料の』を意味し、complimentary shuttle service で無料送迎サービスとなります。",
  "p5-67": "pay attention to は『～に注意を払う』という固定表現です。",
  "p5-68": "the ___ of の空欄には名詞が必要で、accuracy『正確さ』が適切です。",
  "p5-69": "address concerns は『懸念に対処する』という自然な組み合わせです。",
  "p5-70": "allow 人 to do『人が～することを可能にする』の形なので to attend が入ります。",
  "p6-15": "カンマの後ろから workshop を補足説明する非制限用法の関係節で、which will be held『開催される予定の』が適切です。",
  "p6-16": "前文の研修内容につながり、後文のロールプレイにも自然につながるのは、顧客フィードバックを基にプログラムを開発したという文です。",
  "p6-17": "9月25日までの提出を求めた後、その日以降の変更には承認が必要という制限を加えるため However が適切です。",
  "p6-18": "consult the portal で『ポータルを参照する』という意味になり、詳細情報の確認方法として自然です。",
  "p6-19": "recommend の後ろには動名詞を取れるため、recommend renewing『更新することを勧める』が適切です。",
  "p6-20": "前文の15％割引が年間更新者向けであることを補足するため、月額プランは対象外という文が自然です。",
  "p6-21": "有効な支払い情報を提供しない場合は更新できない、という結果を表す Otherwise『そうでなければ』が適切です。",
  "p6-22": "contact our customer support team で『顧客サポートに連絡する』という自然な表現になります。",
  "p6-23": "入口を利用するという意味なので use the west entrance が最も自然です。",
  "p6-24": "西側入口を使う来訪者への案内として、駐車場から正しい入口へ誘導する仮設標識の文が自然につながります。",
  "p6-25": "後方道路が舗装工事される結果、大型配送を別日に移す必要があるため As a result が適切です。",
  "p6-26": "不便を詫びた後に appreciate your patience『ご理解・ご辛抱に感謝します』と結ぶのが定番です。",
  "p7-21": "日時、会場、参加方法、著者サイン会などを案内しているため、図書館イベントの告知が主目的です。",
  "p7-22": "本文に After that time, unclaimed seats may be offered to walk-in visitors と明記されています。",
  "p7-23": "図書館の駐車場が工事中で、市営ガレージの利用を勧めているため、図書館から離れた場所に駐車する可能性があります。",
  "p7-24": "メールと請求書の両方で adjustable monitor stands が未着・back ordered と示されています。",
  "p7-25": "Mira は未着のスタンドが届くまで、その分の支払いを保留するよう依頼しています。",
  "p7-26": "請求書で500ドルを超える注文は配送料免除とあり、実際に delivery fee が waived なので合計は500ドル超と推測できます。",
  "p7-27": "本文に8時10分発は8時35分に出発し、すべての各駅に停車すると明記されています。",
  "p7-28": "本文の may be used on any other ... service on the same day が『同日の別便に使える』ことを示します。",
  "p7-29": "土曜日の9時20分発の急行は canceled とあるため、その便を予定していた乗客が変更を必要とします。",
  "p7-30": "パッケージ特典として complimentary breakfast が明記されています。meeting-room rental は含まれません。",
  "p7-31": "Ms. Morgan は無料シャトルの運行時間と、会議室のレンタル料金という二つのサービスについて尋ねています。",
  "p7-32": "パッケージ案内に Meeting-room rental is not included と明記されているため、4月19日の会議室は対象外です。",
  "p7-33": "全デザイン部門社員がバージョン6.4を使う必要があることと更新方法を案内しているため、必須更新の告知が目的です。",
  "p7-34": "リモート勤務者は火曜朝までに updater を開き、画面の指示に従うよう本文に明記されています。",
  "p7-35": "インストール中にコンピューターが再起動し、未保存の作業が失われるため、事前保存が必要です。",
  "p7-36": "9月10日までにオンライン登録した学生と卒業して間もない人は無料と案内されています。",
  "p7-37": "Ms. Park はクラブ会員に bring a printed résumé と直接伝えています。",
  "p7-38": "イベント案内の公式履歴書添削と、Park氏の会社による非公式な助言は別であり、同社は公式プログラムに参加していません。",   "p7-45": "冒頭で will open three new locations とあり、記事全体が店舗拡大の発表を伝えているため、ベーカリー事業の拡大が主題です。",   "p7-46": "Unlike the existing shops, the new locations will include small classroom spaces where customers can take baking courses と明示されています。",   "p7-47": "Founder and CEO Maria Chen started Golden Crust in 2011, selling loaves from a stall at a Portland farmers market とあります。オースティンは初の州外店舗であり、最初の店ではありません。",   "p7-48": "I am writing to request a change to our regular delivery arrangement と冒頭で述べ、土曜から金曜への変更を依頼しています。",   "p7-49": "If you confirm the new schedule by October 28, there will be no additional charge とあり、28日までの確認が追加料金なしの条件です。",   "p7-50": "2通目に、金曜の交通量のため deliveries scheduled after 2:00 P.M. sometimes arrive later than planned とあります。午前の枠は通常どおり利用可能です。"
,   "p6-35": "主語の位置なので主格の they が必要です。their は所有格、them は目的格、themselves は再帰代名詞です。",   "p6-36": "直前が講師からのコメント、直後が登録の案内という流れの中で、持ち物に関する注意事項が最も自然につながります。他の選択肢は話題がずれています。",   "p6-37": "期限を表すのは by（〜までに）です。until は継続の終点を表すため、visit のような一時的な動作の期限には使えません。",   "p6-38": "your の後ろには名詞が必要です。participation は「参加」という名詞、participant は人を表す名詞で文意に合いません。",   "p7-51": "通知はマラソン当日の通行止め対象道路と時間帯を中心に伝えており、住民への周知が目的です。",   "p7-52": "Drivers who normally use these roads are advised to use the East Bypass instead とあります。駐車許可証が必要なのはコース沿いの住民です。",   "p7-53": "Residents who live along the marathon route and need to travel on Sunday morning should contact the event office by October 12 と明示されています。",   "p7-54": "Students must bring their own aprons とあります。材料費は受講料に含まれています。",   "p7-55": "メールでは、土曜午前は仕事で参加できないことと、ナッツアレルギーがあることを伝え、参加可能なコースについて尋ねています。",   "p7-56": "Ross氏は土曜午前に仕事があるため、土曜開催の Baking Basics には参加できません。日曜開催の World Cuisine が唯一参加可能なコースです。",   "p7-57": "Now leasing ... units とあり、賃貸物件の募集広告です。",   "p7-58": "including water and parking と明示されています。電気・インターネット・家具については記載がありません。",   "p7-59": "Applications submitted during the open house will have the $50 application fee waived とあります。",   "p7-60": "メールの主旨は、クライアントの同意で期限が1週間延びたことの通知です。延長を依頼するメールではありません。",   "p7-61": "the review meeting ... will be moved to next Tuesday at 10:00 A.M. とあります。11月20日はレポートの期限です。",   "p7-62": "If the new deadline causes any problems ..., please let me know by Wednesday とあります。担当部分の確認は期限を切られていません。",   "p7-63": "Applicants must have at least three years of customer service experience が条件です。ホテル経験や学位は条件ではありません。",   "p7-64": "I would like to apply for the customer support representative position と、応募のメールです。",   "p7-65": "求人は3年以上の経験を要求し、Fernandez氏はホテルのフロント（顧客対応）を4年経験しています。学位や資格の記載はありません。",   "p7-66": "記事は10周年のイベントと、来春からの第2会場・水曜夜間開催という拡大計画が中心です。",   "p7-67": "more than forty local vendors とあります。3,000は来場者数、8は2016年当初の屋台数です。",   "p7-68": "starting next spring, the market will also open on Wednesday evenings at a second location とあります。移転ではなく追加開催です。",
"p6-39": "主語 Your session は「予定される」側なので受動態 is scheduled が正解。",
"p6-40": "後ろが完全な文なので接続詞が必要。会場変更と日程不変は対比の関係で Although が正解（Despite / Because of は名詞句用）。",
"p6-41": "「セッションの間ずっと」サポートするという意味で、期間を表す during が正解。",
"p6-42": "直前が「10月10日までにスライドを送ってください」という文なので、その期限を過ぎた場合の扱いを述べる文が入る。",
"p7-72": "通知の冒頭で本社移転（relocation）が発表されており、文書全体がその日程と準備についての案内であるため、目的はオフィス移転の発表である。",
"p7-73": "本文に「all employees are asked to remove every personal item from their desks by 5:00 P.M. on Friday, March 13」と明記されている。",
"p7-74": "新オフィスは中央駅から徒歩5分で、駅との間にシャトルバスも運行するとあるため、公共交通機関で通えることが推測できる。",
"p7-75": "広告は語学学校の講座登録の案内で、対象は「adult learners（大人の学習者）」と明記されている。",
"p7-76": "「each class is limited to eight students」と、夜間会話クラスの定員が8名に限られていることが明記されている。",
"p7-77": "「Register by January 31 and receive a 15 percent discount on tuition」と、1月31日までの登録で授業料が15%割引になると明記されている。",
"p7-78": "件名が「Delivery of Order #88412」で、本文でも届いていない注文の状況を尋ねているため、未着の注文についての問い合わせである。",
"p7-79": "注文時は「5〜7営業日」で届くと表示されていたのに、4月2日の注文が4月16日になっても届いていないと述べており、当初の予定より遅れていることが分かる。",
"p7-80": "本文の「I have attached a copy of my purchase receipt to this e-mail」と、購入時の領収書のコピーを添付したことが明記されている。",
"p7-81": "記事はメープルストリートに開店したホシノ・ベーカリー・カフェの初日の様子を報じており、主題は新しいカフェの開店である。",
"p7-82": "「coffee made from beans roasted at the Tanaka Farm, located just outside the city」と、近郊の農園で焙煎された豆を使うことが明記されている。",
"p7-83": "星野さんは「spent twelve years working as a baker at several well-known hotels」とあり、以前パン職人として働いていたことが推測できる。",
"p7-84": "案内は特別展「Colors of the Sea」の会期・料金・ワークショップを告知するもので、目的は特別展の発表である。",
"p7-85": "会期、子どもの料金、週末のワークショップには言及があるが、キュレーター（学芸員）の名前は本文のどこにも出てこない。",
"p7-86": "平日は大人料金が1,200円から1,000円に割引されるため、大人2名で2,000円、子ども（6〜12歳）は600円で、合計は2,600円になる。",
"p7-87": "求人広告の見出しが「DELIVERY DRIVERS」の募集であり、職種は配送ドライバーである。",
"p7-88": "Requirements の筆頭に「A valid commercial driver's license (Class B or above)」とあり、商用運転免許が必須要件である。",
"p7-89": "「New drivers receive two weeks of paid training, during which they ride with an experienced driver」と、経験者同乗の有給研修が最初の期間に提供されることが明記されている。",
"p7-90": "冒頭で、木曜日の会議が金曜日に変更されたことが明記されており、このメールの目的は日程変更の連絡である。",
"p7-91": "本文に 'moved to Friday, March 13 at 2:00 p.m.' とあり、変更後の日時は3月13日（金）午後2時である。",
"p7-92": "本文に 'Please bring the updated sales figures for February' とあり、持参するよう求められているのは2月の最新の売上数字である。",
"p7-93": "冒頭に 'revise fares ... beginning Wednesday, April 1' とあり、新運賃の適用開始は4月1日である。",
"p7-94": "10回券は24ドルなので1回あたり2.40ドル。通常の片道運賃2.75ドルとの差額は0.35ドルになる。",
"p7-95": "本文に 'Fares for seniors and students will remain unchanged' とあり、高齢者（と学生）の運賃は変更されない。",
"p7-96": "スズキのグリルは 'excellent — fresh, light' と評されており、新鮮で絶品だったと述べられている。",
"p7-97": "本文に 'has quickly become one of the most talked-about dining spots' とあり、開店以来話題、すなわち人気が出ていると推測できる。",
"p7-98": "バクラヴァについては 'not overly sweet'（甘すぎなかった）と書かれており、「甘すぎた」という選択肢が誤りである。",
"p7-99": "冒頭に 'More than 1,200 people gathered' とあり、参加者は1,200人以上である。",
"p7-100": "今年の総額は54,000ドルで、昨年を9,000ドル上回った。よって昨年は 54,000 − 9,000 ＝ 45,000ドルである。",
"p7-101": "主催者の発言として 'buy new equipment ... and to fund its weekend play program' とあり、お金は機器の購入と遊びプログラムの資金に使われる。",
"p7-102": "セール期間は 'from January 16 to January 25' とあり、終了日は1月25日である。",
"p7-103": "ヘイブンソファのセール価格は900ドル。新規カードの追加10％オフを適用すると 900 × 0.9 ＝ 810ドルになる。",
"p7-104": "本文に 'spend $499 or more will receive free delivery' とあり、499ドル以上の注文は配送が無料になる。",
"p7-105": "所要時間は約45分なので、9時30分までに着くには8時45分までに出発する必要がある。30分間隔の便では、8時30分発（9時15分着）が最も遅い便である。",
"p7-106": "本文に '$6 for children under 12' とあり、12歳未満の子どもの片道料金は6ドルである。",
"p7-107": "本文に 'drivers do not sell tickets' と明記されており、チケットを運転手から買うことはできない。",
"p7-108": "1通目でWhitfieldさんは、研修セミナーのためにSakura Hallの部屋を予約したいと述べ、日程の空き状況と見積もりを尋ねている。",
"p7-109": "1通目に「約60人の社員が参加する見込み」と明記されている。",
"p7-110": "1通目では講演者のReyes博士は金曜日しか都合がつかないとされ、2通目では3月13日（金）は満室で、空いているのは3月14日（土）と3月20日（金）とあるため、条件に合うのは3月20日である。",
"p7-111": "2通目のRoom A料金85,000円と、1通目の参加者60人に2通目のランチ1人1,800円を掛けた108,000円を合計すると193,000円になる。",
"p7-112": "2通目には収容人数（120人）、デポジットの期限（5営業日以内）、ランチ料金（1,800円）への言及があるが、平日割引については書かれていない。",
"p7-113": "広告は京都紅葉ツアーの日程・料金・特典を挙げて、参加を呼びかける内容である。",
"p7-114": "広告には、料金に往復バス送迎、ホテル2泊、毎朝の朝食が含まれるとある。茶道体験は追加料金が必要である。",
"p7-115": "広告には10月31日までの予約で10％の早期予約割引とあり、Andersenさんのメールは10月28日付であるため、締切前の予約だと分かる。",
"p7-116": "広告の料金68,000円×2人＝136,000円に早期割引10％を適用すると122,400円となり、メールで希望した茶道体験4,000円×2人＝8,000円を加えると130,400円になる。",
"p7-117": "Andersenさんはメールでベジタリアン食の可否をわざわざ尋ねており、広告には食事の選択肢についての記載がないことが分かる。",
"p7-118": "通知は人事部が、4月に開かれる4つの研修ワークショップとその申込方法を社員に知らせる内容である。",
"p7-119": "通知に、申込は3月28日（金）までに社内ポータルで完了させることと明記されている。",
"p7-120": "通知では全ワークショップがSeminar Room Bで開催される予定だったが、3月24日更新の最終日程表ではData Analysisは402号室に変更されている。",
"p7-121": "通知に「各社員が申し込めるのは最大2つまで」とあり、メールによればNakamuraさんはすでに2つ申し込んでいるため、3つ目の追加はできない。",
"p7-122": "メールでNakamuraさんは4月15日午後に顧客との会議があると述べており、日程表ではProject Managementが4月15日午前9時30分から午後4時30分に開催されるため、時間が重なっている。"
};

/* =====================================================================
   LISTENING MVP — original Part 1–4 questions
   ---------------------------------------------------------------------
   Primary audio comes from pre-generated OpenAI TTS MP3 files stored in
   ./audio. The browser Web Speech API remains as an offline fallback only.
   No API key is stored in this HTML file and playback never calls an API.
   Part 1 uses original generated workplace images embedded below.
   ===================================================================== */

const EMBEDDED_AUDIO = {}; // Audio is loaded from the external audio/ folder.

const LISTENING_AUDIO = {
  "l1-office": {
    segments: [{ role: "narrator", text: "Look at the picture. A. She is watering a plant. B. She is placing some documents into a folder. C. She is closing a laptop computer. D. She is drinking from a cup." }],
    jaSegments: ["写真を見てください。A. 女性は植物に水をやっています。B. 女性は書類をフォルダーに入れています。C. 女性はノートパソコンを閉じています。D. 女性はカップから飲み物を飲んでいます。"]
  },
  "l1-shop": {
    segments: [{ role: "narrator", text: "Look at the picture. A. He is arranging products on a shelf. B. He is moving a checkout counter. C. He is replacing a light bulb. D. He is sweeping the floor." }],
    jaSegments: ["写真を見てください。A. 男性は棚の商品を並べています。B. 男性はレジ台を動かしています。C. 男性は電球を交換しています。D. 男性は床を掃いています。"]
  },
  "l2-01": { segments: [{ role: "narrator", text: "When will the revised schedule be sent? A. By the end of the day. B. To all department managers. C. No, the schedule hasn't changed." }], jaSegments: ["改訂された予定表はいつ送られますか。A. 今日中です。B. 全部門の管理職宛てです。C. いいえ、予定表は変わっていません。"] },
  "l2-02": { segments: [{ role: "narrator", text: "Who approved the new advertising budget? A. It was quite expensive. B. Ms. Gomez did. C. In the conference room." }], jaSegments: ["新しい広告予算を承認したのは誰ですか。A. かなり高価でした。B. Gomezさんです。C. 会議室です。"] },
  "l2-03": { segments: [{ role: "narrator", text: "Could you help me move these chairs? A. Sure. Where should I put them? B. The meeting begins at three. C. They're made of wood." }], jaSegments: ["この椅子を動かすのを手伝ってもらえますか。A. もちろん。どこに置けばよいですか。B. 会議は3時に始まります。C. 木製です。"] },
  "l2-04": { segments: [{ role: "narrator", text: "Why was the seminar postponed? A. At the downtown hotel. B. For about two hours. C. Because the speaker's flight was canceled." }], jaSegments: ["なぜセミナーは延期されたのですか。A. 中心街のホテルです。B. 約2時間です。C. 講演者の便が欠航になったからです。"] },
  "l2-05": { segments: [{ role: "narrator", text: "Haven't you submitted the expense report yet? A. Not yet. I'm waiting for a receipt. B. Yes, the trip was very productive. C. The accounting department is upstairs." }], jaSegments: ["まだ経費報告書を提出していないのですか。A. まだです。領収書を待っています。B. はい、出張はとても有意義でした。C. 経理部は上の階です。"] },
  "l2-06": { segments: [{ role: "narrator", text: "Which printer should I use? A. About twenty pages. B. The one beside the conference room. C. I printed it yesterday." }], jaSegments: ["どのプリンターを使えばよいですか。A. 約20ページです。B. 会議室の横にあるものです。C. 昨日印刷しました。"] },
  "l3-projector": {
    segments: [
      { role: "speakerA", text: "The clients will be here at two, but the projector in Conference Room B isn't working." },
      { role: "speakerB", text: "I can bring the portable projector from the training room." },
      { role: "speakerA", text: "Great. Could you set it up by one thirty? I'd like to test the slides before they arrive." }
    ],
    jaSegments: ["女性：顧客は2時に来ますが、会議室Bのプロジェクターが動きません。", "男性：研修室から携帯型プロジェクターを持って来られます。", "女性：助かります。1時30分までに設置してもらえますか。顧客が来る前にスライドを確認したいです。"]
  },
  "l3-restaurant": {
    segments: [
      { role: "speakerB", text: "I'd like to reserve a table for six this Friday at seven o'clock." },
      { role: "speakerA", text: "Our indoor dining room is full at seven. We have an indoor table at seven thirty, or a table on the patio at seven." },
      { role: "speakerB", text: "The patio at seven will be fine. Please reserve that one." }
    ],
    jaSegments: ["男性：今週金曜日の7時に6人用のテーブルを予約したいのですが。", "女性：7時は屋内席が満席です。7時30分なら屋内席、7時ならテラス席をご用意できます。", "男性：7時のテラス席で大丈夫です。それを予約してください。"]
  },
  "l4-airport": {
    segments: [{ role: "narrator", text: "Attention passengers on Flight 286 to Vancouver. The departure gate has changed from Gate 12 to Gate 18. Boarding will begin twenty minutes later than scheduled because the aircraft is undergoing an additional safety inspection. Please proceed to Gate 18 and listen for further announcements." }],
    jaSegments: ["Vancouver行き286便をご利用のお客様にお知らせします。出発ゲートは12番から18番に変更されました。機体の追加安全点検のため、搭乗開始は予定より20分遅れます。18番ゲートへ移動し、続報をお待ちください。"]
  },
  "l4-delivery": {
    segments: [{ role: "narrator", text: "Hello, Ms. Patel. This is Aaron from Northline Office Supply. I'm calling about your order of twelve office chairs. The chairs were expected this Thursday, but a warehouse computer problem has delayed the shipment until Monday. If you need seating before then, we can provide six temporary chairs for pickup at our store on Friday. Please call me by four o'clock today if you'd like that option." }],
    jaSegments: ["Patelさん、Northline Office SupplyのAaronです。ご注文のオフィスチェア12脚についてお電話しています。木曜日に到着予定でしたが、倉庫のコンピューター障害により月曜日まで遅れます。それまでに椅子が必要でしたら、金曜日に店舗で仮の椅子6脚をお受け取りいただけます。ご希望の場合は本日4時までにお電話ください。"]
  }
,"lx-p3-set08":{segments:[{"role": "speakerA", "text": "Hi, Tom. Do you have a minute? The slides for this afternoon's presentation won't open on my computer."}, {"role": "speakerB", "text": "That's strange. Did you try restarting it?"}, {"role": "speakerA", "text": "Twice. I just get an error message every time."}, {"role": "speakerB", "text": "The file might be damaged. Do you have a copy saved anywhere else?"}, {"role": "speakerA", "text": "I saved one on the shared drive last night, but it's the version from before I added the sales figures."}, {"role": "speakerB", "text": "That's fine. The figures are in the report I e-mailed you this morning, so you can copy them from there."}, {"role": "speakerA", "text": "Good idea. But the client meeting starts at two, and it's already one thirty."}, {"role": "speakerB", "text": "Then let's use the computer in the meeting room instead of yours. I'll set it up while you update the slides."}, {"role": "speakerA", "text": "Thanks. Could you also print a few copies of the report, just in case?"}, {"role": "speakerB", "text": "Sure. I'll do that right after I finish setting up the computer."}],jaSegments:["こんにちは、Tom。少し時間ありますか。午後のプレゼンのスライドが私のパソコンで開けないんです。", "それは変ですね。再起動は試しましたか。", "2回しました。毎回エラーメッセージが出ます。", "ファイルが壊れているのかもしれません。ほかにコピーは保存していますか。", "昨夜、共有ドライブに保存しましたが、売上数字を入れる前のバージョンなんです。", "大丈夫ですよ。数字は今朝メールで送ったレポートに入っているので、そこからコピーできます。", "いい考えですね。でも顧客との会議は2時からで、もう1時半です。", "では、あなたのパソコンではなく会議室のパソコンを使いましょう。あなたがスライドを更新している間に、私がセットアップします。", "ありがとう。念のため、レポートも何部か印刷してもらえますか。", "いいですよ。パソコンのセットアップが終わったらすぐに印刷します。"]},"lx-p3-set09":{segments:[{"role": "speakerA", "text": "Hello. I'd like to book a flight to Chicago for next Tuesday. I need to arrive before noon for a conference."}, {"role": "speakerB", "text": "Let me check. There's a flight that leaves at seven ten and arrives at ten forty-five, or a cheaper one at nine thirty that gets in at one fifteen."}, {"role": "speakerA", "text": "The cheaper one is too late. I'll take the seven ten flight."}, {"role": "speakerB", "text": "Certainly. Would you like a window seat or an aisle seat?"}, {"role": "speakerA", "text": "An aisle seat, please. And is a meal included on that flight?"}, {"role": "speakerB", "text": "Yes, breakfast is served on morning flights. Will you be checking any luggage?"}, {"role": "speakerA", "text": "Just one suitcase. Oh, and I may need to change my return date. Is that possible?"}, {"role": "speakerB", "text": "Yes. But please note that changes made less than a week before departure cost fifty dollars."}, {"role": "speakerA", "text": "That's fine. I'll book the return for Friday for now, and I'll let you know if it changes."}],jaSegments:["こんにちは。来週の火曜日にシカゴ行きの飛行機を予約したいんです。会議があるので、正午前に到着しなければなりません。", "お調べします。7時10分発で10時45分に着く便と、安いですが9時30分発で1時15分着の便があります。", "安い方は遅すぎます。7時10分の便にします。", "かしこまりました。窓側と通路側、どちらの席がよろしいですか。", "通路側をお願いします。それと、その便は食事付きですか。", "はい、午前の便では朝食が出ます。お預けの荷物はありますか。", "スーツケース1つだけです。あと、帰りの日付を変更するかもしれません。可能ですか。", "はい。ただし、出発の1週間前を切ってからの変更には50ドルかかりますのでご注意ください。", "大丈夫です。とりあえず帰りは金曜日で予約して、変わるようなら連絡します。"]},"lx-p3-set10":{segments:[{"role": "speakerA", "text": "Hi, Rachel. How are the preparations going for Monday's orientation for the new employees?"}, {"role": "speakerB", "text": "Almost done. Twelve people are starting, so I reserved the large training room."}, {"role": "speakerA", "text": "Good. Have the welcome packages been printed yet?"}, {"role": "speakerB", "text": "The printing company delivered them this morning. But we're short of name badges — only ten arrived."}, {"role": "speakerA", "text": "I'll call the company today and ask them to send the missing two by Friday."}, {"role": "speakerB", "text": "Thanks. Also, the president would like to give a short welcome speech at nine."}, {"role": "speakerA", "text": "Then we should start registration at eight thirty instead of nine."}, {"role": "speakerB", "text": "Right. I'll update the schedule and e-mail it to all the presenters this afternoon."}, {"role": "speakerA", "text": "Perfect. And what about lunch? Did you order it from the usual place?"}, {"role": "speakerB", "text": "Yes, but this time I asked them to add two vegetarian meals."}],jaSegments:["やあ、Rachel。月曜の新入社員向けオリエンテーションの準備はどうですか。", "ほぼ終わりました。12人入社するので、大きい研修室を予約しました。", "よかった。歓迎パッケージはもう印刷できましたか。", "印刷会社が今朝届けてくれました。でも名札が足りません。10個しか届いていないんです。", "今日会社に電話して、不足分の2個を金曜までに送るよう頼みます。", "ありがとうございます。それと、社長が9時に短い歓迎の挨拶をしたいそうです。", "では、受付は9時ではなく8時半に始めましょう。", "そうですね。今日の午後に日程を更新して、発表者全員にメールします。", "完璧だね。それと昼食は？いつものところに頼んだ？", "はい。ただ今回は、ベジタリアン向けの食事を2食追加してもらいました。"]},"lx-p3-set11":{segments:[{"role": "speakerA", "text": "Hello, this is Anna Reed in room 512. I'm calling about my reservation."}, {"role": "speakerB", "text": "Good evening, Ms. Reed. How can I help you?"}, {"role": "speakerA", "text": "My meeting tomorrow has been moved to the afternoon, so I'd like to check out later than planned. Is a late checkout possible?"}, {"role": "speakerB", "text": "Checkout is normally at eleven, but we can extend it to two o'clock for an additional twenty dollars."}, {"role": "speakerA", "text": "Two o'clock would be perfect. Could you add that to my bill?"}, {"role": "speakerB", "text": "Certainly. Would you like anything else?"}, {"role": "speakerA", "text": "Yes — my room faces the street, and it was quite noisy last night. Is there a quieter room available for tonight?"}, {"role": "speakerB", "text": "Let me check. We have a room on the sixth floor facing the garden. I can move you there right away."}, {"role": "speakerA", "text": "That would be wonderful. Thank you."}, {"role": "speakerB", "text": "You're welcome. A staff member will come to help you with your luggage in ten minutes."}],jaSegments:["こんにちは、512号室の Anna Reed です。予約の件でお電話しました。", "こんばんは、Reed様。どのようなご用件でしょうか。", "明日の会議が午後に変更になったので、予定より遅くチェックアウトしたいのですが、レイトチェックアウトは可能ですか。", "通常チェックアウトは11時ですが、追加料金20ドルで2時まで延長できます。", "2時なら完璧です。料金に加えておいてもらえますか。", "かしこまりました。ほかにご要望はありますか。", "はい。私の部屋は通りに面していて、昨夜はかなりうるさかったんです。今夜、もっと静かな部屋は空いていますか。", "お調べします。6階に庭に面した部屋があります。すぐにお移りいただけます。", "それは助かります。ありがとうございます。", "どういたしまして。10分後にスタッフがお荷物のお手伝いに伺います。"]},"lx-p3-set12":{segments:[{"role": "speakerA", "text": "Hi, Yuki. Are we all set for the trade show this weekend?"}, {"role": "speakerB", "text": "Almost. The display panels arrived this morning, but the product samples haven't come yet."}, {"role": "speakerA", "text": "They were supposed to be delivered yesterday. Did you call the shipping company?"}, {"role": "speakerB", "text": "Yes. They said the truck broke down, but the samples will arrive tomorrow morning by ten."}, {"role": "speakerA", "text": "That's cutting it close. The show opens at nine on Saturday."}, {"role": "speakerB", "text": "The samples get here on Friday, so we'll have all afternoon to set up the booth."}, {"role": "speakerA", "text": "Good. What about the brochures? Do we have enough?"}, {"role": "speakerB", "text": "We have three hundred, but last year we gave out almost five hundred. I'll order two hundred more today."}, {"role": "speakerA", "text": "Please do. And let's meet at the venue at eight on Saturday to do a final check."}, {"role": "speakerB", "text": "Agreed. I'll bring the sign-up sheets for visitors who want a catalog."}],jaSegments:["こんにちは、Yuki。今週末の展示会の準備は全部整いましたか。", "ほぼ整いました。展示パネルは今朝届きましたが、商品サンプルがまだ来ていません。", "昨日届くはずでしたよね。配送会社には電話しましたか。", "はい。トラックが故障したそうですが、サンプルは明日の朝10時までに届くそうです。", "かなりギリギリですね。展示会は土曜の9時に始まりますよ。", "サンプルは金曜に着くので、午後いっぱいブースの設営ができます。", "よかった。パンフレットはどうですか。足りますか。", "300部ありますが、昨年はほぼ500部配りました。今日200部追加で注文します。", "お願いします。それと、土曜は8時に会場で集合して最終確認をしましょう。", "承知しました。カタログを希望する来場者向けの申込書を持っていきます。"]},"lx-p3-set13":{segments:[{"role": "speakerA", "text": "Excuse me. I bought this coffee maker here last week, but it stopped working this morning."}, {"role": "speakerB", "text": "I'm sorry to hear that. Do you have the receipt with you?"}, {"role": "speakerA", "text": "Yes, here it is. I'd like a refund if possible."}, {"role": "speakerB", "text": "Our policy allows an exchange within thirty days, but refunds are only given if the item is unopened."}, {"role": "speakerA", "text": "I see. Then I'll exchange it for the same model. Do you have one in stock?"}, {"role": "speakerB", "text": "We do. Let me get one from the back. Would you like me to test it here before you take it home?"}, {"role": "speakerA", "text": "Yes, please. I don't want the same problem again."}, {"role": "speakerB", "text": "Of course. And if the new one has any issues within ninety days, we'll repair it free of charge."}, {"role": "speakerA", "text": "That's reassuring. How long does a repair usually take?"}, {"role": "speakerB", "text": "About a week. We'll call you when it's ready."}],jaSegments:["すみません。このコーヒーメーカーを先週ここで買ったのですが、今朝動かなくなってしまいました。", "それは申し訳ありません。レシートはお持ちですか。", "はい、これです。できれば返金してほしいのですが。", "当店のポリシーでは30日以内の交換は可能ですが、返金は未開封の商品に限ります。", "そうですか。では同じモデルと交換します。在庫はありますか。", "あります。裏から持ってきますね。お持ち帰りの前に、ここで動作確認をしましょうか。", "はい、お願いします。同じ問題は繰り返したくないので。", "もちろんです。それと、新しい方に90日以内に問題があれば、無料で修理します。", "それは安心です。修理には通常どれくらいかかりますか。", "1週間ほどです。できあがったらお電話します。"]},"lx-p4-set09":{segments:[{"role": "speakerA", "text": "Attention, passengers traveling on SkyAir Flight 208 to Denver. Due to a change in aircraft, this flight will now depart from Gate 14 instead of Gate 9."}, {"role": "speakerA", "text": "Boarding will begin at 3:40 P.M., twenty minutes later than originally scheduled."}, {"role": "speakerA", "text": "Passengers who need assistance or who are traveling with young children are asked to contact a SkyAir staff member at the information desk."}, {"role": "speakerA", "text": "We apologize for the change and thank you for your understanding."}],jaSegments:["デンバー行き SkyAir 208便をご利用のお客様にご案内します。機材変更のため、この便の出発ゲートは9番から14番に変更となりました。", "搭乗開始は当初の予定より20分遅れて、午後3時40分となります。", "お手伝いが必要なお客様、および小さなお子様をお連れのお客様は、案内デスクの SkyAir スタッフまでお声がけください。", "変更によりご迷惑をおかけしますが、ご理解のほどよろしくお願いいたします。"]},"lx-p4-set10":{segments:[{"role": "speakerA", "text": "Hello, Mr. Carter. This is Lisa from Northside Auto Repair, calling about your car. The repairs are now complete, and your car is ready for pickup."}, {"role": "speakerA", "text": "The total cost is 420 dollars, which is less than our original estimate of 500 dollars, because the brake parts did not need to be replaced."}, {"role": "speakerA", "text": "You can pick up your car anytime before six o'clock today, or tomorrow between eight and five."}, {"role": "speakerA", "text": "Please bring your repair receipt when you come. Thank you."}],jaSegments:["こんにちは、Carterさん。Northside Auto Repair の Lisa です。お車の修理が完了し、お引き取りいただけるようになりました。", "料金は合計420ドルで、当初の見積もり500ドルより安くなりました。ブレーキ部品を交換する必要がなかったためです。", "お引き取りは本日6時まで、または明日8時から5時の間にお願いします。", "お越しの際は修理の領収書をお持ちください。ありがとうございました。"]}};


/* Listening pool expansion: 40 original questions */
Object.assign(LISTENING_AUDIO, {"lx-p1-03":{"segments":[],"jaSegments":[]},"lx-p1-04":{"segments":[],"jaSegments":[]},"lx-p1-05":{"segments":[],"jaSegments":[]},"lx-p1-06":{"segments":[],"jaSegments":[]},"lx-p2-07":{"segments":[{"role":"speakerA","text":"Who should I speak to about extending my parking permit?"}],"jaSegments":["駐車許可証の有効期間の延長について、誰に話せばよいですか。"]},"lx-p1-07":{"segments":[{"role":"narrator","text":"Look at the picture. A. She is answering a telephone call. B. She is typing on a laptop computer. C. She is reading a newspaper. D. She is writing in a notebook."}],"jaSegments":["写真を見てください。A. 彼女は電話に応対しています。 B. 彼女はノートパソコンで入力しています。 C. 彼女は新聞を読んでいます。 D. 彼女はノートに書いています。"]},"lx-p1-08":{"segments":[{"role":"narrator","text":"Look at the picture. A. He is carrying a cardboard box. B. He is driving a forklift. C. He is opening a package. D. He is loading boxes onto a truck."}],"jaSegments":["写真を見てください。A. 彼は段ボール箱を運んでいます。 B. 彼はフォークリフトを運転しています。 C. 彼は荷物を開けています。 D. 彼はトラックに箱を積み込んでいます。"]},"lx-p1-09":{"segments":[{"role":"narrator","text":"Look at the picture. A. The woman is handing the man a document. B. The two people are shaking hands. C. The man is showing the woman to her seat. D. The people are waiting in line."}],"jaSegments":["写真を見てください。A. 女性は男性に書類を渡しています。 B. 2人は握手しています。 C. 男性は女性を席に案内しています。 D. 人々が列に並んで待っています。"]},"lx-p1-10":{"segments":[{"role":"narrator","text":"Look at the picture. A. He is cleaning a window. B. He is hanging a picture on the wall. C. He is painting a wall with a roller. D. He is repairing a ladder."}],"jaSegments":["写真を見てください。A. 彼は窓を掃除しています。 B. 彼は壁に絵を掛けています。 C. 彼はローラーで壁を塗っています。 D. 彼ははしごを修理しています。"]},"lx-p1-11":{"segments":[{"role":"narrator","text":"Look at the picture. A. She is riding a bicycle. B. She is waiting at a bus stop. C. She is crossing the street on foot. D. She is getting out of a taxi."}],"jaSegments":["写真を見てください。A. 彼女は自転車に乗っています。 B. 彼女はバス停で待っています。 C. 彼女は徒歩で通りを渡っています。 D. 彼女はタクシーから降りています。"]},"lx-p1-12":{"segments":[{"role":"narrator","text":"Look at the picture. A. A man is writing on a whiteboard. B. The audience is leaving the room. C. A woman is pointing at a chart on a whiteboard. D. The chairs around the table are empty."}],"jaSegments":["写真を見てください。A. 男性がホワイトボードに書いています。 B. 聴衆が部屋を出ています。 C. 女性がホワイトボードのグラフを指さしています。 D. テーブルの周りの椅子は空いています。"]},"lx-p2-08":{"segments":[{"role":"speakerB","text":"Would you rather review the contract now or after lunch?"}],"jaSegments":["契約書を今確認しますか、それとも昼食後がよいですか。"]},"lx-p2-09":{"segments":[{"role":"speakerA","text":"Didn't the supplier say the fabric samples would arrive today?"}],"jaSegments":["仕入れ先は布地の見本が今日届くと言っていませんでしたか。"]},"lx-p2-10":{"segments":[{"role":"speakerB","text":"The waiting area is getting pretty crowded."}],"jaSegments":["待合スペースがかなり混んできましたね。"]},"lx-p2-11":{"segments":[{"role":"speakerA","text":"How often is the water filter replaced?"}],"jaSegments":["浄水フィルターはどれくらいの頻度で交換されますか。"]},"lx-p2-12":{"segments":[{"role":"speakerB","text":"Could you cover the front desk while I take my break?"}],"jaSegments":["私が休憩している間、受付を代わってもらえますか。"]},"lx-p2-13":{"segments":[{"role":"speakerA","text":"Where's the updated floor plan?"}],"jaSegments":["更新された間取り図はどこですか。"]},"lx-p2-14":{"segments":[{"role":"speakerB","text":"Why not ask Lena to lead the product demonstration?"}],"jaSegments":["製品の実演はLenaさんに担当してもらってはどうですか。"]},"lx-p2-15":{"segments":[{"role":"speakerA","text":"The express courier costs more than we budgeted for."}],"jaSegments":["速達の配送料は予算より高いですね。"]},"lx-p2-16":{"segments":[{"role":"speakerB","text":"You've met our new regional manager, haven't you?"}],"jaSegments":["新しい地域統括責任者にはもう会いましたよね。"]},"lx-p2-17":{"segments":[{"role":"speakerA","text":"When does registration for the safety course close?"}],"jaSegments":["安全講習の申し込みはいつ締め切られますか。"]},"lx-p2-18":{"segments":[{"role":"speakerB","text":"How did you find out about the vacancy?"}],"jaSegments":["その求人をどうやって知りましたか。"]},"lx-p2-19":{"segments":[{"role":"speakerB","text":"When will the new software be installed?"}],"jaSegments":["新しいソフトウェアはいつインストールされますか。"]},"lx-p2-20":{"segments":[{"role":"speakerA","text":"Who is in charge of ordering office supplies now?"}],"jaSegments":["今は誰が事務用品の発注を担当していますか。"]},"lx-p2-21":{"segments":[{"role":"speakerB","text":"Why was the meeting postponed?"}],"jaSegments":["なぜ会議は延期されたのですか。"]},"lx-p2-22":{"segments":[{"role":"speakerA","text":"Would you like the report by e-mail or in print?"}],"jaSegments":["レポートはメールで送りますか、それとも印刷したものがよいですか。"]},"lx-p2-23":{"segments":[{"role":"speakerB","text":"Didn't you submit the expense report yesterday?"}],"jaSegments":["昨日、経費報告書を提出しませんでしたか。"]},"lx-p2-24":{"segments":[{"role":"speakerA","text":"The printer on the third floor is out of order again."}],"jaSegments":["3階のプリンターがまた故障しています。"]},"lx-p2-25":{"segments":[{"role":"speakerB","text":"How many people have registered for the seminar?"}],"jaSegments":["セミナーには何人が申し込んでいますか。"]},"lx-p3-set03":{"segments":[{"role":"speakerA","text":"I've just checked the proof for the visitors' guide. The map still shows the old entrance, even though I sent the updated version on Monday."},{"role":"speakerB","text":"Let me check the job record. Ah, your attachment went to our sales address, so production never received it. If you send it directly to me, I can have another proof ready this afternoon."},{"role":"speakerA","text":"That would help, but the guides have to be at the museum by Friday morning."},{"role":"speakerB","text":"We haven't started the print run yet. Approve the corrected proof by three, and we can keep the original delivery date."}],"jaSegments":["来館者ガイドの校正刷りを確認したところです。月曜日に更新版を送ったのに、地図がまだ古い入り口になっています。","作業記録を確認します。添付ファイルが営業宛てに届いていて、制作担当には渡っていませんでした。私に直接送っていただければ、今日の午後に別の校正刷りを用意できます。","助かりますが、ガイドは金曜日の朝までに博物館に届いていなければなりません。","まだ本印刷は始めていません。修正版を3時までに承認していただければ、当初の納品日に間に合います。"]},"lx-p3-set04":{"segments":[{"role":"speakerA","text":"Before we finalise Saturday's volunteer assignments, the cycling club has asked us to move the repair workshop outdoors. They need more space to demonstrate the equipment."},{"role":"speakerB","text":"I'm looking at the weather forecast now. There's a good chance of rain. Could we use the covered courtyard instead?"},{"role":"speakerA","text":"That should work. I'll check with facilities. Daniel, can you move the registration table there?"},{"role":"speakerB","text":"I can move it, but I can't stay to staff it. I'm leading the first bike ride at nine."},{"role":"speakerA","text":"No problem. Priya, once you've confirmed the space, please email the workshop leader so she knows where to set up."},{"role":"speakerA","text":"Will do. I'll also update the signs before the volunteers arrive."}],"jaSegments":["土曜日のボランティアの担当を確定する前に、自転車クラブから修理講習を屋外に移してほしいとの依頼がありました。機器の実演にもっと広い場所が必要だそうです。","今、天気予報を見ています。雨の可能性が高いです。代わりに屋根付きの中庭を使えませんか。","それならできそうです。施設管理に確認します。Danielさん、受付テーブルをそこに移せますか。","移動はできますが、その後受付を担当することはできません。9時に最初の自転車ツアーを引率します。","大丈夫です。Priyaさん、場所を確保できたら、講習の担当者に設営場所が分かるようメールしてください。","そうします。ボランティアが到着する前に案内表示も更新します。"]},"lx-p3-set05":{"segments":[{"role":"speakerB","text":"I need somewhere to store our exhibition materials for a month. The cases are too long for the compact unit, and we have a budget of two hundred dollars."},{"role":"speakerA","text":"The standard unit would usually be suitable, but none will be available until next month. I can offer you the large unit at its listed rate, with a trolley included."},{"role":"speakerB","text":"All right. We only need access during your regular opening hours, so we wouldn't use the overnight access that comes with the premium unit."},{"role":"speakerA","text":"Then the large unit is your best option. To reserve it, complete the online form. We'll take payment when you bring the materials in."}],"jaSegments":["展示会の資材を1か月保管する場所が必要です。ケースが長すぎて小型区画には入らず、予算は200ドルです。","通常なら標準区画が適していますが、来月まで空きがありません。料金表の価格で大型区画を、台車付きでご案内できます。","分かりました。通常の営業時間に出入りできればよいので、プレミアム区画に付いている夜間利用は使いません。","それなら大型区画が最適です。予約するにはオンラインフォームを記入してください。お支払いは資材を持ち込むときで結構です。"]},"lx-p3-set06":{"segments":[{"role":"speakerA","text":"The school group booked for eleven has just called. Their coach has broken down, so they won't arrive until twelve thirty."},{"role":"speakerB","text":"That overlaps with the public tour. Could we move their fossil workshop to one o'clock and let them explore the ground-floor galleries first?"},{"role":"speakerA","text":"The teacher said they have to leave at two. I don't want them to feel rushed."},{"role":"speakerB","text":"The workshop only takes forty minutes. If I prepare the materials now, they can start as soon as they get upstairs."},{"role":"speakerA","text":"Good point. I'll call the teacher back and explain the revised programme. Could you let the education team know?"},{"role":"speakerB","text":"Of course. I'll speak to them before I set up."}],"jaSegments":["11時に予約していた学校団体から電話がありました。バスが故障して、到着が12時半になるそうです。","一般向けツアーと重なりますね。化石の講習を1時に移して、先に1階の展示室を見てもらえませんか。","先生は2時には出なければならないと言っていました。慌ただしく感じてほしくないんです。","講習は40分で終わります。私が今から資材を準備しておけば、上の階に来たらすぐに始められます。","そうですね。先生に折り返して変更後のプログラムを説明します。教育担当チームにも知らせてもらえますか。","もちろんです。設営前に話しておきます。"]},"lx-p3-set07":{"segments":[{"role":"speakerA","text":"Hi, Daniel. I'm calling about the training room for Thursday's workshop. The facilities team just told me Room 4B has been double-booked."},{"role":"speakerB","text":"Oh no. The sales team is using it for their quarterly review, isn't it?"},{"role":"speakerA","text":"That's right. But the training center on the fifth floor has a larger room available at the same time."},{"role":"speakerB","text":"That could work. How many people can it hold? We're expecting about thirty participants."},{"role":"speakerA","text":"It seats forty, and it has the projector we'll need. The only issue is that it isn't free until two o'clock, so we'd have to start thirty minutes later than planned."},{"role":"speakerB","text":"Starting at two-thirty should be fine. Most participants are coming from within the building anyway."},{"role":"speakerA","text":"Good. I'll update the invitation with the new time and location. Could you let the catering company know about the change? They were planning to deliver the refreshments at one-thirty."},{"role":"speakerB","text":"Sure, I'll call them this morning. Should I also ask them to reduce the order? Two people from the Osaka office just told me they can't attend."},{"role":"speakerA","text":"Actually, let's keep the order as it is. We've added three people from the Nagoya branch to the list, so the total has actually gone up by one."},{"role":"speakerB","text":"All right, I'll leave the order unchanged and just update the delivery time. I'll also print extra handouts, just in case."},{"role":"speakerA","text":"Thanks. Please send me the final participant list by Wednesday afternoon so I can prepare the name badges."}],"jaSegments":["こんにちは、ダニエル。木曜日の研修の部屋について電話しています。施設管理チームから、4B会議室がダブルブッキングになっていると連絡がありました。","それは大変です。営業チームが四半期レビューで使うんですよね？","そうです。ただ、5階の研修センターには、同じ時間に使えるもっと広い部屋があります。","それなら大丈夫そうです。何人まで入れますか？参加者は30人ほどを予定しています。","40人まで入れて、必要なプロジェクターもあります。唯一の問題は、2時まで空かないので、予定より30分遅く始めなければならないことです。","2時半開始で問題ないでしょう。参加者のほとんどは同じ建物の中から来ますし。","よかった。では私が案内状に新しい時間と場所を反映します。ケータリング会社に変更を伝えてもらえますか？軽食は1時半に届く予定でした。","もちろん、今朝電話します。注文を減らしてもらった方がいいですか？大阪オフィスの2人が来られなくなったと連絡がありました。","実は、注文はそのままにしましょう。名古屋支社の3人がリストに加わったので、合計はむしろ1人増えています。","わかりました。注文内容は変えずに、配達時間だけ変更します。念のため資料も多めに印刷しておきます。","ありがとう。名札を準備するので、水曜日の午後までに最終の参加者リストを送ってください。"]},"lx-p4-set03":{"segments":[{"role":"speakerB","text":"Hello, Ms. Rivera. This is Ben from Northway Cleaners, calling about the curtains you left with us on Tuesday. We removed the marks from the fabric, but our technician noticed that two of the hooks were bent. We've replaced those at no extra charge, so there's nothing more for you to pay. Your curtains are ready for collection. One thing to note: resurfacing work starts outside our main entrance tomorrow. Please use the side door on King Street when you come in. You can collect your order any time before six this evening, or after eight tomorrow morning. There's no need to call ahead. Just bring the collection slip we gave you."}],"jaSegments":["Rivera様。Northway CleanersのBenです。火曜日にお預かりしたカーテンについてお電話しました。布地の汚れは落とせましたが、担当者がフック2個の曲がりに気づきました。追加料金なしで交換しましたので、これ以上のお支払いはありません。カーテンはお受け取りいただけます。なお、明日から正面入り口の外で舗装工事が始まります。お越しの際はKing Street側の出入り口をご利用ください。今日は夕方6時まで、明日は午前8時以降に受け取れます。事前のお電話は不要です。お渡しした引換票をお持ちください。"]},"lx-p4-set04":{"segments":[{"role":"speakerB","text":"Welcome to the Westbridge Technology Exchange. Before our opening session begins, I need to update you on this afternoon's programme. The presenter for Practical Data Security is unable to travel today. Rather than cancel her session, we'll connect with her by video at the scheduled time. The room listed in your programme doesn't have the necessary equipment, so that session will move to the media suite on the second floor. The other sessions will stay where they are. Volunteers will be outside each room to direct you. Please keep your badge visible throughout the day; it also gives you access to the networking reception. Now, let me introduce our first speaker."}],"jaSegments":["Westbridge Technology Exchangeへようこそ。開会セッションの前に、午後のプログラムについてお知らせします。Practical Data Securityの講演者が本日移動できなくなりました。中止にはせず、予定の時間にビデオでつなぎます。プログラム記載の部屋には必要な機器がないため、このセッションを2階のメディア室に移します。他のセッションは予定の場所のままです。各部屋の外でボランティアが案内します。名札は終日見えるようにしてください。交流レセプションへの入場にも使えます。それでは最初の講演者をご紹介します。"]},"lx-p4-set05":{"segments":[{"role":"speakerA","text":"Thanks for coming in a little early. As you know, we've been staying open until eight on Thursdays for the past month. The extra hour has brought in more customers, but several people have said they couldn't find anyone to help them in the outdoor equipment section. We don't need everyone staying later. Instead, starting next week, one person from each section will begin an hour later on Thursdays, so we can cover that final hour without increasing anyone's weekly hours. I'll put the revised rota in the staff room this afternoon. Please check it before you leave and tell me today if it clashes with a class or another commitment."}],"jaSegments":["少し早く来てくれてありがとうございます。ご存じのように、この1か月は木曜日に8時まで営業しています。延長した1時間で来店客は増えましたが、アウトドア用品売り場で店員を見つけられなかったという声が複数ありました。全員に遅くまで残ってもらう必要はありません。代わりに来週から木曜日は各売り場1人が1時間遅く出勤します。そうすれば週の勤務時間を増やさず最後の1時間をカバーできます。今日の午後、変更した勤務表を休憩室に掲示します。帰る前に確認し、授業など他の予定と重なる場合は今日中に知らせてください。"]},"lx-p4-set06":{"segments":[{"role":"speakerA","text":"If you've ever thought about turning your baking hobby into a business, the Eastbank Enterprise Centre has something for you. Its shared commercial kitchen opens next month, giving small food businesses access to professional equipment without the cost of renting their own premises. Bookings are already being accepted, but first-time users must attend a kitchen orientation before reserving a cooking session. You don't have to be an experienced business owner; advisers will be available to discuss pricing and packaging. The centre is holding an open afternoon this Saturday, with demonstrations by local producers. Entry is free, but places on the guided tours are limited, so reserve yours through the centre's website."}],"jaSegments":["お菓子作りの趣味を事業にしたいと思ったことがある方に、Eastbank Enterprise Centreからのお知らせです。来月、共同利用の業務用キッチンがオープンし、小規模な食品事業者が自前の店舗を借りる費用をかけずに専門的な設備を使えるようになります。予約は既に受け付けていますが、初めて使う方は調理枠を予約する前にキッチンの利用説明会への参加が必要です。事業経験はなくても構いません。価格設定や包装について相談できるアドバイザーもいます。今週土曜日の午後には一般向けの公開イベントがあり、地元の生産者が実演します。入場は無料ですが、見学ツアーの定員には限りがありますので、センターのウェブサイトからご予約ください。"]},"lx-p4-set07":{"segments":[{"role":"speakerA","text":"Good morning, everyone. I'm pleased to announce the launch of SkillPath, our new online training platform, which will be available starting next Monday."},{"role":"speakerA","text":"Through SkillPath, you can access more than two hundred courses, from project management to advanced spreadsheet skills, at any time and from any device."},{"role":"speakerA","text":"Please note that one course is mandatory for all staff: the workplace safety refresher. It takes about forty minutes to complete, and everyone must finish it by the end of this month."},{"role":"speakerA","text":"Your completion will be recorded automatically, and managers will receive a progress report in the final week."},{"role":"speakerA","text":"If you have any trouble logging in to the platform, please contact the IT help desk rather than your manager, as they can reset your password immediately. We hope this platform helps you continue developing your skills."}],"jaSegments":["おはようございます。新しいオンライン研修プラットフォームSkillPathの開始をお知らせします。来週月曜日から利用できます。","SkillPathでは、プロジェクト管理から高度な表計算スキルまで200以上のコースに、いつでも、どのデバイスからでもアクセスできます。","全スタッフ必須のコースが1つあります。職場安全の復習コースです。約40分で完了し、全員が今月末までに終えなければなりません。","修了は自動的に記録され、マネージャーは最終週に進捗レポートを受け取ります。","プラットフォームにログインできない場合は、マネージャーではなくITヘルプデスクに連絡してください。パスワードをすぐにリセットできます。このプラットフォームが皆さんのスキル向上に役立つことを願っています。"]},"lx-p4-set08":{"segments":[{"role":"speakerB","text":"Are you looking for a healthier start to the year? Harbor Fitness Center is now open in the Riverside district, and we're celebrating with a special offer for new members."},{"role":"speakerB","text":"Join before the end of this month, and we'll waive the enrollment fee, a saving of seventy-five dollars."},{"role":"speakerB","text":"Members have access to our swimming pool, more than sixty group classes a week, and a fully equipped training floor."},{"role":"speakerB","text":"Not sure if it's right for you? Come in for a free tour and a trial workout any day this week. No appointment is necessary."},{"role":"speakerB","text":"We're open from five in the morning until eleven at night, seven days a week. Visit harbor-fit dot com, or stop by the front desk to sign up today."}],"jaSegments":["健康的な1年のスタートを切りませんか。Harbor Fitness Centerがリバーサイド地区にオープンしました。新規会員向けの特別キャンペーンを実施中です。","今月末までにご入会いただくと、入会金が無料になります。75ドルのお得です。","会員はスイミングプール、週60以上のグループクラス、充実したトレーニングフロアを利用できます。","自分に合うか分からない方は、今週のうちに無料ツアーと体験トレーニングにお越しください。予約は不要です。","営業時間は毎日、朝5時から夜11時までです。harbor-fit dot com にアクセスするか、フロントデスクでお申し込みください。"]}});

/* High-quality audio manifest. Conversation/talk files are played only for
   the first question in each three-question Part 3/4 set. Individual voice
   clips are sequenced in the browser, which preserves genuine speaker
   changes without needing ffmpeg or exposing an API key in the site. */
const HQ_LISTENING_AUDIO = {
  "l1-01": { question: ["audio/p1-01.mp3"] },
  "l1-02": { question: ["audio/p1-02.mp3"] },
  "l2-01": { question: ["audio/p2-01-question.mp3", "audio/p2-01-answers.mp3"] },
  "l2-02": { question: ["audio/p2-02-question.mp3", "audio/p2-02-answers.mp3"] },
  "l2-03": { question: ["audio/p2-03-question.mp3", "audio/p2-03-answers.mp3"] },
  "l2-04": { question: ["audio/p2-04-question.mp3", "audio/p2-04-answers.mp3"] },
  "l2-05": { question: ["audio/p2-05-question.mp3", "audio/p2-05-answers.mp3"] },
  "l2-06": { question: ["audio/p2-06-question.mp3", "audio/p2-06-answers.mp3"] },
  "l3-01": {
    passage: ["audio/p3-set01-line01.mp3", "audio/p3-set01-line02.mp3", "audio/p3-set01-line03.mp3"],
    question: ["audio/p3-set01-q01.mp3"]
  },
  "l3-02": {
    passage: ["audio/p3-set01-line01.mp3", "audio/p3-set01-line02.mp3", "audio/p3-set01-line03.mp3"],
    question: ["audio/p3-set01-q02.mp3"]
  },
  "l3-03": {
    passage: ["audio/p3-set01-line01.mp3", "audio/p3-set01-line02.mp3", "audio/p3-set01-line03.mp3"],
    question: ["audio/p3-set01-q03.mp3"]
  },
  "l3-04": {
    passage: ["audio/p3-set02-line01.mp3", "audio/p3-set02-line02.mp3", "audio/p3-set02-line03.mp3"],
    question: ["audio/p3-set02-q01.mp3"]
  },
  "l3-05": {
    passage: ["audio/p3-set02-line01.mp3", "audio/p3-set02-line02.mp3", "audio/p3-set02-line03.mp3"],
    question: ["audio/p3-set02-q02.mp3"]
  },
  "l3-06": {
    passage: ["audio/p3-set02-line01.mp3", "audio/p3-set02-line02.mp3", "audio/p3-set02-line03.mp3"],
    question: ["audio/p3-set02-q03.mp3"]
  },
  "l4-01": { passage: ["audio/p4-set01-talk.mp3"], question: ["audio/p4-set01-q01.mp3"] },
  "l4-02": { passage: ["audio/p4-set01-talk.mp3"], question: ["audio/p4-set01-q02.mp3"] },
  "l4-03": { passage: ["audio/p4-set01-talk.mp3"], question: ["audio/p4-set01-q03.mp3"] },
  "l4-04": { passage: ["audio/p4-set02-talk.mp3"], question: ["audio/p4-set02-q01.mp3"] },
  "l4-05": { passage: ["audio/p4-set02-talk.mp3"], question: ["audio/p4-set02-q02.mp3"] },
  "l4-06": { passage: ["audio/p4-set02-talk.mp3"], question: ["audio/p4-set02-q03.mp3"] }
,"l3-22":{passage:["audio/p3-set08-line01.mp3", "audio/p3-set08-line02.mp3", "audio/p3-set08-line03.mp3", "audio/p3-set08-line04.mp3", "audio/p3-set08-line05.mp3", "audio/p3-set08-line06.mp3", "audio/p3-set08-line07.mp3", "audio/p3-set08-line08.mp3", "audio/p3-set08-line09.mp3", "audio/p3-set08-line10.mp3"],question:["audio/p3-set08-q01.mp3"]},"l3-23":{passage:["audio/p3-set08-line01.mp3", "audio/p3-set08-line02.mp3", "audio/p3-set08-line03.mp3", "audio/p3-set08-line04.mp3", "audio/p3-set08-line05.mp3", "audio/p3-set08-line06.mp3", "audio/p3-set08-line07.mp3", "audio/p3-set08-line08.mp3", "audio/p3-set08-line09.mp3", "audio/p3-set08-line10.mp3"],question:["audio/p3-set08-q02.mp3"]},"l3-24":{passage:["audio/p3-set08-line01.mp3", "audio/p3-set08-line02.mp3", "audio/p3-set08-line03.mp3", "audio/p3-set08-line04.mp3", "audio/p3-set08-line05.mp3", "audio/p3-set08-line06.mp3", "audio/p3-set08-line07.mp3", "audio/p3-set08-line08.mp3", "audio/p3-set08-line09.mp3", "audio/p3-set08-line10.mp3"],question:["audio/p3-set08-q03.mp3"]},"l3-25":{passage:["audio/p3-set09-line01.mp3", "audio/p3-set09-line02.mp3", "audio/p3-set09-line03.mp3", "audio/p3-set09-line04.mp3", "audio/p3-set09-line05.mp3", "audio/p3-set09-line06.mp3", "audio/p3-set09-line07.mp3", "audio/p3-set09-line08.mp3", "audio/p3-set09-line09.mp3"],question:["audio/p3-set09-q01.mp3"]},"l3-26":{passage:["audio/p3-set09-line01.mp3", "audio/p3-set09-line02.mp3", "audio/p3-set09-line03.mp3", "audio/p3-set09-line04.mp3", "audio/p3-set09-line05.mp3", "audio/p3-set09-line06.mp3", "audio/p3-set09-line07.mp3", "audio/p3-set09-line08.mp3", "audio/p3-set09-line09.mp3"],question:["audio/p3-set09-q02.mp3"]},"l3-27":{passage:["audio/p3-set09-line01.mp3", "audio/p3-set09-line02.mp3", "audio/p3-set09-line03.mp3", "audio/p3-set09-line04.mp3", "audio/p3-set09-line05.mp3", "audio/p3-set09-line06.mp3", "audio/p3-set09-line07.mp3", "audio/p3-set09-line08.mp3", "audio/p3-set09-line09.mp3"],question:["audio/p3-set09-q03.mp3"]},"l3-28":{passage:["audio/p3-set10-line01.mp3", "audio/p3-set10-line02.mp3", "audio/p3-set10-line03.mp3", "audio/p3-set10-line04.mp3", "audio/p3-set10-line05.mp3", "audio/p3-set10-line06.mp3", "audio/p3-set10-line07.mp3", "audio/p3-set10-line08.mp3", "audio/p3-set10-line09.mp3", "audio/p3-set10-line10.mp3"],question:["audio/p3-set10-q01.mp3"]},"l3-29":{passage:["audio/p3-set10-line01.mp3", "audio/p3-set10-line02.mp3", "audio/p3-set10-line03.mp3", "audio/p3-set10-line04.mp3", "audio/p3-set10-line05.mp3", "audio/p3-set10-line06.mp3", "audio/p3-set10-line07.mp3", "audio/p3-set10-line08.mp3", "audio/p3-set10-line09.mp3", "audio/p3-set10-line10.mp3"],question:["audio/p3-set10-q02.mp3"]},"l3-30":{passage:["audio/p3-set10-line01.mp3", "audio/p3-set10-line02.mp3", "audio/p3-set10-line03.mp3", "audio/p3-set10-line04.mp3", "audio/p3-set10-line05.mp3", "audio/p3-set10-line06.mp3", "audio/p3-set10-line07.mp3", "audio/p3-set10-line08.mp3", "audio/p3-set10-line09.mp3", "audio/p3-set10-line10.mp3"],question:["audio/p3-set10-q03.mp3"]},"l3-31":{passage:["audio/p3-set11-line01.mp3", "audio/p3-set11-line02.mp3", "audio/p3-set11-line03.mp3", "audio/p3-set11-line04.mp3", "audio/p3-set11-line05.mp3", "audio/p3-set11-line06.mp3", "audio/p3-set11-line07.mp3", "audio/p3-set11-line08.mp3", "audio/p3-set11-line09.mp3", "audio/p3-set11-line10.mp3"],question:["audio/p3-set11-q01.mp3"]},"l3-32":{passage:["audio/p3-set11-line01.mp3", "audio/p3-set11-line02.mp3", "audio/p3-set11-line03.mp3", "audio/p3-set11-line04.mp3", "audio/p3-set11-line05.mp3", "audio/p3-set11-line06.mp3", "audio/p3-set11-line07.mp3", "audio/p3-set11-line08.mp3", "audio/p3-set11-line09.mp3", "audio/p3-set11-line10.mp3"],question:["audio/p3-set11-q02.mp3"]},"l3-33":{passage:["audio/p3-set11-line01.mp3", "audio/p3-set11-line02.mp3", "audio/p3-set11-line03.mp3", "audio/p3-set11-line04.mp3", "audio/p3-set11-line05.mp3", "audio/p3-set11-line06.mp3", "audio/p3-set11-line07.mp3", "audio/p3-set11-line08.mp3", "audio/p3-set11-line09.mp3", "audio/p3-set11-line10.mp3"],question:["audio/p3-set11-q03.mp3"]},"l3-34":{passage:["audio/p3-set12-line01.mp3", "audio/p3-set12-line02.mp3", "audio/p3-set12-line03.mp3", "audio/p3-set12-line04.mp3", "audio/p3-set12-line05.mp3", "audio/p3-set12-line06.mp3", "audio/p3-set12-line07.mp3", "audio/p3-set12-line08.mp3", "audio/p3-set12-line09.mp3", "audio/p3-set12-line10.mp3"],question:["audio/p3-set12-q01.mp3"]},"l3-35":{passage:["audio/p3-set12-line01.mp3", "audio/p3-set12-line02.mp3", "audio/p3-set12-line03.mp3", "audio/p3-set12-line04.mp3", "audio/p3-set12-line05.mp3", "audio/p3-set12-line06.mp3", "audio/p3-set12-line07.mp3", "audio/p3-set12-line08.mp3", "audio/p3-set12-line09.mp3", "audio/p3-set12-line10.mp3"],question:["audio/p3-set12-q02.mp3"]},"l3-36":{passage:["audio/p3-set12-line01.mp3", "audio/p3-set12-line02.mp3", "audio/p3-set12-line03.mp3", "audio/p3-set12-line04.mp3", "audio/p3-set12-line05.mp3", "audio/p3-set12-line06.mp3", "audio/p3-set12-line07.mp3", "audio/p3-set12-line08.mp3", "audio/p3-set12-line09.mp3", "audio/p3-set12-line10.mp3"],question:["audio/p3-set12-q03.mp3"]},"l3-37":{passage:["audio/p3-set13-line01.mp3", "audio/p3-set13-line02.mp3", "audio/p3-set13-line03.mp3", "audio/p3-set13-line04.mp3", "audio/p3-set13-line05.mp3", "audio/p3-set13-line06.mp3", "audio/p3-set13-line07.mp3", "audio/p3-set13-line08.mp3", "audio/p3-set13-line09.mp3", "audio/p3-set13-line10.mp3"],question:["audio/p3-set13-q01.mp3"]},"l3-38":{passage:["audio/p3-set13-line01.mp3", "audio/p3-set13-line02.mp3", "audio/p3-set13-line03.mp3", "audio/p3-set13-line04.mp3", "audio/p3-set13-line05.mp3", "audio/p3-set13-line06.mp3", "audio/p3-set13-line07.mp3", "audio/p3-set13-line08.mp3", "audio/p3-set13-line09.mp3", "audio/p3-set13-line10.mp3"],question:["audio/p3-set13-q02.mp3"]},"l3-39":{passage:["audio/p3-set13-line01.mp3", "audio/p3-set13-line02.mp3", "audio/p3-set13-line03.mp3", "audio/p3-set13-line04.mp3", "audio/p3-set13-line05.mp3", "audio/p3-set13-line06.mp3", "audio/p3-set13-line07.mp3", "audio/p3-set13-line08.mp3", "audio/p3-set13-line09.mp3", "audio/p3-set13-line10.mp3"],question:["audio/p3-set13-q03.mp3"]},"l4-25":{passage:["audio/p4-set09-talk.mp3"],question:["audio/p4-set09-q01.mp3"]},"l4-26":{passage:["audio/p4-set09-talk.mp3"],question:["audio/p4-set09-q02.mp3"]},"l4-27":{passage:["audio/p4-set09-talk.mp3"],question:["audio/p4-set09-q03.mp3"]},"l4-28":{passage:["audio/p4-set10-talk.mp3"],question:["audio/p4-set10-q01.mp3"]},"l4-29":{passage:["audio/p4-set10-talk.mp3"],question:["audio/p4-set10-q02.mp3"]},"l4-30":{passage:["audio/p4-set10-talk.mp3"],question:["audio/p4-set10-q03.mp3"]}};


/* High-quality files for the expanded listening pool */
Object.assign(HQ_LISTENING_AUDIO, {"l1-03":{"question":["audio/p1-03.mp3"]},"l1-04":{"question":["audio/p1-04.mp3"]},"l1-05":{"question":["audio/p1-05.mp3"]},"l1-06":{"question":["audio/p1-06.mp3"]},"l1-07":{"question":["audio/p1-07.mp3"]},"l1-08":{"question":["audio/p1-08.mp3"]},"l1-09":{"question":["audio/p1-09.mp3"]},"l1-10":{"question":["audio/p1-10.mp3"]},"l1-11":{"question":["audio/p1-11.mp3"]},"l1-12":{"question":["audio/p1-12.mp3"]},"l2-07":{"question":["audio/p2-07-question.mp3","audio/p2-07-answers.mp3"]},"l2-08":{"question":["audio/p2-08-question.mp3","audio/p2-08-answers.mp3"]},"l2-09":{"question":["audio/p2-09-question.mp3","audio/p2-09-answers.mp3"]},"l2-10":{"question":["audio/p2-10-question.mp3","audio/p2-10-answers.mp3"]},"l2-11":{"question":["audio/p2-11-question.mp3","audio/p2-11-answers.mp3"]},"l2-12":{"question":["audio/p2-12-question.mp3","audio/p2-12-answers.mp3"]},"l2-13":{"question":["audio/p2-13-question.mp3","audio/p2-13-answers.mp3"]},"l2-14":{"question":["audio/p2-14-question.mp3","audio/p2-14-answers.mp3"]},"l2-15":{"question":["audio/p2-15-question.mp3","audio/p2-15-answers.mp3"]},"l2-16":{"question":["audio/p2-16-question.mp3","audio/p2-16-answers.mp3"]},"l2-17":{"question":["audio/p2-17-question.mp3","audio/p2-17-answers.mp3"]},"l2-18":{"question":["audio/p2-18-question.mp3","audio/p2-18-answers.mp3"]},"l2-19":{"question":["audio/p2-19-question.mp3","audio/p2-19-answers.mp3"]},"l2-20":{"question":["audio/p2-20-question.mp3","audio/p2-20-answers.mp3"]},"l2-21":{"question":["audio/p2-21-question.mp3","audio/p2-21-answers.mp3"]},"l2-22":{"question":["audio/p2-22-question.mp3","audio/p2-22-answers.mp3"]},"l2-23":{"question":["audio/p2-23-question.mp3","audio/p2-23-answers.mp3"]},"l2-24":{"question":["audio/p2-24-question.mp3","audio/p2-24-answers.mp3"]},"l2-25":{"question":["audio/p2-25-question.mp3","audio/p2-25-answers.mp3"]},"l3-07":{"passage":["audio/p3-set03-line01.mp3","audio/p3-set03-line02.mp3","audio/p3-set03-line03.mp3","audio/p3-set03-line04.mp3"],"question":["audio/p3-set03-q01.mp3"]},"l3-08":{"passage":["audio/p3-set03-line01.mp3","audio/p3-set03-line02.mp3","audio/p3-set03-line03.mp3","audio/p3-set03-line04.mp3"],"question":["audio/p3-set03-q02.mp3"]},"l3-09":{"passage":["audio/p3-set03-line01.mp3","audio/p3-set03-line02.mp3","audio/p3-set03-line03.mp3","audio/p3-set03-line04.mp3"],"question":["audio/p3-set03-q03.mp3"]},"l3-10":{"passage":["audio/p3-set04-line01.mp3","audio/p3-set04-line02.mp3","audio/p3-set04-line03.mp3","audio/p3-set04-line04.mp3","audio/p3-set04-line05.mp3","audio/p3-set04-line06.mp3"],"question":["audio/p3-set04-q01.mp3"]},"l3-11":{"passage":["audio/p3-set04-line01.mp3","audio/p3-set04-line02.mp3","audio/p3-set04-line03.mp3","audio/p3-set04-line04.mp3","audio/p3-set04-line05.mp3","audio/p3-set04-line06.mp3"],"question":["audio/p3-set04-q02.mp3"]},"l3-12":{"passage":["audio/p3-set04-line01.mp3","audio/p3-set04-line02.mp3","audio/p3-set04-line03.mp3","audio/p3-set04-line04.mp3","audio/p3-set04-line05.mp3","audio/p3-set04-line06.mp3"],"question":["audio/p3-set04-q03.mp3"]},"l3-13":{"passage":["audio/p3-set05-line01.mp3","audio/p3-set05-line02.mp3","audio/p3-set05-line03.mp3","audio/p3-set05-line04.mp3"],"question":["audio/p3-set05-q01.mp3"]},"l3-14":{"passage":["audio/p3-set05-line01.mp3","audio/p3-set05-line02.mp3","audio/p3-set05-line03.mp3","audio/p3-set05-line04.mp3"],"question":["audio/p3-set05-q02.mp3"]},"l3-15":{"passage":["audio/p3-set05-line01.mp3","audio/p3-set05-line02.mp3","audio/p3-set05-line03.mp3","audio/p3-set05-line04.mp3"],"question":["audio/p3-set05-q03.mp3"]},"l3-16":{"passage":["audio/p3-set06-line01.mp3","audio/p3-set06-line02.mp3","audio/p3-set06-line03.mp3","audio/p3-set06-line04.mp3","audio/p3-set06-line05.mp3","audio/p3-set06-line06.mp3"],"question":["audio/p3-set06-q01.mp3"]},"l3-17":{"passage":["audio/p3-set06-line01.mp3","audio/p3-set06-line02.mp3","audio/p3-set06-line03.mp3","audio/p3-set06-line04.mp3","audio/p3-set06-line05.mp3","audio/p3-set06-line06.mp3"],"question":["audio/p3-set06-q02.mp3"]},"l3-18":{"passage":["audio/p3-set06-line01.mp3","audio/p3-set06-line02.mp3","audio/p3-set06-line03.mp3","audio/p3-set06-line04.mp3","audio/p3-set06-line05.mp3","audio/p3-set06-line06.mp3"],"question":["audio/p3-set06-q03.mp3"]},"l3-19":{"passage":["audio/p3-set07-line01.mp3","audio/p3-set07-line02.mp3","audio/p3-set07-line03.mp3","audio/p3-set07-line04.mp3","audio/p3-set07-line05.mp3","audio/p3-set07-line06.mp3","audio/p3-set07-line07.mp3","audio/p3-set07-line08.mp3","audio/p3-set07-line09.mp3","audio/p3-set07-line10.mp3","audio/p3-set07-line11.mp3"],"question":["audio/p3-set07-q01.mp3"]},"l3-20":{"passage":["audio/p3-set07-line01.mp3","audio/p3-set07-line02.mp3","audio/p3-set07-line03.mp3","audio/p3-set07-line04.mp3","audio/p3-set07-line05.mp3","audio/p3-set07-line06.mp3","audio/p3-set07-line07.mp3","audio/p3-set07-line08.mp3","audio/p3-set07-line09.mp3","audio/p3-set07-line10.mp3","audio/p3-set07-line11.mp3"],"question":["audio/p3-set07-q02.mp3"]},"l3-21":{"passage":["audio/p3-set07-line01.mp3","audio/p3-set07-line02.mp3","audio/p3-set07-line03.mp3","audio/p3-set07-line04.mp3","audio/p3-set07-line05.mp3","audio/p3-set07-line06.mp3","audio/p3-set07-line07.mp3","audio/p3-set07-line08.mp3","audio/p3-set07-line09.mp3","audio/p3-set07-line10.mp3","audio/p3-set07-line11.mp3"],"question":["audio/p3-set07-q03.mp3"]},"l4-07":{"passage":["audio/p4-set03-talk.mp3"],"question":["audio/p4-set03-q01.mp3"]},"l4-08":{"passage":["audio/p4-set03-talk.mp3"],"question":["audio/p4-set03-q02.mp3"]},"l4-09":{"passage":["audio/p4-set03-talk.mp3"],"question":["audio/p4-set03-q03.mp3"]},"l4-10":{"passage":["audio/p4-set04-talk.mp3"],"question":["audio/p4-set04-q01.mp3"]},"l4-11":{"passage":["audio/p4-set04-talk.mp3"],"question":["audio/p4-set04-q02.mp3"]},"l4-12":{"passage":["audio/p4-set04-talk.mp3"],"question":["audio/p4-set04-q03.mp3"]},"l4-13":{"passage":["audio/p4-set05-talk.mp3"],"question":["audio/p4-set05-q01.mp3"]},"l4-14":{"passage":["audio/p4-set05-talk.mp3"],"question":["audio/p4-set05-q02.mp3"]},"l4-15":{"passage":["audio/p4-set05-talk.mp3"],"question":["audio/p4-set05-q03.mp3"]},"l4-16":{"passage":["audio/p4-set06-talk.mp3"],"question":["audio/p4-set06-q01.mp3"]},"l4-17":{"passage":["audio/p4-set06-talk.mp3"],"question":["audio/p4-set06-q02.mp3"]},"l4-18":{"passage":["audio/p4-set06-talk.mp3"],"question":["audio/p4-set06-q03.mp3"]},"l4-19":{"passage":["audio/p4-set07-talk.mp3"],"question":["audio/p4-set07-q01.mp3"]},"l4-20":{"passage":["audio/p4-set07-talk.mp3"],"question":["audio/p4-set07-q02.mp3"]},"l4-21":{"passage":["audio/p4-set07-talk.mp3"],"question":["audio/p4-set07-q03.mp3"]},"l4-22":{"passage":["audio/p4-set08-talk.mp3"],"question":["audio/p4-set08-q01.mp3"]},"l4-23":{"passage":["audio/p4-set08-talk.mp3"],"question":["audio/p4-set08-q02.mp3"]},"l4-24":{"passage":["audio/p4-set08-talk.mp3"],"question":["audio/p4-set08-q03.mp3"]}});

const LISTENING_BANK = [
  { id:"l1-01", section:"listening", part:1, audioId:"l1-office", photo:"img/l1-01.webp", hideChoiceText:true, skill:"photo", focus:"photo action", difficulty:"easy", text:"Look at the picture and select the statement that best describes it.", choices:["She is watering a plant.","She is placing some documents into a folder.","She is closing a laptop computer.","She is drinking from a cup."], answer:1 },
  { id:"l1-02", section:"listening", part:1, audioId:"l1-shop", photo:"img/l1-02.webp", hideChoiceText:true, skill:"photo", focus:"photo action", difficulty:"medium", text:"Look at the picture and select the statement that best describes it.", choices:["He is arranging products on a shelf.","He is moving a checkout counter.","He is replacing a light bulb.","He is sweeping the floor."], answer:2 },
  { id:"l2-01", section:"listening", part:2, audioId:"l2-01", hideChoiceText:true, skill:"response", focus:"wh-question", difficulty:"easy", text:"Select the best response.", choices:["By the end of the day.","To all department managers.","No, the schedule hasn't changed."], answer:0 },
  { id:"l2-02", section:"listening", part:2, audioId:"l2-02", hideChoiceText:true, skill:"response", focus:"wh-question", difficulty:"easy", text:"Select the best response.", choices:["It was quite expensive.","Ms. Gomez did.","In the conference room."], answer:1 },
  { id:"l2-03", section:"listening", part:2, audioId:"l2-03", hideChoiceText:true, skill:"response", focus:"request", difficulty:"medium", text:"Select the best response.", choices:["Sure. Where should I put them?","The meeting begins at three.","They're made of wood."], answer:0 },
  { id:"l2-04", section:"listening", part:2, audioId:"l2-04", hideChoiceText:true, skill:"response", focus:"wh-question", difficulty:"medium", text:"Select the best response.", choices:["At the downtown hotel.","For about two hours.","Because the speaker's flight was canceled."], answer:2 },
  { id:"l2-05", section:"listening", part:2, audioId:"l2-05", hideChoiceText:true, skill:"response", focus:"negative question", difficulty:"hard", text:"Select the best response.", choices:["Not yet. I'm waiting for a receipt.","Yes, the trip was very productive.","The accounting department is upstairs."], answer:0 },
  { id:"l2-06", section:"listening", part:2, audioId:"l2-06", hideChoiceText:true, skill:"response", focus:"wh-question", difficulty:"medium", text:"Select the best response.", choices:["About twenty pages.","The one beside the conference room.","I printed it yesterday."], answer:1 },
  { id:"l3-01", section:"listening", part:3, audioId:"l3-projector", skill:"conversation", focus:"conversation detail", difficulty:"easy", text:"What problem does the woman mention?", choices:["A client canceled a meeting.","A projector is not working.","A training room is occupied.","Some slides are missing."], answer:1 },
  { id:"l3-02", section:"listening", part:3, audioId:"l3-projector", skill:"conversation", focus:"conversation detail", difficulty:"medium", text:"What does the man offer to do?", choices:["Contact the clients","Repair a computer","Bring a portable projector","Reserve another meeting room"], answer:2 },
  { id:"l3-03", section:"listening", part:3, audioId:"l3-projector", skill:"conversation", focus:"conversation detail", difficulty:"hard", text:"What does the woman ask the man to do by 1:30?", choices:["Set up some equipment","Print a presentation","Welcome the clients","Move some chairs"], answer:0 },
  { id:"l3-04", section:"listening", part:3, audioId:"l3-restaurant", skill:"conversation", focus:"conversation purpose", difficulty:"easy", text:"Why is the man calling?", choices:["To change a menu","To make a reservation","To ask about a job","To order food for delivery"], answer:1 },
  { id:"l3-05", section:"listening", part:3, audioId:"l3-restaurant", skill:"conversation", focus:"conversation detail", difficulty:"medium", text:"Why can't the man have an indoor table at 7:00?", choices:["The dining room is full.","The restaurant opens later.","His group is too large.","The tables are being repaired."], answer:0 },
  { id:"l3-06", section:"listening", part:3, audioId:"l3-restaurant", skill:"conversation", focus:"conversation detail", difficulty:"hard", text:"What will most likely happen on Friday?", choices:["The man will arrive at 7:30.","The group will order in advance.","The restaurant will close its patio.","The group will sit outside at 7:00."], answer:3 },
  { id:"l4-01", section:"listening", part:4, audioId:"l4-airport", skill:"talk", focus:"talk detail", difficulty:"easy", text:"Where is Flight 286 going?", choices:["Vancouver","Toronto","Seattle","Calgary"], answer:0 },
  { id:"l4-02", section:"listening", part:4, audioId:"l4-airport", skill:"talk", focus:"talk detail", difficulty:"medium", text:"What has changed?", choices:["The flight number","The departure gate","The destination","The aircraft type"], answer:1 },
  { id:"l4-03", section:"listening", part:4, audioId:"l4-airport", skill:"talk", focus:"talk detail", difficulty:"hard", text:"Why will boarding begin late?", choices:["The crew has not arrived.","The weather has worsened.","The aircraft is being inspected.","A gate is still occupied."], answer:2 },
  { id:"l4-04", section:"listening", part:4, audioId:"l4-delivery", skill:"talk", focus:"talk purpose", difficulty:"easy", text:"What is the purpose of the call?", choices:["To confirm a payment","To update a delivery schedule","To advertise a new chair","To request a customer review"], answer:1 },
  { id:"l4-05", section:"listening", part:4, audioId:"l4-delivery", skill:"talk", focus:"talk detail", difficulty:"medium", text:"When are the ordered chairs now expected?", choices:["Thursday","Friday","Monday","Tuesday"], answer:2 },
  { id:"l4-06", section:"listening", part:4, audioId:"l4-delivery", skill:"talk", focus:"talk detail", difficulty:"hard", text:"What option does the speaker offer?", choices:["A discount on the order","Free home delivery","Twelve different chairs","Six temporary chairs for pickup"], answer:3 }
,{id:"l3-22",section:"listening",part:3,audioId:"lx-p3-set08",skill:"conversation",focus:"detail / problem",difficulty:"easy",text:"What problem does the woman have?",choices:["She cannot open her presentation file", "She lost the sales report", "The meeting room is not available", "Her e-mail program is not working"],answer:0},{id:"l3-23",section:"listening",part:3,audioId:"lx-p3-set08",skill:"conversation",focus:"detail",difficulty:"medium",text:"What does the man say about the sales figures?",choices:["They should be added after the meeting", "They can be copied from a report he sent", "The client will provide them", "They should be left out of the slides"],answer:1},{id:"l3-24",section:"listening",part:3,audioId:"lx-p3-set08",skill:"conversation",focus:"next action",difficulty:"medium",text:"What will the man most likely do next?",choices:["Print copies of the report", "Call the technical support team", "Set up the meeting room computer", "Restart the woman's computer"],answer:2},{id:"l3-25",section:"listening",part:3,audioId:"lx-p3-set09",skill:"conversation",focus:"detail / reason",difficulty:"medium",text:"Why does the woman choose the earlier flight?",choices:["It is less expensive", "She must arrive before noon", "It has a window seat available", "It includes breakfast"],answer:1},{id:"l3-26",section:"listening",part:3,audioId:"lx-p3-set09",skill:"conversation",focus:"detail",difficulty:"easy",text:"What does the woman request?",choices:["A window seat", "An extra suitcase", "An aisle seat", "A later return flight"],answer:2},{id:"l3-27",section:"listening",part:3,audioId:"lx-p3-set09",skill:"conversation",focus:"detail / future action",difficulty:"medium",text:"What does the woman say she will do?",choices:["Pay fifty dollars for a change", "Inform the man if her return date changes", "Book a hotel room in Chicago", "Cancel the Friday flight"],answer:1},{id:"l3-28",section:"listening",part:3,audioId:"lx-p3-set10",skill:"conversation",focus:"detail / number",difficulty:"easy",text:"How many new employees are starting on Monday?",choices:["Ten", "Twelve", "Two", "Nine"],answer:1},{id:"l3-29",section:"listening",part:3,audioId:"lx-p3-set10",skill:"conversation",focus:"detail / task",difficulty:"medium",text:"What does the man offer to do?",choices:["Reserve a larger training room", "Print the welcome packages", "Contact the printing company about the badges", "Give the welcome speech"],answer:2},{id:"l3-30",section:"listening",part:3,audioId:"lx-p3-set10",skill:"conversation",focus:"detail / future action",difficulty:"medium",text:"What will the woman do this afternoon?",choices:["Send the updated schedule to the presenters", "Order lunch for the group", "Meet with the president", "Register the new employees"],answer:0},{id:"l3-31",section:"listening",part:3,audioId:"lx-p3-set11",skill:"conversation",focus:"conversation purpose",difficulty:"easy",text:"Why does the woman call the hotel?",choices:["To make a new reservation", "To request changes to her stay", "To complain about a bill", "To ask about meeting rooms"],answer:1},{id:"l3-32",section:"listening",part:3,audioId:"lx-p3-set11",skill:"conversation",focus:"detail",difficulty:"medium",text:"What does the woman agree to pay extra for?",choices:["A garden-view room", "An extra night", "A later checkout time", "Transportation to the airport"],answer:2},{id:"l3-33",section:"listening",part:3,audioId:"lx-p3-set11",skill:"conversation",focus:"detail",difficulty:"medium",text:"What will happen in ten minutes?",choices:["The woman will check out of the hotel", "A staff member will help her move her luggage", "Her meeting will begin", "A taxi will arrive at the entrance"],answer:1},{id:"l3-34",section:"listening",part:3,audioId:"lx-p3-set12",skill:"conversation",focus:"detail",difficulty:"medium",text:"What problem occurred with the product samples?",choices:["They were sent to the wrong venue", "They were delayed because a truck broke down", "They arrived damaged", "They were never ordered"],answer:1},{id:"l3-35",section:"listening",part:3,audioId:"lx-p3-set12",skill:"conversation",focus:"detail / reason",difficulty:"medium",text:"Why will the woman order more brochures?",choices:["Some of the brochures are damaged", "The design of the brochure has changed", "Last year they gave out more than the current stock", "The show will last longer this year"],answer:2},{id:"l3-36",section:"listening",part:3,audioId:"lx-p3-set12",skill:"conversation",focus:"detail",difficulty:"easy",text:"When will the speakers meet on Saturday?",choices:["At eight o'clock", "At nine o'clock", "At ten o'clock", "In the afternoon"],answer:0},{id:"l3-37",section:"listening",part:3,audioId:"lx-p3-set13",skill:"conversation",focus:"detail",difficulty:"medium",text:"Why will the woman not receive a refund?",choices:["She does not have the receipt", "She bought the item more than a month ago", "Refunds are only given for unopened items", "The store no longer sells that model"],answer:2},{id:"l3-38",section:"listening",part:3,audioId:"lx-p3-set13",skill:"conversation",focus:"detail",difficulty:"medium",text:"What does the man offer to do at the store?",choices:["Repair the coffee maker", "Test the replacement before she takes it home", "Call her within a week", "Give her a store discount"],answer:1},{id:"l3-39",section:"listening",part:3,audioId:"lx-p3-set13",skill:"conversation",focus:"detail",difficulty:"easy",text:"How long does a repair usually take?",choices:["Thirty days", "Ninety days", "About a week", "One day"],answer:2},{id:"l4-25",section:"listening",part:4,audioId:"lx-p4-set09",skill:"talk",focus:"talk topic",difficulty:"easy",text:"What is the announcement mainly about?",choices:["A flight cancellation", "A change in a departure gate", "A new ticket price", "A lost item at the airport"],answer:1},{id:"l4-26",section:"listening",part:4,audioId:"lx-p4-set09",skill:"talk",focus:"detail",difficulty:"medium",text:"When will boarding begin?",choices:["At 3:40 P.M.", "At 3:20 P.M.", "At 4:14 P.M.", "At 9:40 P.M."],answer:0},{id:"l4-27",section:"listening",part:4,audioId:"lx-p4-set09",skill:"talk",focus:"detail",difficulty:"medium",text:"Who is asked to contact staff at the information desk?",choices:["Passengers traveling to Denver", "Passengers who need assistance or are traveling with young children", "Passengers carrying large luggage", "Passengers who missed their flight"],answer:1},{id:"l4-28",section:"listening",part:4,audioId:"lx-p4-set10",skill:"talk",focus:"talk purpose",difficulty:"easy",text:"Why is the speaker calling?",choices:["To schedule a repair appointment", "To say that a car is ready to be picked up", "To ask for payment in advance", "To recommend additional repairs"],answer:1},{id:"l4-29",section:"listening",part:4,audioId:"lx-p4-set10",skill:"talk",focus:"detail",difficulty:"medium",text:"Why is the total cost lower than the original estimate?",choices:["The shop applied a special discount", "Some parts did not need to be replaced", "The repair took less time than expected", "Part of the cost was paid in advance"],answer:1},{id:"l4-30",section:"listening",part:4,audioId:"lx-p4-set10",skill:"talk",focus:"detail",difficulty:"medium",text:"What is Mr. Carter asked to bring when he picks up the car?",choices:["His car keys", "His driver's license", "His repair receipt", "A credit card"],answer:2}];


/* Add the expanded pool while retaining the original 20 questions. */
LISTENING_BANK.push(...[{"id":"l1-03","section":"listening","part":1,"audioId":"lx-p1-03","skill":"photo","focus":"photo posture / action","difficulty":"medium","text":"Choose the statement that matches the photograph.","choices":["A worker is loading a box onto a truck.","A worker is examining a document on a clipboard.","A worker is pushing a cart through a doorway.","A worker is fastening a label to a package."],"answer":1,"hideChoiceText":true,"photo":"img/p1-03.webp"},{"id":"l1-04","section":"listening","part":1,"audioId":"lx-p1-04","skill":"photo","focus":"photo passive state","difficulty":"medium","text":"Choose the statement that matches the photograph.","choices":["Some chairs are stacked beside a doorway.","Some umbrellas are being opened over the tables.","A pavement is being swept near the entrance.","Some chairs have been arranged around outdoor tables."],"answer":3,"hideChoiceText":true,"photo":"img/p1-04.webp"},{"id":"l1-05","section":"listening","part":1,"audioId":"lx-p1-05","skill":"photo","focus":"photo action","difficulty":"easy","text":"Choose the statement that matches the photograph.","choices":["A woman is adjusting a picture on a wall.","A woman is rolling up a floor covering.","A woman is carrying a ladder across a room.","A woman is wiping the surface of a table."],"answer":0,"hideChoiceText":true,"photo":"img/p1-05.webp"},{"id":"l1-06","section":"listening","part":1,"audioId":"lx-p1-06","skill":"photo","focus":"photo spatial relation / vocabulary","difficulty":"hard","text":"Choose the statement that matches the photograph.","choices":["Some passengers are boarding a boat.","A walkway is covered with construction materials.","Several boats are tied alongside a dock.","A railing is being installed along a pier."],"answer":2,"hideChoiceText":true,"photo":"img/p1-06.webp"},{"id":"l1-07","section":"listening","part":1,"audioId":"lx-p1-07","skill":"photo","focus":"photo action","difficulty":"easy","text":"Choose the statement that matches the photograph.","choices":["She is answering a telephone call.","She is typing on a laptop computer.","She is reading a newspaper.","She is writing in a notebook."],"answer":1,"hideChoiceText":true,"photo":"img/l1-07.webp"},{"id":"l1-08","section":"listening","part":1,"audioId":"lx-p1-08","skill":"photo","focus":"photo action","difficulty":"easy","text":"Choose the statement that matches the photograph.","choices":["He is carrying a cardboard box.","He is driving a forklift.","He is opening a package.","He is loading boxes onto a truck."],"answer":0,"hideChoiceText":true,"photo":"img/l1-08.webp"},{"id":"l1-09","section":"listening","part":1,"audioId":"lx-p1-09","skill":"photo","focus":"photo action","difficulty":"easy","text":"Choose the statement that matches the photograph.","choices":["The woman is handing the man a document.","The two people are shaking hands.","The man is showing the woman to her seat.","The people are waiting in line."],"answer":1,"hideChoiceText":true,"photo":"img/l1-09.webp"},{"id":"l1-10","section":"listening","part":1,"audioId":"lx-p1-10","skill":"photo","focus":"photo action","difficulty":"medium","text":"Choose the statement that matches the photograph.","choices":["He is cleaning a window.","He is hanging a picture on the wall.","He is painting a wall with a roller.","He is repairing a ladder."],"answer":2,"hideChoiceText":true,"photo":"img/l1-10.webp"},{"id":"l1-11","section":"listening","part":1,"audioId":"lx-p1-11","skill":"photo","focus":"photo action","difficulty":"easy","text":"Choose the statement that matches the photograph.","choices":["She is riding a bicycle.","She is waiting at a bus stop.","She is crossing the street on foot.","She is getting out of a taxi."],"answer":0,"hideChoiceText":true,"photo":"img/l1-11.webp"},{"id":"l1-12","section":"listening","part":1,"audioId":"lx-p1-12","skill":"photo","focus":"photo action","difficulty":"medium","text":"Choose the statement that matches the photograph.","choices":["A man is writing on a whiteboard.","The audience is leaving the room.","A woman is pointing at a chart on a whiteboard.","The chairs around the table are empty."],"answer":2,"hideChoiceText":true,"photo":"img/l1-12.webp"},{"id":"l2-07","section":"listening","part":2,"audioId":"lx-p2-07","skill":"response","focus":"person / referral","difficulty":"medium","text":"Select the best response.","choices":["The car park is nearly full.","Mine expires next Friday.","Try the building manager."],"answer":2,"hideChoiceText":true},{"id":"l2-08","section":"listening","part":2,"audioId":"lx-p2-08","skill":"response","focus":"alternative question / indirect refusal","difficulty":"hard","text":"Select the best response.","choices":["I'm tied up until two.","The restaurant is on the corner.","Yes, the terms are the same."],"answer":0,"hideChoiceText":true},{"id":"l2-09","section":"listening","part":2,"audioId":"lx-p2-09","skill":"response","focus":"negative question / update","difficulty":"medium","text":"Select the best response.","choices":["The blue fabric is softer.","They sent a delay notice this morning.","Just sign on the dotted line."],"answer":1,"hideChoiceText":true},{"id":"l2-10","section":"listening","part":2,"audioId":"lx-p2-10","skill":"response","focus":"statement / suggestion","difficulty":"medium","text":"Select the best response.","choices":["Let's open the room next door.","The area code is on the form.","We waited for the estimate."],"answer":0,"hideChoiceText":true},{"id":"l2-11","section":"listening","part":2,"audioId":"lx-p2-11","skill":"response","focus":"frequency","difficulty":"easy","text":"Select the best response.","choices":["It fits the older model.","Behind the reception desk.","About every six months."],"answer":2,"hideChoiceText":true},{"id":"l2-12","section":"listening","part":2,"audioId":"lx-p2-12","skill":"response","focus":"request / conditional acceptance","difficulty":"medium","text":"Select the best response.","choices":["The cover has our logo on it.","Once I've finished this call.","We ordered it last week."],"answer":1,"hideChoiceText":true},{"id":"l2-13","section":"listening","part":2,"audioId":"lx-p2-13","skill":"response","focus":"location / indirect answer","difficulty":"hard","text":"Select the best response.","choices":["The floor was polished yesterday.","I haven't downloaded it yet.","We plan to hire another designer."],"answer":1,"hideChoiceText":true},{"id":"l2-14","section":"listening","part":2,"audioId":"lx-p2-14","skill":"response","focus":"suggestion / obstacle","difficulty":"hard","text":"Select the best response.","choices":["About twenty minutes, I think.","The demonstration was well attended.","She's at a trade fair all week."],"answer":2,"hideChoiceText":true},{"id":"l2-15","section":"listening","part":2,"audioId":"lx-p2-15","skill":"response","focus":"statement / practical alternative","difficulty":"medium","text":"Select the best response.","choices":["Regular delivery will still get it there on time.","The budget meeting was upstairs.","Yes, I brought the package in."],"answer":0,"hideChoiceText":true},{"id":"l2-16","section":"listening","part":2,"audioId":"lx-p2-16","skill":"response","focus":"tag question / qualification","difficulty":"medium","text":"Select the best response.","choices":["A larger region this year.","The meeting room is booked.","Only over a video call."],"answer":2,"hideChoiceText":true},{"id":"l2-17","section":"listening","part":2,"audioId":"lx-p2-17","skill":"response","focus":"deadline","difficulty":"easy","text":"Select the best response.","choices":["At the training centre.","At noon on Wednesday.","A course for new employees."],"answer":1,"hideChoiceText":true},{"id":"l2-18","section":"listening","part":2,"audioId":"lx-p2-18","skill":"response","focus":"information source / phrasal verb","difficulty":"medium","text":"Select the best response.","choices":["A former colleague forwarded the advert.","The position starts in November.","A desk near the window."],"answer":0,"hideChoiceText":true},{"id":"l2-19","section":"listening","part":2,"audioId":"lx-p2-19","skill":"response","focus":"wh-question","difficulty":"easy","text":"When will the new software be installed?","choices":["It's already been taken care of.","By Friday afternoon.","In the conference room."],"answer":1,"hideChoiceText":true},{"id":"l2-20","section":"listening","part":2,"audioId":"lx-p2-20","skill":"response","focus":"wh-question","difficulty":"easy","text":"Who is in charge of ordering office supplies now?","choices":["Mr. Tanaka took over last month.","On the second floor.","Every Monday morning."],"answer":0,"hideChoiceText":true},{"id":"l2-21","section":"listening","part":2,"audioId":"lx-p2-21","skill":"response","focus":"wh-question","difficulty":"easy","text":"Why was the meeting postponed?","choices":["At three o'clock.","The marketing manager.","Because the manager is out of the office today."],"answer":2,"hideChoiceText":true},{"id":"l2-22","section":"listening","part":2,"audioId":"lx-p2-22","skill":"response","focus":"choice question","difficulty":"medium","text":"Would you like the report by e-mail or in print?","choices":["Yes, please do.","By tomorrow morning.","E-mail is fine, thanks."],"answer":2,"hideChoiceText":true},{"id":"l2-23","section":"listening","part":2,"audioId":"lx-p2-23","skill":"response","focus":"negative question","difficulty":"medium","text":"Didn't you submit the expense report yesterday?","choices":["Yes, it's a long report.","Not yet — I'm still collecting the receipts.","To the finance department."],"answer":1,"hideChoiceText":true},{"id":"l2-24","section":"listening","part":2,"audioId":"lx-p2-24","skill":"response","focus":"statement response","difficulty":"medium","text":"The printer on the third floor is out of order again.","choices":["Twenty copies should be enough.","It's been there since Monday.","I'll call the repair service right away."],"answer":2,"hideChoiceText":true},{"id":"l2-25","section":"listening","part":2,"audioId":"lx-p2-25","skill":"response","focus":"wh-question","difficulty":"easy","text":"How many people have registered for the seminar?","choices":["Almost forty so far.","It starts at nine.","In the main hall."],"answer":0,"hideChoiceText":true},{"id":"l3-07","section":"listening","part":3,"audioId":"lx-p3-set03","skill":"conversation","focus":"conversation problem","difficulty":"easy","text":"What problem does the woman report?","choices":["A payment has not been processed.","A quantity has been reduced.","A map contains outdated information.","A package was sent to the wrong building."],"answer":2},{"id":"l3-08","section":"listening","part":3,"audioId":"lx-p3-set03","skill":"conversation","focus":"speaker intent","difficulty":"hard","text":"Why does the man say, \"We haven't started the print run yet\"?","choices":["To reassure the woman that a correction is still possible","To explain why a payment is being requested","To suggest reducing the number of copies","To warn that the equipment needs to be repaired"],"answer":0},{"id":"l3-09","section":"listening","part":3,"audioId":"lx-p3-set03","skill":"conversation","focus":"condition / deadline","difficulty":"medium","text":"What must the woman do by 3:00?","choices":["Collect the printed guides","Send a payment receipt","Confirm a delivery address","Approve a revised proof"],"answer":3},{"id":"l3-10","section":"listening","part":3,"audioId":"lx-p3-set04","skill":"conversation","focus":"conversation purpose","difficulty":"easy","text":"What are the speakers organising?","choices":["A staff recruitment interview","A cycling event","A building inspection","A product shipment"],"answer":1},{"id":"l3-11","section":"listening","part":3,"audioId":"lx-p3-set04","skill":"conversation","focus":"speaker tracking","difficulty":"medium","text":"Why can Daniel not work at the registration table?","choices":["He has to check some signs.","He is meeting a facilities manager.","He will be guiding a bicycle ride.","He is delivering some equipment."],"answer":2},{"id":"l3-12","section":"listening","part":3,"audioId":"lx-p3-set04","skill":"conversation","focus":"next action / condition","difficulty":"medium","text":"What is Priya asked to do after confirming the location?","choices":["Contact a workshop leader","Recruit additional volunteers","Check a weather report","Lead the first bicycle ride"],"answer":0},{"id":"l3-13","section":"listening","part":3,"audioId":"lx-p3-set05","skill":"conversation","focus":"constraint / availability","difficulty":"medium","text":"Why does the woman not recommend a standard unit?","choices":["It does not include a trolley.","Its price exceeds the budget.","It cannot hold the exhibition cases.","It is currently unavailable."],"answer":3},{"id":"l3-14","section":"listening","part":3,"audioId":"lx-p3-set05","skill":"conversation","focus":"graphic integration","difficulty":"hard","text":"Look at the graphic. What monthly rate will the man pay?","choices":["$90","$150","$190","$230"],"answer":2},{"id":"l3-15","section":"listening","part":3,"audioId":"lx-p3-set05","skill":"conversation","focus":"next action","difficulty":"medium","text":"What does the woman ask the man to do?","choices":["Measure a storage case","Fill out an online form","Pay a deposit immediately","Collect a trolley from another location"],"answer":1},{"id":"l3-16","section":"listening","part":3,"audioId":"lx-p3-set06","skill":"conversation","focus":"setting inference","difficulty":"easy","text":"Where do the speakers most likely work?","choices":["At a museum","At a vehicle repair shop","At a primary school","At a bus terminal"],"answer":0},{"id":"l3-17","section":"listening","part":3,"audioId":"lx-p3-set06","skill":"conversation","focus":"speaker intent","difficulty":"hard","text":"What does the woman mean when she says, \"I don't want them to feel rushed\"?","choices":["She wants the group to arrive earlier.","She thinks the public tour is too popular.","She expects the workshop to be cancelled.","She is concerned about the time available for the visit."],"answer":3},{"id":"l3-18","section":"listening","part":3,"audioId":"lx-p3-set06","skill":"conversation","focus":"speaker tracking / next action","difficulty":"medium","text":"What will the man do before preparing the workshop?","choices":["Call the schoolteacher","Inform the education team","Guide visitors around a gallery","Arrange a replacement coach"],"answer":1},{"id":"l3-19","section":"listening","part":3,"audioId":"lx-p3-set07","skill":"conversation","focus":"conversation purpose","difficulty":"easy","text":"Why does the woman call the man?","choices":["To discuss a change of venue for a workshop","To cancel a catering order","To invite him to a sales meeting","To ask him to lead a training session"],"answer":0},{"id":"l3-20","section":"listening","part":3,"audioId":"lx-p3-set07","skill":"conversation","focus":"detail / task","difficulty":"medium","text":"What does the man agree to do?","choices":["Book a larger meeting room","Contact the catering company","Prepare the name badges","Reduce the refreshment order"],"answer":1},{"id":"l3-21","section":"listening","part":3,"audioId":"lx-p3-set07","skill":"conversation","focus":"detail / number","difficulty":"medium","text":"How many participants are now expected at the workshop?","choices":["28","30","31","33"],"answer":2},{"id":"l4-07","section":"listening","part":4,"audioId":"lx-p4-set03","skill":"talk","focus":"talk purpose","difficulty":"easy","text":"Why is the speaker calling?","choices":["To request authorisation for a repair","To confirm that an order is ready","To remind a customer of an unpaid bill","To advertise a collection service"],"answer":1},{"id":"l4-08","section":"listening","part":4,"audioId":"lx-p4-set03","skill":"talk","focus":"cause / paraphrase","difficulty":"medium","text":"Why should the customer use a side entrance?","choices":["Some security equipment is being tested.","The main door is being replaced.","A delivery is blocking the pavement.","Work will take place outside the main entrance."],"answer":3},{"id":"l4-09","section":"listening","part":4,"audioId":"lx-p4-set03","skill":"talk","focus":"instruction","difficulty":"medium","text":"What is the customer asked to bring?","choices":["A collection slip","A replacement hook","A payment card","A photograph of the curtains"],"answer":0},{"id":"l4-10","section":"listening","part":4,"audioId":"lx-p4-set04","skill":"talk","focus":"talk change","difficulty":"easy","text":"What change is announced for one session?","choices":["It will be shortened.","It will begin earlier.","Its presenter will participate remotely.","Its admission fee will be reduced."],"answer":2},{"id":"l4-11","section":"listening","part":4,"audioId":"lx-p4-set04","skill":"talk","focus":"graphic integration","difficulty":"hard","text":"Look at the graphic. At what time will the session in the media suite begin?","choices":["2:00 P.M.","1:00 P.M.","3:00 P.M.","4:00 P.M."],"answer":0},{"id":"l4-12","section":"listening","part":4,"audioId":"lx-p4-set04","skill":"talk","focus":"purpose of object","difficulty":"medium","text":"What does the speaker say about the badges?","choices":["They can be collected on the second floor.","They allow entry to a reception.","They include a discount for future events.","They show the revised room assignments."],"answer":1},{"id":"l4-13","section":"listening","part":4,"audioId":"lx-p4-set05","skill":"talk","focus":"reported problem","difficulty":"medium","text":"What complaint have some customers made?","choices":["They could not return some equipment.","They were charged incorrect prices.","They had to wait outside before opening.","They could not obtain assistance in a department."],"answer":3},{"id":"l4-14","section":"listening","part":4,"audioId":"lx-p4-set05","skill":"talk","focus":"speaker intent","difficulty":"hard","text":"Why does the speaker say, \"We don't need everyone staying later\"?","choices":["To announce the end of evening opening hours","To criticise employees for arriving early","To clarify that only selected shifts will be adjusted","To encourage employees to work additional hours"],"answer":2},{"id":"l4-15","section":"listening","part":4,"audioId":"lx-p4-set05","skill":"talk","focus":"required action","difficulty":"medium","text":"What are the listeners asked to do today?","choices":["Complete a customer survey","Report any scheduling conflicts","Move equipment to a new section","Sign up for a training class"],"answer":1},{"id":"l4-16","section":"listening","part":4,"audioId":"lx-p4-set06","skill":"talk","focus":"audience inference","difficulty":"easy","text":"Who would be most interested in the announcement?","choices":["People planning to start a food business","Owners selling restaurant equipment","Builders looking for rental premises","People seeking work as tour guides"],"answer":0},{"id":"l4-17","section":"listening","part":4,"audioId":"lx-p4-set06","skill":"talk","focus":"prerequisite","difficulty":"medium","text":"What must new users do before booking a cooking session?","choices":["Meet a packaging adviser","Purchase some equipment","Attend an orientation","Obtain a business award"],"answer":2},{"id":"l4-18","section":"listening","part":4,"audioId":"lx-p4-set06","skill":"talk","focus":"reason / reservation","difficulty":"medium","text":"Why are listeners encouraged to use the website?","choices":["To download a pricing guide","To apply for an adviser position","To pay an entrance fee","To secure a place on a guided tour"],"answer":3},{"id":"l4-19","section":"listening","part":4,"audioId":"lx-p4-set07","skill":"talk","focus":"talk purpose","difficulty":"easy","text":"What is the main purpose of the announcement?","choices":["To introduce a new training platform","To announce a schedule change","To introduce a new manager","To explain an office relocation"],"answer":0},{"id":"l4-20","section":"listening","part":4,"audioId":"lx-p4-set07","skill":"talk","focus":"detail / deadline","difficulty":"medium","text":"What must all employees do by the end of the month?","choices":["Change their passwords","Complete a safety course","Meet with their managers","Submit a progress report"],"answer":1},{"id":"l4-21","section":"listening","part":4,"audioId":"lx-p4-set07","skill":"talk","focus":"detail / instruction","difficulty":"medium","text":"What are employees asked to do if they cannot log in?","choices":["Try again the next day","E-mail the training coordinator","Contact the IT help desk","Create a new account"],"answer":2},{"id":"l4-22","section":"listening","part":4,"audioId":"lx-p4-set08","skill":"talk","focus":"talk topic","difficulty":"easy","text":"What is being advertised?","choices":["A fitness center membership offer","A sale on sports equipment","Swimming lessons for beginners","A health food subscription"],"answer":0},{"id":"l4-23","section":"listening","part":4,"audioId":"lx-p4-set08","skill":"talk","focus":"detail","difficulty":"medium","text":"What will new members not have to pay if they join this month?","choices":["The monthly membership fee","The enrollment fee","A locker rental charge","A fee for group classes"],"answer":1},{"id":"l4-24","section":"listening","part":4,"audioId":"lx-p4-set08","skill":"talk","focus":"detail / suggestion","difficulty":"medium","text":"What are listeners encouraged to do this week?","choices":["Call to reserve a personal trainer","Recommend the center to a friend","Visit the center for a free tour and trial workout","Sign up for an annual contract"],"answer":2}]);

const LISTENING_TRANSLATIONS = {
  "l1-01": { text:"写真を見て、最も適切に描写している文を選んでください。", choices:["女性は植物に水をやっています。","女性は書類をフォルダーに入れています。","女性はノートパソコンを閉じています。","女性はカップから飲み物を飲んでいます。"] },
  "l1-02": { text:"写真を見て、最も適切に描写している文を選んでください。", choices:["男性は棚の商品を並べています。","男性はレジ台を動かしています。","男性は電球を交換しています。","男性は床を掃いています。"] },
  "l2-01": { text:"最も適切な応答を選んでください。", choices:["今日中です。","全部門の管理職宛てです。","いいえ、予定表は変わっていません。"] },
  "l2-02": { text:"最も適切な応答を選んでください。", choices:["かなり高価でした。","Gomezさんです。","会議室です。"] },
  "l2-03": { text:"最も適切な応答を選んでください。", choices:["もちろん。どこに置けばよいですか。","会議は3時に始まります。","木製です。"] },
  "l2-04": { text:"最も適切な応答を選んでください。", choices:["中心街のホテルです。","約2時間です。","講演者の便が欠航になったからです。"] },
  "l2-05": { text:"最も適切な応答を選んでください。", choices:["まだです。領収書を待っています。","はい、出張はとても有意義でした。","経理部は上の階です。"] },
  "l2-06": { text:"最も適切な応答を選んでください。", choices:["約20ページです。","会議室の横にあるものです。","昨日印刷しました。"] },
  "l3-01": { text:"女性はどんな問題に言及していますか。", choices:["顧客が会議をキャンセルした。","プロジェクターが動かない。","研修室が使用中である。","スライドが一部なくなった。"] },
  "l3-02": { text:"男性は何をすると申し出ていますか。", choices:["顧客に連絡する","コンピューターを修理する","携帯型プロジェクターを持って来る","別の会議室を予約する"] },
  "l3-03": { text:"女性は男性に1時30分までに何をするよう頼んでいますか。", choices:["機器を設置する","プレゼン資料を印刷する","顧客を出迎える","椅子を動かす"] },
  "l3-04": { text:"男性はなぜ電話していますか。", choices:["メニューを変更するため","予約するため","求人について尋ねるため","料理の配達を注文するため"] },
  "l3-05": { text:"男性が7時に屋内席を利用できないのはなぜですか。", choices:["屋内席が満席だから","レストランの開店がもっと遅いから","グループの人数が多すぎるから","テーブルを修理中だから"] },
  "l3-06": { text:"金曜日に最も起こりそうなことは何ですか。", choices:["男性は7時30分に到着する。","グループは事前に注文する。","店はテラスを閉鎖する。","グループは7時に屋外席に座る。"] },
  "l4-01": { text:"286便はどこへ向かいますか。", choices:["Vancouver","Toronto","Seattle","Calgary"] },
  "l4-02": { text:"何が変更されましたか。", choices:["便名","出発ゲート","目的地","機種"] },
  "l4-03": { text:"搭乗開始が遅れるのはなぜですか。", choices:["乗務員が到着していないから","天候が悪化したから","機体を点検しているから","ゲートがまだ使用中だから"] },
  "l4-04": { text:"この電話の目的は何ですか。", choices:["支払いを確認するため","配送予定を知らせるため","新しい椅子を宣伝するため","顧客レビューを依頼するため"] },
  "l4-05": { text:"注文した椅子は現在いつ到着予定ですか。", choices:["木曜日","金曜日","月曜日","火曜日"] },
  "l4-06": { text:"話し手はどんな選択肢を提案していますか。", choices:["注文の割引","無料の自宅配送","別の椅子12脚","店舗で受け取る仮の椅子6脚"] }
,"l3-22":{text:"女性はどのような問題を抱えていますか。",choices:["プレゼンのファイルが開けない", "売上レポートを紛失した", "会議室が使えない", "メールソフトが動かない"]},"l3-23":{text:"男性は売上数字について何と言っていますか。",choices:["会議の後に追加すべきだ", "彼が送ったレポートからコピーできる", "顧客が提供してくれる", "スライドから外すべきだ"]},"l3-24":{text:"男性は次に何をする可能性が最も高いですか。",choices:["レポートを印刷する", "技術サポートに電話する", "会議室のパソコンをセットアップする", "女性のパソコンを再起動する"]},"l3-25":{text:"女性はなぜ早い方の便を選んだのですか。",choices:["安いから", "正午前に到着しなければならないから", "窓側の席があるから", "朝食が付いているから"]},"l3-26":{text:"女性は何を希望しましたか。",choices:["窓側の席", "追加のスーツケース", "通路側の席", "遅い帰りの便"]},"l3-27":{text:"女性は何をすると言っていますか。",choices:["変更料として50ドル払うこと", "帰りの日付が変わったら男性に知らせること", "シカゴのホテルを予約すること", "金曜の便をキャンセルすること"]},"l3-28":{text:"月曜に入社する新入社員は何人ですか。",choices:["10人", "12人", "2人", "9人"]},"l3-29":{text:"男性は何をすると申し出ましたか。",choices:["もっと大きい研修室を予約すること", "歓迎パッケージを印刷すること", "名札について印刷会社に連絡すること", "歓迎の挨拶をすること"]},"l3-30":{text:"女性は今日の午後に何をしますか。",choices:["更新した日程を発表者にメールすること", "グループの昼食を注文すること", "社長と面会すること", "新入社員の受付をすること"]},"l3-31":{text:"女性はなぜホテルに電話しましたか。",choices:["新しい予約をするため", "滞在内容の変更をお願いするため", "請求書について苦情を言うため", "会議室について尋ねるため"]},"l3-32":{text:"女性は何に対して追加料金を払うことに同意しましたか。",choices:["庭が見える部屋", "追加の1泊", "遅いチェックアウト時間", "空港までの送迎"]},"l3-33":{text:"10分後に何が起こりますか。",choices:["女性がホテルをチェックアウトする", "スタッフが荷物の移動を手伝いに来る", "彼女の会議が始まる", "タクシーが入口に到着する"]},"l3-34":{text:"商品サンプルに何の問題が起きましたか。",choices:["間違った会場に送られた", "トラックの故障で遅れた", "破損して届いた", "そもそも注文されていなかった"]},"l3-35":{text:"女性はなぜパンフレットを追加注文するのですか。",choices:["パンフレットの一部が破損しているから", "パンフレットのデザインが変わったから", "昨年は現在の在庫より多く配ったから", "今年は展示会の期間が長いから"]},"l3-36":{text:"2人は土曜日の何時に集合しますか。",choices:["8時", "9時", "10時", "午後"]},"l3-37":{text:"女性が返金を受けられないのはなぜですか。",choices:["レシートを持っていないから", "購入から1か月以上経っているから", "返金は未開封の商品に限るから", "店がそのモデルをもう売っていないから"]},"l3-38":{text:"男性は店で何をすると申し出ましたか。",choices:["コーヒーメーカーを修理すること", "交換品を持ち帰る前に動作確認すること", "1週間以内に電話すること", "店の割引をすること"]},"l3-39":{text:"修理には通常どれくらいかかりますか。",choices:["30日", "90日", "約1週間", "1日"]},"l4-25":{text:"このアナウンスは主に何についてですか。",choices:["フライトの欠航", "出発ゲートの変更", "新しいチケット価格", "空港での忘れ物"]},"l4-26":{text:"搭乗はいつ始まりますか。",choices:["午後3時40分", "午後3時20分", "午後4時14分", "午後9時40分"]},"l4-27":{text:"案内デスクのスタッフに声をかけるよう求められているのは誰ですか。",choices:["デンバーへ旅行する乗客", "手助けが必要な乗客や小さな子ども連れの乗客", "大きな荷物を持つ乗客", "フライトに乗り遅れた乗客"]},"l4-28":{text:"話し手はなぜ電話していますか。",choices:["修理の予約を取るため", "車の引き取りができることを知らせるため", "前払いを求めるため", "追加の修理を勧めるため"]},"l4-29":{text:"合計料金が当初の見積もりより安いのはなぜですか。",choices:["店が特別割引を適用したから", "交換しなくてよい部品があったから", "修理が予想より短時間で済んだから", "費用の一部が前払いされていたから"]},"l4-30":{text:"Carter氏は車を引き取る際に何を持ってくるよう求められていますか。",choices:["車の鍵", "運転免許証", "修理の領収書", "クレジットカード"]}};

const LISTENING_EXPLANATIONS = {
  "l1-01":"写真では女性が書類を青いフォルダーへ入れているため、Bが一致します。", "l1-02":"男性は脚立に乗って照明の電球を交換しているため、Cが一致します。",
  "l2-01":"When は時を尋ねるため、期限を示す By the end of the day が自然です。", "l2-02":"Who は人を尋ねるため、Ms. Gomez did が直接答えています。",
  "l2-03":"手伝いの依頼に承諾し、置き場所を確認する応答が自然です。", "l2-04":"Why への理由として Because で始まるCが対応します。",
  "l2-05":"否定疑問への Not yet は『まだです』という自然な返答です。", "l2-06":"Which printer はどの機器かを尋ねるため、場所で特定するBが適切です。",
  "l3-01":"女性が projector ... isn't working と明言しています。", "l3-02":"男性は training room から portable projector を持って来ると申し出ています。",
  "l3-03":"女性は Could you set it up by one thirty? と依頼しています。", "l3-04":"冒頭の reserve a table for six から予約が目的だと分かります。",
  "l3-05":"女性が indoor dining room is full at seven と説明しています。", "l3-06":"男性は The patio at seven will be fine と選んだため、7時に屋外席を利用します。",
  "l4-01":"冒頭で Flight 286 to Vancouver と案内されています。", "l4-02":"departure gate has changed from Gate 12 to Gate 18 と明記されています。",
  "l4-03":"追加の safety inspection が搭乗遅延の理由です。", "l4-04":"注文した椅子の到着が遅れることを知らせる電話です。",
  "l4-05":"delayed the shipment until Monday と明記されています。", "l4-06":"金曜日に店舗で temporary chairs を6脚受け取れると提案しています。"
,"l3-22":"The slides ... won't open on my computer. 女性のトラブルはプレゼン用ファイルが開けないこと。会議室やメールについて困っているとは言っていない。","l3-23":"The figures are in the report I e-mailed you this morning, so you can copy them from there. 売上数字は今朝送ったレポートからコピーできると男性が言っている。","l3-24":"I'll set it up while you update the slides. / I'll do that right after I finish setting up the computer. 印刷はセットアップの後なので、次にやるのは会議室PCのセットアップ。","l3-25":"I need to arrive before noon for a conference. / The cheaper one is too late. 安い便は到着が午後になるため、正午前に着く早い便を選んだ。","l3-26":"An aisle seat, please. 女性が希望したのは通路側の席。スーツケースは預ける荷物の話で、追加ではない。","l3-27":"I'll book the return for Friday for now, and I'll let you know if it changes. 帰りの日付が変われば知らせると言っている。50ドルはまだ払っていない。","l3-28":"Twelve people are starting. 入社するのは12人。10は届いた名札の数、2は不足分。","l3-29":"I'll call the company today and ask them to send the missing two by Friday. 男性は名札の不足分について印刷会社へ連絡すると申し出た。挨拶をするのは社長。","l3-30":"I'll update the schedule and e-mail it to all the presenters this afternoon. 女性は午後に更新した日程を発表者全員へメールする。昼食は注文済み。","l3-31":"I'd like to check out later than planned など、滞在中の変更（遅いチェックアウトと部屋の移動）を依頼する電話。苦情ではなく依頼。","l3-32":"we can extend it to two o'clock for an additional twenty dollars / Two o'clock would be perfect. 追加料金20ドルはチェックアウト延長の分。部屋の移動に料金の話は出ていない。","l3-33":"A staff member will come to help you with your luggage in ten minutes. と明示されている。","l3-34":"They said the truck broke down. 遅延の原因は配送トラックの故障。","l3-35":"We have three hundred, but last year we gave out almost five hundred. 在庫300部では昨年の実績に足りないため追加注文する。","l3-36":"let's meet at the venue at eight on Saturday と合意している。9時は展示会の開始時刻。","l3-37":"refunds are only given if the item is unopened. 使用済みのため返金不可で、交換になった。レシートは持っている。","l3-38":"Would you like me to test it here before you take it home? と動作確認を申し出ている。","l3-39":"About a week. 30日は交換期限、90日は無料修理の対象期間。","l4-25":"this flight will now depart from Gate 14 instead of Gate 9 と、ゲート変更の案内が中心。","l4-26":"Boarding will begin at 3:40 P.M. と明示されている。","l4-27":"Passengers who need assistance or who are traveling with young children are asked to contact ... とある。","l4-28":"The repairs are now complete, and your car is ready for pickup. 修理完了と引き取り可能の連絡。","l4-29":"because the brake parts did not need to be replaced と理由が明示されている。","l4-30":"Please bring your repair receipt when you come. とある。"};

Object.assign(LISTENING_TRANSLATIONS, {"l1-03":{"text":"写真に一致する文を選んでください。","choices":["作業員が箱をトラックに積んでいる。","作業員がクリップボード上の書類を確認している。","作業員が台車を出入り口に押している。","作業員が荷物にラベルを取り付けている。"]},"l1-04":{"text":"写真に一致する文を選んでください。","choices":["椅子が出入り口の脇に積み重ねられている。","テーブルの上でパラソルが開かれているところだ。","入り口の近くで歩道が掃かれているところだ。","屋外のテーブルの周りに椅子が配置されている。"]},"l1-05":{"text":"写真に一致する文を選んでください。","choices":["女性が壁の絵の位置を調整している。","女性が床の敷物を巻いている。","女性が部屋を横切ってはしごを運んでいる。","女性がテーブルの表面を拭いている。"]},"l1-06":{"text":"写真に一致する文を選んでください。","choices":["乗客がボートに乗り込んでいる。","通路が建設資材で覆われている。","数隻のボートが桟橋に沿って係留されている。","桟橋に沿って手すりが取り付けられているところだ。"]},"l1-07":{"text":"写真に一致する文を選んでください。","choices":["彼女は電話に応対しています。","彼女はノートパソコンで入力しています。","彼女は新聞を読んでいます。","彼女はノートに書いています。"]},"l1-08":{"text":"写真に一致する文を選んでください。","choices":["彼は段ボール箱を運んでいます。","彼はフォークリフトを運転しています。","彼は荷物を開けています。","彼はトラックに箱を積み込んでいます。"]},"l1-09":{"text":"写真に一致する文を選んでください。","choices":["女性は男性に書類を渡しています。","2人は握手しています。","男性は女性を席に案内しています。","人々が列に並んで待っています。"]},"l1-10":{"text":"写真に一致する文を選んでください。","choices":["彼は窓を掃除しています。","彼は壁に絵を掛けています。","彼はローラーで壁を塗っています。","彼ははしごを修理しています。"]},"l1-11":{"text":"写真に一致する文を選んでください。","choices":["彼女は自転車に乗っています。","彼女はバス停で待っています。","彼女は徒歩で通りを渡っています。","彼女はタクシーから降りています。"]},"l1-12":{"text":"写真に一致する文を選んでください。","choices":["男性がホワイトボードに書いています。","聴衆が部屋を出ています。","女性がホワイトボードのグラフを指さしています。","テーブルの周りの椅子は空いています。"]},"l2-07":{"text":"最も適切な応答を選んでください。","choices":["駐車場はほぼ満車です。","私のものは来週金曜日に期限が切れます。","ビルの管理者に聞いてみてください。"]},"l2-08":{"text":"最も適切な応答を選んでください。","choices":["2時まで手が離せません。","レストランは角にあります。","はい、条件は同じです。"]},"l2-09":{"text":"最も適切な応答を選んでください。","choices":["青い布のほうが柔らかいです。","今朝、遅延の通知を送ってきました。","点線のところに署名してください。"]},"l2-10":{"text":"最も適切な応答を選んでください。","choices":["隣の部屋を開けましょう。","市外局番は用紙にあります。","私たちは見積もりを待ちました。"]},"l2-11":{"text":"最も適切な応答を選んでください。","choices":["旧モデルに合います。","受付の机の後ろです。","およそ6か月ごとです。"]},"l2-12":{"text":"最も適切な応答を選んでください。","choices":["表紙には会社のロゴが入っています。","この電話が終わったら。","先週それを注文しました。"]},"l2-13":{"text":"最も適切な応答を選んでください。","choices":["床は昨日磨かれました。","まだダウンロードしていません。","別のデザイナーを雇う予定です。"]},"l2-14":{"text":"最も適切な応答を選んでください。","choices":["20分くらいだと思います。","実演には大勢が参加しました。","彼女は今週ずっと展示会に行っています。"]},"l2-15":{"text":"最も適切な応答を選んでください。","choices":["通常配送でも間に合いますよ。","予算会議は上の階でした。","はい、荷物を中に持ってきました。"]},"l2-16":{"text":"最も適切な応答を選んでください。","choices":["今年はもっと広い地域です。","会議室は予約されています。","ビデオ通話でだけです。"]},"l2-17":{"text":"最も適切な応答を選んでください。","choices":["研修センターです。","水曜日の正午です。","新入社員向けの講習です。"]},"l2-18":{"text":"最も適切な応答を選んでください。","choices":["以前の同僚が広告を転送してくれました。","その仕事は11月に始まります。","窓の近くの机です。"]},"l2-19":{"text":"新しいソフトウェアはいつインストールされますか。","choices":["もう対応済みです。","金曜日の午後までです。","会議室です。"]},"l2-20":{"text":"今は誰が事務用品の発注を担当していますか。","choices":["先月から田中さんが担当しています。","2階です。","毎週月曜日の朝です。"]},"l2-21":{"text":"なぜ会議は延期されたのですか。","choices":["3時です。","マーケティング部長です。","部長が本日不在だからです。"]},"l2-22":{"text":"レポートはメールで送りますか、それとも印刷したものがよいですか。","choices":["はい、お願いします。","明日の朝までです。","メールで大丈夫です、ありがとう。"]},"l2-23":{"text":"昨日、経費報告書を提出しませんでしたか。","choices":["はい、長い報告書です。","まだです。領収書を集めているところです。","財務部へです。"]},"l2-24":{"text":"3階のプリンターがまた故障しています。","choices":["20部あれば十分でしょう。","月曜日からそこにあります。","すぐに修理業者に電話します。"]},"l2-25":{"text":"セミナーには何人が申し込んでいますか。","choices":["今のところ40人近くです。","9時開始です。","メインホールです。"]},"l3-07":{"text":"女性はどんな問題を報告していますか。","choices":["支払いが処理されていない。","部数が減らされている。","地図に古い情報が載っている。","荷物が間違った建物に送られた。"]},"l3-08":{"text":"男性はなぜ「まだ本印刷は始めていません」と言っていますか。","choices":["まだ修正できると女性を安心させるため。","支払いを求める理由を説明するため。","印刷部数を減らすよう提案するため。","機器の修理が必要だと警告するため。"]},"l3-09":{"text":"女性は3時までに何をしなければなりませんか。","choices":["印刷されたガイドを受け取る。","支払いの領収書を送る。","配送先住所を確認する。","修正された校正刷りを承認する。"]},"l3-10":{"text":"話し手たちは何を準備していますか。","choices":["採用面接。","自転車のイベント。","建物の点検。","製品の発送。"]},"l3-11":{"text":"Danielはなぜ受付を担当できませんか。","choices":["案内表示を確認しなければならないから。","施設管理者と会うから。","自転車ツアーを引率するから。","機器を配達するから。"]},"l3-12":{"text":"場所を確認した後、Priyaは何をするよう頼まれていますか。","choices":["講習の担当者に連絡する。","ボランティアを追加募集する。","天気予報を確認する。","最初の自転車ツアーを引率する。"]},"l3-13":{"text":"女性はなぜ標準区画を勧めませんか。","choices":["台車が付いていないから。","予算を超えるから。","展示会用のケースが入らないから。","現在空きがないから。"]},"l3-14":{"text":"図表を見てください。男性が支払う月額料金はいくらですか。","choices":["90ドル。","150ドル。","190ドル。","230ドル。"]},"l3-15":{"text":"女性は男性に何をするよう頼んでいますか。","choices":["保管ケースの寸法を測る。","オンラインフォームを記入する。","すぐに手付金を払う。","別の場所で台車を受け取る。"]},"l3-16":{"text":"話し手たちはおそらくどこで働いていますか。","choices":["博物館。","車両修理工場。","小学校。","バスターミナル。"]},"l3-17":{"text":"女性の「慌ただしく感じてほしくない」という発言は何を意味しますか。","choices":["団体にもっと早く来てほしい。","一般向けツアーが人気すぎると思っている。","講習が中止されると予想している。","見学に使える時間を心配している。"]},"l3-18":{"text":"講習の準備をする前に、男性は何をしますか。","choices":["学校の先生に電話する。","教育担当チームに知らせる。","展示室で来館者を案内する。","代わりのバスを手配する。"]},"l3-19":{"text":"女性はなぜ男性に電話をしましたか。","choices":["研修の会場変更について相談するため","ケータリングの注文をキャンセルするため","営業会議に招待するため","研修の講師を依頼するため"]},"l3-20":{"text":"男性は何をすることに同意しましたか。","choices":["もっと広い会議室を予約すること","ケータリング会社に連絡すること","名札を準備すること","軽食の注文を減らすこと"]},"l3-21":{"text":"研修の参加者は現在何人見込まれていますか。","choices":["28人","30人","31人","33人"]},"l4-07":{"text":"話し手はなぜ電話していますか。","choices":["修理の承認を求めるため。","注文品の準備ができたと知らせるため。","未払い代金を顧客に知らせるため。","集荷サービスを宣伝するため。"]},"l4-08":{"text":"顧客はなぜ横の入り口を使う必要がありますか。","choices":["防犯機器を試験しているから。","正面のドアを交換しているから。","配達物が歩道をふさいでいるから。","正面入り口の外で工事をするから。"]},"l4-09":{"text":"顧客は何を持参するよう求められていますか。","choices":["引換票。","交換用フック。","支払い用カード。","カーテンの写真。"]},"l4-10":{"text":"あるセッションについてどんな変更が発表されていますか。","choices":["時間が短くなる。","開始時刻が早くなる。","講演者が遠隔で参加する。","入場料が値下げされる。"]},"l4-11":{"text":"図表を見てください。メディア室で行われるセッションは何時に始まりますか。","choices":["午後2時。","午後1時。","午後3時。","午後4時。"]},"l4-12":{"text":"話し手は名札について何と言っていますか。","choices":["2階で受け取れる。","レセプションに入場できる。","今後のイベントの割引が付いている。","変更後の会場が書かれている。"]},"l4-13":{"text":"一部の顧客は何に不満を述べていますか。","choices":["用品を返品できなかった。","誤った価格を請求された。","開店前に外で待たなければならなかった。","ある売り場で接客を受けられなかった。"]},"l4-14":{"text":"話し手はなぜ「全員に遅くまで残ってもらう必要はありません」と言っていますか。","choices":["夜間営業の終了を発表するため。","早く出勤した従業員を批判するため。","一部の勤務時間だけを調整すると説明するため。","追加勤務を勧めるため。"]},"l4-15":{"text":"聞き手は今日何をするよう求められていますか。","choices":["顧客アンケートに答える。","勤務予定の重複を報告する。","用品を別の売り場へ移す。","研修に申し込む。"]},"l4-16":{"text":"この案内に最も関心を持ちそうなのは誰ですか。","choices":["食品事業を始めたい人。","飲食店向けの機器を売る事業主。","賃貸物件を探す建設業者。","ツアーガイドの仕事を探す人。"]},"l4-17":{"text":"初めての利用者は調理枠の予約前に何をしなければなりませんか。","choices":["包装のアドバイザーと会う。","設備を購入する。","利用説明会に参加する。","事業の賞を受賞する。"]},"l4-18":{"text":"聞き手がウェブサイトを利用するよう勧められているのはなぜですか。","choices":["価格設定のガイドをダウンロードするため。","アドバイザーの仕事に応募するため。","入場料を払うため。","見学ツアーの参加枠を確保するため。"]},"l4-19":{"text":"このアナウンスの主な目的は何ですか。","choices":["新しい研修プラットフォームを紹介すること","スケジュールの変更を伝えること","新しいマネージャーを紹介すること","オフィス移転を説明すること"]},"l4-20":{"text":"全従業員が今月末までにしなければならないことは何ですか。","choices":["パスワードを変更すること","安全コースを修了すること","マネージャーと面談すること","進捗レポートを提出すること"]},"l4-21":{"text":"ログインできない場合、従業員は何をするよう求められていますか。","choices":["翌日に再試行すること","研修コーディネーターにメールすること","ITヘルプデスクに連絡すること","新しいアカウントを作成すること"]},"l4-22":{"text":"何が宣伝されていますか。","choices":["フィットネスセンターの会員キャンペーン","スポーツ用品のセール","初心者向けスイミングレッスン","健康食品の定期購入"]},"l4-23":{"text":"今月入会すると、新規会員が支払わなくてよいものは何ですか。","choices":["月会費","入会金","ロッカー使用料","グループクラスの参加費"]},"l4-24":{"text":"今週、聞き手に勧められていることは何ですか。","choices":["電話でパーソナルトレーナーを予約すること","友人にセンターを勧めること","無料ツアーと体験トレーニングのためにセンターを訪れること","年間契約に申し込むこと"]}});
Object.assign(LISTENING_EXPLANATIONS, {"l1-03":"写真制作要件：両足を床につけた作業員が片手にクリップボードを持ち、もう片方の指で書類を指して見下ろす。 クリップボードの紙を見下ろして確認する姿勢が一致する。","l1-04":"写真制作要件：人物のいないカフェのテラスに、テーブル3台と、その周りの独立した椅子。開いたパラソルは静止。 have been arrangedは配置された結果の状態を描写できる。","l1-05":"写真制作要件：立った女性が壁に掛かった額縁の両側に手を添えて水平に直している。 壁にある額縁の両側を持って位置を整える動作が一致する。","l1-06":"写真制作要件：無人の港で複数の小型ボートが桟橋と平行に並び、係留ロープが見える。 tied alongside a dockは桟橋の横にロープで固定された状態を表す。","l1-07":"写真では女性が机に向かい、ノートパソコンのキーボードに手を置いているため、「ノートパソコンで入力している」が正解です。電話に出ている様子や新聞を読んでいる様子はありません。","l1-08":"写真では男性が大きな段ボール箱を両手で抱えて運んでいるため、「段ボール箱を運んでいる」が正解です。フォークリフトやトラックは写っていません。","l1-09":"写真ではスーツ姿の女性と男性が向かい合って握手しているため、「2人は握手している」が正解です。書類の受け渡しはしていません。","l1-10":"写真では男性がローラーで壁にペンキを塗っているため、「ローラーで壁を塗っている」が正解です。はしごは置かれているだけで、修理はしていません。窓は養生シートで覆われています。","l1-11":"写真では女性が街中で自転車に乗っているため、「自転車に乗っている」が正解です。バス停で待っているわけでも、徒歩で渡っているわけでもありません。","l1-12":"写真では女性がホワイトボードのグラフを指さしながら同僚に説明しているため、「ホワイトボードのグラフを指さしている」が正解です。椅子には同僚が座っています。","l2-07":"Who should I speak toは相談相手を尋ねる。Try＋人で問い合わせ先を勧められる。 building managerが相談相手に当たり、Tryはここでは「尋ねてみる」の意味。","l2-08":"二択に対して今は対応できない理由を返し、午後の時間帯を示唆している。 tied upは「忙しくて動けない」。二択を繰り返さず、対応可能な時間を間接的に伝える。","l2-09":"予定を確認する否定疑問に、遅延通知という新情報を返している。 当初の予定に変更があったと分かるため自然な応答。否定疑問でもYes/Noは必須ではない。","l2-10":"混雑という状況の指摘に、利用スペースを増やす提案で応じている。 質問文でなくても、状況を受けた解決策が最も自然な応答になる。","l2-11":"How oftenは頻度。every six monthsが交換間隔を示す。 every＋期間が反復の頻度を直接示す。","l2-12":"cover the front deskは受付業務を代わること。電話終了後ならできると応じる。 Once節だけでも「終わったら代われる」という省略された返答として自然。","l2-13":"文書の所在確認に対し、まだ取得していないことを説明している。 所在を直接言わず、手元にない理由を返す。floor planは間取り図。","l2-14":"Why notは提案。Lenaが不在という事情で、その提案が難しいことを伝える。 候補者が今週不在なので、依頼しにくいと間接的に示す。","l2-15":"速達料金の高さを受けて、通常配送でも期限に間に合うと代案を示す。 急ぐ必要がないなら通常配送を選べるという実用的な応答。","l2-16":"会った経験の確認に、対面ではなくビデオ通話だったと補足している。 Onlyが面識の範囲を限定する。付加疑問にもYes/Noを省略して応じられる。","l2-17":"Whenとcloseから、申し込み終了の日時を問うている。 曜日と時刻が申し込みの締め切りを示している。","l2-18":"find out aboutは「〜について知る」。情報を得た経路が答えになる。 同僚から転送されたという経路がHowに対応する。","l2-19":"When は時を尋ねるため、期限を示す By Friday afternoon が対応します。In the conference room は場所の答えです。","l2-20":"Who は人を尋ねるため、担当者を示す Mr. Tanaka took over が直接答えています。","l2-21":"Why への理由として Because で始まるCが対応します。Aは時刻、Bは人の答えです。","l2-22":"or を使った選択疑問文には Yes/No で答えず、選択肢の一方（E-mail）を選んで答えるCが自然です。","l2-23":"否定疑問文への応答。まだ提出していないので Not yet で始まるBが事実に合います。","l2-24":"故障の報告への応答として、対処を示す I'll call the repair service が自然です。","l2-25":"How many は数を尋ねるため、人数を示す Almost forty が対応します。","l3-07":"The map still shows the old entrance. old entranceをoutdated informationと言い換えている。","l3-08":"We haven't started the print run yet. Approve the corrected proof by three, and we can keep the original delivery date. 未印刷なので修正を反映でき、承認が間に合えば予定どおり納品できるという文脈。","l3-09":"Approve the corrected proof by three. corrected proofとrevised proofが対応し、by threeが期限。","l3-10":"the cycling club / the repair workshop / the first bike ride クラブ、修理講習、自転車ツアーという複数の情報が自転車イベントを示す。","l3-11":"D: I'm leading the first bike ride at nine. 男性話者DがDaniel。leading a bike rideをguiding a bicycle rideと言い換える。","l3-12":"Priya, once you've confirmed the space, please email the workshop leader. emailをcontactと言い換える。場所の確認後という条件が一致する。","l3-13":"The standard unit would usually be suitable, but none will be available until next month. 通常は適するが来月まで空かない、という理由が明示されている。","l3-14":"large unit at its listed rate → 料金表のLarge行 $190 会話で選ぶLargeと、図表の190ドルを結びつける。","l3-15":"To reserve it, complete the online form. complete a formをfill out a formと言い換える。","l3-16":"fossil workshop / ground-floor galleries / public tour 化石の講習、展示室、一般向けツアーが博物館という場所を示す。","l3-17":"The teacher said they have to leave at two. I don't want them to feel rushed. 2時に出発する制約を受けて、1時開始で十分な時間があるかを懸念している。","l3-18":"I'll speak to them before I set up. / the education team themは直前のeducation team。男性は設営前にそのチームに話すと答える。","l3-19":"Room 4B has been double-booked. 電話の目的は、研修室のダブルブッキングに伴う会場変更の相談。ケータリングへの連絡は男性への依頼事項であり、電話の目的そのものではない。","l3-20":"Could you let the catering company know about the change? / Sure, I'll call them this morning. 男性はケータリング会社への連絡を引き受けた。名札の準備は女性の担当で、注文の減量はしないと決まった。","l3-21":"We're expecting about thirty participants. / Two people from the Osaka office can't attend. / We've added three people from the Nagoya branch. 約30人から2人減って3人増えるため、合計は31人。","l4-07":"Your curtains are ready for collection. カーテンを受け取れると知らせる電話。","l4-08":"resurfacing work starts outside our main entrance tomorrow resurfacingは舗装のやり直し。正面入り口の外での工事に対応する。","l4-09":"Just bring the collection slip we gave you. 受け取りに必要なものとしてcollection slipを明示している。","l4-10":"we'll connect with her by video at the scheduled time ビデオで接続することをparticipate remotelyと言い換えている。","l4-11":"Practical Data Security → 図表の2:00 P.M.。時刻は予定どおりで場所だけ変更。 移動するPractical Data Securityを特定し、図表の開始時刻2時を読む。","l4-12":"it also gives you access to the networking reception gives you access toをallow entry toと言い換える。","l4-13":"couldn't find anyone to help them in the outdoor equipment section help themをobtain assistanceと言い換えている。","l4-14":"Instead ... one person from each section will begin an hour later ... without increasing anyone's weekly hours. 全員ではなく各売り場1人の出勤時間をずらす、という説明への導入。","l4-15":"tell me today if it clashes with a class or another commitment 授業などとclashする場合に今日中に伝える、をreport scheduling conflictsと言い換える。","l4-16":"turning your baking hobby into a business / small food businesses 冒頭の趣味から事業へという呼びかけと、小規模食品事業向けという説明が一致する。","l4-17":"first-time users must attend a kitchen orientation before reserving a cooking session mustとbeforeから予約前の必須条件と分かる。","l4-18":"places on the guided tours are limited, so reserve yours through the centre's website 見学ツアーの定員が限られるため、サイトで予約するよう勧める。","l4-19":"the launch of SkillPath, our new online training platform と冒頭で開始を告知しており、アナウンスの主目的は新しい研修プラットフォームの紹介です。","l4-20":"one course is mandatory for all staff / everyone must finish it by the end of this month とあり、月末までの必須事項は安全研修コースの修了です。進捗レポートを受け取るのはマネージャー側です。","l4-21":"If you have any trouble logging in, please contact the IT help desk と明示されています。","l4-22":"a special offer for new members とあり、フィットネスセンターの新規会員キャンペーンの広告です。","l4-23":"we'll waive the enrollment fee とあり、無料になるのは入会金です。waive は「（料金などを）免除する」という意味です。","l4-24":"Come in for a free tour and a trial workout any day this week と呼びかけています。"});

Object.assign(QUESTION_TRANSLATIONS, LISTENING_TRANSLATIONS);
Object.assign(QUESTION_EXPLANATIONS, LISTENING_EXPLANATIONS);
/* Reading expansion: 34 original practice items, 2026-09-11.
   Difficulty labels are editorial estimates, not official TOEIC calibration. */
Object.assign(PASSAGES, {
  "p6_sensor": {
    "body": "Beginning June 3, automatic lighting sensors will be tested on the third floor of our office building. The trial is intended to reduce electricity use in rooms that are not occupied. Employees will still be able to adjust the brightness manually while they are working.\n\nThe sensors have already been [83] in the meeting rooms and corridors. During the first week, the facilities team will check the settings each morning. [84] This will help us identify any adjustments needed before the trial is extended to other floors.\n\nThe lights should switch off only when a room has been empty for ten minutes. [85], if they turn off while you are working, please report the room number and time to the help desk. There is no need to interrupt your work: the wall switches will remain operational throughout the trial.\n\nWe appreciate your [86] as we evaluate this equipment. A brief survey will be sent to all third-floor staff at the end of June.",
    "header": "To: Department Supervisors\nFrom: Facilities Office\nSubject: Lighting sensor trial",
    "part": 6,
    "type": "email"
  },
  "p6_supplier": {
    "body": "Dear Ms. Holt,\n\nThank you for ordering 600 reusable shipping containers. The blue containers you requested are temporarily out of stock, but we expect a new delivery on September 18. We can dispatch your full order within two business days of [87] that delivery.\n\nIf your current schedule cannot accommodate this delay, we have the same containers in gray available now. [88] Both colors have identical dimensions and can be used with the lids you already own.\n\nPlease let us know [89] you would prefer to wait for the blue containers or receive the gray ones instead. We will hold the gray stock for you until noon on September 12. After that time, it will be released for other customers.\n\nThere is no [90] for changing the color of your order. Your existing volume discount will still apply, and the delivery address will remain unchanged.\n\nSincerely,\nOwen Bell",
    "header": "To: Marina Holt\nFrom: Owen Bell, Fairland Packaging\nSubject: Your order FP-218",
    "part": 6,
    "type": "email"
  },
  "p7_bicycle": {
    "body": "From October 6, tenants may use the new secure bicycle room beside the south entrance. The six-week trial will determine whether demand justifies converting an adjacent storeroom into additional bicycle parking. There are currently 24 spaces, available on a first-come, first-served basis; registering does not reserve a space.\n\nTo obtain access, complete the short form on the tenant portal. Once your registration has been processed, your existing building card will open the bicycle-room door. Processing may take two working days. Visitors should continue to use the outdoor racks beside reception.\n\nThe room is intended for daily commuters. Bicycles may not be left overnight, and bicycles still present after 9 P.M. will be moved to the security office. Charging electric bicycle batteries inside the room is prohibited.\n\nParticipants will receive a survey in the final week of the trial. Please complete it even if you have stopped using the room, as information about why tenants choose other parking options will help us assess the service. A decision on permanent provision will be announced in December.",
    "header": "Riverside Business Park\nBicycle storage trial — Notice to tenants",
    "part": 7,
    "type": "notice"
  },
  "p7_catering": {
    "part": 7,
    "sections": [
      {
        "body": "We are expecting 36 participants at our workshop on April 22. Please provide 24 chicken lunches and 12 vegetarian lunches. Our lunch break starts at 12:30, but the reception desk is unstaffed between noon and 12:15. Could you arrange delivery before that period? We have plates and cutlery, so these are not required. Please use the west entrance, as the main lobby will be occupied by a book fair.",
        "header": "From: Leila Grant, Training Coordinator\nTo: Cedar Catering\nDate: April 8\nSubject: Lunch for April 22 workshop"
      },
      {
        "body": "We can deliver at 11:45 A.M. Your requested quantities are confirmed at $14 per lunch. Orders for 40 or more lunches qualify for free delivery; otherwise, a $20 delivery fee applies. Plates and cutlery are optional and have not been included. Final quantity changes must reach us by noon two business days before the event. Please give the delivery driver a contact number for someone who will be at the west entrance when the order arrives.",
        "header": "From: Cedar Catering\nTo: Leila Grant\nDate: April 9\nSubject: RE: Lunch for April 22 workshop"
      }
    ],
    "type": "double email"
  }
});
Object.assign(PASSAGE_TRANSLATIONS, {
  "p6_sensor": {
    "sections": [
      {
        "body": "6月3日から、当オフィスビルの3階で自動照明センサーの試験運用を行います。人がいない部屋の電力使用量を減らすことが目的です。勤務中は引き続き、従業員が手動で明るさを調整できます。\n\nセンサーはすでに会議室と廊下に[83]されています。最初の週は、施設管理チームが毎朝設定を確認します。[84] これにより、試験運用をほかの階へ広げる前に必要な調整を把握できます。\n\n照明は部屋が無人になって10分経過した場合にのみ消えるはずです。[85]、勤務中に消えた場合は、部屋番号と時刻をヘルプデスクへ報告してください。仕事を中断する必要はありません。試験運用の間も壁のスイッチを使用できます。\n\nこの機器を評価する間、皆様の[86]に感謝いたします。6月末に3階の全職員へ短いアンケートを送付します。",
        "header": "宛先：各部門の責任者\n差出人：施設管理室\n件名：照明センサーの試験運用"
      }
    ]
  },
  "p6_supplier": {
    "sections": [
      {
        "body": "Holt様\n\n再利用可能な輸送容器600個をご注文いただきありがとうございます。ご希望の青色の容器は一時的に在庫がありませんが、9月18日に入荷する予定です。その入荷品を[87]してから2営業日以内に、ご注文の全量を発送できます。\n\nこの遅れがお客様の現在の日程に合わない場合、同じ容器の灰色であれば現在在庫があります。[88] 両色とも寸法は同じで、お持ちのふたを使用できます。\n\n青色の容器を待つか、代わりに灰色を受け取るか、どちらをご希望[89]お知らせください。9月12日正午まで灰色の在庫を取り置きします。それ以降はほかのお客様向けに販売を再開します。\n\nご注文の色を変更する[90]はありません。適用中の数量割引はそのままで、配送先住所も変更されません。\n\n敬具\nOwen Bell",
        "header": "宛先：Marina Holt\n差出人：Fairland Packaging、Owen Bell\n件名：ご注文 FP-218"
      }
    ]
  },
  "p7_bicycle": {
    "sections": [
      {
        "body": "10月6日から、入居者は南入口の横にある新しい施錠式自転車保管室を利用できます。6週間の試験運用で、隣接する倉庫を追加の駐輪場に改装するだけの需要があるかを判断します。現在24台分あり、先着順です。登録してもスペースが予約されるわけではありません。\n\n利用には、入居者用ポータルの簡単なフォームに記入してください。登録処理が完了すると、現在お使いの入館カードで保管室のドアを開けられます。処理には2営業日かかる場合があります。来訪者は引き続き受付横の屋外ラックをご利用ください。\n\n保管室は日々の通勤者向けです。自転車を一晩置くことはできず、午後9時を過ぎても残っている自転車は警備室へ移動されます。室内で電動自転車のバッテリーを充電することは禁止されています。\n\n利用登録者には試験運用の最終週にアンケートを送ります。利用をやめた方も回答してください。ほかの駐輪場所を選ぶ理由も、サービスの評価に役立つためです。恒久的な設置の判断は12月に発表します。",
        "header": "Riverside Business Park\n自転車保管室の試験運用：入居者へのお知らせ"
      }
    ]
  },
  "p7_catering": {
    "sections": [
      {
        "body": "4月22日の研修は参加者36名を予定しています。チキンの昼食24食とベジタリアンの昼食12食をお願いします。昼休みは12時30分に始まりますが、正午から12時15分まで受付が無人になります。その時間帯より前に配達していただけますか。皿とカトラリーはこちらにあるので不要です。正面ロビーではブックフェアがあるため、西入口を使ってください。",
        "header": "差出人：研修担当 Leila Grant\n宛先：Cedar Catering\n日付：4月8日\n件名：4月22日の研修の昼食"
      },
      {
        "body": "午前11時45分に配達できます。ご希望の数量を1食14ドルで承りました。40食以上の注文は配送料無料、それ未満は20ドルの配送料がかかります。皿とカトラリーはオプションであり、今回は含めていません。最終的な数量変更は、開催日の2営業日前の正午までにご連絡ください。配達時に西入口にいる方の連絡先電話番号を運転手へお知らせください。",
        "header": "差出人：Cedar Catering\n宛先：Leila Grant\n日付：4月9日\n件名：返信：4月22日の研修の昼食"
      }
    ]
  }
});
QUESTION_BANK.push(...[
  {
    "id": "p5-71",
    "part": 5,
    "text": "The revised delivery schedule will take ___ on the first day of next month.",
    "choices": [
      "effect",
      "effective",
      "effectively",
      "effectiveness"
    ],
    "answer": 0,
    "skill": "vocabulary",
    "focus": "collocations",
    "difficulty": "easy"
  },
  {
    "id": "p5-72",
    "part": 5,
    "text": "Applicants are asked to submit a portfolio along with ___ completed application form.",
    "choices": [
      "they",
      "them",
      "their",
      "theirs"
    ],
    "answer": 2,
    "skill": "grammar",
    "focus": "possessives",
    "difficulty": "easy"
  },
  {
    "id": "p5-73",
    "part": 5,
    "text": "___ the auditorium is being renovated, this year's awards ceremony will be held at the hotel.",
    "choices": [
      "During",
      "Because of",
      "Despite",
      "While"
    ],
    "answer": 3,
    "skill": "structure",
    "focus": "conjunction vs preposition",
    "difficulty": "medium"
  },
  {
    "id": "p5-74",
    "part": 5,
    "text": "The technician inspected the machine ___ before authorizing its return to service.",
    "choices": [
      "thorough",
      "thoroughness",
      "thoroughly",
      "more thorough"
    ],
    "answer": 2,
    "skill": "grammar",
    "focus": "adverbs",
    "difficulty": "easy"
  },
  {
    "id": "p5-75",
    "part": 5,
    "text": "Customers may exchange unused items ___ they present the original receipt.",
    "choices": [
      "provided that",
      "even so",
      "in addition to",
      "regardless of"
    ],
    "answer": 0,
    "skill": "structure",
    "focus": "conditions",
    "difficulty": "medium"
  },
  {
    "id": "p5-76",
    "part": 5,
    "text": "Of the three proposals, Ms. Chen's offers the ___ solution to the storage problem.",
    "choices": [
      "practical",
      "practically",
      "more practical",
      "most practical"
    ],
    "answer": 3,
    "skill": "grammar",
    "focus": "superlatives",
    "difficulty": "medium"
  },
  {
    "id": "p5-77",
    "part": 5,
    "text": "The purchasing team is seeking a supplier capable of ___ large orders at short notice.",
    "choices": [
      "fulfill",
      "fulfilling",
      "fulfilled",
      "fulfillment"
    ],
    "answer": 1,
    "skill": "grammar",
    "focus": "gerund after preposition",
    "difficulty": "medium"
  },
  {
    "id": "p5-78",
    "part": 5,
    "text": "The director postponed the announcement until the figures could be independently ___.",
    "choices": [
      "verification",
      "verifies",
      "verified",
      "verifying"
    ],
    "answer": 2,
    "skill": "grammar",
    "focus": "passive voice",
    "difficulty": "medium"
  },
  {
    "id": "p5-79",
    "part": 5,
    "text": "The new booking system is intended to ___ the amount of time staff spend processing reservations.",
    "choices": [
      "reduce",
      "decline",
      "fall",
      "lowering"
    ],
    "answer": 0,
    "skill": "vocabulary",
    "focus": "transitive verbs",
    "difficulty": "medium"
  },
  {
    "id": "p5-80",
    "part": 5,
    "text": "The shipment arrived on time; ___, several cartons had been damaged in transit.",
    "choices": [
      "therefore",
      "however",
      "similarly",
      "otherwise"
    ],
    "answer": 1,
    "skill": "structure",
    "focus": "contrast",
    "difficulty": "medium"
  },
  {
    "id": "p5-81",
    "part": 5,
    "text": "Employees ___ travel expenses exceed the daily allowance must obtain written approval.",
    "choices": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "answer": 2,
    "skill": "grammar",
    "focus": "relative possessives",
    "difficulty": "hard"
  },
  {
    "id": "p5-82",
    "part": 5,
    "text": "The committee will not announce its decision until every application ___ reviewed.",
    "choices": [
      "has been",
      "will be",
      "have been",
      "was being"
    ],
    "answer": 0,
    "skill": "grammar",
    "focus": "time clause tense",
    "difficulty": "hard"
  },
  {
    "id": "p5-83",
    "part": 5,
    "text": "Had the client approved the design earlier, production ___ last week.",
    "choices": [
      "begins",
      "will begin",
      "has begun",
      "would have begun"
    ],
    "answer": 3,
    "skill": "grammar",
    "focus": "past counterfactual",
    "difficulty": "hard"
  },
  {
    "id": "p5-84",
    "part": 5,
    "text": "The consultant's recommendations were based on a ___ review of the company's purchasing records.",
    "choices": [
      "comprehensive",
      "comprehensively",
      "comprehend",
      "comprehension"
    ],
    "answer": 0,
    "skill": "vocabulary",
    "focus": "word forms",
    "difficulty": "medium"
  },
  {
    "id": "p5-85",
    "part": 5,
    "text": "The restaurant has extended its opening hours to ___ customers who work late.",
    "choices": [
      "accompany",
      "accommodate",
      "accumulate",
      "accomplish"
    ],
    "answer": 1,
    "skill": "vocabulary",
    "focus": "word choice",
    "difficulty": "medium"
  },
  {
    "id": "p5-86",
    "part": 5,
    "text": "Please retain a copy of the signed agreement for future ___.",
    "choices": [
      "preference",
      "attendance",
      "reference",
      "assistance"
    ],
    "answer": 2,
    "skill": "vocabulary",
    "focus": "business collocations",
    "difficulty": "easy"
  },
  {
    "id": "p5-87",
    "part": 5,
    "text": "The maintenance work must be completed ___ the building reopens on Monday.",
    "choices": [
      "by",
      "prior",
      "during",
      "before"
    ],
    "answer": 3,
    "skill": "structure",
    "focus": "time conjunctions",
    "difficulty": "medium"
  },
  {
    "id": "p5-88",
    "part": 5,
    "text": "The replacement parts will be sent at no ___ cost to customers whose products are still under warranty.",
    "choices": [
      "addition",
      "additional",
      "additionally",
      "adding"
    ],
    "answer": 1,
    "skill": "grammar",
    "focus": "adjective modifier",
    "difficulty": "easy"
  },
  {
    "id": "p5-89",
    "part": 5,
    "text": "Only after the final inspection ___ the facility be opened to the public.",
    "choices": [
      "will",
      "has",
      "does",
      "was"
    ],
    "answer": 0,
    "skill": "structure",
    "focus": "inversion",
    "difficulty": "hard"
  },
  {
    "id": "p5-90",
    "part": 5,
    "text": "Although the two models look similar, they differ ___ in their energy consumption.",
    "choices": [
      "considerable",
      "consideration",
      "considerably",
      "considering"
    ],
    "answer": 2,
    "skill": "grammar",
    "focus": "adverb modifier",
    "difficulty": "medium"
  },
  {
    "id": "p6-27",
    "part": 6,
    "passageId": "p6_sensor",
    "blank": 83,
    "text": "Choose the best answer for blank (83).",
    "choices": [
      "installed",
      "installing",
      "installation",
      "installs"
    ],
    "answer": 0,
    "skill": "grammar",
    "focus": "passive voice",
    "difficulty": "medium"
  },
  {
    "id": "p6-28",
    "part": 6,
    "passageId": "p6_sensor",
    "blank": 84,
    "text": "Choose the best sentence for blank (84).",
    "choices": [
      "The survey results have already been published.",
      "Staff should also report any unexpected changes in lighting.",
      "The building will remain closed until next year.",
      "All manual controls have therefore been removed."
    ],
    "answer": 1,
    "skill": "reading",
    "focus": "sentence insertion",
    "difficulty": "hard"
  },
  {
    "id": "p6-29",
    "part": 6,
    "passageId": "p6_sensor",
    "blank": 85,
    "text": "Choose the best answer for blank (85).",
    "choices": [
      "Similarly",
      "For instance",
      "However",
      "Consequently"
    ],
    "answer": 2,
    "skill": "structure",
    "focus": "contrast",
    "difficulty": "medium"
  },
  {
    "id": "p6-30",
    "part": 6,
    "passageId": "p6_sensor",
    "blank": 86,
    "text": "Choose the best answer for blank (86).",
    "choices": [
      "cooperate",
      "cooperative",
      "cooperatively",
      "cooperation"
    ],
    "answer": 3,
    "skill": "grammar",
    "focus": "noun form",
    "difficulty": "easy"
  },
  {
    "id": "p6-31",
    "part": 6,
    "passageId": "p6_supplier",
    "blank": 87,
    "text": "Choose the best answer for blank (87).",
    "choices": [
      "receive",
      "receiving",
      "received",
      "reception"
    ],
    "answer": 1,
    "skill": "grammar",
    "focus": "gerund after preposition",
    "difficulty": "medium"
  },
  {
    "id": "p6-32",
    "part": 6,
    "passageId": "p6_supplier",
    "blank": 88,
    "text": "Choose the best sentence for blank (88).",
    "choices": [
      "The blue version has been discontinued permanently.",
      "Your order has already been delivered.",
      "We could ship those containers tomorrow.",
      "Only the blue containers fit your existing lids."
    ],
    "answer": 2,
    "skill": "reading",
    "focus": "sentence insertion",
    "difficulty": "hard"
  },
  {
    "id": "p6-33",
    "part": 6,
    "passageId": "p6_supplier",
    "blank": 89,
    "text": "Choose the best answer for blank (89).",
    "choices": [
      "whether",
      "unless",
      "despite",
      "otherwise"
    ],
    "answer": 0,
    "skill": "structure",
    "focus": "embedded alternative",
    "difficulty": "medium"
  },
  {
    "id": "p6-34",
    "part": 6,
    "passageId": "p6_supplier",
    "blank": 90,
    "text": "Choose the best answer for blank (90).",
    "choices": [
      "charge",
      "receipt",
      "refund",
      "balance"
    ],
    "answer": 0,
    "skill": "vocabulary",
    "focus": "fees",
    "difficulty": "medium"
  },
  {
    "id": "p7-39",
    "part": 7,
    "passageId": "p7_bicycle",
    "text": "What is the main purpose of the trial?",
    "choices": [
      "To test a new type of electric bicycle",
      "To decide whether more indoor bicycle spaces are needed",
      "To replace all outdoor parking facilities",
      "To introduce overnight storage for visitors"
    ],
    "answer": 1,
    "skill": "reading",
    "focus": "purpose",
    "difficulty": "easy"
  },
  {
    "id": "p7-40",
    "part": 7,
    "passageId": "p7_bicycle",
    "text": "What is indicated about registered users?",
    "choices": [
      "They are guaranteed a parking space.",
      "They must collect a separate access card.",
      "They may charge batteries before 9 P.M.",
      "They may need to wait before their cards work."
    ],
    "answer": 3,
    "skill": "reading",
    "focus": "detail",
    "difficulty": "medium"
  },
  {
    "id": "p7-41",
    "part": 7,
    "passageId": "p7_bicycle",
    "text": "Why are people who stopped using the room asked to complete the survey?",
    "choices": [
      "Their reasons may inform a decision about the service.",
      "They must request a refund of their registration fees.",
      "They need to renew their building cards.",
      "Their bicycles are being held by security."
    ],
    "answer": 0,
    "skill": "reading",
    "focus": "inference",
    "difficulty": "hard"
  },
  {
    "id": "p7-42",
    "part": 7,
    "passageId": "p7_catering",
    "text": "Why does Ms. Grant request delivery before noon?",
    "choices": [
      "The workshop will finish at noon.",
      "A driver cannot enter through the west entrance later.",
      "No receptionist will be available for a short period.",
      "The lunch must be served at 11:45."
    ],
    "answer": 2,
    "skill": "reading",
    "focus": "detail",
    "difficulty": "medium"
  },
  {
    "id": "p7-43",
    "part": 7,
    "passageId": "p7_catering",
    "text": "Based on the two e-mails, what is the total charge for the confirmed order?",
    "choices": [
      "$504",
      "$524",
      "$560",
      "$580"
    ],
    "answer": 1,
    "skill": "reading",
    "focus": "cross-passage calculation",
    "difficulty": "hard"
  },
  {
    "id": "p7-44",
    "part": 7,
    "passageId": "p7_catering",
    "text": "What does Cedar Catering ask Ms. Grant to provide?",
    "choices": [
      "Payment for plates and cutlery",
      "A revised schedule for the book fair",
      "The names of all vegetarian participants",
      "A telephone number for the person receiving the delivery"
    ],
    "answer": 3,
    "skill": "reading",
    "focus": "requested action",
    "difficulty": "medium"
  }
]);
Object.assign(QUESTION_TRANSLATIONS, {
  "p5-71": {
    "text": "改定された配送日程は来月1日から効力を___。",
    "choices": [
      "発効（take effectで効力を生じる）",
      "効果的な",
      "効果的に",
      "有効性"
    ]
  },
  "p5-72": {
    "text": "応募者は、___記入済みの申込書と一緒に作品集を提出するよう求められています。",
    "choices": [
      "彼らは",
      "彼らを／に",
      "彼らの",
      "彼らのもの"
    ]
  },
  "p5-73": {
    "text": "講堂を改装している___、今年の授賞式はホテルで開催されます。",
    "choices": [
      "〜の間（前置詞）",
      "〜のため（前置詞）",
      "〜にもかかわらず（前置詞）",
      "〜している間（接続詞）"
    ]
  },
  "p5-74": {
    "text": "技術者は機械の使用再開を許可する前に、___点検しました。",
    "choices": [
      "徹底的な",
      "徹底していること",
      "徹底的に",
      "より徹底的な"
    ]
  },
  "p5-75": {
    "text": "顧客は元の領収書を提示する___、未使用品を交換できます。",
    "choices": [
      "〜という条件で",
      "それでも",
      "〜に加えて",
      "〜にかかわらず"
    ]
  },
  "p5-76": {
    "text": "3つの提案のうち、Chenさんの案は保管の問題に対して___解決策を示しています。",
    "choices": [
      "実用的な",
      "実用的に",
      "より実用的な",
      "最も実用的な"
    ]
  },
  "p5-77": {
    "text": "購買チームは、急な依頼でも大量注文に___ことができる仕入れ先を探しています。",
    "choices": [
      "対応する（原形）",
      "対応すること（動名詞）",
      "対応した（過去形・過去分詞）",
      "履行（名詞）"
    ]
  },
  "p5-78": {
    "text": "取締役は数値が第三者によって___まで発表を延期しました。",
    "choices": [
      "検証（名詞）",
      "検証する（三人称単数現在）",
      "検証される（過去分詞）",
      "検証している（現在分詞）"
    ]
  },
  "p5-79": {
    "text": "新しい予約システムは、職員が予約処理に費やす時間を___ことを目的としています。",
    "choices": [
      "減らす",
      "減少する／断る",
      "落ちる",
      "減らしていること"
    ]
  },
  "p5-80": {
    "text": "荷物は時間どおりに届きました。___、数箱が輸送中に破損していました。",
    "choices": [
      "したがって",
      "しかし",
      "同様に",
      "そうでなければ"
    ]
  },
  "p5-81": {
    "text": "出張費が1日当たりの手当を超える従業員は、書面の承認を得なければなりません。",
    "choices": [
      "〜する人（主格）",
      "〜される人（目的格）",
      "その人の（所有格）",
      "〜するもの"
    ]
  },
  "p5-82": {
    "text": "委員会はすべての申請書が審査___まで決定を発表しません。",
    "choices": [
      "済みになった（現在完了受動）",
      "されるだろう（未来受動）",
      "済みになった（複数主語用）",
      "されていた（過去進行受動）"
    ]
  },
  "p5-83": {
    "text": "顧客がもっと早くデザインを承認していれば、生産は先週___でしょう。",
    "choices": [
      "始まる",
      "始まるだろう",
      "すでに始まっている",
      "始まっていただろう"
    ]
  },
  "p5-84": {
    "text": "コンサルタントの提言は、会社の購買記録の___調査に基づいていました。",
    "choices": [
      "包括的な",
      "包括的に",
      "理解する",
      "理解"
    ]
  },
  "p5-85": {
    "text": "レストランは遅くまで働く顧客に___ため、営業時間を延長しました。",
    "choices": [
      "同行する",
      "対応する／便宜を図る",
      "蓄積する",
      "達成する"
    ]
  },
  "p5-86": {
    "text": "後日___できるよう、署名済み契約書の写しを保管してください。",
    "choices": [
      "好み",
      "出席",
      "参照",
      "支援"
    ]
  },
  "p5-87": {
    "text": "月曜日に建物が再開する___、保守作業を完了しなければなりません。",
    "choices": [
      "〜までに（前置詞）",
      "前の（形容詞）",
      "〜の間（前置詞）",
      "〜より前に（接続詞）"
    ]
  },
  "p5-88": {
    "text": "まだ保証期間内の製品を持つ顧客には、交換部品を___費用なしで発送します。",
    "choices": [
      "追加（名詞）",
      "追加の",
      "さらに（副詞）",
      "追加している"
    ]
  },
  "p5-89": {
    "text": "最終検査を終えて初めて、施設は一般公開されます。",
    "choices": [
      "〜するだろう",
      "〜した（完了の助動詞）",
      "〜する（現在の助動詞）",
      "〜だった"
    ]
  },
  "p5-90": {
    "text": "2つのモデルは見た目が似ていますが、消費電力は___異なります。",
    "choices": [
      "かなりの",
      "考慮",
      "かなり",
      "考慮すると"
    ]
  },
  "p6-27": {
    "text": "空欄（83）に入る最も適切な答えを選んでください。",
    "choices": [
      "設置される（過去分詞）",
      "設置している",
      "設置（名詞）",
      "設置する（三人称単数）"
    ]
  },
  "p6-28": {
    "text": "空欄（84）に入る最も適切な文を選んでください。",
    "choices": [
      "アンケート結果はすでに公表されています。",
      "職員も予期しない照明の変化を報告してください。",
      "建物は来年まで閉鎖したままです。",
      "そのため手動操作装置はすべて撤去しました。"
    ]
  },
  "p6-29": {
    "text": "空欄（85）に入る最も適切な答えを選んでください。",
    "choices": [
      "同様に",
      "例えば",
      "しかし",
      "その結果"
    ]
  },
  "p6-30": {
    "text": "空欄（86）に入る最も適切な答えを選んでください。",
    "choices": [
      "協力する",
      "協力的な",
      "協力して",
      "協力"
    ]
  },
  "p6-31": {
    "text": "空欄（87）に入る最も適切な答えを選んでください。",
    "choices": [
      "受け取る（原形）",
      "受け取ること（動名詞）",
      "受け取った",
      "受付／歓迎会"
    ]
  },
  "p6-32": {
    "text": "空欄（88）に入る最も適切な文を選んでください。",
    "choices": [
      "青色モデルは永久に製造中止になりました。",
      "ご注文の商品はすでに配達済みです。",
      "その容器なら明日発送できます。",
      "お持ちのふたが合うのは青色の容器だけです。"
    ]
  },
  "p6-33": {
    "text": "空欄（89）に入る最も適切な答えを選んでください。",
    "choices": [
      "〜かどうか／〜かそれとも",
      "〜でない限り",
      "〜にもかかわらず",
      "そうでなければ"
    ]
  },
  "p6-34": {
    "text": "空欄（90）に入る最も適切な答えを選んでください。",
    "choices": [
      "料金",
      "領収書",
      "返金",
      "残高"
    ]
  },
  "p7-39": {
    "text": "試験運用の主な目的は何ですか。",
    "choices": [
      "新型の電動自転車を試すため",
      "屋内の駐輪スペースを増やす必要があるか判断するため",
      "屋外の駐輪設備をすべて置き換えるため",
      "来訪者向けの夜間保管を始めるため"
    ]
  },
  "p7-40": {
    "text": "登録利用者について何が示されていますか。",
    "choices": [
      "駐輪スペースが保証される",
      "専用の別カードを受け取らなければならない",
      "午後9時より前なら充電できる",
      "カードが使えるようになるまで待つ場合がある"
    ]
  },
  "p7-41": {
    "text": "利用をやめた人にもアンケートへの回答を求めるのはなぜですか。",
    "choices": [
      "利用をやめた理由がサービスに関する判断に役立つため",
      "登録料金の返金申請が必要なため",
      "入館カードの更新が必要なため",
      "自転車が警備室に保管されているため"
    ]
  },
  "p7-42": {
    "text": "Grantさんが正午より前の配達を求めるのはなぜですか。",
    "choices": [
      "研修が正午に終了するため",
      "それ以降は運転手が西入口から入れないため",
      "短時間、受付担当者が不在になるため",
      "昼食を11時45分に出す必要があるため"
    ]
  },
  "p7-43": {
    "text": "2通のメールに基づくと、確定した注文の合計料金はいくらですか。",
    "choices": [
      "504ドル",
      "524ドル",
      "560ドル",
      "580ドル"
    ]
  },
  "p7-44": {
    "text": "Cedar CateringはGrantさんに何を提供するよう求めていますか。",
    "choices": [
      "皿とカトラリーの代金",
      "ブックフェアの変更後の日程",
      "ベジタリアンの参加者全員の名前",
      "配達を受け取る人の電話番号"
    ]
  }
});
Object.assign(QUESTION_EXPLANATIONS, {
  "p5-71": "take effectで「発効する」。effectiveは形容詞、effectivelyは副詞、effectivenessは有効性という名詞で、この定型表現には使わない。",
  "p5-72": "名詞句completed application formの前なので所有格their。theirsは単独で名詞の働きをする。",
  "p5-73": "後ろがthe auditorium is being renovatedという節なので接続詞While。ほかの3つはこの位置では名詞句を取る前置詞。",
  "p5-74": "inspectedという動詞を修飾する副詞thoroughlyが必要。形容詞thoroughや名詞thoroughnessは使えない。",
  "p5-75": "provided thatは条件を示し、後ろに主語と動詞を伴える。even soはこの2つの節をそのまま接続できず、残る2つは前置詞句。",
  "p5-76": "Of the threeとtheが最上級を要求する。比較級more practicalは通常2者の比較に使う。",
  "p5-77": "capable ofのofは前置詞。large ordersを目的語として取る動名詞fulfillingを置く。名詞fulfillmentなら通常of large ordersが必要。",
  "p5-78": "could be independently verifiedは「第三者によって検証される」という受動態。beの後ろには過去分詞verifiedが必要。verificationは名詞、verifiesは現在形、verifyingでは受動態にならない。",
  "p5-79": "toの後は動詞原形。reduceはthe amount of timeを目的語に取って「時間を減らす」。declineは「減少する」では自動詞で、他動詞では「断る」。fallも自動詞。",
  "p5-80": "予定どおりの到着という良い点と破損という悪い点の対比なのでhowever。因果関係や類似を表す語ではない。",
  "p5-81": "employeesのtravel expensesという所有関係。空欄の後ろに名詞travel expensesがあるためwhose。whoなら節内の主語が重複する。",
  "p5-82": "未来のことでもuntilの時の副詞節には現在形・現在完了を用いる。every applicationは単数なのでhas been reviewed。",
  "p5-83": "Had the client approvedはIf the client had approvedの倒置。過去の反実仮想なので帰結節はwould have＋過去分詞。",
  "p5-84": "名詞reviewを修飾する形容詞comprehensive。「幅広く網羅した調査」の意味。副詞・動詞・名詞はこの形では入らない。",
  "p5-85": "accommodate customersは顧客の都合・ニーズに対応すること。accompanyは同行、accumulateは蓄積、accomplishは仕事などを達成する。",
  "p5-86": "for future referenceで「後で参照するために」。retain a copyと結び付く定型表現。",
  "p5-87": "the building reopensという節を導けるbefore。byならby Monday、priorならprior to the reopeningのような形が必要。",
  "p5-88": "costを修飾する形容詞additionalが必要。at no additional costで「追加費用なしで」。",
  "p5-89": "Only afterの句が文頭に来るので倒置will the facility be opened。hasならbeen、doesならbe openedでは受動を作れず、wasもbeとの重複になる。",
  "p5-90": "動詞differを修飾する副詞considerably。considerableは形容詞、considerationは名詞、consideringはこの文では不適切。",
  "p6-27": "have already beenの後でセンサーが「設置された」受動態を作るinstalled。installationは名詞、installingならセンサー自体が設置する意味になる。",
  "p6-28": "次のThis will help us identify any adjustments neededにつながるのは、照明の変化を報告すること。アンケートは月末に送る予定であり、手動スイッチは利用可能と明記されている。",
  "p6-29": "無人のときだけ消灯する正常動作と、仕事中に消える不具合を対比するHowever。正常動作の結果として不具合が起こるわけではないのでConsequentlyではない。",
  "p6-30": "yourの後でappreciateの目的語となる名詞cooperationを選ぶ。「協力に感謝する」の定型表現。",
  "p6-31": "within two business days ofのofの後でthat deliveryを目的語に取れる動名詞receiving。receptionはこの形で直接目的語を取らない。",
  "p6-32": "直前の在庫がある灰色の容器をthose containersで受け、代替案の利点を説明する。青色は入荷予定で、両色とも既存のふたに合うため他の選択肢は本文と矛盾。",
  "p6-33": "whether ... or ...で「待つか代わりを受け取るか」という選択を表す。let us knowの内容を導く。unlessは条件なのでこの二者択一の内容には合わない。",
  "p6-34": "no charge for changingで「変更の料金はかからない」。refundは返金で、色変更の費用がないという文脈を表せない。",
  "p7-39": "第1段落のwhether demand justifies converting an adjacent storeroomが根拠。需要を調べて増設を判断する。屋外設備の全廃や夜間保管は目的ではない。",
  "p7-40": "登録処理は最大2営業日かかり、その後に既存カードが使える。登録は場所を保証せず、充電は時刻を問わず禁止。",
  "p7-41": "最終段落に、他の駐輪方法を選ぶ理由が評価に役立つとある。料金やカード更新は書かれていない。警備室への移動は午後9時以降の放置車両の話。",
  "p7-42": "1通目に受付が正午から12時15分まで無人になると明記。昼休みは12時30分で、11時45分は2通目で提示された配達時刻。",
  "p7-43": "1通目の24＋12＝36食と2通目の1食14ドルを照合する。36×14＝504ドル。40食未満なので送料20ドルを加えて524ドル。40食の料金で計算しない。",
  "p7-44": "2通目のcontact number for someone who will be at the west entranceが根拠。西入口で受け取る人の電話番号を求めている。皿とカトラリーは含めていない。"
});

/* === LexSophia Bank Expansion: Part 5 (p5-91..p5-120) + Part 7 (p7-69..p7-71) === */
Object.assign(PASSAGES, {"p7_coworking": {"part": 7, "type": "double email", "sections": [{"header": "From: Hannah Brooks, Operations Manager\nTo: All Tenants, Harborview Coworking\nDate: September 3\nSubject: Scheduled Wi-Fi Upgrade and Quiet Zone Changes", "body": "To support higher video-conferencing demand, Harborview Coworking will upgrade all wireless routers on Saturday, September 14, between 8:00 A.M. and 11:00 A.M. During this window, the main Wi-Fi network will be unavailable, though wired Ethernet ports in private offices will remain active. Additionally, starting September 16, the third-floor reading lounge will become a designated Quiet Zone where phone and video calls are prohibited. Members who need private call booths may reserve them at no extra charge via the member portal up to 48 hours in advance."}, {"header": "From: Kenji Sato, Harborview Member\nTo: Hannah Brooks, Operations Manager\nDate: September 4\nSubject: RE: Scheduled Wi-Fi Upgrade and Quiet Zone Changes", "body": "Thank you for the advance notice. I have a client presentation scheduled for 9:30 A.M. on Saturday, September 14, and I currently hold a Hot Desk membership without a private office. Would it be possible to book one of the vacant fourth-floor private offices for that morning so I can use an Ethernet cable? I also welcome the new Quiet Zone on the third floor, as call noise has occasionally made concentration difficult."}]}});
Object.assign(PASSAGE_TRANSLATIONS, {"p7_coworking": {"sections": [{"header": "差出人：運営マネージャー Hannah Brooks\n宛先：Harborview Coworking 入居者各位\n日付：9月3日\n件名：Wi-Fiアップグレード工事とクワイエットゾーン変更のお知らせ", "body": "ビデオ会議の需要増に対応するため、Harborview Coworkingでは9月14日（土）午前8時から11時の間に全無線ルーターを更新します。この時間帯はメインWi-Fiが利用できませんが、個室オフィスの有線Ethernetポートは引き続き利用可能です。また9月16日より、3階のリーディングラウンジを通話・ビデオ会議禁止のクワイエットゾーンに指定します。個別の通話ブースが必要な会員は、48時間前まで会員ポータルから追加料金なしで予約できます。"}, {"header": "差出人：会員 Kenji Sato\n宛先：運営マネージャー Hannah Brooks\n日付：9月4日\n件名：返信：Wi-Fiアップグレード工事とクワイエットゾーン変更のお知らせ", "body": "事前のご案内ありがとうございます。9月14日（土）午前9時30分からクライアント向けプレゼンが予定されているのですが、現在私は個室なしのホットデスク会員です。Ethernetケーブルを使えるよう、その午前中だけ4階の空いている個室オフィスを1部屋予約することは可能でしょうか。また、3階の新しいクワイエットゾーンも歓迎します。通話音で集中しづらい時があったためです。"}]}});
QUESTION_BANK.push(...[{"id": "p5-91", "part": 5, "text": "Please ensure that all expense reports are submitted ___ by Friday afternoon.", "choices": ["prompt", "promptness", "promptly", "prompted"], "answer": 2, "skill": "grammar", "focus": "parts of speech", "difficulty": "easy"}, {"id": "p5-92", "part": 5, "text": "___ the heavy snowfall in the northern region, all morning deliveries arrived on schedule.", "choices": ["Although", "Despite", "Whereas", "Even though"], "answer": 1, "skill": "structure", "focus": "conjunction vs preposition", "difficulty": "medium"}, {"id": "p5-93", "part": 5, "text": "A detailed summary of the quarterly survey results ___ been uploaded to the company portal.", "choices": ["have", "has", "are", "were"], "answer": 1, "skill": "grammar", "focus": "subject-verb agreement", "difficulty": "medium"}, {"id": "p5-94", "part": 5, "text": "The operations team is working closely with external vendors to ___ the new inventory system.", "choices": ["implement", "comply", "reside", "depart"], "answer": 0, "skill": "vocabulary", "focus": "business collocations", "difficulty": "medium"}, {"id": "p5-95", "part": 5, "text": "The architect ___ designed our downtown headquarters has been invited to speak at the conference.", "choices": ["which", "whose", "who", "whom"], "answer": 2, "skill": "structure", "focus": "relative pronouns", "difficulty": "medium"}, {"id": "p5-96", "part": 5, "text": "By the time the regional director arrives next Tuesday, the renovation crew ___ the lobby.", "choices": ["finishes", "finished", "will have finished", "has finished"], "answer": 2, "skill": "grammar", "focus": "verb tense", "difficulty": "medium"}, {"id": "p5-97", "part": 5, "text": "Our customer support desk provides ___ assistance to clients experiencing technical issues.", "choices": ["rely", "reliably", "reliability", "reliable"], "answer": 3, "skill": "grammar", "focus": "adjective modifier", "difficulty": "easy"}, {"id": "p5-98", "part": 5, "text": "The warranty remains valid ___ the product is serviced exclusively by authorized technicians.", "choices": ["provided that", "in spite of", "prior to", "owing to"], "answer": 0, "skill": "structure", "focus": "conjunctions", "difficulty": "hard"}, {"id": "p5-99", "part": 5, "text": "Because the initial budget estimate was too optimistic, the committee requested a more ___ forecast.", "choices": ["vacant", "realistic", "frequent", "fragile"], "answer": 1, "skill": "vocabulary", "focus": "vocabulary", "difficulty": "hard"}, {"id": "p5-100", "part": 5, "text": "Ms. Takahashi is responsible for ___ the annual compliance audit across all domestic branches.", "choices": ["oversee", "overseen", "overseeing", "oversight"], "answer": 2, "skill": "grammar", "focus": "gerund after preposition", "difficulty": "hard"}, {"id": "p5-101", "part": 5, "text": "The marketing director asked the agency to revise the brochure so that it appeals more ___ to younger consumers.", "choices": ["direct", "direction", "directly", "directed"], "answer": 2, "skill": "grammar", "focus": "adverb modifier", "difficulty": "easy"}, {"id": "p5-102", "part": 5, "text": "All visitors must display a temporary security badge ___ they are inside the research facility.", "choices": ["during", "while", "until", "throughout"], "answer": 1, "skill": "structure", "focus": "conjunction vs preposition", "difficulty": "medium"}, {"id": "p5-103", "part": 5, "text": "Neither the branch manager nor the regional supervisors ___ notified of the sudden policy revision.", "choices": ["was", "were", "has", "is"], "answer": 1, "skill": "grammar", "focus": "subject-verb agreement", "difficulty": "hard"}, {"id": "p5-104", "part": 5, "text": "Thanks to the newly installed solar panels, the warehouse has significantly reduced its ___ utility costs.", "choices": ["month", "monthly", "months", "month's"], "answer": 1, "skill": "grammar", "focus": "adjective modifier", "difficulty": "easy"}, {"id": "p5-105", "part": 5, "text": "Passengers holding priority tickets are eligible to ___ the aircraft ahead of general boarding.", "choices": ["board", "boarding", "boarded", "boards"], "answer": 0, "skill": "grammar", "focus": "parts of speech", "difficulty": "easy"}, {"id": "p5-106", "part": 5, "text": "The software update will be rolled out in stages to minimize any ___ to daily operations.", "choices": ["disrupt", "disruptive", "disruption", "disrupted"], "answer": 2, "skill": "grammar", "focus": "parts of speech", "difficulty": "medium"}, {"id": "p5-107", "part": 5, "text": "Should you require ___ information regarding the seminar schedule, please contact the secretariat.", "choices": ["far", "further", "furthest", "farther"], "answer": 1, "skill": "vocabulary", "focus": "word choice", "difficulty": "medium"}, {"id": "p5-108", "part": 5, "text": "The accounting department completed the quarterly audit two days ___ than originally scheduled.", "choices": ["early", "earlier", "earliest", "earliness"], "answer": 1, "skill": "grammar", "focus": "word forms", "difficulty": "easy"}, {"id": "p5-109", "part": 5, "text": "Ms. Patel recommended ___ the keynote presentation to allow extra time for the Q&A session.", "choices": ["shorten", "to shorten", "shortening", "shortened"], "answer": 2, "skill": "grammar", "focus": "gerund after preposition", "difficulty": "medium"}, {"id": "p5-110", "part": 5, "text": "The board approved the merger proposal ___ after reviewing the independent financial assessment.", "choices": ["unanimous", "unanimously", "unanimity", "unanimousness"], "answer": 1, "skill": "grammar", "focus": "adverb modifier", "difficulty": "medium"}, {"id": "p5-111", "part": 5, "text": "Customers who register their appliances online within 30 days of purchase will receive a ___ warranty.", "choices": ["extend", "extending", "extended", "extension"], "answer": 2, "skill": "grammar", "focus": "adjective modifier", "difficulty": "medium"}, {"id": "p5-112", "part": 5, "text": "___ the high demand for the limited-edition headphones, the manufacturer decided to increase production.", "choices": ["Given", "Unless", "Although", "Whenever"], "answer": 0, "skill": "structure", "focus": "prepositions", "difficulty": "hard"}, {"id": "p5-113", "part": 5, "text": "The new logistics hub is strategically ___ near both the international airport and the main highway.", "choices": ["locate", "location", "located", "locating"], "answer": 2, "skill": "grammar", "focus": "passive voice", "difficulty": "easy"}, {"id": "p5-114", "part": 5, "text": "Each department head is expected to submit a staffing forecast ___ the end of the fiscal quarter.", "choices": ["prior to", "in addition to", "regardless of", "instead of"], "answer": 0, "skill": "vocabulary", "focus": "prepositions", "difficulty": "medium"}, {"id": "p5-115", "part": 5, "text": "The hotel chain plans to ___ its loyalty program next spring to include complimentary airport transfers.", "choices": ["expand", "exceed", "expire", "excuse"], "answer": 0, "skill": "vocabulary", "focus": "business collocations", "difficulty": "medium"}, {"id": "p5-116", "part": 5, "text": "Because the conference room was fully booked, the team held ___ weekly briefing in the lounge.", "choices": ["they", "them", "their", "theirs"], "answer": 2, "skill": "grammar", "focus": "possessives", "difficulty": "easy"}, {"id": "p5-117", "part": 5, "text": "Had the supplier ___ the component shortage earlier, we could have secured an alternative source.", "choices": ["report", "reported", "reporting", "reports"], "answer": 1, "skill": "structure", "focus": "inversion", "difficulty": "hard"}, {"id": "p5-118", "part": 5, "text": "The downtown museum will remain closed for structural repairs ___ further notice.", "choices": ["by", "until", "within", "since"], "answer": 1, "skill": "vocabulary", "focus": "prepositions", "difficulty": "easy"}, {"id": "p5-119", "part": 5, "text": "Employees seeking reimbursement for travel expenses must attach ___ receipts to the online claim form.", "choices": ["itemized", "itemize", "itemizing", "itemization"], "answer": 0, "skill": "vocabulary", "focus": "adjective modifier", "difficulty": "hard"}, {"id": "p5-120", "part": 5, "text": "The internship program offers university students hands-on experience ___ directly with senior engineers.", "choices": ["work", "worked", "working", "works"], "answer": 2, "skill": "grammar", "focus": "sentence structure", "difficulty": "hard"}, {"id": "p7-69", "part": 7, "passageId": "p7_coworking", "text": "What will be unavailable on the morning of September 14?", "choices": ["Wired Ethernet connections in private offices", "Access to the third-floor reading lounge", "The main wireless Internet network", "Reservations on the member portal"], "answer": 2, "skill": "reading", "focus": "detail", "difficulty": "medium"}, {"id": "p7-70", "part": 7, "passageId": "p7_coworking", "text": "According to the first e-mail, what is true about the private call booths?", "choices": ["They are located only on the fourth floor.", "They can be reserved free of charge through the portal.", "They require a private office membership.", "They must be booked at least one week ahead."], "answer": 1, "skill": "reading", "focus": "detail", "difficulty": "medium"}, {"id": "p7-71", "part": 7, "passageId": "p7_coworking", "text": "Why does Mr. Sato want to use a fourth-floor private office on September 14?", "choices": ["He needs a quiet place to read documents.", "He wants to host an in-person workshop.", "He needs a wired Internet connection for a presentation.", "He plans to upgrade his membership permanently."], "answer": 2, "skill": "reading", "focus": "detail", "difficulty": "medium"}]);
Object.assign(QUESTION_TRANSLATIONS, {"p5-91": {"text": "すべての経費報告書が金曜日の午後までに___提出されるよう確認してください。", "choices": ["迅速な", "迅速さ", "迅速に", "促された"]}, "p5-92": {"text": "北部地域の大雪___、午前の配達はすべて予定通りに到着しました。", "choices": ["〜にもかかわらず（接続詞）", "〜にもかかわらず（前置詞）", "一方で", "たとえ〜でも"]}, "p5-93": {"text": "四半期アンケート結果の詳細な要約が社内ポータルにアップロード___ました。", "choices": ["have（複数）", "has（単数）", "are", "were"]}, "p5-94": {"text": "業務運営チームは新しい在庫システムを___するため、外部ベンダーと緊密に連携しています。", "choices": ["導入・実施する", "遵守する", "居住する", "出発する"]}, "p5-95": {"text": "都心の本社を設計した建築家___、会議での講演に招かれました。", "choices": ["which（物）", "whose（所有格）", "who（人・主格）", "whom（人・目的格）"]}, "p5-96": {"text": "来週火曜日に地域統括部長が到着するころには、改装チームはロビーを___いるでしょう。", "choices": ["終える", "終えた", "終えているだろう", "終えたところだ"]}, "p5-97": {"text": "当社のカスタマーサポート窓口は、技術的な問題を抱える顧客に___支援を提供しています。", "choices": ["頼る", "確実に", "信頼性", "信頼できる"]}, "p5-98": {"text": "製品が認定技術者のみによって保守される___、保証は有効のまま維持されます。", "choices": ["〜という条件で", "〜にもかかわらず", "〜に先立って", "〜のせいで"]}, "p5-99": {"text": "最初の予算見積もりが楽観的すぎたため、委員会はより___予測を求めました。", "choices": ["空いている", "現実的な", "頻繁な", "壊れやすい"]}, "p5-100": {"text": "高橋氏は国内全支店の年次コンプライアンス監査を___する責任を負っています。", "choices": ["監督する（原形）", "監督された（過去分詞）", "監督すること（動名詞）", "監督（名詞）"]}, "p5-101": {"text": "マーケティング部長は、若い消費者により___訴求するよう代理店にパンフレットの改訂を求めました。", "choices": ["直接的な", "方向", "直接的に", "向けられた"]}, "p5-102": {"text": "すべての訪問者は、研究施設内にいる___仮のセキュリティバッジを提示しなければなりません。", "choices": ["〜の間（前置詞）", "〜の間（接続詞）", "〜まで", "〜の至る所で"]}, "p5-103": {"text": "支店長も地域統括者たちも、突然の方針改定について通知を___いませんでした。", "choices": ["was（単数）", "were（複数）", "has", "is"]}, "p5-104": {"text": "新しく設置された太陽光パネルのおかげで、倉庫は___光熱費を大幅に削減しました。", "choices": ["月", "毎月の", "数ヶ月", "月の"]}, "p5-105": {"text": "優先搭乗券をお持ちの乗客は、一般搭乗に先立って航空機に___する資格があります。", "choices": ["搭乗する（原形）", "搭乗すること", "搭乗した", "搭乗する（三単現）"]}, "p5-106": {"text": "日常業務への___を最小限に抑えるため、ソフトウェア更新は段階的に展開されます。", "choices": ["混乱させる", "混乱を招く", "支障・混乱", "混乱した"]}, "p5-107": {"text": "セミナー日程について___情報が必要な場合は、事務局までご連絡ください。", "choices": ["遠い", "さらなる・追加の", "最も遠い", "より遠い（距離）"]}, "p5-108": {"text": "経理部は当初の予定より2日___四半期監査を完了しました。", "choices": ["早く", "より早く", "最も早く", "早さ"]}, "p5-109": {"text": "パテル氏は、質疑応答の時間を確保するために基調講演を___することを勧めました。", "choices": ["短縮する", "短縮すること（不定詞）", "短縮すること（動名詞）", "短縮された"]}, "p5-110": {"text": "取締役会は独立した財務評価を確認した後、合併案を___承認しました。", "choices": ["満場一致の", "満場一致で", "満場一致", "一致"]}, "p5-111": {"text": "購入から30日以内に家電をオンライン登録した顧客には、___保証が付与されます。", "choices": ["延長する", "延長している", "延長された", "延長（名詞）"]}, "p5-112": {"text": "限定版ヘッドホンへの高い需要を___、メーカーは増産を決定しました。", "choices": ["〜を考慮すると", "〜しない限り", "〜にもかかわらず", "〜する時はいつでも"]}, "p5-113": {"text": "新しい物流拠点は、国際空港と主要高速道路の両方の近くに戦略的に___しています。", "choices": ["位置する（原形）", "場所", "位置している（過去分詞）", "探している"]}, "p5-114": {"text": "各部門長は会計四半期末___人員計画を提出することが求められています。", "choices": ["〜より前に", "〜に加えて", "〜に関係なく", "〜の代わりに"]}, "p5-115": {"text": "そのホテルチェーンは来春、無料の空港送迎を含める形で会員制度を___する計画です。", "choices": ["拡大・拡充する", "上回る", "期限が切れる", "弁解する"]}, "p5-116": {"text": "会議室が満室だったため、チームは___週次ブリーフィングをラウンジで行いました。", "choices": ["彼らは", "彼らを", "彼らの", "彼らのもの"]}, "p5-117": {"text": "もしサプライヤーが部品不足をもっと早く___していれば、代替調達先を確保できたでしょう。", "choices": ["報告する", "報告した（過去分詞）", "報告している", "報告する（三単現）"]}, "p5-118": {"text": "市街地の博物館は構造補修のため、追って通知がある___閉館のままとなります。", "choices": ["〜までに", "〜まで（継続）", "〜以内に", "〜以来"]}, "p5-119": {"text": "出張費の精算を求める従業員は、オンライン申請書に___領収書を添付しなければなりません。", "choices": ["明細付きの", "明細を書く", "明細を書いている", "明細化"]}, "p5-120": {"text": "そのインターンシップは大学生に、上級エンジニアと直接___実践的な経験を提供します。", "choices": ["働く（原形）", "働いた", "働くこと（現在分詞/動名詞）", "働く（三単現）"]}, "p7-69": {"text": "9月14日の午前中に利用できなくなるものは何ですか？", "choices": ["個室オフィスの有線Ethernet接続", "3階リーディングラウンジへの立ち入り", "メインの無線インターネット回線", "会員ポータルでの予約"]}, "p7-70": {"text": "1通目のメールによると、個別通話ブースについて正しいのはどれですか？", "choices": ["4階にのみ設置されている。", "ポータル経由で無料で予約できる。", "個室オフィス会員であることが必要。", "少なくとも1週間前に予約が必要。"]}, "p7-71": {"text": "佐藤氏が9月14日に4階の個室オフィスを使いたい理由は何ですか？", "choices": ["書類を読む静かな場所が必要だから。", "対面ワークショップを開催したいから。", "プレゼンのために有線インターネット接続が必要だから。", "会員プランを恒久的にアップグレードする予定だから。"]}});
Object.assign(QUESTION_EXPLANATIONS, {"p5-91": "受動態 are submitted（提出される）を修飾する副詞 promptly（迅速に）が正解。prompt は形容詞/動詞、promptness は名詞。", "p5-92": "直後が the heavy snowfall in the northern region という名詞句なので前置詞の Despite が正解。Although / Whereas / Even though は接続詞のため後ろに S+V が必要。", "p5-93": "主語の核は単数名詞 A detailed summary なので単数形の has が正解。直前の複数名詞 results に釣られて have を選ぶのが典型的なワナ。", "p5-94": "目的語 the new inventory system（新しい在庫システム）と自然に結びつく他動詞 implement（導入・実施する）が正解。comply は自動詞で with が必要。", "p5-95": "先行詞が人（The architect）で、空欄の直後に動詞 designed が続く主格なので who が正解。whom は目的格、whose は直後に名詞が必要。", "p5-96": "By the time + 現在形（未来の時点）と組み合わせて「その時までに完了している」を表す未来完了形 will have finished が正解。", "p5-97": "名詞 assistance（支援）を前から修飾する形容詞 reliable（信頼できる）が正解。rely は動詞、reliably は副詞、reliability は名詞。", "p5-98": "後ろに the product is serviced... という節（S+V）が続くため、条件を表す接続詞 provided that（〜という条件で）が正解。他の3つはすべて前置詞句。", "p5-99": "前文の too optimistic（楽観的すぎる）と対比して、より「現実的な」予測を意味する realistic が正解。", "p5-100": "前置詞 for の後ろで目的語 the annual compliance audit を取れる動名詞 overseeing が正解。名詞の oversight は後ろに直接目的語を取れない（of が必要）。", "p5-101": "動詞 appeals を修飾する副詞 directly が正解。direct は形容詞/動詞、direction は名詞。", "p5-102": "後ろに they are inside...（S+V）という節が続くため、接続詞 while が正解。during と throughout は前置詞。", "p5-103": "Neither A nor B が主語のとき、動詞は近い方の B（複数形 the regional supervisors）に一致させるため were が正解。", "p5-104": "名詞 utility costs（光熱費）を前から修飾する形容詞 monthly（毎月の）が正解。", "p5-105": "be eligible to + 動詞の原形（〜する資格がある）の形を作る board が正解。", "p5-106": "限定詞 any の後ろで minimize の目的語となる名詞 disruption（支障・中断）が正解。", "p5-107": "「さらなる・追加の（情報）」は比喩的程度を表す further（further information）が定型。farther は主に物理的距離。", "p5-108": "直後に比較の than があるため比較級 earlier が正解。", "p5-109": "動詞 recommend は動名詞（-ing）を目的語にとるため shortening が正解。recommend to do は不可。", "p5-110": "動詞 approved を修飾する副詞 unanimously（満場一致で）が正解。", "p5-111": "名詞 warranty（保証）を修飾する過去分詞由来の形容詞 extended（延長された）が正解。extended warranty は定番コロケーション。", "p5-112": "直後が名詞句 the high demand... なので前置詞的に使える Given（〜を考慮すると）が正解。他の3つは接続詞。", "p5-113": "be located near 〜（〜の近くに位置している）の定型表現を作る located が正解。", "p5-114": "締め切りを表す「〜より前に」は prior to（= before）が正解。", "p5-115": "loyalty program（会員制度）を特典追加で「拡充する」意味に合う他動詞 expand が正解。", "p5-116": "名詞句 weekly briefing を前から修飾する所有格 their が正解。", "p5-117": "仮定法過去完了の if 省略倒置（Had + S + 過去分詞 = If the supplier had reported...）を作る reported が正解。", "p5-118": "until further notice（追って通知があるまで）はTOEIC最頻出の定型表現。状態継続 remain closed とも一致。", "p5-119": "itemized receipts（明細付き領収書）はビジネス・経費精算文脈での定番表現。", "p5-120": "experience (in) working with 〜（〜と一緒に働く経験）の形で experience を説明する working が正解。", "p7-69": "1通目に During this window, the main Wi-Fi network will be unavailable と明記されている。有線Ethernetポートは利用可能。", "p7-70": "1通目末尾に reserve them at no extra charge via the member portal up to 48 hours in advance とあり、「追加料金なし（free of charge）」の言い換えが正解。", "p7-71": "2通目で9月14日9:30のクライアント向けプレゼンがあり、工事中でも使えるEthernetケーブルを利用したいと述べている。"});

const ALL_QUESTION_BANK = [...QUESTION_BANK, ...LISTENING_BANK];

/* Graphic-information questions. Kept as structured HTML data so the table
   remains sharp and accessible on both mobile and desktop. */
const LISTENING_GRAPHICS = {
  'lx-p3-set05': {
    title: 'Harbour Storage — Monthly Rates',
    headers: ['Unit', 'Monthly rate'],
    rows: [['Compact', '$90'], ['Standard', '$150'], ['Large', '$190'], ['Premium', '$230']],
    note: 'Rates are for one month.'
  },
  'lx-p4-set04': {
    title: 'Westbridge Technology Exchange — Afternoon Programme',
    headers: ['Time', 'Session', 'Room'],
    rows: [
      ['1:00 P.M.', 'Digital Payments', 'Oak Room'],
      ['2:00 P.M.', 'Practical Data Security', 'Maple Room'],
      ['3:00 P.M.', 'Accessible Design', 'Cedar Room'],
      ['4:00 P.M.', 'Cloud Storage Basics', 'Pine Room']
    ],
    note: "Printed programme — issued before today's announcements."
  }
};

/* Bind each graphic to the exact question that requires it.  Using the
   question ID avoids hiding the graphic when wording or audio metadata is
   changed while expanding the listening pool. */
const LISTENING_GRAPHIC_QUESTION_IDS = {
  'l3-14': 'lx-p3-set05',
  'l4-11': 'lx-p4-set04'
};


const BOOK_CATALOG = {
  official12: {
    code:'公式', focus:'総合・本番演習', level:'全レベル',
    title:'公式TOEIC Listening & Reading 問題集 12', publisher:'国際ビジネスコミュニケーション協会', isbn:'978-4-906033-77-5',
    description:'ETS制作のテスト2回分で、問題形式・難易度・時間配分を本番に近い形で確認できる公式問題集です。',
    fit:'基礎を学び終え、本番形式で現在地を測りたい人。試験前の総仕上げにも向きます。',
    image:'', url:'https://amzn.to/4y4bCFU', affiliateEnabled:true
  },
  officialVocab: {
    code:'単語', focus:'語彙', level:'全レベル',
    title:'公式TOEIC Listening & Reading 英単語', publisher:'国際ビジネスコミュニケーション協会', isbn:'',
    description:'過去のテストから厳選された1,800語を、TOEICの文脈とともに学ぶ公式単語教材です。',
    fit:'語彙不足がPart 5・7だけでなく、Listeningの理解にも影響している人。',
    image:'', url:'https://link.amazon/B0gKd6kPA', affiliateEnabled:true
  },
  superIntro: {
    code:'入門', focus:'英語基礎・全Part', level:'〜500点',
    title:'中学英語からやり直す TOEIC® L＆Rテスト 超入門', publisher:'アスク出版', isbn:'978-4-86639-553-1',
    description:'品詞・文型・be動詞などの基礎から全Partの練習、50問模試までを一冊で進められる入門書です。',
    fit:'英語の基礎に不安がある人、初受験でまず500点前後を目標にする人。',
    image:'', url:'https://link.amazon/B0g8jeB4l', affiliateEnabled:true
  },
  grammar1000: {
    code:'P5', focus:'Part 5・文法', level:'600点〜',
    title:'TOEIC® L＆Rテスト 文法問題 でる1000問', publisher:'アスク出版', isbn:'978-4-86639-083-3',
    description:'Part 5の文法事項を1,049問で反復し、正解だけでなく誤答の理由まで確認できる問題集です。',
    fit:'文法の基礎はあるが、Part 5の正確さや解答速度が安定しない人。',
    image:'', url:'https://link.amazon/B0h3FGTIa', affiliateEnabled:true
  },
  part2_600: {
    code:'P2', focus:'Part 2・応答', level:'500点〜',
    title:'TOEIC® L＆Rテスト Part2 応答問題 でる600問', publisher:'アスク出版', isbn:'978-4-86639-142-7',
    description:'疑問詞、間接応答、難化傾向を含むPart 2を大量演習し、不正解選択肢まで分析できる教材です。',
    fit:'質問は聞こえるのに自然な返答を選べない人、間接応答で迷う人。',
    image:'', url:'https://link.amazon/B09STmRVa', affiliateEnabled:true
  },
  alcPart34: {
    code:'P3/4', focus:'Part 3・4', level:'600点〜',
    title:'TOEIC® L&Rテスト 究極のゼミ Part3&4', publisher:'アルク', isbn:'978-4-7574-2867-6',
    description:'会話・トークを問題タイプ別に学び、意図問題や図表問題まで段階的に対策する教材です。',
    fit:'設問先読み、話の目的、次の行動、話者の意図を同時に追う力を伸ばしたい人。',
    image:'', url:'https://link.amazon/B0cemLkB0', affiliateEnabled:true
  },
  alcPart56: {
    code:'P5/6', focus:'Part 5・6', level:'550点〜',
    title:'TOEIC® L&Rテスト 究極のゼミ Part5&6', publisher:'アルク', isbn:'978-4-7574-2870-6',
    description:'品詞・動詞・接続詞からPart 6の文脈問題までをタイプ別に学び、20分で解く力を鍛える教材です。',
    fit:'文法知識を得点に変えたい人、Part 5・6で時間を使いすぎる人。',
    image:'', url:'https://link.amazon/B0eLScRwf', affiliateEnabled:true
  },
  alcPart7: {
    code:'P7', focus:'Part 7・読解', level:'600点〜',
    title:'TOEIC® L&Rテスト 究極のゼミ Part7', publisher:'アルク', isbn:'978-4-7574-2878-2',
    description:'設問タイプ別の解法、パラフレーズ、不正解の見抜き方を体系的に学べる読解教材です。',
    fit:'根拠の場所が見つからない人、推論・意図・複数文書問題に弱い人。',
    image:'', url:'https://link.amazon/B07fs8O3a', affiliateEnabled:true
  },
  trainingListening: {
    code:'L演習', focus:'Listening演習', level:'350〜800点',
    title:'公式TOEIC Listening & Reading トレーニング 2 リスニング編', publisher:'国際ビジネスコミュニケーション協会', isbn:'',
    description:'380問の公式問題を使い、Partごとの聞き取りと復習を量で積み上げるトレーニング教材です。',
    fit:'解き方を学んだあと、公式音声で正答率と集中力を安定させたい人。',
    image:'', url:'https://link.amazon/B024DNVcV', affiliateEnabled:true
  },
  trainingReading: {
    code:'R演習', focus:'Reading演習', level:'350〜800点',
    title:'公式TOEIC Listening & Reading トレーニング 2 リーディング編', publisher:'国際ビジネスコミュニケーション協会', isbn:'',
    description:'377問の公式問題を使い、Part 5〜7を短い単位で繰り返せるトレーニング教材です。',
    fit:'知識を覚えるだけでなく、公式問題で処理速度と得点の再現性を上げたい人。',
    image:'', url:'https://link.amazon/B05PqBnJA', affiliateEnabled:true
  }
};

const READING_BOOK_MAP = {
  beginner:     { grammar:'superIntro', vocabulary:'officialVocab', structure:'superIntro', reading:'trainingReading' },
  intermediate: { grammar:'alcPart56', vocabulary:'officialVocab', structure:'alcPart56', reading:'alcPart7' },
  advanced:     { grammar:'grammar1000', vocabulary:'officialVocab', structure:'alcPart56', reading:'alcPart7' },
  elite:        { grammar:'grammar1000', vocabulary:'officialVocab', structure:'official12', reading:'official12' }
};
const LISTENING_BOOK_MAP = {
  beginner:     { photo:'superIntro', response:'part2_600', conversation:'trainingListening', talk:'trainingListening' },
  intermediate: { photo:'trainingListening', response:'part2_600', conversation:'alcPart34', talk:'alcPart34' },
  advanced:     { photo:'trainingListening', response:'part2_600', conversation:'alcPart34', talk:'alcPart34' },
  elite:        { photo:'official12', response:'official12', conversation:'official12', talk:'official12' }
};


const TOEIC_ARTICLES = [
  {
    slug:'diagnosis-to-study-plan', kicker:'START GUIDE', minutes:5,
    title:'TOEIC診断を「受けっぱなし」にしない復習法',
    summary:'予測スコアより大切なのは、間違いを次の学習行動に変えること。LexSophiaの結果から一週間の復習計画を作ります。',
    sections:[
      {title:'最初に見るのはスコアではなく弱点', paragraphs:['診断直後は予測スコアに目が向きますが、伸びしろを示すのは「優先して対策」の欄です。正答率が低い分野を一つだけ選び、次の七日間の主題にします。全部を同時に直そうとすると、復習が薄くなります。'], bullets:['弱点を一つ選ぶ','間違えた問題の根拠を言葉にする','七日後に同じ形式を解き直す']},
      {title:'間違いを三種類に分ける', paragraphs:['誤答は「知識不足」「読み聞き違い」「時間不足」に分けます。知識不足なら教材でルールを確認し、読み聞き違いなら根拠箇所を精読・再生し、時間不足なら制限時間を付けて解き直します。原因が違えば、必要な練習も違います。']},
      {title:'一週間後に再診断する', paragraphs:['同じ問題を覚えることが目的ではありません。弱点モードで復習したあと、別の診断セットで同じ分野の正答率が上がったかを確認します。スコアが横ばいでも、解答時間が短くなっていれば前進です。']}
    ], takeaway:'今日の診断で最も弱かった分野を一つだけ決め、誤答を「知識・処理・時間」に分類する。'
  },
  {
    slug:'part1-photo-description', kicker:'LISTENING · PART 1', minutes:6,
    title:'Part 1は「動作」と「状態」を分けて聞く',
    summary:'写真描写問題で頻出する現在進行形・受け身・位置表現を、写真を見る順番と一緒に整理します。',
    sections:[
      {title:'写真は人物、物、場所の順に確認', paragraphs:['音声が始まる前に、人物が何をしているか、目立つ物がどこにあるか、場所が何かを素早く確認します。細部を全部説明しようとせず、正解になりそうな事実を三つほど英語で予測します。'], bullets:['人物の動作','物の配置と向き','屋内・屋外などの場所']},
      {title:'進行中の動作と完了した状態', paragraphs:['is putting は「今置いている途中」、has been placed は「置かれた状態」です。写真に動作の途中が見えないのに進行形を選ぶと誤答になりやすいため、手や体の動きまで確認します。']},
      {title:'聞こえた単語だけで選ばない', paragraphs:['写真にある名詞が聞こえても、動詞や前置詞が写真と違えば不正解です。near、beside、across from、leaning against など、位置関係を一枚の写真で言い換える練習が効果的です。']}
    ], takeaway:'身近な写真を一枚選び、「人物の動作・物の状態・位置」を英語で一文ずつ作る。'
  },
  {
    slug:'part2-indirect-responses', kicker:'LISTENING · PART 2', minutes:6,
    title:'Part 2の間接応答を迷わず選ぶ3段階',
    summary:'質問と同じ単語を含む選択肢に飛びつかず、会話として自然な返答を見抜く手順を解説します。',
    sections:[
      {title:'最初の一語で質問の種類を決める', paragraphs:['Whereなら場所、Whenなら時、Whyなら理由が基本です。ただし本番では「まだ決まっていません」「担当者に聞いてください」のような間接応答も正解になります。疑問詞を聞き取ったら、必要な情報の種類を意識します。']},
      {title:'文法より会話の目的を見る', paragraphs:['Could you は能力の確認ではなく依頼、Why don’t we は理由の質問ではなく提案です。表面の疑問文だけでなく、相手が依頼・提案・確認のどれをしているかを判断します。'], bullets:['依頼には承諾・断り・代案','提案には賛成・都合・別案','確認には肯定だけでなく訂正もあり得る']},
      {title:'同じ音・同じ単語を疑う', paragraphs:['question に station、copy に coffee のような似た音を置く誤答や、質問文と同じ名詞を繰り返すだけの誤答があります。単語の一致ではなく、前後をつなげて自然な会話になるかで選びます。']}
    ], takeaway:'Part 2を10問解き、各質問の会話目的を「情報・依頼・提案・確認」の四つで記録する。'
  },
  {
    slug:'part3-three-question-preview', kicker:'LISTENING · PART 3', minutes:7,
    title:'Part 3は3問を先に見て、聞く場所を予約する',
    summary:'一つの会話に三問あるPart 3で、設問と選択肢を先読みし、音声中の情報を取りこぼさない方法です。',
    sections:[
      {title:'三問は別々ではなく一つの流れ', paragraphs:['多くのセットは、冒頭で場所や目的、中盤で問題や詳細、終盤で次の行動が問われます。三問を先に見ると、会話のどこで集中すべきか予測できます。']},
      {title:'選択肢は名詞と動詞だけ拾う', paragraphs:['先読みで全文を日本語に訳す時間はありません。予約変更、書類提出、会議延期など、選択肢の核になる名詞と動詞に印を付けます。四択の違いが分かれば十分です。'], bullets:['誰・どこ・なぜを問う設問','問題や変更点を問う設問','次の行動を問う設問']},
      {title:'一問を逃しても追いかけない', paragraphs:['聞き逃した箇所を頭の中で再生していると、次の答えまで失います。根拠を逃したら仮選択して、すぐ次の設問のキーワードに注意を戻します。三問中二問を確実に取る判断も重要です。']}
    ], takeaway:'Part 3を一セット選び、再生前の8秒で三問の「聞くポイント」を一語ずつ書く。'
  },
  {
    slug:'part4-structure-listening', kicker:'LISTENING · PART 4', minutes:7,
    title:'Part 4は話の型を知ると聞きやすくなる',
    summary:'アナウンス、留守番電話、広告、スピーチなど、説明文の型から目的と重要情報を予測します。',
    sections:[
      {title:'冒頭二文で状況を決める', paragraphs:['Part 4は会話相手がいないため、話者が誰に何を伝えているかを冒頭から取る必要があります。Thank you for calling、Attention passengers、I’m pleased to introduce などの定型句が場面の手掛かりです。']},
      {title:'数字の前後をセットで聞く', paragraphs:['時刻、日付、価格、階数は単独では答えになりません。変更前か変更後か、通常料金か割引料金かを判断するため、数字の直前の by、until、instead of と直後の名詞まで聞きます。']},
      {title:'終盤の行動指示を待つ', paragraphs:['最後には visit、contact、bring、submit など次の行動が置かれやすい傾向があります。冒頭で一問落としても、終盤の案内に集中すれば次の行動問題を取れます。']}
    ], takeaway:'Part 4の音声を一つ選び、「話者・聞き手・目的・次の行動」の四項目だけメモする。'
  },
  {
    slug:'part5-parts-of-speech', kicker:'READING · PART 5', minutes:6,
    title:'Part 5の品詞問題は空欄の前後だけで解ける',
    summary:'意味を全部訳す前に、文の骨格から名詞・動詞・形容詞・副詞を特定する方法を整理します。',
    sections:[
      {title:'選択肢の語尾を先に見る', paragraphs:['success、successful、successfully、succeed のように語根が同じなら品詞問題です。文全体を訳す前に、空欄に必要な役割を判断します。']},
      {title:'修飾される語を探す', paragraphs:['冠詞の後は名詞、名詞の前は形容詞、動詞や形容詞を修飾する位置は副詞が基本です。ただし空欄の後に名詞があるだけで形容詞と決めず、その名詞がすでに別の語で修飾されていないか確認します。'], bullets:['a / the + 形容詞 + 名詞','be動詞 + 形容詞','一般動詞 + 目的語','副詞は文全体を修飾することもある']},
      {title:'30秒を超えたら骨格に戻る', paragraphs:['迷ったら主語と動詞に線を引き、空欄が必須要素か修飾語かを見直します。知識ではなく構造を見失っている場合、全文和訳を続けても正解に近づきません。']}
    ], takeaway:'品詞問題を10問選び、正解語ではなく「空欄に必要な品詞とその根拠」を声に出す。'
  },
  {
    slug:'connectors-and-prepositions', kicker:'READING · PART 5', minutes:7,
    title:'接続詞・前置詞・副詞を「後ろの形」で見分ける',
    summary:'although、despite、because、because of、howeverなど、意味が近い語を文構造から判別します。',
    sections:[
      {title:'意味より先に後ろを見る', paragraphs:['接続詞の後ろには主語＋動詞、前置詞の後ろには名詞・代名詞・動名詞が来ます。although the weather was bad と despite the bad weather の違いは、まず形で判断できます。']},
      {title:'副詞は二つの文を直接つながない', paragraphs:['however や therefore は接続副詞であり、カンマ一つだけで二つの独立節をつなげません。ピリオドやセミコロンなど、前後の句読点も選択肢の判断材料です。'], bullets:['although / because / unless + 文','despite / because of + 名詞','however / therefore は文全体の関係を示す']},
      {title:'時を表す語は時間軸を書く', paragraphs:['until は継続の終点、by は期限、since は開始点、while は同時進行を表します。日本語訳だけで迷うときは、短い時間軸を書いて動作が続く範囲を確認します。']}
    ], takeaway:'間違えた接続語を「後ろに文／名詞／独立して使う」の三列に分類してノートに残す。'
  },
  {
    slug:'part6-context-and-sentence-insertion', kicker:'READING · PART 6', minutes:7,
    title:'Part 6は空欄の前後二文をつなげて考える',
    summary:'時制・代名詞・接続副詞・文挿入問題を、文書全体の流れから解くためのチェック項目です。',
    sections:[
      {title:'文書の目的を最初に決める', paragraphs:['メールなら依頼・確認・案内、告知なら変更・募集・注意など、文書の目的を一言で決めます。目的が分かると、空欄に入る情報の方向が予測できます。']},
      {title:'代名詞と時制は前後をまたぐ', paragraphs:['this、they、such が何を指すかは前文にあります。時制も一文だけで決めず、すでに起きた変更、現在の状況、これからの予定のどこに空欄があるかを確認します。']},
      {title:'文挿入は指示語と話題の重なりを見る', paragraphs:['挿入文の this service、these changes などが指す内容を前文に探し、次の文がその説明や結果になっているかを確認します。単に同じ単語がある位置ではなく、論理の橋になる位置を選びます。']}
    ], takeaway:'Part 6を一題解き、各段落の役割を「目的・詳細・行動」の三語で余白に書く。'
  },
  {
    slug:'part7-evidence-and-paraphrase', kicker:'READING · PART 7', minutes:8,
    title:'Part 7は「根拠」と「言い換え」を一組で残す',
    summary:'長文を全部覚えようとせず、設問から根拠箇所を探し、選択肢との言い換えを見抜く方法です。',
    sections:[
      {title:'設問の固有名詞と目的語を手掛かりにする', paragraphs:['人名、会社名、日付、商品名は本文で見つけやすい検索語です。設問を読み、探す語を一つ決めてから本文へ戻ると、最初から読み直す回数を減らせます。']},
      {title:'正解は本文と同じ表現とは限らない', paragraphs:['postpone が move to a later date、complimentary が free of charge のように言い換えられます。復習では正解だけを丸暗記せず、本文の根拠表現と選択肢の表現を矢印で結びます。']},
      {title:'推論問題も根拠は本文にある', paragraphs:['推論は想像ではありません。二つ以上の記述を組み合わせて必ず言えることを選びます。自分の常識を足さず、「本文のどの二箇所から言えるか」を説明できる選択肢に絞ります。']}
    ], takeaway:'Part 7の誤答一問について、本文の根拠と正解選択肢の言い換えを一組だけ記録する。'
  },
  {
    slug:'thirty-day-toeic-plan', kicker:'STUDY PLAN', minutes:8,
    title:'30日で診断から本番までつなぐ学習計画',
    summary:'教材を増やしすぎず、弱点補強・Part別演習・模試・復習を四週間に配置する現実的なプランです。',
    sections:[
      {title:'1週目：現在地と基礎を固める', paragraphs:['LexSophiaでListening・Readingを診断し、各セクションの弱点を一つずつ決めます。平日は弱点教材を30分、週末は間違えた問題を根拠まで説明できる状態にします。']},
      {title:'2〜3週目：Part別演習を時間付きで行う', paragraphs:['知識確認だけで終わらず、Part 2なら10問、Part 5なら15問など短いセットに時間を付けます。正答率と一問あたりの時間を記録し、同じ形式を三日後に解き直します。'], bullets:['平日：弱点演習30〜45分','週末：まとまったPart演習60分','毎回：誤答理由を一行で記録']},
      {title:'4週目：公式問題で本番を再現する', paragraphs:['新しい教材には手を広げず、公式問題集を本番の時間で解きます。翌日は全問をやり直すのではなく、誤答と迷った正解だけを復習します。前日は軽い確認に留め、睡眠を優先します。']}
    ], takeaway:'カレンダーに診断日、弱点演習日、模試日、復習日を先に入れ、教材は各弱点一冊に絞る。'
  }
];

/* =====================================================================
   STUDY MATERIAL RECOMMENDATION — 3. SELECTION LOGIC
   ---------------------------------------------------------------------
   Pure functions: they read the score and the weakest skill that
   analyze() already produced and return a material. No scoring, no
   statistics of their own.
   ===================================================================== */

/** Map a Reading score (5-495) onto a band key. */

/* LexSophia Curated 100 TOEIC Vocabulary */
const LEXICON_VOCAB = [
  {
    "id": "v001",
    "band": 500,
    "word": "confirm",
    "pos": "動",
    "meaning": "確認する・確定する",
    "phrase": "confirm a reservation",
    "phraseJa": "予約を確定する"
  },
  {
    "id": "v002",
    "band": 500,
    "word": "submit",
    "pos": "動",
    "meaning": "提出する",
    "phrase": "submit an application form",
    "phraseJa": "申込書を提出する"
  },
  {
    "id": "v003",
    "band": 500,
    "word": "schedule",
    "pos": "名/動",
    "meaning": "予定・予定を組む",
    "phrase": "ahead of schedule",
    "phraseJa": "予定より早く"
  },
  {
    "id": "v004",
    "band": 500,
    "word": "available",
    "pos": "形",
    "meaning": "利用できる・空いている",
    "phrase": "tickets are still available",
    "phraseJa": "チケットはまだ入手できる"
  },
  {
    "id": "v005",
    "band": 500,
    "word": "attend",
    "pos": "動",
    "meaning": "出席する・参加する",
    "phrase": "attend a training session",
    "phraseJa": "研修に参加する"
  },
  {
    "id": "v006",
    "band": 500,
    "word": "purchase",
    "pos": "動/名",
    "meaning": "購入する・購入品",
    "phrase": "proof of purchase",
    "phraseJa": "購入証明書（レシート）"
  },
  {
    "id": "v007",
    "band": 500,
    "word": "deliver",
    "pos": "動",
    "meaning": "配達する・（講演を）行う",
    "phrase": "deliver a keynote speech",
    "phraseJa": "基調講演を行う"
  },
  {
    "id": "v008",
    "band": 500,
    "word": "equipment",
    "pos": "名",
    "meaning": "機器・設備（不可算）",
    "phrase": "install new office equipment",
    "phraseJa": "新しい事務機器を設置する"
  },
  {
    "id": "v009",
    "band": 500,
    "word": "department",
    "pos": "名",
    "meaning": "部門・部署",
    "phrase": "the accounting department",
    "phraseJa": "経理部"
  },
  {
    "id": "v010",
    "band": 500,
    "word": "within",
    "pos": "前",
    "meaning": "〜以内に",
    "phrase": "within five business days",
    "phraseJa": "5営業日以内に"
  },
  {
    "id": "v011",
    "band": 500,
    "word": "provide",
    "pos": "動",
    "meaning": "提供する・支給する",
    "phrase": "provide protective gear",
    "phraseJa": "保護具を支給する"
  },
  {
    "id": "v012",
    "band": 500,
    "word": "increase",
    "pos": "動/名",
    "meaning": "増加する・引き上げ",
    "phrase": "a sharp increase in sales",
    "phraseJa": "売上の急増"
  },
  {
    "id": "v013",
    "band": 500,
    "word": "require",
    "pos": "動",
    "meaning": "必要とする・義務づける",
    "phrase": "require prior approval",
    "phraseJa": "事前承認を必要とする"
  },
  {
    "id": "v014",
    "band": 500,
    "word": "offer",
    "pos": "動/名",
    "meaning": "申し出る・特別割引",
    "phrase": "a special promotional offer",
    "phraseJa": "特別キャンペーン価格"
  },
  {
    "id": "v015",
    "band": 500,
    "word": "repair",
    "pos": "動/名",
    "meaning": "修理する・修繕",
    "phrase": "be under repair",
    "phraseJa": "修理中である"
  },
  {
    "id": "v016",
    "band": 500,
    "word": "customer",
    "pos": "名",
    "meaning": "顧客・買い物客",
    "phrase": "customer satisfaction survey",
    "phraseJa": "顧客満足度調査"
  },
  {
    "id": "v017",
    "band": 500,
    "word": "accept",
    "pos": "動",
    "meaning": "受け入れる・承認する",
    "phrase": "accept credit card payments",
    "phraseJa": "カード払いを受け付ける"
  },
  {
    "id": "v018",
    "band": 500,
    "word": "arrive",
    "pos": "動",
    "meaning": "到着する・届く",
    "phrase": "arrive at the venue early",
    "phraseJa": "会場に早く到着する"
  },
  {
    "id": "v019",
    "band": 500,
    "word": "charge",
    "pos": "名/動",
    "meaning": "料金・請求する・責任",
    "phrase": "free of charge",
    "phraseJa": "無料で"
  },
  {
    "id": "v020",
    "band": 500,
    "word": "contact",
    "pos": "動/名",
    "meaning": "連絡する・連絡先",
    "phrase": "contact technical support",
    "phraseJa": "技術サポートに連絡する"
  },
  {
    "id": "v021",
    "band": 500,
    "word": "expand",
    "pos": "動",
    "meaning": "拡大する・進出する",
    "phrase": "expand into overseas markets",
    "phraseJa": "海外市場へ進出する"
  },
  {
    "id": "v022",
    "band": 500,
    "word": "include",
    "pos": "動",
    "meaning": "含む・同封する",
    "phrase": "tax is included in the price",
    "phraseJa": "価格に税金が含まれている"
  },
  {
    "id": "v023",
    "band": 500,
    "word": "prepare",
    "pos": "動",
    "meaning": "準備する・作成する",
    "phrase": "prepare a cost estimate",
    "phraseJa": "見積書を作成する"
  },
  {
    "id": "v024",
    "band": 500,
    "word": "current",
    "pos": "形",
    "meaning": "現在の・現行の",
    "phrase": "update your current address",
    "phraseJa": "現住所を更新する"
  },
  {
    "id": "v025",
    "band": 500,
    "word": "notice",
    "pos": "名/動",
    "meaning": "告知・通知・気づく",
    "phrase": "until further notice",
    "phraseJa": "追って通知があるまで"
  },
  {
    "id": "v026",
    "band": 600,
    "word": "postpone",
    "pos": "動",
    "meaning": "延期する",
    "phrase": "postpone the meeting until Friday",
    "phraseJa": "会議を金曜まで延期する"
  },
  {
    "id": "v027",
    "band": 600,
    "word": "invoice",
    "pos": "名",
    "meaning": "請求書",
    "phrase": "issue an itemized invoice",
    "phraseJa": "明細付きの請求書を発行する"
  },
  {
    "id": "v028",
    "band": 600,
    "word": "complimentary",
    "pos": "形",
    "meaning": "無料の・優待の",
    "phrase": "complimentary light refreshments",
    "phraseJa": "無料の軽食・飲み物"
  },
  {
    "id": "v029",
    "band": 600,
    "word": "warranty",
    "pos": "名",
    "meaning": "保証・保証書",
    "phrase": "covered under a two-year warranty",
    "phraseJa": "2年間保証の対象である"
  },
  {
    "id": "v030",
    "band": 600,
    "word": "applicant",
    "pos": "名",
    "meaning": "応募者・申請者",
    "phrase": "qualified job applicants",
    "phraseJa": "適格な求人応募者"
  },
  {
    "id": "v031",
    "band": 600,
    "word": "prior",
    "pos": "形",
    "meaning": "前の・事前の",
    "phrase": "prior to departure",
    "phraseJa": "出発前に"
  },
  {
    "id": "v032",
    "band": 600,
    "word": "replace",
    "pos": "動",
    "meaning": "交換する・後任になる",
    "phrase": "replace worn-out parts",
    "phraseJa": "摩耗した部品を交換する"
  },
  {
    "id": "v033",
    "band": 600,
    "word": "approximately",
    "pos": "副",
    "meaning": "おおよそ・約",
    "phrase": "take approximately twenty minutes",
    "phraseJa": "約20分かかる"
  },
  {
    "id": "v034",
    "band": 600,
    "word": "inspect",
    "pos": "動",
    "meaning": "点検する・検査する",
    "phrase": "inspect the facility regularly",
    "phraseJa": "施設を定期点検する"
  },
  {
    "id": "v035",
    "band": 600,
    "word": "inquiry",
    "pos": "名",
    "meaning": "問い合わせ・調査",
    "phrase": "respond to customer inquiries",
    "phraseJa": "顧客の問い合わせに回答する"
  },
  {
    "id": "v036",
    "band": 600,
    "word": "annual",
    "pos": "形",
    "meaning": "年に一度の・年間の",
    "phrase": "the annual shareholders meeting",
    "phraseJa": "年次株主総会"
  },
  {
    "id": "v037",
    "band": 600,
    "word": "budget",
    "pos": "名/動",
    "meaning": "予算・予算を組む",
    "phrase": "stay within the allocated budget",
    "phraseJa": "割り当て予算内に収める"
  },
  {
    "id": "v038",
    "band": 600,
    "word": "despite",
    "pos": "前",
    "meaning": "〜にもかかわらず",
    "phrase": "despite the inclement weather",
    "phraseJa": "悪天候にもかかわらず"
  },
  {
    "id": "v039",
    "band": 600,
    "word": "additional",
    "pos": "形",
    "meaning": "追加の",
    "phrase": "at no additional cost",
    "phraseJa": "追加費用なしで"
  },
  {
    "id": "v040",
    "band": 600,
    "word": "register",
    "pos": "動",
    "meaning": "登録する・申し込む",
    "phrase": "register for the workshop online",
    "phraseJa": "講座にオンラインで申し込む"
  },
  {
    "id": "v041",
    "band": 600,
    "word": "temporary",
    "pos": "形",
    "meaning": "一時的な・仮の",
    "phrase": "a temporary parking permit",
    "phraseJa": "臨時駐車許可証"
  },
  {
    "id": "v042",
    "band": 600,
    "word": "approve",
    "pos": "動",
    "meaning": "承認する",
    "phrase": "approve the revised proposal",
    "phraseJa": "修正案を承認する"
  },
  {
    "id": "v043",
    "band": 600,
    "word": "efficiently",
    "pos": "副",
    "meaning": "効率よく",
    "phrase": "process orders more efficiently",
    "phraseJa": "注文をより効率的に処理する"
  },
  {
    "id": "v044",
    "band": 600,
    "word": "venue",
    "pos": "名",
    "meaning": "開催地・会場",
    "phrase": "change the conference venue",
    "phraseJa": "会議の会場を変更する"
  },
  {
    "id": "v045",
    "band": 600,
    "word": "expire",
    "pos": "動",
    "meaning": "有効期限が切れる",
    "phrase": "your membership will expire soon",
    "phraseJa": "会員資格がまもなく失効する"
  },
  {
    "id": "v046",
    "band": 600,
    "word": "refund",
    "pos": "名/動",
    "meaning": "返金・払い戻す",
    "phrase": "obtain a full refund",
    "phraseJa": "全額返金を受ける"
  },
  {
    "id": "v047",
    "band": 600,
    "word": "encourage",
    "pos": "動",
    "meaning": "奨励する・促す",
    "phrase": "employees are encouraged to carpool",
    "phraseJa": "社員に相乗りが推奨されている"
  },
  {
    "id": "v048",
    "band": 600,
    "word": "demonstrate",
    "pos": "動",
    "meaning": "実演する・実証する",
    "phrase": "demonstrate the new software",
    "phraseJa": "新ソフトを実演する"
  },
  {
    "id": "v049",
    "band": 600,
    "word": "valid",
    "pos": "形",
    "meaning": "有効な・妥当な",
    "phrase": "present a valid photo ID",
    "phraseJa": "有効な顔写真付き身分証を提示する"
  },
  {
    "id": "v050",
    "band": 600,
    "word": "notify",
    "pos": "動",
    "meaning": "（人に）通知する",
    "phrase": "notify tenants of the maintenance",
    "phraseJa": "入居者に点検作業を知らせる"
  },
  {
    "id": "v051",
    "band": 730,
    "word": "reimburse",
    "pos": "動",
    "meaning": "払い戻す・精算する",
    "phrase": "reimburse travel expenses",
    "phraseJa": "出張経費を精算する"
  },
  {
    "id": "v052",
    "band": 730,
    "word": "accommodate",
    "pos": "動",
    "meaning": "収容する・要望に応じる",
    "phrase": "accommodate up to 200 guests",
    "phraseJa": "最大200名を収容する"
  },
  {
    "id": "v053",
    "band": 730,
    "word": "mandatory",
    "pos": "形",
    "meaning": "義務の・必須の",
    "phrase": "attendance is mandatory for all staff",
    "phraseJa": "全スタッフの出席が必須である"
  },
  {
    "id": "v054",
    "band": 730,
    "word": "tentative",
    "pos": "形",
    "meaning": "仮の・暫定的な",
    "phrase": "a tentative event itinerary",
    "phraseJa": "イベントの仮日程表"
  },
  {
    "id": "v055",
    "band": 730,
    "word": "comply",
    "pos": "動",
    "meaning": "遵守する・従う",
    "phrase": "comply with safety regulations",
    "phraseJa": "安全規則を遵守する"
  },
  {
    "id": "v056",
    "band": 730,
    "word": "substantial",
    "pos": "形",
    "meaning": "かなりの・大幅な",
    "phrase": "a substantial reduction in waste",
    "phraseJa": "廃棄物の大幅な削減"
  },
  {
    "id": "v057",
    "band": 730,
    "word": "eligible",
    "pos": "形",
    "meaning": "資格がある・対象となる",
    "phrase": "be eligible for a promotion",
    "phraseJa": "昇進の対象資格がある"
  },
  {
    "id": "v058",
    "band": 730,
    "word": "renovate",
    "pos": "動",
    "meaning": "改装する・改修する",
    "phrase": "the lobby is being renovated",
    "phraseJa": "ロビーは現在改装中だ"
  },
  {
    "id": "v059",
    "band": 730,
    "word": "itinerary",
    "pos": "名",
    "meaning": "旅程表・訪問予定",
    "phrase": "distribute the updated itinerary",
    "phraseJa": "更新された旅程表を配る"
  },
  {
    "id": "v060",
    "band": 730,
    "word": "designate",
    "pos": "動",
    "meaning": "指定する・任命する",
    "phrase": "park only in designated spaces",
    "phraseJa": "指定された区画にのみ駐車する"
  },
  {
    "id": "v061",
    "band": 730,
    "word": "adjacent",
    "pos": "形",
    "meaning": "隣接した",
    "phrase": "adjacent to the main station",
    "phraseJa": "主要駅に隣接して"
  },
  {
    "id": "v062",
    "band": 730,
    "word": "implement",
    "pos": "動",
    "meaning": "導入する・実施する",
    "phrase": "implement a new billing system",
    "phraseJa": "新しい請求システムを導入する"
  },
  {
    "id": "v063",
    "band": 730,
    "word": "thoroughly",
    "pos": "副",
    "meaning": "徹底的に・十分に",
    "phrase": "review the contract thoroughly",
    "phraseJa": "契約書を徹底的に確認する"
  },
  {
    "id": "v064",
    "band": 730,
    "word": "merchandise",
    "pos": "名",
    "meaning": "商品・製品（不可算）",
    "phrase": "display seasonal merchandise",
    "phraseJa": "季節商品を陳列する"
  },
  {
    "id": "v065",
    "band": 730,
    "word": "relocate",
    "pos": "動",
    "meaning": "移転する・配置転換する",
    "phrase": "relocate headquarters downtown",
    "phraseJa": "本社を中心街へ移転する"
  },
  {
    "id": "v066",
    "band": 730,
    "word": "promptly",
    "pos": "副",
    "meaning": "迅速に・時刻通りに",
    "phrase": "begin promptly at nine o'clock",
    "phraseJa": "9時ちょうどに開始する"
  },
  {
    "id": "v067",
    "band": 730,
    "word": "authorize",
    "pos": "動",
    "meaning": "権限を与える・認可する",
    "phrase": "authorized personnel only",
    "phraseJa": "関係者以外立入禁止"
  },
  {
    "id": "v068",
    "band": 730,
    "word": "defective",
    "pos": "形",
    "meaning": "欠陥のある・不良の",
    "phrase": "return a defective appliance",
    "phraseJa": "不良家電を返品する"
  },
  {
    "id": "v069",
    "band": 730,
    "word": "exceed",
    "pos": "動",
    "meaning": "超える・上回る",
    "phrase": "exceed sales expectations",
    "phraseJa": "売上予想を上回る"
  },
  {
    "id": "v070",
    "band": 730,
    "word": "evaluate",
    "pos": "動",
    "meaning": "評価する・査定する",
    "phrase": "evaluate employee performance",
    "phraseJa": "社員の業績を評価する"
  },
  {
    "id": "v071",
    "band": 730,
    "word": "confidential",
    "pos": "形",
    "meaning": "機密の・社外秘の",
    "phrase": "keep client records confidential",
    "phraseJa": "顧客記録を機密に保つ"
  },
  {
    "id": "v072",
    "band": 730,
    "word": "negotiate",
    "pos": "動",
    "meaning": "交渉する",
    "phrase": "negotiate favorable terms",
    "phraseJa": "有利な契約条件を交渉する"
  },
  {
    "id": "v073",
    "band": 730,
    "word": "consecutive",
    "pos": "形",
    "meaning": "連続した",
    "phrase": "for three consecutive quarters",
    "phraseJa": "3四半期連続で"
  },
  {
    "id": "v074",
    "band": 730,
    "word": "distribute",
    "pos": "動",
    "meaning": "配布する・流通させる",
    "phrase": "distribute handouts to attendees",
    "phraseJa": "出席者に配布資料を配る"
  },
  {
    "id": "v075",
    "band": 730,
    "word": "affordable",
    "pos": "形",
    "meaning": "手頃な価格の",
    "phrase": "high quality at an affordable price",
    "phraseJa": "手頃な価格で高品質"
  },
  {
    "id": "v076",
    "band": 860,
    "word": "waive",
    "pos": "動",
    "meaning": "（料金・規則を）免除する",
    "phrase": "waive the enrollment fee",
    "phraseJa": "入会金を免除する"
  },
  {
    "id": "v077",
    "band": 860,
    "word": "expedite",
    "pos": "動",
    "meaning": "迅速化する・早める",
    "phrase": "expedite the shipping process",
    "phraseJa": "発送手続きを迅速化する"
  },
  {
    "id": "v078",
    "band": 860,
    "word": "discrepancy",
    "pos": "名",
    "meaning": "食い違い・不一致",
    "phrase": "resolve a billing discrepancy",
    "phraseJa": "請求金額の不一致を解消する"
  },
  {
    "id": "v079",
    "band": 860,
    "word": "contingent",
    "pos": "形",
    "meaning": "〜次第である（on）",
    "phrase": "contingent upon board approval",
    "phraseJa": "取締役会の承認を条件として"
  },
  {
    "id": "v080",
    "band": 860,
    "word": "overhaul",
    "pos": "動/名",
    "meaning": "抜本的に見直す・総点検",
    "phrase": "overhaul the inventory system",
    "phraseJa": "在庫システムを抜本改修する"
  },
  {
    "id": "v081",
    "band": 860,
    "word": "stringent",
    "pos": "形",
    "meaning": "厳格な・厳しい",
    "phrase": "meet stringent quality standards",
    "phraseJa": "厳格な品質基準を満たす"
  },
  {
    "id": "v082",
    "band": 860,
    "word": "unanimous",
    "pos": "形",
    "meaning": "満場一致の",
    "phrase": "reach a unanimous decision",
    "phraseJa": "満場一致の決定に至る"
  },
  {
    "id": "v083",
    "band": 860,
    "word": "lucrative",
    "pos": "形",
    "meaning": "収益性の高い",
    "phrase": "secure a lucrative contract",
    "phraseJa": "高収益の契約を獲得する"
  },
  {
    "id": "v084",
    "band": 860,
    "word": "obsolete",
    "pos": "形",
    "meaning": "時代遅れの・旧式の",
    "phrase": "phase out obsolete machinery",
    "phraseJa": "旧式の機械を段階的に廃止する"
  },
  {
    "id": "v085",
    "band": 860,
    "word": "unprecedented",
    "pos": "形",
    "meaning": "前例のない・過去最高の",
    "phrase": "unprecedented demand for the service",
    "phraseJa": "そのサービスへの前例のない需要"
  },
  {
    "id": "v086",
    "band": 860,
    "word": "premises",
    "pos": "名",
    "meaning": "敷地・構内（常に複数形）",
    "phrase": "smoking is prohibited on the premises",
    "phraseJa": "敷地内での喫煙は禁止されている"
  },
  {
    "id": "v087",
    "band": 860,
    "word": "alleviate",
    "pos": "動",
    "meaning": "軽減する・緩和する",
    "phrase": "alleviate traffic congestion",
    "phraseJa": "交通渋滞を緩和する"
  },
  {
    "id": "v088",
    "band": 860,
    "word": "commensurate",
    "pos": "形",
    "meaning": "見合った・比例した（with）",
    "phrase": "salary commensurate with experience",
    "phraseJa": "経験に見合った給与"
  },
  {
    "id": "v089",
    "band": 860,
    "word": "scrutinize",
    "pos": "動",
    "meaning": "精査する・綿密に調べる",
    "phrase": "scrutinize financial statements",
    "phraseJa": "財務諸表を精査する"
  },
  {
    "id": "v090",
    "band": 860,
    "word": "provisional",
    "pos": "形",
    "meaning": "暫定的な・仮の",
    "phrase": "issue a provisional license",
    "phraseJa": "仮免許を発行する"
  },
  {
    "id": "v091",
    "band": 860,
    "word": "incur",
    "pos": "動",
    "meaning": "（費用・損失を）負う・招く",
    "phrase": "incur a late cancellation fee",
    "phraseJa": "直前キャンセル料が発生する"
  },
  {
    "id": "v092",
    "band": 860,
    "word": "streamline",
    "pos": "動",
    "meaning": "合理化する・簡素化する",
    "phrase": "streamline administrative procedures",
    "phraseJa": "事務手続きを簡素化する"
  },
  {
    "id": "v093",
    "band": 860,
    "word": "adhere",
    "pos": "動",
    "meaning": "厳守する（to）",
    "phrase": "strictly adhere to the guidelines",
    "phraseJa": "ガイドラインを厳守する"
  },
  {
    "id": "v094",
    "band": 860,
    "word": "versatile",
    "pos": "形",
    "meaning": "多用途の・多才な",
    "phrase": "a versatile conference space",
    "phraseJa": "多目的に使える会議スペース"
  },
  {
    "id": "v095",
    "band": 860,
    "word": "deteriorate",
    "pos": "動",
    "meaning": "悪化する・劣化する",
    "phrase": "weather conditions may deteriorate",
    "phraseJa": "天候が悪化する恐れがある"
  },
  {
    "id": "v096",
    "band": 860,
    "word": "feasible",
    "pos": "形",
    "meaning": "実行可能な",
    "phrase": "a financially feasible plan",
    "phraseJa": "財政的に実行可能な計画"
  },
  {
    "id": "v097",
    "band": 860,
    "word": "endorse",
    "pos": "動",
    "meaning": "推薦する・承認する",
    "phrase": "publicly endorse a new product",
    "phraseJa": "新製品を公に推薦する"
  },
  {
    "id": "v098",
    "band": 860,
    "word": "reconcile",
    "pos": "動",
    "meaning": "照合する・一致させる",
    "phrase": "reconcile bank statements",
    "phraseJa": "銀行明細を帳簿と照合する"
  },
  {
    "id": "v099",
    "band": 860,
    "word": "inclement",
    "pos": "形",
    "meaning": "（天候が）荒れ模様の",
    "phrase": "rescheduled due to inclement weather",
    "phraseJa": "悪天候のため日程変更された"
  },
  {
    "id": "v100",
    "band": 860,
    "word": "culminate",
    "pos": "動",
    "meaning": "最高潮に達する・締めくくる",
    "phrase": "culminate in an awards ceremony",
    "phraseJa": "表彰式で締めくくられる"
  }
];

/* LexSophia 50 Paraphrases & 12 Dictations */
const LEXSOPHIA_PARAPHRASES = [
  {
    "id": "pp01",
    "cat": "料金・無料",
    "src": "complimentary",
    "target": "free of charge / at no cost",
    "ja": "無料の・優待の"
  },
  {
    "id": "pp02",
    "cat": "変更・延期",
    "src": "postpone",
    "target": "move to a later date / reschedule",
    "ja": "延期する・日程を後ろへずらす"
  },
  {
    "id": "pp03",
    "cat": "時間・頻度",
    "src": "annually",
    "target": "once a year / every year",
    "ja": "年に1回"
  },
  {
    "id": "pp04",
    "cat": "時間・頻度",
    "src": "quarterly",
    "target": "every three months / four times a year",
    "ja": "四半期ごとに（3ヶ月ごとに）"
  },
  {
    "id": "pp05",
    "cat": "時間・頻度",
    "src": "biweekly",
    "target": "every two weeks",
    "ja": "2週間ごとに（隔週で）"
  },
  {
    "id": "pp06",
    "cat": "時間・頻度",
    "src": "for over a decade",
    "target": "for more than ten years",
    "ja": "10年以上にわたって"
  },
  {
    "id": "pp07",
    "cat": "時間・頻度",
    "src": "prior to",
    "target": "before / in advance of",
    "ja": "〜より前に・事前に"
  },
  {
    "id": "pp08",
    "cat": "時間・頻度",
    "src": "promptly",
    "target": "right away / immediately / on time",
    "ja": "迅速に・時刻通りに"
  },
  {
    "id": "pp09",
    "cat": "時間・頻度",
    "src": "tentative",
    "target": "not yet final / subject to change",
    "ja": "仮の・変更の可能性がある"
  },
  {
    "id": "pp10",
    "cat": "料金・無料",
    "src": "waive the fee",
    "target": "remove the charge / not require payment",
    "ja": "料金を免除する"
  },
  {
    "id": "pp11",
    "cat": "料金・無料",
    "src": "reimburse",
    "target": "pay back / refund expenses",
    "ja": "（立替経費を）払い戻す"
  },
  {
    "id": "pp12",
    "cat": "料金・無料",
    "src": "affordable",
    "target": "reasonably priced / inexpensive",
    "ja": "手頃な価格の"
  },
  {
    "id": "pp13",
    "cat": "料金・無料",
    "src": "a 20 percent discount",
    "target": "one-fifth off the regular price",
    "ja": "通常価格から2割引"
  },
  {
    "id": "pp14",
    "cat": "料金・無料",
    "src": "estimate",
    "target": "approximate cost / price quote",
    "ja": "見積もり・概算額"
  },
  {
    "id": "pp15",
    "cat": "料金・無料",
    "src": "incur a fee",
    "target": "be charged an extra amount",
    "ja": "追加料金が発生する"
  },
  {
    "id": "pp16",
    "cat": "変更・延期",
    "src": "call off",
    "target": "cancel",
    "ja": "中止する"
  },
  {
    "id": "pp17",
    "cat": "変更・延期",
    "src": "relocate",
    "target": "move to a new location",
    "ja": "移転する"
  },
  {
    "id": "pp18",
    "cat": "変更・延期",
    "src": "revise",
    "target": "update / make changes to",
    "ja": "改訂する・修正する"
  },
  {
    "id": "pp19",
    "cat": "変更・延期",
    "src": "extend the deadline",
    "target": "give more time to submit",
    "ja": "提出期限を延ばす"
  },
  {
    "id": "pp20",
    "cat": "変更・延期",
    "src": "switch shifts",
    "target": "trade working hours",
    "ja": "勤務シフトを交代する"
  },
  {
    "id": "pp21",
    "cat": "業務・手続き",
    "src": "mandatory",
    "target": "required for everyone",
    "ja": "全員必須の・義務の"
  },
  {
    "id": "pp22",
    "cat": "業務・手続き",
    "src": "optional",
    "target": "not required / voluntary",
    "ja": "任意の"
  },
  {
    "id": "pp23",
    "cat": "業務・手続き",
    "src": "submit",
    "target": "turn in / hand in / send",
    "ja": "提出する"
  },
  {
    "id": "pp24",
    "cat": "業務・手続き",
    "src": "notify",
    "target": "let someone know / inform",
    "ja": "知らせる・通知する"
  },
  {
    "id": "pp25",
    "cat": "業務・手続き",
    "src": "inquire about",
    "target": "ask for information on",
    "ja": "〜について問い合わせる"
  },
  {
    "id": "pp26",
    "cat": "業務・手続き",
    "src": "assist",
    "target": "help / lend a hand",
    "ja": "手伝う・支援する"
  },
  {
    "id": "pp27",
    "cat": "業務・手続き",
    "src": "evaluate",
    "target": "assess / review",
    "ja": "評価する・査定する"
  },
  {
    "id": "pp28",
    "cat": "業務・手続き",
    "src": "obtain",
    "target": "get / acquire / pick up",
    "ja": "入手する・取得する"
  },
  {
    "id": "pp29",
    "cat": "業務・手続き",
    "src": "retain",
    "target": "keep for one's records",
    "ja": "保管する・維持する"
  },
  {
    "id": "pp30",
    "cat": "業務・手続き",
    "src": "verify",
    "target": "make sure / confirm accuracy",
    "ja": "確認する・照合する"
  },
  {
    "id": "pp31",
    "cat": "業務・手続き",
    "src": "recruit",
    "target": "hire new staff / look for employees",
    "ja": "採用する・募集する"
  },
  {
    "id": "pp32",
    "cat": "業務・手続き",
    "src": "demonstrate",
    "target": "show how something works",
    "ja": "実演する・使い方を示す"
  },
  {
    "id": "pp33",
    "cat": "業務・手続き",
    "src": "collaborate",
    "target": "work together / team up",
    "ja": "協力する・共同で行う"
  },
  {
    "id": "pp34",
    "cat": "業務・手続き",
    "src": "resolve an issue",
    "target": "fix a problem",
    "ja": "問題を解決する"
  },
  {
    "id": "pp35",
    "cat": "業務・手続き",
    "src": "comply with",
    "target": "follow rules or guidelines",
    "ja": "規則・基準に従う"
  },
  {
    "id": "pp36",
    "cat": "場所・設備",
    "src": "out of order",
    "target": "not working properly / broken",
    "ja": "故障している"
  },
  {
    "id": "pp37",
    "cat": "場所・設備",
    "src": "under renovation",
    "target": "being remodeled / being refurbished",
    "ja": "改装工事中である"
  },
  {
    "id": "pp38",
    "cat": "場所・設備",
    "src": "adjacent to",
    "target": "next to / right beside",
    "ja": "〜に隣接した・すぐ隣の"
  },
  {
    "id": "pp39",
    "cat": "場所・設備",
    "src": "venue",
    "target": "event location / site",
    "ja": "開催会場"
  },
  {
    "id": "pp40",
    "cat": "場所・設備",
    "src": "premises",
    "target": "building and grounds / property",
    "ja": "敷地・構内"
  },
  {
    "id": "pp41",
    "cat": "場所・設備",
    "src": "accommodate",
    "target": "hold / have enough seats for",
    "ja": "収容できる"
  },
  {
    "id": "pp42",
    "cat": "場所・設備",
    "src": "out of stock",
    "target": "currently unavailable / sold out",
    "ja": "在庫切れである"
  },
  {
    "id": "pp43",
    "cat": "場所・設備",
    "src": "merchandise",
    "target": "goods / products / items for sale",
    "ja": "商品・販売品"
  },
  {
    "id": "pp44",
    "cat": "場所・設備",
    "src": "defective",
    "target": "faulty / damaged / flawed",
    "ja": "欠陥のある・不良品の"
  },
  {
    "id": "pp45",
    "cat": "場所・設備",
    "src": "garment",
    "target": "article of clothing / apparel",
    "ja": "衣類・アパレル製品"
  },
  {
    "id": "pp46",
    "cat": "場所・設備",
    "src": "beverage",
    "target": "drink / refreshment",
    "ja": "飲み物"
  },
  {
    "id": "pp47",
    "cat": "場所・設備",
    "src": "itinerary",
    "target": "travel schedule",
    "ja": "旅程表"
  },
  {
    "id": "pp48",
    "cat": "業務・手続き",
    "src": "eligible for",
    "target": "qualified to receive",
    "ja": "〜の対象資格がある"
  },
  {
    "id": "pp49",
    "cat": "業務・手続き",
    "src": "substantial",
    "target": "significant / considerable / large",
    "ja": "大幅な・かなりの"
  },
  {
    "id": "pp50",
    "cat": "業務・手続き",
    "src": "insufficient",
    "target": "not enough / short of",
    "ja": "不足している・不十分な"
  }
];
const LEXSOPHIA_DICTATIONS = [
  {
    "id": "d01",
    "part": 2,
    "clip": "audio/p2-01-question.mp3",
    "before": "When will the",
    "answer": "revised schedule",
    "after": "be sent?",
    "distractors": [
      "revise schedule",
      "advised schedule",
      "reserved seat"
    ],
    "ja": "改訂された予定表はいつ送られますか。",
    "tip": "revised の語尾 -d は次の schedule の /s/ に吸収されて聞こえにくくなります。「改訂された＝過去分詞」と文法でも補いましょう。"
  },
  {
    "id": "d02",
    "part": 2,
    "clip": "audio/p2-02-question.mp3",
    "before": "Who",
    "answer": "approved",
    "after": "the new advertising budget?",
    "distractors": [
      "improved",
      "approves",
      "moved"
    ],
    "ja": "新しい広告予算を承認したのは誰ですか。",
    "tip": "approve（承認する）と improve（改善する）はPart 2・3の超頻出聞き分けペアです。第1音節の母音 /ə/ と /ɪ/ に注目。"
  },
  {
    "id": "d03",
    "part": 2,
    "clip": "audio/p2-03-question.mp3",
    "before": "Could you",
    "answer": "help me move",
    "after": "these chairs?",
    "distractors": [
      "help me moving",
      "helped me move",
      "let me move"
    ],
    "ja": "この椅子を動かすのを手伝ってもらえますか。",
    "tip": "help + 人 + 動詞の原形（help me move）。help の /p/ は破裂せず唇を閉じるだけで次の me につながります。"
  },
  {
    "id": "d04",
    "part": 2,
    "clip": "audio/p2-04-question.mp3",
    "before": "Why was the seminar",
    "answer": "postponed",
    "after": "?",
    "distractors": [
      "postpone",
      "performed",
      "proposed"
    ],
    "ja": "なぜセミナーは延期されたのですか。",
    "tip": "postponed の /t/ はほぼ脱落し「ポスポーンド」のように響きます。was + 過去分詞の受動態とセットで捉えます。"
  },
  {
    "id": "d05",
    "part": 2,
    "clip": "audio/p2-05-question.mp3",
    "before": "Haven't you",
    "answer": "submitted",
    "after": "the expense report yet?",
    "distractors": [
      "submit",
      "admitted",
      "permitted"
    ],
    "ja": "まだ経費報告書を提出していないのですか。",
    "tip": "Haven't you（ハヴンチュ）の否定疑問文＋現在完了 submitted。文末の yet も完了形の重要なサインです。"
  },
  {
    "id": "d06",
    "part": 2,
    "clip": "audio/p2-06-question.mp3",
    "before": "Which printer",
    "answer": "should I use",
    "after": "?",
    "distractors": [
      "should I used",
      "could I chose",
      "did I use"
    ],
    "ja": "どのプリンターを使えばよいですか。",
    "tip": "should I は連結して「シュダイ」のように1語感覚で発音されます。"
  },
  {
    "id": "d07",
    "part": 3,
    "clip": "audio/p3-set01-line01.mp3",
    "before": "The clients will be here at two, but the projector in Conference Room B",
    "answer": "isn't working",
    "after": ".",
    "distractors": [
      "is working",
      "wasn't walked",
      "isn't walking"
    ],
    "ja": "顧客は2時に来ますが、会議室Bのプロジェクターが動きません。",
    "tip": "working /wɜːrkɪŋ/ と walking /wɔːkɪŋ/ の母音差、そして否定 isn't の /n/ を聞き逃さないのがポイントです。"
  },
  {
    "id": "d08",
    "part": 3,
    "clip": "audio/p3-set01-line02.mp3",
    "before": "I can bring the",
    "answer": "portable projector",
    "after": "from the training room.",
    "distractors": [
      "possible projector",
      "part of projector",
      "personal computer"
    ],
    "ja": "研修室から携帯型プロジェクターを持って来られます。",
    "tip": "portable（持ち運びできる）はアメリカ英語で /t/ がラ行に近い弾き音（フラップT）になります。"
  },
  {
    "id": "d09",
    "part": 3,
    "clip": "audio/p3-set01-line03.mp3",
    "before": "Great. Could you",
    "answer": "set it up",
    "after": "by one thirty? I'd like to test the slides before they arrive.",
    "distractors": [
      "send it out",
      "sit it up",
      "set them up"
    ],
    "ja": "助かります。1時30分までに設置してもらえますか。顧客が来る前にスライドを確認したいです。",
    "tip": "句動詞 set it up は3語すべてが連結して「セリラップ」のように聞こえます。設問では set up some equipment に言い換えられます。"
  },
  {
    "id": "d10",
    "part": 3,
    "clip": "audio/p3-set02-line01.mp3",
    "before": "I'd like to",
    "answer": "reserve a table",
    "after": "for six this Friday at seven o'clock.",
    "distractors": [
      "preserve a table",
      "receive a cable",
      "deserve a table"
    ],
    "ja": "今週金曜日の7時に6人用のテーブルを予約したいのですが。",
    "tip": "reserve a が連結して「リザーヴァ」と響きます。電話予約の冒頭定型フレーズです。"
  },
  {
    "id": "d11",
    "part": 4,
    "clip": "audio/p4-set01-talk.mp3",
    "before": "Attention passengers on Flight 286 to Vancouver. The",
    "answer": "departure gate",
    "after": "has changed from Gate 12 to Gate 18.",
    "distractors": [
      "departure date",
      "arrival gate",
      "boarding pass"
    ],
    "ja": "Vancouver行き286便をご利用のお客様にお知らせします。出発ゲートは12番から18番に変更されました。",
    "tip": "gate と date は1音違い。直後の Gate 12 to Gate 18 から文脈でも確実に裏付けられます。"
  },
  {
    "id": "d12",
    "part": 4,
    "clip": "audio/p4-set02-talk.mp3",
    "before": "Hello, Ms. Patel. This is Aaron from Northline Office Supply. The chairs were expected this Thursday, but a warehouse computer problem has",
    "answer": "delayed the shipment",
    "after": "until Monday.",
    "distractors": [
      "delivered the shipment",
      "deleted the payment",
      "relayed the equipment"
    ],
    "ja": "木曜日に到着予定でしたが、倉庫のコンピューター障害により発送が月曜日まで遅れています。",
    "tip": "has delayed the shipment（発送を遅らせた）。delay と deliver は冒頭音が似ているため要注意です。"
  }
];
