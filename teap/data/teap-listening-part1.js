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
  {
    "id": "L-1A-01",
    "num": 1,
    "part": "1A",
    "situation": "Two students are talking about a summer internship application.",
    "turns": [
      {
        "speaker": "M",
        "text": "Hey, did you finish your application for the summer internship at the publishing company?",
        "audio": "/teap/audio/l-1a-01-t1.mp3"
      },
      {
        "speaker": "W",
        "text": "Almost. I wrote my statement of purpose, but I still need to get a recommendation letter from Professor Lane.",
        "audio": "/teap/audio/l-1a-01-t2.mp3"
      },
      {
        "speaker": "M",
        "text": "You had better hurry. I heard the deadline was moved up to this Friday.",
        "audio": "/teap/audio/l-1a-01-t3.mp3"
      },
      {
        "speaker": "W",
        "text": "This Friday? The company website said the end of the month. Are you sure?",
        "audio": "/teap/audio/l-1a-01-t4.mp3"
      },
      {
        "speaker": "M",
        "text": "The company sent an email yesterday. They changed it because they received a lot more applications than they expected this year.",
        "audio": "/teap/audio/l-1a-01-t5.mp3"
      },
      {
        "speaker": "W",
        "text": "Then I will email Professor Lane right after lunch and ask her to write it today.",
        "audio": "/teap/audio/l-1a-01-t6.mp3"
      }
    ],
    "question": "When must the woman submit her internship application?",
    "options": [
      "At the end of this month",
      "By the end of this week",
      "On the first Monday of next month",
      "Two weeks from today"
    ],
    "answer": 1,
    "audioQuestion": "/teap/audio/l-1a-01-q.mp3",
    "jaScript": "男：ねえ、出版社での夏のインターンシップの応募は終わった？\n女：ほぼね。志望理由書は書いたけど、まだレーン教授の推薦状が必要なの。\n男：急いだほうがいいよ。締め切りが今週の金曜日に早まったって聞いたよ。\n女：今週の金曜日？会社のウェブサイトには月末って書いてあったけど。本当？\n男：会社が昨日メールを送ってきたんだ。予想より応募が多かったから変更したらしいよ。\n女：じゃあ、昼食のあとすぐにレーン教授にメールして、今日お願いするわ。",
    "evidence": "the deadline was moved up to this Friday",
    "explanation": "会社からのメールで締め切りが月末から今週の金曜日に前倒しされたので、正解は「今週末まで」です。ウェブサイトに書かれた「月末」は古い情報で、それを選ぶのが罠です。",
    "trapType": "古い情報の提示"
  },
  {
    "id": "L-1A-02",
    "num": 2,
    "part": "1A",
    "situation": "A student is talking with a staff member at the campus gym.",
    "turns": [
      {
        "speaker": "W",
        "text": "Excuse me, is this where I sign up for the gym orientation?",
        "audio": "/teap/audio/l-1a-02-t1.mp3"
      },
      {
        "speaker": "M",
        "text": "Yes. New members have to complete one session before they can use the weight room.",
        "audio": "/teap/audio/l-1a-02-t2.mp3"
      },
      {
        "speaker": "W",
        "text": "I see. I just joined this week. Are there any sessions still available this coming weekend?",
        "audio": "/teap/audio/l-1a-02-t3.mp3"
      },
      {
        "speaker": "M",
        "text": "Saturday is fully booked, but there is a spot open on Sunday at ten.",
        "audio": "/teap/audio/l-1a-02-t4.mp3"
      },
      {
        "speaker": "W",
        "text": "Sunday works for me. Do I need to bring anything special?",
        "audio": "/teap/audio/l-1a-02-t5.mp3"
      },
      {
        "speaker": "M",
        "text": "Just your student ID and indoor shoes. We provide towels and a locker key, and the pool is included in your membership too.",
        "audio": "/teap/audio/l-1a-02-t6.mp3"
      }
    ],
    "question": "What will the woman probably do on Sunday morning?",
    "options": [
      "Use the weight room for the first time",
      "Go swimming in the gym pool",
      "Attend an introductory session for new members",
      "Book a session for the following Saturday"
    ],
    "answer": 2,
    "audioQuestion": "/teap/audio/l-1a-02-q.mp3",
    "jaScript": "女：すみません、ジムのオリエンテーションの申し込みはここですか？\n男：はい。新規会員はウェイトルームを使う前に1回セッションを受ける必要があります。\n女：そうなんですね。今週入会したばかりです。今週末に空いているセッションはありますか？\n男：土曜日は満員ですが、日曜日の10時に空きがあります。\n女：日曜日で大丈夫です。何か持っていくものはありますか？\n男：学生証と室内シューズだけで大丈夫です。タオルはこちらで用意しますし、プールも会員料金に含まれています。",
    "evidence": "there is a spot open on Sunday at ten",
    "explanation": "日曜10時のオリエンテーションに空きがあり、女性は「日曜日で大丈夫」と答えたので、新規会員向けセッションに参加すると分かります。ウェイトルームはセッション受講後でないと使えず、土曜日は満員なので他の選択肢は誤りです。",
    "trapType": "条件を満たしていない選択肢の提示"
  },
  {
    "id": "L-1A-03",
    "num": 3,
    "part": "1A",
    "situation": "A student is asking a friend for advice about something he has lost.",
    "turns": [
      {
        "speaker": "M",
        "text": "I cannot find my student ID anywhere. I think I left it in the cafeteria.",
        "audio": "/teap/audio/l-1a-03-t1.mp3"
      },
      {
        "speaker": "W",
        "text": "Did you check with the lost and found office? They collect lost items every evening.",
        "audio": "/teap/audio/l-1a-03-t2.mp3"
      },
      {
        "speaker": "M",
        "text": "I did, this morning. It was not there. Without the card, I cannot even get into the library.",
        "audio": "/teap/audio/l-1a-03-t3.mp3"
      },
      {
        "speaker": "W",
        "text": "Then you should report it at the student services desk. They can block the card and issue a temporary one.",
        "audio": "/teap/audio/l-1a-03-t4.mp3"
      },
      {
        "speaker": "M",
        "text": "A temporary card would really help. I have an exam on Thursday, and I need the card to enter the room.",
        "audio": "/teap/audio/l-1a-03-t5.mp3"
      },
      {
        "speaker": "W",
        "text": "The desk is on the first floor of the administration building. It closes at five, so you should go soon.",
        "audio": "/teap/audio/l-1a-03-t6.mp3"
      }
    ],
    "question": "What is the man's problem?",
    "options": [
      "He has lost the card he needs to enter campus facilities",
      "He missed the deadline to register for an exam",
      "He cannot find the administration building",
      "He was charged for a card he never received"
    ],
    "answer": 0,
    "audioQuestion": "/teap/audio/l-1a-03-q.mp3",
    "jaScript": "男：学生証がどこにも見つからないんだ。食堂に置き忘れたと思う。\n女：遺失物取扱所には確認した？毎晩、落とし物が集められるのよ。\n男：今朝確認したけど、なかったんだ。カードがないと図書館にすら入れない。\n女：じゃあ学生サービスデスクに届け出たほうがいいわ。カードを停止して、仮のカードを発行してもらえるよ。\n男：仮のカードがあれば助かるよ。木曜日に試験があって、入室にカードが必要なんだ。\n女：デスクは管理棟の1階にあるよ。5時に閉まるから、早めに行ったほうがいいわ。",
    "evidence": "I cannot find my student ID anywhere",
    "explanation": "男性の問題は学生証を紛失したことです。試験は木曜日にあるものの、申し込み締め切りを逃したわけではなく、カードがないと試験室に入れないことが困りごとの本質です。",
    "trapType": "付随情報の混同"
  },
  {
    "id": "L-1A-04",
    "num": 4,
    "part": "1A",
    "situation": "Two students are dividing up the work for a group project.",
    "turns": [
      {
        "speaker": "W",
        "text": "Okay, let us decide who does what for our group marketing project presentation.",
        "audio": "/teap/audio/l-1a-04-t1.mp3"
      },
      {
        "speaker": "M",
        "text": "I can collect the survey data. I am pretty good with spreadsheets and charts.",
        "audio": "/teap/audio/l-1a-04-t2.mp3"
      },
      {
        "speaker": "W",
        "text": "Great. Then I will design the slides, and Ken can write the introduction.",
        "audio": "/teap/audio/l-1a-04-t3.mp3"
      },
      {
        "speaker": "M",
        "text": "Actually, Ken said he would rather do the data analysis. He took a statistics course just last term and got a good grade.",
        "audio": "/teap/audio/l-1a-04-t4.mp3"
      },
      {
        "speaker": "W",
        "text": "Fine. Then I will write the introduction myself, and keep the slides as my job too.",
        "audio": "/teap/audio/l-1a-04-t5.mp3"
      },
      {
        "speaker": "M",
        "text": "That works. I will handle the survey data and write the conclusion at the end.",
        "audio": "/teap/audio/l-1a-04-t6.mp3"
      }
    ],
    "question": "Who will design the presentation slides?",
    "options": [
      "Ken",
      "The man",
      "Both the man and the woman",
      "The woman"
    ],
    "answer": 3,
    "audioQuestion": "/teap/audio/l-1a-04-q.mp3",
    "jaScript": "女：さて、マーケティングのグループプロジェクトの発表で、誰が何を担当するか決めましょう。\n男：僕はアンケートデータの収集ができるよ。表計算は得意なんだ。\n女：いいわね。じゃあ私はスライドをデザインして、ケンは序論を書く、でどう？\n男：実はケンはデータ分析のほうがいいって言ってたよ。前学期に統計の授業を取ったから。\n女：わかった。じゃあ序論は私が書いて、スライドも引き続き私の担当にするわ。\n男：それでいこう。僕はアンケートと最後の結論を担当するよ。",
    "evidence": "I will design the slides",
    "explanation": "女性は最初にスライドのデザインを自分の担当とし、ケンの担当変更後も「スライドは引き続き私の担当」と確認しています。ケンは序論ではなくデータ分析に変わった点が罠です。",
    "trapType": "担当者の取り違え"
  },
  {
    "id": "L-1A-05",
    "num": 5,
    "part": "1A",
    "situation": "Two students who work at the same cafe are talking about their shifts.",
    "turns": [
      {
        "speaker": "M",
        "text": "Hey, Yuki, could you take my Saturday shift at the cafe this week?",
        "audio": "/teap/audio/l-1a-05-t1.mp3"
      },
      {
        "speaker": "W",
        "text": "This Saturday? I have a family dinner that evening. What time is your shift?",
        "audio": "/teap/audio/l-1a-05-t2.mp3"
      },
      {
        "speaker": "M",
        "text": "From two to six. I have to attend my younger sister's piano recital.",
        "audio": "/teap/audio/l-1a-05-t3.mp3"
      },
      {
        "speaker": "W",
        "text": "Two to six is fine, because my dinner starts at seven thirty. But could you cover my Sunday morning shift in return?",
        "audio": "/teap/audio/l-1a-05-t4.mp3"
      },
      {
        "speaker": "M",
        "text": "Sunday morning? I usually go jogging then, but that is a fair trade. Deal.",
        "audio": "/teap/audio/l-1a-05-t5.mp3"
      },
      {
        "speaker": "W",
        "text": "Great. I will tell the manager about the swap when I see her tonight.",
        "audio": "/teap/audio/l-1a-05-t6.mp3"
      }
    ],
    "question": "What will the man probably do on Sunday morning?",
    "options": [
      "Go jogging in the park as usual",
      "Work the woman's shift at the cafe",
      "Attend his sister's piano recital",
      "Have dinner with the woman's family"
    ],
    "answer": 1,
    "audioQuestion": "/teap/audio/l-1a-05-q.mp3",
    "jaScript": "男：ねえユキ、今週、僕の土曜日のカフェのシフト代わってくれない？\n女：今週の土曜日？その夜は家族と夕食の予定があるの。シフトは何時から何時？\n男：2時から6時だよ。妹のピアノの発表会に行かなきゃいけなくて。\n女：2時から6時なら大丈夫、夕食は7時半からだから。その代わり、私の日曜朝のシフトを代わってくれる？\n男：日曜の朝？いつもはジョギングしてるけど、それは公平な交換だね。いいよ。\n女：よかった。今夜マネージャーに会ったら交換のことを伝えておくね。",
    "evidence": "Sunday morning? I usually go jogging then, but that is a fair trade.",
    "explanation": "交換の条件として、男性は女性の日曜朝のシフトを代わることに同意しました。ジョギングは普段の習慣として述べられただけで、その日曜の朝はカフェで働くことになります。",
    "trapType": "普段の習慣との混同"
  },
  {
    "id": "L-1A-06",
    "num": 6,
    "part": "1A",
    "situation": "Two students living in a dormitory are talking about the laundry facilities.",
    "turns": [
      {
        "speaker": "W",
        "text": "The laundry room on our floor is always packed on weekends, especially in the evening.",
        "audio": "/teap/audio/l-1a-06-t1.mp3"
      },
      {
        "speaker": "M",
        "text": "I know. Yesterday I waited forty minutes just for a free machine, and two were out of order.",
        "audio": "/teap/audio/l-1a-06-t2.mp3"
      },
      {
        "speaker": "W",
        "text": "Someone told me the machines in the basement of Building C are usually empty in the morning.",
        "audio": "/teap/audio/l-1a-06-t3.mp3"
      },
      {
        "speaker": "M",
        "text": "Really? I thought that laundry room was only for graduate students.",
        "audio": "/teap/audio/l-1a-06-t4.mp3"
      },
      {
        "speaker": "W",
        "text": "That changed this semester. It is open to everyone now, and it costs the same.",
        "audio": "/teap/audio/l-1a-06-t5.mp3"
      },
      {
        "speaker": "M",
        "text": "Then I will try it tonight. Carrying my laundry all the way down three floors still beats waiting around here.",
        "audio": "/teap/audio/l-1a-06-t6.mp3"
      }
    ],
    "question": "What do we learn about the laundry room in Building C?",
    "options": [
      "It charges higher fees than other laundry rooms",
      "It is reserved for graduate students",
      "It became available to all students this semester",
      "It is usually crowded on weekends"
    ],
    "answer": 2,
    "audioQuestion": "/teap/audio/l-1a-06-q.mp3",
    "jaScript": "女：私たちのフロアの洗濯室、週末はいつも混んでるよね。\n男：ほんと。昨日は空きの洗濯機を40分も待ったし、2台は故障してたし。\n女：C棟の地下の洗濯機はいつも空いてるって誰かが言ってたよ。\n男：本当？あの洗濯室は大学院生専用だと思ってた。\n女：今学期から変わったの。今は全員使えて、料金も同じよ。\n男：じゃあ今夜試してみるよ。洗濯物を3階分運ぶほうが、待つよりましだ。",
    "evidence": "That changed this semester. It is open to everyone now",
    "explanation": "C棟の洗濯室は以前は大学院生専用でしたが、今学期から全学生に開放され、料金も他の洗濯室と同じです。「大学院生専用」は変更前の古いルールなので誤りです。",
    "trapType": "規則変更前の情報"
  },
  {
    "id": "L-1A-07",
    "num": 7,
    "part": "1A",
    "situation": "A student is asking a friend for advice about contacting a professor.",
    "turns": [
      {
        "speaker": "M",
        "text": "I am thinking of emailing Professor Ortiz to ask for an extension on the history essay, which is due this Thursday.",
        "audio": "/teap/audio/l-1a-07-t1.mp3"
      },
      {
        "speaker": "W",
        "text": "Why do you need more time?",
        "audio": "/teap/audio/l-1a-07-t2.mp3"
      },
      {
        "speaker": "M",
        "text": "My grandmother is in the hospital, and I have been visiting her at the hospital every day after classes.",
        "audio": "/teap/audio/l-1a-07-t3.mp3"
      },
      {
        "speaker": "W",
        "text": "That is a fair reason. Just be honest and explain the situation briefly and politely in the email.",
        "audio": "/teap/audio/l-1a-07-t4.mp3"
      },
      {
        "speaker": "M",
        "text": "Should I attach what I have written so far, to show I have started?",
        "audio": "/teap/audio/l-1a-07-t5.mp3"
      },
      {
        "speaker": "W",
        "text": "Yes, and suggest a new date yourself, maybe next Monday. Professors usually prefer a concrete proposal like that.",
        "audio": "/teap/audio/l-1a-07-t6.mp3"
      }
    ],
    "question": "What does the woman suggest the man do?",
    "options": [
      "Propose a specific new deadline in his message",
      "Visit the professor's office instead of writing",
      "Ask a classmate to explain his situation",
      "Submit the essay late without asking first"
    ],
    "answer": 0,
    "audioQuestion": "/teap/audio/l-1a-07-q.mp3",
    "jaScript": "男：歴史のエッセイの締め切り延長をお願いするために、オルティス教授にメールしようと思ってるんだ。締め切りは今週の木曜日なんだけど。\n女：どうして時間が必要なの？\n男：祖母が入院していて、授業のあと毎日お見舞いに行っているんだ。\n女：それは正当な理由ね。メールでは正直に、状況を簡潔に説明すればいいよ。\n男：ここまで書いた分を添付したほうがいいかな？始めてはいるって示すために。\n女：うん、それと新しい日付を自分から提案して。来週の月曜日とかね。教授は具体的な提案を好むよ。",
    "evidence": "suggest a new date yourself, maybe next Monday",
    "explanation": "女性の助言は、メールの中で新しい提出日を自分から具体的に提案することです。研究室を訪ねる、友人に説明してもらう、無断で遅れて出すといった方法は会話に出てきません。",
    "trapType": "言及されていない手段の提示"
  },
  {
    "id": "L-1A-08",
    "num": 8,
    "part": "1A",
    "situation": "A club member is talking with a student at a recruitment booth on campus.",
    "turns": [
      {
        "speaker": "W",
        "text": "Hi! Have you ever tried rowing? Our club is looking for new members this spring.",
        "audio": "/teap/audio/l-1a-08-t1.mp3"
      },
      {
        "speaker": "M",
        "text": "Rowing? I have seen the boats on the river, but I have no experience at all.",
        "audio": "/teap/audio/l-1a-08-t2.mp3"
      },
      {
        "speaker": "W",
        "text": "That is fine. Most of our members started as complete beginners when they joined, so no experience is needed.",
        "audio": "/teap/audio/l-1a-08-t3.mp3"
      },
      {
        "speaker": "M",
        "text": "When do you usually practice?",
        "audio": "/teap/audio/l-1a-08-t4.mp3"
      },
      {
        "speaker": "W",
        "text": "Tuesday and Thursday mornings at six, before classes. We also have a trial session this Saturday.",
        "audio": "/teap/audio/l-1a-08-t5.mp3"
      },
      {
        "speaker": "M",
        "text": "Six in the morning is early, but the trial sounds fun. I will write my name on the sign-up list.",
        "audio": "/teap/audio/l-1a-08-t6.mp3"
      }
    ],
    "question": "When does the rowing club hold its regular practice?",
    "options": [
      "On Saturday mornings",
      "On weekday evenings after classes",
      "Early on Sunday and Wednesday mornings",
      "Early on Tuesday and Thursday mornings"
    ],
    "answer": 3,
    "audioQuestion": "/teap/audio/l-1a-08-q.mp3",
    "jaScript": "女：こんにちは！ボート競技をやったことはありますか？私たちのクラブはこの春、新入部員を募集しています。\n男：ボート？川でボートは見たことがあるけど、経験はまったくありません。\n女：大丈夫ですよ。部員のほとんどが入部時は完全な初心者だったので、経験は必要ありません。\n男：普段はいつ練習しているんですか？\n女：火曜日と木曜日の朝6時、授業の前です。今週の土曜日には体験セッションもありますよ。\n男：朝6時は早いですね。でも体験は楽しそうです。参加者リストに名前を書いておきます。",
    "evidence": "Tuesday and Thursday mornings at six, before classes",
    "explanation": "通常の練習は火曜日と木曜日の朝6時です。土曜日は体験セッションの日で、通常練習ではないため「土曜の朝」は誤りです。",
    "trapType": "体験会と通常練習の混同"
  },
  {
    "id": "L-1A-09",
    "num": 9,
    "part": "1A",
    "situation": "A student is talking with a staff member at the campus copy center.",
    "turns": [
      {
        "speaker": "M",
        "text": "Excuse me, my print card stopped working. The machine says I have no credits left.",
        "audio": "/teap/audio/l-1a-09-t1.mp3"
      },
      {
        "speaker": "W",
        "text": "Let me check your account. You have used all five hundred pages for this semester.",
        "audio": "/teap/audio/l-1a-09-t2.mp3"
      },
      {
        "speaker": "M",
        "text": "Already? It is only October. Can I buy additional credits here?",
        "audio": "/teap/audio/l-1a-09-t3.mp3"
      },
      {
        "speaker": "W",
        "text": "Yes, in blocks of one hundred pages. But the library also offers free scanning, if that helps.",
        "audio": "/teap/audio/l-1a-09-t4.mp3"
      },
      {
        "speaker": "M",
        "text": "I need paper copies for my thesis advisor. She does not accept digital files at all.",
        "audio": "/teap/audio/l-1a-09-t5.mp3"
      },
      {
        "speaker": "W",
        "text": "Then buy just one block for now. You can always add more later if you run out again.",
        "audio": "/teap/audio/l-1a-09-t6.mp3"
      }
    ],
    "question": "Why did the man's print card stop working?",
    "options": [
      "The copy machines were out of order",
      "He had printed the maximum number of pages allowed for the term",
      "His card had expired at the end of last month",
      "The library had closed his account"
    ],
    "answer": 1,
    "audioQuestion": "/teap/audio/l-1a-09-q.mp3",
    "jaScript": "男：すみません、プリントカードが使えなくなりました。残りクレジットがないと表示されるんです。\n女：アカウントを確認しますね。今学期分の500ページをすべて使い切っています。\n男：もうですか？まだ10月なのに。ここでクレジットを追加購入できますか？\n女：はい、100ページ単位で買えます。ただ、図書館では無料スキャンもできますよ。\n男：論文の指導教員に紙のコピーが必要なんです。デジタルファイルは受け付けてもらえなくて。\n女：では今は1ブロックだけ買ってください。足りなくなったら後で追加できます。",
    "evidence": "You have used all five hundred pages for this semester",
    "explanation": "カードが止まったのは、今学期の上限である500ページを使い切ったためです。100ページは追加購入の単位であって上限ではないので、数字を取り違えると誤答します。",
    "trapType": "数字の取り違え"
  },
  {
    "id": "L-1A-10",
    "num": 10,
    "part": "1A",
    "situation": "Two students are talking about an information session for an exchange program.",
    "turns": [
      {
        "speaker": "W",
        "text": "Are you going to the information session about the exchange program in Spain?",
        "audio": "/teap/audio/l-1a-10-t1.mp3"
      },
      {
        "speaker": "M",
        "text": "I was planning to, but it is at the same time as my economics lecture.",
        "audio": "/teap/audio/l-1a-10-t2.mp3"
      },
      {
        "speaker": "W",
        "text": "The study abroad office said they will post all the slides online afterward for students who miss it.",
        "audio": "/teap/audio/l-1a-10-t3.mp3"
      },
      {
        "speaker": "M",
        "text": "That helps, but I wanted to ask about the language requirement in person.",
        "audio": "/teap/audio/l-1a-10-t4.mp3"
      },
      {
        "speaker": "W",
        "text": "Then book a one-on-one advising appointment instead. I did that last month, and it was really useful.",
        "audio": "/teap/audio/l-1a-10-t5.mp3"
      },
      {
        "speaker": "M",
        "text": "Good idea. The application does not open until January, so there is really no rush to decide.",
        "audio": "/teap/audio/l-1a-10-t6.mp3"
      }
    ],
    "question": "Why will the man miss the information session?",
    "options": [
      "He has already attended a similar session",
      "He prefers to read the slides online",
      "It takes place during one of his classes",
      "The application period has already ended"
    ],
    "answer": 2,
    "audioQuestion": "/teap/audio/l-1a-10-q.mp3",
    "jaScript": "女：スペインへの交換留学プログラムの説明会に行く？\n男：行くつもりだったけど、経済学の講義と同じ時間なんだ。\n女：留学オフィスが、後でスライドをオンラインに載せるって言ってたよ。\n男：それは助かるけど、語学要件について直接聞きたかったんだ。\n女：じゃあ代わりに個別の相談予約を取ったら？私は先月そうしたけど、すごく役に立ったよ。\n男：いい考えだね。応募開始は1月だから、決めるのを急ぐ必要はないし。",
    "evidence": "it is at the same time as my economics lecture",
    "explanation": "男性が説明会に行けないのは、経済学の講義と時間が重なっているためです。スライドが後で公開されるのは欠席への代替情報であって、行かない理由ではありません。",
    "trapType": "理由と代替案の混同"
  },
  {
    "id": "L-1B-11",
    "num": 11,
    "part": "1B",
    "situation": "Listen to an announcement at a planetarium show.",
    "turns": [
      {
        "speaker": "M",
        "text": "Good evening, and welcome to the Astronomy Club's monthly planetarium show. Tonight's program is called 'Moons of the Outer Planets,' and it focuses on the icy moons that orbit Jupiter and Saturn. During the show, you will see images of Europa, a moon that may hide an ocean beneath its frozen surface, and Enceladus, which sprays water vapor into space through cracks near its south pole. After the main presentation, club members will set up two telescopes on the roof terrace, weather permitting, so visitors can observe Saturn's rings directly. Because seating inside the dome is limited to sixty people, we ask latecomers to wait in the lobby until the second showing begins at eight thirty.",
        "audio": "/teap/audio/l-1b-11-t1.mp3"
      }
    ],
    "question": "What are visitors who arrive late asked to do?",
    "options": [
      "Take photographs from the roof terrace",
      "Observe Saturn's rings through a telescope",
      "Wait in the lobby for the second showing",
      "Return for the show next month"
    ],
    "answer": 2,
    "audioQuestion": "/teap/audio/l-1b-11-q.mp3",
    "jaScript": "男：こんばんは。天文学クラブの月例プラネタリウムショーへようこそ。今夜のプログラムは「外惑星の衛星」と題し、木星と土星の周りを回る氷の衛星に焦点を当てます。ショーでは、凍った表面の下に海が隠れているかもしれない衛星エウロパと、南極付近の割れ目から水蒸気を宇宙へ噴き出すエンケラドスの映像をご覧いただきます。メインの上映の後、天候が許せば、クラブのメンバーが屋上テラスに望遠鏡を2台設置し、土星の環を直接観察していただけます。ドーム内の座席は60席限りですので、遅れて来られた方には、午後8時30分に始まる2回目の上映までロビーでお待ちいただくようお願いしています。",
    "evidence": "we ask latecomers to wait in the lobby until the second showing begins at eight thirty",
    "explanation": "ドーム内の座席は60席に限られるため、遅れた人は午後8時30分からの2回目の上映までロビーで待つよう求められています。望遠鏡で土星の環を見るのは上映後の活動であり、遅刻者への指示ではありません。",
    "trapType": "細部のすり替え"
  },
  {
    "id": "L-1B-12",
    "num": 12,
    "part": "1B",
    "situation": "Listen to a teacher giving instructions for a field trip.",
    "turns": [
      {
        "speaker": "W",
        "text": "Before we leave for the coast on Saturday, let me go over a few important points about our geology field trip. We will meet at the east gate at seven in the morning, and the bus will leave exactly fifteen minutes later, so please do not be late. At the site, we will examine layers of sandstone and shale along the cliff path and collect small rock samples for next week's laboratory session. Everyone must wear sturdy shoes, because the path can be slippery after rain, and the department will provide helmets and gloves. Please note that swimming is not allowed at this beach, even during the lunch break, as the currents there are strong and dangerous.",
        "audio": "/teap/audio/l-1b-12-t1.mp3"
      }
    ],
    "question": "Why must students wear sturdy shoes?",
    "options": [
      "The path may become slippery after rain",
      "They will climb a steep cliff face",
      "Helmets and gloves will not be provided",
      "They will collect samples in the sea"
    ],
    "answer": 0,
    "audioQuestion": "/teap/audio/l-1b-12-q.mp3",
    "jaScript": "女：土曜日に海岸へ出発する前に、地質学の野外実習についていくつか大切な点を確認します。午前7時に東門に集合してください。バスはその15分後に正確に出発しますので、遅れないでください。現地では、崖沿いの小道で砂岩と頁岩の層を観察し、来週の実験の授業のために小さな岩石標本を採取します。小道は雨の後だと滑りやすくなることがあるので、全員が丈夫な靴を履いてください。ヘルメットと手袋は学科が用意します。なお、この海岸では昼休みの間でも泳ぐことはできません。潮の流れが強くて危険だからです。",
    "evidence": "the path can be slippery after rain",
    "explanation": "小道は雨の後で滑りやすくなることがあるため、丈夫な靴を履くよう指示されています。ヘルメットと手袋は学科が用意すると明言されており、海で標本を集めるとも言っていません。",
    "trapType": "言及されていない内容"
  },
  {
    "id": "L-1B-13",
    "num": 13,
    "part": "1B",
    "situation": "Listen to a talk about cognitive science.",
    "turns": [
      {
        "speaker": "M",
        "text": "Many students believe they can study effectively while checking messages and watching videos, but research in cognitive science tells a different story. In one experiment, participants who switched rapidly between two tasks took about forty percent longer to finish both than participants who completed one task at a time. The reason is that the brain needs a moment to refocus each time attention shifts, and these small delays quickly add up. Interestingly, the people who multitasked the most were often the most confident about their performance, even though their test scores were the lowest. So the practical lesson is simple: when accuracy matters, do one thing at a time, and silence your phone.",
        "audio": "/teap/audio/l-1b-13-t1.mp3"
      }
    ],
    "question": "What can be inferred about the people who multitasked the most?",
    "options": [
      "They finished both tasks more quickly than others",
      "They were confident about results that were actually poor",
      "They avoided checking their phones during the experiment",
      "They scored highest when accuracy was required"
    ],
    "answer": 1,
    "audioQuestion": "/teap/audio/l-1b-13-q.mp3",
    "jaScript": "男：多くの学生は、メッセージを確認したり動画を見たりしながらでも効果的に勉強できると信じていますが、認知科学の研究は違う結果を示しています。ある実験では、2つの課題をすばやく切り替えながら行った参加者は、1つずつ順番に終えた参加者よりも、両方を終えるのに約40パーセント長く時間がかかりました。その理由は、注意が移るたびに脳が再び集中するのに少し時間が必要で、こうした小さな遅れがすぐに積み重なるからです。興味深いことに、最もマルチタスクをしていた人たちは、テストの点数が最も低かったにもかかわらず、自分の出来について最も自信を持っていることが多かったのです。ですから実践的な教訓は単純です。正確さが大切なときは、一度に1つのことに取り組み、電話をマナーモードにしておきましょう。",
    "evidence": "the people who multitasked the most were often the most confident about their performance, even though their test scores were the lowest",
    "explanation": "最もマルチタスクをしていた人たちは、テストの点数が最も低かったにもかかわらず、自分の出来に最も自信を持っていました。つまり、実際の成績が悪いのに自分の力を過大評価していたと推測できます。",
    "trapType": "本文と逆の内容"
  },
  {
    "id": "L-1B-14",
    "num": 14,
    "part": "1B",
    "situation": "Listen to an announcement from a campus health center.",
    "turns": [
      {
        "speaker": "W",
        "text": "This is an announcement from the Campus Health Center. Free influenza vaccinations will be offered to all registered students from Monday, November tenth, through Friday, November fourteenth, between nine in the morning and four in the afternoon. No appointment is necessary, but you must bring your student ID card, as vaccinations cannot be given without it. This year, the vaccinations will take place in the gymnasium rather than in the Health Center itself, because a record number of students is expected. If you have a fever on the day, please postpone your visit until you feel better. Students with an allergy to eggs should speak to a nurse before receiving the vaccination, since the vaccine is produced using eggs.",
        "audio": "/teap/audio/l-1b-14-t1.mp3"
      }
    ],
    "question": "What must students bring in order to receive the vaccination?",
    "options": [
      "An appointment confirmation",
      "A letter from a nurse",
      "Proof of a normal temperature",
      "Their student ID card"
    ],
    "answer": 3,
    "audioQuestion": "/teap/audio/l-1b-14-q.mp3",
    "jaScript": "女：キャンパス保健センターからのお知らせです。無料のインフルエンザ予防接種を、登録している全学生を対象に、11月10日月曜日から11月14日金曜日まで、午前9時から午後4時の間に実施します。予約は必要ありませんが、学生証を必ず持ってきてください。学生証がないと接種を受けられません。今年は、記録的な数の学生が来ると予想されるため、接種は保健センターではなく体育館で行います。当日に熱がある場合は、体調が良くなるまで来訪を延期してください。卵アレルギーのある学生は、ワクチンが卵を使って作られているので、接種を受ける前に看護師に相談してください。",
    "evidence": "you must bring your student ID card",
    "explanation": "予約は不要ですが、学生証を持参しなければ接種は受けられません。本文で持参が必須とされているのは学生証だけです。",
    "trapType": "細部のすり替え"
  },
  {
    "id": "L-1B-15",
    "num": 15,
    "part": "1B",
    "situation": "Listen to a professor introducing a course.",
    "turns": [
      {
        "speaker": "M",
        "text": "Welcome to Introduction to Data Science. This course is designed for students with no previous programming experience, and its goal is to teach you how to work with real data from the first week. In the first half of the semester, you will learn to clean and organize messy data sets, such as sales records and weather observations. In the second half, we move on to creating charts and simple models that can predict trends. Assessment is based on three group projects and a final presentation; there is no written examination. All classes are held in the computer laboratory, so you do not need to bring your own laptop, although you may if you prefer.",
        "audio": "/teap/audio/l-1b-15-t1.mp3"
      }
    ],
    "question": "How will students be assessed in this course?",
    "options": [
      "By three group projects and a final presentation",
      "By a written examination at the end of the course",
      "By weekly tests of programming skills",
      "By an individual research paper"
    ],
    "answer": 0,
    "audioQuestion": "/teap/audio/l-1b-15-q.mp3",
    "jaScript": "男：「データサイエンス入門」へようこそ。この授業はプログラミングの経験がない学生のために設計されており、最初の週から実際のデータを扱う方法を学ぶことを目標としています。学期の前半では、売上記録や気象観測のような、整理されていないデータセットをきれいに整える方法を学びます。後半では、グラフの作成や、傾向を予測できる単純なモデルの構築へ進みます。成績評価は3つのグループプロジェクトと最終プレゼンテーションに基づいて行われ、筆記試験はありません。授業はすべてコンピューター室で行われるので、自分のノートパソコンを持ってくる必要はありませんが、希望すれば持ってきても構いません。",
    "evidence": "Assessment is based on three group projects and a final presentation",
    "explanation": "成績評価は3つのグループプロジェクトと最終プレゼンテーションに基づいており、筆記試験はないと明言されています。",
    "trapType": "本文と逆の内容"
  },
  {
    "id": "L-1B-16",
    "num": 16,
    "part": "1B",
    "situation": "Listen to a talk about an archaeological excavation.",
    "turns": [
      {
        "speaker": "W",
        "text": "Last spring, our archaeology team began excavating a field just outside the city, where farmers had reported finding fragments of old pottery. Within the first month, we uncovered the stone foundations of a large building, which we first believed to be a warehouse. However, the discovery of a row of cooking hearths and hundreds of animal bones changed our interpretation: the building was most likely a communal dining hall where workers gathered for meals roughly eight hundred years ago. This season, we are carefully mapping a smaller structure nearby, which may have stored grain. Every item is photographed and recorded before it is removed, so that future researchers can reconstruct exactly where each object was found.",
        "audio": "/teap/audio/l-1b-16-t1.mp3"
      }
    ],
    "question": "Why did the team change its interpretation of the large building?",
    "options": [
      "Farmers found fragments of pottery in the field",
      "A nearby structure may have stored grain",
      "Hearths and animal bones were found in the building",
      "Photographs revealed where objects had been placed"
    ],
    "answer": 2,
    "audioQuestion": "/teap/audio/l-1b-16-q.mp3",
    "jaScript": "女：昨年の春、私たちの考古学チームは、農家の人々が古い陶器の破片を見つけたと報告していた市街地のすぐ外にある畑の発掘を始めました。最初の1か月のうちに、私たちは大きな建物の石の基礎を掘り出しました。当初は倉庫だと考えていました。しかし、調理用のかまどが一列に並んでいることと、何百もの動物の骨が発見されたことで、私たちの解釈は変わりました。その建物は、およそ800年前に労働者たちが食事のために集まった共同の食堂だった可能性が最も高いのです。今シーズンは、穀物を保管していたかもしれない近くの小さな建物を慎重に測量しています。すべての出土品は、取り上げる前に写真を撮り記録されます。将来の研究者が、それぞれの物がどこで見つかったのかを正確に再現できるようにするためです。",
    "evidence": "the discovery of a row of cooking hearths and hundreds of animal bones changed our interpretation",
    "explanation": "当初は倉庫と考えられていましたが、調理用のかまどが一列に並んでいることと大量の動物の骨が見つかったことで、共同の食堂だったという解釈に変わりました。陶器の破片は発掘のきっかけであり、解釈が変わった理由ではありません。",
    "trapType": "理由の取り違え"
  },
  {
    "id": "L-1B-17",
    "num": 17,
    "part": "1B",
    "situation": "Listen to a talk about a university's energy project.",
    "turns": [
      {
        "speaker": "M",
        "text": "Good morning. I would like to update you on the university's renewable energy project. Over the summer, solar panels were installed on the roofs of five campus buildings, including the library and the sports center. These panels now supply about twenty percent of the electricity used on campus during daylight hours. The project was funded partly by the national government and partly by donations from graduates. Our next step is to install a battery system that can store energy produced on sunny days for use in the evening. According to our engineers' estimates, this battery system should reduce the university's electricity bills by a further ten percent and provide emergency power during blackouts.",
        "audio": "/teap/audio/l-1b-17-t1.mp3"
      }
    ],
    "question": "What is the purpose of the planned battery system?",
    "options": [
      "To supply twenty percent of the campus electricity",
      "To store energy for use in the evening",
      "To replace the panels on five buildings",
      "To raise donations from graduates"
    ],
    "answer": 1,
    "audioQuestion": "/teap/audio/l-1b-17-q.mp3",
    "jaScript": "男：おはようございます。大学の再生可能エネルギープロジェクトについてご報告します。夏の間に、図書館とスポーツセンターを含むキャンパス内の5つの建物の屋上にソーラーパネルが設置されました。これらのパネルは現在、日中の時間帯にキャンパスで使われる電力の約20パーセントを供給しています。このプロジェクトは、一部は国の資金で、一部は卒業生からの寄付でまかなわれました。次のステップは、晴れた日に発電したエネルギーを蓄えて夕方に使えるようにするバッテリーシステムを設置することです。技術者の見積もりによると、このバッテリーシステムにより大学の電気料金がさらに10パーセント削減され、停電時には非常用電源も供給できるはずです。",
    "evidence": "install a battery system that can store energy produced on sunny days for use in the evening",
    "explanation": "バッテリーシステムの目的は、晴れた日に発電したエネルギーを蓄えて夕方に使うことです。電力の約20パーセントを供給しているのはソーラーパネルの方であり、対象を取り違えないよう注意が必要です。",
    "trapType": "細部のすり替え"
  },
  {
    "id": "L-1B-18",
    "num": 18,
    "part": "1B",
    "situation": "Listen to an announcement about music auditions.",
    "turns": [
      {
        "speaker": "W",
        "text": "The University Music Ensemble is pleased to announce auditions for the spring season. Auditions will be held on Saturday, January eighteenth, in Room 204 of the Arts Building, starting at ten in the morning. This year, we are especially looking for students who play the viola and the French horn, as several of our senior members in those sections will graduate in March. Applicants should prepare a short piece of their own choice, lasting no more than three minutes, and be ready to play a few scales. You do not need to be a music major to audition; last year, about half of our members came from other departments, including engineering and economics. Sign-up sheets are posted outside the music office.",
        "audio": "/teap/audio/l-1b-18-t1.mp3"
      }
    ],
    "question": "Why does the ensemble especially need viola and French horn players?",
    "options": [
      "Because the auditions take place in January",
      "Because half of the members are from other departments",
      "Because a new section is being created",
      "Because senior members of those sections will graduate"
    ],
    "answer": 3,
    "audioQuestion": "/teap/audio/l-1b-18-q.mp3",
    "jaScript": "女：大学音楽アンサンブルは、春シーズンのオーディションについてお知らせします。オーディションは1月18日土曜日、午前10時から芸術棟204号室で行われます。今年は、ヴィオラとフレンチホルンのセクションの上級生メンバー数名が3月に卒業するため、これらの楽器を演奏できる学生を特に探しています。志願者は、3分以内の自分で選んだ短い曲を準備し、音階もいくつか演奏できるようにしておいてください。オーディションを受けるのに音楽専攻である必要はありません。昨年は、メンバーの約半数が工学や経済学を含む他の学部から来ていました。申し込み用紙は音楽事務室の外に掲示されています。",
    "evidence": "several of our senior members in those sections will graduate in March",
    "explanation": "ヴィオラとフレンチホルンのセクションでは上級生メンバー数名が3月に卒業するため、その穴を埋める学生を特に募集しています。他学部出身者が半数という情報は、募集理由とは関係ありません。",
    "trapType": "理由の取り違え"
  },
  {
    "id": "L-1B-19",
    "num": 19,
    "part": "1B",
    "situation": "Listen to an announcement about a study abroad fair.",
    "turns": [
      {
        "speaker": "M",
        "text": "Good afternoon, everyone. The annual Study Abroad Fair will take place next Wednesday in the Student Union Hall from one to five in the afternoon. Representatives from twenty partner universities in eight countries will be available to answer questions about their programs, tuition fees, and accommodation. In addition, students who studied abroad last year will give short talks about their experiences, including how they chose their courses and managed their budgets. If you are thinking of applying for the exchange program next year, we strongly recommend that you attend, because the application deadline is earlier than usual this year: all documents must be submitted by the end of November. Application forms will be available at the fair.",
        "audio": "/teap/audio/l-1b-19-t1.mp3"
      }
    ],
    "question": "Why does the speaker strongly recommend attending the fair?",
    "options": [
      "Because the application deadline is earlier than in other years",
      "Because twenty universities will attend",
      "Because application forms are available only at the fair",
      "Because former students will talk about budgets"
    ],
    "answer": 0,
    "audioQuestion": "/teap/audio/l-1b-19-q.mp3",
    "jaScript": "男：こんにちは、皆さん。毎年恒例の留学フェアが来週の水曜日、午後1時から5時まで学生会館ホールで開催されます。8か国20の提携大学の担当者が、プログラム、授業料、住居について質問に答えます。さらに、昨年留学した学生たちが、授業の選び方や予算の管理の仕方など、自分の経験について短い講演を行います。来年の交換留学プログラムへの応募を考えている方には、ぜひ参加することを強くおすすめします。今年は申請の締め切りが例年より早いからです。すべての書類は11月末までに提出しなければなりません。申請用紙はフェアで入手できます。",
    "evidence": "the application deadline is earlier than usual this year",
    "explanation": "強く参加を勧める理由は、今年は申請の締め切りが例年より早く、11月末までに書類を提出しなければならないからです。申請用紙がフェアでのみ入手できるとは言っておらず、そこが誤答の仕掛けです。",
    "trapType": "部分情報への飛びつき"
  },
  {
    "id": "L-1B-20",
    "num": 20,
    "part": "1B",
    "situation": "Listen to a talk at a laboratory open house.",
    "turns": [
      {
        "speaker": "W",
        "text": "Welcome to the Robotics Laboratory's open house. Our lab works on robots that can assist people in everyday settings, and today you will see three of our current projects. The first is a small robot designed to carry shopping bags for elderly customers in supermarkets. The second is a robot arm that helps hospital staff move heavy equipment safely. Our newest project, which we will demonstrate at two o'clock, is a robot that can guide visitors around museums by answering simple questions in three languages. Please feel free to take photographs during the demonstrations, but we ask you not to touch the robots, as their sensors are extremely sensitive and can be damaged easily.",
        "audio": "/teap/audio/l-1b-20-t1.mp3"
      }
    ],
    "question": "Why are visitors asked not to touch the robots?",
    "options": [
      "Because the robots are still being programmed",
      "Because visitors must not take photographs",
      "Because their sensors are easily damaged",
      "Because the newest robot speaks three languages"
    ],
    "answer": 2,
    "audioQuestion": "/teap/audio/l-1b-20-q.mp3",
    "jaScript": "女：ロボティクス研究室のオープンハウスへようこそ。私たちの研究室は、日常の場面で人々を助けられるロボットの研究をしており、今日は現在進めている3つのプロジェクトをご覧いただきます。1つ目は、スーパーマーケットで高齢のお客様のために買い物袋を運ぶよう設計された小型ロボットです。2つ目は、病院のスタッフが重い機器を安全に運ぶのを助けるロボットアームです。午後2時に実演する最新のプロジェクトは、3つの言語で簡単な質問に答えながら博物館の来館者を案内できるロボットです。実演中は自由に写真を撮っていただいて構いませんが、ロボットには触らないでください。センサーが非常に敏感で、簡単に壊れてしまうからです。",
    "evidence": "their sensors are extremely sensitive and can be damaged easily",
    "explanation": "ロボットのセンサーは非常に敏感で簡単に壊れてしまうため、触らないよう求められています。写真撮影は自由だと明言されているので、その選択肢は本文と逆です。",
    "trapType": "言及されていない理由"
  },
  {
    "id": "L-1C-21",
    "num": 21,
    "part": "1C",
    "situation": "Listen to a student reporting the results of a survey in the campus cafeteria. Choose the chart that matches the description.",
    "turns": [
      {
        "speaker": "W",
        "text": "We asked two hundred students in the campus cafeteria which lunch dish they liked best. Curry rice was the clear favorite, chosen by forty percent of the students. Noodle dishes came second, at thirty percent. Pasta was picked by twenty percent, which is exactly twice the share of the salad bowl, the least popular choice, at ten percent. So, although pasta and noodles are both popular, curry rice remains number one by a wide margin in this year's survey.",
        "audio": "/teap/audio/l-1c-21-t1.mp3"
      }
    ],
    "question": "Which chart best represents the survey results?",
    "chartOptions": [
      {
        "type": "bar",
        "title": "Chart A",
        "unit": "%",
        "max": 50,
        "items": [
          {
            "label": "Curry Rice",
            "value": 40
          },
          {
            "label": "Noodles",
            "value": 30
          },
          {
            "label": "Pasta",
            "value": 20
          },
          {
            "label": "Salad Bowl",
            "value": 10
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart B",
        "unit": "%",
        "max": 50,
        "items": [
          {
            "label": "Curry Rice",
            "value": 40
          },
          {
            "label": "Noodles",
            "value": 20
          },
          {
            "label": "Pasta",
            "value": 30
          },
          {
            "label": "Salad Bowl",
            "value": 10
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart C",
        "unit": "%",
        "max": 50,
        "items": [
          {
            "label": "Curry Rice",
            "value": 30
          },
          {
            "label": "Noodles",
            "value": 40
          },
          {
            "label": "Pasta",
            "value": 20
          },
          {
            "label": "Salad Bowl",
            "value": 10
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart D",
        "unit": "%",
        "max": 50,
        "items": [
          {
            "label": "Curry Rice",
            "value": 40
          },
          {
            "label": "Noodles",
            "value": 30
          },
          {
            "label": "Pasta",
            "value": 10
          },
          {
            "label": "Salad Bowl",
            "value": 20
          }
        ]
      }
    ],
    "options": [
      "Chart A",
      "Chart B",
      "Chart C",
      "Chart D"
    ],
    "answer": 0,
    "jaScript": "女：キャンパスの食堂で、学生200人に一番好きなランチメニューを聞きました。カレーライスが圧倒的人気で、40パーセントの学生に選ばれました。麺類が2番目で30パーセントでした。パスタは20パーセントで、これは最も人気のなかったサラダボウルの10パーセントのちょうど2倍です。パスタも麺類も人気ですが、今年の調査でもカレーライスが大きく差をつけて1位です。",
    "evidence": "Curry rice was the clear favorite, chosen by forty percent of the students. Noodle dishes came second, at thirty percent. Pasta was picked by twenty percent, which is exactly twice the share of the salad bowl, the least popular choice, at ten percent.",
    "explanation": "本文の数値はカレーライス40％、麺類30％、パスタ20％、サラダボウル10％（合計100％）。パスタはサラダボウルの「ちょうど2倍」という関係も20対10で一致します。Chart Aだけが4項目すべて一致します。Bは麺類とパスタ、Cはカレーライスと麺類、Dはパスタとサラダボウルの数値が入れ替わっています。",
    "trapType": "項目間の数値入れ替え"
  },
  {
    "id": "L-1C-22",
    "num": 22,
    "part": "1C",
    "situation": "Listen to a librarian describing how the library seats were used during one day. Choose the chart that matches the description.",
    "turns": [
      {
        "speaker": "M",
        "text": "Let me explain how the library seats were used yesterday. At nine in the morning, only twenty-five percent of the seats were taken. By noon, the figure had risen to sixty percent, as many students came in between classes. In the afternoon, at three o'clock, usage dropped to forty-five percent. Then, in the evening, it climbed sharply, and at six o'clock eighty percent of the seats were occupied, the busiest time of the whole day.",
        "audio": "/teap/audio/l-1c-22-t1.mp3"
      }
    ],
    "question": "Which chart best represents the seat usage?",
    "chartOptions": [
      {
        "type": "line",
        "title": "Chart A",
        "unit": "%",
        "max": 100,
        "labels": [
          "9 AM",
          "12 PM",
          "3 PM",
          "6 PM"
        ],
        "values": [
          60,
          25,
          45,
          80
        ]
      },
      {
        "type": "line",
        "title": "Chart B",
        "unit": "%",
        "max": 100,
        "labels": [
          "9 AM",
          "12 PM",
          "3 PM",
          "6 PM"
        ],
        "values": [
          25,
          45,
          60,
          80
        ]
      },
      {
        "type": "line",
        "title": "Chart C",
        "unit": "%",
        "max": 100,
        "labels": [
          "9 AM",
          "12 PM",
          "3 PM",
          "6 PM"
        ],
        "values": [
          25,
          60,
          45,
          80
        ]
      },
      {
        "type": "line",
        "title": "Chart D",
        "unit": "%",
        "max": 100,
        "labels": [
          "9 AM",
          "12 PM",
          "3 PM",
          "6 PM"
        ],
        "values": [
          25,
          60,
          80,
          45
        ]
      }
    ],
    "options": [
      "Chart A",
      "Chart B",
      "Chart C",
      "Chart D"
    ],
    "answer": 2,
    "jaScript": "男：昨日の図書館の座席利用状況を説明します。午前9時には、座席の25パーセントしか使われていませんでした。正午には、授業の合間に多くの学生が来たため、60パーセントまで上がりました。午後3時には利用率は45パーセントに下がりました。その後夕方に急増し、6時には座席の80パーセントが埋まり、1日で最も混雑した時間帯となりました。",
    "evidence": "At nine in the morning, only twenty-five percent of the seats were taken. By noon, the figure had risen to sixty percent",
    "explanation": "本文の推移は9時25％→12時60％→15時45％→18時80％です。Chart Cだけがこの順序と数値に一致します。Aは9時と12時、Bは12時と15時、Dは15時と18時の数値が入れ替わっており、特にDは「夕方が最も混雑した」という記述とも矛盾します。",
    "trapType": "時系列の前後入れ替え"
  },
  {
    "id": "L-1C-23",
    "num": 23,
    "part": "1C",
    "situation": "Listen to a student presenting survey results about part-time jobs. Choose the chart that matches the description.",
    "turns": [
      {
        "speaker": "W",
        "text": "Our survey looked at how many students in each year have a part-time job. Among first-year students, thirty percent work part-time. The figure rises to forty-five percent for second-year students. More than half of the third-year students, fifty-five percent, have a job. The highest rate is among fourth-year students, at seventy percent. As students move up through the years, they become more likely to work, and the rate more than doubles between the first and fourth years.",
        "audio": "/teap/audio/l-1c-23-t1.mp3"
      }
    ],
    "question": "Which chart best represents the percentage of students with part-time jobs?",
    "chartOptions": [
      {
        "type": "bar",
        "title": "Chart A",
        "unit": "%",
        "max": 100,
        "items": [
          {
            "label": "1st Year",
            "value": 45
          },
          {
            "label": "2nd Year",
            "value": 30
          },
          {
            "label": "3rd Year",
            "value": 55
          },
          {
            "label": "4th Year",
            "value": 70
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart B",
        "unit": "%",
        "max": 100,
        "items": [
          {
            "label": "1st Year",
            "value": 30
          },
          {
            "label": "2nd Year",
            "value": 45
          },
          {
            "label": "3rd Year",
            "value": 55
          },
          {
            "label": "4th Year",
            "value": 70
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart C",
        "unit": "%",
        "max": 100,
        "items": [
          {
            "label": "1st Year",
            "value": 30
          },
          {
            "label": "2nd Year",
            "value": 45
          },
          {
            "label": "3rd Year",
            "value": 70
          },
          {
            "label": "4th Year",
            "value": 55
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart D",
        "unit": "%",
        "max": 100,
        "items": [
          {
            "label": "1st Year",
            "value": 30
          },
          {
            "label": "2nd Year",
            "value": 55
          },
          {
            "label": "3rd Year",
            "value": 45
          },
          {
            "label": "4th Year",
            "value": 70
          }
        ]
      }
    ],
    "options": [
      "Chart A",
      "Chart B",
      "Chart C",
      "Chart D"
    ],
    "answer": 1,
    "jaScript": "女：私たちの調査では、学年ごとにアルバイトをしている学生の割合を調べました。1年生では30パーセントがアルバイトをしています。2年生では45パーセントに上がります。3年生では半数を超える55パーセントが仕事を持っています。最も高いのは4年生で70パーセントです。学年が上がるにつれて働く学生は増え、割合は1年生から4年生の間で2倍以上になります。",
    "evidence": "Among first-year students, thirty percent work part-time. The figure rises to forty-five percent for second-year students. More than half of the third-year students, fifty-five percent, have a job. The highest rate is among fourth-year students, at seventy percent.",
    "explanation": "本文の数値は1年30％、2年45％、3年55％、4年70％で、学年ごとに単調に増えています（各学年の学生に対する割合なので合計100にはなりません）。Chart Bだけが一致します。Aは1年と2年、Cは3年と4年、Dは2年と3年の数値が入れ替わっており、Cは「4年が最も高い」という記述とも合いません。",
    "trapType": "隣接学年の数値入れ替え"
  },
  {
    "id": "L-1C-24",
    "num": 24,
    "part": "1C",
    "situation": "Listen to an announcement about the number of passengers on the campus shuttle bus. Choose the chart that matches the description.",
    "turns": [
      {
        "speaker": "M",
        "text": "Here are the numbers for the campus shuttle bus this term. In April, the shuttle carried one thousand two hundred passengers. The number rose to one thousand five hundred in May. In June, it fell slightly to one thousand three hundred fifty, probably because of the rainy season. Then in July, ridership jumped to one thousand eight hundred, the highest figure of the four months, as many students used the shuttle during the exam period.",
        "audio": "/teap/audio/l-1c-24-t1.mp3"
      }
    ],
    "question": "Which chart best represents the number of shuttle passengers?",
    "chartOptions": [
      {
        "type": "line",
        "title": "Chart A",
        "unit": "riders",
        "max": 2000,
        "labels": [
          "Apr",
          "May",
          "Jun",
          "Jul"
        ],
        "values": [
          1500,
          1200,
          1350,
          1800
        ]
      },
      {
        "type": "line",
        "title": "Chart B",
        "unit": "riders",
        "max": 2000,
        "labels": [
          "Apr",
          "May",
          "Jun",
          "Jul"
        ],
        "values": [
          1200,
          1350,
          1500,
          1800
        ]
      },
      {
        "type": "line",
        "title": "Chart C",
        "unit": "riders",
        "max": 2000,
        "labels": [
          "Apr",
          "May",
          "Jun",
          "Jul"
        ],
        "values": [
          1200,
          1500,
          1800,
          1350
        ]
      },
      {
        "type": "line",
        "title": "Chart D",
        "unit": "riders",
        "max": 2000,
        "labels": [
          "Apr",
          "May",
          "Jun",
          "Jul"
        ],
        "values": [
          1200,
          1500,
          1350,
          1800
        ]
      }
    ],
    "options": [
      "Chart A",
      "Chart B",
      "Chart C",
      "Chart D"
    ],
    "answer": 3,
    "jaScript": "男：今学期のキャンパスシャトルバスの利用者数をお知らせします。4月は1,200人でした。5月には1,500人に増えました。6月は梅雨の影響か、1,350人に少し減りました。そして7月には1,800人に急増し、試験期間中に多くの学生が利用したため、4か月間で最も多い数となりました。",
    "evidence": "In April, the shuttle carried one thousand two hundred passengers. The number rose to one thousand five hundred in May. In June, it fell slightly to one thousand three hundred fifty",
    "explanation": "本文の推移は4月1,200人→5月1,500人→6月1,350人→7月1,800人で、6月に一度下がってから7月に最高値になります。Chart Dだけが一致します。Aは4月と5月、Bは5月と6月、Cは6月と7月の数値が入れ替わっており、Bは「6月に下がった」、Cは「7月が最高」という記述と矛盾します。",
    "trapType": "増減の方向の取り違え"
  },
  {
    "id": "L-1C-25",
    "num": 25,
    "part": "1C",
    "situation": "Listen to a student reporting the results of a survey about study apps. Choose the chart that matches the description.",
    "turns": [
      {
        "speaker": "W",
        "text": "We surveyed students this spring about which study app they use most often. The vocabulary app came first, used most by thirty-five percent of students. The dictionary app was close behind at thirty percent. The flashcard app was chosen by twenty percent. Finally, the study planner app was the least used, at fifteen percent. Together, the vocabulary and dictionary apps account for nearly two-thirds of all the answers in this spring's survey.",
        "audio": "/teap/audio/l-1c-25-t1.mp3"
      }
    ],
    "question": "Which chart best represents the survey results?",
    "chartOptions": [
      {
        "type": "bar",
        "title": "Chart A",
        "unit": "%",
        "max": 50,
        "items": [
          {
            "label": "Vocabulary",
            "value": 35
          },
          {
            "label": "Dictionary",
            "value": 30
          },
          {
            "label": "Flashcards",
            "value": 20
          },
          {
            "label": "Planner",
            "value": 15
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart B",
        "unit": "%",
        "max": 50,
        "items": [
          {
            "label": "Vocabulary",
            "value": 30
          },
          {
            "label": "Dictionary",
            "value": 35
          },
          {
            "label": "Flashcards",
            "value": 20
          },
          {
            "label": "Planner",
            "value": 15
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart C",
        "unit": "%",
        "max": 50,
        "items": [
          {
            "label": "Vocabulary",
            "value": 35
          },
          {
            "label": "Dictionary",
            "value": 30
          },
          {
            "label": "Flashcards",
            "value": 15
          },
          {
            "label": "Planner",
            "value": 20
          }
        ]
      },
      {
        "type": "bar",
        "title": "Chart D",
        "unit": "%",
        "max": 50,
        "items": [
          {
            "label": "Vocabulary",
            "value": 35
          },
          {
            "label": "Dictionary",
            "value": 20
          },
          {
            "label": "Flashcards",
            "value": 30
          },
          {
            "label": "Planner",
            "value": 15
          }
        ]
      }
    ],
    "options": [
      "Chart A",
      "Chart B",
      "Chart C",
      "Chart D"
    ],
    "answer": 0,
    "jaScript": "女：この春、学生に最もよく使う学習アプリについて調査しました。単語アプリが1位で、35パーセントの学生が最もよく使っています。辞書アプリが30パーセントで僅差の2位でした。フラッシュカードアプリは20パーセントに選ばれました。最後に、学習プランナーアプリが最も少なく15パーセントでした。単語アプリと辞書アプリを合わせると、回答全体のほぼ3分の2を占めます。",
    "evidence": "The vocabulary app came first, used most by thirty-five percent of students. The dictionary app was close behind at thirty percent. The flashcard app was chosen by twenty percent. Finally, the study planner app was the least used, at fifteen percent.",
    "explanation": "本文の数値は単語35％、辞書30％、フラッシュカード20％、プランナー15％（合計100％）。上位2つの合計65％は「ほぼ3分の2」とも一致します。Chart Aだけが一致します。Bは単語と辞書、Cはフラッシュカードとプランナー、Dは辞書とフラッシュカードの数値が入れ替わっており、CとDは順位の記述とも合いません。",
    "trapType": "僅差の順位入れ替え"
  }
];
