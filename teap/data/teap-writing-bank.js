/* LexSophia TEAP Writing Original Task Bank (Task A & Task B — Unofficial Practice) */
window.TEAP_WRITING_BANK = [
  {
    id: 'W-A-01',
    task: 'Task A',
    label: '要約（約70語）',
    title: 'Task A-1：大学講義での手書きノート vs PCノート',
    minutes: 20,
    minWords: 60,
    maxWords: 80,
    targetLabel: '約70語（目安 60〜80語）',
    instruction: 'Summarize the main points of the passage below in about 70 words. Use your own words as much as possible rather than copying sentences directly.',
    sources: [
      {
        heading: 'Passage: Note-Taking Methods in University Lectures',
        body: 'In many university classrooms, laptops have largely replaced paper notebooks because students can type far faster than they can write by hand. At first glance, recording nearly every word a professor says seems like a clear advantage when preparing for final exams. However, several cognitive psychology studies suggest that speed does not always improve understanding. Because laptop users can transcribe lectures almost verbatim, they often process ideas superficially without deciding which points matter most. By contrast, students who take notes by hand cannot write fast enough to copy everything; consequently, they must listen actively, select key concepts, and rephrase explanations in their own words. Experiments testing students a week after a lecture found that while both groups performed similarly on simple factual recall, handwritten note-takers scored significantly higher on conceptual questions requiring inference and application.'
      }
    ],
    keyPoints: [
      'PCは速く打てるため講義をほぼそのまま記録できるが、思考が浅くなりやすい。',
      '手書きは全部書けないため、要点を絞り自分の言葉に言い換える能動的な処理が起きる。',
      '単純暗記では差が小さいが、概念理解や応用問題では手書きの方が高得点になりやすい。'
    ],
    paraphrases: [
      'transcribe lectures almost verbatim → copy down a professor’s words directly',
      'process ideas superficially → think less deeply about the material',
      'conceptual questions requiring inference → questions testing deeper understanding'
    ],
    modelEssay: 'Although laptops allow university students to record lectures quickly, typing almost every word often leads to shallow processing of information. In contrast, writing notes by hand is slower, forcing learners to identify essential ideas and express them in their own words. Research indicates that while both methods produce comparable results for basic factual recall, students who take handwritten notes perform better on questions that measure deeper comprehension and application. (71 words)',
    modelJa: 'ノートPCは大学生が講義を素早く記録することを可能にするが、ほぼすべての言葉を打ち込むことで情報の処理が浅くなりがちである。対照的に、手書きは速度が遅いため、学習者は重要な概念を選び出し自分の言葉で表現せざるを得なくなる。研究によると、基本的な事実記憶では両手法に大きな差がないものの、より深い理解や応用を測る設問では手書きの学生の方が高い成績を収める。',
    rubric: [
      '課題達成：PCの利点/弱点・手書きの能動的処理・実験結果の3要素を含めたか',
      '言い換え：本文の表現を丸写しせず、自分の言葉で要約できたか',
      '語数・構成：60〜80語の範囲に収め、1段落で論理的にまとまっているか',
      '文法・語彙：時制・主語と動詞の一致・接続詞（Although / In contrast等）が正確か'
    ]
  },
  {
    id: 'W-A-02',
    task: 'Task A',
    label: '要約（約70語）',
    title: 'Task A-2：都市の屋上農業がもたらす利点と課題',
    minutes: 20,
    minWords: 60,
    maxWords: 80,
    targetLabel: '約70語（目安 60〜80語）',
    instruction: 'Summarize the main points of the passage below in about 70 words. Use your own words as much as possible.',
    sources: [
      {
        heading: 'Passage: Urban Rooftop Farming',
        body: 'As global urban populations grow, cities face rising food transport costs and warmer summer temperatures. Rooftop farming—growing vegetables and herbs on top of apartment buildings and offices—has attracted attention as a partial solution. Producing food close to consumers shortens supply chains, reduces delivery emissions, and supplies residents with fresher produce. In addition, soil and plants absorb rainwater and insulate buildings, helping lower air-conditioning demand during heat waves. Nevertheless, rooftop agriculture cannot easily replace conventional farming. Older buildings often lack the structural strength needed to support wet soil and irrigation equipment, requiring costly reinforcement. Moreover, limited rooftop area restricts output mostly to lightweight leafy greens rather than calorie-dense staple crops such as rice or wheat.'
      }
    ],
    keyPoints: [
      '屋上農業は輸送距離・排出ガスの削減、新鮮な農産物の供給、断熱・雨水吸収の利点がある。',
      '一方で古い建物の耐荷重補強コストが高いという制約がある。',
      '面積も限られるため葉物野菜が中心となり、穀物などの主食を代替するのは難しい。'
    ],
    paraphrases: [
      'shortens supply chains → reduces the distance food must travel',
      'lack the structural strength → are not strong enough to bear the weight',
      'cannot easily replace conventional farming → cannot fully substitute for traditional agriculture'
    ],
    modelEssay: 'Rooftop farming offers several urban benefits, including shorter food transport, fresher vegetables, lower cooling costs, and better rainwater absorption. However, it cannot completely replace traditional agriculture due to practical limitations. Many older structures require expensive reinforcement to hold heavy soil and watering systems. Furthermore, restricted space means rooftop farms mainly produce light leafy vegetables rather than major staple crops like wheat or rice. (66 words)',
    modelJa: '屋上農業は食料輸送の短縮、新鮮な野菜の供給、冷房費の低減、雨水吸収の改善といった都市の利点をもたらす。しかし実用面の制約から、従来の農業を完全に代替することはできない。多くの古い建物は重い土壌や灌水設備を支えるための高額な補強を必要とする。さらに面積が限られるため、生産できるのは小麦や米のような主要穀物ではなく、主に軽量な葉物野菜に限られる。',
    rubric: [
      '課題達成：利点（輸送/鮮度/断熱）と制約（耐荷重コスト/面積・作物限界）の両方を含めたか',
      '言い換え：本文のフレーズをそのままコピーせず自然な言い換えができたか',
      '語数・構成：60〜80語に収め、対比（However等）が明確か',
      '文法・語彙：複数形・冠詞・動詞の語法に大きな誤りがないか'
    ]
  },
  {
    id: 'W-B-01',
    task: 'Task B',
    label: '資料統合エッセイ（約200語）',
    title: 'Task B-1：大学での生成AIツールの授業利用を認めるべきか',
    minutes: 50,
    minWords: 175,
    maxWords: 225,
    targetLabel: '約200語（目安 180〜220語）',
    instruction: 'Read the two texts and the survey table below. Then write an essay of about 200 words stating your opinion on whether universities should allow students to use generative AI tools for coursework. Refer to information from the given sources to support your argument.',
    sources: [
      {
        heading: 'Text 1: Supporting Guided AI Use',
        body: 'Many educators argue that banning generative AI in universities is unrealistic because graduates will be expected to work alongside AI tools in nearly every profession. When used appropriately, AI can help students brainstorm essay outlines, check grammar errors, and receive instant explanations of difficult concepts outside office hours. Rather than prohibiting these tools, universities should teach students how to verify AI outputs critically and disclose how AI assisted their work.'
      },
      {
        heading: 'Text 2: Concerns Over Learning Quality',
        body: 'Critics warn that unrestricted access to AI writing tools weakens students’ core academic skills. Writing an essay from scratch trains learners to organize complex arguments and evaluate evidence independently. If students rely on AI to draft paragraphs, professors can no longer assess individual ability fairly. Furthermore, generative AI occasionally invents fake citations or inaccurate statistics, which may mislead students who lack sufficient background knowledge.'
      },
      {
        heading: 'Campus Survey Data (n = 600 undergraduates)',
        table: {
          headers: ['Proposed University Policy', 'Students in Favor (%)'],
          rows: [
            ['Allow AI with clear guidelines and disclosure', '62%'],
            ['Allow AI without any restrictions', '14%'],
            ['Ban AI completely in all courses', '24%']
          ]
        }
      }
    ],
    keyPoints: [
      '立場を明確にし（賛成・条件付き賛成・反対のいずれか）、Text 1・Text 2・Survey Dataの複数資料を自然に統合する。',
      '反対意見（基礎力低下や誤情報の懸念）に触れた上で、ガイドラインや開示ルールなどの解決策・再反論を示すと高得点。'
    ],
    paraphrases: [
      'banning generative AI is unrealistic → a total prohibition is impractical',
      'disclose how AI assisted their work → clearly state how the tool was used',
      'invents fake citations → produces fabricated references'
    ],
    modelEssay: 'Universities should allow students to use generative AI tools for coursework under clear academic guidelines rather than imposing a complete ban. As campus survey data shows, 62 percent of undergraduates favor guided use with disclosure, whereas only 24 percent support total prohibition.\n\nFirst, integrating AI responsibly prepares students for future careers. As noted in Text 1, graduates will encounter AI across most industries, and guided use allows learners to brainstorm ideas, review grammar, and clarify difficult material outside class hours. Teaching students to inspect AI outputs critically builds practical digital literacy.\n\nOf course, critics in Text 2 rightly warn that overreliance on AI can weaken independent writing skills and expose students to inaccurate statistics or fabricated citations. However, these risks can be minimized without banning the technology. Universities can require students to write initial drafts independently, verify all facts using library sources, and submit a brief statement explaining how AI was used. In-class writing exams can also ensure fair assessment.\n\nIn conclusion, conditional permission with clear rules offers the most balanced approach, combining workplace preparation with academic integrity. (190 words)',
    modelJa: '大学は生成AIを全面禁止するのではなく、明確な学術ガイドラインのもとで授業課題への利用を認めるべきである。学内調査でも学部生の62%がルールと開示を伴う利用を支持し、全面禁止は24%にとどまっている。\n第一に、責任あるAI活用は将来のキャリアに備えることにつながる。資料1が述べる通り、卒業生は多くの職種でAIと協働することになり、適切な利用はアイデア出しや文法確認、時間外の理解補助に役立つ。出力を批判的に検証する訓練は実践的なデジタルリテラシーを育む。\nもちろん資料2の批判者が指摘するように、過度な依存は独自の文章力を弱め、誤統計や架空引用のリスクもある。しかしこれらは禁止せずとも軽減可能である。大学は初稿の自力作成や図書館資料での事実確認、AI利用方法の開示を義務付け、対面試験と組み合わせることで公正な評価を保てる。\n結論として、明確な規則を伴う条件付き許可が、実社会への準備と学術的誠実さを両立する最も均衡の取れた方策である。',
    rubric: [
      '課題達成：自分の立場が明確で、与えられた複数資料（本文・表）を適切に引用・統合しているか',
      '構成：導入（立場）→ 本論（根拠＋反論への言及）→ 結論の段落構成が明確か',
      '語数・言い換え：180〜220語前後に収め、資料の丸写しを避けて自分の言葉で書けているか',
      '文法・語彙：学術的な語彙と接続表現を使い、文構造が正確か'
    ]
  },
  {
    id: 'W-B-02',
    task: 'Task B',
    label: '資料統合エッセイ（約200語）',
    title: 'Task B-2：大学の必修講義は録画配信を義務付けるべきか',
    minutes: 50,
    minWords: 175,
    maxWords: 225,
    targetLabel: '約200語（目安 180〜220語）',
    instruction: 'Read the two texts and the table below. Write an essay of about 200 words expressing your opinion on whether universities should require all compulsory lectures to be recorded and shared online. Use information from the sources to support your view.',
    sources: [
      {
        heading: 'Text 1: Benefits for Review and Accessibility',
        body: 'Recording lectures enables students to revisit complex explanations at their own pace before exams. This is particularly helpful for international students studying in a second language and for students who miss class due to illness. Advocates emphasize that recordings do not replace live teaching; instead, they function like digital textbooks that improve comprehension across the whole class.'
      },
      {
        heading: 'Text 2: Risks to Classroom Engagement',
        body: 'Some professors worry that mandatory recording lowers in-person attendance, leaving lecture halls half empty. When fewer students attend live sessions, classroom discussions become less lively and instructors receive less immediate feedback. Additionally, students may hesitate to ask candid questions if they know their voices are being permanently recorded and uploaded online.'
      },
      {
        heading: 'Faculty Study: Lecture Attendance & Exam Scores',
        table: {
          headers: ['Course Format', 'Avg. Attendance', 'Avg. Final Exam Score'],
          rows: [
            ['Live only (no recording)', '86%', '74 / 100'],
            ['Live + online recording', '76%', '79 / 100']
          ]
        }
      }
    ],
    keyPoints: [
      '録画ありクラスは出席率が10ポイント下がる一方、期末試験の平均点は5点高いというトレードオフをどう解釈するか。',
      'プライバシーや質問のしやすさへの配慮（質疑応答部分をカットする等）に触れると説得力が増す。'
    ],
    paraphrases: [
      'revisit complex explanations at their own pace → review difficult material whenever needed',
      'lowers in-person attendance → reduces the number of students attending in person',
      'hesitate to ask candid questions → feel reluctant to speak openly'
    ],
    modelEssay: 'Universities should make online recordings available for compulsory lectures while adopting simple measures to preserve live classroom participation. Although recording can slightly lower attendance, its educational benefits clearly outweigh the drawbacks.\n\nFirst, lecture recordings significantly improve student learning outcomes. According to the faculty study, courses offering recordings achieved an average final exam score five points higher than live-only classes, even though attendance dropped from 86 percent to 76 percent. As Text 1 explains, being able to pause and replay difficult sections is especially valuable for non-native speakers and students recovering from illness.\n\nAdmittedly, Text 2 raises valid concerns that fewer students in the hall may weaken class interaction and make learners reluctant to ask questions on camera. Nevertheless, universities can address both issues effectively. Instructors can stop recording during open Q&A sessions to protect student privacy and include brief in-class quizzes or group tasks to reward live attendance.\n\nIn summary, providing recorded lectures with thoughtful rules for discussion time improves fairness and academic achievement without sacrificing classroom engagement. (180 words)',
    modelJa: '大学は対面の授業参加を維持する簡潔な工夫を講じつつ、必修講義のオンライン録画配信を導入すべきである。録画は出席率をやや下げる可能性があるものの、教育的利点が欠点を明確に上回る。\n第一に、講義録画は学習成果を大きく高める。学部の調査では、出席率が86%から76%へ下がったにもかかわらず、録画あり科目の期末平均点は対面のみの科目より5点高かった。資料1が述べる通り、難しい箇所を一時停止・再生できる点は留学生や体調不良の学生にとって特に有益である。\n確かに資料2は、出席減による議論の停滞や録画下での質問へのためらいという妥当な懸念を挙げている。しかし両課題は対策可能である。教員は質疑応答の時間に録画を止めてプライバシーを守り、短い小テストやグループワークで対面参加を促せる。\nまとめると、議論時間の配慮を伴う講義録画の提供は、授業の活気を損なわずに公平性と学力を高める。',
    rubric: [
      '課題達成：録画の利点・出席率と試験スコアの比較データ・懸念点への対策が整理されているか',
      '構成：導入・本論・結論の流れが明確で読みやすいか',
      '語数・言い換え：180〜220語程度で、資料の表現を適切に言い換えているか',
      '文法・語彙：比較表現や譲歩（Although / Admittedly等）が正確に使えているか'
    ]
  }
];
