/* LexSophia TEAP Listening Original Question Bank — Part 1 (1A, 1B, 1C: Q1-Q25)
   Unofficial original practice designed around the TEAP (Standard) Listening structure. */
window.TEAP_LISTENING_CONFIG = {
  exam: 'teap',
  examName: 'TEAP（通常版）',
  officialTotalQuestions: 50,
  officialTimeMinutes: 50,
  answerWindowSeconds: 10,
  parts: [
    { id: '1A', name: 'Part 1A', label: '短い会話', officialCount: 10, previewQuestion: false, desc: '学生同士・教員との短い会話。音声の後に質問が流れます。' },
    { id: '1B', name: 'Part 1B', label: '短い英文', officialCount: 10, previewQuestion: false, desc: '1人の話者による短い説明・講義。音声の後に質問が流れます。' },
    { id: '1C', name: 'Part 1C', label: '図表選択', officialCount: 5, previewQuestion: true, desc: '短い説明を聞き、数値・増減・割合が一致する図表を選びます。' },
    { id: '2A', name: 'Part 2A', label: '長い会話', officialCount: 9, previewQuestion: true, desc: '3素材×各3問。質問と選択肢を先読みして長い会話を聞きます。' },
    { id: '2B', name: 'Part 2B', label: '長い英文（講義）', officialCount: 16, previewQuestion: true, desc: '4素材×各4問（図表付きあり）。講義の論理展開と詳細を捉えます。' }
  ]
};

