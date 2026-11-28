/* LexSophia TEAP Listening Original Question Bank — Part 2 (2A & 2B: Q26-Q50)
   Unofficial original practice designed around the TEAP (Standard) Listening structure. */
window.TEAP_LISTENING_P2 = [
  /* ================= Part 2A: Long Conversations (3 sets × 3 Qs = Q26-Q34) ================= */
  {
    setId: 'L-2A-SET1', part: '2A',
    title: 'Set 1: Sociology Research Paper Consultation',
    situation: 'A student is meeting with her sociology teaching assistant to discuss problems with her term paper.',
    turns: [
      { speaker: 'W', text: 'Thanks for seeing me, Daniel. I started drafting my paper on remote work and local coffee shops, but I feel like my argument is going in circles.' },
      { speaker: 'M', text: 'Let us take a look. What sources have you gathered so far?' },
      { speaker: 'W', text: 'I already interviewed six café owners near the station and summarized three newspaper articles from last year. The interviews were interesting, yet every owner gave a completely different reason for their sales changing.' },
      { speaker: 'M', text: 'That is actually a common issue when you start with interviews before narrowing your research question. Right now you are trying to cover rent prices, menu changes, and remote workers all at once.' },
      { speaker: 'W', text: 'True—I kept adding new questions every time an owner mentioned something unexpected.' },
      { speaker: 'M', text: 'What if you focus solely on weekday afternoon seating policies? Several cafés introduced time limits or Wi-Fi rules to manage remote workers, and you can compare those policies using the interview notes you already have.' },
      { speaker: 'W', text: 'Oh, I did ask all six owners about Wi-Fi and seating! Should I still do a customer survey next week?' },
      { speaker: 'M', text: 'You do not have enough time before the draft deadline. Instead, pull two peer-reviewed urban sociology articles from the library database to frame your existing interviews.' }
    ],
    jaScript: '女：時間を取ってくれてありがとう、ダニエル。リモートワークと地元カフェについてのレポートを書き始めたんだけど、議論が堂々巡りしてる気がして。\n男：見てみよう。今までどんな資料を集めた？\n女：駅近くのカフェオーナー6人にインタビューして、去年の新聞記事を3本まとめたよ。インタビューは面白かったけど、全員が売上変化の理由をバラバラに話すんだよね。\n男：研究の問いを絞る前にインタビューを始めるとよくあることだよ。今は家賃・メニュー変更・リモートワーカーを全部いっぺんに扱おうとしている。\n女：確かに、予想外の話が出るたびに質問を増やしちゃった。\n男：平日の午後の座席ルールだけに絞ってみたら？リモートワーカー対策で時間制限やWi-Fiルールを導入した店があるし、すでに取ったメモで比較できるよ。\n女：あ、6人全員にWi-Fiと席のことは聞いたよ！来週、客向けのアンケートもやった方がいいかな？\n男：下書き締切まで時間がないよ。代わりに図書館データベースから査読済みの都市社会学論文を2本引いて、既存のインタビューを理論的に位置づけよう。',
    questions: [
      {
        id: 'L-2A-26', num: 26,
        question: 'What has the student already completed for her paper?',
        options: [
          'Conducting interviews with local café owners and summarizing news articles.',
          'Distributing a customer questionnaire near the train station.',
          'Reviewing two peer-reviewed sociology articles from the library.',
          'Comparing weekday seating policies across twenty cafés.'
        ],
        answer: 0,
        evidence: 'I already interviewed six café owners near the station and summarized three newspaper articles from last year.',
        explanation: 'すでに完了しているのは6人のオーナーへのインタビューと新聞記事3本の要約です。査読論文はこれからの提案、客アンケートは見送りです。',
        trapType: '時系列・対象混同型（相談相手が提案した方法と既に実行した方法を取り違えさせる）'
      },
      {
        id: 'L-2A-27', num: 27,
        question: 'According to Daniel, why is the student’s argument currently unfocused?',
        options: [
          'The café owners refused to share accurate sales data.',
          'She is trying to address too many topics at the same time.',
          'The newspaper articles she chose are outdated.',
          'She forgot to record her interview notes systematically.'
        ],
        answer: 1,
        evidence: 'Right now you are trying to cover rent prices, menu changes, and remote workers all at once.',
        explanation: '家賃・メニュー変更・リモートワーカーを同時に扱おうとしているため焦点がぼやけている、と指摘しています。',
        trapType: '根拠不足型（データ拒否や記事の古さは述べられていない）'
      },
      {
        id: 'L-2A-28', num: 28,
        question: 'What does Daniel recommend the student do before the draft deadline?',
        options: [
          'Interview six additional café owners about rent prices.',
          'Run a brief online survey of weekday café customers.',
          'Narrow her topic to seating policies and add two academic articles.',
          'Request a one-week extension from the sociology professor.'
        ],
        answer: 2,
        evidence: 'focus solely on weekday afternoon seating policies... pull two peer-reviewed urban sociology articles',
        explanation: '座席ルールにテーマを絞り、査読済み学術論文を2本加えることが最終的な提案です。',
        trapType: '却下案型（顧客アンケートは時間不足のため却下された）'
      }
    ]
  },

  {
    setId: 'L-2A-SET2', part: '2A',
    title: 'Set 2: Campus Bicycle-Sharing Proposal',
    situation: 'Two student council members are planning a proposal to expand the university’s bicycle-sharing program.',
    turns: [
      { speaker: 'M', text: 'Before we present our bike-sharing expansion plan to the administration, we should check why last year’s pilot program had mixed reviews.' },
      { speaker: 'W', text: 'I read the student feedback log. Most riders liked the low rental fee, so cost was not the problem. The main complaint was that bikes piled up at the downhill station near the train gate while the uphill dorms ran empty every morning.' },
      { speaker: 'M', text: 'Right—everyone rides downhill to class, then takes the shuttle bus back up the hill.' },
      { speaker: 'W', text: 'Exactly. Buying thirty more bicycles will not fix that imbalance by itself. We need a way to move bikes back up the hill.' },
      { speaker: 'M', text: 'Hiring full-time staff to haul bikes would probably get rejected for budget reasons. What if we offer ride credits to students who return a bike to an uphill rack?' },
      { speaker: 'W', text: 'That is clever, though we should also ask the facilities team to relocate leftover bikes once each evening using their existing utility van.' },
      { speaker: 'M', text: 'Combining student incentives with one evening van sweep sounds realistic. Let us estimate the cost of the credit system and add a map of the uphill racks to our slides.' }
    ],
    jaScript: '男：シェアサイクル拡充案を大学当局に出す前に、去年の試行プログラムの評価が分かれた理由を確認しておこう。\n女：学生のフィードバック記録を読んだよ。安い利用料は好評だったから、料金が問題じゃない。一番の不満は、毎朝坂下の駅ゲート付近に自転車が溜まって、坂上の寮が空っぽになることだった。\n男：そうか、みんな授業へは下り坂を自転車で行って、帰りはシャトルバスで坂を上るんだね。\n女：その通り。自転車を30台買い足すだけじゃこの偏りは直らない。坂上に戻す仕組みが必要だよ。\n男：運搬専門のスタッフを雇う案は予算で却下されそうだな。坂上の駐輪場に返却した学生に利用クレジットを付与するのはどう？\n女：いいね。それに加えて、施設管理チームに毎晩1回だけ既存の作業バンで残った自転車を運んでもらうよう頼もう。\n男：学生インセンティブと毎晩1回のバン回収の組み合わせなら現実的だね。クレジット制度の試算と坂上駐輪場の地図をスライドに入れよう。',
    questions: [
      {
        id: 'L-2A-29', num: 29,
        question: 'What caused the main complaint during last year’s pilot program?',
        options: [
          'Rental fees were too expensive for dormitory residents.',
          'Bicycles were unevenly distributed between uphill and downhill stations.',
          'Many bicycles broke down because of the steep campus hills.',
          'The campus shuttle bus stopped running near the train gate.'
        ],
        answer: 1,
        evidence: 'bikes piled up at the downhill station near the train gate while the uphill dorms ran empty every morning.',
        explanation: '坂下に溜まり坂上が空になるという「配置の偏り（unevenly distributed）」が最大の不満でした。',
        trapType: '意味反転型（料金は好評であり問題ではなかった）'
      },
      {
        id: 'L-2A-30', num: 30,
        question: 'Why does the man hesitate to propose hiring full-time transport staff?',
        options: [
          'The administration is unlikely to approve the additional labor cost.',
          'Students prefer moving bicycles themselves for exercise.',
          'Utility vans are not allowed on campus roads during the day.',
          'There is no space to park delivery vehicles near the dorms.'
        ],
        answer: 0,
        evidence: 'Hiring full-time staff to haul bikes would probably get rejected for budget reasons.',
        explanation: '予算上の理由で大学当局に却下される可能性が高いため、専任スタッフ雇用案を控えています。',
        trapType: '根拠不足型（昼間の車両規制や駐車スペース不足は言及なし）'
      },
      {
        id: 'L-2A-31', num: 31,
        question: 'What two-part solution do the students decide to propose?',
        options: [
          'Purchasing thirty electric bikes and raising the rental fee.',
          'Canceling the uphill shuttle bus and expanding downhill racks.',
          'Rewarding uphill returns with credits and having facilities relocate bikes nightly.',
          'Limiting rentals to thirty minutes and hiring part-time student drivers.'
        ],
        answer: 2,
        evidence: 'Combining student incentives with one evening van sweep sounds realistic.',
        explanation: '坂上返却へのクレジット付与と、毎晩1回の施設チームによるバン回収の2本立てで合意しています。',
        trapType: '却下案・部分一致型（自転車30台購入だけでは解決しないと否定済み）'
      }
    ]
  },

  {
    setId: 'L-2A-SET3', part: '2A',
    title: 'Set 3: Organizing a Cross-Department Poster Session',
    situation: 'A professor and two graduate assistants are finalizing plans for an undergraduate poster symposium.',
    turns: [
      { speaker: 'W', text: 'We have forty-two student posters registered for next month’s symposium—twelve more than last spring. That means the Atrium Hall is going to be tight.' },
      { speaker: 'M', text: 'Should we split the session into a morning half and an afternoon half so only twenty-one boards are up at a time?' },
      { speaker: 'W', text: 'Splitting helps with crowd flow, though presenters in the afternoon sometimes complain that faculty judges are already tired by then. What do you think, Ken?' },
      { speaker: 'M', text: 'Another option is to keep a single two-hour session, move the refreshment tables out into the hallway, and angle the poster boards in clusters by theme instead of long rows.' },
      { speaker: 'W', text: 'Moving the snacks into the hallway actually frees up almost a quarter of the floor space—and grouping by theme makes it easier for visitors from different departments to compare projects.' },
      { speaker: 'M', text: 'I can test the cluster layout with the event staff tomorrow morning and send you a floor map. One more thing: should we still print the forty-page abstract booklet?' },
      { speaker: 'W', text: 'Let us switch to a digital booklet accessed via QR posters at the entrance, and print only twenty reference copies for guests who prefer paper.' }
    ],
    jaScript: '女：来月のシンポジウムに42件の学生ポスターが登録されたわ。昨春より12件も多いから、アトリウムホールはかなり手狭になるわね。\n男：午前と午後に分けて、一度に21枚ずつ展示するのはどうでしょう？\n女：混雑緩和にはいいけど、午後の発表者から審査員の先生が疲れているという不満が出ることがあるのよね。\n男：別の案として、2時間の単一セッションのまま、軽食テーブルを廊下に出して、パネルを長い一列ではなくテーマ別のクラスター配置にする手があります。\n女：軽食を廊下に出せば床面積のほぼ4分の1が空くし、テーマ別配置なら他学科の来場者も研究を比較しやすいわね。\n男：明朝イベントスタッフとクラスター配置を試して図面を送ります。もう1点、40ページの要旨集はまだ印刷しますか？\n女：入口のQRコードから見られるデジタル版に切り替えて、紙を好む来賓用に20部だけ参考用を印刷しましょう。',
    questions: [
      {
        id: 'L-2A-32', num: 32,
        question: 'Why is the professor reluctant to split the symposium into morning and afternoon sessions?',
        options: [
          'The Atrium Hall is only available for two hours.',
          'Afternoon presenters worry that judges may be fatigued.',
          'Event staff cannot rearrange poster boards during lunch.',
          'Most undergraduate students have classes in the morning.'
        ],
        answer: 1,
        evidence: 'presenters in the afternoon sometimes complain that faculty judges are already tired by then.',
        explanation: '午後の発表者から「審査員がすでに疲れている（fatigued）」という不満が出ることがあるため難色を示しています。',
        trapType: '根拠不足型（会場時間の制約や学生の授業予定は言及なし）'
      },
      {
        id: 'L-2A-33', num: 33,
        question: 'What advantage of grouping posters by theme does the professor mention?',
        options: [
          'It allows students to finish their presentations faster.',
          'It reduces the number of poster boards the university must rent.',
          'It helps visitors from various fields compare related projects.',
          'It keeps the refreshment tables closer to the entrance.'
        ],
        answer: 2,
        evidence: 'grouping by theme makes it easier for visitors from different departments to compare projects.',
        explanation: '他学科からの来場者が関連プロジェクトを比較しやすくなる点を利点として挙げています。',
        trapType: '対象混同型（面積が空くのは「軽食テーブルを廊下に出す」効果）'
      },
      {
        id: 'L-2A-34', num: 34,
        question: 'How will the symposium abstracts be provided to attendees?',
        options: [
          'Primarily online via QR codes, with a small number of printed copies.',
          'Every attendee will receive a forty-page printed booklet at check-in.',
          'Abstracts will be emailed only to faculty judges after the event.',
          'Each presenter will print and hand out copies at their own board.'
        ],
        answer: 0,
        evidence: 'switch to a digital booklet accessed via QR posters at the entrance, and print only twenty reference copies',
        explanation: '基本はQRコードからのデジタル版にし、紙を好む人向けに20部だけ印刷する決定です。',
        trapType: '過度の一般化・時系列型（全員に紙を配るのは変更前の方式）'
      }
    ]
  },

  /* ================= Part 2B: Long Lectures / Talks (4 sets × 4 Qs = Q35-Q50) ================= */
  {
    setId: 'L-2B-SET1', part: '2B',
    title: 'Set 1: Urban Heat Islands and Cool Roofs (with Chart)',
    situation: 'Listen to part of an environmental engineering lecture. Refer to the chart below while listening.',
    stimulusChart: {
      type: 'bar',
      title: 'Measured Summer Roof Surface Temp (°C)',
      sub: 'University Field Study — Four Roof Treatments at 2:00 p.m.',
      unit: '°C',
      max: 80,
      items: [
        { label: 'Dark Asphalt (A)', value: 72 },
        { label: 'Standard Gray (B)', value: 58 },
        { label: 'White Reflective (C)', value: 39 },
        { label: 'Green Planted (D)', value: 34 }
      ]
    },
    turns: [
      { speaker: 'M', text: 'Today we will examine why large cities often stay several degrees warmer than nearby rural towns—a phenomenon known as the urban heat island effect. For decades, researchers assumed that vehicle exhaust and air-conditioning waste heat were the primary culprits. However, recent satellite measurements show that dark, heat-absorbing building surfaces—especially rooftops and asphalt roads—play an even larger role.' },
      { speaker: 'M', text: 'Look at the chart from our summer field study. At two in the afternoon, the conventional dark asphalt roof—labeled A—reached seventy-two degrees Celsius, radiating heat long after sunset. In contrast, the white reflective coating—labeled C—bounced back most sunlight and stayed nearly thirty-three degrees cooler, at thirty-nine degrees. Meanwhile, the green planted roof—labeled D—recorded the lowest temperature at thirty-four degrees, because plants cool the air through evaporation.' },
      { speaker: 'M', text: 'Does this mean every city should immediately convert all roofs into gardens? Not necessarily. Green roofs add substantial weight and require structural reinforcement and irrigation, making them expensive for older buildings. White reflective coatings, on the other hand, are lightweight and inexpensive to apply, though in cold northern climates they can slightly increase winter heating bills by reflecting helpful winter sunlight. This suggests that urban planners must match roof solutions to both building age and local climate.' }
    ],
    jaScript: '今日は大都市が近隣の郊外より数度高くなる「ヒートアイランド現象」を扱います。何十年もの間、研究者は車の排気やエアコン排熱が主因だと考えてきました。しかし最近の衛星観測では、暗色で熱を吸収する建物表面、特に屋根とアスファルト道路がさらに大きな役割を果たしていることが示されています。\n夏の野外調査のグラフを見てください。午後2時に従来の黒色アスファルト屋根（A）は72℃に達し、日没後も長く放熱しました。対照的に白色反射塗装（C）は太陽光の大半を反射して39℃と約33℃も低く保たれました。一方、屋上緑化（D）は植物の蒸散作用により最低の34℃を記録しました。\nではすべての都市が今すぐ全屋根を緑化すべきでしょうか？必ずしもそうではありません。屋上緑化は重量が大きく、構造補強や灌水設備が必要なため古い建物では高額になります。一方、白色反射塗装は軽量で安価ですが、寒冷な北部地域では冬の日射まで反射して暖房費がやや増えることがあります。つまり都市計画家は、建物の築年数と地域気候の両方に合わせて対策を選ぶ必要があります。',
    questions: [
      {
        id: 'L-2B-35', num: 35,
        question: 'What did recent satellite measurements reveal about the urban heat island effect?',
        options: [
          'Vehicle exhaust is the single largest cause of city warming.',
          'Dark rooftops and roads contribute more than previously thought.',
          'Rural towns are warming faster than dense metropolitan areas.',
          'Air conditioners have no measurable impact on nighttime temperatures.'
        ],
        answer: 1,
        evidence: 'However, recent satellite measurements show that dark, heat-absorbing building surfaces—especially rooftops and asphalt roads—play an even larger role.',
        explanation: 'However の後に示された新しい知見は「暗色の屋根や道路の寄与が従来想定より大きい」ことです。',
        trapType: '時系列・従来知見混同型（排気やエアコン排熱が主因というのは従来の仮説）'
      },
      {
        id: 'L-2B-36', num: 36,
        question: 'According to the lecture and chart, why did Roof D record the lowest surface temperature?',
        options: [
          'Its white coating reflected nearly all incoming sunlight.',
          'It was shaded by taller surrounding office towers.',
          'Vegetation cooled the surface through moisture evaporation.',
          'It was measured earlier in the morning than the other roofs.'
        ],
        answer: 2,
        evidence: 'the green planted roof—labeled D—recorded the lowest temperature at thirty-four degrees, because plants cool the air through evaporation.',
        explanation: 'Roof D（屋上緑化）は植物の蒸散（evaporation）で冷却されるため最低温度(34℃)になりました。',
        trapType: '対象混同型（太陽光反射はRoof Cの特徴）'
      },
      {
        id: 'L-2B-37', num: 37,
        question: 'What drawback of white reflective coatings (Roof C) is mentioned for cold regions?',
        options: [
          'Snow damages the coating within a single winter.',
          'They require heavy structural reinforcement on older roofs.',
          'They may slightly raise winter heating costs by reflecting sunlight.',
          'They trap rainwater and cause drainage problems in spring.'
        ],
        answer: 2,
        evidence: 'in cold northern climates they can slightly increase winter heating bills by reflecting helpful winter sunlight.',
        explanation: '寒冷地では冬の日射を反射してしまい、暖房費がやや上がる欠点が述べられています。',
        trapType: '対象混同型（構造補強が必要なのは屋上緑化 Roof D）'
      },
      {
        id: 'L-2B-38', num: 38,
        question: 'What conclusion does the lecturer draw at the end?',
        options: [
          'Roof treatments should be chosen according to local climate and building conditions.',
          'All older buildings should be legally required to install green roofs.',
          'Dark asphalt roofs remain the most economical option worldwide.',
          'Cities should prioritize banning private cars over modifying buildings.'
        ],
        answer: 0,
        evidence: 'This suggests that urban planners must match roof solutions to both building age and local climate.',
        explanation: 'This suggests that で示された結論は「建物の築年数と地域気候に合わせて対策を選ぶべき」です。',
        trapType: '過度の一般化型（すべての古い建物に緑化を義務付けるとは言っていない）'
      }
    ]
  },

  {
    setId: 'L-2B-SET2', part: '2B',
    title: 'Set 2: How Sleep Consolidates Memory',
    situation: 'Listen to a neuroscience lecture on the relationship between sleep stages and human memory.',
    turns: [
      { speaker: 'W', text: 'Many college students pull all-nighters before an exam, assuming that extra hours of reading automatically produce higher scores. Neuroscience research, however, tells a very different story: sleep is not merely a passive pause for the brain, but an active period when fragile daytime memories are stabilized.' },
      { speaker: 'W', text: 'Scientists divide sleep into two broad phases that support different kinds of learning. During deep slow-wave sleep, which dominates the first half of the night, the brain replays newly learned facts and vocabulary, transferring them from temporary storage in the hippocampus to long-term storage in the cortex. For instance, volunteers who took a ninety-minute nap with slow-wave sleep recalled far more paired word lists than those who stayed awake.' },
      { speaker: 'W', text: 'In contrast, REM sleep—the dreaming stage that becomes longer toward morning—appears to strengthen creative problem-solving and motor skills, such as playing a piano piece smoothly. In one experiment, participants who got a full night’s sleep including late-morning REM were twice as likely to spot a hidden shortcut in a math puzzle. Therefore, cutting sleep short by waking up at four a.m. to cram specifically robs the brain of the stage needed for flexible thinking.' }
    ],
    jaScript: '多くの大学生は試験前に徹夜をして、勉強時間を増やせば自動的に高得点になると考えます。しかし神経科学の研究は全く異なる事実を示しています。睡眠は脳の受動的な休止ではなく、不安定な日中の記憶を定着させる能動的な時間なのです。\n科学者は睡眠を異なる学習を支える2つの段階に分けます。夜の後半ではなく前半に多い深い徐波睡眠では、脳が新しく学んだ事実や語彙を再生し、海馬の一時保存から大脳皮質の長期保存へ移します。例えば徐波睡眠を含む90分の仮眠を取った被験者は、起きていた群より単語ペアをはるかに多く思い出しました。\n対照的に、明け方にかけて長くなるレム睡眠は、創造的な問題解決やピアノ演奏のような運動技能を強化するとみられます。ある実験では、明け方のレム睡眠を含む十分な睡眠を取った参加者は、数学パズルの隠れた近道に気づく確率が2倍でした。したがって午前4時に起きて詰め込み勉強をすると、柔軟な思考に必要な段階をまさに奪ってしまうのです。',
    questions: [
      {
        id: 'L-2B-39', num: 39,
        question: 'What common misconception about sleep does the lecturer challenge?',
        options: [
          'That people dream only during afternoon naps.',
          'That sleep is simply an inactive rest period with no role in learning.',
          'That vocabulary is easier to learn than mathematical formulas.',
          'That college students need less sleep than older adults.'
        ],
        answer: 1,
        evidence: 'sleep is not merely a passive pause for the brain, but an active period when fragile daytime memories are stabilized.',
        explanation: '「睡眠は単なる受動的な休止」という誤解を否定し、記憶定着の能動的な時間だと述べています。',
        trapType: '根拠不足型（高齢者と大学生の睡眠時間比較などは述べられていない）'
      },
      {
        id: 'L-2B-40', num: 40,
        question: 'What happens during deep slow-wave sleep in the first half of the night?',
        options: [
          'Newly learned facts are shifted into long-term cortical storage.',
          'The brain erases paired word lists to make room for math rules.',
          'Motor skills like piano playing are practiced through vivid dreams.',
          'The hippocampus shuts down completely until morning.'
        ],
        answer: 0,
        evidence: 'transferring them from temporary storage in the hippocampus to long-term storage in the cortex.',
        explanation: '前半の徐波睡眠では、事実や語彙が海馬の一時保存から大脳皮質の長期保存へ転送されます。',
        trapType: '対象混同型（ピアノ演奏などの運動技能はREM睡眠の役割）'
      },
      {
        id: 'L-2B-41', num: 41,
        question: 'Why does the lecturer mention the math puzzle experiment?',
        options: [
          'To prove that ninety-minute naps improve calculation speed.',
          'To illustrate how REM sleep supports insight and creative problem-solving.',
          'To show that math students sleep longer than humanities students.',
          'To argue that hidden shortcuts should not be taught in school.'
        ],
        answer: 1,
        evidence: 'REM sleep... appears to strengthen creative problem-solving... participants who got a full night’s sleep including late-morning REM were twice as likely to spot a hidden shortcut',
        explanation: '数学パズルの近道発見は、REM睡眠が創造的問題解決を助ける具体例です。',
        trapType: '対象混同型（90分の仮眠実験は単語ペア記憶の例）'
      },
      {
        id: 'L-2B-42', num: 42,
        question: 'According to the lecturer, what is a specific cost of waking up at 4 a.m. to cram?',
        options: [
          'It eliminates all slow-wave sleep from the previous night.',
          'It cuts into late-morning REM sleep needed for flexible thinking.',
          'It prevents students from reading textbook vocabulary accurately.',
          'It causes permanent damage to temporary memory storage.'
        ],
        answer: 1,
        evidence: 'cutting sleep short by waking up at four a.m. to cram specifically robs the brain of the stage needed for flexible thinking.',
        explanation: '明け方に多く現れるREM睡眠を削ることになり、柔軟な思考の強化が損なわれます。',
        trapType: '過度の一般化・対象混同型（徐波睡眠は夜の前半に多いため全消滅はしない）'
      }
    ]
  },

  {
    setId: 'L-2B-SET3', part: '2B',
    title: 'Set 3: Pollinator Decline and Wildflower Strips (with Chart)',
    situation: 'Listen to an ecology presentation on farmland biodiversity. Refer to the graph while listening.',
    stimulusChart: {
      type: 'line',
      title: 'Average Wild Bee Visits per Plot (2020–2024)',
      sub: 'Comparison after introducing native wildflower borders in 2021',
      max: 60,
      labels: ['2020', '2021', '2022', '2023', '2024'],
      values: [18, 22, 34, 46, 52]
    },
    turns: [
      { speaker: 'M', text: 'Over the past twenty years, farmers across Europe and North America have grown increasingly concerned about declining populations of wild bees. Because roughly three-quarters of major food crops benefit at least partly from animal pollination, losing wild pollinators threatens both fruit quality and harvest stability.' },
      { speaker: 'M', text: 'One practical intervention tested on commercial farms is setting aside just three to five percent of field edges to plant strips of native wildflowers. Skeptics initially worried that taking land out of crop production would reduce a farmer’s total harvest. However, five-year trials showed a surprising result: the remaining ninety-five percent of the field produced higher yields per hectare, completely offsetting the small area given to flowers.' },
      { speaker: 'M', text: 'As the graph illustrates, wild bee visits rose modestly from eighteen per plot in 2020 to twenty-two in 2021, the first year flowers were planted. Once perennial species matured in 2022 and 2023, visits climbed rapidly to thirty-four and forty-six, before reaching fifty-two in 2024. Importantly, the strips also sheltered predatory beetles that fed on crop pests, allowing participating farms to reduce chemical pesticide spraying by nearly a third.' }
    ],
    jaScript: '過去20年間、欧米の農家は野生ハチの減少を強く懸念してきました。主要食用作物の約4分の3が少なくとも部分的に動物による受粉の恩恵を受けているため、野生の送粉者を失うと果実の品質と収穫の安定性の両方が脅かされます。\n商業農場で試された実践的な対策の1つが、畑の端のわずか3〜5%を割いて在来野花の帯を植えることです。懐疑派は当初、作付け面積が減れば総収穫量が減ると心配しました。しかし5年間の試験では驚くべき結果が出ました。残り95%の畑の1ヘクタールあたり収量が増え、花に割いた小面積分を完全に相殺したのです。\nグラフが示す通り、野生ハチの訪問数は2020年の18回から、花を植えた初年度の2021年に22回へと緩やかに増えました。多年草が成熟した2022〜2023年には34回、46回と急増し、2024年には52回に達しました。重要な点として、花帯は害虫を食べる捕食性甲虫の住処にもなり、参加農家は化学農薬の散布を約3分の1削減できました。',
    questions: [
      {
        id: 'L-2B-43', num: 43,
        question: 'Why did skeptics initially doubt the value of planting wildflower strips?',
        options: [
          'They believed native flowers would attract dangerous crop pests.',
          'They feared giving up field edges would lower overall crop harvests.',
          'They thought honeybees could not feed on native wildflower pollen.',
          'They expected wildflower seeds to cost more than chemical fertilizers.'
        ],
        answer: 1,
        evidence: 'Skeptics initially worried that taking land out of crop production would reduce a farmer’s total harvest.',
        explanation: '作付け面積を削ることで総収穫量が減るのではないか、というのが当初の懸念でした。',
        trapType: '意味反転型（害虫を呼び込むのではなく、害虫を食べる捕食性甲虫を育んだ）'
      },
      {
        id: 'L-2B-44', num: 44,
        question: 'According to the presentation and graph, what caused the sharp rise in bee visits after 2021?',
        options: [
          'Farmers tripled the width of the flower strips in 2022.',
          'Perennial wildflower plants matured and provided richer habitats.',
          'Nearby cities banned private gardens during the trial.',
          'Warm winter storms pushed bees from neighboring farms.'
        ],
        answer: 1,
        evidence: 'Once perennial species matured in 2022 and 2023, visits climbed rapidly to thirty-four and forty-six',
        explanation: '2022〜2023年に多年草の在来種が成熟したことが、22→34→46への急増の要因です。',
        trapType: '根拠不足型（花帯の幅を3倍にした事実は述べられていない）'
      },
      {
        id: 'L-2B-45', num: 45,
        question: 'What secondary benefit did the wildflower strips bring to participating farms?',
        options: [
          'They eliminated the need for irrigation during dry summers.',
          'They supported beneficial insects that helped cut pesticide use.',
          'They doubled the market price of organic honey.',
          'They prevented soil from freezing in early spring.'
        ],
        answer: 1,
        evidence: 'the strips also sheltered predatory beetles that fed on crop pests, allowing participating farms to reduce chemical pesticide spraying by nearly a third.',
        explanation: '害虫を食べる捕食性甲虫の隠れ家となり、化学農薬を約3分の1減らせたことが副次的効果です。',
        trapType: '過度の一般化・根拠不足型（灌水不要やハチミツ価格倍増は言及なし）'
      },
      {
        id: 'L-2B-46', num: 46,
        question: 'How did the five-year trial affect total harvest on the farms?',
        options: [
          'Higher yields in the remaining field offset the small area planted with flowers.',
          'Total harvests fell by five percent every year until 2024.',
          'Yields improved only for farms larger than one hundred hectares.',
          'Harvests stayed flat because chemical pesticides were reduced.'
        ],
        answer: 0,
        evidence: 'the remaining ninety-five percent of the field produced higher yields per hectare, completely offsetting the small area given to flowers.',
        explanation: '残り95%の面積の単位収量が増えたことで、花帯に割いた3〜5%の減少分を完全に相殺しました。',
        trapType: '数量・意味反転型（5%減り続けたというのは誤り）'
      }
    ]
  },

  {
    setId: 'L-2B-SET4', part: '2B',
    title: 'Set 4: The History of Standard Time Zones',
    situation: 'Listen to a history lecture on how standardized time zones were established in the nineteenth century.',
    turns: [
      { speaker: 'W', text: 'Today we take it for granted that clocks across an entire region show the exact same minute. Before the mid-nineteenth century, however, every town set its own local solar time based on when the sun stood highest overhead. That meant noon in Boston occurred roughly twelve minutes earlier than noon in New York.' },
      { speaker: 'W', text: 'When travel depended on horses and sailing ships, a twelve-minute difference barely mattered. Everything changed with the expansion of railways and the telegraph. Running trains in opposite directions along a single track required precise timetables, yet railway companies initially used their own headquarters’ time, forcing passengers at major junctions to read three or four conflicting station clocks at once.' },
      { speaker: 'W', text: 'In 1883, North American rail companies coordinated to divide the continent into four standard zones—an event newspapers called the "Day of Two Noons." Interestingly, national governments did not lead the change; in the United States, Congress did not legally adopt standard time zones until 1918, thirty-five years after railroads had already made them everyday practice. This suggests that practical coordination in transportation can sometimes reshape daily life well ahead of formal legislation.' }
    ],
    jaScript: '今日、私たちは地域全体で時計が同じ分を指すのを当然視しています。しかし19世紀半ば以前は、太陽が真上に来る時刻を基準に町ごとに太陽時を定めていました。つまりボストンの正午はニューヨークより約12分早かったのです。\n移動が馬や帆船に頼っていた時代、12分の差はほとんど問題になりませんでした。すべてを変えたのが鉄道網と電信の拡大です。単線で上下線の列車を運行するには正確な時刻表が必要でしたが、当初各鉄道会社は本社の時刻を使ったため、乗換駅では3〜4個の異なる時計を見比べる羽目になりました。\n1883年、北米の鉄道各社が協力して大陸を4つの標準時間帯に分けました。興味深いことに、この変革を主導したのは政府ではありません。米国議会が標準時を法制化したのは1918年で、鉄道が日常化してから35年も後のことでした。これは交通分野の実務的な協調が、正式な法整備より先に日常生活を塗り替えることがあるという好例です。',
    questions: [
      {
        id: 'L-2B-47', num: 47,
        question: 'How did towns determine local time before the mid-nineteenth century?',
        options: [
          'By following the official clock in the national capital.',
          'By observing when the sun reached its highest point locally.',
          'By receiving daily time signals over telegraph lines.',
          'By matching the departure schedules of coastal sailing ships.'
        ],
        answer: 1,
        evidence: 'every town set its own local solar time based on when the sun stood highest overhead.',
        explanation: '太陽が真上に来る時刻（太陽時）を各町で基準にしていました。',
        trapType: '時系列型（電信は後の時代の技術）'
      },
      {
        id: 'L-2B-48', num: 48,
        question: 'What problem did early railway passengers face at major junctions?',
        options: [
          'Stations had no clocks visible on the platforms.',
          'Different rail companies displayed conflicting timetables and clocks.',
          'Trains were forbidden from crossing state borders at night.',
          'Telegraph operators refused to share schedules with rival lines.'
        ],
        answer: 1,
        evidence: 'railway companies initially used their own headquarters’ time, forcing passengers at major junctions to read three or four conflicting station clocks at once.',
        explanation: '各鉄道会社が自社本社の時刻を使ったため、乗換駅に複数の異なる時計が並ぶ混乱が生じました。',
        trapType: '根拠不足型（夜間運行禁止や電信技師の拒否は言及なし）'
      },
      {
        id: 'L-2B-49', num: 49,
        question: 'What is notable about the year 1918 in the history of U.S. standard time?',
        options: [
          'It was the year North American rail companies first proposed four time zones.',
          'Congress formally enacted standard time decades after railroads adopted it.',
          'Boston and New York merged into two separate time zones.',
          'Railway companies abandoned standard zones due to public protest.'
        ],
        answer: 1,
        evidence: 'Congress did not legally adopt standard time zones until 1918, thirty-five years after railroads had already made them everyday practice.',
        explanation: '1883年に鉄道各社が導入してから35年後の1918年に、ようやく議会が法制化しました。',
        trapType: '時系列・対象混同型（1883年と1918年の出来事を取り違えさせる）'
      },
      {
        id: 'L-2B-50', num: 50,
        question: 'What broader point does the lecturer make at the end of the talk?',
        options: [
          'Governments should always regulate new transportation technologies early.',
          'Practical industry standards can transform daily life before laws catch up.',
          'Modern digital clocks are less accurate than nineteenth-century solar time.',
          'International trade declined after standard time zones were created.'
        ],
        answer: 1,
        evidence: 'This suggests that practical coordination in transportation can sometimes reshape daily life well ahead of formal legislation.',
        explanation: '交通・産業側の実務的な協調が、法制化より先に日常生活を変えることがある、という結論です。',
        trapType: '意味反転・根拠不足型（政府の早期規制を主張しているわけではない）'
      }
    ]
  }
];