window.TEAP_LISTENING_P1 = [
  /* ================= Part 1A: Short Conversations (Q1 - Q10) ================= */
  {
    id: 'L-1A-01', num: 1, part: '1A',
    situation: 'A student is talking to a professor about a seminar presentation.',
    turns: [
      { speaker: 'W', text: 'Professor Grant, I was scheduled to give my presentation this Thursday, but I just found out I have a lab exam at the same time.' },
      { speaker: 'M', text: 'I see. We could move you to next Tuesday, though that slot is usually reserved for group projects.' },
      { speaker: 'W', text: 'Would Friday afternoon during office hours work instead? Or is it better to present in front of the class?' },
      { speaker: 'M', text: 'Presenting to the whole class is required for credit. Let me swap you with Kenji—he actually asked to go earlier this week anyway.' }
    ],
    question: 'What will the professor most likely do next?',
    options: [
      'Arrange for the student to switch presentation dates with a classmate.',
      'Allow the student to present privately during Friday office hours.',
      'Assign the student to join a group project next Tuesday.',
      'Ask the lab instructor to reschedule the Thursday exam.'
    ],
    answer: 0,
    jaScript: '女：グラント先生、今週木曜日に発表の予定だったのですが、同じ時間に実験の試験が入ってしまいました。\n男：なるほど。来週火曜に移すこともできますが、その枠は普段グループ発表用なんです。\n女：代わりに金曜午後のオフィスアワーではだめですか？それともクラスの前で発表すべきですか？\n男：単位にはクラス全体への発表が必須です。ケンジと順番を入れ替えましょう。彼もちょうど今週早めに発表したいと言っていましたから。',
    evidence: 'Let me swap you with Kenji—he actually asked to go earlier this week anyway.',
    explanation: '教授は最後に「ケンジと発表枠を入れ替える（swap）」と決めています。swap → switch presentation dates with a classmate の言い換えが正解です。',
    trapType: '時系列型・却下案型（火曜案・金曜オフィスアワー案はいずれも採用されていない）'
  },
  {
    id: 'L-1A-02', num: 2, part: '1A',
    situation: 'Two students are discussing a library study room reservation.',
    turns: [
      { speaker: 'M', text: 'Did you book Room 4B for our economics review session tonight?' },
      { speaker: 'W', text: 'I tried, but all the fourth-floor rooms were taken. The librarian offered us a media booth on the second floor instead.' },
      { speaker: 'M', text: 'Does it have a whiteboard? We need to draw supply-and-demand graphs.' },
      { speaker: 'W', text: 'No whiteboard, just a large monitor we can connect a laptop to. That should actually be cleaner if we use your tablet to sketch the graphs.' }
    ],
    question: 'How do the students plan to show their graphs during the session?',
    options: [
      'By borrowing a portable whiteboard from the librarian.',
      'By displaying sketches from a tablet on a room monitor.',
      'By waiting until Room 4B becomes available later tonight.',
      'By printing handouts on the fourth floor before meeting.'
    ],
    answer: 1,
    jaScript: '男：今夜の経済学の復習会用に4B室を予約してくれた？\n女：試したけど4階は全部埋まってた。代わりに司書さんが2階のメディアブースを案内してくれたよ。\n男：ホワイトボードはある？需要と供給のグラフを描きたいんだけど。\n女：ホワイトボードはないけど、PCを繋げる大きいモニターがあるの。あなたのタブレットでグラフを描けばその方が見やすいよ。',
    evidence: 'just a large monitor we can connect a laptop to. That should actually be cleaner if we use your tablet to sketch the graphs.',
    explanation: 'ホワイトボードの代わりにタブレットで描いて大画面モニターに映す計画です。',
    trapType: '語句一致型（whiteboard や Room 4B は音声に出るが、利用できない）'
  },
  {
    id: 'L-1A-03', num: 3, part: '1A',
    situation: 'A student is speaking with an academic advisor about course registration.',
    turns: [
      { speaker: 'W', text: 'I want to enroll in Intermediate Statistics, but the online portal keeps blocking my registration.' },
      { speaker: 'M', text: 'Have you completed Calculus 1? The system automatically checks for that prerequisite.' },
      { speaker: 'W', text: 'I took an equivalent course at a summer program abroad, and the math department already approved the transfer credit.' },
      { speaker: 'M', text: 'Ah, transfer approvals do not always sync immediately. Bring the signed approval slip to the registrar desk, and they can override the block today.' }
    ],
    question: 'What does the advisor tell the student to do?',
    options: [
      'Enroll in Calculus 1 before taking Intermediate Statistics.',
      'Contact the summer program abroad for an official transcript.',
      'Submit her signed credit approval at the registrar office.',
      'Wait for the online portal to update automatically next week.'
    ],
    answer: 2,
    jaScript: '女：中級統計学を履修したいのですが、オンラインポータルで登録がブロックされます。\n男：微分積分1は履修済みですか？システムが自動で前提科目をチェックするんです。\n女：海外のサマープログラムで相当科目を取って、数学科から単位認定の承認をもらっています。\n男：ああ、認定承認はすぐ同期されないことがあります。署名済みの承認書を教務窓口に持っていけば、今日中にブロックを解除してもらえますよ。',
    evidence: 'Bring the signed approval slip to the registrar desk, and they can override the block today.',
    explanation: '「署名済みの承認書を教務窓口（registrar desk）へ提出する」が具体的な次の行動です。',
    trapType: '条件混同型（前提科目はすでに認定済みなので再度履修する必要はない）'
  },
  {
    id: 'L-1A-04', num: 4, part: '1A',
    situation: 'Two classmates are talking about a volunteer survey project.',
    turns: [
      { speaker: 'M', text: 'We only have thirty responses to our campus dining survey so far, and Professor Ito wanted at least eighty.' },
      { speaker: 'W', text: 'Posting the link on the student forum did not get much attention. What if we hand out paper questionnaires outside the cafeteria?' },
      { speaker: 'M', text: 'Typing up paper answers later would take forever. Let us print QR codes on small flyers and stand near the cafeteria exit at lunchtime.' },
      { speaker: 'W', text: 'Good idea—people can scan it while waiting for the bus, and the data goes straight into our spreadsheet.' }
    ],
    question: 'Why does the man reject using paper questionnaires?',
    options: [
      'Printing paper forms is too expensive for the club budget.',
      'Students are not allowed to distribute paper near the cafeteria.',
      'Entering the collected responses manually would take too much time.',
      'Professor Ito requires all survey data to come from the student forum.'
    ],
    answer: 2,
    jaScript: '男：学食アンケートの回答がまだ30件しか集まっていないんだ。伊藤先生は最低80件ほしいって言ってたのに。\n女：学生フォーラムにリンクを貼ってもあまり反応なかったね。学食の前で紙のアンケートを配るのはどう？\n男：紙の回答をあとで打ち込むのはすごく時間がかかるよ。小さいチラシにQRコードを印刷して、昼休みに学食の出口付近に立とう。\n女：いいね、バスを待ちながらスキャンしてもらえるし、データもそのままスプレッドシートに入るね。',
    evidence: 'Typing up paper answers later would take forever.',
    explanation: 'take forever（途方もなく時間がかかる）が take too much time に言い換えられています。',
    trapType: '根拠不足型（予算や配布禁止のルールは言及されていない）'
  },
  {
    id: 'L-1A-05', num: 5, part: '1A',
    situation: 'A student is asking a campus bookstore clerk about a textbook.',
    turns: [
      { speaker: 'W', text: 'Excuse me, do you have any used copies of Principles of Urban Geography left?' },
      { speaker: 'M', text: 'We sold the last used copy this morning. We still have new ones, or you can rent a digital version for the semester.' },
      { speaker: 'W', text: 'The professor allows open-book exams, but only printed books are permitted in the exam hall.' },
      { speaker: 'M', text: 'In that case, you will need a physical copy. If you are not in a rush, another shipment of used copies arrives on Wednesday.' }
    ],
    question: 'Why does the student avoid the digital textbook?',
    options: [
      'It costs more than buying a new printed edition.',
      'Electronic devices cannot be used during the course exams.',
      'The digital edition is missing several updated maps.',
      'Her laptop is currently being repaired at the campus center.'
    ],
    answer: 1,
    jaScript: '女：すみません、『都市地理学の原理』の中古本はまだ残っていますか？\n男：最後の中古本は今朝売れてしまいました。新品はまだありますし、今学期だけデジタル版をレンタルすることもできます。\n女：先生の試験は持ち込み可なのですが、試験会場で認められているのは紙の本だけなんです。\n男：それなら紙の本が必要ですね。お急ぎでなければ、水曜日に中古本が再入荷しますよ。',
    evidence: 'The professor allows open-book exams, but only printed books are permitted in the exam hall.',
    explanation: '試験会場では紙の本のみ許可（only printed books are permitted）＝電子機器・デジタル版は試験で使えない、という意味の言い換えです。',
    trapType: '根拠不足型（価格差や地図の欠落は述べられていない）'
  },
  {
    id: 'L-1A-06', num: 6, part: '1A',
    situation: 'Two students are organizing a film screening for an international club.',
    turns: [
      { speaker: 'M', text: 'The auditorium projector is fixed, so we are all set for Friday night, right?' },
      { speaker: 'W', text: 'Almost. We got permission to screen the documentary, provided we do not charge admission at the door.' },
      { speaker: 'M', text: 'Oh, I was hoping to sell five-dollar tickets to cover the cost of snacks.' },
      { speaker: 'W', text: 'We can still put out a voluntary donation jar for refreshments—the distributor said that is completely fine.' }
    ],
    question: 'What condition did the film distributor set for the screening?',
    options: [
      'The club must not require attendees to pay an entrance fee.',
      'No food or drinks may be served inside the auditorium.',
      'Tickets must be priced at five dollars or less.',
      'The screening must be moved to a smaller classroom.'
    ],
    answer: 0,
    jaScript: '男：講堂のプロジェクターが直ったから、金曜夜の準備は万端だよね？\n女：ほぼね。入口で入場料を取らないことを条件に、ドキュメンタリーの上映許可が下りたよ。\n男：ええ、軽食代をまかなうために5ドルのチケットを売ろうと思ってたのに。\n女：軽食用の任意の募金箱を置くのはOKだって配給元が言ってたから、それにしよう。',
    evidence: 'provided we do not charge admission at the door.',
    explanation: 'provided（〜を条件として）で示された条件は「入場料を取らないこと（do not charge admission）」です。',
    trapType: '対象混同型（5ドルは男性の当初案であり、配給元の条件ではない）'
  },
  {
    id: 'L-1A-07', num: 7, part: '1A',
    situation: 'A student is talking to a lab supervisor about an experiment.',
    turns: [
      { speaker: 'W', text: 'Dr. Sato, my water samples from the east pond showed much higher acidity than last month. Should I repeat the test immediately?' },
      { speaker: 'M', text: 'Before collecting new samples, check whether the pH meter was calibrated this morning. A freshman group used it yesterday and might have reset it.' },
      { speaker: 'W', text: 'Good point. I assumed it was already calibrated when I turned it on.' },
      { speaker: 'M', text: 'Test it with the neutral buffer solution first. If the reading is still off, then we will resample the pond.' }
    ],
    question: 'What does Dr. Sato advise the student to check first?',
    options: [
      'Whether the pond water was collected at the right depth.',
      'Whether the measuring instrument is properly calibrated.',
      'Whether last month’s records were entered incorrectly.',
      'Whether the freshman group took the wrong sample bottles.'
    ],
    answer: 1,
    jaScript: '女：佐藤先生、東の池の水サンプルが先月よりかなり高い酸性度を示しました。すぐ実験をやり直すべきでしょうか？\n男：新しいサンプルを採る前に、今朝pH計が較正されていたか確認してください。昨日1年生のグループが使ってリセットしたかもしれません。\n女：なるほど。電源を入れたとき較正済みだと思い込んでいました。\n男：まず中性の緩衝液で試してみて、それでも数値がおかしければ池で再採取しましょう。',
    evidence: 'Before collecting new samples, check whether the pH meter was calibrated this morning.',
    explanation: 'pH meter → measuring instrument の言い換え。再採取の前に計測器の較正確認を指示しています。',
    trapType: '時系列型（再採取は「確認後にもおかしければ」行う次のステップ）'
  },
  {
    id: 'L-1A-08', num: 8, part: '1A',
    situation: 'Two students are talking about applying for a campus research grant.',
    turns: [
      { speaker: 'M', text: 'Are you still submitting your proposal for the undergraduate research grant by Monday?' },
      { speaker: 'W', text: 'I finished the budget sheet, and my faculty sponsor already wrote the recommendation letter. I am just trimming two pages from the literature review.' },
      { speaker: 'M', text: 'I thought there was no strict page limit this year.' },
      { speaker: 'W', text: 'The total proposal can be up to ten pages, including references, and mine is currently twelve.' }
    ],
    question: 'What is the woman currently working on?',
    options: [
      'Asking a professor to write a recommendation letter.',
      'Calculating the expenses for her budget sheet.',
      'Shortening a section of her written proposal.',
      'Searching for additional references to reach ten pages.'
    ],
    answer: 2,
    jaScript: '男：月曜締切の学部生研究助成金の申請書、まだ出す予定？\n女：予算表は終わって、指導教員の推薦状ももう書いてもらったの。今は先行研究レビューを2ページ削っているところ。\n男：今年は厳しいページ制限はないと思ってたよ。\n女：参考文献込みで最大10ページまでなんだけど、今12ページあって。',
    evidence: 'I am just trimming two pages from the literature review.',
    explanation: 'trimming two pages（2ページ削る）＝ shortening a section of her written proposal。予算表と推薦状は完了済みです。',
    trapType: '時系列型（完了済みの作業と現在進行中の作業を混同させる）'
  },
  {
    id: 'L-1A-09', num: 9, part: '1A',
    situation: 'A student is calling the university housing office.',
    turns: [
      { speaker: 'M', text: 'Housing Office, how can I help you?' },
      { speaker: 'W', text: 'Hi, I am living in Maple Hall and I need to stay on campus for five extra days after finals to finish an internship.' },
      { speaker: 'M', text: 'Maple Hall closes for maintenance on the sixteenth, so you cannot stay in your current room. However, we keep Oak Hall open for late departures.' },
      { speaker: 'W', text: 'That works. Do I need to pay a separate fee to move over there?' },
      { speaker: 'M', text: 'Since it is for an approved university internship, the daily fee is waived—just submit the extension form by Friday.' }
    ],
    question: 'What is true about the student’s extended stay?',
    options: [
      'She will move temporarily to a different dormitory without extra charge.',
      'She can remain in Maple Hall if she submits a form by Friday.',
      'She must pay a daily maintenance fee to stay in Oak Hall.',
      'Her internship supervisor must call the housing office directly.'
    ],
    answer: 0,
    jaScript: '男：学生寮オフィスです。ご用件は？\n女：メープル寮に住んでいるのですが、期末試験後にインターンのため5日間追加で滞在したいです。\n男：メープル寮は16日に点検で閉まるため今の部屋には残れませんが、オーク寮を延長滞在用に開けています。\n女：それで大丈夫です。そちらに移るのに別料金はかかりますか？\n男：大学公認のインターンなので日額料金は免除されます。金曜までに延長届を出してください。',
    evidence: 'we keep Oak Hall open for late departures... the daily fee is waived',
    explanation: 'waived（免除される）→ without extra charge、Oak Hall へ移動 → move temporarily to a different dormitory の言い換えです。',
    trapType: '条件混同型（メープル寮には残れない／料金は免除される）'
  },
  {
    id: 'L-1A-10', num: 10, part: '1A',
    situation: 'Two students are discussing a guest lecture they attended.',
    turns: [
      { speaker: 'W', text: 'What did you think of the architect’s talk on sustainable housing?' },
      { speaker: 'M', text: 'Her case studies from northern Europe were fascinating, though I wish she had spent less time on basic climate definitions.' },
      { speaker: 'W', text: 'True, most of us already covered that in Intro to Environmental Studies. Still, the Q&A at the end made up for it.' },
      { speaker: 'M', text: 'Definitely—hearing how she negotiated building codes with city officials was the most practical part.' }
    ],
    question: 'What do both speakers agree about the lecture?',
    options: [
      'The European case studies were too technical for beginners.',
      'The speaker spent too much time explaining introductory concepts.',
      'The Q&A session was cut short due to a scheduling error.',
      'The architect should have included more slides on building codes.'
    ],
    answer: 1,
    jaScript: '女：持続可能な住宅についての建築家の講演、どうだった？\n男：北欧の事例研究は面白かったけど、基本的な気候の定義にもう少し時間を減らしてくれたらよかったな。\n女：確かに、環境学入門でほとんどやった内容だったね。でも最後の質疑応答で十分挽回してたよ。\n男：間違いないね。市役所と建築基準をどう交渉したか聞けたのが一番実践的だった。',
    evidence: 'I wish she had spent less time on basic climate definitions. / True, most of us already covered that',
    explanation: '2人が一致して挙げている不満点は「基礎的な概念の説明に時間をかけすぎたこと」です。',
    trapType: '対象混同型・意味反転型（北欧事例や質疑応答は高評価だった）'
  },

  /* ================= Part 1B: Short Monologues (Q11 - Q20) ================= */
  {
    id: 'L-1B-11', num: 11, part: '1B',
    situation: 'Listen to a short talk in a biology class.',
    turns: [
      { speaker: 'M', text: 'Many people assume that deep-sea hydrothermal vents are newly formed ecosystems because scientists only discovered them in 1977. In reality, geological evidence indicates that these mineral-rich chimneys have existed for billions of years, long before sunlight-based forests appeared on land. What changed in the late twentieth century was not the ocean floor itself, but our ability to send submersibles deep enough to observe it.' }
    ],
    question: 'What is the main point of the speaker’s remark?',
    options: [
      'Hydrothermal vents were created by underwater volcanic activity in 1977.',
      'Deep-sea vent ecosystems are far older than their recent discovery suggests.',
      'Land forests developed earlier than most marine ecosystems.',
      'Modern submersibles can no longer withstand deep-sea mineral pressure.'
    ],
    answer: 1,
    jaScript: '深海の熱水噴出孔は1977年に発見されたばかりなので、最近できた生態系だと思われがちです。しかし実際には、地質学的証拠から、これらは何十億年も前から存在し、陸上に森林が現れるよりずっと古いことが示されています。20世紀後半に変わったのは海底そのものではなく、深海まで潜水艇を送って観察できる人類の能力なのです。',
    evidence: 'these mineral-rich chimneys have existed for billions of years... What changed... was our ability to send submersibles',
    explanation: '「最近発見されたこと」と「最近誕生したこと」の混同を正す話です（PDFの誤答類型に対応）。',
    trapType: '時系列・混同型（発見時期と誕生時期を取り違えさせる）'
  },
  {
    id: 'L-1B-12', num: 12, part: '1B',
    situation: 'Listen to an announcement from a university library director.',
    turns: [
      { speaker: 'W', text: 'Starting next Monday, the main library will introduce a quiet-zone trial on the third floor. Students may still bring covered water bottles, and laptops are welcome as long as notification sounds are muted. However, group discussions and voice calls will be limited to the first and second floors. After four weeks, we will review student feedback before deciding whether to make the policy permanent.' }
    ],
    question: 'What is allowed on the third floor during the trial?',
    options: [
      'Holding quiet group meetings in small corners.',
      'Using silent laptops while drinking from a sealed bottle.',
      'Making brief phone calls near the stairwell.',
      'Eating hot meals at individual study desks.'
    ],
    answer: 1,
    jaScript: '来週月曜から中央図書館3階でクワイエットゾーンの試行を始めます。蓋付きの水筒の持ち込みは引き続き可能で、通知音を消していればノートPCも利用できます。ただしグループ議論や音声通話は1・2階に限定されます。4週間後に学生の意見を確認し、恒久化するか判断します。',
    evidence: 'bring covered water bottles, and laptops are welcome as long as notification sounds are muted.',
    explanation: 'covered water bottles → sealed bottle、notification sounds are muted → silent laptops の言い換えです。',
    trapType: '条件混同型（グループ議論・通話は1・2階限定）'
  },
  {
    id: 'L-1B-13', num: 13, part: '1B',
    situation: 'Listen to a short lecture in a psychology seminar.',
    turns: [
      { speaker: 'M', text: 'When students study for an exam, rereading highlighted notes often feels productive because the material looks familiar. Cognitive psychologists call this the illusion of competence. By contrast, closing the book and trying to recall key ideas from memory feels harder in the moment, yet experiments consistently show it leads to stronger retention a week later.' }
    ],
    question: 'Why do students often overestimate the effectiveness of rereading notes?',
    options: [
      'Highlighting forces them to write longer summaries.',
      'Recognizing familiar text creates a false sense of mastery.',
      'Rereading takes less time than attending review lectures.',
      'Experiments show rereading works best for long-term retention.'
    ],
    answer: 1,
    jaScript: '試験勉強でマーカーを引いたノートを読み返すと、内容に見覚えがあるため捗っている気分になります。認知心理学ではこれを「能力の錯覚」と呼びます。対照的に本を閉じて記憶から思い出す練習はその場では大変ですが、1週間後の定着率が高いことが実験で一貫して示されています。',
    evidence: 'feels productive because the material looks familiar. Cognitive psychologists call this the illusion of competence.',
    explanation: 'looks familiar → Recognizing familiar text、illusion of competence → false sense of mastery の言い換えです。',
    trapType: '因果逆転・意味反転型（定着率が高いのは想起練習の方）'
  },
  {
    id: 'L-1B-14', num: 14, part: '1B',
    situation: 'Listen to a short talk in an environmental science course.',
    turns: [
      { speaker: 'W', text: 'Urban tree-planting campaigns are widely praised for cooling city streets, yet planting a single species across an entire district carries a serious risk. If a disease or insect pest targets that particular tree, the city can lose most of its shade canopy within a few seasons. For that reason, urban planners now recommend mixing multiple native species even if maintenance becomes slightly more complex.' }
    ],
    question: 'Why do urban planners prefer planting several different tree species?',
    options: [
      'Mixed species require less watering and simpler maintenance.',
      'A single species cannot lower street temperatures effectively.',
      'Diversity protects the city from losing most trees to one pest or disease.',
      'Native trees grow faster than imported trees in narrow streets.'
    ],
    answer: 2,
    jaScript: '都市の植樹運動は街路を冷やす効果が高く評価されていますが、地区全体に単一樹種だけを植えることには深刻なリスクがあります。その樹種を狙う病気や害虫が発生すると、数シーズンで日陰の大半を失いかねないからです。そのため都市計画家は、管理が多少複雑になっても複数の在来種を混ぜることを推奨しています。',
    evidence: 'If a disease or insect pest targets that particular tree, the city can lose most of its shade canopy',
    explanation: '単一樹種だと病害虫で一斉に失うリスクがあるため、多様性を確保する（Diversity protects...）のが理由です。',
    trapType: '意味反転型（管理は「多少複雑になる」と述べているのに「簡単になる」としている）'
  },
  {
    id: 'L-1B-15', num: 15, part: '1B',
    situation: 'Listen to a short explanation in an economics class.',
    turns: [
      { speaker: 'M', text: 'In many cities, adding an extra lane to a congested highway reduces travel times for only a few months. Soon after traffic starts moving faster, drivers who previously took trains or avoided rush hour decide to drive instead. Economists refer to this pattern as induced demand: expanding road capacity often generates enough new traffic to restore the original congestion.' }
    ],
    question: 'What does the term "induced demand" explain in this talk?',
    options: [
      'Why train fares rise whenever highways are repaired.',
      'Why widening roads rarely eliminates traffic jams for long.',
      'Why commuters prefer public transit during rush hour.',
      'Why highway construction slows down local economic growth.'
    ],
    answer: 1,
    jaScript: '多くの都市で渋滞する高速道路に車線を増設しても、所要時間が短縮されるのは数か月だけです。流れが良くなると、それまで電車を使っていた人やラッシュを避けていた人が車で移動し始めるからです。経済学者はこれを「誘発需要」と呼びます。道路容量を増やすと新たな交通量が生まれ、元の渋滞に戻ってしまうことが多いのです。',
    evidence: 'expanding road capacity often generates enough new traffic to restore the original congestion.',
    explanation: '道路拡張が新たな需要を呼び込み、結果的に渋滞解消が長続きしない現象の説明です。',
    trapType: '根拠不足型（運賃上昇や経済成長の鈍化は述べられていない）'
  },
  {
    id: 'L-1B-16', num: 16, part: '1B',
    situation: 'Listen to a short talk in an art history class.',
    turns: [
      { speaker: 'W', text: 'Visitors to museums often admire ancient Greek marble statues for their pure white surfaces. However, microscopic pigment analysis has revealed that most of these sculptures were originally painted in vivid reds, blues, and gold. Centuries of burial, weather, and early restoration scrubbing wore the colors away, leading later generations to mistake bare marble for the artists’ original aesthetic.' }
    ],
    question: 'What have microscopic studies shown about ancient Greek marble statues?',
    options: [
      'Artists intentionally left them unpainted to highlight the stone.',
      'They were originally decorated with bright colors that faded over time.',
      'Modern museums added pigments to protect the marble from weather.',
      'Only bronze statues were painted during the classical period.'
    ],
    answer: 1,
    jaScript: '美術館の来館者は古代ギリシャの大理石彫刻の純白の表面を称賛することが多いですが、顕微鏡による顔料分析で、本来は鮮やかな赤・青・金で彩色されていたことが判明しました。何世紀もの埋没や風化、初期の修復洗浄で色が落ち、後世の人が素の大理石を本来の美意識と誤解したのです。',
    evidence: 'most of these sculptures were originally painted in vivid reds, blues, and gold.',
    explanation: 'vivid reds, blues, and gold → bright colors、wore the colors away → faded over time の言い換えです。',
    trapType: '意味反転型（意図的に無彩色だったというのは「後世の誤解」の方）'
  },
  {
    id: 'L-1B-17', num: 17, part: '1B',
    situation: 'Listen to a brief update from a campus career center counselor.',
    turns: [
      { speaker: 'M', text: 'A quick reminder for juniors planning to attend Friday’s career fair: employers will not be accepting printed resumes at their booths this year. Instead, every booth has a digital check-in tablet linked to your student profile. Make sure your updated PDF resume is uploaded to the career portal by Thursday at five p.m., because the system locks profiles overnight before the event.' }
    ],
    question: 'What must students do before Thursday at 5 p.m.?',
    options: [
      'Print at least ten copies of their resume at the career center.',
      'Reserve individual interview slots at each employer booth.',
      'Upload their latest resume file to the online career portal.',
      'Pick up a check-in tablet from the career counselor’s office.'
    ],
    answer: 2,
    jaScript: '金曜のキャリアフェアに参加する3年生へお知らせです。今年、企業ブースでは紙の履歴書を受け付けません。代わりに各ブースに学生プロフィールと連動したデジタル受付タブレットが置かれます。イベント前夜にシステムがロックされるため、木曜午後5時までに最新のPDF履歴書をキャリアポータルにアップロードしてください。',
    evidence: 'Make sure your updated PDF resume is uploaded to the career portal by Thursday at five p.m.',
    explanation: '木曜17時までに最新履歴書PDFをポータルへアップロードすることが必須手続きです。',
    trapType: '語句一致型（printed resumes は「受け付けない」対象）'
  },
  {
    id: 'L-1B-18', num: 18, part: '1B',
    situation: 'Listen to a short talk in a linguistics class.',
    turns: [
      { speaker: 'W', text: 'People sometimes worry that texting abbreviations and emojis are ruining young people’s formal writing skills. Yet several university studies have found little evidence of a decline. In fact, students who frequently switch between casual messaging and academic essays often show strong awareness of audience—they know which tone fits a friend and which fits a professor.' }
    ],
    question: 'What do the university studies mentioned by the speaker suggest?',
    options: [
      'Texting abbreviations frequently appear in college entrance essays.',
      'Frequent texters can still distinguish casual language from formal writing.',
      'Professors are beginning to accept emojis in informal assignments.',
      'Students who avoid social media score highest on grammar tests.'
    ],
    answer: 1,
    jaScript: 'メッセージの略語や絵文字が若者のフォーマルな文章力を損ねているという懸念がありますが、複数の大学研究では低下の証拠はほとんど見つかっていません。むしろカジュアルな連絡と学術エッセイを使い分ける学生は、相手に応じた文体の意識が高いことが多いのです。',
    evidence: 'show strong awareness of audience—they know which tone fits a friend and which fits a professor.',
    explanation: '「相手に応じた文体（カジュアル vs フォーマル）を使い分けられる」が研究の示唆です。',
    trapType: '過度の一般化・根拠不足型（教授が絵文字を容認しているとは言っていない）'
  },
  {
    id: 'L-1B-19', num: 19, part: '1B',
    situation: 'Listen to a short explanation in a marine science course.',
    turns: [
      { speaker: 'M', text: 'Coral bleaching does not mean a coral reef is immediately dead. Corals rely on tiny algae living inside their tissues for both color and most of their energy. When ocean temperatures stay unusually warm, the corals expel those algae and turn white. If water temperatures return to normal quickly enough, the algae can come back and the reef can recover; only prolonged heat causes permanent mortality.' }
    ],
    question: 'Under what condition can a bleached coral reef recover?',
    options: [
      'If the ocean cools back to normal temperatures before too long.',
      'If the coral replaces its algae with mineral nutrients from sand.',
      'If warm currents carry new coral species into the area.',
      'If fishermen stop anchoring boats near the bleached reef.'
    ],
    answer: 0,
    jaScript: 'サンゴの白化は、サンゴ礁が即座に死滅したことを意味しません。サンゴは体内の微細な藻類から色とエネルギーの大半を得ています。海水温が異常に高い状態が続くと藻類を放出して白くなります。水温が十分早く通常に戻れば藻類が戻って回復できますが、高温が長引くと永久的な死滅を招きます。',
    evidence: 'If water temperatures return to normal quickly enough, the algae can come back and the reef can recover',
    explanation: '水温が十分早く通常に戻れば回復可能、という条件を正確に問う問題です。',
    trapType: '根拠不足型（砂の栄養や漁船の錨は言及なし）'
  },
  {
    id: 'L-1B-20', num: 20, part: '1B',
    situation: 'Listen to a short talk in a nutrition seminar.',
    turns: [
      { speaker: 'W', text: 'Labeling a snack "low-fat" does not automatically make it a healthier choice. When food manufacturers remove fat from packaged cookies or yogurt, the product often tastes bland, so they frequently add extra sugar or refined starch to restore flavor and texture. As a result, a low-fat item can contain nearly the same number of calories as the regular version.' }
    ],
    question: 'Why might a low-fat snack have almost as many calories as a regular one?',
    options: [
      'Low-fat snacks are usually sold in much larger portion sizes.',
      'Producers often add sugar or starch to compensate for lost flavor.',
      'Natural ingredients contain more calories than artificial flavors.',
      'Removing fat slows down how quickly the body digests food.'
    ],
    answer: 1,
    jaScript: '「低脂肪」と表示されたスナックが自動的に健康的とは限りません。メーカーがクッキーやヨーグルトから脂肪を除くと味が薄くなるため、風味や食感を補うために砂糖や精製デンプンを追加することが多いのです。その結果、低脂肪製品でも通常版とほぼ同じカロリーになることがあります。',
    evidence: 'they frequently add extra sugar or refined starch to restore flavor and texture.',
    explanation: '風味・食感を補うために砂糖やデンプンを加えることが高カロリーの原因です。',
    trapType: '根拠不足型（ポーションサイズや消化速度は言及なし）'
  },

  /* ================= Part 1C: Visual / Chart Selection (Q21 - Q25) ================= */
  {
    id: 'L-1C-21', num: 21, part: '1C',
    situation: 'Listen to a report on how university students commute to campus. Choose the chart that matches the description.',
    turns: [
      { speaker: 'M', text: 'A campus transit survey asked students about their primary way of commuting. Train was the most common choice at forty percent. Bicycle came second, at half as much as train. Walking was slightly higher than bus, at twenty-five percent, leaving bus with the remaining share of fifteen percent.' }
    ],
    question: 'Which chart best represents the survey results?',
    chartOptions: [
      {
        type: 'bar', title: 'Chart A', unit: '%', max: 50,
        items: [{ label: 'Train', value: 40 }, { label: 'Bike', value: 20 }, { label: 'Walk', value: 25 }, { label: 'Bus', value: 15 }]
      },
      {
        type: 'bar', title: 'Chart B', unit: '%', max: 50,
        items: [{ label: 'Train', value: 40 }, { label: 'Bike', value: 25 }, { label: 'Walk', value: 20 }, { label: 'Bus', value: 15 }]
      },
      {
        type: 'bar', title: 'Chart C', unit: '%', max: 50,
        items: [{ label: 'Train', value: 40 }, { label: 'Bike', value: 20 }, { label: 'Walk', value: 15 }, { label: 'Bus', value: 25 }]
      },
      {
        type: 'bar', title: 'Chart D', unit: '%', max: 50,
        items: [{ label: 'Train', value: 45 }, { label: 'Bike', value: 20 }, { label: 'Walk', value: 20 }, { label: 'Bus', value: 15 }]
      }
    ],
    options: ['Chart A', 'Chart B', 'Chart C', 'Chart D'],
    answer: 0,
    jaScript: '大学の通学調査で主な通学手段を尋ねました。電車が最多で40%。自転車は2番目に紹介され、電車の半分（20%）でした。徒歩はバスよりやや高く25%で、残りの15%がバスでした。',
    evidence: 'Train 40%, Bicycle half as much (20%), Walking 25%, Bus remaining share (15%).',
    explanation: 'half as much（半分）でBike=20%、Walk=25%、Bus=15%となるChart Aが正解です。',
    trapType: '数量型・対象混同型（BikeとWalk、WalkとBusの数値を入れ替えた誤答）'
  },
  {
    id: 'L-1C-22', num: 22, part: '1C',
    situation: 'Listen to a librarian describe annual e-book downloads from 2021 to 2024. Choose the matching graph.',
    turns: [
      { speaker: 'W', text: 'Library e-book downloads started at twelve thousand in 2021 and climbed steadily to eighteen thousand in 2022. In 2023, downloads dipped slightly to sixteen thousand when more students returned to reading printed reserves. However, in 2024 they rebounded sharply, reaching a four-year peak of twenty-four thousand.' }
    ],
    question: 'Which line graph matches the trend in e-book downloads?',
    chartOptions: [
      {
        type: 'line', title: 'Graph A (×1,000)', max: 30,
        labels: ['21', '22', '23', '24'], values: [12, 18, 20, 24]
      },
      {
        type: 'line', title: 'Graph B (×1,000)', max: 30,
        labels: ['21', '22', '23', '24'], values: [12, 18, 16, 24]
      },
      {
        type: 'line', title: 'Graph C (×1,000)', max: 30,
        labels: ['21', '22', '23', '24'], values: [12, 16, 18, 24]
      },
      {
        type: 'line', title: 'Graph D (×1,000)', max: 30,
        labels: ['21', '22', '23', '24'], values: [12, 18, 16, 19]
      }
    ],
    options: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
    answer: 1,
    jaScript: '図書館の電子書籍ダウンロード数は2021年に12,000件から始まり、2022年に18,000件へ着実に増加しました。2023年は紙の指定図書利用が増えたため16,000件へわずかに減少しましたが、2024年に急回復して4年間で最高の24,000件に達しました。',
    evidence: '12,000 (2021) → 18,000 (2022) → dipped slightly to 16,000 (2023) → peak of 24,000 (2024).',
    explanation: '2023年に一度16へ微減してから2024年に24へ急上昇する Graph B が一致します。',
    trapType: '推移反転型（2023年だけ増加させたGraph A、2022と2023を逆転させたGraph C）'
  },
  {
    id: 'L-1C-23', num: 23, part: '1C',
    situation: 'Listen to a club treasurer explain how the annual budget is divided across four categories.',
    turns: [
      { speaker: 'M', text: 'Our debate club spent half of its annual budget on travel to tournaments. Equipment took up twenty percent, while guest workshops accounted for slightly less than equipment, at fifteen percent. The remaining share—also fifteen percent—went to printing and publicity.' }
    ],
    question: 'Which chart accurately shows the club budget breakdown?',
    chartOptions: [
      {
        type: 'bar', title: 'Chart A', unit: '%', max: 60,
        items: [{ label: 'Travel', value: 50 }, { label: 'Equip', value: 20 }, { label: 'Work', value: 15 }, { label: 'Print', value: 15 }]
      },
      {
        type: 'bar', title: 'Chart B', unit: '%', max: 60,
        items: [{ label: 'Travel', value: 50 }, { label: 'Equip', value: 15 }, { label: 'Work', value: 20 }, { label: 'Print', value: 15 }]
      },
      {
        type: 'bar', title: 'Chart C', unit: '%', max: 60,
        items: [{ label: 'Travel', value: 45 }, { label: 'Equip', value: 20 }, { label: 'Work', value: 20 }, { label: 'Print', value: 15 }]
      },
      {
        type: 'bar', title: 'Chart D', unit: '%', max: 60,
        items: [{ label: 'Travel', value: 50 }, { label: 'Equip', value: 25 }, { label: 'Work', value: 15 }, { label: 'Print', value: 10 }]
      }
    ],
    options: ['Chart A', 'Chart B', 'Chart C', 'Chart D'],
    answer: 0,
    jaScript: 'ディベート部は年間予算の半分（50%）を大会遠征費に充てました。備品は20%、ゲストワークショップは備品よりやや少ない15%でした。残りの15%が印刷・広報費です。',
    evidence: 'half (50%) travel, 20% equipment, slightly less (15%) workshops, remaining share (15%) printing.',
    explanation: '50 / 20 / 15 / 15 の比率を示す Chart A が正解です。',
    trapType: '対象混同型・数量型（EquipとWorkの入れ替え、合計調整による数値改変）'
  },
  {
    id: 'L-1C-24', num: 24, part: '1C',
    situation: 'Listen to a short weather summary showing average monthly rainfall in millimeters.',
    turns: [
      { speaker: 'W', text: 'In this coastal town, rainfall drops from eighty millimeters in May to sixty millimeters in June. July is the driest of the four months at just thirty millimeters. Then, late-summer storms push August rainfall back up to ninety millimeters, making it the wettest month in the period.' }
    ],
    question: 'Which graph corresponds to the rainfall summary?',
    chartOptions: [
      {
        type: 'line', title: 'Graph A (mm)', max: 100,
        labels: ['May', 'Jun', 'Jul', 'Aug'], values: [80, 60, 40, 70]
      },
      {
        type: 'line', title: 'Graph B (mm)', max: 100,
        labels: ['May', 'Jun', 'Jul', 'Aug'], values: [80, 30, 60, 90]
      },
      {
        type: 'line', title: 'Graph C (mm)', max: 100,
        labels: ['May', 'Jun', 'Jul', 'Aug'], values: [80, 60, 30, 90]
      },
      {
        type: 'line', title: 'Graph D (mm)', max: 100,
        labels: ['May', 'Jun', 'Jul', 'Aug'], values: [90, 60, 30, 80]
      }
    ],
    options: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
    answer: 2,
    jaScript: 'この沿岸の町では降水量が5月の80mmから6月の60mmへ減少します。7月は4か月で最も少なくわずか30mmです。その後、晩夏の嵐で8月は90mmまで跳ね上がり、期間中で最も降水量が多い月になります。',
    evidence: 'May 80 → June 60 → July 30 (driest) → August 90 (wettest).',
    explanation: '7月が最低(30)、8月が最高(90)となる Graph C が正解です。',
    trapType: '時系列・対象混同型（5月と8月を入れ替えたGraph D、6月と7月を入れ替えたGraph B）'
  },
  {
    id: 'L-1C-25', num: 25, part: '1C',
    situation: 'Listen to a comparison of enrollment numbers in four language courses this semester.',
    turns: [
      { speaker: 'M', text: 'Among our four introductory language electives, Spanish has the largest enrollment with sixty students. French has two-thirds as many students as Spanish, at forty. German is slightly higher than Italian—thirty students took German, while Italian enrolled twenty-five.' }
    ],
    question: 'Which chart matches the course enrollment figures?',
    chartOptions: [
      {
        type: 'bar', title: 'Chart A', unit: '', max: 70,
        items: [{ label: 'Span', value: 60 }, { label: 'Fren', value: 45 }, { label: 'Germ', value: 30 }, { label: 'Ital', value: 25 }]
      },
      {
        type: 'bar', title: 'Chart B', unit: '', max: 70,
        items: [{ label: 'Span', value: 60 }, { label: 'Fren', value: 40 }, { label: 'Germ', value: 25 }, { label: 'Ital', value: 30 }]
      },
      {
        type: 'bar', title: 'Chart C', unit: '', max: 70,
        items: [{ label: 'Span', value: 50 }, { label: 'Fren', value: 40 }, { label: 'Germ', value: 30 }, { label: 'Ital', value: 25 }]
      },
      {
        type: 'bar', title: 'Chart D', unit: '', max: 70,
        items: [{ label: 'Span', value: 60 }, { label: 'Fren', value: 40 }, { label: 'Germ', value: 30 }, { label: 'Ital', value: 25 }]
      }
    ],
    options: ['Chart A', 'Chart B', 'Chart C', 'Chart D'],
    answer: 3,
    jaScript: '入門語学選択4科目のうち、スペイン語が最多で60名です。フランス語はその3分の2にあたる40名。ドイツ語はイタリア語よりやや多く30名で、イタリア語は25名でした。',
    evidence: 'Spanish 60, French two-thirds (40), German 30, Italian 25.',
    explanation: '60 / 40 / 30 / 25 の Chart D が完全一致します。',
    trapType: '数量型・対象混同型（GermanとItalianの逆転、Frenchの数値ズレ）'
  }
];
